import React from 'react';
import './style.css';
import Navbar from '../components/Navbar';

const ViewPokemon = () => {
    return (
    <div>
        <Navbar />
        <buton> Log of Pokemon </buton>
        <div className="pokemon">
            <h2>Ditto</h2>
            <img src="https://media2.giphy.com/media/hSXsjuZLQz6aKprQXy/source.gif" width="500"/>
            <p> Ditto copies a pokemon because its own stats are not the best </p>
            <br />
            <h2>Amaura</h2>
            <img src="https://64.media.tumblr.com/c9fe05632c20e562f8f7ef28c43bb684/tumblr_n7ux7mdLJS1rz1ztlo1_500.gifv" width="500"/>
            <p> Amaura is a white dinosaur that loves the snow </p>
            <br />
            <h2>Charmandar</h2>
            <img src="https://media.tenor.com/images/00da74900f997766baa04acac06ed5b6/tenor.gif" width="500"/>
            <p> Charmander has a tail that if extinguished, he will not have a fun time </p>
        </div>
    </div>
);
}

export default ViewPokemon;