let users :{name:string,id:number}  //Object declaration
users = {name:"azad",id:102}
// console.log(users);

let students : object[];// array of object declaration
students = [];
let student1 : {name:string,id:number}
student1 = {name:"Azad",id:101}
students.push(student1)
// console.log(students);
let student2 : {name:string,id:number}
student2 = {name:"sadiya",id:102}
students.push(student2)
// console.log(students);

for(const key in students){
    console.log(students[key]['name']);
}