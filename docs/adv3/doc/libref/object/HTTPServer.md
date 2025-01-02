---
layout: docs
---
<span class="title">HTTPServer</span><span class="type">class</span>

[httpsrv.h](../file/httpsrv.h.html)\[[82](../source/httpsrv.h.html#82)\]

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



HTTP Server Object. This implements a multi-threaded, background server
that runs concurrently with the game program. The server listens for and
accepts incoming connection requests from clients, and then handles HTTP
protocol transactions with connected clients. Client requests are routed
to the byte code program via network events, which the program can
retrieve via the getNetEvent() function.

Construction: to set up an HTTP server, simply create an HTTPServer
object with 'new':

  
local srv = new HTTPServer(hostname, portnum?, maxUploadSize?);

'hostname' is a string giving the domain name or IP address that the
server will bind to for accepting connections. For a server that accepts
connections from separate client machines, this is simply the external
IP address of the local machine. (This is specified as an argument
because some machines have more than one network interface, and thus
have more than one IP address or domain name.)

'portnum' is the TCP/IP port number wehre the server will listen for
incoming connections. If this is omitted or nil, the operating system
will automatically select an available port number and assign it to the
server. Using a specific port number allows you to create a service on a
"well known" port, which makes it easier for clients to find the
service; but a given port can only be used by one server at a time, so
using a pre-selected port number runs the risk that some other process
will already be using the same port.

'maxUploadSize' is the maximum size in bytes for any single request's
content. Content sizes over this limit will be rejected. Some HTTP
requests, such as POST, can include uploaded content from the client,
and the HTTP protocol itself supports essentially unlimited sizes for
these objects. Uploads consume resources on the server, though, so it's
often desirable to set a size limit to prevent errant or malicious
clients from overwhelming the server with a very large upload. Depending
on the specific function of your server, you might or might not wish to
set a limit. If you omit this argument or set it to nil, unlimited
upload sizes will be allowed. Note that this limit applies to each
individual upload separately; it's not a lifetime limit for the server
or for any session.

Creating an HTTPServer object with 'new' automatically starts the
server. The object will create a background thread that will listen for
incoming connections on the given network address and port number, so
the server is active as soon as the 'new' finishes. You can create any
number of servers, as long as they have different port numbers. When a
connection request is received, the server will accept the connection
and automatically create another background thread to handle requests on
that connection. Each incoming request will be forwarded to the game
program to handle, via the network message queue.

`intrinsic class `**`HTTPServer`**` :   `[`Object`](../object/Object.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`HTTPServer`**  
[`Object`](../object/Object.html)  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  







*(none)* <span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`getAddress`](#getAddress) [`getIPAddress`](#getIPAddress) [`getPortNum`](#getPortNum) [`shutdown`](#shutdown)

Inherited from `Object` :  
[`getPropList`](../object/Object.html#getPropList) [`getPropParams`](../object/Object.html#getPropParams) [`getSuperclassList`](../object/Object.html#getSuperclassList) [`isClass`](../object/Object.html#isClass) [`isTransient`](../object/Object.html#isTransient) [`ofKind`](../object/Object.html#ofKind) [`propDefined`](../object/Object.html#propDefined) [`propInherited`](../object/Object.html#propInherited) [`propType`](../object/Object.html#propType) [`valToSymbol`](../object/Object.html#valToSymbol)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="getAddress"></span>

`getAddress ( )`

[httpsrv.h](../file/httpsrv.h.html)\[[120](../source/httpsrv.h.html#120)\]



Get the listening address. This returns a string giving the original
binding address specified when the object was constructed. This can
contain either a host name or an IP address, since either form can be
used in the constructor.



<span id="getIPAddress"></span>

`getIPAddress ( )`

[httpsrv.h](../file/httpsrv.h.html)\[[126](../source/httpsrv.h.html#126)\]



Get the listening IP address. This returns the numerical IP address
where the server is listening for connections.



<span id="getPortNum"></span>

`getPortNum ( )`

[httpsrv.h](../file/httpsrv.h.html)\[[136](../source/httpsrv.h.html#136)\]



Get the port number. This returns an integer giving the TCP/IP network
port number on which this server is listening for incoming connections.
Clients connect to the port by including it in the HTTP URL, after the
host name. For example, if the server is on port 10815, the client would
connect to a URL of the form http://myserver.com:10815/index.html.



<span id="shutdown"></span>

`shutdown (wait?)`

[httpsrv.h](../file/httpsrv.h.html)\[[112](../source/httpsrv.h.html#112)\]



Shut down the server. This immediately disconnects the server from its
network port; no further client connections will be accepted once the
server shuts down. In addition, all of the server threads that were
started by this server object will be notified to terminate.

If 'wait' is omitted or is nil, the routine sends the shutdown
notification to the main server and to its server threads, then
immediately returns. This means that one or more of the server's
background threads might continue to run for a while after shutdown()
returns. The main practical consideration is that the port number used
by the server might not be immediately available for use by a new server
object, since the port won't be closed until the server actually exits.

If 'wait' is true, this routine won't return until all of the server
threads have actually terminated.

The return value is true if all server threads have terminated, nil if
any server threads are still running. It's legal to call this routine
repeatedly, so you can make repeated calls to shutdown(nil) to poll for
completion. This is useful if you need to wait until the server shuts
down to move on to a next step, but you have other work you can perform
in the meantime. If you don't have any other work, you can avoid burning
CPU time by calling shutdown(true), which waits (without consuming CPU
time) for the server to exit.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


