import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductosService } from 'src/app/core/servicios/productos/productos.service';
import { Producto, ProductosBD } from 'src/app/modelos/producto.model';

@Component({
  selector: 'app-detalleproducto',
  templateUrl: './detalleproducto.component.html',
  styleUrls: ['./detalleproducto.component.css']
})
export class DetalleproductoComponent implements OnInit {

  productsinB!: ProductosBD;
  producto: any;
  constructor(private route: ActivatedRoute, private productosService: ProductosService) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      (params: Params) => {
        const idProduct = params.id;
        this.fetchProduct(idProduct);
      })
  }

  fetchProduct(id: string) {
    this.productosService.getproductosBDid(id).subscribe(product => {

      this.productsinB = product;

      console.log(this.productsinB);
    })

  }

}
