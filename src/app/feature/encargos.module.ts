import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from '../components/dashboard/dashboard.component';

import { ReactiveFormsModule } from '@angular/forms'; 

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule
    ],
    exports: [
        DashboardComponent
    ],
    declarations: [
        DashboardComponent
    ]
})
export class EncargosModule {

}