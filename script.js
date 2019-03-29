var animalPopulation = 0;
function sleep (name) {
    console.log(name + " sleeps for 8 hours");


}

function run(){
    var tigger = new Tiger("Tigger");
    tigger.eat("meat");
    var pooh = new Bear("Pooh");
    pooh.eat("fish");
    pooh.eat("meat");
    var rarity = new Unicorn("Rarity");
    rarity.eat("marshmallows");
    var gemma = new Giraffe ("Gemma");
    gemma.eat("meat");
    gemma.eat("leaves");
    var stinger = new Bee ("Stinger");
    stinger.eat("ice cream");
    stinger.eat("pollen");
    var zoebot = new Zookeeper ("Zoebot");
    var animals = [tigger,gemma,rarity,pooh,stinger];
    zoebot.feedAnimals(animals,"pix");
}

// A Tiger named Tigger
// A Bear named Pooh
// A Unicorn named Rarity
// A Giraffe named Gemma
// A Bee named Stinger


class Animal {
    constructor(name, favoriteFood) {
        this.name = name;
        this.favoriteFood = favoriteFood;
        animalPopulation++;
    }

    sleep() {
        console.log(this.name + " sleeps for 8 hours");

    }

    eat(food) {
        console.log(this.name + " eats " + food);
        if (food == this.favoriteFood) {
            console.log("YUM!!!" + this.name + " wants more " + food)
        } else {
            this.sleep();
        }
    }
    static getPopulation() {
        return animalPopulation;
    }
}

class Tiger extends Animal {
    constructor(name) {
        super(name,"meat");
    }
}

class Bear extends Animal {
    constructor(name) {
        super(name,"fish");
    }
    sleep() {
        console.log(this.name + " hibernates for four months");
    }
}

class Unicorn extends Animal {
    constructor(name) {
        super(name,"marshmallows")
    }
    //sleep() {
  //      console.log(this.name + " sleeps in a cloud");
    //}
}

class Giraffe extends Animal {
    constructor(name){
        super(name,"leaves")
    }
    eat(food) {
        //console.log(this.name + " eats " + food);
        if (food == this.favoriteFood) {
            console.log(this.name + " eats " + food);
            console.log("YUM!!!" + this.name + " wants more " + food)
            this.sleep()
        } else {
            console.log("YUCK!!!" + this.name + " will not eat " + food)
        }
    }
}

class Bee extends Animal {
    constructor(name){
        super(name,"pollen")
    }
    sleep() {
        console.log(this.name + " never sleeps");
    }
    eat(food) {
        //console.log(this.name + " eats " + food);
        if (food == this.favoriteFood) {
            console.log(this.name + " eats " + food);
            console.log("YUM!!!" + this.name + " wants more " + food)
            this.sleep()
        } else {
            console.log("YUCK!!!" + this.name + " will not eat " + food)
        }
    }
}

class Zookeeper {
    constructor(name, favoriteFood) {
        this.name = name;
    }
    feedAnimals(animals,food){
        console.log(this.name + " is feeding " + food + " to " + animals.length + " of " + Animal.getPopulation() + " total animals")
        for(var i = 0; i<animals.length; i++) {
            animals[i].eat(food);
        }
    }
}































// class Polygon {
//     constructor(height, width) {
//         this.name = 'Polygon';
//         this.height = height;
//         this.width = width;
//     }
//     //function #1
//     sayName() {
//         console.log('Hi, I am a ', this.name + '.');
//     }

    //function #2
//    sayHistory() {
 //       console.log('"Polygon" is derived from the Greek polus (many) ' +
   //         'and gonia (angle).');
//    }
//
//}
//if(userIsYoungerThan21) {
//    serveGrapeJuice();
//}
//else {
//    serveWine();
//}
//    userIsYoungerThan21 ? serveGrapeJuice() : serveWine();



//var sam = {
//
//       age: 17,
//       homeTown: "Berkeley",
//       height: 68

//  console.log(sam.age);
   // sam.age = 18;
   // console.log(sam.age);

   // var albinson = new Human(20,"Berkeley", 80);
   // var albinson2 = new Human(30,"Berkeley", 80);
   // var albinson3 = new Human(40,"Berkeley", 80);
   // var albinson4 = new Human(20,"Berkeley", 80);
   /// var albinson5 = new Human(50,"Berkeley", 80);

//    albinson5.isBirthday();


//}


//class Human {
    
  //  constructor(age,homeTown, height) {
    //    this.age = age;
      //  this.homeTown = homeTown;
       // this.height = height;
    //}

   // isBirthday() {
     //   this.age = this.age + 1;
    //}
    
    
