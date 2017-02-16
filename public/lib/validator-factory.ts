import { Injectable } from '@angular/core';
import { ValidatorFn, Validators } from '@angular/forms';
import { IModelBase, IPropertyValidationRules, IValidationRule, IValidator, ValidatorType } from '../shared/lib';

@Injectable()
export class ValidatorFactory {
	public getNgValidators = <TEntity extends IModelBase, TValidator extends IValidator<TEntity>>(
		validator: { new (): TValidator; }
	): Map<string, Array<ValidatorFn>> => {
		const validatorInstance: TValidator = new validator();
		const propertyValidatorFns: Map<string, Array<ValidatorFn>> = new Map<string, Array<ValidatorFn>>();

		validatorInstance.propertyRules.forEach((propertyRule: IPropertyValidationRules<TEntity>) => {
			const validatorFns: Array<ValidatorFn> = propertyRule.rules
				.map((rule: IValidationRule<TEntity>) => this.resolveNgValidator(rule))
				.filter((fn: ValidatorFn) => fn);

			if (validatorFns.length > 0) {
				propertyValidatorFns.set(propertyRule.propertyName, validatorFns);
			}
		});

		return propertyValidatorFns;
	};

	private resolveNgValidator = <TEntity extends IModelBase, TValidator extends IValidationRule<TEntity>>(
		validatorInstance: TValidator
	): ValidatorFn => {
		switch (validatorInstance.validatorType) {
			case ValidatorType.minLength:
				const min: number = validatorInstance.params.get('min');
				return Validators.minLength(min);

			case ValidatorType.maxLength:
				const max: number = validatorInstance.params.get('max');
				return Validators.maxLength(max);

			case ValidatorType.required:
				return Validators.required;

			default:
				return null;
		}
	};
}
