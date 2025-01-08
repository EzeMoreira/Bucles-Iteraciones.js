//              Ejemplo de un bucle normal

let numero = 0;                     // Iniciamos la variable con el valor 0
if (numero < 10){                   // La condicion
    numero ++;                      // Aqui utilizamos un contador
    document.write("El valor del numero es ", numero)          // Muestra en pantalla del resultado
}



document.write("<br>", "<br>")  // Estos saltos de linea que se veran dentro del codigo solamente es para que no se junten en pantalla todos los ejemplos.



//              Ejemplo con bucle While

// Aqui se muestra la primera diferencia, If solo pregunta y ejecuta una vez, while sigue preguntando hasta que la condicion llegase a ser false.
// En este caso llega a 10 y no pasa ese valor por lo cual deja de ejecutarse.

let numeroDos = 0;
while (numeroDos < 10){
    numeroDos ++;
    document.write("El valor del numero es ", numeroDos + "<br>")
}



document.write("<br>", "<br>")



//              Ejemplo de bucle do while

// do while es basicamente hacer y luego preguntar. 
let i = 5;
do {
    document.write("Mostrar en pantalla ");
    i = i + 1;
} while (i < 5);
document.write("Bucle terminado ")



document.write("<br>", "<br>")