import { forEach } from '@angular/router/src/utils/collection';
import { Component, OnInit } from '@angular/core';
import { ProjectInterface } from '../model/project-interface';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ResourcesService } from '../../shared/resource.service';
import { EmployeeInterface } from '../../user/model/employee-interface';
import { pluck } from 'rxjs/operators';

@Component({
	selector: 'app-project-detail',
	templateUrl: './project-detail.component.html',
	styleUrls: [ './project-detail.component.scss' ]
})
export class ProjectDetailComponent implements OnInit {
	projectId: string;
	projectDetail: ProjectInterface;
	listEmployees: EmployeeInterface[] = [];
	hideEmployees = true;
	textButton = 'Mostrar Empleados';

	constructor(
		private route: ActivatedRoute,
		private http: HttpClient,
		resourcesService: ResourcesService
	) {
		this.projectId = this.route.snapshot.paramMap.get('id');
		resourcesService
			.getDetailResource<ProjectInterface>('api/projects/' + this.projectId)
			.subscribe((project) => (this.projectDetail = project));

		resourcesService
			.getResource<EmployeeInterface>('api/employees/?projectId=' + this.projectId)
			.forEach((list) => (this.listEmployees = list.slice()));
	}

	onClickShowEmployees() {
		this.hideEmployees = !this.hideEmployees;
		if (this.hideEmployees) {
			this.textButton = 'Mostrar Empleados';
		} else {
			this.textButton = 'Ocultar Empleados';
		}
	}

	ngOnInit() {}
}

export interface employeeToProject {
	idEmployee: number;
	idProject: number;
}
