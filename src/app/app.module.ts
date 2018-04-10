import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';

// Feature modules
import { EncargosModule } from './feature/encargos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    EncargosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
