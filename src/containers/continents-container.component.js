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

  componentDidMount() {
    this.props.dispatch(setContinent('Europa'));
  }

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
