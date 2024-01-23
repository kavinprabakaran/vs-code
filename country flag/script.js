const fetch = require('node-fetch');

async function fetchCountryFlags() {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const countries = await response.json();

    countries.forEach(country => {
      const flag = country.flags.svg;
      console.log(flag);
    });
  } catch (error) {
    console.error('Error fetching country flags:', error);
  }
}

fetchCountryFlags();
