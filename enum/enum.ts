// numerous enum

enum requestType {
    north,
    south,
    east,
    west

}
console.log(requestType);
console.log(requestType.east);

// string enum

enum requestType2 {
    name = 'Azad',
    class = 'ten',
    section = 'A',
    department = 'science'
}
console.log(requestType2);
console.log(requestType2.department);

// hetergenous enum / mixed enum
// it can be used with mixed with number and string but not recommended.

enum requestType3 {
    name = 'azad',
    id = 1,
    section = 'b'
}
console.log(requestType3);
console.log(requestType3.name);

