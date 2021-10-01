import { DetalleproductoComponent } from './componentes/tienda/productos/detalleproducto/detalleproducto.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index.component';
import { TiendaComponent } from './componentes/tienda/tienda.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,

    children: [
      {
        path: '',
        redirectTo: 'Zigmainflables/inicio',
        pathMatch: 'prefix',
      },


      { path: 'inicio', component: InicioComponent },
      { path: 'nosotros', component: NosotrosComponent },
      { path: 'tienda', component: TiendaComponent },
      { path: 'tienda/:id', component: DetalleproductoComponent },
    ],

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
