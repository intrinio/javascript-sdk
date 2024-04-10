/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.56.6
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: unset
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.intrinioSDK);
  }
}(this, function(expect, intrinioSDK) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new intrinioSDK.ETF();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ETF', function() {
    it('should create an instance of ETF', function() {
      // uncomment below and update the code to test ETF
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be.a(intrinioSDK.ETF);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property ticker (base name: "ticker")', function() {
      // uncomment below and update the code to test the property ticker
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property figiTicker (base name: "figi_ticker")', function() {
      // uncomment below and update the code to test the property figiTicker
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property ric (base name: "ric")', function() {
      // uncomment below and update the code to test the property ric
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property isin (base name: "isin")', function() {
      // uncomment below and update the code to test the property isin
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property sedol (base name: "sedol")', function() {
      // uncomment below and update the code to test the property sedol
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property exchangeMic (base name: "exchange_mic")', function() {
      // uncomment below and update the code to test the property exchangeMic
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property sponsor (base name: "sponsor")', function() {
      // uncomment below and update the code to test the property sponsor
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property inceptionDate (base name: "inception_date")', function() {
      // uncomment below and update the code to test the property inceptionDate
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property dataChangeDate (base name: "data_change_date")', function() {
      // uncomment below and update the code to test the property dataChangeDate
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property closeDate (base name: "close_date")', function() {
      // uncomment below and update the code to test the property closeDate
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property isLiveListed (base name: "is_live_listed")', function() {
      // uncomment below and update the code to test the property isLiveListed
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property legalStructure (base name: "legal_structure")', function() {
      // uncomment below and update the code to test the property legalStructure
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property intradayNavTicker (base name: "intraday_nav_ticker")', function() {
      // uncomment below and update the code to test the property intradayNavTicker
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property primaryTicker (base name: "primary_ticker")', function() {
      // uncomment below and update the code to test the property primaryTicker
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property primaryTickerCountryCode (base name: "primary_ticker_country_code")', function() {
      // uncomment below and update the code to test the property primaryTickerCountryCode
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property primaryListingRegion (base name: "primary_listing_region")', function() {
      // uncomment below and update the code to test the property primaryListingRegion
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property netExpenseRatio (base name: "net_expense_ratio")', function() {
      // uncomment below and update the code to test the property netExpenseRatio
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property assetClass (base name: "asset_class")', function() {
      // uncomment below and update the code to test the property assetClass
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property otherAssetTypes (base name: "other_asset_types")', function() {
      // uncomment below and update the code to test the property otherAssetTypes
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property marketCapRange (base name: "market_cap_range")', function() {
      // uncomment below and update the code to test the property marketCapRange
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property holdsOnlyNyseStocks (base name: "holds_only_nyse_stocks")', function() {
      // uncomment below and update the code to test the property holdsOnlyNyseStocks
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property holdsOnlyNasdaqStocks (base name: "holds_only_nasdaq_stocks")', function() {
      // uncomment below and update the code to test the property holdsOnlyNasdaqStocks
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property growthValueTilt (base name: "growth_value_tilt")', function() {
      // uncomment below and update the code to test the property growthValueTilt
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property growthType (base name: "growth_type")', function() {
      // uncomment below and update the code to test the property growthType
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property valueType (base name: "value_type")', function() {
      // uncomment below and update the code to test the property valueType
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property sector (base name: "sector")', function() {
      // uncomment below and update the code to test the property sector
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property industry (base name: "industry")', function() {
      // uncomment below and update the code to test the property industry
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property subIndustry (base name: "sub_industry")', function() {
      // uncomment below and update the code to test the property subIndustry
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property crossSectorTheme (base name: "cross_sector_theme")', function() {
      // uncomment below and update the code to test the property crossSectorTheme
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property naturalResourcesType (base name: "natural_resources_type")', function() {
      // uncomment below and update the code to test the property naturalResourcesType
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property excludesFinancials (base name: "excludes_financials")', function() {
      // uncomment below and update the code to test the property excludesFinancials
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property excludesTechnology (base name: "excludes_technology")', function() {
      // uncomment below and update the code to test the property excludesTechnology
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property usOrExcludesUs (base name: "us_or_excludes_us")', function() {
      // uncomment below and update the code to test the property usOrExcludesUs
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property developedEmerging (base name: "developed_emerging")', function() {
      // uncomment below and update the code to test the property developedEmerging
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property specializedRegion (base name: "specialized_region")', function() {
      // uncomment below and update the code to test the property specializedRegion
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property continent (base name: "continent")', function() {
      // uncomment below and update the code to test the property continent
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property latinAmericaSubGroup (base name: "latin_america_sub_group")', function() {
      // uncomment below and update the code to test the property latinAmericaSubGroup
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property europeSubGroup (base name: "europe_sub_group")', function() {
      // uncomment below and update the code to test the property europeSubGroup
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property asiaSubGroup (base name: "asia_sub_group")', function() {
      // uncomment below and update the code to test the property asiaSubGroup
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property specificCountry (base name: "specific_country")', function() {
      // uncomment below and update the code to test the property specificCountry
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property chinaListingLocation (base name: "china_listing_location")', function() {
      // uncomment below and update the code to test the property chinaListingLocation
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property usState (base name: "us_state")', function() {
      // uncomment below and update the code to test the property usState
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property realEstate (base name: "real_estate")', function() {
      // uncomment below and update the code to test the property realEstate
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property indexWeightingScheme (base name: "index_weighting_scheme")', function() {
      // uncomment below and update the code to test the property indexWeightingScheme
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property marketCapWeightingType (base name: "market_cap_weighting_type")', function() {
      // uncomment below and update the code to test the property marketCapWeightingType
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property fundamentalWeightingType (base name: "fundamental_weighting_type")', function() {
      // uncomment below and update the code to test the property fundamentalWeightingType
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property dividendWeightingType (base name: "dividend_weighting_type")', function() {
      // uncomment below and update the code to test the property dividendWeightingType
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property bondType (base name: "bond_type")', function() {
      // uncomment below and update the code to test the property bondType
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property governmentBondTypes (base name: "government_bond_types")', function() {
      // uncomment below and update the code to test the property governmentBondTypes
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property municipalBondRegion (base name: "municipal_bond_region")', function() {
      // uncomment below and update the code to test the property municipalBondRegion
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property municipalVrdo (base name: "municipal_vrdo")', function() {
      // uncomment below and update the code to test the property municipalVrdo
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property mortgageBondTypes (base name: "mortgage_bond_types")', function() {
      // uncomment below and update the code to test the property mortgageBondTypes
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property bondTaxStatus (base name: "bond_tax_status")', function() {
      // uncomment below and update the code to test the property bondTaxStatus
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property creditQuality (base name: "credit_quality")', function() {
      // uncomment below and update the code to test the property creditQuality
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property averageMaturity (base name: "average_maturity")', function() {
      // uncomment below and update the code to test the property averageMaturity
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property specificMaturityYear (base name: "specific_maturity_year")', function() {
      // uncomment below and update the code to test the property specificMaturityYear
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property bondCurrencyDenomination (base name: "bond_currency_denomination")', function() {
      // uncomment below and update the code to test the property bondCurrencyDenomination
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property laddered (base name: "laddered")', function() {
      // uncomment below and update the code to test the property laddered
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property zeroCoupon (base name: "zero_coupon")', function() {
      // uncomment below and update the code to test the property zeroCoupon
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property floatingRate (base name: "floating_rate")', function() {
      // uncomment below and update the code to test the property floatingRate
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property buildAmericaBonds (base name: "build_america_bonds")', function() {
      // uncomment below and update the code to test the property buildAmericaBonds
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property commodityTypes (base name: "commodity_types")', function() {
      // uncomment below and update the code to test the property commodityTypes
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property energyType (base name: "energy_type")', function() {
      // uncomment below and update the code to test the property energyType
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property agriculturalType (base name: "agricultural_type")', function() {
      // uncomment below and update the code to test the property agriculturalType
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property metalType (base name: "metal_type")', function() {
      // uncomment below and update the code to test the property metalType
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property inverseLeveraged (base name: "inverse_leveraged")', function() {
      // uncomment below and update the code to test the property inverseLeveraged
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property targetDateMultiAssetType (base name: "target_date_multi_asset_type")', function() {
      // uncomment below and update the code to test the property targetDateMultiAssetType
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property currencyHedged (base name: "currency_hedged")', function() {
      // uncomment below and update the code to test the property currencyHedged
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property currencyPair (base name: "currency_pair")', function() {
      // uncomment below and update the code to test the property currencyPair
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property socialEnvironmentalType (base name: "social_environmental_type")', function() {
      // uncomment below and update the code to test the property socialEnvironmentalType
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property cleanEnergyType (base name: "clean_energy_type")', function() {
      // uncomment below and update the code to test the property cleanEnergyType
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property dividendType (base name: "dividend_type")', function() {
      // uncomment below and update the code to test the property dividendType
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property regularDividendPayorType (base name: "regular_dividend_payor_type")', function() {
      // uncomment below and update the code to test the property regularDividendPayorType
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property holdsMlPs (base name: "holds_ml_ps")', function() {
      // uncomment below and update the code to test the property holdsMlPs
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property holdsPreferredStock (base name: "holds_preferred_stock")', function() {
      // uncomment below and update the code to test the property holdsPreferredStock
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property holdsClosedEndFunds (base name: "holds_closed_end_funds")', function() {
      // uncomment below and update the code to test the property holdsClosedEndFunds
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property quantStrategiesType (base name: "quant_strategies_type")', function() {
      // uncomment below and update the code to test the property quantStrategiesType
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property otherQuantModels (base name: "other_quant_models")', function() {
      // uncomment below and update the code to test the property otherQuantModels
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property hedgeFundType (base name: "hedge_fund_type")', function() {
      // uncomment below and update the code to test the property hedgeFundType
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property derivativesBased (base name: "derivatives_based")', function() {
      // uncomment below and update the code to test the property derivativesBased
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property holdsAdRs (base name: "holds_ad_rs")', function() {
      // uncomment below and update the code to test the property holdsAdRs
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property indexLinked (base name: "index_linked")', function() {
      // uncomment below and update the code to test the property indexLinked
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property includesShortExposure (base name: "includes_short_exposure")', function() {
      // uncomment below and update the code to test the property includesShortExposure
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property indexName (base name: "index_name")', function() {
      // uncomment below and update the code to test the property indexName
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property parentIndex (base name: "parent_index")', function() {
      // uncomment below and update the code to test the property parentIndex
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property indexFamily (base name: "index_family")', function() {
      // uncomment below and update the code to test the property indexFamily
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property broaderIndexFamily (base name: "broader_index_family")', function() {
      // uncomment below and update the code to test the property broaderIndexFamily
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property indexProvider (base name: "index_provider")', function() {
      // uncomment below and update the code to test the property indexProvider
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property fundFamily (base name: "fund_family")', function() {
      // uncomment below and update the code to test the property fundFamily
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property indexTicker (base name: "index_ticker")', function() {
      // uncomment below and update the code to test the property indexTicker
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property etnIssuingBank (base name: "etn_issuing_bank")', function() {
      // uncomment below and update the code to test the property etnIssuingBank
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property etnMaturityDate (base name: "etn_maturity_date")', function() {
      // uncomment below and update the code to test the property etnMaturityDate
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property livestock (base name: "livestock")', function() {
      // uncomment below and update the code to test the property livestock
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property dynamicFuturesRoll (base name: "dynamic_futures_roll")', function() {
      // uncomment below and update the code to test the property dynamicFuturesRoll
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property indexProviderCode (base name: "index_provider_code")', function() {
      // uncomment below and update the code to test the property indexProviderCode
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property singleCategoryDesignation (base name: "single_category_designation")', function() {
      // uncomment below and update the code to test the property singleCategoryDesignation
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property registeredCountries (base name: "registered_countries")', function() {
      // uncomment below and update the code to test the property registeredCountries
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property issuingEntityCountryCode (base name: "issuing_entity_country_code")', function() {
      // uncomment below and update the code to test the property issuingEntityCountryCode
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property ucits (base name: "ucits")', function() {
      // uncomment below and update the code to test the property ucits
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property replicationStructure (base name: "replication_structure")', function() {
      // uncomment below and update the code to test the property replicationStructure
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property domicile (base name: "domicile")', function() {
      // uncomment below and update the code to test the property domicile
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property baseCurrency (base name: "base_currency")', function() {
      // uncomment below and update the code to test the property baseCurrency
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property listingCurrency (base name: "listing_currency")', function() {
      // uncomment below and update the code to test the property listingCurrency
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property fundListingDate (base name: "fund_listing_date")', function() {
      // uncomment below and update the code to test the property fundListingDate
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property listingCountryCode (base name: "listing_country_code")', function() {
      // uncomment below and update the code to test the property listingCountryCode
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property listingRegion (base name: "listing_region")', function() {
      // uncomment below and update the code to test the property listingRegion
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property smartvsTraditionalBeta (base name: "smartvs_traditional_beta")', function() {
      // uncomment below and update the code to test the property smartvsTraditionalBeta
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property smartvsTraditionalBetaLevel2 (base name: "smartvs_traditional_beta_level2")', function() {
      // uncomment below and update the code to test the property smartvsTraditionalBetaLevel2
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property incomeCategory (base name: "income_category")', function() {
      // uncomment below and update the code to test the property incomeCategory
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property etpStructureType (base name: "etp_structure_type")', function() {
      // uncomment below and update the code to test the property etpStructureType
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property monthEndAssets (base name: "month_end_assets")', function() {
      // uncomment below and update the code to test the property monthEndAssets
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property etfPortfolioTurnover (base name: "etf_portfolio_turnover")', function() {
      // uncomment below and update the code to test the property etfPortfolioTurnover
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property firstbridgeId (base name: "firstbridge_id")', function() {
      // uncomment below and update the code to test the property firstbridgeId
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property firstbridgeParentId (base name: "firstbridge_parent_id")', function() {
      // uncomment below and update the code to test the property firstbridgeParentId
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

    it('should have the property numberOfHoldings (base name: "number_of_holdings")', function() {
      // uncomment below and update the code to test the property numberOfHoldings
      //var instane = new intrinioSDK.ETF();
      //expect(instance).to.be();
    });

  });

}));
