function calcularMensaje(raza, edadAdopcion) {
    let mensaje = "";
    if (raza==="Siamés") {

    switch (parseInt(edadAdopcion)) {
        case 1:
            mensaje = "Mensaje para gatitos de 2 a 4 meses.";
            break;
        case 2:
            mensaje = "Mensaje para gatitos de 5 a 8 meses.";
            break;
        case 3:
            mensaje = "Mensaje para gatitos de 9 meses a 1 año.";
            break;
        case 4:
            mensaje = "Mensaje para gatitos de más de 1 año.";
            break;
        default:
            mensaje = "Edad no válida para gatitos.";
    }

}else if (raza==="Persa"){
    switch (parseInt(edadAdopcion)) {
        case 1:
            mensaje = "Mensaje para gatitos Persa de 2 a 4 meses.";
            break;
        case 2:
            mensaje = "Mensaje para gatitos Persa de 5 a 8 meses.";
            break;
        case 3:
            mensaje = "Mensaje para gatitos Persa de 9 meses a 1 año.";
            break;
        case 4:
            mensaje = "Mensaje para gatitos Persa de más de 1 año.";
            break;
        default:
            mensaje = "Edad no válida para Persa gatitos.";

}
}else if (raza==="Esfinge"){
    switch (parseInt(edadAdopcion)) {
        case 1:
            mensaje = "Mensaje para gatitos Esfinge de 2 a 4 meses.";
            break;
        case 2:
            mensaje = "Mensaje para gatitos Esfinge de 5 a 8 meses.";
            break;
        case 3:
            mensaje = "Mensaje para gatitos Esfinge de 9 meses a 1 año.";
            break;
        case 4:
            mensaje = "Mensaje para gatitos Esfinge de más de 1 año.";
            break;
        default:
            mensaje = "Edad no válida para Esfinge gatitos.";

}

}else if (raza==="Maine Coon"){
    switch (parseInt(edadAdopcion)) {
        case 1:
            mensaje = "Mensaje para gatitos Maine Coon de 2 a 4 meses.";
            break;
        case 2:
            mensaje = "Mensaje para gatitos Maine Coon de 5 a 8 meses.";
            break;
        case 3:
            mensaje = "Mensaje para gatitos Maine Coon de 9 meses a 1 año.";
            break;
        case 4:
            mensaje = "Mensaje para gatitos Maine Coon de más de 1 año.";
            break;
        default:
            mensaje = "Edad no válida para Maine Coon gatitos.";

}

}
    return mensaje;
}

let nombreUsuario;
do {
    nombreUsuario = prompt("Hola Bienvenid@ a Michilandia, Ingresa tu nombre para Iniciar");
    if (nombreUsuario !== "") {
        alert("Bienvenid@ " + nombreUsuario);
    } else {
        alert("Debes ingresar un nombre para iniciar");
        console.log("ingresanombre");
    }
} while (nombreUsuario === "");

alert("Ahora bien, vamos a relizar una serie de preguntas para determinar los cuidados que debe tener el gatito que quieres adoptar");

let numeroGatito = "";
while (numeroGatito === "") {
    numeroGatito = prompt("Selecciona del 1 al 4 qué raza de gatito prefieres:\n1. Gatito Siamés\n2. Gatito Persa\n3. Gatito Esfinge\n4. Gatito Maine Coon");
}

let nombreRaza;
let edad;

switch (parseInt(numeroGatito)) {
    case 1:
        nombreRaza = "Siamés";
        alert("Perfecto el gatito Siamés es uno de los favoritos, sigamos");
        console.log("gatito Siamés exitoso");
        edad = prompt("Ingresa la edad del gatito a adoptar:\n1. 2-4 meses\n2. 5 a 8 meses\n3. 9 meses a 1 año\n4. Más de 1 año");
        alert(calcularMensaje(nombreRaza, edad));
        console.log(calcularMensaje(nombreRaza, edad));
        break;
    case 2:
        nombreRaza = "Persa";
        alert("Perfecto el gatito Persa es uno de los favoritos, sigamos");
        console.log("gatito Persa exitoso");
        edad = prompt("Ingresa la edad del gatito a adoptar:\n1. 2-4 meses\n2. 5 a 8 meses\n3. 9 meses a 1 año\n4. Más de 1 año");
        alert(calcularMensaje(nombreRaza, edad));
        console.log(calcularMensaje(nombreRaza, edad));
        break;
    case 3:
        nombreRaza = "Esfinge";
        alert("Perfecto el gatito Esfinge es uno de los favoritos, sigamos");
        console.log("gatito Esfinge exitoso");
        edad = prompt("Ingresa la edad del gatito a adoptar:\n1. 2-4 meses\n2. 5 a 8 meses\n3. 9 meses a 1 año\n4. Más de 1 año");
        alert(calcularMensaje(nombreRaza, edad));
        console.log(calcularMensaje(nombreRaza, edad));
        break;
    case 4:
        nombreRaza = "Maine Coon";
        alert("Perfecto el gatito Maine Coon es uno de los favoritos, sigamos");
        console.log("gatito Maine Coon exitoso");
        edad = prompt("Ingresa la edad del gatito a adoptar:\n1. 2-4 meses\n2. 5 a 8 meses\n3. 9 meses a 1 año\n4. Más de 1 año");
        alert(calcularMensaje(nombreRaza, edad));
        console.log(calcularMensaje(nombreRaza, edad));
        break;
}
