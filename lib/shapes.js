class Shape {
    constructor(shape) {
        this.shape = shape;
    }
}

class Circle extends Shape {
    constructor(shape) {
        super.call();
    }

    render() {
        
    }
}

class Triangle extends Shape {
    constructor(shape) {
        super.call();
    }
}

class Square extends Shape {
    constructor(shape) {
        super.call();
    }
}

export { Shape, Circle };