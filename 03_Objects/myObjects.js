"use strict";
// Example No. 1:
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "kshitiz",
    email: "kshitiz@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "kshitiz", isPaid: false });
function greet(person) {
    return "Hello " + person.name;
}
