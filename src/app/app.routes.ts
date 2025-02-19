import { Routes } from '@angular/router';
import { DetailComponent } from './post/detail/detail.component';
import { HomeComponent } from './post/home/home.component';

export const routes: Routes = [
    {
        path: 'home', component: HomeComponent,children: [
            {path: ':id',component:DetailComponent}
        ]
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
