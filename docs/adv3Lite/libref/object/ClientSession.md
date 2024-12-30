[ClientSession]{.title}[class]{.type}

[webui.t](../file/webui.t.html)\[[379](../source/webui.t.html#379)\]

[Superclass\
Tree](#_SuperClassTree_)

[Subclass\
Tree](#_SubClassTree_)

[Global\
Objects](#_ObjectSummary_)

[Property\
Summary](#_PropSummary_)

[Method\
Summary](#_MethodSummary_)

[Property\
Details](#_Properties_)

[Method\
Details](#_Methods_)

::: fdesc
Client session. This represents a connection to one browser (or other
client application). Each browser client is a separate session, so we
create one instance of this class per connected browser. Note that
browser instances don\'t necessarily represent different users - a
single user could open multiple browser windows on the same server.

We identify each browser instance via a session cookie, which we
establish when the client connects. The browser sends the cookie with
each subsequent request, allowing us to tie the request to the browser
session we previously set up.

`class `**`ClientSession`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`ClientSession`**\
`         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

*(none)* []{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`clientKey`](#clientKey)`  `[`downloads`](#downloads)`  `[`ifdbTuid`](#ifdbTuid)`  `[`isAlive`](#isAlive)`  `[`isPrimary`](#isPrimary)`  `[`lastEventTime`](#lastEventTime)`  `[`pendingEvts`](#pendingEvts)`  `[`pendingReqs`](#pendingReqs)`  `[`screenName`](#screenName)`  `[`storageSID`](#storageSID)`  `[`uiPrefs`](#uiPrefs)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`addDownload`](#addDownload)`  `[`allDownloads`](#allDownloads)`  `[`broadcastDownload`](#broadcastDownload)`  `[`broadcastEvent`](#broadcastEvent)`  `[`cancelDownload`](#cancelDownload)`  `[`checkDisconnect`](#checkDisconnect)`  `[`construct`](#construct)`  `[`disconnectAll`](#disconnectAll)`  `[`find`](#find)`  `[`flushEvents`](#flushEvents)`  `[`getPrimary`](#getPrimary)`  `[`processQueues`](#processQueues)`  `[`requestEvent`](#requestEvent)`  `[`sendEvent`](#sendEvent)`  `[`sendKeepAlive`](#sendKeepAlive)`  `[`setDefaultScreenName`](#setDefaultScreenName)`  `[`shutdownWait`](#shutdownWait)`  `[`updateEventTime`](#updateEventTime)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#clientKey}

`clientKey`

[webui.t](../file/webui.t.html)\[[439](../source/webui.t.html#439)\]

::: desc
The client session key. This identifies the client across requests. We
send this to the client as a cookie when they connect, so we get it back
on each request.
:::

[]{#downloads}

`downloads`

[webui.t](../file/webui.t.html)\[[619](../source/webui.t.html#619)\]

::: desc
this client\'s list of downloadable temporary files
:::

[]{#ifdbTuid}

`ifdbTuid`

[webui.t](../file/webui.t.html)\[[422](../source/webui.t.html#422)\]

::: desc
the client\'s IFDB user ID (a \"TUID\"), if logged in to IFDB
:::

[]{#isAlive}

`isAlive`

[webui.t](../file/webui.t.html)\[[463](../source/webui.t.html#463)\]

::: desc
Is this session alive? When we detect that the client has disconnected,
we\'ll set this to nil. When waiting for a client in a modal event loop,
this can be used to terminate the wait if the client disconnects.
:::

[]{#isPrimary}

`isPrimary`

[webui.t](../file/webui.t.html)\[[455](../source/webui.t.html#455)\]

::: desc
Am I the primary player? This is true if the player connected using the
primary session key. Collaborative players join through the separate
collaborative session key.
:::

[]{#lastEventTime}

`lastEventTime`

[webui.t](../file/webui.t.html)\[[472](../source/webui.t.html#472)\]

::: desc
Last request time, in system ticks (ms). We use this to determine how
long it\'s been since we\'ve heard from the client, for timeout
purposes. This is updated any time we receive a command or event request
from the client, and each time we successfully send an event reply.
:::

[]{#pendingEvts}

`pendingEvts`

[webui.t](../file/webui.t.html)\[[432](../source/webui.t.html#432)\]

::: desc
The client\'s event queue. When a server-to-client event occurs, we post
it to each current client\'s queue. When the client sends a get-event
request, we satisfy it out of this queue.
:::

[]{#pendingReqs}

`pendingReqs`

[webui.t](../file/webui.t.html)\[[425](../source/webui.t.html#425)\]

::: desc
the list of pending event requests from this client
:::

[]{#screenName}

`screenName`

[webui.t](../file/webui.t.html)\[[406](../source/webui.t.html#406)\]

::: desc
The client\'s \"screen name\" - this is the user-visible name that
we\'ll show other users to identify commands and chat messages entered
by this client.
:::

[]{#storageSID}

`storageSID`

[webui.t](../file/webui.t.html)\[[448](../source/webui.t.html#448)\]

::: desc
The storage server session key for the user connected to this session,
if any. We can have multiple users logged in to the game in
collaborative play mode, each with their own separate storage server
session. This allows each user to have their own private preference
settings, saved games, etc.
:::

[]{#uiPrefs}

`uiPrefs`

[webui.t](../file/webui.t.html)\[[399](../source/webui.t.html#399)\]

::: desc
the UI preferences object for this session
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#addDownload}

`addDownload (desc)`

[webui.t](../file/webui.t.html)\[[597](../source/webui.t.html#597)\]

::: desc
add a download to this client
:::

[]{#allDownloads}

`allDownloads ( )`

[webui.t](../file/webui.t.html)\[[622](../source/webui.t.html#622)\]

::: desc
get a list of all of my downloadable files
:::

[]{#broadcastDownload}

`broadcastDownload (desc)`

[webui.t](../file/webui.t.html)\[[590](../source/webui.t.html#590)\]

::: desc
broadcast a downloadable file to all clients
:::

[]{#broadcastEvent}

`broadcastEvent (msg)`

[webui.t](../file/webui.t.html)\[[478](../source/webui.t.html#478)\]

::: desc
class method: broadcast an event message to all connected clients
:::

[]{#cancelDownload}

`cancelDownload (desc)`

[webui.t](../file/webui.t.html)\[[607](../source/webui.t.html#607)\]

::: desc
Cancel a downloadable file. Removes the file from the download list and
notifies the client that the file is no longer available.
:::

[]{#checkDisconnect}

`checkDisconnect ( )`

[webui.t](../file/webui.t.html)\[[693](../source/webui.t.html#693)\]

::: desc
Check to see if the client is still alive. If the client has no pending
event requests, and we haven\'t heard from the client in more than the
client session timeout interval, assume the client is no longer
connected and kill the session object.

This should be called whenever a sending a reply to a request fails with
a Socket Disconnect exception. We also run this periodically during
routine housekeeping to check for clients that haven\'t even bothered to
send a request.
:::

[]{#construct}

`construct (skey, ssid)`

[webui.t](../file/webui.t.html)\[[380](../source/webui.t.html#380)\]

::: desc
*no description available*
:::

[]{#disconnectAll}

`disconnectAll ( )`

[webui.t](../file/webui.t.html)\[[714](../source/webui.t.html#714)\]

::: desc
Class method: forcibly disconnect all clients. This simply deletes the
list of active clients and deletes any pending events in their queues.
This doesn\'t actually terminate their network connections, but simply
clears out any pending work for each client that we\'ve initiated on the
server side.
:::

[]{#find}

`find (key)`

[webui.t](../file/webui.t.html)\[[727](../source/webui.t.html#727)\]

::: desc
Class method: Find a client session, given the session key or an
HTTPRequest object.
:::

[]{#flushEvents}

`flushEvents ( )`

[webui.t](../file/webui.t.html)\[[501](../source/webui.t.html#501)\]

::: desc
flush outstanding events for this client
:::

[]{#getPrimary}

`getPrimary ( )`

[webui.t](../file/webui.t.html)\[[755](../source/webui.t.html#755)\]

::: desc
Get the primary session. This is the session for the original initiating
user (the \"host\" in a multi-user game).
:::

[]{#processQueues}

`processQueues ( )`

[webui.t](../file/webui.t.html)\[[625](../source/webui.t.html#625)\]

::: desc
process the request and response queues
:::

[]{#requestEvent}

`requestEvent (req)`

[webui.t](../file/webui.t.html)\[[493](../source/webui.t.html#493)\]

::: desc
receive an event request from the client
:::

[]{#sendEvent}

`sendEvent (msg)`

[webui.t](../file/webui.t.html)\[[485](../source/webui.t.html#485)\]

::: desc
send an event to this client
:::

[]{#sendKeepAlive}

`sendKeepAlive ( )`

[webui.t](../file/webui.t.html)\[[553](../source/webui.t.html#553)\]

::: desc
Send a keep-alive reply to each pending request from this client that\'s
been waiting for longer than the timeout interval.

Javascript clients in principle will wait indefinitely for an
XmlHttpRequest to complete, but in practice browsers tend to set fairly
long but finite time limits. If the time limit is exceeded for a
request, the client will fail the request with an error. To prevent
this, our main event loop (processNetRequests) periodically calls this
routine if no other events have occurred recently. We\'ll clear out the
pending event request queue for each client by sending a no-op reply to
each event. This tells the client that the server is still alive and
connected but has nothing new to report.
:::

[]{#setDefaultScreenName}

`setDefaultScreenName ( )`

[webui.t](../file/webui.t.html)\[[409](../source/webui.t.html#409)\]

::: desc
set the default screen name for a client
:::

[]{#shutdownWait}

`shutdownWait (timeout)`

[webui.t](../file/webui.t.html)\[[675](../source/webui.t.html#675)\]

::: desc
wait for the queues to empty in preparation for shutting down
:::

[]{#updateEventTime}

`updateEventTime ( )`

[webui.t](../file/webui.t.html)\[[475](../source/webui.t.html#475)\]

::: desc
update the last event time for this client
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
