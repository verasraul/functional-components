import City from './City'
import cities from '../Data'

function Main(){

    return (
        <div>
            {cities.map((city, index) => {
                return <City city={city} />
            })}

        </div>
    )
};

export default Main;

// Inside this Main componen, import the City component
// Use the map array method to map over the cities
// Return the City component