---
layout: docs
---
<span class="title">ClientSession</span><span class="type">class</span>

[webui.t](../file/webui.t.html)\[[379](../source/webui.t.html#379)\]

[Superclass  
Tree](#_SuperClassTree_)

[Subclass  
Tree](#_SubClassTree_)

[Global  
Objects](#_ObjectSummary_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)

<div class="fdesc">

Client session. This represents a connection to one browser (or other
client application). Each browser client is a separate session, so we
create one instance of this class per connected browser. Note that
browser instances don't necessarily represent different users - a single
user could open multiple browser windows on the same server.

We identify each browser instance via a session cookie, which we
establish when the client connects. The browser sends the cookie with
each subsequent request, allowing us to tie the request to the browser
session we previously set up.

`class `**`ClientSession`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ClientSession`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`clientKey`](#clientKey)`  `[`downloads`](#downloads)`  `[`ifdbTuid`](#ifdbTuid)`  `[`isAlive`](#isAlive)`  `[`isPrimary`](#isPrimary)`  `[`lastEventTime`](#lastEventTime)`  `[`pendingEvts`](#pendingEvts)`  `[`pendingReqs`](#pendingReqs)`  `[`screenName`](#screenName)`  `[`storageSID`](#storageSID)`  `[`uiPrefs`](#uiPrefs)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`addDownload`](#addDownload)`  `[`allDownloads`](#allDownloads)`  `[`broadcastDownload`](#broadcastDownload)`  `[`broadcastEvent`](#broadcastEvent)`  `[`cancelDownload`](#cancelDownload)`  `[`checkDisconnect`](#checkDisconnect)`  `[`construct`](#construct)`  `[`disconnectAll`](#disconnectAll)`  `[`find`](#find)`  `[`flushEvents`](#flushEvents)`  `[`getPrimary`](#getPrimary)`  `[`processQueues`](#processQueues)`  `[`requestEvent`](#requestEvent)`  `[`sendEvent`](#sendEvent)`  `[`sendKeepAlive`](#sendKeepAlive)`  `[`setDefaultScreenName`](#setDefaultScreenName)`  `[`shutdownWait`](#shutdownWait)`  `[`updateEventTime`](#updateEventTime)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="clientKey"></span>

`clientKey`

[webui.t](../file/webui.t.html)\[[439](../source/webui.t.html#439)\]

<div class="desc">

The client session key. This identifies the client across requests. We
send this to the client as a cookie when they connect, so we get it back
on each request.

</div>

<span id="downloads"></span>

`downloads`

[webui.t](../file/webui.t.html)\[[619](../source/webui.t.html#619)\]

<div class="desc">

this client's list of downloadable temporary files

</div>

<span id="ifdbTuid"></span>

`ifdbTuid`

[webui.t](../file/webui.t.html)\[[422](../source/webui.t.html#422)\]

<div class="desc">

the client's IFDB user ID (a "TUID"), if logged in to IFDB

</div>

<span id="isAlive"></span>

`isAlive`

[webui.t](../file/webui.t.html)\[[463](../source/webui.t.html#463)\]

<div class="desc">

Is this session alive? When we detect that the client has disconnected,
we'll set this to nil. When waiting for a client in a modal event loop,
this can be used to terminate the wait if the client disconnects.

</div>

<span id="isPrimary"></span>

`isPrimary`

[webui.t](../file/webui.t.html)\[[455](../source/webui.t.html#455)\]

<div class="desc">

Am I the primary player? This is true if the player connected using the
primary session key. Collaborative players join through the separate
collaborative session key.

</div>

<span id="lastEventTime"></span>

`lastEventTime`

[webui.t](../file/webui.t.html)\[[472](../source/webui.t.html#472)\]

<div class="desc">

Last request time, in system ticks (ms). We use this to determine how
long it's been since we've heard from the client, for timeout purposes.
This is updated any time we receive a command or event request from the
client, and each time we successfully send an event reply.

</div>

<span id="pendingEvts"></span>

`pendingEvts`

[webui.t](../file/webui.t.html)\[[432](../source/webui.t.html#432)\]

<div class="desc">

The client's event queue. When a server-to-client event occurs, we post
it to each current client's queue. When the client sends a get-event
request, we satisfy it out of this queue.

</div>

<span id="pendingReqs"></span>

`pendingReqs`

[webui.t](../file/webui.t.html)\[[425](../source/webui.t.html#425)\]

<div class="desc">

the list of pending event requests from this client

</div>

<span id="screenName"></span>

`screenName`

[webui.t](../file/webui.t.html)\[[406](../source/webui.t.html#406)\]

<div class="desc">

The client's "screen name" - this is the user-visible name that we'll
show other users to identify commands and chat messages entered by this
client.

</div>

<span id="storageSID"></span>

`storageSID`

[webui.t](../file/webui.t.html)\[[448](../source/webui.t.html#448)\]

<div class="desc">

The storage server session key for the user connected to this session,
if any. We can have multiple users logged in to the game in
collaborative play mode, each with their own separate storage server
session. This allows each user to have their own private preference
settings, saved games, etc.

</div>

<span id="uiPrefs"></span>

`uiPrefs`

[webui.t](../file/webui.t.html)\[[399](../source/webui.t.html#399)\]

<div class="desc">

the UI preferences object for this session

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="addDownload"></span>

`addDownload (desc)`

[webui.t](../file/webui.t.html)\[[597](../source/webui.t.html#597)\]

<div class="desc">

add a download to this client

</div>

<span id="allDownloads"></span>

`allDownloads ( )`

[webui.t](../file/webui.t.html)\[[622](../source/webui.t.html#622)\]

<div class="desc">

get a list of all of my downloadable files

</div>

<span id="broadcastDownload"></span>

`broadcastDownload (desc)`

[webui.t](../file/webui.t.html)\[[590](../source/webui.t.html#590)\]

<div class="desc">

broadcast a downloadable file to all clients

</div>

<span id="broadcastEvent"></span>

`broadcastEvent (msg)`

[webui.t](../file/webui.t.html)\[[478](../source/webui.t.html#478)\]

<div class="desc">

class method: broadcast an event message to all connected clients

</div>

<span id="cancelDownload"></span>

`cancelDownload (desc)`

[webui.t](../file/webui.t.html)\[[607](../source/webui.t.html#607)\]

<div class="desc">

Cancel a downloadable file. Removes the file from the download list and
notifies the client that the file is no longer available.

</div>

<span id="checkDisconnect"></span>

`checkDisconnect ( )`

[webui.t](../file/webui.t.html)\[[693](../source/webui.t.html#693)\]

<div class="desc">

Check to see if the client is still alive. If the client has no pending
event requests, and we haven't heard from the client in more than the
client session timeout interval, assume the client is no longer
connected and kill the session object.

This should be called whenever a sending a reply to a request fails with
a Socket Disconnect exception. We also run this periodically during
routine housekeeping to check for clients that haven't even bothered to
send a request.

</div>

<span id="construct"></span>

`construct (skey, ssid)`

[webui.t](../file/webui.t.html)\[[380](../source/webui.t.html#380)\]

<div class="desc">

*no description available*

</div>

<span id="disconnectAll"></span>

`disconnectAll ( )`

[webui.t](../file/webui.t.html)\[[714](../source/webui.t.html#714)\]

<div class="desc">

Class method: forcibly disconnect all clients. This simply deletes the
list of active clients and deletes any pending events in their queues.
This doesn't actually terminate their network connections, but simply
clears out any pending work for each client that we've initiated on the
server side.

</div>

<span id="find"></span>

`find (key)`

[webui.t](../file/webui.t.html)\[[727](../source/webui.t.html#727)\]

<div class="desc">

Class method: Find a client session, given the session key or an
HTTPRequest object.

</div>

<span id="flushEvents"></span>

`flushEvents ( )`

[webui.t](../file/webui.t.html)\[[501](../source/webui.t.html#501)\]

<div class="desc">

flush outstanding events for this client

</div>

<span id="getPrimary"></span>

`getPrimary ( )`

[webui.t](../file/webui.t.html)\[[755](../source/webui.t.html#755)\]

<div class="desc">

Get the primary session. This is the session for the original initiating
user (the "host" in a multi-user game).

</div>

<span id="processQueues"></span>

`processQueues ( )`

[webui.t](../file/webui.t.html)\[[625](../source/webui.t.html#625)\]

<div class="desc">

process the request and response queues

</div>

<span id="requestEvent"></span>

`requestEvent (req)`

[webui.t](../file/webui.t.html)\[[493](../source/webui.t.html#493)\]

<div class="desc">

receive an event request from the client

</div>

<span id="sendEvent"></span>

`sendEvent (msg)`

[webui.t](../file/webui.t.html)\[[485](../source/webui.t.html#485)\]

<div class="desc">

send an event to this client

</div>

<span id="sendKeepAlive"></span>

`sendKeepAlive ( )`

[webui.t](../file/webui.t.html)\[[553](../source/webui.t.html#553)\]

<div class="desc">

Send a keep-alive reply to each pending request from this client that's
been waiting for longer than the timeout interval.

Javascript clients in principle will wait indefinitely for an
XmlHttpRequest to complete, but in practice browsers tend to set fairly
long but finite time limits. If the time limit is exceeded for a
request, the client will fail the request with an error. To prevent
this, our main event loop (processNetRequests) periodically calls this
routine if no other events have occurred recently. We'll clear out the
pending event request queue for each client by sending a no-op reply to
each event. This tells the client that the server is still alive and
connected but has nothing new to report.

</div>

<span id="setDefaultScreenName"></span>

`setDefaultScreenName ( )`

[webui.t](../file/webui.t.html)\[[409](../source/webui.t.html#409)\]

<div class="desc">

set the default screen name for a client

</div>

<span id="shutdownWait"></span>

`shutdownWait (timeout)`

[webui.t](../file/webui.t.html)\[[675](../source/webui.t.html#675)\]

<div class="desc">

wait for the queues to empty in preparation for shutting down

</div>

<span id="updateEventTime"></span>

`updateEventTime ( )`

[webui.t](../file/webui.t.html)\[[475](../source/webui.t.html#475)\]

<div class="desc">

update the last event time for this client

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
