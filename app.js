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
/*
class Bottle{
    radius=120;
    price=100;
    color="white";

}
let b1=new Bottle();
// constructor is a special method for creating and initializing an object created with a class
// The constructor is called when an instance of the class is created
class botlegar{
    constructor(public name:string,public price:number){}
}
let b2=new botlegar("whisky bottle", 10000);
class humanmaker{
    age=0;
    constructor(public name: string,public isHandsome:boolean){}
}
new humanmaker("John", true);
// This is a class with a constructor that initializes the properties 'name' and 'isHand'
class Music{
    constructor(public name:string,public singer:string,public price:number){}

    // This method returns a string representation of the Music object
    getDetails():string{
        return `Music Name: ${this.name}, Singer: ${this.singer}, Price: ${this.price}`;
    }
}


class abcd{
    name="John";
changename(){
    this.name="Doe";
    console.log(this.name);
}
}
// This is a class with a method that changes the name property and logs it to the console
class bootlemaker{
    constructor(public name:string,public price:number=1000){
       this.name=name;
    }
}
    let a1=new bootlemaker("milton");
// This is a class with a constructor that initializes the properties 'name' and 'price'
//access modifiers


class bootlegar{
    constructor(public name:string){
        
    }
}
class metalbootlegar  extends bootlegar{
    constructor(name:string){
        super(name); // Call the constructor of the parent class
    }
    getvalue(){
        console.log(`The value of the bootlegar is: ${this.name}`);
    }
}
let c1=new metalbootlegar("milton");
c1.name="gsjdbasdhj"; // This is allowed because 'name' is public
c1.getvalue(); // This will call the method from the child class and log the value of 'name'


class user{
    constructor(public name:string){}
     changename(){
        this.name="doe";  // readonly property cannot be changed used along with public
}
}
let u1=new user("john");
// This is a class with a method that changes the name property
u1.changename(); // This will change the name to "doe"

class user1{
    constructor(public name:string,public age:number){}
        getname(){
            return this.name;
        }
        setname(value:string){
            this.name=value; // This setter allows changing the name property
        }
}
let u2=new user1("john", 25);
u2.setname("doe"); // This will change the name to "doe"

class sam{
    static version =1.0;
    static getRandomNumber(){
        return Math.random();
    }
}
let sh1=new sam();
// This is a class with a static property 'version' and a static method 'getRandomNumber

*/
/*

function ac(name:string,cb:(value:string)=>void){
    // This function takes a name and a callback function as parameters
    // The callback function is called with the name as an argument
    cb("hey");

}
ac("harsh",(value:string)=>{
    console.log(value);
})


//rest and spread operator
// The rest operator allows a function to accept an indefinite number of arguments as an array
function abcde(...args:number[]){
console.log(args);
}
abcde(1,2,3,4,5); // This function can take any number of arguments of type number
var arr1=[1,2,3,4,5];
// The spread operator allows an array to be expanded into individual elements
var arr2=[...arr1];
console.log(arr2); // This will log the elements of arr1 as individual elements in arr2


//function overloading
function abcds(a:string):void;
function abcds(a:string,b:number):number;
function abcds(a:any,b?:number):any{
    if(typeof a==="string" && b===undefined){
        console.log(a);
}
if(typeof a==="string" && typeof b==="number"){
    return a+b; // This will return the concatenation of the string and number
}
else throw new Error("somethin went wrong");
}
abcds("hey");
abcds("hey",123);
*/
//generic function
// A generic function allows you to create a function that can work with any data type
function abcds1(a, b, c) {
}
abcds1("hello", "world", 123); // This will call the function with a string type for 'a'
function abcdh(obj) { }
abcdh({ name: "halua", price: 100, key: "key1" }); // This will call the function with an object that has a string type for 'key'
//typecasting
// Type casting is used to convert a variable from one type to another
var a = 12;
a.toString(); // This will convert 'a' to a string
a.toString(); // This is another way to do type casting in TypeScript
console.log(a);
console.log(typeof a);
