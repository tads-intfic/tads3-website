---
layout: docs
---
<span class="title">Lister</span><span class="type">class</span>

[lister.t](../file/lister.t.html)\[[33](../source/lister.t.html#33)\]

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



Lister. This is the base class for formatting of lists of objects.

The external interface consists of the showList() method, which displays
a formatted list of objects according to the rules of the lister
subclass.

The rest of the methods are an internal interface which lister
subclasses can override to customize the way that a list is shown.
Certain of these methods are meant to be overridden by virtually all
listers, such as the methods that show the prefix and suffix messages.
The remaining methods are designed to allow subclasses to customize
detailed aspects of the formatting, so they only need to be overridden
when something other than the default behavior is needed.

`class `**`Lister`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`Lister`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`Lister`**  
[`BaseContentsLister`](../object/BaseContentsLister.html)  
[`BaseRearContentsLister`](../object/BaseRearContentsLister.html)  
[`BaseSurfaceContentsLister`](../object/BaseSurfaceContentsLister.html)  
[`BaseUndersideContentsLister`](../object/BaseUndersideContentsLister.html)  
[`BaseThingContentsLister`](../object/BaseThingContentsLister.html)  
[`ContentsLister`](../object/ContentsLister.html)  
[`BaseInlineContentsLister`](../object/BaseInlineContentsLister.html)  
[`CustomRoomLister`](../object/CustomRoomLister.html)  
[`DescContentsLister`](../object/DescContentsLister.html)  
[`LookWhereContentsLister`](../object/LookWhereContentsLister.html)  
[`ExitLister`](../object/ExitLister1.html)  
[`InventoryLister`](../object/InventoryLister.html)  
[`DividedInventoryLister`](../object/DividedInventoryLister.html)  
[`InventorySublister`](../object/InventorySublister.html)  
[`WearingLister`](../object/WearingLister.html)  
[`WearingSublister`](../object/WearingSublister.html)  
[`ParagraphLister`](../object/ParagraphLister.html)  
[`SenseLister`](../object/SenseLister.html)  
[`SpecialDescContentsLister`](../object/SpecialDescContentsLister.html)  
[`RemoteRoomLister`](../object/RemoteRoomLister.html)  
[`SimpleAttachmentLister`](../object/SimpleAttachmentLister.html)  
[`MajorAttachmentLister`](../object/MajorAttachmentLister.html)  
[`SimpleLister`](../object/SimpleLister.html)  
[`SuggestedTopicLister`](../object/SuggestedTopicLister.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



[`aboardVehicleLister`](../object/aboardVehicleLister.html) [`darkRoomLister`](../object/darkRoomLister.html) [`equivalentStateLister`](../object/equivalentStateLister.html) [`finishOptionsLister`](../object/finishOptionsLister.html) [`fullScoreLister`](../object/fullScoreLister.html) [`otherExitLister`](../object/otherExitLister.html) [`plainLister`](../object/plainLister.html) [`roomLister`](../object/roomLister.html)
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`nextCustomFlag`](#nextCustomFlag)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`contentsListed`](#contentsListed) [`contentsListedSeparately`](#contentsListedSeparately) [`getArrangedListCardinality`](#getArrangedListCardinality) [`getArrangedListNounPhraseCount`](#getArrangedListNounPhraseCount) [`getContents`](#getContents) [`getFilteredList`](#getFilteredList) [`getListedContents`](#getListedContents) [`getListGrouping`](#getListGrouping) [`getTopLister`](#getTopLister) [`isListed`](#isListed) [`listCardinality`](#listCardinality) [`listSepEnd`](#listSepEnd) [`listSepMiddle`](#listSepMiddle) [`listSepTwo`](#listSepTwo) [`listWith`](#listWith) [`longListSepEnd`](#longListSepEnd) [`longListSepMiddle`](#longListSepMiddle) [`longListSepTwo`](#longListSepTwo) [`showArrangedList`](#showArrangedList) [`showContentsList`](#showContentsList) [`showInlineContentsList`](#showInlineContentsList) [`showList`](#showList) [`showListAll`](#showListAll) [`showListContentsPrefixTall`](#showListContentsPrefixTall) [`showListEmpty`](#showListEmpty) [`showListIndent`](#showListIndent) [`showListItem`](#showListItem) [`showListItemCounted`](#showListItemCounted) [`showListPrefixTall`](#showListPrefixTall) [`showListPrefixWide`](#showListPrefixWide) [`showListSeparator`](#showListSeparator) [`showListSimple`](#showListSimple) [`showListSuffixWide`](#showListSuffixWide) [`showSeparateContents`](#showSeparateContents) [`showTallListNewline`](#showTallListNewline)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="nextCustomFlag"></span>

`nextCustomFlag`

[lister.t](../file/lister.t.html)\[[1258](../source/lister.t.html#1258)\]



The last custom flag defined by this class. Lister and each subclass are
required to define this so that each subclass can allocate its own
custom flags in a manner that adapts automatically to future additions
of flags to base classes. As the base class, we allocate our flags
statically with \#define's, so we simply use the fixed \#define'd last
flag value here.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="contentsListed"></span>

`contentsListed (obj)`

[lister.t](../file/lister.t.html)\[[1088](../source/lister.t.html#1088)\]



Are this item's contents listable?



<span id="contentsListedSeparately"></span>

`contentsListedSeparately (obj)`

[lister.t](../file/lister.t.html)\[[1008](../source/lister.t.html#1008)\]



Determine if an object's contents are listed separately from its own
list entry for the purposes of our type of listing. If this returns
true, then we'll list the object's contents in a separate listing (a
separate sentence following the main listing sentence, or a separate
tree when in 'tall' mode).

Note that this only matters for objects listed in the top-level list.
We'll always show the contents separately for an object that isn't
listed in the top-level list (i.e., an object for which isListed(obj)
returns nil).



<span id="getArrangedListCardinality"></span>

`getArrangedListCardinality (singles, groups, groupTab)`

[lister.t](../file/lister.t.html)\[[769](../source/lister.t.html#769)\]



Get the cardinality of an arranged list. Returns the number of items
that will appear in the list, for grammatical agreement.



<span id="getArrangedListNounPhraseCount"></span>

`getArrangedListNounPhraseCount (singles, groups, groupTab)`

[lister.t](../file/lister.t.html)\[[805](../source/lister.t.html#805)\]



Get the number of noun phrase elements in a list. This differs from the
cardinality in that we only count noun phrases, not the cardinality of
each noun phrase. So, for example, "five coins" has cardinality five,
but has only one noun phrase.



<span id="getContents"></span>

`getContents (obj)`

[lister.t](../file/lister.t.html)\[[1093](../source/lister.t.html#1093)\]



Get all contents of this item.



<span id="getFilteredList"></span>

`getFilteredList (lst, infoTab)`

[lister.t](../file/lister.t.html)\[[148](../source/lister.t.html#148)\]



Filter a list to get only the elements we actually want to show. Returns
a new list consisting only of the items that (1) pass the isListed()
test, and (2) are represented in the sense information table (infoTab).
If infoTab is nil, no sense filtering is applied.



<span id="getListedContents"></span>

`getListedContents (obj, infoTab)`

[lister.t](../file/lister.t.html)\[[1102](../source/lister.t.html#1102)\]



Get the listed contents of an object. 'infoTab' is the sense information
table for the enclosing listing. By default, we call the object's
getListedContents() method, but this is virtualized in the lister
interface to allow for listing other hierarchies besides ordinary
contents.



<span id="getListGrouping"></span>

`getListGrouping (groupTab, groups, singles, lst, parentGroup)`

[lister.t](../file/lister.t.html)\[[194](../source/lister.t.html#194)\]



Get the groupings for a given listing.

'groupTab' is an empty LookupTable, and 'groups' is an empty Vector;
we'll populate these with the grouping information. 'singles' is an
empty Vector that we'll populate with the single items not part of any
group.



<span id="getTopLister"></span>

`getTopLister ( )`

[lister.t](../file/lister.t.html)\[[1248](../source/lister.t.html#1248)\]



Get my "top-level" lister. For a sub-lister, this will return the parent
lister's top-level lister. The default lister is a top-level lister, so
we just return ourself.



<span id="isListed"></span>

`isListed (obj)`

[lister.t](../file/lister.t.html)\[[1076](../source/lister.t.html#1076)\]



Is this item to be listed in room descriptions? Returns true if so, nil
if not. By default, we'll use the object's isListed method to make this
determination. We virtualize this into the lister interface to allow for
different inclusion rules for the same object depending on the type of
list we're generating.



<span id="listCardinality"></span>

`listCardinality (obj)`

[lister.t](../file/lister.t.html)\[[1083](../source/lister.t.html#1083)\]



Get the grammatical cardinality of this listing item. This should return
the number of items that this item appears to be grammatically, for
noun-verb agreement purposes.



<span id="listSepEnd"></span>

`listSepEnd ( )`

[lister.t](../file/lister.t.html)\[[1240](../source/lister.t.html#1240)\]



normal and long list separator between second-to-last and last items in
a list with more than two items



<span id="listSepMiddle"></span>

`listSepMiddle ( )`

[lister.t](../file/lister.t.html)\[[1233](../source/lister.t.html#1233)\]



normal and long list separator between items in list with more than two
items



<span id="listSepTwo"></span>

`listSepTwo ( )`

[lister.t](../file/lister.t.html)\[[1226](../source/lister.t.html#1226)\]



normal and "long list" separator between the two items in a list with
exactly two items



<span id="listWith"></span>

`listWith (obj)`

[lister.t](../file/lister.t.html)\[[1119](../source/lister.t.html#1119)\]



Get the list of grouping objects for listing the item. By default, we
return the object's listWith result. Subclasses can override this to
specify different groupings for the same object depending on the type of
list we're generating.

The group list returned is in order from most general to most specific.
For example, if an item is grouped with coins in general and silver
coins in particular, the general coins group would come first, then the
silver coin group, because the silver coin group is more specific.



<span id="longListSepEnd"></span>

`longListSepEnd ( )`

[lister.t](../file/lister.t.html)\[[1241](../source/lister.t.html#1241)\]



*no description available*



<span id="longListSepMiddle"></span>

`longListSepMiddle ( )`

[lister.t](../file/lister.t.html)\[[1234](../source/lister.t.html#1234)\]



*no description available*



<span id="longListSepTwo"></span>

`longListSepTwo ( )`

[lister.t](../file/lister.t.html)\[[1227](../source/lister.t.html#1227)\]



*no description available*



<span id="showArrangedList"></span>

`showArrangedList (pov, parent, lst, options, indent, infoTab, itemCount, singles, groups, groupTab, origLst)`

[lister.t](../file/lister.t.html)\[[533](../source/lister.t.html#533)\]



Show the list. This is called after we've figured out which items we
intend to display, and after we've arranged the items into groups. In
rare cases, listers might want to override this, to customize the way
the way the list is displayed based on the internal arrangement of the
list.



<span id="showContentsList"></span>

`showContentsList (pov, obj, options, indent, infoTab)`

[lister.t](../file/lister.t.html)\[[985](../source/lister.t.html#985)\]



List the contents of an item.

'pov' is the point of view, which is usually an actor (and usually the
player character actor).

'obj' is the item whose contents we are to display.

'options' is the set of flags that we'll pass to showList(), and has the
same meaning as for that function.

'infoTab' is a lookup table of SenseInfo objects giving the sense
information for all of the objects that the actor to whom we're showing
the contents listing can sense.



<span id="showInlineContentsList"></span>

`showInlineContentsList (pov, obj, options, indent, infoTab)`

[lister.t](../file/lister.t.html)\[[1016](../source/lister.t.html#1016)\]



Show an "in-line" contents list. This shows the item's contents list as
a parenthetical, as part of a recursive listing. This is pretty much the
same as showContentsList(), but uses the object's in-line contents
lister instead of its regular contents lister.



<span id="showList"></span>

`showList (pov, parent, lst, options, indent, infoTab, parentGroup)`

[lister.t](../file/lister.t.html)\[[95](../source/lister.t.html#95)\]



Display a list of items, grouping according to the 'listWith'
associations of the items. We will only list items for which isListed()
returns true.

'pov' is the point of view of the listing, which is usually an actor
(and usually the player character actor).

'parent' is the parent (container) of the list being shown. This should
be nil if the listed objects are not all within a single object.

'lst' is the list of items to display.

'options' gives a set of ListXxx option flags.

'indent' gives the indentation level. This is used only for "tall" lists
(specified by including ListTall in the options flags). An indentation
level of zero indicates no indentation.

'infoTab' is a lookup table of SenseInfo objects for all of the objects
that can be sensed from the perspective of the actor performing the
action that's causing the listing. This is normally the table returned
from Thing.senseInfoTable() for the actor from whose point of view the
list is being generated. (We take this as a parameter rather than
generating ourselves for two reasons. First, it's often the case that
the same information table will be needed for a series of listings, so
we can save the compute time of recalculating the same table repeatedly
by having the caller obtain the table and pass it to each lister.
Second, in some cases the caller will want to synthesize a special sense
table rather than using the actual sense information; taking this as a
parameter allows the caller to easily customize the table.)

'parentGroup' is the ListGroup object that is showing this list. We will
not group the objects we list into the parent group, or into any group
more general than the parent group.

This routine is not usually overridden in lister subclasses. Instead,
this method calls a number of other methods that determine the listing
style in more detail; usually those other, simpler methods are
customized in subclasses.



<span id="showListAll"></span>

`showListAll (lst, options, indent)`

[lister.t](../file/lister.t.html)\[[38](../source/lister.t.html#38)\]



Show a list, showing all items in the list as though they were fully
visible, regardless of their actual sense status.



<span id="showListContentsPrefixTall"></span>

`showListContentsPrefixTall (itemCount, pov, parent)`

[lister.t](../file/lister.t.html)\[[1057](../source/lister.t.html#1057)\]



Show the list prefix for the contents of an object in a 'tall' listing.
By default, we just show our usual tall list prefix.



<span id="showListEmpty"></span>

`showListEmpty (pov, parent)`

[lister.t](../file/lister.t.html)\[[1067](../source/lister.t.html#1067)\]



Show an empty list. If the list to be displayed has no items at all,
this is called instead of the prefix/suffix routines. This can be left
empty if no message is required for an empty list, or can display the
complete message appropriate for an empty list (such as "You are
empty-handed").



<span id="showListIndent"></span>

`showListIndent (options, indent)`

[lister.t](../file/lister.t.html)\[[874](../source/lister.t.html#874)\]



Show a list indent if necessary. If ListTall is included in the options,
we'll indent to the given level; otherwise we'll do nothing.



<span id="showListItem"></span>

`showListItem (obj, options, pov, infoTab)`

[lister.t](../file/lister.t.html)\[[1122](../source/lister.t.html#1122)\]



show an item in a list



<span id="showListItemCounted"></span>

`showListItemCounted (lst, options, pov, infoTab)`

[lister.t](../file/lister.t.html)\[[1138](../source/lister.t.html#1138)\]



Show a set of equivalent items as a counted item ("three coins"). The
listing mechanism itself never calls this directly; instead, this is
provided so that ListGroupEquivalent can ask the lister how to describe
its equivalent sets, so that different listers can customize the display
of equivalent items.

'lst' is the full list of equivalent items. By default, we pick one of
these arbitrarily to show, since they're presumably all the same for the
purposes of the list.



<span id="showListPrefixTall"></span>

`showListPrefixTall (itemCount, pov, parent)`

[lister.t](../file/lister.t.html)\[[1051](../source/lister.t.html#1051)\]



Show the list prefix for a 'tall' listing. Note that there is no list
suffix for a tall listing, because the format doesn't allow it.



<span id="showListPrefixWide"></span>

`showListPrefixWide (itemCount, pov, parent, lst, :)`

[lister.t](../file/lister.t.html)\[[1038](../source/lister.t.html#1038)\]



Show the prefix for a 'wide' listing - this is a message that appears
just before we start listing the objects. 'itemCount' is the number of
items to be listed; the items might be grouped in the listing, so a list
that comes out as "three boxes and two books" will have an itemCount of
5. (The purpose of itemCount is to allow the message to have grammatical
agreement in number.)

'lst' is the entire list, which some languages need for grammatical
agreement. This is passed as a named argument, so an overrider can omit
it from the parameter list if it's not needed.

This will never be called with an itemCount of zero, because we will
instead use showListEmpty() to display an empty list.



<span id="showListSeparator"></span>

`showListSeparator (options, curItemNum, totalItems)`

[lister.t](../file/lister.t.html)\[[1161](../source/lister.t.html#1161)\]



Show a list separator after displaying an item. curItemNum is the number
of the item just displayed (1 is the first item), and totalItems is the
total number of items that will be displayed in the list.

This generic routine is further parameterized by properties for the
individual types of separators. This default implementation
distinguishes the following separators: the separator between the two
items in a list of exactly two items; the separator between adjacent
items other than the last two in a list of more than two items; and the
separator between the last two elements of a list of more than two
items.



<span id="showListSimple"></span>

`showListSimple (pov, lst, options, indent, prevCnt, infoTab)`

[lister.t](../file/lister.t.html)\[[903](../source/lister.t.html#903)\]



Show a simple list, recursing into contents lists if necessary. We pay
no attention to grouping; we just show the items individually.

'prevCnt' is the number of items already displayed, if anything has
already been displayed for this list. This should be zero if this will
display the entire list.



<span id="showListSuffixWide"></span>

`showListSuffixWide (itemCount, pov, parent)`

[lister.t](../file/lister.t.html)\[[1044](../source/lister.t.html#1044)\]



show the suffix for a 'wide' listing - this is a message that appears
just after we finish listing the objects



<span id="showSeparateContents"></span>

`showSeparateContents (pov, lst, options, infoTab)`

[lister.t](../file/lister.t.html)\[[835](../source/lister.t.html#835)\]



Service routine: show the separately-listed contents of the items in the
given list, and their separately-listed contents, and so on. This
routine is not normally overridden in subclasses, and is not usually
called except from the Lister implementation.

For each item in the given list, we show the item's contents if the item
is either marked as unlisted, or it's marked as showing its contents
separately. In the former case, we know that we cannot have shown the
item's contents in-line in the main list, since we didn't show the item
at all in the main list. In the latter case, we know that we didn't show
the item's contents in the main list because it's specifically marked as
showing its contents out-of-line.



<span id="showTallListNewline"></span>

`showTallListNewline (options)`

[lister.t](../file/lister.t.html)\[[888](../source/lister.t.html#888)\]



Show a newline after a list item if we're in a tall list; does nothing
for a wide list.
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


