 new Swiper('.image-slider',{
 	//стрелки
 	navigation: {
 		nextEl: ".swiper-button-next",
 		prevEl: ".swiper-button-prev"
 	},
 	//навигация
 	//буллеты и пргресс бар
 	pagination: {
 		el: ".swiper-pagination",
 		clickable: true,
 		dynamicBullets: true,
 	},
 	//кол-во слайдов
 	slidesPerView: 3,
   //слайд по центру
   //centerdSlides: true,
   //бесконечность
   loop: true,
 });


//Корзина первые наброски

let cart = {
  'slab' : {
    "name" : "SLAB",
    "count" : 0,
    "price" : "1000 рублей",
  },
  'art' : {
    "name" : "ART",
    "count" : 0,
    "price" : "1000 рублей",
  },
  'comp' : {
    "name" : "COMPOSITE",
    "count" : 0,
    "price" : "1000 рублей",
  },
};

document.onclick = event => {
  if (event.target.classList.contains('plus')) {
    plusFunction(event.target.dataset.id);
  };
  if (event.target.classList.contains('minus')) {
    minusFunction(event.target.dataset.id);
  };
};

const plusFunction = id => {
  if (cart[id]["count"] !=undefined){
    cart[id]["count"]++;
  }
  else {
    cart[id]["count"] = 1
  }
  renderCart();
};

const minusFunction = id => {
  if (cart[id]["count"] - 1 == 0) {
    deleteFunction(id);
    return true;
  };
  cart[id]["count"]--;
  renderCart();
};

const deleteFunction = id => {
  delete cart[id];
  renderCart();
};

const renderCart = () => {
  console.log(cart);
};

renderCart();









// Открывающиеся окно SLAB
 function slideSLAB() {
  document.getElementById("myDropDownSlab").classList.toggle("show");
 }

 window.onclick = function(event) {
  if (!event.target.matches('.dropbtn_slab')) {
    var dropdowns = document.getElementsByClassName("tovar-spisok_slab");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
  }
 };


// Открывающиеся окно ART
 function slideART() {
  document.getElementById("myDropDownArt").classList.toggle("show");
 }

 window.onclick = function(event) {
  if (!event.target.matches('.dropbtn_art')) {
    var dropdowns = document.getElementsByClassName("tovar-spisok_art");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
  }
 };


 // Открывающиеся окно COMPOSITE
 function slideCOMPOSITE() {
  document.getElementById("myDropDownComp").classList.toggle("show");
 }

 window.onclick = function(event) {
  if (!event.target.matches('.dropbtn_comp')) {
    var dropdowns = document.getElementsByClassName("tovar-spisok_comp");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
  }
 };



 // открывающиеся окно новостей