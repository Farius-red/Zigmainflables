import { Producto } from "src/app/modelos/producto.model";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProductosService } from "src/app/core/servicios/productos/productos.service";

@Component({
  selector: "app-productos-form",
  templateUrl: "./productos-form.component.html",
  styleUrls: ["./productos-form.component.css"],
})
export class ProductosFormComponent {
  productosForm!: FormGroup;

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    this.productosForm = this.productosService.ProductosForm;
  }

  crearProducto(): void {
    debugger;
      if (this.productosForm.valid) {
        const producto: Producto[] = [];

        producto.push(this.productosForm.value);
        if (producto.length > 0) {
          producto.forEach((element) => {
            const product: Producto = {
              id: element.id,
              color: element.color,
              descripcion: element.descripcion,
              nombre: element.nombre,
              medidas: element.medidas,
              imagen: element.imagen,
              precio: element.precio,
            };
            this.productosService.createProductos(product).subscribe((e) => {
              console.log('se creo con exito');
              this.productosForm.reset();
            });
          });
        }
      }
     
  }
}
