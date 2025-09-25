"use strict";
console.log("First Typescript Project Setup, hello world");
console.log('typescript is amazing');
// <--------------- CLASS DEFINITION --------------------->:
// class User {
//     public email: string
//     private name: string
//     readonly city: string = "Biratnagar"
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;  
//         this.city       // this is allowed for private, readonly
//     }
// }
// <--------------- PROFESSIONALLY DEFINING CLASSES --------------------->:
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Biratnagar";
    }
    deleteToken() {
        console.log('Token Deleted');
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
const kshitiz = new User("kshitiz@gmail.com", "kshitiz");
kshitiz.city; // it is readable is i use 'readonly city: string = "Biratnagar" '
