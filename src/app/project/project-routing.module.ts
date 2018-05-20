import { ProjectAddEditComponent } from './project-add-edit/project-add-edit.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: '',
				children: [
					{
						path: '',
						component: ProjectComponent
					},
					{
						path: 'add',
						component: ProjectAddEditComponent
					},
					{
						path: 'add/:id',
						component: ProjectAddEditComponent
					},
					{
						path: ':id',
						component: ProjectDetailComponent
					}
				]
			}
		])
	],
	providers: [],
	exports: [ RouterModule ]
})
export class ProjectRoutingModule {}
