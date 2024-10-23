const productImage = document.querySelector(".product-image");
const productName = document.querySelector(".product-name");
const productPrice = document.querySelector(".product-price");
const productQuantity = document.querySelector(".product-quantity");
const productSubTotal = document.querySelector(".product-subtotal");
const subTotal = document.querySelector(".subtotal-price");
const totalPrice = document.querySelector(".total-price");
const cartList = document.querySelector(".cart-list");
const deleteButton = document.querySelector(".delete");
const checkoutButton = document.querySelector(".checkout-button");

const apiURL =
  "https://cdn.shopify.com/s/files/1/0883/2188/4479/files/apiCartData.json?v=1728384889";

deleteButton.addEventListener("click", () => {
  subTotal.textContent = "0";
  totalPrice.textContent = "0";
  cartList.innerHTML = "";
});

checkoutButton.addEventListener("click", () => {
  alert("Proceeding to Checkout");
});

function display(data) {
  data.items.forEach((item) => {
    const itemTotal = item.quantity * item.price;
    productImage.src = item.image;
    productName.textContent = item.title;
    productPrice.textContent = item.price;
    productQuantity.textContent = item.quantity;
    productSubTotal.textContent = itemTotal;
    subTotal.textContent = itemTotal;
    totalPrice.textContent = itemTotal;
  });
}

async function fetchCartData() {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    display(data);
    console.log(data);
  } catch (error) {
    console.log("Error fetching cart data:", error);
  }
}

fetchCartData();
