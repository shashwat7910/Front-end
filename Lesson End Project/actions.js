if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
console.log("hi")
var cartButtons=document.getElementsByClassName('btn');
console.log(cartButtons)
total=0;
for (var i=0;i<cartButtons.length;i++){
    console.log(i);
    var button=cartButtons[i];
    button.addEventListener('click',function(event){
       var buttonclicked=event.target;
       if(buttonclicked.innerHTML==='Add to cart'){
       buttonclicked.innerHTML='Remove';
       var parentclicked=buttonclicked.parentElement;
       console.log(parentclicked)
       var price=parentclicked.getElementsByClassName('card-text')[0];
       price=parseInt(price.innerText.replace('Rs ',''));
       total+=price;
       console.log(total);
       document.getElementById('totalp').innerHTML = "Total Price : Rs "+total;

    }
       else{
       buttonclicked.innerHTML='Add to cart';
       var parentclicked=buttonclicked.parentElement;
       var price=parentclicked.getElementsByClassName('card-text')[0];
       console.log(price);
       price=parseInt(price.innerText.replace('Rs ',''));
       total-=price;
       console.log(total);
       document.getElementById('totalp').innerHTML = "Total Price : Rs "+total;
       }
    });
}
}