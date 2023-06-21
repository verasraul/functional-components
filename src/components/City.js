

function City(props){

    const { city } = props

    return(
        <div>
                <p>Capitol: {city.capitol}</p>
                    <p>Country: {city.country}</p>
                    <p>Population: {city.population}</p>
                    <p>Language: {city.language}</p>
        </div>
    )
}

export default City;