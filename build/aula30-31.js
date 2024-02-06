"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = require("./classes");
const classes_2 = __importDefault(require("./classes"));
const p1 = new classes_2.default('Gabriel', 1.72);
const obj1 = new classes_1.Objeto('Pc');
console.log(p1.nome);
console.log(p1.altura);
console.log(classes_1.coisas);
