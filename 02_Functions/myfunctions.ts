function addTwo(num: number) : number {
    return num + 2
    // return "hello"   
}

function getUpper(val: string) {
    val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean) {

}

function loginUser(name: string, email: string, isPaid: boolean = false) {

}



// traditional function
function getValue(myVal: number) {
    if(myVal>5) {
        return true
    }
    return "200 OK"
}

getValue(5)


// arrow function
const getHello = (s: string): string => {
    return ""
}



const heros = ["thor","spiderman","ironman"]    // hero is string by default: it senses.
// const heros = [1, 2, 3]

heros.map((hero): string => {
    return `hero is ${hero}`
    // return 2   // not allowed
})


function consoleError(errmsg: string): void {
    console.log(errmsg);
}

function handleError(errmsg: string): never {
    throw new Error(errmsg);
}


addTwo(5)

getUpper("hello")

signUpUser("abc","abc@gmail.com",false)

loginUser("ram", "ram@gmail.com")

export {}