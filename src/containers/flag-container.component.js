import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountryFlagList from '../presentational/flag-list.component';
import { getCountries, searchCountries, deleteCountry } from '../actions/actions-countries';

class CountryFlagContainer extends Component {
  constructor(props) {
    super(props);
  }
  //dwołujemy się do store'a za pomocą metody dispatch
  //pokazuje cala liste krajow
  // zawierają wywołania dispatch() służące do interakcji ze storem
  componentDidMount() {
    this.props.dispatch(getCountries());
    //linijka odpowiedzialną za wywołanie dispatcha z kreatorem searchCountries,
    //który wyszukuje pustego stringa(W każdej nazwie państwa znajduje się cokolwiek (pusty string),
    //dlatego za każdym razem po wejściu na tę stronę otrzymamy listę wszystkich dostępnych państw)
    this.props.dispatch(searchCountries(''));
  }
  //Każda funkcja przypisana do eventu może przyjąć jako pierwszy parametr informacje o evencie.
  //Wśród nich znajdzie się między innymi ta, która opisuje aktualną wartość pola input.
  //event.target.value to aktualnie wpisana frazę w elemencie <input>
  search(event) {
    this.props.dispatch(searchCountries(event.target.value));
  }
  //przekazanie deleteCountry jako props do komponentu CountryFlagList(flag-container.component.js)
  //Wywołuje ona jedynie dispatcha z odpowiednim kreatorem akcji(id-panstw do usuniecia)
  //Metoda ta przypisana jest do propsa o nazwie deleteCountry
  deleteCountry(id) {
    this.props.dispatch(deleteCountry(id));
  }

  //Stan aplikacji w polu countries->tablicę obiektów pobraną z pliku /data/countries.jsonv
  //input do wpisania frazy panstwa, onChange->sygnalizuje wywołanie akcji, jaką jest zmiana wartości pola.
  //gdy jest wywolana akcja z onChange, uruchamiana jest metoda search->wywoluje metodę dispatch z parametrem
  //jakim jest kreator akcji searchCountries, zdefiniowanej w pliku /src/actions/actions-countries.js.
  //<CountryFlagList countries={this.props.countries} /> -> listowanie wszytkich panstw
  //<CountryFlagList countries={this.props.visibleCountries} /> -> listowanie tylko wyszukanych panstw
  render() {
    return (
      <div>
        <div className='search text-center'>
          <input type="text" onChange={this.search.bind(this)}/>
        </div>
        <CountryFlagList countries={this.props.visibleCountries} deleteCountry={this.deleteCountry.bind(this)} />
      </div>
    )
  }
}
//tablica z krajami jest mapowana do propsa komponentu <CountryFlagContainer> {countries}
//i ten props {countries}przekazywany jako parametr do <CountryFlagContainer> w fla-list.components.js
const mapStateToProps = function (store) {
  return {
    countries: store.countriesReducer.countries,
    //Nasz komponent musi jeszcze zapisać w swoich propsach informacje o widocznych państwach
    //Wystarczy zmapować ją ze stanu aplikacji do propsa w funkcji mapStateToProps.
    visibleCountries: store.countriesReducer.visibleCountries
  };
};

export default connect(mapStateToProps)(CountryFlagContainer);
