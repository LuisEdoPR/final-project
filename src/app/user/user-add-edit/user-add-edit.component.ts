import { EmployeeInterface } from './../model/employee-interface';
import { ResourcesService } from './../../shared/resource.service';
import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AbstractControl } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProjectInterface } from '../../project/model/project-interface';
import { MatSelectModule } from '@angular/material/select';

@Component({
	selector: 'app-user-add-edit',
	templateUrl: './user-add-edit.component.html',
	styleUrls: [ './user-add-edit.component.scss' ]
})
export class UserAddEditComponent implements OnInit {
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
		private resourcesService: ResourcesService,
		private router: Router,
		private route: ActivatedRoute
	) {
		this.employeeId = this.route.snapshot.paramMap.get('id');
		if (this.employeeId) {
			this.title = 'Modificación de empleado';
			this.loadEmployee(this.employeeId);
		}

		resourcesService
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
			this.resourcesService
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
			this.resourcesService
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
		this.router.navigate([ '/user' ]);
	}

	calculateAge() {
		const timeDiff = Math.abs(Date.now() - new Date(this.birthday).getTime());
		return Math.floor(timeDiff / (1000 * 3600 * 24) / 365);
	}

	loadEmployee(employeeId: string) {
		this.resourcesService
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
