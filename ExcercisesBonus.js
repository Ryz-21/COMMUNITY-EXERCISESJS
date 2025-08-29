

function totalprecio (precio,iva){
    // el total es igual a la formula matematica incluyendo iva
    // que es total = 200+(200*21/precio/100)
   let total = precio + (precio*iva/precio/100);
    console.log(`el total es ${total}`); //retornamos el valor 
}



function calcularLadoCuadrado (lado){
//el area de un cuadrado es la multiplicacion del valor de cada lado
 let area = lado*lado
 let perimetro = lado * area //el perimetro es el lado * area 
 console.log(`el area es ${area} el perimetro es ${perimetro}`)
}

function devolverNombre (){
let nombre = prompt('cual es tu nombre?'); // promt funcion como imput
console.log(`cual es tu nombre ${nombre}`);
}
/*
1960 valdivia chile dato ramdon 
*/


function mediadetres(numero1,numero2,numero3){
let total = (numero1+numero2+numero3)/3 // calcular media formula matematica 
console.log(`la media de los numeros es ${total}`)
}

function calcularCosumo(numero_litros,numero_kilometros){
 let cantidad_consumida = numero_litros/numero_kilometros; // se devide la cantidad de litros con el nuemero de kiloemtros
console.log(`la cantidad de consumo de combusstible es ${cantidad_consumida}`)
}
 
function cambiarhoras (horas,minutos){
    // si sabemos que el valor de una hora son 60 minutos
    // el valor de un minuto son 60 segundos
    // entonces 1 hora es 60 minutos entoncess es 60*60 
   let segundos = horas*60*60+(minutos*60) 
    console.log(`la cantidad de segundos son${segundos}`)
}

function ConvertirDecenas (numero){
if (!Number.isInteger(numero) || numero <10 || numero > 99)
{
    console.log(`porfavor ingresa un numero entero de dos digitos`)
    return
}
let decenas = Math.floor(numero/10);
let unidades = numero % 10; 
console.log(`Decenas: ${decenas},unidades: ${unidades}`);
}

function CantidadIngredientes(cantidadComensales){
//si una tortilla de patatas lleva 200gr 
//por cada kilo de patatas se necesitan 5 huevos
//por cada kilo de patatas 300 gramos de cebolla 
let patatasGramos = cantidadComensales*200;
let patatasKilos = patatasGramos/1000;

let huevos = patatasKilos*5;
let cebollagramos = patatasKilos * 300;

}

function CambiarVariables(VarUNo , VarDOs){

    // solo reasigno orden de variables y ya 
    let uno = VarUNo;
    let dos = VarDOs;
    console.log(`el orden de variable es ${uno} y el otro ${dos}`)
    
    // se utiliza un tercero que servira como almacenador
    let temporal = uno
    uno = dos;
    dos = temporal;

    console.log(`el orden de variable es ${uno} y el otro ${dos}`)

}

function paroinpar(numero){
    return numero % 2 === 0;   //true para impares false para impares
}

function ContraseñaValida(contraseña){
    // si son excatamente iguales 
    if (contraseña === "2Fj(jjbFsuj" || contraseña === "eoZiugBf&g9")
        console.log(`la contraseña es correcta`);
    else{
        console.log("la contraseña es incorrecta");
    }
}

function COntraseñaValidaTrue(contraseña){
    // devolver true o false 
    if(contraseña === "2Fj(jjbFsuj"|| contraseña === "eoZiugBf&g9")
        return true;
    else{
        return false;
    }
}

function CalcularImpuestos(edad , ingresos){
if (edad>=18 && ingresos >= 1000)
{
    return ingresos*0.40;
} else
{
    return 0;
}
}

function BMI (peso,altura){
    let BMI = peso/ (altura**2) 
    if(BMI<18.5){
        return "Bajo de peso";
    }else if(BMI>=18.5 && BMI<25){ // a diferencia de python que para entre rangos se maneja <= <= de esta manera
        return "Normal";
    }else if(BMI>=25 && BMI<30){
        return "sobrepeso";
    }else{
        return "OBESO";
    }
} 

function imprimirArray(lista){
   for (let i = 0; i <lista.length; i++ ){ // intera dentro de la array y lista uno por uno 
    console.log(lista[i])
   }
}

function NUmberLikes(likes){ 
    if(likes >= 1000000){
        // math floor redondea a lo mas cercano por eso lo aplicamos 
        return Math.floor(likes/1000000) + "M";
    }else if (likes >= 1000){
        return Math.floor(likes/1000) + "K"
    } else {
        return `${likes}`
    }
};

function fizzBuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) { // validamos si son par de 3 o 5 si no pasamos a validacion unitaria 
    return "fizzbuzz";
  } else if (number % 3 === 0) {
    return "fizz";
  } else if (number % 5 === 0) {
    return "buzz";
  } else {
    return number;
  }
}

function contarRango (a,b) {
    let contador = 0; //incianilizamos el 0
    for (let i = a + 1; i < b; i++){ // que cuente desde el numero a hasta el b cuanto le falta 
        contador++;
    }
    return contador;
}


function sumarRango (a,b){
    let suma = 0;
    for (let i = a + 1; i <b; i++){ // intera entre los numeros 
       suma +=i //aumenta entre cadad numero 
    }
    return suma;
}

function numerodeAs (palabra){
    let cantidad = 0;
    for (let i = 0; i<palabra.length; i++){ //intera sobre la palabra 
        if (palabra[i] === "a"){ // si en la palabra se encuentra la a
           cantidad++; // se aumenta 
        }
    }
    return cantidad;
}


function numerodeCaracteres (palabra , letra){
    let cantidad = 0;
    for (let i = 0; i<palabra.length; i++){
        if(palabra[i] === letra){ // solo cambiamos la a por la letra que queremos 
            cantidad++;
        }
    }
    return cantidad
}

function sumarArreglo (Array){
    let total = 0;
     for (let i = 0; i <Array.length; i++ ){
        total += Array[i];
     }
     return total;
}

function MUltiplicarArreglo (Array){
    let total = 0;
    for(let i = 0; i<Array.length; i++){
        total *= Array[i];
    }
    return total
}