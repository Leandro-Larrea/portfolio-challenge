let cards = document.querySelectorAll(".projects")
let button = document.querySelectorAll(".projects__slider-button")
const projectStyle = document.querySelector(".all-projects").style
const tagButtons = document.querySelectorAll(".contador__tags-button")
const mobileButtons = document.querySelectorAll(".button-mobile");
let actual = 0;

	let transformMark = 0;

 
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
		void document.querySelector(".main").offsetWidth;
	
	}
	if( actual > a){
	document.querySelector(".all-projects").classList.add("animation-right")
}
	else{
	document.querySelector(".all-projects").classList.add("animation-left")
}
	actual = a;
	let x = (a * 3) - 1
	transformMark = (x - 2)
	arrayTag.forEach((a, i) =>{
	if(i === x || i === x-1 || i === x-2){
		a.classList.remove("off")
	}
	else{
		a.classList.add("off")
	}
	
})
	
}

}


function slide1(s){
	if(!s){
		 document.querySelector(".all-projects").classList.remove("animation-left");
		void document.querySelector(".main").offsetWidth;
		document.querySelector(".all-projects").classList.add("animation-left")
		return
	}
	let x = null;
	
	filtredCards.length ?	x = filtredCards : x = cards;

		if(document.querySelector(".all-projects").classList.length > 1){
		document.querySelector(".all-projects").classList.remove("animation-right") ||
		 document.querySelector(".all-projects").classList.remove("animation-left");
		void document.querySelector(".main").offsetWidth;
	}
	if(s.target.classList.contains("fa-arrow-left" )&& transformMark !== 0){
		console.log("aca ta bien ")
		document.querySelector(".all-projects").classList.add("animation-left")
		x[transformMark].classList.add("off")
		x[transformMark - 1].classList.remove("off")
		transformMark --;
	}
		if (s.target.classList.contains("fa-arrow-right") && transformMark < x.length -1){
			console.log("aca ta bien ")
			document.querySelector(".all-projects").classList.add("animation-right")
			x[transformMark].classList.add("off")
			x[transformMark+1].classList.remove("off")
			transformMark ++
		
			console.log("this one it´s right")
		}


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
transformMark = 0
filtredCards = array;
if(mode === "desktop"){
	
	x3()
}
if(mode === "mobile"){
	
	mobileTransform();
	slide1()
}

count();
buttonController(filtredCards);

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
	button = document.querySelectorAll(".projects__slider-button");
	console.log(button.length)
}

let mode = null;

const comprobar = (item, type)=>{
for(i = 0; i < item.length ; i++){
	if (item[i] === type){
		return true
	}
}
return false;
}

function mobileTransform(){
	console.log("se activo mobiletransform")
	let x = null
	if (filtredCards.length > 0){
		x = filtredCards
	}
	else{
		x = cards;
	}		

		x.forEach((a, b)=>{
			if(b === transformMark){
				a.classList.remove("off")
			}
			else{
				if (comprobar(a.classList,"off") === false) {
				a.classList.add("off")
			console.log("adding off")
				}
			}
		})
	}

	function desktopTransform(){
		console.log("se activo desktoptransform")
		let x = null
	if (filtredCards.length > 0){
		x = filtredCards;
	}
	else{
		x = cards;
	}
	
	x.forEach((a, b)=>{
		if(b === transformMark || b === transformMark + 1 || b === transformMark +2){
				a.classList.remove("off")
		}
		else{
			if(comprobar(a.classList,"off") === false){
				a.classList.add("off")
			}
		}
		
})
}
const check = () =>{
	if(window.innerWidth <= 650 && mode !== "mobile"){
		console.log("mobileMode")
		mode = "mobile"
		mobileTransform()
		
	}
	if (window.innerWidth > 650 && mode !== "desktop") {
		console.log("desktopMode")
		mode = "desktop"
		desktopTransform()
	}
}
function count(){
	let x = cards
	if(filtredCards.length > 0){
		x = filtredCards
	}
	document.querySelector(".contador__title-p").textContent = `Projects (${x.length})`
}

check();


window.addEventListener("resize", check)
buttonController(filtredCards)

tagButtons.forEach((a) =>{
	a.addEventListener("focus",filtrar)
})
mobileButtons.forEach((a) =>{
	a.addEventListener("click",slide1)
})


/*una vez que tenemos el valor a filtrar, tenemos que hacer una funcion
que busque dentro del itenContent de cada figcaption de cada carta
y en base a eso quite o agregue unas u otras.
now we need our x3 function working with a different array depending on which tag it´s selected
while using the standard cards array to aply the off class on the other elements
	necesito una funcion que al pasar a mobile recorra el array, mantenga el primer
elemento sin la clase off y al resto le agregue la clase off (de forma que siempre nos paremos
en el mismo punto del array. Asi mismo necesito una funcion que al pasar a desktop recorra el array que se este usando
ya sea cards o filtred cards y al encontrar un elemento sin la clase off se asegure de que ese elemento y los siguientes
 dos (si existen) se queden sin la clase off)*/

