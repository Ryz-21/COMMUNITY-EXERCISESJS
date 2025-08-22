let circle = {
    radius: 100,
    center : {
        x:0,
        y:0
    },
    getType: function(){
        return "circule";
    }
};

console.log(circle.getType());
console.log(circle["getType"]);

let circle1 = {
    radius:100, 
    center:{
        x:0,
        y:0
    },
    getType(){
        return(typeof circle.radius === "number") ? 
        "circle" : "unknown";
    }
}

console.log(circle1.getType());

let figure = {...circle1};
delete circle1.radius;
console.log(figure.radius);
console.log(figure.getType());

let add = (a,b) => a+b;


let circle2 = {
    radius: 100,
    center:{
        x:0,
        y:0,
         show(){console.log(`${this.x}, ${this.y}`)}
        }
}
circle2.center.show();

let test = {
    point: circle.center
}


let contact = {
    _tel:"207-662-5412",
    get tel() {return this._tel;},
    set tel(t) {return this._tel = t;}
};

console.log(contact.tel);
console.tel = "100-100-1000";
console.log(contact.tel);

let contact1 = {
    _age: 36,
   firstName : "David",
    lastName : "Taylor",
    get fullName() {return `${this.firstName} ${ this.lastName}`;},
    get age() { return this._age;},
    set age(a) { if( a > 0) this._age = a;}
};
console.log(contact1.fullName);
contact1.age = -20;
console.log(contact1.age);

let createPOint = function (x,y){
    let obj = {};
    obj.x = x;
    obj.y = y;
    return obj;
};
let point1 = createPOint(1,1);
let point2 = createPOint(2,2);

console.log(point1.x);
console.log(point2.x);

let createPOint1 = function(x,y){
    return{
        x:x,
        y:y
    }
};

let createColoredPoint  = function(x, y, color) {
    let _info = "... object under construction";
    let _color = color;
    console.log(_info);
    return {
        x,
        y,
        getColor() {return _color}
    }
};
let coloredPoint1 = createColoredPoint (1, 1, "red");// -> ... object under construction
let coloredPoint2 = createColoredPoint (2, 2, "green");// -> ... object under construction 
console.log(coloredPoint1.getColor());    // -> red
console.log(coloredPoint2.getColor());    // -> green
console.log(coloredPoint1._color);   // -> undefined !!!

let point = {x:0 , y:0};
let coloredPoint = {color:"red"};
coloredPoint._proto_ = point;

console.log(Object.getOwnPropertyNames(coloredPoint));
console.log(coloredPoint.color);
console.log(coloredPoint.x);
