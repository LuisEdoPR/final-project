import { ResourceService } from './../../shared/resource.service';
import { EmployeeInterface } from './../model/employee-interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
	selector: 'app-employee-detail',
	templateUrl: './employee-detail.component.html',
	styleUrls: [ './employee-detail.component.scss' ]
})
export class EmployeeDetailComponent implements OnInit {
	employeeId: string;
	employeeDetail: EmployeeInterface;
	projectId: number;
	projectName: string;

	constructor(private route: ActivatedRoute, private resourcesService: ResourceService) {
		this.employeeId = this.route.snapshot.paramMap.get('id');
		resourcesService
			.getDetailResource<EmployeeInterface>('api/employees/' + this.employeeId)
			.subscribe((employee) => {
				this.employeeDetail = employee;
				this.resourcesService
					.getDetailResource('api/projects/' + employee.projectId)
					.subscribe((project: EmployeeInterface) => {
						this.projectId = project.id;
						this.projectName = project.name;
					});
			});
	}

	ngOnInit() {}
}
