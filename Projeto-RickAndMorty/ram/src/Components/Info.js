import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Info(info) {

  const [personagens, setPersonagens] = useState(info.location.state);

  return (
  <div className="info-container">
    <div className="info-card">
    <img className="img-in-info" src={"https://rickandmortyapi.com/api/character/avatar/" + personagens.id + ".jpeg"} alt={personagens.name} />
      <div className="info-text">
        <h2>{personagens.name}</h2>
        <p>Status: {personagens.status}</p>
        <p>Specie: {personagens.species}</p>
        <p>Gender: {personagens.gender}</p>
        <p>Planet: {personagens.origin.name}</p>
        <p>Last Location: {personagens.location.name}</p>
        <Link class="info-button__link" to="/"><button class="info-button">Voltar</button></Link>
      </div>
    </div>
  </div>
  );
}