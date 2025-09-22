"use strict";
// let's start with a example demostrating some problem:
Object.defineProperty(exports, "__esModule", { value: true });
/*
in union before, when initializing type "(string | number)[]" , i can position the number or string on any position no restrictions.

What if we need to structure the output from: API call. i.e. first object must be string, second must be number, etc.
*/
var user = [1, "b"];
user = ["m", 20];
// Example : 1
// the use of tuple is not only the type but also the order of the argument:
var tUser;
tUser = ["abc", 11, false]; // accepted
// tUser = [11, "abc", true]      // Not Accepted
// Example : 2
var rgb = [255, 123, 112];
var newUser = [113, "example@google.com"];
newUser[1] = "kg@gmail.com";
newUser.push("abc");
// TODO: Typescript array push method can't catch a  tuple type of the array:
// const testArray: [number, string] = [10, "test", "s"];      // this is error
var testArray = [10, "test"]; // This works.
testArray.push('s'); // It shouldn't had worked, but it works.
var item = ["hello", 1];
