/// <reference path="ddd" />

x = 12;

class Point {
    x: number;

    constructor(x: number) {
        this.x = x;
    }

    dump() {
        console.log(this.x);
    }
}

class PointEx extends Point {
    constructor(x, y) {
        super(x);

        setTimeout(() => {
            console.log(this.x);
        }, 1000);
    }
}

