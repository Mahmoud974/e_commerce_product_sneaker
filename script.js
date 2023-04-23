let value,
  displayOrHidden = true;
const close = document.querySelectorAll(".navbar-close"),
  backdrop = document.querySelectorAll(".navbar-backdrop"),
  div_global = document.querySelector("#div_global"),
  div = document.createElement("div"),
  img_shoe = document.createElement("img"),
  p = document.createElement("p"),
  span_quantity_Basket = document.createElement("span"),
  span_total_Basket = document.createElement("span"),
  img_close = document.createElement("img"),
  btn_buy = document.createElement("button"),
  p_Empty = document.createElement("p");
// Selectionner les images cliqué
const img_blocks = document.querySelectorAll(".img_block");
const items = document.querySelectorAll(".img_slider");

//Activer la carte panier
img_Basket.addEventListener("click", () => {
  if (displayOrHidden) {
    card_basket.classList =
      "card_basket flex justify-end container mx-auto max-w-6xl";
    displayOrHidden = false;
  } else {
    card_basket.classList = "hidden";
    displayOrHidden = true;
  }
});

/**
 * Ajouter une class sur les balises
 */
const create_Class = () => {
  div.className = "flex mx-auto mt-2 space-x-2";
  img_shoe.classList = "rounded-md w-10 h-10";
  p.classList = "text-[12px]";
  img_close.classList = "w-3 h-3 mt-4";
  span_total_Basket.classList = "font-bold";
  btn_buy.classList =
    "mt-4 bg-orange-500 w-full h-8 text-sm rounded-md px-12 font-bold text-white";
  p_Empty.classList = "font-sans text-center mt-4 text-slate-500 ";
};

/**
 * Ajouter des attributs
 * @param {total des baskets selectionné} value_quantity
 * @param {quantité selectionné} value_total
 */
const create_Element_Balises = () => {
  create_Class();
  div.setAttribute("id", "shoes_unique");
  img_shoe.setAttribute("src", "/images/image-product-1.jpg");
  img_shoe.setAttribute("alt", "image of product");
  img_close.setAttribute("src", "./images/icon-close.svg");
  img_close.setAttribute("alt", "remove a product");
  span_quantity_Basket.setAttribute("id", "quantity_Basket");
  span_total_Basket.setAttribute("id", "price_Total");
  p.innerHTML = `Autumn Limited Edition $125.00 x `;
  p.setAttribute("data-shoes", "beautiful_sneaker");
  p.setAttribute("id", "beautiful_sneaker");

  span_quantity_Basket.innerHTML = value;
  quantity_only.innerHTML = value;
  span_total_Basket.innerHTML = " $" + 125 * value;
  basket_Empty.classList = "hidden";
  btn_buy.innerHTML = "Checkout";

  //Ajouter dans le DOM
  div_global.append(div, btn_buy);
  div.append(img_shoe, p, img_close);
  div_global.closest(".box").append(p_Empty);
  p.append(span_quantity_Basket, span_total_Basket);
};

img_close.addEventListener("click", () => {
  beautiful_sneaker.closest("div").remove();
  btn_buy.classList = "hidden";
  quantity_only.innerHTML = 0;
  basket_Empty.classList = "text-center text-slate-500 mt-2 visible";
  quantity.value = 0;
});
/**
 * Décrémenter la quantité de basket
 */
const total_Basket = () => {
  create_Element_Balises();
};

document.querySelectorAll(`button[data-action="decrement"]`).forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const btn = e.target.parentNode.parentElement.querySelector(
        'button[data-action="decrement"]'
      ),
      target = btn.nextElementSibling;
    value = Number(target.value);
    value--;
    target.value = value;

    if (value === -1) target.value = 0;
  });
});
/**
 * incrémenter la quantité de basket
 */
document.querySelectorAll(`button[data-action="increment"]`).forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const btn = e.target.parentNode.parentElement.querySelector(
        'button[data-action="decrement"]'
      ),
      target = btn.nextElementSibling;
    value = Number(target.value);
    value++;
    target.value = value;
  });
});
/**
 * Envoyer la commande selectionnée dans le panier
 */
send_Basket.addEventListener("submit", (e) => {
  e.preventDefault();
  total_Basket(value, value);
});

// Menus Burger
document.addEventListener("DOMContentLoaded", () => {
  // open
  const burger = document.querySelectorAll(".navbar-burger");
  const menu = document.querySelectorAll(".navbar-menu");

  if (burger.length && menu.length) {
    for (var i = 0; i < burger.length; i++) {
      burger[i].addEventListener("click", () => {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  if (close.length) {
    for (var i = 0; i < close.length; i++) {
      close[i].addEventListener("click", () => {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  if (backdrop.length) {
    for (var i = 0; i < backdrop.length; i++) {
      backdrop[i].addEventListener("click", () => {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }
});
//Creer une Carrousel
const img_slider_main = document.querySelectorAll(".img_slider_main");
const little_img = document.querySelectorAll(".little_img");
little_img.forEach((img) => {
  img.addEventListener("click", (e) => {
    console.log(e.target.getAttribute("src").slice(0, 23) + ".jpg");
    img_slider_main.forEach((img) =>
      img.setAttribute(
        "src",
        e.target.getAttribute("src").slice(0, 23) + ".jpg"
      )
    );
  });
});
// img_slider.addEventListener("click", () => {
//   var html = document.getElementsByTagName("html")[0];
//   document.body.style.background = "red";
// });
