"use strict";
class TakePicture {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        // some calculation logic:
        return 6;
    }
}
class Facebook extends TakePicture {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
// const kshitiz = new Instagram("test", "Test");
const kg = new Facebook("test", "Test", 2);
kg.getReelTime();
