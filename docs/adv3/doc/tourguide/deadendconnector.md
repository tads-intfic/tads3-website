---
layout: docs
---
<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>DeadEndConnector: <a
href="travelmessage.html">TravelMessage</a><br />
</strong></td>
<td style="text-align: right;"><a
href="fakeconnector.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="roomconnector.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
In the previous section we added a pair of FakeConnectors to prevent the
player character from going wandering north into the valley or east into
the car park, although there's nothing physically preventing him from
doing so. When using the FakeConnectors for this purpose we basically
blocked the PC from travelling north or east by providing him
motivational reasons for not doing so. The alternative would be allow
him to do so, but then have him return to his starting point (either
because the way turns out to be blocked, or because the PC finds nothing
of interest). So instead of the FakeConnectors used in the previous
section, we could use a pair of DeadEndConnectors thus:  
  
outsideCave : OutdoorRoom 'Parser Valley' 'Parser Valley'  
  "To the north stretches the broad green Parser Valley under a clear blue sky,   
   past a small car park lying just off to the east. The main feature of  
   interest round here is the notorious Eerhtsdat Caves, the entrance to which  
   lies just to the south, marked by a large blue sign that proclaims, predictably  
   enough:\b\<FONT FACE='TADS-Typewriter' BGCOLOR=BLUE COLOR=WHITE\>  
   ENTRANCE TO THE\nEERHTSDAT CAVES\</FONT\>\n"  
   **north : DeadEndConnector { 'Parser Valley'   
     "You start to stride off into the valley, but soon decide it's not that interesting,   
     so you wander back towards the cave entrance. " }     
    east : DeadEndConnector {  'the car park'  
    "You go and wander round the car park for a few  minutes, but decide you don't want to   
     leave just yet, so you return to the cave entrance. " }  
  
**   atmosphereList : ShuffledEventList {  
   \[  
     'A flight of birds disappears off to the west. ',  
     {: "\nA \<\<one of\>\>small\<\<or\>\>large\<\<at random\>\>  
       \<\<one
of\>\>green\<\<or\>\>red\<\<or\>\>blue\<\<or\>\>black\<\<or\>\>white\<\<at
random\>\> car  
       pulls out of the car park and drives off to the north. " },  
     'An aeroplane flies far overhead. ',  
     nil  
   \]   
   }  
;  
  
At first sight it may look as if we could have used a FakeConnector for
this purpose and it would have done the job just as well, and this is
indeed almost the case. Nevertheless there are a couple of distinctions
between FakeConnector and DeadEndConnector that are worth observing,
even if they may seem a bit subtle at first sight.  
  
The first is that traveling via a DeadEndConnector triggers travel
notifications while attempting to travel via a FakeConnector does not.
So, for example, suppose there was an NPC present who might react to our
attempts to walk away from the cave entrance; suppose that if we try to
go in any direction except south into the cave she (assuming a female
NPC) objects and prevents our leaving (we'd implement this with a
beforeTravel() method on the NPC's current ActorState, but that's the
sort of thing we'll be coming to some way ahead, so we shan't worry
about the details just now). If we used a FakeConnector to represent
what happens when the PC tries to go north or east, then we'd never see
the NPC's protest. If we used a DeadEndConnector, however, the NPC's
protest would be triggered, and we'd see her protest in place of the
message describing our wandering round the valley or car park. The first
case, using a FakeConnector, is appropriate in situations where the PC
doesn't even attempt to travel and we're simply displaying a message
explaining why not; since the PC doesn't attempt to travel, there's no
reason why anyone or anything should react to his non-attempt. The
second case is appropriate when the PC does (at least notionally)
attempt the travel, and where the message we display describes that
(albeit simulated and circular) travel unless something or someone acts
to prevent it, such as our (for now) putative female companion who
insists on our entering the cave instead.  
  
So, in brief:  
  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14">·</td>
<td>Use a <em>FakeConnector</em> to explain why your PC refuses to
attempt travel in a direction in which travel would be physically
possible.  <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14">·</td>
<td>Use a <em>DeadEndConnector</em> to simulate the effect of your PC
travelling in a direction (which doesn't actually connect to another
location on your game map) and then returning to his starting point.
 <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

  
And now on to the second difference. If you look at the code we just
changed, you'll see that we added a second property in the
DeadEndConnectors, just before the double-quoted strings describing the
aborted walk into the valley and car park. These extra properties are
the single-quoted strings 'Parser Valley' and 'the car park', which name
the locations to which these connectors notionally lead (although in
reality they lead nowhere and we aren't going to implement a Parser
Valley or car park location in our game). The property to which we are
giving a value here is called **apparentDestName**; the point of it is
that the exit lister (shown in response to an explicit EXITS command or
an attempt to move in a direction for which no connector has been
defined) will show these as the destinations that can (notionally) be
reached by travelling via the DeadEndConnector. For example, an EXITS
command issued in our starting location might generate the response:  
  
   Obvious exits lead north to Parser Valley, south, and east to the car
park.  
  
If you compile the game and try it out as it stands, however, you'll
find these destination names appear only after the PC has attempted to
travel via these DeadEndConnectors. In some situations (namely where the
PC doesn't know where a connector leads till he tries traversing it)
this may be just what we want. In this case, however, it's perfectly
obvious from where the PC's standing that the valley is to the north and
the car park to the east, so ideally we'd like these destination names
to appear even before the PC attempts to travel. We can do this by
overriding the **actorKnowsDestination** method on the location to
indicate which connectors the PC already knows the destinations of even
without travelling:  
  
outsideCave : OutdoorRoom 'Parser Valley' 'Parser Valley'  
...  
**actorKnowsDestination(actor, conn)  
  {  
    return conn is in (east, north) ? true : inherited(actor, conn);  
  }**  
;  
  
There are two further points to note about this. In the above method
east and north are actually references to our two DeadEndConnectors.
Neither DeadEndConnector has a name of its own, so the only way of
referring to them is via the properties to which they are attached,
namely outsideCave.north and outsideCave.east. Since, in this case, we
are referencing these properties from a method of outsideCave, we don't
need to prepend the object name to them; in this context they can be
referred to simply as 'east' and 'north' meaning the TravelConnectors
attached to the east and north properties of the current object.  
  
The second point is that we're not restricted to using
actorKnowsDestination with DeadEndConnectors; the method can be used to
signal that the NPC already knows the destination of *any* kind of
TravelConnector (including another Room, if a direction property points
straight to another Room, as is usually most often the case).  
  
  
  
  
  
  
  
  
  
  
  
  
  
