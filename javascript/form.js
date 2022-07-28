let cards = document.querySelectorAll(".projects")
let button = document.querySelectorAll(".projects__slider-button")
const projectStyle = document.querySelector(".all-projects").style
const tagButtons = document.querySelectorAll(".contador__tags-button")
let actual = 1;


 
const x3 = (s)=>{	
	arrayTag = cards;
	let a = null
	if(filtredCards.length > 0){
		arrayTag = filtredCards
	}
	if(s){
	 a = Number(s.target.textContent);
	}
	else{
		 a = 1;
	}
	if(actual === a){
		return

	}
	else{
	if(document.querySelector(".all-projects").classList.length > 1){
		document.querySelector(".all-projects").classList.remove("animation-right") ||
		 document.querySelector(".all-projects").classList.remove("animation-left");
		void document.querySelector(".all-projects").offsetWidth;
	
	}
	if( actual > a){
	document.querySelector(".all-projects").classList.add("animation-right")
}
	else{
	document.querySelector(".all-projects").classList.add("animation-left")
}
	let x = (a * 3) - 1
	actual = a;
	arrayTag.forEach((a, i) =>{
	if(i === x || i === x-1 || i === x-2){
		a.classList.remove("off")
	}
	else{
		a.classList.add("off")
	}
	
})
	
}
console.log(cards)
}



filtredCards = []

const filtrar = (t) =>{
let array =[]
let filter = RegExp(`${t.target.textContent}`)
cards.forEach((a) =>{
	if(filter.test(a.childNodes[1].childNodes[3].textContent)){
		array.push(a)
	}
})
cards.forEach((a) =>{
	a.classList.add("off")
}
)
actual = 0;
filtredCards = array;
x3();
console.log(filtredCards)
buttonController(filtredCards)

}



function buttonController(filtredCards){
	let buttonAmount = null
	if (filtredCards.length === 0) {
buttonAmount = Math.ceil(cards.length/3)
}
else{
	buttonAmount = Math.ceil(filtredCards.length/3)
}
if(buttonAmount > button.length){
	buttonCreator();
}
if (buttonAmount < button.length) {
	buttonDelete()
}
console.log(buttonAmount)
console.log(button.length)
function buttonCreator(){
	
	for(i = button.length; i < buttonAmount; i++){
	newbutton = document.createElement("button");
	newnumber = document.createTextNode(i + 1);
	newbutton.className = "projects__slider-button"
	newbutton.appendChild(newnumber);
	document.querySelector(".projects__slider").appendChild(newbutton)
	newbutton.addEventListener("click",x3)
	}
}
function buttonDelete(){
	for(let i = button.length -1; i >= buttonAmount; i--){
		button[i].parentNode.removeChild(button[i])

	}
}
	button = document.querySelectorAll(".projects__slider-button")
	console.log(button.length)
}
buttonController(filtredCards)



tagButtons.forEach((a) =>{
	a.addEventListener("focus",filtrar)
})


/*una vez que tenemos el valor a filtrar, tenemos que hacer una funcion
que busque dentro del itenContent de cada figcaption de cada carta
y en base a eso quite o agregue unas u otras.
now we need our x3 function working with a different array depending on which tag it´s selected
while using the standard cards array to aply the off class on the other elements*/
