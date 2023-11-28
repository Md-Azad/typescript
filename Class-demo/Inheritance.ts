class user {
    name : string;
    age: number;

    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }

     display():void {
        console.log(`UserInfo: ${this.name} and age is : ${this.age}` );
    }
}

class student extends user{
    id :number;
    
    constructor(name:string,age:number,idNum:number){
        super(name,age);
        this.id = idNum;
    }

    display():void {
        console.log(`UserInfo: ${this.name} and age is : ${this.age} and id: ${this.id}` );
    }

}

let student1 = new student("azad",21,10123);
let student2 = new student("sadiya",23,101);
console.log(student1);
console.log(student2);