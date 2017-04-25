import { IModelBase } from '../lib';
import { EmploymentStatusCode, EthnicityCode, HousingStatusCode } from './';

export type TGender = 'M' | 'F';

export interface IIndividualBase extends IModelBase {
	dob: Date;
	employmentStatus: EmploymentStatusCode;
	ethnicity: EthnicityCode;
	gender: TGender;
	housingStatus: HousingStatusCode;
	isDobApproximate: boolean;
	forename: string;
	surname: string;
}
