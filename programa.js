// Instrucciones:
//Crear un programa en Javascript que realice lo siguiente:
//Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
//Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
//Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor a mayor.
//Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por consola o por el DOM diciendo que los números son iguales.
//*
let numero1 = prompt("Ingresa el primer número:");
let numero2 = prompt("Ingresa el segundo número:");
let numero3 = prompt("Ingresa el tercer número:");

// Mostrar los números ingresados en la consola
console.log("Primer número:", numero1);
console.log("Segundo número:", numero2);
console.log("Tercer número:", numero3);
  
// Verificar el número mayor, el del medio y el menor
let mayor, medio, menor;

if (numero1 >= numero2 && numero1 >= numero3) {
    mayor = numero1;
    if (numero2 >= numero3) {
        medio = numero2;
        menor = numero3;
    } else {
        medio = numero3;
        menor = numero2;
    }
} else if (numero2 >= numero1 && numero2 >= numero3) {
    mayor = numero2;
    if (numero1 >= numero3) {
        medio = numero1;
        menor = numero3;
    } else {
        medio = numero3;
        menor = numero1;
    }
} else {
    mayor = numero3;
    if (numero1 >= numero2) {
        medio = numero1;
        menor = numero2;
    } else {
        medio = numero2;
        menor = numero1;
    }
}
// Mostrar los resultados
console.log("Número mayor:", mayor);
console.log("Número del medio:", medio);
console.log("Número menor:", menor);
alert(`Mayor: ${mayor}, Medio: ${medio}, Menor: ${menor}`);
// Convertir las entradas a números
numero1 = Number(numero1);
numero2 = Number(numero2);
numero3 = Number(numero3);

// Verificar si los números son iguales
if (numero1 === numero2 && numero2 === numero3) {
    console.log("Todos los números son iguales.");
    document.body.innerHTML = `<h3>Todos los números son iguales: ${numero1}, ${numero2}, ${numero3}</h3>`;
} else{
// Colocar los números en un array
let numeros = [numero1, numero2, numero3];

// Ordenar los números de menor a mayor
let ordenMenorMayor = numeros.slice().sort((a, b) => a - b);

// Ordenar los números de mayor a menor
let ordenMayorMenor = numeros.slice().sort((a, b) => b - a);

//imprimir en la consola el resultado
console.log("Números de menor a mayor:", ordenMenorMayor);
console.log("Números de mayor a menor:", ordenMayorMenor);
// Mostrar los resultados en el DOM los numeros orddenados se reflejan en la consola
document.body.innerHTML = `
  <h3>Números Ordenados:</h3>
  <p>De menor a mayor: ${ordenMenorMayor.join(", ")}</p>
  <p>De mayor a menor: ${ordenMayorMenor.join(", ")}</p>
`;
}