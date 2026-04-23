// CLASE BASE
class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    hacerSonido() {
        console.log("Hace un sonido");
    }

    cumplirAnios() {
        this.edad++;
        console.log(`${this.nombre} ahora tiene ${this.edad} años`);
    }
}

// HERENCIA: PERRO
class Perro extends Animal {
    constructor(nombre, raza, edad) {
        super(nombre, edad);
        this.raza = raza;
    }

    hacerSonido() {
        console.log(`${this.nombre} dice: Guau`);
    }
}

// HERENCIA: GATO
class Gato extends Animal {
    hacerSonido() {
        console.log(`${this.nombre} dice: Miau`);
    }
}

// PRUEBAS
const perro1 = new Perro("Boby", "Salchicha", 3);
const gato1 = new Gato("Michi", 2);

// POLIMORFISMO
const animales = [perro1, gato1];

animales.forEach(animal => {
    animal.hacerSonido();
});

// MÉTODO HEREDADO
perro1.cumplirAnios();