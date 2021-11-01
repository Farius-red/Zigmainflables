
import { Producto } from "src/app/modelos/producto.model";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProductosService } from "src/app/core/servicios/productos/productos.service";

import { ProductosBD } from './../../../../modelos/producto.model';
import { ProductosService } from './../../../../core/servicios/productos/productos.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: "app-productos-form",
  templateUrl: "./productos-form.component.html",
  styleUrls: ["./productos-form.component.css"],
})
export class ProductosFormComponent {
  productosForm!: FormGroup;
public archivos: any =[]


  hasUnitNumber = false;

  states = [
    { name: 'Alabama', abbreviation: 'AL' },
    { name: 'Alaska', abbreviation: 'AK' },
    { name: 'American Samoa', abbreviation: 'AS' },
    { name: 'Arizona', abbreviation: 'AZ' },
    { name: 'Arkansas', abbreviation: 'AR' },
    { name: 'California', abbreviation: 'CA' },
    { name: 'Colorado', abbreviation: 'CO' },
    { name: 'Connecticut', abbreviation: 'CT' },
    { name: 'Delaware', abbreviation: 'DE' },
    { name: 'District Of Columbia', abbreviation: 'DC' },
    { name: 'Federated States Of Micronesia', abbreviation: 'FM' },
    { name: 'Florida', abbreviation: 'FL' },
    { name: 'Georgia', abbreviation: 'GA' },
    { name: 'Guam', abbreviation: 'GU' },
    { name: 'Hawaii', abbreviation: 'HI' },
    { name: 'Idaho', abbreviation: 'ID' },
    { name: 'Illinois', abbreviation: 'IL' },
    { name: 'Indiana', abbreviation: 'IN' },
    { name: 'Iowa', abbreviation: 'IA' },
    { name: 'Kansas', abbreviation: 'KS' },
    { name: 'Kentucky', abbreviation: 'KY' },
    { name: 'Louisiana', abbreviation: 'LA' },
    { name: 'Maine', abbreviation: 'ME' },
    { name: 'Marshall Islands', abbreviation: 'MH' },
    { name: 'Maryland', abbreviation: 'MD' },
    { name: 'Massachusetts', abbreviation: 'MA' },
    { name: 'Michigan', abbreviation: 'MI' },
    { name: 'Minnesota', abbreviation: 'MN' },
    { name: 'Mississippi', abbreviation: 'MS' },
    { name: 'Missouri', abbreviation: 'MO' },
    { name: 'Montana', abbreviation: 'MT' },
    { name: 'Nebraska', abbreviation: 'NE' },
    { name: 'Nevada', abbreviation: 'NV' },
    { name: 'New Hampshire', abbreviation: 'NH' },
    { name: 'New Jersey', abbreviation: 'NJ' },
    { name: 'New Mexico', abbreviation: 'NM' },
    { name: 'New York', abbreviation: 'NY' },
    { name: 'North Carolina', abbreviation: 'NC' },
    { name: 'North Dakota', abbreviation: 'ND' },
    { name: 'Northern Mariana Islands', abbreviation: 'MP' },
    { name: 'Ohio', abbreviation: 'OH' },
    { name: 'Oklahoma', abbreviation: 'OK' },
    { name: 'Oregon', abbreviation: 'OR' },
    { name: 'Palau', abbreviation: 'PW' },
    { name: 'Pennsylvania', abbreviation: 'PA' },
    { name: 'Puerto Rico', abbreviation: 'PR' },
    { name: 'Rhode Island', abbreviation: 'RI' },
    { name: 'South Carolina', abbreviation: 'SC' },
    { name: 'South Dakota', abbreviation: 'SD' },
    { name: 'Tennessee', abbreviation: 'TN' },
    { name: 'Texas', abbreviation: 'TX' },
    { name: 'Utah', abbreviation: 'UT' },
    { name: 'Vermont', abbreviation: 'VT' },
    { name: 'Virgin Islands', abbreviation: 'VI' },
    { name: 'Virginia', abbreviation: 'VA' },
    { name: 'Washington', abbreviation: 'WA' },
    { name: 'West Virginia', abbreviation: 'WV' },
    { name: 'Wisconsin', abbreviation: 'WI' },
    { name: 'Wyoming', abbreviation: 'WY' }
  ];

  constructor(private fb: FormBuilder, private productoSevice: ProductosService) { }

ngOnInit(): void {
    this.productosForm = this.productosService.ProductosForm;
  }


capturarImagen(event: any){
  const  archivoCapturado = event.target.files[0];
  this.archivos.push(archivoCapturado);
}

  crearProducto(): void {
    debugger;
      if (this.productosForm.valid) {
        const producto: Producto[] = [];
 console.log(this.productosForm.get('imagen')?.value)
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

  crearProducto() {
    const nuevoProducto: ProductosBD = {
      id: '2',
      description: 'probando',
      image: 'assents/lala/hola',
      price: 500.000,
      title: 'inflable recreativo'
    }

    this.productoSevice.crearProducto(nuevoProducto).subscribe(product => {
      console.log(product)
    })
  }

  actualizarProducto(id: string) {

    const actualizarProducto: Partial<ProductosBD> = {
      id: '3',
      description: 'probando',


    }
    this.productoSevice.actulizarProductp(id, actualizarProducto).subscribe(
      product => {
        console.log(product);
      }
    )
  }

  
}
