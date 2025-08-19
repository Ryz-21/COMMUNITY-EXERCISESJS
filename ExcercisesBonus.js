/*
En una variable tienes el lado de un cuadrado, debes escribir un programa que te calcule el área y el perímetro del cuadrado.

El area la calculas como lado multiplicado por lado. El perímetro es la suma de los cuatro lados.

Precio = 200;
iva = 21;

total = Precio + (Precio+21*Precio/100);

console.log(`el total es ${total}`);
*/


/*
En una variable tienes el lado de un cuadrado, debes escribir un programa que te calcule el área y el perímetro del cuadrado.

El area la calculas como lado multiplicado por lado. El perímetro es la suma de los cuatro lados.

lado = 40;

area = lado*lado;

perimetro = lado*4

console.log(`el area es ${area} el perimetro es ${perimetro}`)
*/

/*
let nombre = prompt('cual es tu nombre?');
console.log(`cual es tu nombre ${nombre}`);
1960 valdivia chile dato ramdon 
*/


function mediadetres(numero1,numero2,numero3){
let total = (numero1+numero2+numero3)/3
console.log(`la media de los numeros es ${total}`)
}

function calcularCosumo(numero_litros,numero_kilometros){
 let cantidad_consumida = numero_litros/numero_kilometros;
console.log(`la cantidad de consumo de combusstible es ${cantidad_consumida}`)
}
 
function cambiarhoras (horas,minutos){
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
    let uno = VarUNo;
    let dos = VarDOs;
    console.log(`el orden de variable es ${uno} y el otro ${dos}`)
    
    let temporal = uno
    uno = dos;
    dos = temporal;

    console.log(`el orden de variable es ${uno} y el otro ${dos}`)

}

function paroinpar(numero){
    return numero % 2 === 0;   //true para impares false para impares
}

function ContraseñaValida(contraseña){
    if (contraseña === "2Fj(jjbFsuj" || contraseña === "eoZiugBf&g9")
        console.log(`la contraseña es correcta`);
    else{
        console.log("la contraseña es incorrecta");
    }
}

function COntraseñaValidaTrue(contraseña){
    if(contraseña === "2Fj(jjbFsuj"|| contraseña === "eoZiugBf&g9")
        return true;
    else{
        return false;
    }
}

