var redux = require('redux');

import * as actions from './actions/index';
import * as config from './store/configureStore';

var store = config.configure();

console.log('Starting redux example');
    



// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('state', state);
  // document.getElementById('app').innerHTML = state.name;

  if(state.map.isFetching){
    document.getElementById('app').innerHTML = 'Loading...';
  } else if(state.map.url){
    document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View your location</a>';
  }
});
// unsubscribe();

store.dispatch(actions.fetchLocation());

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(actions.changeName('Andrew'));

store.dispatch(actions.addHobby('running'));

store.dispatch(actions.addHobby('walking'));

store.dispatch(actions.removeHobby(2));

store.dispatch(actions.addMovie({title: 'soome', genre: 'genre1'}));

store.dispatch(actions.addMovie({title: 'so23ome', genre: 'genre3'}));

store.dispatch(actions.removeMovie(1));

store.dispatch(actions.changeName('Emily'));
