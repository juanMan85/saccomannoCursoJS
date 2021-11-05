//simulador de promedio de notas de una clase

//seleccion de variables
let notaIngresa;
let alumnoIngresa;
let notaPromedio=0;
let cantidadNotas=3;
let ingresoProfesor;
let contadorAlumno=0;
let notaGeneral=0;
let notaPromedioClase=0;
let errorIngreso=0;


ingresoProfesor=parseInt(prompt(`-menu notas-
                                  1- Ingresar alumno
                                  0- terminar  `))

while (ingresoProfesor!=0) {
    errorIngreso=0;   // desactivada señal 
    if(ingresoProfesor==1){
        alumnoIngresa=prompt(`nombre de alumno: `)

      for (let i = 0; i < cantidadNotas; i++) {
           notaIngresa=parseInt(prompt(`ingrese las 3 notas de a 1 separadas por enter`))
           notaPromedio=notaPromedio+notaIngresa
      }
 
    }else{console.log("error de ingreso");
          errorIngreso=1; //activando señal
    
    }
   
   if(errorIngreso==0){
    notaPromedio=notaPromedio/cantidadNotas;
    console.log("alumno: "+alumnoIngresa);
    console.log("nota promedio: "+notaPromedio); 
    contadorAlumno++;
    notaGeneral=notaGeneral+notaPromedio;
    notaPromedio=0;

   }
    
    ingresoProfesor=parseInt(prompt(`-menu notas-
                                  1- Ingresar alumno
                                  0- terminar  `))

                               
}

notaPromedioClase=notaGeneral/contadorAlumno;
console.log(`cantidad de alumnos = `+contadorAlumno);
console.log(`nota promedio       = ` +notaPromedioClase);


