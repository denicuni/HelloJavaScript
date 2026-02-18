// zucchero sintattico
class Developer {
    #name;
    #lastname;
    #favouriteLanguage;

    constructor(name, lastname, favouriteLanguage){
        this.#name = name;
        this.#lastname = lastname;
        this.#favouriteLanguage = favouriteLanguage;
    }

    work(){
        console.log(this.#name + " sa solo programmare");
    }

    getName(){
        return this.#name;
    }
}

const d1 = new Developer("Paolo", "De Paolo", "Java");
d1.work();

// zucchero sintattico
class Architect extends Developer{
    #numCertifications;
    #yrsExperience;

    constructor(name, lastname, favouriteLanguage, numCertifications, yrsExperience){
        super(name, lastname, favouriteLanguage);
        this.#numCertifications = numCertifications;
        this.#yrsExperience = yrsExperience;
    }

    designSystem(){
        console.log( " disegna architettura del sistema");
    }

    work(){
        console.log(this.getName() + " non fa un cazzo tutto il giorno");
    }
}

const a1 = new Architect("Giuseppe", "Giuseppis", "JavaScript", 3, 7);
a1.designSystem();

console.log(a1.__proto__.__proto__ == d1.__proto__);

a1.work();


