namespace Veiculos{
    enum Cores{"Preto","Branco","Vermelho", "Amarelo",'Azul',"Prata"}
     abstract class Carro{
    nome:string;
    motor:Motores.Motor;
    cor:string
    constructor(nome:string,c:Cores,m:Motores.Motor){
        this.nome = nome;
        this.motor =  m 
        this.cor = Cores[c] 
    }
    public liga(){
        this.motor.setligar = true;
    }
    public desligar(){
        this.motor.setligar = false;
    }
    get getCor(){
        return this.cor
    }
    get getCarroNome(){
        return this.nome
    }
    get estouLigado(){
        return (this.motor.getLigar? "Sim":"Não")
    }
    get MinhaPotecia(){
        return this.motor.getPotecia
    }

        }
        
        export class CarroEspotivo extends Carro{
            constructor(nome:string, cor:Cores){
                super(nome,cor,new Motores.Motor(300,6,new Motores.Turbo(100)));
            }

         }    
         export class CarroPopular extends Carro{
            constructor(nome:string,cor:Cores){
                super(nome,cor,new Motores.Motor(100,3));
            }

         }
         
}
namespace Motores{

   export class Turbo{
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
        constructor(p:number,ci:number,turbo?:Turbo){
            this.ligado = false;
            this.cilidrors = ci;
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

const carro1 = new Veiculos.CarroEspotivo('Rapid',2)
const carro2 = new Veiculos.CarroPopular('nuuus',0)
console.log(carro2)

console.log(`Nome: ${carro1.nome}`)
console.log(`Minha cor: ${carro1.cor}`)
console.log(`Potencia: ${carro1.MinhaPotecia}`)
console.log(`Ligado: ${carro1.estouLigado}`)
console.log('------------------------------------')
console.log(`Nome: ${carro2.nome}`)
console.log(`Minha cor: ${carro2.cor}`)
console.log(`Potencia: ${carro2.MinhaPotecia}`)
console.log(`Ligado: ${carro2.estouLigado}`)