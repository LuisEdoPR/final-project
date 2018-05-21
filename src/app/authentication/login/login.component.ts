import { UserInterface } from './../model/user-interface';
import { ResourceService } from './../../shared/resource.service';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule, MatTooltipModule } from '@angular/material';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
	hideError = true;
	user: string;
	password: string;
	hide = true;

	constructor(private router: Router, private resourceService: ResourceService) {}

	onClickLogin() {
		this.hideError = true;
		this.resourceService
			.getDetailResource<UserInterface[]>('api/users/?name=' + this.user)
			.subscribe((tmpUser) => {
				if (
					tmpUser != null &&
					tmpUser.length > 0 &&
					tmpUser[0].name === this.user &&
					tmpUser[0].password === this.password
				) {
					AppComponent.setLogged(true);
					this.router.navigate([ 'employee' ]);
				} else {
					this.hideError = false;
				}
			});
	}

	ngOnInit() {}
}
