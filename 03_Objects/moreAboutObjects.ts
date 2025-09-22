// ReadOnly and optional

type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: true;
    creditCardDetail?: number;
}

let myUser: User = {
    _id: "12345",
    name: "kshitiz",
    email: "kshitiz@gmail.com",
    isActive: true
}

myUser.email = "k@gmail.com"
// myUser._id = "afa"  // can't update the _id because it is read only.



type cardNumber = {
    cardnumber: string;
}

type cardDate = {
    date: string;
}

type cardDetails = cardNumber & cardDate & {
    cvv: number;
}

// Example usage:
const myCard: cardDetails = {
    cardnumber: "1234-5678-9012-3456",
    date: "12/28",
    cvv: 123
};


export {}


