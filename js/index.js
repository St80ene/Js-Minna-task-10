window.onload = function () {
  document.querySelector('body').style.visibility = 'hidden';
  document.querySelector('#loader').style.visibility = 'visible';

  const card = (
    name,
    capital,
    nativeName,
    callingCodes,
    population,
    region,
    timezones,
    flag
  ) => `<div class="card" id="card">
  <h2 class="name">${name}</h2>
  <p class="capital">Capital: ${capital}</p>
  <p class="language">Native Name: ${nativeName}</p>
  <p class="currency">Calling Codes: ${callingCodes}</p>
  <p class="timeZone">Population: ${population}</p>
  <p class="region">Region: ${region}</p>
  <p class="timeZone">Time-Zone:${timezones}</p>
  <img class="flag" src="${flag}" alt="CountryName flag" srcset="" />
</div>`;

  const API = `https://restcountries.eu/rest/v2/all`;
  fetch(API)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let container = '';
      data.forEach((item) => {
        const {
          name,
          capital,
          nativeName,
          callingCodes,
          population,
          region,
          timezones,
          flag,
        } = item;

        container += card(
          name,
          capital,
          nativeName,
          callingCodes,
          population,
          region,
          timezones,
          flag
        );

        console.log(item.currencies);

        document.getElementById('card-container').innerHTML = container;
      });
    })
    .catch((err) => {
      document.getElementById('card-container').innerHTML = `<div class="error">
      <h2>${err.message}</h2>
      </div>`;
    })
    .finally((_) => {
      document.querySelector('#loader').style.display = 'none';
      document.querySelector('body').style.visibility = 'visible';
    });
};
