import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';

@Injectable()
export class AuthenticacionGuard implements CanLoad {
	canLoad(ROUTE: Route) {
		return true;
	}
}
