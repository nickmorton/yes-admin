'use strict';

import {IModelBase, ValidatorBase, IValidationRules} from './model-base';

export interface IClient extends IModelBase {
	forename: string;
	surname: string;
	dob: Date;
};

export class ClientValidator extends ValidatorBase<IClient> {
	public rules: Array<IValidationRules> = [];
	public validate(entity: IClient): boolean {
		return super.validate(entity);
	}
};
