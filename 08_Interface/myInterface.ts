// interface definition:

interface User {
    readonly dbId: number;
    email: string;
    userId: number;
    googleId?: string;
    // startTrail: () => string;       // i prefer downward way, which is same as this
    startTrail(): string;
    getCoupon(couponName: string, value: number): number;
}


// this is often called as 're-opening of the interface'

interface User {
    githubToken: string;
}


// Inheritance in Typescript:

interface Admin extends User {
    role : "admin" | "ta" | "learner";
}

const kshitiz: User = {
    dbId: 11,
    email: "kshitiz@gmail.com",
    userId: 1001,
    githubToken: 'github', 
    startTrail: () => {
        return "trail started."
    },
    getCoupon: (name: "kshitiz10", value: 15) => {
        return value
    }
}

// Alternatively:

// type User = {
//     email: string;
//     userId: number;
// }


export {}