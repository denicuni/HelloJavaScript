console.log("Hello World");
const employee = {
    name : "Pippo",
    lastname : "Pluto",
    gender : "M"
};

function Employee (name,lastname,gender){
    this.name = name;
    this.lastname = lastname;
    this.gender = gender;
}

const e1 = new Employee("Ciccio","Pasticcio","M");
const e2 = new Employee("Paperon","De Paperoni","M");

function Developer(name,lastname,favoriteLanguage){
    this.name = name;
    this.lastname = lastname;
    this.favoriteLanguage = favoriteLanguage;
    }




const d1 = new Developer("Mario","Rossi","Java");
d1.work();
// fa da oggetto prototipo al costruttore developer per creare tutti i suoi oggetti , e gli viene inserito nel costruttore 
Developer.prototype.work = function(){
        console.log(this.name+"Sa solo programmare");
};
d1.work();

//const o1 = new Object();
const o1 = {};
console.log("Ogetti in JavaScript");
console.log(o1.__proto__ == Object.prototype); //proprietà di Object (oggetto che Object assegna ai suoi figli) , non prototipo di Object
console.log(Object.prototype == Object.__proto__);
console.log("dev:" + (d1.__proto__==Developer.prototype));
console.log(d1.__proto__.__proto__==Object.prototype); // ogni __proto__ sull' oggetto risale al prottotipo super che in questo caso è la qulità prototipo di Object
Object.prototype.myFunction = function(){
    console.log("Non dovrai aggiungere cose al prortotipo")
}
d1.myFunction();






function Architect(name,lastname,favoriteLanguage,numberOfCertification,yearsOfExperience){
    // this.name = name;
    //this.lastname = lastname;
    //this.favoriteLanguage = favoriteLanguage;      per non ripetere dinuovo i this, usiamo la RIGA 55
    Developer.call(this ,name,lastname,favoriteLanguage);  // permette di invocare una funzione cambiando il contesto di esecuzione (this)
    this.nuberOfCertification = numberOfCertification; //  RIGA 56: "fai eseguire la fuinzione Developer ma con i this che ti passo io" 
    this.yearsOfExperience = yearsOfExperience;
}

Object.setPrototypeOf(Architect.prototype,Developer.prototype);// i due argomenti sono il tipo di prototipo che voglio assegnare a developer,il secondo argomento, al posto del prototype di Object
const a1 = new Architect("Antonio","Buono","Java",5,10);
a1.work();
console.log(a1.__proto__.constructor.prototype == a1.__proto__); //prototipo di tutto gli architetti --> è legata alla funzione Architect tramite constructor --> ricaviamo dinuvo il prototipo
console.log(a1.constructor);
console.log(Architect.__proto__);
console.log(Developer.__proto__); // modello a prototipi  