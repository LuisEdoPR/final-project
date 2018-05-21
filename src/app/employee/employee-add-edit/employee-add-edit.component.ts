import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EmployeeInterface } from './../model/employee-interface';
import { AbstractControl, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule, MatSelectModule } from '@angular/material';
import { ProjectInterface } from '../../project/model/project-interface';
import { ResourceService } from './../../shared/resource.service';

@Component({
	selector: 'app-employee-add-edit',
	templateUrl: './employee-add-edit.component.html',
	styleUrls: [ './employee-add-edit.component.scss' ]
})
export class EmployeeAddEditComponent implements OnInit {
	employeeId: string;
	name: string;
	age: number;
	birthday: string;
	email: string;
	phone: string;
	company: string;
	favoriteColor: string;
	projectId: number;
	projects: ProjectInterface[];

	title = 'Creación de nuevo empleado';

	constructor(
		private resourceService: ResourceService,
		private router: Router,
		private route: ActivatedRoute
	) {
		this.employeeId = this.route.snapshot.paramMap.get('id');
		if (this.employeeId) {
			this.title = 'Modificación de empleado';
			this.loadEmployee(this.employeeId);
		}

		resourceService
			.getResource<ProjectInterface>('api/projects')
			.forEach((list) => (this.projects = list.slice()));
	}

	nameFormControl = new FormControl('', [ Validators.required ]);
	birthdayFormControl = new FormControl('', [ Validators.required ]);
	emailFormControl = new FormControl('', [ Validators.required, Validators.email ]);
	phoneFormControl = new FormControl('', [ Validators.required ]);
	companyFormControl = new FormControl('', [ Validators.required ]);
	favoriteColorFormControl = new FormControl('', [ Validators.required ]);

	onClickSave() {
		const name = this.name.trim();
		const age = this.calculateAge();
		const birthday = this.birthday;
		const email = this.email;
		const phone = this.phone;
		const company = this.company;
		const favoriteColor = this.favoriteColor;
		const id = +this.employeeId;
		const projectId = this.projectId;
		if (this.employeeId) {
			this.resourceService
				.update('api/employees', {
					id,
					name,
					age,
					birthday,
					email,
					phone,
					company,
					favoriteColor,
					projectId
				} as EmployeeInterface)
				.subscribe();
		} else {
			this.resourceService
				.add('api/employees', {
					name,
					age,
					birthday,
					email,
					phone,
					company,
					favoriteColor,
					projectId
				} as EmployeeInterface)
				.subscribe();
		}
		this.router.navigate([ '/employee' ]);
	}

	calculateAge() {
		const timeDiff = Math.abs(Date.now() - new Date(this.birthday).getTime());
		return Math.floor(timeDiff / (1000 * 3600 * 24) / 365);
	}

	loadEmployee(employeeId: string) {
		this.resourceService
			.getDetailResource<EmployeeInterface>('api/employees/' + employeeId)
			.subscribe((Employee) => {
				this.name = Employee.name;
				this.age = Employee.age;
				this.birthday = Employee.birthday;
				this.email = Employee.email;
				this.phone = Employee.phone;
				this.company = Employee.company;
				this.favoriteColor = Employee.favoriteColor;
				this.projectId = Employee.projectId;
			});
	}

	ngOnInit() {}
}
