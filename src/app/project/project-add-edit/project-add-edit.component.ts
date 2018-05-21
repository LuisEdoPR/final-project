import { ResourceService } from './../../shared/resource.service';
import { ProjectInterface } from './../model/project-interface';
import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AbstractControl, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-project-add-edit',
	templateUrl: './project-add-edit.component.html',
	styleUrls: [ './project-add-edit.component.scss' ]
})
export class ProjectAddEditComponent implements OnInit {
	name: string;
	clientName: string;
	projectId: string;
	title = 'Creación de nuevo proyecto';

	constructor(
		private resourceService: ResourceService,
		private router: Router,
		private route: ActivatedRoute
	) {
		this.projectId = this.route.snapshot.paramMap.get('id');
		if (this.projectId) {
			this.title = 'Modificación de proyecto';
			this.loadProject(this.projectId);
		}
	}

	nameFormControl = new FormControl('', [ Validators.required ]);
	clientNameFormControl = new FormControl('', [ Validators.required ]);

	onClickSave() {
		const name = this.name.trim();
		const clientName = this.clientName.trim();
		const id = +this.projectId;
		if (this.projectId) {
			this.resourceService
				.update('api/projects', {
					id,
					name,
					clientName
				} as ProjectInterface)
				.subscribe();
		} else {
			this.resourceService
				.add('api/projects', { name, clientName } as ProjectInterface)
				.subscribe();
		}
		this.router.navigate([ '/project' ]);
	}

	loadProject(projectId: string) {
		this.resourceService
			.getDetailResource<ProjectInterface>('api/projects/' + projectId)
			.subscribe((project) => {
				this.name = project.name;
				this.clientName = project.clientName;
			});
	}

	ngOnInit() {}
}
