
class table{
constructor(a,b){
    this.a=a;
    this.b=b;
}

table_of_two(){
    while (this.a <=10) {
        document.write(this.a + "*" + this.b + "=" +  this.b* this.a,"<br>")
        this.a++;
        
    }

}

}
var obj= new table(1,2)

obj.Table_of_two()