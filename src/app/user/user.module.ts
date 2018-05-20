import { UserRoutingModule } from './user-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserAddEditComponent } from './user-add-edit/user-add-edit.component';
import { MatButtonModule, MatSortModule, MatIconModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
	imports: [
		CommonModule,
		UserRoutingModule,
		MatButtonModule,
		MatSortModule,
		MatIconModule,
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule
	],
	declarations: [ UserComponent, UserDetailComponent, UserAddEditComponent ],
	exports: []
})
export class UserModule {}
