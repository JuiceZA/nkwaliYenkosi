function show(){
    document.getElementById('sidebar').classList.toggle('active');
}


var item = document.getElementsByClassName("itemName").innerHTML
function shopButton(){
    var buttonId = document.getElementsByTagName("button").id
    var price = document.getElementById("price1,1").innerHTML;
    var amount = prompt("How many would you like?")
    if (amount === true){
        var result = confirm('Proceed to checkout');
    }
    if (result){
        console.log("Its the truth")
    }
    console.log(price)
    console.log(buttonId)
};
