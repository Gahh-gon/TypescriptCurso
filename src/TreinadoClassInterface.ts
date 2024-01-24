class mamiferos implements mamiferosInterface{
    pelo:boolean;
    glandulasMamarias:boolean;
    diafragma:boolean;
    dentesDiferenciados:boolean
    constructor(){
    this.pelo = true;
    this.glandulasMamarias = true;
    this.diafragma = true;
    this.dentesDiferenciados = true
    }
}

interface mamiferosInterface{
pelo:boolean;
glandulasMamarias:boolean;
diafragma:boolean;
dentesDiferenciados:boolean
}

class BaleiAzul extends mamiferos{
    caudal:string;
    pedúnculo:string
    constructor(){
        super()
        this.caudal = ' larga e apresentar um pedúnculo'
        this.pedúnculo = 'caudal grosso'
        
    }
}