import axios from 'axios';

export var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name   // similar to - name: name
  }
}


export var addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby   
  }
}

export var removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id   
  }
}


export var addMovie = (movie) => {
  return {
    type: 'ADD_MOVIE',
    ...movie  
  }
}

export var removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id   
  }
}


export var startLocationFetch = () => { 
  return {
    type: 'START_LOCATION_FETCH'
  }
}

export var completeLocationFetch = (url) => {
  return {
    type: 'COMPLETE_LOCATION_FETCH',
    url
  }
}

export var fetchLocation = () => {
  return (dispatch, getState) => {
    dispatch(startLocationFetch());

    axios.get('http://ipinfo.io/json').then((res) => {
        console.log(res);
        var loc = res.data.loc;
        var baseUrl = 'http://maps.google.com?q=';

        dispatch(completeLocationFetch(baseUrl + loc));
    });
  };

}
