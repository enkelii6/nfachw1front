import { useEffect, useState } from 'react'
import getAPI from '../network/network'

export const Films = () => {
    const [films, setFilms] = useState([])
    console.log(films)
    useEffect(() => {
        const fetchFilms = async () => {
            const filmsAPI = await getAPI('films');
            setFilms(filmsAPI);
        };

        fetchFilms();
    }, []);
  return (
    <div>
        {films.map(film => (<div key={film.episode_id}>{film.title}</div>))}
    </div>
  )
}

