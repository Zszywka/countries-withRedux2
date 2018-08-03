//reducer
//import akcji
import { GET_COUNTRIES, GET_COUNTRY, SEARCH_COUNTRIES, DELETE_COUNTRY } from '../actions/actions-countries';
//import danych o panstwach
import countriesData from '../data/countries.json';

const initialState = {
  //countries -opisuje wszystkie dostepne panstwa
  countries: countriesData,
  //pole charakteryzuje karte z panstwem ktore ma byc wyswietlone
  // które będzie opisywać wybrane do oglądania państwo
  //do podstrony wyswietlajacej dane o konkretnym panstwie
  //Pole selectedCountry na początku jest pustym obiektem,
  //ponieważ po starcie aplikacji żadne państwo nie zostaje wybrane automatycznie.
  selectedCountry: {},
  //tablica obiektów (państw), których pole name pokrywa się z wyszukiwaną frazą
  //to tablica ponieważ jednocześnie może być widocznych wiele państw.
  //visibleCountries: []
  visibleCountries: countriesData
};

//zabezp: gdy przekazania do reducera stanu aplikacji w stanie undefined
//zostanie do niego przypisana domyślna wartość initialState,
//a gdy przekazany nieznany typ akcji-> zwrocony obecny stan(return state)
const countriesReducer = function (state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
    //tworzy kopie obiektu state, do countries: przypisuje obecna wartosc tego pola
      return Object.assign({}, state, {countries: state.countries})

    case GET_COUNTRY:
    //Metoda find zwraca pierwszy znaleziony element, który spełnia warunek.
    //szukane jest państwo, które ma id = jak to, które przesłane jest w obiekcie action.
      const selectedCountry = state.countries.find(country => country.id === parseInt(action.id));
    //Następnie znaleziona wartość zostaje przypisana do nowo utworzonego stanu obiektu i zwracana,
    //aby nie mutować oryginalnego stanu
      return Object.assign({}, state, {selectedCountry});

    //Algorytm wyszukiwania państwa po wpisanej frazie
    case SEARCH_COUNTRIES:
      //przeszukiwania, czy w stringu występuje wskazany substring.
      //Na początek zamieniamy wszystkie znaki w nazwie państwa na małe litery (country.name.toLowerCase()),
      //a następnie za pomocą metody includes sprawdzamy, czy zawiera ona w sobie wyszukiwany ciąg znaków (action.searchText.toLowerCase())
      //również sprowadzony do małych liter. Metoda filter odpowiedzialna jest za to,
      //aby zapisać do stałej foundCountries tylko te elementy, które spełnią opisany powyżej warunek.
      const foundCountries = state.countries.filter(country => country.name.toLowerCase().includes(action.searchText.toLowerCase()));
      //tworzymy nowy obiekt za pomocą Object.assign() i przypisujemy do niego poprzedni stan aplikacji, w którym wartość pola visibleCountries będzie równa foundCountries.
      return Object.assign({}, state, {visibleCountries: foundCountries});

    case DELETE_COUNTRY:
    //usuwamy pasnwtwo z calej aplikacji
      const notDeletedCountries = state.countries.filter(country => country.id != action.id);
    //usuwamy panstwo z obecnie wyswietlanej listy panstw
      const notDeletedVisibleCountries = state.visibleCountries.filter(country => country.id != action.id);
      return Object.assign({}, state, {countries: notDeletedCountries, visibleCountries: notDeletedVisibleCountries});
  }
  return state;
};
//export reducera
export default countriesReducer;
