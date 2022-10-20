import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CajaGrandeComponent } from './caja-grande/caja-grande.component';
import { CajaPComponent } from './caja-p/caja-p.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CajaGrandeComponent,
    CajaPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
