import { createStore } from 'redux';
import favoritesReducer from './Reducers';

const store = createStore(favoritesReducer);

export default store;
