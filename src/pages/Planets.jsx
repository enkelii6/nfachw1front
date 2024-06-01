import { useEffect, useState } from 'react'
import getAPI from '../network/network'

export const Planets = () => {
    const [planets, setPlanets] = useState([])
    console.log(planets)
    useEffect(() => {
        const fetchPlanets = async () => {
            const PlanetsAPI = await getAPI('planets');
            setPlanets(PlanetsAPI);
        };

        fetchPlanets();
    }, []);
  return (
    <div>
        {planets.map(planet => (<div key={planet.url}>{planet.name}</div>))}
    </div>
  )
}