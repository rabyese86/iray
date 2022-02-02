/*function myFunction(){
    document.getElementsByTagName("h1")[0].setAttribute("class","democlass");
}

let value =  document.getElementById('myh1').getAttribute("class");
document.getElementById("demo").innerHTML=value;

function myFunction(){
    document.getElementsByTagName("h1")[0].setAttribute("class","democlass");*/

    function myFunction(){
        var x,i;
        x=document.querySelectorAll(".tobi");
        for(i=0;i<x.length;i++){
            x[i].style.backgroundColor = "red";
        }
    }