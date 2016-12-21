import { Injectable } from '@angular/core';
import { IModelBase, IValidator } from '../shared/lib';

@Injectable()
export class ValidatorFactory {
	public getInstance = <TEntity extends IModelBase, TValidator extends IValidator<TEntity>>(
		validatorType: { new (): TValidator; }
	): TValidator => {
		return new validatorType();
	};
}
