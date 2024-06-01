import { useEffect, useState } from 'react'
import getAPI from '../network'

export const People = () => {
    const [people, setPeople] = useState([])
    console.log(people)
    useEffect(() => {
        const fetchPeople = async () => {
            const PeopleAPI = await getAPI('people');
            setPeople(PeopleAPI);
        };

        fetchPeople();
    }, []);
  return (
    <div>
        {people.map(people => (<div key={people.url}>{people.name}</div>))}
    </div>
  )
}
