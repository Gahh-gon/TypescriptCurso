"use strict";
var Veiculos;
(function (Veiculos) {
    class Carro {
        nome;
        motor;
        constructor(nome) {
            this.nome = nome;
            this.motor = new Motores.Motor(1000);
        }
    }
    Veiculos.Carro = Carro;
})(Veiculos || (Veiculos = {}));
var Motores;
(function (Motores) {
    class Turbo {
        potecia;
        constructor(potecia) {
            this.potecia = potecia;
        }
    }
    class Motor {
        potecia;
        constructor(potecia) {
            this.potecia = potecia;
        }
    }
    Motores.Motor = Motor;
})(Motores || (Motores = {}));
const car1 = new Veiculos.Carro("rapid");
console.log(car1.motor);
