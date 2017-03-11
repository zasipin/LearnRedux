var redux = require('redux');

console.log('Starting redux example');

var hobbyId = 1,
    movieId = 1;
var stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
};

var reducer = (state = stateDefault, action) => {
  // state = state || {name: 'Anonymous'};

  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    case 'ADD_HOBBY':
        return {
          ...state,
          hobbies: [
            ...state.hobbies,
            {
              id: hobbyId++,
              hobby: action.hobby
            }
          ]
        }
    case 'REMOVE_HOBBY':
          return {
            ...state,
            hobbies: state.hobbies.filter((hobby)=> hobby.id !== action.id)
          }
    case 'ADD_MOVIE':
      return {
        ...state,
        movies: [
          ...state.movies,
          {
            id: movieId++,
            title: action.title,
            genre: action.genre
          }
        ]
      }
    case 'REMOVE_MOVIE':
            return {
              ...state,
              movies: state.hobbies.filter((item)=> item.id !== action.id)
            }
    default:
      return state;
  }
};
var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('state', state);
  document.getElementById('app').innerHTML = state.name;
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Andrew'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'running'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'walking'
});

store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 2
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'soome',
  genre: 'genre1'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'so12ome',
  genre: 'genre3'
});

store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 1
})

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Emily'
});
