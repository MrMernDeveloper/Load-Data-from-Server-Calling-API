const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
    .then(data =>displayCountries(data))
}


const displayCountries = countries => {
    // console.log(countries)
    const countryDiv = document.getElementById('countries-container');
    
    countries.forEach(country => {

        const singleCountry = document.createElement('div');
        singleCountry.classList.add('design')
        singleCountry.innerHTML = `
         <h5>Name: ${country.name.common}</h5>
         <h5>Area: ${country.area}</h5>
         <h5>capital: ${country.capital ? country.capital[0] : 'no Capital'}</h5>
         <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
        
        `
        
countryDiv.appendChild(singleCountry)
        
    });
}

const loadCountryDetails = code => {

    const url = `https://restcountries.com/v3.1/name/${code}`
    fetch(url)
        .then(res => res.json())
    .then(data=>displyCountyDetails(data[0]))
    
    
}

const displyCountyDetails = (details) => {
    console.log(details)
    const countryDetails = document.getElementById('country-details')
    const detailsDiv = document.createElement('div')
    detailsDiv.innerHTML = `
    <p> County Name:${details.name.common} </p>
    <p> County Flag: <img src="${details.flags.png}" alt=""> </p>
    `
    countryDetails.appendChild(detailsDiv);

    
}

loadCountries();