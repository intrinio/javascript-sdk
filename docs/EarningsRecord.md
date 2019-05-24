# intrinioSDK.EarningsRecord

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quarter** | **String** | The letter “Q” followed by the quarter number the earnings information applies to | [optional] 
**timeOfDay** | **String** | Indicates the time of the announcement | [optional] 
**broadcastUrl** | **String** | Link for Conference Call recording | [optional] 
**transcriptUrl** | **String** | Link to the earnings release transcript | [optional] 
**transcriptQuarter** | **String** | The letter “Q” followed by the quarter number the earnings transcript applies to | [optional] 
**transcriptFiscalYear** | **String** | Fiscal year in YYYY format for the earnings transcript | [optional] 
**conferenceCallDate** | **Date** | Date of the conference call | [optional] 
**conferenceCallTime** | **String** | Published time of the conference call | [optional] 
**conferenceCallPhoneNumber** | **String** | Publicly available phone number for replay conference call | [optional] 
**conferenceCallPasscode** | **String** | Passcode for replay conference call | [optional] 
**lastConfirmationDate** | **Date** | Date of last earnings date update by a WSH analyst | [optional] 
**boardOfDirectorsMeetingDate** | **Date** | Date of Board/Shareholder Meeting | [optional] 
**boardOfDirectorsMeetingType** | **String** | The type of meeting - \&quot;B\&quot; indicates a Board of Directors meeting and \&quot;S\&quot; indicates a Shareholder meeting | [optional] 
**companyWebsite** | **String** | Website link for the company | [optional] 
**q1Date** | **Date** | Earnings Date for 1st quarter | [optional] 
**q2Date** | **Date** | Earnings Date for 2nd quarter | [optional] 
**q3Date** | **Date** | Earnings Date for 3rd quarter | [optional] 
**q4Date** | **Date** | Earnings Date for 4th quarter | [optional] 
**type** | **String** | The nature of the next reported earnings date - \&quot;V\&quot; indicates a Verified date, \&quot;T\&quot; indicates that the date was gathered from the company, but is still considered Tentative, and \&quot;I\&quot; indicates that the date is forecased or Inferred | [optional] 
**nextEarningsDate** | **Date** | Next earnings date | [optional] 
**nextEarningsQuarter** | **String** | The quarter of the next earnings release | [optional] 
**nextEarningsFiscalYear** | **Number** | The fiscal year associated with next earnings date and next earnings quarter | [optional] 
**security** | [**SecuritySummary**](SecuritySummary.md) |  | [optional] 


<a name="TimeOfDayEnum"></a>
## Enum: TimeOfDayEnum


* `Before Market` (value: `"Before Market"`)

* `During Market` (value: `"During Market"`)

* `After Market` (value: `"After Market"`)

* `Unspecified` (value: `"Unspecified"`)




<a name="BoardOfDirectorsMeetingTypeEnum"></a>
## Enum: BoardOfDirectorsMeetingTypeEnum


* `B` (value: `"B"`)

* `S` (value: `"S"`)




<a name="TypeEnum"></a>
## Enum: TypeEnum


* `V` (value: `"V"`)

* `T` (value: `"T"`)

* `I` (value: `"I"`)




