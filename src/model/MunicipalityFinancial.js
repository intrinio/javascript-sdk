/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://docs.intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.26.12
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.MunicipalityFinancial = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MunicipalityFinancial model module.
   * @module model/MunicipalityFinancial
   * @version 5.18.0
   */

  /**
   * Constructs a new <code>MunicipalityFinancial</code>.
   * Financial statement data for a Municipality and a Fiscal Year
   * @alias module:model/MunicipalityFinancial
   * @class
   */
  var exports = function() {
    var _this = this;











































  };

  /**
   * Constructs a <code>MunicipalityFinancial</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MunicipalityFinancial} obj Optional instance to populate.
   * @return {module:model/MunicipalityFinancial} The populated <code>MunicipalityFinancial</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('fiscal_year')) {
        obj['fiscal_year'] = ApiClient.convertToType(data['fiscal_year'], 'Number');
      }
      if (data.hasOwnProperty('current_assets')) {
        obj['current_assets'] = ApiClient.convertToType(data['current_assets'], 'Number');
      }
      if (data.hasOwnProperty('non_current_assets')) {
        obj['non_current_assets'] = ApiClient.convertToType(data['non_current_assets'], 'Number');
      }
      if (data.hasOwnProperty('deferred_outflows')) {
        obj['deferred_outflows'] = ApiClient.convertToType(data['deferred_outflows'], 'Number');
      }
      if (data.hasOwnProperty('total_assets')) {
        obj['total_assets'] = ApiClient.convertToType(data['total_assets'], 'Number');
      }
      if (data.hasOwnProperty('total_assets_plus_deferred_outflows')) {
        obj['total_assets_plus_deferred_outflows'] = ApiClient.convertToType(data['total_assets_plus_deferred_outflows'], 'Number');
      }
      if (data.hasOwnProperty('current_liabilities')) {
        obj['current_liabilities'] = ApiClient.convertToType(data['current_liabilities'], 'Number');
      }
      if (data.hasOwnProperty('current_portion_of_long_term_debt')) {
        obj['current_portion_of_long_term_debt'] = ApiClient.convertToType(data['current_portion_of_long_term_debt'], 'Number');
      }
      if (data.hasOwnProperty('net_pension_liability')) {
        obj['net_pension_liability'] = ApiClient.convertToType(data['net_pension_liability'], 'Number');
      }
      if (data.hasOwnProperty('net_opeb_liability')) {
        obj['net_opeb_liability'] = ApiClient.convertToType(data['net_opeb_liability'], 'Number');
      }
      if (data.hasOwnProperty('all_other_long_term_debt')) {
        obj['all_other_long_term_debt'] = ApiClient.convertToType(data['all_other_long_term_debt'], 'Number');
      }
      if (data.hasOwnProperty('total_liabilities')) {
        obj['total_liabilities'] = ApiClient.convertToType(data['total_liabilities'], 'Number');
      }
      if (data.hasOwnProperty('deferred_inflows')) {
        obj['deferred_inflows'] = ApiClient.convertToType(data['deferred_inflows'], 'Number');
      }
      if (data.hasOwnProperty('total_liabilities_plus_deferred_inflows')) {
        obj['total_liabilities_plus_deferred_inflows'] = ApiClient.convertToType(data['total_liabilities_plus_deferred_inflows'], 'Number');
      }
      if (data.hasOwnProperty('total_net_position')) {
        obj['total_net_position'] = ApiClient.convertToType(data['total_net_position'], 'Number');
      }
      if (data.hasOwnProperty('total_unrestricted_net_position')) {
        obj['total_unrestricted_net_position'] = ApiClient.convertToType(data['total_unrestricted_net_position'], 'Number');
      }
      if (data.hasOwnProperty('total_expenses')) {
        obj['total_expenses'] = ApiClient.convertToType(data['total_expenses'], 'Number');
      }
      if (data.hasOwnProperty('charges_for_services')) {
        obj['charges_for_services'] = ApiClient.convertToType(data['charges_for_services'], 'Number');
      }
      if (data.hasOwnProperty('operating_grants_and_contributions')) {
        obj['operating_grants_and_contributions'] = ApiClient.convertToType(data['operating_grants_and_contributions'], 'Number');
      }
      if (data.hasOwnProperty('capital_grants_and_contributions')) {
        obj['capital_grants_and_contributions'] = ApiClient.convertToType(data['capital_grants_and_contributions'], 'Number');
      }
      if (data.hasOwnProperty('general_revenues')) {
        obj['general_revenues'] = ApiClient.convertToType(data['general_revenues'], 'Number');
      }
      if (data.hasOwnProperty('other_revenues')) {
        obj['other_revenues'] = ApiClient.convertToType(data['other_revenues'], 'Number');
      }
      if (data.hasOwnProperty('total_revenues')) {
        obj['total_revenues'] = ApiClient.convertToType(data['total_revenues'], 'Number');
      }
      if (data.hasOwnProperty('change_in_net_assets')) {
        obj['change_in_net_assets'] = ApiClient.convertToType(data['change_in_net_assets'], 'Number');
      }
      if (data.hasOwnProperty('non_spendable_general_fund_balance')) {
        obj['non_spendable_general_fund_balance'] = ApiClient.convertToType(data['non_spendable_general_fund_balance'], 'Number');
      }
      if (data.hasOwnProperty('restricted_general_fund_balance')) {
        obj['restricted_general_fund_balance'] = ApiClient.convertToType(data['restricted_general_fund_balance'], 'Number');
      }
      if (data.hasOwnProperty('committed_general_fund_balance')) {
        obj['committed_general_fund_balance'] = ApiClient.convertToType(data['committed_general_fund_balance'], 'Number');
      }
      if (data.hasOwnProperty('unassigned_general_fund_balance')) {
        obj['unassigned_general_fund_balance'] = ApiClient.convertToType(data['unassigned_general_fund_balance'], 'Number');
      }
      if (data.hasOwnProperty('assigned_general_fund_balance')) {
        obj['assigned_general_fund_balance'] = ApiClient.convertToType(data['assigned_general_fund_balance'], 'Number');
      }
      if (data.hasOwnProperty('total_general_fund_balance')) {
        obj['total_general_fund_balance'] = ApiClient.convertToType(data['total_general_fund_balance'], 'Number');
      }
      if (data.hasOwnProperty('non_spendable_governmental_fund_balance')) {
        obj['non_spendable_governmental_fund_balance'] = ApiClient.convertToType(data['non_spendable_governmental_fund_balance'], 'Number');
      }
      if (data.hasOwnProperty('restricted_governmental_fund_balance')) {
        obj['restricted_governmental_fund_balance'] = ApiClient.convertToType(data['restricted_governmental_fund_balance'], 'Number');
      }
      if (data.hasOwnProperty('committed_governmental_fund_balance')) {
        obj['committed_governmental_fund_balance'] = ApiClient.convertToType(data['committed_governmental_fund_balance'], 'Number');
      }
      if (data.hasOwnProperty('unassigned_governmental_fund_balance')) {
        obj['unassigned_governmental_fund_balance'] = ApiClient.convertToType(data['unassigned_governmental_fund_balance'], 'Number');
      }
      if (data.hasOwnProperty('assigned_governmental_fund_balance')) {
        obj['assigned_governmental_fund_balance'] = ApiClient.convertToType(data['assigned_governmental_fund_balance'], 'Number');
      }
      if (data.hasOwnProperty('total_governmental_fund_balance')) {
        obj['total_governmental_fund_balance'] = ApiClient.convertToType(data['total_governmental_fund_balance'], 'Number');
      }
      if (data.hasOwnProperty('general_fund_revenues')) {
        obj['general_fund_revenues'] = ApiClient.convertToType(data['general_fund_revenues'], 'Number');
      }
      if (data.hasOwnProperty('general_fund_expenditures')) {
        obj['general_fund_expenditures'] = ApiClient.convertToType(data['general_fund_expenditures'], 'Number');
      }
      if (data.hasOwnProperty('general_fund_revenues_over_under_expenditure')) {
        obj['general_fund_revenues_over_under_expenditure'] = ApiClient.convertToType(data['general_fund_revenues_over_under_expenditure'], 'Number');
      }
      if (data.hasOwnProperty('governmental_fund_revenues')) {
        obj['governmental_fund_revenues'] = ApiClient.convertToType(data['governmental_fund_revenues'], 'Number');
      }
      if (data.hasOwnProperty('governmental_fund_expenditures')) {
        obj['governmental_fund_expenditures'] = ApiClient.convertToType(data['governmental_fund_expenditures'], 'Number');
      }
      if (data.hasOwnProperty('governmental_fund_revenues_over_under_expenditure')) {
        obj['governmental_fund_revenues_over_under_expenditure'] = ApiClient.convertToType(data['governmental_fund_revenues_over_under_expenditure'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The fiscal year from which the financial data came from
   * @member {Number} fiscal_year
   */
  exports.prototype['fiscal_year'] = undefined;
  /**
   * Government-wide holdings that can be liquidated on short notice
   * @member {Number} current_assets
   */
  exports.prototype['current_assets'] = undefined;
  /**
   * Government-wide holdings not intended for near-term liquidation
   * @member {Number} non_current_assets
   */
  exports.prototype['non_current_assets'] = undefined;
  /**
   * Government-wide consumptions of net position applicable to a future year
   * @member {Number} deferred_outflows
   */
  exports.prototype['deferred_outflows'] = undefined;
  /**
   * Government-wide holdings
   * @member {Number} total_assets
   */
  exports.prototype['total_assets'] = undefined;
  /**
   * Sum of government-wide total assets and deferred outflows of resources
   * @member {Number} total_assets_plus_deferred_outflows
   */
  exports.prototype['total_assets_plus_deferred_outflows'] = undefined;
  /**
   * Government-wide liabilities that typically become due within one year
   * @member {Number} current_liabilities
   */
  exports.prototype['current_liabilities'] = undefined;
  /**
   * Government-wide portion of long term obligations, such as bond and loan debt coming due within the next year
   * @member {Number} current_portion_of_long_term_debt
   */
  exports.prototype['current_portion_of_long_term_debt'] = undefined;
  /**
   * Government-wide liability for employee pensions net of the fiduciary net position of pension plans in which the government has an interest
   * @member {Number} net_pension_liability
   */
  exports.prototype['net_pension_liability'] = undefined;
  /**
   * Government-wide liability for other postemployment benefits (OPEB). These are benefits (such as death benefits, life insurance, disability, and long-term care) that are paid in the period after employment and that are provided separately from a pension plan, as well as healthcare benefits paid in the period after employment, regardless of the manner in which they are provided. OPEB does not include termination benefits or termination payments for sick leave. Liability is reported net of any OPEB assets the government may control.
   * @member {Number} net_opeb_liability
   */
  exports.prototype['net_opeb_liability'] = undefined;
  /**
   * Government-wide liabilities not elsewhere classified
   * @member {Number} all_other_long_term_debt
   */
  exports.prototype['all_other_long_term_debt'] = undefined;
  /**
   * The sum of the Municipality's all other long term debt, net open liability, net pension liability, and current portion of long term debt
   * @member {Number} total_liabilities
   */
  exports.prototype['total_liabilities'] = undefined;
  /**
   * Government-wide acquisitions of net position applicable to a future year
   * @member {Number} deferred_inflows
   */
  exports.prototype['deferred_inflows'] = undefined;
  /**
   * Sum of government-wide liabilities and deferred inflows of resources
   * @member {Number} total_liabilities_plus_deferred_inflows
   */
  exports.prototype['total_liabilities_plus_deferred_inflows'] = undefined;
  /**
   * Government-wide assets and deferred outflows less government-wide liabilities and deferred inflows
   * @member {Number} total_net_position
   */
  exports.prototype['total_net_position'] = undefined;
  /**
   * Net amount of government-wide assets, deferred outflows of resources, liabilities, and deferred inflows of resources that are not included in the determination of net investment in capital assets or the restricted components of net position
   * @member {Number} total_unrestricted_net_position
   */
  exports.prototype['total_unrestricted_net_position'] = undefined;
  /**
   * Decreases in net position that occurred during the past year, government-wide
   * @member {Number} total_expenses
   */
  exports.prototype['total_expenses'] = undefined;
  /**
   * Charges for services is the term used for a broad category of program revenues that arise from charges to customers, applicants, or others who purchase, use, or directly benefit from the goods, services, or privileges provided, or are otherwise directly affected by the services. Revenues in this category include fees charged for specific services, such as water use or garbage collection; licenses and permits, such as dog licenses, liquor licenses, and building permits; operating special assessments, such as for street cleaning or special street lighting; and any other amounts charged to service recipients. Fines and forfeitures are also included in this category because they result from direct charges to those who are otherwise directly affected by a program or service, even though they receive no benefit. Payments from other governments for goods or services should be reported in this category.
   * @member {Number} charges_for_services
   */
  exports.prototype['charges_for_services'] = undefined;
  /**
   * Program-specific grants and contributions - includes revenues arising from mandatory and voluntary nonexchange transactions with other governments, organizations, or individuals that are restricted for use in a particular program. Some grants and contributions consist of capital assets or resources that are restricted for capital purposes—to purchase, construct, or renovate capital assets associated with a specific program. These should be reported separately from grants and contributions that may be used either for operating expenses or for capital expenditures of the program at the discretion of the reporting government. These categories of program revenue are specifically attributable to a program and reduce the net expense of that program to the reporting government. For example, a state may provide an operating grant to a county sheriff's department for a drug-awareness-and-enforcement program.
   * @member {Number} operating_grants_and_contributions
   */
  exports.prototype['operating_grants_and_contributions'] = undefined;
  /**
   * Program-specific grants and contributions - includes revenues arising from mandatory and voluntary nonexchange transactions with other governments, organizations, or individuals that are restricted for use in a particular program. Some grants and contributions consist of capital assets or resources that are restricted for capital purposes—to purchase, construct, or renovate capital assets associated with a specific program. These should be reported separately from grants and contributions that may be used either for operating expenses or for capital expenditures of the program at the discretion of the reporting government. These categories of program revenue are specifically attributable to a program and reduce the net expense of that program to the reporting government. For example, a state may provide a capital grant to finance construction of a new jail.
   * @member {Number} capital_grants_and_contributions
   */
  exports.prototype['capital_grants_and_contributions'] = undefined;
  /**
   * All revenues are general revenues unless they are required to be reported as program revenues. All taxes, even those that are levied for a specific purpose, are general revenues and should be reported by type of tax—for example, sales tax, property tax, franchise tax, income tax. All other nontax revenues (including interest, grants, and contributions) that do not meet the criteria to be reported as program revenues should also be reported as general revenues. General revenues should be reported after total net expense of the government's functions.
   * @member {Number} general_revenues
   */
  exports.prototype['general_revenues'] = undefined;
  /**
   * Government-wide revenues not elsewhere classified
   * @member {Number} other_revenues
   */
  exports.prototype['other_revenues'] = undefined;
  /**
   * Increases in net position that occurred during the past year, government-wide
   * @member {Number} total_revenues
   */
  exports.prototype['total_revenues'] = undefined;
  /**
   * Difference between the government's net position at the end of the fiscal year and the government's net position at the beginning of the fiscal year
   * @member {Number} change_in_net_assets
   */
  exports.prototype['change_in_net_assets'] = undefined;
  /**
   * The portion of general fund balance classified as nonspendable. The nonspendable fund balance classification includes amounts that cannot be spent because they are either (a) not in spendable form or (b) legally or contractually required to be maintained intact. The “not in spendable form” criterion includes items that are not expected to be converted to cash, for example, inventories and prepaid amounts. It also includes the long-term amount of loans and notes receivable, as well as property acquired for resale. However, if the use of the proceeds from the collection of those receivables or from the sale of those properties is restricted, committed, or assigned, then they should be included in the appropriate fund balance classification (restricted, committed, or assigned), rather than nonspendable fund balance. The corpus (or principal) of a permanent fund is an example of an amount that is legally or contractually required to be maintained intact.
   * @member {Number} non_spendable_general_fund_balance
   */
  exports.prototype['non_spendable_general_fund_balance'] = undefined;
  /**
   * The portion of general fund balance classified as restricted. Fund balance should be reported as restricted when constraints placed on the use of resources are either (a) Externally imposed by creditors (such as through debt covenants), grantors, contributors, or laws or regulations of other governments or (b) Imposed by law through constitutional provisions or enabling legislation.
   * @member {Number} restricted_general_fund_balance
   */
  exports.prototype['restricted_general_fund_balance'] = undefined;
  /**
   * The portion of general fund balance classified as committed. Amounts that can only be used for specific purposes pursuant to constraints imposed by formal action of the government’s highest level of decision-making authority should be reported as committed fund balance. Those committed amounts cannot be used for any other purpose unless the government removes or changes the specified use by taking the same type of action (for example, legislation, resolution, ordinance) it employed to previously commit those amounts. The authorization specifying the purposes for which amounts can be used should have the consent of both the legislative and executive branches of the government, if applicable. Committed fund balance also should incorporate contractual obligations to the extent that existing resources in the fund have been specifically committed for use in satisfying those contractual requirements.
   * @member {Number} committed_general_fund_balance
   */
  exports.prototype['committed_general_fund_balance'] = undefined;
  /**
   * The portion of general fund balance classified as unassigned. Unassigned fund balance is the residual classification for the general fund. This classification represents fund balance that has not been assigned to other funds and that has not been restricted, committed, or assigned to specific purposes within the general fund. The general fund should be the only fund that reports a positive unassigned fund balance amount. In other governmental funds, if expenditures incurred for specific purposes exceeded the amounts restricted, committed, or assigned to those purposes, it may be necessary to report a negative unassigned fund balance.
   * @member {Number} unassigned_general_fund_balance
   */
  exports.prototype['unassigned_general_fund_balance'] = undefined;
  /**
   * The portion of general fund balance classified as assigned. Amounts that are constrained by the government’s intent to be used for specific purposes, but are neither restricted nor committed, should be reported as assigned fund balance, except for stabilization arrangements.. Intent should be expressed by (a) the governing body itself or (b) a body (a budget or finance committee, for example) or official to which the governing body has delegated the authority to assign amounts to be used for specific purposes.
   * @member {Number} assigned_general_fund_balance
   */
  exports.prototype['assigned_general_fund_balance'] = undefined;
  /**
   * General fund balance in all classifications. Fund balance is the difference between governmental fund assets and deferred outflows of resources, and liabilities and deferred inflows of resources. It is sometimes referred to as fund equity. The general fund is used to account for and report all financial resources not accounted for and reported in another governmental fund.
   * @member {Number} total_general_fund_balance
   */
  exports.prototype['total_general_fund_balance'] = undefined;
  /**
   * For all governmental funds, the aggregate of fund balances that are classified as nonspendable. The nonspendable fund balance classification includes amounts that cannot be spent because they are either (a) not in spendable form or (b) legally or contractually required to be maintained intact. The “not in spendable form” criterion includes items that are not expected to be converted to cash, for example, inventories and prepaid amounts. It also includes the long-term amount of loans and notes receivable, as well as property acquired for resale. However, if the use of the proceeds from the collection of those receivables or from the sale of those properties is restricted, committed, or assigned, then they should be included in the appropriate fund balance classification (restricted, committed, or assigned), rather than nonspendable fund balance.
   * @member {Number} non_spendable_governmental_fund_balance
   */
  exports.prototype['non_spendable_governmental_fund_balance'] = undefined;
  /**
   * For all governmental funds, the aggregate of fund balances that are classified as restricted. Fund balance should be reported as restricted when constraints placed on the use of resources are either (a) Externally imposed by creditors (such as through debt covenants), grantors, contributors, or laws or regulations of other governments; or (b) Imposed by law through constitutional provisions or enabling legislation.
   * @member {Number} restricted_governmental_fund_balance
   */
  exports.prototype['restricted_governmental_fund_balance'] = undefined;
  /**
   * For all governmental funds, the aggregate of fund balances that are classified as committed. Amounts that can only be used for specific purposes pursuant to constraints imposed by formal action of the government’s highest level of decision-making authority should be reported as committed fund balance. Those committed amounts cannot be used for any other purpose unless the government removes or changes the specified use by taking the same type of action (for example, legislation, resolution, ordinance) it employed to previously commit those amounts. The authorization specifying the purposes for which amounts can be used should have the consent of both the legislative and executive branches of the government, if applicable. Committed fund balance also should incorporate contractual obligations to the extent that existing resources in the fund have been specifically committed for use in satisfying those contractual requirements.
   * @member {Number} committed_governmental_fund_balance
   */
  exports.prototype['committed_governmental_fund_balance'] = undefined;
  /**
   * For all governmental funds, the aggregate of fund balances that are classified as unassigned. Unassigned fund balance is the residual classification for the general fund. This classification represents fund balance that has not been assigned to other funds and that has not been restricted, committed, or assigned to specific purposes within the general fund. The general fund should be the only fund that reports a positive unassigned fund balance amount. In other governmental funds, if expenditures incurred for specific purposes exceeded the amounts restricted, committed, or assigned to those purposes, it may be necessary to report a negative unassigned fund balance.
   * @member {Number} unassigned_governmental_fund_balance
   */
  exports.prototype['unassigned_governmental_fund_balance'] = undefined;
  /**
   * For all governmental funds, the aggregate of fund balances that are classified as assigned. Amounts that are constrained by the government’s intent to be used for specific purposes, but are neither restricted nor committed, should be reported as assigned fund balance, except for stabilization arrangements.. Intent should be expressed by (a) the governing body itself or (b) a body (a budget or finance committee, for example) or official to which the governing body has delegated the authority to assign amounts to be used for specific purposes.
   * @member {Number} assigned_governmental_fund_balance
   */
  exports.prototype['assigned_governmental_fund_balance'] = undefined;
  /**
   * For all governmental funds, the aggregate of all fund balances in any classification. Fund balance is the difference between governmental fund assets and deferred outflows of resources, and liabilities and deferred inflows of resources. It is sometimes referred to as fund equity. Governmental funds are used to account for general government activities that are financed primarily through taxes, intergovernmental revenues, and other nonexchange revenues.
   * @member {Number} total_governmental_fund_balance
   */
  exports.prototype['total_governmental_fund_balance'] = undefined;
  /**
   * Increases in financial resources attributable to the general fund. The general fund is used to account for and report all financial resources not accounted for and reported in another governmental fund.
   * @member {Number} general_fund_revenues
   */
  exports.prototype['general_fund_revenues'] = undefined;
  /**
   * Decreases in financial resources attributable to the general fund. The general fund is used to account for and report all financial resources not accounted for and reported in another governmental fund.
   * @member {Number} general_fund_expenditures
   */
  exports.prototype['general_fund_expenditures'] = undefined;
  /**
   * Difference between general fund revenues and expenditures.  If positive, this amount is called a surplus.  If negative, it represents a deficit. The general fund is used to account for and report all financial resources not accounted for and reported in another governmental fund.
   * @member {Number} general_fund_revenues_over_under_expenditure
   */
  exports.prototype['general_fund_revenues_over_under_expenditure'] = undefined;
  /**
   * Increases in financial resources attributable to any governmental fund. Governmental funds are used to account for general government activities that are financed primarily through taxes, intergovernmental revenues, and other nonexchange revenues.
   * @member {Number} governmental_fund_revenues
   */
  exports.prototype['governmental_fund_revenues'] = undefined;
  /**
   * Decreases in financial resources attributable to any governmental fund. Governmental funds are used to account for general government activities that are financed primarily through taxes, intergovernmental revenues, and other nonexchange revenues.
   * @member {Number} governmental_fund_expenditures
   */
  exports.prototype['governmental_fund_expenditures'] = undefined;
  /**
   * Difference between revenues and expenditures attributable to all governmental funds.  If positive, this amount is called a surplus.  If negative, it represents a deficit. Governmental funds are used to account for general government activities that are financed primarily through taxes, intergovernmental revenues, and other nonexchange revenues.
   * @member {Number} governmental_fund_revenues_over_under_expenditure
   */
  exports.prototype['governmental_fund_revenues_over_under_expenditure'] = undefined;



  return exports;
}));


