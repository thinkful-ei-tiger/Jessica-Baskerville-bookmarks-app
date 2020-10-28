const bookmarks =(function(){
  //error message template
  function generateError(message) {
    return;
    `<section class="error-content">
      <button id="cancel-error">X</button>
      <p>${message}</p>
    </section>`;
  }
  // create HTML for a bookmark object while using the keys to get values


  //render error function
  function renderError() {
    if (STORE.error) {
      const elem = generateError(STORE.error);
      $(`.error-container`).html(elem);
    }
    else{
      $(`.error-container`).empty();
    }
  }
  //cancel error to acknowledge
  function closeError(){
    $(`.error-container`).on('click', '#cancel-error', () => {
      STORE.setError(null);
      renderError(); 
    });
  }
});