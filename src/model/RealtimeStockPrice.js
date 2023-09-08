/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.46.0
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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/RealtimeStockPriceSecurity'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RealtimeStockPriceSecurity'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.RealtimeStockPrice = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.RealtimeStockPriceSecurity);
  }
}(this, function(ApiClient, RealtimeStockPriceSecurity) {
  'use strict';




  /**
   * The RealtimeStockPrice model module.
   * @module model/RealtimeStockPrice
   * @version 6.26.0
   */

  /**
   * Constructs a new <code>RealtimeStockPrice</code>.
   * The realtime stock price of a security.
   * @alias module:model/RealtimeStockPrice
   * @class
   */
  var exports = function() {
    var _this = this;






















  };

  /**
   * Constructs a <code>RealtimeStockPrice</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RealtimeStockPrice} obj Optional instance to populate.
   * @return {module:model/RealtimeStockPrice} The populated <code>RealtimeStockPrice</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('last_price')) {
        obj['last_price'] = ApiClient.convertToType(data['last_price'], 'Number');
      }
      if (data.hasOwnProperty('last_time')) {
        obj['last_time'] = ApiClient.convertToType(data['last_time'], 'Date');
      }
      if (data.hasOwnProperty('last_size')) {
        obj['last_size'] = ApiClient.convertToType(data['last_size'], 'Number');
      }
      if (data.hasOwnProperty('bid_price')) {
        obj['bid_price'] = ApiClient.convertToType(data['bid_price'], 'Number');
      }
      if (data.hasOwnProperty('bid_size')) {
        obj['bid_size'] = ApiClient.convertToType(data['bid_size'], 'Number');
      }
      if (data.hasOwnProperty('ask_price')) {
        obj['ask_price'] = ApiClient.convertToType(data['ask_price'], 'Number');
      }
      if (data.hasOwnProperty('ask_size')) {
        obj['ask_size'] = ApiClient.convertToType(data['ask_size'], 'Number');
      }
      if (data.hasOwnProperty('open_price')) {
        obj['open_price'] = ApiClient.convertToType(data['open_price'], 'Number');
      }
      if (data.hasOwnProperty('close_price')) {
        obj['close_price'] = ApiClient.convertToType(data['close_price'], 'Number');
      }
      if (data.hasOwnProperty('high_price')) {
        obj['high_price'] = ApiClient.convertToType(data['high_price'], 'Number');
      }
      if (data.hasOwnProperty('low_price')) {
        obj['low_price'] = ApiClient.convertToType(data['low_price'], 'Number');
      }
      if (data.hasOwnProperty('exchange_volume')) {
        obj['exchange_volume'] = ApiClient.convertToType(data['exchange_volume'], 'Number');
      }
      if (data.hasOwnProperty('market_volume')) {
        obj['market_volume'] = ApiClient.convertToType(data['market_volume'], 'Number');
      }
      if (data.hasOwnProperty('updated_on')) {
        obj['updated_on'] = ApiClient.convertToType(data['updated_on'], 'Date');
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = ApiClient.convertToType(data['source'], 'String');
      }
      if (data.hasOwnProperty('listing_venue')) {
        obj['listing_venue'] = ApiClient.convertToType(data['listing_venue'], 'String');
      }
      if (data.hasOwnProperty('sales_conditions')) {
        obj['sales_conditions'] = ApiClient.convertToType(data['sales_conditions'], 'String');
      }
      if (data.hasOwnProperty('quote_conditions')) {
        obj['quote_conditions'] = ApiClient.convertToType(data['quote_conditions'], 'String');
      }
      if (data.hasOwnProperty('market_center_code')) {
        obj['market_center_code'] = ApiClient.convertToType(data['market_center_code'], 'String');
      }
      if (data.hasOwnProperty('is_darkpool')) {
        obj['is_darkpool'] = ApiClient.convertToType(data['is_darkpool'], 'Boolean');
      }
      if (data.hasOwnProperty('security')) {
        obj['security'] = RealtimeStockPriceSecurity.constructFromObject(data['security']);
      }
    }
    return obj;
  }

  /**
   * The price of the last trade.
   * @member {Number} last_price
   */
  exports.prototype['last_price'] = undefined;
  /**
   * The date and time when the last trade occurred.
   * @member {Date} last_time
   */
  exports.prototype['last_time'] = undefined;
  /**
   * The size of the last trade.
   * @member {Number} last_size
   */
  exports.prototype['last_size'] = undefined;
  /**
   * The price of the top bid order.
   * @member {Number} bid_price
   */
  exports.prototype['bid_price'] = undefined;
  /**
   * The size of the top bid order.
   * @member {Number} bid_size
   */
  exports.prototype['bid_size'] = undefined;
  /**
   * The price of the top ask order.
   * @member {Number} ask_price
   */
  exports.prototype['ask_price'] = undefined;
  /**
   * The size of the top ask order.
   * @member {Number} ask_size
   */
  exports.prototype['ask_size'] = undefined;
  /**
   * The price at the open of the trading day.
   * @member {Number} open_price
   */
  exports.prototype['open_price'] = undefined;
  /**
   * The price at the close of the trading day. (IEX only)
   * @member {Number} close_price
   */
  exports.prototype['close_price'] = undefined;
  /**
   * The high price for the trading day.
   * @member {Number} high_price
   */
  exports.prototype['high_price'] = undefined;
  /**
   * The low price for the trading day.
   * @member {Number} low_price
   */
  exports.prototype['low_price'] = undefined;
  /**
   * The number of shares exchanged during the trading day on the exchange.
   * @member {Number} exchange_volume
   */
  exports.prototype['exchange_volume'] = undefined;
  /**
   * The number of shares exchanged during the trading day for the whole market.
   * @member {Number} market_volume
   */
  exports.prototype['market_volume'] = undefined;
  /**
   * The date and time when the data was last updated.
   * @member {Date} updated_on
   */
  exports.prototype['updated_on'] = undefined;
  /**
   * The source of the data.
   * @member {String} source
   */
  exports.prototype['source'] = undefined;
  /**
   * The listing venue where the trade took place. Available only where source is SIP. Listing Venue Modifiers include: Q – Nasdaq | N – NYSE | A – NYSE American | P – NYSE Arca | u – Other OTC Markets | V – Investors Exchange LLC 
   * @member {String} listing_venue
   */
  exports.prototype['listing_venue'] = undefined;
  /**
   * When applicable, indicates any sales condition modifiers associated with the trade. Sales Condition Modifers include: @ – Regular Sale | A – Acquisition | B – Bunched Trade | C – Cash Sale | D – Distribution | E – Placeholder | F – Intermarket Sweep | G – Bunched Sold Trade  | H – Priced Variation Trade | I – Odd Lot Trade | K – Rule 155 Trade (AMEX) | L – Sold Last | M – Market Center Official Close | N – Next Day | O – Opening Prints  | P – Prior Reference Price | Q – Market Center Official Open | R – Seller | S – Split Trade | T – Form T | U – Extended Trading Hours (Sold Out of Sequence)  | V – Contingent Trade | W – Average Price Trade | X – Cross/Periodic Auction Trade | Y – Yellow Flag Regular Trade | Z – Sold (Out of Sequence)  | 1 – Stopped Stock (Regular Trade) | 4 – Derivatively Priced | 5 – Re-Opening Prints | 6 – Closing Prints | 7 – Qualified Contingent Trade (QCT)  | 8 – Placeholder for 611 Exempt | 9 – Corrected Consolidated Close (Per Listing Market) 
   * @member {String} sales_conditions
   */
  exports.prototype['sales_conditions'] = undefined;
  /**
   * When applicable, indicates any quote condition modifiers associated with the trade. Quote Condition Modifiers include: R – Regular | A – Slow on Ask | – Slow on Bid | C – Closing | D – News Dissemination | F – Slow on ASK (LRP or Gap Quote)  | E – Slow on Bid (LRP or Gap Quote) | G – Trading Range Indication | H – Slow on Bid and Ask | I – Order Imbalance  |  J – Due to Related - News Dissemination | K – Due to Related - News Pending | O – Open | L – Closed  | M – Volatility Trading Pause | N – Non-Firm Quote | O – Opening | P – News Pending | S – Due to Related  | T – Resume | U – Slow on Bid and Ask (LRP or Gap Quote) | V – In View of Common | W – Slow on Bid and Ask (LRP or Gap Quote)  | X – Equipment Changeover | Y – Sub-Penny Trading | Z – No Open / No Resume | F – Fast Trading | U – Slow on Bid and Ask (Non-Firm)  | One-Sided – One-Sided | X – Order Influx | 0 – Special Opening Quote | Halted – Halted | Benchmark – Benchmark | Implied – Implied  | Exchange Best – Exchange Best | 1 – Market Wide Circuit Breaker Level 1 | 2 – Market Wide Circuit Breaker Level 2  | 3 – Market Wide Circuit Breaker Level 3 | Rotation – Rotation | Auto Exec Eligible – Auto Exec Eligible | Bid Side Firm – Bid Side Firm  | Ask Side Firm – Ask Side Firm | 4 – On Demand Intraday Auction | I – Indicative Value (OPRA) | 45 – Additional Information Required (CTS)  | 46 – Regulatory Concern (CTS) | 47 – Merger Effective | 49 – Corporate Action (CTS) | 50 – New Security Offering (CTS)  | 51 – Intraday Indicative Value Unavailable (CTS) 
   * @member {String} quote_conditions
   */
  exports.prototype['quote_conditions'] = undefined;
  /**
   * The market center character code.
   * @member {String} market_center_code
   */
  exports.prototype['market_center_code'] = undefined;
  /**
   * Whether or not the current trade is from a darkpool or not.
   * @member {Boolean} is_darkpool
   */
  exports.prototype['is_darkpool'] = undefined;
  /**
   * @member {module:model/RealtimeStockPriceSecurity} security
   */
  exports.prototype['security'] = undefined;



  return exports;
}));


