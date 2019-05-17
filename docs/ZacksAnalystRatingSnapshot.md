# ZacksAnalystRatingSnapshot

### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The snapshot type, signifying the age of the ratings data from the snapshot date. | [optional] 
**snapshotDate** | **Date** | The date of the snapshot, when data was recorded. | [optional] 
**ratingDate** | **Date** | The date of the latest rating for the snapshot timeframe. This is the effective date of the ratings data. | [optional] 
**mean** | **Number** | The mean (average) weighing of analyst recommendations, from 1 (strong buy) to 5 (strong sell). | [optional] 
**percentile** | **Number** | The percentile of the mean, derived by comparing to all securities rated by analysts as of the rating date, ranging 0.0 (strong buy) to 1.0 (strong sell). | [optional] 
**strongBuys** | **Number** | The number of analysts recommending Strong Buy. | [optional] 
**buys** | **Number** | The number of analysts recommending Buy. | [optional] 
**holds** | **Number** | The number of analysts recommending Hold. | [optional] 
**sells** | **Number** | The number of analysts recommending Sell. | [optional] 
**strongSells** | **Number** | The number of analysts recommending Strong Sell. | [optional] 
**total** | **Number** | The total number of analysts recommendations. | [optional] 



