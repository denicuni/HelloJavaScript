class Developer {
    constructor(name, lastname, favouriteLanguage){
        this.name = name;
        this.lastname = lastname;
        this.favouriteLanguage = favouriteLanguage;
    }

    work(){
        console.log(this.name + "sa solo programmare");
    }
}
const d1 = new Developer("Luigi","Verde","Java");
d1.work();

class Architect extends Developer{
//il # rende le variabili private se fai consolo.log non la fa stampare
//se avessimo messo # a developer la figlia non le vedrebbe
    #numCertifications;
    #yearsOfExperience;
    constructor(name, lastname, favouriteLanguage, numCertifications, yearsOfExperience){
        super(name,lastname,favouriteLanguage);
        this.#numCertifications = numCertifications;
        this.#yearsOfExperience = yearsOfExperience;    
    }

    designSystem(){
        console.log(this.name + "disegna l'architettura del sistema");
    }
}
const a1 = new Architect ("Mario","Rossi","Java", 3, 4);
a1.designSystem();