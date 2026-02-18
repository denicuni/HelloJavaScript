<<<<<<< HEAD
console.log("Hello Node World");
=======
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
}
const d1 = new Developer("Mario","Rossi","Java");
//d1.work();
//ogni oggetto ha un prototipo che gli viene assegnato tramite costruttore
Developer.prototype.work = function(){
        console.log(this.name + " Sa solo programmare come lavoro");
    };
d1.work();
>>>>>>> main
