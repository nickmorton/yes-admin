import {IValidationRule} from './validator-base';
import {IModelBase} from './model-base';

export class ValidationRuleFactory {
	public static required<TEntity extends IModelBase>(): IValidationRule<TEntity> {
		return {
			failedMessage: 'Value required',
			validate: (entity: TEntity, propertyName: string): boolean => {
				const value: any = entity[propertyName];
				return value !== undefined && value !== null && value !== '';
			},
		};
	};

	public static maxLength<TEntity extends IModelBase>(max: number): IValidationRule<TEntity> {
		return {
			failedMessage: `Maximum allowed length is ${max}`,
			validate: (entity: TEntity, propertyName: string): boolean => {
				const value: any = entity[propertyName];
				return value !== undefined && value !== null && value.length <= max;
			},
		};
	};
}
