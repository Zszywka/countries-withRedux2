import React from 'react';
import { render } from 'react-dom';
//provider->czyni on store dostępnym dla wszystkich zdefiniowanych w app komponentów
// kontenerowych bez konieczności jawnego przekazywania go do nich.
//osadzenie całego naszego drzewa DOM aplikacji w elemencie <Provider>
import { Provider } from 'react-redux';
import store from './store';
import DevTools from './DevTools';
//przekazac plik z akcjami
import { getCountries } from './actions/actions-countries';
//dodawanie routingu
import { Router, Route, hashHistory } from 'react-router';
// import Navigation from './presentational/navigation.component';
import routes from './routes';

//Komponent Provider może mieć tylko jednego potomka
//wystarczy umieścić dodatkowy element <div> wewnątrz <Provider> i w nim umieścić <DevTools/>i<h1>.
// render(
//   <Provider store={store}>
//     //routes={routes} odwoluje sie do wycietej tam czesci
//     <Router history={hashHistory} routes={routes}/>
//     //komponent Route odpowiedzialny za <Navigation>
//       //<Route path='/' component={Navigation}>
//       //pozostale routery beda def. tutaj->przez co pojawia sie we wlasciwosciach props.children
//       //</Route>
//   </Provider>
//   document.getElementById('root')
// );

// store.dispatch(getCountries());
render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes}/>
  </Provider>,
  document.getElementById('root')
);
