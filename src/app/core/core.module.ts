import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import * as routes from '../routing/routes';

@NgModule({
    imports: [
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes.AppRoutes, {
            enableTracing: true
        })
    ],
    exports: [
        RouterModule
    ]
})
export class CoreModule {

}