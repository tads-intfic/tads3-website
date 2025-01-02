---
layout: docs
---
<div class="topbar">

<img src="topbar.jpg" data-border="0" />

</div>

<div class="nav">

<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="builtins.html" class="nav">The Intrinsics</a> \> HTTPRequest  
<span class="navnp"><a href="gramprod.html" class="nav"><em>Prev:</em> GrammarProd</a>
    <a href="httpsrv.html" class="nav"><em>Next:</em> HTTPServer</a>    
</span>

</div>

<div class="main">

# HTTPRequest

The HTTPRequest intrinsic class represents a request from a client
connected to an HTTP server your program created. This object provides
methods for getting information on the request the client sent, and for
sending your reply.

The TADS HTTP package is designed to handle all of the low-level network
plumbing automatically, while giving your program full control over how
the server responds to client requests. HTTPRequest is a key part of
this design. It handles the details of the network data transmission and
the standard protocol interpretation, and presents you with the parsed
information in a readily usable format. Your program can then interpret
the request and determine the appropriate action; once you've determined
the response, the HTTPRequest object handles the details of transmitting
the bytes back to the client.

For more on how to create an HTTP server in a TADS program, refer to the
[HTTPServer](httpsrv.html) documentation.

## Headers and library files

To use the HTTPRequest class, you must <span class="code">\#include
\<httpreq.h\></span> in your program. In addition, we recommend that you
add the library file <span class="code">tadsnet.t</span> to your build
(by adding it to your project .t3m file), since this file defines some
helper classes often used with HTTPRequest.

## Receiving requests

You can't create an HTTPRequest object with the
<span class="code">new</span> operator. Instead, the system creates
these automatically for you. The HTTP server creates an HTTPRequest
whenever a request arrives from the network client, and places the
HTTPRequest in the network message queue. Your program retrieves the
request object by calling the
[<span class="code">getNetEvent()</span>](tadsnet.html#getNetEvent)
function.

The basic structure of a TADS program that creates an HTTP server is an
event loop: you call <span class="code">getNetEvent()</span> to wait for
an event, then you interpreter and respond to the event. You repeat this
process as long as the server is running.

## HTTPRequest methods

<span class="code">endChunkedReply(*headers*?)</span>

<div class="fdef">

Finishes a chunked reply. This tells the client that the last chunk has
been sent and that the reply is completed.

The optional *headers* argument is a list of HTTP headers. This works
the same way as the corresponding argument to
<span class="code">sendReply()</span>. With a chunked reply, you can
send headers at the beginning of the reply when you call
<span class="code">startChunkedReply()</span>, at the end of the reply
when you call this method, or both. Sending headers at the end of the
reply is useful when there's a header you can't determine until you've
generated the whole reply body.

This method must be called exactly once for a chunked reply, after
sending all of the pieces of a chunked reply. After calling this method,
the request is completed, and no further reply can be sent.

</div>

<span class="code">getBody()</span>

<div class="fdef">

Returns the unparsed request message body as a [File](file.html) object.
The file is open with read-only access. The file is open in text mode if
the Content-Type header specifies a text-oriented MIME type (this
includes posted form data), or in "raw" mode for non-text MIME types.
Note that the client determines the Content-Type header, and this is
often just a guess based on heuristics (such as the filename suffix), so
it's not necessarily reliable. You can override the initial file mode if
necessary via the file's <span class="code">setFileMode</span> method.

If the request doesn't have a message body, the method returns
<span class="code">nil</span>. If the message body exceeds the upload
size limit set in the [HTTPServer](httpsrv.html) object, the method
returns the string <span class="code">'overflow'</span>.

Some HTTP requests, such as POST and PUT, can include additional data in
the form of a message body. This is essentially a file or other data
stream uploaded by the client. The most common use in Web browsers is to
send the user-entered data on an HTML form, including files uploaded via
a form.

Note that you won't usually need to access the raw message body for a
POST, since it's much more convenient to use
[<span class="code">getFormFields</span>](#getFormFields), which parses
the message body using the standard HTTP encodings for form fields. The
unparsed POST body is useful mostly if you're handling requests from
custom clients that use custom form encodings.

</div>

<span class="code">getClientAddress()</span>

<div class="fdef">

Retrieves the network address of the client making the request. The
return value is a list:

- \[1\] is a string giving the client's IP address, in decimal notation
  (e.g., '192.168.1.15')
- \[2\] is an integer giving the network port number on the client
  machine

</div>

<span class="code">getCookie(*name*)</span>

<div class="fdef">

Returns a string containing the value of the cookie identified by the
given *name* string. This searches the cookies sent by the client with
the request for the given name; if a cookie with this name is found, its
text is returned, otherwise the return value is
<span class="code">nil</span>.

</div>

<span class="code">getCookies()</span>

<div class="fdef">

Returns a LookupTable with the HTTP cookies sent by the client with the
request. Each cookie name is a key in the table, with the cookie text as
the corresponding value.

By design, HTTP is a "stateless" protocol, meaning that each request
that a client makes is a complete transaction, independent of any past
or future requests made by the same client. However, many server
applications want to maintain some continuity from one request to the
next, to present a user interface that responds to the user's actions
throughout the session. This is where cookies come in: they're a way for
the server to store information on the client side, so that the server
can tell how a new request is related to a previous request.

The cookie mechanism is simple. Each cookie is actually an name/value
pair, where the name and value are arbitrary text strings chosen by the
server. For example, the server could remember the logged-in user by
setting a cookie with name 'USERNAME' and value 'BOB'. The server can
send one or more cookies with the response to a request, via the
'Set-Cookie' header. Upon receiving a response with a Set-Cookie header,
the client browser simply stores the name/value pair for later
retrieval. Once a cookie is stored, the browser sends it back with each
subsequent request to the same site, via the 'Cookie' header. The
browser simply echoes back the same name/value pairs the server sent in
past requests, so the server can use the information to connect the new
request to the previous request that set the cookie.

You can find more information on how cookies work in general in many
HTTP reference materials on the Web.

</div>

<span id="getFormFields"></span>

<span class="code">getFormFields()</span>

<div class="fdef">

Retrieves the values of the data-entry fields for an HTML form submitted
through the POST verb. This returns a LookupTable containing the field
values sent with the request: each key is a field name (this is the NAME
attribute of an \<INPUT\> tag on the form), and the corresponding value
is the value of the field. All field values are represented as strings.

If there's no message body, the method returns
<span class="code">nil</span>. If there's a message body, but it exceeds
the maximum upload size for the [HTTPServer](httpsrv.html) object, the
method returns the string <span class="code">'overflow'</span>.

If the form includes uploaded files, via \<INPUT TYPE=FILE\> fields, the
lookup table value for each TYPE=FILE field is a FileUpload object
instead of a string, or <span class="code">nil</span> if the user didn't
select a file for the field. The FileUpload object has the following
properties:

- <span class="code">file</span>: a File object representing the
  uploaded data. This is open with read-only access.
  If the content type parameter in the upload is a text type
  ("text/html", "text/plain", etc.), and the content type specifies a
  valid character set mapping, the file is opened in text mode;
  otherwise it's open in raw binary mode. You can change the mode and/or
  the character set, if desired, using the
  <span class="code">setFileMode()</span> method on the File object.
- <span class="code">txtfile</span>: a second File object representing
  the data, also with read-only access, but open in "text" mode. This
  object is included *only* if the Content-Type specified in the POST is
  a text type ("text/plain" or "text/html", for example), and the
  interpreter recognizes the character set parameter in the
  Content-Type. Otherwise, this property is
  <span class="code">nil</span>.
  Note that the <span class="code">file</span> property is *always* set
  to a raw File object, even when there's also a
  <span class="code">txtfile</span> object. This is because you might
  still want access to the raw bytes of the file even if the client
  indicated that the upload is textual, such as if you want to save an
  exact copy on disk. The text-mode File reader doesn't give you access
  to the exact bytes in the file because of the translations it applies
  for character sets and newline conventions.
- <span class="code">filename</span>: a string giving the name of the
  file on the client side (that is, on the machine that originated the
  upload). This name isn't meaningful within the local file system on
  the server side, for obvious reasons. It's not even necessarily the
  real filename of the source data on the client side, since the browser
  is free to specify whatever name it wants here. Some browsers might
  intentionally obscure the real name as a security measure. The
  indicated filename is really only useful for reference purposes, such
  as displaying to the user. You could also use the suffix ("extension")
  to make a guess about the content type, although again, you can't
  count on the name being accurate, so at best you can use it as
  guidance that you'll need to verify by inspecting the actual data.
- <span class="code">contentType</span>: a string giving the
  Content-Type specified by the client for the uploaded file. Note that
  you can't rely on this to be accurate. Most browsers just guess at the
  content type based on the filename suffix (e.g., they assume a file
  ending in ".jpg" is a JPEG image), which doesn't prove anything about
  the contents. Malicious clients might intentionally lie about the
  content type in an attempt to exploit bugs in unwary server. The only
  way to be sure that the content is of a particular type is to validate
  the actual data. For example, if you require the upload to be a valid
  JPEG image, you can't count on the client-side filename having a
  ".jpg" suffix or the Content-Type being set to "image/jpeg"; you
  should instead parse the uploaded data to confirm that it has a valid
  JPEG file structure.

Note that the information that this method parses is actually just the
message body, which you can retrieve in unparsed format via
<span class="code">getBody()</span>. Parsing form data is moderately
complex, though, so this method is convenient when you don't have any
special needs outside of the standard formats. This method can handle
the two most common formats used by Web browsers to submit forms, which
are "application/x-www-form-urlencoded" and "multipart/form-data". The
latter is typically used only when there are uploaded files. This method
works the same way regardless of which format is used, so you don't have
to check before calling it.

</div>

<span class="code">getHeaders()</span>

<div class="fdef">

Returns a LookupTable with the request headers sent by the client.
Headers are a standard part of HTTP that contain additional information
about the request.

Each element of the returned LookupTable has the header name as the key,
and the corresponding header string as the value. For example, most
requests from Web browsers contain a User-Agent header identifying the
browser; this would appear in the lookup table under the 'User-Agent'
key, with the corresponding value giving the User-Agent string the
browser sent. All of the header values are entered into the table as
strings, even if they contain numeric data.

The special key 1 (as an integer value) gives the "request line". This
is the first line of the request, and isn't technically a header, but
rather gives the overall details of the request. This line always
contains the verb, the raw query string, and (except for very old
browsers that predate the first HTTP standard) the protocol version
identifier.

</div>

<span class="code">getQuery()</span>

<div class="fdef">

Returns a string containing the raw, unparsed query string as sent by
the client. This is simply the URL (the address that appears in the
address bar in the Web browser), minus the "http://server" portion. This
string usually starts with a "/" character.

By "raw", we mean that this method doesn't do any of the standard
parsing on the string. If there are query parameters following "?", for
example, they're left in as part of the returned string. "%" sequences
are also left as-is.

</div>

<span class="code">getQueryParam(*name*)</span>

<div class="fdef">

Parses the query string (the URL, minus the "http://server" portion) and
searches for the given parameter name. If the specified parameter is
present, the method returns a string giving the value of the parameter
(with any "%" sequences decoded, and with any improperly formed UTF-8
characters replaced with "?"). If not, it returns
<span class="code">nil</span>.

Note that *name* is case-sensitive: the specified name must exactly
match the name in the URL string.

This method does the same parsing work as
<span class="code">parseQuery()</span>, but rather than constructing a
LookupTable with all of the parameter values, it simply returns the
value of the single specified parameter. This is more efficient (and
slightly simpler to code) when you only need to look up one or two
parameters in a given query string, since it skips creating the lookup
table. <span class="code">parseQuery()</span> is more efficient if you
reuse the table to look up several parameters, since
<span class="code">getQueryParam()</span> repeats the parsing work each
time it's called.

</div>

<span class="code">getServer()</span>

<div class="fdef">

Returns the [HTTPServer](httpsrv.html) object for the HTTP server that
received the network request that this HTTPRequest object represents.

Note that it's *possible*, although unlikely, for the return value to be
<span class="code">nil</span>. This can only happen if the HTTPServer
becomes unreachable and the garbage collector deletes it while the
request is pending. The server automatically shuts down if the
HTTPServer object is deleted by the garbage collector, so no new
requests can occur after that point; however, any requests previously
received but not yet processed will remain in the
[<span class="code">getNetEvent()</span>](tadsnet.html#getNetEvent)
queue. When you read one of these pending messages in this situation,
its <span class="code">getServer()</span> return value will be
<span class="code">nil</span>. You can ensure this never happens simply
by making sure that the HTTPServer object remains referenced until you
explicitly shut it down.

</div>

<span class="code">getVerb()</span>

<div class="fdef">

Returns a string giving the "verb" the client sent with the request. The
standard verbs ar GET, POST, OPTIONS, HEAD, PUT, DELETE, TRACE, CONNECT,
and PATCH, but the HTTPServer object doesn't enforce this: if the client
sends a non-standard verb, the server will simply pass it through, and
you'll see the exact verb text the user sent here.

Ordinary Web browsers use the verb GET whenever the user navigates to a
page by typing in an address manually, by clicking on a hyperlink, or
when following a redirection link. Web browsers usually use POST when
submitting an HTML form. The other verbs are not common for Web
browsers, but can be used by other types of client applications, such as
WebDAV clients.

</div>

<span class="code">parseQuery()</span>

<div class="fdef">

This method parses the query string (the string returned by
<span class="code">getQuery()</span>) and returns the result. First, it
looks for query parameters, and parses them into name/value pairs.
Second, it replaces any "%" sequences in the main resource name or in
the query parameters with the corresponding characters. Finally, it
validates that the result is well-formed UTF-8; any invalid UTF-8
sequences are converted to "?" characters.

(The standard HTTP query string has the form
*path*?*name*=*value*&*name*=*value*. Each *name*=*value* pair is a
query parameter.)

The return value is a LookupTable containing the parsed results. The
special key value 1 (as an integer value) contains the base "resource"
string: this is the part of the query string up to the "?" that
introduces the parameters, or simply the whole query string if there are
no parameters. The rest of the table contains the parameters: each
parameter name is a key, and the corresponding value is the value of
that parameter, as a string.

For example, if we parse this query string:

<div class="code">

    http://www.tads.org:1234/path/resource?a=one&b=two&c=three&d

</div>

we'll get this LookupTable:

<div class="code">

    table[1] = '/path/resource'
    table['a'] = 'one'
    table['b'] = 'two'
    table['c'] = 'three'
    table['d'] = ''

</div>

</div>

<span class="code">setCookie(*name*, *val*)</span>

<div class="fdef">

Sets a cookie to be sent with the reply. *name* is a string giving the
name of the cookie, and *val* is the text of the cookie.

Cookies must be set before sending the reply, or starting a chunked
reply. This is a requirement of HTTP itself, since the cookies must be
sent with the header information at the start of the reply. Calling this
method doesn't actually send any data to the client immediately;
instead, it simply stores the cookie information internally with the
pending request, to be sent when you call
<span class="code">sendReply()</span> or
<span class="code">startChunkedReply()</span>.

If you set two cookies with identical names, paths, and domains, the
later setting supersedes the earlier one. Cookies with distinct paths
and/or domains are considered separate cookies, even if they have the
same name. This allows you to send distinct cookie values for different
resource paths with a single reply.

The value can include one or more optional attributes. These are
separated from the cookie text and from each other by semicolons, and
have the form *attribute=value*. Cookie attributes are defined by the
HTTP protocol, so for full details you should see your favorite HTTP
reference material, but for the sake of convenience here's a quick
overview:

- <span class="code">expires=</span>*date*, where *date* is a date in
  Unix format (e.g., "Fri, 31-Dec-2010 23:59:59 GMT"). This specifies
  the expiration date for a persistent cookie, which is a cookie that
  the browser is meant to store on disk so that the cookie survives even
  after the browser program terminates. If no expiration is specified,
  the cookie is a "session" cookie, which is meant to be stored in
  memory only and should be automatically deleted when the user closes
  the browser.
- <span class="code">domain=</span>*site*, where *site* is a domain
  name. This scopes the cookie to the site: it will be sent on
  subsequent requests to this site only. The domain is usually specified
  with a leading period, as in ".tads.org"; this means that the cookie
  also applies to subdomains. If you don't specify the domain, the
  browser will default to the domain of this request.
- <span class="code">path=</span>*path*, where *path* is a URL-style
  path prefix, starting with a slash '/' character. This scopes the
  cookie to resources within the domain starting with the given path
  prefix. For example, <span class="code">path=/home/</span> makes the
  cookie apply only to resources in the <span class="code">/home</span>
  directory on the server. If you don't specify a path, the browser will
  default to the path of the resource in this request.
- <span class="code">httponly</span> specifies that the cookie is for
  HTTP use only, and should be hidden from Javascript and other
  client-side scripting languages. This is useful for cookies containing
  privileged information, such as passwords, because it prevents
  malicious Javascript code from seeing the cookie value and
  transmitting it to a third-party site. (This isn't a particularly
  strong security measure, since it's up to the browser to enforce; it
  doesn't do anything to prevent a malicious native program on the
  client from stealing the cookie. It's better to avoid storing
  sensitive information in cookies in the first place. Rather than
  storing a password, for example, it's better to store a session key
  with a limited lifetime.)
- <span class="code">secure</span> specifies that the cookie is only to
  be transmitted across a secure socket connection (https://...). As
  with HttpOnly, this affords a modest level of protection for cookies
  with sensitive contents, by telling the browser not to send the value
  over unencrypted socket connections (which are vulnerable to
  eavesdropping).

</div>

<span id="sendReply"></span>

<span class="code">sendReply(*body*, *contentType*?, *status*?,
*headers*?)</span>

<div class="fdef">

Sends your reply to the request.

*body* is the content of the reply, which is typically displayed in the
client Web browser. This might be an HTML page, some plain text, a JPEG
image, a binary file, or almost any other information you wish to send.
This argument can be represented as a string, a
[StringBuffer](strbuf.html), a [ByteArray](bytearr.html), or a
[File](file.html).

The formatting of the reply depends on the type of object used for the
*body* argument:

- String: the reply is sent as Unicode text formatted in the UTF-8
  encoding. This is a standard reply format that all modern browsers
  accept, and should be used for transmitting any textual information,
  such as HTML or plain text.
- StringBuffer: same as String.
- ByteArray: the reply is sent as the raw binary bytes of the byte
  array. This allows you to send binary files, such as JPEG images or
  audio files.
- File: the reply format depends on the file mode. If the file was
  opened in Text mode, the reply is sent as Unicode text in the UTF-8
  encoding. If the file was opened in Raw mode, the reply is sent as raw
  binary bytes. Data mode isn't allowed. The file must have been opened
  with at least Read access. The reply will send the *entire* contents
  of the file: this methods seeks to the start of the file, then reads
  and sends the entire file. As a side effect, the seek position of the
  file is at the very end of the file when this routine returns.
- Integer: the value must be a valid HTTP status code. The reply is sent
  as a default HTML page generated for the status code. For example, if
  the *body* value is 404, this generates a default "404 Not Found"
  error page in HTML format as the reply. In this case, the
  *contentType* and *status* arguments are ignored: we know that the
  reply's content type is "text/html", and we use the *body* value as
  the status code. This option makes it convenient to send simple error
  replies, since all you have to do is specify the error code number.
- nil: the reply is sent without a message body; only the headers are
  sent. The Content-Type and Content-Length headers are not
  automatically inserted in this case, and the *contentType* argument is
  ignored.

The optional *contentType* argument lets you specify the MIME type of
the reply. This is given as a string. A MIME type is an Internet
standard scheme that identifies data formats; this tells the client
browser how to interpret and display the content you send. You can find
much more information on MIME types in reference material on the Web,
but here are a few common ones:

- 'text/html' - an HTML document
- 'text/xml' - an XML document
- 'text/plain' - plain text (without any markups or formatting codes)
- 'image/jpeg' - a JPEG image
- 'image/gif' - a GIF image
- 'image/png' - a PNG image
- 'audio/mpeg' - an MP3 audio file
- 'application/octet-stream' - any raw binary file

If you omit *contentType*, the method tries to infer the type
automatically based on the *body* argument. If the *body* is given as a
string or StringBuffer, or a Text-mode file, one of the 'text' types is
used; the system looks at the first section of the text to see if it
looks like HTML or XML source code, and if not the default is
'text/plain'. If *body* is a ByteArray or Raw-mode file, one of the
binary types is assumed. The method looks at the first few bytes of the
file's contents to see if it looks like a JPEG image, GIF image, PNG
image, MP3 audio file, Ogg Vorbis audio file, or MIDI file, or Flash
object; if it finds the standard format header for one of these types,
it uses the corresponding MIME type. Otherwise, the default is
'application/octet-stream', which is the generic binary file type.

The optional *status* is the HTTP status code to include in the
response. This can be given as a string in the standard HTTP
"code-number message-text" format, such as '200 OK' or '404 Not Found'.
It can alternatively be an integer giving a standard HTTP status code
number, in which case the system will automatically supply the standard
corresponding message text. If you omit *status*, the default is '200
OK'.

*headers* is an optional list of header strings. Each element of the
list must be a string in the standard 'Name: Value' format for an HTTP
reply header. If you omit this argument, the reply will only contain the
basic headers that the server automatically generates, which are:

- Content-Type: per the *contentType* argument
- Content-Length: length in bytes of the *body* value

A request can only have one reply, so you can only call this method once
on a given request. A NetException is thrown if you try to reply to the
same request more than once. Sending a reply has the effect of
completing the request on the client side, so the client will know that
it doesn't have to wait for any more data from the server as part of
this request.

</div>

<span id="sendReplyAsync"></span>

<span class="code">sendReplyAsync(*body*, *contentType*?, *status*?,
*headers*?)</span>

<div class="fdef">

This method sends a reply asynchronously - that is, in a background
thread that runs concurrently with the main program. This works like
[sendReply()](#sendReply), except that sendReply() doesn't return until
all of the reply data have been sent over the network connection,
whereas sendReplyAsync() launches a background thread to carry out the
data transfer and then returns immediately, without waiting for any data
to be sent.

The parameters are the same as for sendReply(). There's no return value.

When the transfer completes, the system posts a network event of type
[NetEvReplyDone](tadsnet.html#NetEvReplyDone) to the network event queue.
You can retrieve the event with
[getNetEvent()](tadsnet.html#getNetEvent). The event object has a
reference to the HTTPRequest object, which lets you relate the event
back to the request that you were replying to, and information on
whether the reply succeeded or failed. This is largely advisory, useful
mostly for purposes such as logging, since there's not much the server
can do if the reply data transfer fails. HTTP doesn't provide any way
for a server to initiate contact with a client, so when a reply fails,
it's up to the client to take any needed recovery action, which in most
cases is simply to retry the request.

If the *body* argument is a StringBuffer or ByteArray, the method makes
a private copy of the contents before returning, so any changes you make
to the object after the function returns won't affect the data
transmitted to the client. If it's a File, the method doesn't make a
copy (doing so would be too big a performance hit for large files), so
if you write to the file after the method returns, the transmitted data
might be affected. It's not advisable to do this, because it could cause
inconsistent data to be sent to the client. If the file is a read-only
resource file, this obviously isn't a concern. When you send a file that
you plan to modify in the near future, though, you should be careful to
avoid concurrent updates. One way to handle this is by waiting to do
your updates until the completion event (described above) is posted. A
simpler (but slower) way is to create a temporary copy of the file for
sendReplyAsync(). For example:

<div class="code">

    // send the current contents of a file we're actively
    // updating - 'fp' is a File object, 'req' is the request
    // we're replying to
    sendActiveFile(fp, req)
    {
        // create a temporary file
        local tempfile = new TemporaryFile();
        local fptemp = File.openRawFile(tempfile, FileAccessReadWriteTrunc);

        // remember the current seek position in the original file
        local origPos = fp.getPos();

        // copy the original file's contents into the temp file
        fptemp.writeBytes(fp, 0);

        // restore the original seek position
        fp.setPos(origPos);

        // send the request using the temporary file
        req.sendReplyAsync(fptemp);

        // we're done with the temporary file
        fptemp.closeFile();
    }

</div>

When the *body* is a File, you're free to close the file any time after
the method returns. (You can also keep it open if you plan to continue
accessing the file.) The method creates its own duplicate handle to the
file internally, so the background thread sending the data can continue
to access the file as needed even after you call closeFile() on your
File object.

Asynchronous replies are useful when sending large content bodies, such
as image or audio files. The client of an HTTP connection is usually a
Web browser, and most modern browsers download media objects in
background threads on the client side, so that the user interface
remains responsive while the downloads proceed, rather than making the
user wait for all of the images and sounds to download before
interacting with the page. For the TADS Web UI, this means that the
browser can generate new XML requests while images and sounds are being
transferred over the network. If the game program sends a large file
with sendReply(), it won't be able to service any new XML requests until
the entire file transfer has completed, since sendReply() won't return
until the transfer is done. This makes the user interface in the browser
appear unresponsive for the duration of the download, since the game
server won't reply to any XML requests generated by the browser during
this period. sendReplyAsync() addresses this by letting you initiate the
transfer of a large file and then immediately return to servicing other
requests, without waiting for the file transfer to finish. The file
transfer will proceed in the background thread, leaving the main program
free to respond to new requests.

</div>

<span class="code">sendReplyChunk(*chunk*)</span>

<div class="fdef">

Sends one piece of a "chunked" reply. The *chunk* argument works the
same way as the *body* argument to
<span class="code">sendReply()</span>, so it can be a string,
StringBuffer, or ByteArray.

This method can be called repeatedly to send a reply in pieces. You must
call <span class="code">startChunkedReply()</span> before the first call
to <span class="code">sendReplyChunk()</span> for a request, and you
must call <span class="code">endChunkedReply()</span> after sending the
last chunk for the request. See
<span class="code">startChunkedReply()</span> for more details.

</div>

<span class="code">startChunkedReply(*contentType*, *resultCode*?,
*headers*?)</span>

<div class="fdef">

Starts sending a "chunked" reply to the request. A chunked reply is one
that's sent in pieces, rather than all at once. When you use
<span class="code">sendReply()</span>, you must have the entire reply
ready to go as a single unit at the time you call the method. In
contrast, the chunked reply methods let you assemble the reply a little
bit at a time, sending each piece as soon as it's ready. This is
especially useful when the reply involves a large amount of data that's
generated dynamically, because it avoids the need to store the entire
generated data stream in memory at one time.

Sending a chunked reply involves three steps:

- Call <span class="code">startChunkedReply()</span> to begin the reply.
- Call <span class="code">sendReplyChunk()</span> for each chunk - each
  piece of data you wish to send in the reply.
- Call <span class="code">endChunkedReply()</span> to finish the reply.

The *contentType*, *resultCode*, and *headers* arguments work almost the
same way they do with <span class="code">sendReply()</span> - see that
method for full details. There are two small differences, though. First,
*contentType* is required with this method, whereas it's optional with
<span class="code">sendReply()</span>. The reason is that this method
doesn't have the reply content to work with - that'll be sent later, in
pieces, via one or more calls to
<span class="code">sendReplyChunk()</span>, so there's no way for
<span class="code">startChunkedReply()</span> to infer the content type
from the data. The second difference is that any headers you include in
this call aren't the last word: you'll get another chance to send more
headers with <span class="code">endChunkedReply()</span>. This is useful
if some of the headers depend on the content you're going to send, which
you might not have generated yet.

</div>

## Save, restore, undo

HTTPRequest objects are inherently [transient](objdef.html#transient).
This is because they're associated with live network requests; saving
and restoring the program would resume with a new session without the
same network client connected, so it would be impossible to continue
processing a request from the original session at that time.

## Server shutdown

When you shut down an HTTPServer object, all of the client sessions are
terminated and the open requests aborted. This is true whether you shut
down a server by explicitly calling the HTTPServer
<span class="code">shutdown()</span> method, or by allowing the
HTTPServer object to go out of scope and be collected by the garbage
collector. Replying to an aborted request is invalid and will throw a
NetException error.

</div>

------------------------------------------------------------------------

<div class="navb">

*TADS 3 System Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="builtins.html" class="nav">The Intrinsics</a> \> HTTPRequest  
<span class="navnp"><a href="gramprod.html" class="nav"><em>Prev:</em> GrammarProd</a>
    <a href="httpsrv.html" class="nav"><em>Next:</em> HTTPServer</a>    
</span>

</div>
