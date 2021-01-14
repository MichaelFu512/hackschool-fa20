import React, {useState, useEffect} from 'react';
import './style.css';
import API from '../API'
import Navbar from '../components/Navbar';
import PokemonCard from '../components/PokemonCard'

const ViewPokemon = () => {
const [body, setBody] = useState([]);

//makes it only run the api request once 
useEffect(() => {
    API.getPokemon().then((response) => {
        setBody(response.data.pokemon); 
    });
}, []);

const currentPokemons = body.map((val) => <PokemonCard name ={val.name} description={val.description} image={val.image} 
                                type1={val.type1} type2={val.type2}></PokemonCard>);

const logPokemon = () => {
    console.log(body);
}

    return (
    <div>
        <Navbar />
        <button onClick={logPokemon} > Log Pokemon </button>
        <div className="pokemon">
            {/* {currentPokemons}  */}
            <PokemonCard name = "Ditto" description = "Ditto copies a pokemon because its own stats are not the best" image = "https://media2.giphy.com/media/hSXsjuZLQz6aKprQXy/source.gif" ></PokemonCard>
            <PokemonCard name = "Amaura" description = "Amaura is a white dinosaur that loves the snow" image = "https://64.media.tumblr.com/c9fe05632c20e562f8f7ef28c43bb684/tumblr_n7ux7mdLJS1rz1ztlo1_500.gifv" ></PokemonCard>
            <PokemonCard name = "Charmander" description = "Charmander has a tail that if extinguished, he will not have a fun time" image = "https://media.tenor.com/images/00da74900f997766baa04acac06ed5b6/tenor.gif" ></PokemonCard>
        </div>
    </div>
);
}

export default ViewPokemon;