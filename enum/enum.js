// numerous enum
var requestType;
(function (requestType) {
    requestType[requestType["north"] = 0] = "north";
    requestType[requestType["south"] = 1] = "south";
    requestType[requestType["east"] = 2] = "east";
    requestType[requestType["west"] = 3] = "west";
})(requestType || (requestType = {}));
console.log(requestType);
console.log(requestType.east);
// string enum
var requestType2;
(function (requestType2) {
    requestType2["name"] = "Azad";
    requestType2["class"] = "ten";
    requestType2["section"] = "A";
    requestType2["department"] = "science";
})(requestType2 || (requestType2 = {}));
console.log(requestType2);
console.log(requestType2.department);
// hetergenous enum / mixed enum
// it can be used with mixed with number and string but not recommended.
var requestType3;
(function (requestType3) {
    requestType3["name"] = "azad";
    requestType3[requestType3["id"] = 1] = "id";
    requestType3["section"] = "b";
})(requestType3 || (requestType3 = {}));
console.log(requestType3);
console.log(requestType3.name);
