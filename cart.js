let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({name, price});
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart 🛒");
}

function loadCart() {
  let items = document.getElementById("cartItems");
  let total = 0;
  items.innerHTML = "";

  cart.forEach(p => {
    total += p.price;
    items.innerHTML += `<p>${p.name} - ₹${p.price}</p>`;
  });

  document.getElementById("total").innerText = total;
}