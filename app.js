/*const contenedorProductos = document.getElementById('contenedor-productos')*/

const contenedorCarrito = document.getElementById('carrito-contenedor')

const botonVaciar = document.getElementById('vaciar-carrito')

const contadorCarrito = document.getElementById('contadorCarrito')


const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')



//INYECTANDO EL HTML
/*stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src=${producto.img} alt= "">
    <h3>${producto.nombre}</h3>
    <p>${producto.desc}</p>
    <p>Talle: ${producto.talle}</p>
    <p class="precioProducto">Precio:$ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
    `
    contenedorProductos.appendChild(div)

    
    const boton = document.getElementById(`agregar${producto.id}`)

    boton.addEventListener('click', () => {
        //esta funcion ejecuta agregar carrito con la id del producto
        agregarAlCarrito(producto.id)
        
    })
})*/



//AGREGAR AL CARRITO
const agregarAlCarrito = (prodId) => {

    //PARA AUMENTAR LA CANTIDAD Y QUE NO SE REPITA
    const existe = carrito.some (prod => prod.id === prodId) 

    if (existe){ 
        const prod = carrito.map (prod => { 
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { 
        const item = nuevaCopia.find((prod) => prod.id === prodId)
        carrito.push(item)
    }
    
    actualizarCarrito() 
}


const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item) 

    carrito.splice(indice, 1) 
    actualizarCarrito() 
    console.log(carrito)
}

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = "" 
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito.appendChild(div)
        
        localStorage.setItem('carrito', JSON.stringify(carrito))

    })
    
    contadorCarrito.innerText = carrito.length 
    console.log(carrito)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
    

}

Swal.fire({
    title: 'ADIDAS!',
    text: 'Expresando tu estilo.',
    imageUrl: 'https://i.pinimg.com/originals/41/ca/4b/41ca4b80bab9e9bdb26c25abec46b960.jpg',
    imageWidth: 300,
    imageHeight: 400,
    imageAlt: 'Custom image',
})

const cargarProductos = async() => {
    try{
        const respuesta = await fetch(`./data.json`);

        console.log(respuesta);

        if(respuesta.status === 200){
            const datos = await respuesta.json();
            console.log(datos.productos)
        } else if(respuesta.status === 401){
            console.log(`Este nombre no condice`);
        } else if(respuesta.status === 404){
            console.log(`No se cuenta con referido producto`)
        }



    } catch(error){
        console.log(error);
    }
}

cargarProductos();



let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})



const contenedorProductos = document.getElementById('contenedor-productos')
const contenedor = document.querySelector("contenedor-productos");

function contenedorproductos() {
fetch(`./data.json`)
.then((respuesta) => respuesta.json())

.then((data) => {
    
    data.forEach((producto) => {
        let div = document.createElement('div')
        div.classList.add('producto')
        div.innerHTML = `
        <img src=${producto.img} alt= "">
        <h3>${producto.nombre}</h3>
        <p>${producto.desc}</p>
        <p>Talle: ${producto.talle}</p>
        <p class="precioProducto">Precio: ${producto.precio}</p>
        <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
        `;

        


        contenedorProductos.appendChild(div)

        const boton = document.getElementById(`agregar${producto.id}`)

    boton.addEventListener('click', () => {
        //esta funcion ejecuta agregar carrito con la id del producto
        agregarAlCarrito(producto.id)

        
    })
})
})
}


contenedorproductos();


const tabla = document.querySelector('#lista-productos tbody');

function listaProductos() {
    fetch(`./data.json`)
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la informaci??n
        .then(data => {
            data.forEach(productos => {
                const row = document.createElement('tr');
                row.innerHTML += `
                    <td>${productos.id}</td>
                    <td>${productos.nombre}</td>
                    <td>${productos.precio}</td>
                    <td>${productos.talle}</td>
                `;
                tabla.appendChild(row);
                
            });

        }) // Aqu?? mostramos dicha informaci??n
        .catch(error => console.log('Hubo un error : ' + error.message))
}

listaProductos();

let nuevaCopia;

fetch(`./data.json`)
.then(response => response.json())
.then(data => {
    nuevaCopia = [...data];

    data.forEach(element => {

    })
    console.log("nueva copia", nuevaCopia);
})