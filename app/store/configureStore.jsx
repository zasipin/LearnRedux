import * as redux from 'redux';
import * as reduxThunk from 'redux-thunk';
import { nameReducer, hobbiesReducer, moviesReducer, mapReducer } from './../reducers/index';

var thunk = reduxThunk.default;

export function configure(){
    var reducer = redux.combineReducers({
    name: nameReducer,
    hobbies: hobbiesReducer,
    movies: moviesReducer,
    map: mapReducer
    });

    var store = redux.createStore(reducer, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
} 