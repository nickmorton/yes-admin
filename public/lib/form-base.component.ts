import { SimpleChange } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseComponent } from './base.component';
import { INgValidator } from './ng-validator-factory';

export abstract class FormBaseComponent extends BaseComponent {
	protected abstract form: FormGroup;
	protected abstract validators: Map<string, Array<INgValidator>>;
	protected abstract formErrors: { [key: string]: Array<string> };

	protected onValueChanged(change?: SimpleChange) {
		if (!this.form) {
			return;
		}

		Object.keys(this.form.controls).forEach((controlName: string) => {
			const control = this.form.get(controlName);
			if (control.dirty && control.invalid) {
				const validators: Array<INgValidator> = this.validators.get(controlName);
				this.formErrors[controlName] = Object.keys(control.errors).map<string>((errorKey: string) => {
					const validator: INgValidator = validators.find((v: INgValidator) => v.name === errorKey);
					return validator.errorMessage;
				});

			} else {
				this.formErrors[controlName] = null;
			}
		});
	}
}
