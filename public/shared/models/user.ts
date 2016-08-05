'use strict';

import {IModelBase} from '../lib/model-base';
import {ValidatorBase} from '../lib/validator-base';
import {ValidationRuleFactory} from '../lib/validation-rule-factory';

export interface IUser extends IModelBase {
	forename: string;
	surname: string;
	dob: Date;
};

export class UserValidator extends ValidatorBase<IUser> {
	constructor() {
		super([
			{
				propertyName: 'surname', rules: [
					ValidationRuleFactory.required(),
					ValidationRuleFactory.maxLength(32),
				],
			},
		]);
	};

	public validate(entity: IUser): boolean {
		return super.validate(entity);
	}
};
