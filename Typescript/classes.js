var hello = /** @class */ (function () {
    function hello(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    hello.prototype.getFirstName = function () {
        console.log("My name is " + this.firstname + " " + this.lastname);
    };
    hello.prototype.getLastName = function () {
    };
    return hello;
}());
//let obj= new hello();
//obj.firstname="Jassi";
var obj = new hello("Jassi", "Singh");
//obj.firstname="Jassi";
obj.getFirstName();
