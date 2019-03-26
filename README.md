# Intrinio JavaScript SDK

To get an API key, [sign up here](https://intrinio.com/).

Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.

- API version: 2.5.0
- Package version: 2.2.0


## Installation

```shell
npm install intrinio-sdk --save
```

## Installation from Github

```shell
npm install intrinio/javascript-sdk --save
```

## Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error: Cannot resolve module", most certainly you should disable AMD loader. Add/merge the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## SDK Code Examples

Code examples for Intrinio SDKs are available at https://github.com/intrinio/sdk-code-samples

## Getting Started

Please follow the [installation](#installation) instructions and execute the following JS code:

```javascript
var intrinioSDK = require('intrinio-sdk');
const util = require('util')
 
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";
 
var companyAPI = new intrinioSDK.CompanyApi()
 
companyAPI.getAllCompanies().then(function(data) {
  console.log(util.inspect(data, false, null, true));
}, function(error) {
  console.error(error);
});
```

## Documentation for API Endpoints

All URIs are relative to *https://api-v2.intrinio.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*intrinioSDK.CompanyApi* | [**getAllCompanies**](docs/CompanyApi.md#getAllCompanies) | **GET** /companies | All Companies
*intrinioSDK.CompanyApi* | [**getAllCompanyNews**](docs/CompanyApi.md#getAllCompanyNews) | **GET** /companies/news | All News
*intrinioSDK.CompanyApi* | [**getCompany**](docs/CompanyApi.md#getCompany) | **GET** /companies/{identifier} | Lookup Company
*intrinioSDK.CompanyApi* | [**getCompanyDataPointNumber**](docs/CompanyApi.md#getCompanyDataPointNumber) | **GET** /companies/{identifier}/data_point/{tag}/number | Data Point (Number) for Company
*intrinioSDK.CompanyApi* | [**getCompanyDataPointText**](docs/CompanyApi.md#getCompanyDataPointText) | **GET** /companies/{identifier}/data_point/{tag}/text | Data Point (Text) for Company
*intrinioSDK.CompanyApi* | [**getCompanyFilings**](docs/CompanyApi.md#getCompanyFilings) | **GET** /companies/{identifier}/filings | All Filings by Company
*intrinioSDK.CompanyApi* | [**getCompanyFundamentals**](docs/CompanyApi.md#getCompanyFundamentals) | **GET** /companies/{identifier}/fundamentals | All Fundamentals by Company
*intrinioSDK.CompanyApi* | [**getCompanyHistoricalData**](docs/CompanyApi.md#getCompanyHistoricalData) | **GET** /companies/{identifier}/historical_data/{tag} | Historical Data for Company
*intrinioSDK.CompanyApi* | [**getCompanyNews**](docs/CompanyApi.md#getCompanyNews) | **GET** /companies/{identifier}/news | All News by Company
*intrinioSDK.CompanyApi* | [**getCompanySecurities**](docs/CompanyApi.md#getCompanySecurities) | **GET** /companies/{identifier}/securities | All Securities by Company
*intrinioSDK.CompanyApi* | [**lookupCompanyFundamental**](docs/CompanyApi.md#lookupCompanyFundamental) | **GET** /companies/{identifier}/fundamentals/lookup/{statement_code}/{fiscal_year}/{fiscal_period} | Lookup Fundamental by Company
*intrinioSDK.CompanyApi* | [**searchCompanies**](docs/CompanyApi.md#searchCompanies) | **GET** /companies/search | Search Companies
*intrinioSDK.CryptoApi* | [**getCryptoBookAsks**](docs/CryptoApi.md#getCryptoBookAsks) | **GET** /crypto/book/asks | Crypto Book Asks
*intrinioSDK.CryptoApi* | [**getCryptoBookBids**](docs/CryptoApi.md#getCryptoBookBids) | **GET** /crypto/book/bids | Crypto Book Bids
*intrinioSDK.CryptoApi* | [**getCryptoBookSummary**](docs/CryptoApi.md#getCryptoBookSummary) | **GET** /crypto/book | Crypto Book Summary
*intrinioSDK.CryptoApi* | [**getCryptoCurrencies**](docs/CryptoApi.md#getCryptoCurrencies) | **GET** /crypto/currencies | Crypto Currencies
*intrinioSDK.CryptoApi* | [**getCryptoExchanges**](docs/CryptoApi.md#getCryptoExchanges) | **GET** /crypto/exchanges | Crypto Exchanges
*intrinioSDK.CryptoApi* | [**getCryptoPairs**](docs/CryptoApi.md#getCryptoPairs) | **GET** /crypto/pairs | Crypto Pairs
*intrinioSDK.CryptoApi* | [**getCryptoPrices**](docs/CryptoApi.md#getCryptoPrices) | **GET** /crypto/prices | Crypto Prices
*intrinioSDK.CryptoApi* | [**getCryptoSnapshot**](docs/CryptoApi.md#getCryptoSnapshot) | **GET** /crypto/snapshot | Crypto Snapshot
*intrinioSDK.CryptoApi* | [**getCryptoStats**](docs/CryptoApi.md#getCryptoStats) | **GET** /crypto/stats | Crypto Stats
*intrinioSDK.DataPointApi* | [**getDataPointNumber**](docs/DataPointApi.md#getDataPointNumber) | **GET** /data_point/{identifier}/{tag}/number | Data Point (Number)
*intrinioSDK.DataPointApi* | [**getDataPointText**](docs/DataPointApi.md#getDataPointText) | **GET** /data_point/{identifier}/{tag}/text | Data Point (Text)
*intrinioSDK.DataTagApi* | [**getAllDataTags**](docs/DataTagApi.md#getAllDataTags) | **GET** /data_tags | All Data Tags
*intrinioSDK.DataTagApi* | [**getDataTagById**](docs/DataTagApi.md#getDataTagById) | **GET** /data_tags/{identifier} | Lookup Data Tag
*intrinioSDK.DataTagApi* | [**searchDataTags**](docs/DataTagApi.md#searchDataTags) | **GET** /data_tags/search | Search Data Tags
*intrinioSDK.FilingApi* | [**getAllFilings**](docs/FilingApi.md#getAllFilings) | **GET** /filings | All Filings
*intrinioSDK.FilingApi* | [**getAllNotes**](docs/FilingApi.md#getAllNotes) | **GET** /filings/notes | All Filing Notes
*intrinioSDK.FilingApi* | [**getFilingById**](docs/FilingApi.md#getFilingById) | **GET** /filings/{id} | Lookup Filing
*intrinioSDK.FilingApi* | [**getNote**](docs/FilingApi.md#getNote) | **GET** /filings/notes/{identifier} | Filing Note by ID
*intrinioSDK.FilingApi* | [**getNoteHtml**](docs/FilingApi.md#getNoteHtml) | **GET** /filings/notes/{identifier}/html | Filing Note HTML
*intrinioSDK.FilingApi* | [**getNoteText**](docs/FilingApi.md#getNoteText) | **GET** /filings/notes/{identifier}/text | Filing Note Text
*intrinioSDK.FilingApi* | [**searchNotes**](docs/FilingApi.md#searchNotes) | **GET** /filings/notes/search | Search Filing Notes
*intrinioSDK.ForexApi* | [**getForexCurrencies**](docs/ForexApi.md#getForexCurrencies) | **GET** /forex/currencies | Forex Currencies
*intrinioSDK.ForexApi* | [**getForexPairs**](docs/ForexApi.md#getForexPairs) | **GET** /forex/pairs | Forex Currency Pairs
*intrinioSDK.ForexApi* | [**getForexPrices**](docs/ForexApi.md#getForexPrices) | **GET** /forex/prices/{pair}/{timeframe} | Forex Currency Prices
*intrinioSDK.FundamentalsApi* | [**getFundamentalById**](docs/FundamentalsApi.md#getFundamentalById) | **GET** /fundamentals/{id} | Fundamental by ID
*intrinioSDK.FundamentalsApi* | [**getFundamentalReportedFinancials**](docs/FundamentalsApi.md#getFundamentalReportedFinancials) | **GET** /fundamentals/{id}/reported_financials | Reported Financials
*intrinioSDK.FundamentalsApi* | [**getFundamentalStandardizedFinancials**](docs/FundamentalsApi.md#getFundamentalStandardizedFinancials) | **GET** /fundamentals/{id}/standardized_financials | Standardized Financials
*intrinioSDK.FundamentalsApi* | [**lookupFundamental**](docs/FundamentalsApi.md#lookupFundamental) | **GET** /fundamentals/lookup/{identifier}/{statement_code}/{fiscal_year}/{fiscal_period} | Lookup Fundamental
*intrinioSDK.HistoricalDataApi* | [**getHistoricalData**](docs/HistoricalDataApi.md#getHistoricalData) | **GET** /historical_data/{identifier}/{tag} | Historical Data
*intrinioSDK.IndexApi* | [**getAllEconomicIndices**](docs/IndexApi.md#getAllEconomicIndices) | **GET** /indices/economic | All Economic Indices
*intrinioSDK.IndexApi* | [**getAllSicIndices**](docs/IndexApi.md#getAllSicIndices) | **GET** /indices/sic | All SIC Indices
*intrinioSDK.IndexApi* | [**getAllStockMarketIndices**](docs/IndexApi.md#getAllStockMarketIndices) | **GET** /indices/stock_market | All Stock Market Indices
*intrinioSDK.IndexApi* | [**getEconomicIndexById**](docs/IndexApi.md#getEconomicIndexById) | **GET** /indices/economic/{identifier} | Lookup Economic Index
*intrinioSDK.IndexApi* | [**getEconomicIndexDataPointNumber**](docs/IndexApi.md#getEconomicIndexDataPointNumber) | **GET** /indices/economic/{identifier}/data_point/{tag}/number | Data Point (Number) for an Economic Index
*intrinioSDK.IndexApi* | [**getEconomicIndexDataPointText**](docs/IndexApi.md#getEconomicIndexDataPointText) | **GET** /indices/economic/{identifier}/data_point/{tag}/text | Data Point (Text) for an Economic Index
*intrinioSDK.IndexApi* | [**getEconomicIndexHistoricalData**](docs/IndexApi.md#getEconomicIndexHistoricalData) | **GET** /indices/economic/{identifier}/historical_data/{tag} | Historical Data for an Economic Index
*intrinioSDK.IndexApi* | [**getSicIndexById**](docs/IndexApi.md#getSicIndexById) | **GET** /indices/sic/{identifier} | Lookup SIC Index
*intrinioSDK.IndexApi* | [**getSicIndexDataPointNumber**](docs/IndexApi.md#getSicIndexDataPointNumber) | **GET** /indices/sic/{identifier}/data_point/{tag}/number | Data Point (Number) for an SIC Index
*intrinioSDK.IndexApi* | [**getSicIndexDataPointText**](docs/IndexApi.md#getSicIndexDataPointText) | **GET** /indices/sic/{identifier}/data_point/{tag}/text | Data Point (Text) for an SIC Index
*intrinioSDK.IndexApi* | [**getSicIndexHistoricalData**](docs/IndexApi.md#getSicIndexHistoricalData) | **GET** /indices/sic/{identifier}/historical_data/{tag} | Historical Data for an SIC Index
*intrinioSDK.IndexApi* | [**getStockMarketIndexById**](docs/IndexApi.md#getStockMarketIndexById) | **GET** /indices/stock_market/{identifier} | Lookup Stock Market Index
*intrinioSDK.IndexApi* | [**getStockMarketIndexDataPointNumber**](docs/IndexApi.md#getStockMarketIndexDataPointNumber) | **GET** /indices/stock_market/{identifier}/data_point/{tag}/number | Data Point (Number) for Stock Market Index
*intrinioSDK.IndexApi* | [**getStockMarketIndexDataPointText**](docs/IndexApi.md#getStockMarketIndexDataPointText) | **GET** /indices/stock_market/{identifier}/data_point/{tag}/text | Data Point (Text) for Stock Market Index
*intrinioSDK.IndexApi* | [**getStockMarketIndexHistoricalData**](docs/IndexApi.md#getStockMarketIndexHistoricalData) | **GET** /indices/stock_market/{identifier}/historical_data/{tag} | Historical Data for Stock Market Index
*intrinioSDK.IndexApi* | [**searchEconomicIndices**](docs/IndexApi.md#searchEconomicIndices) | **GET** /indices/economic/search | Search Economic Indices
*intrinioSDK.IndexApi* | [**searchSicIndices**](docs/IndexApi.md#searchSicIndices) | **GET** /indices/sic/search | Search SIC Indices
*intrinioSDK.IndexApi* | [**searchStockMarketsIndices**](docs/IndexApi.md#searchStockMarketsIndices) | **GET** /indices/stock_market/search | Search Stock Market Indices
*intrinioSDK.MunicipalityApi* | [**getAllMunicipalities**](docs/MunicipalityApi.md#getAllMunicipalities) | **GET** /municipalities | All Municipalities
*intrinioSDK.MunicipalityApi* | [**getMunicipalityById**](docs/MunicipalityApi.md#getMunicipalityById) | **GET** /municipalities/{id} | Municipality by ID
*intrinioSDK.MunicipalityApi* | [**getMunicipalityFinancials**](docs/MunicipalityApi.md#getMunicipalityFinancials) | **GET** /municipalities/{id}/financials | Financials for a Municipality
*intrinioSDK.OptionsApi* | [**getOptions**](docs/OptionsApi.md#getOptions) | **GET** /options/{symbol} | Options
*intrinioSDK.OptionsApi* | [**getOptionsChain**](docs/OptionsApi.md#getOptionsChain) | **GET** /options/chain/{symbol}/{expiration} | Options Chain
*intrinioSDK.OptionsApi* | [**getOptionsExpirations**](docs/OptionsApi.md#getOptionsExpirations) | **GET** /options/expirations/{symbol} | Options Expirations
*intrinioSDK.OptionsApi* | [**getOptionsPrices**](docs/OptionsApi.md#getOptionsPrices) | **GET** /options/prices/{identifier} | Option Prices
*intrinioSDK.SecurityApi* | [**getAllSecurities**](docs/SecurityApi.md#getAllSecurities) | **GET** /securities | All Securities
*intrinioSDK.SecurityApi* | [**getSecurityById**](docs/SecurityApi.md#getSecurityById) | **GET** /securities/{identifier} | Lookup Security
*intrinioSDK.SecurityApi* | [**getSecurityDataPointNumber**](docs/SecurityApi.md#getSecurityDataPointNumber) | **GET** /securities/{identifier}/data_point/{tag}/number | Data Point (Number) for Security
*intrinioSDK.SecurityApi* | [**getSecurityDataPointText**](docs/SecurityApi.md#getSecurityDataPointText) | **GET** /securities/{identifier}/data_point/{tag}/text | Data Point (Text) for Security
*intrinioSDK.SecurityApi* | [**getSecurityHistoricalData**](docs/SecurityApi.md#getSecurityHistoricalData) | **GET** /securities/{identifier}/historical_data/{tag} | Historical Data for Security
*intrinioSDK.SecurityApi* | [**getSecurityIntradayPrices**](docs/SecurityApi.md#getSecurityIntradayPrices) | **GET** /securities/{identifier}/prices/intraday | Intraday Stock Prices for Security
*intrinioSDK.SecurityApi* | [**getSecurityLatestDividendRecord**](docs/SecurityApi.md#getSecurityLatestDividendRecord) | **GET** /securities/{identifier}/dividends/latest | Lastest Dividend Record for Security
*intrinioSDK.SecurityApi* | [**getSecurityLatestEarningsRecord**](docs/SecurityApi.md#getSecurityLatestEarningsRecord) | **GET** /securities/{identifier}/earnings/latest | Lastest Earnings Record for Security
*intrinioSDK.SecurityApi* | [**getSecurityPriceTechnicalsAdi**](docs/SecurityApi.md#getSecurityPriceTechnicalsAdi) | **GET** /securities/{identifier}/prices/technicals/adi | Accumulation/Distribution Index
*intrinioSDK.SecurityApi* | [**getSecurityPriceTechnicalsAdtv**](docs/SecurityApi.md#getSecurityPriceTechnicalsAdtv) | **GET** /securities/{identifier}/prices/technicals/adtv | Average Daily Trading Volume
*intrinioSDK.SecurityApi* | [**getSecurityPriceTechnicalsAdx**](docs/SecurityApi.md#getSecurityPriceTechnicalsAdx) | **GET** /securities/{identifier}/prices/technicals/adx | Average Directional Index
*intrinioSDK.SecurityApi* | [**getSecurityPriceTechnicalsAo**](docs/SecurityApi.md#getSecurityPriceTechnicalsAo) | **GET** /securities/{identifier}/prices/technicals/ao | Awesome Oscillator
*intrinioSDK.SecurityApi* | [**getSecurityPriceTechnicalsAtr**](docs/SecurityApi.md#getSecurityPriceTechnicalsAtr) | **GET** /securities/{identifier}/prices/technicals/atr | Average True Range
*intrinioSDK.SecurityApi* | [**getSecurityPriceTechnicalsBb**](docs/SecurityApi.md#getSecurityPriceTechnicalsBb) | **GET** /securities/{identifier}/prices/technicals/bb | Bollinger Bands
*intrinioSDK.SecurityApi* | [**getSecurityPriceTechnicalsCci**](docs/SecurityApi.md#getSecurityPriceTechnicalsCci) | **GET** /securities/{identifier}/prices/technicals/cci | Commodity Channel Index
*intrinioSDK.SecurityApi* | [**getSecurityPriceTechnicalsCmf**](docs/SecurityApi.md#getSecurityPriceTechnicalsCmf) | **GET** /securities/{identifier}/prices/technicals/cmf | Chaikin Money Flow
*intrinioSDK.SecurityApi* | [**getSecurityPriceTechnicalsDc**](docs/SecurityApi.md#getSecurityPriceTechnicalsDc) | **GET** /securities/{identifier}/prices/technicals/dc | Donchian Channel
*intrinioSDK.SecurityApi* | [**getSecurityPriceTechnicalsDpo**](docs/SecurityApi.md#getSecurityPriceTechnicalsDpo) | **GET** /securities/{identifier}/prices/technicals/dpo | Detrended Price Oscillator
*intrinioSDK.SecurityApi* | [**getSecurityPriceTechnicalsEom**](docs/SecurityApi.md#getSecurityPriceTechnicalsEom) | **GET** /securities/{identifier}/prices/technicals/eom | Ease of Movement
*intrinioSDK.SecurityApi* | [**getSecurityPriceTechnicalsFi**](docs/SecurityApi.md#getSecurityPriceTechnicalsFi) | **GET** /securities/{identifier}/prices/technicals/fi | Force Index
*intrinioSDK.SecurityApi* | [**getSecurityPriceTechnicalsIchimoku**](docs/SecurityApi.md#getSecurityPriceTechnicalsIchimoku) | **GET** /securities/{identifier}/prices/technicals/ichimoku | Ichimoku Kinko Hyo
*intrinioSDK.SecurityApi* | [**getSecurityPriceTechnicalsKc**](docs/SecurityApi.md#getSecurityPriceTechnicalsKc) | **GET** /securities/{identifier}/prices/technicals/kc | Keltner Channel
*intrinioSDK.SecurityApi* | [**getSecurityPriceTechnicalsKst**](docs/SecurityApi.md#getSecurityPriceTechnicalsKst) | **GET** /securities/{identifier}/prices/technicals/kst | Know Sure Thing
*intrinioSDK.SecurityApi* | [**getSecurityPriceTechnicalsMacd**](docs/SecurityApi.md#getSecurityPriceTechnicalsMacd) | **GET** /securities/{identifier}/prices/technicals/macd | Moving Average Convergence Divergence
*intrinioSDK.SecurityApi* | [**getSecurityPriceTechnicalsMfi**](docs/SecurityApi.md#getSecurityPriceTechnicalsMfi) | **GET** /securities/{identifier}/prices/technicals/mfi | Money Flow Index
*intrinioSDK.SecurityApi* | [**getSecurityPriceTechnicalsMi**](docs/SecurityApi.md#getSecurityPriceTechnicalsMi) | **GET** /securities/{identifier}/prices/technicals/mi | Mass Index
*intrinioSDK.SecurityApi* | [**getSecurityPriceTechnicalsNvi**](docs/SecurityApi.md#getSecurityPriceTechnicalsNvi) | **GET** /securities/{identifier}/prices/technicals/nvi | Negative Volume Index
*intrinioSDK.SecurityApi* | [**getSecurityPriceTechnicalsObv**](docs/SecurityApi.md#getSecurityPriceTechnicalsObv) | **GET** /securities/{identifier}/prices/technicals/obv | On-balance Volume
*intrinioSDK.SecurityApi* | [**getSecurityPriceTechnicalsObvMean**](docs/SecurityApi.md#getSecurityPriceTechnicalsObvMean) | **GET** /securities/{identifier}/prices/technicals/obv_mean | On-balance Volume Mean
*intrinioSDK.SecurityApi* | [**getSecurityPriceTechnicalsRsi**](docs/SecurityApi.md#getSecurityPriceTechnicalsRsi) | **GET** /securities/{identifier}/prices/technicals/rsi | Relative Strength Index
*intrinioSDK.SecurityApi* | [**getSecurityPriceTechnicalsSma**](docs/SecurityApi.md#getSecurityPriceTechnicalsSma) | **GET** /securities/{identifier}/prices/technicals/sma | Simple Moving Average
*intrinioSDK.SecurityApi* | [**getSecurityPriceTechnicalsSr**](docs/SecurityApi.md#getSecurityPriceTechnicalsSr) | **GET** /securities/{identifier}/prices/technicals/sr | Stochastic Oscillator
*intrinioSDK.SecurityApi* | [**getSecurityPriceTechnicalsTrix**](docs/SecurityApi.md#getSecurityPriceTechnicalsTrix) | **GET** /securities/{identifier}/prices/technicals/trix | Triple Exponential Average
*intrinioSDK.SecurityApi* | [**getSecurityPriceTechnicalsTsi**](docs/SecurityApi.md#getSecurityPriceTechnicalsTsi) | **GET** /securities/{identifier}/prices/technicals/tsi | True Strength Index
*intrinioSDK.SecurityApi* | [**getSecurityPriceTechnicalsUo**](docs/SecurityApi.md#getSecurityPriceTechnicalsUo) | **GET** /securities/{identifier}/prices/technicals/uo | Ultimate Oscillator
*intrinioSDK.SecurityApi* | [**getSecurityPriceTechnicalsVi**](docs/SecurityApi.md#getSecurityPriceTechnicalsVi) | **GET** /securities/{identifier}/prices/technicals/vi | Vortex Indicator
*intrinioSDK.SecurityApi* | [**getSecurityPriceTechnicalsVpt**](docs/SecurityApi.md#getSecurityPriceTechnicalsVpt) | **GET** /securities/{identifier}/prices/technicals/vpt | Volume-price Trend
*intrinioSDK.SecurityApi* | [**getSecurityPriceTechnicalsVwap**](docs/SecurityApi.md#getSecurityPriceTechnicalsVwap) | **GET** /securities/{identifier}/prices/technicals/vwap | Volume Weighted Average Price
*intrinioSDK.SecurityApi* | [**getSecurityPriceTechnicalsWr**](docs/SecurityApi.md#getSecurityPriceTechnicalsWr) | **GET** /securities/{identifier}/prices/technicals/wr | Williams %R
*intrinioSDK.SecurityApi* | [**getSecurityRealtimePrice**](docs/SecurityApi.md#getSecurityRealtimePrice) | **GET** /securities/{identifier}/prices/realtime | Realtime Stock Price for Security
*intrinioSDK.SecurityApi* | [**getSecurityStockPriceAdjustments**](docs/SecurityApi.md#getSecurityStockPriceAdjustments) | **GET** /securities/{identifier}/prices/adjustments | Stock Price Adjustments by Security
*intrinioSDK.SecurityApi* | [**getSecurityStockPrices**](docs/SecurityApi.md#getSecurityStockPrices) | **GET** /securities/{identifier}/prices | Stock Prices by Security
*intrinioSDK.SecurityApi* | [**screenSecurities**](docs/SecurityApi.md#screenSecurities) | **POST** /securities/screen | Screen Securities
*intrinioSDK.SecurityApi* | [**searchSecurities**](docs/SecurityApi.md#searchSecurities) | **GET** /securities/search | Search Securities
*intrinioSDK.StockExchangeApi* | [**getAllStockExchanges**](docs/StockExchangeApi.md#getAllStockExchanges) | **GET** /stock_exchanges | All Stock Exchanges
*intrinioSDK.StockExchangeApi* | [**getStockExchangeById**](docs/StockExchangeApi.md#getStockExchangeById) | **GET** /stock_exchanges/{identifier} | Lookup Stock Exchange
*intrinioSDK.StockExchangeApi* | [**getStockExchangePriceAdjustments**](docs/StockExchangeApi.md#getStockExchangePriceAdjustments) | **GET** /stock_exchanges/{identifier}/prices/adjustments | Stock Price Adjustments by Exchange
*intrinioSDK.StockExchangeApi* | [**getStockExchangePrices**](docs/StockExchangeApi.md#getStockExchangePrices) | **GET** /stock_exchanges/{identifier}/prices | Stock Prices by Exchange
*intrinioSDK.StockExchangeApi* | [**getStockExchangeRealtimePrices**](docs/StockExchangeApi.md#getStockExchangeRealtimePrices) | **GET** /stock_exchanges/{identifier}/prices/realtime | Realtime Stock Prices by Exchange
*intrinioSDK.StockExchangeApi* | [**getStockExchangeSecurities**](docs/StockExchangeApi.md#getStockExchangeSecurities) | **GET** /stock_exchanges/{identifier}/securities | Securities by Exchange
*intrinioSDK.TechnicalApi* | [**getSecurityPriceTechnicalsAdi**](docs/TechnicalApi.md#getSecurityPriceTechnicalsAdi) | **GET** /securities/{identifier}/prices/technicals/adi | Accumulation/Distribution Index
*intrinioSDK.TechnicalApi* | [**getSecurityPriceTechnicalsAdtv**](docs/TechnicalApi.md#getSecurityPriceTechnicalsAdtv) | **GET** /securities/{identifier}/prices/technicals/adtv | Average Daily Trading Volume
*intrinioSDK.TechnicalApi* | [**getSecurityPriceTechnicalsAdx**](docs/TechnicalApi.md#getSecurityPriceTechnicalsAdx) | **GET** /securities/{identifier}/prices/technicals/adx | Average Directional Index
*intrinioSDK.TechnicalApi* | [**getSecurityPriceTechnicalsAo**](docs/TechnicalApi.md#getSecurityPriceTechnicalsAo) | **GET** /securities/{identifier}/prices/technicals/ao | Awesome Oscillator
*intrinioSDK.TechnicalApi* | [**getSecurityPriceTechnicalsAtr**](docs/TechnicalApi.md#getSecurityPriceTechnicalsAtr) | **GET** /securities/{identifier}/prices/technicals/atr | Average True Range
*intrinioSDK.TechnicalApi* | [**getSecurityPriceTechnicalsBb**](docs/TechnicalApi.md#getSecurityPriceTechnicalsBb) | **GET** /securities/{identifier}/prices/technicals/bb | Bollinger Bands
*intrinioSDK.TechnicalApi* | [**getSecurityPriceTechnicalsCci**](docs/TechnicalApi.md#getSecurityPriceTechnicalsCci) | **GET** /securities/{identifier}/prices/technicals/cci | Commodity Channel Index
*intrinioSDK.TechnicalApi* | [**getSecurityPriceTechnicalsCmf**](docs/TechnicalApi.md#getSecurityPriceTechnicalsCmf) | **GET** /securities/{identifier}/prices/technicals/cmf | Chaikin Money Flow
*intrinioSDK.TechnicalApi* | [**getSecurityPriceTechnicalsDc**](docs/TechnicalApi.md#getSecurityPriceTechnicalsDc) | **GET** /securities/{identifier}/prices/technicals/dc | Donchian Channel
*intrinioSDK.TechnicalApi* | [**getSecurityPriceTechnicalsDpo**](docs/TechnicalApi.md#getSecurityPriceTechnicalsDpo) | **GET** /securities/{identifier}/prices/technicals/dpo | Detrended Price Oscillator
*intrinioSDK.TechnicalApi* | [**getSecurityPriceTechnicalsEom**](docs/TechnicalApi.md#getSecurityPriceTechnicalsEom) | **GET** /securities/{identifier}/prices/technicals/eom | Ease of Movement
*intrinioSDK.TechnicalApi* | [**getSecurityPriceTechnicalsFi**](docs/TechnicalApi.md#getSecurityPriceTechnicalsFi) | **GET** /securities/{identifier}/prices/technicals/fi | Force Index
*intrinioSDK.TechnicalApi* | [**getSecurityPriceTechnicalsIchimoku**](docs/TechnicalApi.md#getSecurityPriceTechnicalsIchimoku) | **GET** /securities/{identifier}/prices/technicals/ichimoku | Ichimoku Kinko Hyo
*intrinioSDK.TechnicalApi* | [**getSecurityPriceTechnicalsKc**](docs/TechnicalApi.md#getSecurityPriceTechnicalsKc) | **GET** /securities/{identifier}/prices/technicals/kc | Keltner Channel
*intrinioSDK.TechnicalApi* | [**getSecurityPriceTechnicalsKst**](docs/TechnicalApi.md#getSecurityPriceTechnicalsKst) | **GET** /securities/{identifier}/prices/technicals/kst | Know Sure Thing
*intrinioSDK.TechnicalApi* | [**getSecurityPriceTechnicalsMacd**](docs/TechnicalApi.md#getSecurityPriceTechnicalsMacd) | **GET** /securities/{identifier}/prices/technicals/macd | Moving Average Convergence Divergence
*intrinioSDK.TechnicalApi* | [**getSecurityPriceTechnicalsMfi**](docs/TechnicalApi.md#getSecurityPriceTechnicalsMfi) | **GET** /securities/{identifier}/prices/technicals/mfi | Money Flow Index
*intrinioSDK.TechnicalApi* | [**getSecurityPriceTechnicalsMi**](docs/TechnicalApi.md#getSecurityPriceTechnicalsMi) | **GET** /securities/{identifier}/prices/technicals/mi | Mass Index
*intrinioSDK.TechnicalApi* | [**getSecurityPriceTechnicalsNvi**](docs/TechnicalApi.md#getSecurityPriceTechnicalsNvi) | **GET** /securities/{identifier}/prices/technicals/nvi | Negative Volume Index
*intrinioSDK.TechnicalApi* | [**getSecurityPriceTechnicalsObv**](docs/TechnicalApi.md#getSecurityPriceTechnicalsObv) | **GET** /securities/{identifier}/prices/technicals/obv | On-balance Volume
*intrinioSDK.TechnicalApi* | [**getSecurityPriceTechnicalsObvMean**](docs/TechnicalApi.md#getSecurityPriceTechnicalsObvMean) | **GET** /securities/{identifier}/prices/technicals/obv_mean | On-balance Volume Mean
*intrinioSDK.TechnicalApi* | [**getSecurityPriceTechnicalsRsi**](docs/TechnicalApi.md#getSecurityPriceTechnicalsRsi) | **GET** /securities/{identifier}/prices/technicals/rsi | Relative Strength Index
*intrinioSDK.TechnicalApi* | [**getSecurityPriceTechnicalsSma**](docs/TechnicalApi.md#getSecurityPriceTechnicalsSma) | **GET** /securities/{identifier}/prices/technicals/sma | Simple Moving Average
*intrinioSDK.TechnicalApi* | [**getSecurityPriceTechnicalsSr**](docs/TechnicalApi.md#getSecurityPriceTechnicalsSr) | **GET** /securities/{identifier}/prices/technicals/sr | Stochastic Oscillator
*intrinioSDK.TechnicalApi* | [**getSecurityPriceTechnicalsTrix**](docs/TechnicalApi.md#getSecurityPriceTechnicalsTrix) | **GET** /securities/{identifier}/prices/technicals/trix | Triple Exponential Average
*intrinioSDK.TechnicalApi* | [**getSecurityPriceTechnicalsTsi**](docs/TechnicalApi.md#getSecurityPriceTechnicalsTsi) | **GET** /securities/{identifier}/prices/technicals/tsi | True Strength Index
*intrinioSDK.TechnicalApi* | [**getSecurityPriceTechnicalsUo**](docs/TechnicalApi.md#getSecurityPriceTechnicalsUo) | **GET** /securities/{identifier}/prices/technicals/uo | Ultimate Oscillator
*intrinioSDK.TechnicalApi* | [**getSecurityPriceTechnicalsVi**](docs/TechnicalApi.md#getSecurityPriceTechnicalsVi) | **GET** /securities/{identifier}/prices/technicals/vi | Vortex Indicator
*intrinioSDK.TechnicalApi* | [**getSecurityPriceTechnicalsVpt**](docs/TechnicalApi.md#getSecurityPriceTechnicalsVpt) | **GET** /securities/{identifier}/prices/technicals/vpt | Volume-price Trend
*intrinioSDK.TechnicalApi* | [**getSecurityPriceTechnicalsVwap**](docs/TechnicalApi.md#getSecurityPriceTechnicalsVwap) | **GET** /securities/{identifier}/prices/technicals/vwap | Volume Weighted Average Price
*intrinioSDK.TechnicalApi* | [**getSecurityPriceTechnicalsWr**](docs/TechnicalApi.md#getSecurityPriceTechnicalsWr) | **GET** /securities/{identifier}/prices/technicals/wr | Williams %R


## Documentation for Models

 - [intrinioSDK.AccumulationDistributionIndexTechnicalValue](docs/AccumulationDistributionIndexTechnicalValue.md)
 - [intrinioSDK.ApiResponseCompanies](docs/ApiResponseCompanies.md)
 - [intrinioSDK.ApiResponseCompaniesSearch](docs/ApiResponseCompaniesSearch.md)
 - [intrinioSDK.ApiResponseCompanyFilings](docs/ApiResponseCompanyFilings.md)
 - [intrinioSDK.ApiResponseCompanyFundamentals](docs/ApiResponseCompanyFundamentals.md)
 - [intrinioSDK.ApiResponseCompanyHistoricalData](docs/ApiResponseCompanyHistoricalData.md)
 - [intrinioSDK.ApiResponseCompanyNews](docs/ApiResponseCompanyNews.md)
 - [intrinioSDK.ApiResponseCompanySecurities](docs/ApiResponseCompanySecurities.md)
 - [intrinioSDK.ApiResponseCryptoBook](docs/ApiResponseCryptoBook.md)
 - [intrinioSDK.ApiResponseCryptoBookAsks](docs/ApiResponseCryptoBookAsks.md)
 - [intrinioSDK.ApiResponseCryptoBookBids](docs/ApiResponseCryptoBookBids.md)
 - [intrinioSDK.ApiResponseCryptoCurrencies](docs/ApiResponseCryptoCurrencies.md)
 - [intrinioSDK.ApiResponseCryptoExchanges](docs/ApiResponseCryptoExchanges.md)
 - [intrinioSDK.ApiResponseCryptoPairs](docs/ApiResponseCryptoPairs.md)
 - [intrinioSDK.ApiResponseCryptoPrices](docs/ApiResponseCryptoPrices.md)
 - [intrinioSDK.ApiResponseCryptoSnapshot](docs/ApiResponseCryptoSnapshot.md)
 - [intrinioSDK.ApiResponseCryptoStats](docs/ApiResponseCryptoStats.md)
 - [intrinioSDK.ApiResponseDataTags](docs/ApiResponseDataTags.md)
 - [intrinioSDK.ApiResponseDataTagsSearch](docs/ApiResponseDataTagsSearch.md)
 - [intrinioSDK.ApiResponseEconomicIndexHistoricalData](docs/ApiResponseEconomicIndexHistoricalData.md)
 - [intrinioSDK.ApiResponseEconomicIndices](docs/ApiResponseEconomicIndices.md)
 - [intrinioSDK.ApiResponseEconomicIndicesSearch](docs/ApiResponseEconomicIndicesSearch.md)
 - [intrinioSDK.ApiResponseFilingNotes](docs/ApiResponseFilingNotes.md)
 - [intrinioSDK.ApiResponseFilingNotesSearch](docs/ApiResponseFilingNotesSearch.md)
 - [intrinioSDK.ApiResponseFilings](docs/ApiResponseFilings.md)
 - [intrinioSDK.ApiResponseForexCurrencies](docs/ApiResponseForexCurrencies.md)
 - [intrinioSDK.ApiResponseForexPairs](docs/ApiResponseForexPairs.md)
 - [intrinioSDK.ApiResponseForexPrices](docs/ApiResponseForexPrices.md)
 - [intrinioSDK.ApiResponseHistoricalData](docs/ApiResponseHistoricalData.md)
 - [intrinioSDK.ApiResponseMunicipalities](docs/ApiResponseMunicipalities.md)
 - [intrinioSDK.ApiResponseMunicipalitiyFinancials](docs/ApiResponseMunicipalitiyFinancials.md)
 - [intrinioSDK.ApiResponseNews](docs/ApiResponseNews.md)
 - [intrinioSDK.ApiResponseOptionPrices](docs/ApiResponseOptionPrices.md)
 - [intrinioSDK.ApiResponseOptions](docs/ApiResponseOptions.md)
 - [intrinioSDK.ApiResponseOptionsChain](docs/ApiResponseOptionsChain.md)
 - [intrinioSDK.ApiResponseOptionsExpirations](docs/ApiResponseOptionsExpirations.md)
 - [intrinioSDK.ApiResponseReportedFinancials](docs/ApiResponseReportedFinancials.md)
 - [intrinioSDK.ApiResponseSICIndexHistoricalData](docs/ApiResponseSICIndexHistoricalData.md)
 - [intrinioSDK.ApiResponseSICIndices](docs/ApiResponseSICIndices.md)
 - [intrinioSDK.ApiResponseSICIndicesSearch](docs/ApiResponseSICIndicesSearch.md)
 - [intrinioSDK.ApiResponseSecurities](docs/ApiResponseSecurities.md)
 - [intrinioSDK.ApiResponseSecuritiesSearch](docs/ApiResponseSecuritiesSearch.md)
 - [intrinioSDK.ApiResponseSecurityAccumulationDistributionIndex](docs/ApiResponseSecurityAccumulationDistributionIndex.md)
 - [intrinioSDK.ApiResponseSecurityAverageDailyTradingVolume](docs/ApiResponseSecurityAverageDailyTradingVolume.md)
 - [intrinioSDK.ApiResponseSecurityAverageDirectionalIndex](docs/ApiResponseSecurityAverageDirectionalIndex.md)
 - [intrinioSDK.ApiResponseSecurityAverageTrueRange](docs/ApiResponseSecurityAverageTrueRange.md)
 - [intrinioSDK.ApiResponseSecurityAwesomeOscillator](docs/ApiResponseSecurityAwesomeOscillator.md)
 - [intrinioSDK.ApiResponseSecurityBollingerBands](docs/ApiResponseSecurityBollingerBands.md)
 - [intrinioSDK.ApiResponseSecurityChaikinMoneyFlow](docs/ApiResponseSecurityChaikinMoneyFlow.md)
 - [intrinioSDK.ApiResponseSecurityCommodityChannelIndex](docs/ApiResponseSecurityCommodityChannelIndex.md)
 - [intrinioSDK.ApiResponseSecurityDetrendedPriceOscillator](docs/ApiResponseSecurityDetrendedPriceOscillator.md)
 - [intrinioSDK.ApiResponseSecurityDonchianChannel](docs/ApiResponseSecurityDonchianChannel.md)
 - [intrinioSDK.ApiResponseSecurityEaseOfMovement](docs/ApiResponseSecurityEaseOfMovement.md)
 - [intrinioSDK.ApiResponseSecurityForceIndex](docs/ApiResponseSecurityForceIndex.md)
 - [intrinioSDK.ApiResponseSecurityHistoricalData](docs/ApiResponseSecurityHistoricalData.md)
 - [intrinioSDK.ApiResponseSecurityIchimokuKinkoHyo](docs/ApiResponseSecurityIchimokuKinkoHyo.md)
 - [intrinioSDK.ApiResponseSecurityIntradayPrices](docs/ApiResponseSecurityIntradayPrices.md)
 - [intrinioSDK.ApiResponseSecurityKeltnerChannel](docs/ApiResponseSecurityKeltnerChannel.md)
 - [intrinioSDK.ApiResponseSecurityKnowSureThing](docs/ApiResponseSecurityKnowSureThing.md)
 - [intrinioSDK.ApiResponseSecurityMassIndex](docs/ApiResponseSecurityMassIndex.md)
 - [intrinioSDK.ApiResponseSecurityMoneyFlowIndex](docs/ApiResponseSecurityMoneyFlowIndex.md)
 - [intrinioSDK.ApiResponseSecurityMovingAverageConvergenceDivergence](docs/ApiResponseSecurityMovingAverageConvergenceDivergence.md)
 - [intrinioSDK.ApiResponseSecurityNegativeVolumeIndex](docs/ApiResponseSecurityNegativeVolumeIndex.md)
 - [intrinioSDK.ApiResponseSecurityOnBalanceVolume](docs/ApiResponseSecurityOnBalanceVolume.md)
 - [intrinioSDK.ApiResponseSecurityOnBalanceVolumeMean](docs/ApiResponseSecurityOnBalanceVolumeMean.md)
 - [intrinioSDK.ApiResponseSecurityRelativeStrengthIndex](docs/ApiResponseSecurityRelativeStrengthIndex.md)
 - [intrinioSDK.ApiResponseSecuritySimpleMovingAverage](docs/ApiResponseSecuritySimpleMovingAverage.md)
 - [intrinioSDK.ApiResponseSecurityStochasticOscillator](docs/ApiResponseSecurityStochasticOscillator.md)
 - [intrinioSDK.ApiResponseSecurityStockPriceAdjustments](docs/ApiResponseSecurityStockPriceAdjustments.md)
 - [intrinioSDK.ApiResponseSecurityStockPrices](docs/ApiResponseSecurityStockPrices.md)
 - [intrinioSDK.ApiResponseSecurityTripleExponentialAverage](docs/ApiResponseSecurityTripleExponentialAverage.md)
 - [intrinioSDK.ApiResponseSecurityTrueStrengthIndex](docs/ApiResponseSecurityTrueStrengthIndex.md)
 - [intrinioSDK.ApiResponseSecurityUltimateOscillator](docs/ApiResponseSecurityUltimateOscillator.md)
 - [intrinioSDK.ApiResponseSecurityVolumePriceTrend](docs/ApiResponseSecurityVolumePriceTrend.md)
 - [intrinioSDK.ApiResponseSecurityVolumeWeightedAveragePrice](docs/ApiResponseSecurityVolumeWeightedAveragePrice.md)
 - [intrinioSDK.ApiResponseSecurityVortexIndicator](docs/ApiResponseSecurityVortexIndicator.md)
 - [intrinioSDK.ApiResponseSecurityWilliamsR](docs/ApiResponseSecurityWilliamsR.md)
 - [intrinioSDK.ApiResponseStandardizedFinancials](docs/ApiResponseStandardizedFinancials.md)
 - [intrinioSDK.ApiResponseStockExchangeRealtimeStockPrices](docs/ApiResponseStockExchangeRealtimeStockPrices.md)
 - [intrinioSDK.ApiResponseStockExchangeSecurities](docs/ApiResponseStockExchangeSecurities.md)
 - [intrinioSDK.ApiResponseStockExchangeStockPriceAdjustments](docs/ApiResponseStockExchangeStockPriceAdjustments.md)
 - [intrinioSDK.ApiResponseStockExchangeStockPrices](docs/ApiResponseStockExchangeStockPrices.md)
 - [intrinioSDK.ApiResponseStockExchanges](docs/ApiResponseStockExchanges.md)
 - [intrinioSDK.ApiResponseStockMarketIndexHistoricalData](docs/ApiResponseStockMarketIndexHistoricalData.md)
 - [intrinioSDK.ApiResponseStockMarketIndices](docs/ApiResponseStockMarketIndices.md)
 - [intrinioSDK.ApiResponseStockMarketIndicesSearch](docs/ApiResponseStockMarketIndicesSearch.md)
 - [intrinioSDK.AverageDailyTradingVolumeTechnicalValue](docs/AverageDailyTradingVolumeTechnicalValue.md)
 - [intrinioSDK.AverageDirectionalIndexTechnicalValue](docs/AverageDirectionalIndexTechnicalValue.md)
 - [intrinioSDK.AverageTrueRangeTechnicalValue](docs/AverageTrueRangeTechnicalValue.md)
 - [intrinioSDK.AwesomeOscillatorTechnicalValue](docs/AwesomeOscillatorTechnicalValue.md)
 - [intrinioSDK.BollingerBandsTechnicalValue](docs/BollingerBandsTechnicalValue.md)
 - [intrinioSDK.ChaikinMoneyFlowTechnicalValue](docs/ChaikinMoneyFlowTechnicalValue.md)
 - [intrinioSDK.CommodityChannelIndexTechnicalValue](docs/CommodityChannelIndexTechnicalValue.md)
 - [intrinioSDK.Company](docs/Company.md)
 - [intrinioSDK.CompanyFiling](docs/CompanyFiling.md)
 - [intrinioSDK.CompanyNews](docs/CompanyNews.md)
 - [intrinioSDK.CompanyNewsSummary](docs/CompanyNewsSummary.md)
 - [intrinioSDK.CompanySummary](docs/CompanySummary.md)
 - [intrinioSDK.CryptoAsk](docs/CryptoAsk.md)
 - [intrinioSDK.CryptoBid](docs/CryptoBid.md)
 - [intrinioSDK.CryptoBookEntry](docs/CryptoBookEntry.md)
 - [intrinioSDK.CryptoCurrency](docs/CryptoCurrency.md)
 - [intrinioSDK.CryptoExchange](docs/CryptoExchange.md)
 - [intrinioSDK.CryptoExchangeSummary](docs/CryptoExchangeSummary.md)
 - [intrinioSDK.CryptoPair](docs/CryptoPair.md)
 - [intrinioSDK.CryptoPairSummary](docs/CryptoPairSummary.md)
 - [intrinioSDK.CryptoPrice](docs/CryptoPrice.md)
 - [intrinioSDK.CryptoSnapshot](docs/CryptoSnapshot.md)
 - [intrinioSDK.CryptoStat](docs/CryptoStat.md)
 - [intrinioSDK.DataTag](docs/DataTag.md)
 - [intrinioSDK.DataTagSummary](docs/DataTagSummary.md)
 - [intrinioSDK.DetrendedPriceOscillatorTechnicalValue](docs/DetrendedPriceOscillatorTechnicalValue.md)
 - [intrinioSDK.DividendRecord](docs/DividendRecord.md)
 - [intrinioSDK.DonchianChannelTechnicalValue](docs/DonchianChannelTechnicalValue.md)
 - [intrinioSDK.EarningsRecord](docs/EarningsRecord.md)
 - [intrinioSDK.EaseOfMovementTechnicalValue](docs/EaseOfMovementTechnicalValue.md)
 - [intrinioSDK.EconomicIndex](docs/EconomicIndex.md)
 - [intrinioSDK.EconomicIndexSummary](docs/EconomicIndexSummary.md)
 - [intrinioSDK.Filing](docs/Filing.md)
 - [intrinioSDK.FilingNote](docs/FilingNote.md)
 - [intrinioSDK.FilingNoteFiling](docs/FilingNoteFiling.md)
 - [intrinioSDK.FilingNoteSummary](docs/FilingNoteSummary.md)
 - [intrinioSDK.FilingSummary](docs/FilingSummary.md)
 - [intrinioSDK.ForceIndexTechnicalValue](docs/ForceIndexTechnicalValue.md)
 - [intrinioSDK.ForexCurrency](docs/ForexCurrency.md)
 - [intrinioSDK.ForexPair](docs/ForexPair.md)
 - [intrinioSDK.ForexPrice](docs/ForexPrice.md)
 - [intrinioSDK.Fundamental](docs/Fundamental.md)
 - [intrinioSDK.FundamentalSummary](docs/FundamentalSummary.md)
 - [intrinioSDK.HistoricalData](docs/HistoricalData.md)
 - [intrinioSDK.IchimokuKinkoHyoTechnicalValue](docs/IchimokuKinkoHyoTechnicalValue.md)
 - [intrinioSDK.IntradayStockPrice](docs/IntradayStockPrice.md)
 - [intrinioSDK.KeltnerChannelTechnicalValue](docs/KeltnerChannelTechnicalValue.md)
 - [intrinioSDK.KnowSureThingTechnicalValue](docs/KnowSureThingTechnicalValue.md)
 - [intrinioSDK.MassIndexTechnicalValue](docs/MassIndexTechnicalValue.md)
 - [intrinioSDK.MoneyFlowIndexTechnicalValue](docs/MoneyFlowIndexTechnicalValue.md)
 - [intrinioSDK.MovingAverageConvergenceDivergenceTechnicalValue](docs/MovingAverageConvergenceDivergenceTechnicalValue.md)
 - [intrinioSDK.Municipality](docs/Municipality.md)
 - [intrinioSDK.MunicipalityFinancial](docs/MunicipalityFinancial.md)
 - [intrinioSDK.NegativeVolumeIndexTechnicalValue](docs/NegativeVolumeIndexTechnicalValue.md)
 - [intrinioSDK.OnBalanceVolumeMeanTechnicalValue](docs/OnBalanceVolumeMeanTechnicalValue.md)
 - [intrinioSDK.OnBalanceVolumeTechnicalValue](docs/OnBalanceVolumeTechnicalValue.md)
 - [intrinioSDK.Option](docs/Option.md)
 - [intrinioSDK.OptionChain](docs/OptionChain.md)
 - [intrinioSDK.OptionPrice](docs/OptionPrice.md)
 - [intrinioSDK.RealtimeStockPrice](docs/RealtimeStockPrice.md)
 - [intrinioSDK.RealtimeStockPriceSecurity](docs/RealtimeStockPriceSecurity.md)
 - [intrinioSDK.RelativeStrengthIndexTechnicalValue](docs/RelativeStrengthIndexTechnicalValue.md)
 - [intrinioSDK.ReportedFinancial](docs/ReportedFinancial.md)
 - [intrinioSDK.ReportedFinancialDimension](docs/ReportedFinancialDimension.md)
 - [intrinioSDK.ReportedTag](docs/ReportedTag.md)
 - [intrinioSDK.SICIndex](docs/SICIndex.md)
 - [intrinioSDK.Security](docs/Security.md)
 - [intrinioSDK.SecurityScreenClause](docs/SecurityScreenClause.md)
 - [intrinioSDK.SecurityScreenGroup](docs/SecurityScreenGroup.md)
 - [intrinioSDK.SecurityScreenResult](docs/SecurityScreenResult.md)
 - [intrinioSDK.SecurityScreenResultData](docs/SecurityScreenResultData.md)
 - [intrinioSDK.SecuritySummary](docs/SecuritySummary.md)
 - [intrinioSDK.SimpleMovingAverageTechnicalValue](docs/SimpleMovingAverageTechnicalValue.md)
 - [intrinioSDK.StandardizedFinancial](docs/StandardizedFinancial.md)
 - [intrinioSDK.StochasticOscillatorTechnicalValue](docs/StochasticOscillatorTechnicalValue.md)
 - [intrinioSDK.StockExchange](docs/StockExchange.md)
 - [intrinioSDK.StockMarketIndex](docs/StockMarketIndex.md)
 - [intrinioSDK.StockMarketIndexSummary](docs/StockMarketIndexSummary.md)
 - [intrinioSDK.StockPrice](docs/StockPrice.md)
 - [intrinioSDK.StockPriceAdjustment](docs/StockPriceAdjustment.md)
 - [intrinioSDK.StockPriceAdjustmentSummary](docs/StockPriceAdjustmentSummary.md)
 - [intrinioSDK.StockPriceSummary](docs/StockPriceSummary.md)
 - [intrinioSDK.TechnicalIndicator](docs/TechnicalIndicator.md)
 - [intrinioSDK.TripleExponentialAverageTechnicalValue](docs/TripleExponentialAverageTechnicalValue.md)
 - [intrinioSDK.TrueStrengthIndexTechnicalValue](docs/TrueStrengthIndexTechnicalValue.md)
 - [intrinioSDK.UltimateOscillatorTechnicalValue](docs/UltimateOscillatorTechnicalValue.md)
 - [intrinioSDK.VolumePriceTrendTechnicalValue](docs/VolumePriceTrendTechnicalValue.md)
 - [intrinioSDK.VolumeWeightedAveragePriceValue](docs/VolumeWeightedAveragePriceValue.md)
 - [intrinioSDK.VortexIndicatorTechnicalValue](docs/VortexIndicatorTechnicalValue.md)
 - [intrinioSDK.WilliamsRTechnicalValue](docs/WilliamsRTechnicalValue.md)

