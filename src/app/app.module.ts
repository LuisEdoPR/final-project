import { ProjectModule } from './project/project.module';
import { LogoutComponent } from './authentication/logout/logout.component';
import { EmployeeModule } from './employee/employee.module';
import { DataMockService } from './shared/mock-services/data-mock.service';
import { SharedModule } from './shared/shared.module';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { Router, RouterModule } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { MyNavComponent } from './shared/my-nav/my-nav.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { LoginComponent } from './authentication/login/login.component';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './shared/not-found/not-found.component';

@NgModule({
	declarations: [
		AppComponent,
		NotFoundComponent,
		MyNavComponent,
		LoginComponent,
		LogoutComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		RouterModule.forRoot([
			{ path: '', redirectTo: '/authentication', pathMatch: 'full' },
			{ path: 'authentication', component: LoginComponent },
			{ path: 'authentication/logout', component: LogoutComponent },
			{
				path: 'employee',
				loadChildren: '../app/employee/employee.module#EmployeeModule',
				canLoad: [ AuthGuard ]
			},
			{
				path: 'project',
				loadChildren: '../app/project/project.module#ProjectModule',
				canLoad: [ AuthGuard ]
			},
			{ path: '**', component: NotFoundComponent }
		]),
		HttpClientInMemoryWebApiModule.forRoot(DataMockService)
	],
	providers: [ AuthGuard, DataMockService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
