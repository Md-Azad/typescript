var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student(name, age, idNum) {
        var _this = _super.call(this, name, age) || this;
        _this.id = idNum;
        return _this;
    }
    student.prototype.display = function () {
        console.log("UserInfo: ".concat(this.name, " and age is : ").concat(this.age, " and id: ").concat(this.id));
    };
    return student;
}(user));
var student1 = new student("azad", 21, 10123);
var student2 = new student("sadiya", 23, 101);
console.log(student1);
console.log(student2);
