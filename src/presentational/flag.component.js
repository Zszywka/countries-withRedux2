import React from 'react';
//Poprawne wywołanie komponentu będzie wyglądać tak: <CountryFlag country={...} />,
//kropki charakteryzują jeden obiekt z tablicy państw w pliku data/countries.json
//odwolujemy sie przez propsy tylko do jednego z pol komponentu (imageURL)
const CountryFlag = (props) => (
  <div className="country-logo-wrapper">
    <img className="country-logo" src={props.country.imageUrl} alt="country photo" />
  </div>
);

export default CountryFlag;
