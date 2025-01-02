---
layout: docs
---
<span class="title">HTTPRequest</span><span class="type">class</span>

[httpreq.h](../file/httpreq.h.html)\[[29](../source/httpreq.h.html#29)\],
[webui.t](../file/webui.t.html)\[[101](../source/webui.t.html#101)\]

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



HTTP Request object. This object represents an HTTP protocol request
from a client to one of our servers. HTTPRequest objects are created by
the HTTPServer object as requests arrive, and are passed to the byte
code program as network events, via the getNetEvent() function. The
program uses the object to get information on the request and to send
back the reply.

*Modified in
[webui.t](../file/webui.t.html)\[[101](../source/webui.t.html#101)\]:*  
HTTPRequest extensions

`intrinsic class `**`HTTPRequest`**` :   `[`Object`](../object/Object.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`HTTPRequest`**  
[`Object`](../object/Object.html)  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  







*(none)* <span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`endChunkedReply`](#endChunkedReply) [`getBody`](#getBody) [`getClientAddress`](#getClientAddress) [`getCookie`](#getCookie) [`getCookies`](#getCookies) [`getFormFields`](#getFormFields) [`getHeaders`](#getHeaders) [`getQuery`](#getQuery) [`getQueryParam`](#getQueryParam) [`getServer`](#getServer) [`getVerb`](#getVerb) [`parseQuery`](#parseQuery) [`sendReply`](#sendReply) [`sendReplyAsync`](#sendReplyAsync) [`sendReplyCatch`](#sendReplyCatch) [`sendReplyChunk`](#sendReplyChunk) [`setCookie`](#setCookie) [`startChunkedReply`](#startChunkedReply)

Inherited from `Object` :  
[`callInherited`](../object/Object.html#callInherited) [`createIterator`](../object/Object.html#createIterator) [`createLiveIterator`](../object/Object.html#createLiveIterator) [`forEach`](../object/Object.html#forEach) [`getPropList`](../object/Object.html#getPropList) [`getPropParams`](../object/Object.html#getPropParams) [`getSuperclassList`](../object/Object.html#getSuperclassList) [`isClass`](../object/Object.html#isClass) [`isTransient`](../object/Object.html#isTransient) [`mapAll`](../object/Object.html#mapAll) [`ofKind`](../object/Object.html#ofKind) [`propDefined`](../object/Object.html#propDefined) [`propInherited`](../object/Object.html#propInherited) [`propType`](../object/Object.html#propType) [`valToSymbol`](../object/Object.html#valToSymbol)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="endChunkedReply"></span>

`endChunkedReply (headers?)`

[httpreq.h](../file/httpreq.h.html)\[[340](../source/httpreq.h.html#340)\]



Finish a chunked reply. This completes a chunked reply started with
startChunkedReply(). After calling this routine, the request is
completed, and no further reply can be sent.

'headers' is an optional list of additional headers to send with the end
of the reply. The HTTP chunked reply mechanism allows a server to send
headers at the beginning of the reply (which corresponds to the
startChunkedReply() call), at the end of the reply (in this routine), or
both. This accommodates situations where the server might not be able to
determine the final value for a header until after generating full
reply. If this argument is included, it works just like the 'headers'
argument to sendReply().



<span id="getBody"></span>

`getBody ( )`

[httpreq.h](../file/httpreq.h.html)\[[184](../source/httpreq.h.html#184)\]



Get the body of the request, if any. Some types of HTTP requests, such
as POST and PUT, contain a message body. This returns the raw, unparsed
message body. Returns a File object, open with read-only access. If
there's no message body at all, this returns nil.

If the body is a text type, the file will be open in text mode, with the
character mapping set according to the content type passed from the
client; otherwise it's open in raw binary mode.

The message body retrieved here is the raw request payload, without any
processing. There are two standard structured body types that are
frequently used with POSTs, both of which require further parsing. First
is MIME type application/x-www-form-urlencoded, which is used to
represent a basic HTML form, and encodes the data entry fields in a
form; this type can be parsed via the getFormFields() method. Second is
multipart/form-data, which is used to POST forms that include uploaded
files; this can be parsed with getFormFields() to retrieve the data
fields, and getUploads() to get the uploaded file data.



<span id="getClientAddress"></span>

`getClientAddress ( )`

[httpreq.h](../file/httpreq.h.html)\[[193](../source/httpreq.h.html#193)\]



Get the network address of the client. This returns a list:
\['ip-address', port\], where 'ip-address' is a string with the IP
address of the client, in decimal notation ('192.168.1.15', for
example), and 'port' is an integer giving the network port number on the
client side.



<span id="getCookie"></span>

`getCookie (name)`

[httpreq.h](../file/httpreq.h.html)\[[123](../source/httpreq.h.html#123)\]



Look up a cookie. This looks for the given cookie name in the cookies
sent by the client, and returns a string containing the cookie's text if
found. If the cookie isn't found, returns nil.



<span id="getCookies"></span>

`getCookies ( )`

[httpreq.h](../file/httpreq.h.html)\[[132](../source/httpreq.h.html#132)\]



Get the cookies sent with the request by the client. This returns a
LookupTable of the cookies, with each key set to a cookie name and the
corresponding value set to the cookie's text. Cookies are assumed to
contain only plan ASCII characters; any 8-bit characters in a cookie's
name or value will be replaced by '?' characters.



<span id="getFormFields"></span>

`getFormFields ( )`

[httpreq.h](../file/httpreq.h.html)\[[161](../source/httpreq.h.html#161)\]



Get the form data-entry field values. This returns a LookupTable
containing the field values sent with the request. Each key in the table
is a field name (given by the NAME property of the HTML \<INPUT\> tag
for the field), and each corresponding value is a string giving the
value of the field as entered by the user.

If the form includes uploaded files (via \<INPUT TYPE=FILE\>), the value
of each file field will be a FileUpload object instead of a string. The
'file' property of this object contains a File object, opened in
read-only mode, that can be used to retrieve the contents of the
uploaded file. Other properties of object provide the client-side name
of the file and the MIME type specified by the browser.

This method is a convenience function that parses the message body
information. You can obtain the raw information on the posted data via
the getHeader() method.

This method recognizes form data as a message body with content-type
application/x-www-form-urlencoded or multipart/form-data. If the request
doesn't have a message body at all, or has a message body with a
different content-type, this method assumes that the request has no
posted form data and returns nil. We return nil rather than an empty
lookup table so that the caller can tell that this doesn't appear to be
a form submission request at all.



<span id="getHeaders"></span>

`getHeaders ( )`

[httpreq.h](../file/httpreq.h.html)\[[116](../source/httpreq.h.html#116)\]



Get the headers sent with the request by the client. This returns a
LookupTable object: the keys are the header names, and the values are
the corresponding header values. For example, for a POST, there might be
a 'Content-type' key with the corresponding value
'application/x-www-form-urlencoded'.

The element table\[1\] contains the HTTP request line - the first line
of the request, which isn't technically a header. This line contains the
verb, the query string, and (optionally) the HTTP version string (in
that order, with spaces separating the elements). The method includes
this so that you can inspect the unparsed request line, if desired.



<span id="getQuery"></span>

`getQuery ( )`

[httpreq.h](../file/httpreq.h.html)\[[60](../source/httpreq.h.html#60)\]



Get the query string. This is the portion of the URL after the server
address. For example, if the client web browser navigated to the URL
"http://www.tads.org:1234/path/resource?a=1&b=2" would return
"/path/resource?a=1&b=2".

This is the raw query string, exactly as the client sent it. Any '%xx'
character sequences are still present in this version of the string.



<span id="getQueryParam"></span>

`getQueryParam (name)`

[httpreq.h](../file/httpreq.h.html)\[[100](../source/httpreq.h.html#100)\]



Get a parameter from the query string. This parses the query string and
returns the parameter with the specified name, if present, or nil if
not. This does the same parsing as parseQuery(), but it returns just the
specified parameter value rather than building a lookup table with all
of the parameters. This is more efficient than parseQuery() if you're
just looking up one or two parameters, since it avoids building the
whole table, but it's less efficient if you're looking up many
parameters because this routine has to re-parse the query string on each
call.



<span id="getServer"></span>

`getServer ( )`

[httpreq.h](../file/httpreq.h.html)\[[35](../source/httpreq.h.html#35)\]



Get the HTTPServer object. This is the server that received the network
request that 'self' represents.



<span id="getVerb"></span>

`getVerb ( )`

[httpreq.h](../file/httpreq.h.html)\[[48](../source/httpreq.h.html#48)\]



Get the verb. This is the HTTP verb that the client sent with the
request to indicate what action to perform. The standard HTTP verbs are
GET (this is the most common request type; it simply retrieves a
resource from the server), POST (used to submit form data), OPTIONS,
HEAD, PUT, DELETE, TRACE, CONNECT, and PATCH. If the client sends a
non-standard verb, the system simply passes it through to the request,
allowing you to write a custom server for a custom client; however, this
isn't recommended, since proxies and firewalls often block what they
consider ill-formed requests.



<span id="parseQuery"></span>

`parseQuery ( )`

[httpreq.h](../file/httpreq.h.html)\[[87](../source/httpreq.h.html#87)\]



Parse the query string. This returns a LookupTable containing the parsed
elements of the query. The element table\[1\] is the base resource name:
this is the part of the query string up to the first '?', if any, or the
entire query string if there are no parameters. If there are any
parameters, they're entered in the table under the parameter names as
keys. For example, for this query string:

  
http://www.tads.org:1234/path/resource?a=one&b=two&c=three&d

we'd generate this table:

  
table\[1\] = '/path/resource'  
table\['a'\] = 'one'  
table\['b'\] = 'two'  
table\['c'\] = 'three'  
table\['d'\] = ''

For all of the strings (including the base resource name, the parameter
names, and the parameter values), any '%xx' sequences are converted into
the corresponding character values. For example, if the base resource
name is '/C%C3%A1fe', the resource name will be parsed to 'C�fe' (%C3%A1
is the percent-encoded representation of the UTF-8 character small A
with acute accent).



<span id="sendReply"></span>

`sendReply (body, contentType?, status?, headers?)`

[httpreq.h](../file/httpreq.h.html)\[[289](../source/httpreq.h.html#289)\]



Send the reply to the request.

'body' is the content of the reply. For example, for a request for an
HTML page, this would contain the HTML text of the page. This can be a
string or StringBuffer, in which case the string is sent as UTF-8 data;
a ByteArray, in which case the raw bytes of the byte array are sent
exactly as given; an integer, in which case the body will be a default
HTML page automatically generated for the corresponding HTML status
code; a File object opened with read access, in which case the contents
of the file will be sent; or nil, in which case no message body is sent
at all (just the status code and the headers). A file open in text mode
will be sent as text, and raw mode will be sent as binary. "Data" mode
isn't allowed. Note that if a file is used, this will send the entire
contents of the file, regardless of the current seek position, and the
routine will have the side effect of setting the file's seek position to
end of file upon return.

'contentType' is an optional string giving the MIME type of the reply
body. This is used to generate a Content-type header in the reply. If
this is omitted, the server generates a default MIME type according to
the type of the 'body' argument. If 'body' is given as a string, and the
string starts with \<HTML (ignoring any initial whitespace), the default
content type is "text/html"; if the string starts with \<?XML, the
default type is "text/xml"; otherwise the default type is "text/plain".
If 'body' is a ByteArray, the server checks the first few bytes for
signature strings for a few known types (JPEG, PNG, MP3, Ogg, MIDI), and
uses the corresponding MIME type if matched; otherwise the MIME type is
set to "application/octet-stream". 'contentType' is ignored when the
'body' argument is an integer (because in this case the body is known to
be HTML), or hwen it's nil (since there's no body at all in this case).

When the 'body' is a string, the server automatically adds the "charset"
parameter to the Content-type header with value "utf-8".

'status' is an optional HTTP status code. This can be a string, in which
case it must have the standard format for an HTTP status code, which
consists of a decimal status code number followed by the text
description of the code: for example, "404 Not Found. This argument can
alternatively be a simple integer giving one of the standard HTTP status
code numbers, in which case we'll automatically add the corresponding
status code text. If this argument is omitted, AND the 'body' is given
as an integer, the 'body' value will be used as the status code. If this
is omitted and there's a non-integer 'body' argument, we use "200 OK" as
the default status code.

'headers' is an optional list of header strings. Each element of the
list is a string giving one header, in the standard format "Name:
Value". If this is omitted, the reply will contain only the standard
headers synthesized by the server.

The server automatically generates certain headers with each reply.
These should not be specified in the 'headers' argument. The standard
headers are:

  
Content-type: per the 'contentType' argument  
Content-length: length in bytes of 'body'

After sending the reply, the request is completed, and no further reply
can be sent.



<span id="sendReplyAsync"></span>

`sendReplyAsync (body, contentType?, status?, headers?)`

[httpreq.h](../file/httpreq.h.html)\[[375](../source/httpreq.h.html#375)\]



Send the reply to the request asynchronously. This works like
sendReply(), except that this method starts a new background thread to
handle the data transfer and then immediately returns. This allows the
caller to continue servicing other requests while the data transfer
proceeds, which is important when sending a large file (such as a large
image or audio file) as the reply body. Most browsers allow the user to
continue interacting with the displayed page while images and audio
files are transfered in the background, so it's likely that the browser
will generate new requests during the time it takes to send a single
large reply body. When you use sendReply(), the server won't be able to
service any of those new requests until the reply is fully sent, so the
browser will appear unresponsive for the duration of the reply data
transfer. Using sendReplyAsync() allows you to service new requests
immediately, without waiting for the data transfer to complete.

The parameters are the same as for sendReply(). If 'body' is a File,
this function opens its own separate handle to the file, so you're free
to close the File object immediately, or to continue to use it for other
operations. Note that if you continue writing to the file after calling
this method, it's unpredictable whether the reply data will contain the
original or updated data (or a mix of new and old data), since the reply
data transfer is handled in a separate thread that runs in parallel with
the main program.

When the reply data transfer is completed, or if it fails, the system
posts a NetEvent of type NetEvReplyDone to the network message queue.
The event contains the original HTTPRequest object, to allow you to
relate the event back to the request that generated the reply, and
status information indicating whether or not the transfer was
successful.



<span id="sendReplyCatch"></span>

`sendReplyCatch (reply, contType?, stat?, headers?)`

[webui.t](../file/webui.t.html)\[[122](../source/webui.t.html#122)\]



Send a reply, catching "socket disconnect" exceptions. In most cases,
server objects will want to use this method rather than the native
sendReply() so that they won't have to handle disconnect exceptions
manually.

Disconnect exceptions are common with HTTP: the protocol is stateless by
design, so clients can close their sockets at any time. Most modern
browsers use HTTP 1.1, which allows the client to maintain an open
socket indefinitely and reuse it serially for multiple requests, but
browsers tend to close these reusable sockets after a few minutes of
inactivity.

When this routine encounters a disconnected socket, it deletes the
client session record for the request, and then otherwise ignores the
error. This generally makes the client's socket management transparent
to the server, since if the client is still running they'll just connect
again with a new socket and retry any lost requests.



<span id="sendReplyChunk"></span>

`sendReplyChunk (body)`

[httpreq.h](../file/httpreq.h.html)\[[324](../source/httpreq.h.html#324)\]



Send a piece of a chunked reply. This can be called any number of times
after calling startChunkedReply() to send the pieces of a chunked reply.

'body' can be a string or StringBuffer, in which case the string data
are sent as UTF-8 text; or a ByteArray, in which case the raw bytes are
sent.



<span id="setCookie"></span>

`setCookie (name, value)`

[httpreq.h](../file/httpreq.h.html)\[[223](../source/httpreq.h.html#223)\]



Set a cookie in the reply. This sets a cookie with the given name and
value, both given as strings. The value string starts with the text to
set for the cookie, and can be followed by additional parameters,
delimited by semicolons:

  
expires=Fri, 31-Dec-2010 23:59:59 GMT - set expiration date  
domain=.tads.org - scope cookie to domain  
path=/ - scope cookie within site  
httponly - hide cookie from Javascript  
secure - only send via https://

(These are all defined by the HTTP protocol, not by TADS. For details,
refer to any HTTP reference book or web site.)

A cookie without an expiration date is a session cookie: it implicitly
expires as soon as the browser application terminates. The presence of
an expiration date makes the cookie persistent, meaning it's to be
stored on disk until the given expiration date and should survive even
after the browser is closed.

To send a cookie, you must call this BEFORE sending the reply or
starting to send a chunked reply. This is a limitation of the protocol,
since the cookies must be sent at the start of the reply with the
headers. Calling this routine doesn't actually send anything immediately
to the client, but simply stores the cookie with the pending request, to
be sent with the reply.



<span id="startChunkedReply"></span>

`startChunkedReply (contentType, resultCode?, headers?)`

[httpreq.h](../file/httpreq.h.html)\[[313](../source/httpreq.h.html#313)\]



Start a chunked reply. This sends the initial headers of a reply that
will be generated in pieces. This is an alternative to sending the
entire reply as a single string via sendReply(), for situations where
you're generating the reply algorithmically and want to send a little
bit at a time, rather than buffering up the entire reply in a string or
StringBuffer to send all at once. This is particularly useful for cases
where the reply will take a while to generate, since it allows the
client to interpret partial data before the entire reply is completed;
and for very large reply bodies, where it would consume a lot of memory
to buffer the whole reply.

This routine doesn't send any initial data, but simply begins the reply
process. For this reason, the content type must be specified: there's no
way for the routine to infer the content type here since we don't have
any body data to look at. The content type, result code, and headers
arguments work as they do with sendReply().

After calling this routine, call sendReplyChunk() as many times as
needed to send the pieces of the reply. After sending all of the pieces,
call endChunkedReply() to finish the reply.





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


