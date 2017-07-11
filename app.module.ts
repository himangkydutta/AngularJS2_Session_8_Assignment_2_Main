import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { LoginComponent } from './app.component';
import {EmployeeComponent} from './employee-app.component';
import {AppComponent} from './person-app.component';
import {MyserviceService} from './Services/myservice.service';

@NgModule({
  declarations: [
    EmployeeComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  //Services added through NgModule
  providers: [MyserviceService],
  bootstrap: [EmployeeComponent]
})
export class AppModule { }
