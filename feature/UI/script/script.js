function histry(){
    alert("Thank you for ordering at Fast Foods Fast: \n Your order is  "+document.order_form.order.value+" \n \n You will be served shortly !");
}


function retun_order(){
    var form = document.getElementsByTagName("order_form");
    form_onsubmit=function(event){
        event.preventDefault();
        console.log(form.order);
    }
}

retun_order();