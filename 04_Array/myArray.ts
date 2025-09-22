// Example : 1

const superHeros: string[] = []    // here the type is : string of arrays
const heroPower: Array<number> = []


superHeros.push("spiderMan");
heroPower.push(3);


// Example : 2

type User = {
    name: string;
    isActive: boolean;
}

const allUsers: User[] = []

allUsers.push({ name: "kshitiz", isActive: true })


// Example : 3

const MLModels: number[][] = [
    [123, 189, 255],
    [255, 0, 111],
]



// Example : 4

const matrix1: number[][] = [];     // bracket style   [ shorthand form ]
const matrix2: Array<Array<number>> = [];    // generic style  [ generic form ]

        // ---> Both mean the same thing, array of numbers.

