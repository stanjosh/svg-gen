#!/usr/bin/env node
import inquirer from "inquirer";
import { Square, Triangle, Circle } from "./lib/shapes.cjs";
import fs from "fs";
const currentPath = process.cwd();


async function buildSVG() {
    await inquirer
      .prompt(questions)
      .then((answers) => {
        var svg;
        console.log(answers)
        switch(answers.shape) {
            case "Square":
                svg = new Square(answers)
                console.info(svg)
                break
            case "Triangle":
                svg =  new Triangle(answers)
                console.info(svg)
                break
            case "Circle":
                svg = new Circle(answers)
                console.info(svg)
                break
        };
        return svg;
    })
        .then((svg) => writeSVG(svg))
}

async function writeSVG(svg) {
    var filename = "logo.svg"
    fs.writeFile(filename, svg.render(), (err) => {
        if (err) console.log(err);
    });
    console.info(`Generated ${filename}`);
}

var questions = [
    {
        type: "text",
        name: "text",
        message: "Enter up to three text characters for your logo:",
        maxLength: 3
    },
    {
        type: "text",
        name: "textColor",
        message: "What color would you like any text to be?",
    },
    {
        type: "list",
        name: "shape",
        message: "Which shape would you like?",
        choices: ["Square", "Triangle", "Circle"]
    },
    {
        type: "input",
        name: "color",
        message: "What HTML color would you like the shape to be filled with?"
    },
  ];

  buildSVG();