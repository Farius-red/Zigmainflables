import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductosFormComponent } from './componentes/productos-form/productos-form.component';
import { DaskboardComponent } from './daskboard.component';
import { ListaProductosComponent } from './componentes/lista-productos/lista-productos.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';




@NgModule({
  declarations: [

    ProductosFormComponent,
    DaskboardComponent,
    ListaProductosComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,

  ]
})
export class AdminModule { }
