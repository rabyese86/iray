/*object method

var person={
    firstname: 'john',
    lastname:   'Andrew'

};

person.greet= function(){
    console.log('hello')

}
person.greet()

------------------------------------------------

var person={

    firstname: 'John',
    lastname: 'andrew'
};

function greet(){

    console.log('hello world')

}

person.greet=greet;
person.greet() 

--------------------------------------

var person={

    firstname: 'John',
    lastname: 'Andrew',
    greet:function(){


        console.log('hello world')
    }
};
person.greet()
-----------------------------------------------------------
var person={

    firstname: 'John',
    lastname: 'Andrew',
    greet(){


        console.log('hello world')
    }
};
person.greet() 

------------------------------------------------------------------
let person ={

    firstname: 'John',
    lastname: 'Andrew',
    greet: function(){

        console.log('hello world')

    },
    getfullname:function(){

        return this.firstname+' '+this.lastname;
    }
};

console.log(person.getfullname()) 


------------------------------------------------------------------


function People(firstname,lastname){

    this.firstname=firstname
    this.lastname=lastname

}

let people =new People('John','Andrew')

console.log(people.firstname)  
-----------------------------------object creation -----------------------------

const person={

    firstname: 'John',
    lastname: 'Andrew',
    Age: 35

};

for(const key in person){
    if(person.hasOwnProperty(key)){

        const value = person[key];

        console.log(value)

    }
}

--------------------------------constructor and prototype procedure.
function  person (firstname, lastname){

    this.firstname=firstname;
    this.lastname=lastname;

}

    person.prototype.getfullname=function(){

        return this.firstname +''+ this.lastname;

    };
    let p1= new person("John","Andrew")


    console.log(p1.getfullname());

------------------------------------Apply funtion----
    const person ={
        
    firstname: 'John',
    lastname: 'Andrew'

    }
    function greet(greeting,message){

        return `${greeting}${this.firstname}.${message}`;
    }

    let result = greet.apply(person,['hello','how are you']);

    console.log(result);

    


const computer= {

        name: 'mac book',
        isOn: false,
        turnOn(){
            this.isOn= true;
        
            return `the ${this.name} is on`;

        },

        turnOff(){
            this.isOn= false;
        
            return `the ${this.name} is off`;

        }
};

    const server = {
    name: 'Dell PowerEdge T30',
    isOn: false
};

    let result = computer.turnOn.apply(server);

    console.log(result);
-------------------------------------------


let person ={
    name: 'john',
    getName: function(){

        console.log(this.name)

    }
};

let f = person.getName.bind(person)

setTimeout(f,1000);

---------------------------------------------------------



let runner={

    name: 'runner',
     run: function(speed){

        document.write(this.name + ' runs at ' + speed + ' mph ')

     }

};
let flyer ={

    name:'flyer',

    fly: function(speed){

        document.write(this.name + ' flys at ' + speed + ' mph ')
    }


};

let fly = flyer.fly.bind(runner,20);
fly();

-------------------------------------------------------------------


function greeting(){

    let message = 'Hi'

    function sayHi(){

        console.log(message)
    }

    sayHi();

}
greeting();

---------------------------------------------------
*/