'use strict';

import {IModelBase} from '../lib/model-base';
import {ValidatorBase} from '../lib/validator-base';
import {ValidationRuleFactory} from '../lib/validation-rule-factory';

export interface IClient extends IModelBase {
	forename: string;
	surname: string;
	dob: Date;
};

export class ClientValidator extends ValidatorBase<IClient> {
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

	public validate(entity: IClient): boolean {
		return super.validate(entity);
	}
};
