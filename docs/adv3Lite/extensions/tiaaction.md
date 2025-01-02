---
layout: docs
---


<img src="../../docs/manual/topbar.jpg" data-border="0" />





<a href="../../docs/manual/toc.html" class="nav">Table of Contents</a> \|
<a href="../../docs/manual/extensions.html" class="nav">Extensions</a> \>
TIAAction  
<span class="navnp"><a href="sysrules.html" class="nav"><em>Prev:</em> Sysrules</a>
    <a href="viewport.html" class="nav"><em>Next:</em> Viewport</a>    
</span>





# TIAAction

## Overview

The purpose of the [tiaaction.t](../tiaaction.t) extension is to allow
game authors to define actions involving three objects, such as PUT COIN
IN SLOT WITH TWEEZERS. Note that you only need this extension if you
want to define an action involving three physical objects. Actions
involving two objects and a literal or topic, say, can be defined using
[other techniques](../../docs/manual/define.html#threeobjects).

  
<span id="classes"></span>

## New Classes, Objects and Properties

In addition to a number of properties intended purely for internal use,
this extension defines the following new classes, objects and
properties:

- *Classes*: **TIAAction**.

<span id="usage"></span>

## Usage

Include the tiaaction.t file after the library files but before your
game source files. This will allow you to define actions involving three
objects. The macros needed to support this are already defined in
advLite.html for your convenience.

The third object involved in a three-object command is the **Accessory
Object**, normally abbreviated to **aobj** (although in many contexts
the abbreviation **acc** may also be used, since this is what is used by
the Mercury parser on which adv3Lite is based). Thus, for example, do
refer to the accessory object of the current command you'd use
**gAobj**. To define action handling on an object in its role as
accessory object you'd use **aobjFor(WhateverAction)**. In a message
parameter substitution you'd use `aobj` to refer
to the accessory object (e.g. `{the aobj}` or
`{the subj aobj}`). In a VerbRule you'd use
**singleAobj** or **multiAobj** (in practice nearly always the former)
as the marker for the accessory object in the player's command, and when
defining a TIAAction you'd use the **DefineTIAAction()** macro. You use
all these in much the same way as you'd use the dobj and iobj
equivalents when defining a new TIAction.

This is best explained by means of an example. Suppose we wanted to
implement an action that could handle commands of the form PUT COIN IN
SLOT WITH TWEEZERS. First we'd define the action and its associated
VerbRule:

```
    DefineTIAAction(PutInWith)
    ;

    VerbRule(PutInWith)
        'put' multiDobj 'in' singleIobj 'with' singleAobj
        : VerbProduction
        action = PutInWith
        verbPhrase = 'put/putting (what) (in what) (with what)'
        missingQ = 'what do want to put; what do you want to put it in;
            what do you want to put it in with'
    ;
     
```

Next, we'd define the default handling for this new action on the Thing
class, as normal. In this simple example we'll assume that PutInWith
acts much like PutIn, except that by default we can't use a Thing to put
other things in with:

```
     modify Thing
        dobjFor(PutInWith) asDobjFor(PutIn)
        iobjFor(PutInWith) asIobjFor(PutIn)
        aobjFor(PutInWith)
        {
            preCond = [objHeld]
            
            verify() 
            { 
                illogical('{I} {can\'t} use {the aobj} to put anything anywhere. ');
            }
        }
    ;
     
```

Finally, we'd probably go on to define the slot, the coin and tweezers
in such a way that the player has to use the tweezers to put the coin in
the slot:

```
     
    + coinSlot: Container, Fixture 'coin slot'
        bulkCapacity = 1
            
        notifyInsert(obj)
        {
            if(obj != coin)
            {
                "Only a coin will fit in that slot. ";
                exit;
            }
            if(gAobj == nil)
            {
                "It's too fiddly to put the coin in the slot with your fingers. ";
                exit;
            }
            
            inherited(obj);
        }
    ;

    + coin: Thing 'coin; worn'
        "It's very worn. "
        initSpecialDesc = "A coin lies on the ground. "   
    ; 
      
    + tweezers: Thing 'tweezers;;;them'
        aobjFor(PutInWith)
        {
            verify() 
            {
                if(gDobj == self)
                    illogicalSelf('{The subj dobj} {can\'t} be used to manipulate
                        themselves. ');
            }
            
            check()
            {
                if(gDobj.bulk > 1)
                    "{The subj dobj} {is} too large to be manipulated with {the
                    aobj}. ";
            }
        }
    ;  
      
     
```

This covers most of what you need to know to use this extension. For
additional information see the source code and comments in the
[tiaaction.t](../tiaaction.t) file.



------------------------------------------------------------------------



*Adv3Lite Manual*  
<a href="../../docs/manual/toc.html" class="nav">Table of Contents</a> \|
<a href="../../docs/manual/extensions.html" class="nav">Extensions</a> \>
TIAAction  
<span class="navnp"><a href="sysrules.html" class="nav"><em>Prev:</em> Sysrules</a>
    <a href="viewport.html" class="nav"><em>Next:</em> Viewport</a>    
</span>


