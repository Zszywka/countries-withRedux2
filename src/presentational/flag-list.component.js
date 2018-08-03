import React from 'react';
import { Link } from 'react-router';
import CountryFlag from './flag.component';
//posiada props -> countries, to tablica obiektów (obiekt to 1 państwo)
//ma wyswietlac komponentu <CountryFlag> oraz przenosic na podstone panstwa
//iterujemy po tab z panstwami,
//button(przypisanie do eventu onClick metody deleteCountry przesłanej za pomocą propsów)
//Funkcja ta przyjmuje jeden parametr, ale wywołanie jej przy pomocy użycia metody bind
// zmusza nas do przekazania dodatkowego parametru jakim jest context, pod który będzie
//w tej funkcji wskazywać słowo kluczowe this. Nie interesuje on nas w tym przypadku, więc
// możemy ustawić go na wartość null. Dla nas najważniejsze jest, aby przekazać odpowiednio
// id klikniętego państwa, dlatego drugi argument ustawiamy na wartość country.id.
const CountryFlagList = (props) => (
  <div className="countries-list">
    {props.countries.map(country => {
      return (
        <div className="single-country" key={country.id}>
          <Link className='logo' to={'countries/country/' + country.id}>
            <CountryFlag country={country} />
          </Link>
          <button onClick={props.deleteCountry.bind(null, country.id)}>DELETE</button>
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
