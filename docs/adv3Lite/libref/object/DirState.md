---
layout: docs
---
<span class="title">DirState</span><span class="type">object</span>

[english.t](../file/english.t.html)\[[2009](../source/english.t.html#2009)\]

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



DirState. This is useful for SymConnectors and the like, whose
directional vocab may change according to which direction they're
approached from.

**`DirState`**` :   `[`State`](../object/State.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`DirState`**  
[`State`](../object/State.html)  
[`LState`](../object/LState.html)  
`                         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`adjectives`](#adjectives)[`stateProp`](#stateProp)

Inherited from `State` :  
[`all`](../object/State.html#all)[`vocabTab`](../object/State.html#vocabTab)[`vocabWords`](../object/State.html#vocabWords)

Inherited from `LState` :  
[`additionalInfo`](../object/LState.html#additionalInfo)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`appliesTo`](#appliesTo)

Inherited from `State` :  
[`classInit`](../object/State.html#classInit)[`construct`](../object/State.html#construct)[`getVocab`](../object/State.html#getVocab)[`matchName`](../object/State.html#matchName)

Inherited from `LState` :  
[`addToName`](../object/LState.html#addToName)[`getAdditionalInfo`](../object/LState.html#getAdditionalInfo)[`initWord`](../object/LState.html#initWord)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="adjectives"></span>

`adjectives`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[2011](../source/english.t.html#2011)\]



*no description available*



<span id="stateProp"></span>

`stateProp`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[2010](../source/english.t.html#2010)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="appliesTo"></span>

`appliesTo (obj)`<span class="rem">OVERRIDDEN</span>

[symconn.t](../file/symconn.t.html)\[[217](../source/symconn.t.html#217)\]



We exclude SymStairway because including 'up' or 'down' in its vocab
confuses the parser's interpretation of CLIMB UP and CLIMB DOWN.





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


