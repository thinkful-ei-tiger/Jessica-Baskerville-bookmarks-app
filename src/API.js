const { post } = require("jquery");

const API = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/sokoki';
  //promises
  const ApiFetch = function(...args) {
    // set up promise outside of scope
    let error;
    return fetch(...args)
      .then(res => {
        if (!res.ok){
          error = {code: res.status};
          if (!res.headers.get('content-type').includes(json)){
            error.message = res.statusText;
            return promise.reject(error);
          }
        }
        return res.json();
      })
      .then(data =>{
        if (error){
          error.message = data.message;
          return Promise.reject(error);
        }
        //return as normal is no errors
        return data;
      });
  };
});

//GET functions
function getBookmarks(){
    return APIFetch(`${BASE_URL}/bookmarks`);
}

//POST functions
function addBookmark(){
    const newItem = JSON.stringify();
    return APIFetch(`${BASE_URL}/bookmarks`)
    method: 'POST';
}

//PATCH functions

//DELETE functions


//return functions for export
return{};
