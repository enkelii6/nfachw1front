import { useEffect, useState } from 'react'
import getAPI from '../network'

export const Planets = () => {
    const [planets, setPlanets] = useState([])
    console.log(planets)
    useEffect(() => {
        const fetchPlanets = async () => {
            const PlanetsAPI = await getAPI('Planets');
            setPlanets(PlanetsAPI);
        };

        fetchPlanets();
    }, []);
  return (
    <div>
        {planets.map(planet => (<div key={planet.id}>{planet.name}</div>))}
    </div>
  )
}