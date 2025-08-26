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
