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
// con este bucle podemos obligar a que siempre se realice el interior del bucle por lo menos una vez mas allá de que la condición sea falsa.

let i = 5;
do {
    document.write("Mostrar en pantalla ");
    i = i + 1;
} while (i < 5);
document.write("Bucle terminado ")



document.write("<br>", "<br>")



//              Ejemplo de bucle for

// Este bucle se caracteriza en que se repite, revisando la condicion en cada iteracion hasta que no se cumpla la condicion propuesta.

// for (inicializacion; condicion; incremento o decremento)

for (let i = 0; i < 5; i++){    // Este ejemplo es con incremento
    document.write("El valor de i: ", i, "<br>");
}

document.write("<br>")

for (i = 5; i > 0; i--){        // Este ejemplo es con decremento
    document.write("El valor de i:", i, "<br>")
}

document.write("<br>")


//              Ejemplo con incrementos multiples

for (i = 0, j = 7; i < 7; i++ , j--){
    document.write("El valor de i y J", " ", i, " " ,j, "<br>"); // Los " " que están vacíos solo son para crear espacio entre las letras y sus resultados
}



document.write("<br>")



//              Ejemplo de for in - for of

let animales = ["perro", "gato", "pez", "sapo", "rinoceronte"];

for (animal in animales) {      // Con in en pantalla va a mostrar las posiciones
    document.write(animal + "<br>");
}

for (animal of animales){       // Con of en pantalla muestra el listado del array
    document.write(animal + "<br>")
}

document.write("<br>")


let array = ["Ezequiel", "Fernando", "David", "Juan", "Mary"];
let arrayDos = ["Ezequiela", "Fernanda", "Davida", "Juana", array];


for (let array in arrayDos){
    if (array == 2){
        for (let array of arrayDos){
            if (array == "Davida"){
                document.write(array + "<br>")
            }   
        }
    }   else {
        document.write(arrayDos[array] + "<br>")
    }
}