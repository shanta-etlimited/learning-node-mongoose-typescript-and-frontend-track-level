{
    //class and object
    class Animal {
        public name: string;
        public species: string;
        public sound: string;
        constructor(name: string, species: string, sound: string) {
            this.name = name;
            this.species = species;
            this.sound = sound;
        }
        makeSound(){
            console.log(`The ${this.name} says ${this.sound}`);
            
        }
    }

    const dog = new Animal("German Shepard", "dog", "Ghew ghew");
    const cat = new Animal("Persian", "cat", "Meow");
    console.log(dog, cat);
    dog.makeSound()


    //perameter properties
    class Animal2 {
        constructor(
            public name: string,
            public species: string,
            public sound: string
        ){}
        makeSound(){
            console.log(`The ${this.name} says ${this.sound}`);
            
        }

    }
    const dog2 = new Animal2("German Shepard", "dog", "Ghew ghew"); 
    const cat2 = new Animal2("Persian", "cat", "Meow");
    console.log(dog2, cat2);
    dog2.makeSound()
    
}