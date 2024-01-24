"use strict";
class mamiferos {
    pelo;
    glandulasMamarias;
    diafragma;
    dentesDiferenciados;
    constructor() {
        this.pelo = true;
        this.glandulasMamarias = true;
        this.diafragma = true;
        this.dentesDiferenciados = true;
    }
}
class BaleiAzul extends mamiferos {
    caudal;
    pedúnculo;
    constructor() {
        super();
        this.caudal = ' larga e apresentar um pedúnculo';
        this.pedúnculo = 'caudal grosso';
    }
}
