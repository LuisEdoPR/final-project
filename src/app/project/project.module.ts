import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectComponent } from './project.component';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectAddEditComponent } from './project-add-edit/project-add-edit.component';
import { MatButtonModule, MatSortModule, MatIconModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

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
