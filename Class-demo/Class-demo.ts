class user {
    name : string;
    age: number;

    constructor(name,age){
        this.name = name;
        this.age = age;
    }

     display():void {
        console.log(`UserInfo: ${this.name} and age is : ${this.age}` );
    }
}

let user1 = new user ('azad',21);
console.log(user1);
let user2 = new user ('sadia',20);
console.log(user2);