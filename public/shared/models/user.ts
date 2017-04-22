import { IIndividualBase, IssueCode, JobSearchFrequencyCode, CrisisSupportCode, FamilySupportCode } from './';
import { ValidatorBase, ValidationRuleFactory } from '../lib';

export interface IUser extends IIndividualBase {
	crisisSupport: Array<CrisisSupportCode>;
	familySupport: FamilySupportCode;
	hasCurrentCV: boolean;
	hasSkillsToFindJob: boolean;
	isSearchingForJob: boolean;
	jobInterviewsInLastMonth: number;
	jobSearchFrequency: JobSearchFrequencyCode;
	visits: Array<IUserVisit>;
}

export interface IUserVisit {
	date: Date;
	wasByAppointment: boolean;
	issue: IssueCode;
}

export class UserValidator extends ValidatorBase<IUser> {
	constructor() {
		super([
			{
				propertyName: 'forename',
				rules: [
					ValidationRuleFactory.required(),
					ValidationRuleFactory.maxLength(64),
				],
			},
			{
				propertyName: 'surname',
				rules: [
					ValidationRuleFactory.required(),
					ValidationRuleFactory.maxLength(64),
				],
			},
		]);
	}

	public validate(entity: IUser): boolean {
		return super.validate(entity);
	}
}
