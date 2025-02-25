import { Routes } from '@angular/router';
import { DetailComponent } from './post/detail/detail.component';
import { HomeComponent } from './post/home/home.component';
import { RouteLayerComponent } from './material/route-layer/route-layer.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [{ path: ':id', component: DetailComponent }],
  },
  { path: 'material', component: RouteLayerComponent,children:[
    { path: 'module', loadChildren: () => import('./material/material.router').then(m => m.material_routes) },
  ] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
