import { ProjectInterface } from './../project/model/project-interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { tap } from 'rxjs/internal/operators/tap';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class ResourcesService {
	httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};

	constructor(private http: HttpClient) {}

	getResource<T>(url: string): Observable<T[]> {
		return this.http.get<T[]>(url).pipe(
			map((collection: T[]) => {
				return collection;
			})
		);
	}

	getEmployeesToProject<T>(url: string): Observable<T[]> {
		return this.http.get<T[]>(url).pipe(
			map((collection: T[]) => {
				return collection;
			})
		);
	}

	getDetailResource<T>(url: string): Observable<T> {
		return this.http.get<T>(url);
	}

	getDetailProjectToEmployee<T>(url: string): Observable<T> {
		return this.http.get<T>(url);
	}

	add<T>(url: string, object: T): Observable<T> {
		return this.http
			.post<T>(url, object, this.httpOptions)
			.pipe(catchError(this.handleError<T>('add object')));
	}

	delete<T>(url: string): Observable<T> {
		return this.http
			.delete<T>(url, this.httpOptions)
			.pipe(catchError(this.handleError<T>('delete object')));
	}

	update<T>(url: string, object: T): Observable<any> {
		return this.http
			.put(url, object, this.httpOptions)
			.pipe(catchError(this.handleError<T>('update')));
	}

	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.log('${operation} failed: ${error.message}');
			return of(result as T);
		};
	}
}
