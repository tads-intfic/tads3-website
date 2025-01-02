---
---
<div class="topbar">

<img src="topbar.jpg" data-border="0" />

</div>

<div class="nav">

<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="langsec.html" class="nav">The Language</a> \> The Main Program
Entrypoint  
<span class="navnp"><a href="enum.html" class="nav"><em>Prev:</em> Enumerators</a>
   
<a href="inherit.html" class="nav"><em>Next:</em> The Object Inheritance
Model</a>     </span>

</div>

<div class="main">

# Starting Up: The Main Program Entrypoint

When a user launches your TADS 3 program, the interpreter starts things
running by calling a function in your program called main(). This
function takes one parameter, which is a list of strings representing
the command-line arguments that the user entered to start the program.

Your definition of main() should look something like this:

<div class="code">

    main(args)
    {
       // do something
    }

</div>

This function is important because it is, conceptually, your entire
program. This function is the first and only function the interpreter
calls when your program starts running, and when the function returns
(or terminates some other way, such as by throwing an exception), the
program exits.

Now, in most cases, you won't *literally* put your entire program here
(although if the program is very small, you might very well). Usually
this function contains the main flow of the program: it will do any
initial set-up, then call some other functions to do the main work of
the program, then do any final clean-up before returning. In the case of
an adventure game, the main work of the program is probably an
indefinite loop that reads commands from the player and carries them
out.

Note that you won't have to define a main() function if you're using the
standard adventure library, adv3, since the library defines that for
you. (This will probably be true of any alternative libraries as well.)

## The command-line argument list

The parameter to main() is a list of strings representing the
command-line arguments to the program.

If the user is running your program from within a traditional
command-line shell, such as a Unix shell or a Windows command prompt (a
"DOS box"), they might start your program with a command like this:

<div class="cmdline">

    t3run -s0 -cs us-ascii mygame.t3 hello world!

</div>

This command line is a little complicated by the fact that there are
really *two* programs being activated here. First, there's the TADS 3
interpreter, t3run. From the operating system's perspective, this is the
program that's really running - it's the native application program that
the OS is going to load into memory and launch as a result of this
command line. From the OS's perspective, all of the words on the line
after "t3run" are arguments to the t3run program.

Once t3run starts running, though, it knows that its job is to launch
the second program named here - specifically, your TADS 3 program,
mygame.t3. The interpreter knows that it's meant to do this because the
command arguments tell it so. t3run looks at the arguments one by one,
scanning from left to right. Each word that starts with a hyphen is an
option flag (also known as a "switch"). In this case, the user has
included two options, -s0 and -cs us-ascii. The first thing after the
last t3run option is always the name of the .t3 file to execute, so the
interpreter sees that it's meant to load and run mygame.t3.

Everything on the command line after the name of the .t3 file is an
argument to your program. t3run assembles these arguments into a list of
strings, and passes the list as the parameter to the main() function.
Other than this, t3run ignores those arguments, so you can define any
syntax you like for that part of the command line.

In the example above, the argument list will look like this:

<div class="code">

    ['mygame.t3', 'hello', 'world!']

</div>

Note that the first element of the list is the name of the .t3 file, as
the user typed it. The second list element is the first command-line
token after the .t3 file, the list element is the second token, and so
on.

The rules for dividing a command line into tokens vary by operating
system. On most command-line systems, the convention is to separate
tokens at spaces, with the exception that quotes can be used to enclose
a token that contains spaces or other separator characters.

On systems that use non-command-line interfaces, it's up to the system
porter to determine how users can specify command arguments, if at all.
Some GUI systems, like Windows and X-11, have hybrid GUI/command-line
interfaces that let a user either drop down into a command line as
needed, or enter command-line arguments to a program through the GUI.
Others don't have any standard way of doing this. So, for maximum
portability, you shouldn't count on there being any way for the user to
enter command-line arguments.

## Restoring saved state at start-up

Most TADS 3 interpreters support an option that lets the user specify a
saved-state file to restore instead of a .t3 file to load. Saved-state
files contain information on the .t3 file that was running when the
state was saved, so the interpreter is able to launch a .t3 given a
saved-state file.

The user interface action that invokes this kind of start-and-restore
operation varies by interpreter. With the command-line interpreters, the
"-r" option has this effect. Some GUI interpreters use the operating
system's desktop interface to let the user double-click on a saved-state
file (for example) to launch it.

In any case, when the user launches the interpreter using this option,
the system *attempts* to call a program function named mainRestore():

<div class="code">

    mainRestore(args, restoreFile)
    {
    }

</div>

This function is similar to main(), but takes an extra argument, which
is a string giving the name of the saved-state file to be restored. The
program is responsible for restoring the saved state, which it can do
with the <span class="code">restoreGame()</span> function (see the
[tads-gen](tadsgen.html) function set).

If the program doesn't define a mainRestore() function, the system
simply displays an error message indicating that the program doesn't
support this option, and terminates the program.

## Low-level start-up

The <span class="code">main()</span> function is actually defined in the
[system library](lib.html), not by the T3 VM itself. You'll almost always
use the system library when working with TADS 3, so what's going on
under the covers will probably be of no more than academic interest.
Nonetheless, we'll now go into the low-level details of how the VM
directly handles program startup.

At startup, the VM calls one of two functions:

- For normal startup, the VM calls \_main(args). A "normal" startup is
  any startup that's not a "restore" startup.
- For a restore startup, the VM calls \_mainRestore(args, restoreFile).
  A restore startup happens when the user invokes the interpreter by
  specifying a saved-state file to restore; in this case, the VM figures
  out which .t3 file created the saved-state file, then loads that .t3
  program and invokes \_mainRestore(). It's then up to the .t3 program
  to restore the saved-state file

The standard system library includes definitions for \_main() and
\_mainRestore(). The implementation of \_main() carries out the standard
pre-initialization and run-time initialization processes (see the
[initialization](init.html) section for details), then invokes main().
\_mainRestore() does the same work, but invokes mainRestore() if it's
defined, otherwise displays an error and aborts.

Both \_main() and \_mainRestore() perform the following steps before
calling the appropriate program entrypoint (i.e.,
<span class="code">main()</span> or
<span class="code">mainRestore()</span>):

- Establish a default display function
  (<span class="code">\_default_display_fn()</span>, also implemented in
  the system library)
- Run pre-initialization if necessary by invoking each PreinitObject's
  <span class="code">execute()</span> method. During the special
  post-compilation pre-initialization step, the default start-up code
  stops here. If this is a normal execution, though, the library checks
  to see if pre-initialization has already been completed by checking
  the <span class="code">mainGlobal.preinited\_</span> flag, and skips
  this step if this flag is set to true, which indicates that
  pre-initialization has already been performed.
- Runs initialization if by invoking each InitObject's
  <span class="code">execute()</span> method.

All of this, along with the call to the program's main entrypoint, is
done within a <span class="code">try</span> block. If any exceptions are
caught at this level, the <span class="code">catch</span> block displays
the exception's error message and terminates the program.

## Notes for TADS 2 Users

In previous versions of TADS, there wasn't any such thing as a "main"
entrypoint to the game. The interpreter's built-in parser took control
from the start, and only called the game program to notify it of events.
When the program started running, TADS called the game's
<span class="code">init()</span> function to let the game carry out any
desired start-up processing. This function performed any needed
initialization, then returned. At that point the system entered the main
command loop, in which the interpreter prompted the user, read a command
line, parsed the command, and called program functions and methods to
execute the operations of the command.

TADS 3 doesn't have a built-in parser, and it doesn't even have a
built-in command loop. It leaves these functions up to the program. That
doesn't mean you have to define them yourself, of course. If you're
using the standard adv3 library, the library provides these for you.
That's better than having them built into the interpreter, since it
gives you the ability to customize as much of the library
implementations as you need to, or even replace them completely.

TADS 3 doesn't use TADS 2's <span class="code">init()</span> function,
but it has a similar feature. Refer to [initialization](init.html) for
information on how pre-initialization and run-time initialization work
in TADS 3.

</div>

------------------------------------------------------------------------

<div class="navb">

*TADS 3 System Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="langsec.html" class="nav">The Language</a> \> The Main Program
Entrypoint  
<span class="navnp"><a href="enum.html" class="nav"><em>Prev:</em> Enumerators</a>
   
<a href="inherit.html" class="nav"><em>Next:</em> The Object Inheritance
Model</a>     </span>

</div>
