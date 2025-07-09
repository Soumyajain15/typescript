/*let arr:[string,number,boolean] = ['hello', 42, true];
// This is a tuple with three elements: a string, a number, and a boolean
enum Useroles{
    ADMIN = 'admin',
    GUEST = 'guest',
    SUPER_ADMIN = 'super_admin'
}
enum StatusCodes{
    ABANDONED = "abandoned status code 500",
    NOTFOUND = "not found status code 404",
}
// Using the enum Useroles
StatusCodes.NOTFOUND;

let a:number = 12;
console.log(a);
let b:unknown;
b=12;
b='hello';
// Type assertion to treat b as a string
// This is necessary because b is of type unknown
if(typeof b === 'string'){
    console.log(b.toUpperCase());
}
// Function with no return type
// This function does not return anything, it just logs to the console
function abcd():void{
    console.log('hello world');
}
// d can hold only number or boolean values
// d can be assigned to either a number or a boolean
let d:number|boolean;
d = 12;
d = true;
*/
/*interface User{
    name:string,
    email:string,
    password:number
    gender?:string // Optional property
}
function getDataofUser(obj:User){
obj.name = 'John Doe',
obj.email = 'john@gmail.com',
obj.password=12345678,
obj.gender = "male"
}
*/
/*

interface User{
    name:string,
    email:string,
    password:number
}
// This interface extends User and adds an additional property 'admin'
// The 'admin' property is a boolean indicating if the user is an admin or not
interface Admin extends User{
    admin:boolean;
}
// This function takes an object of type Admin and sets the 'admin' property to true
// The function modifies the object passed to it, setting the 'admin' property to true
// This is useful for marking a user as an admin in the system
function abcd(obj:Admin){
    obj.admin=true;

}


// Type alias for a union type
type sankhy=number|number|string;
// This type alias 'sankhy' is equivalent to the 'number' type
let a:sankhy;
a=12; // Valid assignment


type user={
    name:string,
    email:string,
}
type admin= user&{
    getdetails(username:string):void
}

*/
// This is a class definition in TypeScript
// A class is a blueprint for creating objects with specific properties and methods
var Bottle = /** @class */ (function () {
    function Bottle() {
        this.radius = 120;
        this.price = 100;
        this.color = "white";
    }
    return Bottle;
}());
var b1 = new Bottle();
// constructor is a special method for creating and initializing an object created with a class
// The constructor is called when an instance of the class is created
var botlegar = /** @class */ (function () {
    function botlegar(name, price) {
        this.name = name;
        this.price = price;
    }
    return botlegar;
}());
var b2 = new botlegar("whisky bottle", 10000);
var humanmaker = /** @class */ (function () {
    function humanmaker(name, isHandsome) {
        this.name = name;
        this.isHandsome = isHandsome;
        this.age = 0;
    }
    return humanmaker;
}());
new humanmaker("John", true);
// This is a class with a constructor that initializes the properties 'name' and 'isHand'
