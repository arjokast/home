import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DayoneComponent } from './components/dayone/dayone.component';
import { DaytwoComponent } from './components/daytwo/daytwo.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dayone', component: DayoneComponent },
  { path: 'daytwo', component: DaytwoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
