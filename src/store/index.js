import { createStore } from 'redux'; 
import { city } from './../reducers/city.js';

const initialState={cityid:'3693057'};
// const initialStateID={init:'345232'};

export const store= createStore(city,initialState,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

