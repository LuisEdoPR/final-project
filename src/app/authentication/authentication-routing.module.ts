import { UserComponent } from './user/user.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: '',
				children: [
					{ path: '', component: LoginComponent },
					{ path: 'signup', component: SignUpComponent },
					{ path: 'user', component: UserComponent },
					{ path: 'user/:id', component: UserDetailComponent }
				]
			}
		])
	],
	exports: [ RouterModule ]
})
export class AuthenticationRoutingModule {}
