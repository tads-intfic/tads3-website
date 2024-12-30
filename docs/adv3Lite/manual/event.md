::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Optional
Modules](optional.htm){.nav} \> Events\
[[*Prev:* Attachables](attachable.htm){.nav}     [*Next:*
EventList](eventlist.htm){.nav}     ]{.navnp}
:::

::: main
# Events

The Events module implements Daemons and Fuses. A [Fuse]{#fuse_idx} is
something that causes a piece of code to execute after a set number of
turns. A Daemon is something that causes a piece of code to be executed
every turn or every so many turns. Daemons and Fuses in adv3Lite are
very similar to those in adv3.

To create set up a fuse, just create a new Fuse object thus:

[new Fuse(]{.synLit}[obj]{.synPar}[, ]{.synLit}[prop]{.synPar}[,
]{.synLit}[turns]{.synPar}

[)]{.synLit}

This defines a Fuse that will call [obj.(prop)]{.code}, i.e. the prop
method of obj, after *turns* turns. If *turns* is 0 then the Fuse will
execute on the same turn.

For example, to define an alarm clock that rings in 10 turns\' time
after you push a button on it, we could define:

::: code
    alarmClock: Thing 'alarm clock'
        "It has a big red button attached. "
        
        ring() 
        {
           "The alarm clock starts ringing loudly. ";
           redButton.isDown = nil;
        }
    ;

    + redButton: Component 'big red button'
        dobjFor(Push)
        {
            verify()
            { 
                if(isDown)
                   illogicalNow('The button is already down. ');
            }
          
            action()
            {
                isDown = true;
                "You push the red button down. ";
                new Fuse(alarmClock, &ring, 10);
            }
        }
       
       isDown = nil
    ;
:::

Note, by the way, that the property we want to execute has to be listed
in the arguments to [new Fuse]{.code} as a property *pointer*, with an
ampersand (&) immediately preceding its name.

A [Daemon]{#daemon-idx} is defined in exactly the same way, except that
instead of only executing once, it will execute every *turns* turns. If
*turns* is given as zero, then the Daemon will execute on the current
turn (i.e. after zero turns) and then every turn thereafter (until it is
removed).

It\'s sometimes useful to store a reference to a Daemon so we can turn
it off again:

[daemonID]{.synPar}[ = new Daemon(]{.synLit}[obj]{.synPar}[,
]{.synLit}[prop]{.synPar}[, ]{.synLit}[turns]{.synPar}

[)]{.synLit}

It may be, though, that the player character won\'t be around to see (or
hear, or smell) the event that the Fuse or Daemon is reporting, in which
case we\'d ideally like to suppress any text that the Fuse or Daemon
would otherwise display. We can do that using a **SenseFuse** or
**SenseDaemon**. These can be created in exactly the same way as a
normal Fuse or Daemon but any text they would otherwise display won\'t
be displayed unless the player character can see the object passed as
the *obj* parameter when the SenseFuse or SenseDaemon is created.

Occasionally this may not be what we want, since we want to test whether
the object in question can be smelled or heard rather than seen. Or it
may be that we want to test the visibility or audibility of some object
other than the one we passed as the *obj* parameter, other, that is,
than the object whose *prop* method the Fuse or Daemon is executing. In
such a case we can define the Fuse or Daemon with one or two additional
parameters:

[new [SenseFuse]{#sensefuse-idx}(]{.synLit}[obj]{.synPar}[,
]{.synLit}[prop]{.synPar}[, ]{.synLit}[turns]{.synPar}[\[, senseProp,
senseObj\]]{.synMark}

[)]{.synLit}

[new [SenseDaemon]{#sensedaemon}(]{.synLit}[obj]{.synPar}[,
]{.synLit}[prop]{.synPar}[, ]{.synLit}[turns]{.synPar}[\[, senseProp,
senseObj\]]{.synMark}

[)]{.synLit}

Where *senseProp* must be one of &canSee, &canHear or &canSmell (or
conceivably &canReach) and *senseObj* is the object that must be sensed
appropriately. Note that you can just supply the *senseProp* parameter
if you want to test whether *obj* can be heard or smelled, but that if
you supply the *senseObj* parameter you have to supply the *senseProp*
parameter as well.

[]{#promptdaemon}

Finally, you can define a **PromptDaemon** which executes just before
the command prompt on every turn:

[new PromptDaemon(]{.synLit}[obj]{.synPar}[, ]{.synLit}[prop]{.synPar}

[)]{.synLit}

There is also a **OneTimePromptDaemon** which, as its name suggests, is
a PromptDaemon that executes only once (effectively a PromptFuse, though
the adv3Lite library keeps the same name for this class as the adv3
library).

You may wish to stop a Daemon, or prevent a Fuse from executing before
its due to fire. If you\'ve stored a reference to the Fuse or Daemon you
can disable it by calling its **removeEvent()** method, e.g.:

::: code
      daemonID.removeEvent();
:::

If you haven\'t stored a reference to the Fuse or Daemon you want to
remove, you can remove it by calling:

[eventManager.removeMatchingEvents(]{.synLit}[obj]{.synPar}[,
]{.synLit}[prop]{.synPar}[)]{.synLit}

Where *obj* and *prop* are the object and property for which the Fuse or
Daemon was originally created.

Finally, you can control the order in which Fuses and Daemons are
processed by overriding their **eventOrder** property. The higher the
[eventOrder]{.code}, the later the event; the default value of
[eventOrder]{.code} is 100. This doesn\'t effect [PromptDaemons]{.code}
which are always displayed just before the command prompt. Note that
while other Fuses and Daemons may not be executed if the turn cycle is
interrupted (by an [abort]{.code} statement, for example), PromptDaemons
are always executed.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [Optional
Modules](optional.htm){.nav} \> Events\
[[*Prev:* Attachables](attachable.htm){.nav}    
[*Next:*EventList](eventlist.htm){.nav}     ]{.navnp}
:::
