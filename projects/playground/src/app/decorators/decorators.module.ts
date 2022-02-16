import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmDialogComponent } from './confirmable/confirm-dialog/confirm-dialog.component';


@NgModule({
	declarations: [
		ConfirmDialogComponent
	],
	imports: [
		CommonModule,
		MatDialogModule,
		MatButtonModule
	],
	exports: [
		ConfirmDialogComponent
	]
})
export class DecoratorsModule {
	public static injector: Injector;

	constructor(injector: Injector) {
		DecoratorsModule.injector = injector;
	}
}
