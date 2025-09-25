"use strict";
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class Youtube {
    constructor(cameraMode, filter, burst, color) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.color = color;
    }
    createStory() {
        console.log("Story was created");
    }
}
