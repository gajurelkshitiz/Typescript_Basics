// Example No. 1:

const User = {
    name: "kshitiz",
    email: "kshitiz@gmail.com",
    isActive: true
}


function createUser({name: string, isPaid: boolean}) {

}

createUser({name: "kshitiz", isPaid: false})


// Example No. 2:

/*
// TODO: Option no 1
function greet(person: { name: string, age: number }) {
    return "Hello " + person.name;
}



// this can be written as 
interface Person {
    name: string;
    age: number;
}

function greet(person: Person) {
    return "Hello " + person.name;
}



// or it can be:
type Person = {
    name: string;
    age: number;
}

function greet(person: Person) {
    return "Hello " + person.name;
}


*/


// TODO: Bad Behavior of Object:
function createCourse ({ name: string, price: number }) {

}

// createCourse({ name: "reactjs", price: 450, noOfEnrollment: 50 })  // --> this is not allowed.

let newCourse = { name: 'nodejs', price: 500, instructor: 'kshitizgajurel', rating: 5.8 }
createCourse(newCourse);  // But this is allowed.


export {}