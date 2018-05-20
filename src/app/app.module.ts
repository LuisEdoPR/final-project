import { ProjectModule } from './project/project.module';
import { MatButtonModule } from '@angular/material/button';
import { LogoutComponent } from './authentication/logout/logout.component';
import { UserModule } from './user/user.module';
import { DataMockService } from './mock-services/data-mock.service';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { OverlayModule } from '@angular/cdk/overlay';
import { AppComponent } from './app.component';
import { Router, RouterModule } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import {
	MatToolbarModule,
	MatSidenavModule,
	MatIconModule,
	MatListModule,
	MatInputModule
} from '@angular/material';
import { NotFoundComponent } from './not-found/not-found.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { LoginComponent } from './authentication/login/login.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
		OverlayModule,
		FormsModule,
		MatButtonModule,
		MatInputModule,
		BrowserModule,
		HttpClientModule,
		SharedModule,
		MatIconModule,
		RouterModule.forRoot([
			{ path: '', redirectTo: '/authentication', pathMatch: 'full' },
			{ path: 'authentication', component: LoginComponent },
			{ path: 'authentication/logout', component: LogoutComponent },
			{
				path: 'user',
				loadChildren: '../app/user/user.module#UserModule',
				canLoad: [ AuthGuard ]
			},
			{
				path: 'project',
				loadChildren: '../app/project/project.module#ProjectModule',
				canLoad: [ AuthGuard ]
			},
			{ path: '**', component: NotFoundComponent }
		]),
		BrowserAnimationsModule,
		LayoutModule,
		MatToolbarModule,
		MatSidenavModule,
		MatListModule,
		HttpClientInMemoryWebApiModule.forRoot(DataMockService)
	],
	providers: [ AuthGuard, DataMockService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
