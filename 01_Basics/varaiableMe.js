"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// string
var greetings = "hello world"; // --> here : string should be deduce, ts will by default add a type, and this doesn't look standard either
console.log(greetings);
// number 
var userId = 123452;
console.log(userId);
userId.toFixed();
// boolean
var isLoggedIn = true;
console.log(isLoggedIn);
// don't use any:
// let hero;    // --> this is allow any type of value to be returned, which is not desired.
var hero;
function getHero() {
    return "thor";
}
hero = getHero();
