import { NgModule, ModuleWithProviders } from '@angular/core';

import { ValidatorFactory } from './validator-factory';

@NgModule({
})
export class LibModule {
	public static forRoot(): ModuleWithProviders {
		return {
			ngModule: LibModule,
			providers: [
				ValidatorFactory,
			],
		};
	};
}
