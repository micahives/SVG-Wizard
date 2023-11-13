class Shape {
    constructor(shape) {
        this.shape = shape;
    }
}

class Circle extends Shape {
    constructor(shape) {
        super(shape);
    }

    // Render svg circle
    render() {
        return `<circle cx="150" cy="100" r="80"`
    }
}

class Triangle extends Shape {
    constructor(shape) {
        super(shape);
    }
    // Render svg triangle
    render() {
        return `<polygon points="150,0 265,160 35,160"`
    }
}

class Square extends Shape {
    constructor(shape) {
        super(shape);
    }
    // Render svg rectangle
    render() {
        return `<rect x="70" y="30" width="160" height="150"/>`
    }
}

export { Shape, Circle, Triangle, Square };