import {combineReducers} from 'redux';
import albums from './albums';
import filter from './filter';

export default combineReducers({
  albums,
  filter
});
