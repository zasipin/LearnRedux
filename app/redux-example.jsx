import * as redux from 'redux';
// var redux = require('redux');
console.log('running redux app');

// reducer - pure function
var reducer = (state = {name: 'Anonymous'}, action) => {
  // state = state || {name: 'Anonymous'};
  return state;
};

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState', currentState);

// // pure function
// function add(a, b){
//   return a + b;
// }
//
// function changeProp(obj){
//   return {
//     ...obj,
//     name: 'Jen'
//   }
// }
//
// var startingValue = {
//   name: 'Andrew',
//   age: 27
// }
//
// var res = changeProp(startingValue);
// console.log(startingValue);
// console.log(res);
