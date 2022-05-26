const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 3000,
    diasbleOnInteraction: false,
  },
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//Hamburger Open and Close
let navLinks = document.getElementById("nav-links");
let menuOpen = document.getElementById("hamburger");
let menuClose = document.getElementById("menu-close");
let container = document.getElementById("content");

menuOpen.addEventListener("click", () => {
  navLinks.classList.add("active");
  container.style.backgroundColor = "hsl(223, 64%, 98%)";
  container.style.opacity = "0.3";
});

menuClose.addEventListener("click", () => {
  navLinks.classList.remove("active");
  container.style.backgroundColor = "white";
  container.style.opacity = "1";
});

// Header change on scroll

const header = document.getElementById("navigation");

window.addEventListener("scroll", () => {
  if (window.scrollY > header.offsetHeight) {
    header.classList.add("show");
  } else {
    header.classList.remove("show");
  }
});

// Event Listener on the add and minus product button
let productNumber = document.getElementById("zero");

let value = 0;

function addCart() {
  value++;
  productNumber.textContent = value;
}

function minusCart() {
  if (value > 0) {
    //Only decrement if the value is more than zero
    value--;
    productNumber.textContent = value;
  } else {
    return;
  }
}

// Add to Cart Button Function

function addToCart() {
  let productNumber = document.getElementById("zero");
  let cartIconNum = document.getElementById("num");

  let productQuantity = productNumber.textContent;
  if (productQuantity >= 1) {
     cartIconNum.style.visibility = "visible";
  cartIconNum.textContent = productQuantity; //Appending the quantity of products
                                            // selected  to the header cart icon
  } else {
     cartIconNum.style.visibility = "hidden";   
  }
   
}

//Cart Icon Click Function

function cartImg() {
  let cartIconNum = document.getElementById("num");
  const container = document.getElementById("container");
  let cartEmpty = document.getElementById("cartEmpty");
  let cartFilled = document.getElementById("cartFilled");
  let cartBoxQty = document.getElementById("quantity");
  let cartAmount = document.getElementById("amount");

  const price = 125;
  let cartValue = cartIconNum.textContent; //Value of the cart icon

  if (cartValue == 0) {
    cartEmpty.classList.toggle("empty");
    cartFilled.classList.remove("filled");
  } else {
    cartFilled.classList.toggle("filled");
    cartEmpty.classList.remove("empty");
    cartBoxQty.textContent = cartValue;
    cartAmount.textContent = "$" + price * cartValue; //Multiplying the number of product
                                                     // ordered by the fixed price
  }
}

//Delete/Remove Product in Cart Box on delete icon click
/* function deleteProduct(){
  let cartFilled = document.querySelectorAll(".cartFilled .products");
  cartArray =[...cartFilled ];
  console.log(cartArray);


} */

 let cartFilled = document.querySelectorAll(" .products");
 cartArray = [...cartFilled];
 console.log(cartArray.pop());



//Removing CartBoxes on clicking empty spaces

winndow.addEventListener("click", (e) => {
  let cartEmpty = document.getElementById("cartEmpty");
  let cartFilled = document.getElementById("cartFilled");

  if (
    e.target.id !== "cartEmpty" &&
    e.target.id !== "cartFilled" &&
    e.target.id !== "cartImg"
  ) {
    cartEmpty.classList.remove("empty");
    cartFilled.classList.remove("filled");
  }
});
