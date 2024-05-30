  

document.getElementById("search-button").addEventListener("click",   function() {
  
  document.getElementById("types").innerText="";
 fetch('https://pokeapi-proxy.freecodecamp.rocks/api/pokemon')
.then(response => response.json())
.then(data => {
  const allPokemon = data.results;
 
let searchedTerm =document.getElementById("search-input").value;
 let searchTerm = searchedTerm.toLowerCase();
 
 let searchPokemon  =allPokemon.find(d => searchTerm==d.id || searchTerm==d.name)
 if (!searchPokemon) {
    alert("Pokémon not found");
} 
 
 let pokemonUrl = searchPokemon.url;
  
 

fetch(pokemonUrl)
.then(response => response.json())
.then(data => {
  const name = data.name;
  const id =data.id;
  const weight=data.weight;
  const height =data.height;
  document.getElementById("pokemon-name").innerText  = data.name.toUpperCase();
  document.getElementById("pokemon-id").innerText = `#${data.id}`;
  document.getElementById("weight").innerText =  `Weight: ${data.weight}`;
  document.getElementById("height").innerText = `Height: ${data.height}` ;
  
  document.getElementById("sprite").src = data.sprites.front_default ;
 


if (data.types.length == 1) {
                      
                        const firstType = document.createElement('p');
                        firstType.innerText = data.types[0].type.name.toUpperCase();
                         
                        document.getElementById("types").appendChild(firstType);
                    }

  if (data.types.length > 1) {
    const firstType = document.createElement('p');
                        firstType.innerText = data.types[0].type.name.toUpperCase();
                         
                         
                      
                        const secondType = document.createElement('p');
                        secondType.innerText = data.types[1].type.name.toUpperCase();
                         
                        document.getElementById("types").appendChild(firstType);
                        document.getElementById("types").appendChild(secondType); 

                    }

   
  document.getElementById("hp").innerText = data.stats[0].base_stat;
  document.getElementById("attack").innerText = data.stats[1].base_stat;
   document.getElementById("defense").innerText = data.stats[2].base_stat;
   document.getElementById("special-attack").innerText = data.stats[3].base_stat;
   document.getElementById("special-defense").innerText = data.stats[4].base_stat;
   document.getElementById("speed").innerText = data.stats[5].base_stat;
  
  

})

})
    .catch(error => console.error('Error fetching data:', error));




});
