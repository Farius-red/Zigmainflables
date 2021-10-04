export interface Producto {
    id: string;
    descripcion: string;
    nombre: string;
    color: string;
    medidas: string;
    precio: number;
    imagen: string;
}

export interface ProductosBD {

    id: string
    image: string,
    title: string,
    price: number,
    description: string,
}
export interface Categoria {
    id: string;
    nombreCategoria: string;
}
