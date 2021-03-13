import {combineReducers} from 'redux';
import caluclator from './caluclator';

// combineReducersは複数あるreducerを一つにまとめてくれる
const reducer = combineReducers({caluclator})

export default reducer