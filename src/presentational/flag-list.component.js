import React from 'react';
import { Link } from 'react-router';
import CountryFlag from './flag.component';
//posiada props -> countries, to tablica obiektów (obiekt to 1 państwo)
//ma wyswietlac komponentu <CountryFlag> oraz przenosic na podstone panstwa
//iterujemy po tab z panstwami,
const CountryFlagList = (props) => (
  <div className="countries-list">
    {props.countries.map(country => {
      return (
        <div className="single-country" key={country.id}>
          <Link className='logo' to={'countries/country/' + country.id}>
            <CountryFlag country={country} />
          </Link>
        </div>
      )
    })}
  </div>
);

export default CountryFlagList;
//Iterowany obiekt o nazwie country jest przekazywany do propsa
//o tej samej nazwie w komponencie <CountryFlag>.
//Element ten jest opakowany przez komponent <Link>, dzięki czemu jest klikalny.
//link ma sciezke:/countries/country/:id

//key dodajesz w divie (na 1 element) a nie dopiero w linku
