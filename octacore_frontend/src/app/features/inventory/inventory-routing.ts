// src/app/features/inventory/inventory-routing.ts
import { Routes } from '@angular/router';
import { InventoryListComponent } from './components/inventory-list/inventory-list.component';
import { InventoryAddComponent } from './components/inventory-add/inventory-add.component';
import { InventoryDetailComponent } from './components/inventory-detail/inventory-detail.component';

export const inventoryRoutes: Routes = [
  { path: '', component: InventoryListComponent },
  { path: 'add', component: InventoryAddComponent },
  { path: ':id', component: InventoryDetailComponent }
];
