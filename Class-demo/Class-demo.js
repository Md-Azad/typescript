var user = /** @class */ (function () {
    function user(name, age) {
        this.name = name;
        this.age = age;
    }
    user.prototype.display = function () {
        console.log("UserInfo: ".concat(this.name, " and age is : ").concat(this.age));
    };
    return user;
}());
var user1 = new user('azad', 21);
console.log(user1);
var user2 = new user('sadia', 20);
console.log(user2);
