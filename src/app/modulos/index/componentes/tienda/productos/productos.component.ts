import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/modelos/producto.model';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  @Output() productoCliked: EventEmitter<any> = new EventEmitter();
  productos!: Producto[];
  productosSinfireb!: Producto[];
  constructor() { }

  ngOnInit(): void {
  }

  addCard(id: string) {
    console.log('agrege al carrito');
    this.productoCliked.emit();
  }

}
