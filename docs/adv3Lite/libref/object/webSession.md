[webSession]{.title}[object]{.type}

[webui.t](../file/webui.t.html)\[[145](../source/webui.t.html#145)\]

[Superclass\
Tree](#_SuperClassTree_)

[Property\
Summary](#_PropSummary_)

[Method\
Summary](#_MethodSummary_)

[Property\
Details](#_Properties_)

[Method\
Details](#_Methods_)

::: fdesc
Web UI Session object. This keeps track of miscellaneous items
associated with the game session.

`transient `**`webSession`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`webSession`**\
`         object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`clientSessions`](#clientSessions)`  `[`collabKey`](#collabKey)`  `[`everHadClient`](#everHadClient)`  `[`hkTime`](#hkTime)`  `[`lastClientTime`](#lastClientTime)`  `[`launcherGameID`](#launcherGameID)`  `[`launcherUsername`](#launcherUsername)`  `[`server`](#server)`  `[`sessionKey`](#sessionKey)`  `[`storageSID`](#storageSID)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`addClient`](#addClient)`  `[`connectUI`](#connectUI)`  `[`getCollabUrl`](#getCollabUrl)`  `[`getFullUrl`](#getFullUrl)`  `[`housekeeping`](#housekeeping)`  `[`removeClient`](#removeClient)`  `[`validateKey`](#validateKey)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#clientSessions}

`clientSessions`

[webui.t](../file/webui.t.html)\[[272](../source/webui.t.html#272)\]

::: desc
list of active client sessions (ClientSession objects)
:::

[]{#collabKey}

`collabKey`

[webui.t](../file/webui.t.html)\[[199](../source/webui.t.html#199)\]

::: desc
The collaborative session key. This is a secondary session key that
allows additional users to connect to the session for collaborative
play.
:::

[]{#everHadClient}

`everHadClient`

[webui.t](../file/webui.t.html)\[[352](../source/webui.t.html#352)\]

::: desc
have we ever had a client connection?
:::

[]{#hkTime}

`hkTime`

[webui.t](../file/webui.t.html)\[[346](../source/webui.t.html#346)\]

::: desc
system time (ms ticks) of next scheduled housekeeping pass
:::

[]{#lastClientTime}

`lastClientTime`

[webui.t](../file/webui.t.html)\[[349](../source/webui.t.html#349)\]

::: desc
the last time we noticed that we had a client connected
:::

[]{#launcherGameID}

`launcherGameID`

[webui.t](../file/webui.t.html)\[[236](../source/webui.t.html#236)\]

::: desc
The launcher\'s game ID. This is the ID passed from the web server that
launched the game, to let us know how the game is identified in the
launcher database. This is typically an IFDB TUID string.
:::

[]{#launcherUsername}

`launcherUsername`

[webui.t](../file/webui.t.html)\[[243](../source/webui.t.html#243)\]

::: desc
The launcher\'s user name. This is passed from the web server that
launched the game, to let us know the host user\'s screen name. We use
this as the user\'s default screen name in multi-user games.
:::

[]{#server}

`server`

[webui.t](../file/webui.t.html)\[[290](../source/webui.t.html#290)\]

::: desc
the HTTPServer object running our web session
:::

[]{#sessionKey}

`sessionKey`

[webui.t](../file/webui.t.html)\[[192](../source/webui.t.html#192)\]

::: desc
The session key. This identifies the server as a whole, and is
essentially an authentication mechanism that lets clients prove they got
our address from an authorized source (rather than just stumbling across
it via a port scan, say). Clients must hand this to us on each request,
either via a URL query parameter or via a cookie. The normal setup (via
WebResourceInit) is for the client to send us the key as a URL parameter
on the initial request, at which point we\'ll pass it back as a
set-cookie, removing the need for the client to include the key in
subsequent URLs.

The key is just a random number that\'s long enough that an interloper
couldn\'t hope to guess it. We generate this on the first evaluation,
and it remains fixed at that point for as long as we\'re running.
:::

[]{#storageSID}

`storageSID`

[webui.t](../file/webui.t.html)\[[257](../source/webui.t.html#257)\]

::: desc
The primary storage server session ID, for the user who launched the
server. If the user who launched the game logged in to a cloud storage
server, this is the session ID that we use to transact business with the
server on behalf of this logged-in user. This token identifies and
authenticates the user, but it\'s ephemeral and it\'s only valid for the
current game server session, so it\'s not quite like a password. This is
the session for the launch user only; if other collaborative users join,
they can get their own session IDs that will allow them to store files
under their own private user folders on the server.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#addClient}

`addClient (s)`

[webui.t](../file/webui.t.html)\[[275](../source/webui.t.html#275)\]

::: desc
add a client session
:::

[]{#connectUI}

`connectUI (srv)`

[webui.t](../file/webui.t.html)\[[160](../source/webui.t.html#160)\]

::: desc
Connect to the UI. By default, we ask the webMainWin object to establish
a connection, and we save the server object internally for future
reference.
:::

[]{#getCollabUrl}

`getCollabUrl ( )`

[webui.t](../file/webui.t.html)\[[264](../source/webui.t.html#264)\]

::: desc
Get the collaborative player launch URL. This is a URL that the host can
send to other players who wish to join the session as collaborative
users.
:::

[]{#getFullUrl}

`getFullUrl (resname)`

[webui.t](../file/webui.t.html)\[[149](../source/webui.t.html#149)\]

::: desc
Get the full URL to the given resource.
:::

[]{#housekeeping}

`housekeeping ( )`

[webui.t](../file/webui.t.html)\[[297](../source/webui.t.html#297)\]

::: desc
Run housekeeping tasks. The network event processor calls this
periodically to let us perform background cleanup tasks. Returns the
system tick time of the next housekeeping run.
:::

[]{#removeClient}

`removeClient (s)`

[webui.t](../file/webui.t.html)\[[283](../source/webui.t.html#283)\]

::: desc
remove a client session
:::

[]{#validateKey}

`validateKey (req, query)`

[webui.t](../file/webui.t.html)\[[204](../source/webui.t.html#204)\]

::: desc
Validate a session key sent from the client
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
