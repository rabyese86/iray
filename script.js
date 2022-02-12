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
----------------------------------------------------------------

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
}*/