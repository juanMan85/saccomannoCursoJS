
$(".header").slideUp(3000).delay(200).slideDown(3000)

$(".container-fluid").fadeOut(3000).delay(200).slideDown(2000)





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