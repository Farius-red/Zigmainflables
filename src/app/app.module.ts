import { MaterialModule } from './modulos/material/material.module';

import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// modulos

import { IndexModule } from './modulos/index/index.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    IndexModule,
    BrowserAnimationsModule,

  ],

  providers: [CoreModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
