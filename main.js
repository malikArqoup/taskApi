//تعريف الفنكشن الذي فيه products
async function getProducts(){ // يكون async لانه يتطلب وقت كثير للاحضار من السيؤفر واستخدام await لحل المشكله
const response = await fetch("https://dummyjson.com/products");//لاظهار البرودكت
const data = await response.json();

const result = data.products.map(function(ele){
    return`
    <div class="product">
    <h2>${ele.title}</h2>
    <image src = "${ele.thumbnail}">
    <h3>${ele.price}$</h3>
    <h3>${ele.brand}</h3>
    </div>

   
    `
}).join('');
document.querySelector(".head").innerHTML = result;
}
getProducts();