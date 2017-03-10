import * as redux from 'redux';
// var redux = require('redux');
console.log('running redux todo app');

// reducer - pure function
var stateDefault = {searchText: '', showCompleted: false, todos: []};

var reducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      }
      break;
    default:
      return state;
  }
};

var store = redux.createStore(reducer);

// var currentState = store.getState();
console.log('currentState', store.getState());

store.dispatch({type: 'CHANGE_SEARCH_TEXT', searchText: 'new search text'});
console.log('new state', store.getState());
