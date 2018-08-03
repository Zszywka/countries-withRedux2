//dodanie store'a
import { createStore, combineReducers } from 'redux';
import reducers from '../reducers/index';
import DevTools from '../DevTools';

//przekazać reducer jako argument funkcji createStore,
const store = createStore(
  reducers,
  DevTools.instrument()
);
//następnie go wyeksportować
export default store;
