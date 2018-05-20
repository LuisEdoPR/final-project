import { HttpClient } from '@angular/common/http';
import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
	hideError = true;
	genericPassword = '1234';
	user: string;
	password: string;
	hide = true;

	constructor(private router: Router) {}

	onClickLogin() {
		this.hideError = true;
		if (this.genericPassword === this.password) {
			AppComponent.setLogged(true);
			this.router.navigate([ 'user' ]);
		} else {
			this.hideError = false;
		}
	}

	ngOnInit() {}
}
