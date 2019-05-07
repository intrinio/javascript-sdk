# intrinioSDK.ZacksSalesSurpriseSummary

### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The Intrinio ID for the record | [optional] 
**fiscalYear** | **Number** | The company’s fiscal year for the reported period | [optional] 
**fiscalQuarter** | **String** | The company’s fiscal quarter for the reported period | [optional] 
**calendarYear** | **Number** | The closest calendar year for the company’s fiscal year | [optional] 
**calendarQuarter** | **String** | The closest calendar quarter for the company’s fiscal year | [optional] 
**actualReportedDate** | **Date** | The actual report date for the earnings release | [optional] 
**actualReportedTime** | **String** | The actual report time for the earnings release | [optional] 
**actualReportedCode** | **String** | The code cooresponding to the earnings release  BTO &#x3D; BEFORE THE OPEN | DTM &#x3D; DURING THE MARKET | AMC &#x3D; AFTER MARKET CLOSE | [optional] 
**actualReportedDesc** | **String** | The description for the type of earnings release | [optional] 
**lastRevDate** | **Date** | The last revision date for the analyst estimates | [optional] 
**salesActual** | **Number** | The actual Non-GAAP sales figure released by the company, interpreted by Zacks. | [optional] 
**salesActualZacksAdj** | **Number** | The adjustments Zacks made to get to Non-GAAP sales to reconcile with GAAP sales. | [optional] 
**salesActualGaap** | **Number** | The actual GAAP sales figured released by the company | [optional] 
**salesMeanEstimate** | **Number** | The pre-earnings release mean sales estimate for the company sales_count_estimate; the pre-earnings release number of estimates by analysts | [optional] 
**salesAmountDiff** | **Number** | The sales surprise amount difference | [optional] 
**salesPercentDiff** | **Number** | The sales surprise percent difference | [optional] 
**salesStdDevEstimate** | **Number** | The pre-earnings release standard deviation of sales estimates | [optional] 
**security** | [**SecuritySummary**](SecuritySummary.md) | The Security of the Zacks Sales Surprise | [optional] 


