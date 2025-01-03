---
layout: docs
---
<span class="title">en_us.h</span><span class="type">file</span>

[source file](../source/en_us.h.html)

**Classes**  
[Summary](#_ClassSummary_)  
 

**Functions**  
[Summary](#_FunctionSummary_)  
[Details](#_Functions_)

**Macros**  
[Summary](#_MacroSummary_)  
[Details](#_Macros_)

**Enums**  
[Summary](#_EnumSummary_)  
[Details](#_Enums_)

**Templates**  
[Summary](#_TemplateSummary_)  
[Details](#_Templates_)



TADS 3 Library - US English header

This file defines common properties, macros, and other identifiers used
throughout the US English modules of the TADS 3 library.



<span id="_ClassSummary_"></span>



<span class="hdln">Summary of Classes</span>  



*(none)* <span id="FunctionSummary_"></span>



<span class="hdln">Summary of Global Functions</span>  



*(none)* <span id="_MacroSummary_"></span>



<span class="hdln">Summary of Macros</span>  



[`dobjList`](#dobjList) [`iobjList`](#iobjList) [`setPastTense`](#setPastTense) [`singleDir`](#singleDir) [`singleDobj`](#singleDobj) [`singleIobj`](#singleIobj) [`singleLiteral`](#singleLiteral) [`singleNumber`](#singleNumber) [`singleTopic`](#singleTopic) [`tSel`](#tSel) [`VerbRule`](#VerbRule) [`withPast`](#withPast) [`withPresent`](#withPresent)

<span id="_EnumSummary_"></span>



<span class="hdln">Summary of Enums</span>  



*(none)* <span id="_TemplateSummary_"></span>



<span class="hdln">Summary of Templates</span>  



[`Actor`](#Actor) [`DeadEndConnector`](#DeadEndConnector) [`Enterable`](#Enterable) [`Exitable`](#Exitable) [`NoTravelMessage`](#NoTravelMessage) [`OneWayRoomConnector`](#OneWayRoomConnector) [`Passage`](#Passage) [`Room`](#Room) [`Thing`](#Thing) [`ThingState`](#ThingState) [`TravelMessage`](#TravelMessage) [`Unthing`](#Unthing) [`VocabObject`](#VocabObject)

<span id="_Functions_"></span>



<span class="hdln">Global Functions</span>  



*(none)* <span id="_Macros_"></span>



<span class="hdln">Macros</span>  



<span id="dobjList"></span>

`dobjList`

[en_us.h](../file/en_us.h.html)\[[158](../source/en_us.h.html#158)\]



`nounList->dobjMatch`  
*no description available*



<span id="iobjList"></span>

`iobjList`

[en_us.h](../file/en_us.h.html)\[[159](../source/en_us.h.html#159)\]



`nounList->iobjMatch`  
*no description available*



<span id="setPastTense"></span>

`setPastTense (val)`

[en_us.h](../file/en_us.h.html)\[[175](../source/en_us.h.html#175)\]



`(gameMain.usePastTense = (val))`  
Set the current narrative tense. Use val = true for past and val = nil
for present.



<span id="singleDir"></span>

`singleDir`

[en_us.h](../file/en_us.h.html)\[[163](../source/en_us.h.html#163)\]



`directionName->dirMatch`  
*no description available*



<span id="singleDobj"></span>

`singleDobj`

[en_us.h](../file/en_us.h.html)\[[156](../source/en_us.h.html#156)\]



`singleNoun->dobjMatch`  
*no description available*



<span id="singleIobj"></span>

`singleIobj`

[en_us.h](../file/en_us.h.html)\[[157](../source/en_us.h.html#157)\]



`singleNoun->iobjMatch`  
*no description available*



<span id="singleLiteral"></span>

`singleLiteral`

[en_us.h](../file/en_us.h.html)\[[162](../source/en_us.h.html#162)\]



`literalPhrase->literalMatch`  
*no description available*



<span id="singleNumber"></span>

`singleNumber`

[en_us.h](../file/en_us.h.html)\[[160](../source/en_us.h.html#160)\]



`numberPhrase->numMatch`  
*no description available*



<span id="singleTopic"></span>

`singleTopic`

[en_us.h](../file/en_us.h.html)\[[161](../source/en_us.h.html#161)\]



`topicPhrase->topicMatch`  
*no description available*



<span id="tSel"></span>

`tSel (presVal, pastVal)`

[en_us.h](../file/en_us.h.html)\[[181](../source/en_us.h.html#181)\]



`(gameMain.usePastTense ? (pastVal) : (presVal))`  
Shorthand macro for selecting one of two values depending on the current
narrative tense.



<span id="VerbRule"></span>

`VerbRule (tag)`

[en_us.h](../file/en_us.h.html)\[[155](../source/en_us.h.html#155)\]



`grammar predicate(tag):`  
Convenience macros for defining command grammar.

A command's grammar is defined via a 'grammar' rule definition for the
'predicate' production; the VerbRule macro can be used for better
readability.

Within a command grammar rule, there are several commonly-used object
roles assigned to single-noun or noun-list phrases. We provide the
singleDobj, dobjList, singleIobj, and iobjList macros to make these
assignments more readable. In addition, number, topic, literal, and
direction phrases can be assigned with singleNumber, singleTopic,
singleLiteral, and singleDir, respectively.



<span id="withPast"></span>

`withPast (callback)`

[en_us.h](../file/en_us.h.html)\[[189](../source/en_us.h.html#189)\]



`(withTense(true, (callback)))`  
*no description available*



<span id="withPresent"></span>

`withPresent (callback)`

[en_us.h](../file/en_us.h.html)\[[188](../source/en_us.h.html#188)\]



`(withTense(nil, (callback)))`  
Temporarily override the current narrative tense and invoke a callback
function.



<span id="_Enums_"></span>



<span class="hdln">Enums</span>  



*(none)* <span id="_Templates_"></span>



<span class="hdln">Templates</span>  



<span id="Actor"></span>

`Actor`

[en_us.h](../file/en_us.h.html)\[[94](../source/en_us.h.html#94)\]



`'vocabWords' 'name' @location? "npcDesc";`  
For actors, we generally override the npcDesc or pcDesc rather than the
base desc. For the standard templates, set the npcDesc, since most
actors are NPC's rather than the player character.



<span id="DeadEndConnector"></span>

`DeadEndConnector`

[en_us.h](../file/en_us.h.html)\[[126](../source/en_us.h.html#126)\]



`'apparentDestName'? "travelDesc" | [eventList];`  
*no description available*



<span id="Enterable"></span>

`Enterable`

[en_us.h](../file/en_us.h.html)\[[112](../source/en_us.h.html#112)\]



`->connector inherited;`  
For enterables, allow special syntax to point to the connector which an
actor uses to traverse into the enterable.



<span id="Exitable"></span>

`Exitable`

[en_us.h](../file/en_us.h.html)\[[113](../source/en_us.h.html#113)\]



`->connector inherited;`  
*no description available*



<span id="NoTravelMessage"></span>

`NoTravelMessage`

[en_us.h](../file/en_us.h.html)\[[125](../source/en_us.h.html#125)\]



`"travelDesc" | [eventList];`  
For connectors that don't go anywhere but do show a message on a travel
attempt, we just need to specify the travel message.



<span id="OneWayRoomConnector"></span>

`OneWayRoomConnector`

[en_us.h](../file/en_us.h.html)\[[106](../source/en_us.h.html#106)\]



`->destination;`  
For one-way room connectors, provide special syntax to point to the
destination room.



<span id="Passage"></span>

`Passage`

[en_us.h](../file/en_us.h.html)\[[100](../source/en_us.h.html#100)\]



`->masterObject inherited;`  
For passages, allow special syntax to point to the master side of the
passage.



<span id="Room"></span>

`Room`

[en_us.h](../file/en_us.h.html)\[[87](../source/en_us.h.html#87)\]



`'roomName' 'destName'? 'name'? "desc"?;`  
For rooms, we normally have no vocabulary words, but we do have a name
and description, and optionally a "destination name" to use to describe
connectors from adjoining rooms.



<span id="Thing"></span>

`Thing`

[en_us.h](../file/en_us.h.html)\[[80](../source/en_us.h.html#80)\]



`'vocabWords' 'name' @location? "desc"?;`  
Define some templates that apply to ordinary objects (descendants of
Thing).



<span id="ThingState"></span>

`ThingState`

[en_us.h](../file/en_us.h.html)\[[135](../source/en_us.h.html#135)\]



`'listName_' +listingOrder?;`  
ThingState objects



<span id="TravelMessage"></span>

`TravelMessage`

[en_us.h](../file/en_us.h.html)\[[119](../source/en_us.h.html#119)\]



`->destination "travelDesc" | [eventList];`  
For TravelMessage connectors, provide special syntax to specify the
message and point to the destination.



<span id="Unthing"></span>

`Unthing`

[en_us.h](../file/en_us.h.html)\[[132](../source/en_us.h.html#132)\]



`'vocabWords' 'name' @location? 'notHereMsg'?;`  
Unthings are defined pretty much like Things, except they have no use
for a desc, and frequently want a custom notHereMsg.



<span id="VocabObject"></span>

`VocabObject`

[en_us.h](../file/en_us.h.html)\[[74](../source/en_us.h.html#74)\]



`'vocabWords';`  
Templates for the basic vocabulary object
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


