import { ResourcesService } from './../../shared/resource.service';
import { ProjectInterface } from './../model/project-interface';
import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AbstractControl } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

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
		private resourcesService: ResourcesService,
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
			this.resourcesService
				.update('api/projects', {
					id,
					name,
					clientName
				} as ProjectInterface)
				.subscribe();
		} else {
			this.resourcesService
				.add('api/projects', { name, clientName } as ProjectInterface)
				.subscribe();
		}
		this.router.navigate([ '/project' ]);
	}

	loadProject(projectId: string) {
		this.resourcesService
			.getDetailResource<ProjectInterface>('api/projects/' + projectId)
			.subscribe((project) => {
				this.name = project.name;
				this.clientName = project.clientName;
			});
	}

	ngOnInit() {}
}
