import { RouterModule, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { pluck } from 'rxjs/operators';
import { User } from './model/user.interface';
import { Observable } from 'rxjs';
import { ResourcesService } from '../../shared/resource.service';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: [ './user.component.scss' ]
})
export class UserComponent implements OnInit {
	urlUsers = 'https://jsonplaceholder.typicode.com/users';
	users$: Observable<User[]>;
	constructor(
		private route: ActivatedRoute,
		private http: HttpClient,
		private resourcesService: ResourcesService
	) {
		this.users$ = this.resourcesService.getResource<User>(this.urlUsers);
	}

	ngOnInit() {}
}
