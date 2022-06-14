
function escurecer() {
	let i;
	const bgescuro = document.querySelector("#imgescura");
	const imgescura = document.querySelector("#escuro");
	const icones = document.querySelectorAll(".icones");
	const cards = document.querySelectorAll(".card");
	const barra = document.querySelector(".barra");
	const botao = document.querySelector("button");
	const textos = document.querySelectorAll("a, h1, h2");
	const bloco = document.querySelector(".bloco");
	const bloquinho = document.querySelector(".bloquinho");
	let dentro = botao.innerHTML;

	for(i = 0; i < textos.length; i++){
		textos[i].classList.toggle("subitem");
	}

	if(dentro == "LIGHT") {botao.innerHTML = "DARK";}
	else {botao.innerHTML = "LIGHT";}

	botao.classList.toggle("botaoclaro");
	bloquinho.classList.toggle("bloquinhoescuro");
	bloco.classList.toggle("blocoescuro");
	bgescuro.classList.toggle("sumir");
	imgescura.classList.toggle("sumir");
	for(i = 0; i < icones.length; i++){
		icones[i].classList.toggle("escurinho");
	}
	for(i = 0; i < cards.length; i++){
		cards[i].classList.toggle("escurinho");
	}
	barra.classList.toggle("barraescura");

}