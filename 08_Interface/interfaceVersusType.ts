// < ----------------- DIFFERENCES IN BETWEEN --------------------- >

/*
    // 1.  Extending an interface

    interface Animal {
        name: string;
    }

    interface Bear extends Animal {
        honey: boolean;
    }

    function getBear(): Bear {
        return {
            name: "yogi",
            honey: true
        }
    }

    const bear = getBear();
    bear.name;
    bear.honey;

*/

// < ----------------- DIFFERENCES IN BETWEEN --------------------- >

/*
    // 1. Extending a type via intersections

    type Animal = {
        name: string;
    }

    type Bear = Animal & {
        honey: boolean;
    }

    function getBear(): Bear {
            return {
                name: "yogi",
                honey: true
            }
        }

    const bear = getBear();
    bear.name;
    bear.honey;

*/

// < ----------------- DIFFERENCES IN BETWEEN --------------------- >


/*
    // Adding new fields to an existing interface

    interface Window {
    title: string;
    }

    interface Window {
    ts: TypeScriptAPI;
    }

    const src = 'const a = "Hello World"';
    window.ts.transpileModule(src, {});

    // NOTE: We can Add Fields.

*/

// < ----------------- DIFFERENCES IN BETWEEN --------------------- >


/*
    // A type cannot be changed after being created

    type Window = {
    title: string;
    }

    type Window = {
    ts: TypeScriptAPI;
    }

    // Error: Duplicate identifier 'Window'.


    // NOTE: We Can't Add Fields.

*/