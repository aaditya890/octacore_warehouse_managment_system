import { Routes } from '@angular/router';
import { AppRoutes } from './core/models/app.routes.constant';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
     { path: '', redirectTo: AppRoutes.DASHBOARD, pathMatch: 'full' },

  { path: AppRoutes.AUTH, loadChildren: () => import('./features/wms-auth/wms-auth-routing').then(m => m.authRoutes) },
  { path: AppRoutes.DASHBOARD, canActivate: [authGuard], loadChildren: () => import('./features/dashboard/dashboard-routing').then(m => m.dashboardRoutes) },
  { path: AppRoutes.INVENTORY, canActivate: [authGuard], loadChildren: () => import('./features/inventory/inventory-routing').then(m => m.inventoryRoutes) },
  { path: AppRoutes.PURCHASE_INDENTS, canActivate: [authGuard], loadChildren: () => import('./features/purchase-indents/purchase-indents-routing').then(m => m.purchaseIndentRoutes) },
  { path: AppRoutes.GATE_PASS, canActivate: [authGuard], loadChildren: () => import('./features/gate-pass/gate-pass-routing').then(m => m.gatepassRoutes) },
  { path: AppRoutes.INOUT, canActivate: [authGuard], loadChildren: () => import('./features/inwards-outwards/inwards-outwards-routing').then(m => m.inoutRoutes) },
  { path: AppRoutes.USER_MANAGEMENT, canActivate: [authGuard], loadChildren: () => import('./features/user-management/user-management-routing').then(m => m.userManagementRoutes) },
  { path: AppRoutes.REPORTS, canActivate: [authGuard], loadChildren: () => import('./features/wms-reports/wms-reports-routing').then(m => m.reportRoutes) },
  { path: AppRoutes.SETTINGS, canActivate: [authGuard], loadChildren: () => import('./features/wms-settings/wms-settings-routing').then(m => m.settingsRoutes) },

  { path: '**', redirectTo: AppRoutes.DASHBOARD }
];
