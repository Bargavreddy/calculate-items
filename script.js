function calculate(){
var rec=document.getElementById("choose").value;

if(rec=='soap'){
    document.getElementById("price").value;
   

}
if(rec=='brush'){
    document.getElementById("price").value;
}
if(rec=='paste'){
    document.getElementById("price").value;
}
}

function tprice(){

var itemPrice=document.getElementById("price").value;
var itemQuantity=document.getElementById("quantity").value;
document.getElementById("result").value=itemPrice*itemQuantity;
}

function calculate1(){
var rec1=document.getElementById("choose1").value;

if(rec1=='soap'){
    document.getElementById("price1").value;
   

}
if(rec1=='brush'){
    document.getElementById("price1").value;
}
if(rec1=='paste'){
    document.getElementById("price1").value;
}
}

function tprice1(){

var itemPrice1=document.getElementById("price1").value;
var itemQuantity1=document.getElementById("quantity1").value;
document.getElementById("result1").value=itemPrice1*itemQuantity1;
}

function calculate2(){
var rec2=document.getElementById("choose2").value;

if(rec2=='soap'){
    document.getElementById("price2").value;
   

}
if(rec2=='brush'){
    document.getElementById("price2").value;
}
if(rec2=='paste'){
    document.getElementById("price2").value;
}
}

function tprice2(){

var itemPrice2=document.getElementById("price2").value;
var itemQuantity2=document.getElementById("quantity2").value;
document.getElementById("result2").value=itemPrice2*itemQuantity2;
}

function calculate3(){
var rec3=document.getElementById("choose3").value;

if(rec3=='soap'){
    document.getElementById("price3").value;
   

}
if(rec3=='brush'){
    document.getElementById("price3").value;
}
if(rec3=='paste'){
    document.getElementById("price3").value;
}
}

function tprice3(){

var itemPrice3=document.getElementById("price3").value;
var itemQuantity3=document.getElementById("quantity3").value;
document.getElementById("result3").value=itemPrice3*itemQuantity3;
}
/*function myFunction() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(4);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = "<select id='choose3' onchange='calculate3()'>"
    +"<option value='select'>[Select Items]</option>"
    +"<option value='soap'>Soap</option>"
    +"<option value='brush'>Brush</option>"
    +"<option value='paste'>Paste</option>"
    +"</select>";
    cell2.innerHTML = "<input type='text'  id='price3' name='price' placeholder='price'>";
    cell3.innerHTML = "<input type='text'  id='quantity3' oninput='tprice3()' name='quantity' placeholder='Quantity'>";
    cell4.innerHTML = "<input type='text'id='result3' placeholder='Total Price' value=''/>";
}*/

	

function gTotal(){
    var t1=document.getElementById('result').value;
    var t2=document.getElementById('result1').value;
    var t3=document.getElementById('result2').value;
    //var t4=document.getElementById('result3').value;
    var t5=+t1 + +t2 + +t3 ;
    document.getElementById("g_total").value=t5;
}
