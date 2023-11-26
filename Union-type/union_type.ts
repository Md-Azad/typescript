let num: string|number;
num = 'azad';
console.log(num);

function displayName(userId: number|string){
    console.log(userId);
}

displayName("101");
displayName(101)