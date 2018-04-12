import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { ExportboardComponent } from '../components/exportboard/exportboard.component';

import { ReactiveFormsModule } from '@angular/forms'; 

import { DashboardService } from '../services/dashboard.service';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule
    ],
    exports: [
        DashboardComponent,
        ExportboardComponent
    ],
    declarations: [
        DashboardComponent,
        ExportboardComponent
    ],
    providers: [
        DashboardService
    ]
})
export class EncargosModule {

}