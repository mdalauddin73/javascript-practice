const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))

}
const displayCountries = (countries) => {
    // const countiresContainer = document.getElementById('countries-container');
    // for (const country of countries) {
    //     const countryDiv = document.createElement('div');
    //     countryDiv.innerHTML = `
    //     <h3>Country Name: ${country.name.common}</h3>
    //     <p> ${country}</p>
    //     <p> ${country}</p>
    //     `;
    //     countiresContainer.appendChild(countryDiv);
    const countiresContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h3>Country Name: ${country.name.common}</h3>
        <p>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</p>
        <button onclick="loadCountryDetail('${country.cca2}')">Detail</button>
            `;
        countiresContainer.appendChild(countryDiv);
    });
}
const loadCountryDetail = (code) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log('get country detail', code)
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))

}
const displayCountryDetail = (country) => {
    console.log(country);
    const countryDetail = document.getElementById('country-detail')
    countryDetail.innerHTML = `
      <h2>Details: ${country.name.common}<h2>
      <img src="${country.flags.png}">
    `;
}

loadCountries();