//Realizando suma

let numeros = parseInt(prompt("Ingrese un numero"));

for( let i = 0; i <= 15; i++){
    let suma = numeros + i;
    let salida = `${numeros} + ${i} = ${suma}`;

    alert(salida);
}

//Ingresando a un sitio mediante el nombre asignado

let entrada = prompt("Ingresar un nombre").toUpperCase();

while(entrada != "ESC" ){
    switch (entrada) { 
        case "NATALY":
            alert("BIENVENIDA NATALY");
            break;
        case "CARLOS":
            alert("BIENVENIDO CARLOS");
            break;
        case "JUAN":
            alert("BIENVENIDO JUAN");
                break;
        default:
                alert("NO ESTAS EN LA LISTA")
                break;
    }
    entrada = prompt("Ingresar un nombre").toUpperCase();
}

/*Mediante el ingreso de numeros se genera un texto "Hola" 
de form repetida segun la cantidad de veces ingrasada*/

let numero = parseInt(prompt("Ingrese un numero"));

while(numero != "ESC"){
    if(numero === numero) {
        alert (`Hola`);
    }else{ 
        alert (`Solo ingresar numero`);
        numero = parseInt(prompt("Ingrese un numero"));
    }
    alert(`Hola`);
    numero = parseInt(prompt("Ingrese un numero"));  
}



