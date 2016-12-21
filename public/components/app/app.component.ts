import { Component } from '@angular/core';

@Component({
	selector: 'yes-admin-app',
	moduleId: module.id,
	styleUrls: ['app.style.css'],
	templateUrl: 'app.template.html',
})
export class AppComponent {
	constructor() {
		console.log('App component initialised');
	};
}
