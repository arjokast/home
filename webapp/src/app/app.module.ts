import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { DayoneComponent } from './archive-components/dayone/dayone.component';
import { DaytwoComponent } from './archive-components/daytwo/daytwo.component';
import { UpperComponent } from './components/upper/upper.component';
import { LowerComponent } from './components/lower/lower.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ArchiveComponent,
    DayoneComponent,
    DaytwoComponent,
    UpperComponent,
    LowerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
