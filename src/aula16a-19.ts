class computador {
    private id:number;
   public nome:string;
   private ram:number;
   private cpu:number;
   private ligado:boolean;
    constructor(n:string,ram:number,cpu:number){
        this.id = 0;
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
    upeRam(qtde:number):void{
        if(qtde >= 0 && qtde <= 1000 ){
            this.ram = qtde
        }else{
            console.log(`Quantidade ${qtde} para o computador de nome ${this.nome} não é permitido`)
        }
    }
}

const comp1 = new computador("Rapidão",64,10);
const comp2 = new computador("carão",32,5);
const comp3 = new computador("Gamer",128,10);
comp1.desligar()
comp1.upeRam(150)
comp3.ligar()
comp1.info()
comp2.info()
comp3.info()