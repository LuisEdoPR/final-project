import { Router } from '@angular/router';
import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-logout',
	templateUrl: './logout.component.html',
	styleUrls: [ './logout.component.scss' ]
})
export class LogoutComponent implements OnInit {
	constructor(private router: Router) {}

	onClickLogout() {
		AppComponent.logged = false;
		this.router.navigate([ '/authentication' ]);
	}

	ngOnInit() {}
}
