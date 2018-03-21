# Intrinio JavaScript SDK

WARNING: THIS IS IS A BETA - DO NOT USE IN PRODUCTION.

To request a beta access key, [sign up here](https://intrinio.com/api-v2-beta).

Welcome to the Intrinio API! Through our Marketplace, we offer a wide selection of financial data feeds sourced by our own proprietary processes as well as from many data vendors. The primary application of the Intrinio API is for use in third-party applications and integrations or for end-users utilizing the Excel add-in and Google Sheets add-on. The Intrinio API uses HTTPS verbs and a RESTful endpoint structure, which makes it easy to request data from Intrinio. Responses are delivered in JSON format. If you need additional help in using the API, go to our home page (https://intrinio.com) and click on the chat icon in the lower right corner.

- API version: 2.0.0
- Package version: 0.0.1


## Installation

### For [Node.js](https://nodejs.org/)

Install the library using:

```shell
npm install intrinio/javascript-sdk --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following the above steps with Node.js and installing browserify with `npm install -g browserify`, perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

**NOTE:** For optimal security, make sure to use a _Public_ API key from Intrinio when calling the API from a browser. You can configure a Public API Key to be accessible from the domains of your choosing [by visiting your Account page.](https://intrinio.com/account)

### Webpack Configuration

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

## Getting Started

Please follow the [installation](#installation) instructions and execute the following JS code:

```javascript
var IntrinioClient = require('intrinio');
 
IntrinioClient.ApiClient.instance.authentications['HttpHeaderApiKey'].apiKey = "YOUR API KEY";
 
var company_api = new IntrinioClient.CompanyApi()
 
company_api.filterCompanies().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

## Documentation for API Endpoints

All URIs are relative to *https://api-v2.intrinio.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*intrinio.CompanyApi* | [**filterCompanies**](docs/CompanyApi.md#filterCompanies) | **GET** /companies/filter | Filter Companies
*intrinio.CompanyApi* | [**filterCompanyFundamentals**](docs/CompanyApi.md#filterCompanyFundamentals) | **GET** /companies/{identifier}/fundamentals/filter | Filter Fundamentals for a Company
*intrinio.CompanyApi* | [**getAllCompanies**](docs/CompanyApi.md#getAllCompanies) | **GET** /companies | Get All Companies
*intrinio.CompanyApi* | [**getAllCompanyFilings**](docs/CompanyApi.md#getAllCompanyFilings) | **GET** /companies/{identifier}/filings | Filings
*intrinio.CompanyApi* | [**getAllCompanyFundamentals**](docs/CompanyApi.md#getAllCompanyFundamentals) | **GET** /companies/{identifier}/fundamentals | Get All Fundamentals for a Company
*intrinio.CompanyApi* | [**getCompany**](docs/CompanyApi.md#getCompany) | **GET** /companies/{identifier} | Get a Company by ID
*intrinio.CompanyApi* | [**getCompanyDataPointNumber**](docs/CompanyApi.md#getCompanyDataPointNumber) | **GET** /companies/{identifier}/data_point/{item}/number | Get Company Data Point (Number)
*intrinio.CompanyApi* | [**getCompanyDataPointText**](docs/CompanyApi.md#getCompanyDataPointText) | **GET** /companies/{identifier}/data_point/{item}/text | Get Company Data Point (Text)
*intrinio.CompanyApi* | [**getCompanyHistoricalData**](docs/CompanyApi.md#getCompanyHistoricalData) | **GET** /companies/{identifier}/historical_data/{item} | Get Company Historical Data
*intrinio.CompanyApi* | [**getNews**](docs/CompanyApi.md#getNews) | **GET** /companies/{identifier}/news | News
*intrinio.CompanyApi* | [**lookupCompanyFundamental**](docs/CompanyApi.md#lookupCompanyFundamental) | **GET** /companies/{identifier}/fundamentals/lookup/{statement_code}/{fiscal_year}/{fiscal_period} | Lookup a Fundamental for a Company
*intrinio.CompanyApi* | [**searchCompanies**](docs/CompanyApi.md#searchCompanies) | **GET** /companies/search | Search Companies
*intrinio.DataPointApi* | [**getDataPointNumber**](docs/DataPointApi.md#getDataPointNumber) | **GET** /data_point/{identifier}/{item}/number | Get a Data Point (Number)
*intrinio.DataPointApi* | [**getDataPointText**](docs/DataPointApi.md#getDataPointText) | **GET** /data_point/{identifier}/{item}/text | Get a Data Point (Text)
*intrinio.FilingApi* | [**filterFilings**](docs/FilingApi.md#filterFilings) | **GET** /filings/filter | Filter Filings
*intrinio.FilingApi* | [**getAllFilings**](docs/FilingApi.md#getAllFilings) | **GET** /filings | Get All Filings
*intrinio.FilingApi* | [**getFilingById**](docs/FilingApi.md#getFilingById) | **GET** /filings/{id} | Get a Filing by ID
*intrinio.FundamentalsApi* | [**getFundamentalById**](docs/FundamentalsApi.md#getFundamentalById) | **GET** /fundamentals/{id} | Get a Fundamental by ID
*intrinio.FundamentalsApi* | [**getFundamentalReportedFinancials**](docs/FundamentalsApi.md#getFundamentalReportedFinancials) | **GET** /fundamentals/{id}/reported_financials | Get Reported Financials for a Fundamental
*intrinio.FundamentalsApi* | [**getFundamentalStandardizedFinancials**](docs/FundamentalsApi.md#getFundamentalStandardizedFinancials) | **GET** /fundamentals/{id}/standardized_financials | Get Standardized Financials for a Fundamental
*intrinio.FundamentalsApi* | [**lookupFundamental**](docs/FundamentalsApi.md#lookupFundamental) | **GET** /fundamentals/lookup/{identifier}/{statement_code}/{fiscal_year}/{fiscal_period} | Lookup a Fundamental
*intrinio.HistoricalDataApi* | [**getHistoricalData**](docs/HistoricalDataApi.md#getHistoricalData) | **GET** /historical_data/{identifier}/{item} | Get Historical Data
*intrinio.IndexApi* | [**getAllEconomicIndices**](docs/IndexApi.md#getAllEconomicIndices) | **GET** /indices/economic | Get ALl Economic Indices
*intrinio.IndexApi* | [**getAllSicIndices**](docs/IndexApi.md#getAllSicIndices) | **GET** /indices/sic | Get All SIC Indices
*intrinio.IndexApi* | [**getAllStockMarketIndices**](docs/IndexApi.md#getAllStockMarketIndices) | **GET** /indices/stock_market | Get All Stock Market Indices
*intrinio.IndexApi* | [**getEconomicIndexById**](docs/IndexApi.md#getEconomicIndexById) | **GET** /indices/economic/{identifier} | Get an Economic Index by ID
*intrinio.IndexApi* | [**getEconomicIndexDataPointNumber**](docs/IndexApi.md#getEconomicIndexDataPointNumber) | **GET** /indices/economic/{identifier}/data_point/{item}/number | Get Economic Index Data Point (Number)
*intrinio.IndexApi* | [**getEconomicIndexDataPointText**](docs/IndexApi.md#getEconomicIndexDataPointText) | **GET** /indices/economic/{identifier}/data_point/{item}/text | Get Economic Index Data Point (Text)
*intrinio.IndexApi* | [**getEconomicIndexHistoricalData**](docs/IndexApi.md#getEconomicIndexHistoricalData) | **GET** /indices/economic/{identifier}/historical_data/{item} | Get Economic Index Historical Data
*intrinio.IndexApi* | [**getSicIndexById**](docs/IndexApi.md#getSicIndexById) | **GET** /indices/sic/{identifier} | Get an SIC Index by ID
*intrinio.IndexApi* | [**getSicIndexDataPointNumber**](docs/IndexApi.md#getSicIndexDataPointNumber) | **GET** /indices/sic/{identifier}/data_point/{item}/number | Get SIC Index Data Point (Number)
*intrinio.IndexApi* | [**getSicIndexDataPointText**](docs/IndexApi.md#getSicIndexDataPointText) | **GET** /indices/sic/{identifier}/data_point/{item}/text | Get SIC Index Data Point (Text)
*intrinio.IndexApi* | [**getSicIndexHistoricalData**](docs/IndexApi.md#getSicIndexHistoricalData) | **GET** /indices/sic/{identifier}/historical_data/{item} | Get SIC Index Historical Data
*intrinio.IndexApi* | [**getStockMarketIndexById**](docs/IndexApi.md#getStockMarketIndexById) | **GET** /indices/stock_market/{identifier} | Get a Stock Market Index by ID
*intrinio.IndexApi* | [**getStockMarketIndexDataPointNumber**](docs/IndexApi.md#getStockMarketIndexDataPointNumber) | **GET** /indices/stock_market/{identifier}/data_point/{item}/number | Get Stock Market Index Data Point (Number)
*intrinio.IndexApi* | [**getStockMarketIndexDataPointText**](docs/IndexApi.md#getStockMarketIndexDataPointText) | **GET** /indices/stock_market/{identifier}/data_point/{item}/text | Get Stock Market Index Data Point (Text)
*intrinio.IndexApi* | [**getStockMarketIndexHistoricalData**](docs/IndexApi.md#getStockMarketIndexHistoricalData) | **GET** /indices/stock_market/{identifier}/historical_data/{item} | Get Stock Market Index Historical Data
*intrinio.IndexApi* | [**searchEconomicIndices**](docs/IndexApi.md#searchEconomicIndices) | **GET** /indices/economic/search | Search Economic Indices
*intrinio.IndexApi* | [**searchSicIndices**](docs/IndexApi.md#searchSicIndices) | **GET** /indices/sic/search | Search SIC Indices
*intrinio.IndexApi* | [**searchStockMarketsIndices**](docs/IndexApi.md#searchStockMarketsIndices) | **GET** /indices/stock_market/search | Search Stock Market Indices
*intrinio.SecurityApi* | [**getAllSecurities**](docs/SecurityApi.md#getAllSecurities) | **GET** /securities | Get All Securiites
*intrinio.SecurityApi* | [**getSecurityById**](docs/SecurityApi.md#getSecurityById) | **GET** /securities/{identifier} | Get a Security by ID
*intrinio.SecurityApi* | [**getSecurityDataPointNumber**](docs/SecurityApi.md#getSecurityDataPointNumber) | **GET** /securities/{identifier}/data_point/{item}/number | Get Security Data Point (Number)
*intrinio.SecurityApi* | [**getSecurityDataPointText**](docs/SecurityApi.md#getSecurityDataPointText) | **GET** /securities/{identifier}/data_point/{item}/text | Get Security Data Point (Text)
*intrinio.SecurityApi* | [**getSecurityHistoricalData**](docs/SecurityApi.md#getSecurityHistoricalData) | **GET** /securities/{identifier}/historical_data/{item} | Get Security Historical Data
*intrinio.SecurityApi* | [**getSecurityStockPrices**](docs/SecurityApi.md#getSecurityStockPrices) | **GET** /securities/{identifier}/prices | Get Stock Prices for Security
*intrinio.SecurityApi* | [**screenSecurities**](docs/SecurityApi.md#screenSecurities) | **POST** /securities/screen | Screen Securities
*intrinio.SecurityApi* | [**searchSecurities**](docs/SecurityApi.md#searchSecurities) | **GET** /securities/search | Search Securities
*intrinio.StandardizedTagApi* | [**filterStandardizedTags**](docs/StandardizedTagApi.md#filterStandardizedTags) | **GET** /standardized_tags/filter | Filter Standardized Tags
*intrinio.StandardizedTagApi* | [**getAllStandardizedTags**](docs/StandardizedTagApi.md#getAllStandardizedTags) | **GET** /standardized_tags | Get All Standardized Tags
*intrinio.StandardizedTagApi* | [**getStandardizedTagById**](docs/StandardizedTagApi.md#getStandardizedTagById) | **GET** /standardized_tags/{tag_id} | Get a Standardized Tag by ID
*intrinio.StandardizedTagApi* | [**getStandardizedTagDataPointNumber**](docs/StandardizedTagApi.md#getStandardizedTagDataPointNumber) | **GET** /standardized_tags/{id}/data_point/{identifier}/number | Get Data Point (Number) for The Standardized Tag
*intrinio.StandardizedTagApi* | [**getStandardizedTagDataPointText**](docs/StandardizedTagApi.md#getStandardizedTagDataPointText) | **GET** /standardized_tags/{id}/data_point/{identifier}/text | Get Data Point (Text) for the Standardized Tag
*intrinio.StandardizedTagApi* | [**getStandardizedTagHistoricalData**](docs/StandardizedTagApi.md#getStandardizedTagHistoricalData) | **GET** /standardized_tags/{id}/historical_data/{identifier} | Get Historical Data for the Standardized Tag
*intrinio.StandardizedTagApi* | [**searchStandardizedTags**](docs/StandardizedTagApi.md#searchStandardizedTags) | **GET** /standardized_tags/search | Search Standardized Tags
*intrinio.StockExchangeApi* | [**filterStockExchanges**](docs/StockExchangeApi.md#filterStockExchanges) | **GET** /stock_exchanges/filter | Filter Stock Exchanges
*intrinio.StockExchangeApi* | [**getAllStockExchanges**](docs/StockExchangeApi.md#getAllStockExchanges) | **GET** /stock_exchanges | Get All Stock Exchanges
*intrinio.StockExchangeApi* | [**getStockExchangeById**](docs/StockExchangeApi.md#getStockExchangeById) | **GET** /stock_exchanges/{identifier} | Get Stock Exchange by ID
*intrinio.StockExchangeApi* | [**getStockExchangePrices**](docs/StockExchangeApi.md#getStockExchangePrices) | **GET** /stock_exchanges/{identifier}/prices | Get Stock Prices by Exchange
*intrinio.StockExchangeApi* | [**getStockExchangeSecurities**](docs/StockExchangeApi.md#getStockExchangeSecurities) | **GET** /stock_exchanges/{identifier}/securities | Get Securities by Exchange


## Documentation for Models

 - [intrinio.Company](docs/Company.md)
 - [intrinio.CompanyNews](docs/CompanyNews.md)
 - [intrinio.CompanySummary](docs/CompanySummary.md)
 - [intrinio.DataPointNumber](docs/DataPointNumber.md)
 - [intrinio.DataPointText](docs/DataPointText.md)
 - [intrinio.EconomicIndex](docs/EconomicIndex.md)
 - [intrinio.EconomicIndexSummary](docs/EconomicIndexSummary.md)
 - [intrinio.Filing](docs/Filing.md)
 - [intrinio.FilingSummary](docs/FilingSummary.md)
 - [intrinio.Fundamental](docs/Fundamental.md)
 - [intrinio.FundamentalSummary](docs/FundamentalSummary.md)
 - [intrinio.HistoricalData](docs/HistoricalData.md)
 - [intrinio.ReportedFinancial](docs/ReportedFinancial.md)
 - [intrinio.ReportedTag](docs/ReportedTag.md)
 - [intrinio.SICIndex](docs/SICIndex.md)
 - [intrinio.Security](docs/Security.md)
 - [intrinio.SecurityScreenClause](docs/SecurityScreenClause.md)
 - [intrinio.SecurityScreenGroup](docs/SecurityScreenGroup.md)
 - [intrinio.SecurityScreenResult](docs/SecurityScreenResult.md)
 - [intrinio.SecurityScreenResultData](docs/SecurityScreenResultData.md)
 - [intrinio.SecuritySummary](docs/SecuritySummary.md)
 - [intrinio.StandardizedFinancial](docs/StandardizedFinancial.md)
 - [intrinio.StandardizedTag](docs/StandardizedTag.md)
 - [intrinio.StockExchange](docs/StockExchange.md)
 - [intrinio.StockMarketIndex](docs/StockMarketIndex.md)
 - [intrinio.StockMarketIndexSummary](docs/StockMarketIndexSummary.md)
 - [intrinio.StockPrice](docs/StockPrice.md)
 - [intrinio.StockPriceSummary](docs/StockPriceSummary.md)

