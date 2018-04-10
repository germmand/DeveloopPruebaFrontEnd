import { Routes } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';

export const AppRoutes : Routes = [{
    path: 'Dashboard',
    component: DashboardComponent
}, {
    path: '',
    redirectTo: '/Dashboard',
    pathMatch: 'full'
}];