
class Producto{
    constructor(id, nombre, precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

const productos = [
    new Producto(1, "buzo", 3000),
    new Producto(2, "remera", 1500),
    new Producto(3, "jean", 5000),
    new Producto(4, "zapatillas", 6000),
];

//Filtrando los productos de acuerdo a un maximo y minimo del precio indicado

let precio = parseInt(prompt("Ingrese el precio minimo del productos a comprar"));
let filtrados = productos.filter(item => item.precio > precio);
filtrados.forEach(item => {
    let mensaje =`
        Id: ${item.id}
        Nombre: ${item.nombre}
        Precio: ${item.precio}
    `;
alert(mensaje);
})

let precioMaximo = parseInt(prompt("Ingrese el precio maximo del producto"));
let filtradosMaximo = productos.filter(item => item.precio < precio);
filtradosMaximo.forEach(item => {
    let mensaje =`
        Id: ${item.id}
        Nombre: ${item.nombre}
        Precio: ${item.precio}
    `;
alert(mensaje);
})


//Se establece el precio del producto individual, segun el producto seleccionado

let nombre = prompt("Ingrese el nombre del producto");
let producto = productos.find(item => item.nombre === nombre);

let mensaje = `El producto ${nombre} tiene un precio de ${producto.precio}`;
alert(mensaje);


/*Se establece el precio a pagar 
segun la cantidad y tipo de productos seleccionados*/

alert("Ingrese la opcion del producto que desea llevar, para salir ingrese 0")
let seleccionarProductos = Number(prompt( "1-buzo $3000 2-remera $1500 3-jean $5000 4-Zapatillas $6000 "))
let seleccionarCantidad;
let total = 0;

const cantidad = (cant, precio) => {
  return cant * precio
}

while (seleccionarProductos != 0) {
    switch (seleccionarProductos) {
    case 1:
        seleccionarCantidad= Number(prompt("el producto seleccionado es buzo, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 3000)
        break;
    case 2:
        seleccionarCantidad = Number(prompt("el producto seleccionado es remera, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 1500)
        break;
    case 3:
        seleccionarCantidad = Number(prompt("el producto seleccionado es jean, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 5000)
        break;
    case 4:
        seleccionarCantidad = Number(prompt("el producto seleccionado es Zapatillas, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 6000)
        break;

        default:
        break;
}
seleccionarProductos = Number(prompt( "1-buzo $3000 2-remera $1500 3-jean $5000 4-Zapatillas $6000 "))
}

alert("el total de la compra es de: " + total)

//Estableciendo el precio del envio segun la forma de pago

const envio = () => {
    if (total >= 10000) {
    alert("El envio es gratuito")
    }else{
    total += 1000
    alert("el costo de envio es de 1000, el total es: " + total)
    }
}

envio()

//Estableciendo metodos de pago

const metodoDePago = () => {
let metodo = prompt("ingrese el metodo de pago, tarjeta o efectivo" )
if (metodo == "tarjeta") {
    total *= 1,1
    consola. log(total);
}else if ( metodo == "efectivo") {
    total -= 1000
    alert("tenes un descuento de 1000, el total es:" + total)
}

}

metodoDePago()






