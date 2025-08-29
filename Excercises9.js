class Vehicle {
    constructor({id, latitude, longitude}) {
        this.id = id;
        this.status = "unavailable";  // status por defecto
        this.setPosition({latitude, longitude});
    }

    setPosition({latitude, longitude}) {
        this.time = Date.now();
        this.latitude = latitude;
        this.longitude = longitude;
    }

    getPosition() {
        return {
            latitude: this.latitude,
            longitude: this.longitude
        };
    }
}

class Vehicle1 {
    status = "unavailable"; // propiedad de clase

    constructor({id, latitude, longitude}) {
        this.id = id;
        this.setPosition({latitude, longitude});
    }

    setPosition({latitude, longitude}) {
        this.time = Date.now();
        this.latitude = latitude;
        this.longitude = longitude;
    }

    getPosition() {
        return {
            latitude: this.latitude,
            longitude: this.longitude
        };
    }
}

class User {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log(this.name);
    }
}

let user = new User('Alice');
user.showName(); // 👉 Alice

class Point {
    name = 'Point'; // propiedad de clase

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    setColor(color) {
        this.color = color;
    }
}

let point = new Point(100, 200);
point.setColor('red');
console.log(point); // 👉 {x:100, y:200, color:'red', name:'Point'}

class User1 {
    #name = 'bob'; // campo privado

    get name() {
        return this.#name;
    }
}

let u1 = new User1();
console.log(u1.name); 

class User3 {}

let u3 = new User3(); 
console.log(`${u3 instanceof User3} ${typeof u3}`); 

class Users {
    _name = "alice";
    
    // getter
    get name() {
        return this._name;
    }

    // setter
    set name(value) {
        this._name = value;
    }
}

let users = new Users();
users.name = "bob"; // usa el setter
console.log(users.name); // usa el getter → "bob"

class A {
    test1() { return 'A';}
}
class B extends A{

    test2() { return 'B';}

}
let b = new B();
console.log(`${b.test1()} ${b.test2()}`);

class A {
    getName() {
        return 'A';
    }
}

class B extends A {
    getName() {
        return 'B';
    }
    test(x) {
        return x ? this.getName() : super.getName();
    }
}

 let s = new B();
console.log(`${s.test(true)} ${s.test(false)}`);
