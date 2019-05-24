# intrinioSDK.StockPriceAdjustmentSummary

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_date** | **Date** | The date on which the adjustment occurred. The adjustment should be applied to all stock prices before this date. | [optional] 
**factor** | **Number** | The factor by which to multiply stock prices before this date, in order to calculate historically-adjusted stock prices. | [optional] 
**dividend** | **Number** | The dividend amount, if a dividend was paid. | [optional] 
**dividendCurrency** | **String** | The currency of the dividend, if known. | [optional] 
**splitRatio** | **Number** | The ratio of the stock split, if a stock split occurred. | [optional] 


