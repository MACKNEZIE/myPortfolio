// JavaScript Document

/* 
	Student Name: Mackenzie sagriff 
	File Name: script.js
	Date: 03/17/22
*/

//Global variables
	var video = document.getElementById("example");
	var videoSource = document.getElementById("vid-src");
	var descriptionSource = document.getElementById("despsrc");

//Hamburger menu function
	function hamburger() {
	var menu = document.getElementById("menu-links");
	var logo = document.getElementById("ffc-logo");
	if (menu.style.display === "block" && logo.style.display === "none") {
		menu.style.display = "none";
		logo.style.display = "block";
	} else {
		menu.style.display = "block";
		logo.style.display = "none";
	}
}

//Function to display a promo code
	function discount() {
		var promo = document.getElementById("special");
		promo.firstChild.nodeValue = "Promo Code: D25START";
		promo.style.color = "#ff0000";
		promo.style.fontSize = "2em";
}