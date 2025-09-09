let car = {make: `Jeep`};

console.log(car.make);

let circle = {
    center: {
        x: -10,
        y: 20
    },
    radius: 30
}
console.log(circle.center.x)

let user1 = {
    'full name': 'Mickey Mouse'
}
console.log(user1['full name']);

let geoposition = {
    lan: -30.110,
    lat: 120.027
}

Object.keys(geoposition).forEach(key => console.log(geoposition[key]));

let tree1 = {
    species: `oak`
}

let tree2 = {
    species: `oak`
}

console.log(tree1.species == tree2.species);

let mountain1 = {
    name: 'K2',
    range: 'Himalayas'
}
let mountain2 = { ...mountain1, range: 'Karakoram', height: 8611};
mountain1.height = 8848;
console.log(`${mountain2.name} ${mountain2.range} ${mountain2.height}`);


let user = {
    name: 'Huck',
    surname: 'Finn',
    show: function() {
        console.log(`${this.name}${this.surname}`);
    }
};

user.show();


let user2 = {
    _name: 'Huck',
    _surname: 'Finn',
    set name(name){
        this._name = name;
    }
}
user2.name = 'Huckleberry';
console.log(user2._name);



let getMountain = function(name, height) {
   return {name, height};
}
let mountain = getMountain('Lhotse', 8516);
console.log(`${mountain.name} ${mountain.height}`);


let Point = function(x, y) {
    this.x = x;
    this.y = y;
}
let point = new Point(100, 0);
let ColorPoint = function(color) {;
    this.color = color;
}
ColorPoint.prototype = point;
let cpoint = new ColorPoint('green');
console.log(cpoint.x);

//class First {
  //  hallo1() { return 'First'; }
//}

//class Second extends First {
  //  hallo2() { return 'Second'; }
//}

//let second = new Second();
//console.log(`${second.hallo1()} ${second.hallo2()}`);

function First() {};
class Second extends First {};
let second = new Second();
console.log(`${second instanceof First} ${second instanceof Second}`);

function test(str) {
    return str.toUpperCase().split('');
}
console.log(test("Do cats eat bats"));

let points = [{x: 10, y: 20}, {x: 0, y: 30}, {x: 20, y: 100}];
let result1 = points.some(e => e.y < 10)
let result2 = points.every(e => e.y > 10)
console.log(`${result1} ${result2}`);


let s = new Set([1, 2, '100']);
s.add(2);
s.add('2');
console.log(`${s.has(2)} ${s.has('2')} ${s.size}`);

let m = new Map([[1, '11'], ['2', 22]]);
m.set(1, '11');
m.set(1, '111');
console.log(`${m.size}`);

console.log(`${Math.round(1.5)} ${Math.floor(1.7)}
${Math.ceil(1.2)}`)

let a = [1,2];;
Array.prototype.test = function(){
    console.log('test');
}
let b = [3,4];
a.test();
b.test();

let fn = function ( a, b,...rest) {
    console.log(`${a.length} ${rest.length}`);
}
fn('1', '2', '3', '4', '5');


let msg = 'Bob';
let ret = (function (){
    let msg = 'Marley';
    return msg;
})();
console.log(`${msg} ${ret}`);


