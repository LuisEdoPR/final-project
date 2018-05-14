import { SharedModule } from './shared/shared.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Router, RouterModule } from '@angular/router';
import { TransfersModule } from './transfers/transfers.module';
import { TransferComponent } from './transfers/transfer/transfer.component';
import { AuthenticacionGuard } from './authentication-guard.service';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [ AppComponent, UserDetailComponent ],
	imports: [
		BrowserModule,
		TransfersModule,
		HttpClientModule,
		SharedModule,
		RouterModule.forRoot([
			{ path: '', component: TransferComponent },
			{
				path: 'authentication',
				loadChildren: '../app/authentication/authentication.module#AuthenticationModule',
				canLoad: [ AuthenticacionGuard ]
			}
		]),
		BrowserAnimationsModule
	],
	providers: [ AuthenticacionGuard ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
