

// //1.4
// // let num1 = 4;
// // let num2 = 5;

// // if (num1 > num2) {
// //   console.log(num1);
// // } else {
// //   console.log(num2);
// // }

// //1.5
// // if (num1 > num2) {
// //   console.log(num1);
// // } else if (num2 > num1) {
// //   console.log(num2);
// // } else {
// //   console.log("Los números son iguales");
// // }

// //1.6
// // if (num1 == num2) {
// //   console.log("Los números son iguales");
// // } else {
// //   console.log("Los números son diferentes");
// // }

// //1.7 1.8
// // let fecha1 = "2018-9-2";
// // let fecha2 = "2023-7-5";

// // if (fecha1 > fecha2) {
// //   console.log(`La fecha ${fecha1} es mayor que ${fecha2}`);
// // } else if (fecha1 === fecha2) {
// //   console.log("Las fechas son iguales");
// // } else {
// //   console.log(`La fecha ${fecha2} es mayor que ${fecha1}`);
// // }

// //1.9
// // let numero1 = 5;
// // let numero2 = 7;
// // let numero3 = 9;

// // if (numero1 > numero2 && numero1 > numero3) {
// //   console.log(`El número ${numero1} es el mayor`);
// // } else if (numero2 > numero1 && numero2 > numero3) {
// //   console.log(`El número ${numero2} es el mayor`);
// // } else {
// //   console.log(`El número ${numero3} es el mayor`);
// // }
// //MEDIO-------------
// //1.a

// // if (condicion) {
// //   tarea1();
// // } else {
// //   tarea2();
// //   tarea3();
// // }

// // //1.b
// // // Comienzo

// // if (condicion) {
// //   tarea1();
// // } else {
// //   tarea2();
// //   if (condicion) {
// //     tarea3();
// //   }
// // }

// // //1.c
// // tarea1();
// // while (condicion) {
// //   if (pregunta) {
// //     tareaSi();
// //   } else {
// //     tareaNo();
// //     break;
// //   }
// // }
// // tareaFinal();
// // //1.d
// // function diagrama4() {
// //   do {
// //     tarea1();
// //     if (pregunta) {
// //       tareaSi();
// //     } else {
// //       tareaNo();
// //       break;
// //     }
// //   } while (condicion);
// //   tareaFinal();
// // }
// //1.2
// //1.2.a
// if (condicion) {
//   tarea1();
// } else {
//   tarea2();
//   tarea3();
// }



// // // Ejercicio 6: Convertir diagrama de flujo en pseudocódigo a JS
// // console.log("Inicio");
// // console.log("    Preparar el desayuno");
// // console.log("    Si (hay pan)");
// // console.log("        Tostar el pan");
// // console.log("        Untar mantequilla en el pan");
// // console.log("    Si no");
// // console.log("        Cocinar unos huevos");
// // console.log("Fin");

// // // Ejercicio 7: Programa con switch para colores y operaciones
// // let color = prompt("Ingresa el color rojo, azul o verde").toLowerCase();

// // switch (color) {
// //   case "rojo":
// //     console.log("El color de la pasión");
// //     break;
// //   case "azul":
// //     console.log("El color del mar");
// //     break;
// //   case "verde":
// //     console.log("El color de la naturaleza");
// //     break;
// //   default:
// //     console.log("Color no válido");
// //     break;
// // }

// // let number1 = parseInt(prompt("Ingresa el primer valor"));
// // let number2 = parseInt(prompt("Ingresa el segundo valor"));
// // let operacion = prompt("Ingresa la operación a realizar (suma, resta, multiplicación, división)").toLowerCase();

// // switch (operacion) {
// //   case "suma":
// //     console.log(`La suma de ${number1} y ${number2} es: ${number1 + number2}`);
// //     break;
// //   case "resta":
// //     console.log(`La resta de ${number1} y ${number2} es: ${number1 - number2}`);
// //     break;
// //   case "multiplicación":
// //     console.log(`La multiplicación de ${number1} y ${number2} es: ${number1 * number2}`);
// //     break;
// //   case "división":
// //     console.log(`La división de ${number1} y ${number2} es: ${number1 / number2}`);
// //     break;
// //   default:
// //     console.log("Operación inválida");
// //     break;
// // }

// // // Ejercicio 8: Evaluar persona más alta y mayor
// // let persona1 = {
// //   nombre: "Juan",
// //   edad: 39,
// //   altura: 1.69
// // };

// // let persona2 = {
// //   nombre: "Rosa",
// //   edad: 42,
// //   altura: 1.65
// // };

// // if (persona1.altura > persona2.altura) {
// //   console.log(`${persona1.nombre} es más alto que ${persona2.nombre}`);
// // } else {
// //   console.log(`${persona2.nombre} es más alto que ${persona1.nombre}`);
// // }

// // if (persona1.edad > persona2.edad) {
// //   console.log(`${persona1.nombre} es mayor que ${persona2.nombre}`);
// // } else {
// //   console.log(`${persona2.nombre} es mayor que ${persona1.nombre}`);
// // }

// // // Ejercicio 9: Evaluar si una persona está calificada para conducir
// // let nombre = prompt("Ingrese su nombre");
// // let edadPersona = parseInt(prompt("Ingrese su edad"));
// // let alturaPersona = parseInt(prompt("Ingrese su altura en cm"));
// // let visionPersona = parseFloat(prompt("Ingrese su visión (de 1 a 10)"));

// // if (edadPersona >= 18 && alturaPersona > 110 && visionPersona >= 8) {
// //   console.log("Estás calificado para conducir");
// // } else {
// //   console.log("No estás calificado para conducir");
// // }

// // // Ejercicio 10: Evaluar edad y mostrar categorías
// // let edadIngresada = parseInt(prompt("Ingresa tu edad"));

// // if (edadIngresada >= 0 && edadIngresada <= 12) {
// //   console.log("Eres infante");
// // } else if (edadIngresada >= 13 && edadIngresada <= 18) {
// //   console.log("Eres adolescente");
// // } else if (edadIngresada >= 19 && edadIngresada <= 45) {
// //   console.log("Eres joven mayor");
// // } else if (edadIngresada > 45 && edadIngresada <= 100) {
// //   console.log("Eres mayor");
// // } else if (edadIngresada > 100) {
// //   console.log("¿Realmente tienes más de 100 años?");
// // } else {
// //   console.log("Edad no válida");
// // }

// // // Ejercicio 11: Evaluar números del 1 al 3 y otros datos numéricos
// // let numeroIngresado = parseInt(prompt("Ingresa un número del 1 al 3"));
// // let num = parseInt(prompt("Ingresa un número"));
// // switch (numeroIngresado) {
// //   case 1:
// //     console.log(`El número ingresado es ${numeroIngresado}`);
// //     break;
// //   case 2:
// //     console.log(`El doble del número ingresado es ${num * 2}`);
// //     break;
// //   case 3:
// //     console.log(`El número ingresado tres veces es ${num * 3}`);
// //     break;
// //   default:
// //     console.log("Ese valor no está permitido");
// //     break;
// // }

// // Ejercicio 12: Programa para recibir datos de cliente y mostrar mensajes
// let nombreCliente = prompt("Ingresa tu nombre").toLowerCase();

// if (nombreCliente == "ludwing") {
//   alert("Bienvenido");
// } else if (confirm("Tienes entrada?")) {
//   pase = prompt("VIP o normal?").toLowerCase();
//   if (pase == "normal") {
//     alert("Bienvenido");
//   } else if (pase == "vip") {
//     if (confirm("Quieres usarlo?")) {
//       alert("Bienvenido");
//     } else alert("Hasta luego");
//   }
//   alert("Adios");
// } else if (confirm("¿Quieres comprar una entrada?")) {
//   if (prompt("¿Cuánto dinero tienes disponible?") >= 1000) {
//     alert("Venta exitosa. Bienvenido");
//   } else {
//     alert("Venta rechazada");
//   }
// } else alert("Chaochao");
