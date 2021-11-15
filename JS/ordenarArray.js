//simulador de promedio de notas de una clase

//seleccion de variables
let alumnoIngresa;
let notaPromedio=0;
let cantidadNotas=3;
let ingresoProfesor;
let contadorAlumno=0;
let notaPromedioClase=0;
let errorIngreso=0;


// objeto alumno

class alumnoObjeto{  
    constructor( nombre , nota1 , nota2, nota3,notaPromedio){  

         this.nombre = nombre;
         this.nota1 = nota1;
         this.nota2 = nota2;
         this.nota3 = nota3;
         this.notaPromedio=notaPromedio;
    }

    promedioAlumno(){
        
        return this.notaPromedio;
    }
     

}




let alumnosColeccion=[];
               
let nota1
let nota2
let nota3


//-------comienzo programa----------

ingresoProfesor=parseInt(prompt(`-menu notas-
                                  1- Ingresar alumno
                                  0- terminar  `))

while (ingresoProfesor!=0) {
    errorIngreso=0;   // desactivada señal 
    if(ingresoProfesor==1){
        alumnoIngresa=prompt(`nombre de alumno: `)

       nota1=parseInt(prompt("nota 1 :"));
       nota2=parseInt(prompt("nota 2 :"));
       nota3=parseInt(prompt("nota 3 :")); 
       notaPromedio=(nota1+nota2+nota3)/cantidadNotas;  

    }
    else{console.log("error de ingreso");
          errorIngreso=1; //activando señal
    
    }
   
   if(errorIngreso==0){

    alumnosColeccion.push([alumnoIngresa, nota1, nota2, nota3, notaPromedio])//aca se carga el array de los objetos alumnos
    
    contadorAlumno++; 
    notaPromedioClase=notaPromedioClase+notaPromedio;
    
    
   }
       
    ingresoProfesor=parseInt(prompt(`-menu notas-
                                  1- Ingresar alumno
                                  0- terminar  `))

                               
}

//-------------Ordenando array alfabeticamente-------------

alumnosColeccion.sort((a,b) => { 
    if(a < b){ return -1}
    else if(a > b){ return 1}
    else{ return 0}
    
});

console.log(alumnosColeccion)
console.log(`cantidad de alumnos        = `+contadorAlumno);
console.log(`nota promedio de la clase  = ` +notaPromedioClase/alumnosColeccion.length);




