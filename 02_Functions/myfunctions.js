"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "hello"   
}
function getUpper(val) {
    val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
}
function loginUser(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}
// traditional function
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
getValue(5);
// arrow function
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"]; // hero is string by default: it senses.
// const heros = [1, 2, 3]
heros.map(function (hero) {
    return "hero is ".concat(hero);
    // return 2   // not allowed
});
addTwo(5);
getUpper("hello");
signUpUser("abc", "abc@gmail.com", false);
loginUser("ram", "ram@gmail.com");
