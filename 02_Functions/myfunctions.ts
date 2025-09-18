function addTwo(num: number) {
    // return num + 2
    return "hello"    // isn't this a problem ??
}

function getUpper(val: string) {
    val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean) {

}

function loginUser(name: string, email: string, isPaid: boolean = false) {

}


addTwo(5)

getUpper("hello")

signUpUser("abc","abc@gmail.com",false)

loginUser("ram", "ram@gmail.com")

export {}