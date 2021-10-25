let nombreUser = prompt("ingrese su nombre");
let apellidoUser = prompt("ingrese su apellido");
let edadUser = parseInt(prompt("ingrese su edad "));
let añoActual = parseInt(prompt(" ingrese el año actual AAAA "));
let edadDosmil= edadUser - (añoActual-2000);


console.log("su nombre es: " + nombreUser + " "+ apellidoUser+ " y tiene"+ " "+ edadUser+" "+ "años");
console.log("usted tenia : "+edadDosmil + " "+"en el año 2000");