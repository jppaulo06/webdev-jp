pesquisar = async () => {
  const input = document.querySelector('#pesquisa').value;
  const nome = document.getElementById('nome');
  const forca = document.getElementById('forca');
  const vida = document.getElementById('vida');
  const peso = document.getElementById('peso');
  const altura = document.getElementById('altura');
  const imagem = document.getElementById('imagem');
  const tipo = document.getElementById('tipo');

  sitepokemon = await fetch('https://pokeapi.co/api/v2/pokemon/' + input);
  if(sitepokemon.ok){
    const pokemon = await sitepokemon.json();
    console.log("deu certo");
    nome.innerHTML = "Nome: " + pokemon.name;
    peso.innerHTML = "Peso: " + (pokemon.weight/10).toPrecision(2) + "kg";
    altura.innerHTML = "Altura: 0."  + pokemon.height + "m";
    forca.innerHTML = "Forca: "  + pokemon.stats[1].base_stat;
    vida.innerHTML = "Vida: "  + pokemon.stats[0].base_stat + "hp";
    tipo.innerHTML = "Tipo: " + pokemon.types[0].type.name;
    
    imagem.src = pokemon.sprites.front_default;
    console.log(pokemon.sprites.front_default);
  }
  else console.log("erro");
}