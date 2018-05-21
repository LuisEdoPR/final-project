import { CommonModule } from '@angular/common';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
	MatButtonModule,
	MatIconModule,
	MatSortModule,
	MatFormFieldModule,
	MatInputModule
} from '@angular/material';
import { NgModule } from '@angular/core';
import { ProjectAddEditComponent } from './project-add-edit/project-add-edit.component';
import { ProjectComponent } from './project.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectRoutingModule } from './project-routing.module';

@NgModule({
	imports: [
		CommonModule,
		ProjectRoutingModule,
		MatButtonModule,
		MatSortModule,
		MatIconModule,
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule
	],
	declarations: [ ProjectDetailComponent, ProjectComponent, ProjectAddEditComponent ],
	exports: []
})
export class ProjectModule {}
