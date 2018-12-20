# intrinioSDK.StockPriceSummary

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_date** | **Date** | The calendar date that the stock price represents. For non-daily stock prices, this represents the last day in the period (end of the week, month, quarter, year, etc) | [optional] 
**intraperiod** | **Boolean** | If true, the stock price represents an unfinished period (be it day, week, quarter, month, or year), meaning that the close price is the latest price available, not the official close price for the period | [optional] 
**frequency** | **String** | The type of period that the stock price represents | [optional] 
**open** | **Number** | The price at the beginning of the period | [optional] 
**high** | **Number** | The highest price over the span of the period | [optional] 
**low** | **Number** | The lowest price over the span of the period | [optional] 
**close** | **Number** | The price at the end of the period | [optional] 
**volume** | **Number** | The number of shares exchanged during the period | [optional] 
**adjOpen** | **Number** | The price at the beginning of the period, adjusted for splits and dividends | [optional] 
**adjHigh** | **Number** | The highest price over the span of the period, adjusted for splits and dividends | [optional] 
**adjLow** | **Number** | The lowest price over the span of the period, adjusted for splits and dividends | [optional] 
**adjClose** | **Number** | The price at the end of the period, adjusted for splits and dividends | [optional] 
**adjVolume** | **Number** | The number of shares exchanged during the period, adjusted for splits and dividends | [optional] 


<a name="FrequencyEnum"></a>
## Enum: FrequencyEnum


* `daily` (value: `"daily"`)

* `weekly` (value: `"weekly"`)

* `monthly` (value: `"monthly"`)

* `quarterly` (value: `"quarterly"`)

* `yearly` (value: `"yearly"`)




