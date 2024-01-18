const PokemonName = document.querySelector('.pokemon_name');
const pokemon_number = document.querySelector('.pokemon_number');
const poekmonImage = document.querySelector('.pokemon_img');
const form = document.querySelector('.form');
const input = document.querySelector('.search');
const btn_prev = document.querySelector('.btn_prev');
const btn_next = document.querySelector('.btn_next');



const fechtPokemon = async (pokemon) => {

    const ApiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);  

    if(ApiResponse.status = 200){
        const data = await ApiResponse.json();
        return data;

    }

    

}

const renderPOkemon = async (pokemon) => {

    const data = await fechtPokemon(pokemon);
        PokemonName.innerHTML = data.name;
        pokemon_number.innerHTML = data.id;
        poekmonImage.src = data['sprites']['front_default'];
        input.value = '';

    
  

}


form.addEventListener('submit', (event) =>{

    event.preventDefault();
    renderPOkemon(input.value);




})

renderPOkemon('1')


