import {IModelBase} from '../lib';
import {EmploymentStatusCode, EthnicityCode, HousingStatusCode} from './';

export interface IIndividualBase extends IModelBase {
	dob: Date;
	employmentStatus: EmploymentStatusCode;
	ethnicity: EthnicityCode;
	gender: 'M' | 'F';
	housingStatus: HousingStatusCode;
	isDobApproximate: boolean;
	name: string;
};
