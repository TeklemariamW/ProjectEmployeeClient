import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectModule } from './project/project.module';
import { EmployeeModule } from './employee/employee.module';
import { InternalServerComponent } from './error-pages/internal-server/internal-server.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    NotFoundComponent,
    InternalServerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CollapseModule.forRoot(),
    ProjectModule,
    EmployeeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
