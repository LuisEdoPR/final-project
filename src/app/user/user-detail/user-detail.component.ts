import { ResourcesService } from './../../shared/resource.service';
import { EmployeeInterface } from './../model/employee-interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';

@Component({
	selector: 'app-user-detail',
	templateUrl: './user-detail.component.html',
	styleUrls: [ './user-detail.component.scss' ]
})
export class UserDetailComponent implements OnInit {
	userId: string;
	employeeDetail: EmployeeInterface;
	projectId: number;
	projectName: string;

	constructor(
		private route: ActivatedRoute,
		private http: HttpClient,
		private resourcesService: ResourcesService
	) {
		this.userId = this.route.snapshot.paramMap.get('id');
		this.http.get<EmployeeInterface>('api/employees/' + this.userId).subscribe((user) => {
			this.employeeDetail = user;

			this.resourcesService
				.getDetailResource('api/projects/' + user.projectId)
				.subscribe((project: EmployeeInterface) => {
					this.projectId = project.id;
					this.projectName = project.name;
				});
		});
	}

	ngOnInit() {}
}
