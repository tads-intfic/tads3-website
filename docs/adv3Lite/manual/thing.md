---
layout: docs
---


<img src="topbar.jpg" data-border="0" />





<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="core.html" class="nav">The Core Library</a> \> Things  
<span class="navnp"><a href="core.html" class="nav"><em>Prev:</em> The Core Library</a>
   
<a href="room.html" class="nav"><em>Next:</em> Rooms &amp; Regions</a>
    </span>





# Things

If you've had any experience writing Interactive Fiction, especially
with TADS (2 or 3) or with earlier versions of Inform (up to version 6,
at any rate) you'll know that a great deal of IF programming is taken up
with defining objects. In the adv3Lite library the kind of object you'll
probably find yourself defining most often is the Thing, which
represents a physical object in the game world. Every physical object in
an adv3Lite game will either be a Thing or an object based on a subclass
of Thing. The adv3 library has a very extensive hierarchy of classes
derived from Thing. The adv3Lite library attempts to prune that
hierarchy drastically so that just about any game object (with a few
exceptions such as rooms, doors and keys) can be defined as a Thing. But
if you prefer to do things the adv3 way (and that might make for more
readable code, quite apart from other possible benefits), you can use
many of the Thing classes (Container, OpenableContainer, KeyedContainer,
Decoration, Surface, Platform, Distant, and the like) provided you
include the module extras.t in your build (it will be included by
default). All the class definitions do there, however, is define one or
two properties on Thing you could just as easily define for yourself. In
this section, we shall focus on how to define a Thing, and describe how
to make a Thing behave like a Container, Surface, ComplexContainer,
Platform, Wearable, Switch and so forth just by defining a few
properties.

We shall start with the basic properties you'll need to define on just
about any thing, then discuss the [containment
properties](#containment), and then the other [behavioural
properties](#behaviour), [sensory properties](#sensory) and a few other
[miscellanoeus properties](#misc). We shall not go into any depth on
most of the properties and methods principally intended for internal use
by the library; instead, we shall try to keep things as simple as we
can.

Just one further note before we start looking at the properties of Thing
(and this is extremely important because it will apply to everything
else in adv3Lite): When we give the definition of a property, please
play close attention to the type of data it should be defined with;
common data types such as objects, numbers, single-quoted strings and
double-quoted strings are *not* interchangeable, and if you try to
define a property that requires one kind of data with data of a
different type things won't work as you expect. For example, the
following three property definitions are anything but equivalent:

```
        foo = bar   // An object (or possibly an enum or variable or property name)
        foo = 'bar' // a single-quoted string
        foo = "bar" // a double-quoted string 
     
```

If you don't understand the distinctions being made above then you
really should read Part III of the [TADS 3 System Manual](../../adv3/doc/sysman/cover.html)
before going any further with this manual (or else start by working
through the [Tutorial](../tutorial/index.html)); if you don't observe
these distinctions in the explanations that follow, then you may
struggle to get your own code to work.

  
<span id="basicprops"></span>

## Basic Properties

The basic properties you need to define for a Thing in adv3Lite are its
name, the vocabulary used to describe it, and its description. In the
adv3Lite library the first two of these can be defined in single
property, the vocab property. So, for example, to define a red ball you
might write:

```
    redBall: Thing
       vocab = 'red ball;bouncy rubber; sphere'
       desc = "It's very bouncy, and appears to be made of rubber. "
    ;
```

Note how the vocab property works. First we supply the name of the
object ('red ball'), then, following the first semicolon we supply any
additional adjectives the object might be known by (here 'bouncy' and
'rubber') and then, after the second semicolon, any additional nouns the
player might use to refer to the object. Note that by naming it 'red
ball' before the first semicolon we automatically ensure that the player
can refer to it as 'red ball' (or just 'red' or 'ball'). In this case
the library assumes that 'red' is an adjective and 'ball' is a noun,
because it assumes that the last word in the name is the noun and that
all the words before it are adjectives. It is perfectly possible to
override this assumption if you wish; for the full story on what you can
do with the vocab property see below (it is quite a bit more
sophisticated than the brief account given here may suggest, but the
brief account will do for now). One further thing to note, however, is
that the adv3Lite parser (or rather the Mercury parser that adv3Lite
incorporates) is quite relaxed about the order in which the player
enters words to describe an object, so the vocab property can readily be
used to define odd names and vocabulary such as 'Cranky the clown' or 'S
and P magazine' directly, without having to jump through any further
hoops. Again, see below on the full account of the [vocab](#vocab)
property for further details.

In practice, though, we'd normally use the Thing template to define
these basic properties, so in a real game our red ball definition would
normally look like this:

```
    redBall: Thing 'red ball;bouncy rubber; sphere'
       "It's very bouncy, and appears to be made of rubber. "
    ;
```

If the name doesn't uniquely identify the object — say because there
were two red balls in our game, the bouncy red rubber ball and a cricket
ball — we can define the **disambigName** property to distinguish them
when the parser asks the player to disambiguate which ball s/he means
(we definitely don't want the parser to ask "Which do you mean, the red
ball or the red ball?'"). In this admittedly artificial example, we
would need to define a disambigName on our redBall object so:

```
    redBall: Thing 'red ball;bouncy rubber; sphere'
       "It's very bouncy, and appears to be made of rubber. "
       
       disambigName = 'bouncy rubber ball'
    ;
```

Normally, though, this should not be necessary.

We can also define the following properties broadly related to the
object's name, although judicious use of the [vocab](#vocab) property
will normally make it unnecessary to use many of these explicitly:

<span id="thingprops"></span>

- **name** (A single-quoted string) Explicity defining the name (short
  name) property will override any name the library would otherwise have
  inferred from the vocab property.
- **proper** (true or nil) Signifies that the object has a proper name
  (e.g. John Smith). If the first part of the vocab property is defined
  entirely with capitalized words this will be set to true
  automatically.
- **qualified** (true or nil) Signifies that although this object does
  not have a proper name, its name should not be preceded by an article
  (such as 'the' or 'a'). We can achieve the same effect by starting the
  first section of the vocab property (the name part) with '()'.
- **plural** (true or nil) Set this to true if the object has a plural
  name (e.g. 'stairs'). The same effect can be achieved by ending the
  vocab property (after the third semicolon) with 'them' (e.g. 'stairs;
  steep; staircase; them).
- **ambiguouslyPlural** (true or nil) Signifies that his object can be
  referred to with either a singular or plural pronoun, e.g. a pair of
  shoes or a flight of stairs might be referred to as either 'it' or
  'them'. Whether it's actually plural or singular (when the name is
  used as the subject of a sentence, for example) depends on the value
  of the `plural` property. You can also set
  ambiguouslyPlural to true by including both 'it' and 'them' in the
  pronoun list at the end of the vocab property (e.g. 'flight stairs;
  steep; staircase; it them). To make an ambiguouslyPlural object
  actually plural, list 'them' before any other pronoun.
- **massNoun** (true or nil) Set this to true if the object's name is
  that of a mass noun (e.g. sand or snow). In English we do not refer to
  'a sand' or 'a snow' but to 'some sand' or 'some snow' (or just 'sand'
  and 'snow'). The library will automatically set this to true if you
  define 'some' as the article in the vocab property (e.g. 'some sand;
  fine yellow').
- **theName** (single-quoted string) The form of the name with the
  definite article (e.g. 'the red ball'), or simply the name if it's a
  proper or qualified name (e.g. 'John Smith' or 'Pride and Prejudice').
  The library will normally get this right automatically, so you
  shouldn't generally need to override it, though you may often want to
  use this property to refer to objects in the text of your own game
  code.
- **aName** (single-quoted string) The form of the name with the
  indefinite article (e.g. 'a red ball', 'an orange', 'some ball
  bearings'). Again the library will normally get this right without any
  intervention from game authors, so you shouldn't normally need to
  define this property (though you can if you need to), but you will
  probably want to use it to refer to or describe objects in your game
  code.
- **owner** (list of objects) A list containing the owner or owners of
  the object. This is for resolving possessives in the player's input,
  such as BOB'S WALLET. By default, an object has no explicit owner, so
  this is an empty list. This should only return the *explicit*
  owner(s), not an implied locational owner. For example, if Bob is
  holding a key, it's implicitly BOB'S KEY. However, the key may or may
  not still be Bob's after he drops it. If the key is something that's
  understood to belong to Bob, whether it's currently in his physical
  possession or not, then this list should include Bob. An object can
  have multiple explicit owners, in which case it'll be recognized with
  a possessive qualifier for any of the owners. The first owner in the
  list is the nominal owner, meaning its the one we'll use if we're
  called upon to display the object's name with a possessive phrase.
- **ownsContents** (true or nil) Are we the nominal owner of the objects
  we contain? This controls whether or not we can be chosen as the
  nominal owner of a contained object for display purposes. If a
  contained object has no explicit owner, it can still be implicitly
  owned by an actor carrying it, or by another suitable container. (Note
  that this only applies as a default. When an item in our contents has
  an explicit owner, that will override the implied container ownership
  for that item. So, for example, Bob can be carrying Bill's wallet, and
  as long as the wallet has its explicit owner set, we'll still describe
  it as Bill's despite its location.) By default, most objects are not
  nominal owners. Actors generally should set this to true, so that (for
  example) anything Bob is carrying can be described as Bob's.
  ownsContents is thus nil by default on Thing but true by default on
  Actor.
- **ownerNamed** (true or nil) if this is true then the theName (but not
  the aName) property of this object will be followed by its name
  preceded by the possessive form of its owner's name, e.g. "Bob's
  wallet" or "Jane's mouth". This may be particularly useful in defining
  body parts, but is potentially useful in any situation where an object
  has a specific owner (and can in any case be referred to as "Bob's
  wallet" or "Jane's mouth" by the player) and we want to include the
  name of the owner when referring to the specific object in game
  output, e.g. "You take Bob's wallet" (it was lying on the table) but
  "Bob is carrying a wallet".
- **abcName(action, role)**: Announce Best Choice name. This can be used
  in those rare cases where you want to override the name the parser
  uses to describe an object when announcing its best choice of object.
  For example, if you have a bottle of wine from which you can fill a
  glass, you might prefer '(with wine from the bottle)' to '(with the
  bottle of wine)' following FILL GLASS; *action* is the action being
  carried out for which the object has been chosen and *role*
  (DirectObject or IndirectObject) is the role the chosen object is
  playing in the action. By default this method just returns theName.
- **matchName(toks)** (method returning an integer) Normally the parser
  will match this object if the player's command refers to it with one
  or more words defined in this object's vocab object, regardless of the
  order in which the words appear, but preferring nouns to adjectives.
  In most cases this will be absolutely fine, but if you should want to
  enforce some other way of matching the name of this object (for
  example, because the precise order of words is important or you want
  to match a particular phrase), then this is method to override on that
  particular object. For details, see the comments on
  Mentionable.matchName() in thing.t. In brief, if you want to signal
  that a particular set of tokens represents a good match as a noun
  phrase, your custom matchName(toks) nethod should return (MatchNoTrunc
  \| MatchNoApprox \| MatchNoun); return 0 to indicate that there's no
  match.
- <span id="filter"></span>**filterResolveList(np, cmd, mode)** (method
  returning nothing) Allows a Thing (or Topic) to filter itself or other
  objects out of the list of possible matches while the parser is in the
  process of selecting the object or objects to which a command refers.
  The list of matches under consideration is given in
  `np.matches`, so this would be the list to
  manipulate (the actual objects are found in the obj property of each
  item in the matches list). The `cmd` parameter
  is the current Command object, so `cmd.action`
  would give the action about to be performed. The
  `mode` parameter refers to the type of match
  being sought, and can be one of `Definite`
  (the command ask for a specific object or objects, such as TAKE THE
  RED BALL), `Indefinite` (the command asks for
  a non-specific object, such as TAKE A BALL) or
  `All` (the command asks for all objects
  meeting a specification such as TAKE ALL or TAKE BALLS). For a fuller
  explanation see [below](#filterresolve).

<span id="otherthingprops"></span>

The other basic properties of Thing you will commonly use are:

- **isFixed** (true or nil) Determines whether this object is portable
  (isFixed = nil) or fixed in place (isFixed = true).
- **isListed** (true or nil) Determines whether this object is listed in
  a room description. By default this is true for portable objects and
  nil if isFixed = true. For a fuller account of properties that control
  what's listed when see under the section on [Room
  Descriptions](roomdesc.html#whatlisted).
- **specialDesc** (double-quoted string) If this property is defined
  (i.e. non-nil) then it will be shown as a separate paragraph in a room
  listing (regardless of the value of isListed). If used, this property
  should be defined as a double-quoted string.
- **initSpecialDesc** (double-quoted string) Like specialDesc, a
  double-quoted string defined on initSpecialDesc will be shown as a
  separate paragraph in a room listing, but only until the object has
  been moved (i.e. until the moved property becomes true).
- **moved** (true or nil) Becomes true when the object has been moved as
  a direct result of a player command such as TAKE, DROP or PUT IN. Note
  that using moveInto(loc) to move an object does *not* change the value
  of this property; it is set automatically only by actionMoveInto(loc).
- **examined** (true or nil) Becomes true when this object has been
  examined (NB this is equivalent to the described property in the adv3
  library).
- **opened** (true or nil) Becomes true when this object has been opened
  (via the makeOpen()) method; note that if an object starts out open
  its `opened` property won't become true unless
  and until it's closed and opened again.
- **desc** (double-quoted string) The description of this object
  displayed in response to an EXAMINE command. This should be defined as
  a double-quoted string (or a method that displays some text) and is
  normally defined via the Thing template (as in the redBall example
  above).
- **stateDesc** (single-quoted string) This is a single-quoted string
  that can be used to display additional information (in response to an
  EXAMINE command) about an object that can change its state (e.g.
  become open or closed, or switched on and off). By default this is
  simply a null string on Thing, so it's up to game authors to define
  any state-specific information they want here.
- **seen** (true or nil) Becomes true when the object has been seen by
  the player character (the library should track this automatically, but
  there may be occasions when you need to set this manually, for example
  when moving an object into scope using the
  `moveInto()` method).
- **familiar** (true or nil) This determines whether the player
  character knows of the existence of this object even if s/he has not
  yet seen it. This is relevant to whether the object can be referred to
  in Topic-related actions such as THINK ABOUT MAGIC ORB, LOOK UP ORB IN
  DICTIONARY OF MAGIC or ASK WIZARD ABOUT MAGIC ORB. Set this property
  to true for objects the player char is meant to know about at the
  start of the game, or use the gSetKnown(obj) macro to set it to true
  for objects the player character learns about during the course of the
  game.
- **known** (true or nil) Use this property to test whether the player
  character knows of the existence of this object. This property
  evaluates to true if either seen is true or familiar is true.
- **lastSeenAt** (object - usually a Room) The location where the player
  character last saw this object. Normally the library should keep track
  of this, but if for any reason you need to track it manually, call the
  noteSeen() method on the object in question.
- **globalParamName** (single-quoted string) A string tag used to refer
  to this object in a [message substitution
  parameter](message.html#parameter).
- **getFacets** (list of objects) A list of Things that are facets of
  this Thing, for example the object representing the other side of the
  same door (the only case handled automatically by the library). The
  only effect is that if this object is set as a possible antecedent for
  a pronoun, then its facets are also set as possible antecdents for the
  same pronoun (so that, for example, a player can type OPEN DOOR, GO
  THROUGH DOOR and then X IT and the parser will recognize that IT now
  refers to the other side of the same door).
- **isVehicle** (true or nil) If true makes a Thing act as a vehicle; if
  the player issues a travel command while the player character is in
  (or on) an object for which isVehicle is true, then that object will
  travel with the player character in (or on) it.
- **getOutToJump** (true or nil): Flag, should an actor in/on me
  (assuming I'm a nested room) get out of me before executing an
  instransitive JUMP action? By default this is true.

Note that the account of `known`,
`seen` and `familiar`
given above is slightly simplified. If you wish, you can define seenProp
and knownProp just as in the adv3 library in order to distinguish player
character knowledge from that of other actors. If you do so, make sure
that you set and test the seen property through setHasSeen(obj),
setSeen(), hasSeen(obj), and the known and familiar properties through
setKnowsAbout(obj), setKnown(), and knowsAbout(obj). The setSeen() and
setKnown() methods would be called on the object that has just been seen
or become familiar (and would make them seen by or known to the player
character). The other methods would be called on the actor who has just
seen or learned about the object in question. For a fuller explanation
of this and the knowledge model in general see the chapter on [Player
Character and NPC Knowledge](knowledge.html).

  
<span id="filterresolve"></span>

### filterResolveList()

The `filterResolveList()` method probably needs
a bit more explanation (although you can probably skip this first time
through, since it's not often you'll need to use it). It's occasionally
useful for an object to rule itself or other objects out of selection
when the parser is choosing an object (or objects) to match the command
entered by the player. In the course of making the selection the parser
runs the `selectObjects()`method on the
NounPhrase object it's created to represent the noun phrase entered as
part of the player's command (e.g. 'the blue ball'). We don't need to
worry too much about this, except to note (a) that the selectObjects()
routine calls `filterResolveList(np, cmd, mode`)
on all the objects the parser is considering as possible matches and (b)
that the NounPhrase parameter is passed as the *np* parameter. This
NounPhrase object passed as the *np* parameter has at least three useful
properties:

- **role** either DirectObject or IndirectObject; the role (direct or
  indirect object) the noun phrase is being considered for.
- **tokens** a list of the tokens (e.g. `\['blue',
  'ball'\]`) being matched by this noun phrase.
- **matches** a list of the NPMatch objects being considered as possible
  matches.

In turn the NPMatch objects have a number of properties, of which the
most relevant is **obj**, the actual simulation object (Thing) being
matched. So, for example, from within a filterResolveList() method, the
first game simulation object being considered for a match would be
`np.matches\[1\].obj`.

Suppose, for example, we wanted an object to rule itself out of being
matched. We could do this by making it adjust the
`np.matches` list to remove the NPMatch object
corresponding to itself:

```
    filterResolveList(np, cmd, mode)
    {
       np.matches = np.matches.subset({m: m.obj != self});
    }
```

Here we change the `np.matches` list to a subset
of that list that contains everything except the NPMatch corresponding
to the `self` object; in other words we remove
`self` from the
`np.matches` list. Remember that np.matches
doesn't directly contain a list of Things, but rather a list of NPMatch
objects whose `obj` property actually contains
the matching Thing.

You may wonder why we'd want an object to rule itself out like this.
There's probably no case in which we'd want to do it unconditionally, as
in the simple example above, but we might want to do it conditionally.
For example, the [Unthing](extra.html#unthing) class, which we'll meet
later, represents the absence of something. We only ever want to match
an Unthing if nothing else in scope will match, so we want the
filterResolveList() method of an Unthing to rule itself out if there are
any other matches:

```
    class Unthing: Decoration
        ...
        filterResolveList(np, cmd, mode)
        {
            if(np.matches.length > 1)
                np.matches = np.matches.subset({m: m.obj != self});
        }
    ;    
```

In other situations we may want to filter according to what action is
being considered and/or what role (direct object or indirect object) the
potential matches are being considered for. The cmd and np parameters
can give us both pieces of information:
`cmd.action` gives us the proposed action and
`np.role` the proposed role (DirectObject or
IndirectObject)..

## <span id="containment">Containment Properties</span>

### The Containment Model

The adv3Lite containment model is basically the same as that used by
adv3. In particular an object can 'contain' a number of other objects,
but only (with one or two exceptions to be noted below) via one
containment type (e.g. In, On, Under or Behind). The initial location of
an object is therefore the object that immediately contains it (either
another Thing or a Room). As in the adv3 library you set the initial
location of an object by specifying its location property, either
directly, or through the template with an @ sign, or by using the +
syntax to indicate the containment hierarchy. The three following
definitions are thus equivalent:

```
    hall: Room 'Hall'
    ;

    box: Thing 'box'
      contType = In
      location = hall
    ;

    redBall: Thing 'red ball;bouncy rubber; sphere'
       "It's very bouncy, and appears to be made of rubber. "
       location = box
    ;
```

Means exactly the same as:

```
    hall: Room 'Hall'
    ;

    box: Thing 'box' @hall
      contType = In  
    ;

    redBall: Thing 'red ball;bouncy rubber; sphere' @box
       "It's very bouncy, and appears to be made of rubber. "  
    ;
```

Which means exactly the same as:

```
    hall: Room 'Hall'
    ;

    + box: Thing 'box'
      contType = In 
    ;

    ++ redBall: Thing 'red ball;bouncy rubber; sphere'
       "It's very bouncy, and appears to be made of rubber. "   
    ;
```

The + syntax can be used to nest containment up to any desired depth.

Note that while you need to use one of these methods to set the initial
location of an object, you should not (normally) change the location
property of an object in game code thereafter. To move an object around
under programmatic control, use either the moveInto(loc) or
actionMoveInto(loc) methods. The difference between the two is that
moveInto(loc) simply moves the object into a new location and adjusts
the contents properties of the old and new locations accordingly,
without triggering any notifications. It is the method you will
typically want to use to move things about by authorial fiat. The
actionMoveInto(loc) method additionally triggers the notifyRemove(obj)
and notifyInsert(obj) on the old and new locations respectively and sets
the object's moved property to true. This is the method you would
typically use to move an object in direct response to a player command
that explicitly requests the object to be moved (such as TAKE or DROP).
Note that in this case the notifyInsert(obj) and/or notifyRemove(obj)
method can prevent the movement via use of the exit macro if for some
reason it should not go ahead.

As in the adv3 library it is perfectly legal to move an object into nil
to move it off-stage, or to leave its initial location as nil if it is
meant to start out off-stage.

<span id="defining_containment"></span>

### Defining containment type with the contType property

The type of containment an object implements is defined by its
**contType** property. This can be one of:

- **Outside** (the default): any contents of the object are effectively
  external components.
- **In** The contents of the object are regarded as being inside it
  (equivalent to an adv3 Container). If you define contType = In you may
  also want to define isOpen = true to ensure that the contents are
  accessible.
- **On** The contents of the object are regarded as being on top of it
  (equivalent to an adv3 Surface)
- **Under** The contents of the object are regarded as being underneath
  it (equivalent to an adv3 Underside)
- **Behind** The contents of the object are regarded as being behind if
  (equivalent to an adv3 RearContainer)
- **Carrier** The portable contents of the object are regarded as being
  carried by it (this is the contType to use for the player character
  and any other actors).

If you look at the code in thing.t you'll note that the libary defines
several other containment types (LocType objects) including Held, Worn,
PartOf and Attached. At the moment none of these actually does anything;
they'll either be removed or implemented in a later version of the
library; you should certainly not attempt to use them as contTypes for
for now. That said, there is also a **locType** method which returns an
object's containment relation to its immediate container. Usually this
is the same as its container's contType, but for objects that are being
carried or worn it is either Held or Worn respectively; so although you
should never *set* any property to either Held or Worn, you can test
whether an object's locType is either Held or Worn.

If you prefer to use adv-style classes (Container, Supporter etc.) to
define containment types you can, provided extras.t is included in your
build. Note that just about all these classes do is define the relevant
contType property you would otherwise define on Thing (the Container
class also defines isOpen = true). Using these adv3-type classes may
nevertheless help to make your code more readable, and may be useful in
situations where it's useful to test the class of an object. Which way
you do it is up to you.

### <span id="hidden">The hiddenUnder, hiddenBehind and hiddenIn Properties</span>

Often the only (or main) reason to place objects under or behind
something in Interactive Fiction is to hide them from view until the
player explicitly looks for them (with LOOK UNDER or LOOK BEHIND) or
incidentally reveals them by moving the object they were previously
concealed under or behind. To handle this common situation Thing
provided three properties, **hiddenIn**, **hiddenUnder** and
**hiddenBehind**, that can be used for this purpose without having to
make the object an In, Under or Behind type container. To use hiddenIn,
hiddenUnder or hiddenBehind, simply define one of these properties as a
list of objects hidden in, under or behind the object in question. Then,
when the player looks in, under or behind the object (or moves it by
taking it, for example), the hidden items will be revealed and either
moved into the object's location (or former location, if it has just
been moved) or automatically taken by the player character. For example,
to hide a gold coin and a silver key under a rug, you could define the
rug thus:

```
    rug: Thing 'persian rug; old worn'
       "The old rug has seen better days; it's now rather worn. "
       hiddenUnder = [goldCoin, silverKey]
    ;
```

Note that in this case the location property of the goldCoin and the
silverKey should be left at nil at the start of the game. Objects listed
in a hiddenIn, hiddenUnder or hiddenBehind property are effectively
off-stage until they are discovered.

These properties become perhaps even more useful when used in
conjunction with an object that has another principal containment type.
Suppose, for example, that the rug was something the player character
could stand on, so that we wanted to make it a Platform (or define
contType = On and isEnterable = true). We could then define it thus,
without having to worry about how to make the rug handle multiple kinds
of containment:

```
    rug: Platform 'persian rug; old worn'
       "The old rug has seen better days; it's now rather worn. "
       hiddenUnder = [goldCoin, silverKey]
    ;
```

<span id="canput"></span>

Three further related properties are **canPutInMe**, **canPutBehindMe**
and **canPutUnderMe**, which are by default are true if the object in
question has the appropriate contType and nil otherwise. If they are
true, then the player will be allowed to PUT something IN, BEHIND or
UNDER this object. If the object has the appropriate contType (In,
Behind or Under respectively) then the item in question will be moved
into the object (its location will be set to the object and it will be
added to the object's contents list). If not, the item in question will
be moved into nil (i.e. off-stage) and the item will be added to the
hiddenIn, hiddenBehind or hiddenUnder property list as appropriate.
(Note: hiddenIn might be used for something concealed in an object like
a pile of junk or a haystack that isn't a container in the normal sense,
but semi acts as one for this kind of purpose). Note that there is no
canPutOnMe property, since the hiddenOn property that would then be
needed wouldn't make much sense, and it wouldn't make any sense to allow
game authors to override the rule that items can be put on an object if
and only if its contType is On.

It's also possible to control how much can be placed in hiddenIn,
hiddenUnder and hiddenBehind lists through player commands with the
properties, **maxBulkHiddenIn**, **maxBulkHiddenUnder** and
**maxBulkHiddenBehind** that limit the amount that can be but in, under
or behind an object that ends up in hiddenIn, hiddenUnder or
hiddenBehind list. The corresponding methods
`getBulkHiddenIn`,
`getBulkHiddenUnder` and
`getBulkHiddenBehind` return the total bulk of
the items currently contained in the corresponding lists.

One potential problem with the hiddenUnder and hiddenBehind properties
is where the objects they contain should end up when the player
character looks under or behind the objects that notionally conceal
them. If the concealing object has the appropriate contType (Under or
Behind respectively), then the previously concealed objects can just be
moved to the concealing object. Otherwise the default behaviour depends
on whether or not the concealing object is fixed or portable. If the
concealing object is fixed (which probably means it's a piece of
furniture like a bed or a cabinet), then the default behaviour is for
the player character to take the objects that have just discovered
in/under/behind it (since there isn't anywhere else obvious for them to
go). If the concealing object is portable then the default behaviour is
to move the newly discovered objects into the concealing object's
location so that they become available to the player character to
interact with; the idea is that if you look under a rug or a blanket,
say, you do so by lifting a corner of the rug or blanket or shifting it
a little, leaving the newly discovered item where it notionally was all
along (in the same location as the concealing object).

If you want something concealed in, under or behind another object to
remain in, under or behind that object when it's discovered, then you
need to define the concealing object as having the appropriate contType
(In, Under or Behind as the case may be). If the concealing object also
needs to be something you can put things on, then you'll need to use the
Complex Containment features described immediately below.

To give a more complete technical description: Tne
**autoTakeOnFindHidden** property determines whether an object may be
automatically taken when it's moved from a hiddenIn, hiddenUnder or
hiddenBehind list. The default value of autoTakeOnFindHidden is
(isFixed), the idea being that if we look in, under, or behind something
fixed (like a pile of junk or a piece of furniture) and there's nowhere
else for the objects discovered to go, we'll probably take them, but
that if we look under or behind something portable, like a rug or a
blanket, we probably move the rug or blanket a little to do so and leave
the item discovered where it notionally was all along (in the same
location as the portable item we've just looked under/behind). The
property **findHiddenDest** determines where an object is moved to from
a hiddenXXXX list (when there's no obvious container for it); by default
if autoTakeOnFindHidden is true, then findHiddenDest is gActor (the
actor who will take the items discovered), otherwise it's the location
of the object that's just been looked in/under/behind. These properties
are actually used in the three methods **findHiddenIn()**,
**findHiddenUnder()**, and **findHiddenBehind()**.

The sequence of events with LOOK UNDER X is as follows:

1.  If X has a contType of Under then this is the target object we'll
    work with.
2.  Otherwise, if it has an associated remapUnder object, we'll work
    with that.
3.  If the target object has a contType of Under then move everything
    from the hiddenUnder list to the target object and then list the
    contents of the target object as being underneath it (or say there's
    nothing under it if there's nothing there).
4.  Otherwise, if there's anything in the hiddenUnder list, call
    findHiddenUnder().
5.  Otherwise, say there's nothing there.

The findHiddenUnder() method then moves everything from the hiddenUnder
list to findHiddenDest and displays an appropriate message.

LOOK IN X and LOOK BEHIND X work in much the same way (except with
hiddenIn and hiddenBehind respectively and contTypes of In and Behind
respectively).

This may all seem a bit complicated, but it should provide reasonable
default behaviour most of the time, while being relatively easy to
customize for exceptional cases.

### <span id="remapxxx">The remapXXX properties and Multiple Containment</span>

It sometimes occurs that we want one object to act as the container (or
surface, underside, or rear) for another. A typical case would be a desk
with a drawer, where we want certain commands directed to the desk, such
as LOOK IN, PUT IN, OPEN, CLOSE, LOCK and UNLOCK to be redirected to the
drawer. To that end we can use one or more of the following remapXXX
properties (each of which should contain either an object or nil):

- **remapIn** Redirect LOOK IN, PUT IN, OPEN, CLOSE, LOCK, LOCK WITH,
  UNLOCK and UNLOCK WITH to this object.
- **remapOn** Redirect PUT ON to this object.
- **remapUnder** Redirect PUT UNDER and LOOK UNDER to this object.
- **remapBehind** Redirect PUT BEHIND and LOOK BEHIND to this object.

The remapXXX properties can be used in conjuction with the
**SubComponent** class to define the equivalent of an adv3
ComplexContainer. For example, suppose we want to define an oven (or
stove) the player character can put things in or on. We could do it like
this:

```
    cooker: Thing 'cooker;blackened;oven stove top'
        "Normally, you keep it in pretty good shape (or your cleaner does) but right
        now it's looking suspiciously blackened, especially round the top. "    
        
        isFixed = true
            
        remapIn: SubComponent  {   isOpenable = true   }
        remapOn: SubComponent  {  }
    ;
```

Note that there's no need to define the contType property on these
SubComponents, since the library can deduce what it should be from the
remapXXX properties to which they're attached. In this case the only
additional property we needed to define was
`isOpenable = true` on the remapIn SubComponent,
to make the cooker openable.

If we want an object to start off inside or on top of (or under or
behind) a Thing with remapXXXX SubComponents, we do it in the same
manner as in the adv3 library, i.e. by defining the contained objects
subLocation property. Thus, for example, if there's a pan on top of the
stove we'd define it thus:

```
    cooker: Thing 'cooker;blackened;oven stove top'
        "Normally, you keep it in pretty good shape (or your cleaner does) but right
        now it's looking suspiciously blackened, especially round the top. "    
        
        isFixed = true
            
        remapIn: SubComponent  {   isOpenable = true   }
        remapOn: SubComponent  {  }
    ;

    + saucepan: Thing 'saucepan;;pan'
        "It's absolutely blackened. It was obviously left on the stove too long --
        perhaps that's what started the fire. "
       
        subLocation = &remapOn
    ;
```

### <span id="bulk">Bulk and BulkCapacity</span>

Since it's generally unrealistic to allow the player to put several
large rocks into a small purse (for example), many games will want some
kind of way of restricting what can be put in (or on, or under or
behind) what. As in the adv3 library the principal means of doing this
is via the **bulk** and **bulkCapacity** properties (along with the
**maxSingleBulk** property, which by default is set to the bulkCapacity
but which can be set to a lower value if required - note all three
properties are integers). One object (A) can only be placed inside
another's (B) if A's bulk is less than or equal to B's maxSingleBulk and
if the sum of A's bulk and that of B's existing contents is less than or
equal to B's bulkCapacity (in other words, if B has enough room left to
accommodate A's bulk). Similarly, the player character cannot pick up
another object if that object's bulk is greater than the player
character's maxSingleBulk or if picking up the object would take the
player character's total carried bulk over its bulkCapacity.

By default, everything has a bulk of 0 and a bulkCapacity of 10000, so
by default the adv3Lite library effectively imposes no limits on
carrying capacity. It is up to game authors to define bulk and
bulkCapacity properties in ways that make sense in their games, which
will in part depend on how finely granulated they wish the measure of
bulk to be (in my view, adv3's assignment of a bulk of 10 to actors is
far too coarse-grained, but others may disagree).

Unlike the adv3 library, adv3Lite does not define a weight property and
does not attempt to keep track of the total weight carried or contained.
For most games, tracking bulk is usually sufficient.

<span id="containmentprops"></span>

### Containment Properties and Methods

At this point it's worth noting a handful of properties methods that can
be used to check for containment:

- **isIn(obj)** Returns true if this object is directly or indirectly
  contained by obj (i.e. if obj is this object's container, or this
  object's container's container, or this object's container's
  container's container and so on). This method can also be used to test
  whether an object is in a particular [Region](region.html).
- **isOrIsIn(obj)** Returns true if this object either is obj or is
  directly or indirectly contained in obj.
- **isDirectlyIn(obj)** Returns true is obj is this object's immediate
  container (i.e. location == obj).
- **getOutermostRoom** Returns the room this object is in (even if this
  object is contained within an object inside the room).
- **contents** The list of all the things that are directly contained by
  the object.
- **listableContents** The subset of contents for which lookListed is
  true (i.e. the contents that would be listed via a LOOK command).
- **allContents** A list of everything directly or indirectly within
  this object (i.e. its contents plus its contents' contents and so on).
- **dropItemsBehind**. If this is true (the default) then any items
  notionally behind this object will be left behind when the object is
  moved; if it is nil items behind the object will be moved with it.
- **dropItemsUnder**. If this is true (the default) then any items
  notionally under this object will be left behind when the object is
  moved; if it is nil items under the object will be moved with it.
- **stagingLocation** and **exitLocation**: The first of these is the
  location an actor must be in to enter/board this object (if it is
  enterable/boardable) just before doing so. The second (exitLocation)
  is where an actor leaving this object (by getting out/off) will end
  up. By default the stagingLocation is defined to be the same as the
  exitLocation, which in turn is either simply the location, or the
  location of the lexicalParent (if there is one).

<span id="reaching"></span>

### Reaching In and Out

The method **checkReach(actor)** can be used to make an object
inaccessible to an actor, for reasons other than being in a closed
container. The `checkReach()` method can, for
example, be used to model an object that's too hot too touch or else out
of reach on a high shelf. The library considers an object to be
untouchable by *actor* if its
`checkReach(actor)` method displays anything.
Note, this only takes effect if the touchObj precondition is defined for
the action on the object in question.

If an object is put out of reach by checkReach(actor) then the default
behaviour is to put its contents out of reach as well. This is
controlled by the method **checkReachIn(actor, target?)**, which, by
default, simply calls `checkReach(actor)`. The
contents of the object are considered out of reach if its
`checkReachIn()` method dislays anything at all.
The optional *target* parameter is the object that actor is actually
trying to reach, but note that this parameter is always supplied when
`checkReachIn()` is called via
`Q.canReach()` or via the
`touchObj` precondition (in other words, the
*target* parameter will always be supplied when
`chechReachIn()` is called by other library
code, which is likely to be the most common situation).

If an object has `contType = In` and
`isEnterable = true` then an actor can get in
it.

If an object has `contType = On` and
`isBoardable = true` then an actor can get on
it.

In either case you may want to control what happens when an actor who is
inside/on top of an object (e.g. while the actor is on a bed or chair)
tries to reach an object elsewhere in the room.

For this purpose you can use **allowReachOut(obj)** and
**autoGetOutToReach**. These properties should be defined on the object
the actor is in/on. If `allowReachOut(obj)`
returns true for the obj the actor is trying to reach (the default),
then reaching is allowed. Otherwise, if
`autoGetOutToReach` is true (the default) the
actor will try to get out of his/her immediate container to reach the
object. Otherwise (if `autoGetOutToReach` is
nil) reaching is prohibited and a message is displayed saying that the
actor can't reach the target object from his/her present location.

The property **dropLocation** defines where an item dropped by an actor
immediately within an object should land. The default value of
dropLocation is self.

## <span id="behaviour">Behavioural Properties</span>

In addition to the various properties described above, an adv3Lite Thing
has a number of properties that affect the way it behaves (which in the
adv3 library would be implemented by defining various subclasses of
Thing). The principal ones are:

- **isOpenable** If true this object can be open and closed via the OPEN
  and CLOSE commands, and referred to as 'open' or 'closed' as
  appropriate.

- **isSwitchable** If true this object can be switched on and off via
  the SWITCH ON and SWITCH OFF commands.

- **isWearable** If true this object can be worn and taken off by the
  player character (or another actor) via the WEAR and DOFF commands.

- **isBoardable** If true then the player character can get on this
  object, provided its contType property is On (make sure you remember
  to define an appropriate contType for the object if you set
  isBoardable to true).

- **isEnterable** If true then the player character can get in this
  object, provided its contType property is In (make sure you remember
  to define an appropriate contType for the object if you set
  isBoardable to true).

- **isLightable** If true this object can be lit and unlit via the LIGHT
  and EXTINGUISH commands and referred to as 'lit' or 'unlit' as
  appropriate.

- **isEdible** If true this object can be eated, via an EAT command.

- **isDecoration** If true, this object behaves like an adv3 Decoration
  (i.e. it responds to every command except EXAMINE with 'The whatever
  is not important. '). This will be explained in a bit more detail
  below.

- **lockability** This must be one of
  `notLockable` (the default),
  `lockableWithoutKey` (which means that the
  object can be locked or unlocked via a simple LOCK or UNLOCK command),
  `lockableWithKey` (which means that the object
  can be locked or unlocked with the aid of the appropriate key or keys,
  on which see on [Key](key.html) below) or
  `indirectLockable`, which means that the
  object can be locked and unlocked by some other means (e.g. by
  pressing a button or pulling a lever or entering the appropriate
  combination on a keypad). Note that if you define a non-nil
  [keyList](key.html#keylist) property on an object, its default
  lockability will be lockableWithKey and it will start out locked

- **autoUnlock** (nil by default) can be used to make the actor attempt
  to unlock a locked item (door or container) before attempting to open
  it, provided unlocking is straightforwardly possible (in other words
  it adds the [objUnlocked](actres.html#preconds)
  [Precondition](actres.html#precond) to the opening action).

Note that since these are all defined as properties of Thing, they could
in principle be changed at run time. There may be instances where this
makes sense (e.g. when something is broken or repaired) but needs to be
done with caution to avoid illogical or chaotic consequences. On the
positive side, it allows these behavioural properties to be mixed and
matched without having to employ multiple classes; for example a
lifejacket that can be switched on to activate a distress becon can
simply be defined with isWearable = true and isSwitchable = true.

A number of these behavioural properties imply the use of corresponding
state properties (and in some cases, state-switching methods), in
particular:

- **isOpen** The object is open if this is true and closed otherwise. If
  you define a straightforward Container (contType = In) that isn't
  openable, you'll probably want to define isOpen = true to make its
  contents accessible. Use `isOpen` to determine
  whether something is open or closed, and to define whether it starts
  out open or closed, but use `makeOpen(true)`
  and `makeOpen(nil)` to open and close an
  object programmatically during the course of a game. This ensures that
  the side effects of opening and closing (e.g. opening and closing the
  other side of a door) are properly dealt with.
- **isLocked** The object is locked if this is true and unlocked
  otherwise. Use `isLocked` to determine whether
  something is locked or unlocked, and to define whether it starts out
  locked or unlocked, but use `makeLocked(true)`
  and `makeLocked(nil)` to lock and unlock an
  object programmatically during the course of a game. This ensures that
  the side effects of locking and unlocking (e.g. locking and unlocking
  the other side of a door) are properly catered for.
- **isOn** If true the object is switched on, otherwise it is switched
  off. Use isOn to check the on-off state and to set its initial value,
  but `makeOn(true)` and
  `makeOn(nil)` to switch it on and off
  programmatically during the course of the game.
- **isLit** If true this object is lit (i.e. it provides sufficient
  light to make everything in scope visible). Use isLit to check the
  lit-unlit state and to set its initial value, but
  `makeLit(true)` and
  `makeLit(nil)` to make it lit or unlit during
  the course of the game.
- **wornBy** If this is nil the object is not currently being worn. If
  it is not nil it should be set to the identity of the actor (or player
  character) who's currently wearing the object. Normally the library
  keeps track of this property automatically when the player issues WEAR
  and DOFF commands, but you may want to define the wornBy property of
  an object that starts out being worn by someone at the beginning of
  the game.

The properties associated with isDecoration require a slightly fuller
explanation. The default behaviour of the library is to display the
notImportantMsg of an object defined as a Decoration (i.e. for which
isDecoration = true) for every action except Examine. By default the
notImportantMsg is simply 'The whatever is not important.', but you can
override this on individual objects (or modify Thing) to make it say
something else. You can also change the actions which will be carried
out on a decoration (rather than simply triggering the notImportantMsg)
by overriding the object's decorationActions, which should be set to the
list of actions you want to allow. For example, extras.t defines a
simple Odor class to represent something that can be smelled as well as
examined:

```
    class Odor: Thing
        isDecoration = true
        decorationActions = [Examine, SmellSomething]
        notImportantMsg = BMsg(only smell, '{I} {can\'t} do that to a smell. ')
        dobjFor(SmellSomething) asDobjFor(Examine)    
    ;
```

Note that if you need additional behavioural or state properties you can
always modify or subclass Thing to define them (or define them on the
specific object that needs it them). For an explanation of BMsg() see
the section on [Messages](message.html#dmsg).

The "behavioural" properties listed above are only a subset of the ones
the adv3Lite library defines. For most (though not quite all) actions
the library defines an isXXXable property to determine whether the
object is a possible (or 'logical') target of an XXX action (e.g.
isLightable, isPushable, isBurnable). For most of the actions that take
two objects (e.g. CLEAN WITH, THROW AT) the library also defines
corresponding canXXXme properties (e.g. canCleanWithMe, canThrowAtMe)
which determine whether the object is a plausible indirect object of the
command in question (e.g. something I can use to clean other things
with, or something that can have other things thrown at it). In slightly
more technical language, these properties define how the various
[verify](actres.html#verify) methods behave.

Note that changing these other behavioural properties to true doesn't
necessarily make the corresponding action work, in most cases it merely
allows the action to proceed to the next stage. It's up to authors' game
code to define what happens when something is dug or cut or fastened or
whatever, since in general the library can't know how you want these
things to work in your game.

### <span id="posture">Pseudo-Postural Properties</span>

The adv3Lite library makes no attempt to track any actor's posture
(unless you use the [postures](../../extensions/docs/postures.html)
extension), so for all practical purposes it makes no difference whether
the player character is told to SIT, STAND or LIE on something; the end
result is simply the same as BOARDing it or getting on it. There is
therefore no need for game authors to worry about the difference between
SIT ON, STAND ON, LIE ON or just GET ON.

That said, from a player perspective, some of these commands may seem
more natural with some objects than others. For example, it may seem
more natural to sit on a chair, lie on a bed, or stand on a stage.
Indeed, allowing the player to lie on a small stool may even seem a bit
odd. For that reason, if game authors so wish, they can control which
posture-specific commands will work with which objects. In particular
the properties **canSitOnMe**, **canStandOnMe** and **canLieOnMe** can
be used to control whether or not a SIT ON, STAND ON or LIE ON command
will work with the object in question (so that, for example, if you
wanted to you could allow the player character to sit or stand on the
stool, but not to lie on it). By default, all three of these properties
take their value from `isBoardable`, so that if
you just want it possible for the player character to get on something
without being fussy about the command used to do, you can just set
`isBoardable = true` and forget about these
other three properties.

If, on the other hand, you want even finer-grained control you can
exercise it through the properties **sitOnScore**, **standOnScore** and
**lieOnScore**, each of which has a default value of 100. These only
take effect if the corresponding `canSitOnMe`,
`canStandOnMe` and/or
`canLieOnMe` property is true, but can then be
used to determine how suitable an object is for the action in question.
For example, while you can sit or stand on a bed, you'd most naturally
lie on it, so you might give it a lieOnScore of 120, a sitOnScore of 90
and a standOnScore of 70. Conversely you might give an armchair a
sitOnScore of 120 and a standOnScore of 70 (and perhaps a canLieOnMe of
nil); if there were several chairs in a room and one was the player
character's favourite, you might give it a sitOnScore higher than that
of any other object in the room. The only purpose of all this is to
assist the parser's choice of object, so that, for example, SIT ON CHAIR
does not produce a disambiguation question if one chair is meant to be
the player character's favourite. These properties, along with
canXXXOnMe can also assist the parser in choosing a default object if
the player simply types SIT or LIE DOWN.

It should be stressed once more that you don't need to specify any of
this if you don't want to, since the end result of SIT ON X, STAND ON X
or LIE ON X is merely that of GET ON X. In certain circumstances,
though, it may make for a slightly smoother player experience if various
items of furniture are associated with the most appropriate forms of
these otherwise synonymous commands.

Note that it's only possible for an actor to GET ON (i.e. Board)
something, if the object in question (a) has
`isBoardable = true` and (b) has a
`contType = On`. You would normally achieve this
by making the object to be got on of the
`Platform` class. If an object is not boardable
or if it doesn't have a contType of On, defining canSitOnMe,
canStandOnMe or canLieOnMe on that object won't make it possible for an
actor to SIT, STAND or LIE on it. So if you want to make an object an
actor can GET ON, SIT ON, LIE ON and/or STAND ON you should use the
`Platform` class. The purpose of the canSitOnMe,
canStandOnMe and canLieOnMe properties is then to selectively *disallow*
sitting or standing or lying on an object the player can otherwise get
on by setting the corresponding property to nil. You cannot make it
possible for an actor to sit, lie or stand on something s/he couldn't
normally board by overriding any of these properties to true, so there's
seldom any good reason for doing this.

  

## <span id="sensory">Sensory Properties</span>

Thing defines a number of what might broadly be termed sensory
properties:

- **isTransparent** If this is true then we can see through this object.
  This is only relevant on a (closed) container, whose contents we can
  see (but not touch) if it's transparent.
- **visibleInDark** Set this to true for an object that can be seen in
  the dark without providing enough light to see other objects by.
  Examples might include the night sky or stars in an outside dark
  location.
- **inDarkDesc**. If this property is defined then it is displayed
  instead of *any* other description (desc, stateDesc, contents
  information and anything else) if
  `visibleInDark` is true and the location is
  not lit. Note that if inDarkDesc is displayed examined is not set to
  true, since the object is not considered to have been examined
  properly; `inDarkDesc` might typically be used
  to give a vague description of something that can only just be made
  out in the dark. (Note that `inDarkDesc`
  should be distinguished from `darkDesc`, which
  gives the interior description of a dark room or nested room in the
  dark).
- **smellDesc** A double-quoted string that contains the response to
  SMELL obj.
- **listenDesc** A double-quoted string that contains the response to
  LISTEN TO obj.
- **feelDesc** A double-quoted string that contains the response to FEEL
  obj.
- **tasteDesc** A double-quoted string that contains the response to
  TASTE obj.
- **isHidden** A true/nil flag. Setting this flag to true hides the
  object from view (by making it impossible for the player to refer to
  it and ensuring it doesn't appear in any listings)
- **discover()** Calling this method sets
  `isHidden` to nil, unless the method is called
  as `discover(nil)`, in which case isHidden
  will be set to true. The parameter is optional; calling
  `discover()` is equivalent to calling
  `discover(true)`.

This may be a convenient point to note that any double-quoted string
property can alternatively be implemented as a method that displays some
text. This would allow you, for example, to write a method that varied
what listenDesc (or any of the others) displayed according to
circumstances.

A further point to note is that smellDesc and listenDesc are also used
to provide responses to intransitive SMELL and LISTEN commands. In
response to these commands the library displays the smellDesc or
listenDesc of every object in scope (including the Room) for which the
smellDesc or listenDesc is not nil. For this reason it is a good idea to
write your smellDesc and listenDesc descriptions in a manner than
identifies which objects they refer to. It is also *not* a good idea to
use [message substitution parameters](message.html#parameter) like
`{the subj dobj}` in these properties, since if
they are being displayed in response to a intransitive SMELL or LISTEN
command (one without any object specified),
`dobj` will have no meaning. If you need to
generalize such messages to work with more than one object use
`\<\<theName\>\>` or
`\<\<theNameIs\>\>` instead.

You can however override this behaviour with the following two
properties (which are both true by default):

- **isProminentSmell** smellDesc is only displayed in response to an
  intransitive SMELL command if this is true.
- **isProminentNoise** listenDesc is only displayed in response to an
  intransitive LISTEN command if this is true.

## <span id="misc">Miscellaneous Properties</span>

- **readDesc** A double-quoted string (or method) that provides a
  response to READ obj. If this is left as nil a READ command will
  result in a response to the effect that there's no lettering on the
  object. (This is different from the adv3 library which treats READ as
  equivalent to EXAMINE under such circumstances).
- **objInPrep** A single-quoted string containing the preposition
  describing containment within this object (e.g. 'in' or 'on').
  Normally the library takes this from the contType so you don't need to
  worry about it, but if you want things to be described as being
  'inside' rather than 'in' or 'beneath' rather than 'under' a
  particular object you can do so by overriding this property on the
  object in question.
- **listOrder** A number than determines the order in which items are
  listed; the list is sorted in ascending order of this property before
  it is displayed.
- **fluidName** A single-quoted string. If the same object is doing duty
  for both a fluid container and the fluid in contains (e.g. an oilcan
  which you might use as the target of a command to POUR OIL ON HINGES),
  then the fluidName property can be used to supply the name of the
  fluid (e.g. 'oil') to give better library default messages (e.g.
  "You'd best not pour oil there" rather than "You'd best not pour the
  oilcan there"). By default the `fluidName` is
  simply `theName`.
- **hideFromAll(action)** To exclude this item from the list of objects
  to be acted upon when the player types a command with ALL for action,
  override this method to return true for the action or actions
  concerned. Note that this exclusion is applied after the action has
  constructed its own list of objects that ALL should apply to, and can
  only be used to make further exclusions.

If you look at the code in thing.t you'll see that it also defines
listWith and groupOrder properties. These don't actually do anything
(they don't appear anywhere else in the library code). They were defined
in Mercury but, it seems, not implemented. Indeed if you look closely
enough at the library code you'll probably find several other properties
and methods that either don't do anything useful or are redundant
because they duplicate other methods that do much the same thing. This
has come about as a result of combining the Mercury code with the code
I'd developed before coming across Mercury. At some future point I shall
probably do some tidying up, but at the moment I've left things as they
are in case some of the seemingly redundant code actually turns out to
be useful or in case removing it inadvertently breaks something. The
moral of this is that you should not rely overmuch on any properties or
methods not documented in this manual in your own code (unless you're
sure that they are in fact integral to the operation of the library and
thus not likely to change).

  
<span id="pushing"></span>

## Pushing and Pulling Things Around

Occasionally in Interactive Fiction one comes across objects that can be
pushed from place to place (rather than carried), such as a cart or a
trolley. We refer to such items as travel-pushables, meaning that when
they're pushed both they and the actor pushing them may move to a new
location (if travel isn't prevented by some means). To make it possible
to allow an object to be pushed around, define its **canPushTravel**
property to be true. The actions that cause this to happen are called
**push-travel actions** and fall broadly into two categories:

1.  Actions that push the direct object in a particular direction, e.g.
    PUSH TROLLEY NORTH.
2.  Actions that push the direct object in some relation to the indirect
    object, e.g. PUSH TROLLEY THROUGH DOOR or PUSH TROLLEY DOWN SLOPE.

Although the library provides basic reports of the effects of
push-travel, we may often wish to customize these messages. For the
first type of push-travel action (involving a direction) we can
customise the **beforeMovePushable(connector, dir)** method on the
object being pushed. This will be displayed just before the movement
takes place. Here *connector* is the TravelConnector being pushed
through and *dir* (e.g. northDir) is the direction the object is being
pushed in. For the second type (involving an indirect object) we can
override the **describePushTravel(via)** method on the direct object,
where the *via* parameter is the preposition applied to the indirect
object (e.g. `Through` if the command was PUSH
TROLLEY THROUGH DOOR; note this is an object with the programmatic name
of `Through`, not the string 'Through').

For either type of push-travel,
`describeMovePushable(connector, dest)` is
called on the direct object after the actor arrives in the new room to
describe the arrival of the object in its new location (dest) after
being pushed via connector. Again we can override this to provide a more
colourful message than the library default.

If we want to prevent an object being pushed somewhere (e.g., up a
flight of stairs), we can usually do so by testing whether it's been
passed as the *traveler* parameter on the
`canTravelerPass()` method of a
[TravelConnector](travel.html) or
[TravelBarrier](travel.html#travelbarrier) and then returning nil from
that method if it has.

Normally, the library doesn't distinguish between pushing something from
place to place and pulling it (except minimally, in the way the action
is described). PUSH TROLLEY NORTH and PULL TROLLEY NORTH mean exactly
the name thing. You can, however, change this behaviour by setting the
value of **canPullTravel** separately from that of
`canPushTravel` (normally the former takes its
value from the latter). If `canPullTravel` is
true and `canPushTravel` is nil, then the object
can be pulled from place to place but not pushed. Likewise, If
`canPushTravel` is true and
`canPullTravel` is nil, then the object can be
pushed from place to place but not pulled. The same action is being
attempted in either case, but the library decides whether the player
character is attempting to push or pull according to what the player
typed. This is decided via the two properties **matchPushOnly** and
**matchPullOnly**. In the main library these are both simply nil, but in
the language-dependent part of the library (english.t) they are
overridden to be true or nil depending on the first word of the player's
command.

  

## <span id="vocab">The vocab Property in Detail</span>

(Note, the following description is taken mostly from Mike Robert's
comments in the Mercury english.t file, with some modifications to
reflect features modified in adv3Lite):

The vocab string is designed to make it as quick and easy as possible to
define an object's name and vocabulary. To the extent possible, we
derive the vocabulary from the name, so for many objects the whole
definition will just look like the object name. However, we also make it
possible to define as much extra vocabulary beyond the name as needed,
and to control the way the words making up the name are handled in terms
of their parts of speech.

The 'vocab' string has this overall syntax:

```
       
         vocab = 'article short name; adjectives; nouns; pronouns'
```

You don't have to include all of the parts; you can simply stop when
you're done, so it's valid, for example, to just write the 'short name'
part. It's also fine to include an empty part: if you have extra nouns
to list, but no adjectives, you can say 'short name;;nouns'.

The 'article' is optional. This can be one of 'a', 'an', 'some', or
'()'. If it's 'a' or 'an', and this differs from what we'd automatically
generate based on the first word of the short name, we automatically
enter the first word into the list of special cases for a/an words. If
it's 'some', we automatically set massNoun=true for the object. If it's
'()', we set qualified=true ('()' means that the name doesn't take an
article at all).

Note that if you want to use 'a', 'an', 'some', or '()' as the first
word of the actual short name, you simply need to add the desired
article in front of it: 'an a tile from a scrabble set'.

The short name gives name that we display whenever the parser needs to
show the object in a list, an announcement, etc.

If the short name consists entirely of capitalized words (that is, every
word starts with a capital letter), and the 'proper' property isn't
explicitly set for this object, we'll set 'proper' to true to indicate
that this is a proper name. Actually, this seems to happen even when
only the first word is capitalized, as for example 'Persian rug', so in
a case like that it's best to include an article ('a Persian rug') to
ensure that the name isn't treated as a proper name if you don't want it
to be.

We also try to infer the object's vocabulary words from the short name.
We first break off any prepositional phrases, if we see the prepositions
'to', 'of', 'from', 'with', or 'for'. We then assume that the FIRST
phrase is of the form 'adj adj adj... noun' - that is, zero or more
adjectives followed by a noun; and that the SECOND and subsequent
phrases are entirely adjectives. You can override the part-of-speech
inference by putting the actual part of speech immediately after a word
(with no spaces) in square brackets: 'John\[n\] Smith' overrides the
assumption that 'John' is an adjective. Use \[n\] to make a word a noun,
\[adj\] to make it an adjective, \[prep\] to make it a preposition,
\[weak\] to make it a <span id="weaktok-idx">weak token</span> and
\[pl\] to make it a plural. These annotations are stripped out of the
name when it's displayed.

A *weak token* is a word that an object will allow in a match, but is
not sufficient for a match if it appears alone. For example, the vocab
string 'his\[weak\] head' would be matched by 'head' or 'his head' but
not by 'his' alone. You can also specify weak tokens the adv3 way by
enclosing them in parentheses, for example '(his) head'. Which way you
do it makes no difference: the libary simply converts '(his) head' into
'his\[weak\] head' before continuing to process the vocab string.

We consider ALL of the words in the short name's second and subsequent
phrases (the prepositional phrases) to be adjectives, except for the
preposition words themselves, which we consider to be prepositions (and
the weak tokens, which we consider simply to be weak). This is because
these phrases all effectively qualify the main phrase, so we don't
consider them as "important" to the object's name. This helps the parser
be smarter about disambiguation, without bothering the user with
clarifying questions all the time. When the player types "garage", we'll
match the "key to the garage" object as well as the "garage" object, but
if both objects are present, we'll know to choose the garage over the
key because the noun usage is a better match to what the user typed.

We automatically ignore articles (a, an, the, and some) as vocabulary
words when they immediately follow prepositions in the short name. For
example, in 'key to the garage', we omit 'the' as a vocabulary word for
the object because it immediately follows 'to'. We also omit 'to', since
we don't enter the prepositions as vocabulary. We do the complementary
work on parsing, by ignoring these words when we see them in the command
input in the proper positions. These words are really structural parts
of the grammar rather than parts of the object names, so the parser can
do a better job of recognizing noun phrases by considering the
grammatical functions of these words.

For many (if not most) objects, the short name won't be enough to state
all of the vocabulary words you want to recognize for the object in
command input. Trying to cram every possible vocabulary word into the
short name would usually make for an unwieldy display name. Fortunately,
it's easy to add input vocabulary words that aren't displayed in the
name. Just add a semicolon, then the adjectives, then another semicolon,
then the nouns.

Note that there's no section for adding extra prepositions, but you can
still add them. Put the prepositions in the adjective list, and
explicitly annotate each one as a preposition by adding "\[prep\]" at
the end, as in "to\[prep\]".

Next, there's the matter of plurals. For each noun, we'll try to
automatically infer a plural according to the spelling pattern. We also
have a table of common irregular plurals that we'll apply. For irregular
words that aren't in the table, you can override the spelling-based
plural by putting the real plural in braces immediately after the noun,
with no spaces. Start with a hyphen to specify a suffix; otherwise just
write the entire plural word. For example, you could write 'man{men}' or
'child{-ren}' (although these particular irregular plurals are already
in our special-case list, so the custom plurals aren't actually needed
in these cases). You can use plural annotations in the short name as
well as the extra noun list; they'll be removed from the short name when
it's displayed. We don't try to generate a plural for a proper noun (a
noun that starts with a capital letter), but you can provide explicit
plurals.

For words longer than the truncation length in the string comparator,
you can set the word to match exactly by adding '=' as the last
character. This also requires exact character matching, rather than
allowing accented character approximations (e.g., matching 'a' in the
input to 'a-umlaut' in the dictionary).

We automatically assume that plurals should be matched without
truncation. This is because English plurals are usually formed with
suffixes; if the user wants to enter a plural, they'll have to type the
whole word anyway, because that's the only way you make it all the way
to the suffix. You can override this assumption for a given plural by
adding '~' at the end of the plural. This explicitly allows truncated
and character approximation matches.

Finally, the 'pronouns' section gives a list of the pronouns that this
word can match. You can include 'it', 'him', 'her', and 'them' in this
section. We'll automatically set the isIt, isHim, isHer, and plural
properties to true when we see the corresponding pronouns. If you
include both 'them' and 'him', 'her' or 'it' we'll automatically set the
ambiguouslyPlural property to true (so that this object can match both
singular and plural pronouns). If 'them' comes first in the list of
pronouns we'll also set the plural property to true (otherwise it will
be nil).

### <span id="phrase">Phrase Matching</span>

Most of the time the adv3Lite parser doesn't care about the order in
which the player enters words to describe an object. LARGE GREEN BOX,
LARGE BOX GREEN and BOX GREEN LARGE will all do just as well to match
the large green box. Most of the time this flexibility is just what we
want, making it easy to refer to objects whose names don't match the
standard adjective-noun pattern, and most of the time this will work
perfectly well. Very occasionally, however, it may be important that an
object matches only a particular combination of words or only the words
in a certain order. This may be because the solution to a puzzle depends
on the player getting the object name exactly right, or it may because
some object names are such that this is the only way of distinguishing
between them. In such cases we can use the **matchPhrases** property to
place a further restriction on what input a particular object will
match.

For example, suppose we have two green bottles, one called 'green
bottle' and the other called 'dark green bottle'. When both bottles are
present there'd normally be no way of referring to the 'green bottle'
object since anything the player can enter to refer to it could also
refer to the dark green bottle. One way to tackle this problem (the
other would be to give the green bottle a
`vocabLikelihood`) is to define the
`matchPhrases` property on the dark green bottle
so that it will match 'dark green' or 'dark' but not 'green' by itself:

```
    ++ greenBottle: Thing 'green bottle'
        "It's just an ordinary green bottle. "
    ;

    ++ darkGreenBottle: Thing 'dark green bottle'
        "It's a dark green bottle. "
        matchPhrases = ['dark', 'dark green']    
    ;
```

The rule is this: if any of the words in the noun phrase entered by the
player occur in any of the matchPhrases, then one of the matchPhrases
(i.e. that precise sequence of words) must occur somewhere in the noun
phrase for the noun phrase to match. In the example above the
darkGreenBottle will thus be matched by 'dark' or 'dark bottle' or 'dark
green' or 'dark green bottle' but not by 'green' or 'green bottle'. The
noun phrase 'green bottle' will therefore be taken as matching the
`greenBottle` object but not the
`darkGreenBottle` object. (The noun phrase
'bottle' by itself would match both bottles, since the word 'bottle'
does not appear anywhere in the matchPhrases and so is ignored for the
purposes of phrase matching).

Note why we included 'dark' in the list of matchPhrases. If we hadn't,
then neither 'dark' nor 'dark bottle' would have matched the dark green
bottle (despite referring to it unambiguously from the player's point of
view) since the word 'dark' appears in the 'dark green' phrase but the
player's command didn't include the phrase 'dark green'. By including
'dark' as a separate phrase we prevent the lone adjective 'dark' from
being screened out by the phrase 'dark green'.

Note also that the `matchPhrases` property
doesn't add anything to the vocab an object will match; any words that
appear in `matchPhrases` must also appear
somewhere in the object's vocb property or no match will occur. The
function of matchPhrases is simply to *restrict* what words or
combinations of words will apply to the object.

In the foregoing example we used the
`matchPhrases` property to distinguish between
objects where the vocab of one of them was a subset of the vocab of the
other. Another case might be where two objects share precisely the same
vocab words but in a different order, for example a green broad bean and
a broad green bean. We might handle this case thus:

```
    ++ broadGreenBean: Thing 'broad green bean'
        "It's broad and green. "
        matchPhrases = 'broad green'
        matchPhrasesExclude = nil    
    ;

    ++ greenBroadBean: Thing 'green broad bean'
        "It's green and broad. "
        matchPhrases = 'green broad'
        matchPhrasesExclude = nil    
    ;
```

<span id="matchphraseexcludes"></span>

In this example the `matchPhrases` distinguish
between the order in which the words 'broad' and 'green' must appear in
the player's input for the match to occur. Note, incidentally, that if
we only want to specify one phrase we can specify it as a single-quoted
string; in that instance it doesn't have to be a list. Note also the use
of the `matchPhrasesExcludes` property here.

If **matchPhrasesExcludes** is true (the default), then failure to match
one of the phrases in the `matchPhrases`
property will cause the match to fail (as in the dark green bottle
example). If it is nil as here, however, then instead of the
`matchPhrases` property ruling out a match when
it fails to match, it enhances the match when it does match. That means
when only one bean is in scope it can be referred to as 'bean', 'green
bean', 'broad bean' and so forth without any difficultly, but if both
beans are in scope the player will get a disambiguation prompt unless
s/he specifies either the 'broad green' bean or the 'green broad' bean.
(This, incidentally, avoids a potentialy misleading 'You see no green
bean here' response if the player types X GREEN BEAN). Note, however,
that this score-boosting behaviour only applies to the original command;
any disambiguation will still use the exluding behaviour (otherwise
disambiguation would never succeed).

As a rule of thumb, `matchPhrasesExclude = true`
(the default) is the better option when one object's vocab is a subset
of another's (otherwise the player can never refer to the object with
the shorter vocab), while `matchPhrasesExclude =
nil` is the better option when two objects share the same vocab
distiguished by word order (since this relaxes the requirement for a
match when only one of the objects is in scope, and gives the player a
disambiguation prompt instead of a 'You see no...' message in response
to ambiguous input). This does mean, for example, that if the player
character takes the dark green bottle to another location where the
green bottle isn't in scope, a command like X GREEN BOTTLE will be met
with 'You see no green bottle here', but that's arguably the correct
response, since the green bottle whose presence is denied is indeed a
different object from the dark green bottle that is actually present.

As a further refinement you can define the **disambigMatchPhrases**
property to hold a different set of phrases (or none at all) for
disambiguation purposes (i.e. when the player has responded to a a
disambiguation request), but by default
`disambigMatchPhrases` takes its value from
`matchPhrases` and you will seldom, if ever,
need to change this.

Indeed, it's probably quite rare that you will need to use phrase
matching at all, and this facility is best used sparingly. On the whole
it's better to name your objects so you don't need to; but occasionally
it may prove necessary to use a phrase match, especially, perhaps, when
the solution to a puzzle requires the player to use a particular
combination of words in a particular order.

### <span id="inherit">Inheriting vocab</span>

Occasionally you may wish to define a class whose instances or
subclasses inherit part of its vocab property and merge it into their
own, e.g. a Coin class which can be used as the basis of different types
of coin with some common vocabulary.

The vocab property of any Thing class or object checks whether it has
any vocab to merge from any of its superclasses, and does so according
to the following rules:

1.  If the name section (before the first semicolon) of a Thing contains
    a + sign, the inherited name is inserted into the object's name at
    that point.
2.  Unless the adjectives (second) section of a Thing starts with a -
    sign, any adjectives defined in the corresponding section of any of
    its superclasses are added to the adjectives defined on the object.
3.  Unless the nouns (third) section of a Thing starts with a - sign,
    any nouns defined in the corresponding section of any of its
    superclasses are added to the nouns defined on the object.
4.  If the pronouns (fourth) section of a Thing is left undefined, or if
    it includes a + sign, the pronouns defines on any of its
    superclasses are added to the pronouns (or used as the pronouns)
    defined on the object.

For example, suppose we define the following:

```
    class Coin: Thing 'coin; round metal; money; it'
    ;

    goldCoin: Coin 'gold +; small; pound'
    ;

    silverCoin: Coin 'silver +; tiny; -shilling'
    ;
```

The vocab properties of the two coins would end up just as if we had
defined them thus:

```

    goldCoin: Thing 'gold coin; small round metal; pound; it'
    ;

    silverCoin: Thing 'silver coin; tiny round metal; shilling; it'
    ;
```

To a limited extent, we can also use the + sign in the name property to
inherit multiple steps up the class tree, for example:

```
     class Coin: Thing 'coin; round'
     ;
     
     class GoldCoin: Coin 'gold +'
     ;
     
     smallGoldCoin: GoldCoin 'small +'
     ;
     
```

This would give the `smallGoldCoin` object a
vocab property of 'small gold coin; round'.

Note that this kind of use of the + property only works 'vertically',
however. If you defined:

```
     class Coin: Thing 'coin';
     
     class Gold: Thing 'gold';
     
     goldCoin: Gold, Coin '+'; 
     
```

Then the vocab property of goldCoin would end up simply as 'gold', not
'gold coin' or even 'goldcoin', since the + is simply replaced with the
name property of the first superclass found, and no substitutions are
carried out thereafter.

Note also that the + substitution does not insert any additional spaces.
This allows you to create definitions like:

```
    class Light: Decoration 'light' 
       notImportantMsg = 'You can\'t do that with light.'
    ;
      
    moonlight: Light 'moon+';
    sunlight: Light 'sun+';
    torchlight: Light 'torch+';  
     
```

This would result in vocabs (and hence names) of 'moonlight', 'sunlight'
and 'torchlight' respectively.

### <span id="manipulatevocab">Manipulating vocab at run-time</span>

Occasionally the vocabulary that should be used to refer to an object,
or even the object's name, may need to be changed at run-time. For
example, 'the shopkeeper' may become 'Bob' once the player character
learns his name. Adv3lite provides several ways of manipulating
vocabulary and changing names at run-time.

Sometimes it may be sufficient just to change the name. In the Bob case,
for example, you might decide that since the player may know (because
s/he may have played your game before) that the shopkeeper is called
Bob, it would be as well to include 'bob' in the shopkeeper's vocab
string from the outset and just change the shopkeeper's name to 'Bob'
wheh the player character learns it, so that the player who tries to
refer to Bob earlier in the game isn't misleading told that 'You see no
bob here.'

In other cases the built-in **State** mechanism may do what you need.
The English-specific part of the library defines State objects so that
openable objects can be referred to as 'open' or 'closed' according to
their state, and lightable ones as 'lit' or 'unlit'. If you have other
objects that switch between states like this you could define custom
state objects of your own. For example if your game involves one or more
objects that can be wet, damp or dry you could define the following
State objects:

```
    enum wet, damp, dry;

    WetDryDamp: State
       stateProp = &wetness

       adjectives = [[dry, 'dry'], [damp, 'damp'], [wet, 'wet']]
    ;
```

The `WetDryDamp` state will then be applicable
to any object that defines the `wetness`
property, allowing it to be referred to as 'dry', 'damp' or 'wet'
according to its state.

<span id="manipvocabmethods"></span>

Sometimes, though, you may encounter cases which fall outside what the
State mechanism can readily do. For example, if a secret panel slides
open to reveal a passage beyond, you may want both the name and the
vocabulary referring to the panel to change to 'dark passage' once the
panel is open (in fact the `SecretDoor` class
can do this for you, but it does so using one of the mechanisms we're
about to describe). For such purposes the library provides four methods
that can be used to adjust the vocabulary (and possibly the name) of an
object at run-time: **addVocabWord(word, matchFlags**),
**removeVocabWord(word, matchFlags?)**, **addVocab(voc)** and
**replaceVocab(voc)**.

**addVocabWord(word, matchFlags**) adds *word* (given as a single-quoted
string) to the words that can be used to refer to the object as the part
of speech defined by *matchFlags*, which can be one of
`MatchPrep`, `MatchAdj`.
`MatchNoun` or
`MatchPlural`.

**removeVocabWord(word, matchFlags?)** removes *word* from the words
that can be used to refer to the object. If the optional *matchFlags*
parameter is supplied the method only removes the word as the
corresponding part of speech; otherwise it removes the word for any part
of speech.

**addVocab(voc)** takes the string *voc* and treats it exactly like a
vocab string defined on the object, except that the vocabulary defined
in *voc* is added to the existing vocabularly. If the name section of
the voc string is defined, the method will also change the name of the
object. For example addVocab('Bob') would change the object's name to
'Bob' and add 'bob' to the vocabulary, whereas addVocab(';;bob') would
simply add 'bob' to the vocabularly, leaving the name unchanged.

**replaceVocab(voc)** takes the string *voc* and uses it just like a
vocab string defined on the object to replace the existing vocabulary
and name, just as if the object were being initialized from scratch.
Where several changes are needed, this might be rather more
straightforward than several calls to
`addVocabWord()` and
`removeVocabWord()` For example, the SecretDoor
class uses this method to change the vocabulary that can be used to
refer to a secret door (something that isn't obviously a door when it's
closed) according to whether it's open or closed:

```
    class SecretDoor: Door
        isGoThroughable = isOpen
        isConnectorListed = isOpen   
        isOpenable = isOpen
        
        vocabWhenOpen = nil
        vocabWhenClosed = nil
        
        preinitThing()
        {
            inherited();
            if(isOpen)
                vocabWhenOpen = vocab;
            else
                vocabWhenClosed = vocab;
        }
        
        makeOpen(stat)
        {
            inherited(stat);
            if(stat && vocabWhenOpen && vocab != vocabWhenOpen)
                replaceVocab(vocabWhenOpen);
            
            if(!stat && vocabWhenClosed && vocab != vocabWhenClosed)
                replaceVocab(vocabWhenClosed);
        }
    ;
```

------------------------------------------------------------------------



*adv3Lite Library Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="core.html" class="nav">The Core Library</a> \> Things  
<span class="navnp"><a href="core.html" class="nav"><em>Prev:</em> The Core Library</a>
   
<a href="room.html" class="nav"><em>Next:</em> Rooms &amp; Regions</a>
    </span>




