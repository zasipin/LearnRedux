import * as redux from 'redux';
// var redux = require('redux');
console.log('running redux todo app');

// reducer - pure function
var stateDefault = {searchText: '', showCompleted: false, todos: []};

var reducer = (state = stateDefault, action) => {

  return state;
};

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState', currentState);
