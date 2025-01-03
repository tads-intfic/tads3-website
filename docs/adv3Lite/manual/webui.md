---
layout: docs
---


<img src="topbar.jpg" data-border="0" />





<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="final.html" class="nav">Final Moves</a> \> The Web UI  
<span class="navnp"><a href="lister.html" class="nav"><em>Prev:</em> Lists and Listers</a>
    <a href="extensions.html" class="nav"><em>Next:</em> Extensions</a>
    </span>





# The Web UI

As in adv3, so in adv3Lite, you can choose between the traditional TADS
user interface or the new Web UI. The method for configuring this is
almost identical to that used for the standard adv3 library, apart from
one or two file-names. For the full details, see the section on "Playing
on the Web" in the *TADS 3 System Manual*. In the present section we
reproduce part of that material, duly adapted for use with adv3Lite.

In the traditional UI, the user installs a TADS interpreter on his or
her machine, and the interpreter displays the user interface using the
native features of the operating system — opening a window on the Mac,
for example, or writing to the terminal window on Unix. With the Web UI,
the user interface isn't part of the TADS interpreter at all, but
instead runs in a standard Web browser. The game still runs in the TADS
interpreter, but the interpreter doesn't show any UI windows; instead,
the game sends everything to the Web browser for display, via a network
connection.

The Web UI configuration offers several big new capabilities beyond
what's possible with the traditional TADS user interface:

- **Web-based play.** You can set things up so that users can play your
  game directly in a browser, without installing your game or any TADS
  software on their machines. Users simply point their browser to a URL,
  and the game runs in the browser window. There's nothing for players
  to download or install — not even a plug-in, since the UI is built
  entirely on standard Web technologies that are native to all modern
  browsers (HTML, CSS, Javascript, and AJAX). Your game and the TADS
  interpreter run on a separate Web server machine; the user only needs
  to know the URL to the server, which you can easily supply via a
  hyperlink on your own Web page.
- **Full support for Javascript, CSS, and HTML DOM.** The traditional
  HTML TADS user interface uses an "extended subset" of the older HTML
  3.2 standard, and has no support for CSS, Javascript, or HTML DOM
  access. With the Web UI, you have access to all of those technologies,
  plus full standard HTML, because the UI runs in an actual browser.
  HTML TADS is certainly more optimized for the traditional text game UI
  than a browser is, but the trade-off is that it's narrowly focused on
  that one type of UI. Web browsers are much more flexible and powerful
  as UI platforms.
- **Multiuser gaming.** A key TADS feature that makes the Web UI
  possible is a network server capability. The network capability goes
  beyond just talking to the browser, though: it's really a
  full-featured networking layer that lets a game communicate with
  multiple clients, opening up numerous possibilities for collaborative
  and multi-user games. Although the Adv3Lite library is only designed
  for a single player character, its new Web UI support does allow
  multiple people to connect to the same session and play the game
  collaboratively.

<span id="choosing"></span>

## Choosing between the regular UI and the Web UI

The Web UI is a whole separate output layer from the traditional user
interface, with its own set of functions. This is good news and bad
news.

The good news is that the Web UI gives you vastly more control and power
than the traditional console UI offers. For one thing, all of the
networking features are directly available - they're not hidden inside
the interpreter, but are readily accessible and controllable from your
program. For another, you have direct access to all of the browser-side
coding: you can write your own HTML, CSS, Javascript, and AJAX code to
run in the browser, so you can customize virtually every aspect of the
user interface. There's absolutely nothing about the Web UI that's built
into the interpreter; everything that's predefined is simply part of the
library, so it's readily accessible and customizable. Your game's UI can
do anything that a Web site can do - drag-and-drop, animation, dynamic
pop-up lists, layered objects, menus, and on and on.

The bad news is that **you must choose in advance** whether your game
will use the Web UI or the traditional UI. If you stick to the basic
command-line user interface, the only difference is in compiler options,
so you can actually compile the same game both ways — so you'd have a
single set of source files, but you'd compile it twice, once into a .t3
file for conventional play, and again into a separate .t3 for Web play.
On the other hand, if you decide to take advantage of the more advanced
features of the conventional UI (such as sound playback or the Banner
API), or if you want to customize the Javascript front end of the Web
UI, your game will be tied to the UI that you choose.

If you have an existing game that you created with a previous TADS 3
version, you can port it to the Web UI. If you were careful to use only
Adv3Lite functions for input and output, rather than calling built-in
interpreter functions directly, porting your game to the Web UI should
be a simple matter of recompiling with the Web UI compiler settings. If
you made use of more advanced UI features, though, porting requires
somewhat more work:

- the banner API
- sound playback
- non-standard TADS HTML tags

<span id="creating"></span>

### Creating a new Web UI game from scratch

The first step in creating a Web UI game is to set up your build
instructions (your project's .t3m file) to include the networking
functions and the Web UI version of the Adv3Lite library.

*If you're using Workbench on Windows:* Select the Create New Project
command. The "wizard" dialog will ask you which type of user interface
to use; select the "Adv3Lite - Web UI" option from the list of project
types.

*If you're creating your project file manually:* Follow the standard
procedure for creating a .t3m file for a regular Adv3Lite game. Once
you've set up the basic .t3m file, follow the instructions
[below](#manual_port) for changing a .t3m file from a conventional game
to the Web UI. <span id="porting"></span>

### Porting an existing game

To port an existing game based on the traditional console user interface
(including HTML TADS games), the first step is to switch to the Web UI
libraries. This requires a few changes to your project's .t3m file.

Attention Workbench users on Windows: It's possible to make the
necessary changes using Workbench, but the procedure is actually a bit
easier if you edit the .t3m file manually, so the explanation below
assumes you're going that route. *Close Workbench* before proceeding,
and use a different editor, such as Notepad. *Don't* attempt to edit the
.t3m file using Workbench or while it's open in Workbench, since
Workbench will overwrite any changes you make as long as Workbench has
it open.

<span id="manual_port">Here's the procedure to update your .t3m file to
use the Web UI:</span>

- Open your project's .t3m file in a **non-Workbench** editor (e.g.,
  Notepad on Windows)
- At the start of the file (after any comments, but before the first
  source file is listed), add **-D TADS_INCLUDE_NET**
- Change the line **-lib adv3Lite** to **-lib adv3LiteWeb**
- Add the following lines immediately after the **-lib adv3LiteWeb**
  line we just updated (but after any **-x** lines that happen to follow
  it):
  - **-lib webui**
  - **-source tadsnet**

The first item, **-D TADS_INCLUDE_NET**, tells the compiler to include
the network-related built-in functions. These interfaces aren't included
by default because they're not universally supported on all
interpreters, and a game that includes them won't run on an interpreter
that doesn't support them. This makes it better to omit them unless you
actually make use of them, which of course you must for a Web UI game.

The second item, **-lib adv3LiteWeb**, selects the Web version of the
Adv3Lite library. Adv3LiteWeb emulates all of the programming interfaces
from Adv3Lite related to basic command-line interactions, such as
displaying text or HTML output, reading command lines, reading
keystrokes, and so on. This lets you write a Web UI game as though it
were a standard console-based game.

The third item, **-lib webui -source tadsnet**, adds the TADS Web UI
library to the build, along with some helper classes for the networking
interfaces. The Web UI library is a separate component from Adv3LiteWeb.
Adv3LiteWeb doesn't actually implement the Web interface, but rather
implements an emulation of the traditional Adv3Lite input and output
functions on top of the Web UI library. The Web UI library is a whole
separate subsystem that consists of a Javascript library that runs in
the user's Web browser, and a TADS library that runs on the server
machine hosting the game. The TADS and Javascript portions communicate
with each other using the TADS networking system.

The Web UI library is analogous to the traditional input/output
functions built into the interpreter. With traditional console-based
games, you always had the option to bypass the Adv3Lite library and work
directly with the interpreter built-ins. For Web-based games, you
similarly have the option to bypass the Adv3LiteWeb library and work
directly with the Web UI library. If you do so, of course, your game
will be inextricably tied to the Web UI - you won't be able to easily
port it back to the console UI later. But the trade-off is that you can
exploit the full power of Javascript in the browser.

Depending on how much custom UI work you use in your existing game, the
library additions above might be all you have to do. The Adv3LiteWeb
library emulates the input and output functions in Adv3Lite, so you
won't have to change anything related to displaying text or reading
input as long as you used Adv3Lite functions for I/O rather than calling
the interpreter built-ins directly.

If you use any HTML image or audio files, such as JPEG images, there's
an extra step. See [resource files](#resfiles) below.

To test your game in Web UI mode, recompile with the .t3m changes above.
If it compiles successfully, try running it. If you're using Windows,
HTML TADS will run a Web UI game locally as though it were a standard
game - so you don't have to set up a Web server to test Web UI mode.

If you encounter any compiler errors building your game after making the
.t3m changes, you must have used a part of Adv3Lite that isn't supported
in the Web version. The most likely missing piece is the banner API -
Adv3LiteWeb doesn't support it. The Javascript front end has analogous
capabilities, but the specifics are different enough that there's no
Adv3LiteWeb emulation for the console-mode banners.

If the game compiles successfully, but doesn't work correctly when you
run it, your game probably calls built-in functions in the interpreter
rather than using the Adv3Lite equivalents. You'll have to examine your
code and eliminate calls to built-ins. <span id="buildingboth"></span>

### Building the same game both ways

If you stick to the basic command-line user interface, and you're
careful to use Adv3Lite library methods for all of your input/output
operations, porting from the console UI to the Web UI is usually just a
matter of changing your .t3m file as described above.

An interesting implication is that you can easily create both UI
versions of your game from the same set of source files. If you create
two copies of your .t3m file - one for the console UI, and another for
the Web UI - creating the two versions is just a matter of compiling the
game with each .t3m file.

Why would you want to do this? The main reason is to accommodate
different users' preferences. Playing on the Web has a number of
advantages (greater portability, no need to install anything, the
ability to resume a saved game on different machines, multi-user
collaboration), but the traditional console UI has some advantages of
its own (faster response time, no need to be connected to the Internet
while playing). Offering both versions of your game lets users pick the
mode that works better for them.

Here are some tips for creating a dual-mode game:

- When you create your two .t3m files, give the final .t3 file
  (specified with the "-o" option) a different name for each version.
  For example, use "-o mygame.t3" for the console version, and "-o
  mygameWeb.t3" for the Web UI version.
- When you're ready to build the two versions, be sure to do a *full*
  build of each version, so that all of the intermediate files are
  rebuilt from scratch. If you're compiling from the command line, use
  the -a option (`t3make -a -f mygame`). If
  you're compiling with Workbench on Windows, use the "Full Recompile
  for Debugging" command (note that "Compile for Release" always does a
  full build, so you can use that command as well).
- If you follow the [Adv3LiteWeb usage tips](#Adv3WebUsageTips) we'll
  see later in this chapter, all of your source code should work equally
  well in both modes. However, you might decide that you want to create
  some special effects that require calling the built-in I/O functions
  and/or the Javascript UI directly. If you do, you'll have to write a
  different version of that special code for each UI mode. There are two
  ways to isolate code that works only in one or the other UI mode:
  - You can use `\#ifdef TADS_INCLUDE_NET` to
    mark off sections that apply only to one or the other mode. Recall
    that we added this symbol to the .t3m file for the Web UI only, so
    if this symbol is defined, you know you're compiling the Web UI
    version.
    `
        #ifdef TADS_INCLUDE_NET
           special code for the Web UI goes here
        #else
           special code for the console UI goes here
        #endif

    
  - Alternatively, if you have extensive code for the two modes, it can
    be cleaner to separate the variant code into two separate source
    files. Create one file that's exclusively for the Web UI, and
    another that's exclusively for the console UI. In your .t3m files,
    include a `-source` line for the appropriate
    source file for each build. This ensures that the Web UI source file
    is only included in the Web UI build, and the console source file is
    only in the console build. Adv3Lite itself uses this approach - it
    has a file called console.t that's only included in the traditional
    Adv3Lite library source list, and another called browser.t that's
    only included in the Adv3LiteWeb source list.

## <span id="resfiles">Resource files</span>

If you use HTML resources such as images or audio files (JPEGs, PNGs,
MP3s, etc), there's an extra detail to tend to: you have to tell the
library that it's okay for client browsers to download those files. The
library is cautious about network security, so by default it doesn't let
clients download anything without your say-so.

It's fairly easy to specify resource download permissions. First, you
should group your resources into one or more folders - that is,
subdirectories of your main project folder for the game. Second, for
each folder, add an object definition like this to your game:



    WebResourceResFile
       vpath = static new RexPattern('/foldername/')
    ;
```

That tells the library to treat anything in the "foldername"
subdirectory of the game folder as an HTML resource, allowing the client
browser to download those files. It's just an ordinary object
definition, so you can put it anywhere in your source code that object
definitions are allowed. If you divide your resources into multiple
folders, just add a definition like the one above for each folder. (You
don't have to do this for subfolders, though - the '/foldername/'
definition will allow files in subfolders of 'foldername'.)

## <span id="shutdown">QUIT, disconnect, and program termination</span>

In the traditional console UI, the way the game program terminates is
fairly straightforward. When the player types QUIT, the Adv3Lite command
loop exits, which unwinds the call stack until the
```main()` function returns. This terminates the
game program, at which point the interpreter program exits to the
operating system. Alternatively, on GUI versions (such as QTads or HTML
TADS), the player can end the program by closing the main window. This
is processed in much the same way as QUIT internally: the interpreter
sends an "end of file" indication to the command loop, to let it know
that no more input is forthcoming (as there's no way for the player to
enter more input without the main window), causing the command loop to
exit.

With the Web UI, things aren't quite as simple. The complication is that
the player and the game are on separate computers. At first glance, it
might seem as though we could take the same approach: if the player
types QUIT or closes their browser, we should simply let the TADS
program terminate as usual. But what happens if the player's network
connection momentarily lapses? We obviously don't want to treat that the
same way as an intentional disconnection, but it's not always possible
to tell the difference with the network protocols involved. And what
happens if the player presses the Refresh button in their browser? It
turns out that "Refresh" and "Close Page" are essentially
indistinguishable from the perspective of a Web page. Further, what
happens if the player types QUIT, but still wants to see what's on the
page for a while after? If they try to refresh the page after typing
QUIT, the server - the game program - still has to be running to service
the request.

To handle these various situations, the Web UI has to use a different
approach to managing its session lifetime. For the Web UI, the program's
job is larger than merely running the game; it's also acting as a Web
server. The Web server's lifetime isn't defined by the duration of the
game session, but rather by the existence of connected clients: as long
as there's a client connected, the Web server needs to be available to
service any new requests from the client.

As we mentioned above, the network protocols we use don't tell us with
certainty whether or not a client is connected. More precisely, they
don't tell us with certainty that a client is *not* connected. We *can*
tell for sure that a client is connected, because if we receive a
request message, we know that it had to come from a connected client.
But the absence of any requests doesn't necessarily mean that there are
no clients; it could simply mean that the client doesn't have any work
for us at the moment, or that the client computer is tied up doing
something else before it can issue its next request, or that a network
glitch has temporarily delayed messages from the client.

The Web UI has a two-pronged approach to dealing with all these
uncertainties. First, the Javascript portion of the UI uses a
publish/subscribe model to maintain a continuous communication channel
with the server. The server uses this channel to send periodic
"keepalive" messages to the client when no other messaging activity is
taking place. This ensures that the client and server exchange messages
with a minimum frequency (about every 90 seconds — frequently enough to
allow reasonably timely detection of a disconnected client, but rarely
enough that the extra messages won't affect network performance).
Second, the server monitors client sessions for long periods of
inactivity. When a client doesn't responds to our "keepalive" messages
for longer than a certain interval (about 60 seconds), we assume that
the client has disconnected. When we haven't heard from *any* clients
for a certain interval (about 120 seconds), we assume that the player
must be finished with the game. This the point when the program exits
and the interpreter terminates.

The timeout intervals mentioned above are nothing magical; they're just
parameters in the Web UI server code, chosen based on practical
experience. Detecting a disconnection is inherently probabilistic: we
can never be certain a client is never coming back, no matter how long
it's been since we last heard from them, but the longer we go the more
likely it becomes that we have a disconnection rather than something
temporary like a network glitch or client-side CPU bottleneck. The
practical goal is to choose timeouts that let us shut down the
server-side program as soon as possible when it's no longer needed (so
that the server machine resources aren't tied up longer than necessary),
but no sooner.

Note that when running in [local stand-alone mode](#standalone), some
interpreters maintain a direct connection to the browser window that
allows them to detect when the player closes the window. This bypasses
the timeouts and allows the game program and interpreter to terminate
immediately when the player closes the browser window. This is possible
in standalone mode because everything's running on one machine, which
eliminates the uncertainties of the network configuration and allows the
interpreter to know exactly what's going on with the browser. The
Windows interpreter provides this feature.

## <span id="standalone">Local single-machine (stand-alone) testing</span>

One of the main reasons to create a Web UI game is that it allows users
to play on the Web, without having to download your game or install
software. However, Web UI games can *also* be played without a Web
server, a browser, or a network connection. Most TADS interpreters let
you play a Web UI game in "local" mode, also known as standalone mode -
this means that you run the game on a single computer without a Web
server involved.

You'll probably want to use standalone mode while you're developing and
testing your game, since it would be inconvenient to have to upload your
game to a server every time you recompile. <span id="debugging"></span>

### Debugging with Workbench on Windows

If you're using Workbench on Windows to develop your game, standalone
mode is the default way of running. When you use the Go command,
Workbench automatically runs the game in standalone mode. Everything
looks just like it does with a traditional console-mode game. The only
difference is that the game window is actually an embedded Web browser -
but this is all handled invisibly, so you don't have to worry about
launching a browser separately or typing a URL or anything like that.

As we described [earlier](shutdown), a Web UI game continues running
even after the player types QUIT, so that it can continue to provide
HTTP services as long as the client is connected (to allow page
refreshes, for example). This can be a little strange when you're using
the debugger. There are two simple ways to truly terminate the game
program: you can close the game window, or you can use the Terminate
Game command in the debugger. Closing the game window triggers a special
message to the game program that tells it to terminate immediately,
bypassing the usual timeout intervals that would otherwise keep the game
running for a while longer. When you use the Terminate Game command,
this directly ends the game program.

## <span id="Adv3WebUsageTips">Adv3LiteWeb usage tips</span>

When using the Adv3LiteWeb library, there are some additional things you
should do to make sure your game works correctly.

### Use aHref() for command links

In HTML TADS games, you can use `\<A HREF=xxx\>`
to create clickable command links. With the Web UI, all HTML is
displayed by a standard Web browser, so the `\<A
HREF\>` tag has its standard meaning, which is to create a
hyperlink to a separate Web page.

To create a command link, use the Adv3LiteWeb function
`aHref()`:

```
    "To save the game, type <<aHref('SAVE')>>. "
```

You should continue to use `\<A HREF\>` for
actual hyperlinks, where the link navigates to another Web page rather
than entering a command, as well as for special links such as
`mailto:` links.

### Don't use `\<TAB\>`

The `\<TAB\>` tag is an HTML TADS extension that
isn't in standard HTML. Standard Web browsers don't support it.
Unfortunately, standard HTML doesn't have a simple equivalent of
`\<TAB\>`, but you can usually achieve similar
effects using `\<SPAN\>` or
`\<DIV\>` tags with CSS styling to control
spacing.

### <span id="inputmanager">Use inputManager methods for input</span>

As we've already mentioned a couple of times, you can't use the
interpreter's built-in functions for input and output. The built-ins all
operate directly on the local console, which obviously isn't available
to a remote user playing on the Web.

Instead of the interpreter built-ins, always use the
<span id="inputmgr_idx">inputManager</span> equivalents:

- inputManager.getInputLine(promptFunc?) (*not* inputLine or
  inputLineTimeout)
- inputManager.getKey(promptFunc?) (*not* inputKey)
- inputManager.getEventOrKey(promptFunc, keyOnly) (*not* inputEvent)
- inputManager.getInputFile(prompt, dialogType, fileType, flags) (*not*
  inputFile)
- inputManager.getInputDialog(icon, prompt, buttons, defaultButton,
  cancelButton) (*not* inputDialog)
- inputManager.pauseForMore() (*not* morePrompt)

The *promptFunc* parameter can be supplied either as an anonymous
function that displays a prompt or simply as a single-quoted string. For
`getInputLine()` and
`getKey()` (or their macro equivalents) this
parameter can be omitted altogether; you can simply display a prompt
string before calling the method.

For the most common cases you can use the following macros:

- **more** expands to
  `inputManager.pauseForMore()`
- **input(x)** expands to
  `inputManager.getInputLine(x)`
- **waitKey(x)** expands to
  `inputManager.getKey(x)`

<span id="cls"></span>

### Use `cls()` instead of `clearScreen()`

You shouldn't use the built-in function
`clearScreen()`, just as you shouldn't use any
other built-in I/O functions. Use `cls()`
instead - this will work correctly in both Adv3 and Adv3web.
<span id="nobanner"></span>

### Don't use the Banner API

The Banner API isn't supported in Adv3LiteWeb. This includes both the
low-level banner functions built into the interpreter and the Adv3Lite
BannerWindow class.

The Web UI provides similar capabilities, but it uses a new programming
interface. The new system is much more flexible than the banner API
because it uses Javascript and CSS in the client. This combination isn't
limited to the "tiled" model of the banner API - you can create
overlapping windows, create transparent windows, move windows
dynamically, set sizes using font metrics, etc. The new system is so
different that it makes more sense to work directly with the new
interfaces, so that you can take better advantage of their new
capabilities.

Note that Adv3LiteWeb *does* provide the higher-level components that
were built on the banner API in Adv3Lite: the status line, the menu
system, and the hint system. The Adv3LiteWeb versions of these
components are built directly on the new Javascript front end instead of
the banner API. <span id="sound"></span>

### Sound playback

The `\<SOUND\>` tag is an HTML TADS extension
that's not in standard HTML, so you can't use it for sound playback in
Web UI games.

There's currently no support for sound playback in the Web UI library.
Mike Roberts plans to add this in the future. For the moment, if you
need sound playback, you'll have to resort to direct Javascript
programming. <span id="aboutbox"></span>

### `\<ABOUTBOX\>`

The `\<ABOUTBOX\>\>` tag is an HTML TADS
extension, not part of standard HTML. You shouldn't use this tag.
There's currently no equivalent in the Web UI. However, note that the
Adv3Lite library only calls
`gameMain.setAboutBox()` when running in console
mode, so it's fine to write your `\<ABOUTBOX\>`
code as usual in that method.



------------------------------------------------------------------------



*Adv3Lite Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="final.html" class="nav">Final Moves</a> \> The Web UI  
<span class="navnp"><a href="lister.html" class="nav"><em>Prev:</em> Lists and Listers</a>
    <a href="extensions.html" class="nav"><em>Next:</em> Extensions</a>
    </span>


