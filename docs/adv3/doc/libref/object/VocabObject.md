---
layout: docs
---
<span class="title">VocabObject</span><span class="type">class</span>

[thing.t](../file/thing.t.html)\[[532](../source/thing.t.html#532)\],
[en_us.t](../file/en_us.t.html)\[[332](../source/en_us.t.html#332)\]

[Superclass  
Tree](#_SuperClassTree_)

[Subclass  
Tree](#_SubClassTree_)

[Global  
Objects](#_ObjectSummary_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)



Object with vocabulary. This is the base class for any object that can
define vocabulary words.

*Modified in
[en_us.t](../file/en_us.t.html)\[[332](../source/en_us.t.html#332)\]:*  
Language-specific modifications for VocabObject.

`class `**`VocabObject`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`VocabObject`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`VocabObject`**  
[`Thing`](../object/Thing.html)  
[`Actor`](../object/Actor.html)  
[`UntakeableActor`](../object/UntakeableActor.html)  
[`Person`](../object/Person.html)  
[`BasicLocation`](../object/BasicLocation.html)  
[`NestedRoom`](../object/NestedRoom.html)  
[`BasicChair`](../object/BasicChair.html)  
[`BasicBed`](../object/BasicBed.html)  
[`BasicPlatform`](../object/BasicPlatform.html)  
[`Booth`](../object/Booth.html)  
[`Platform`](../object/Platform.html)  
[`NominalPlatform`](../object/NominalPlatform.html)  
[`Bed`](../object/Bed.html)  
[`Chair`](../object/Chair.html)  
[`HighNestedRoom`](../object/HighNestedRoom.html)  
[`Vehicle`](../object/Vehicle.html)  
[`Room`](../object/Room.html)  
[`DarkRoom`](../object/DarkRoom.html)  
[`FloorlessRoom`](../object/FloorlessRoom.html)  
[`OutdoorRoom`](../object/OutdoorRoom.html)  
[`ShipboardRoom`](../object/ShipboardRoom.html)  
[`BulkLimiter`](../object/BulkLimiter.html)  
[`BasicContainer`](../object/BasicContainer.html)  
[`Container`](../object/Container.html)  
[`Booth`](../object/Booth.html)  
[`Dispenser`](../object/Dispenser.html)  
[`Matchbook`](../object/Matchbook.html)  
[`OpenableContainer`](../object/OpenableContainer.html)  
[`KeyedContainer`](../object/KeyedContainer.html)  
[`LockableContainer`](../object/LockableContainer.html)  
[`RestrictedContainer`](../object/RestrictedContainer.html)  
[`SingleContainer`](../object/SingleContainer.html)  
[`StretchyContainer`](../object/StretchyContainer.html)  
[`SpaceOverlay`](../object/SpaceOverlay.html)  
[`RearContainer`](../object/RearContainer.html)  
[`RearSurface`](../object/RearSurface.html)  
[`RestrictedRearSurface`](../object/RestrictedRearSurface.html)  
[`RestrictedRearContainer`](../object/RestrictedRearContainer.html)  
[`Underside`](../object/Underside.html)  
[`RestrictedUnderside`](../object/RestrictedUnderside.html)  
[`Surface`](../object/Surface.html)  
[`Bed`](../object/Bed.html)  
[`Chair`](../object/Chair.html)  
[`Platform`](../object/Platform.html)  
[`NominalPlatform`](../object/NominalPlatform.html)  
[`RestrictedSurface`](../object/RestrictedSurface.html)  
[`Button`](../object/Button.html)  
[`CollectiveGroup`](../object/CollectiveGroup.html)  
[`ItemizingCollectiveGroup`](../object/ItemizingCollectiveGroup.html)  
[`ComplexContainer`](../object/ComplexContainer.html)  
[`Consultable`](../object/Consultable.html)  
[`Dispensable`](../object/Dispensable.html)  
[`FillMedium`](../object/FillMedium.html)  
[`Food`](../object/Food.html)  
[`Hidden`](../object/Hidden.html)  
[`Intangible`](../object/Intangible.html)  
[`DistanceConnector`](../object/DistanceConnector.html)  
[`SensoryEmanation`](../object/SensoryEmanation.html)  
[`Noise`](../object/Noise.html)  
[`SimpleNoise`](../object/SimpleNoise.html)  
[`Odor`](../object/Odor.html)  
[`SimpleOdor`](../object/SimpleOdor.html)  
[`Vaporous`](../object/Vaporous.html)  
[`Key`](../object/Key.html)  
[`Keyring`](../object/Keyring.html)  
[`Lever`](../object/Lever.html)  
[`SpringLever`](../object/SpringLever.html)  
[`LightSource`](../object/LightSource.html)  
[`Flashlight`](../object/Flashlight.html)  
[`FueledLightSource`](../object/FueledLightSource.html)  
[`Candle`](../object/Candle.html)  
[`Matchstick`](../object/Matchstick.html)  
[`NonPortable`](../object/NonPortable.html)  
[`Fixture`](../object/Fixture.html)  
[`Component`](../object/Component.html)  
[`ComplexComponent`](../object/ComplexComponent.html)  
[`ContainerDoor`](../object/ContainerDoor.html)  
[`CustomFixture`](../object/CustomFixture.html)  
[`Decoration`](../object/Decoration.html)  
[`Unthing`](../object/Unthing.html)  
[`Distant`](../object/Distant.html)  
[`Enterable`](../object/Enterable.html)  
[`EntryPortal`](../object/EntryPortal.html)  
[`Exitable`](../object/Exitable.html)  
[`ExitPortal`](../object/ExitPortal.html)  
[`NestedRoomFloor`](../object/NestedRoomFloor.html)  
[`NominalPlatform`](../object/NominalPlatform.html)  
[`Passage`](../object/Passage.html)  
[`Stairway`](../object/Stairway.html)  
[`StairwayDown`](../object/StairwayDown.html)  
[`StairwayUp`](../object/StairwayUp.html)  
[`ThroughPassage`](../object/ThroughPassage.html)  
[`BasicDoor`](../object/BasicDoor.html)  
[`Door`](../object/Door.html)  
[`AutoClosingDoor`](../object/AutoClosingDoor.html)  
[`SecretDoor`](../object/SecretDoor.html)  
[`HiddenDoor`](../object/HiddenDoor.html)  
[`ExitOnlyPassage`](../object/ExitOnlyPassage.html)  
[`PathPassage`](../object/PathPassage.html)  
[`Room`](../object/Room.html)  
[`DarkRoom`](../object/DarkRoom.html)  
[`FloorlessRoom`](../object/FloorlessRoom.html)  
[`OutdoorRoom`](../object/OutdoorRoom.html)  
[`ShipboardRoom`](../object/ShipboardRoom.html)  
[`RoomPart`](../object/RoomPart.html)  
[`DefaultWall`](../object/DefaultWall.html)  
[`Floor`](../object/Floor.html)  
[`SecretFixture`](../object/SecretFixture.html)  
[`Immovable`](../object/Immovable.html)  
[`CustomImmovable`](../object/CustomImmovable.html)  
[`Heavy`](../object/Heavy.html)  
[`TravelPushable`](../object/TravelPushable.html)  
[`UntakeableActor`](../object/UntakeableActor.html)  
[`Person`](../object/Person.html)  
[`OnOffControl`](../object/OnOffControl.html)  
[`Switch`](../object/Switch.html)  
[`Flashlight`](../object/Flashlight.html)  
[`Readable`](../object/Readable.html)  
[`Settable`](../object/Settable.html)  
[`Dial`](../object/Dial.html)  
[`LabeledDial`](../object/LabeledDial.html)  
[`NumberedDial`](../object/NumberedDial.html)  
[`TravelConnector`](../object/TravelConnector.html)  
[`AskConnector`](../object/AskConnector.html)  
[`DefaultAskConnector`](../object/DefaultAskConnector.html)  
[`Passage`](../object/Passage.html)  
[`Stairway`](../object/Stairway.html)  
[`StairwayDown`](../object/StairwayDown.html)  
[`StairwayUp`](../object/StairwayUp.html)  
[`ThroughPassage`](../object/ThroughPassage.html)  
[`BasicDoor`](../object/BasicDoor.html)  
[`Door`](../object/Door.html)  
[`AutoClosingDoor`](../object/AutoClosingDoor.html)  
[`SecretDoor`](../object/SecretDoor.html)  
[`HiddenDoor`](../object/HiddenDoor.html)  
[`ExitOnlyPassage`](../object/ExitOnlyPassage.html)  
[`PathPassage`](../object/PathPassage.html)  
[`RoomConnector`](../object/RoomConnector.html)  
[`OneWayRoomConnector`](../object/OneWayRoomConnector.html)  
[`RoomAutoConnector`](../object/RoomAutoConnector.html)  
[`Room`](../object/Room.html)  
[`DarkRoom`](../object/DarkRoom.html)  
[`FloorlessRoom`](../object/FloorlessRoom.html)  
[`OutdoorRoom`](../object/OutdoorRoom.html)  
[`ShipboardRoom`](../object/ShipboardRoom.html)  
[`TravelMessage`](../object/TravelMessage.html)  
[`DeadEndConnector`](../object/DeadEndConnector.html)  
[`NoTravelMessage`](../object/NoTravelMessage.html)  
[`FakeConnector`](../object/FakeConnector.html)  
[`Wearable`](../object/Wearable.html)  
[`Topic`](../object/Topic.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`canResolvePossessive`](#canResolvePossessive)[`disambigPromptOrder`](#disambigPromptOrder)[`owner`](#owner)[`pluralOrder`](#pluralOrder)[`vocabLikelihood`](#vocabLikelihood)[`vocabWords`](#vocabWords)[`weakTokens`](#weakTokens)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`addToDictionary`](#addToDictionary)[`construct`](#construct)[`expandPronounList`](#expandPronounList)[`filterResolveList`](#filterResolveList)[`getFacets`](#getFacets)[`getNominalOwner`](#getNominalOwner)[`inheritVocab`](#inheritVocab)[`initializeVocab`](#initializeVocab)[`initializeVocabWith`](#initializeVocabWith)[`isOwnedBy`](#isOwnedBy)[`matchName`](#matchName)[`matchNameCommon`](#matchNameCommon)[`matchNameDisambig`](#matchNameDisambig)[`throwNoMatchForLocation`](#throwNoMatchForLocation)[`throwNoMatchForPossessive`](#throwNoMatchForPossessive)[`throwNothingInLocation`](#throwNothingInLocation)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="canResolvePossessive"></span>

`canResolvePossessive`

[thing.t](../file/thing.t.html)\[[893](../source/thing.t.html#893)\]



By default, every object can be used as the resolution of a possessive
qualifier phrase (e.g., "bob" in "bob's book"). If this property is set
to nil for an object, that object can never be used as a possessive.
Note that has nothing to do with establishing ownership relationships
between objects; it controls only the resolution of possessive phrases
during parsing to concrete game objects.



<span id="disambigPromptOrder"></span>

`disambigPromptOrder`

[thing.t](../file/thing.t.html)\[[777](../source/thing.t.html#777)\]



Disambiguation prompt order. When we interactively prompt for help
resolving an ambiguous noun phrase, we'll put the list of ambiguous
matches in ascending order of this property value.

In most cases, the prompt order doesn't matter, so most objects won't
have to override the default setting. Sometimes, though, a set of
objects will be identified in the game as "first", "second", "third",
etc., and in these cases it's desirable to have the objects presented in
the same order as the names indicate:

Which door do you mean, the first door, the second door, or the third
door?

By default, we use the same value as our pluralOrder, since the plural
order has essentially the same purpose.



<span id="owner"></span>

`owner`

[thing.t](../file/thing.t.html)\[[977](../source/thing.t.html#977)\]



our explicit owner, if any



<span id="pluralOrder"></span>

`pluralOrder`

[thing.t](../file/thing.t.html)\[[758](../source/thing.t.html#758)\]



Plural resolution order. When a command contains a plural noun phrase,
we'll sort the items that match the plural phrase in ascending order of
this property value.

In most cases, the plural resolution order doesn't matter. Once in a
while, though, a set of objects will be named as "first," "second,"
"third," and so on; in these cases, it's nice to have the order of
resolution match the nominal ordering.

Note that the sorting order only applies within the matches for a
particular plural phrase, not globally throughout the entire list of
objects in a command. For example, if the player types TAKE BOXES AND
BOOKS, we'll sort the boxes in one group, and then we'll sort the books
as a separate group - but all of the boxes will come before any of the
books, regardless of the plural orders.

\>take books and boxes  
first book: Taken.  
second book: Taken.  
third book: Taken.  
left box: Taken.  
middle box: Taken.  
right box: Taken.



<span id="vocabLikelihood"></span>

`vocabLikelihood`

[thing.t](../file/thing.t.html)\[[788](../source/thing.t.html#788)\]



Intrinsic parsing likelihood. During disambiguation, if the parser finds
two objects with equivalent logicalness (as determined by the 'verify'
process for the particular Action being performed), it will pick the one
with the higher intrinsic likelihood value. The default value is zero,
which makes all objects equivalent by default. Set a higher value to
make the parser prefer this object in cases of ambiguity.



<span id="vocabWords"></span>

`vocabWords`

[en_us.t](../file/en_us.t.html)\[[373](../source/en_us.t.html#373)\]



The vocabulary initializer string for the object - this string can be
initialized (most conveniently via a template) to a string of this
format:

'adj adj adj noun/noun/noun\*plural plural plural'

The noun part of the string can be a hyphen, '-', in which case it means
that the string doesn't specify a noun or plural at all. This can be
useful when nouns and plurals are all inherited from base classes, and
only adjectives are to be specified. (In fact, any word that consists of
a single hyphen will be ignored, but this is generally only useful for
the adjective-only case.)

During preinitialization, we'll parse this string and generate
dictionary entries and individual vocabulary properties for the parts of
speech we find.

Note that the format described above is specific to the English version
of the library. Non-English versions will probably want to use different
formats to conveniently encode appropriate language-specific information
in the initializer string. See the comments for initializeVocabWith()
for more details.

You can use the special wildcard \# to match any numeric adjective. This
only works as a wildcard when it stands alone, so a string like "7#" is
matched as that literal string, not as a wildcard. If you want to use a
pound sign as a literal adjective, just put it in double quotes.

You can use the special wildcard "\u0001" (include the double quotes
within the string) to match any literal adjective. This is the literal
adjective equivalent of the pound sign. We use this funny character
value because it is unlikely ever to be interesting in user input.

If you want to match any string for a noun and/or adjective, you can't
do it with this property. Instead, just add the property value noun='\*'
to the object.



<span id="weakTokens"></span>

`weakTokens`

[thing.t](../file/thing.t.html)\[[882](../source/thing.t.html#882)\]



Our list of "weak" tokens. This is a token that is acceptable in our
vocabulary, but which we can only use in combination with one or more
"strong" tokens. (A token is strong if it's not weak, so we need only
keep track of one or the other kind. Weak tokens are much less common
than strong tokens, so it takes a lot less space if we store the weak
ones instead of the strong ones.)

The purpose of weak tokens is to allow players to use more words to
refer to some objects without creating ambiguity. For example, if we
have a house, and a front door of the house, we might want to allow the
player to call the front door "front door of house." If we just defined
the door's vocabulary thus, though, we'd create ambiguity if the player
tried to refer to "house," even though this obviously doesn't create any
ambiguity to a human reader. Weak tokens fix the problem: we define
"house" as a weak token for the front door, which allows the player to
refer to the front door as "front door of house", but prevents the front
door from matching just "house".

By default, this is nil to indicate that we don't have any weak tokens
to check. If the object has weak tokens, this should be set to a list of
strings giving the weak tokens.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="addToDictionary"></span>

`addToDictionary (prop)`

[en_us.t](../file/en_us.t.html)\[[393](../source/en_us.t.html#393)\]



add the words from a dictionary property to the global dictionary



<span id="construct"></span>

`construct ( )`

[en_us.t](../file/en_us.t.html)\[[379](../source/en_us.t.html#379)\]



On dynamic construction, initialize our vocabulary words and add them to
the dictionary.



<span id="expandPronounList"></span>

`expandPronounList (typ, lst)`

[thing.t](../file/thing.t.html)\[[856](../source/thing.t.html#856)\]



Expand a pronoun list. This is essentially complementary to
filterResolveList: the function is to "unfilter" a pronoun binding that
contains this object so that it restores any objects that would have
been filtered out by filterResolveList from the original noun phrase
binding.

This routine is called whenever the parser is called upon to resolve a
pronoun ("TAKE THEM"). This routine is called for each object in the
"raw" pronoun binding, which is simply the list of objects that was
stored by the previous command as the antecedent for the pronoun. After
this routine has been called for each object in the raw pronoun binding,
the final list will be passed through filterResolveList().

'lst' is the raw pronoun binding so far, which might reflect changes
made by this method called on previous objects in the list. 'typ' is the
pronoun type (PronounIt, PronounThem, etc) describing the pronoun phrase
being resolved. The return value is the new pronoun binding list; if
this routine doesn't need to make any changes, it should simply return
'lst'.

In some cases, filterResolveList chooses which of two or more possible
ways to bind a noun phrase, with the binding dependent upon other
conditions, such as the current action. In these cases, it's often
desirable for a subsequent pronoun reference to make the same decision
again, choosing from the full set of possible bindings. This routine
facilitates that by letting the object put back objects that were
filtered out, so that the filtering can once again run on the full set
of possible bindings for the pronoun reference.

This base implementation just returns the original list unchanged. See
CollectiveGroup for an override that uses this.



<span id="filterResolveList"></span>

`filterResolveList (lst, action, whichObj, np, requiredNum)`

[thing.t](../file/thing.t.html)\[[815](../source/thing.t.html#815)\]



Filter an ambiguous noun phrase resolution list. The parser calls this
method for each object that matches an ambiguous noun phrase or an ALL
phrase, to allow the object to modify the resolution list. This method
allows the object to act globally on the entire list, so that the
filtering can be sensitive to the presence or absence in the list of
other objects, and can affect the presence of other objects.

'lst' is a list of ResolveInfo objects describing the tentative
resolution of the noun phrase. 'action' is the Action object
representing the command. 'whichObj' is the object role identifier of
the object being resolved (DirectObject, IndirectObject, etc). 'np' is
the noun phrase production that we're resolving; this is usually a
subclass of NounPhraseProd. 'requiredNum' is the number of objects
required, when an exact quantity is specified; this is nil in cases
where the quantity is unspecified, as in 'all' or an unquantified plural
("take coins").

The result is a new list of ResolveInfo objects, which need not contain
any of the objects of the original list, and can add new objects not in
the original list, as desired.

By default, we simply return the original list.



<span id="getFacets"></span>

`getFacets ( )`

[thing.t](../file/thing.t.html)\[[942](../source/thing.t.html#942)\]



Get a list of the other "facets" of this object. A facet is another
program object that to the player looks like the same or part of the
same physical object. For example, it's often convenient to represent a
door using two game objects - one for each side - but the two really
represent the same door from the player's perspective.

The parser uses an object's facets to resolve a pronoun when the
original antecedent goes out of scope. In our door example, if we refer
to the door, then walk through it to the other side, then refer to 'it',
the parser will realize from the facet relationship that 'it' now refers
to the other side of the door.



<span id="getNominalOwner"></span>

`getNominalOwner ( )`

[thing.t](../file/thing.t.html)\[[974](../source/thing.t.html#974)\]



Get our nominal owner. This is the owner that we report for this object
if we're asked to distinguish this object from another object in a
disambiguation prompt. The nominal owner isn't necessarily the only
owner. Note that if getNominalOwner() returns a non-nil value,
isOwnedBy(getNominalOwner()) should always return true.

By default, we'll simply return our 'owner' property.



<span id="inheritVocab"></span>

`inheritVocab (target, done)`

[en_us.t](../file/en_us.t.html)\[[421](../source/en_us.t.html#421)\]



Inherit vocabulary from this class and its superclasses, adding the
words to the given target object. 'target' is the object to which we add
our vocabulary words, and 'done' is a vector of classes that have been
visited so far.

Since a class can be inherited more than once in an inheritance tree
(for example, a class can have multiple superclasses, each of which have
a common base class), we keep a vector of all of the classes we've
visited. If we're already in the vector, we'll skip adding vocabulary
for this class or its superclasses, since we must have already traversed
this branch of the tree from another subclass.



<span id="initializeVocab"></span>

`initializeVocab ( )`

[en_us.t](../file/en_us.t.html)\[[401](../source/en_us.t.html#401)\]



initialize the vocabulary from vocabWords



<span id="initializeVocabWith"></span>

`initializeVocabWith (str)`

[en_us.t](../file/en_us.t.html)\[[464](../source/en_us.t.html#464)\]



Initialize our vocabulary from the given string. This parses the given
vocabulary initializer string and adds the words defined in the string
to the dictionary.

Note that this parsing is intentionally located in the English-specific
part of the library, because it is expected that other languages will
want to define their own vocabulary initialization string formats. For
example, a language with gendered nouns might want to use gendered
articles in the initializer string as an author-friendly way of defining
noun gender; languages with inflected (declined) nouns and/or adjectives
might want to encode inflected forms in the initializer. Non-English
language implementations are free to completely redefine the format -
there's no need to follow the conventions of the English format in other
languages where different formats would be more convenient.



<span id="isOwnedBy"></span>

`isOwnedBy (obj)`

[thing.t](../file/thing.t.html)\[[962](../source/thing.t.html#962)\]



Ownership: a vocab-object can be marked as owned by a given Thing. This
allows command input to refer to the owned object using possessive
syntax (such as, in English, "x's y").

This method returns true if 'self' is owned by 'obj'. The parser
generally tests for ownership in this direction, as opposed to asking
for obj's owner, because a given object might have multiple owners, and
might not be able to enumerate them all (or, at least, might not be able
to enumerate them efficiently). It's usually efficient to determine
whether a given object qualifies as an owner, and from the parser's
persepctive that's the question anyway, since it wants to determine if
the "x" in "x's y" qualifies as my owner.

By default, we simply return true if 'obj' matches our 'owner' property
(and is not nil).



<span id="matchName"></span>

`matchName (origTokens, adjustedTokens)`

[thing.t](../file/thing.t.html)\[[597](../source/thing.t.html#597)\]



Match a name as used in a noun phrase in a player's command to this
object. The parser calls this routine to test this object for a match to
a noun phrase when all of the following conditions are true:

\- this object is in scope;

\- our vocabulary matches the noun phrase, which means that ALL of the
words in the player's noun phrase are associated with this object with
the corresponding parts of speech. Note the special wildcard vocabulary
words: '#' as an adjective matches any number used as an adjective; '\*'
as a noun matches any word used as any part of speech.

'origTokens' is the list of the original input words making up the noun
phrase, in canonical tokenizer format. Each element of this list is a
sublist representing one token.

'adjustedTokens' is the "adjusted" token list, which provides more
information on how the parser is analyzing the phrase but may not
contain the exact original tokens of the command. In the adjusted list,
the tokens are represented by pairs of values in the list: the first
value of each pair is a string giving the adjusted token text, and the
second value of the pair is a property ID giving the part of speech of
the parser's interpretation of the phrase. For example, if the noun
phrase is "red book", the list might look like \['red', &adjective,
'book', &noun\].

The adjusted token list in some cases contains different tokens than the
original input. For example, when the command contains a spelled-out
number, the parser will translate the spelled-out number to a numeral
format and provide the numeral string in the adjusted token list: 'a
hundred and thirty-four' will become '134' in the adjusted token list.

If this object does not match the noun phrase, this routine returns nil.
If the object is a match, the routine returns 'self'. The routine can
also return a different object, or even a list of objects - in this
case, the parser will consider the noun phrase to have matched the
returned object or objects rather than this original match.

Note that it isn't necessary to check that the input tokens match our
defined vocabulary words, because the parser will already have done that
for us. This routine is only called after the parser has already
determined that all of the noun phrase's words match ours.

By default, we do two things. First, we check to see if ALL of our
tokens are "weak" tokens, and if they are, we indicate that we do NOT
match the phrase. Second, if we pass the "weak token" test, we'll invoke
the common handling in matchNameCommon(), and return the result.

In most cases, games will want to override matchNameCommon() instead of
this routine. matchNameCommon() is the common handler for both normal
and disambiguation-reply matching, so overriding that one routine will
take care of both kinds of matching. Games will only need to override
matchName() separately in cases where they need to differentiate normal
matching and disambiguation matching.



<span id="matchNameCommon"></span>

`matchNameCommon (origTokens, adjustedTokens)`

[thing.t](../file/thing.t.html)\[[718](../source/thing.t.html#718)\]



Common handling for the main matchName() and the disambiguation handler
matchNameDisambig(). By default, we'll check with our state object if we
have a state object; if not, we'll simply return 'self' to indicate that
we do indeed match the given tokens.

In most cases, when a game wishes to customize name matching for an
object, it can simply override this routine. This routine provides
common handling for matchName() and matchNameDisambig(), so overriding
this routine will take care of both the normal and disambiguation
matching cases. In cases where a game needs to customize only normal
matching or only disambiguation matching, it can override one of those
other routines instead.



<span id="matchNameDisambig"></span>

`matchNameDisambig (origTokens, adjustedTokens)`

[thing.t](../file/thing.t.html)\[[697](../source/thing.t.html#697)\]



Match a name in a disambiguation response. This is similar to
matchName(), but is called for each object in an ambiguous object list
for which a disambiguation response was provided. As with matchName(),
we only call this routine for objects that match the dictionary
vocabulary.

This routine is separate from matchName() because a disambiguation
response usually only contains a partial name. For example, the exchange
might go something like this:

\>take box  
Which box do you mean, the cardboard box, or the wood box? \>cardboard

Note that it is not safe to assume that the disambiguation response can
be prepended to the original noun phrase to make a complete noun phrase;
if this were safe, we'd simply concatenate the two strings and call
matchName(). This would work for the example above, since we'd get
"cardboard box" as the new noun phrase, but it wouldn't work in general.
Consider these examples:

\>open post office box  
Which post office box do you mean, box 100, box 101, or box 102?

\>take jewel  
Which jewel do you mean, the emerald, or the diamond?

There's no general way of assembling the disambiguation response and the
original noun phrase together into a new noun phrase, so rather than
trying to use matchName() for both purposes, we simply use a separate
routine to match the disambiguation name.

Note that, when this routine is called, this object will have been
previously matched with matchName(), so there is no question that this
object matches the original noun phrase. The only question is whether or
not this object matches the response to the "which one do you mean"
question.

The return value has the same meaning as for matchName().

By default, we simply invoke the common handler. Note that games will
usually want to override matchNameCommon() instead of this routine,
since matchNameCommon() provides common handling for the main match and
disambiguation match cases. Games should only override this routine when
they need to do something different for normal vs disambiguation
matching.



<span id="throwNoMatchForLocation"></span>

`throwNoMatchForLocation (txt)`

[thing.t](../file/thing.t.html)\[[915](../source/thing.t.html#915)\]



Throw an appropriate parser error when this object is used in a player
command to locationally qualify another object (such as when we're the
box in "examine the key in the box"), and there's no object among our
contents with the given name. By default, we throw the standard parser
error ("You see no key in the box").



<span id="throwNoMatchForPossessive"></span>

`throwNoMatchForPossessive (txt)`

[thing.t](../file/thing.t.html)\[[905](../source/thing.t.html#905)\]



Throw an appropriate parser error when this object is used in a player
command as a possessive qualifier (such as when 'self' is the "bob" in
"take bob's key"), and we don't own anything matching the object name
that we qualify. This is only called when 'self' is in scope. By
default, we throw the standard parser error ("Bob doesn't appear to have
any such thing"). 'txt' is the lower-cased, HTMLified text that of the
qualified object name ("key" in "bob's key").



<span id="throwNothingInLocation"></span>

`throwNothingInLocation ( )`

[thing.t](../file/thing.t.html)\[[925](../source/thing.t.html#925)\]



Throw an appropriate parser error when this object is used in a player
command to locationally qualify "all" (such as when we're the box in
"examine everything in the box"), and we have no contents. By default,
we throw the standard parser error ("You see nothing unusual in the
box").





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


