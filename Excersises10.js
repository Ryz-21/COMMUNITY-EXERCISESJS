// Fechas con Epoch
let date1 = new Date(0);
let date2 = new Date(1000 * 60 * 60 * 10); // 10 horas después del Epoch

console.log(date1.toUTCString()); // Thu, 01 Jan 1970 00:00:00 GMT
console.log(date2.toUTCString()); // Thu, 01 Jan 1970 10:00:00 GMT

console.log(date2.getTimezoneOffset()); // Diferencia con UTC en minutos
console.log(date2.toLocaleString());     // Hora local según el sistema
console.log(date2.toISOString());        // Formato ISO 8601 en UTC
console.log(date2.toUTCString());        // Igual que antes en formato legible

// Fechas con strings ISO
let date3 = new Date("2020-02-02T20:20:00.000");   // hora local
let date4 = new Date("2020-02-02T20:20:00.000Z");  // hora UTC

console.log(date3.toLocaleString()); // hora local
console.log(date3.toISOString());    // ISO UTC
console.log(date3.toUTCString());    // formato legible UTC

console.log(date4.toLocaleString()); // hora local según zona horaria
console.log(date4.toISOString());    // ISO UTC
console.log(date4.toUTCString());    // formato legible UTC

console.log(date3.getTime());             // timestamp en ms
console.log(date4.getTime());             // timestamp en ms
console.log(date4.getTime() - date3.getTime()); // diferencia en ms

// Timestamp actual
let now = Date.now();            // milisegundos desde Epoch
let nowObj = new Date(now);      // objeto Date
console.log(`now : ${typeof now} : ${now}`);
console.log(`nowObj : ${typeof nowObj} : ${nowObj}`);

// Diferencia entre dos fechas
let date10 = new Date(2020, 6, 8, 10, 20, 0);  // 8 julio 2020
let date20 = new Date(2020, 6, 9, 10, 20, 0);  // 9 julio 2020
console.log(date20.getTime() - date10.getTime()); // 86400000 ms = 1 día

// Métodos de Date
let date = new Date("2020-07-08T10:20:00");
console.log(date.getMonth()); // 6 → mes (0=enero)
console.log(date.getDay());   // 3 → día de la semana (0=domingo)
console.log(date.getDate());  // 8 → día del mes
console.log(date.getHours()); // 10 → hora
date.setHours(12);            // cambia la hora a 12
console.log(date.getHours()); // 12

// find y findIndex en arrays
let myPets = ["cat", "dog", "hamster", "canary", "shark", "cat", "dog"];
console.log(myPets.find(item => item.length > 3));         // "hamster"
console.log(myPets.find(item => item.includes("og")));     // "dog"
console.log(myPets.find(item => item.includes("fish")));   // undefined
console.log(myPets.findIndex(item => item.length > 3));    // 2
console.log(myPets.findIndex(item => item.includes("og"))); // 1
console.log(myPets.findIndex(item => item.includes("fish"))); // -1

// Convertir cadena a mayúsculas y dividir en palabras
let str = 'sample string'; 
let result = str.toUpperCase().split(' '); 
console.log(result); // ["SAMPLE", "STRING"]

let str1 = 'sample string';
console.log(`${str1.includes('s')} ${str1.indexOf('s')}
${str1.lastIndexOf('s')}`);
