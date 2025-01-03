---
layout: docs
---


<img src="topbar.jpg" data-border="0" />
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="depth.html" class="nav">TADS 3 In Depth</a> \> Where Messages
Come From  
<span class="navnp"><a href="depth.html" class="nav"><em>Prev:</em> TADS 3 In Depth</a>
    <a href="t3res.html" class="nav"><em>Next:</em> Action Results</a>
    </span>
# Where Messages Come From

## Anatomy of a Transcript

When you start writing your own game and testing it, you'll find that
the library takes care of a good deal of the work for you. Mainly,
that's a benefit, but sometimes it can become a problem, particularly
when the library doesn't quite do what you want but you can't see how to
change it. That's where this article may be able to help. Immediately
below we give [a sample transcript](#sampleTrans) from a simple TADS 3
game. Next to the various parts of the transript you'll find numbered
links, like this [\[1\]](#showintro). Clicking on the link will take you
to an explanation of where the message is coming from, often with some
hints on how to change it, or a reference to some other documentation
that explores the relevant library feature in more detail.

This article also contains the full [source code](#sourcecode) for the
game from which the sample transcript was taken. Where appropriate the
explanations for a given feature are linked to the appropriate object in
the source code. This lets you click on a numbered link in the
transcript to read an explanation, and then click on a link in the
explanation to see the relevant part of the TADS 3 source.

Parts of this sample game are deliberately unpolished; showing examples
of things *not* working properly can sometimes be more instructive than
showing everything working properly, and if you're using this sample
transcript to locate things that aren't quite right in your own game, it
may help if they match things that aren't quite right in this sample
game.

Reading this article through sequentially from beginning to end may not
be the best way to use it. You may find it more helpful to read through
the sample transcript below, and then click on the numbered link when
you see something that interests you.

  

------------------------------------------------------------------------

## <span id="sampleTrans">A Sample Transcript</span>

    Welcome to the TADS 3 Starter Game!   [1]

    Box Room   [2]
    This large box room is strewn with junk. The only way out is via a door to the east.   [3]

    A small square table stands in the middle of the room.   [4]

    A large red box sits in the corner.   [4] 

    You see a tennis ball, an old coat, an odd sock, and a small green book here.   [5] 
    On the small square table is a small blue box.    [5]

    >about   [6]
    This is just a brief demo game to illustrate where various messages come from in TADS 3.   [7]
    Or you could think of it as a high adventure with deep characterization, a riveting plot, 
    and a myriad of amazing puzzles  except that if you do think of it this way you'll be 
    sadly disappointed! 

    >credits
    Put credits for the game here.   [8]

    >x table
    On the small square table is a small blue box.   [5]   

    >x red box
    It's large, red and box-shaped. Its closed.   [9] 

    >take box
    Which box do you mean, the small blue box, or the large red box?  [10]

    >red
    Taken.   [11] 

    >look in red box
    (first opening the large red box)   [12]
    The large red box contains an old teddy bear, a large black torch, and a red lego brick.   [5] 

    >take torch
    Taken.   [11] 

    >drop box
    Dropped.   [11]

    >look
    Box Room
    This large box room is strewn with junk. The only way out is via a door to the east. 

    A small square table stands in the middle of the room.   [4] 

    You see a tennis ball, an old coat, an odd sock, a small green book, and a large 
    red box (which contains an old teddy bear and a red lego brick) here. On the small 
    square table is a small blue box. 

    >x junk
    All sorts of stuff, the accumulated detritus of decades, mostly not worth bothering with. 

    >search junk
    The junk isnt important.   [12a]

    >take table
    The small square table is too heavy. [13]

    >look in blue box
    (first unlocking the small blue box, then opening it)   [12]
    The small blue box contains three blue crayons (a blue crayon, a yellow crayon,   [14] 
    and a red crayon). 

    >x book
    It's a copy of Getting Started in TADS 6. 

    >read book
    Reading the book brings back happy memories of writing IF in your early twenties.   [15]
    With TADS 6 all you had to do was fill in a form specifying the genre of the game, 
    the names of a few key NPCs, and the median age of the target audience, select a 
    plot-type from a drop-down list, and then hit either the generate two-hour version 
    for IF-Comp button or generate long version button, and a bug-free, typo-free 
    TADS 6 game would be instantly created for you. Shame so many diehards on 
    rec.arts.int-fiction thought this took all the fun out of creating IF.

    >wear sock
    (first taking the odd sock)   [12]
    Okay, youre now wearing the odd sock. 

    >wear sock
    Youre already wearing it.   [16] 

    >i
    You are carrying a large black torch, and youre wearing an odd sock.   [17]

    >e
    (first opening the door)   [12]

    Landing
    Emerging from the box room you find yourself standing at the top of a flight of   [18] 
    stairs leading down to the south. 

    >look
    Landing
    A flight of stairs leads down to the south, while a door leads into the box room 
    just to the west. 

    >d
    You walk briskly down the stairs.   [19] 

    Hall (East End)
    This large hall continues to the west. A flight of stairs leads up to the north. 

    You see a rubber duck here. 

    The Harold is standing in the hall (west end).   [20]

    Mavis is in the hall (west end), sitting on the wooden chair.   [20] 

    >x harold
    He's about your height and build, and really looks quite a lot like you. Since he's   [21]
    your twin brother this is not altogether surprising. 

    >x mavis
    Shes too far away to make out any detail.   [21] 

    >x buck
    The word buck is not necessary in this story.   [22] 

    (If this was an accidental misspelling, you can correct it by typing OOPS followed by the
    corrected word now. Any time the story points out an unknown word, you can correct a
    misspelling using OOPS as your next command.) 

    >oops duck  
    It's yellow. 

    >w
    Hall (West End)
    This large hall continues to the east. A flight of stairs leads down to the south. 

    At the far end of the hall, you see a rubber duck.   [23] 

    The Harold is standing here.  [24]

    Mavis is sitting on the wooden chair.  [24] 

    >exits
    Obvious exits lead south; and east, back to the hall (east end).   [25]

    (You can control the exit listings with the EXITS command. EXITS STATUS shows the exit 
    list in the status line, EXITS LOOK shows a full exit list in each room description, 
    EXITS ON shows both, and EXITS OFF turns off both kinds of exit lists.) 

    >x mavis
    She's a funny old woman, when all's said and done. She is sitting on the wooden chair.   [26] 
    She's rocking back and forth in her chair moaning Woe! 

    >ask mavis about mavis
    The old woman simply rocks back and forth in her chair moaning, Woe, woe, woe is me!   [27]

    >talk to harold
    Hello, Harold! you say.   [28]

    Hi there! he replies. 

    (You could ask him about Mavis.)   [29]

    >a mavis
    What's up with Mavis? you ask.   [30]

    She's inconsolable  she can't find her favourite photograph of Buster Keaton, he tells you. 

    >topics
    You could ask him about the photo.    [31]

    >a photo
    Where did Mavis leave the photo? you ask.   [32]

    I think it may be in the cellar; but it's dark down there so I couldn't find it, he tells you. 

    >g
    You think Mavis's photo of Buster Keaton may be in the cellar? you ask.   [32]

    That's right, he nods, Be a good fellow and get it for her, her moaning is getting
     on my nerves. 

    >g
    You think Mavis's photo of Buster Keaton may be in the cellar? you ask.   [32]

    That's right, he nods, Be a good fellow and get it for her, her moaning is getting 
    on my nerves. 

    >ask harold about american foreign policy
    I think you'd better help poor Mavis before we discuss that, he suggests.  [33] 

    >bye
    Nothing obvious happens.   [34]

    >d
    In the dark   [35]
    Its pitch black. 

    >turn on torch
    Okay, the large black torch is now on.   [36]   

    Cellar   [37]
    The cellar is almost bare. A flight of stairs leads up to the north. 

    You see a photo of Buster Keaton here. 

    >x photo
    The picture shows Buster Keaton posing in a Confederate uniform in The General. 

    >take it
    Taken. 
    (Your score has just increased by ten points.)   [38]
    (If youd prefer not to be notified about score changes in the future, type NOTIFY OFF.) 

    >i
    You are carrying a large black torch (providing light) and a photo of Buster Keaton,   [39]
    and youre wearing an odd sock. 

    >e
    You cant go that way. The only obvious exit leads north, back to the hall (west end).   [40] 

    >turn off torch
    Okay, the large black torch is now off. 

    It is now pitch black.   [41] 

    >e
    Its too dark; you cant see where youre going.   [42]

    >up
    Hall (West End)
    This large hall continues to the east. A flight of stairs leads down to the south. 

    At the far end of the hall, you see a rubber duck. 

    The Harold is standing here. 

    Mavis is sitting on the wooden chair. 

    You turn to Mavis and hand her the photograph of Buster Keaton. She snatches it       [43] 
    eagerly from your grasp, instantly stops her moaning, and showers the actor's picture 
    with delighted kisses.

    (Your score has just increased by ten points.)

    *** You have made an old lady very happy ***   [44]

    In 42 moves, you have scored 20 of a possible 20 points.   [45] 

    Would you like to RESTORE a saved position, RESTART the story, UNDO the last move,   [44] 
    see your FULL SCORE, or QUIT?

    >full score
    In 42 moves, you have scored 20 of a possible 20 points. Your score consists of:   [46]
        10 points for retrieving the photograph
        10 points for making Mavis happy


    Would you like to RESTORE a saved position, RESTART the story, UNDO the last move, 
    see your FULL SCORE, or QUIT?

    >q
    Thanks for playing!   [47]

  

------------------------------------------------------------------------

## Explanations

### <span id="showintro">\[1\] showIntro()</span>

"Welcome to the TADS 3 Starter Game!" This text is generated from the
showIntro() method of [gameMain](#gameMain). This is something you'll
normally want to customize.

[\[back\]](#r1)  

### <span id="roomname">\[2\] roomName</span>

The name of the room printed at the head of its description is taken
from the room's roomName property. Normally this is assigned through the
Room template, as in [boxRoom](boxRoom), the starting location here.

By default the room name is shown in bold. If you want to change this
you can do so by modifying roomnameStyleTag; e.g. to make the room name
appear in italics in a fixed-spaced font:

    modify roomnameStyleTag
        openText = '\n<i><FONT FACE=TADS-TYPEWRITER>'
        closeText = '</FONT></i>\n'
    ;

We could similarly modify statusroomStyleTag to change the way the room
name is displayed in the status line (although here we would probably
override the htmlOpenText and htmlCloseText properties instead.)

[\[back\]](#r2)  

### <span id="roomdesc">\[3\] Room Description</span>

The normal description of a room is taken from its desc property.
Normally this is assigned through the template, as shown in the
[boxRoom](#boxRoom) example.

Normally a room's description is diplayed in the standard font for the
game. This can be changed by modifying roomdescStyleTag. For example to
make room decriptions display in the same colours as the status line you
could do this:

    modify roomdescStyleTag
        openText = "<font bgcolor=statusbg color=statustext>"
        closeText = "</font>"
    ;

The fact that you *can* do this doesn't make it a particularly good
idea, however, not least because the room description will then be
displayed differently from all the items listed within the room (but
perhaps this is what someone, somewhere will want for some mysterious
purpose).

[\[back\]](#r2)  

### <span id="specialdesc">\[4\] specialDesc & initSpecialDesc</span>

Items listed in separate paragraphs, like the [table](#table) and the
[large red box](#largebox) here, probably have either a specialDesc or
an initSpecialDesc (the latter applies until the object is moved). In
the example the red box (which can be moved) has an initSpecialDesc and
the table (which can't) simply has a specialDesc. The difference between
the table and the red box becomes more apparent later in the transcript:
once the box is taken and dropped again its initSpecialDesc is no longer
used, and the box is listed among the other miscellaneous items in the
room. The table can't be moved at all, however.

[\[back\]](#r2)  

### <span id="lister">\[5\] Lists of Objects</span>

The lists of objects lying on the floor and on the table are
automatically generated as part of the room description by
lookAroundWithinContents(), which is in turn called by
lookAroundWithin(), in turn called by lookAround() or lookAroundPov(),
all defined on Thing but called on the room in question. These are
fairly complex methods that you probably won't want to mess with too
much. If you want to change the way lists are displayed, see the
Technical Article on [Lists and Listers](t3Lister.html).

[\[back\]](#r2)  

### <span id="cmdprompt">\[6\] Command Prompt</span>

Many, perhaps most, games don't bother to customize the command prompt,
but if you're looking to do so it may help to know that it's generated
by libMessages.mainCommandPrompt(which). So if you did want to change
it, you could do something like this (though preferably in better
taste):

    modify libMessages
        mainCommandPrompt(which)
        {
            "\b<b><FONT COLOR=RED>What next?</FONT></b> ";
        }
    ;

By default what the player types is then displayed in bold black type
(with the standard black on white display — with other colour schemes
this may differ). This may be customised in two different places. One
way would be to modify InputDef. For example, to make the player's input
appear simply in italics we could use:

    modify InputDef
        beginInputFont() { "<i>"; }    
        endInputFont() { "</i>"; }
    ;

Alternatively, we could modify inputlineStyleTag; e.g. to make what the
player types appear in bold green print we could do this:

    modify inputlineStyleTag
        htmlOpenText = '<b><font color=green>'
        htmlCloseText = '</font</b>' 
    ;

Some caution is needed doing this kind of thing, however, since what
might look well enough on your interpreter with the set of colours
you're using might look quite dreadful, or even barely visible, on a
different interpreter using a different colour scheme.

Note also that the default behaviour of InputDef.beginInputFont() and
InputDef.endInputFont() is simply to invoke the opening and closing text
of the inputLineStyleTag — so there's no point trying to modify the
input font in both places (any changes to InputDef will take
precedence).

[\[back\]](#r6)  

### <span id="about">\[7\] About Text</span>

The game's ABOUT text, which has been customized here, is defined in the
showAbout() method of the [versionInfo](#versionInfo) object. In a more
complex game this might launch a menu offering different kinds of
information about the game; here just a simple message is displayed.
This is something you will always want to customize in your own games.

[\[back\]](#r6)  

### <span id="credits">\[8\] Credits</span>

Although it probably should have been, the credits information for this
game has not been customised. The place to do this is in the
showCredit() method of the the [versionInfo](#versionInfo) object.

[\[back\]](#r8)  

### <span id="#openableLister">\[9\] OpenableContentsLister</span>

The text "It's large, red and box-shaped" simply comes from the desc
property of the [largeBox](#largeBox) object. Less obvious, but often
more vexing, is the "It's closed" message that comes after it.
Ultimately, this comes from
[openableContentsLister](t3lister.html#openable), and if you want to
change this message drastically, or banish it altogether, this might be
the best place to attack it. For less drastic changes you can override
the openStatus() method on the object in question (in this instance the
large red box) or simply the openDesc property. The openDesc() method
must return a complete sentence, without any closing spacing or
punctuation, such as "it's closed" or "it's open"; openDesc just returns
an appropriate adjective or adjectival phrase such as 'open' or
'closed'.

For further ideas on how to deal with 'open' and 'closed' messages, see
the appropriate section of the article on [Banishing Awkward
Messages](t3banish.html#open).

[\[back\]](#r9)  

### <span id="#disambig">\[10\] Disambiguation Prompt</span>

This disambiguation prompt is being displayed because there's more than
one object in scope that matches the noun 'box', in this case the [large
red box](#largeBox) and the [small blue box](#smallBox). The two boxes
have quite distinct names, so that it's no trouble for the player to
select one or the other (as in the next command). The parser uses the
disambigName property of the objects concerned to list the objects the
player is to choose from in a disambiguation prompt. By default, the
disambigName is the same as the name. In special cases you might want to
override disambigName to give distinct names for disambiguation purposes
for objects you otherwise want to be named alike.

It's unlikely that you'll often want to override this disambiguation
method, but if you do you'll find it's defined in
playerMessages.askDisambig(), in msg_neu.t.

[\[back\]](#r10)  

### <span id="#defaultResponse">\[11\] Default Action Report</span>

Laconic messages like 'Done' or 'Taken' or 'Dropped' are generally
produced by defaultReport() macros in the action methods for the
appropriate actions defined on Thing. For further details of this see
the [Action](t3res.html#action) section of the article on
<span href't3res.html'="">Action Results.</span>

To change this on an individual object, simply override the appropriate
action method on the object in question, calling its inherited handling
and then adding your own custom message: e.g.

    vase: Thing 'delicate antique vase' 'antique vase'
       "It looks incredibly delicate. "
       dobjFor(Drop)
       {
           action()
           {
               inherited;
               "You put the vase down very carefully. ";
           }
       }
    ;

Your custom message will automatically displace anything produce by a
defaultReport() macro, so you don't have to worry about both messages
appearing. What may be trickier is ensuring that your custom message
isn't displayed in the event of an [implicit action](#implicit); you may
need to do something like this to prevent that:

    vase: Thing 'delicate antique vase' 'antique vase'
       "It looks incredibly delicate. "
       dobjFor(Take)
       {
           action()
           {
               inherited;
               if(!gAction.isImplicit)
                  "You pick the vase up very carefully. ";
           }
       }
    ;

If you want to make a global change, e.g. from the laconic "Dropped" to
the slightly less laconic "You put it down", you can either use the
above technique to modify Thing appropriately, or else modify the
message used by the library. If you search for the laconic "Dropped"
message in msg_neu.t, for example, you'll find it's defined on
playerActionMessages as:

         okayDropMsg = 'Dropped. '

So you could change it with:

    modify playerActionMessages
        okayDropMsg = '{You/he} put{s} {it dobj/him} down. '
    ;

You may find this a more convenient way to change several such message
globally, not least because the suppression of these default messages in
the case of implicit actions is then already taken care of for you. You
can also do this on individual objects, if you wish; for example,
instead of the vase code shown above, you could just define:

    vase: Thing 'delicate antique vase' 'antique vase'
       "It looks incredibly delicate. "
       okayDropMsg = 'You put the vase down very carefully. '
       okayTakeMsg = 'You pick the vase up very carefully. '
    ;

[\[back\]](#r10)

  

### <span id="implicit">\[12\] Implicit Action Announcements</span>

Messages like "(first opening the large red box)" or "(first opening the
door)" are implicit action announcements. That is they are messages from
the parser telling the player that the parser has just carried out one
or more commands on the player's behalf; these commands will generally
have been executed in order to enable the command the player actually
typed to be carried out. For example, in order to look inside the large
red box it's necessary to open the red box, and in order to go through
the door it's first necessary to open the door.

In a typical TADS 3 game most implicit actions will be generated by
[preconditions](t3res.html#precond), such as objOpen. If you want to
customize these implicit action reports, see the article on [Implicit
Action Reports](t3imp_action.html) later in this Technical Manual.

  

### <span id="notImportant">\[12a\] Not Important Message</span>

The junk object is evidentally a Decoration. What's displayed here is a
Decoration's default 'not important' message. This can be changed by
overriding notImportantMsg on individual Decorations (or on Decoration
itself, if so desired).

[\[back\]](#r12a)  

### <span id="tooHeavy">\[13\] Too Heavy Message</span>

The [table](#table) has evidently been defined of class Heavy, since
this is the standard message that is displayed when a player tries to
take or move an object of that class. Such messages are generated from
either action() or [check()](t3res.html#check), depending on the action
in question, but to change them you simply need to override
cannotTakeMsg, cannotMoveMsg, and/or cannotPutMsg on the object in
question (or the class). By default all these three are the same ("The X
is too heavy. ") for a Heavy object.

[\[back\]](#r13)  

### <span id="listgroup">\[14\] List Group</span>

In this case, the three similar crayons have been grouped together,
using the crayonGroup ListGroup used in the listWith property of the
[Crayon](#crayon) class. The effect is somewhat spoiled, however,
because the job hasn't been done properly: the three crayons are
introduced as "three blue crayons" instead of just "three crayons". This
could be fixed by overriding showGroupCountName() on crayonGroup:

    crayonGroup: ListGroupParen
        showGroupCountName(lst)
        {
            "<<spellInt(lst.length())>> crayons";
        }
    ;

For more details about using ListGroups, see the section on
[Grouping](t3lister.html#grouping) in the article on [Lists and
Listers](t3lister.html).

[\[back\]](#r14)  

### <span id="readdesc">\[15\] readDesc</span>

You'll notice that X BOOK and READ BOOK give different responses here
(which is not the case for most objects). That's because the [green
book](#greenBook) has been made of class Readable and given a separate
readDesc property.

[\[back\]](#r15)  

### <span id="verify">\[16\] Verify Message</span>

The first time the player types WEAR SOCK the parser is quite happy to
carry out the command, since the [sock](#sock) is both within scope and
defined as being a Wearable. On the second occasion, however, the parser
complains that the sock is already being worn; this type of message,
where an action is not (or is not yet or is no longer) reasonable is
typically generated by a [verify routine](t3res.html#verify).

[\[back\]](#r16)  

### <span id="inventory">\[17\] Inventory Listing</span>

This is a typical [inventory listing](t3lister.html#inventory).
[\[back\]](#r17)  

### <span id="roomfirst">\[18\] roomFirstDesc</span>

Ordinarily it would be a bad idea to include any mention of how you
arrived at the location in a room descrption, since this will generally
not read well if the room is approached from some other direction, or
the room is subsequently examined again. In this case, however, the
[landing](#landing) is described differently when it is examined the
second time. This is achieved by using roomFirstDesc to display a
different description the first time the room is examined. This works
well here since the first time the landing is examined the player
character *can* only have just entered it from the box room.

[\[back\]](#r18)  

### <span id="travelDesc">\[19\] travelDesc</span>

There's more than one way we could produce this description of the
player character walking down the stairs. Perhaps the simplest, which is
used the code below, is to make the [stairway](#stairway) a
TravelWithMessage as well as a StairwayDown and then simply define the
message we want on its travelDesc property.

[\[back\]](#r19)  

### <span id="remoteactor">\[20\] Remotely Described Actors</span>

The hall is represented in this game by two different locations,
[hallEast](#hallEast) and [hallWest](#hallWest), linked with a
[DistanceConnector](#dConn). The implementation is less than perfect,
however, as can be seen from the transcript.

The man is described with the text:

    The Harold is standing in the hall (west end).

Obviously he should be described as 'Harold' not 'the Harold'. What's
needed to fix this is to add:

        isProperName = true

to the definition of the [harold](#harold) object.

A second infelicity is the fact that both Harold and Mavis are described
as being "in the wall (west end)"; while it is probably clear enough
what this means, it would read better if they were said to be "in the
east end of the hall" or even better, perhaps, "at the other end of the
hall". One way of achieving the latter, using inRoomName(), is
illustrated below. A second way to deal with this would be to explicitly
assign the name property of hallWest, which, using the template, would
mean giving it an explicit destName as well, like this:

    hallWest: Room 'Hall (West End)' 'the west end of the hall' 
        'west end of the hall'
        "This large hall continues to the east. A flight of stairs leads down to the
        south. "
        ...
    ;

Here the first single-quoted string in the Room template is the
roomName, which is displayed in the status line and at the head of a
room description. The second single-quoted string is the destName, used
in exit listings. The third single-quoted string defines the name
property, which is the one that concerns us here. Changing the name
property in this way would result in this output:

    Hall (East End)
    This large hall continues to the west. A flight of stairs leads up to the north. 

    You see a rubber duck here. 

    The Harold is standing in the west end of the hall. 

    Mavis is in the west end of the hall, sitting on the wooden chair. 

Another way we could change this is by defining an actorInName on
westHall. For example we could define:

        actorInName = 'at the far end of the hall'

This would then give us:

    Hall (East End)
    This large hall continues to the west. A flight of stairs leads up to the north. 

    You see a rubber duck here. 

    The Harold is standing at the far end of the hall. 

    Mavis is at the far end of the hall, sitting on the wooden chair. 

We have yet to go into what part of the code is generating the messages
that Harold is standing while Mavis is sitting on the wooden chair;
we'll discuss this in more detail [below](#locActor) when we talk about
how Harold and Mavis are listed in their own room description. But we'll
make a brief foray into it here, insofar as it's relevant to listing
actors specifically in *remote* locations, as here. Suppose we thought
it would be neater to have Mavis listed as "Mavis is sitting on the
wooden chair at the far end of the hall." We can override the way an
actor is listed by overriding the specialDesc property on their current
ActorState, or, in a case such as this, where we're viewing the actor
from a remote location, by overriding the remoteSpecialDesc(pov) method
(where the pov parameter is the point of view from which we're looking,
normally that of the player character).

[Mavis](#mavis) starts out in a [HermitActorState](#hermit) (for details
of ActorStates see the article on [Creating Dynamic
Characters](t3actor.html)). All we need to do is to add the following to
the definition of this HermitActorState:

        remoteSpecialDesc(pov)
        {
            "Mavis is sitting on the wooden chair at the far end of the hall. ";
        }

Then we'll get:

    Hall (East End)
    This large hall continues to the west. A flight of stairs leads up to the north. 

    You see a rubber duck here. 

    The Harold is standing at the far end of the hall. 

    Mavis is sitting on the wooden chair at the far end of the hall. 

[\[back\]](#r20)  

### <span id="sightSize">\[21\] Remote Descriptions and sightSize</span>

It shouldn't be too difficult to see where the description of Harold is
coming from; it's simply the desc property defined on the
[harold](#harold) object. But why aren't we seeing a description for
[Mavis](#mavis)?

The answer is quite simple: the game defines `sightSize = large` on
Harold (which means we can get a description of him from a distance,
including from a remote location, as here), but we have omitted to make
the same change on Mavis. Mavis's sightSize is thus still at medium (the
default), which means that although she can be seen from a distance, any
attempt to view her from a remote location will be met with the response
"She’s too far away to make out any detail."

If we want to change this we have several options, depending on what we
want to achieve.

First, we could just define `sightSize = large` on Mavis as well as
Harold, so that we'd get her normal description too.

Second, if we're happy that Mavis is too small to be clearly discerned
from a distance, but we want to customize the message that's shown in
such circumstances, we could modify the library method that produces it,
namely libMessages.distantThingDesc(obj); e.g.:

    modify libMessages
        distantThingDesc(obj)
        {
            gMessageParams(obj);
            "You haven't got your glasses on, so you can't really out much of {the
            obj/him} from this distance. ";
        }
    ;

An alternative place to customize this message is on
Thing.defaultDistantDesc(), so instead of the above we could do the
following, with much the same effect:

    modify Thing
        defaultDistantDesc()
        {
            "You haven't got your glasses on, so you can't really out much of
            <<theName>> from this distance. ";
        }
    ;

This second method has the advantage of being a bit simpler and more
direct, and also more flexible, since you could also modify
defaultDistantDesc() on individual objects or classes, customizing this
message as seems most appropriate to the objects it applies to.

The third possibility is to override remoteDesc(pov) on Mavis, which
will define how she's described from a remote point of view regardless
of her sight size. For example:

    mavis: Person 'old mavis/woman' 'Mavis' @woodenChair
        "She's a funny old woman, when all's said and done. "
        remoteDesc(pov)  {  "She's quite aged. "; }
        isProperName = true
        isHer = true
        posture = sitting
    ;

This would give us (when carried out in the east end of the hall):

    >x mavis
    She's quite aged. 

[\[back\]](#r21)  

### <span id="oops">\[22\] Oops</span>

The first part of the message, saying that word "buck" (presumably a
typo for "duck" here) is not necessary in the game (meaning that the
game doesn't recognize it), comes from player.messages.AskUnknownWord().
The second half (which would only be displayed the first time an unknown
rord is encountered) comes from libMessages.oopsNote() (which
playerMessages.askUnknownWord() calls).

For a slightly fuller explanation of how these messages are reached, see
the section on [Parsing the Player's Command](t3cycle.html#parsing) in
the article on the Command Execution Cycle.

[\[back\]](#r22)  

### <span id="inRoomName">\[23\] inRoomName</span>

The rubber duck is sensibly described as being "At the far end of the
hall". This is because [hallEast](#hallEast) defines inRoomName()
accordingly; the inRoomName(pov) method can be used to define a
prepositional phrase (e.g. "at the far end of the hall", "further up the
street" or "in the north side of the field") used to describe the
whereabouts of objects in this location when they're viewed from another
location. The point-of-view parameter (pov) can be used to vary this
phrase according to where we're looking from; we could, for example,
check `pov.getOutermostRoom` to decide whether to describe a particular
stretch of street as "further up the street to the north" or "further
down the street to the south".

In this case, since the east end of the hall can only be viewed from one
other location, namely the west end of the hall, we could have used
actorInName to the same effect:

    hallEast: Room 'Hall (East End)' 
        "This large hall continues to the west. A flight of stairs leads up to the
        north. "
        actorInName = 'at the far end of the hall'
        north = hallStairs
        up asExit(north)
        west = hallWest       
    ;

[\[back\]](#r23)  

### <span id="locActor">\[24\] Listing Local Actors</span>

Here [Harold](#harold) and [Mavis](#mavis) are shown in the standard
form for listing actors who are present in the player character's
location (rather than actors in a remote location, as we discussed
above). Tracing where the library actually generates these descriptions
is a little complex; here's the chain:

1.  In the first instance, the way an actor is listed in a room is
    determined by that actor's specialDesc (or distantSpecialDesc or
    remoteSpecialDesc). It can therefore be directly overridden here,
    but the standard library behaviour is to call the corresponding
    method on the actor's current ActorState, (e.g. Actor.specialDesc is
    defined as `specialDesc() { curState.specialDesc(); }`). Unless the
    actor will never change ActorStates during the course of the game
    it's generally a good idea not to override specialDesc directly on
    the actor.
2.  By default, ActorState.specialDesc() in turn calls the
    actorHereDesc() method on the actor (distantSpecialDesc and
    remoteSpecialDesc both call actorThereDesc on the actor). This is
    usually a good point to intervene; if you want to change the way an
    actor is listed in a room description override specialDesc() (or
    distantSpecialDesc or remoteSpecialDesc) on the ActorState.
3.  If specialDesc has not been overridden on the ActorState, it's
    routed back to Actor.actorHereDesc. This is turn calls
    descViaActorContainer (again on the actor). More specifically,
    actorHereDesc calls
    `descViaActorContainer(&roomActorHereDesc, nil);` while
    actorThereDesc calls
    `descViaActorContainer(&roomActorThereDesc, nil);`
4.  What Actor.descViaActorContainer does is a little hard to describe.
    Basically it first determines whether the actor's container needs to
    be explicitly mentioned (as in the case of the chair Mavis is
    sitting on) or not (as in the case of Harold, who is standing
    directly in the room that's being described). In the first case it
    then calls a property of the container; in the second it calls a
    property of the gLibMessages object. The property it calls is
    determined by the first parameter passed to descViaActorContainer.
    In this case, that property is roomActorHereDesc (passed by
    actorHereDesc in the previous step). For Mavis, this will result in
    roomActorHereDesc() being called on the chair; for Harold this will
    result in roomActorHereDesc() being called on libMessages.
5.  For Harold, we reach the end of the chain at
    libMessages.roomActorHereDesc(actor), which, by default, generates
    the message "\\\<\<actor.nameIs\>\> \<\<actor.posture.participle\>\>
    \<\<tSel('here', 'there')\>\>. ", which in this case translates into
    "Harold is standing here."
6.  For Mavis, the chain continues with a call to
    roomActorHereDesc(actor) on the object she's sitting upon. By
    default this will inherit from
    BasicLocation.roomActorHereDesc(actor), which calls
    gLibMessages.actorInRoom(actor, self);
7.  For Mavis, the chain thus finally comes to an end at
    libMessages.actorInRoom(actor, cont), with Mavis being passed as the
    actor parameter and the chair as the cont parameter. By default this
    displays the message "\\\<\<actor.nameIs\>\>
    \<\<actor.posture.participle\>\> \<\<cont.actorInName\>\>. ", which
    in this case translates into "Mavis is sitting on the wooden chair.
    "

For most purposes, this is probably more detail than we really need to
know. It's conceivably useful to intervene at any point in this chain;
for example we might want to override roomActorHereDesc() on a
particular object to customize the way any actor within that object is
described (e.g. "Wilbur is perched precariously on the narrow rail",
when you'd want the "perched precariously..." bit shown whoever was
sitting on the narrow rail). In the vast majority of cases, however,
you'll probably want to stick to overriding the specialDesc property of
the relevant ActorState. For example we could override the specialDescs
on [Harold's](#harold) initial ActorState and [Mavis's](#mavis) thus:

    mavis: Person 'old mavis/woman' 'Mavis' @woodenChair
        "She's a funny old woman, when all's said and done. "
        isProperName = true
        isHer = true
        posture = sitting
    ;

    + HermitActorState
        isInitState = true
        noResponse = "The old woman simply rocks back and forth in her chair
            moaning, <q>Woe, woe, woe is me!</q>"
        stateDesc = "She's rocking back and forth in her chair moaning <q>Woe!</q> "
        specialDesc = "Mavis is slumped miserably in the wooden chair. "
    ;

    harold: Person 'twin man/harold/brother' 'Harold' @hallWest
        "He's about your height and build, and really looks quite a lot like you.
        Since he's your twin brother this is not altogether surprising. "
        sightSize = large
        isHim = true
    ;

    + hTalking: InConversationState
        specialDesc = "Harold is standing by Mavis\'s chair, waiting for you to
            speak. "
        
    ;

To produce:

    Hall (West End)
    This large hall continues to the east. A flight of stairs leads down to the south. 

    At the far end of the hall, you see a rubber duck. 

    Harold is hovering anxiously over Mavis. 

    Mavis is slumped miserably in the wooden chair. 

[\[back\]](#r23)  

### <span id="exits">\[25\] Listing Exits - destName</span>

First, the news in brief: the list of exits is produced by
exitLister.showExitsCommand(), which in turn calls chain of methods too
complex to go into here. Suffice to say that if you want to customize
the way exits are listed, that's the place to look. It's also
exitLister.showExitsCommand() that's responsible for displaying the
explanation of the EXITS command ("You can control the exit listings
with the EXITS command. EXITS STATUS ...") the first time it's used. The
easiest way to suppress this altogther would be to set
exitLister.exitsOnOffExplained to true at the start of the game. If you
want a different explanation explained it's probably easiest to override
exitLister.showExitsCommand to display your own version, but you could
instead override libMessages.explainExitsOnOff.

The more noteworthy point here, however, is that the exit listing in the
transcript appears slighly clumsy: "Obvious exits lead south; and east,
back to the hall (east end)." It would read better if it ended with
"back to the east end of the hall." To do that we simply need to define
a destName on [hallEast](#hallEast):

    hallEast: Room 'Hall (East End)' 'the east end of the hall'
        "This large hall continues to the west. A flight of stairs leads up to the
        north. "    
        actorInName = 'at the far end of the hall'
        north = hallStairs
        up asExit(north)
        west = hallWest       
    ;

Here the destName is defined by including it as the second single-quoted
string in the template. It's usually a good idea to do this any time
when 'the' followed by the roomName (the first single-quoted string)
would look clumsy in a list of exits.

[\[back\]](#r25)  

### <span id="posture">\[26\] Actor Posture</span>

The description of Mavis seems a little clumsy here, since it refers to
the chair twice, first in the sentence "She is sitting on the wooden
chair" and then immediately afterwards in the sentence "She's rocking
back and forth in her chair moaning “Woe!”" The first of these two
sentences looks redundant here; but where is it coming from, and how do
we get rid of it?

There are actually three sentences describing Mavis here. The first,
"She's a funny old woman, when all's said and done" comes from the desc
property of the [mavis](#mavis) object. The last, "She's rocking back
and forth in her chair moaning “Woe!”", comes from the stateDesc of the
[HermitActorState](#hermit) that Mavis starts out in (if you need an
explanation of ActorStates, see the article on [Creating Dynamic
Characters](t3Actor.html)). It's the troublesome middle sentence that
appears to come from nowhere in the author's code.

It may be helpful to explain the chain of events that produces this
message:

1.  Examining an object is carried out by the basicExamine() method on
    that object (defined on Thing). Once that routine has displayed the
    appropriate description (normally, and in this case, from the desc
    property) it goes on to call examineStatus() in order to provide any
    additional information that's appropriate to the particular state
    the object is in.
2.  On an actor, examineStatus() first calls postureDesc() on the
    current actor (unless the current actor is the player character) and
    only then calls stateDesc on the current actor state.
3.  In turn, Actor.postureDesc() calls
    descViaActorContainer(&roomActorPostureDesc, nil), again on the
    current actor.
4.  Actor.descViaActorContainer() then calls roomActorPostureDesc on the
    actor's container (except under particular circumstances when it's
    called on libMessages instead).
5.  By default, the container uses BasicLocation.roomActorPostureDesc,
    which then in turn calls gLibMessages.actorInRoomPosture(actor,
    self) (gLibMessages is normally just libMessages).
6.  Finally, libMessages.actorInRoomPosture(actor, room) produces the
    message "\\\<\<actor.itIs\>\> \<\<actor.posture.participle\>\>
    \<\<room.actorInName\>\>", which in this case translates into "She
    is sitting on the wooden chair."

Although we could in principle intervene at any stage in the process,
the best place for this kind of situation is commonly in Mavis's
postureDesc() method. To suppress the unwanted redundancy we can simply
make it do nothing at all:

    mavis: Person 'old mavis/woman' 'Mavis' @woodenChair
        "She's a funny old woman, when all's said and done. "
        postureDesc = ""
        isProperName = true
        isHer = true
        posture = sitting
    ;

Then we'll get:

    >x mavis
    She's a funny old woman, when all's said and done. She's rocking back and forth 
    in her chair moaning Woe! 

In this case, that's all we need to do, since Mavis never moves from her
chair, and never changes ActorState. In a more complex situation we
might want postureDesc() to do its usual stuff in some situations but
not in others; in that case we might need to build in an appropriate
test, e.g.:

       postureDesc()
       {
           if(curState not in (mavisSitting, mavisWandering))
              inherited;       
       }

This would give us the default description of Mavis's posture except
when she's in either the MavisSitting or the MavisWandering states
(which, it is to be assumed, already describe Mavis's posture
sufficiently well in their stateDescs). A more general solution might be
to modify Actor and ActorState thus:

    modify Actor()
        postureDesc()
        {
            if(!curState.describesPosture)
               inherited;
        }
    ;

    modify ActorState
        describesPosture = nil
    ;

Then all we'd need to do is to define describesPosture = true on any
ActorState where the stateDesc already gives an adequate account of the
posture (so that the message produced by the standard postureDesc would
seem redundant).

For further information on taming posture messages, see the section on
Unwanted Postures in the article on [Banishing Awkward
Messages](t3banish.html#posture).

[\[back\]](#r26)  

### <span id="noResponse">\[27\] HermitActorState.noResponse</span>

There are several ways in which Mavis's response, or rather
non-response - could have been generated here, but given the nature of
her (non-)response and the absence of any greeting protocols, the most
likely (and most probable) way this has been generated is from the
noResponse property of a [HermitActorState](#hermit).

[\[back\]](#r27)  

### <span id="greeting">\[28\] HelloTopic</span>

[Harold](#harold) responds to the player character's greeting here
because he's been given an explicit HelloTopic in his initially active
ConversationReadyState. For a fuller explanation of these terms see the
article on [Programming Conversations with NPCs](t3conv.html).

[\[back\]](#r28)  

### <span id="topics">\[29\] Suggested Topics</span>

The explicit greeting command has resulted in a list of topics the
player could try asking [Harold](#harold) about (here there's actually
only one). The greeting triggers a call to suggestTopics(true) on the
actor initiating the conversation (in this case, and in most others, the
player character); it's the 'explicit' argument that's being called as
true here. The suggestTopics method then calls suggestTopicsFor(self,
explicit) on the actor who his being addressed (in this case Harold),
which in turn calls suggestTopicsFor() on that actor's current
ActorState (which should by now be Harold's InConversationState). This
then calls the ActorState's showSuggestedTopics() method.

Here, Mavis is listed as a possible topic of conversation because
there's a currently active [AskTopic](#mavisask) for mavis that's also a
SuggestedAskTopic. There's also an AskTopic for the [photo](#photoask)
that's a SuggestedAskTopic, but that's not active yet since at this
stage the player character doesn't know about the photo.

For a fuller explanation of all this see the article on [Programming
Conversations with NPCs](t3conv.html).

[\[back\]](#r28)  

### <span id="asktopic">\[30\] AskTopic</span>

Here we see a fairly standard kind of response from an
[AskTopic](#mavisask)

. This one informs the player character about the photograph and so
needs to mark that object as known about so that the player can now
refer to it in subsequent conversation. At the same time the player's
curiosity about Mavis is exausted (that is, she won't appear as a
suggested topic of conversation again.

For a fuller explanation of all this see the article on [Programming
Conversations with NPCs](t3conv.html).

[\[back\]](#r30)  

### <span id="topics2">\[31\] Explicit Topic Request</span>

We have just met a topic inventory display [above](#topics). The
procedure for producing it is much the same here, except that the output
is not enclosed in parentheses (since it's the response to an explicit
TOPICS command, not a by-product of a greetings command). One point to
note is that the list has changed: the player character's curiosity
about Mavis has been exhausted, but he now knows about the photograph,
so that has become available to be asked about.

[\[back\]](#r30)  

### <span id="stopEvent">\[32\] StopEventList</span>

Once again we see the output from an ordinary AskTopic, but this one
appears also to be a [StopEventList](#photoask), since we get a
different response second time round, which repeats thereafter.

[\[back\]](#r32)  

### <span id="defresponse">\[33\] DefaultTopic</span>

The player is always likely to ask an NPC about topics for which the
author has provided no specific response, as here. At least we can
assume that the author of this game would not have thought to provide a
response to asking Harold about American foreign policy, so this will
almost certainly be the response from some kind of
[DefaultTopic](#deftopic). This one has the merit of keeping the player
firmly focused on his next objective.

For more information on how DefaultTopics can be used in NPC
conversations, see the article on [Programming Conversations with
NPCs](t3conv.html).

[\[back\]](#r33)  

### <span id="bye">\[34\] Missing ByeTopic</span>

The unfortunate "Nothing happens." response occurs here because the
author has forgotten to define an appropriate ByeTopic for Harold at
this point. We need to add something like the following (after the
HelloTopic in Harold's [ConversationReadyState](#hWaiting):

    +++ ByeTopic
        "<q>Bye for now,</q> you say.\b
        <q>See you soon,</q> he replies. "
    ;

We'd then see:

    >bye
    Bye for now, you say.

    See you soon, he replies. 

For a more sophisticated implementation, we might want to provide a
separate ImpByeTopic, LeaveByeTopic and so forth.

[\[back\]](#r34)  

### <span id="dark">\[35\] Darkness</span>

There are two library default messages here, which we may as well take
together. The first, 'In the dark', is the default value of
roomDarkName. The second "It's pitch black" is likewise the default
value of roomDarkDesc. These give respectively the name and the
description of a location when there's not enough light present to see
it by.

It's easy enough to customize both messages when appropriate, as it
probably is here, since the player character is presumably at least
aware that the stairs lead down into the cellar. So we might change the
definition of the [cellar](#cellar) location thus:

    cellar: DarkRoom 'Cellar'
        "The cellar is almost bare. A flight of stairs leads up to the north. "
        roomDarkName = 'Cellar (in the dark)'
        roomDarkDesc = "You're dimly aware of the flight of stairs leading back up,
            but otherwise it's too dark to see anything in here. "
        north = cellarStairs
        up asExit(north)    
    ;

We'd then get:

    >d
    Cellar (in the dark)
    You're dimly aware of the flight of stairs leading back up, but otherwise it's 
    too dark to see anything in here. 

Since the dark description now mentions the flight of stairs, it might
be a good idea to give the stairs object a brightness of 1, so that the
flight of stairs can be referred to by the player (e.g. CLIMB STAIRS)
even in the absence of light.

[\[back\]](#r35)  

### <span id="torchon">\[36\] Torch Turned On Message</span>

This is simply the default message for turning something on, generated
from actionDobjTurnOn(). The actual message used is
playerActionMessages.okayTurnOnMsg. If you wanted to customize it for a
particular Flashlight you'd probably do so in its actionDobjTurnOn()
method, i.e. the action part of dobjFor(TurnOn).

[\[back\]](#r36)  

### <span id="nowlight">\[37\] A Newly Lit Location</span>

Turning on the torch also causes the room description to be
re-displayed, now that the player character can see it. This is carried
out by the special internal action NoteDarkness, which is called from
Actor.noteConditionsAfter() if the lighting conditions have changed over
the course of the current action. Action.doAction() calls
pc.noteConditionsBefore() (pc = player character) at the start of an
action (which makes a note of whether it's light or dark) and then calls
pc.noteConditionsAfter() near the end of the action to check whether
lighting conditions have changed, requiring a new description of the
newly-lit location or else an announcement of the onset of darkness.

[\[back\]](#r36)  

### <span id="score">\[38\] Score Notification</span>

We get this score notification because actionDobjTake() on the
[photo](#photo) object calls awardPointsOnce() on an associated
Achievement (a number of other methods might have had a similar effect,
but this is the one that was used here).

Whatever the precise method use to invoke the scoring, it will usually
be routed through the addToScore() function, which in turn calls
libScore.addToScore\_() (note the underscore).

The actual message announcing the change in score comes from
scoreNotifier.checkNotification(), which uses
libMessages.firstScoreChange() if this is the first time a change of
score is being notified in a game, or libMessages.scoreChange()
thereafter. Both these libMessages methods then call
libMessages.basicScoreChange() to announce the actual change in score,
but libMessages.firstScoreChange() then goes on to diplay the additional
message "(If you’d prefer not to be notified about score changes in the
future, type NOTIFY OFF.)"

[\[back\]](#r38)  

### <span id="providing">\[39\] State-Related Text</span>

We've already seen an [inventory listing](#inventory) before. What's new
here is the text '(providing light)' following the name of the torch in
the inventory listing. Without going into arcane details of the way
various inventory listers go about their business, we can say that this
text ultimately comes from the listName\_ property of
lightSourceStateOn, so that one way to customize it would be with the
following:

    modify lightSourceStateOn
        listName_ = 'currently switched on'    
    ;

We'd then see:

    >i
    You are carrying a large black torch (currently switched on) and a photo of Buster 
    Keaton, and youre wearing an odd sock.

This is fine when the torch is the only light source in the game, but if
there were multiple light sources it might not be so good, since this
change would then apply to all of them. To allow for this we could make
the more complicated change:

    modify lightSourceStateOn
        listName(lst) 
        {
            if(lst == [torch])
                return 'currently switched on';
            else
                return inherited(lst);
        }
    ;

The change would then apply only to the torch; any other light source
would continue to use the default 'providing light' message. If we had
multiple light sources all requiring their own versions of this message,
we might come up with a different kind of scheme, making the light
source supply its own message:

    modify lightSourceStateOn
        listName(lst) 
        {
            if(lst.length() == 1)
                return lst[1].providingLightMsg;
            else
                return inherited(lst);
        }
    ;

    modify LightSource
        providingLightMsg = 'providing light'
    ;

One could then override providingLightMsg on each and every light source
that required a custom version.

A few more words of explanation may be in order to help make sense of
this. A light source can have one of two states, depending whether it is
lit or not. These possible states are defined in its allStates property:

        allStates = [lightSourceStateOn, lightSourceStateOff]

The current state (given by the getState property) is determined by
whether or not the light source is currently lit:

        getState = (brightness > 1 ? lightSourceStateOn : lightSourceStateOff)

lightSourceStateOn and lightSourceStateOff are both ThingState objects;
these are used both to provide the extra pieces of state-related text
(such a 'providing light') and to help the objects they relate to
respond to the correct vocabulary (so that a LightSource that's lit can
be referred to as 'lit'). The standard library uses ThingStates for
light sources (as shown here), Matchsticks (matchStateLit or
matchStateUnlit) and Wearables (wornState and unwornState).

For further suggestions on dealing with messages of this sort, see the
appropriate section in the article on [Banishing Awkward
Messages](t3banish.html#lit).

[\[back\]](#r39)  

### <span id="cantgo">\[40\] Cannot Go That Way</span>

This is the message you get when the player character tries to go in an
unavailable direction. The message is generated by cannotGoThatWay()
(called on the current room), which in turn first displays the room's
cannotGoThatWayMsg, and then calls cannotGoShowExits(gActor) to list the
exits that are available.

There are thus several places at which you can customize this, but two
in particular are useful. If you want to change the first part of the
message but leave the listing of exits as it is, then simply override
cannotGoThatWayMsg, e.g.:

    cellar: DarkRoom 'Cellar'
        "The cellar is almost bare. A flight of stairs leads up to the north. " 
        north = cellarStairs
        up asExit(north)    
        cannotGoThatWayMsg = 'There\'s obviously nothing in that direction. '
    ;

This would result in:

    >e
    There's obviously nothing in that direction. The only obvious exit leads north, 
    back to the hall (west end). 

Note that this could be improved by giving a destName to
[hallWest](#hallWest) so that we'd see something like "back to the west
end of the hall" rather than "back to the hall (west end)".

The alternative is to replace the entire output by overriding
cannotGoThatWay():

    cellar: DarkRoom 'Cellar'
        "The cellar is almost bare. A flight of stairs leads up to the north. "    
        north = cellarStairs
        up asExit(north)    
        cannotGoThatWay = "There's no point blundering around in that direction; you
            know perfectly well that the only way out of here is back <<aHref('UP',
                'up','Go up')>> the stairs. "    
    ;

Using the aHref() function is the icing on the cake here; it provides a
hyperlink on the word "up" in the output text that the player can click
to go up from the cellar, but there's no need to do this if you don't
want to. The effect of this override is to produce:

    >e
    There's no point blundering around in that direction; you know perfectly well that the 
    only way out of here is back up the stairs. "

[\[back\]](#r40)  

### <span id="darkannounce">\[41\] Announcement of Darkness</span>

The mechanism for recognizing and responding to the onset of light or
darkness (involving the NoteDarknessAction and
Actor.noteConditionsAfter()) has already been described
[above](#nowlight). The new point to note here is that the actual
message announcing the darkness ('It is now pitch black') comes from
playerActionMessages.newlyDarkMsg. If we wanted to change it this
message, this would therefore be the most convenient place to change it,
e.g.:

    modify playerActionMessages
        newlyDarkMsg = 'Now it\'s too dark to see anything. '
    ;

[\[back\]](#r41)  

### <span id="darkgo">\[42\] Cant Go in Darkness</span>

This message is produced by the method cannotGoThatWayInDark(), called
on the current location. By default it displays
playerActionMessages.cannotGoThatWayInDarkMsg, but obviously it could be
overridden to display any message you like, e.g.:

    cellar: DarkRoom 'Cellar'
        "The cellar is almost bare. A flight of stairs leads up to the north. " 
        north = cellarStairs
        up asExit(north)    
        cannotGoThatWayInDark = "Although it's dark and you can hardly see a thing
            down here, you're pretty certain that the only way out is back up the
            stairs. "    
    ;

[\[back\]](#r42)  

### <span id="fuse">\[43\] Winning Cut-Scene</span>

There are several distant ways we could generate this brief closing
cut-scene. This one was implemented by setting up a Fuse in the
enteringRoom() method of [hallWest](#hallWest) if the player enters the
room carrying the photograph; the fuse then executes at the end of the
turn, displaying the message and ending the game.

[\[back\]](#r43)  

### <span id="winning">\[44\] Winning Message</span>

This winning message, which marks the end of the game, is here generated
by the call to finishGameMsg() in the (custom) winGame() method on
[hallWest](#hallWest).

finishGameMsg() can either be called with a literal single-quoted string
as its first argument (as in this example), or with a FinishType object.
If it's called with a literal string, that literal string is displayed
as the winning messages. If it's called with a FinishType object, that
object's finishMsg is displayed. The library defines four FinishType
objects: ftVictory ('You have won'), ftDeath ('You have died'),
ftFailure ('You have failed') and ftGameOver ('Game Over'). You can
define additional FinishType objects if you like, but this is only
worthwhile if you want to use them more than once (i.e. if the same
ending message can be displayed from calls to finishGameMsg at several
different places in your code).

The second parameter used by finishGameMsg is a list of FinishOption
objects. Once the game is over the parser will always offer the player
the option to RESTORE, RESTART or QUIT, but here the author can offer
the player additional options, in this case UNDO and FULL SCORE (using
finishOptionUndo and finishOptionFullScore). Other FinishOption types
that can be used include finishOptionScore, finishOptionAmusing, and
finishOptionCredits.

[\[back\]](#r43)  

### <span id="finalscore">\[45\] Final Score Notification</span>

This final score notification is generated from a call to
libGlobal.scoreObj.showScore() in the finishGameMsg() function (which
was called from author code; see the definition of
[hallWest](#hallWest).winGame).

[\[back\]](#r43)  

### <span id="fullscore">\[46\]</span>

The FULL SCORE command generates this report of the score and list of
achievements by calling libScore.showFullScore(). The points awarded for
and description of each achievement listed are defined on the various
Achievement objects defined in the game and activated by a call to
awardPointsOnce(). For a fuller account of the scoring system see the
comments in [score.t](../libref/source/score.t.html).

[\[back\]](#r46)  

### <span id="goodbye">\[47\] Goodbye Message</span>

This farewell message is produced by the showGoodbye() method on
[gameMain](#gameMain).

[\[back\]](#r46)  

------------------------------------------------------------------------

## <span id="sourcecode">The Source Code</span>

    #charset "us-ascii"

    #include <adv3.h>
    #include <en_us.h>



    /*
     *   Our game credits and version information.  This object isn't required
     *   by the system, but our GameInfo initialization above needs this for
     *   some of its information.
     *   
     *   IMPORTANT - You should customize some of the text below, as marked:
     *   the name of your game, your byline, and so on.  
     */
    versionInfo: GameID
        name = 'TADS 3 Starter Game'
        byline = 'by An Author'
        htmlByline = 'by <a href="mailto:your-email@your-address.com">
                      YOUR NAME</a>'
        version = '1.0'
        authorEmail = 'YOUR NAME <your-email@your-address.com>'
        desc = 'CUSTOMIZE - this should provide a brief description of
                the game, in plain text format.'
        htmlDesc = 'CUSTOMIZE - this should provide a brief description
                    of the game, in <b>HTML</b> format.'

        showCredit()
        {
            /* show our credits */
            "Put credits for the game here. ";

            /* 
             *   The game credits are displayed first, but the library will
             *   display additional credits for library modules.  It's a good
             *   idea to show a blank line after the game credits to separate
             *   them visually from the (usually one-liner) library credits
             *   that follow.  
             */
            "\b";
        }
        showAbout()
        {
            "This is just a brief demo game to illustrate where various messages
            come from in TADS 3. Or you could think of it as a high adventure with
            deep characterization, a riveting plot, and a myriad of amazing
            puzzles -- except that if you do think of ir this way you'll be sadly
            disappointed! ";
        }
    ;


    gameMain: GameMainDef
        /* the initial player character is 'me' */
        initialPlayerChar = me

        /* 
         *   Show our introductory message.  This is displayed just before the
         *   game starts.  Most games will want to show a prologue here,
         *   setting up the situation for the player, and show the title of the
         *   game.  
         */
        showIntro()
        {
            "Welcome to the TADS 3 Starter Game!\b";     
        }

        /* 
         *   Show the "goodbye" message.  This is displayed on our way out,
         *   after the user quits the game.  You don't have to display anything
         *   here, but many games display something here to acknowledge that
         *   the player is ending the session.  
         */
        showGoodbye()
        {
            "<.p>Thanks for playing!\b";
        }
    ;

    me: Actor
        location = boxRoom   
        desc = "You're neither as young as you used to be or as young as you'd like
            to be. "
    ;

    boxRoom: Room 'Box Room'
        "This large box room is strewn with junk. The only way out is via a door
        to the east. "
        east = boxDoor
    ;

    + boxDoor: Door 'door*doors' 'door'
        "It's just a plain door, painted white. "
    ;

    + Decoration 'junk' 'junk'
        "All sorts of stuff, the accumulated detritus of decades, mostly not worth
        bothering with. "
    ;

    + largeBox: OpenableContainer 'large red box' 'large red box'
        "It's large, red and box-shaped. "
        initSpecialDesc = "A large red box sits in the corner. "    
    ;

    ++ teddy: Thing 'old teddy bear' 'old teddy bear'
        "The old teddy stills shows the dreadful effects of too much love from an
        over-enthusiastic child, but has long since suffered years of neglect. "
    ;

    ++ legoBrick: Thing 'red lego brick*bricks' 'red lego brick'
    ;

    ++ torch: Flashlight 'large black torch/flashlight' 'large black torch'
        "It looks sturdy enough, and seems to be in good working order. "
    ;

    + Surface, Heavy 'small square table' 'small square table'
        specialDesc = "A small square table stands in the middle of the room. "
    ;

    ++ smallBox: LockableContainer 'small blue box' 'small blue box'
    ;

    +++ redCrayon: Crayon 'red -' 'red crayon'
    ;

    +++ blueCrayon: Crayon 'blue -' 'blue crayon'
    ;

    +++ yellowCrayon: Crayon 'yellow -' 'yellow crayon'
    ;

    + oldCoat: Wearable 'old brown coat' 'old coat'
        "It's brown, but not too motheaten. "
    ;

    + greenBook: Readable 'small green getting started book' 'small green book'
        "It's a copy of Getting Started in TADS 6. "
        readDesc = "Reading the book brings back happy memories of writing IF in
            your early twenties. With TADS 6 all you had to do was fill in a form
            specifying the genre of the game, the names of a few key NPCs, and the
            median age of the target audience, select a plot-type from a drop-down
            list, and then hit either the <q>generate two-hour version for
            IF-Comp</q> button or <q>generate long version</q> button, and a
            bug-free, typo-free TADS 6 game would be instantly created for you.
            Shame so many diehards on rec.arts.int-fiction thought this took all the
            fun out of creating IF."
    ;

    + oddSock: Wearable 'odd green sock*socks' 'odd sock'
        "Washing machines have a habit of swallowing odd socks, and this one (which
        happens to be green) must be the survivor of what was once a pair. "
    ;

    + tennisBall: Thing 'split tennis ball*balls' 'tennis ball'
        "This one has been split open; it's no good for playing tennis with any
        more. "
    ;

    class Crayon: Thing 'crayon*crayons'
        listWith = [crayonGroup]
    ;

    crayonGroup: ListGroupParen
    ;

    landing: Room 'Landing'
        "A flight of stairs leads down to the south, while a door leads into the box
        room just to the west. "
        roomFirstDesc = "Emerging from the box room you find yourself standing at
            the top of a flight of stairs leading down to the south. "
        west = landingDoor
        south = landingStairs
        down asExit(south)
    ;

    + landingDoor: Door ->boxDoor 'box room door*doors' 'box room door'
    ;

    + landingStairs: TravelWithMessage, StairwayDown 
        'flight/stairs' 'flight of stairs'
        travelDesc = "You walk briskly down the stairs. "
    ;

    DistanceConnector [hallEast, hallWest];

    hallEast: Room 'Hall (East End)'
        "This large hall continues to the west. A flight of stairs leads up to the
        north. "
        inRoomName(pov) { return 'at the far end of the hall'; }
        north = hallStairs
        up asExit(north)
        west = hallWest
    ;

    + hallStairs: StairwayUp ->landingStairs
        'flight/stairs' 'flight of stairs'
    ;

    + rubberDuck: Thing 'yellow rubber duck' 'rubber duck'
        "It's yellow. "
        afterAction()
        {
            if(gActionIs(Jump))
            {
                moveInto(isIn(hallEast) ? hallWest: hallWest);
                "<.p>As if startled by your sudden exertion, the rubber duck lets
                out a clockwork quack and waddles to the other end of the hall. ";
            }
        }  
    ;

    hallWest: Room 'Hall (West End)' 
        "This large hall continues to the east. A flight of stairs leads down to the
        south. "
        east = hallEast  
        south = hallStairsDown
        down asExit(south)
        
        enteringRoom(traveler)
        {
            if(photo.isIn(traveler))
                new Fuse(self,&winGame, 0);
        }
        
        winGame()
        {
            "You turn to Mavis and hand her the photograph of Buster Keaton. She
            snatches it eagerly from your grasp, instantly stops her moaning, and
            showers the actor's picture with delighted kisses.\b";
            
            achievement.awardPointsOnce();
            
            finishGameMsg('You have made an old lady very happy', [finishOptionUndo,
                finishOptionFullScore]);
        }
        
        achievement: Achievement { +10 "making Mavis happy" }
    ;

    + woodenChair: Chair, Heavy 'wooden chair' 'wooden chair'
    ;

    + hallStairsDown: StairwayDown 'flight/stairs' 'flight of stairs'
    ;

    cellar: DarkRoom 'Cellar'
        "The cellar is almost bare. A flight of stairs leads up to the north. "
        north = cellarStairs
        up asExit(north)
    ;

    + cellarStairs: StairwayUp ->hallStairsDown
        'flight/stairs' 'flight of stairs'
    ;


    + photo: Thing 'favourite buster photo/keaton/picture/photograph' 
        'photo of Buster Keaton'
        "The picture shows Buster Keaton posing in a Confederate uniform in The
        General. "
            
        dobjFor(Take)
        {
            action()
            {
                inherited;
                achievement.awardPointsOnce();
            }
        }
       achievement: Achievement { +10 "retrieving the photograph" }
    ;


    mavis: Person 'old mavis/woman' 'Mavis' @woodenChair
        "She's a funny old woman, when all's said and done. "
        isProperName = true
        isHer = true
        posture = sitting
    ;

    + HermitActorState
        isInitState = true
        noResponse = "The old woman simply rocks back and forth in her chair
            moaning, <q>Woe, woe, woe is me!</q>"
        stateDesc = "She's rocking back and forth in her chair moaning <q>Woe!</q> "
    ;

    harold: Person 'twin man/harold/brother' 'Harold' @hallWest
        "He's about your height and build, and really looks quite a lot like you.
        Since he's your twin brother this is not altogether surprising. "
        sightSize = large
        isHim = true
    ;

    + hTalking: InConversationState
        specialDesc = "Harold is standing by Mavis\'s chair, waiting for you to
            speak. "    
    ;

    ++ hWaiting: ConversationReadyState
        isInitState = true
    ;

    +++ HelloTopic
        "<q>Hello, Harold!</q> you say.\b
        <q>Hi there!</q> he replies. "    
    ;

    ++ AskTopic, SuggestedAskTopic @mavis
        "<q>What's up with Mavis?</q> you ask.\b
        <q>She's inconsolable -- she can't find her favourite photograph of Buster
        Keaton,</q> he tells you. <<gSetKnown(photo)>>"
        name = 'Mavis'
    ;

    ++ AskTopic, SuggestedAskTopic, StopEventList @photo
        [
            '<q>Where did Mavis leave the photo?</q> you ask.\b
            <q>I think it may be in the cellar; but it\'s dark down there so I
            couldn\'t find it,</q> he tells you. ',
            
            '<q>You think Mavis\'s photo of Buster Keaton may be in the cellar?</q>
            you ask.\b
            <q>That\'s right,</q> he nods, <q>Be a good fellow and get it for her,
            her moaning is getting on my nerves.</q> '
        ]
        name = 'the photo'
    ;

    ++ DefaultAnyTopic
        "<q>I think you'd better help poor Mavis before we discuss that,</q> he
        suggests. "
    ;



------------------------------------------------------------------------



*TADS 3 Technical Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="depth.html" class="nav">TADS 3 In Depth</a> \> Where Messages
Come From  
<span class="navnp"><a href="depth.html" class="nav"><em>Prev:</em> TADS 3 In Depth</a>
    <a href="t3res.html" class="nav"><em>Next:</em> Action Results</a>
    </span>


