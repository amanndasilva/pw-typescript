class Carro{
    marca: string;

    constructor(marca: string){
        this.marca = marca;
    }
}

const carro1 = new Carro('Toyota'); // Instância do carro 1
const carro2 = new Carro('Honda'); // Instância do carro 2

console.log(carro1.marca); // Toyota
console.log(carro2.marca); // Honda