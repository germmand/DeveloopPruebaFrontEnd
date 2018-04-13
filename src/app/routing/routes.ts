import { Routes } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { ExportboardComponent } from '../components/exportboard/exportboard.component';

export const AppRoutes : Routes = [{
    path: 'Dashboard',
    component: DashboardComponent
}, {
    path: 'Exportboard',
    component: ExportboardComponent
}, {
    path: '',
    redirectTo: '/Dashboard',
    pathMatch: 'full'
}];