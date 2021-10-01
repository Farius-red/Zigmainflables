import { MaterialModule } from './../material/material.module';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { TarjetaComponent } from './componentes/tarjeta/tarjeta.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { TiendaComponent } from './componentes/tienda/tienda.component';
import { ProductosComponent } from './componentes/tienda/productos/productos.component';
import { DetalleproductoComponent } from './componentes/tienda/productos/detalleproducto/detalleproducto.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    IndexComponent,
    TarjetaComponent,
    InicioComponent,
    NosotrosComponent,
    TiendaComponent,
    ProductosComponent,
    DetalleproductoComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    SharedModule,
    RouterModule,
  ]
})
export class IndexModule { }
