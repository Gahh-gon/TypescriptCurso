"use strict";
var Pesonagens;
(function (Pesonagens) {
    class Personagem {
        name;
        raca;
        constructor(n, raca) {
            this.name = n;
            this.raca = raca;
        }
    }
    class P1 extends Personagem {
        constructor(n, racaNumber) {
            super(n, new Racas.Raca(Racas.listRacas[racaNumber].nome, Racas.listRacas[racaNumber].hp, Racas.listRacas[racaNumber].pe, Racas.listRacas[racaNumber].tipo));
        }
    }
    Pesonagens.P1 = P1;
})(Pesonagens || (Pesonagens = {}));
var Racas;
(function (Racas) {
    class Raca {
        nome;
        hp;
        pe;
        tipo;
        nome1;
        hp1;
        pe1;
        tipo1;
        constructor(nome, hp, pe, tipo, n1, hp1, pe1, tipo1) {
            this.nome = nome;
            this.hp = hp;
            this.pe = pe;
            this.tipo = tipo;
            this.nome1 = n1;
            this.hp1 = hp1;
            this.pe1 = pe1;
            this.tipo1 = tipo1;
        }
    }
    Racas.Raca = Raca;
    Racas.humano = {
        nome: "HUMANO",
        hp: 5,
        pe: 5,
        tipo: "Humanoide"
    };
    Racas.elfo = {
        nome: "ELFO",
        hp: 3,
        pe: 7,
        tipo: "Humanoide"
    };
    Racas.floran = {
        nome: "FLORAN",
        hp: 4,
        pe: 6,
        tipo: "Humanoide, Planta"
    };
    Racas.listRacas = [Racas.humano, Racas.elfo, Racas.floran];
})(Racas || (Racas = {}));
var Equipamentos;
(function (Equipamentos) {
    class Equipamento {
        dano;
        critico;
        peso;
        propriedades;
        constructor(d, cr, p, pro) {
            this.dano = d;
            this.critico = cr;
            this.peso = p;
            this.propriedades = pro;
        }
    }
})(Equipamentos || (Equipamentos = {}));
