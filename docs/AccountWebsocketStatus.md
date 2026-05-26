
[//]: # (CLASS:AccountWebsocketStatus)

[//]: # (KIND:object)

### AccountWebsocketStatus

#### Properties

[//]: # (START_DEFINITION)

Name | Type | Description
------------ | ------------- | -------------
**feed** | String | The feed name for the connection. &nbsp;
**feedConnectionNumber** | Number | The connection number for this account within a feed. &nbsp;
**ip** | String | The IP address detected for the client connection. &nbsp;
**connectedOn** | Date | The UTC time this client connection connected to the server. &nbsp;
**statusUpdatedOn** | Date | The UTC time the server updated this client connection status data. &nbsp;
**isDelayed** | Boolean | Whether this connection is delayed an extra 15 minutes from the source. Note that the Delayed SIP source is already delayed, so this value will be false for those connections. &nbsp;
**isFirehose** | Boolean | The client connection is in firehose mode (all channels subscribed). &nbsp;
**tradeSubscriptions** | Number | The count of channel subscriptions for trade events. &nbsp;
**quoteSubscriptions** | Number | The count of channel subscriptions for ask and bid events. &nbsp;
**refreshSubscriptions** | Number | The count of channel subscriptions for refresh events (OPRA options feed only). &nbsp;
**unusualActivitySubscriptions** | Number | The count of channel subscriptions for unusual activity events (OPRA options feed only). &nbsp;
**packetsPerSecond** | Number | The packets per second sent since the last status update. &nbsp;
**totalPacketsSent** | String | The total packets sent since the beginning of this connection.  A packet is a group of events sent as one message over the websocket. &nbsp;
**eventsPerSecond** | Number | The events per second sent since the last status update. &nbsp;
**totalEvents** | String | The total events sent to this connection&#39;s server-side queue since the beginning of this connection.  An event is an individual occurrence of a trade, quote, etc. &nbsp;
**totalSentEvents** | String | The total events sent to the client inside packets. A packet is a group of events sent as one message over the websocket. &nbsp;
**totalDrops** | String | The total number of events dropped from the connection&#39;s server-side queue.  Event drops happen when the connection&#39;s server-side queue is full. The server-side queue fills due to client-side connections not receiving packets fast enough, which can be caused by a slow network, or clients not decoupling processing of packets from the receipt of packets. &nbsp;
**queueDepthPercentage** | Number | The percentage that the connection&#39;s server-side queue is full. 0-100. &nbsp;

[//]: # (END_DEFINITION)





