import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/rx';

import {
	EmploymentStatusCode,
	EthnicityCode,
	FamilySupportCode,
	HousingStatusCode,
	IUser,
	JobSearchFrequencyCode,
} from '../../shared/models';
import { IRequest, IResponse, IPagedRequest, IPagedResponse } from '../../shared/lib';

@Injectable()
export class UserService {
	constructor(private http: Http) {
	};

	public get = (request: IPagedRequest<IUser>): Observable<IPagedResponse<IUser>> => {
		const searchParams: URLSearchParams = new URLSearchParams();
		Object.keys(request).forEach(
			(paramName: string) => searchParams.append(paramName, request[paramName])
		);

		return this.http.get('/api/users', { search: searchParams })
			.map((httpResponse: Response) => <IPagedResponse<IUser>>httpResponse.json());
	};

	public getById = (id: string): Observable<IResponse<IUser>> => {
		return this.http.get(`/api/users/${id}`)
			.map((res: Response) => <IResponse<IUser>>res.json());
	};

	public add = (request: IRequest<IUser>): Observable<IResponse<IUser>> => {
		return this.http.post('api/users', request)
			.map((res: Response) => <IResponse<IUser>>res.json());
	};

	public update = (request: IRequest<IUser>): Observable<IResponse<IUser>> => {
		return this.http.put('api/users', request)
			.map((res: Response) => <IResponse<IUser>>res.json());
	};

	public create = (): IUser => {
		return <IUser>{
			_id: null,
			crisisSupport: [],
			dob: null,
			employmentStatus: EmploymentStatusCode.unknown,
			ethnicity: EthnicityCode.unknown,
			familySupport: FamilySupportCode.unknown,
			forename: null,
			gender: 'F',
			hasCurrentCV: false,
			hasSkillsToFindJob: false,
			housingStatus: HousingStatusCode.unknown,
			isDobApproximate: true,
			isSearchingForJob: false,
			jobInterviewsInLastMonth: 0,
			jobSearchFrequency: JobSearchFrequencyCode.unknown,
			surname: null,
			visits: [],
		};
	};
}

			// // gender: 'M',
			// // ethnicity: 0,
			// // crisisSupport: [],
			// // familySupport: FamilySupportCode.unknown,
			// // hasCurrentCV: false,
			// // hasSkillsToFindJob: false,
			// // isSearchingForJob: false,
			// // jobInterviewsInLastMonth: 0,
			// // jobSearchFrequency: JobSearchFrequencyCode.unknown,
			// // name: '',
			// // dob: null,
			// // employmentStatus:
			// // visits: []
