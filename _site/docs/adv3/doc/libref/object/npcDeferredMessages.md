<span class="title">npcDeferredMessages</span><span class="type">object</span>

[msg_neu.t](../file/msg_neu.t.html)\[[2242](../source/msg_neu.t.html#2242)\]

[Superclass  
Tree](#_SuperClassTree_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)

<div class="fdesc">

Deferred NPC messages. We use this to report deferred messages from an
NPC to the player. A message is deferred when a parsing error occurs,
but the NPC can't talk to the player because there's no sense path to
the player. When this happens, the NPC queues the message for eventual
delivery; when a sense path appears later that lets the NPC talk to the
player, we deliver the message through this object. Since these messages
describe conditions that occurred in the past, we use the past tense to
phrase the messages.

This default implementation simply doesn't report deferred errors at
all. The default message voice is the parser/narrator character, and
there is simply no good way for the parser/narrator to say that a
command failed in the past for a given character: "Bob looks like he
didn't know which box you meant" just doesn't work. So, we'll simply not
report these errors at all.

To report messages in the NPC's voice directly, modify the NPC's Actor
object, or the Actor base class, to return npcDeferredMessagesDirect
rather than this object from getParserMessageObj().

**`npcDeferredMessages`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`npcDeferredMessages`**  
`         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

*(none)* <span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `

*(none)* <span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

*(none)*

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
