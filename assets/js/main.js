
const categories=[...new Set(product.map((item)=>{
  return item
}))]
let i=0;
document.getElementById('root').innerHTML=categories.map((item)=>{

  var{image,title,price}=item;
  return(
    `<div class="box">
    <div class="img-box">
   <img src=${image}  class="images">
</div>
<div class="bottom">
   <p>${title}</p>
   <h2>$ ${price}.00</h2>`+
   "<button  onclick='addtocart("+(i++)+")'>Add To Cart</button>"+
` </div>
</div>`
  )
}).join('')


    
  
  //add item to cart
  var cart=[];
  function addtocart(a){
    cart.push({...categories[a]});
    displaycart();}
  //remove item from cart
  function delet(element){
cart.splice(element,1);
displaycart();
  }
  //display cart
  function displaycart(a){
    let j=0,total=0;

    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
      document.getElementById('cartitem').innerHTML="your cart is empty";
      document.getElementById('total').innerHTML="$"+0+".00";

    }
    else{
      document.getElementById('cartitem').innerHTML=cart.map ((items)=>{
        var{image,title,price}=items;
total=total+price;
document.getElementById("total").innerHTML="$"+total+".00";
return(
  `<div class="cart-item">
<div class="row-img">
<img class='rowimg' src=${image}>
</div>
<p style='font-size:12px;'>${title}</p>
<h2 style='font-size:15px;'>$ ${price}.00</h2>`+
"<i class='fa-solid fa-trash' onclick='delet("+(j++)+")'></i>"+`</div>`
);
      }).join('');

      
      }
  
  }

  document.getElementById("search").addEventListener("keyup",function(){
    let text=document.getElementById("search").value.toLowerCase();
    console.log(text)
  const filter1 =product.filter((e)=>{
      e.title.toLowerCase().includes(text);
    })
read(filter1)    })
  