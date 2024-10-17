{
    //statics in oop
    class Counter{
        count: number = 0;
        increment(){
            return (this.count = this.count + 1)
        }
        decrement(){
            return (this.count = this.count - 1)
        }
    }

    const instanceOne = new Counter()
    console.log(instanceOne.increment());
    const instanceTwo = new Counter();
    console.log(instanceTwo.increment());

    //using static
    class Counterr{
       static count: number = 0;
      increment(){
            return (Counterr.count = Counterr.count + 1)
        }
        decrement(){
            return (Counterr.count = Counterr.count - 1)
        }
    }

    const instanceOnee = new Counterr()
    console.log(instanceOnee.increment());
    const instanceTwoo = new Counterr();
    console.log(instanceTwoo.increment());

    class Counterrr{
        static count: number = 0;
       static increment(){
             return (Counterr.count = Counterr.count + 1)
         }
         static decrement(){
             return (Counterr.count = Counterr.count - 1)
         }
     }
 
     console.log(Counterrr.increment());
     console.log(Counterrr.increment());
    
}