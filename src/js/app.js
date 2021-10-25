function changeProductImage1() {
	// changes the main product image ot the selected image
	const mainImage = (document.getElementById("mainImage").src =
		"/src/img/productImages/1594595141366.jpg");

	// Creates the border style for other additional images
	const borderLine = document.getElementById("btn1");
	borderLine.style.borderBottomColor = "#fcd742";
	borderLine.style.borderBottom = "0.15rem solid";

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
	borderLine.style.borderBottomColor = "#fcd742";
	borderLine.style.borderBottom = "0.15rem solid";

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
	borderLine.style.borderBottomColor = "#fcd742";
	borderLine.style.borderBottom = "0.15rem solid";

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
	borderLine.style.borderBottomColor = "#fcd742";
	borderLine.style.borderBottom = "0.15rem solid";

	// Removes the border style for other additional images
	const btn1NoBorderLine = document.getElementById("btn1");
	const btn2NoBorderLine = document.getElementById("btn2");
	const btn3NoBorderLine = document.getElementById("btn3");
	btn1NoBorderLine.style.borderBottom = "none";
	btn2NoBorderLine.style.borderBottom = "none";
	btn3NoBorderLine.style.borderBottom = "none";
}
