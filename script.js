/*
var a;
var b;
var c =prompt("Enter the value");

function calculator( a,b){
    if(c=="+"){

        document.write (a+b,"<br>");
    }
    else if(c=="-"){
        document.write (a-b, "<br>");
    }

    else if(c=="*"){
        document.write (a*b, "<br>");
    
    }

    else if(c=="/"){

        document.write (a/b ,"<br>");
    }

    else if(c=="%"){
        document.write (a%b, "<br>");
    }
    else{

        document.write("not valid")

    } 


}

calculator(6,8)
calculator(9,3)
*/

var a=parseInt(prompt("Enter the number"))

    if(a%2==0 && a>0){

document.write("positive intiger");

    }
    else{
        document.write( "the number is not postive");
    }
    


