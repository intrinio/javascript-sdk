/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.63.6
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
    define(['ApiClient', 'model/ESGCompanySummary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ESGCompanySummary'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.ESGComprehensiveRatingWithCompany = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.ESGCompanySummary);
  }
}(this, function(ApiClient, ESGCompanySummary) {
  'use strict';




  /**
   * The ESGComprehensiveRatingWithCompany model module.
   * @module model/ESGComprehensiveRatingWithCompany
   * @version 6.28.1
   */

  /**
   * Constructs a new <code>ESGComprehensiveRatingWithCompany</code>.
   * @alias module:model/ESGComprehensiveRatingWithCompany
   * @class
   */
  var exports = function() {
    var _this = this;









































  };

  /**
   * Constructs a <code>ESGComprehensiveRatingWithCompany</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ESGComprehensiveRatingWithCompany} obj Optional instance to populate.
   * @return {module:model/ESGComprehensiveRatingWithCompany} The populated <code>ESGComprehensiveRatingWithCompany</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('country_average_rating')) {
        obj['country_average_rating'] = ApiClient.convertToType(data['country_average_rating'], 'Number');
      }
      if (data.hasOwnProperty('industry_average_rating')) {
        obj['industry_average_rating'] = ApiClient.convertToType(data['industry_average_rating'], 'Number');
      }
      if (data.hasOwnProperty('overall_rating')) {
        obj['overall_rating'] = ApiClient.convertToType(data['overall_rating'], 'Number');
      }
      if (data.hasOwnProperty('community_rating')) {
        obj['community_rating'] = ApiClient.convertToType(data['community_rating'], 'Number');
      }
      if (data.hasOwnProperty('employee_rating')) {
        obj['employee_rating'] = ApiClient.convertToType(data['employee_rating'], 'Number');
      }
      if (data.hasOwnProperty('environment_rating')) {
        obj['environment_rating'] = ApiClient.convertToType(data['environment_rating'], 'Number');
      }
      if (data.hasOwnProperty('governance_rating')) {
        obj['governance_rating'] = ApiClient.convertToType(data['governance_rating'], 'Number');
      }
      if (data.hasOwnProperty('human_rights_and_supply_chain_rating')) {
        obj['human_rights_and_supply_chain_rating'] = ApiClient.convertToType(data['human_rights_and_supply_chain_rating'], 'Number');
      }
      if (data.hasOwnProperty('community_dev_and_philanthropy_rating')) {
        obj['community_dev_and_philanthropy_rating'] = ApiClient.convertToType(data['community_dev_and_philanthropy_rating'], 'Number');
      }
      if (data.hasOwnProperty('product_rating')) {
        obj['product_rating'] = ApiClient.convertToType(data['product_rating'], 'Number');
      }
      if (data.hasOwnProperty('compensation_and_benefits_rating')) {
        obj['compensation_and_benefits_rating'] = ApiClient.convertToType(data['compensation_and_benefits_rating'], 'Number');
      }
      if (data.hasOwnProperty('diversity_and_labor_rights_rating')) {
        obj['diversity_and_labor_rights_rating'] = ApiClient.convertToType(data['diversity_and_labor_rights_rating'], 'Number');
      }
      if (data.hasOwnProperty('training_health_and_safety_rating')) {
        obj['training_health_and_safety_rating'] = ApiClient.convertToType(data['training_health_and_safety_rating'], 'Number');
      }
      if (data.hasOwnProperty('energy_climate_change_rating')) {
        obj['energy_climate_change_rating'] = ApiClient.convertToType(data['energy_climate_change_rating'], 'Number');
      }
      if (data.hasOwnProperty('environment_policy_and_reporting_rating')) {
        obj['environment_policy_and_reporting_rating'] = ApiClient.convertToType(data['environment_policy_and_reporting_rating'], 'Number');
      }
      if (data.hasOwnProperty('resource_management_rating')) {
        obj['resource_management_rating'] = ApiClient.convertToType(data['resource_management_rating'], 'Number');
      }
      if (data.hasOwnProperty('board_rating')) {
        obj['board_rating'] = ApiClient.convertToType(data['board_rating'], 'Number');
      }
      if (data.hasOwnProperty('leadership_ethics_rating')) {
        obj['leadership_ethics_rating'] = ApiClient.convertToType(data['leadership_ethics_rating'], 'Number');
      }
      if (data.hasOwnProperty('transparency_reporting_rating')) {
        obj['transparency_reporting_rating'] = ApiClient.convertToType(data['transparency_reporting_rating'], 'Number');
      }
      if (data.hasOwnProperty('country_percentile_rank')) {
        obj['country_percentile_rank'] = ApiClient.convertToType(data['country_percentile_rank'], 'Number');
      }
      if (data.hasOwnProperty('industry_percentile_rank')) {
        obj['industry_percentile_rank'] = ApiClient.convertToType(data['industry_percentile_rank'], 'Number');
      }
      if (data.hasOwnProperty('overall_percentile_rank')) {
        obj['overall_percentile_rank'] = ApiClient.convertToType(data['overall_percentile_rank'], 'Number');
      }
      if (data.hasOwnProperty('community_percentile_rank')) {
        obj['community_percentile_rank'] = ApiClient.convertToType(data['community_percentile_rank'], 'Number');
      }
      if (data.hasOwnProperty('employee_percentile_rank')) {
        obj['employee_percentile_rank'] = ApiClient.convertToType(data['employee_percentile_rank'], 'Number');
      }
      if (data.hasOwnProperty('environment_percentile_rank')) {
        obj['environment_percentile_rank'] = ApiClient.convertToType(data['environment_percentile_rank'], 'Number');
      }
      if (data.hasOwnProperty('governance_percentile_rank')) {
        obj['governance_percentile_rank'] = ApiClient.convertToType(data['governance_percentile_rank'], 'Number');
      }
      if (data.hasOwnProperty('human_rights_and_supply_chain_percentile_rank')) {
        obj['human_rights_and_supply_chain_percentile_rank'] = ApiClient.convertToType(data['human_rights_and_supply_chain_percentile_rank'], 'Number');
      }
      if (data.hasOwnProperty('community_dev_and_philanthropy_percentile_rank')) {
        obj['community_dev_and_philanthropy_percentile_rank'] = ApiClient.convertToType(data['community_dev_and_philanthropy_percentile_rank'], 'Number');
      }
      if (data.hasOwnProperty('product_percentile_rank')) {
        obj['product_percentile_rank'] = ApiClient.convertToType(data['product_percentile_rank'], 'Number');
      }
      if (data.hasOwnProperty('compensation_and_benefits_percentile_rank')) {
        obj['compensation_and_benefits_percentile_rank'] = ApiClient.convertToType(data['compensation_and_benefits_percentile_rank'], 'Number');
      }
      if (data.hasOwnProperty('diversity_and_labor_rights_percentile_rank')) {
        obj['diversity_and_labor_rights_percentile_rank'] = ApiClient.convertToType(data['diversity_and_labor_rights_percentile_rank'], 'Number');
      }
      if (data.hasOwnProperty('training_health_and_safety_percentile_rank')) {
        obj['training_health_and_safety_percentile_rank'] = ApiClient.convertToType(data['training_health_and_safety_percentile_rank'], 'Number');
      }
      if (data.hasOwnProperty('energy_climate_change_percentile_rank')) {
        obj['energy_climate_change_percentile_rank'] = ApiClient.convertToType(data['energy_climate_change_percentile_rank'], 'Number');
      }
      if (data.hasOwnProperty('environment_policy_and_reporting_percentile_rank')) {
        obj['environment_policy_and_reporting_percentile_rank'] = ApiClient.convertToType(data['environment_policy_and_reporting_percentile_rank'], 'Number');
      }
      if (data.hasOwnProperty('resource_management_percentile_rank')) {
        obj['resource_management_percentile_rank'] = ApiClient.convertToType(data['resource_management_percentile_rank'], 'Number');
      }
      if (data.hasOwnProperty('board_percentile_rank')) {
        obj['board_percentile_rank'] = ApiClient.convertToType(data['board_percentile_rank'], 'Number');
      }
      if (data.hasOwnProperty('leadership_ethics_percentile_rank')) {
        obj['leadership_ethics_percentile_rank'] = ApiClient.convertToType(data['leadership_ethics_percentile_rank'], 'Number');
      }
      if (data.hasOwnProperty('transparency_reporting_percentile_rank')) {
        obj['transparency_reporting_percentile_rank'] = ApiClient.convertToType(data['transparency_reporting_percentile_rank'], 'Number');
      }
      if (data.hasOwnProperty('company')) {
        obj['company'] = ESGCompanySummary.constructFromObject(data['company']);
      }
    }
    return obj;
  }

  /**
   * Indicates the date on which the ESG Rating was calculated.
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * The average ESG rating of all companies in a particular country in which the company is a peer of.
   * @member {Number} country_average_rating
   */
  exports.prototype['country_average_rating'] = undefined;
  /**
   * The average ESG rating of all companies in a particular industry in which the company is a peer of.
   * @member {Number} industry_average_rating
   */
  exports.prototype['industry_average_rating'] = undefined;
  /**
   * The company's overall aggregated ESG rating, taking into account its ESG scoring from the Community, Employee, Enviroment, and Governance categories.
   * @member {Number} overall_rating
   */
  exports.prototype['overall_rating'] = undefined;
  /**
   * The Community Category reflects a companys citizenship, charitable giving, and volunteerism. This category covers the company's human rights record and treatment of its supply chain. It also covers the environmental and social impacts of the companys products and services, and the development of sustainable products, processes and technologies.
   * @member {Number} community_rating
   */
  exports.prototype['community_rating'] = undefined;
  /**
   * The Employees category includes disclosure of policies, programs, and performance in diversity, labor relations and labor rights. The evaluation focuses on the quality of policies and programs, compliance with national laws and regulations, and proactive management initiatives. The category includes evaluation of inclusive diversity policies, fair treatment of all employees, robust diversity (EEO-1) programs and training.
   * @member {Number} employee_rating
   */
  exports.prototype['employee_rating'] = undefined;
  /**
   * The Environment category data covers a company's interactions with the environment at large, including use of natural resources. The category evaluates corporate environmental performance, compliance with environmental regulations, and mitigation of environmental footprint. It also includes leadership in addressing climate change through appropriate policies and strategies.
   * @member {Number} environment_rating
   */
  exports.prototype['environment_rating'] = undefined;
  /**
   * Corporate governance refers to leadership structure and the values that determine corporate direction, ethics and performance. The Governance category covers disclosure of policies and procedures, board independence and diversity, executive compensation, attention to stakeholder concerns, and evaluation of a company's culture of ethical leadership and compliance.
   * @member {Number} governance_rating
   */
  exports.prototype['governance_rating'] = undefined;
  /**
   * The Human Rights and Supply Chain subcategory measures a company's commitment to respecting fundamental human rights conventions. This subcategory covers a company's transparency in overseas sourcing disclosure and monitoring. The subcategory also covers the relationship with and respect for the human rights of indigenous peoples near its proposed or current operations.
   * @member {Number} human_rights_and_supply_chain_rating
   */
  exports.prototype['human_rights_and_supply_chain_rating'] = undefined;
  /**
   * The Community Development and Philanthropy subcategory covers the relationship between a company and the communities within which it is embedded. It reflects a company's community citizenship through charitable giving, donations of goods, and volunteerism of staff time. It also includes protecting public health (e.g., avoidance of industrial accidents) and managing the social impacts of its operations.
   * @member {Number} community_dev_and_philanthropy_rating
   */
  exports.prototype['community_dev_and_philanthropy_rating'] = undefined;
  /**
   * The Product subcategory covers the responsibility of a company for the development, design, and management of its products and services. This subcategory reflects a company's capacity to reduce environmental costs, create new market opportunities, and produce or market goods and services that enhance the health and quality of life for consumers.
   * @member {Number} product_rating
   */
  exports.prototype['product_rating'] = undefined;
  /**
   * The Compensation and Benefits subcategory covers a company's capacity to increase its workforce loyalty and productivity. It includes benefits that engage employees and improve worker development. This subcategory also focuses on long-term employment growth and stability by promotion practices, lay-off practices, and relations with retired employees.
   * @member {Number} compensation_and_benefits_rating
   */
  exports.prototype['compensation_and_benefits_rating'] = undefined;
  /**
   * The Diversity and Labor Rights subcategory covers workplace policies and practices covering fair and non-discriminatory treatment of employees. It covers a company's labor-management relations and participation by employees. Fundamental labor rights include freedom of association and protection of the right to organize.
   * @member {Number} diversity_and_labor_rights_rating
   */
  exports.prototype['diversity_and_labor_rights_rating'] = undefined;
  /**
   * The Training, Safety and Health subcategory measures a company's effectiveness in providing a healthy and safe workplace. It includes programs to support the health, well-being and productivity of all employees. This subcategory includes workplace policies and programs that boost employee morale, workplace productivity and worker development.
   * @member {Number} training_health_and_safety_rating
   */
  exports.prototype['training_health_and_safety_rating'] = undefined;
  /**
   * The Energy and Climate Change subcategory measures a company's effectiveness in addressing climate change through appropriate policies and strategies. The subcategory includes energy use, emissions to air of CO2 and other Greenhouse Gas Emissions (GHG) and other alternative environmental technologies.
   * @member {Number} energy_climate_change_rating
   */
  exports.prototype['energy_climate_change_rating'] = undefined;
  /**
   * The Environmental Policy and Reporting subcategory includes a company's policies and intention to reduce the environmental impact of a company. The data includes the company's environmental reporting performance, adherence to environmental reporting standards and compliance with investor, regulatory and stakeholders' requests for transparency. Compliance data consists of breaches of regulatory limits and accidental releases.
   * @member {Number} environment_policy_and_reporting_rating
   */
  exports.prototype['environment_policy_and_reporting_rating'] = undefined;
  /**
   * The Resource Management subcategory covers how efficiently resources are used in manufacturing and delivering products and services. It includes a company's capacity to reduce the use of materials, energy or water, and to find more efficient solutions by improving its supply chain management. This subcategory includes environmental performance relative to production size.
   * @member {Number} resource_management_rating
   */
  exports.prototype['resource_management_rating'] = undefined;
  /**
   * The Board subcategory covers a company's effectiveness in following best practices in corporate governance principles related to board membership. It includes how the company provides competitive and proportionate management compensation and its ability to incent executives and board members to achieve both financial and extra-financial targets.
   * @member {Number} board_rating
   */
  exports.prototype['board_rating'] = undefined;
  /**
   * The Leadership Ethics subcategory measures how a company manages its relationships with its various stakeholders, including investors, customers, communities, and regulators. It measures a company's commitment and effectiveness toward the vision of integrating social and environmental aspects into the overall core strategy. It also measures whether sustainability principles are integrated from the top down into the day-to-day operations of the company.
   * @member {Number} leadership_ethics_rating
   */
  exports.prototype['leadership_ethics_rating'] = undefined;
  /**
   * The Transparency and Reporting subcategory rates factors including are corporate policies and practices aligned with sustainability goals. It also covers whether the company is a signatory of Global Compact and other leading global entities. It evaluates the assurance (3rd party audit) of the accuracy, completeness, and reliability of its Sustainability or Corporate Social Responsibility reports.
   * @member {Number} transparency_reporting_rating
   */
  exports.prototype['transparency_reporting_rating'] = undefined;
  /**
   * The percentile rank of the company's ESG rating in comparison to it's country peers.
   * @member {Number} country_percentile_rank
   */
  exports.prototype['country_percentile_rank'] = undefined;
  /**
   * The percentile rank of the company's ESG rating in comparison to it's industry peers.
   * @member {Number} industry_percentile_rank
   */
  exports.prototype['industry_percentile_rank'] = undefined;
  /**
   * The percentile rank of the company's overall ESG rating in comparison to all companies within the CSRHub ESG universe.
   * @member {Number} overall_percentile_rank
   */
  exports.prototype['overall_percentile_rank'] = undefined;
  /**
   * The percentile rank of the company's Community rating in comparison to all companies within the CSRHub ESG universe.
   * @member {Number} community_percentile_rank
   */
  exports.prototype['community_percentile_rank'] = undefined;
  /**
   * The percentile rank of the company's Employee rating in comparison to all companies within the CSRHub ESG universe.
   * @member {Number} employee_percentile_rank
   */
  exports.prototype['employee_percentile_rank'] = undefined;
  /**
   * The percentile rank of the company's Environment rating in comparison to all companies within the CSRHub ESG universe.
   * @member {Number} environment_percentile_rank
   */
  exports.prototype['environment_percentile_rank'] = undefined;
  /**
   * The percentile rank of the company's Governance rating in comparison to all companies within the CSRHub ESG universe.
   * @member {Number} governance_percentile_rank
   */
  exports.prototype['governance_percentile_rank'] = undefined;
  /**
   * The percentile rank of the company's Human Rights and Supply Chain rating in comparison to all companies within the CSRHub ESG universe.
   * @member {Number} human_rights_and_supply_chain_percentile_rank
   */
  exports.prototype['human_rights_and_supply_chain_percentile_rank'] = undefined;
  /**
   * The percentile rank of the company's Community, Dev, and Philanthropy rating in comparison to all companies within the CSRHub ESG universe.
   * @member {Number} community_dev_and_philanthropy_percentile_rank
   */
  exports.prototype['community_dev_and_philanthropy_percentile_rank'] = undefined;
  /**
   * The percentile rank of the company's Product rating in comparison to all companies within the CSRHub ESG universe.
   * @member {Number} product_percentile_rank
   */
  exports.prototype['product_percentile_rank'] = undefined;
  /**
   * The percentile rank of the company's Compensation and Benefits rating in comparison to all companies within the CSRHub ESG universe.
   * @member {Number} compensation_and_benefits_percentile_rank
   */
  exports.prototype['compensation_and_benefits_percentile_rank'] = undefined;
  /**
   * The percentile rank of the company's Diversity and Labor Rights rating in comparison to all companies within the CSRHub ESG universe.
   * @member {Number} diversity_and_labor_rights_percentile_rank
   */
  exports.prototype['diversity_and_labor_rights_percentile_rank'] = undefined;
  /**
   * The percentile rank of the company's Training, Health, and Safety rating in comparison to all companies within the CSRHub ESG universe.
   * @member {Number} training_health_and_safety_percentile_rank
   */
  exports.prototype['training_health_and_safety_percentile_rank'] = undefined;
  /**
   * The percentile rank of the company's Energy Climate Change rating in comparison to all companies within the CSRHub ESG universe.
   * @member {Number} energy_climate_change_percentile_rank
   */
  exports.prototype['energy_climate_change_percentile_rank'] = undefined;
  /**
   * The percentile rank of the company's Environment Policy and Reporting rating in comparison to all companies within the CSRHub ESG universe.
   * @member {Number} environment_policy_and_reporting_percentile_rank
   */
  exports.prototype['environment_policy_and_reporting_percentile_rank'] = undefined;
  /**
   * The percentile rank of the company's Resource Management rating in comparison to all companies within the CSRHub ESG universe.
   * @member {Number} resource_management_percentile_rank
   */
  exports.prototype['resource_management_percentile_rank'] = undefined;
  /**
   * The percentile rank of the company's Board rating in comparison to all companies within the CSRHub ESG universe.
   * @member {Number} board_percentile_rank
   */
  exports.prototype['board_percentile_rank'] = undefined;
  /**
   * The percentile rank of the company's Leadership Ethics rating in comparison to all companies within the CSRHub ESG universe.
   * @member {Number} leadership_ethics_percentile_rank
   */
  exports.prototype['leadership_ethics_percentile_rank'] = undefined;
  /**
   * The percentile rank of the company's Transaperency Reporting rating in comparison to all companies within the CSRHub ESG universe.
   * @member {Number} transparency_reporting_percentile_rank
   */
  exports.prototype['transparency_reporting_percentile_rank'] = undefined;
  /**
   * @member {module:model/ESGCompanySummary} company
   */
  exports.prototype['company'] = undefined;



  return exports;
}));


