import { ProjectInterface } from './../project/model/project-interface';
import { EmployeeInterface } from './model/employee-interface';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ResourcesService } from '../shared/resource.service';
import { Sort } from '@angular/material';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: [ './user.component.scss' ]
})
export class UserComponent implements OnInit {
	employees: EmployeeInterface[];

	constructor(
		private route: ActivatedRoute,
		private http: HttpClient,
		private resourcesService: ResourcesService
	) {
		resourcesService
			.getResource<EmployeeInterface>('api/employees')
			.forEach((list) => (this.employees = list.slice()));
	}

	ngOnInit(): void {}

	onClickDeleteEmpleado(id: number) {
		this.resourcesService.delete('api/employees/' + id).subscribe();
		this.employees = this.employees.filter((employee) => employee.id !== id);
	}

	sortData(sort: Sort) {
		const data = this.employees.slice();
		if (!sort.active || sort.direction === '') {
			this.employees = data;
			return;
		}

		this.employees = data.sort((a, b) => {
			const isAsc = sort.direction === 'asc';
			switch (sort.active) {
				case 'id':
					return compare(+a.id, +b.id, isAsc);
				case 'name':
					return compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
				case 'age':
					return compare(+a.age, +b.age, isAsc);
				case 'company':
					return compare(+a.company, +b.company, isAsc);
				default:
					return 0;
			}
		});
	}
}

function compare(a, b, isAsc) {
	return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
