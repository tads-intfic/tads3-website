<span class="title">ListGroup</span><span class="type">class</span>

[lister.t](../file/lister.t.html)\[[1877](../source/lister.t.html#1877)\]

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

<div class="fdesc">

List Group Interface. An instance of this object is created for each set
of objects that are to be grouped together.

`class `**`ListGroup`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ListGroup`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`ListGroup`**  
`         `[`ListGroupCustom`](../object/ListGroupCustom.html)  
`         `[`ListGroupEquivalent`](../object/ListGroupEquivalent.html)  
`         `[`ListGroupSorted`](../object/ListGroupSorted.html)  
`                 `[`ListGroupParen`](../object/ListGroupParen.html)  
`                 `[`ListGroupPrefixSuffix`](../object/ListGroupPrefixSuffix.html)  
`                         `[`SuggestionListGroup`](../object/SuggestionListGroup.html)  
`         `[`RoomActorGrouper`](../object/RoomActorGrouper.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`groupDisplaysSublist`](#groupDisplaysSublist)`  `[`minGroupSize`](#minGroupSize)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`createGroupSublister`](#createGroupSublister)`  `[`groupCardinality`](#groupCardinality)`  `[`groupNounPhraseCount`](#groupNounPhraseCount)`  `[`showGroupItem`](#showGroupItem)`  `[`showGroupItemCounted`](#showGroupItemCounted)`  `[`showGroupList`](#showGroupList)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="groupDisplaysSublist"></span>

`groupDisplaysSublist`

[lister.t](../file/lister.t.html)\[[1933](../source/lister.t.html#1933)\]

<div class="desc">

Determine if showing the group list will introduce a sublist into an
enclosing list. This should return true if we will show a sublist
without some kind of grouping, so that the caller knows to introduce
some extra grouping into its enclosing list. This should return nil if
the sublist we display will be clearly set off in some way (for example,
by being enclosed in parentheses).

</div>

<span id="minGroupSize"></span>

`minGroupSize`

[lister.t](../file/lister.t.html)\[[1945](../source/lister.t.html#1945)\]

<div class="desc">

The minimum number of elements for which we should retain the group in a
listing. By default, we need two elements to display a group; any group
with only one element is discarded, and the single element is moved into
the 'singles' list. This can be overridden to allow single-element
groups to be retained. In most cases, it's undesirable to retain
single-element groups, but when grouping is used to partition a list
into two or more fixed portions, single-element groups become desirable.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="createGroupSublister"></span>

`createGroupSublister (parentLister)`

[lister.t](../file/lister.t.html)\[[1999](../source/lister.t.html#1999)\]

<div class="desc">

Create the group sublister.

In most cases, when a group displays a list of the items in the group as
a sublist, it will not want to use the same lister that was used to show
the enclosing group, because the enclosing lister will usually have
different prefix/suffix styles than the sublist. However, the group list
and the enclosing list might share many other attributes, such as the
style of name to use when displaying items in the list. The default
sublister we create, GroupSublister, is a hybrid that uses the enclosing
lister's attributes except for a few, such as the prefix and suffix,
that usually need to be changed for the sublist.

This can be overridden to use a completely customized Lister object for
the group list, if desired.

</div>

<span id="groupCardinality"></span>

`groupCardinality (lister, lst)`

[lister.t](../file/lister.t.html)\[[1968](../source/lister.t.html#1968)\]

<div class="desc">

Determine the cardinality of the group listing, grammatically speaking.
This is the number of items that the group seems to be for the purposes
of grammatical agreement. For example, if the group is displayed as
"\$1.38 in change", it would be singular for grammatical agreement,
hence would return 1 here; if it displays "five coins (two copper, three
gold)," it would count as five items for grammatical agreement.

For languages (like English) that grammatically distinguish number only
between singular and plural, it is sufficient for this to return 1 for
singular and anything higher for plural. For the sake of languages that
make more elaborate number distinctions for grammatical agreement,
though, this should return as accurate a count as is possible.

By default, we return the number of items to be displayed in the list
group. This should be overridden when necessary, such as when the group
message is singular in usage even if the list has multiple items (as in
"\$1.38 in change").

</div>

<span id="groupNounPhraseCount"></span>

`groupNounPhraseCount (lister, lst)`

[lister.t](../file/lister.t.html)\[[1980](../source/lister.t.html#1980)\]

<div class="desc">

Get the number of noun phrases this group will display. This differs
from the cardinality in that it doesn't matter how many \*objects\* the
phrases represent; it only matters how many phrases are displayed. For
example, "five coins" has cardinality 5 but only displays one noun
phrase.

By default, we simply return the number of items in the group, since
most groups individually list their items.

</div>

<span id="showGroupItem"></span>

`showGroupItem (sublister, obj, options, pov, infoTab)`

[lister.t](../file/lister.t.html)\[[1909](../source/lister.t.html#1909)\]

<div class="desc">

Show an item in the group's sublist. The sublister calls this to display
each item in the group when the group calls the sublister to display the
group list. By default, we simply let the sublister handle the request,
which gives items in our group sublist the same appearance they would
have had in the sublist to begin with. We can customize this behavior to
give our list items a different appearance special to the group sublist.

Note that the same customization could be accomplished by creating a
specialized subclass of GroupSublister in createGroupSublister(), and
overriding showListItem() in the specialized GroupSublister subclass. We
use this mechanism as a convenience, so that a separate group sublister
class doesn't have to be created simply to customize the display of
group items.

</div>

<span id="showGroupItemCounted"></span>

`showGroupItemCounted (sublister, lst, options, pov, infoTab)`

[lister.t](../file/lister.t.html)\[[1919](../source/lister.t.html#1919)\]

<div class="desc">

Show a counted item in our group list. This is the counted item
equivalent of showGroupItem.

</div>

<span id="showGroupList"></span>

`showGroupList (pov, lister, lst, options, indent, infoTab)`

[lister.t](../file/lister.t.html)\[[1890](../source/lister.t.html#1890)\]

<div class="desc">

Show a list of items from this group. All of the items in the list will
be members of this list group; we are to display a sentence fragment
showing the items in the list, suitable for embedding in a larger list.

'options', 'indent', and 'infoTab' have the same meaning as they do for
showList().

Note that we are not to display any separator before or after our list;
the caller is responsible for that.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
