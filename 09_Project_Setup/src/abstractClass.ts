abstract class TakePicture {
    constructor (
        public cameraMode: string,
        public filter: string
    ) {}

    abstract getSepia(): void;

    getReelTime(): number {
        // some calculation logic:
        return 6
    }

}

class Facebook extends TakePicture {
    constructor (
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("Sepia");
    }

}

// const kshitiz = new Instagram("test", "Test");
const kg = new Facebook("test", "Test", 2);
kg.getReelTime()