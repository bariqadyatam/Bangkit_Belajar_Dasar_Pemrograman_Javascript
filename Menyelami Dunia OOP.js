/**
 * TODO:
 * 1. Buatlah class bernama Animal dengan ketentuan:
 *    - Memiliki properti:
 *      - name: string
 *      - age: int
 *      - isMammal: boolean
 *    - Memiliki constructor untuk menginisialisasi properti:
 *      - name
 *      - age
 *      - isMammal
 * 2. Buatlah class bernama Rabbit dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - eat yang mengembalikan nilai string `${this.name} sedang makan!`
 *    - Ketika diinstansiasi, properti isMammal harus bernilai true
 * 3. Buatlah class bernama Eagle dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - fly yang mengembalikan nilai string `${this.name} sedang terbang!`
 *    - Ketika diinstansiasi, properti isMammal harus bernilai false
 * 4. Buatlah instance dari class Rabbit bernama "myRabbit" dengan ketentuan:
 *    - properti name bernilai: "Labi"
 *    - properti age bernilai: 2
 * 5. Buatlah instance dari class Eagle bernama "myEagle" dengan ketentuan:
 *    - properti name bernilai: "Elo"
 *    - properti age bernilai: 4
 */
 

// Tulis kode di bawah ini

// 1. Membuat class Animal
class Animal {
    constructor(name, age, isMammal) {
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }
}

// 2. Membuat class Rabbit yang merupakan turunan dari Animal
class Rabbit extends Animal {
    constructor(name, age) {
        // Memanggil constructor dari class Animal
        super(name, age, true);
    }

    eat() {
        return `${this.name} sedang makan!`;
    }
}

// 3. Membuat class Eagle yang merupakan turunan dari Animal
class Eagle extends Animal {
    constructor(name, age) {
        // Memanggil constructor dari class Animal
        super(name, age, false);
    }

    fly() {
        return `${this.name} sedang terbang!`;
    }
}

// 4. Membuat instance dari class Rabbit
const myRabbit = new Rabbit("Labi", 2);

// 5. Membuat instance dari class Eagle
const myEagle = new Eagle("Elo", 4);

// Contoh penggunaan
console.log(myRabbit.eat()); // Output: Labi sedang makan!
console.log(myEagle.fly());   // Output: Elo sedang terbang!
