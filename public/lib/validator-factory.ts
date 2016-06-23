import {Injectable} from '@angular/core';
import {IValidator, IModelBase} from '../shared/models/model-base';

@Injectable()
export class ValidatorFactory {
	public getInstance = <TEntity extends IModelBase, TValidator extends IValidator<TEntity>>(
		validatorType: { new(): TValidator; }
	):  TValidator => {
		return new validatorType();
	};
}
