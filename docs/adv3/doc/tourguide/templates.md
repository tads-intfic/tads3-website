---
---
<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>Templates<br />
</strong></td>
<td style="text-align: right;"><a
href="thesamplegame.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="startupcodegamemain.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
Since we shall be using templates extensively to define objects
throughout this Guide, we had better start by explaining what they are
and how they work.  
  
If you have worked through *Getting Started in TADS 3* or some similar
introductory guide, you'll already have encountered templates. Templates
are built into the TADS 3 language (in the sense that the language
provides the facility to define and use them) and into the adv3 library
(in the sense that the library defines a number of standard templates).
This Tour Guide accordingly assumes that the use of templates is the
standard TADS 3 coding style, and is to be encouraged. But first, what
exactly is a template?  
  
Put simply, a template is a means of defining an object in a more
succinct form in order to save typing effort and produce less verbose
code. On the principle that a couple of examples are a good deal easier
to follow than several paragraphs of abstract, theoretical discussion,
we'll explain this by showing how templates work with the most common
kind of objects you're likely to define in a TADS 3 game: Rooms and
Things.  
  
We'll start with a room. If we defined a Room without using a template,
we should have to assign every property we wanted assigned explicitly.
Such a definition might look like:  
  
entranceCave : Room   
   roomName = 'Entrance Cave'   
   destName = 'the entrance cave'  
   desc =   
    "Compared with the narrow tunnel leading out to the north, this   
   rough-walled cave seems positively spacious. A red sign fixed to   
   one wall suggests that the narrow tunnel is the only way back out to  
   the valley, while a blue sign next to it welcomes you to the cave.  
   Directly under the signs a narrow ledge has been carved into the  
   wall. There appear to be no other caves at this level, but a sturdy   
   steel ladder leads down through a large round hole in the floor. "  
  
   north = entranceTunnel     
   out asExit(north)  
;  
  
Taking advantage of the Room template, the same definition could be
coded as:  
  
entranceCave : Room 'Entrance Cave' 'the entrance cave'  
  "Compared with the narrow tunnel leading out to the north, this   
   rough-walled cave seems positively spacious. A red sign fixed to   
   one wall suggests that the narrow tunnel is the only way back out to  
   the valley, while a blue sign next to it welcomes you to the cave.  
   Directly under the signs a narrow ledge has been carved into the  
   wall. There appear to be no other caves at this level, but a sturdy   
   steel ladder leads down through a large round hole in the floor. "  
  
   north = entranceTunnel     
   out asExit(north)  
;  
  
These two definitions are entirely equivalent; both assign exactly the
same values to the same properties.  
  
So how does this work? The Room template is defined in the library as
follows:  
  
Room template 'roomName' 'destName'? 'name'? "desc"?;  
  
This definition means that when defining an object of class Room (or one
of its subclasses), if the class name is immediately followed by a
single-quoted string, that string will be assigned to the **roomName**
property; the next single-quoted string, if present, will be assigned to
the **destName** property, the next to the **name** property, and a
double-quoted string that comes at the end of this list will be assigned
to the **desc** property. The question mark after an item in a template
definition means that this element is optional and may be omitted.  
  
Accordingly, the following definitions using the Room template are all
legal:  
  
entranceCave : Room 'Entrance Cave'  
;  
  
*Which is equivalent to:*  
  
entranceCave : Room  
   roomName = 'Entrance Cave'  
;  
  
Or  
  
entranceCave : Room 'Entrance Cave'  
  "Compared with the narrow tunnel..."  
;  
  
*Which is equivalent to:*  
  
entranceCave : Room  
   roomName = 'Entrance Cave'  
   desc =  "Compared with the narrow tunnel..."  
;  
  
Or  
  
entranceCave : Room 'Entrance Cave' 'the entrance cave'  
;  
  
*Which is equivalent to:*  
  
entranceCave : Room  
   roomName = 'Entrance Cave'  
   destName = 'the entrance cave'  
;  
  
Or  
  
entranceCave : Room 'Entrance Cave' 'the entrance cave' 'entrance cave'  
;  
  
*Which is equivalent to:*  
  
entranceCave : Room  
   roomName = 'Entrance Cave'  
   destName = 'the entrance cave'  
   name = 'entrance cave'  
;  
  
  
  
  
Note, however, that properties defined in the template must appear in
the order shown, so that the following would *not* match the template:  
  
entranceRoom "Compared with the narrow tunnel..." 'Entrance Cave";  
  
entranceRoom 'Entrance Cave' "Compared with the narrow tunnel..." 'the entrance cave';  
  
In practice, virtually all rooms will need to define a roomName and a
description (and this is the point of the template, to allow the common
properties of all rooms to be defined with the minimum of effort). So
you will normally define rooms in one of two forms:  
  
myRoom : Room 'My Room Name'  
  "My room desc "  
  /\* other properties/methods \*/  
;  
  
*or*  
  
myRoom : Room 'My Room Name' 'my room destName'  
  "My room desc "  
  /\* other properties/methods \*/  
;  
  
Not only does this make defining rooms *briefer,* it also makes your
code more readable, since the key properties (roomName, destName if
defined, and desc) will always appear in the same relative location in
the definition of a room, rather than at some possibly random location
in a list of properties (for these key properties will seldom be the
*only* properties you'll need to define on a room). Once you get used to
the template, you can look at a room definition and see its roomName and
description at once.  
  
Note that a template defined for a class is also valid for all its
subclasses. So the [Room](room.html) template we have just described can
(and should) also be used for [OutdoorRoom](outdoorroom.html),
[DarkRoom](darkroom.html) and [FloorlessRoom](floorlessroom.html) (and,
indeed, for any specialized subclasses of Room you may define in your
own game).  
  
Now let's look at the definition of the Thing template (which also
applies to all the subclasses of Thing, i.e. virtually every game object
that represents a physical object in the game world, unless there's a
more specific template applying to the subclass).  
  
The Thing template is defined like this:  
  
Thing template 'vocabWords' 'name' @location? "desc"?;  
  
This means that typical Thing definitions will tend to look like this:  
  
brassCoin : Thing '(small) brass coin/groat\*coins' 'small brass coin' @longCave  
  "On the obverse is the head of King Freddie the Fat, and on the reverse  
   is stamped ONE GROAT. "  
;  
  
*Which is exactly equivalent to:  
*  
brassCoin : Thing   
  vocabWords = '(small) brass coin/groat\*coins'   
  name = 'small brass coin'   
  location = longCave  
  desc =  "On the obverse is the head of King Freddie the Fat, and on the reverse  
          is stamped ONE GROAT. "  
;  
  
Or this:  
  
++ fluidLink : Thing 'fluid link' 'fluid link'  
   "It's a long transparent tube. Both ends are capped with some kind of shiny   
    metal, and at one end is a tiny hole. "      
;  
  
*Which is exactly equivalent to:*  
  
++ fluidLink : Thing   
     vocabWords = 'fluid link'   
     name =  'fluid link'  
     desc =  "It's a long transparent tube. Both ends are capped with some kind of shiny   
        metal, and at one end is a tiny hole. "      
;  
  
The main difference is that the second example, the fluidLink, uses the
++ notation to specify its location relative to some previously defined
object, so that it does not need to set its location property by any
other means. Since @location? in the Thing template includes a
question-mark to show that this element is optional, it can be omitted
from the object definition and the template will still match. The
brassCoin, however, does not use the + syntax to determine its location,
so this needs to be done some other way; hence we specify its location
using @longCave.  
  
You may define the occasional Thing that is so insignificant that it
does not merit a description, in which case you can simply omit the
double-quoted string from the definition, making for extremely concise
code, e.g.:  
  
+ peanut: Food 'peanut/nut' 'peanut';  
  
or  
  
peanut : Food 'peanut/nut' 'peanut' @kitchenTable;  
  
This also illustrates how subclasses of Thing (of which Food is one) can
use the same template as Thing.  
  
There's two further types of template we ought to consider; the first is
one that can match *alternatives* at the same location within the
sequence of properties. Here's a simple example from the library:  
  
DefaultTopic template "topicResponse" \| \[eventList\];  
  
This template means that you can define *either*  
  
DefaultTopic "Bob looks bored with your question";  
  
*Meaning*  
  
Default Topic  
  topicResponse = "Bob looks bored with your question"  
;  
  
*Or*  
  
DefaultTopic   \[ 'Bob looks bored', 'Bob yawns', 'Bob is so bored he falls asleep'\];  
  
*Meaning  
  
*DefaultTopic     
   eventList = \[ 'Bob looks bored', 'Bob yawns', 'Bob is so bored he falls asleep'\]  
;  
  
(Which isn't actually very useful unless your DefaultTopic also inherits
from an EventList class, but that's another matter).  
  
A more complex example is provided by:  
  
TopicEntry template +matchScore?   
   @matchObj \| \[matchObj\] \| 'matchPattern'   
   "topicResponse" \| \[eventList\] ?;   
  
Which can be matched by something as simple as  
  
TopicEntry @bob  
  "\<q\>That's none of your business!\</q\> he declares. "  
;  
  
Or something as complex as:  
  
TopicEntry + 110 \[silverCoin, goldCoin, brassCoin\]  
  \[   
    ' \<q\>I\\ve never been interested in coins.\</q\> he growls. ',  
    '\<q\>Don\\t try to tempt me with money - I can\\t stand the stuff.' he complains. ',  
    '\<q\>Filthy lucre! Take it away!\</q\> he demands. ',  
    '\<q\>The root of all evil.\</q\> he opines '  
  \]  
;  
  
Although we shan't try to run through all the possible permutations
here.  
  
The remaining type of template we need to consider is that which uses
the *inherited* keyword in its definition. In fact, the library defines
very few of these; one (fairly important) example is:  
  
Passage template -\>masterObject inherited;  
  
In this context the *inherited* keyword refers to the templates of *all*
Passage's superclasses, so this template could potentially represent a
series of templates, in which *inherited* is replaced with the template
of each of Passage's superclass in turn (and also with nothing). Passage
inherits from Linkable, Fixture and TravelConnector, none of which
defines a template. Linkable inherits from object (so there's no
template there). Fixture inherits from NonPortable which inherits from
Thing which inherits from VocabObject; TravelConnector also inherits
from Thing. The possible templates Passage can inherit from are
therefore those for [Thing](thingtemplate.html) and for
[VocabObject](vocabobjecttemplate.html). This foregoing definition is
thus equivalent to the following:  
  
Passage template -\> masterObject;  
Passage template -\> masterObject 'vocabWords';  
Passage template -\> masterObject 'vocabWords' 'name' @location? "desc"?;  
  
Note that this is almost but not quite equivalent to:  
  
Passage template -\> masterObject 'vocabWords'? 'name'? @location? "desc"?;  
  
The reason it is *not* equivalent is that this template would allow the
location or desc properties to be specified in the template without the
name property, which the real Passage template will not.  
  
Note that since Passage inherits from Thing and VocabObject, it is
*also* perfectly legal to use the Thing and VocabObject templates with a
Passage, e.g.:  
  
Passage 'passage';  
Passage 'long passage' 'long passage' @diningRoom "The long passage leads into the hall. ";  
  
All this actually looks a good deal more complicated than it will ever
work out in practice, for in practice, if you want to use a Passage (or
one of its subclasses) you will *either* use the Thing template to
define it, or the form of the Passage template in which *inherited*
picks up the Passage template. Thus, although you can use other template
combinations with Passage, in practice most of the time (perhaps 99% of
the time), you will use Passage and its subclasses *as if* its template
were defined:  
  
Passage -\>masterObject? 'vocabWords\_' 'name' @location? "desc"?;  
  
This applies equally to the other classes for which the library defines
templates including the inherited keyword, namely
[Enterable](enterabletemplate.html) and
[Exitable](exitabletemplate.html).  
  
Finally, to see how templates work with multiple inheritance, consider
the following:  
  
class TestA : object  
  weight = 0  
  colour = nil  
  mydesc = nil  
;  
  
class TestB : object  
  bulk = 0  
  texture = nil  
;  
  
class TestC :  TestB, TestA;  
;  
  
  
TestA template +weight 'colour' 'mydesc'?;  
TestB template +bulk 'texture';  
  
testMe : TestC +20 'rough' ;  
  
testMeAgain : TestC +30 'red' 'wooden';  
  
*Results in*  
  
testMe : TestC  
    weight = 0  
    colour = nil  
    myDesc = nil  
    bulk = 20  
    texture = 'rough'  
;  
  
testMeAgain: TestC  
    weight = 30  
    colour = 'red'  
    myDesc = 'wooden'  
    bulk = 0  
    texture = nil  
;  
  
The testMe object has a definition that in principle could match either
the TestA template or the TestB template. It is the TestB template that
is actually matched because TestB comes earlier in the class list of
TestC. On the other hand testMeAgain has a definition that can only
match the TestA template, so it is the TestA template that is matched.  
  
Finally, we should consider how the *inherited* keyword works in the
context of multiple inheritance. If we now go on to define:  
  
TestC template inherited 'shape';  
  
The 'inherited' keyword can inherit *any* of the templates from any of
TestC's superclasses, or else nothing at all. The definition is thus
equivalent to defining the following three templates:  
  
TestC template 'shape';  
TestC template +bulk 'texture' 'shape';  
TestC template +weight 'colour' 'mydesc'? 'shape';  
  
Note also that objects of class C (such as testMe and testMeAgain) will
also continue to match templates defined on its superclasses (in this
case, the templates for ClassA and ClassB).  
  
Suppose we also define an object:  
  
testMeShape : TestC +10 'blue' 'large' 'square';  
  
Now, this can *only* match the last form of the template, so it will
mean weight=10, colour='blue', mydesc='large' and shape='square'. But
what of our previous two objects?  
  
As before, testMe has bulk=20, texture='rough', while testMeAgain has
bulk=30, shape='wooden', texture='red'. Since the TestC template is
defined later in the file than the other two, the other two still match
first.  
  
  
  
  
  
  
