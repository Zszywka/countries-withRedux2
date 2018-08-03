import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountryFlagList from '../presentational/flag-list.component';
import { getCountries } from '../actions/actions-countries';

class CountryFlagContainer extends Component {
  constructor(props) {
    super(props);
  }
  //dwołujemy się do store'a za pomocą metody dispatch
  //pokazuje cala liste krajow
  // zawierają wywołania dispatch() służące do interakcji ze storem
  componentDidMount() {
    this.props.dispatch(getCountries());
  }

  //Stan aplikacji w polu countries->tablicę obiektów pobraną z pliku /data/countries.jsonv
  render() {
    return (
      <div>
        <CountryFlagList countries={this.props.countries} />
      </div>
    )
  }
}
//tablica z krajami jest mapowana do propsa komponentu <CountryFlagContainer> {countries}
//i ten props {countries}przekazywany jako parametr do <CountryFlagContainer> w fla-list.components.js 
const mapStateToProps = function (store) {
  return {
    countries: store.countriesReducer.countries
  };
};

export default connect(mapStateToProps)(CountryFlagContainer);
