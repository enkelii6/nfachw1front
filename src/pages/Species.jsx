import { useEffect, useState } from 'react'
import getAPI from '../network/network'

export const Species = () => {
    const [species, setSpecies] = useState([])
    console.log(species)
    useEffect(() => {
        const fetchspecies = async () => {
            const speciesAPI = await getAPI('species');
            setSpecies(speciesAPI);
        };

        fetchspecies();
    }, []);
  return (
    <div>
        {species.map(item => (<div key={item.url}>{item.name}</div>))}
    </div>
  )
}