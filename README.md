# Intrinio JavaScript SDK

To get an API key, [sign up here](https://intrinio.com/).

Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.

- API version: 2.0.0
- Package version: 1.0.0


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

## SDK Code Examples

Code examples for Intrinio SDKs are available at https://github.com/intrinio/sdk-code-samples

## Getting Started

Please follow the [installation](#installation) instructions and execute the following JS code:

```javascript
var IntrinioClient = require('intrinio-sdk');
const util = require('util')
 
intrinio.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";
 
var company_api = new IntrinioClient.CompanyApi()
 
company_api.getAllCompanies().then(function(data) {
  console.log(util.inspect(data, false, null, true));
}, function(error) {
  console.error(error);
});
```

## Documentation for API Endpoints

All URIs are relative to *https://api-v2.intrinio.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*intrinio-sdk.CompanyApi* | [**filterCompanies**](docs/CompanyApi.md#filterCompanies) | **GET** /companies/filter | Filter Companies
*intrinio-sdk.CompanyApi* | [**filterCompanyFundamentals**](docs/CompanyApi.md#filterCompanyFundamentals) | **GET** /companies/{identifier}/fundamentals/filter | Filter Fundamentals for a Company
*intrinio-sdk.CompanyApi* | [**getAllCompanies**](docs/CompanyApi.md#getAllCompanies) | **GET** /companies | Get All Companies
*intrinio-sdk.CompanyApi* | [**getAllCompanyNews**](docs/CompanyApi.md#getAllCompanyNews) | **GET** /companies/news | Get All Company News
*intrinio-sdk.CompanyApi* | [**getCompany**](docs/CompanyApi.md#getCompany) | **GET** /companies/{identifier} | Get a Company by ID
*intrinio-sdk.CompanyApi* | [**getCompanyDataPointNumber**](docs/CompanyApi.md#getCompanyDataPointNumber) | **GET** /companies/{identifier}/data_point/{tag}/number | Get Company Data Point (Number)
*intrinio-sdk.CompanyApi* | [**getCompanyDataPointText**](docs/CompanyApi.md#getCompanyDataPointText) | **GET** /companies/{identifier}/data_point/{tag}/text | Get Company Data Point (Text)
*intrinio-sdk.CompanyApi* | [**getCompanyFilings**](docs/CompanyApi.md#getCompanyFilings) | **GET** /companies/{identifier}/filings | Get Filings for a Company
*intrinio-sdk.CompanyApi* | [**getCompanyFundamentals**](docs/CompanyApi.md#getCompanyFundamentals) | **GET** /companies/{identifier}/fundamentals | Get All Fundamentals for a Company
*intrinio-sdk.CompanyApi* | [**getCompanyHistoricalData**](docs/CompanyApi.md#getCompanyHistoricalData) | **GET** /companies/{identifier}/historical_data/{tag} | Get Company Historical Data
*intrinio-sdk.CompanyApi* | [**getCompanyNews**](docs/CompanyApi.md#getCompanyNews) | **GET** /companies/{identifier}/news | Get News for a Company
*intrinio-sdk.CompanyApi* | [**getCompanySecurities**](docs/CompanyApi.md#getCompanySecurities) | **GET** /companies/{identifier}/securities | Get Securities by Company
*intrinio-sdk.CompanyApi* | [**lookupCompanyFundamental**](docs/CompanyApi.md#lookupCompanyFundamental) | **GET** /companies/{identifier}/fundamentals/lookup/{statement_code}/{fiscal_year}/{fiscal_period} | Lookup a Fundamental for a Company
*intrinio-sdk.CompanyApi* | [**searchCompanies**](docs/CompanyApi.md#searchCompanies) | **GET** /companies/search | Search Companies
*intrinio-sdk.DataPointApi* | [**getDataPointNumber**](docs/DataPointApi.md#getDataPointNumber) | **GET** /data_point/{identifier}/{tag}/number | Get a Data Point (Number)
*intrinio-sdk.DataPointApi* | [**getDataPointText**](docs/DataPointApi.md#getDataPointText) | **GET** /data_point/{identifier}/{tag}/text | Get a Data Point (Text)
*intrinio-sdk.DataTagApi* | [**filterDataTags**](docs/DataTagApi.md#filterDataTags) | **GET** /data_tags/filter | Filter Data Tags
*intrinio-sdk.DataTagApi* | [**getAllDataTags**](docs/DataTagApi.md#getAllDataTags) | **GET** /data_tags | Get All Data Tags
*intrinio-sdk.DataTagApi* | [**getDataTagById**](docs/DataTagApi.md#getDataTagById) | **GET** /data_tags/{identifier} | Get a Data Tag by ID
*intrinio-sdk.DataTagApi* | [**searchDataTags**](docs/DataTagApi.md#searchDataTags) | **GET** /data_tags/search | Search Data Tags
*intrinio-sdk.FilingApi* | [**filterFilings**](docs/FilingApi.md#filterFilings) | **GET** /filings/filter | Filter Filings
*intrinio-sdk.FilingApi* | [**getAllFilings**](docs/FilingApi.md#getAllFilings) | **GET** /filings | Get All Filings
*intrinio-sdk.FilingApi* | [**getFilingById**](docs/FilingApi.md#getFilingById) | **GET** /filings/{id} | Get a Filing by ID
*intrinio-sdk.FundamentalsApi* | [**getFundamentalById**](docs/FundamentalsApi.md#getFundamentalById) | **GET** /fundamentals/{id} | Get a Fundamental by ID
*intrinio-sdk.FundamentalsApi* | [**getFundamentalReportedFinancials**](docs/FundamentalsApi.md#getFundamentalReportedFinancials) | **GET** /fundamentals/{id}/reported_financials | Get Reported Financials for a Fundamental
*intrinio-sdk.FundamentalsApi* | [**getFundamentalStandardizedFinancials**](docs/FundamentalsApi.md#getFundamentalStandardizedFinancials) | **GET** /fundamentals/{id}/standardized_financials | Get Standardized Financials for a Fundamental
*intrinio-sdk.FundamentalsApi* | [**lookupFundamental**](docs/FundamentalsApi.md#lookupFundamental) | **GET** /fundamentals/lookup/{identifier}/{statement_code}/{fiscal_year}/{fiscal_period} | Lookup a Fundamental
*intrinio-sdk.HistoricalDataApi* | [**getHistoricalData**](docs/HistoricalDataApi.md#getHistoricalData) | **GET** /historical_data/{identifier}/{tag} | Get Historical Data
*intrinio-sdk.IndexApi* | [**getAllEconomicIndices**](docs/IndexApi.md#getAllEconomicIndices) | **GET** /indices/economic | Get All Economic Indices
*intrinio-sdk.IndexApi* | [**getAllSicIndices**](docs/IndexApi.md#getAllSicIndices) | **GET** /indices/sic | Get All SIC Indices
*intrinio-sdk.IndexApi* | [**getAllStockMarketIndices**](docs/IndexApi.md#getAllStockMarketIndices) | **GET** /indices/stock_market | Get All Stock Market Indices
*intrinio-sdk.IndexApi* | [**getEconomicIndexById**](docs/IndexApi.md#getEconomicIndexById) | **GET** /indices/economic/{identifier} | Get an Economic Index by ID
*intrinio-sdk.IndexApi* | [**getEconomicIndexDataPointNumber**](docs/IndexApi.md#getEconomicIndexDataPointNumber) | **GET** /indices/economic/{identifier}/data_point/{tag}/number | Get Economic Index Data Point (Number)
*intrinio-sdk.IndexApi* | [**getEconomicIndexDataPointText**](docs/IndexApi.md#getEconomicIndexDataPointText) | **GET** /indices/economic/{identifier}/data_point/{tag}/text | Get Economic Index Data Point (Text)
*intrinio-sdk.IndexApi* | [**getEconomicIndexHistoricalData**](docs/IndexApi.md#getEconomicIndexHistoricalData) | **GET** /indices/economic/{identifier}/historical_data/{tag} | Get Economic Index Historical Data
*intrinio-sdk.IndexApi* | [**getSicIndexById**](docs/IndexApi.md#getSicIndexById) | **GET** /indices/sic/{identifier} | Get an SIC Index by ID
*intrinio-sdk.IndexApi* | [**getSicIndexDataPointNumber**](docs/IndexApi.md#getSicIndexDataPointNumber) | **GET** /indices/sic/{identifier}/data_point/{tag}/number | Get SIC Index Data Point (Number)
*intrinio-sdk.IndexApi* | [**getSicIndexDataPointText**](docs/IndexApi.md#getSicIndexDataPointText) | **GET** /indices/sic/{identifier}/data_point/{tag}/text | Get SIC Index Data Point (Text)
*intrinio-sdk.IndexApi* | [**getSicIndexHistoricalData**](docs/IndexApi.md#getSicIndexHistoricalData) | **GET** /indices/sic/{identifier}/historical_data/{tag} | Get SIC Index Historical Data
*intrinio-sdk.IndexApi* | [**getStockMarketIndexById**](docs/IndexApi.md#getStockMarketIndexById) | **GET** /indices/stock_market/{identifier} | Get a Stock Market Index by ID
*intrinio-sdk.IndexApi* | [**getStockMarketIndexDataPointNumber**](docs/IndexApi.md#getStockMarketIndexDataPointNumber) | **GET** /indices/stock_market/{identifier}/data_point/{tag}/number | Get Stock Market Index Data Point (Number)
*intrinio-sdk.IndexApi* | [**getStockMarketIndexDataPointText**](docs/IndexApi.md#getStockMarketIndexDataPointText) | **GET** /indices/stock_market/{identifier}/data_point/{tag}/text | Get Stock Market Index Data Point (Text)
*intrinio-sdk.IndexApi* | [**getStockMarketIndexHistoricalData**](docs/IndexApi.md#getStockMarketIndexHistoricalData) | **GET** /indices/stock_market/{identifier}/historical_data/{tag} | Get Stock Market Index Historical Data
*intrinio-sdk.IndexApi* | [**searchEconomicIndices**](docs/IndexApi.md#searchEconomicIndices) | **GET** /indices/economic/search | Search Economic Indices
*intrinio-sdk.IndexApi* | [**searchSicIndices**](docs/IndexApi.md#searchSicIndices) | **GET** /indices/sic/search | Search SIC Indices
*intrinio-sdk.IndexApi* | [**searchStockMarketsIndices**](docs/IndexApi.md#searchStockMarketsIndices) | **GET** /indices/stock_market/search | Search Stock Market Indices
*intrinio-sdk.SecurityApi* | [**getAllSecurities**](docs/SecurityApi.md#getAllSecurities) | **GET** /securities | Get All Securiites
*intrinio-sdk.SecurityApi* | [**getSecurityById**](docs/SecurityApi.md#getSecurityById) | **GET** /securities/{identifier} | Get a Security by ID
*intrinio-sdk.SecurityApi* | [**getSecurityDataPointNumber**](docs/SecurityApi.md#getSecurityDataPointNumber) | **GET** /securities/{identifier}/data_point/{tag}/number | Get Security Data Point (Number)
*intrinio-sdk.SecurityApi* | [**getSecurityDataPointText**](docs/SecurityApi.md#getSecurityDataPointText) | **GET** /securities/{identifier}/data_point/{tag}/text | Get Security Data Point (Text)
*intrinio-sdk.SecurityApi* | [**getSecurityHistoricalData**](docs/SecurityApi.md#getSecurityHistoricalData) | **GET** /securities/{identifier}/historical_data/{tag} | Get Security Historical Data
*intrinio-sdk.SecurityApi* | [**getSecurityStockPriceAdjustments**](docs/SecurityApi.md#getSecurityStockPriceAdjustments) | **GET** /securities/{identifier}/prices/adjustments | Get Stock Price Adjustments for Security
*intrinio-sdk.SecurityApi* | [**getSecurityStockPrices**](docs/SecurityApi.md#getSecurityStockPrices) | **GET** /securities/{identifier}/prices | Get Stock Prices for Security
*intrinio-sdk.SecurityApi* | [**screenSecurities**](docs/SecurityApi.md#screenSecurities) | **POST** /securities/screen | Screen Securities
*intrinio-sdk.SecurityApi* | [**searchSecurities**](docs/SecurityApi.md#searchSecurities) | **GET** /securities/search | Search Securities
*intrinio-sdk.StockExchangeApi* | [**filterStockExchanges**](docs/StockExchangeApi.md#filterStockExchanges) | **GET** /stock_exchanges/filter | Filter Stock Exchanges
*intrinio-sdk.StockExchangeApi* | [**getAllStockExchanges**](docs/StockExchangeApi.md#getAllStockExchanges) | **GET** /stock_exchanges | Get All Stock Exchanges
*intrinio-sdk.StockExchangeApi* | [**getStockExchangeById**](docs/StockExchangeApi.md#getStockExchangeById) | **GET** /stock_exchanges/{identifier} | Get Stock Exchange by ID
*intrinio-sdk.StockExchangeApi* | [**getStockExchangePriceAdjustments**](docs/StockExchangeApi.md#getStockExchangePriceAdjustments) | **GET** /stock_exchanges/{identifier}/prices/adjustments | Get Stock Price Adjustments by Exchange
*intrinio-sdk.StockExchangeApi* | [**getStockExchangePrices**](docs/StockExchangeApi.md#getStockExchangePrices) | **GET** /stock_exchanges/{identifier}/prices | Get Stock Prices by Exchange
*intrinio-sdk.StockExchangeApi* | [**getStockExchangeSecurities**](docs/StockExchangeApi.md#getStockExchangeSecurities) | **GET** /stock_exchanges/{identifier}/securities | Get Securities by Exchange


## Documentation for Models

 - [intrinio-sdk.ApiResponseCompanies](docs/ApiResponseCompanies.md)
 - [intrinio-sdk.ApiResponseCompanyFilings](docs/ApiResponseCompanyFilings.md)
 - [intrinio-sdk.ApiResponseCompanyFundamentals](docs/ApiResponseCompanyFundamentals.md)
 - [intrinio-sdk.ApiResponseCompanyHistoricalData](docs/ApiResponseCompanyHistoricalData.md)
 - [intrinio-sdk.ApiResponseCompanyNews](docs/ApiResponseCompanyNews.md)
 - [intrinio-sdk.ApiResponseCompanySecurities](docs/ApiResponseCompanySecurities.md)
 - [intrinio-sdk.ApiResponseDataTags](docs/ApiResponseDataTags.md)
 - [intrinio-sdk.ApiResponseEconomicIndexHistoricalData](docs/ApiResponseEconomicIndexHistoricalData.md)
 - [intrinio-sdk.ApiResponseEconomicIndices](docs/ApiResponseEconomicIndices.md)
 - [intrinio-sdk.ApiResponseFilings](docs/ApiResponseFilings.md)
 - [intrinio-sdk.ApiResponseHistoricalData](docs/ApiResponseHistoricalData.md)
 - [intrinio-sdk.ApiResponseNews](docs/ApiResponseNews.md)
 - [intrinio-sdk.ApiResponseReportedFinancials](docs/ApiResponseReportedFinancials.md)
 - [intrinio-sdk.ApiResponseSICIndexHistoricalData](docs/ApiResponseSICIndexHistoricalData.md)
 - [intrinio-sdk.ApiResponseSICIndices](docs/ApiResponseSICIndices.md)
 - [intrinio-sdk.ApiResponseSecurities](docs/ApiResponseSecurities.md)
 - [intrinio-sdk.ApiResponseSecurityHistoricalData](docs/ApiResponseSecurityHistoricalData.md)
 - [intrinio-sdk.ApiResponseSecurityStockPriceAdjustments](docs/ApiResponseSecurityStockPriceAdjustments.md)
 - [intrinio-sdk.ApiResponseSecurityStockPrices](docs/ApiResponseSecurityStockPrices.md)
 - [intrinio-sdk.ApiResponseStandardizedFinancials](docs/ApiResponseStandardizedFinancials.md)
 - [intrinio-sdk.ApiResponseStockExchangeSecurities](docs/ApiResponseStockExchangeSecurities.md)
 - [intrinio-sdk.ApiResponseStockExchangeStockPriceAdjustments](docs/ApiResponseStockExchangeStockPriceAdjustments.md)
 - [intrinio-sdk.ApiResponseStockExchangeStockPrices](docs/ApiResponseStockExchangeStockPrices.md)
 - [intrinio-sdk.ApiResponseStockExchanges](docs/ApiResponseStockExchanges.md)
 - [intrinio-sdk.ApiResponseStockMarketIndexHistoricalData](docs/ApiResponseStockMarketIndexHistoricalData.md)
 - [intrinio-sdk.ApiResponseStockMarketIndices](docs/ApiResponseStockMarketIndices.md)
 - [intrinio-sdk.Company](docs/Company.md)
 - [intrinio-sdk.CompanyFiling](docs/CompanyFiling.md)
 - [intrinio-sdk.CompanyNews](docs/CompanyNews.md)
 - [intrinio-sdk.CompanyNewsSummary](docs/CompanyNewsSummary.md)
 - [intrinio-sdk.CompanySummary](docs/CompanySummary.md)
 - [intrinio-sdk.DataTag](docs/DataTag.md)
 - [intrinio-sdk.DataTagSummary](docs/DataTagSummary.md)
 - [intrinio-sdk.EconomicIndex](docs/EconomicIndex.md)
 - [intrinio-sdk.EconomicIndexSummary](docs/EconomicIndexSummary.md)
 - [intrinio-sdk.Filing](docs/Filing.md)
 - [intrinio-sdk.FilingSummary](docs/FilingSummary.md)
 - [intrinio-sdk.Fundamental](docs/Fundamental.md)
 - [intrinio-sdk.FundamentalSummary](docs/FundamentalSummary.md)
 - [intrinio-sdk.HistoricalData](docs/HistoricalData.md)
 - [intrinio-sdk.ReportedFinancial](docs/ReportedFinancial.md)
 - [intrinio-sdk.ReportedTag](docs/ReportedTag.md)
 - [intrinio-sdk.SICIndex](docs/SICIndex.md)
 - [intrinio-sdk.Security](docs/Security.md)
 - [intrinio-sdk.SecurityScreenClause](docs/SecurityScreenClause.md)
 - [intrinio-sdk.SecurityScreenGroup](docs/SecurityScreenGroup.md)
 - [intrinio-sdk.SecurityScreenResult](docs/SecurityScreenResult.md)
 - [intrinio-sdk.SecurityScreenResultData](docs/SecurityScreenResultData.md)
 - [intrinio-sdk.SecuritySummary](docs/SecuritySummary.md)
 - [intrinio-sdk.StandardizedFinancial](docs/StandardizedFinancial.md)
 - [intrinio-sdk.StockExchange](docs/StockExchange.md)
 - [intrinio-sdk.StockMarketIndex](docs/StockMarketIndex.md)
 - [intrinio-sdk.StockMarketIndexSummary](docs/StockMarketIndexSummary.md)
 - [intrinio-sdk.StockPrice](docs/StockPrice.md)
 - [intrinio-sdk.StockPriceAdjustment](docs/StockPriceAdjustment.md)
 - [intrinio-sdk.StockPriceAdjustmentSummary](docs/StockPriceAdjustmentSummary.md)
 - [intrinio-sdk.StockPriceSummary](docs/StockPriceSummary.md)

