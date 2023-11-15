const shapes = require('./shapes.js');

// Circle test suite
describe('Circle', () => {
    describe('Returns a circle with a blue shape color', () => {
        it('should return a circle with a blue shape color', () => {
            const circle = new shapes.Circle('blue', 'pink', 'CAT');

            expect(circle.shapeColor).toEqual('blue');
        });
    });

    describe('render', () => {
        it('Returns a valid circle svg based on provided input', () => {
            const result = new shapes.Circle('blue', 'pink', 'CAT').render();
            const expected = 
            `<svg 
            xmlns="http://www.w3.org/2000/svg" 
            version="1.1" 
            width="300" 
            height="200">
    
            <circle cx="150" cy="100" r="80" fill=blue /><text x="150" y="125" font-size="60" text-anchor="middle" fill="pink">CAT</text>
    
            </svg>`;

            // serialize the expected and result string for an equal comparison
            const removeWhitespace = (str) => str.replace(/\s/g, '');

            const serializedResult = removeWhitespace(result);
            const serializedExpected = removeWhitespace(expected);

            expect(serializedResult).toEqual(serializedExpected);
        });
    });
});

// Triangle test suite
describe('Triangle', () => {
    describe('Returns a triangle with a blue shape color', () => {
        it('should return a triangle with a blue shape color', () => {
            const circle = new shapes.Triangle('blue', 'pink', 'CAT');

            expect(circle.shapeColor).toEqual('blue');
        });
    });

    describe('render', () => {
        it('Returns a valid triangle svg based on provided input', () => {
            const result = new shapes.Triangle('blue', 'pink', 'CAT').render();
            const expected = 
            `<svg 
            xmlns="http://www.w3.org/2000/svg" 
            version="1.1" 
            width="300" 
            height="200">
    
            <polygon points="150,0 265,160 35,160" fill=blue /><text x="150" y="125" font-size="60" text-anchor="middle" fill="pink">CAT</text>
    
            </svg>`;

            const removeWhitespace = (str) => str.replace(/\s/g, '');

            const serializedResult = removeWhitespace(result);
            const serializedExpected = removeWhitespace(expected);

            expect(serializedResult).toEqual(serializedExpected);
        });
    });
});

// Square test suite
describe('Square', () => {
    describe('Returns a square with a blue shape color', () => {
        it('should return a square with a blue shape color', () => {
            const circle = new shapes.Square('blue', 'pink', 'CAT');

            expect(circle.shapeColor).toEqual('blue');
        });
    });

    describe('render', () => {
        it('Returns a valid square svg based on provided input', () => {
            const result = new shapes.Square('blue', 'pink', 'CAT').render();
            const expected = 
            `<svg 
            xmlns="http://www.w3.org/2000/svg" 
            version="1.1" 
            width="300" 
            height="200">
    
            <rect x="70" y="30" width="160" height="150" fill=blue /><text x="150" y="125" font-size="60" text-anchor="middle" fill="pink">CAT</text>
    
            </svg>`;

            const removeWhitespace = (str) => str.replace(/\s/g, '');

            const serializedResult = removeWhitespace(result);
            const serializedExpected = removeWhitespace(expected);

            expect(serializedResult).toEqual(serializedExpected);
        });
    });
});