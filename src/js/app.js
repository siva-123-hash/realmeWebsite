/*=====================================================================*/
/*======================== realme X50 Pro 5G ==========================*/
/*=====================================================================*/
/*===== (RUST RED VERSION) =====*/
// Content & Button Properties
function rushRedImages() {
	// Main product images
	document.getElementById("mainImage").src =
		"..src/img/productImages/1594595141366.jpg";

	// More products images
	document.getElementById("moreImage1").src =
		"..src/img/productImages/1594595141366.jpg";

	document.getElementById("moreImage2").src =
		"..src/img/productImages/1588462321862.jpg";

	document.getElementById("moreImage3").src =
		"..src/img/productImages/1588462321863.jpg";

	document.getElementById("moreImage4").src =
		"..src/img/productImages/1588462321864.jpg";

	// Product Title change
	document.getElementById("productTitle").innerHTML =
		"realme X50 Pro 5G ( RUST RED UK PLUG 12GB+256GB )";

	// Checkout product title section
	document.getElementById("checkoutProductTitle").innerHTML =
		"RUST RED UK PLUG 12GB+2...";

	// Add to Cart Section button
	document.getElementById("addToCart").style.display = "block";
	document.getElementById("buyNow").innerHTML = "Buy Now";

	// Button styles changes
	document.getElementById("mossGreen").style.border = "#d3d3d3 0.1rem solid";
	document.getElementById("rustRed").style.border = "#111 0.1rem solid";

	/*===== BUTTON LISTENERS =====*/
	// Images Buttons
	const btn1 = document.getElementById("btn1");
	const btn2 = document.getElementById("btn2");
	const btn3 = document.getElementById("btn3");
	const btn4 = document.getElementById("btn4");

	/*===== CONFIGURATION BUTTON SECTION LISTENERS =====*/
	// Configuration Buttons
	const eightGB = document.getElementById("eightGB");
	const sixGBtn = document.getElementById("twelveGB");

	// Change the phone (8GB or 12GB) size in the Add To Cart section description
	eightGB.style.border = "#d3d3d3 0.1rem solid";
	eightGB.style.display = "block";
	twelveGB.style.display = "block";
	twelveGB.style.border = "#111 0.1rem solid";

	eightGB.addEventListener("click", () => {
		eightGB.style.border = "#111 0.1rem solid";

		document.getElementById("productPrice").style.display = "block";
		document.getElementById("countDown").style.display = "none";

		document.getElementById("finalSale").style.display = "none";
		document.getElementById("checkoutProductTitle").innerHTML =
			"RUST RED UK PLUG 8GB+128GB...";
		document.getElementById("defaultPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>569
            `;
		document.getElementById("totalPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>569
            `;
	});

	// Change the phone GB size in the Add To Cart section description
	twelveGB.addEventListener("click", () => {
		// Checkout product title section
		document.getElementById("finalSale").style.display = "flex";
		document.getElementById("checkoutProductTitle").innerHTML =
			"RUST RED UK PLUG 12GB+256GB...";
		document.getElementById("defaultPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>449
            `;
		document.getElementById("totalPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>449
            `;
	});

	/*===== MORE IMAGE BUTTON SECTION LISTENERS =====*/
	btn1.addEventListener("click", () => {
		changeRustRedImage1();
	});

	btn2.addEventListener("click", () => {
		changeRustRedImage2();
	});

	btn3.addEventListener("click", () => {
		changeRustRedImage3();
	});

	btn4.addEventListener("click", () => {
		changeRustRedImage4();
	});
}

// Rust Red Images
function changeRustRedImage1() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1594595141366.jpg");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn1");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn2");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeRustRedImage2() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1588462321862.jpg");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn2");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeRustRedImage3() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1588462321863.jpg");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn3");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeRustRedImage4() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1588462321864.jpg");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn4");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn3");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

/*===== CHANGE PRODUCT CONFIGURATION OPTIONS =====*/
// Button Properties
function configEightGBOption() {
	document.getElementById("eightGB").style.border = "#111 0.1rem solid";
	document.getElementById("twelveGB").style.border = "#d3d3d3 0.1rem solid";

	document.getElementById("productPrice").style.display = "block";
	document.getElementById("countDown").style.display = "none";

	document.getElementById("GBSpace").innerHTML = "8GB+128GB...";
	document.getElementById("finalSale").style.display = "none";
	document.getElementById("defaultPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>569
            `;
	document.getElementById("totalPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>569
            `;
}

function configTwelveGBOption() {
	document.getElementById("eightGB").style.border = "#d3d3d3 0.1rem solid";
	document.getElementById("twelveGB").style.border = "#111 0.1rem solid";

	document.getElementById("productPrice").style.display = "none";
	document.getElementById("countDown").style.display = "flex";

	document.getElementById("GBSpace").innerHTML = "128GB+256GB...";
	document.getElementById("finalSale").style.display = "flex";
	document.getElementById("defaultPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>449
            `;
	document.getElementById("totalPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>449
            `;
}

/*===== DISPLAY ADD ON PRODUCT OPTIONS =====*/
function addOnOptionX50Pro() {
	const submitBtn = document.getElementById("addOn");
	const checkboxBtn = document.getElementById("checkbox");

	// Styling Change
	submitBtn.style.display = "Block";
	submitBtn.style.display = "flex";

	// Adds current price and add on price
	var totalPrice = 449;
	var addOnPrice = 8;
	var newTotalPrice = totalPrice + addOnPrice;

	// Displays the new Price
	document.getElementById("totalPrice").innerHTML =
		`<i class="bi bi-currency-pound"></i>` + newTotalPrice;

	// Load in default Price
	checkboxBtn.addEventListener("click", () => {
		submitBtn.style.display = "none";
		document.getElementById("totalPrice").innerHTML =
			`<i class="bi bi-currency-pound"></i>` + totalPrice;
	});
}

/*===== (MOSS GREEN VERSION) =====*/
// Content & Button Properties
function mossGreenImages() {
	// Main product images
	document.getElementById("mainImage").src =
		"..src/img/productImages/1594595165858.jpg";

	// More products images
	document.getElementById("moreImage1").src =
		"..src/img/productImages/1594595165858.jpg";

	document.getElementById("moreImage2").src =
		"..src/img/productImages/1588460890879.jpg";

	document.getElementById("moreImage3").src =
		"..src/img/productImages/1588460897805.jpg";

	document.getElementById("moreImage4").src =
		"..src/img/productImages/1588460904321.jpg";

	// Product Title change
	document.getElementById("productTitle").innerHTML =
		"realme X50 Pro 5G ( MOSS GREEN UK PLUG 12GB+256GB )";

	// Checkout product title section
	document.getElementById("checkoutProductTitle").innerHTML =
		"MOSS GREEN UK PLUG 12GB...";

	// Add to Cart Section button
	document.getElementById("addToCart").style.display = "none";
	document.getElementById("buyNow").innerHTML = "Notify Me";

	document.getElementById("productPrice").style.display = "none";
	document.getElementById("countDown").style.display = "flex";

	// Button styles changes
	document.getElementById("mossGreen").style.border = "#111 0.1rem solid";
	document.getElementById("rustRed").style.border = "#d3d3d3 0.1rem solid";

	// Configuration Buttons (8GB or 12GB)
	const twelveGB = document.getElementById("twelveGB");
	twelveGB.style.border = "#111 0.14rem dotted";
	document.getElementById("eightGB").style.display = "none";

	twelveGB.addEventListener("click", () => {
		twelveGB.style.border = "#111 0.14rem dotted";
	});

	/*===== BUTTON LISTENERS =====*/
	// Images Buttons
	const btn1 = document.getElementById("btn1");
	const btn2 = document.getElementById("btn2");
	const btn3 = document.getElementById("btn3");
	const btn4 = document.getElementById("btn4");

	/*===== MORE IMAGE BUTTON SECTION LISTENERS =====*/
	btn1.addEventListener("click", () => {
		changeMossGreenImage1();
	});

	btn2.addEventListener("click", () => {
		changeMossGreenImage2();
	});

	btn3.addEventListener("click", () => {
		changeMossGreenImage3();
	});

	btn4.addEventListener("click", () => {
		changeMossGreenImage4();
	});
}

// Moss Green Images
function changeMossGreenImage1() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1594595165858.jpg");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn1");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn2");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeMossGreenImage2() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1588460890879.jpg");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn2");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeMossGreenImage3() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1588460897805.jpg");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn3");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeMossGreenImage4() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1588460904321.jpg");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn4");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn3");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

/*=====================================================================*/
/*============================= realme X2 =============================*/
/*=====================================================================*/
/*===== (PEARL WHITE) PRODUCT IMAGE CHANGE =====*/
// Pearl White Images
function changePearlWhiteImage1() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1579143987209.jpg");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn1");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn2");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changePearlWhiteImage2() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1579143991578.jpg");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn2");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changePearlWhiteImage3() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1579143997163.jpg");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn3");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changePearlWhiteImage4() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1579144001179.jpg");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn4");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn3");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

/*=====================================================================*/
/*======================== realme Buds Air neo ========================*/
/*=====================================================================*/
/*===== BUDS AIR NEO PRODUCT IMAGE CHANGE =====*/
function changeBudsAirNeoImage1() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1590427823443.jpg");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn1");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn2");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeBudsAirNeoImage2() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1590427859232.jpg");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn2");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeBudsAirNeoImage3() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1590427885449.jpg");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn3");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeBudsAirNeoImage4() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1590427923863.jpg");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn4");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn3");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

/*=====================================================================*/
/*=========================== realme 8 5G =============================*/
/*=====================================================================*/
/*===== (SUPERSONIC BLACK VERSION) =====*/
// Content & Button Properties
function supersonicBlackImages() {
	// Main product images
	document.getElementById("mainImage").src =
		"..src/img/productImages/1620815878085.png";

	// More products images
	document.getElementById("moreImage1").src =
		"..src/img/productImages/1620815878085.png";

	document.getElementById("moreImage2").src =
		"..src/img/productImages/1620815888325.png";

	document.getElementById("moreImage3").src =
		"..src/img/productImages/1620815896630.png";

	document.getElementById("moreImage4").src =
		"..src/img/productImages/1620815912069.png";

	// Product Title change
	document.getElementById("productTitle").innerHTML =
		"realme 8 5G ( Supersonic Black 4GB+64GB UK Plug )";

	// Checkout product title section
	document.getElementById("checkoutProductTitle").innerHTML =
		"Supersonic Black 4GB+64GB...";

	// Button styles changes
	document.getElementById("supersonicBlack").style.border = "#111 0.1rem solid";
	document.getElementById("supersonicBlue").style.border =
		"#d3d3d3 0.1rem solid";

	/*===== BUTTON LISTENERS =====*/
	// Configuration Buttons
	const fourGBtn = document.getElementById("fourGB");
	const sixGBtn = document.getElementById("sixGB");

	// Images Buttons
	const btn1 = document.getElementById("btn1");
	const btn2 = document.getElementById("btn2");
	const btn3 = document.getElementById("btn3");
	const btn4 = document.getElementById("btn4");

	/*===== CONFIGURATION BUTTON SECTION LISTENERS =====*/
	// Change the phone GB size in the Add To Cart section description
	fourGBtn.addEventListener("click", () => {
		// Product Title change
		document.getElementById("productTitle").innerHTML =
			"realme 8 5G ( Supersonic Black 4GB+64GB UK Plug )";

		// Checkout product title section
		document.getElementById("checkoutProductTitle").innerHTML =
			"Supersonic Black 4GB+64GB...";

		document.getElementById("price").innerHTML = `
               <strong>£ 169 <span>£199</span></strong>
            `;

		document.getElementById("defaultPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>169
            `;
		document.getElementById("totalPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>169
            `;
	});

	// Change the phone GB size in the Add To Cart section description
	sixGBtn.addEventListener("click", () => {
		// Product Title change
		document.getElementById("productTitle").innerHTML =
			"realme 8 5G ( Supersonic Black 6GB+128GB UK Plug )";

		// Checkout product title section
		document.getElementById("checkoutProductTitle").innerHTML =
			"Supersonic Black 6GB+128GB...";

		document.getElementById("price").innerHTML = `
                <strong>£ 219 <span>£249</span></strong>
            `;

		document.getElementById("defaultPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>219
            `;
		document.getElementById("totalPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>219
            `;
	});

	/*===== MORE IMAGE BUTTON SECTION LISTENERS =====*/
	btn1.addEventListener("click", () => {
		changeSupersonicBlackImage1();
	});

	btn2.addEventListener("click", () => {
		changeSupersonicBlackImage2();
	});

	btn3.addEventListener("click", () => {
		changeSupersonicBlackImage3();
	});

	btn4.addEventListener("click", () => {
		changeSupersonicBlackImage4();
	});
}

// Supersonic Black Images
function changeSupersonicBlackImage1() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1620815878085.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn1");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn2");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeSupersonicBlackImage2() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1620815888325.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn2");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeSupersonicBlackImage3() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1620815896630.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn3");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeSupersonicBlackImage4() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1620815912069.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn4");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn3");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

/*===== (SUPERSONIC BLUE VERSION) =====*/
// Content & Button Properties
function supersonicBlueImages() {
	// Main product images
	document.getElementById("mainImage").src =
		"..src/img/productImages/1620815930056.png";

	// More products images
	document.getElementById("moreImage1").src =
		"..src/img/productImages/1620815930056.png";

	document.getElementById("moreImage2").src =
		"..src/img/productImages/1620815941197.png";

	document.getElementById("moreImage3").src =
		"..src/img/productImages/1620815951235.png";

	document.getElementById("moreImage4").src =
		"..src/img/productImages/1620815961273.png";

	// Product Title change
	document.getElementById("productTitle").innerHTML =
		"realme 8 5G ( Supersonic Blue 4GB+64GB UK Plug )";

	// Checkout product title section
	document.getElementById("checkoutProductTitle").innerHTML =
		"Supersonic Blue 4GB+64GB...";

	// Button styles changes
	document.getElementById("supersonicBlue").style.border = "#111 0.1rem solid";
	document.getElementById("supersonicBlack").style.border =
		"#d3d3d3 0.1rem solid";

	/*===== BUTTON LISTENERS =====*/
	// Configuration Buttons
	const fourGBtn = document.getElementById("fourGB");
	const sixGBtn = document.getElementById("sixGB");

	// Images Buttons
	const btn1 = document.getElementById("btn1");
	const btn2 = document.getElementById("btn2");
	const btn3 = document.getElementById("btn3");
	const btn4 = document.getElementById("btn4");

	/*===== CONFIGURATION BUTTON SECTION LISTENERS =====*/
	// Change the phone GB size in the Add To Cart section description
	fourGBtn.addEventListener("click", () => {
		// Product Title change
		document.getElementById("productTitle").innerHTML =
			"realme 8 5G ( Supersonic Blue 4GB+64GB UK Plug )";
		// Checkout product title section
		document.getElementById("checkoutProductTitle").innerHTML =
			"Supersonic Blue 4GB+64GB...";

		document.getElementById("price").innerHTML = `
               <strong>£ 169 <span>£199</span></strong>
            `;

		document.getElementById("defaultPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>169
            `;
		document.getElementById("totalPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>169
            `;
	});

	// Change the phone GB size in the Add To Cart section description
	sixGBtn.addEventListener("click", () => {
		// Product Title change
		document.getElementById("productTitle").innerHTML =
			"realme 8 5G ( Supersonic Blue 6GB+128GB UK Plug )";

		// Checkout product title section
		document.getElementById("checkoutProductTitle").innerHTML =
			"Supersonic Blue 6GB+128GB...";

		document.getElementById("price").innerHTML = `
                <strong>£ 219 <span>£249</span></strong>
            `;

		document.getElementById("defaultPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>219
            `;
		document.getElementById("totalPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>219
            `;
	});

	/*===== MORE IMAGE BUTTON SECTION LISTENERS =====*/
	btn1.addEventListener("click", () => {
		changeSupersonicBlueImage1();
	});

	btn2.addEventListener("click", () => {
		changeSupersonicBlueImage2();
	});

	btn3.addEventListener("click", () => {
		changeSupersonicBlueImage3();
	});

	btn4.addEventListener("click", () => {
		changeSupersonicBlueImage4();
	});
}

// Supersonic Blue Images
function changeSupersonicBlueImage1() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1620815930056.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn1");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn2");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeSupersonicBlueImage2() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1620815941197.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn2");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeSupersonicBlueImage3() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1620815951235.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn3");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeSupersonicBlueImage4() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1620815961273.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn4");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn3");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

/*===== CHANGE PRODUCT CONFIGURATION OPTIONS =====*/
// Button Properties
function configFourGBOption() {
	document.getElementById("fourGB").style.border = "#111 0.1rem solid";
	document.getElementById("sixGB").style.border = "#d3d3d3 0.1rem solid";
	document.getElementById("GBSpace").innerHTML = "4GB+64GB...";
	// Product Title change
	document.getElementById("productTitle").innerHTML =
		"realme 8 5G ( Supersonic Black 4GB+64GB UK Plug )";

	document.getElementById("price").innerHTML = `
               <strong>£ 169 <span>£199</span></strong>
            `;

	document.getElementById("defaultPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>169
            `;
	document.getElementById("totalPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>169
            `;
}

function configSixGBOption() {
	document.getElementById("fourGB").style.border = "#d3d3d3 0.1rem solid";
	document.getElementById("sixGB").style.border = "#111 0.1rem solid";
	document.getElementById("GBSpace").innerHTML = "6GB+128GB...";
	// Product Title change
	document.getElementById("productTitle").innerHTML =
		"realme 8 5G ( Supersonic Black 6GB+128GB UK Plug )";

	document.getElementById("price").innerHTML = `
                <strong>£ 219 <span>£249</span></strong>
            `;
	document.getElementById("defaultPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>219
            `;
	document.getElementById("totalPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>219
            `;
}

/*===== CHANGE PRODUCT QUANTITY OPTIONS =====*/
// Button Properties
function addQuantity() {
	const defaultQuantity = document.getElementById("quantity");

	var addQuantity = 1;
	var newQuantity = addQuantity + defaultQuantity;

	defaultQuantity.innerHTML = newQuantity.toString();
}

function minusQuantity() {
	const defaultQuantity = document.getElementById("quantity");
}

/*=====================================================================*/
/*=========================== realme 7 Pro ============================*/
/*=====================================================================*/
/*===== (MIRROR SILVER VERSION) =====*/
// Content & Button Properties
function mirrorSilverImages() {
	// Main product images
	document.getElementById("mainImage").src =
		"..src/img/productImages/1603382475348.jpg";

	// More products images
	document.getElementById("moreImage1").src =
		"..src/img/productImages/1603382475348.jpg";

	document.getElementById("moreImage2").src =
		"..src/img/productImages/1601966616655.jpg";

	document.getElementById("moreImage3").src =
		"..src/img/productImages/1601966732625.jpg";

	document.getElementById("moreImage4").src =
		"..src/img/productImages/1601966615626.jpg";

	// Product Title change
	document.getElementById("productTitle").innerHTML =
		"realme 7 Pro ( Mirror Silver 8GB+128GB UK PLUG )";

	// Checkout product title section
	document.getElementById("checkoutProductTitle").innerHTML =
		"Mirror Silver 4GB+64GB...";

	// Button styles changes
	document.getElementById("mirrorSilver").style.border = "#111 0.1rem solid";
	document.getElementById("mirrorBlue").style.border = "#d3d3d3 0.1rem solid";

	/*===== BUTTON LISTENERS =====*/
	// Configuration Buttons
	const eightGB2Btn = document.getElementById("eightGB2");

	// Images Buttons
	const btn1 = document.getElementById("btn1");
	const btn2 = document.getElementById("btn2");
	const btn3 = document.getElementById("btn3");
	const btn4 = document.getElementById("btn4");

	/*===== CONFIGURATION BUTTON SECTION LISTENERS =====*/
	// Change the phone GB size in the Add To Cart section description
	eightGB2Btn.addEventListener("click", () => {
		// Checkout product title section
		document.getElementById("checkoutProductTitle").innerHTML =
			"Mirror Silver 8GB+128GB UK...";
		document.getElementById("defaultPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>134
            `;
		document.getElementById("totalPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>134
            `;
	});

	/*===== MORE IMAGE BUTTON SECTION LISTENERS =====*/
	btn1.addEventListener("click", () => {
		changeMirrorSilverImage1();
	});

	btn2.addEventListener("click", () => {
		changeMirrorSilverImage2();
	});

	btn3.addEventListener("click", () => {
		changeMirrorSilverImage3();
	});

	btn4.addEventListener("click", () => {
		changeMirrorSilverImage4();
	});
}

// Mirror Silver Images
function changeMirrorSilverImage1() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1603382475348.jpg");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn1");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn2");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeMirrorSilverImage2() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1601966616655.jpg");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn2");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeMirrorSilverImage3() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1601966732625.jpg");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn3");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeMirrorSilverImage4() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1601966615626.jpg");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn4");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn3");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

/*===== (MIRROR BLUE VERSION) =====*/
// Content & Button Properties
function mirrorBlueImages() {
	// Main product images
	document.getElementById("mainImage").src =
		"..src/img/productImages/1603382496106.jpg";

	// More products images
	document.getElementById("moreImage1").src =
		"..src/img/productImages/1603382496106.jpg";

	document.getElementById("moreImage2").src =
		"..src/img/productImages/1601966674798.jpg";

	document.getElementById("moreImage3").src =
		"..src/img/productImages/1601966673382.jpg";

	document.getElementById("moreImage4").src =
		"..src/img/productImages/1601966673792.jpg";

	// Product Title change
	document.getElementById("productTitle").innerHTML =
		"realme 7 Pro ( Mirror Blue 8GB+128GB UK PLUG )";

	// Checkout product title section
	document.getElementById("checkoutProductTitle").innerHTML =
		"Mirror Blue 8GB+128GB UK...";

	// Button styles changes
	document.getElementById("mirrorBlue").style.border = "#111 0.1rem solid";
	document.getElementById("mirrorSilver").style.border = "#d3d3d3 0.1rem solid";

	/*===== BUTTON LISTENERS =====*/
	// Configuration Buttons
	const eightGB2Btn = document.getElementById("eightGB2");

	// Images Buttons
	const btn1 = document.getElementById("btn1");
	const btn2 = document.getElementById("btn2");
	const btn3 = document.getElementById("btn3");
	const btn4 = document.getElementById("btn4");

	/*===== CONFIGURATION BUTTON SECTION LISTENERS =====*/
	// Change the phone GB size in the Add To Cart section description
	eightGB2Btn.addEventListener("click", () => {
		// Checkout product title section
		document.getElementById("checkoutProductTitle").innerHTML =
			"Mirror Blue 8GB+128GB UK...";
		document.getElementById("defaultPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>134
            `;
		document.getElementById("totalPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>134
            `;
	});

	/*===== MORE IMAGE BUTTON SECTION LISTENERS =====*/
	btn1.addEventListener("click", () => {
		changeMirrorBlueImage1();
	});

	btn2.addEventListener("click", () => {
		changeMirrorBlueImage2();
	});

	btn3.addEventListener("click", () => {
		changeMirrorBlueImage3();
	});

	btn4.addEventListener("click", () => {
		changeMirrorBlueImage4();
	});
}

// Mirror Blue Images
function changeMirrorBlueImage1() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1603382496106.jpg");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn1");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn2");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeMirrorBlueImage2() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1601966674798.jpg");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn2");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeMirrorBlueImage3() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1601966673382.jpg");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn3");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeMirrorBlueImage4() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1601966673792.jpg");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn4");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn3");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

/*===== CHANGE PRODUCT CONFIGURATION OPTIONS =====*/
// Button Properties
function configEightGB2Option() {
	document.getElementById("fourGB").style.border = "#111 0.1rem solid";
	document.getElementById("sixGB").style.border = "#d3d3d3 0.1rem solid";
	document.getElementById("GBSpace").innerHTML = "4GB+64GB...";
	document.getElementById("defaultPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>134
            `;
	document.getElementById("totalPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>134
            `;
}

/*===== CHANGE PRODUCT QUANTITY OPTIONS =====*/
// Button Properties
function addQuantity() {
	const defaultQuantity = document.getElementById("quantity");

	var addQuantity = 1;
	var newQuantity = addQuantity + defaultQuantity;

	defaultQuantity.innerHTML = newQuantity.toString();
}

function minusQuantity() {
	const defaultQuantity = document.getElementById("quantity");
}

/*=====================================================================*/
/*=========================== realme C21 =============================*/
/*=====================================================================*/
/*===== (CROSS BLACK VERSION) =====*/
// Content & Button Properties
function crossBlackImages() {
	// Main product images
	document.getElementById("mainImage").src =
		"..src/img/productImages/1619505271357.png";

	// More products images
	document.getElementById("moreImage1").src =
		"..src/img/productImages/1619505271357.png";

	document.getElementById("moreImage2").src =
		"..src/img/productImages/1619505271038.png";

	document.getElementById("moreImage3").src =
		"..src/img/productImages/1619505271020.png";

	document.getElementById("moreImage4").src =
		"..src/img/productImages/1619505271401.png";

	// Product Title change
	document.getElementById("productTitle").innerHTML =
		"realme C21 ( Cross Black 3GB+32GB UK Plug )";

	// Checkout product title section
	document.getElementById("checkoutProductTitle").innerHTML =
		"Cross Black 3GB+32GB UK Pl...";

	// Button styles changes
	document.getElementById("crossBlack").style.border = "#111 0.1rem solid";
	document.getElementById("crossBlue").style.border = "#d3d3d3 0.1rem solid";

	/*===== BUTTON LISTENERS =====*/
	// Configuration Buttons
	const GBtn = document.getElementById("threeGB");
	const GB2Btn = document.getElementById("fourGB2");

	// Images Buttons
	const btn1 = document.getElementById("btn1");
	const btn2 = document.getElementById("btn2");
	const btn3 = document.getElementById("btn3");
	const btn4 = document.getElementById("btn4");

	// Change the phone (8GB or 12GB) size in the Add To Cart section description
	GBtn.style.border = "#111 0.1rem solid";
	GB2Btn.style.border = "#d3d3d3 0.1rem solid";

	/*===== CONFIGURATION BUTTON SECTION LISTENERS =====*/
	// Change the phone GB size in the Add To Cart section description
	GBtn.addEventListener("click", () => {
		// Checkout product title section
		document.getElementById("threeGB").style.border = "#111 0.1rem solid";
		document.getElementById("fourGB2").style.border = "#d3d3d3 0.1rem solid";
		// Product Title change
		document.getElementById("productTitle").innerHTML =
			"realme C21 ( Cross Black 3GB+32GB UK Plug )";

		document.getElementById("price").innerHTML = `
               <strong>£ 109</strong>
            `;

		// Checkout product title section
		document.getElementById("checkoutProductTitle").innerHTML =
			"Cross Black 3GB+32GB UK Pl...";

		document.getElementById("defaultPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>109
            `;
		document.getElementById("totalPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>109
            `;
	});

	GB2Btn.addEventListener("click", () => {
		// Checkout product title section
		document.getElementById("fourGB2").style.border = "#111 0.1rem solid";
		document.getElementById("threeGB").style.border = "#d3d3d3 0.1rem solid";

		// Product Title change
		document.getElementById("productTitle").innerHTML =
			"realme C21 ( Cross Black 4GB+64GB UK Plug )";

		// Checkout product title section
		document.getElementById("checkoutProductTitle").innerHTML =
			"Cross Black 4GB+64GB UK Pl...";

		document.getElementById("price").innerHTML = `
                <strong>£ 129</strong>
            `;
		document.getElementById("defaultPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>129
            `;
		document.getElementById("totalPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>129
            `;
	});

	/*===== MORE IMAGE BUTTON SECTION LISTENERS =====*/
	btn1.addEventListener("click", () => {
		changeCrossBlackImage1();
	});

	btn2.addEventListener("click", () => {
		changeCrossBlackImage2();
	});

	btn3.addEventListener("click", () => {
		changeCrossBlackImage3();
	});

	btn4.addEventListener("click", () => {
		changeCrossBlackImage4();
	});
}

// Cross Black Images
function changeCrossBlackImage1() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1619505271357.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn1");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn2");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeCrossBlackImage2() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1619505271038.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn2");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeCrossBlackImage3() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1619505271020.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn3");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeCrossBlackImage4() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1619505271401.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn4");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn3");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

/*===== (CROSS BLUE VERSION) =====*/
// Content & Button Properties
function crossBlueImages() {
	// Main product images
	document.getElementById("mainImage").src =
		"..src/img/productImages/1619505327029.png";

	// More products images
	document.getElementById("moreImage1").src =
		"..src/img/productImages/1619505327029.png";

	document.getElementById("moreImage2").src =
		"..src/img/productImages/1619505326663.png";

	document.getElementById("moreImage3").src =
		"..src/img/productImages/1619505326482.png";

	document.getElementById("moreImage4").src =
		"..src/img/productImages/1619505327225.png";

	// Product Title change
	document.getElementById("productTitle").innerHTML =
		"realme C21 ( Cross Blue 3GB+32GB UK Plug )";

	// Checkout product title section
	document.getElementById("checkoutProductTitle").innerHTML =
		"Cross Blue 3GB+32GB UK...";

	// Button styles changes
	document.getElementById("crossBlue").style.border = "#111 0.1rem solid";
	document.getElementById("crossBlack").style.border = "#d3d3d3 0.1rem solid";

	/*===== BUTTON LISTENERS =====*/
	// Configuration Buttons
	const GBtn = document.getElementById("threeGB");
	const GB2Btn = document.getElementById("fourGB2");

	// Images Buttons
	const btn1 = document.getElementById("btn1");
	const btn2 = document.getElementById("btn2");
	const btn3 = document.getElementById("btn3");
	const btn4 = document.getElementById("btn4");

	// Change the phone (8GB or 12GB) size in the Add To Cart section description
	GBtn.style.border = "#111 0.1rem solid";
	GB2Btn.style.border = "#d3d3d3 0.1rem solid";

	/*===== CONFIGURATION BUTTON SECTION LISTENERS =====*/
	// Change the phone GB size in the Add To Cart section description
	GBtn.addEventListener("click", () => {
		// Checkout product title section
		document.getElementById("threeGB").style.border = "#111 0.1rem solid";
		document.getElementById("fourGB2").style.border = "#d3d3d3 0.1rem solid";
		// Product Title change
		document.getElementById("productTitle").innerHTML =
			"realme C21 ( Cross Blue 3GB+32GB UK Plug )";

		document.getElementById("price").innerHTML = `
               <strong>£ 109</strong>
            `;

		// Checkout product title section
		document.getElementById("checkoutProductTitle").innerHTML =
			"Cross Blue 3GB+32GB UK Pl...";

		document.getElementById("defaultPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>109
            `;
		document.getElementById("totalPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>109
            `;
	});

	GB2Btn.addEventListener("click", () => {
		// Checkout product title section
		document.getElementById("fourGB2").style.border = "#111 0.1rem solid";
		document.getElementById("threeGB").style.border = "#d3d3d3 0.1rem solid";

		// Product Title change
		document.getElementById("productTitle").innerHTML =
			"realme C21 ( Cross Blue 4GB+64GB UK Plug )";

		// Checkout product title section
		document.getElementById("checkoutProductTitle").innerHTML =
			"Cross Blue 4GB+64GB UK Pl...";

		document.getElementById("price").innerHTML = `
                <strong>£ 129</strong>
            `;
		document.getElementById("defaultPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>129
            `;
		document.getElementById("totalPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>129
            `;
	});

	/*===== MORE IMAGE BUTTON SECTION LISTENERS =====*/
	btn1.addEventListener("click", () => {
		changeCrossBlueImage1();
	});

	btn2.addEventListener("click", () => {
		changeCrossBlueImage2();
	});

	btn3.addEventListener("click", () => {
		changeCrossBlueImage3();
	});

	btn4.addEventListener("click", () => {
		changeCrossBlueImage4();
	});
}

// Cross Blue Images
function changeCrossBlueImage1() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1619505327029.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn1");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn2");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeCrossBlueImage2() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1619505326663.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn2");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeCrossBlueImage3() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1619505326482.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn3");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeCrossBlueImage4() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1619505327225.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn4");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn3");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

/*===== CHANGE PRODUCT CONFIGURATION OPTIONS =====*/
// Button Properties
function configThreeGBOption() {
	document.getElementById("threeGB").style.border = "#111 0.1rem solid";
	document.getElementById("fourGB2").style.border = "#d3d3d3 0.1rem solid";
	document.getElementById("GBSpace").innerHTML = "3GB+32GB UK Pl...";
	// Product Title change
	document.getElementById("productTitle").innerHTML =
		"realme C21 ( Cross Black 3GB+32GB UK Plug )";

	document.getElementById("price").innerHTML = `
               <strong>£ 109</strong>
            `;

	document.getElementById("defaultPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>109
            `;
	document.getElementById("totalPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>109
            `;
}
function configFourGBTwoOption() {
	document.getElementById("fourGB2").style.border = "#111 0.1rem solid";
	document.getElementById("threeGB").style.border = "#d3d3d3 0.1rem solid";
	document.getElementById("GBSpace").innerHTML = "4GB+64GB UK Pl...";

	// Product Title change
	document.getElementById("productTitle").innerHTML =
		"realme C21 ( Cross Black 4GB+64GB UK Plug )";

	document.getElementById("price").innerHTML = `
                <strong>£ 129</strong>
            `;
	document.getElementById("defaultPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>129
            `;
	document.getElementById("totalPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>129
            `;
}

/*===== CHANGE PRODUCT QUANTITY OPTIONS =====*/
// Button Properties
function addQuantity() {
	const defaultQuantity = document.getElementById("quantity");

	var addQuantity = 1;
	var newQuantity = addQuantity + defaultQuantity;

	defaultQuantity.innerHTML = newQuantity.toString();
}

function minusQuantity() {
	const defaultQuantity = document.getElementById("quantity");
}

/*=====================================================================*/
/*========================= realme Watch S Pro ========================*/
/*=====================================================================*/
/*===== WATCH S PRO PRODUCT IMAGE CHANGE =====*/
function changeWatchSProBlackImage1() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1615876911131.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn1");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn2");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeWatchSProBlackImage2() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1615876917898.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn2");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeWatchSProBlackImage3() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1615876924153.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn3");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeWatchSProBlackImage4() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1615876929447.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn4");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn3");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

/*=====================================================================*/
/*==================== realme Smart Camera 360° =======================*/
/*=====================================================================*/
/*===== SMART CAMERA 360° PRODUCT IMAGE CHANGE =====*/
function changeSmartCameraImage1() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1607070370773.jpg");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn1");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn2");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeSmartCameraImage2() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1607070370770.jpg");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn2");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeSmartCameraImage3() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1607070370670.jpg");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn3");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeSmartCameraImage4() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1607070370777.jpg");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn4");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn3");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

/*=====================================================================*/
/*========================= realme Watch 2 Pro ========================*/
/*=====================================================================*/
/*===== (BLACK VERSION) =====*/
function changeProWatch2BlackImage1() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1623741774266.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn1");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn2");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeProWatch2BlackImage2() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1623741781871.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn2");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeProWatch2BlackImage3() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1623741789492.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn3");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeProWatch2BlackImage4() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1623741797625.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn4");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn3");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

/*===== (WHITE VERSION) =====*/
function changeWatch2BlackImage1() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1623736010026.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn1");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn2");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeWatch2BlackImage2() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1623736041812.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn2");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeWatch2BlackImage3() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1623736048630.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn3");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeWatch2BlackImage4() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1623736055449.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn4");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn3");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

/*=====================================================================*/
/*========================= realme BUDS AIR 2 =========================*/
/*=====================================================================*/
/*===== (BLACK VERSION) =====*/
// Content & Button Properties
function closerBlackImages() {
	// Main product images
	document.getElementById("mainImage").src =
		"..src/img/productImages/1615884298148.png";

	// More products images
	document.getElementById("moreImage1").src =
		"..src/img/productImages/1615884298148.png";

	document.getElementById("moreImage2").src =
		"..src/img/productImages/1615883712278.png";

	document.getElementById("moreImage3").src =
		"..src/img/productImages/1615883712422.png";

	document.getElementById("moreImage4").src =
		"..src/img/productImages/1615883712435.png";

	// Product Title change
	document.getElementById("productTitle").innerHTML =
		"realme Buds Air 2 ( Closer Black )";

	// Checkout product title section
	document.getElementById("checkoutProductTitle").innerHTML = "Closer Black";

	// Button styles changes
	document.getElementById("closerBlack").style.border = "#111 0.1rem solid";
	document.getElementById("closerWhite").style.border = "#d3d3d3 0.1rem solid";

	/*===== BUTTON LISTENERS =====*/
	// Images Buttons
	const btn1 = document.getElementById("btn1");
	const btn2 = document.getElementById("btn2");
	const btn3 = document.getElementById("btn3");
	const btn4 = document.getElementById("btn4");

	/*===== MORE IMAGE BUTTON SECTION LISTENERS =====*/
	btn1.addEventListener("click", () => {
		changeCloserBlackImage1();
	});

	btn2.addEventListener("click", () => {
		changeCloserBlackImage2();
	});

	btn3.addEventListener("click", () => {
		changeCloserBlackImage3();
	});

	btn4.addEventListener("click", () => {
		changeCloserBlackImage4();
	});
}

// Black Images
function changeCloserBlackImage1() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1615884298148.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn1");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn2");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeCloserBlackImage2() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1615883712278.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn2");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeCloserBlackImage3() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1615883712422.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn3");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeCloserBlackImage4() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1615883712435.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn4");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn3");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

/*===== (WHITE VERSION) =====*/
// Content & Button Properties
function closerWhiteImages() {
	// Main product images
	document.getElementById("mainImage").src =
		"..src/img/productImages/1615892685998.png";

	// More products images
	document.getElementById("moreImage1").src =
		"..src/img/productImages/1615892685998.png";

	document.getElementById("moreImage2").src =
		"..src/img/productImages/1615892685990.png";

	document.getElementById("moreImage3").src =
		"..src/img/productImages/1615892685606.png";

	document.getElementById("moreImage4").src =
		"..src/img/productImages/1615892685743.png";

	// Product Title change
	document.getElementById("productTitle").innerHTML =
		"realme Buds Air 2 ( Closer White )";

	// Checkout product title section
	document.getElementById("checkoutProductTitle").innerHTML = "Closer White";

	// Button styles changes
	document.getElementById("closerWhite").style.border = "#111 0.1rem solid";
	document.getElementById("closerBlack").style.border = "#d3d3d3 0.1rem solid";

	/*===== BUTTON LISTENERS =====*/
	// Images Buttons
	const btn1 = document.getElementById("btn1");
	const btn2 = document.getElementById("btn2");
	const btn3 = document.getElementById("btn3");
	const btn4 = document.getElementById("btn4");

	/*===== MORE IMAGE BUTTON SECTION LISTENERS =====*/
	btn1.addEventListener("click", () => {
		changeCloserWhiteImage1();
	});

	btn2.addEventListener("click", () => {
		changeCloserWhiteImage2();
	});

	btn3.addEventListener("click", () => {
		changeCloserWhiteImage3();
	});

	btn4.addEventListener("click", () => {
		changeCloserWhiteImage4();
	});
}
/*===== (SOUL WHITE VERSION) =====*/
function changeCloserWhiteImage1() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1615892685998.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn1");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn2");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeCloserWhiteImage2() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1615892685990.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn2");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeCloserWhiteImage3() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1615892685606.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn3");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeCloserWhiteImage4() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1615892685743.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn4");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn3");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

/*=====================================================================*/
/*========================= realme BUDS AIR PRO =========================*/
/*=====================================================================*/
/*===== (SOUL WHITE VERSION) =====*/
function changeBudsAir2WhiteImage1() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1605438557032.jpg");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn1");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn2");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeBudsAir2WhiteImage2() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1605438556895.jpg");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn2");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeBudsAir2WhiteImage3() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1605438556894.jpg");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn3");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeBudsAir2WhiteImage4() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1605438556927.jpg");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn4");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn3");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

/*=====================================================================*/
/*==================== realme WIRELESS BUDS PRO =======================*/
/*=====================================================================*/
/*===== (DISCO GREEN VERSION) =====*/
// Content & Button Properties
function discoGreenImages() {
	// Main product images
	document.getElementById("mainImage").src =
		"..src/img/productImages/1607080800022.jpg";

	// More products images
	document.getElementById("moreImage1").src =
		"..src/img/productImages/1607080800022.jpg";

	document.getElementById("moreImage2").src =
		"..src/img/productImages/1607080799876.jpg";

	document.getElementById("moreImage3").src =
		"..src/img/productImages/1607080799879.jpg";

	document.getElementById("moreImage4").src =
		"..src/img/productImages/1607080799911.jpg";

	// Product Title change
	document.getElementById("productTitle").innerHTML =
		"realme Buds Wireless Pro ( Disco Green )";

	// Checkout product title section
	document.getElementById("checkoutProductTitle").innerHTML = "Disco Green";

	// Button styles changes
	document.getElementById("discoGreen").style.border = "#111 0.1rem solid";
	document.getElementById("partyYellow").style.border = "#d3d3d3 0.1rem solid";

	/*===== BUTTON LISTENERS =====*/
	// Images Buttons
	const btn1 = document.getElementById("btn1");
	const btn2 = document.getElementById("btn2");
	const btn3 = document.getElementById("btn3");
	const btn4 = document.getElementById("btn4");

	/*===== MORE IMAGE BUTTON SECTION LISTENERS =====*/
	btn1.addEventListener("click", () => {
		changeBudsWirelessProDiscoGreenImage1();
	});

	btn2.addEventListener("click", () => {
		changeBudsWirelessProDiscoGreenImage2();
	});

	btn3.addEventListener("click", () => {
		changeBudsWirelessProDiscoGreenImage3();
	});

	btn4.addEventListener("click", () => {
		changeBudsWirelessProDiscoGreenImage4();
	});
}

// Disco Green Images
function changeBudsWirelessProDiscoGreenImage1() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1607080800022.jpg");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn1");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn2");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeBudsWirelessProDiscoGreenImage2() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1607080799876.jpg");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn2");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeBudsWirelessProDiscoGreenImage3() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1607080799879.jpg");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn3");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeBudsWirelessProDiscoGreenImage4() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1607080799911.jpg");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn4");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn3");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

/*===== (PARTY YELLOW VERSION) =====*/
// Content & Button Properties
function partyYellowImages() {
	// Main product images
	document.getElementById("mainImage").src =
		"..src/img/productImages/1607087004937.jpg";

	// More products images
	document.getElementById("moreImage1").src =
		"..src/img/productImages/1607087004937.jpg";

	document.getElementById("moreImage2").src =
		"..src/img/productImages/1607087004829.jpg";

	document.getElementById("moreImage3").src =
		"..src/img/productImages/1607087004830.jpg";

	document.getElementById("moreImage4").src =
		"..src/img/productImages/1607087004831.jpg";

	// Product Title change
	document.getElementById("productTitle").innerHTML =
		"realme Buds Wireless Pro ( Party Yellow )";

	// Checkout product title section
	document.getElementById("checkoutProductTitle").innerHTML = "Party Yellow";

	// Button styles changes
	document.getElementById("partyYellow").style.border = "#111 0.1rem solid";
	document.getElementById("discoGreen").style.border = "#d3d3d3 0.1rem solid";

	/*===== BUTTON LISTENERS =====*/
	// Images Buttons
	const btn1 = document.getElementById("btn1");
	const btn2 = document.getElementById("btn2");
	const btn3 = document.getElementById("btn3");
	const btn4 = document.getElementById("btn4");

	/*===== MORE IMAGE BUTTON SECTION LISTENERS =====*/
	btn1.addEventListener("click", () => {
		changeBudsWirelessProPartyYellowImage1();
	});

	btn2.addEventListener("click", () => {
		changeBudsWirelessProPartyYellowImage2();
	});

	btn3.addEventListener("click", () => {
		changeBudsWirelessProPartyYellowImage3();
	});

	btn4.addEventListener("click", () => {
		changeBudsWirelessProPartyYellowImage4();
	});
}

// Party Yellow Images
function changeBudsWirelessProPartyYellowImage1() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1607087004937.jpg");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn1");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn2");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeBudsWirelessProPartyYellowImage2() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1607087004829.jpg");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn2");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeBudsWirelessProPartyYellowImage3() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1607087004830.jpg");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn3");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeBudsWirelessProPartyYellowImage4() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1607087004831.jpg");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn4");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn3");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

/*=====================================================================*/
/*========================== realme BUDS Q2 ===========================*/
/*=====================================================================*/
/*===== (BLACK VERSION) =====*/
// Content & Button Properties
function Q2BlackImages() {
	// Main product images
	document.getElementById("mainImage").src =
		"..src/img/productImages/1620732700547.png";

	// More products images
	document.getElementById("moreImage1").src =
		"..src/img/productImages/1620732700547.png";

	document.getElementById("moreImage2").src =
		"..src/img/productImages/1620732709556.png";

	document.getElementById("moreImage3").src =
		"..src/img/productImages/1620732718791.png";

	document.getElementById("moreImage4").src =
		"..src/img/productImages/1620732728527.png";

	// Product Title change
	document.getElementById("productTitle").innerHTML =
		"realme Buds Q2 ( Black )";

	// Checkout product title section
	document.getElementById("checkoutProductTitle").innerHTML = "Black";

	// Button styles changes
	document.getElementById("Q2Black").style.border = "#111 0.1rem solid";
	document.getElementById("Q2blue").style.border = "#d3d3d3 0.14rem dotted";

	/*===== BUTTON LISTENERS =====*/
	// Images Buttons
	const btn1 = document.getElementById("btn1");
	const btn2 = document.getElementById("btn2");
	const btn3 = document.getElementById("btn3");
	const btn4 = document.getElementById("btn4");

	/*===== MORE IMAGE BUTTON SECTION LISTENERS =====*/
	btn1.addEventListener("click", () => {
		changeBudsQ2BlackImage1();
	});

	btn2.addEventListener("click", () => {
		changeBudsQ2BlackImage2();
	});

	btn3.addEventListener("click", () => {
		changeBudsQ2BlackImage3();
	});

	btn4.addEventListener("click", () => {
		changeBudsQ2BlackImage4();
	});
}

// Black Images
function changeBudsQ2BlackImage1() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1620732700547.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn1");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn2");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeBudsQ2BlackImage2() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1620732709556.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn2");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeBudsQ2BlackImage3() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1620732718791.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn3");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeBudsQ2BlackImage4() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1620732728527.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn4");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn3");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

/*===== (BLUE VERSION) =====*/
// Content & Button Properties
function Q2BlueImages() {
	// Main product images
	document.getElementById("mainImage").src =
		"..src/img/productImages/1620732298988.png";

	// More products images
	document.getElementById("moreImage1").src =
		"..src/img/productImages/1620732298988.png";

	document.getElementById("moreImage2").src =
		"..src/img/productImages/1621465492685.png";

	document.getElementById("moreImage3").src =
		"..src/img/productImages/1621465503600.png";

	document.getElementById("moreImage4").src =
		"..src/img/productImages/1621465512024.png";

	// Product Title change
	document.getElementById("productTitle").innerHTML = "realme Buds Q2 ( Blue )";

	// Checkout product title section
	document.getElementById("checkoutProductTitle").innerHTML = "Blue";

	// Button styles changes
	document.getElementById("Q2blue").style.border = "#111 0.14rem dotted";
	document.getElementById("Q2blue").style.opacity = "1";
	document.getElementById("Q2Black").style.border = "#d3d3d3 0.1rem solid";

	/*===== BUTTON LISTENERS =====*/
	// Images Buttons
	const btn1 = document.getElementById("btn1");
	const btn2 = document.getElementById("btn2");
	const btn3 = document.getElementById("btn3");
	const btn4 = document.getElementById("btn4");

	/*===== MORE IMAGE BUTTON SECTION LISTENERS =====*/
	btn1.addEventListener("click", () => {
		changeBudsQ2BlueImage1();
	});

	btn2.addEventListener("click", () => {
		changeBudsQ2BlueImage2();
	});

	btn3.addEventListener("click", () => {
		changeBudsQ2BlueImage3();
	});

	btn4.addEventListener("click", () => {
		changeBudsQ2BlueImage4();
	});
}

// Blue Images
function changeBudsQ2BlueImage1() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1620732298988.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn1");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn2");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeBudsQ2BlueImage2() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1621465492685.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn2");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeBudsQ2BlueImage3() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1621465503600.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn3");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeBudsQ2BlueImage4() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1621465512024.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn4");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn3");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

/*===== CHANGE PRODUCT CONFIGURATION OPTIONS =====*/
function configOption1() {
	document.getElementById("fourGB").style.border = "#111 0.1rem solid";
	document.getElementById("sixGB").style.border = "#d3d3d3 0.1rem solid";
}

function configOption2() {
	document.getElementById("fourGB").style.border = "#d3d3d3 0.1rem solid";
	document.getElementById("sixGB").style.border = "#111 0.1rem solid";
}

function configOption3() {
	document.getElementById("fourGB").style.border = "#d3d3d3 0.1rem solid";
	document.getElementById("sixGB").style.border = "#111 0.1rem solid";
}

/*===== DISPLAY ADD ON PRODUCT OPTIONS =====*/
function addOnOption() {
	const submitBtn = document.getElementById("addOn");
	const checkboxBtn = document.getElementById("checkbox");

	// Styling Change
	submitBtn.style.display = "Block";
	submitBtn.style.display = "flex";

	// Adds current price and add on price
	var totalPrice = 134;
	var addOnPrice = 8;
	var newTotalPrice = totalPrice + addOnPrice;

	// Displays the new Price
	document.getElementById("totalPrice").innerHTML =
		`<i class="bi bi-currency-pound"></i>` + newTotalPrice;

	// Load in default Price
	checkboxBtn.addEventListener("click", () => {
		submitBtn.style.display = "none";
		document.getElementById("totalPrice").innerHTML =
			`<i class="bi bi-currency-pound"></i>` + totalPrice;
	});
}

/*=====================================================================*/
/*=========================== realme 8 Pro =============================*/
/*=====================================================================*/
/*===== (INFINITE BLACK VERSION) =====*/
// Content & Button Properties
function infiniteBlackImages() {
	// Main product images
	document.getElementById("mainImage").src =
		"..src/img/productImages/1616130586852.png";

	// More products images
	document.getElementById("moreImage1").src =
		"..src/img/productImages/1616130586852.png";

	document.getElementById("moreImage2").src =
		"..src/img/productImages/1616130586647.png";

	document.getElementById("moreImage3").src =
		"..src/img/productImages/1616130586063.png";

	document.getElementById("moreImage4").src =
		"..src/img/productImages/1616130586939.png";

	// Product Title change
	document.getElementById("productTitle").innerHTML =
		"realme 8 Pro ( Infinite Black 8GB+128GB UK PLUG )";

	// Product description change
	const dispatchTime = document.getElementById("dispatchTime");
	const dispatchTimeSpan = document.getElementById("dispatchTimeSpan");
	dispatchTime.style.color = "#686868";
	dispatchTimeSpan.style.color = "#111";
	dispatchTime.innerHTML = `
                <span id="dispatchTimeSpan">Estimated dispatch within:</span>1-3 working days
            `;

	// Checkout product title section
	document.getElementById("checkoutProductTitle").innerHTML =
		"Infinite Black 4GB+64GB...";

	// Checkout button section
	document.getElementById("addToCart").style.display = "none";
	document.getElementById("buyNow").innerHTML = "Notify Me";

	// Button styles changes
	document.getElementById("infiniteBlack").style.border = "#111 0.1rem solid";
	document.getElementById("infiniteBlue").style.border = "#d3d3d3 0.1rem solid";
	document.getElementById("punkBlack").style.border = "#d3d3d3 0.1rem solid";

	/*===== BUTTON LISTENERS =====*/
	// Configuration Buttons
	const GBtn = document.getElementById("GB");
	GBtn.style.border = "#111 0.14rem dotted";

	// Images Buttons
	const btn1 = document.getElementById("btn1");
	const btn2 = document.getElementById("btn2");
	const btn3 = document.getElementById("btn3");
	const btn4 = document.getElementById("btn4");

	/*===== CONFIGURATION BUTTON SECTION LISTENERS =====*/
	// Change the phone GB size in the Add To Cart section description
	GBtn.addEventListener("click", () => {
		// Checkout product title section
		document.getElementById("checkoutProductTitle").innerHTML =
			"Infinite Black 8GB+128GB...";
	});

	/*===== MORE IMAGE BUTTON SECTION LISTENERS =====*/
	btn1.addEventListener("click", () => {
		changeInfiniteBlackImage1();
	});

	btn2.addEventListener("click", () => {
		changeInfiniteBlackImage2();
	});

	btn3.addEventListener("click", () => {
		changeInfiniteBlackImage3();
	});

	btn4.addEventListener("click", () => {
		changeInfiniteBlackImage4();
	});
}

// Infinite Black Images
function changeInfiniteBlackImage1() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1616130586852.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn1");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn2");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeInfiniteBlackImage2() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1616130586647.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn2");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeInfiniteBlackImage3() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1616130586063.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn3");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeInfiniteBlackImage4() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1616130586939.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn4");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn3");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

/*===== (INFINITE BLUE VERSION) =====*/
// Content & Button Properties
function infiniteBlueImages() {
	// Main product images
	document.getElementById("mainImage").src =
		"..src/img/productImages/1616130629963.png";

	// More products images
	document.getElementById("moreImage1").src =
		"..src/img/productImages/1616130629963.png";

	document.getElementById("moreImage2").src =
		"..src/img/productImages/1616130629450.png";

	document.getElementById("moreImage3").src =
		"..src/img/productImages/1616130628986.png";

	document.getElementById("moreImage4").src =
		"..src/img/productImages/1616130629823.png";

	// Product Title change
	document.getElementById("productTitle").innerHTML =
		"realme 8 Pro ( Infinite Blue 8GB+128GB UK PLUG )";

	// Product description change
	const dispatchTime = document.getElementById("dispatchTime");
	const dispatchTimeSpan = document.getElementById("dispatchTimeSpan");
	dispatchTime.style.color = "#ff002f";
	dispatchTimeSpan.style.color = "#111";
	dispatchTime.innerHTML = `
                <span id="dispatchTimeSpan">Estimated dispatch within:</span>7-10 working days
            `;

	// Checkout product title section
	document.getElementById("checkoutProductTitle").innerHTML =
		"Infinite Blue 8GB+128GB...";

	// Checkout button section
	document.getElementById("addToCart").style.display = "none";
	document.getElementById("buyNow").innerHTML = "Notify Me";

	// Button styles changes
	document.getElementById("infiniteBlack").style.border =
		"#d3d3d3 0.1rem solid";
	document.getElementById("infiniteBlue").style.border = "#111 0.1rem solid";
	document.getElementById("punkBlack").style.border = "#d3d3d3 0.1rem solid";

	/*===== BUTTON LISTENERS =====*/
	// Configuration Buttons
	const GBtn = document.getElementById("GB");
	GBtn.style.border = "#111 0.14rem dotted";

	// Images Buttons
	const btn1 = document.getElementById("btn1");
	const btn2 = document.getElementById("btn2");
	const btn3 = document.getElementById("btn3");
	const btn4 = document.getElementById("btn4");

	/*===== CONFIGURATION BUTTON SECTION LISTENERS =====*/
	// Change the phone GB size in the Add To Cart section description
	GBtn.addEventListener("click", () => {
		// Checkout product title section
		document.getElementById("checkoutProductTitle").innerHTML =
			"Infinite Blue 8GB+128GB...";
	});

	/*===== MORE IMAGE BUTTON SECTION LISTENERS =====*/
	btn1.addEventListener("click", () => {
		changeInfiniteBlueImage1();
	});

	btn2.addEventListener("click", () => {
		changeInfiniteBlueImage2();
	});

	btn3.addEventListener("click", () => {
		changeInfiniteBlueImage3();
	});

	btn4.addEventListener("click", () => {
		changeInfiniteBlueImage4();
	});
}

// Infinite Blue Images
function changeInfiniteBlueImage1() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1616130629963.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn1");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn2");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeInfiniteBlueImage2() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1616130629450.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn2");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeInfiniteBlueImage3() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1616130628986.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn3");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeInfiniteBlueImage4() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1616130629823.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn4");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn3");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

/*===== (PUNK BLACK VERSION) =====*/
// Content & Button Properties
function punkBlackImages() {
	// Main product images
	document.getElementById("mainImage").src =
		"..src/img/productImages/1616130377618.png";

	// More products images
	document.getElementById("moreImage1").src =
		"..src/img/productImages/1616130377618.png";

	document.getElementById("moreImage2").src =
		"..src/img/productImages/1616130377721.png";

	document.getElementById("moreImage3").src =
		"..src/img/productImages/1616130586063.png";

	document.getElementById("moreImage4").src =
		"..src/img/productImages/1619767353251.png";

	// Product Title change
	document.getElementById("productTitle").innerHTML =
		"realme 8 Pro ( Punk Black 8GB+128GB UK PLUG )";

	// Product description change
	const dispatchTime = document.getElementById("dispatchTime");
	const dispatchTimeSpan = document.getElementById("dispatchTimeSpan");
	dispatchTime.style.color = "#ff002f";
	dispatchTimeSpan.style.color = "#111";
	dispatchTime.innerHTML = `
                <span id="dispatchTimeSpan">Estimated dispatch within:</span>7-10 working days
            `;

	// Checkout product title section
	document.getElementById("checkoutProductTitle").innerHTML =
		"Punk Black 8GB+128GB...";

	// Checkout button section
	document.getElementById("addToCart").style.display = "block";
	document.getElementById("buyNow").innerHTML = "Buy Now";

	// Button styles changes
	document.getElementById("infiniteBlack").style.border =
		"#d3d3d3 0.1rem solid";
	document.getElementById("infiniteBlue").style.border = "#d3d3d3 0.1rem solid";
	document.getElementById("punkBlack").style.border = "#111 0.1rem solid";

	/*===== BUTTON LISTENERS =====*/
	// Configuration Buttons
	const GBtn = document.getElementById("GB");
	GBtn.style.border = "#111 0.1rem solid";

	// Images Buttons
	const btn1 = document.getElementById("btn1");
	const btn2 = document.getElementById("btn2");
	const btn3 = document.getElementById("btn3");
	const btn4 = document.getElementById("btn4");

	/*===== CONFIGURATION BUTTON SECTION LISTENERS =====*/
	// Change the phone GB size in the Add To Cart section description
	GBtn.addEventListener("click", () => {
		// Checkout product title section
		document.getElementById("checkoutProductTitle").innerHTML =
			"Punk Black 8GB+128GB...";
	});

	/*===== MORE IMAGE BUTTON SECTION LISTENERS =====*/
	btn1.addEventListener("click", () => {
		changePunkBlackImage1();
	});

	btn2.addEventListener("click", () => {
		changePunkBlackImage2();
	});

	btn3.addEventListener("click", () => {
		changePunkBlackImage3();
	});

	btn4.addEventListener("click", () => {
		changePunkBlackImage4();
	});
}

// Punk Black Images
function changePunkBlackImage1() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1616130377618.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn1");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn2");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changePunkBlackImage2() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1616130377721.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn2");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changePunkBlackImage3() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1616130586063.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn3");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changePunkBlackImage4() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1619767353251.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn4");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn3");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

/*=====================================================================*/
/*============================= realme 8 ==============================*/
/*=====================================================================*/
/*===== (CYBER SILVER VERSION) =====*/
// Content & Button Properties
function cyberSliverImages() {
	// Main product images
	document.getElementById("mainImage").src =
		"..src/img/productImages/1619511740999.png";

	// More products images
	document.getElementById("moreImage1").src =
		"..src/img/productImages/1619511740999.png";

	document.getElementById("moreImage2").src =
		"..src/img/productImages/1619511740905.png";

	document.getElementById("moreImage3").src =
		"..src/img/productImages/1619511739936.png";

	document.getElementById("moreImage4").src =
		"..src/img/productImages/1619511754390.png";

	// Product Title change
	document.getElementById("productTitle").innerHTML =
		"realme 8 ( Cyber Silver 4GB+64GB UK PLUG )";

	// Checkout product title section
	document.getElementById("checkoutProductTitle").innerHTML =
		"Cyber Silver 4GB+64GB...";

	// Add On Product
	document.getElementById("addOnProduct").style.display = "none";

	// Checkout button section
	document.getElementById("addToCart").style.display = "none";
	document.getElementById("buyNow").innerHTML = "Notify Me";

	// Button styles changes
	document.getElementById("cyberSliver").style.border = "#111 0.1rem solid";
	document.getElementById("punkBlackTwo").style.border = "#d3d3d3 0.1rem solid";
	document.getElementById("cyberBlack").style.border = "#d3d3d3 0.1rem solid";

	/*===== BUTTON LISTENERS =====*/
	// Configuration Buttons
	const GBtn = document.getElementById("GB");
	const GB2Btn = document.getElementById("GB2");
	GBtn.style.border = "#111 0.14rem dotted";
	GB2Btn.style.opacity = "0.5";
	GB2Btn.style.border = "#d3d3d3 0.14rem dotted";

	// Images Buttons
	const btn1 = document.getElementById("btn1");
	const btn2 = document.getElementById("btn2");
	const btn3 = document.getElementById("btn3");
	const btn4 = document.getElementById("btn4");

	/*===== CONFIGURATION BUTTON SECTION LISTENERS =====*/
	// Change the phone GB size in the Add To Cart section description
	GBtn.addEventListener("click", () => {
		// Product Title change
		document.getElementById("productTitle").innerHTML =
			"realme 8 ( Cyber Silver 4GB+64GB UK PLUG )";

		// Checkout product title section
		document.getElementById("checkoutProductTitle").innerHTML =
			"Cyber Silver 4GB+64GB...";

		document.getElementById("price").innerHTML = `
                <strong>£ 169 <span>£199</span></strong>
            `;

		document.getElementById("defaultPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>169
            `;
		document.getElementById("totalPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>169
            `;

		GB2Btn.style.opacity = "0.5";
		GBtn.style.border = "#111 0.14rem dotted";
		GB2Btn.style.border = "#d3d3d3 0.14rem dotted";
	});

	GB2Btn.addEventListener("click", () => {
		// Product Title change
		document.getElementById("productTitle").innerHTML =
			"realme 8 ( Cyber Silver 6GB+128GB UK PLUG )";

		// Checkout product title section
		document.getElementById("checkoutProductTitle").innerHTML =
			"Cyber Silver 6GB+128GB...";

		document.getElementById("price").innerHTML = `
                <strong>£ 189 <span>£219</span></strong>
            `;

		document.getElementById("defaultPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>189
            `;

		document.getElementById("totalPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>189
            `;

		GB2Btn.style.opacity = "1";
		GBtn.style.border = "#d3d3d3 0.14rem dotted";
		GB2Btn.style.border = "#111 0.14rem dotted";
	});

	/*===== MORE IMAGE BUTTON SECTION LISTENERS =====*/
	btn1.addEventListener("click", () => {
		changeCyberSliverImage1();
	});

	btn2.addEventListener("click", () => {
		changeCyberSliverImage2();
	});

	btn3.addEventListener("click", () => {
		changeCyberSliverImage3();
	});

	btn4.addEventListener("click", () => {
		changeCyberSliverImage4();
	});
}

// Cyber Silver Images
function changeCyberSliverImage1() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1619511740999.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn1");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn2");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeCyberSliverImage2() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1619511740905.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn2");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeCyberSliverImage3() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1619511739936.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn3");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeCyberSliverImage4() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1619511754390.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn4");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn3");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

/*===== (PUNK BLACK VERSION) =====*/
// Content & Button Properties
function punkBlackTwoImages() {
	// Main product images
	document.getElementById("mainImage").src =
		"..src/img/productImages/1619767353492.png";

	// More products images
	document.getElementById("moreImage1").src =
		"..src/img/productImages/1619767353492.png";

	document.getElementById("moreImage2").src =
		"..src/img/productImages/1619767353311.png";

	document.getElementById("moreImage3").src =
		"..src/img/productImages/1619767352493.png";

	document.getElementById("moreImage4").src =
		"..src/img/productImages/1619767353251.png";

	// Product Title change
	document.getElementById("productTitle").innerHTML =
		"realme 8 ( Punk Black 4GB+64GB UK PLUG )";

	// Checkout product title section
	document.getElementById("checkoutProductTitle").innerHTML =
		"Punk Black 4GB+64GB...";

	// Add On Product
	document.getElementById("addOnProduct").style.display = "Block";

	// Checkout button section
	document.getElementById("addToCart").style.display = "Block";
	document.getElementById("buyNow").innerHTML = "Buy Now";

	// Button styles changes
	document.getElementById("cyberSliver").style.border = "#d3d3d3 0.1rem solid";
	document.getElementById("punkBlackTwo").style.border = "#111 0.1rem solid";
	document.getElementById("cyberBlack").style.border = "#d3d3d3 0.1rem solid";

	/*===== BUTTON LISTENERS =====*/
	// Configuration Buttons
	const GBtn = document.getElementById("GB");
	const GB2Btn = document.getElementById("GB2");
	GBtn.style.border = "#111 0.1rem solid";
	GB2Btn.style.opacity = "1";
	GB2Btn.style.border = "#d3d3d3 0.1rem solid";

	// Images Buttons
	const btn1 = document.getElementById("btn1");
	const btn2 = document.getElementById("btn2");
	const btn3 = document.getElementById("btn3");
	const btn4 = document.getElementById("btn4");

	/*===== CONFIGURATION BUTTON SECTION LISTENERS =====*/
	// Change the phone GB size in the Add To Cart section description
	GBtn.addEventListener("click", () => {
		// Product Title change
		document.getElementById("productTitle").innerHTML =
			"realme 8 ( Punk Black 4GB+64GB UK PLUG )";

		// Checkout product title section
		document.getElementById("checkoutProductTitle").innerHTML =
			"Punk Black 4GB+64GB...";

		document.getElementById("price").innerHTML = `
                <strong>£ 169 <span>£199</span></strong>
            `;

		document.getElementById("defaultPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>169
            `;
		document.getElementById("totalPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>169
            `;

		GBtn.style.border = "#111 0.1rem solid";
		GB2Btn.style.border = "#d3d3d3 0.1rem solid";
	});

	GB2Btn.addEventListener("click", () => {
		// Product Title change
		document.getElementById("productTitle").innerHTML =
			"realme 8 ( Punk Black 6GB+128GB UK PLUG )";

		// Checkout product title section
		document.getElementById("checkoutProductTitle").innerHTML =
			"Punk Black 6GB+128GB...";

		document.getElementById("price").innerHTML = `
                <strong>£ 189 <span>£219</span></strong>
            `;

		document.getElementById("defaultPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>189
            `;

		document.getElementById("totalPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>189
            `;

		GBtn.style.border = "#d3d3d3 0.1rem solid";
		GB2Btn.style.border = "#111 0.1rem solid";
	});

	/*===== MORE IMAGE BUTTON SECTION LISTENERS =====*/
	btn1.addEventListener("click", () => {
		changePunkBlackTwoImage1();
	});

	btn2.addEventListener("click", () => {
		changePunkBlackTwoImage2();
	});

	btn3.addEventListener("click", () => {
		changePunkBlackTwoImage3();
	});

	btn4.addEventListener("click", () => {
		changePunkBlackTwoImage4();
	});
}

// Punk Black Images
function changePunkBlackTwoImage1() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1619767353492.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn1");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn2");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changePunkBlackTwoImage2() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1619767353311.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn2");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changePunkBlackTwoImage3() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1619767352493.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn3");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changePunkBlackTwoImage4() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1619767353251.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn4");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn3");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

/*===== (CYBER BLACK VERSION) =====*/
// Content & Button Properties
function cyberBlackImages() {
	// Main product images
	document.getElementById("mainImage").src =
		"..src/img/productImages/1619608253062.png";

	// More products images
	document.getElementById("moreImage1").src =
		"..src/img/productImages/1619608253062.png";

	document.getElementById("moreImage2").src =
		"..src/img/productImages/1619608252874.png";

	document.getElementById("moreImage3").src =
		"..src/img/productImages/1619608252130.png";

	document.getElementById("moreImage4").src =
		"..src/img/productImages/1619608252614.png";

	// Product Title change
	document.getElementById("productTitle").innerHTML =
		"realme 8 ( Cyber Black 4GB+64GB UK PLUG )";

	// Checkout product title section
	document.getElementById("checkoutProductTitle").innerHTML =
		"Cyber Black 4GB+64GB...";

	// Add On Product
	document.getElementById("addOnProduct").style.display = "Block";

	// Checkout button section
	document.getElementById("addToCart").style.display = "Block";
	document.getElementById("buyNow").innerHTML = "Buy Now";

	// Button styles changes
	document.getElementById("cyberSliver").style.border = "#d3d3d3 0.1rem solid";
	document.getElementById("punkBlackTwo").style.border = "#d3d3d3 0.1rem solid";
	document.getElementById("cyberBlack").style.border = "#111 0.1rem solid";

	/*===== BUTTON LISTENERS =====*/
	// Configuration Buttons
	const GBtn = document.getElementById("GB");
	const GB2Btn = document.getElementById("GB2");
	GBtn.style.border = "#111 0.1rem solid";
	GB2Btn.style.opacity = "1";
	GB2Btn.style.border = "#d3d3d3 0.1rem solid";

	// Images Buttons
	const btn1 = document.getElementById("btn1");
	const btn2 = document.getElementById("btn2");
	const btn3 = document.getElementById("btn3");
	const btn4 = document.getElementById("btn4");

	/*===== CONFIGURATION BUTTON SECTION LISTENERS =====*/
	// Change the phone GB size in the Add To Cart section description
	GBtn.addEventListener("click", () => {
		// Product Title change
		document.getElementById("productTitle").innerHTML =
			"realme 8 ( Cyber Black 4GB+64GB UK PLUG )";

		// Checkout product title section
		document.getElementById("checkoutProductTitle").innerHTML =
			"Punk Black 4GB+64GB...";

		document.getElementById("price").innerHTML = `
                <strong>£ 169 <span>£199</span></strong>
            `;

		document.getElementById("defaultPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>169
            `;
		document.getElementById("totalPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>169
            `;

		GBtn.style.border = "#111 0.1rem solid";
		GB2Btn.style.border = "#d3d3d3 0.1rem solid";
	});

	GB2Btn.addEventListener("click", () => {
		// Product Title change
		document.getElementById("productTitle").innerHTML =
			"realme 8 ( Cyber Black 6GB+128GB UK PLUG )";

		// Checkout product title section
		document.getElementById("checkoutProductTitle").innerHTML =
			"Punk Black 6GB+128GB...";

		document.getElementById("price").innerHTML = `
                <strong>£ 189 <span>£219</span></strong>
            `;

		document.getElementById("defaultPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>189
            `;

		document.getElementById("totalPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>189
            `;

		GBtn.style.border = "#d3d3d3 0.1rem solid";
		GB2Btn.style.border = "#111 0.1rem solid";
	});

	/*===== MORE IMAGE BUTTON SECTION LISTENERS =====*/
	btn1.addEventListener("click", () => {
		changeCyberBlackImage1();
	});

	btn2.addEventListener("click", () => {
		changeCyberBlackImage2();
	});

	btn3.addEventListener("click", () => {
		changeCyberBlackImage3();
	});

	btn4.addEventListener("click", () => {
		changeCyberBlackImage4();
	});
}

// Cyber Black Images
function changeCyberBlackImage1() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1619608253062.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn1");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn2");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeCyberBlackImage2() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1619608252874.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn2");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeCyberBlackImage3() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1619608252130.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn3");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeCyberBlackImage4() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1619608252614.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn4");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn3");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

/*===== CHANGE PRODUCT CONFIGURATION OPTIONS =====*/
function realme8GB() {
	document.getElementById("GB").style.border = "#111 0.1rem solid";
	document.getElementById("GB2").style.border = "#d3d3d3 0.1rem solid";

	// Product Title change
	document.getElementById("productTitle").innerHTML =
		"realme 8 ( Punk Black 4GB+64GB UK PLUG )";

	// Checkout product title section
	document.getElementById("checkoutProductTitle").innerHTML =
		"Punk Black 4GB+64GB...";

	document.getElementById("price").innerHTML = `
                <strong>£ 169 <span>£199</span></strong>
            `;

	document.getElementById("defaultPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>169
            `;
	document.getElementById("totalPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>169
            `;
}

function realme8GB2() {
	document.getElementById("GB").style.border = "#d3d3d3 0.1rem solid";
	document.getElementById("GB2").style.border = "#111 0.1rem solid";

	// Product Title change
	document.getElementById("productTitle").innerHTML =
		"realme 8 ( Punk Black 6GB+128GB UK PLUG )";

	// Checkout product title section
	document.getElementById("checkoutProductTitle").innerHTML =
		"Punk Black 6GB+128GB...";

	document.getElementById("price").innerHTML = `
                <strong>£ 189 <span>£219</span></strong>
            `;

	document.getElementById("defaultPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>189
            `;

	document.getElementById("totalPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>189
            `;
}

/*=====================================================================*/
/*====================== realme GT Master Edition =====================*/
/*=====================================================================*/
/*===== (LUNA WHITE SILVER VERSION) =====*/
// Content & Button Properties
function lunaWhiteImages() {
	// Main product images
	document.getElementById("mainImage").src =
		"..src/img/productImages/1631211582787.png";

	// More products images
	document.getElementById("moreImage1").src =
		"..src/img/productImages/1631211582787.png";

	document.getElementById("moreImage2").src =
		"..src/img/productImages/1631211591897.png";

	document.getElementById("moreImage3").src =
		"..src/img/productImages/1631211602157.png";

	document.getElementById("moreImage4").src =
		"..src/img/productImages/1631211612032.png";

	// Product Title change
	document.getElementById("productTitle").innerHTML =
		"realme GT Master Edition ( luna white 6GB+128GB UK Plug )";

	// Checkout product title section
	document.getElementById("checkoutProductTitle").innerHTML =
		"luna white 6GB+128GB...";

	// Add On Product
	document.getElementById("addOnProduct").style.display = "none";

	// Checkout button section
	document.getElementById("addToCart").style.display = "none";
	document.getElementById("buyNow").innerHTML = "Notify Me";

	// Button styles changes
	document.getElementById("lunaWhite").style.border = "#111 0.1rem solid";
	document.getElementById("cosmosBlack").style.border = "#d3d3d3 0.1rem solid";
	document.getElementById("voyagerGrey").style.border = "#d3d3d3 0.1rem solid";

	/*===== BUTTON LISTENERS =====*/
	// Configuration Buttons
	const GBtn = document.getElementById("masterEditionGB");
	const GB2Btn = document.getElementById("masterEditionGB2");
	GBtn.style.border = "#111 0.14rem dotted";
	GB2Btn.style.opacity = "1";
	GB2Btn.style.border = "#d3d3d3 0.14rem dotted";

	// Images Buttons
	const btn1 = document.getElementById("btn1");
	const btn2 = document.getElementById("btn2");
	const btn3 = document.getElementById("btn3");
	const btn4 = document.getElementById("btn4");

	/*===== CONFIGURATION BUTTON SECTION LISTENERS =====*/
	// Change the phone GB size in the Add To Cart section description
	GBtn.addEventListener("click", () => {
		// Product Title change
		document.getElementById("productTitle").innerHTML =
			"realme GT Master Edition ( luna white 6GB+128GB UK Plug )";

		// Checkout product title section
		document.getElementById("checkoutProductTitle").innerHTML =
			"luna white 6GB+128GB...";

		document.getElementById("price").innerHTML = "£ 329";

		document.getElementById("defaultPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>329
            `;
		document.getElementById("totalPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>329
            `;

		GB2Btn.style.opacity = "0.5";
		GBtn.style.opacity = "1";
		GBtn.style.border = "#111 0.14rem dotted";
		GB2Btn.style.border = "#d3d3d3 0.14rem dotted";
	});

	GB2Btn.addEventListener("click", () => {
		// Product Title change
		document.getElementById("productTitle").innerHTML =
			"realme GT Master Edition ( luna white 8GB+256GB UK Plug )";

		// Checkout product title section
		document.getElementById("checkoutProductTitle").innerHTML =
			"luna white 8GB+256GB...";

		document.getElementById("price").innerHTML = "£ 399";

		document.getElementById("defaultPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>399
            `;

		document.getElementById("totalPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>399
            `;

		GB2Btn.style.opacity = "1";
		GBtn.style.opacity = "0.5";
		GBtn.style.border = "#d3d3d3 0.14rem dotted";
		GB2Btn.style.border = "#111 0.14rem dotted";
	});

	/*===== MORE IMAGE BUTTON SECTION LISTENERS =====*/
	btn1.addEventListener("click", () => {
		changeLunaWhiteImage1();
	});

	btn2.addEventListener("click", () => {
		changeLunaWhiteImage2();
	});

	btn3.addEventListener("click", () => {
		changeLunaWhiteImage3();
	});

	btn4.addEventListener("click", () => {
		changeLunaWhiteImage4();
	});
}

// luna white Images
function changeLunaWhiteImage1() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1631211582787.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn1");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn2");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeLunaWhiteImage2() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1631211591897.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn2");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeLunaWhiteImage3() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1631211602157.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn3");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeLunaWhiteImage4() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1631211612032.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn4");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn3");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

/*===== (COSMOS BLACK VERSION) =====*/
// Content & Button Properties
function cosmosBlackImages() {
	// Main product images
	document.getElementById("mainImage").src =
		"..src/img/productImages/1634037855775.png";

	// More products images
	document.getElementById("moreImage1").src =
		"..src/img/productImages/1634037855775.png";

	document.getElementById("moreImage2").src =
		"..src/img/productImages/1634037861502.png";

	document.getElementById("moreImage3").src =
		"..src/img/productImages/1634037866456.png";

	document.getElementById("moreImage4").src =
		"..src/img/productImages/1634037871962.png";

	// Product Title change
	document.getElementById("productTitle").innerHTML =
		"realme GT Master Edition ( Cosmos Black 6GB+128GB UK Plug )";

	// Checkout product title section
	document.getElementById("checkoutProductTitle").innerHTML =
		"Cosmos Black 6GB+128GB U...";

	document.getElementById("masterEditionGB2").style.color = "#d3d3d3";

	// Add On Product
	document.getElementById("addOnProduct").style.display = "Block";

	// Checkout button section
	document.getElementById("addToCart").style.display = "Block";
	document.getElementById("buyNow").innerHTML = "Buy Now";

	// Button styles changes
	document.getElementById("lunaWhite").style.border = "#d3d3d3 0.1rem solid";
	document.getElementById("cosmosBlack").style.border = "#111 0.1rem solid";
	document.getElementById("voyagerGrey").style.border = "#d3d3d3 0.1rem solid";

	/*===== BUTTON LISTENERS =====*/
	// Configuration Buttons
	const GBtn = document.getElementById("masterEditionGB");
	const GB2Btn = document.getElementById("masterEditionGB2");
	GBtn.style.border = "#111 0.1rem solid";
	GB2Btn.style.opacity = "1";
	GB2Btn.style.border = "#d3d3d3 0.1rem dotted";

	// Images Buttons
	const btn1 = document.getElementById("btn1");
	const btn2 = document.getElementById("btn2");
	const btn3 = document.getElementById("btn3");
	const btn4 = document.getElementById("btn4");

	/*===== CONFIGURATION BUTTON SECTION LISTENERS =====*/
	// Change the phone GB size in the Add To Cart section description
	GBtn.addEventListener("click", () => {
		// Product Title change
		document.getElementById("productTitle").innerHTML =
			"realme GT Master Edition ( Cosmos Black 6GB+128GB UK Plug )";

		// Checkout product title section
		document.getElementById("checkoutProductTitle").innerHTML =
			"Cosmos Black 6GB+128GB...";

		// Add On Product
		document.getElementById("addOnProduct").style.display = "Block";

		// Checkout button section
		document.getElementById("addToCart").style.display = "Block";
		document.getElementById("buyNow").innerHTML = "Buy Now";

		document.getElementById("price").innerHTML = "£ 329";

		document.getElementById("defaultPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>329
            `;
		document.getElementById("totalPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>329
            `;

		GBtn.style.border = "#111 0.1rem solid";
		GB2Btn.style.border = "#d3d3d3 0.1rem solid";
	});

	GB2Btn.addEventListener("click", () => {
		// Product Title change
		document.getElementById("productTitle").innerHTML =
			"realme GT Master Edition ( Cosmos Black 8GB+256GB UK Plug )";
		document.getElementById("masterEditionGB2").style.color = "#111";

		// Checkout product title section
		document.getElementById("checkoutProductTitle").innerHTML =
			"Cosmos Black 8GB+256GB...";

		document.getElementById("price").innerHTML = "£ 399";

		document.getElementById("defaultPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>399
            `;

		document.getElementById("totalPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>399
            `;

		GBtn.style.border = "#d3d3d3 0.1rem solid";
		GB2Btn.style.border = "#111 0.1rem solid";
	});

	/*===== MORE IMAGE BUTTON SECTION LISTENERS =====*/
	btn1.addEventListener("click", () => {
		changeCosmosBlackImage1();
	});

	btn2.addEventListener("click", () => {
		changeCosmosBlackImage2();
	});

	btn3.addEventListener("click", () => {
		changeCosmosBlackImage3();
	});

	btn4.addEventListener("click", () => {
		changeCosmosBlackImage4();
	});
}

// Cosmos Black Images
function changeCosmosBlackImage1() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1634037855775.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn1");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn2");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeCosmosBlackImage2() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1634037861502.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn2");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeCosmosBlackImage3() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1634037866456.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn3");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeCosmosBlackImage4() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1634037871962.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn4");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn3");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

/*===== (VOYAGER GREY VERSION) =====*/
// Content & Button Properties
function voyagerGreyImages() {
	// Main product images
	document.getElementById("mainImage").src =
		"..src/img/productImages/1631212312546.png";

	// More products images
	document.getElementById("moreImage1").src =
		"..src/img/productImages/1631212312546.png";

	document.getElementById("moreImage2").src =
		"..src/img/productImages/1631212321826.png";

	document.getElementById("moreImage3").src =
		"..src/img/productImages/1631212329842.png";

	document.getElementById("moreImage4").src =
		"..src/img/productImages/1631212338445.png";

	// Product Title change
	document.getElementById("productTitle").innerHTML =
		"realme GT Master Edition ( Voyager Grey 6GB+128GB UK Plug )";

	// Checkout product title section
	document.getElementById("checkoutProductTitle").innerHTML =
		"Voyager Grey 6GB+128GB...";

	// Add On Product
	document.getElementById("addOnProduct").style.display = "none";

	// Checkout button section
	document.getElementById("addToCart").style.display = "none";
	document.getElementById("buyNow").innerHTML = "Notify Me";

	// Button styles changes
	document.getElementById("lunaWhite").style.border = "#d3d3d3 0.1rem solid";
	document.getElementById("cosmosBlack").style.border = "#d3d3d3 0.1rem solid";
	document.getElementById("voyagerGrey").style.border = "#111 0.1rem solid";

	/*===== BUTTON LISTENERS =====*/
	// Configuration Buttons
	const GBtn = document.getElementById("masterEditionGB");
	const GB2Btn = document.getElementById("masterEditionGB2");
	GBtn.style.border = "#111 0.14rem dotted";
	GB2Btn.style.opacity = "0.5";
	GB2Btn.style.border = "#d3d3d3 0.14rem dotted";

	// Images Buttons
	const btn1 = document.getElementById("btn1");
	const btn2 = document.getElementById("btn2");
	const btn3 = document.getElementById("btn3");
	const btn4 = document.getElementById("btn4");

	/*===== CONFIGURATION BUTTON SECTION LISTENERS =====*/
	// Change the phone GB size in the Add To Cart section description
	GBtn.addEventListener("click", () => {
		// Product Title change
		document.getElementById("productTitle").innerHTML =
			"realme GT Master Edition ( Voyager Grey 6GB+128GB UK Plug )";

		// Checkout product title section
		document.getElementById("checkoutProductTitle").innerHTML =
			"Voyager Grey 6GB+128GB...";

		// Add On Product
		document.getElementById("addOnProduct").style.display = "none";

		// Checkout button section
		document.getElementById("addToCart").style.display = "none";
		document.getElementById("buyNow").innerHTML = "Notify Me";

		document.getElementById("price").innerHTML = "£ 329";

		document.getElementById("defaultPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>169
            `;
		document.getElementById("totalPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>169
            `;

		GB2Btn.style.opacity = "0.5";
		GBtn.style.opacity = "1";
		GBtn.style.border = "#111 0.14rem dotted";
		GB2Btn.style.border = "#d3d3d3 0.14rem dotted";
	});

	GB2Btn.addEventListener("click", () => {
		// Product Title change
		document.getElementById("productTitle").innerHTML =
			"realme GT Master Edition ( Voyager Grey 8GB+256GB UK Plug )";

		// Checkout product title section
		document.getElementById("checkoutProductTitle").innerHTML =
			"Voyager Grey 8GB+256GB...";

		// Add On Product
		document.getElementById("addOnProduct").style.display = "none";

		// Checkout button section
		document.getElementById("addToCart").style.display = "none";
		document.getElementById("buyNow").innerHTML = "Notify Me";

		document.getElementById("price").innerHTML = "£ 399";

		document.getElementById("defaultPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>189
            `;

		document.getElementById("totalPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>189
            `;

		GB2Btn.style.opacity = "1";
		GBtn.style.opacity = "0.5";
		GBtn.style.border = "#d3d3d3 0.14rem dotted";
		GB2Btn.style.border = "#111 0.14rem dotted";
	});

	/*===== MORE IMAGE BUTTON SECTION LISTENERS =====*/
	btn1.addEventListener("click", () => {
		changeVoyagerGreyImage1();
	});

	btn2.addEventListener("click", () => {
		changeVoyagerGreyImage2();
	});

	btn3.addEventListener("click", () => {
		changeVoyagerGreyImage3();
	});

	btn4.addEventListener("click", () => {
		changeVoyagerGreyImage4();
	});
}

// Voyager Grey Images
function changeVoyagerGreyImage1() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1631212312546.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn1");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn2");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeVoyagerGreyImage2() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1631212321826.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn2");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn3");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeVoyagerGreyImage3() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1631212329842.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn3");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn4");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

function changeVoyagerGreyImage4() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"..src/img/productImages/1631212338445.png");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn4");
	borderLine.style.borderBottom = "#111 0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn3");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}

/*===== CHANGE PRODUCT CONFIGURATION OPTIONS =====*/
function realmeGTGB() {
	document.getElementById("masterEditionGB").style.border = "#111 0.1rem solid";
	document.getElementById("masterEditionGB2").style.border =
		"#d3d3d3 0.1rem solid";

	// Product Title change
	document.getElementById("productTitle").innerHTML =
		"realme GT Master Edition ( Cosmos Black 6GB+128GB UK Plug )";

	// Checkout product title section
	document.getElementById("checkoutProductTitle").innerHTML =
		"Cosmos Black 6GB+128GB...";

	// Add On Product
	document.getElementById("addOnProduct").style.display = "Block";

	// Checkout button section
	document.getElementById("addToCart").style.display = "Block";
	document.getElementById("buyNow").innerHTML = "Buy Now";

	document.getElementById("price").innerHTML = "£ 329";

	document.getElementById("defaultPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>329
            `;
	document.getElementById("totalPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>329
            `;
}

function realmeGTGB2() {
	document.getElementById("masterEditionGB").style.border =
		"#d3d3d3 0.1rem solid";
	document.getElementById("masterEditionGB2").style.border =
		"#111 0.14rem dotted";
	document.getElementById("masterEditionGB2").style.color = "#111";

	// Product Title change
	document.getElementById("productTitle").innerHTML =
		"realme GT Master Edition ( Cosmos Black 8GB+256GB UK Plug )";

	// Checkout product title section
	document.getElementById("checkoutProductTitle").innerHTML =
		"Cosmos Black 8GB+256GB...";

	// Add On Product
	document.getElementById("addOnProduct").style.display = "none";

	// Checkout button section
	document.getElementById("addToCart").style.display = "none";
	document.getElementById("buyNow").innerHTML = "Notify Me";

	document.getElementById("price").innerHTML = "£ 399";

	document.getElementById("defaultPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>399
            `;

	document.getElementById("totalPrice").innerHTML = `
                <i class="bi bi-currency-pound"></i>399
            `;
}
