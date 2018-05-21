import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { AppComponent } from '../../app.component';
import { MatSidenav } from '@angular/material';

@Component({
	selector: 'my-nav',
	templateUrl: './my-nav.component.html',
	styleUrls: [ './my-nav.component.css' ]
})
export class MyNavComponent {
	@ViewChild('drawer') drawer: MatSidenav;
	isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
	constructor(private breakpointObserver: BreakpointObserver) {}

	getLogged() {
		return AppComponent.getLogged();
	}

	close() {
		this.drawer.close();
	}
}
