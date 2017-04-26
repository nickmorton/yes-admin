import { IUser, IUserVisit } from '../../../public/shared/models';

export interface IUserBusinessRules {
	updateLastVisited(user: IUser): IUser;
}

export class UserBusinessRules implements IUserBusinessRules {
	public updateLastVisited(user: IUser): IUser {
		user.lastVisited = null;
		if (user.visits && user.visits.length > 0) {
			const maxDate = Math.max(user.visits.map.apply((v: IUserVisit) => v.date));
			if (maxDate > 0) {
				user.lastUpdated = new Date(maxDate);
			}
		}

		return user;
	}
}
