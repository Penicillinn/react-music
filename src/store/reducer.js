import { combineReducers } from 'redux';
import {  RecommendReducer }from './recommend'
import { playReducer } from './player';
const reducer = combineReducers({
    RecommendReducer,
    playReducer
});
export default reducer;