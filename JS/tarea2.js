let ingresosUser = parseInt(prompt("el total de sus ingresos por mes: "));
let egresosUser = parseInt(prompt(" el total de sus gastos por mes : "));


if(ingresosUser>egresosUser){
    sobranteUser= ingresosUser-egresosUser;
    console.log(" usted deberia pensar en invertir : $"+ sobranteUser+" por mes");
}

else if( ingresosUser == egresosUser){
    console.log(" usted esta plano ");
}
else{
    faltanteUser = egresosUser- ingresosUser;
    console.log(" usted deberia reducir gastos , esta corto $" + faltanteUser+" por mes")
}