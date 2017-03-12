var redux = require('redux');

console.log('Starting redux example');
    
// Name reducer and action generators
var nameReducer = (state = 'Anonymous', action) => {
  switch(action.type) {
    case 'CHANGE_NAME':
      return action.name; 
    default: 
      return state;
  }
};
var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name   // similar to - name: name
  }
}

// Hobby reducer and action generators
var hobbyId = 1;
var hobbiesReducer = (state = [], action) => {
  switch(action.type){
    case 'ADD_HOBBY':
      return [
        ...state, 
        {
            id: hobbyId++,
            hobby: action.hobby
        }
      ]
    case 'REMOVE_HOBBY':
      return state.filter((hobby)=> hobby.id !== action.id) 
    default: 
      return state; 
  }
};

var addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby   
  }
}

var removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id   
  }
}

// Movie reducer and action generators
var movieId = 1;
var moviesReducer = (state = [], action) => {
    switch(action.type){
      case 'ADD_MOVIE':
      return [
        ...state, 
        {
            id: movieId++,
            title: action.title,
            genre: action.genre
        }
      ]
    case 'REMOVE_MOVIE':
      return state.filter((item)=> item.id !== action.id) 
    default: 
      return state; 
  }

};

var addMovie = (movie) => {
  return {
    type: 'ADD_MOVIE',
    ...movie  
  }
}

var removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id   
  }
}


var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
});

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

store.dispatch(changeName('Andrew'));

store.dispatch(addHobby('running'));

store.dispatch(addHobby('walking'));

store.dispatch(removeHobby(2));

store.dispatch(addMovie({title: 'soome', genre: 'genre1'}));

store.dispatch(addMovie({title: 'so23ome', genre: 'genre3'}));

store.dispatch(removeMovie(1));

store.dispatch(changeName('Emily'));
