namespace Veiculos{
    export class Carro{
    nome:string;
    motor:Motores.Motor;
    constructor(nome:string){
        this.nome = nome;
        this.motor = new Motores.Motor(1000)   
    }
        }
}

namespace Motores{
    class Turbo{
        potecia:number;
        constructor(potecia:number){
            this.potecia = potecia
        }
    }
   export class Motor{
        potecia:number;
        constructor(potecia:number){
            
            this.potecia = potecia
        }
        }
}

const car1 = new Veiculos.Carro("rapid")
console.log(car1.motor)
