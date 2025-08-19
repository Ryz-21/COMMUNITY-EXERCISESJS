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