
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria, Producto, ProductosBD } from 'src/app/modelos/producto.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class ProductosService {


  ProductosBD: ProductosBD[] = [];

  categorias: Categoria[] = [
    { id: '1', nombreCategoria: 'Recreativos' },
    { id: '2', nombreCategoria: 'Publicitarios' },
    { id: '3', nombreCategoria: 'Skydancers' },
  ];

  productosSinBase: Producto[] = [
    {
      id: '10',
      descripcion:
        'Inflable recreativo que cuenta con dos deslizaderos y en su parte de atras una zona de brinco ',
      nombre: 'Barco inflable',
      color: 'A definir por el cliente',
      medidas: '9.50 mts fondo x  4.5 mts ancho x 7 mts de alto',
      precio: 6300000,
      imagen:
        'assets/images/imgZigma/productosInflables/barcoInflable.jpg',
    },

    {
      id: '11',
      descripcion:
        'Es un inflable Publicitario excelente calidad diseño a comodidad del cliente',
      nombre: ' Araña Publicitaria inflable',
      color: 'A definir por el cliente',
      medidas: 'a convenir con el cliente',
      precio: 1800000,
      imagen:
        'assets/images/imgZigma/productosInflables/arañaInflable.jpg',
    },
    {
      id: '12',
      descripcion:
        'Cuenta con zona de brindo dos golpeadores y un mini tobogan',
      nombre: 'Castillo Tobogan 4x4 ',
      color: 'A definir por el cliente',
      medidas: ' 4mts fondo x 4mts Ancho ',
      precio: 3500000,
      imagen:
        'assets/images/imgZigma/productosInflables/castilloInflable4x4Tobogan.jpg',
    },

    {
      id: '13',
      descripcion:
        'cuenta con doble tobogan y una zona de brinco muy atractivo para los niños',
      nombre: 'Barco Pirata ',
      color: 'A definir por el cliente',
      medidas: '6 mts alto x 7 mts fondo x 5 mts ancho',
      precio: 5500000,
      imagen:
        'assets/images/imgZigma/productosInflables/barcoPirataInflableAmarillo.jpg',
    },
    {
      id: '14',
      descripcion:
        'castillo recreativo en forma de palmera muy llamativo para los niños',
      nombre: 'Castillo palmeras',
      color: 'A definir por cliente',
      medidas: '4 ancho x 4 fondo x 2.5 alto',
      precio: 33000000,
      imagen:
        'assets/images/imgZigma/productosInflables/castilloInflablePalmeras.jpg',
    },

    {
      id: '15',
      descripcion: 'Inflable recreativo muy llamativo tipo castillo tobogan ',
      nombre: 'Castillo Tobogan Inflable ',
      color: 'A escoger ',
      medidas: '5,3mts ancho   X 4,5fondo   X 4,0m alto ',
      precio: 4700000,
      imagen:
        'assets/images/imgZigma/productosInflables/castilloTobogan.jpg',
    },
    {
      id: '16',
      descripcion:
        'Castillo recreativo con diseño de cocodrillo muy llamativo para los niños',
      nombre: 'Castillo Cocodrillo',
      color: 'A escoger ',
      medidas: '4mts x 4mts x 2.5 mts alto ',
      precio: 3300000,
      imagen:
        'assets/images/imgZigma/productosInflables/castilloCocodrillo.jpg',
    },

    {
      id: '17',
      descripcion:
        'un castillo para personas que buscan diversion para sus hijos  en casa ',
      nombre: 'Mini castillos',
      color: ' a escroger por el cliente',
      medidas: '2 mts x 2mts ',
      precio: 1800000,
      imagen:
        'assets/images/imgZigma/productosInflables/miniCastillo.jpg',
    },
    {
      id: '18',
      descripcion:
        'un oso tobogan infalble muy llamativo para los niños y personas cuenta con dos deslizadores ,zona de brinco',
      nombre: 'Tobogan Oso',
      color: 'A escoger',
      medidas: 'medidas 7mts alto x 4.5mts ancho x  6 fondo',
      precio: 5300000,
      imagen:
        'assets/images/imgZigma/productosInflables/osoInflable.jpg',
    },

    {
      id: '19',
      descripcion:
        'un tobogan inflable con pscina de pelotas 4 deslizadores y un tunel muy llamativo para los niños ',
      nombre: 'Tobogan Castillo Espiral ',
      color: 'A definir por el cliente',
      medidas: '6mts fondo x 4.5 mts ancho x 3.5 mts alto',
      precio: 4800000,
      imagen:
        'assets/images/imgZigma/productosInflables/toboganCastillo6x4.5.jpg',
    },
    {
      id: '20',
      descripcion:
        'inflables publicitarios tipo dummies formas escogibles por el cliente ',
      nombre: 'dummis publicitarios ',
      color: 'A definir por el cliente',
      medidas: '2 mts alto x diametro de forma',
      precio: 1500000,
      imagen:
        'assets/images/imgZigma/productosInflables/inflablesPublicitarios.jpg',
    },

    {
      id: '21',
      descripcion:
        'Tobogan inflable para niños y niñas cuenta con deslizadores, zona de brinco',
      nombre: 'Tobogan mixto ',
      color: 'A definir por el cliente',
      medidas: '4.5mts ancho x 4.5 alto x 5mts fondo ',
      precio: 45000000,
      imagen:
        'assets/images/imgZigma/productosInflables/ToboganInflable4.5ninosyninas.jpg',
    },
    {
      id: '22',
      descripcion:
        'un tobogan con entrada de cocodrillo dos deslizadores y zona de brinco ',
      nombre: 'Tobogan cocodrillo',
      color: 'A definir por el cliente',
      medidas: '4.5mts ancho x 4mts alto x 6mts fondo',
      precio: 4800000,
      imagen:
        'assets/images/imgZigma/productosInflables/toboganCocodrillo.jpg',
    },

    {
      id: '23',
      descripcion:
        'botellas inflables Publicitarias estos inflables son totalmente a escoger por el cliente ',
      nombre: 'Botellas Publicitarias Inflables',
      color: 'A definir por el cliente',
      medidas: '2mts alto x proporcion al diseño',
      precio: 1500000,
      imagen:
        'assets/images/imgZigma/productosInflables/inflablesPublicitarios.jpg',
    },
  ];

  constructor(private http: HttpClient) { }


  getProductos() {
    return this.productosSinBase;
  }


  Categorias() {
    return this.categorias;
  }


  getProductID(id: string) {
    return this.productosSinBase.find(item => id === item.id);
  }

  getProductosBD() {
    return this.http.get<ProductosBD[]>(`${environment.urlApi}/products/`);
  }

  getproductosBDid(id: string) {

    return this.http.get<ProductosBD>(`${environment.urlApi}/products/${id}`)
  }


  crearProducto(product: ProductosBD) {
    return this.http.post(`${environment.urlApi}/products/`, product);
  }

  actulizarProductp(id: String, changes: Partial<ProductosBD>) {
    return this.http.put(`${environment.urlApi}/products/${id}`, changes,);
  }

  eliminarProducto(id: string) {
    return this.http.delete(`${environment.urlApi}/products/${id}`)
  }
}