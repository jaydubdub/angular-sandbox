import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DecoratorsModule } from './decorators/decorators.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RolesModule } from 'projects/roles/src/lib/roles.module';
import { RolesService } from 'projects/roles/src/lib/roles.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DecoratorsModule,
    RolesModule.forRoot(['admin', 'schedule-manager', 'branch-manager']),
    MatButtonModule,
    MatCardModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [
    RolesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
