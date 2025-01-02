---
layout: docs
---
<div class="topbar">

<img src="topbar.jpg" data-border="0" />

</div>

<div class="nav">

<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="builtins.html" class="nav">The Intrinsics</a> \> tads-net
Function Set  
<span class="navnp"><a href="tadsio.html" class="nav"><em>Prev:</em> tads-io Function Set</a>
    <a href="netsec.html" class="nav"><em>Next:</em> Network Safety</a>
    </span>

</div>



# tads-net Function Set

The tads-net function set is part of the TADS networking package. These
functions provide access to certain network features.

To use these functions in your program, you must
`\#include \<tadsnet.h\>` in your source files.
You should also add the library file `tadsnet.t`
to your build, by adding it to the .t3m file for your project.
`tadsnet.t` defines some helper classes that are
used in conjunction with the networking functions.

## tads-net functions

<span id="connectWebUI"></span>

`connectWebUI(*server*, *path*)`

<div class="fdef">

Connect to the Web UI client. This sends connection information to the
Web browser client that launched the game, or displays a local Web
browser UI if the game was launched directly by the user from the
operating system desktop or command shell.

*server* is the [HTTPServer](httpsrv.html) object that provides your
game's Web server interface. *path* is a string giving the local
resource path of the "start" page on your server. This is the fragment
of the URL string *after* the server name, starting with a slash "/"
character. (You don't have to include the "http://server" portion,
because the function automatically figures this portion based on the
HTTPServer's host address.)

Web UI games must call this function during program startup. This is the
crucial step that tells the client UI how to connect to the game's HTTP
server, so without this call, the client won't know the game's URL and
thus will never even attempt to connect. You should create the
HTTPServer object and call this function as soon as possible after your
program starts, since some clients might abort the connection attempt if
they don't get any information back within a timeout limit.



<span id="getHostName"></span>

`getHostName()`

<div class="fdef">

Returns a string giving the default host name for the computer that's
running your program, or `nil` if the host name
isn't available. The main use of this name is for setting up a network
server, such as an [HTTPServer](httpsrv.html) object, because it tells
you the name to use for binding the listener port of the server.

The host name is the name by which the machine is known on the network,
but it's not usually the real Internet address of the machine. It's
usually only valid within a "local" portion of the network, such as
within your house or business. This means you can't hand this name to
someone across the country and expect them to be able to use it to
connect to your computer. It's kind of like a person's first name: if
you walk up to a stranger and say "Hi, I'm Bob", it won't give them much
of an idea of how to get in touch with you later. What the host name
*is* useful for is identifying the machine to itself. It might seem a
little strange that this would be necessary in the first place, but
there are reasons it's needed for certain operations, such as starting a
network server.

Some machines have multiple host names. When this is the case,
`getHostName()` returns the primary or default
host name, if the operating system has such a thing, otherwise it picks
one arbitrarily.

Since this function is primarily for use in setting up servers, it's
sensitive to the network safety level setting for server features. If
the server level is 1 (local access only), the function returns
'localhost' regardless of the actual network host name. If the server
level is 2 (no access), the function returns nil.

Note that you should use `getLaunchHostAddr()`
instead of this function to establish the listening address for a TADS
Web UI game. `getLaunchHostAddr()` returns the
specific host address that the client used to launch the game, which
allows you to distinguish local stand-alone launches from client/server
launches.

</div>

<span id="getLaunchHostAddr"></span>

`getLaunchHostAddr()`

<div class="fdef">

Returns the host name that the client used to launch the program. This
is a string value giving the address of a network adapter adapter on the
local machine; it can be represented as a host name, or as an IP
address. In either case, the value is a string that can be passed as the
"hostname" parameter of the [HTTPServer](httpsrv.html) constructor.

If the user launched the game in local stand-alone mode, this function
returns `nil`. This allows you to distinguish
client/server Web launches from local launches. In local mode, you
should simply use 'localhost' (`nil` is
equivalent) as the host name when creating the HTTPServer object.

When a game uses the TADS Web UI to run as a client/server program, the
user runs a Web browser on one computer (the "client" machine), and the
TADS interpreter runs on a separate computer (the "server" machine). In
this mode, the user doesn't log on to the server machine directly to
launch the TADS interpreter. Instead, the user types the server
machine's address into her Web browser, and the browser connects to an
external Web server on the server machine. The Web server recognizes
this as a request to launch the TADS game, so the Web server runs the
interpreter. The Web server passes command-line information to the
interpreter, just as though the user had run the interpreter manually.
Part of the command-line information is the Web server's external host
address. The interpreter saves the address, and makes it available to
the TADS program via this function.

The launch address is important because it tells you the address that
the client used to contact the Web server. We know that the client used
this address to successfully reach the external Web server, so this is
the address we want to use to establish our own connection to the
client. Passing this address to the HTTPServer constructor accomplishes
this by making the HTTPServer's listener bind to this same address.

</div>

<span id="getLocalIP"></span>

`getLocalIP()`

<div class="fdef">

Returns a string giving the default IP address for the computer that's
running your program, or `nil` if no address is
available. The returned address string is in the standard '1.2.3.4'
decimal format. The IP address is the low-level version of the host
name; the host name is actually just an alias for the IP address.

As with the host name, the local IP address is often only valid within a
local network, and isn't necessarily the global Internet address of the
machine.

Some computers have multiple IP addresses. An IP address isn't really
associated with the machine itself, but rather with a single network
adapter (the hardware card that physically plugs into the network). Some
machines have more than one adapter, in which case each adapter will
have its own separate IP address. On such machines,
`getLocalIP()` returns the primary or default
address, if the operating system defines such a thing; otherwise it
arbitrarily returns one of the machine's valid IP addresses.

As with `getHostName()`, this function is
sensitive to the network safety level setting for server features. If
the server level is 1 (local access only), the function returns
'127.0.0.1' (this is a special IP address that always refers to the
local machine - it's the numerical equivalent of 'localhost'). If the
server level is 2 (no access), the function returns nil.

</div>

<span id="getNetEvent"></span>

`getNetEvent(*timeout*?)`

<div class="fdef">

Waits for and returns the next event from the network message queue.

*timeout* is the maximum time to wait, in milliseconds. If no events
occur before the timeout interval expires, the function returns a
timeout event (a NetTimeoutEvent object) at the end of the interval. If
this is omitted or nil, the wait is indefinite: the function won't
return until a network event occurs.

The return value is a [NetEvent](#NetEvent) object (or one of its
subclasses) describing the event.

Network events are generated by network server objects. For more
information, see the [HTTPServer](httpsrv.html) object.

</div>

`getNetStorageURL(*resource*)`

<div class="fdef">

Returns an HTTP URL string for the given resource on the storage server.
*resource* is a string with a resource name (i.e., the name of a "page"
or file on the server.

The return value is a string with the full "http://" URL to the
specified storage server resource.

This function insulates the game from the details of the storage server
configuration, which can vary by game server. Using this function to
build the storage server URL, rather than coding the URL directly into
the game, ensures that the game will run on any game server.

See the [Web deployment](webui.html#storageServer) chapter for more
information on how the storage server works.

</div>

<span id="sendNetRequest"></span>

`sendNetRequest(*id*, *url*, ...)`

<div class="fdef">

Sends a network request. This allows the program to act as a network
client, sending requests across the network to remote servers.

This routine is sensitive to the [network safety](netsec.html) settings
for client access.

*id* is your identifier for the request, which can be any value of any
type you choose. TADS doesn't use this value itself, but simply hangs
onto it for the duration of the request, and passes it back to you via
the `requestID` property of the
`NetReplyEvent` object posted to the network
event queue when the request completes. This allows you to relate the
reply back to the corresponding request, so that you can go back and
finish what you were doing when you originally posted the request. It's
often convenient to create an object to represent the request
information; if you do, that object is the natural identifier value for
the request.

*url* is a string giving the URL of the request. This is a standard
Internet URL, which must start with a "scheme" name specifying the
protocol. Currently, the only protocol supported is HTTP, so the URL
string must start with either "`http://`" or
"`https://`".

Additional arguments depend on the protocol - see the individual
protocol descriptions below.

The function has no return value.

### How requests are processed

Network requests are sent asynchronously. That is,
`sendNetRequest()` initiates a request and then
immediately returns, allowing your program to continue running while the
request is processed in the background. While many requests take only a
few milliseconds to complete, some take much longer, so it's best to let
the program continue with other tasks while awaiting a reply. It's
especially important to continue handling user interface actions, so
that the program doesn't appear unresponsive to the user. When the
request is completed, TADS posts a
`NetReplyEvent` object to the network event
queue with the results of the request. You read these reply events using
`getNetEvent()`.

Because the function just initiates the request and returns, it has no
way of knowing whether the request will be successful or not. This means
that the function can't return any status information. All results,
including errors, are returned to the program via the
`NetReplyEvent` that's posted when the request
completes. If an error occurs at the system or network transmission
level (e.g., TADS is unable to open a network connection to the remote
server, or can't start a background thread to process the request), the
`statusCode` property of the reply event will be
a negative number indicating what went wrong. Otherwise,
`statusCode` will be a positive number with the
result status sent by the server.

### HTTP Requests

The argument list for an HTTP request looks like this:

`sendNetRequest(*id*, *url*, *verb*, *options*?,
*headers*?, *body*?, *bodyType*?)`

*verb* is a string giving the HTTP verb (also known as the method) for
the request. This is most commonly GET, POST, or PUT, but can be any
valid verb the server accepts.

*options* is an optional integer value giving a bitwise OR (\|)
combination of option flags to select special features. Pass 0 or
`nil`, or simply omit the argument, for the
default behavior. The option flags are:

- `NetReqNoRedirect`: This tells the function
  not to follow HTTP redirects, but instead simply return (via the
  `NetReplyEvent` object) the raw redirect
  information sent back by the server. If this option isn't specified,
  the default is to automatically and transparently follow redirects,
  returning the final result from the final server after all
  redirections. In most cases, the default is preferable, since the
  client usually only cares about the actual result content, not where
  it came from. However, if you need full details on where the results
  are actually coming from, this option flag lets you override the
  transparent link-following behavior and obtain the full redirect
  information. Note that if there are multiple redirects before reaching
  the final page (that is, the resource at the original URL redirects to
  a second URL, which is itself redirected to a third URL, and so on),
  you'll have to follow the links one at a time, since the flag stops
  the process immediately at the first redirect.

  Note that automatic redirection only applies to HTTP-level redirects,
  via 301 result codes. There also exists a separate type of redirection
  via HTML `\<META\>` tags. TADS doesn't follow
  `\<META\>` redirects, regardless of the option
  flags, since it doesn't parse the content (HTML or otherwise) that the
  server returns.

*headers* is an optional string specifying any custom HTTP headers you
wish to include with the request. The function automatically generates
certain basic headers; any custom headers you specify are added to the
automatic headers. The *headers* string must be given in the standard
"Name: Value" format, with CR-LF (`\r\n`)
sequences separating headers. (It's okay if the overall string ends in
CR-LF, but this isn't required.) Omit this argument or pass
`nil` if you don't have any custom headers to
send.

*body* is a string or [ByteArray](bytearr.html) object containing the
content to send with the request. This only applies to certain verbs,
such as POST and PUT; most HTTP verbs send only headers with the
request, not a body. If a string is supplied, it will be sent as UTF-8
text; a ByteArray is sent as raw binary bytes. Omit this argument or
pass `nil` if you don't want to send any content
with the request.

If the verb is POST, *body* can alternatively be a LookupTable object
containing a set of form fields for an HTML-style form. Each key in the
table is a string giving the name of a field, and the corresponding
value is a string giving the value for that field. (On an HTML form, a
field is represented by an `\<INPUT\>` or
`\<SELECT\>` element.) The function encodes the
lookup table into an
`application/x-www-form-urlencoded` content body
for the request.

When posting form data, you can also include file uploads. These
correspond to `\<INPUT TYPE=FILE\>` elements in
an HTML form. To specify a file upload, use a
`FileUpload` object as the value for the field,
instead of a simple string. You must populate the FileUpload object with
the following properties:

- `contentType` = a string with the MIME type of
  the file
- `filename` = a string with the client-side
  filename
- `file` = a String or ByteArray containing the
  file to upload

If the `contentType` property is omitted, the
default is `'text/plain;charset=utf-8'` if the
`file` value is a string, or
`'application/octet-stream'` if it's a
ByteArray. You shouldn't override the string default, since the string
will be sent as UTF-8 data in any case. You should override the default
for a ByteArray if you know the actual format of the data you're
sending.

*bodyType* is a string giving the MIME type of the *body* data. If this
is omitted or `nil`, the function uses a default
value that depends on the *body* value's type:

- If *body* is a string,
  `'text/plain;charset=utf-8'`
- If *body* is a ByteArray,
  `'application/octet-stream'`
- If *body* is a LookupTable,
  `'application/x-www-form-urlencoded'` or
  `'multipart/form'`, depending on whether any
  file uploads are included in the form data

When you know the specific format of ByteArray data that you're sending,
you should use *bodyType* to specify the format, since the
`octet-stream` type is a generic default that
doesn't tell the server anything about the object you're sending. For
example, if you're sending a JPEG image, you should specify
`'image/jpeg'`.

You shouldn't override *bodyType* for strings, since the content is
actually sent as UTF-8 character data regardless of the MIME type you
specify here.

The *bodyType* value is ignored entirely if the *body* is a LookupTable,
since the function prepares the actual content data in this case and
thus determines the format itself.

Note that servers aren't obligated to respect the content type you
specify here (or for FileUpload objects), since they can't assume that
clients are trustworthy or that they actually know the correct content
type.

</div>

<span id="NetEvent"></span>

## The NetEvent class

The `getNetEvent()` function returns an object
of class NetEvent (or one of NetEvent's subclasses) describing the
event. NetEvent is defined in the library file
`tadsnet.t`. You can determine the type of the
event by looking at the `evType` property of the
object:

- <span id="NetEvRequest">`NetEvRequest`</span> -
  this represents an incoming network request from a client. When the
  event type is `NetEvRequest`, the event object
  is of class **NetRequestEvent**, a subclass of NetEvent. The
  `evRequest` property of the object contains a
  separate object representing the client request. You can determine the
  specific type of request by inspecting the class of this object:
  - For an HTTP request, the `evRequest` value
    is an object of intrinsic class [HTTPRequest](httpreq.html).
- <span id="NetEvReply">`NetEvReply`</span> -
  this represents a reply to a network request made with
  [`sendNetRequest()`](#sendNetRequest). The
  event object for this event type is of class
  `NetReplyEvent`. This object tells you whether
  the request succeeded or failed, and if it succeeded, contains the
  reply information from the server. Some key properties:
  - `requestID` contains the identifier value
    originally passed to `sendNetRequest()`,
    which lets you relate the reply back to the original request.
  - `statusCode` indicates whether the request
    succeeded or failed. If this is a negative number, it means that the
    system was unable to send the network request at all, or that the
    request failed due to a networking error. If the status is a
    positive number, it's a result code from the server; for HTTP
    requests, this is an HTTP status code. HTTP codes in the 200 range
    indicate success, and other ranges indicate errors.
  - `replyBody` is the content body of an HTTP
    reply. This is a File object, open in read-only mode, containing the
    data of the reply. If the reply is textual, the file is open in text
    mode, otherwise it's open in raw mode.
  - `replyHeaders` is a lookup table containing
    the HTTP headers of the reply. The table's keys are header names
    (all in lower-case), and the corresponding values are the header
    values, in string format. For example,
    `replyHeaders\['content-type'\]` contains
    the Content-Type header value.
- <span id="NetEvTimeout">`NetEvTimeout`</span> -
  the timeout that you specified in the call to
  `getNetEvent()` expired before any network
  event occurred. When the event type is
  `NetEvTimeout`, the event object is of class
  **NetTimeoutEvent**.
- <span id="NetEvDebugBreak">`NetEvDebugBreak`</span> -
  the user manually broke into the debugger before any network event (or
  timeout) occurred. This event is possible only when the program is
  being run under the interactive debugger. The event interrupts the
  event wait to allow the debugger to pause the program at a byte-code
  instruction.
- <span id="NetEvUIClose">`NetEvUIClose`</span> -
  the user manually closed the Web UI window. This event is possible
  only when the program is running in a TADS interpreter where the Web
  UI is integrated with the interpreter, so that both pieces are running
  locally on the same computer. This configuration is available on some
  platforms to emulate the traditional TADS interpreter, where the game
  runs as a simple local application with its own UI window. The
  `NetEvUIClose` event occurs when the user
  closes this integrated application window. In this configuration, the
  point is to emulate an ordinary, local, stand-alone application, so
  closing the window is one way for the user to terminate the program.
  In most cases, then, the game should simply terminate when it receives
  this event, because that's almost certainly the user's intention.
  This event isn't applicable in client/server mode, where the user
  interface is running in a Web browser. In client/server mode, the
  server has no reliable way of knowing when a browser window is closed;
  all it knows for sure is whether the client has sent any network data
  recently. The standard TADS Web UI library automatically exchanges
  messages with the server periodically just to let it know that the
  window is still open, but failure to receive these periodic messages
  doesn't necessarily mean that the user has explicitly quit; it could
  indicate a temporary condition beyond the user's control, such as a
  network interruption. (Brief outages are common, due to traffic
  congestion and router hiccups, and usually clear up without any manual
  intervention within a few moments.) This is why the UI Close event
  isn't used in client/server mode. Instead, the standard TADS library
  monitors the connection for network activity, and assumes that the
  client has disconnected if a certain interval (a couple of minutes, in
  the library default settings) elapses without any contact. This allows
  for brief network interruptions without interfering with the game
  session; an interruption won't cause the server to disconnect as long
  as it doesn't last longer than the inactivity limit. If the user
  actually has closed the browser with the intention of quitting,
  though, there will be no more network activity, so the server will
  give up waiting and shut itself down after the time limit expires.
- <span id="NetEvReplyDone">`NetEvReplyDone`</span> -
  an asynchronous reply to a request (see
  [HTTPRequest.sendReplyAsync()](httpreq.html#sendReplyAsync)) has
  completed. This event occurs when an asynchronous reply has been
  successfully completed or fails with an error (such as a broken
  network connection). When the event type is
  `NetEvReplyDone`, the event object is of class
  **NetReplyDoneEvent**, which has the following properties and methods:
  - `requestObj` - the original request object
    for which the reply was being sent (this is an
    [HTTPRequest](httpreq.html) object in the case of an HTTP request)
  - `isSuccessful()` - returns
    `true` if the reply was successfully
    completed, `nil` if it failed. There's not
    much that the server can do if an HTTP reply fails, since HTTP
    doesn't have a way for a server to initiate contact with a client.
    It's really up to the client to take any needed recovery action,
    such as retrying the request, so this error information is mostly
    advisory.
  - `socketErr` - an integer giving the network
    error code that caused the reply to fail, if applicable; this is
    zero if there was no network error.
  - `errMsg` - a string describing the error
    that caused the reply to fail, if applicable; this is
    `nil` if there was no error.

</div>

------------------------------------------------------------------------

<div class="navb">

*TADS 3 System Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="builtins.html" class="nav">The Intrinsics</a> \> tads-net
Function Set  
<span class="navnp"><a href="tadsio.html" class="nav"><em>Prev:</em> tads-io Function Set</a>
    <a href="netsec.html" class="nav"><em>Next:</em> Network Safety</a>
    </span>

</div>
