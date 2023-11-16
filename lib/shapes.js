// Parent class
class Shape {
    constructor(shapeColor, textColor, textContent) {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.textContent = textContent;

        // used as a string separator for .split() to be implemented in shape subclasses
        this.stringSeparator = 'stringSeparator';
    }

    render() {
        return `<svg 
        xmlns="http://www.w3.org/2000/svg" 
        version="1.1" 
        width="300" 
        height="200">

        ${this.stringSeparator}

        </svg>`
    }

}

class Circle extends Shape {
    constructor(shapeColor, textColor, textContent) {
        super(shapeColor, textColor, textContent);
    }

    render() {
        // Predefined, parental class canvas size
        const svgCanvas = super.render();
        const svgShape = `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
        const svgText = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textContent}</text>`;
        // Destructured assignments for the split svg canvas array to allow concatenation of the user's desired content
        const [startSVGtag, endSVGtag] = svgCanvas.split(this.stringSeparator);
        return startSVGtag + svgShape + svgText + endSVGtag;
    }
}

class Triangle extends Shape {
    constructor(shapeColor, textColor, textContent) {
        super(shapeColor, textColor, textContent);
    }
    // Render svg triangle
    render() {
        const svgCanvas = super.render();
        const svgShape = `<polygon points="150,0 265,160 35,160" fill="${this.shapeColor}" />`;
        const svgText = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textContent}</text>`;
        const [startSVGtag, endSVGtag] = svgCanvas.split(this.stringSeparator);
        return startSVGtag + svgShape + svgText + endSVGtag;
    }
}

class Square extends Shape {
    constructor(shapeColor, textColor, textContent) {
        super(shapeColor, textColor, textContent);
    }
    // Render svg rectangle
    render() {
        const svgCanvas = super.render();
        const svgShape = `<rect x="70" y="30" width="160" height="150" fill="${this.shapeColor}" />`;
        const svgText = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textContent}</text>`;
        const [startSVGtag, endSVGtag] = svgCanvas.split(this.stringSeparator);
        return startSVGtag + svgShape + svgText + endSVGtag;
    }
}

module.exports = { Circle, Triangle, Square };