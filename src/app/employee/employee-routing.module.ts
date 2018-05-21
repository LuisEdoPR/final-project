import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeComponent } from './employee.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeAddEditComponent } from './employee-add-edit/employee-add-edit.component';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: '',
				children: [
					{
						path: '',
						component: EmployeeComponent
					},
					{
						path: 'add',
						component: EmployeeAddEditComponent
					},
					{
						path: 'add/:id',
						component: EmployeeAddEditComponent
					},
					{
						path: ':id',
						component: EmployeeDetailComponent
					}
				]
			}
		])
	],
	providers: [],
	exports: [ RouterModule ]
})
export class EmployeeRoutingModule {}
