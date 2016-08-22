import {IIndividualBase} from './individual-base';
import {ValidatorBase} from '../lib/validator-base';
import {ValidationRuleFactory} from '../lib/validation-rule-factory';
import {IssueCode} from './enums/issue-code';
import {JobSearchFrequencyCode} from './enums/job-search-frequency-code';
import {CrisisSupportCode} from './enums/crisis-support-code';
import {FamilySupportCode} from './enums/family-support-code';

export interface IUser extends IIndividualBase {
	visits: Array<IUserVisit>;
	hasCurrentCV: boolean;
	hasSkillsToFindJob: boolean;
	isSearchingForJob: boolean;
	jobSearchFrequency: JobSearchFrequencyCode;
	jobInterviewsInLastMonth: number;
	familySupport: FamilySupportCode;
	crisisSupport: Array<CrisisSupportCode>;
};

export interface IUserVisit {
	date: Date;
	wasByAppointment: boolean;
	issue: IssueCode;
};

export class UserValidator extends ValidatorBase<IUser> {
	constructor() {
		super([
			{
				propertyName: 'name', rules: [
					ValidationRuleFactory.required(),
					ValidationRuleFactory.maxLength(64),
				],
			},
		]);
	};

	public validate(entity: IUser): boolean {
		return super.validate(entity);
	}
};
