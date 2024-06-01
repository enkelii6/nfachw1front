import { useEffect, useState } from 'react'
import getAPI from '../network/network'

export const User = () => {
    const [customs, setCustoms] = useState([])
    console.log(customs)
    useEffect(() => {
        const fetchcustoms = async () => {
            const customsAPI = await getAPI('user');
            setCustoms(customsAPI);
        };

        fetchcustoms();
    }, []);
  return (
    <div>
        {customs.map(custom => (<div key={custom.id}>{custom.name}</div>))}
    </div>
  )
}