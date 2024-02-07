"use strict";
var Veiculos;
(function (Veiculos) {
    class Carro {
        nome;
        motor;
        constructor(nome) {
            this.nome = nome;
            this.motor = new Motores.Motor(3, 1000);
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
        get getPotecia() {
            return this.potecia;
        }
    }
    class Motor {
        ligado;
        cilidrors;
        potecia;
        constructor(p, c, turbo) {
            this.ligado = false;
            this.cilidrors = c;
            this.potecia = p + (turbo ? turbo.getPotecia : 0);
        }
        set setligar(ligar) {
            this.ligado = ligar;
        }
        get getLigar() {
            return this.ligado;
        }
        get getPotecia() {
            return this.potecia;
        }
        get getCelidrors() {
            return this.cilidrors;
        }
    }
    Motores.Motor = Motor;
})(Motores || (Motores = {}));
