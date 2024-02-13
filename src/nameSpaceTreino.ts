// perosnagens X
// nome X
// equipameto 
// raca X
namespace Pesonagens{

   abstract class Personagem {
    name:string;
    raca:Racas.Raca
    constructor(n:string, raca:Racas.Raca){
        this.name = n;
        this.raca = raca
        //equipameto

    }
   }
   export class P1 extends Personagem{
    
        constructor(n:string,racaNumber:number){
            super(n, new Racas.Raca(Racas.listRacas[racaNumber].nome,Racas.listRacas[racaNumber].hp, Racas.listRacas[racaNumber].pe, Racas.listRacas[racaNumber].tipo)) 
            
        }
    }
}

namespace Racas {
    export class Raca implements RacasInterface{
        nome:string;
        hp:number;
        pe:number;
        tipo:string;

        nome1?:string;
        hp1?:number;
        pe1?:number;
        tipo1?:string;

        constructor(nome:string,hp:number,pe:number,tipo:string,n1?:string,hp1?:number,pe1?:number,tipo1?:string){
            this.nome= nome
            this.hp = hp;
            this.pe = pe;
            this.tipo = tipo;

            this.nome1= n1;
            this.hp1= hp1;
            this.pe1= pe1;
            this.tipo1= tipo1;
        }
      
    }
  
    export interface  RacasInterface {
        nome:string;
        hp:number;
        pe:number;
        tipo:string;
    }
    export let humano:RacasInterface;
    export let elfo:RacasInterface;
    export let floran:RacasInterface;
   
    humano ={
        nome:"HUMANO",
        hp:5,
        pe:5,
        tipo:"Humanoide"
    };
    elfo ={
        nome:"ELFO",
        hp:3,
        pe:7,
        tipo:"Humanoide"
    };
    floran ={
        nome:"FLORAN",
        hp:4,
        pe:6,
        tipo:"Humanoide, Planta"
    };

    export const listRacas = [humano,elfo,floran]

}

namespace Equipamentos{
    class Equipamento implements equipametoInterface{
        dano:string;
        critico:string;
        peso:string;
        propriedades:string;

        constructor(d:string, cr:string,p:string,pro:string){
            this.dano = d;
            this.critico = cr;
            this.peso = p;
            this.propriedades = pro;
        }
    }
    interface equipametoInterface {
        dano:string;
        critico:string;
        peso:string;
        propriedades:string;
    }
}

// const zeke = new Pesonagens.P1('Zeke',0)

// console.log(zeke)

