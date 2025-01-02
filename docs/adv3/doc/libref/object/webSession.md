---
layout: docs
---
<span class="title">webSession</span><span class="type">object</span>

[webui.t](../file/webui.t.html)\[[145](../source/webui.t.html#145)\]

[Superclass  
Tree](#_SuperClassTree_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)

<div class="fdesc">

Web UI Session object. This keeps track of miscellaneous items
associated with the game session.

`transient `**`webSession`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`webSession`**  
`         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`clientSessions`](#clientSessions)[`collabKey`](#collabKey)[`everHadClient`](#everHadClient)[`hkTime`](#hkTime)[`lastClientTime`](#lastClientTime)[`launcherGameID`](#launcherGameID)[`launcherUsername`](#launcherUsername)[`server`](#server)[`sessionKey`](#sessionKey)[`storageSID`](#storageSID)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`addClient`](#addClient)[`connectUI`](#connectUI)[`getCollabUrl`](#getCollabUrl)[`getFullUrl`](#getFullUrl)[`housekeeping`](#housekeeping)[`removeClient`](#removeClient)[`validateKey`](#validateKey)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="clientSessions"></span>

`clientSessions`

[webui.t](../file/webui.t.html)\[[272](../source/webui.t.html#272)\]

<div class="desc">

list of active client sessions (ClientSession objects)

</div>

<span id="collabKey"></span>

`collabKey`

[webui.t](../file/webui.t.html)\[[199](../source/webui.t.html#199)\]

<div class="desc">

The collaborative session key. This is a secondary session key that
allows additional users to connect to the session for collaborative
play.

</div>

<span id="everHadClient"></span>

`everHadClient`

[webui.t](../file/webui.t.html)\[[352](../source/webui.t.html#352)\]

<div class="desc">

have we ever had a client connection?

</div>

<span id="hkTime"></span>

`hkTime`

[webui.t](../file/webui.t.html)\[[346](../source/webui.t.html#346)\]

<div class="desc">

system time (ms ticks) of next scheduled housekeeping pass

</div>

<span id="lastClientTime"></span>

`lastClientTime`

[webui.t](../file/webui.t.html)\[[349](../source/webui.t.html#349)\]

<div class="desc">

the last time we noticed that we had a client connected

</div>

<span id="launcherGameID"></span>

`launcherGameID`

[webui.t](../file/webui.t.html)\[[236](../source/webui.t.html#236)\]

<div class="desc">

The launcher's game ID. This is the ID passed from the web server that
launched the game, to let us know how the game is identified in the
launcher database. This is typically an IFDB TUID string.

</div>

<span id="launcherUsername"></span>

`launcherUsername`

[webui.t](../file/webui.t.html)\[[243](../source/webui.t.html#243)\]

<div class="desc">

The launcher's user name. This is passed from the web server that
launched the game, to let us know the host user's screen name. We use
this as the user's default screen name in multi-user games.

</div>

<span id="server"></span>

`server`

[webui.t](../file/webui.t.html)\[[290](../source/webui.t.html#290)\]

<div class="desc">

the HTTPServer object running our web session

</div>

<span id="sessionKey"></span>

`sessionKey`

[webui.t](../file/webui.t.html)\[[192](../source/webui.t.html#192)\]

<div class="desc">

The session key. This identifies the server as a whole, and is
essentially an authentication mechanism that lets clients prove they got
our address from an authorized source (rather than just stumbling across
it via a port scan, say). Clients must hand this to us on each request,
either via a URL query parameter or via a cookie. The normal setup (via
WebResourceInit) is for the client to send us the key as a URL parameter
on the initial request, at which point we'll pass it back as a
set-cookie, removing the need for the client to include the key in
subsequent URLs.

The key is just a random number that's long enough that an interloper
couldn't hope to guess it. We generate this on the first evaluation, and
it remains fixed at that point for as long as we're running.

</div>

<span id="storageSID"></span>

`storageSID`

[webui.t](../file/webui.t.html)\[[257](../source/webui.t.html#257)\]

<div class="desc">

The primary storage server session ID, for the user who launched the
server. If the user who launched the game logged in to a cloud storage
server, this is the session ID that we use to transact business with the
server on behalf of this logged-in user. This token identifies and
authenticates the user, but it's ephemeral and it's only valid for the
current game server session, so it's not quite like a password. This is
the session for the launch user only; if other collaborative users join,
they can get their own session IDs that will allow them to store files
under their own private user folders on the server.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="addClient"></span>

`addClient (s)`

[webui.t](../file/webui.t.html)\[[275](../source/webui.t.html#275)\]

<div class="desc">

add a client session

</div>

<span id="connectUI"></span>

`connectUI (srv)`

[webui.t](../file/webui.t.html)\[[160](../source/webui.t.html#160)\]

<div class="desc">

Connect to the UI. By default, we ask the webMainWin object to establish
a connection, and we save the server object internally for future
reference.

</div>

<span id="getCollabUrl"></span>

`getCollabUrl ( )`

[webui.t](../file/webui.t.html)\[[264](../source/webui.t.html#264)\]

<div class="desc">

Get the collaborative player launch URL. This is a URL that the host can
send to other players who wish to join the session as collaborative
users.

</div>

<span id="getFullUrl"></span>

`getFullUrl (resname)`

[webui.t](../file/webui.t.html)\[[149](../source/webui.t.html#149)\]

<div class="desc">

Get the full URL to the given resource.

</div>

<span id="housekeeping"></span>

`housekeeping ( )`

[webui.t](../file/webui.t.html)\[[297](../source/webui.t.html#297)\]

<div class="desc">

Run housekeeping tasks. The network event processor calls this
periodically to let us perform background cleanup tasks. Returns the
system tick time of the next housekeeping run.

</div>

<span id="removeClient"></span>

`removeClient (s)`

[webui.t](../file/webui.t.html)\[[283](../source/webui.t.html#283)\]

<div class="desc">

remove a client session

</div>

<span id="validateKey"></span>

`validateKey (req, query)`

[webui.t](../file/webui.t.html)\[[204](../source/webui.t.html#204)\]

<div class="desc">

Validate a session key sent from the client

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
