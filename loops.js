//6
// let num = prompt("Ingresa un número")
// for (let i = num; i >= 0; i--) {
//     console.log(i);
// }
//7
// let mul= prompt("Ingresa un número")

// for (let i = 1; i <= 10; i++) {
//     console.log(`${i}x${mul}: ${i*mul} `);

// }

//8
// let num = 1;
// let suma = 0;
// while (!num ==0) {
//     num = parseInt(prompt("Ingresa un número"));
//     suma += num;
// }

// console.log(`La suma total es ${suma}`);

//9
// let num = 0;
// let suma = 0;
// do {
//     num = parseInt(prompt("Ingresa un número"));
//     suma += num;
// } while (!num==0);
// console.log(`La suma total es ${suma}`);

// //10
// let persona = {
//   nombre: "Ludwing",
//   apellido: "Valecillos",
//   origen: "Venezulea",
//   altura: 1.69,
//   estudios: "Psicologia",
// };
// for (let clave in persona) {
//   // Mostrar solo las claves de las propiedades en la consola
//   console.log(clave);
// }
// //11
// for (const valor in persona) {
//     console.log(persona[valor]);
// }

//2.1

// let contador= 0;
// let numSecreto = Math.round(Math.random() * 10);
// console.log(numSecreto);
// let numAdivinar = prompt("Ingresa un número para adivinar (0-10)");
// while(numAdivinar!=numSecreto){
//     if(numAdivinar>numSecreto){
//         alert("El número ingresado es mayor");
//     }else alert("El número ingresado es menor");
//     numAdivinar = prompt("Ingresa un número para adivinar (0-10)");
//     contador++;

// }
// alert(`Felicidades, adivinaste el número ${numSecreto} en ${contador} intentos` );

//2.2

// let num;
// let divisores = [];
// num = parseInt(prompt("Ingresa un número"))
// for (let i = 0; i < num; i++) {
//     if (num % i == 0){
//         divisores.push(i)
//     }

// }
// console.log(divisores);
//2.3
// function RingBell() {

//     console.log("Ding Dong");

//     return "Ding Dong,"

// }
// for (let i = 0; i < 5; i++) {
//     RingBell();
//     console.log(RingBell());
// }

//2.4
// const dateLimit = "1997-08-03";
// const dates =  ["1984-18-2", "1998-3-2", "1973-15-7", "2024-31-10", "2081-1-9"]
// for (let i = 0; i < dates.length; i++) {
//     if(dates[i] >= dateLimit){
//         console.log(dates[i]);
//     }
// }

//2.5
// let colores = ["Rojo","Verde","Azul","Violeta","Marron","Negro","Blanco"]
// for (const color of colores) {
//     console.log(color);
// }

// //2.6
// let colores = ["Rojo", "Verde", "Azul", "Violeta", "Marron", "Negro", "Blanco"];
// mostrarColores(colores,parseInt(prompt("Cuantas veces quieres que se repita el bucle?")));
// function mostrarColores(colores, num) {
//   for (let i = 0; i < num; i++) {
//     for (const color of colores) {
//       console.log(color);
//     }
//     console.log("-----------------------");
//   }
// }

//2.7
// let numeros = [2,4,5,100,50,41,7]
// for (const numero of numeros) {
//     console.log(`El numero es ${numero} y su doble es ${numero*2}`);
// }
//2.8
// let familia = [
//   { nombre: "Pedro", edad: 15, estatura: 1.7, miembro: "hijo" },
//   { nombre: "Juana", edad: 40, estatura: 1.7, miembro: "madre" },
//   { nombre: "Juan", edad: 42, estatura: 1.8, miembro: "padre" },
//   { nombre: "Carla", edad: 10, estatura: 1.5, miembro: "hija" },
// ];
// function presentacion(familia){
//     for (const familiar of familia) {
//         console.log(`Hi, i ${familiar.nombre} (${familiar.miembro}), and i'm ${familiar.edad} years old`);
//     }
// }
// presentacion(familia);

//3.1
// let num ;
// let sumaPares = 0;
// let sumaImpares = 0;
// while (num !=0) {

//   num = parseInt(prompt("Ingresa un número"))
//   if(num % 2 == 0) sumaPares += num;else sumaImpares += num;

//   // if(num % 2 == 0){
//   //   sumaPares += num;
//   // }else sumaImpares += num;
// }
// console.log(`Suma pares: ${sumaPares}, suma impares ${sumaImpares}`);

//3.2 
// let numeros = [2,6,3,9,60,4,5,6,2,20]
// let numMayor = 0;
// for (let i = 0; i < numeros.length; i++) {
//     if(numeros[i] >= numMayor){
//       numMayor = numeros[i];
//     }
// }
// console.log("El numero mayor es: " + numMayor);