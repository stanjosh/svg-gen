const shapes = require("./shapes.cjs");


describe("Circle", () => {
    it("should generate circle SVG", () => {
            const shape = new shapes.Circle({text: "ben", color: "blue"});
            expect(shape.renderShape).toEqual(`<circle cx="150" cy="100" r="100"  fill="blue" />`);
    });
})

describe("Triangle", () => {
    it("should generate triangle SVG", () => {
            const shape = new shapes.Triangle({text: "han", color: "red"});
            expect(shape.renderShape).toEqual(`<polygon points="0,300 200,0 300,200" fill="red" />`);
    });
})

describe("Square", () => {
    it("should generate square SVG", () => {
            const shape = new shapes.Square({text: "plo", color: "#123123"});
            expect(shape.renderShape).toEqual(`<rect width="200" height="200" fill="#123123"/>`);
    });
})

describe("Shape", () => {
    it("should generate full SVG", () => {
            const shape = new shapes.Circle({text: "plo", color: "#123123", textColor: "#FFFFFF"});
            expect(shape.render()).toEqual(
                `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <style>    
        .heavy {
            font: bold 120px sans-serif;
          }
        </style>
        <circle cx="150" cy="100" r="100"  fill="#123123" />
        <text x="150" y="125" text-anchor="middle" class="heavy" fill="#FFFFFF">plo</text>
        </svg>`
            );
    });

});

