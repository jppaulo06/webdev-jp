const bgescuro = document.querySelector("#imgescura");
const imgescura = document.querySelector("#escuro");
const icones = document.querySelectorAll(".icones");
const cards = document.querySelectorAll(".card");
const barra = document.querySelector(".barra");
const botao = document.querySelector("button");
const textos = document.querySelectorAll("a, h1, h2");
const bloco = document.querySelector(".bloco");
const bloquinho = document.querySelector(".bloquinho");

function escurecer() {
	const dentro = botao.innerHTML;

	for(let i = 0; i < textos.length; i++){
		textos[i].classList.toggle("subitem");
	}

	botao.innerHTML = dentro === "LIGHT" ? "DARK" : "LIGHT";

	botao.classList.toggle("botaoclaro");
	bloquinho.classList.toggle("bloquinhoescuro");
	bloco.classList.toggle("blocoescuro");
	bgescuro.classList.toggle("sumir");
	imgescura.classList.toggle("sumir");
	icones.forEach((icone) => icone.classList.toggle("escurinho"));
	for(i = 0; i < cards.length; i++){
		cards[i].classList.toggle("escurinho");
	}
	barra.classList.toggle("barraescura");
}
