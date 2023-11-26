var users; //Object declaration
users = { name: "azad", id: 102 };
// console.log(users);
var students; // array of object declaration
students = [];
var student1;
student1 = { name: "Azad", id: 101 };
students.push(student1);
// console.log(students);
var student2;
student2 = { name: "sadiya", id: 102 };
students.push(student2);
// console.log(students);
for (var key in students) {
    console.log(students[key]['name']);
}
