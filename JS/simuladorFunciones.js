
//simulador carrito de compras de supermercado//
//3 funciones



let precioProducto=0;
let cantidadProducto=0;
let costoTotal=0;
let codigo;
let costo;


// funciones para actualizar precio//

function devolverPrecio(codigo) {
    if(codigo==1){return 54}          //precio harina
     else if(codigo==2){return 65}     //precio leche
     else if(codigo==3){return 40}     //precio agua
     else if(codigo==4){return 115}    //precio queso
     else if(codigo==5){return 340}    //precio carne
}

//funcioones para mostrar nombre de producto//
function mostrarProducto(codigo) {
    if(codigo==1){return "harina"}
     else if(codigo==2){return "leche"}
     else if(codigo==3){return "agua"}
     else if(codigo==4){return "queso"}
     else if(codigo==5){return "carne"}
}

//funcion de mostrar mensajes

function mensajeError() {
   console.log("opcion incorrecta");   
}

function mostrarTotal(costo) {
    console.log("el costo total de la compra es : $"+costo);  
}


let productoIngresado=parseInt(prompt(`elija un producto o 0 para salir:
                                        0- terminar compra
                                        1- harina- $54
                                        2- leche-  $65
                                        3- Agua-   $40
                                        4- queso-  $115
                                        5- Carne-  $340
`))

 
 while (productoIngresado != 0) {
        cantidadProducto=parseInt(prompt("cantidad de unidades?"))
       if(productoIngresado>0 && productoIngresado<=5)
          {  costoTotal=costoTotal+devolverPrecio(productoIngresado)*cantidadProducto
            console.log(mostrarProducto(productoIngresado)+" $"+devolverPrecio(productoIngresado)+"c/u x "+cantidadProducto);
          }
      else{ mensajeError(); }
    
         productoIngresado=parseInt(prompt(`elija un producto o 0 para salir:
                                        0- terminar compra
                                        1- harina- $54
                                        2- leche-  $65
                                        3- Agua-   $40
                                        4- queso-  $115
                                        5- Carne-  $340
         `))
     
  }
 mostrarTotal(costoTotal);

