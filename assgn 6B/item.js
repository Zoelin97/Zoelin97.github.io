function pillow(name, price, quantity, color, fill, image){
	this.name = name;
	this.price = price;
	this.quantity = quantity;
	this.color = color;
	this.fill = fill;
	this.image = "pink.jpg";
}

//item quantity//
function addQuant() {
	var x = document.getElementById("itemQuant").value;
	x = Number(x)+1;
	document.getElementById("itemQuant").value = x;
	calcPrice();
}

function minusQuant() {
	var x = document.getElementById("itemQuant").value;
	x = Number(x)-1;
	if (x<1) {
		x = 1
	}
	document.getElementById("itemQuant").value = x;
	calcPrice();
}

function calcPrice(){
	var price = 18;
	var Quant = document.getElementById("itemQuant").value;
	price = Number(Quant) * price;
	document.getElementById("total-price").value = "$" + price;
}

function dropDown() {
	document.getElementById("myColor").classList.toggle("show");
}

//change picture by colorselection
function gotoImage(select){
	var x = document.getElementById('selectColor').value;
	var pillowImages = document.getElementById('pillowImage').src;
	if (x === "After School Special"){
		document.getElementById('pillowImage').src = 'grey.jpg'
	} else if (x==="Morning Haze") {
		document.getElementById('pillowImage').src = 'pink.jpg'
	} else if (x==="Cozy Denim") {
		document.getElementById('pillowImage').src = 'orange.jpg'
	} else if (x==="Rainy Day") {
		document.getElementById('pillowImage').src = 'purple.jpg'
	}
}

// load storage
function onload() {
    localStorage.setItem("addedItem", JSON.stringify(pillow));
  
}

// store pillow
function onClick() {
	var x = document.getElementById('selectColor').value;
	var pillowImages = document.getElementById('pillowImage').src;
		if (x === "After School Special"){
		pillowImages = 'grey.jpg'
	} else if (x==="Morning Haze") {
		pillowImages = 'pink.jpg'
	} else if (x==="Cozy Denim") {
		pillowImages = 'orange.jpg'
	} else if (x==="Rainy Day") {
		pillowImages = 'purple.jpg'
	}
	document.getElementById('shopcart').src = 'cart2.png'
	document.getElementById("cart").innerHTML = "ADDED!";
	var cartItem;
  
	  if (localStorage.getItem("pillow") === null) {
	    cartItem = [];
	  } else {
	    cartItem = JSON.parse(localStorage.getItem("pillow"));
	  }

	  cartItem.push(new pillow(  document.getElementById("itemName").value, document.getElementById("total-price").value, document.getElementById("itemQuant").value, document.getElementById("selectColor").value, document.getElementById("selectFill").value));
		localStorage.setItem("pillow", JSON.stringify(cartItem));
		console.log(cartItem);
}

var Index = 1;
showSlides(Index);

// Next/previous controls
function plus(n) {
  showSlides(Index += n);
}

// Thumbnail image controls
function currentPillow(n) {
  showSlides(Index = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("similar");
  var dots = document.getElementsByClassName("thumb");
  if (n > slides.length) {Index = 1}
  if (n < 1) {Index = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[Index-1].style.display = "block";
  dots[Index-1].className += " active";
}