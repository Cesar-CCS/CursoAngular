export class Person {
    // public name: string;
    // private address: string;

    //De esta manera se genera un constructor omitiendo la asignacion
    //ya que se hace de forma directa y se iguala a los valores por defecto
    constructor(
        public  firstName: string, 
        public lastName: string,
        private address: string = 'No Address'
    ) {}
}

// Herencia ⬇
// export class Hero extends Person {

//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName:string
//     ) {
//         super( realName, 'New York');
//     }
// }

//Composicion
export class Hero {

    //public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName:string,
        public person: Person
    ) {
        
        //this.person = new Person(realName);

    }
}

const tony = new Person('Tony','Stark',' New York');

const ironman = new Hero('Ironman',45,'Tony', tony);

console.log(ironman);