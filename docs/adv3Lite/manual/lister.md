---
---
<div class="topbar">

<img src="topbar.jpg" data-border="0" />

</div>

<div class="nav">

<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="final.html" class="nav">Final Moves</a> \> Lists and Listers  
<span class="navnp"><a href="utility.html" class="nav"><em>Prev:</em> Utility Functions</a>
    <a href="webui.html" class="nav"><em>Next:</em> The Web UI</a>    
</span>

</div>

<div class="main">

# Lists and Listers

Works of Interactive Fiction often need to display lists. Typically
these may be lists of objects visible in a room or a container, or a
list of items held in the player character's inventory. There are
generally two stages involved in displaying a list:

1.  Generating the list of items (usually objects) that need to be
    displayed.
2.  Formatting the list and displaying it on the screen. This stage may
    also include further filtering of the list.

The first stage is generally carried out by a method such as
<span class="code">listContents()</span> or
<span class="code">listSubcontentsOf()</span>, defined on Thing, or else
a method define on the appropriate Action object, such as the
<span class="code">execAction()</span> method of the Inventory action.
More will be said about such methods [below](#generating). The second
stage is carried out by a Lister, and it is Listers that we shall look
at next.

  
<span id="listers"></span>

## Listers

The purpose of a Lister is to format and display a list. The various
types of lister all descend from the <span class="code">Lister</span>
class, which defines the following methods:

- **show(lst, paraCnt, paraBrk = true)**: Show a list of objects. *lst*
  is the list of objects to show; *paraCnt* is the number of
  paragraph-style descriptions that we've already shown as part of this
  description. Note, however, that many specific listers replace the
  *paraCnt* parameter with a more useful *parent* parameter, containing
  the identity of the object whose contents are being listed. If the
  optional *paraBrk* parameter is supplied it determines whether or not
  a paragraph break is added at the end of the list (if this parameter
  is not specified it defaults to true). The actual work of formatting
  and displaying the list of items (as opposed to the prefix and suffix
  text surrounding it) is carried out by a **showList()** method defined
  in the language-specific part of the library.
- **showListPrefix(lst, pl, paraCnt)**: Display the list prefix, that is
  the text that introduces a list (e.g. "In the oven you can see "). The
  *pl* parameter defines whether the list should be treated as singular
  or plural (so that any verb used can agree in number, e.g. "In the
  oven is/are "). many specific listers replace the *paraCnt* parameter
  with a more useful *parent* parameter, containing the identity of the
  object whose contents are being listed.
- **showListSuffix(lst, pl, paraCnt)**: Display the list suffix, that is
  the text that concludes a list (often that may simply be a
  full-stop/period, but it may be a longer piece of text if the list is
  displayed as a sentence with the list itself as the subject, e.g. "A
  ball, a pencil and a diamond are in the blue box. " where the suffix
  would be " are in the blue box. ")
- **showListEmpty(paraCnt)**: The text to display when the list of items
  to be displayed is empty (e.g. "The oven is empty. " or "You see
  nothing of interest in the red box. ")
- **listed(obj)**: Determine whether *obj* should be listed in this
  list. Returns true if so, nil if not. By default, we list any object
  whose <span class="code">listed</span> property is true.
- **listOrder(obj)**: Get an item's sorting order. This returns an
  integer that gives the relative position in the list; we order the
  list in ascending order of this value. By default, we return the
  <span class="code">listOrder</span> property of the object.
- **buildList(lst)**: Returns a string containing what this lister would
  display, minus the terminating paragraph break.

From this you can able to see that the <span class="code">show()</span>
and <span class="code">buildList() </span>methods are for use with an
existing Lister (to make it display a list, or else return the list it
would display in a single-quoted string), while all the rest are used
when defining a Lister.

<span id="itemlister"></span>

### ItemLister

Many of the Listers actually used in a game are based on a subclass of
Lister called **ItemLister**. This is base class of all the Listers used
to list physical objects in a game. Several of the features of this
Lister are defined in the language-specific part of the library, but the
principal way in which an <span class="code">ItemLister</span>
customizes the base <span class="code">Lister</span> class are as
follows:

- **show(lst, parent, paraBrk = true)**: On the
  <span class="code">ItemLister</span> class the *paraCnt* parameter of
  the <span class="code">show()</span> method is replaced with a more
  useful *parent* parameter, which refers to the items whose contents
  are being listed. On ItemLister this method also marks every item in
  the list as *mentioned* (so that it won't get mentioned again in the
  same list) and notes that and where the player character has seen it.
- **contentsListedProp**: This property should contain a property
  pointer (the default value is *&contentsListed*) that determines
  whether an item listed by this lister should have its contents listed
  in turn. Note that is it actually the Thing method
  <span class="code">listSubcontentsOf()</span> that makes use of this
  property when it is constructing a list of items to pass to a lister.
- **listRecursively**: flag, should the contents of items listed by this
  lister also be listed? This is true by default except on the
  <span class="code">openingContentsLister</span>, where it is nil, to
  suppress the (arguably intrusive) recursive listing of contents of
  contents when an openable container is opened.

The language-specific part of the library in english.t defines the
following additional methods on <span class="code">ItemLister</span>:

- **showList(lst, pl, parent)**: This method actually displays the body
  of the list (e.g. "a ball, a pencil and a diamond"). It is used by the
  <span class="code">showList()</span> method and in turn (by default)
  calls the <span class="code">andList()</span> function (see below) to
  format the list.
- **listName(o)**: This method is used to define how the name of an
  individual item should be shown in the list (e.g. "a ball"). This is
  more complex than it seems since this method is also responsible for
  displaying further status-related information about in item, such as
  '(being worn)' or a list of the item's contents (e.g. "a small red box
  (in which is a tie-pin and a paperclip)").
- **showAdditionalInfo**: flag - do we want to show additional
  information (such as 'providing light') after the name of items in
  this list. The default value is true.
- **showWornInfo**: flag - do we want to show '(being worn)' after the
  names of items in this list that are being worn. By default we use the
  value of <span class="code">showAdditionalInfo</span>. Note that the
  text ' (being worn)' can be customized by using a
  [CustomMessages](message.html#custmessage_idx) object to change the
  text of the <span class="code">being worn</span> BMsg.
- **showSubListing**: flag - do we want to show the contents of items
  listed in inventory (in parentheses after the name, e.g. 'a bag (in
  which is a blue ball)'). The default value on ItemLister is true but
  <span class="code">lookLister</span>,
  <span class="code">descContentsLister</span>,
  <span class="code">lookContentsLister</span>,
  <span class="code">lookInLister</span> and
  <span class="code">simpleAttachmentLister</span> all take the value of
  this property from
  <span class="code">gameMain.useParentheticalListing</span>.

<span id="lister-types"></span>

### Types of Lister

The adv3Lite defines a number of different types of Lister for various
specific purposes. The definition of these listers is split between
lister.t (which defines the base functionality) and english.t (which
defines the language-specific aspects). The lister modifications in
english.t generally do not use the BMsg()/DMsg() mechanism to generate
text, since such indirection would be superfluous in a part of the
library which is in any case language-specific and where modification
may be more simply achieved by overriding the relevant methods such as
<span class="code">showList()</span>,
<span class="code">showListPrefix()</span>,
<span class="code">showListSuffix()</span> and
<span class="code">showListEmpty()</span>.

The specific kinds of Lister defined in the library are:

- **lookLister**: displays a list of top-level miscellaneous objects
  (i.e. those without a <span class="code">specialDesc</span> or
  <span class="code">initSpecialDesc</span>) in a room description.
- **lookContentsLister**: displays a list of the contents of objects in
  a room description (e.g. if the room description mentions a box, the
  <span class="code">lookContentsLister</span> would be used to list the
  contents of that box in the room description).
- **remoteRoomContentsLister**: the default Lister for listing
  miscellaneous objects in a remote location.
- **inventoryLister**: displays an inventory listing (i.e. a list of
  objects carried by the player character, or perhaps by an NPC).
- **inventoryListerTall**: displays an inventory listing in TALL (i.e.
  columnar) format.
- **wornLister**: displays a list of items being worn (usually by the
  player character).
- **descContentsLister**: displays a list of the miscellaneous contents
  (items without a <span class="code">specialDesc</span> or
  <span class="code">initSpecialDesc</span>) of an object that is being
  examined. Note that if the item being examined is an openable
  container this lister also reports whether it is open or closed, even
  if it doesn't contain anything, unless the item's
  **openStatusReportable** property is nil.
- **openingContentsLister**: displays the contents of an openable
  container when it is first opened. Note that in the English-specific
  part of the library (english.t) this lister is also responsible for
  reporting that the item has been opened when it is empty.
- **lookInLister**: lists the contents of an object in response to LOOK
  IN/UNDER/BEHIND.
- **simpleAttachmentLister**: lists the items attached to a
  [SimpleAttachable](attachable.html).
- **plugAttachableLister**: lists the items plugged into a
  [PlugAttachable](attachable.html#plug).
- **CustomRoomLister**: A lister that can be readily customized to
  tailor the text before and after the list of miscellaneous items in a
  room description. For further details see the chapter on [Room
  Descriptions](roomdesc.html#customroomlister).
- **subLister**: The subLister is used by other listers such as
  <span class="code">inventoryLister</span> and
  <span class="code">wornLister</span> to show the contents of listed
  items in parentheses (e.g. '(in which is a pen, a pencil and a piece
  of paper)'). The depth of nesting is limited by the subLister's
  **maxNestingDepth** property (which defaults to 1). Note that this
  lister is defined in english.t, not lister.t.
- **remoteSubContentsLister**: the default Lister for listing the
  miscellaneous contents of objects in a remote location.
- **finishOptionsLister**: The lister used to list the options from
  which the player can choose when the game comes to an end. Note that
  this is defined in english.t, not lister.t, and that it descends from
  Lister but not ItemLister.

Note that all but the last of the above descend from ItemLister.

<span id="custom"></span>

### Customizing Listers

Customizing a lister is basically a matter of overriding one or more of
the methods and properties described above. Most typically you might
want to change the way a list is introduced or concluded by overriding
<span class="code">showListPrefix()</span> or
<span class="code">showListSuffix()</span>. You might want to do this
globally, in which case you can just modify the lister concerned, for
example:

<div class="code">

     modify lookLister
        showListPrefix(lst, pl, parent)
        {
            "Lying on the floor <<if pl>>are<<else>>is<<end>> ";
        }
        
        showListSuffix(lst, pl, parent)
        {
            ". ";
        }    
    ; 
     

</div>

This would then affect the way in which miscellaneous items were listed
in every room in the game. More typically, though, we might want to
affect the way things are listed in a particular room or on a particular
object, in which case we can override the appropriate property of Thing
to point to a custom Lister object:

- **roomContentsLister**: The contents lister to use for listing this
  room's miscellaneous contents. By default we use the standard
  <span class="code">lookLister</span> but this can be overridden to use
  a CustomRoomLister (say) to provide just about any wording we like.
- **remoteContentsLister**: The contents lister to use for listing this
  room's miscellaneous contents when viewed from a remote location. By
  default we use <span class="code">remoteRoomContentsLister</span>.
- **examineLister**: The lister to use to list this item's contents when
  it's examined. By default we use
  <span class="code">descContentsLister</span>.
- **myOpeningContentsLister**: The lister to use when listing this
  item's contents when it's opened. By default we use the
  <span class="code">openingContentsLister</span>.
- **myLookInLister**: The lister to use when listing the objects inside
  this item in response to a LOOK IN or SEARCH command. By default we
  use the <span class="code">lookInLister</span>.
- **myLookUnderLister**: The lister to use when listing the objects
  under this item in response to a LOOK UNDER command. By default we use
  the <span class="code">lookInLister</span> (note this is not an error;
  the default lookInLister uses whatever preposition is appropriate to
  the item).
- **myLookBehindLister**: The lister to use when listing the objects
  behind this item in response to a LOOK BEHIND command. By default we
  use the <span class="code">lookInLister</span> (note this is not an
  error; the default lookInLister uses whatever preposition is
  appropriate to the item).
- **myInventoryLister**: The lister to use when listing this object's
  inventory. By default we use
  <span class="code">inventoryLister</span>.
- **myWornLister**: The lister to use when listing what this object is
  wearing. By default we use <span class="code">wornLister</span>.
- **attachmentLister**: The lister to use when listing what is attached
  to a <span class="code">SimpleAttachable</span>. By default we use
  <span class="code">simpleAttachmentLister</span>. On a
  <span class="code">PlugAttachable</span> we instead use
  <span class="code">plugAttachableLister</span>.

To make use of these properties, you'd typically define your own custom
lister based on the appropriate one from the library, and then attach it
to the relevant property, probably as an anonymous object (unless you
wanted to use the same custom lister on a number of different objects).
For example, to customize the lister used when opening or looking in a
box you could do something like this:

<div class="code">

     + largeBox: OpenableContainer 'large box'
        
        myOpeningContentsLister: openingContentsLister
        {
            showListPrefix(lst, pl, parent)
            {
                "On ripping open the box {i} discover{s/ed} ";
            }
        }
        
        myLookInLister: lookInLister
        {
            showListPrefix(lst, pl, parent)
            {
                "Lurking inside the box <<if pl>>are<<else>>is<<end>> ";
            }
        }
    ;
     

</div>

For more information on customizing the way items are listed in room
descriptions, see the chapters on [Room Descriptions](roomdesc.html) and
(for remote rooms) [SenseRegions](senseregion.html#descriptions).

  
<span id="generating"></span>

## Generating Lists

So far we have been looking at techniques for formatting lists once we
have a list of objects to format. The other part of the process is
generating the list of objects in the first place. This happens in
various places in the library. It will not be appropriate to go into all
of them in too much detail here. Instead we shall simply give an
overview and refer the interested reader to the relevant parts of the
<a href="../libref/index.html" target="_blank">Library Reference
Manual</a> for the nitty-gritty low-level detail.

The top-level method used to generate lists of objects for a room
description is the Thing method **listContents()**. This has to generate
not one but three lists: the list of items with specialDescs to show
before the miscellaneous items, the list of miscellaneous items, and the
list of items with specialDescs to show after the list of miscellaneous
items. For items with specialDescs the method then just runs through
each of the two lists showing the appropriate specialDesc or
initSpecialDesc, having sorted the list in order of the
**specialDescOrder** property. The list of miscellaneous items is
displayed in between the two lists of items with specialDescs using the
lister passed as a parameter to
<span class="code">listContents(lister</span>), which defaults to
<span class="code">roomContentsLister</span> (itself a property of
Thing, which in turn defaults to <span class="code">lookLister</span>,
the actual Lister object employed, as noted [above](#custom)).

The <span class="code">listContents()</span> method is further
complicated by a number of other tasks it needs to perform, such as
listing the contents of the player character's immediate location first,
if the player character is in a nested room, ensuring that hidden items
are excluded from the list, listing the contents of any remote locations
if the senseRegion.t module is present, noting that any items listed
have been seen by the player character, and listing any visible contents
of any of the items just listed that want their contents listed (for
which it calls the <span class="code">listSubContentsOf()</span>
method). From this it can be seen that listContents() has a complex and
specialized task to perform, and is used only to generate the lists of
items to be shown in a room description.

<span id="subcontents"></span>

The Thing method **listSubcontentsOf(contList, lister)** is, as just
mentioned, used to list the subcontents of the top-level contents of a
room, but is used elsewhere in the library as well and could conceivably
be called directly from game code. The *contList* parameter is supplied
as a list of items (or a singleton item) whose contents are in turn to
be listed. The optional *lister* parameter is the Lister object to be
used to list the subcontents; if this parameter is not explicitly
supplied it defaults to <span class="code">examineLister</span> (which
is in turn a property of Thing which defaults to the
<span class="code">descContentsLister</span> Lister objected, as noted
[above](#custom)). The listSubContentsOf() method sorts the list passed
to it in <span class="code">listOrder</span> order and then excludes
certain items from the list (those that are hidden, carried by an actor,
impossible to see inside, or empty). It then goes through each item than
remains in the list and divides it contents into objects with
specialDescs to be listed before miscellaneous contents, the
miscellaneous contents, and objects with specialDescs to be listed after
the miscellaneous contents, excluding all objects that are hidden or
already mentioned. Those items with specialDescs thus have their
specialDescs shown, while any miscellaneous items are listed using the
lister that was passed as the second parameter to
<span class="code">listSubcontentsOf()</span>. Finally, the contents of
all these items are then listed with a recursive call to
<span class="code">listSubContentsOf()</span>. This may sound quite
complicated, but the effect is to produce a complete list of everything
that should be listed arranged in the correct order with specialDescs
uses as appropriate and the listing carried on to the depth of nesting
needed to list every visible object within the containment hierarchy of
the list originally passed to
<span class="code">listSubContentsOf()</span>. In short,
<span class="code">listSubcontentsOf()</span> is the method to use to
list the complete contents of anything (or a list of anything) that
isn't a room.

In addition to being called from
<span class="code">listContents()</span>,
<span class="code">listSubcontentsOf()</span> is the method used to list
the relevant contents of objects in response to an EXAMINE command (via
the **examineStatus()** method), an OPEN command (when opening a
container reveals its contents) and a LOOK IN, LOOK UNDER or LOOK BEHIND
command. In the case of these last four commands,
<span class="code">listSubcontentsOf()</span> is called from the
action() section of the relevant <span class="code">dobjFor()</span>
block.

Analogous methods are used to generate lists of items visible in remote
locations when showing a room description. In particular the Thing
method **listRemoteContents(lst, lister, pov)** overridden in
senseRegion.t is used to list a set of items in *lst* from the point of
view of an actor *pov* using the Lister *lister*. In essence it does
much the same job for a remote location as
<span class="code">listContents()</span> does for the player character's
immediate location, but is only relevant when two or more locations are
connected by sight within a [SenseRegion](senseregion.html).

Lists are also generated and/or used at various other places in the
library, such as in the definition of the
<span class="code">Inventory</span> action, the **processOptions(lst)**
function used to display a list of options at the end of the game, a
couple of places in actor.t that show lists of suggested topics, the
<span class="code">examineStatus()</span> method of the
<span class="code">SimpleAttachable</span> class and its subclasses (to
list the attached objects), and the
<span class="code">showFullScore()</span> method of the
<span class="code">libScore</span> object (used to show a list of
[achievements](score.html)). Interested readers are referred to the
Library Reference Manual for details.

  
<span id="functions"></span>

## List-Related Functions

The language-specific part of the library (in english.t) defines a
number of list-related functions that are used by the library and are
also available to user code:

- **makeListStr(objList, nameProp = &aName, conjunction = 'and')**:
  Takes a list of objects supplied in *objList* and return a formatted
  list in a single quoted string, having first sorted the items in
  *objList* in the order of their <span class="code">listOrder</span>
  property. If the *nameProp* parameter is supplied, we'll use that
  property for the name of every item in the list; otherwise we use the
  <span class="code">aName</span> property by default. By default the
  last two items in the list are separated by 'and', but we can choose a
  different conjunction by supplying the *conjunction* parameter.
- **orList(lst)**: Returns a printable list of strings separated by "or"
  conjunctions (e.g. if *lst* is supplied as \['a duck', 'a rabbit', 'a
  partridge'\] the function will return 'a duck, a rabbit and a
  partridge'). Note that the *lst* parameter should be supplied as a
  list of *strings*, not object, and the function returns a single
  string.
- **andList(lst)**: this is similar to
  <span class="code">orList()</span>, except that it returns a printable
  list of strings separated by "and" conjunctions.
- **genList(lst, conj)**: the general list constructor used by
  <span class="code">orList()</span> and
  <span class="code">andList()</span>; *lst* is the list of strings to
  be formatted into a single list, and *conj* is the oonjunction to use,
  supplied as a single-quoted string.
- **mergeDuplicates(lst)**: service function used by
  <span class="code">genList(</span>); takes a list of strings of the
  form \['a book', 'a cat', 'a book'\] and merges the duplicate items to
  return a list of the form \['two books', 'a cat'\].
- **makeCountedPlural(str, num)**: service function used by
  <span class="code">mergeDuplicates()</span>; takes the string
  representation of a name (*str*) and a number (*num*) and returns a
  string with the number spelled out and the name pluralised, e.g.
  <span class="code">makeCountPlural('a cat', 3)</span> -\> 'three
  cats'. Also deals with the more complex cases such as
  <span class="code">makeCountedPlural('(taking the coin)'), 3)</span>
  -\> '(taking three coins)'; i.e. the function substitutes the number
  for the first occurrence of an article, if there is one.
- **stripArticle(txt)**: service function used by
  <span class="code">makeCountedPlural()</span>; removes any definite or
  indefinite article that occurs at the beginning of *txt*, and returns
  the resultant string in lower case.

</div>

------------------------------------------------------------------------

<div class="navb">

*adv3Lite Library Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="final.html" class="nav">Final Moves</a> \> Lists and Listers  
<span class="navnp"><a href="utility.html" class="nav"><em>Prev:</em> Utility Functions</a>
    <a href="webui.html" class="nav"><em>Next:</em> The Web UI</a>    
</span>

</div>
