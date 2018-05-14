import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourcesService } from './resource.service';

@NgModule({
	imports: [ CommonModule ],
	declarations: [],
	providers: [ ResourcesService ],
	exports: [ CommonModule ]
})
export class SharedModule {}
