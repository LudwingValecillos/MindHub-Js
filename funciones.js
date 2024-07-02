// //bajo
// let numero1 = 100;
// let numero2 = 20;

//  let add = function (num1,num2){
//     let resultado = num1*num2;
//     return resultado;
//     }
//     console.log(add(numero1,numero2));


//Medio
// console.log(saludar("Ludwing"));
// function saludar(nombre) {
//     return "Hello " + nombre;
// }
// let multiplicacion = function(num1,num2){
//     return num1*num2
// }
// console.log(multiplicacion(5,5));

// function area(base,altura){
//     return (base*altura)/2
// }
//  function perimetro(lado1, lado2, lado3){
//     return lado1 + lado2 + lado3
//  }
//  console.log("Ingrese los tres lados del triangulo para saber su perimero")
//  console.log(perimetro(prompt("Lado 1"),prompt("Lado 2"),prompt("Lado 3")));
// function precioTotal(precio,cantidad){
//     if(cantidad >=10){
//         return precio*cantidad -(precio*cantidad*0.10)
//     }else if(cantidad >=20){
//         return precio*cantidad -(precio*cantidad*0.20)
//     }
//     return precio*cantidad
// }
// let precio = prompt("Ingrese el precio")
// let cantidad = prompt("Ingrese la cantidad")
// console.log("El precio total es: " + precioTotal(precio,cantidad));

// function isAnAdult(edad) {

//     if (edad >= 18) {
//         console.log("Es mayor de edad");
//         } else {
//             console.log("Es menor de edad");
//             }
    

// console.log(isAnAdult(prompt("Ingresa tu edad")));

// function impuesto(ingresoAnual) { 
//     if(ingresoAnual <= 10000){
//         console.log("Impuesto a pagar: " + (ingresoAnual * 0.10));
//     }else if(ingresoAnual >10000 && ingresoAnual<=20000){
//         console.log("Impuesto a pagar: " + (ingresoAnual * 0.15));
//     }else console.log("Impuesto a pagar: " + (ingresoAnual * 0.20));

//  }
//  console.log(impuesto(prompt("Ingresa tu ingreso anual")));

// function day (dayNumber) { switch (dayNumber) {
//     case 1:
//     case 2:
//     case 3: //usan el mismo return
//     case 4:
//     case 5:
//     return "It is a business day"
//     case 6:
//     case 7:
//     return "It's the weekend";
//     // default:
//     //
//     }
//     }
//     return "Invalid value"
//     console.log(day (7));

// function informacionPersonal(nombre,apellido, edad) {
//     if(nombre=="" || apellido=="" || edad=="" ){
//         console.log("Ingrese un valor valido");
//     }else{
//         let persona={
//             nombre: nombre,
//             apellido: apellido,
//             edad: edad
//         }
//         console.log(persona)
//     } 
// }
// console.log(informacionPersonal(prompt("Ingrese su nombre"), prompt("Ingrese su apellido"), prompt("Ingrese su edad")));

// function saludo(nombre){
//     return "Hola mi nombre es: " + nombre;
// }
// function calculateAge(AnoActual,anoNacimiento) {
//     return AnoActual-anoNacimiento
// }
// function present(nombre,anoNacimiento,AnoActual) {
//     console.log(saludo(nombre));
//     console.log("Y tengo: " + calculateAge(AnoActual,anoNacimiento)+ " Años");
// }
// console.log(present(prompt("Ingrese su nombre"), prompt("Ingrese su año de nacimiento"),prompt("Ingrese año actual")));