import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-not-found',
	templateUrl: './not-found.component.html',
	styleUrls: [ './not-found.component.scss' ]
})
export class NotFoundComponent implements OnInit {
	seconds = 3;
	constructor(private router: Router) {}

	ngOnInit() {
		const interval = setInterval(() => {
			this.seconds -= 1;
			setTimeout(() => {
				this.router.navigate([ '/authentication' ]);
				clearInterval(interval);
			}, 2000);
		}, 1000);
	}
}
