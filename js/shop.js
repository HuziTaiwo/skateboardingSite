const cartInfo = document.querySelector(".cart-info");
const cartBg = document.querySelector(".cart-bg");

// show cart
cartInfo.addEventListener("click", () => {
  cartBg.classList.toggle("active");
});

const cardImg = document.querySelectorAll(".card .img-container");
const cartIcon = document.querySelector(".cart-icon-btn");
const cartIcons = document.querySelectorAll(".cart-icon-btn");

cardImg.forEach((img) => {
  img.addEventListener("mouseenter", (e) => {
    const icon = e.target.nextElementSibling.nextElementSibling;
    icon.classList.add("active");
  });
  img.addEventListener("mouseleave", (e) => {
    const icon = e.target.nextElementSibling.nextElementSibling;
    icon.classList.remove("active");
  });
});

cartIcons.forEach((icon) => {
  icon.addEventListener("mouseover", () => {
    icon.classList.add("active");
  });
  icon.addEventListener("mouseout", () => {
    icon.classList.remove("active");
  });
});

const search = () => {
  const search = document.forms["search-box"];

  search.addEventListener("keyup", (e) => {
    // e.preventDefault();

    const input = e.target;
    const inputValue = input.value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      const name = card.children[1].children[0].textContent;
      const nameValue = name.toLowerCase();

      if (nameValue.includes(inputValue)) {
        card.style.display = "initial";
      } else {
        card.style.display = "none";
      }
    });
  });
};

const cartInteractive = () => {
  // Add to cart
  const cartIcon = document.querySelectorAll(".item-icon");
  cartIcon.forEach((icon) => {
    icon.addEventListener("click", (e) => {
      if (e.target.parentElement.classList.contains("cart-icon-btn")) {
        const item = {};

        let imgSrc =
          e.target.parentElement.previousElementSibling.previousElementSibling
            .firstElementChild.src;
        imgPos = imgSrc.indexOf("img") + 3;
        src = imgSrc.slice(imgPos);
        item.src = src;

        let name =
          e.target.parentElement.previousElementSibling.children[0].textContent;
        item.name = name;

        var price =
          e.target.parentElement.previousElementSibling.children[1].textContent;
        var fprice = price.slice(1).trim();
        item.price = fprice;

        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-items");

        cartItem.innerHTML = `<div class="img-circle">
        <img src="img/${src}" alt="img" />
      </div>
      <div id="item-text">
        <p id="item-title">${name}</p>
        <span>$</span>
        <span id="cart-item-price">${fprice}</span>
      </div>
      <i class="item-del fas fa-trash"></i>`;

        const cart = document.querySelector(".cart-bg");
        const cartEst = document.querySelector(".cart-est");

        cart.insertBefore(cartItem, cartEst);

        const msg = e.target.parentElement.nextElementSibling;
        msg.classList.add("msg");
        msg.innerHTML = "Item added to cart";
        setTimeout(() => {
          msg.classList.remove("msg");
          msg.innerHTML = "";
        }, 1000);
        showTotal();
      }
    });

    function showTotal() {
      const total = [];
      const items = document.querySelectorAll("#cart-item-price");

      items.forEach((item) => {
        total.push(parseFloat(item.textContent));
      });
      const totalPrice = total.reduce((total, item) => {
        total += item;
        return total;
      });
      const finalPrice = totalPrice.toFixed(2);

      document.querySelector("#cart-total").textContent = finalPrice;
      document.querySelector("#item-total").textContent = finalPrice;
      document.querySelector("#item-count").textContent = total.length;
    }
  });

  // Remove from cart
  const cart = document.querySelector(".cart-bg");
  cart.addEventListener("click", (e) => {
    if (e.target.classList.contains("item-del")) {
      const delPrice = e.target.previousElementSibling.children[2].innerHTML;

      const total = [];
      const items = document.querySelectorAll("#cart-item-price");

      items.forEach((item) => {
        total.push(parseFloat(item.textContent));
      });
      const totalPrice = total.reduce((total, item) => {
        total += item;
        return total;
      });
      const finalPrice = totalPrice.toFixed(2);

      const newPrice = (finalPrice - delPrice).toFixed(2);

      document.querySelector("#cart-total").textContent = newPrice;
      document.querySelector("#item-total").textContent = newPrice;
      document.querySelector("#item-count").textContent = total.length - 1;

      div = e.target.parentElement;
      cart.removeChild(div);
      const cartIcon = document.querySelector(".fa-shopping-cart");

      if (cartIcon.style.animation) {
        cartIcon.style.animation = "";
      } else {
        cartIcon.style.animation = "wiggle 0.5s ease";
      }
      setTimeout(() => {
        cartIcon.style.animation = "";
      }, 500);
    }
  });
};

// clear cart
const clearBtn = document.querySelector(".clear-btn");

clearBtn.addEventListener("click", (e) => {
  const cartBg = e.target.parentElement.parentElement;

  const items = document.querySelectorAll(".cart-bg .cart-items");

  items.forEach((item) => {
    cartBg.removeChild(item);
  });

  const cartIcon = document.querySelector(".fa-shopping-cart");

  const alert = e.target.parentElement.parentElement.firstElementChild;
  alert.classList.add("alert");
  alert.innerHTML = "Cart has been cleared";
  setTimeout(() => {
    alert.classList.remove("alert");
    alert.innerHTML = "";
  }, 1000);
  cartIcon.style.animation = "wiggle 0.5s ease";

  document.querySelector("#cart-total").textContent = 0.0;
  document.querySelector("#item-total").textContent = 0.0;
  document.querySelector("#item-count").textContent = 0;
});

cartInteractive();
search();
