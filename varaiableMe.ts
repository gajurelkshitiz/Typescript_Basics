// string
let greetings: string = "hello world";   // --> here : string should be deduce, ts will by default add a type, and this doesn't look standard either
console.log(greetings);


// number 
let userId = 123452
console.log(userId)

userId.toFixed()


// boolean
let isLoggedIn = true;
console.log(isLoggedIn);


// don't use any:

// let hero;    // --> this is allow any type of value to be returned, which is not desired.

let hero: string;

function getHero() {
    return "thor"
}

hero = getHero()







export {}