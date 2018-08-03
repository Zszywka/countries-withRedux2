//Komponent <Router> może przyjmować opcjonalny parametr routes.
//Dzięki temu, możemy wydzielić wszystkie tworzone route'y do osobnego pliku,
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navigation from './presentational/navigation.component';
//import nowych sciezek
import Home from './presentational/home.component';
import Contact from './presentational/contact.component';
import NotFound from './presentational/not-found.component';
//route odpowiedzialny za wyswietlanie listy panstw
import CountryFlagContainer from './containers/flag-container.component';
//wysietlenie konkretnego panstwa
import CountryDetailsContainer from './containers/country-details-container.component';
// export default (
//   //jest to wycięty fragment kodu z pliku src/index.js.
//   //Od tej chwili wszystkie route'y będą definiowane w tym pliku.
//   <Route path='/' component={Navigation}>
//   //wszystkie nowe sciezki sa tu
//     //przy każdym kolejnym poziomie zagnieżdżenia route'ów jest używanie komponentu <IndexRoute>.
//     //wtedy nie ma propsa path,automatycznie ma wartość ścieżki jego rodzica('/')
//     <IndexRoute component={Home}/>
//     <Route path='contact' component={Contact}/>
//     //ostatni ma byc z * oznacza dowolny adres
//     <Route path='*' component={NotFound}/>
//   </Route>
// );

export default (
  <Route path='/' component={Navigation}>
    <IndexRoute component={Home}/>
    //do wyswietlania wszytkich krajow
    // <Route path='countries' component={CountryFlagContainer}/>
    //do wyswietlania jednego kraju po id:Route path='country/:id' component={CountryDetailsContainer}/>
    //Stworzyliśmy komponent Route bez przekazywania do niego komponentu
    // Dzięki temu wydzieliliśmy wspólną ścieżkę, którą odziedziczą zagnieżdżone elementy:
    <Route path='countries'>
    //renderowany jako IndexRoute pod adresem rodzica: /countries
      <IndexRoute component={CountryFlagContainer}/>
    //odziedziczy czesc sciezki od rodzica /countries ale + od siebie /country/:id(/countries/country/:id)
    //gdzie id jest parametrem route parameter
      <Route path='country/:id' component={CountryDetailsContainer}/>
    </Route>
    <Route path='contact' component={Contact}/>
    <Route path='*' component={NotFound}/>
  </Route>
);
