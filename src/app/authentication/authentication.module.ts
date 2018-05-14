import { AuthenticationRoutingModule } from './authentication-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';

@NgModule({
	imports: [ CommonModule, AuthenticationRoutingModule ],
	declarations: [ LoginComponent, SignUpComponent, UserComponent, UserDetailComponent ]
})
export class AuthenticationModule {}
