import { Component, OnInit } from '@angular/core';
import { DYNAMIC_COMPONENT, IDynamicComponentBase } from '../dynamic-component/dynamic-component.token';

@Component({
  selector: 'ng-pg-example-component',
  templateUrl: './example-component.component.html',
  styleUrls: ['./example-component.component.scss'],
  providers: [
    {
      provide: DYNAMIC_COMPONENT,
      useExisting: ExampleComponentComponent
    }
  ]
})
export class ExampleComponentComponent implements OnInit, IDynamicComponentBase {

  constructor() { }

  ngOnInit(): void {
  }

  public onLoadComponent() {
    console.log(`component loaded!`);
  }

}
