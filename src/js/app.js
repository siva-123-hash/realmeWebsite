/*===== PRODUCT IMAGE CHANGE =====*/
function changeProductImage1() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"/src/img/productImages/1594595141366.jpg");

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

function changeProductImage2() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"/src/img/productImages/1588462321862.jpg");

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

function changeProductImage3() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"/src/img/productImages/1588462321864.jpg");

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

function changeProductImage4() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"/src/img/productImages/1588462321863.jpg");

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

/*===== CHANGE PRODUCT COLOUR IMAGE =====*/
// Moss Green realme X50 Pro 5G product images
function mossGreenImages() {
	// Main product images
	document.getElementById("mainImage").src =
		"/src/img/productImages/1594595165858.jpg";

	// More products images
	document.getElementById("moreImage1").src =
		"/src/img/productImages/1594595165858.jpg";

	document.getElementById("moreImage2").src =
		"/src/img/productImages/1588460890879.jpg";

	document.getElementById("moreImage3").src =
		"/src/img/productImages/1588460904321.jpg";

	document.getElementById("moreImage4").src =
		"/src/img/productImages/1588460897805.jpg";

	// Product Title change
	document.getElementById("productTitle").innerHTML =
		"realme X50 Pro 5G ( MOSS GREEN UK PLUG 12GB+256GB )";

	// Checkout product title section
	document.getElementById("checkoutProductTitle").innerHTML =
		"MOSS GREEN UK PLUG 128GB+2...";

	// Add to Cart Section button
	document.getElementById("addToCart").style.display = "none";
	document.getElementById("buyNow").innerHTML = "Notify Me";

	// Button styles changes
	document.getElementById("mossGreen").style.border = "#111 0.1rem solid";
	document.getElementById("rustRed").style.border = "#d3d3d3 0.1rem solid";

	// Configuration phone GB Space size
	document.getElementById("8GB").style.display = "none";
	document.getElementById("12GB").style.border = "0.14rem dotted";
}
// Rust Red realme X50 Pro 5G products images
function rushRedImages() {
	// Main product images
	document.getElementById("mainImage").src =
		"/src/img/productImages/1594595141366.jpg";

	// More products images
	document.getElementById("moreImage1").src =
		"/src/img/productImages/1594595141366.jpg";

	document.getElementById("moreImage2").src =
		"/src/img/productImages/1588462321862.jpg";

	document.getElementById("moreImage3").src =
		"/src/img/productImages/1588462321864.jpg";

	document.getElementById("moreImage4").src =
		"/src/img/productImages/1588462321863.jpg";

	// Product Title change
	document.getElementById("productTitle").innerHTML =
		"realme X50 Pro 5G ( RUST RED UK PLUG 12GB+256GB )";

	// Checkout product title section
	document.getElementById("checkoutProductTitle").innerHTML =
		"RUST RED UK PLUG 128GB+2...";

	// Add to Cart Section button
	document.getElementById("addToCart").style.display = "block";
	document.getElementById("buyNow").innerHTML = "Buy Now";

	// Button styles changes
	document.getElementById("rustRed").style.border = "#111 0.1rem solid";
	document.getElementById("mossGreen").style.border = "#d3d3d3 0.1rem solid";

	// Configuration phone GB Space size
	document.getElementById("8GB").style.display = "block";
	document.getElementById("12GB").style.border = "#111 0.1rem solid";
}
