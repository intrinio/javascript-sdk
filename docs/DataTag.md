
[//]: # (CLASS:DataTag)

[//]: # (KIND:object)

### DataTag

#### Properties

[//]: # (START_DEFINITION)

Name | Type | Description
------------ | ------------- | -------------
**id** | String | The Intrinio ID for the Data Tag &nbsp;
**name** | String | The readable name of the Data Tag &nbsp;
**tag** | String | The code-name of the Data Tag &nbsp;
**statementCode** | String | The code of the financial statement to which this Data Tag belongs &nbsp;
**statementType** | String | The format of the financial statment to which this Data Tag belongs &nbsp;
**parent** | String | The parent Data Tag forming the statement relationship with the factor &nbsp;
**sequence** | Number | The order in which the Data Tag appears in its logical group (such as a financial statement) &nbsp;
**factor** | String | The operator forming the statement relationship between the child Data Tag (or Data Tags) and the parent Data Tag &nbsp;
**balance** | String | Whether the Data Tag represents a credit or debit &nbsp;
**type** | String | The nature of the Data Tag, operating or nonoperating &nbsp;
**unit** | String | The unit of the Data Tag &nbsp;

[//]: # (END_DEFINITION)



<br/>

#### Enum: StatementTypeEnum**

Name | Value
---- | -----
financial | &quot;financial&quot;
industrial | &quot;industrial&quot;



