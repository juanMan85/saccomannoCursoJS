
$(".header").slideUp(3000).delay(200).slideDown(3000)

$(".container-fluid").fadeOut(3000).delay(200).slideDown(2000)

//-----
//----efecto hover titulo
$(".header").on("mouseenter", function(){

    $(".header").css("text-decoration","line-through")
})
$(".header").on("mouseleave",function(){

    $(".header").css("text-decoration","none")
})


//----efecto hover gorro 1
$("#gorroUno").on("mouseenter", function(){

          $("#gorroUno").css("background-color","#345B63")
})
$("#gorroUno").on("mouseleave",function(){

          $("#gorroUno").css("background-color","white")
})

//----efecto hover gorro 2

$("#gorroDos").on("mouseenter", function(){

    $("#gorroDos").css("background-color","#39A2DB")
})
$("#gorroDos").on("mouseleave",function(){

    $("#gorroDos").css("background-color","white")
})

//----efecto hover gorro 3

$("#gorroTres").on("mouseenter", function(){

    $("#gorroTres").css("background-color","#726A95")
})
$("#gorroTres").on("mouseleave",function(){

    $("#gorroTres").css("background-color","white")
})


//---- animacion encadenada

$(".container-fluid").delay(4000).append(`<div class ="divAppend"><h2 id="mensajitoH2">Para ideas mas creativas...mantenga su cerebro calentito</h2></div>`)

$("#mensajitoH2").slideUp().delay(3500).slideDown(2000).css("font-size","30px").css("color","#EBE645")