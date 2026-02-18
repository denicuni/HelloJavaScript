console.log("Hello Node World");
const employee = {
    name : "Pippo",
    lastname : "Pluto",
    gender : "M"
};

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

