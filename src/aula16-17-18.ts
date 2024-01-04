class computador {
    nome:string;
    ram:number;
    cpu:number;
    ligado:boolean;
    constructor(n:string,ram:number,cpu:number){
      
        this.nome = n;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
    }
    info():void{

        console.log(`Nome:...${this.nome}`)
        console.log(`Ram:....${this.ram}`)
        console.log(`CPU:....${this.cpu}`)
        console.log(`Ligado:.${this.ligado?"SIM":"NÃO"}`)
        console.log('......................')
    }
    ligar():void{
        this.ligado = true
    }
    desligar():void{
        this.ligado = false
    }
}

const comp1 = new computador("Rapidão",64,10);
const comp2 = new computador("carão",32,5);
const comp3 = new computador("Gamer",128,10);
comp1.desligar()
comp3.ligar()

comp1.info()
comp2.info()
comp3.info()