import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLoaderComponent } from './component-loader.component';
import { ComponentLoaderTarget } from './component-loader-target.directive';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    ComponentLoaderComponent,
    ComponentLoaderTarget
  ],
  exports: [
    ComponentLoaderComponent,
    ComponentLoaderTarget
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class ComponentLoaderModule { }
