
[//]: # (CLASS:ZacksAnalystRatingSnapshot)

[//]: # (KIND:object)

### ZacksAnalystRatingSnapshot

#### Properties

[//]: # (START_DEFINITION)

Name | Type | Description
------------ | ------------- | -------------
**type** | String | The snapshot type, signifying the age of the ratings data from the snapshot date. &nbsp;
**snapshotDate** | Date | The date of the snapshot, when data was recorded. &nbsp;
**ratingDate** | Date | The date of the latest rating for the snapshot timeframe. This is the effective date of the ratings data. &nbsp;
**mean** | Number | The mean (average) weighing of analyst recommendations, from 1 (strong buy) to 5 (strong sell). &nbsp;
**percentile** | Number | The percentile of the mean, derived by comparing to all securities rated by analysts as of the rating date, ranging 0.0 (strong buy) to 1.0 (strong sell). &nbsp;
**strongBuys** | Number | The number of analysts recommending Strong Buy. &nbsp;
**buys** | Number | The number of analysts recommending Buy. &nbsp;
**holds** | Number | The number of analysts recommending Hold. &nbsp;
**sells** | Number | The number of analysts recommending Sell. &nbsp;
**strongSells** | Number | The number of analysts recommending Strong Sell. &nbsp;
**total** | Number | The total number of analysts recommendations. &nbsp;

[//]: # (END_DEFINITION)





