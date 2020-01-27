
[//]: # (CLASS:Fundamental)

[//]: # (KIND:object)

### Fundamental

#### Properties

[//]: # (START_DEFINITION)

Name | Type | Description
------------ | ------------- | -------------
**id** | String | The Intrinio ID of the Fundamental &nbsp;
**statementCode** | String | The code of the financial statement that the Fundamental represents &nbsp;
**fiscalYear** | Number | The fiscal year &nbsp;
**fiscalPeriod** | String | The fiscal period &nbsp;
**type** | String | The type of Fundamental &nbsp;
**startDate** | Date | The period start date &nbsp;
**endDate** | Date | The period start date &nbsp;
**filingDate** | Date | The date and time when the Fundamental was filed with the SEC &nbsp;
**isLatest** | Boolean | Is this the latest fundamental available based on the company&#39;s most recent filings? Use the Lookup Fundamental endpoint to find the latest fundamental (&lt;a href&#x3D;\&quot;https://docs.intrinio.com/documentation/web_api/lookup_fundamental_v2\&quot; target&#x3D;\&quot;_blank\&quot;&gt;reference&lt;/a&gt;) &nbsp;
**company** | [**CompanySummary**](CompanySummary.md) | The Company that the Fundamental was belongs to &nbsp;

[//]: # (END_DEFINITION)


[//]: # (CONTAINED_CLASS:CompanySummary)



<br/>

#### Enum: TypeEnum**

Name | Value
---- | -----
reported | &quot;reported&quot;
restated | &quot;restated&quot;
calculated | &quot;calculated&quot;



