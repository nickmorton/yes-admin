import {IModelBase} from '../lib/model-base';
import {EmploymentStatusCode} from './enums/employment-status-code';
import {EthnicityCode} from './enums/ethnicity-code';
import {HousingStatusCode} from './enums/housing-status-code';

export interface IIndividualBase extends IModelBase {
	name: string;
	dob: Date;
	isDobApproximate?: boolean;
	gender: 'M' | 'F';
	ethnicity: EthnicityCode;
	housingStatus: HousingStatusCode;
	employmentStatus: EmploymentStatusCode;
};
