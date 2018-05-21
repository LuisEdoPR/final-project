import { Component, OnInit } from '@angular/core';
import { ProjectInterface } from './model/project-interface';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ResourceService } from '../shared/resource.service';
import { Sort } from '@angular/material';

@Component({
	selector: 'app-project',
	templateUrl: './project.component.html',
	styleUrls: [ './project.component.scss' ]
})
export class ProjectComponent implements OnInit {
	projects: ProjectInterface[];

	constructor(
		private route: ActivatedRoute,
		private http: HttpClient,
		private resourceService: ResourceService
	) {
		resourceService
			.getResource<ProjectInterface>('api/projects')
			.forEach((list) => (this.projects = list.slice()));
	}

	ngOnInit(): void {}

	onClickDeleteProject(id: number) {
		this.resourceService.delete('api/projects/' + id).subscribe();
		this.projects = this.projects.filter((project) => project.id !== id);
	}

	sortData(sort: Sort) {
		const data = this.projects.slice();
		if (!sort.active || sort.direction === '') {
			this.projects = data;
			return;
		}

		this.projects = data.sort((a, b) => {
			const isAsc = sort.direction === 'asc';
			switch (sort.active) {
				case 'id':
					return compare(+a.id, +b.id, isAsc);
				case 'name':
					return compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
				case 'clientName':
					return compare(a.clientName.toLowerCase(), b.clientName.toLowerCase(), isAsc);
				default:
					return 0;
			}
		});
	}
}

function compare(a, b, isAsc) {
	return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
