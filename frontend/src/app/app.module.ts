import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgQrScannerModule } from 'angular2-qrscanner';

import {NinjaResourceService} from './api/services/ninja-resource.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgQrScannerModule,

  ],
  providers: [
    NinjaResourceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
