/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.64.1
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
    define(['ApiClient', 'model/NewsTopic'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NewsTopic'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.CompanyNewsSummary = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.NewsTopic);
  }
}(this, function(ApiClient, NewsTopic) {
  'use strict';




  /**
   * The CompanyNewsSummary model module.
   * @module model/CompanyNewsSummary
   * @version 6.29.1
   */

  /**
   * Constructs a new <code>CompanyNewsSummary</code>.
   * A news article about a company
   * @alias module:model/CompanyNewsSummary
   * @class
   */
  var exports = function() {
    var _this = this;















  };

  /**
   * Constructs a <code>CompanyNewsSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CompanyNewsSummary} obj Optional instance to populate.
   * @return {module:model/CompanyNewsSummary} The populated <code>CompanyNewsSummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('publication_date')) {
        obj['publication_date'] = ApiClient.convertToType(data['publication_date'], 'Date');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('summary')) {
        obj['summary'] = ApiClient.convertToType(data['summary'], 'String');
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = ApiClient.convertToType(data['source'], 'String');
      }
      if (data.hasOwnProperty('topics')) {
        obj['topics'] = ApiClient.convertToType(data['topics'], [NewsTopic]);
      }
      if (data.hasOwnProperty('copyright')) {
        obj['copyright'] = ApiClient.convertToType(data['copyright'], 'String');
      }
      if (data.hasOwnProperty('language')) {
        obj['language'] = ApiClient.convertToType(data['language'], 'String');
      }
      if (data.hasOwnProperty('word_count')) {
        obj['word_count'] = ApiClient.convertToType(data['word_count'], 'Number');
      }
      if (data.hasOwnProperty('spam')) {
        obj['spam'] = ApiClient.convertToType(data['spam'], 'Boolean');
      }
      if (data.hasOwnProperty('business_relevance')) {
        obj['business_relevance'] = ApiClient.convertToType(data['business_relevance'], 'Number');
      }
      if (data.hasOwnProperty('article_sentiment')) {
        obj['article_sentiment'] = ApiClient.convertToType(data['article_sentiment'], 'String');
      }
      if (data.hasOwnProperty('article_sentiment_confidence')) {
        obj['article_sentiment_confidence'] = ApiClient.convertToType(data['article_sentiment_confidence'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The Intrinio ID for the news article
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The title of the news article
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * The publication date of the news article
   * @member {Date} publication_date
   */
  exports.prototype['publication_date'] = undefined;
  /**
   * The url of the news article
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * A summary of the news article
   * @member {String} summary
   */
  exports.prototype['summary'] = undefined;
  /**
   * The news source.
   * @member {module:model/CompanyNewsSummary.SourceEnum} source
   */
  exports.prototype['source'] = undefined;
  /**
   * @member {Array.<module:model/NewsTopic>} topics
   */
  exports.prototype['topics'] = undefined;
  /**
   * The copyright of the news article
   * @member {String} copyright
   */
  exports.prototype['copyright'] = undefined;
  /**
   * The language code of the news article
   * @member {String} language
   */
  exports.prototype['language'] = undefined;
  /**
   * The word count of the news article
   * @member {Number} word_count
   */
  exports.prototype['word_count'] = undefined;
  /**
   * Whether the news article is marked as spam or not
   * @member {Boolean} spam
   */
  exports.prototype['spam'] = undefined;
  /**
   * How strongly correlated the news article is to the business
   * @member {Number} business_relevance
   */
  exports.prototype['business_relevance'] = undefined;
  /**
   * The news sentiment.
   * @member {module:model/CompanyNewsSummary.ArticleSentimentEnum} article_sentiment
   */
  exports.prototype['article_sentiment'] = undefined;
  /**
   * The confidence score of the sentiment rating
   * @member {Number} article_sentiment_confidence
   */
  exports.prototype['article_sentiment_confidence'] = undefined;


  /**
   * Allowed values for the <code>source</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SourceEnum = {
    /**
     * value: "yahoo"
     * @const
     */
    "yahoo": "yahoo",
    /**
     * value: "moody"
     * @const
     */
    "moody": "moody",
    /**
     * value: "moody_us_news"
     * @const
     */
    "moody_us_news": "moody_us_news",
    /**
     * value: "moody_us_press_releases"
     * @const
     */
    "moody_us_press_releases": "moody_us_press_releases"  };

  /**
   * Allowed values for the <code>article_sentiment</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ArticleSentimentEnum = {
    /**
     * value: "positive"
     * @const
     */
    "positive": "positive",
    /**
     * value: "neutral"
     * @const
     */
    "neutral": "neutral",
    /**
     * value: "negative"
     * @const
     */
    "negative": "negative"  };


  return exports;
}));


