import React from "react";
import { Link } from "react-router-dom";

const PokemonCard = ({ name, url }) => {
  const id = url.split("/").filter(Boolean).pop();
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="pokemon-card">
      <Link to={`/pokemon/${id}`}>
        <img src={imageUrl} alt={name} />
        <h3>{name}</h3>
      </Link>
    </div>
  );
};

export default PokemonCard;
