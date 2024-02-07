"use strict";
var Veiculos;
(function (Veiculos) {
    let Cores;
    (function (Cores) {
        Cores[Cores["Preto"] = 0] = "Preto";
        Cores[Cores["Branco"] = 1] = "Branco";
        Cores[Cores["Vermelho"] = 2] = "Vermelho";
        Cores[Cores["Amarelo"] = 3] = "Amarelo";
        Cores[Cores["Azul"] = 4] = "Azul";
        Cores[Cores["Prata"] = 5] = "Prata";
    })(Cores || (Cores = {}));
    class Carro {
        nome;
        motor;
        cor;
        constructor(nome, c, m) {
            this.nome = nome;
            this.motor = m;
            this.cor = Cores[c];
        }
        liga() {
            this.motor.setligar = true;
        }
        desligar() {
            this.motor.setligar = false;
        }
        get getCor() {
            return this.cor;
        }
        get getCarroNome() {
            return this.nome;
        }
        get estouLigado() {
            return (this.motor.getLigar ? "Sim" : "Não");
        }
        get MinhaPotecia() {
            return this.motor.getPotecia;
        }
    }
    class CarroEspotivo extends Carro {
        constructor(nome, cor) {
            super(nome, cor, new Motores.Motor(300, 6, new Motores.Turbo(100)));
        }
    }
    Veiculos.CarroEspotivo = CarroEspotivo;
    class CarroPopular extends Carro {
        constructor(nome, cor) {
            super(nome, cor, new Motores.Motor(100, 3));
        }
    }
    Veiculos.CarroPopular = CarroPopular;
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
    Motores.Turbo = Turbo;
    class Motor {
        ligado;
        cilidrors;
        potecia;
        constructor(p, ci, turbo) {
            this.ligado = false;
            this.cilidrors = ci;
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
const carro1 = new Veiculos.CarroEspotivo('Rapid', 2);
const carro2 = new Veiculos.CarroPopular('nuuus', 0);
console.log(carro2);
console.log(`Nome: ${carro1.nome}`);
console.log(`Minha cor: ${carro1.cor}`);
console.log(`Potencia: ${carro1.MinhaPotecia}`);
console.log(`Ligado: ${carro1.estouLigado}`);
console.log('------------------------------------');
console.log(`Nome: ${carro2.nome}`);
console.log(`Minha cor: ${carro2.cor}`);
console.log(`Potencia: ${carro2.MinhaPotecia}`);
console.log(`Ligado: ${carro2.estouLigado}`);
