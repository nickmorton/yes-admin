import { IModelBase } from './model-base';

export enum ValidatorType {
	unknown = 0,
	required,
	minLength,
	maxLength
}

export interface IValidationRule<TEntity extends IModelBase> {
	validate: (entity: TEntity, propertyName: string) => boolean;
	failedMessage: string;
	validatorType: ValidatorType;
	params?: Map<string, any>;
};

export interface IPropertyValidationRules<TEntity extends IModelBase> {
	propertyName: string;
	rules: Array<IValidationRule<TEntity>>;
};

export interface IBrokenRule {
	propertyName: string;
	failedMessages?: Array<string>;
};

export interface IValidator<TEntity extends IModelBase> {
	brokenRules: Array<IBrokenRule>;
	propertyRules: Array<IPropertyValidationRules<TEntity>>;
	validate(entity: TEntity): boolean;
};

export abstract class ValidatorBase<TEntity extends IModelBase> implements IValidator<TEntity> {
	public brokenRules: Array<IBrokenRule> = [];

	constructor(public propertyRules: Array<IPropertyValidationRules<TEntity>>) {
	};

	public validate(entity: TEntity): boolean {
		this.propertyRules.forEach((propertyRule: IPropertyValidationRules<TEntity>) => {
			const failedMessages: Array<string> = new Array<string>();
			propertyRule.rules.forEach((rule: IValidationRule<TEntity>) => {
				if (!rule.validate(entity, propertyRule.propertyName)) {
					failedMessages.push(rule.failedMessage);
				}
			});

			if (failedMessages.length > 0) {
				this.brokenRules.push({
					propertyName: propertyRule.propertyName,
					failedMessages: failedMessages,
				});
			}
		});

		return this.brokenRules.length === 0;
	};
}
