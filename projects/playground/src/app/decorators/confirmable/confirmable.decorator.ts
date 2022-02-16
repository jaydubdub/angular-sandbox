import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { DecoratorsModule } from "../decorators.module";
import { ConfirmDialogComponent } from "./confirm-dialog/confirm-dialog.component";


export function Confirmable(dialogOptions: MatDialogConfig) {
	return function (target: Object, key: string | symbol, descriptor: PropertyDescriptor) {
		const original = descriptor.value;

		descriptor.value = function (...args: any[]) {
			const dialog = DecoratorsModule.injector.get(MatDialog);
			let dialogRef;
			if (dialogOptions) {
				dialogRef = dialog.open(ConfirmDialogComponent, dialogOptions);
			} else {
				dialogRef = dialog.open(ConfirmDialogComponent);
			}
			

			dialogRef.afterClosed().subscribe((dismissed: any) => {
				if (dismissed) {
					const result = original.apply(this, args);
					dialog.ngOnDestroy();
					return result;
				} else {
					dialog.ngOnDestroy();
					return null;
				}
			});
		};

		return descriptor;
	};
}