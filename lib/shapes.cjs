class Shape {
    constructor (args) {
        this.text = args.text ? args.text : ""
        this.textColor = args.textColor ? args.textColor : "#FFFFFF"
    }

    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <style>    
        .heavy {
            font: bold 120px sans-serif;
          }
        </style>
        ${this.renderShape}
        <text x="150" y="125" text-anchor="middle" class="heavy" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
}

class Circle extends Shape {
    constructor (args) {
        super(args)
        this.color = args.color ? args.color : "#000000"
        this.renderShape = `<circle cx="150" cy="100" r="100"  fill="${this.color}" />`
    }
}

class Square extends Shape {
    constructor (args) {
        super(args)
        this.color = args.color ? args.color : "#000000"
        this.renderShape = `<rect width="200" height="200" fill="${this.color}"/>`
    }
}

class Triangle extends Shape {
    constructor (args) {
        super(args)
        this.color = args.color ? args.color : "#000000"
        this.renderShape = `<polygon points="0,300 200,0 300,200" fill="${this.color}" />`
    }
}

module.exports = {Shape, Circle, Square, Triangle}