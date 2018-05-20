import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserComponent } from './user.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddEditComponent } from './user-add-edit/user-add-edit.component';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: '',
				children: [
					{
						path: '',
						component: UserComponent
					},
					{
						path: 'add',
						component: UserAddEditComponent
					},
					{
						path: 'add/:id',
						component: UserAddEditComponent
					},
					{
						path: ':id',
						component: UserDetailComponent
					}
				]
			}
		])
	],
	providers: [],
	exports: [ RouterModule ]
})
export class UserRoutingModule {}
