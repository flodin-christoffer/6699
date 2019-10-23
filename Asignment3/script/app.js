//Init apiCall, ui
const apiCall = new ApiCall();
const ui = new UI();

// Search Input
const searchCountry = document.getElementById("searchCountry");

//Search input eventlistener
searchCountry.addEventListener("keyup", e => {
  //get input text
  const countryText = e.target.value;

  if (countryText !== "") {
    //Make http call
    apiCall.getCountries(countryText).then(data => {
      ui.showSearch(data.responseData);
    });
  }
});
