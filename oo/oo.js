console.log("Hello Node World");
const employee = {
    name : "Pippo",
    lastname : "Pluto",
    gender : "M"
};
//FUNZIONI COSTRUTTRICI
function Employee(name, lastname, gender){
    this.name = name;
    this.lastname = lastname;
    this.gender = gender;
}

const e1 = new Employee("Ciccio","Pasticcio","M");
const e2 = new Employee("Paperon","De Paperoni","M");
//il costruttore andrà sempre chiamato dopo la keyword new 
//la prima cosa che fa è creare un nuovo oggetto (vuoto)
//la seconda cosa è settare il puntatore this a puntare l'oggetto appena creato
//quando eseguirà this.name = name sta aggiungendo a questo nuovo oggetto una proprietà 
//che si chiama name con il valore del paramentro iniziale che si chiama name
//alla fine ritorna l'oggetto che ha appena finito di configurare
function Developer(name, lastname, favouriteLanguage){
    this.name = name;
    this.lastname = lastname;
    this.favouriteLanguage = favouriteLanguage;
    //metodo
}
const d1 = new Developer("Mario","Rossi","Java");
//d1.work();
//ogni oggetto ha un prototipo che gli viene assegnato tramite costruttore
Developer.prototype.work = function(){
        console.log(this.name + " sa solo programmare come lavoro");
    };
d1.work();
//PROTOTYPE è una proprietà delle funzioni, definisce cosa ereditano gli oggetti
//__PROTO__ è una proprietà degli oggetti, indica da chi quel'oggetto eredita
const o1 = {};
console.log("Analisi modello a ogetti JS");
//TRUE perchè o1 è un oggetto creato dal costruttore Object quindi 
//__proto__ è una prorpietà dell'o1 ed è uguale all'oggetto che Object
//assegna ai suoi figli ovvero Object.prototype
console.log(o1.__proto__ == Object.prototype);
//FALSE perchè prototype è l'oggetto prototipo da cui erediteranno tutti gli oggetti
//mentre Object.__proto__ è function perchè object è una funzione
console.log(Object.prototype == Object.__proto__);

console.log(d1.__proto == Developer.prototype);
//il proto di Object è null
console.log(o1.__proto__.__proto__ == null);
console.log(d1.__proto__.__proto__== Object.prototype);

function Architect(name, lastname, favouriteLanguage,numberOfCertification, yearsOfExperience){
    //this.name = name;
    //this.lastname = lastname;
    //this.favouriteLanguage = favouriteLanguage;
    //developer è sia oggetto che funzione, ha sia attributi che funzioni
    //call() è una funzione che serve per invocare una funzione cambiandole il this, decido io chi sarà il suo contesto di esecuzione
    //è come super su Java
    //voglio eseguire il costruttore developer ma su this (Architect)
    Developer.call(this, name, lastname, favouriteLanguage);
    this.numberOfCertification = numberOfCertification;
    this.yearsOfExperience = yearsOfExperience;
}
//primo argomento oggetto a cui vuoi settare il prototipo
//Architect.prototype.__proto__ = Developer.prototype
//--> in teoria il prototipo sarebbe il prototipo di tutti gli oggetti ma io lo cambio e voglio 
//quello di tutti gli oggetti Developer
Object.setPrototypeOf(Architect.prototype, Developer.prototype);
const a1 = new Architect("Luigi","Verde","Java",5,10);
a1.work();
//.__proto__ punta l'oggetto dei prototipi di Architect che è collegato ai Developer 
//quindi constructor si riferisce a Architect e .prototype si riferisce al prptotipo di tutti gli architetti quindi Architect
console.log(a1.__proto__.constructor.prototype == a1.__proto__);

//js è un linguaggio prototipale 