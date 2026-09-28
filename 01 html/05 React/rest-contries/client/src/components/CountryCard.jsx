import { Link } from "react-router";

export default function CountryCard({
  name,
  flag,
  population,
  region,
  capital
}) {
  
  return (
    <Link className="country-card" to={ `/${name}`}>

      <div className="flag-container">
        {/* TODO: Display the country flag */}
        <img src={flag} alt={name + 'flag'} />
      </div>

      <div className="card-text">

        {/* TODO: Display country name */}
        <h3 className="card-title">{name}</h3>

        {/* TODO: Display population */}
        <p>
          <b>Population:{population} </b>
        </p>

        {/* TODO: Display region */}
        <p>
          <b>Region:{region} </b>
        </p>

        {/* TODO: Display capital */}
        <p>
          <b>Capital:{capital.length > 0 ? capital.map((p) => p.name) : "N/A"} </b> 
        </p>

      </div>
    </Link>
  )
}
