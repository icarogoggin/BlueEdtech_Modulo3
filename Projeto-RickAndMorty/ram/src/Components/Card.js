import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { primeiraLetra } from '../Lib/utils';

export default function Card(info) {

  const [personagem, setPersonagem] = useState(info.info);
  const [loading, setLoading] = useState(true);

  const getData = useCallback(() => {
    fetch(info.info.url)
      .then(res => res.json())
      .then((result) => {
        setPersonagem(result)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(true)
      })
  }, [info.info.url]);

  useEffect(() => {
    getData();
  }, [getData])

  return (
    <div className="app__list__card">
      <Link className="app__list__card__link"to={{ pathname: "/info/" + personagem.id, state: personagem }}>
        <img className="app__list__card__img" src={"https://rickandmortyapi.com/api/character/avatar/" + personagem.id + ".jpeg"} alt={personagem.name} />
        <div className="app__list__card__info">
          <p className="app__list__card__id">{'#' + personagem.id}</p>
          <h2 className="app__list__card__name">{primeiraLetra(personagem.name)}</h2>
          <div className="app__list__card__category">
          <p className="app__list__card__id">{personagem.species}</p>
          <p className="app__list__card__id">{personagem.origin.name}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
