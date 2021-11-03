
/* MENU LOS DOS GUSTOS */

let pedidoTipo=prompt("¿Que desea?...¿hamburguesa? o pizza?");
let cantidad;
let ordenH="🍔 ";
let ordenP="🍕 ";

    if(pedidoTipo=="hamburguesa" || pedidoTipo=="pizza"){
        cantidad=parseInt(prompt("cuantas quieres? "));
        if(pedidoTipo=="hamburguesa"){
            for (let i = 0; i < cantidad; i++) {
                console.log(i+ ordenH);          
            }
        }else{
            for (let j = 0; j < cantidad; j++) {
                
                console.log(j+" "+ordenP);
            }
        }   
    }else{
        console.log("no tenemos "+pedidoTipo+" en nuestro menu");
    }