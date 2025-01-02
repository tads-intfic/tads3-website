---
layout: docs
---
<span class="title">Region</span><span class="type">class</span>

[travel.t](../file/travel.t.html)\[[1940](../source/travel.t.html#1940)\],
[dynamicRegion.t](../file/dynamicRegion.t.html)\[[153](../source/dynamicRegion.t.html#153)\]

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



A Region is an object representing several rooms or even several other
Regions.

*Modified in
[dynamicRegion.t](../file/dynamicRegion.t.html)\[[153](../source/dynamicRegion.t.html#153)\]:*  
Modifications to Region to work safely with DynamicRegion

`class `**`Region`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`Region`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`Region`**  
[`DynamicRegion`](../object/DynamicRegion.html)  
[`SenseRegion`](../object/SenseRegion.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`extraScopeItems`](#extraScopeItems)[`familiar`](#familiar)[`fastGoTo`](#fastGoTo)[`regions`](#regions)[`roomList`](#roomList)[`rooms`](#rooms)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`addExtraScopeItems`](#addExtraScopeItems)[`addToContents`](#addToContents)[`addToRoomList`](#addToRoomList)[`allRegions`](#allRegions)[`isCurrentlyWithin`](#isCurrentlyWithin)[`isIn`](#isIn)[`isOrIsIn`](#isOrIsIn)[`makeRegionLists`](#makeRegionLists)[`moveMLIntoAdd`](#moveMLIntoAdd)[`moveMLOutOf`](#moveMLOutOf)[`notifyAfter`](#notifyAfter)[`notifyBefore`](#notifyBefore)[`regionAfterAction`](#regionAfterAction)[`regionAfterTravel`](#regionAfterTravel)[`regionBeforeAction`](#regionBeforeAction)[`regionBeforeTravel`](#regionBeforeTravel)[`regionDaemon`](#regionDaemon)[`removeFromContents`](#removeFromContents)[`setFamiliarRooms`](#setFamiliarRooms)[`travelerEntering`](#travelerEntering)[`travelerLeaving`](#travelerLeaving)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="extraScopeItems"></span>

`extraScopeItems`

[travel.t](../file/travel.t.html)\[[2113](../source/travel.t.html#2113)\]



A list of items that should be added to the standard scope list for
actions carried out in any room in this region.



<span id="familiar"></span>

`familiar`

[travel.t](../file/travel.t.html)\[[2019](../source/travel.t.html#2019)\]



Is the player char familiar with every room in this region. This should
be set to true for a region whose geography the PC starts out familiar
with, such as the layout of his own house.



<span id="fastGoTo"></span>

`fastGoTo`

[travel.t](../file/travel.t.html)\[[2184](../source/travel.t.html#2184)\]



Should the fastGoTo option be used in this region (i.e. traveling from
one room in the region to another is all done in one turn without the
need for CONTINUE, even if several steps are involved)? Note that the
value of this setting has no effect if gameMain.fastGoTo is true, since
then the fastGoTo setting is always in effect.



<span id="regions"></span>

`regions`

[travel.t](../file/travel.t.html)\[[1946](../source/travel.t.html#1946)\]



This region can optionally be in one or more regions. The regions
property hold the region or a the list of regions I'm in.



<span id="roomList"></span>

`roomList`

[travel.t](../file/travel.t.html)\[[1989](../source/travel.t.html#1989)\]



A list of all the rooms in this region. This is built automatically at
preinit and shouldn't be altered by the user/author.



<span id="rooms"></span>

`rooms`

[travel.t](../file/travel.t.html)\[[1996](../source/travel.t.html#1996)\]



A user-defined list of the rooms in this region. At Preinit this will be
used along with the regions property of any rooms to build the roomList
of this Region.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="addExtraScopeItems"></span>

`addExtraScopeItems (action)`

[travel.t](../file/travel.t.html)\[[2092](../source/travel.t.html#2092)\]



Put extra items in scope when action is carried out in any room in this
region.



<span id="addToContents"></span>

`addToContents (obj, vec?)`

[travel.t](../file/travel.t.html)\[[2047](../source/travel.t.html#2047)\]



To add an object to our contents we need to add it to the contents of
every room in this region. If the optional vec parameter is supplied it
must be a vector; the rooms will then be added to the vector as well.
The vec parameter is primarily for use by the MultiLoc class.



<span id="addToRoomList"></span>

`addToRoomList (rm)`

[travel.t](../file/travel.t.html)\[[2074](../source/travel.t.html#2074)\]



Add an additional room (passed as the rm parameter) to our list of
rooms. This method is intended for internal library use at PreInit only.



<span id="allRegions"></span>

`allRegions ( )`

[travel.t](../file/travel.t.html)\[[1969](../source/travel.t.html#1969)\]



A list of all the regions this Region is within; in addition to any
regions this Region is directly in (defined on its regions property)
this will include all the regions it's indirectly in (i.e. any regions
the regions it's in are in and so forth).



<span id="isCurrentlyWithin"></span>

`isCurrentlyWithin (region)`

[dynamicRegion.t](../file/dynamicRegion.t.html)\[[184](../source/dynamicRegion.t.html#184)\]



Tests whether this room is currently contained within region in the
sense that all our rooms are also in region. \[DYNAMIC REGION
EXTENSION\]



<span id="isIn"></span>

`isIn (region)`

[travel.t](../file/travel.t.html)\[[1952](../source/travel.t.html#1952)\],
[dynamicRegion.t](../file/dynamicRegion.t.html)\[[158](../source/dynamicRegion.t.html#158)\]



A Room can't be in another Room or a Thing, but it can notionally be in
a Region, so we check to see if we're in the list of our regions.

*Modified in
[dynamicRegion.t](../file/dynamicRegion.t.html)\[[158](../source/dynamicRegion.t.html#158)\]:*  
A DynamicRegion cannot contain other regions \[DYNAMIC REGION
EXTENSION\]



<span id="isOrIsIn"></span>

`isOrIsIn (region)`

[travel.t](../file/travel.t.html)\[[1958](../source/travel.t.html#1958)\]



Is this Region either itself region or contained within in region



<span id="makeRegionLists"></span>

`makeRegionLists ( )`

[travel.t](../file/travel.t.html)\[[2005](../source/travel.t.html#2005)\],
[dynamicRegion.t](../file/dynamicRegion.t.html)\[[172](../source/dynamicRegion.t.html#172)\]



Build the list of regions in all the rooms in this this region by going
through every room defined in the roomList and adding us to its list of
regions. Note that this is provided as an alternative way to define what
rooms start out in which regions.

*Modified in
[dynamicRegion.t](../file/dynamicRegion.t.html)\[[172](../source/dynamicRegion.t.html#172)\]:*  
A Region is not allowed to be part of a DynamicRegion, so clear out any
DynamicRegions from our list of Regions at PreInit. \[DYNAMIC REGION
EXTENSION\]



<span id="moveMLIntoAdd"></span>

`moveMLIntoAdd (ml)`

[travel.t](../file/travel.t.html)\[[2190](../source/travel.t.html#2190)\]



Move a MultiLoc (ml) into this region, by moving it into every room in
this Region.



<span id="moveMLOutOf"></span>

`moveMLOutOf (ml)`

[travel.t](../file/travel.t.html)\[[2199](../source/travel.t.html#2199)\]



Move a MultiLoc (ml) out of this region, by moving it out of every room
in the Region.



<span id="notifyAfter"></span>

`notifyAfter ( )`

[travel.t](../file/travel.t.html)\[[2148](../source/travel.t.html#2148)\]



Carry out after notifications on the region



<span id="notifyBefore"></span>

`notifyBefore ( )`

[travel.t](../file/travel.t.html)\[[2128](../source/travel.t.html#2128)\]



Carry out before notifications on the region



<span id="regionAfterAction"></span>

`regionAfterAction ( )`

[travel.t](../file/travel.t.html)\[[2162](../source/travel.t.html#2162)\]



Method called just after an action has taken place in this region.



<span id="regionAfterTravel"></span>

`regionAfterTravel (traveler, connector)`

[travel.t](../file/travel.t.html)\[[2175](../source/travel.t.html#2175)\]



Method called just after travel has taken place in this region (when
traveler has just traveled via connector).



<span id="regionBeforeAction"></span>

`regionBeforeAction ( )`

[travel.t](../file/travel.t.html)\[[2145](../source/travel.t.html#2145)\]



This method is called just before an action takes places in this region.



<span id="regionBeforeTravel"></span>

`regionBeforeTravel (traveler, connector)`

[travel.t](../file/travel.t.html)\[[2168](../source/travel.t.html#2168)\]



This method is called just before travel takes places in this region
(when traveler is about to travel via connector).



<span id="regionDaemon"></span>

`regionDaemon ( )`

[travel.t](../file/travel.t.html)\[[2209](../source/travel.t.html#2209)\]



The regionDaemon method is executed on ever region in which the player
character is currently located. By default we call the region's
doScript() method so that the if the region is mixed in with an
EventList class, that EventList can be executed.



<span id="removeFromContents"></span>

`removeFromContents (obj, vec?)`

[travel.t](../file/travel.t.html)\[[2061](../source/travel.t.html#2061)\]



To remove an object from our contents we need to remove it from the
contents of every room in the region. If the optional vec parameter is
supplied it must be a vector; the rooms will then be removed from the
vector as well.



<span id="setFamiliarRooms"></span>

`setFamiliarRooms ( )`

[travel.t](../file/travel.t.html)\[[2025](../source/travel.t.html#2025)\]



Go through all the rooms in this region setting them to familiar if the
region is familiar.



<span id="travelerEntering"></span>

`travelerEntering (traveler, origin)`

[travel.t](../file/travel.t.html)\[[2125](../source/travel.t.html#2125)\]



This method is invoked when traveler is about to enter this region from
origin (the room traveled from.



<span id="travelerLeaving"></span>

`travelerLeaving (traveler, dest)`

[travel.t](../file/travel.t.html)\[[2119](../source/travel.t.html#2119)\]



This method is invoked when traveler is about to leave this region and
go to dest (the destination room).





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


