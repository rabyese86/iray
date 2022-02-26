class retail_management_system{ 
    add_product(){

    var product_name=prompt("Enter the name");
    var product_price=parseInt(prompt("Enter the price"));
    var product_Quality=parseInt(prompt("Enter the quality"));
    var product_code=parseInt(prompt("Enter the code"));
    var product_quantity=parseInt(prompt("Enter the quantity"));

    document.write(product_name,"<br>",product_price,"<br>",product_Quality,"<br>",product_code,"<br>",product_quantity,"<br>")

}
}

var obj =new retail_management_system() 
obj.add_product()