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


const e1 = new Employee("Ciccio", "Pasticcio", "M");
const e2 = new Employee("Paperon", "De Paperoni", "M");
/*il costruttore è sempre chiamato con keyword new, 
la prima cosa che farà è creare un nuovo oggetto
la seconda cosa è settare il puntatore this a puntare l'oggetto appena creato
quando eseguirà this.name = name sta aggiungendo a questo nuovo oggetto una proprietà
che si chiama name con il valore del parametro inziiael che si chiama name 
alla fine ritorna l'oggeto che ha appena finito di configurare

potrei anche dare delle funzioni così
*/


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
}

//non buono mettere funzione nel costruttore perché ne crea una copia per ogni variabile definita
const d1 = new Developer("Mario", "Rossi", "Java");
//d1.work(); non funzionerà

//soluzione: mettere funzione nel prototipo dell'oggetto
Developer.prototype.work = function(){
        console.log(this.name + " sa solo programmare come lavoro.")
    };
d1.work();


const d1 = new Developer("Mario","Rossi","Java");
//d1.work();
//ogni oggetto ha un prototipo che gli viene assegnato tramite costruttore
Developer.prototype.work = function(){
        console.log(this.name + " Sa solo programmare come lavoro");
    };
d1.work();

// const o1 = new Object();
const o1 = {};
console.log("analisi modello a oggetti JavaScript");
console.log(o1.__proto__ == Object.prototype);
console.log(Object.prototype == Object.__proto__);
console.log(d1.__proto__ == Developer.prototype);
console.log(d1.__proto__.__proto__ == Object.prototype);
console.log(Object.prototype.__proto__ == null);
console.log(o1.__proto__.__proto__ == null);

Object.prototype.myFunction = function() {
    console.log("Non dovrei mai aggiungere cose al prototipo di tutti gli oggetti");
}
d1.myFunction();

function Architect(name, lastname, favouriteLanguage, numberOfCertifications, yearsOfExperience){
    // .call() permette di invocare una funzione cambiando il "this" (cambiando il contesto d'esecuzione)
    // super(name, lastname, favouriteLanguage); su Java
    Developer.call(this, name, lastname, favouriteLanguage);

    this.numberOfCertifications = numberOfCertifications;
    this.yearsOfExperience = yearsOfExperience;
}

// Architect classe figlia; Developer classe madre
// Architect.prototype.__proto__ = Developer.prototype;
Object.setPrototypeOf(Architect.prototype, Developer.prototype); 

const a1 = new Architect("Alberto", "Balberto", "C", 5, 10);
a1.work();

// oggetto a1 > prototipo Architect > costruttore Architect > prototipo Architect == oggetto a1 > prototipo Architect
console.log(a1.__proto__.constructor.prototype == a1.__proto__);
console.log(a1.constructor);
console.log(Architect.__proto__);
console.log(Object.__proto__);

