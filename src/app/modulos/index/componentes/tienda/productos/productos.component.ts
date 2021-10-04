import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductosService } from 'src/app/core/servicios/productos/productos.service';
import { Producto, ProductosBD } from 'src/app/modelos/producto.model';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  @Output() productoCliked: EventEmitter<any> = new EventEmitter();
  productos: ProductosBD[] = [];
  productosSinfireb: Producto[] = [];
  constructor(private productoService: ProductosService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  addCard(id: string) {

    this.productoCliked.emit(id);

  }

  getAllProducts() {
    this.productosSinfireb = this.productoService.getProductos();
    this.productoService.getProductosBD()
      .subscribe(res => this.productos = res);
  }

}
