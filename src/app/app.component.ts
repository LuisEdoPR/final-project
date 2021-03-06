import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	title = 'app';
	static logged = false;

	// para pruebas se deja en TRUE y que permita navegar sin pedir login, para activar la seguridad se pone en FALSE;
	static disabledSecurity = false;

	public static setLogged(logged: boolean) {
		this.logged = logged;
	}
	public static getLogged() {
		return this.logged || this.disabledSecurity;
	}
}
