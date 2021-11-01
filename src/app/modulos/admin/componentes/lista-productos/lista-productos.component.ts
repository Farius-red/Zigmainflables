import { ProductosBD } from 'src/app/modelos/producto.model';
import { ProductosService } from 'src/app/core/servicios/productos/productos.service';
import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements AfterViewInit {


  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'title', 'precio', 'acciones'];

  productos: ProductosBD[] = [];

  constructor(private productosService: ProductosService) {

  }

  ngOnInit(): void {
    this.listarProductos();
  }

  ngAfterViewInit(): void {
  }

  listarProductos() {
    this.productosService.getProductosBD().subscribe(product => {
      this.productos = product;
      console.log(this.productos);
    });
  }


  eliminarProducto(id: string) {
    this.productosService.eliminarProducto(id).subscribe(rta => {
      if (rta) {
        this.listarProductos();
      }
    })
  }
}
