import { IModelBase } from './model-base';
import { IValidationRule, ValidationRuleType } from './validator-base';

export class ValidationRuleFactory {
	public static required<TEntity extends IModelBase>(): IValidationRule<TEntity> {
		return {
			failedMessage: 'Value required',
			validate: (entity: TEntity, propertyName: string): boolean => {
				const value: any = entity[propertyName];
				return value !== undefined && value !== null && value !== '';
			},
			ruleType: ValidationRuleType.required,
		};
	}

	public static maxLength<TEntity extends IModelBase>(max: number): IValidationRule<TEntity> {
		return {
			failedMessage: `Maximum allowed length is ${max}`,
			validate: (entity: TEntity, propertyName: string): boolean => {
				const value: any = entity[propertyName];
				return value !== undefined && value !== null && value.length <= max;
			},
			ruleType: ValidationRuleType.maxLength,
			params: new Map<string, number>().set('max', max),
		};
	}

	public static minLength<TEntity extends IModelBase>(min: number): IValidationRule<TEntity> {
		return {
			failedMessage: `Minimum allowed length is ${min}`,
			validate: (entity: TEntity, propertyName: string): boolean => {
				const value: any = entity[propertyName];
				return value === undefined || value === null || value.length < min;
			},
			ruleType: ValidationRuleType.minLength,
			params: new Map<string, number>().set('min', min),
		};
	}
}
