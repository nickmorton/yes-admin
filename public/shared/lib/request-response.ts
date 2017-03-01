import { IModelBase } from './model-base';

export interface IRequest<TData> {
	data: TData;
}

export interface IPagedRequest<TCriteria> {
	// Search params are always strings.
	skip: string | number;
	limit: string | number;
	criteria?: TCriteria;
	[index: string]: any;
}

export interface IResponse<TEntity extends IModelBase> {
	entity: TEntity;
}

export interface IPagedResponse<TEntity> {
	entities: Array<TEntity>;
}
