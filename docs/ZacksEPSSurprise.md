# ZacksEPSSurprise

#### Properties
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
**epsActual** | **Number** | The actual Non-GAAP EPS figure released by the company, interpreted by Zacks. | [optional] 
**epsActualZacksAdj** | **Number** | The adjustments Zacks made to get to Non-GAAP EPS to reconcile with GAAP EPS. | [optional] 
**epsMeanEstimate** | **Number** | The pre-earnings release mean EPS estimate for the company | [optional] 
**epsAmountDiff** | **Number** | The EPS surprise amount difference | [optional] 
**epsPercentDiff** | **Number** | The EPS surprise percent difference | [optional] 
**epsCountEstimate** | **Number** | The pre-earnings release number of estimates by analysts | [optional] 
**epsStdDevEstimate** | **Number** | The pre-earnings release standard deviation of EPS estimates | [optional] 
**security** | [**SecuritySummary**](SecuritySummary.md) | The Security of the Zacks EPS Surprise | [optional] 



