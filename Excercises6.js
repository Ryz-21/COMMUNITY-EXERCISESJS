console.log(typeof 2.5);
console.log(typeof "one two three");
console.log(typeof false);

let nr = 2.5;
nr = nr / 2;
console.log(typeof nr);//number

let nrt = 2.5;
nr = nrt /2;
console.log(typeof nr);

let a = [10,20 , "en to tre", true ,50]; // mixt array
a[4] = a[4] * 2;

console.log(a[0]);
console.log(a[2]);
console.log(a[4]);


// objects in javascript 

let sampleObject = {
    id: 10,
    delay:20,
    name: "en to tre",
    isPresent: true,
    delay: 50
};

sampleObject.delay = sampleObject.delay * 2;
console.log(sampleObject.id);
console.log(sampleObject.name);
console.log(sampleObject.delay);

let contact = {};

contact.tel = "207-662-5412";
console.log(contact);
console.log(contact.tel)

let c0ntact = {
    tel:"207-662-5412",
    email:"RonaldSMurphy@freepost.org"
};
console.log(c0ntact);
console.log(contact.tel);


console.log(typeof console);
console.log(typeof console.log);

let nrs = 10;
let b = false;
let strt = "uno dos tres";
let arr = [10,20,30];
let obj = {
    x:10,
    y:20
};
let fn = function(arg){
    console.log(arg)
}
fn(123);

let test = {
    nr:10,
    b:false,
    str: "uno dos tres",
    arr:[10,20,30],
    obj:{
        x:10,
        y:20
    },
    fn:function(arg){
            console.log(arg)
}
};
test.fn(123);

console.log(test.obj.x);
test.obj.y = 40;

let point = {
    x:0,
    y:0,
    moveHorizontally: function(distance){
        this.x = this.x + distance;
    },
    moveVertically: function(distance){
        this.y = this.y + distance;
    }
}
console.log(point.x);
point.moveHorizontally(30);
console.log(point.x);


let contact1 = {
    tel:"207-662-5412",
    email:"RonaldSMurphy@freepost.org"
};

contact1.firstName = "Ronald";
contact1.lastName = "Murphy";

console.log(contact1.tel);
console.log(contact1.firstName);

console.log(contact1.notes);

contact.email = {
    private: "RonaldsMurphy@freepost.org",
    Work: "rsmurphy@briazz.com"
}
console.log(contact.email.Work);

delete contact.email.Work;
console.log(contact.email.Work);
console.log(contact.email.private);


let contactEmails = {
    email_1: "RonaldSMurphy@freepost.org",
    email_2: "rsmurphy@briazz.com"
};

for (let i = 1; i <= 2; i++) {
    let key = "email_" + i;
    console.log(key);
    console.log(contactEmails[key]);
}

for (let i = 1; i <= 2; i++) {
    let key = "email_" + i;
    console.log(`${key}: ${contactEmails[key]}`);
}

if (contact.notes){
    console.log(contact.notes);
}

if(!contact.notes){
    contact.notes = "something really in important";
}

console.log(contact.notes);

console.log(contact.email.private);

if(contact && contact.email){
    console.log(contact.email.private)
}

contact && contact.email && console.log(contact.email.private);

if("notes" in contact){
    console.log(contact.notes);
}

for (x in contact){
    console.log(x);
}

for (x in contact){
    console.log(contact[x]);
}

for (x in contact){
    console.log(`${x} : ${typeof contact[x]}: ${contact[x]}`);
}

let keys = Object.keys(contact);

var point1 = {x:10, y:20};
var point2 = {x:10, y:20};

let point3 = point1;
console.log(point1 === point3);


