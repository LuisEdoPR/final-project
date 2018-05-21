import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import {
	MatSelectModule,
	MatInputModule,
	MatButtonModule,
	MatFormFieldModule,
	MatIconModule,
	MatSortModule
} from '@angular/material';
import { NgModule } from '@angular/core';
import { EmployeeAddEditComponent } from './employee-add-edit/employee-add-edit.component';
import { EmployeeComponent } from './employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeRoutingModule } from './employee-routing.module';

@NgModule({
	imports: [
		CommonModule,
		EmployeeRoutingModule,
		MatButtonModule,
		MatSortModule,
		MatIconModule,
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule
	],
	declarations: [ EmployeeComponent, EmployeeDetailComponent, EmployeeAddEditComponent ],
	exports: []
})
export class EmployeeModule {}
