import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { ExportboardComponent } from '../components/exportboard/exportboard.component';

import { ReactiveFormsModule } from '@angular/forms'; 
import { FormsModule } from '@angular/forms';

import { DashboardService } from '../services/dashboard.service';
import { SharedDataService } from '../services/shareddata.service';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
        FormsModule
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
        DashboardService,
        SharedDataService
    ]
})
export class EncargosModule {

}