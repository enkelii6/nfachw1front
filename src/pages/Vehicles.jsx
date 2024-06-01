import { useEffect, useState } from 'react'
import getAPI from '../network/network'

export const Vehicles = () => {
    const [vehicles, setVehicles] = useState([])
    console.log(vehicles)
    useEffect(() => {
        const fetchvehicles = async () => {
            const vehiclesAPI = await getAPI('vehicles');
            setVehicles(vehiclesAPI);
        };

        fetchvehicles();
    }, []);
  return (
    <div>
        {vehicles.map(item => (<div key={item.url}>{item.name}</div>))}
    </div>
  )
}