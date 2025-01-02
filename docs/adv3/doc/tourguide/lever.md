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
<td style="text-align: left;"><strong>Lever : <a
href="thing-thebasics.html">Thing</a><br />
</strong></td>
<td style="text-align: right;"><a
href="dynamiclocations.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="dial.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A Lever is a Thing that has two states, pulled and pushed, represented
by its **isPulled** property being either true or nil respectively. The
Lever class adds specialized handling for the PUSH, PULL and MOVED
commands. A PULL command is considered illogical for a Lever whose
isPulled is true, and a PUSH command illogical if it is nil (once a
lever has been pulled it's in its pulled position and can't be pulled
again until it's been pushed back to its starting position). If a PULL
or PUSH command passes the verification stage, the action method calls
**makePulled**(true) or makePulled(nil) accordingly. By default this
simply sets the isPulled property to the value of the parameter passed
to the makePulled method, but it can be overridden to do far more
interesting things, as we shall shortly see. A MOVE command is
effectively translated into a PUSH or PULL command, depending on the
current state of the Lever (PUSH if isPulled is true, PULL otherwise).  
  
There may obviously be cases where you want something that is quite
obviously and explicitly a lever, and the Lever class clearly simplifies
the definition of such objects. In general, all you need do is override
makePulled(pulled) to define the particular effects of pulling or
pushing the lever and then call inherited(pulled) for the default
handling. Since a lever is so obviously something that should be pushed
or pulled, however, here we'll make at least some attempt to disguise
it. We'll make it an apparently decorative feature on a stone altar in
the temple (in case you're wondering "What temple?", we'll be defining
it shortly). When the lever (thinly disguised as a banana-shaped
projection from the north side of the altar) is pulled, a secret panel
behind the altar slides open; when it is pushed the panel slides shut
again. The complication is that the banana-shaped lever won't budge at
all unless the weight of objects placed on the altar comes to exactly
fifty-four pounds (information the player can discover by deciphering
all those tablets we keep scattering about the place). This is how we'll
do it:  
  
stoneAltar : Fixture, Surface 'stone altar' 'stone altar' @temple  
  "The altar comprises a massive stone slab, carefully carved and dressed into a  
   smooth surface, apart from a curious banana-shaped projection at one end. "  
  weight = 0  
;  
  
+ Lever, Component 'banana-shaped banana shaped projection' 'banana-shaped projection'  
   "Protruding from the north side of the altar, the banana-shaped projection is  
    its only decorative feature. "  
   makePulled(pulled)  
   {  
     if(stoneAltar.getWeight != 54)  
     {  
       reportFailure('It won\\t budge. ');         
       exit;  
     }  
     else if(pulled)       
       "With a loud grating sound, the wall behind the altar grinds open. ";       
     else  
       "When you push the lever, the wall behind the altar grinds shut. ";  
     inherited(pulled);    
     templeWestWall.makeOpen(pulled);  
   }   
   weight = 0    
;  
  
Perhaps the only real subtlety here is making the weight of both the
altar and the projection zero. The reason for doing this is that both
weights (by default each 1) are included in the calculation of
stoneAltar.getWeight, which we are using to check the weight of items
placed on the altar. We could have compensated for this by adding 2 to
the weight we were checking for, but doing it the way we've done it is
almost certainly less confusing and less error-prone.  
  
With a bit more tweaking in the makePulled method, the Lever class can
be used for something even less obviously less like a lever. In a nearby
location we'll put a gold statue standing on a gold plinth. If the
statue is pushed it topples over revealing a cavity in the plinth, which
cavity contains yet another tablet: appropriately, the golden one.
Here's how we can implement the statue as a Lever:  
  
goldenGrotto : DarkRoom 'Golden Grotto' 'the golden grotto'  
  "The walls of this grotto glitter with gold dust embedded among the rock, but  
   if there was any gold of any consequence here, it has long since been removed,   
   apart from "  
  southeast = westShore  
  out asExit(southeast)  
;  
  
+ statue : Lever, Fixture 'gold statue' 'gold statue'  
  "The gold statue depicts a solemn, regal figure of noble bearing wearing a  
   golden crown. The figure's right hand looks as if it is clutching something  
   that is no longer there. \<\<isPulled ? nil : 'The statue has been toppled off  
   its base and is lying on the ground.'\>\> "  
  inRoomDesc = "a golden statue \<\<isPulled ? 'standing proudly on a golden plinth'  
   : 'lying on the ground'\>\>. "  
  makePulled(pulled)  
  {  
    if(pulled)  
      {  
        "You aren\\t strong enough to pull the statue back upright. ";  
         exit;  
      }  
    else  
      {  
       "The statue topples over, revealing a cavity in the plinth beneath. ";  
       plinth.initializeVocabWith('cavity');  
      }  
    inherited(pulled);  
  }  
  isPulled = true  
;  
  
+ plinth : Container, Fixture 'plinth' 'plinth'  
  "The plinth is a \<\<isOpen ? 'hollow' : 'solid'\>\> block of gold inscribed with the  
  words \<q\>King Benedict the Banana-Bearer\</q\>. "  
  isOpen = (!statue.isPulled)  
    
;  
  
++ goldTablet : Tablet 'gold tablet\*tablets' 'gold tablet'  
  inscription = "T F Q Z P\nN W O B E\nA U O U A\nF L O U R\nS T O P S"  
  weight = 32  
  feelDesc = "It feels mighty heavy! "  
;  
  
Decoration 'cavity' 'cavity';  
  
In case you're wondering, the purpose of the seemingly pointless and
actually locationless Decoration object at the end is to ensure that
'cavity' is a word the game recognizes even before the statue is pushed
over, in case the player tries to refer to the cavity before the statue
is TOPPLED; in such a case 'You see no cavity here' is a more
appropriate response than 'The word "cavity" is not necessary in this
story' (since the word "cavity" will be added to the dictionary words
referring to the plinth once the statue is toppled).  
  
We'll give [yet another example of a lever](lever(2).html) when we're
ready for it. To tidy up this part of the game, we need to create the
temple and the connections between various locations. To start with
we'll create the routes to the grotto and the temple from the shore of
the lake:  
  
westShore : Room 'Sandy Beach' 'the sandy beach'  
   "For an underground lake this section of shore forms a surprisingly large beach. The  
   lake laps the shore to the east, while a pair of paths lead up from the beach to the  
   cave complex beyond, one to the northwest and the other to the southwest. "  
   **southwest = graveyard  
**   **northwest = goldenGrotto  
**;  
  
graveyard : Room 'Graveyard' 'the graveyard'  
  "There is something decidedly eerie about this underground graveyard with its  
   musty old tombstones. This is truly a place of death; nothing   
   lives here, for this place never sees the sun; a dusty path leads off to the  
    northeast and a strange, stone temple is situated just to the west. "  
   northeast = westShore  
   west = temple  
;  
  
+ Fixture 'musty old tomb/tombs/tombstones/tombstone' 'tombstones'  
  "One in particular catches your eye, perhaps because of its curious inscription:  
   \b\<FONT FACE='TADS-Typewriter'\>O 1 + + +\n8 R 2 + +\n+ 7 D 3 +\n  
      + + 6 E 4\n+ + + 5 R\</FONT\>\b"  
  isPlural = true  
;  
  
+ Enterable -\> temple 'strange stone temple/door/lintel' 'temple'  
  "It's a curious structure, seemingly carved out of the solid rock in an approximation  
   to a gothic design. An inscription on the door lintel suggests that the temple is  
   dedicated \<q\>to the unknown god\</q\>. "  
;  
  
There's nothing new in any of this. Of some interest, however, is the
description of the tombstones, since this provides the key to
deciphering the tablets (how this works should be rather more obvious
when you see the description displayed). Next we need to define the
interior of the temple:  
  

temple : DarkRoom 'Inside the Temple' 'the temple'  
  "This gloomy temple looks like something out a gothic horror movie. The long, bare  
   nave is populated only by a series of grim stone columns festooned with cobwebs.   
   A large stone altar stands at the west end, "  
  out = graveyard  
  east asExit(out)  
  roomParts = static inherited - defaultWestWall  
  west = templeWestWall  
;  
  
+ CustomFixture 'grim (stone) column/columns' 'columns'  
  "Four pairs of the stone column flank the central aisle, each column a   
   grotesque, twisted shape, mocking the overall classical arrangement. "  
  isPlural = true  
  cannotTakeMsg = 'Moving these columns might be a seriously bad idea,  
   since they appear to be holding up the roof; fortunately there\\s  
   not the remotest prospect of your being able to shift any of them  
   by so much as a nanocubit. '  
;  
  
+ Decoration 'cobwebs/webs/web/cobweb' 'cobwebs'  
  "Multiple cobwebs festoon the space around the tops of the columns and  
   the ceiling, but the spiders responsible have long since departed. "  
  isPlural = true  
;  
  
+ templeWestWall : SecretDoor '(w) west wall\*walls' 'west wall'  
  desc()  
  {  
    if(isOpen)  
      "Most of the wall behind the altar has moved aside, leaving an aperture into  
       a chamber beyond. ";  
    else  
      "The wall behind the altar is carved with strange patterns. ";  
  }  
  destination = templeChamber  
  inRoomDesc = "behind which is a \<\<isOpen ? 'large open aperture in the  
   wall' : 'stone wall carved with strange, abstract symbols'\>\>. "  
;  
  
++ Component 'strange abstract patterns/symbols/squares' 'symbols'  
  "Some of them could almost be bananas, but most are spirals and squares. Several  
   of the squares are subdivided into twenty-five smaller squares. "  
  isPlural = true  
;  
  
The main thing to note here is how we handle the west wall of the
temple. We remove the defaultWestWall from the temple's roomParts, but
on this occasion we don't add our customized west wall back in. The main
reason for this is because it makes use of our custom inRoomDesc
property to add a description of itself to the room description, and for
this to work it must be defined as in the temple's contents, not its
roomParts.  
  
Finally, we need to define the secret chamber that's revealed when the
west wall is opened:  
  
templeChamber : DarkRoom 'Small Square Chamber' 'the small square chamber'  
  "The most noticeable feature of this otherwise featureless chamber is the  
   way out to the east. "  
  out = temple  
  east asExit(out)  
;  
  
That completes what is necessary for you to be able to compile and test
the game once more. To try out the altar puzzle, you'll need to put the
gold, stone and brass tablets there plus either an item weighing 2 or
two items each weighing 1 (e.g. the torch and the brass key). You are,
of course, entirely welcome to use the scales in the galley to try to
find some other combination of objects coming to 54 pounds weight in
total!  
  
Of course, you may find it a bit tedious to go through the process of
having to collect the right objects to put on the altar if you need to
get into the small chamber beyond during the process of game development
and testing (as you shortly will), so perhaps the time has come to
define another magical debugging command. We'll call this one FORCE OPEN
or FOPEN for short; if you FOPEN anything that's openable, it'll open up
straight away, bypassing any locks or other inconvenient impediments:  
  
DefineTAction(ForceOpen)  
;  
  
VerbRule(ForceOpen)  
  ('force' singleDobj 'open') \| ('force' 'open' singleDobj)  
    \| ('fopen' singleDobj)  
  :ForceOpenAction  
  verbPhrase = 'force/forcing (what) open'  
;  
  
modify Thing  
  verifyDobjForceOpen { illogical('{The dobj/he} {is}n\\t openable. '); }   
;  
  
modify BasicOpenable  
  dobjFor(ForceOpen)  
  {  
    verify() { if(isOpen) illogicalNow('{The dobj/he} {is} already open. '); }  
    action()   
    {  
      isLocked = nil;     
      isOpen = true;  
      "With a loud bang, {the dobj/he} flies open. ";  
    }  
  }  
;  
  
Don't forget to put code like this between \#ifdef \_\_DEBUG and
\#endif, so it doesn't end up in the released version of your game.  
  
  
  
  
  
  
