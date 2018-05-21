import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EmployeeInterface } from './model/employee-interface';
import { Observable } from 'rxjs';
import { ResourceService } from '../shared/resource.service';
import { Sort } from '@angular/material';

@Component({
	selector: 'app-employee',
	templateUrl: './employee.component.html',
	styleUrls: [ './employee.component.scss' ]
})
export class EmployeeComponent implements OnInit {
	employees: EmployeeInterface[];

	constructor(private resourcesService: ResourceService) {
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
