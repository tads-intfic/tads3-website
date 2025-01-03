---
layout: docs
---


[<img src="topbar.jpg" data-border="0" />](index.html)





[\[Main\]](index.html)  
*[\[Previous\]](climbingthetree.html)
  [\[Next\]](rewardingtheeffort.html)*

## Making Life More Problematic

So far the game allows the player to walk from the cottage to the
clearing and then climb the tree, but this is not particularly
challenging. The time has come to add a puzzle: let's suppose that in
order to climb the tree, Heidi first needs to fetch a chair and stand on
it. To make this a puzzle we must first prevent Heidi climbing the tree
when she's standing on the ground. To do this we must change the
definition of `clearing.up`. As a first attempt, we'll use a close
relative (in fact the parent) of the `FakeConnector`, namely the
`NoTravelMessage`. Modify the clearing object so that its `up `property
is now defined as follows:

` `

|     |     |
|-----|-----|
|     |     |

up : NoTravelMessage {"The lowest bough is just too high for   
   you to reach. "}  

` `

|     |     |
|-----|-----|
|     |     |

Now recompile the game and try both going up from the clearing and
climbing the tree. Both attempts should be foiled in exactlty the same
way. If we had remapped **climb tree** to `TravelVia, topOfTree` instead
of `Up` this would not have worked; the player could have bypassed our
puzzle by typing **climb tree** instead of **up**.  
  
That was the easy part. The tricky part is creating a chair object that
will enable Heidi to climb the tree. The first thing we need is
somewhere to put it; the most likely place you'd find a chair is
probably inside the cottage. For the moment we'll define the inside of
the cottage as:  

` `

|     |     |
|-----|-----|
|     |     |

insideCottage : Room 'Inside Cottage'  
  "You are in the front parlour of the little cottage. The door out  
    is to the east. "    
   out = outsideCottage  
   east asExit(out)  
;  

` `

|     |     |
|-----|-----|
|     |     |

The only new element here is the `asExit `macro. The cottage lies to the
west of the starting postion, so to get from inside the cottage back
outside the player might type either **out** or **east**. The `asExit`()
macro make going **east** the same as going **out**, but without having
**east** listed as a separate exit (either in the status line or in
response to an exits command). This allows us to make two directions
lead to the same destination without misleading the player into
supposing that they are two separate exits, instead of two synonyms for
the same exit.  
  
Note too that since insideCottage is an indoor room, we have defined it
to be of class Room rather than class OutsideRoom. To make this room
accessible at all we should add the following to the definition of
outsideCottage:  

` `

`in = insideCottage `

`west asExit(in) `

` `

|     |     |
|-----|-----|
|     |     |

Now recompile the game and you should be able to get inside the cottage
by typing either **enter** or **in** or **west** (or **w**). But one
thing the player might equally well try, namely **enter cottage** won't
work.  
  
The obvious way to fix this on the basis of what we've done before is to
add the following to the definition of cottage:  

` `

`dobjFor(Enter) remapTo(In) `

` `

|     |     |
|-----|-----|
|     |     |

And this will certainly act just as expected. However, it's more work
than we need, since the TADS 3 library provides an Enterable class to
handle just this kind of situation. All we need do, in fact, is to
change the definition of cottage to:  

` `

|     |     |
|-----|-----|
|     |     |

+ Enterable -\>insideCottage 'pretty little  
   cottage/house/building' 'pretty little cottage'    
   "It's just the sort of pretty little cottage that townspeople dream of living in,   
     with roses round the door and a neat little window frame freshly painted in green. "        
;  

` `

|     |     |
|-----|-----|
|     |     |

This introduces a new template element: `->insideCottage`. In this
instance the `->` points to the `TravelConnector `that is traversed when
the Enterable is entered. Remember that a room is a kind of
`TravelConnector`, and that travelling via a room is the same as
travelling to a room, so for now the command enter cottage will take
Heidi to the inside of the cottage (we'll be changing that later when we
give the cottage a locked front door). An alternative to using the
`->connector` syntax would have been to define the connector property
explicitly with:  

` `

`connector = insideCottage `

` `

|     |     |
|-----|-----|
|     |     |

Whether you prefer this as being more readable is up to you.  
  
Now that we have somewhere to put the chair, we can start defining it.
What we need is something that we can carry around and stand on (but not
both at the same time!). So it must be something that can contain an
actor while appearing as an object inside a room. In TADS 3 this kind of
object is called a `NestedRoom`. The TADS 3 library includes a subclass
of `NestedRoom `called `Chair `that does just the job (a `Chair `is
something you can sit on or stand on but not lie on):  

` `

|     |     |
|-----|-----|
|     |     |

+ chair : Chair 'wooden chair' 'wooden chair'  
  "It's a plain wooden chair. "  
;  

` `

|     |     |
|-----|-----|
|     |     |

There's one way we can improve the behaviour of this chair before we
even think about using it to climb the tree. When Heidi is sent into the
cottage, the game displays the plain vanilla default message "You see a
wooden chair here." We can improve on this by adding the following
property definition to the chair object:  

` `

|     |     |
|-----|-----|
|     |     |

initSpecialDesc = "A plain wooden chair sits in the corner. "  

` `

|     |     |
|-----|-----|
|     |     |

The initSpecialDesc property defines how the object will be described in
a room description before the object has been moved (if we wanted to, we
could override the conditions under which initSpecialDesc was displayed,
but that's a complication we won't tangle with for now).  
  
Now try compiling and rerunning the game. You should find that the chair
now behaves just as one would expect: you can sit or stand on it (but
not lie on it), you can also take it, but you can't take it while you're
sitting or standing on it, and you can't sit or stand on it while you're
carrying it.  
  
But, as you will discover, the chair still doesn't help Heidi climb the
tree. The problem is that we defined the connector on clearing.up as a
NoTravelMessage, which blocks travel under all circumstances. What we
need is a connector that allows Heidi to pass only when the chair is at
the foot of the tree, i.e. in the clearing. One type of connector
appropriate to this task is a OneWayRoomConnector, since this possesses
methods to control the conditions under which travel is permitted. We
could define it thus:  

` `

`up : OneWayRoomConnector `

`  { `

`    destination = topOfTree `

`    canTravelerPass(traveler) { return chair.isIn(clearing); } `

|     |     |
|-----|-----|
|     |     |

           explainTravelBarrier(traveler)   
            { "The lowest bough is just too high for   
`   you to reach. "; } `

|     |     |
|-----|-----|
|     |     |

`  } `

` `

|     |     |
|-----|-----|
|     |     |

The canTravelerPass() method allows travel if and only if it returns
true, which in this case will happen if and only if the chair is in the
clearing. If travel is disallowed, the method explainTravelBarrier() is
called to explain why not. In this case we just display a suitable
message.  
  
Before we carry on with refining this, let's digress to another matter.
The connector we've just defined is defined on the up property of
clearing. This might lead us to suppose that we could have defined a
slightly more general version of it by defining:  

` `

`up : OneWayRoomConnector `

`  { `

`    destination = topOfTree `

`    canTravelerPass(traveler) { return chair.isIn(self); } `

|     |     |
|-----|-----|
|     |     |

           explainTravelBarrier(traveler)   
            { "The lowest bough is just too high for   
`   you to reach. "; } `

|     |     |
|-----|-----|
|     |     |

`  } `

` `

|     |     |
|-----|-----|
|     |     |

Here we have simply changed `chair.isIn(clearing)` to
`chair.isIn(self)`, on the assumption that it will effectively mean the
same thing. But it won't, since in the context in which we've defined
it, `self `refers not to the clearing, but to the nested
`OneWayRoomConnector `we've just defined on one of its properties. This
is a fatally easy easy mistake to make, and raises the question whether
there is a right way for a nested object like the anonymous
`OneWayRoomConnector `in this example to refer to its host object. There
is: what we actually need is `lexicalParent`. We could correctly write
the previous example as:  

` `

`up : OneWayRoomConnector `

`  { `

`    destination = topOfTree `

`    canTravelerPass(traveler) { return chair.isIn(lexicalParent); } `

|     |     |
|-----|-----|
|     |     |

           explainTravelBarrier(traveler)   
            { "The lowest bough is just too high for   
`   you to reach. "; } `

|     |     |
|-----|-----|
|     |     |

`  } `

` `

` `

|     |     |
|-----|-----|
|     |     |

This is now equivalent to writing chair.isIn(clearing), but using
lexicalParent makes it immediately obvious what the intention is (as
opposed to having to check that chair refers to the enclosing object).  
  
If you now recompile the game and try it again, you'll find that it now
works after a fashion, but that it's less than ideal. There are still
several things we should tidy up.  
  
One thing we might like to do is to display a suitable message when the
player character climbs off the chair and up the tree, rather than just
have Heidi suddenly transported from the chair to the top. There is a
`TravelMessage` class that allows a message to be displayed while
traveling, but we have already defined the connector to be a
`OneWayRoomConnector`. Since, however, the `TravelMessage` class
inherits all the methods we have already used, we can simply change
`OneWayRoomConnector` to `TravelMessage` and add the following
property:  
` `

|     |     |
|-----|-----|
|     |     |

travelDesc =  "By standing on the chair you just manage to reach the lowest   
  bough and haul yourself up the tree.\<.p\>"           

`    `

  
The `<.p>` just adds a paragraph break (blank line) after the message.
We could do the same with `\b`, except that using `<.p>` ensures we
don't get multiple blank lines should the next message start with
`<.p>`. The connector should now look like this:   



` `

`up : TravelMessage `

`  { `

`    destination = topOfTree `

`    canTravelerPass(traveler) { return chair.isIn(lexicalParent); } `

|     |     |
|-----|-----|
|     |     |

           explainTravelBarrier(traveler)   
           { "The lowest bough is just too high for you to reach. "; }  
           travelDesc =  "By standing on the chair you just manage to   
           reach the lowest bough and haul yourself up the tree.\<.p\>"  
         }  
  
Recompile the game and try it again. You will soon encounter another
small problem: the game now describes Heidi as using the chair to reach
the bough whether she's standing on the chair or still on the ground
when the **climb tree** or **up** command is issued. You might think
this is okay on the grounds that if the player has made Heidi carry the
chair to the clearing he's probably figured why, so we don't need to
make Heidi explicitly stand on the chair before climbing the tree. But
there's another problem: the chair is counted as being *in* the clearing
even if Heidi is still carrying it, so this code would allow Heidi to
use the chair to climb the tree while she's still holding the chair. It
would be better, then, to check that Heidi is actually on the chair
(which she can't be if she's carrying it) before allowing her to climb.
We can achieve this by changing the `canTravelerPass `method to  

` `

`canTravelerPass(traveler) { return traveler.isIn(chair); } `

` `

|     |     |
|-----|-----|
|     |     |

We don't then need to test as well that the chair is in the clearing,
since it already *must* be if Heidi is in the chair when this connector
is available to her.  
  
Now everything should work reasonably well, except that the game will
now allow Heidi to climb the tree from the chair even if she's only
sitting on the chair, and not standing on it. Again, we may not think
this matters very much in practice, but if we do, there are various ways
we could go about fixing it. Perhaps the simplest for now is to add the
condition that Heidi must be standing to the canTravelerPass() method,
which finally gives us:  

` `

|     |     |
|-----|-----|
|     |     |

clearing : OutdoorRoom 'Clearing'  
   "A tall sycamore tree stands in the middle of this clearing.  
    One path winds to the southwest, and another to the north."  
       southwest = forest  
       up : TravelMessage   
       {  -\>topOfTree  
          "By clinging on to the bough you manage to haul yourself  
          up the tree. "  
          canTravelerPass(traveler)   
             { return traveler.isIn(chair) && traveler.posture==standing; }  
          explainTravelBarrier(traveler)   
             { "The lowest bough is just out of reach. "; }   
       }        
  north&nbsp: FakeConnector {"You decide against going that way right
now. "}  
;  

` `

` `

|     |     |
|-----|-----|
|     |     |

If there were several objects that could be used for Heidi to stand on,
the canTravelerPass(traveler) method would only become a little more
complicated, e.g.:  

` `

`canTravelerPass(traveler) { `

`  return traveler.location is in (chair, crate, stepladder) &amp;&amp; `

`    &amp;&amp; traveler.posture == standing; `

`} `

` `

|     |     |
|-----|-----|
|     |     |

Since an just out-of-reach bough is mentioned when the player tries to
get Heidi up the tree without the aid of the chair, we might want to add
that bough somewhere. The slight complication is that the bough will be
out of reach if Heidi is standing on the ground, but not if she's
standing on the chair. The OutOfReach class handles this type of
situation; you could place the following code immediately after the
definition of the tree object:  

` `

|     |     |
|-----|-----|
|     |     |

++ bough : OutOfReach, Fixture 'lowest bough' 'lowest bough'  
    "The lowest bough of the tree is just a bit too high up for you  
     to reach from the ground. "  
       
   canObjReachContents(obj)  
   {  
     if(obj.posture == standing && obj.location == chair)  
        return true;       
     return inherited(obj);  
   }  
   cannotReachFromOutsideMsg(dest)   
   {  
    return 'The bough is just too far from the ground for you to reach. ';  
   }     
;  

` `

|     |     |
|-----|-----|
|     |     |

Admittedly this doesn't allow Heidi to interact very interestingly with
the bough even if she is standing on the chair; she can touch the bough
which she can't do from the ground, but that's about it. It might be
more interesting if on the bough was concealed an object that Heidi
needed to find, but this is a step further than we need to go for this
game (but you're welcome to experiment with it if you wish!).  
  
One final point: using one object (like the chair here) to gain access
to a connector (like the way up the chair) is a fairly common situation
in Interactive Fiction. Often, however, it turns out to be a bit more
complicated to implement than the example we have worked throught here.
You don't need to worry about that just yet - there's plenty more to do
in this guide first - but if when you try to implement something similar
in your own game you find TADS 3 doing its best to frustrate you at
every turn, you'll also find that help is at hand in the article on
'<a href="../techman/t3staging.html" target="_top">Using NestedRooms as
Staging Locations</a>' in the *Technical Manual*.  
  

------------------------------------------------------------------------

*Getting Started in TADS 3*  
[\[Main\]](index.html)  
*[\[Previous\]](climbingthetree.html)
  [\[Next\]](rewardingtheeffort.html)*
