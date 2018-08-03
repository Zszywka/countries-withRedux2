// listowanie wszystkich dostępnych państw
export const GET_COUNTRIES = 'GET_COUNTRIES';
// wyświetlanie informacji o jednym państwie:
export const GET_COUNTRY = 'GET_COUNTRY';
// usuwanie państwa:
export const DELETE_COUNTRY = 'DELETE_COUNTRY';
// szukanie państwa po nazwie:
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES';
// wyświetlanie państw konkretnego kontynentu:
export const SET_CONTINENT = 'SET_CONTINENT';

//kreatory
export function getCountries() {
  return {
    type: GET_COUNTRIES
  };
}

export function getCountry(id) {
  return {
    type: GET_COUNTRY,
    id
  };
}

export function deleteCountry(id) {
  return {
    type: DELETE_COUNTRY,
    id
  };
}
//searchtext (substring -czesc wiekszego stringa)
export function searchCountries(searchText) {
  return {
    type: SEARCH_COUNTRIES,
    searchText
  };
}
//kazdy obiekt w tablicy zostanie wyszukany po polu continent i odfiltrowany
export function setContinent(name) {
  return {
    type: SET_CONTINENT,
    name
  };
}
