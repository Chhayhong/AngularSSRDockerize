// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatepickerComponent } from './datepicker/datepicker.component';

export const material_routes: Routes = [
  { path: 'datepicker', component: DatepickerComponent },
  // Add more routes here
];

@NgModule({
  exports: [RouterModule]
})
export class AppRoutingModule { }