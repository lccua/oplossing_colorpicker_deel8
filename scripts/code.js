const setup = () => {


	let sliders = document.getElementsByClassName("slider");
	for (let i = 0; i < sliders.length; i++) {
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}
	update();

	let button = document.querySelector("#btnAdd")
	button.addEventListener("click", addSwatch)


};

const update = () => {
	// haal de waarden op van de 3 sliders
	let red=document.getElementById("sldRed").value;
	let green=document.getElementById("sldGreen").value;
	let blue=document.getElementById("sldBlue").value;

	// stop de waarden in de 3 spans
	document.getElementById("lblRed").textContent=red;
	document.getElementById("lblGreen").textContent=green;
	document.getElementById("lblBlue").textContent=blue;

	// wijzig de achtergrondkleur van de swatch
	let swatch=document.getElementById("swatch");
	swatch.style.backgroundColor="rgb("+red+","+green+","+blue+")";
};

const addSwatch = () => {


	let swatchesSaves = document.querySelector("#swatchSaves");
	let swatch = document.querySelector("#swatch")
	let swatchColor = swatch.style.backgroundColor;


	let btnDelete = document.createElement("input");

	let div = document.createElement("div");

	div.setAttribute("class", "swatch");
	div.setAttribute("style", `background-color: ${swatchColor};`);



	div.addEventListener("click", clickOnSavedSwatch);

	swatchesSaves.appendChild(div);

	// stel de delete knop in
	btnDelete.setAttribute("type", "button");
	btnDelete.setAttribute("value", "X");


	swatchesSaves.appendChild(btnDelete);
	btnDelete.addEventListener("click", deleteSwatch);
	console.log("test swatch add")

}

const deleteSwatch = (event) => {
	let savedSwatches = document.querySelector("#swatchSaves");

	let deleteButton = event.target;
	let colorSwatch = deleteButton.previousSibling;

	savedSwatches.removeChild(deleteButton);
	savedSwatches.removeChild(colorSwatch);
}


const clickOnSavedSwatch = (event) => {
	let clickedSwatch = event.target
	let swatchColor = clickedSwatch.style.backgroundColor;
	let swatch = document.querySelector("#swatch")

	let red = swatchColor.substring(swatchColor.indexOf('(')+1, swatchColor.indexOf(','));
	let green = swatchColor.substring(swatchColor.indexOf(',')+1, swatchColor.lastIndexOf(','));
	let blue = swatchColor.substring(swatchColor.lastIndexOf(',')+1, swatchColor.indexOf(')'));


	document.querySelector("#sldRed").value = red;
	document.querySelector("#sldGreen").value = green;
	document.querySelector("#sldBlue").value = blue;

	document.getElementById("lblRed").textContent = red;
	document.getElementById("lblGreen").textContent = green;
	document.getElementById("lblBlue").textContent = blue;



	swatch.setAttribute("style", `background-color: ${swatchColor};`);



}



window.addEventListener("load", setup);