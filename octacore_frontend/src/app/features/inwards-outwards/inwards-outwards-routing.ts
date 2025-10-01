// src/app/features/inwards-outwards/inwards-outwards-routing.ts
import { Routes } from '@angular/router';
import { InwardsListComponent } from './components/inwards-list/inwards-list.component';
import { OutwardsListComponent } from './components/outwards-list/outwards-list.component';

export const inoutRoutes: Routes = [
  { path: 'inwards', component: InwardsListComponent },
  { path: 'outwards', component: OutwardsListComponent }
];
