import {IApiConfig} from '../api.config';
import {IModelBase} from '../../public/shared/lib/model-base';
import {IValidator} from '../../public/shared/lib/validator-base';
import {Observable, Subject} from 'rxjs/rx';
import {MongoClient, ObjectID, MongoError, Db, Collection, InsertOneWriteOpResult, UpdateWriteOpResult, WriteError} from 'mongodb';

export interface IRepository<TEntity extends IModelBase> {
	getById(id: string): Observable<TEntity>;
	getAll(): Observable<Array<TEntity>>;
	add(entity: TEntity): Observable<TEntity>;
	update(entity: TEntity): Observable<TEntity>;
};

export abstract class RepositoryBase<TEntity extends IModelBase> implements IRepository<TEntity> {
	constructor(
		private config: IApiConfig,
		private collectionName: string,
		private validator: IValidator<TEntity>) {
	};

	public abstract getById(id: string): Observable<TEntity>;
	public abstract getAll(): Observable<Array<TEntity>>;

	public add(entity: TEntity): Observable<TEntity> {
		if (this.validator.validate(entity)) {
			return this.dbExecute<TEntity>((collection: Collection, subject: Subject<TEntity>) => {
				collection.insertOne(entity, (err: WriteError, result: InsertOneWriteOpResult) => {
					if (err) {
						throw new Error(err.errmsg);
					}

					entity._id = result.insertedId.toHexString();
					subject.next(entity);
					subject.complete();
				});
			});
		}

		throw new Error('Validation failed');
	};

	public update(entity: TEntity): Observable<TEntity> {
		if (this.validator.validate(entity)) {
			return this.dbExecute<TEntity>((collection: Collection, subject: Subject<TEntity>) => {
				const id: ObjectID = new ObjectID(entity._id);
				delete entity._id;
				collection.replaceOne({ _id: id }, entity, (err: WriteError, result: UpdateWriteOpResult) => {
					if (err) {
						throw new Error(err.errmsg);
					}

					console.log(result.toString());
					entity._id = id.toHexString();
					subject.next(entity);
					subject.complete();
				});
			});
		}

		throw new Error('Validation failed');
	};

	protected dbExecute<TResult>(callback: (collection: Collection, subject: Subject<TResult>) => void): Subject<TResult> {
		const subject: Subject<TResult> = new Subject<TResult>();
		MongoClient.connect(this.config.dbUrl, (err: MongoError, db: Db): void => {
			callback(db.collection(this.collectionName), subject);
		});

		return subject;
	};
}
