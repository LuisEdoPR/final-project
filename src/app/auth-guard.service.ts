import { AppComponent } from './app.component';
import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanLoad {
	constructor(private router: Router) {}

	canLoad(ROUTE: Route) {
		if (!AppComponent.getLogged()) {
			this.router.navigate([ '/page-not-found' ]);
		}
		return AppComponent.getLogged();
	}
}
