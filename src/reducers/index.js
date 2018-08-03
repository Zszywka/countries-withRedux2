//scalenie ze soba reducerow
import { combineReducers } from 'redux';
//ten reducer laczymy (z jakims jaki chcemy jeszcze dodac, akurat tu jest tylko 1)-> taka dobra praktyka
import countriesReducer  from './countries-reducer';

//metoda combineReducers(do laczenia reducerow)
const reducers = combineReducers({
    countriesReducer
});

export default reducers;
