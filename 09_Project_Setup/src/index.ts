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

    // private _courseCount = 1;    --> since private variables are not accessible to sub-classes

    protected _courseCount = 1;

    readonly city: string = "Biratnagar"
    constructor(
        public email: string, 
        public name: string,
        // private userId: string,
    ) {
     
    }

    private deleteToken() {
        console.log('Token Deleted');
    }


    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum) {   // a set accessor can't have a return type annotator.
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum
    }
}


class SubUser extends User {
    isFamily: boolean = true;
    changeCourseCount (){
        this._courseCount = 3;
    }

}


const kshitiz = new User("kshitiz@gmail.com", "kshitiz");
kshitiz.city        // it is readable is i use 'readonly city: string = "Biratnagar" '
