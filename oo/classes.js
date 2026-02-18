class Developer {
    #name;
    #lastname;
    #favouriteLanguage;

    constructor (name,lastname,favouriteLanguage){
        this.#name = name;
        this.#lastname = lastname;
        this.#favouriteLanguage = favouriteLanguage;
    }
    work(){
        console.log(this.name + "sa solo programmare");
    }
    getName(){
        return this.#name;
    }
}


const d1 = new Developer("Paolo","De Paolo","Java");
d1.work();







class Architect extends Developer{
    #numCertifications;
    #yearsOfExperince;

   constructor(name,lastname,favouriteLanguage,numCertifications,yearsOfExperice){
    super(name,lastname,favouriteLanguage);
    this.#numCertifications= numCertifications;
    this.#yearsOfExperince= yearsOfExperice;
   }
   designSystem(){
    console.log(this.name + "disegna arhcittettura del sistema" );
   }
   work(){
    console.log(this.getName()+"non fa un cazzo");
   }
}

const a1 = new Architect("Giuseppe","Giuseppis","JavaScript",3,7);
a1.designSystem();
(a1.work);

