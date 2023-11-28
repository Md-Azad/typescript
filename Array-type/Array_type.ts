let userName: string[];
// let userName : Array<string>; // this is also another way to declare the array in typescript
userName = ['azad','rakib','babul','abul'];


userName.sort();
console.log(userName);

let multipleType: (string| number)[];
multipleType = [1,'azad','sadiya']
console.log(multipleType);

let users: Array<string>;
users = ['anis', 'rabu', 'pinky'];
users.sort();
console.log(users);

users.push('limon');
console.log(users);

users.pop();
console.log(users);

users.unshift('milton');
console.log(users);

users.shift();
console.log(users);



