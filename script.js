const products = [

{
id:1,
name:"Laptop",
price:50000,
image:"https://picsum.photos/300?1"
},

{
id:2,
name:"Smartphone",
price:20000,
image:"https://picsum.photos/300?2"
},

{
id:3,
name:"Headphones",
price:3000,
image:"https://picsum.photos/300?3"
},

{
id:4,
name:"Smart Watch",
price:5000,
image:"https://picsum.photos/300?4"
},

{
id:5,
name:"Keyboard",
price:1500,
image:"https://picsum.photos/300?5"
},

{
id:6,
name:"Mouse",
price:800,
image:"https://picsum.photos/300?6"
}

];

let cart = [];

const productList =
document.getElementById("product-list");

const cartItems =
document.getElementById("cart-items");

const totalPrice =
document.getElementById("total-price");

const cartCount =
document.getElementById("cart-count");

const search =
document.getElementById("search");

function displayProducts(items){

productList.innerHTML="";

items.forEach(product=>{

const card=document.createElement("div");

card.classList.add("product-card");

card.innerHTML=`

<img src="${product.image}">
<h3>${product.name}</h3>
<p>₹${product.price}</p>

<button onclick="addToCart(${product.id})">
Add To Cart
</button>

`;

productList.appendChild(card);

});

}

function addToCart(id){

const product =
products.find(item=>item.id===id);

cart.push(product);

updateCart();

}

function updateCart(){

cartItems.innerHTML="";

let total=0;

cart.forEach((item,index)=>{

total += item.price;

const li=document.createElement("li");

li.innerHTML=`

${item.name}
- ₹${item.price}

<button onclick="removeItem(${index})">
Remove
</button>

`;

cartItems.appendChild(li);

});

totalPrice.innerText=total;

cartCount.innerText=cart.length;

}

function removeItem(index){

cart.splice(index,1);

updateCart();

}

search.addEventListener("keyup",()=>{

const value=
search.value.toLowerCase();

const filtered=
products.filter(product=>

product.name
.toLowerCase()
.includes(value)

);

displayProducts(filtered);

});

displayProducts(products);