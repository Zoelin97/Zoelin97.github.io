/*construct pillow */
function item(name, price, quantity, color, fill, image){
	this.name = name;
	this.price = price;
	this.quantity = quantity;
	this.color = color;
	this.fill = fill;
	this.image = "pink.jpg";
}

/*cart item quantity */
/item quantity/
function addQuant() {
	var x = document.getElementById("itemQuant").value;
	x = Number(x)+1;
	document.getElementById("itemQuant").value = x;
	return x;
}
function minusQuant() {
	var x = document.getElementById("itemQuant").value;
	x = Number(x)-1;
	if (x<1) {
		x = 1
	}
	document.getElementById("itemQuant").value = x;
	return x;
}

/*load cart item*/
function onload() {
	
	var cartItem;
	  if (localStorage.getItem("pillow") === null) {
	    cartItem = [];
	    document.getElementById("cartTitle").innerHTML = "Your Cart is Empty!"
	  } else {
	    cartItem = JSON.parse(localStorage.getItem("pillow"));
	  }
	  console.log(cartItem);

	  var cartItems="";
	  for (i=0; i < cartItem.length; i++) { 
	  	 cartItems +=`<div class="item" id="itemOne">
			           <input type="checkbox" name="additem" value="added"><br>
			           <img src="${cartItem[i].image}" alt="pillow" id="itemImage" style="width: 100%">
			          
			           <div class="description">
			              <span id="itemName">${cartItem[i].name}</span>
			              <span id="itemColor">${cartItem[i].color}</span>
			              <span id="itemFill">${cartItem[i].fill}</span>
			            </div>
			         
			            <div class="quantity">
			              <button class="plus-btn" type="button" name="button" onclick="addQuant()">+</button>
			              <input type="text" name="name" id="itemQuant"value="${cartItem[i].quantity}">
			              <button class="minus-btn" type="button" name="button" onclick="minusQuant()">-</button>
			            </div>        
			         
			            <div class="price" id="itemPrice">${cartItem[i].price}</div>
			              <button type="submit" class="buttonDelete" id="delete" href="#" onclick="deleteItem()">delete</button>
			              <button type="submit" class="button" href="#" onclick="addWish()">add to wishlist</button>
			        	</div>`;
	  }
	  document.getElementById("storedItem").innerHTML= cartItems;
}


/*delete cart item*/
function deleteItem(i) {
	var cartItem;
	  if (localStorage.getItem("pillow") === null) {
	    cartItem = [];
	  } else {
	    cartItem = JSON.parse(localStorage.getItem("pillow"));
	  }
	  
	  document.getElementById("storedItem").innerHTML=cartItem.splice(i, 1);
	  localStorage.setItem("pillow", JSON.stringify(cartItem));
	  console.log(cartItem);

	  onload();
   
}

/*add to wishlist*/
function addWish(i) {
	var cartItem;
	  if (localStorage.getItem("pillow") === null) {
	    cartItem = [];
	    document.getElementById("cartTitle").innerHTML = "Your Cart is Empty!"
	  } else {
	    cartItem = JSON.parse(localStorage.getItem("pillow"));
	  }
 	  var wishList; 
	  if (localStorage.getItem("item") === null) {
	    wishList = [];
	  } else {
	    wishList = JSON.parse(localStorage.getItem("item"));
	  }
	  wishList.push(new item(cartItem[i].name, cartItem[i].price, cartItem[i].quantity, cartItem[i].color, cartItem[i].fill));
		localStorage.setItem("item", JSON.stringify(wishList));
		console.log(wishList);

	  var WishItem="";
	  for (i=0; i < wishList.length; i++) { 
	  	 WishItem +=`<div class="item" id="itemOne">
			           <input type="checkbox" name="additem" value="added"><br>
			           <img src="${wishList[i].image}" alt="pillow" id="itemImage" style="width: 100%">
			           <div class="description">
			              <span id="itemName">${wishList[i].name}</span>
			              <span id="itemColor">${wishList[i].color}</span>
			              <span id="itemFill">${wishList[i].fill}</span>
			            </div>      
			            <div class="quantity">
			              <button class="plus-btn" type="button" name="button" onclick="addQuant()">+</button>
			              <input type="text" name="name" id="itemQuant"value="${wishList[i].quantity}">
			              <button class="minus-btn" type="button" name="button" onclick="minusQuant()">-</button>
			            </div>        
			            <div class="price" id="itemPrice">${wishList[i].price}</div>
			              <button type="submit" class="buttonDelete" id="delete" href="#" onclick="deleteItem()">delete</button>
			        	</div>`;
	  }
	  document.getElementById("WishedItem").innerHTML= WishItem;
	  onload();
 }
