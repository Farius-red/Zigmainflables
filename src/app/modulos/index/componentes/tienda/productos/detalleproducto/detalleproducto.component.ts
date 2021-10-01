import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/modelos/producto.model';

@Component({
  selector: 'app-detalleproducto',
  templateUrl: './detalleproducto.component.html',
  styleUrls: ['./detalleproducto.component.css']
})
export class DetalleproductoComponent implements OnInit {

  productsinB!: Producto;
  producto: any;
  constructor(private route: ActivatedRoute,) { }

  ngOnInit(): void {
  }

  fetchProduct(id: string) {
  

    console.log(this.productsinB);

  }
}
