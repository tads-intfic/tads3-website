---
layout: docs
---
<div class="topbar">

<img src="../../docs/manual/topbar.jpg" data-border="0" />

</div>

<div class="nav">

<a href="../../docs/manual/toc.html" class="nav">Table of Contents</a> \|
<a href="../../docs/manual/extensions.html" class="nav">Extensions</a> \>
Sensory  
<span class="navnp"><a href="sensory.html" class="nav"><em>Prev:</em> Sensory</a>
    <a href="subtime.html" class="nav"><em>Next:</em> Subtime</a>    
</span>

</div>

<div class="main">

# Signals

## Overview

The purpose of the [signals.t](../signals.t) extension is to provide a
means for one object to send signals to another (which can then respond
to them) and to provide a mechanism for establishing and breaking
signalling links between objects. This mechanism employs the
[Relations](relations.html) extension, which must also be present.

  
<span id="classes"></span>

## New Classes, Objects and Methods

In addition to a number of methods intended purely for internal use,
this extension defines the following new classes, objects and methods:

- *Classes*: **Signal**
- *Objects*: litSignal, unlitSignal, discoverSignal, undiscoverSignal,
  lockSignal, unlockSignal, onSignal, offSignal, wornSignal, doffSignal,
  moveSignal, seenSignal, examineSignal, takeSignal, dropSignal,
  openSignal, closeSignal, pushSignal, pullSignal, feelSignal
- *Methods on Signal*: `emit()`.
- *New methods on Thing*: `emit()`,
  `handle()`.

<span id="usage"></span>

## Usage

Include the signals.t file after the library files but before your game
source files. The [Relations](relations.html) extensions (relations.t)
must also be present.

The basic mechanism is that an object (the sender) sends a signal by
calling its **emit()** method with the signal as the argument, for
example:

```
    emit(openSignal);
     
```

Any interested objects can then handle this signal in their **handle()**
method, which takes two arguments, the sender and the signal that's just
been sent:

```
    handle(sender, signal)
    {
       if(sender == safeDoor && signal == openSignal)
         ...
    }   
     
```

To register that an object (the receiver) is interested in receiving a
particular signal from a particular sender, we establish a relation
between them using the **connect()** function:

```
    connect(sender, signal, receiver); 
     
```

The relation between sender and receiver can be severed using the
**unconnect()**<sup>[\[1\]](#note1)</sup> function:

```
    unconnect(sender, signal, receiver); 
     
```

A sender will send signals only to those receivers that have been
related to it through the relevant Signal/Relation using the
`connect()` function.

Defining a new signal is usually very straightforward. Since a Signal is
a kind of Relation, it can be defined using the Relation template, e.g.
to define a signal an object might send when it's cut:

```
    cutSignal: Signal 'cut';
     
```

Here the 'cut' in the template defines the signal's name property, which
may be used in the `connect()` and
`unconnect()` functions in place of the Signal's
programmatic name. Thus these two statements do precisely the same
thing:

```
    connect(wire, cutSignal, alarm);
    connect(wire, 'cut', alarm);
     
```

<span id="defsignal"></span>

That all said, there is an easier and better way do define a Signal,
using the **DefSignal** macro. Using this macro the foregoing definition
cutSignal becomes:

```
     DefSignal(cut, cut); 
     
```

This expands to:

```
    cutSignal: Signal 
      name = 'cut'
      handleProp = &handle_cut
    ;
     
```

The purpose of the `handleProp` property will be
explained [below](#complex); in the meantime the point to remember is
that the macro `DefSignal(sig, nam)` expands to:

```
    sigSignal: Signal 
      name = 'nam'
      handleProp = &handle_sig
```

A Signal may be defined with additional properties which the sender can
set to convey additional information to the sender. For example this
extension defines:

```
     DefSignal(move, move) destination = nil;
     
```

This (the destination property) allows
`moveSignal` to convey information about where
the sender was moved to, as well as the fact that it was moved. How it
does so will be discussed further below.

Note that there is no need to define the
`relationType` of a Signal since this extension
already defines it as manyToMany.

Note also that simply defining a signal doesn't make anything happen.
Your code still has to emit it somewhere, and it won't be handled
anywhere until you've related it to the relevant receivers using the
`connect()` function. Some signals come
predefinined in this extension, however, along with the code to emit
them at appropriate points. These are described below.

<span id="note1"></span>\[Note 1: The name 'unconnect' is used rather
than the more normal 'disconnect' mainly because 'disconnect' is already
used as a method name elsewhere in the library and so cannot also be
used as the name of a function. Also, the use of the names
`connect()` and
`unconnect()` better parallels that of the names
`relate()` and
`unrelate()` to establish and break relations,
which is more or less what these functions do as well. Indeed, in many
instances, `relate()` and
`unrelate()` could be used for Signals as well,
but the `connect()` and
`unconnect()` functions do some additional work
that is needed in more complex cases, so it is probably best to stick to
their use consistently in relation to Signals.\]

  
<span id="defined"></span>

## Signals Defined in this Extension

This extension defines the following signals and causes them to be
emitted as appropriate:

- **litSignal**: Signal 'lit'; - emitted when an object becomes lit via
  a call to `makeLit(true)`.
- **unlitSignal**: Signal 'unlit'; - emitted when an object becomes
  unlit via a call to `makeLit(nil)`.
- **discoverSignal**: Signal 'discovered'; - emitted when an object
  becomes discovered via a call to
  `discover(true)`.
- **undiscoverSignal**: Signal 'lost'; - emitted when an object becomes
  undiscovered via a call to `discover(nil)`
- **lockSignal**: Signal 'locked'; - emitted when an object becomes
  locked via a call to `makeLocked(true)`.
- **unlockSignal**: Signal 'unlocked'; - emitted when an object becomes
  unlocked via a call to `makeLocked(nil)`.
- **onSignal**: Signal 'turned on'; - emitted when an object becomes
  switched on via a call to `makeOn(true)`.
- **offSignal**: Signal 'turned off'; - emitted when an object becomes
  switched on via a call to `makeOn(nil)`.
- **openSignal**: Signal 'open'; - emitted when an object becomes open
  via a call to `makeOpen(true)`.
- **closeSignal**: Signal 'closed'; - emitted when an object becomes
  closed via a call to `makeOpen(nil)`.
- **wornSignal**: Signal 'worn' wearer = nil; - emitted when an object
  becomes worn via a call to
  `makeWorn(*wearer*)`.
- **doffSignal**: Signal 'doffed'; - emitted when an object becomes not
  worn via a call to `makeWorn(nil)`.
- **moveSignal**: Signal 'moved' destination = nil; - emitted when an
  object is moved via a call to `moveInto(dest)`
- **actmoveSignal**: Signal 'action moved' destination = nil; - emitted
  when an object is moved via a call to
  `actionMoveInto(dest)`. Note that if an
  `actmoveSignal` is sent a
  `moveSignal` will also be sent, but the
  reverse is not necessarily the case. An
  `actmoveSignal` is only sent if the sender is
  moved as the direct result of some player or NPC action, whereas a
  `moveSignal` may also be sent if the sender is
  moved by authorial fiat for some other reason.
- **seenSignal**: Signal 'seen' location = nil; - emitted when
  `noteSeen()` is called on the object.
- **examineSignal**: Signal 'examine'; - emitted when the EXAMINE action
  is carried out on the object.
- **takeSignal**: Signal 'take'; - emitted when the TAKE action is
  carried out on the object.
- **dropSignal**: Signal 'drop'; - emitted when the DROP action is
  carried out on the object.
- **pushSignal**: Signal 'push'; - emitted when the PUSH action is
  carried out on the object.
- **pullSignal**: Signal 'pull'; - emitted when the PULL action is
  carried out on the object.
- **feelSignal**: Signal 'feel'; - emitted when the FEEL action is
  carried out on the object.

Note that the last six signals are emitted as a result of *actions*
being carried out, while all the rest are emitted by *state changes*.
This difference is reflected in the (string) name properties assigned to
each signal; state-change signals have names like 'closed' or 'locked'
that reflect the state just attained, while action signals have (string)
names like 'take' or 'drop' that reflect the name of the action just
carried out.

Some of these signals have additional properties, like
`destination` on
`moveSignal` or
`location` on
`seenSignal`. These are ways of passing
additional information via the signal. The recipient may want to know
not simply that the sender has moved, but where it's moved to; the
**destination** property supplies this information. In a similar way the
**location** property of `seenSignal` specifies
where the target has just been seen. The extension sets these properties
when the relevant signals are emitted, but in the next section we look
at *how* such properties are set so you can do the same on any
additional signals you define in your own game.

Note that defining additional signals that are automatically emitted by
TActions is very straightforward: you just define the new Signal and
assign it to the **signal** property of the action in question, e.g.:

```
    DefSignal(clean, clean);
     
    modify Clean
      signal = cleanSignal
    ;
     
```

This will result in a cleanSignal being emitted by the direct object of
a CLEAN action. Note, however, that this short-cut is only available for
TActions, and not for any other kind of action (TIActions included). If
you want signals to be triggered by any other kind of action you'll need
insert your own call to the `emit()` method at
some appropriate point in the code that handles the action. For anything
other than a TAction it is probably better for game code to decide what
the appropriate point is in individual cases (whereas for a TAction it
makes good sense simply to emit the relevant signal from the direct
object immediately after the action has taken place).

  
<span id="additional"></span>

## Sending Additional Information via Signal Properties

In order to add information about where the sender is being moved to
when the `moveSignal` is emitted from
`moveInto()`, this extension defines
`moveInto(`) as follows:

```
     moveInto(newCont)
     {
            inherited(newCont);
            
            emit(moveSignal, newCont);
     } 
     
```

*newCont* is the new container into which the object is being moved.
This is the value that needs to be assigned to the
`destination` property of moveSignal. But how
does newSignal know which property to set to this value? This is defined
in the **propList** property of the Signal. The
`propList` property contains a list of property
pointers, which define the properties to which successive arguments of
the `emit()` method are to be assigned. For
example, `moveSignal` defines
`propList = \[&destination\]`; this means that
the first argument of the `emit()` method
following the signal name is assigned to the destination property. If
fooSignal defined propList as `\[&foobar, &bar,
&thingy\]`, then a call to `emit(fooSignal, x,
y, z)` would set `fooSignal.foobar` to x,
`fooSignal.bar` to y, and
`fooSignal.thingy` to z.

Since this relies on matching the argument list in the call to
`emit()` to the order of properties defined in
the Signal's propList property (which may not always be easy to
remember), an alternative syntax is also available that allows values to
be assigned to properties by supplying lists of property pointers
followed by the value to be assigned to the corresponding property. So,
for example, `emit(moveSignal, newCont)` could
instead be written as `emit(moveSignal,
\[&destination, newCont\])`, which makes it explicit that the
value of `newCont` is to be assigned to the
`destination` property, and which doesn't depend
on getting the order of properties right. Thus the fooSignal example
could be written as `emit(fooSignal, \[&thingy, z\],
\[&bar, y\], \[&foo, x\])` and the end result would be the same.

You can mix the two ways of assigning values to properties, but only if
the lists come after the positional properties. Thus
`emit(fooSignal, x, \[&thingy, z\], \[&bar,
y\])` would be fine, but not `emit(fooSignal,
\[&thingy, z\], \[&bar, y\], x)`. Also, you should not attempt to
do something like this:

```
        fooSignal.foobar = x; //DON'T DO THIS!!
        fooSignal.bar = y;
        fooSignal.thingy = z;
        emit(fooSignal); 
     
```

The reason for *not* doing this is that the call to
`emit()` will overwrite all the properties in
the `propList` list to
`null` before assigning any values passed as
parameters. This is to prevent spurious values left over from a previous
`emit()` call being sent to the wrong handler.
We use `null` rather than
`nil` as the non-value, since in some
circumstances a value of nil could be significant; for example a call to
`moveInto(nil)` would cause a moveSignal to be
emitted with a destination of `nil`, which might
be important information for any handler that receives the signal.

  
<span id="complex"></span>

## More Complex Handling

So far we have assumed that a signal will be handled by the
`handle()` method on any interested recipient.
In fact `handle()` is just the fall-back (or
default) method that is used if no more specific handler method has been
defined. In fact each Signal can have its own handler method. You may
recall that when a Signal is defined with the
`DefSignal()` macro, this automatically
initializes its **handleProp** property with a property pointer like
`&handle_sig` for a Signal called
`sigSignal` (e.g.
`handleProp` is
`&handle_move` for the
`moveSignal`). This means that when a receiver
gets a `moveSignal` (say), it will call its
`handle_move()` method to handle it if one is
defined, and fall back on the `handle()` method
otherwise.

There's also a third possibility: the handler to be used can be
overridden by the call to the `connect()`
function. If `connect()` is called with a fourth
argument (which should then be a property pointer), the method specified
by that fourth argument will be used as the signal handler. A call to
`connect(sender, signal, receiver,
&special_handler`) will cause *signal* to be handled on *receiver*
by `receiver.special_handler(sender, signal)`,
provided that *receiver* defines the
`special_handler()` method. The receiver's
**dispatchSignal()** method takes care of assigning a handler to a
signal, and what it does may be summarized as follows:

1.  If the call to `connect()` has established a
    special handler for this signal on this *receiver*, assign that
    special handler to *prop*.
2.  Otherwise, if the signal has a property pointer assigned to its
    `handleProp` property (as any Signal defined
    with the `DefSignal()` macro will have),
    then assign that property to *prop*.
3.  Otherwise, assign the default handler
    `&handle` to *prop*.
4.  If *prop* now points to a method that's actually defined on the
    *receiver*, then call *prop* (with *sender* and *signal* as its
    arguments); otherwise call `handle(sender,
    signal)`.

Note that this means that the special_handler method passed as the
optional fourth argument to `connect()` can be
either an existing standard handler or a new custom one, but it must be
defined with two parameters corresponding to *sender* and *signal*. So,
for example, you can't call something like
`connect(redLever, pullSignal, trapdoor,
&makeOpen)`, since instead of opening the trapdoor it will simply
cause a run-time error due to argument mismatch. You would instead need
to call `makeOpen(true)` from within the
trapdoor's handle() or handle_pull() method.

  
<span id="example"></span>

## Example

Suppose that somewhere in our game there's a big red switch (in the hall
cupboard, say) that's meant to control a light in another location (the
cellar, say), except that before it will work some cable needs to be
reconnected. In the code for reconnecting the cable we might include the
statements:

```
     
     connect(redSwitch, onSignal, cellarLight);
     connect(redSwitch, offSignal, cellarLight);
     
```

</div>

Since onSignal and offSignal will be emitted by the switch in any case,
the only other step is to handle them on the cellar light. If we know
that these are the only signals the cellar light is ever going to
handle, we could simply do this:

```
    + cellarLight: Fixture 'light'
      ...
      handle(sender, signal)
      {
          if(signal == onSignal)
             makeLit(true);
          if(signal == offSignal)
             makeLit(nil);
      }
    ;
```

But suppose it's possible to cut the cable after it's been reconnected.
Presumably that would cause the light to go out again (if it was on).
Also we might want to describe the light going out differently if the
cable is cut from the way we describe it if the switch is turned off.
First we need to define a cutSignal:

```
     defSignal(cut, cut);
     
     modify Cut
       signal = cutSignal
     ;
     
```

Then, somewhere in the code that handles the cutting action on the
cable, we need to register both the sending of the cutSignal from the
cable to the light, and at the same time sever the sending of any signal
from the switch to the light:

```
     cable: Fixture 'cable'
        ...
        
        isCut = nil
        
        dobjFor(Cut)
        {
           verify() 
           { 
              if(isCut)
                illogicalNow('The cable has already been cut. ');
           }
           
           action()
           {
              connect(self, cutSignal, cellarLamp);
              unconnect(redSwitch, onSignal, cellarLamp);
              unconnect(redSwitch, offSignal, cellarLamp);
              
              "You cut through the cable with your trusty knife. "
              isCut = true;
           }
     
        }
    ;
     
```

Then we have to write a rather more complicated handler on the cellar
light:

```
    + cellarLight: Fixture 'light'
      ...
      handle(sender, signal)
      {
          if(signal == onSignal)
          {
             makeLit(true);
             senseSay('The light comes on. ', self);   
          }
          if(signal == offSignal)
          {         
             senseSay('The light suddenly goes out. ', self); 
             makeLit(nil);         
          }
          if(signal == cutSignal && isLit)      {
             
             senseSay('The light flickers and goes out. ');
             makeLit(nil);
          }      
      }
    ;
```

The **senseSay()** function is used here to ensure that the message
about the light going on or off is only displayed if the player
character can see the cellar light. But the main point here is that the
handle() method is beginning to become a little cumbersome. At this
point it might be better to split the handling up between the various
specialized handlers rather than using the catch-all default
`handle()` method:

```
    + cellarLight: Fixture 'light'
      ...
      handle_on(sender, signal)
      {
         makeLit(true);
         senseSay('The light comes on. ', self);   
      }
        
      handle_off(sender, signal)
      {         
         senseSay('The light suddenly goes out. ', self); 
         makeLit(nil);         
      }
       
      handle_cut(sender, signal)
      {   
         if(isLit)      
         {         
             senseSay('The light flickers and goes out. ');
             makeLit(nil);
         }      
      }
    ;
```

Finally, suppose that it's possible to reconnect the cable after it's
been cut, but that this reconnects things the wrong way round so that
turning on the switch turns off the light and vice versa. If we've split
the handlers into separate methods as above, we can then just write the
relevant part of the re-connection code like so:

```
       connect(redSwitch, onSignal, cellarLight, &handle_off);
       connect(redSwitch, offSignal, cellarLight, &handle_on);
     
     
```

This will then make turning the switch on turn off the light, and
turning the switch off turn on the light, sincce we've swapped over the
normal handlers.

  

This covers most of what you need to know to use this extension. For
additional information see the source code and comments in the
[signals.t](../signals.t) file.

------------------------------------------------------------------------

<div class="navb">

*Adv3Lite Manual*  
<a href="../../docs/manual/toc.html" class="nav">Table of Contents</a> \|
<a href="../../docs/manual/extensions.html" class="nav">Extensions</a> \>
Sensory  
<span class="navnp"><a href="sensory.html" class="nav"><em>Prev:</em> Sensory</a>
    <a href="subtime.html" class="nav"><em>Next:</em> Subtime</a>    
</span>

</div>
