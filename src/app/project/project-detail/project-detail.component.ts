import { Component, OnInit } from '@angular/core';
import { ProjectInterface } from '../model/project-interface';
import { ActivatedRoute } from '@angular/router';
import { ResourceService } from '../../shared/resource.service';
import { EmployeeInterface } from '../../employee/model/employee-interface';

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
	icon = 'expand_more';

	constructor(private route: ActivatedRoute, resourceService: ResourceService) {
		this.projectId = this.route.snapshot.paramMap.get('id');
		resourceService
			.getDetailResource<ProjectInterface>('api/projects/' + this.projectId)
			.subscribe((project) => (this.projectDetail = project));

		resourceService
			.getResource<EmployeeInterface>('api/employees/?projectId=' + this.projectId)
			.forEach((list) => (this.listEmployees = list.slice()));
	}

	onClickShowEmployees() {
		this.hideEmployees = !this.hideEmployees;
		if (this.hideEmployees) {
			this.textButton = 'Mostrar Empleados';
			this.icon = 'expand_more';
		} else {
			this.textButton = 'Ocultar Empleados';
			this.icon = 'expand_less';
		}
	}

	ngOnInit() {}
}
