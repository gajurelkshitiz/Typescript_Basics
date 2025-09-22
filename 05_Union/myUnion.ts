// Example : 1

let score: number | string = 22;
score = 12;
score = "12";

    // score = true;   // not assignable error over here 


// Example : 2

type User = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    id: number;
}

let kshitiz: User | Admin = { name: "kshitiz", id: 111 };

kshitiz = { username: "gajurel", id: 111 }


// Example : 3   [ function can have multiple arguments and multiple return values ]

getDbId(3);
getDbId("2");

function getDbId(id: number | string) {
    if (typeof id === "string"){
        id.toLowerCase()
    }
}



// Example : 4   [ arrays ]

const data: number[] = [1, 2, 3];       // --> Array of Numbers
const data1: string[] = ["a", "b", "c"];    // --> Array of Strings
const data2: number[] | string[] = [1, 2, 3];  // --> Either complete Array of String OR complete Array of Numbers  

    // can't accept ::: [ 1, 2, "a"] 

const data3: (number | string)[] = ["a", 5, "b"];



// Example : 5

    // --> Literal Type of assignment

let PI:3.14 = 3.14;

// PI = 3.145   // can't assign this value



// Practical Example:

let seatAllotment: 'aisle' | 'middle' | 'window';

seatAllotment = "aisle"     // Allowed
// seatAllotment = "crew"      // Not Allowed
