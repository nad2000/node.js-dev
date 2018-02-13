const axios = require("axios");

const getExchageRate = (from, to) => axios.get(`https://api.fixer.io/latest?base=${from}`).then(resp => resp.data.rates[to]);

const getCountries = currecntyCode => axios.get(`https://restcountries.eu/rest/v2/currency/${currecntyCode}`).then(resp => resp.data.map(c => c.name));

const getExchageRateAsync = async(from, to) => {
  try {
    var resp = await axios.get(`https://api.fixer.io/latest?base=${from}`);
    var rate = resp.data.rates[to];
    if (!rate) throw new Error();
    return rate;
  } catch (e) {
    throw new Error(`Unable to get the exchange rate form "${from}" to "${to}".`);
  }

};

const getCountriesAsync = async currecntyCode => {
  try {
    var resp = await axios.get(`https://restcountries.eu/rest/v2/currency/${currecntyCode}`);
    return resp.data.map(c => c.name);
  } catch (e) {
    throw new Error(`Unable to get countries that user "${currecntyCode}".`);
  }
}

//getExchageRate('USD', "NZD").then(rate => console.log(rate));
// getCountries("USD").then(countries => console.log(countries));
// getCountries("NZD").then(countries => console.log(countries));

const convetCurrency = (from, to, amount) => {
  let countries;
  return getCountries(to).then(_countries => {
    countries = _countries;
    return getExchageRate(from, to);
  }).then(rate => {
    const exchangedAmount = amount * rate;
    return `${amount} ${from} is worth ${exchangedAmount} ${to}. ${to} can be used in ${countries.join(', ')}.`;
  });
};

const convetCurrencyAsync = async(from, to, amount) => {
  var countries = await getCountriesAsync(to);
  var rate = await getExchageRateAsync(from, to);
  var exchangedAmount = amount * rate;
  return `${amount} ${from} is worth ${exchangedAmount} ${to}. ${to} can be used in ${countries.join(', ')}.`;
};

//convetCurrencyAsync("CAD", "USD", 100).then(status => console.log(status));
// convetCurrency("CAD", "USD", 100).then(status => console.log(status));
convetCurrencyAsync("XXD", "CAD", 100).then(status => console.log(status)).catch(e => console.log(e));

