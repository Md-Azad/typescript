let users :{name:string,id:number}  //Object declaration
users = {name:"azad",id:102}
// console.log(users);

let studentList : object[];// array of object declaration
studentList = [];
let student1 : {name:string,id:number}
student1 = {name:"Azad",id:101}
studentList.push(student1)
// console.log(students);
let student2 : {name:string,id:number}
student2 = {name:"sadiya",id:102}
studentList.push(student2)
// console.log(students);

for(const key in studentList){
    console.log(studentList[key]['name']);
}
