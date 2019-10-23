class ApiCall {
  // API CALL
  async getCountries(country) {
    const response = await fetch(
      `https://restcountries.eu/rest/v2/name/${country}`
    );
    const responseData = await response.json();
    return {
      responseData
    };
  }
}
