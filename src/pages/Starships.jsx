import { useEffect, useState } from 'react'
import getAPI from '../network/network'

export const Starships = () => {
    const [starships, setStarships] = useState([])
    console.log(starships)
    useEffect(() => {
        const fetchstarships = async () => {
            const starshipsAPI = await getAPI('starships');
            setStarships(starshipsAPI);
        };

        fetchstarships();
    }, []);
  return (
    <div>
        {starships.map(item => (<div key={item.url}>{item.name}</div>))}
    </div>
  )
}