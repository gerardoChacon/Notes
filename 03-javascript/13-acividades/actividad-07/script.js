class Vehiculo {
    constructor(ruedas){
        this.ruedas = ruedas

    }

    detalles() {
        return `Este vehículo tiene ${this.ruedas} ruedas.`;
    }
}

class Carro extends Vehiculo{
    constructor(ruedas, pasajeros){
    super(ruedas);
    this.pasajeros = pasajeros;
    }

    detalles() {
        return super.detalles() + ` Puede transportar ${this.pasajeros} ${this.pasajeros > 1 ? 'pasajeros' : 'pasajero'} `
    }
}

class Bicicleta extends Vehiculo{
    constructor(ruedas, vehiculo, tipo){
        super(ruedas);
        this.vehiculo = vehiculo
        this.tipo = tipo
       
    }

    detalles(){
        return super.detalles() + ` Es una ${this.vehiculo} de tipo ${this.tipo}`
    }
}

const carro = new Carro(4, 5)
const bicicleta = new Bicicleta(2, 'Bicicleta', 'Montaña')

console.log(Vehiculo)
console.log(carro);
console.log(bicicleta);
console.log(carro.detalles());
console.log(bicicleta.detalles());