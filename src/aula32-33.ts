namespace Veiculos{
    export abstract class Carro{
    nome:string;
    motor:Motores.Motor;
    constructor(nome:string){
        this.nome = nome;
        this.motor = new Motores.Motor(3,1000)   
    }
        }
}

namespace Motores{

    class Turbo{
        private potecia:number;
        constructor(potecia:number){
            this.potecia = potecia
        }
        get getPotecia(){
            return this.potecia
        }
    }
   export class Motor{
        private ligado:boolean;
        private cilidrors:number;
       private potecia:number;
        constructor(p:number,c:number,turbo?:Turbo){
            this.ligado = false;
            this.cilidrors = c;
            this.potecia = p + (turbo?turbo.getPotecia:0);
        }
        set setligar(ligar:boolean){
            this.ligado =ligar;
        }
        get getLigar(){
            return this.ligado;
        }
        get getPotecia(){
            return this.potecia;
        }
        get getCelidrors(){
            return this.cilidrors;
        }
        
    }
}


