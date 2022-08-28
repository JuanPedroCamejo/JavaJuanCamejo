let numero = parseInt(prompt("Ingrese un numero"));

for( let i = 0; i <= 15; i++){
    let suma = numero + i;
    let salida = `${numero} + ${i} = ${suma}`;

    alert(salida)
}

let entrada = prompt("Ingresar un nombre").toUpperCase();

while(entrada != "ESC" ){
    switch (entrada) { 
        case "NATALY":
            alert("HOLA NATALY");
            break;
        case "CARLOS":
            alert("HOLA CARLOS");
            break;
        case "JUAN":
            alert("HOLA JUAN");
                break;
        default:
                alert("¿QUIÉN SOS?")
                break;
    }
    entrada = prompt("Ingresar un nombre");
}

alert("Excelente!!!");



