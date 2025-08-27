figure = {
    getType: function() {
        return this.type ? this.type : "unknown";
    }
};
let circle = {
    type: "circle",
    center: {x:0, y:0},
    radius: 100
};
circle.__proto__ = figure;

console.log(figure.getType());
console.log(circle.getType());




let car1 = {
    make: 'Dodge',
    model: 'Viper'
}
let car2 = { ...car1, model:'RAM', color: 'red'};
car1.color = 'green';
console.log(`${car2.make} ${car2.model} ${car2.color}`);

let point = {
    x:100,
    y:100,
   show: function() {console.log(`${this.x} ${this.y}`);}
}

point.show();

let point1 = {
    x:100,
    y:100,
    show : function() {console.log(`${x}:${y}`)}
}

let point2 = {
    x:100,
    y:200,
    positionX(){
        this.x = x;
    }
}
point2.positionX = 0;
console.log(point2.x)

let Car = function(make,model){
    this.make = make;
    this.model = model;
}
let car = new Car('Dodge', 'Viper');
console.log(`${car.make} ${car.model}`)

let Vehicle = function(initialData){
    let {id, latitude, longitud} = initialData;
     this.setPosition = function(latitude, longitude) {
        this.time = Date.now();
        this.longitude = longitude;
        this.latitude = latitude;
    }; 
    this.id = id;
    this.status = "unavailable";
    this.setPosition(latitude, longitud);
};

 let vehicle1 = new Vehicle({id: "AL1024", latitude: 59.367647, longitude: 18.213451}); 
 let vehicle2 = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1024"}); 

 
 let vehicles = function({id, latitude, longitude}){
    this.setPosition = function({latitude, longitude}) {
        this.time = Date.now();
        this.longitude = longitude;
        this.latitude = latitude;
    };
    this.getPosition = function() {
        return {
            latitude: this.latitude,
            longitude: this.longitude
        };
    };
    this.id = id;
    this.status = "unavailable";
    this.setPosition({latitude, longitude});
};
let vehicles1 = new Vehicle({id: "AL1024", latitude: 59.367647, longitude: 18.213451});
let vehicles2 = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});

class AlmostEmptyClass {
    constructor(sth) {
        console.log(sth);
    };
    sayHi(){
        console.log("Hi")
    };
};

let almostEmptyObject = new AlmostEmptyClass(120); // -> 120 dclaracion de variable de la clase
almostEmptyObject.sayHi(); // -> Hi! 

class Vehicles {
    constructor({id, latitude, longitud}){
        this.setPosition = function({latitude, longitud}){
            this.time = Date.now();
            this.longitude = this.longitude;
            this.latitude = latitude;
        };
        this.getPosition = function(){
            return {
                latitude: this.latitude,
                longitude: this.longitude
            };
        };
        this.id = id;
         this.status = this.latitude,
         this.setPosition({latitude , longitude});
    };
};

function namedFunction() { 
    console.log("I'm named, I hope ... ") 
};
let anonymousFunction = function() {
    console.log("I'm a bit anonymous ...")
};
let notExactlyAnonymousFunction = function anotherNamedFunction() {
    console.log("I'm confused ...")
};
namedFunction();    // -> I'm named, I hope ...
anonymousFunction();    // -> I'm a bit anonymous ...
notExactlyAnonymousFunction();    // -> I'm confused ...
