
[//]: # (CLASS:CompanyNews)

[//]: # (KIND:object)

### CompanyNews

#### Properties

[//]: # (START_DEFINITION)

Name | Type | Description
------------ | ------------- | -------------
**id** | String | The Intrinio ID for the news article &nbsp;
**title** | String | The title of the news article &nbsp;
**publicationDate** | Date | The publication date of the news article &nbsp;
**url** | String | The url of the news article &nbsp;
**summary** | String | A summary of the news article &nbsp;
**source** | String | The news source. &nbsp;
**company** | [**CompanySummary**](CompanySummary.md) | The Company to which the new article pertains &nbsp;
**topics** | [**[NewsTopic]**](NewsTopic.md) |  &nbsp;
**copyright** | String | The copyright of the news article &nbsp;
**language** | String | The language code of the news article &nbsp;
**wordCount** | Number | The word count of the news article &nbsp;
**spam** | Boolean | Whether the news article is marked as spam or not &nbsp;
**businessRelevance** | Number | How strongly correlated the news article is to the business &nbsp;
**articleSentiment** | String | The news sentiment. &nbsp;
**articleSentimentConfidence** | Number | The confidence score of the sentiment rating &nbsp;
**body** | String | The article body. Requires additional access. &nbsp;

[//]: # (END_DEFINITION)


[//]: # (CONTAINED_CLASS:CompanySummary)


[//]: # (CONTAINED_CLASS:NewsTopic)



<br/>

#### Enum: SourceEnum**

Name | Value
---- | -----
yahoo | &quot;yahoo&quot;
moody | &quot;moody&quot;
moody_us_news | &quot;moody_us_news&quot;
moody_us_press_releases | &quot;moody_us_press_releases&quot;

<br/>

#### Enum: ArticleSentimentEnum**

Name | Value
---- | -----
positive | &quot;positive&quot;
neutral | &quot;neutral&quot;
negative | &quot;negative&quot;



