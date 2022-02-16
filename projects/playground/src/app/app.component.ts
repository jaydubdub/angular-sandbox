import { Component } from '@angular/core';
import { RestrictRole, Roles } from 'projects/roles/src/public-api';
import { Confirmable } from './decorators/confirmable/confirmable.decorator';

@Component({
  selector: 'ng-pg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Roles()
  public userRoles!: string[];

  constructor() {
  }

  @Confirmable({
    data: {
      title: 'Are you sure you want to do that?',
      message: 'You might not like the result.',
      confirmBtnText: 'YUP!'
    }
  })
  public confirm(event: Event): boolean {
    console.log(`The action was confirmed!`);
    return true;
  }

  public confirmInvalid(event: Event): void {
    this.onConfirmInvalid();
  }

  @RestrictRole(['super-admin'])
  @Confirmable({
    data: {
      title: 'Are you sure you want to do that?',
      message: 'You might not like the result.',
      confirmBtnText: 'YUP!'
    }
  })
  private onConfirmInvalid(): boolean {
    return true;
  }
}
