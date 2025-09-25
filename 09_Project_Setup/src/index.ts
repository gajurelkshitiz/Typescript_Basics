console.log("First Typescript Project Setup, hello world");
console.log('typescript is amazing');


// class:
class User {
    public email: string
    private name: string
    readonly city: string = "Biratnagar"
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;  
        this.city       // this is allowed for private, readonly
    }
}

const kshitiz = new User("kshitiz@gmail.com", "kshitiz");
kshitiz.city        // it is readable is i use 'readonly city: string = "Biratnagar" '
