[WebResourceInit]{.title}[class]{.type}

[webui.t](../file/webui.t.html)\[[1145](../source/webui.t.html#1145)\]

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
Session initializer resource. This is a mix-in class designed to be used
for a special resource that initializes the session. Mix this with a
WebResource class to set up the initializer. When you connect to the
client via connectWebUI(), point the client to this resource.

There are two elements to setting up the session. First, we need to set
the program session key as a cookie. The client obtains this from the
registration mechanism, whose purpose is to launch the game program and
send the connection information back to the client. The client sends
this to us in the form of a URL parameter, TADS_session. This key is
essentially for authentication, to make sure that the client that we\'re
talking to is actually the client that launched the program: only that
client would be able to get the key, because we invent it and send it to
the registrar, and the registrar only sends it back to the client
session it\'s already established on its end. This prevents port
scanners from finding our open port and trying to crawl our \"site\" or
otherwise access our services.

The second setup element is to create a client session key. Whereas the
program session key is for our entire service, the client session key is
specific to this one connection. If the user opens two browser windows
on this server, each browser needs its own separate client session so
that we can tell the traffic apart. The client session key is simply
another random key we generate, and again we pass it back to the client
in a cookie.

The reason we set cookies for both of these session keys is that it lets
the client pass the information back to us on subsequent requests
without having to encode another parameter in every URL. We set session
cookies in both cases; the program session is for authentication
purposes and so we don\'t want it to be stored or shared, and the client
session key is explicitly to identify this one browser session, so it
obviously shouldn\'t be shared across browser instances or sessions.

Note that instances should always provide a string (as opposed to a
regular expression) for the virtual path (the \'vpath\' property). We
have to send the path to the browser UI as part of the connection
information, so we need a string we can send rather than a pattern to
match.

`class `**`WebResourceInit`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`WebResourceInit`**\
`         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

*(none)* []{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

` `[`webMainWin`](../object/webMainWin.html)`  ` []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`server`](#server)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`connectUI`](#connectUI)`  `[`processRequest`](#processRequest)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#server}

`server`

[webui.t](../file/webui.t.html)\[[1219](../source/webui.t.html#1219)\]

::: desc
the HTPTServer for communicating with the client
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#connectUI}

`connectUI (srv)`

[webui.t](../file/webui.t.html)\[[1152](../source/webui.t.html#1152)\]

::: desc
Connect to the client. The program should call this after creating its
HTTPServer object, which you pass here as \'srv\'. This establishes the
client UI connection, generating the path to the start page.
:::

[]{#processRequest}

`processRequest (req, query)`

[webui.t](../file/webui.t.html)\[[1165](../source/webui.t.html#1165)\]

::: desc
Process the request. This sets up the program and client session keys as
cookies.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
