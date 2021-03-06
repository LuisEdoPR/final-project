import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { CdkTableModule } from '@angular/cdk/table';
import {
	MatBottomSheetModule,
	MatButtonModule,
	MatButtonToggleModule,
	MatDatepickerModule,
	MatIconModule,
	MatInputModule,
	MatSelectModule,
	MatSidenavModule,
	MatSortModule,
	MatTableModule
} from '@angular/material';

if (environment.production) {
	enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).catch((err) => console.log(err));
