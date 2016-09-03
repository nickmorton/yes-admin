import {Injectable} from '@angular/core';
import {IModelBase} from '../shared/lib/model-base';
import {IValidator} from '../shared/lib/validator-base';

@Injectable()
export class ValidatorFactory {
	public getInstance = <TEntity extends IModelBase, TValidator extends IValidator<TEntity>>(
		validatorType: { new(): TValidator; }
	):  TValidator => {
		return new validatorType();
	};
}
