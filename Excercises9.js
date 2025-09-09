// -----------------------------
// Vehicle con constructor clásico
// -----------------------------
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

// -----------------------------
// Vehicle1 con propiedad de clase
// -----------------------------
class Vehicle1 {
    status = "unavailable"; // propiedad definida en la clase

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

// -----------------------------
// Clase User
// -----------------------------
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

// -----------------------------
// Clase Point con propiedad de clase
// -----------------------------
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
console.log(point); 
// 👉 Point { name: 'Point', x: 100, y: 200, color: 'red' }

// -----------------------------
// User1 con campo privado
// -----------------------------
class User1 {
    #name = 'bob'; // campo privado

    get name() {
        return this.#name;
    }
}

let u1 = new User1();
console.log(u1.name); // 👉 bob

// -----------------------------
// Clase vacía con instanceof
// -----------------------------
class User3 {}

let u3 = new User3(); 
console.log(`${u3 instanceof User3} ${typeof u3}`); 
// 👉 true object

// -----------------------------
// Getter y Setter
// -----------------------------
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

// -----------------------------
// Herencia básica
// -----------------------------
class A {
    test1() { return 'A';}
}

class B extends A {
    test2() { return 'B'; }
}

let b1 = new B();
console.log(`${b1.test1()} ${b1.test2()}`); 
// 👉 A B

// -----------------------------
// Herencia con super
// -----------------------------
class A2 {
    getName() {
        return 'A';
    }
}

class B2 extends A2 {
    getName() {
        return 'B';
    }
    test(x) {
        return x ? this.getName() : super.getName();
    }
}

let b2 = new B2();
console.log(`${b2.test(true)} ${b2.test(false)}`); 
// 👉 B A
