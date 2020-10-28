const API = (function(){
    const BASE_URL = "https://thinkful-list-api.herokuapp.com/sokoki";
//promises
    const listApiFetch = function(...args) {
// set up promise outside of scope
let error;
return fetch(...args)
.then(res => {
    if (!res.ok){
        error = {code: res.status};
        if (!res.headers.get('content-type').includes(.json)){
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
    })
    }
})