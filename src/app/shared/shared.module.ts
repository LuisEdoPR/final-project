import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceService } from './resource.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
	MatSidenavModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatToolbarModule,
	MatButtonModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		MatButtonModule,
		MatInputModule,
		BrowserModule,
		HttpClientModule,
		MatIconModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatSidenavModule,
		MatListModule
	],
	declarations: [],
	providers: [ ResourceService ],
	exports: [
		CommonModule,
		FormsModule,
		MatButtonModule,
		MatInputModule,
		BrowserModule,
		HttpClientModule,
		MatIconModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatSidenavModule,
		MatListModule
	]
})
export class SharedModule {}
