window.myLoadFunction = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here
	alert("wuju");
};

//the listener function here
let btn = document.getElementById("theGreen");
btn.addEventListener("click", window.myLoadFunction);
