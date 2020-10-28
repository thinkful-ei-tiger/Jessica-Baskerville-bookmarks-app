const STORE = (function(){
  const setError = function(error){
    this.error = error;
  };
    // find by ID 
    //addbookmark
    //updatebookmark
    //deletebookmarks

    function renderError(){
        if (STORE.error) {
            const elem = generateError(STORE.error);
            $(`.error-container`).html(elem);
        } else
    }
});