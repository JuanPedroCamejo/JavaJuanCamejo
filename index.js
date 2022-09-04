
alert("Ingrese la opcion del producto que desea llevar, para salir ingrese 0");
let seleccionarProductos = Number(prompt( "1-remera $850 2-jean $2500 3-calzado $3500 4-campera $3700 "));
let seleccionarCantidad;
let total = 0;

const cantidad = (cant, precio) => {
    return cant * precio
}

while (seleccionarProductos != 0){
    switch (seleccionarProductos) {
        case "1":
            seleccionarCantidad= Number(prompt("el producto seleccionado es remera, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 850)
            break;
        case "2":
            seleccionarCantidad = Number(prompt("el producto seleccionado es jean, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 2500)
            break;
        case "3":
            seleccionarCantidad = Number(prompt("el producto seleccionado es calzado, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 3500)
            break;
        case "4":
            seleccionarCantidad = Number(prompt("el producto seleccionado es campera, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 3700)
            break;
            
        default:
            break;
    }
    seleccionarProductos = Number(prompt( "1-remera $850 2-jean $2500 3-calzado $3500 4-campera $3700 "))
}




alert("el total de la compra es de: " + total);


