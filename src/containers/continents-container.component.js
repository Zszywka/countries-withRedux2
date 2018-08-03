//ędzie on posiadał rozwijaną listę (ang. dropdown), z której będzie można
//wybrać jeden z dwóch dostępnych kontynentów.
//Domyślnie ustawioną wartością będzie ta, która wskazuje na Europę.
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setContinent, deleteCountry } from '../actions/actions-countries';
import CountryFlagList from '../presentational/flag-list.component';

class ContinentsContainer extends Component {
  constructor(props) {
    super(props);
  }

  chooseContinent(event) {
    this.props.dispatch(setContinent(event.target.value))
  }

  deleteCountry(id) {
    this.props.dispatch(deleteCountry(id));
  }
  //wywoływany jest dispatch z kreatorem setContinent
  //Przyjmuje on zawsze ten sam parametr - Europa,
  //dlatego państwa z tego kontynentu są widoczne, gdy wchodzimy na tę podstronę.
  componentDidMount() {
    this.props.dispatch(setContinent('Europa'));
  }
//element <select>, który przyjmuje wartości naszych dwóch państw.(pasek rozwijania)
//do eventu onChange została przypisana stworzona przez nas metoda chooseContinent,
// która jako argument przyjmuje event. Zawarta jest w nim informacja o aktualnie
//wybranym kontynencie z pola <select> i przekazywana jest ona jako wartość parametru
//do kreatora akcji setContinent
//Do komponentu <CountryFlagList> przekazywane są jako propsy: lista widocznych państw
//oraz funkcja deleteCountry, która umożliwia nam usunięcie wskazanego państwa.
  render() {
    return (
      <div>
        <select onChange={e => this.chooseContinent(e)}>
          <option value="Europa">Europa</option>
          <option value="Afryka">Afryka</option>
          <option value="Ameryka Północna">Ameryka Północna</option>
          <option value="Ameryka Południowa">Ameryka Południowa</option>
          <option value="Antarktyda">Antarktyda</option>
          <option value="Australia">Australia</option>
          <option value="Azja">Azja</option>
        </select>
        <CountryFlagList countries={this.props.visibleCountries} deleteCountry={this.deleteCountry.bind(this)} />
      </div>
    )
  }
}

const mapStateToProps = function (store) {
    return {
        visibleCountries: store.countriesReducer.visibleCountries
    };
};

export default connect(mapStateToProps)(ContinentsContainer);
