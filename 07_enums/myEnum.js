/*
    An enum in Typescript is a way to give a set of related values a name so you can use words instead of raw numbers or strings.

    for example:
        enum Direction { Up, Down, Left, Right }

        let move: Direction = Direction.Up

*/
// < ------------------- Methods --------------------- >
/*
enum SeatChoice {
    AISLE,    // 0
    MIDDLE,
    WINDOW,
    FOURTH
}
// By defult the numbering will be 0, 1, 2, 3
*/
// < ------------------- Methods --------------------- >
/*
enum SeatChoice {
    AISLE = 10,
    MIDDLE,
    WINDOW,
    FOURTH
}
// we can increment it to start it from any value
*/
// < ------------------- Methods --------------------- >
/*
enum SeatChoice {
    AISLE = 10,
    MIDDLE = 43,
    WINDOW,
    FOURTH
}
// i can also assign 10, 43, 44, 45
*/
// < ------------------- Methods --------------------- >
/*
enum SeatChoice {
    AISLE = 'aisle',
    MIDDLE = 'middle',
    WINDOW = 'window',
    FOURTH = 'fourth'
}
// Or i can use string as a value here
*/
// < ------------------- Methods --------------------- >
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["AISLE"] = "aisle";
    SeatChoice[SeatChoice["MIDDLE"] = 12] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 13] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 0] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
var kgSeat = SeatChoice.AISLE;
/*
    ### At compile time, the above ts code is generated as:

    "use strict";
    var SeatChoice;
    (function (SeatChoice) {
        SeatChoice["AISLE"] = "aisle";
        SeatChoice[SeatChoice["MIDDLE"] = 12] = "MIDDLE";
        SeatChoice[SeatChoice["WINDOW"] = 13] = "WINDOW";
        SeatChoice[SeatChoice["FOURTH"] = 0] = "FOURTH";
    })(SeatChoice || (SeatChoice = {}));
    const kgSeat = SeatChoice.AISLE;


    here, (SeatChoice || (SeatChoice = {})) is a  `IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)` ==> 'iffy'

    > Immediately Invoked = The function runs as soon as it's defined.
    > Function Expression = Its a function as a value, not a normal function declaration.

*/
/*
    //TODO: Clean Version of defining enum:

    const enum SeatChoice {
        AISLE = 'aisle',
        MIDDLE = 12,
        WINDOW,
        FOURTH = 0
    }
    const kgSeat = SeatChoice.AISLE



    // At Compile Time:

    "use strict";
    const kgSeat = "aisle"    // SeatChoice.AISLE ;

*/
