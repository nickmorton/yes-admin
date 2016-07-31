import {IModelBase} from './model-base';

export interface IRequest<TData> {
	data: TData;
}

export interface IPagedRequest<TCriteria> {
	skip: number;
	limit: number;
	criteria?: TCriteria;
}

export interface IResponse<TEntity extends IModelBase> {
	entity: TEntity;
}

export interface IPagedResponse<TEntity> {
	entities: Array<TEntity>;
	skip: number;
	limit: number;
}
