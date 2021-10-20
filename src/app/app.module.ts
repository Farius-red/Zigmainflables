
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { FormsModule, } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// modulos

import { IndexModule } from './modulos/index/index.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from './modulos/admin/admin.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    IndexModule,
    BrowserAnimationsModule,
    AdminModule,
    HttpClientModule,
  ],

  providers: [CoreModule,],
  bootstrap: [AppComponent]
})
export class AppModule { }
