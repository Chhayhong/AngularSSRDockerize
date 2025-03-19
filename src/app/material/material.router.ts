// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { UploadImageComponent } from './upload-image/upload-image.component';

export const material_routes: Routes = [
  { path: 'datepicker', component: DatepickerComponent },
  {path: 'upload-image', component: UploadImageComponent}
  // Add more routes here
];

@NgModule({
  exports: [RouterModule]
})
export class AppRoutingModule { }