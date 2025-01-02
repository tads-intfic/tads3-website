<span class="title">sight</span><span class="type">object</span>

[sense.t](../file/sense.t.html)\[[252](../source/sense.t.html#252)\]

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

The senses. We define sight, sound, smell, and touch. We do not define a
separate sense for taste, since it would add nothing to our model: you
can taste something if and only if you can touch it.

To add a new sense, you must do the following:

\- Define the sense object itself, in parallel to the senses defined
below.

\- Modify class Material to set the default transparency level for this
sense by defining the property xxxThru - for most senses, the default
transparency level is 'opaque', but you must decide on the appropriate
default for your new sense.

\- Modify class Thing to set the default xxxSize setting, if desired.

\- Modify class Thing to set the default xxxPresence setting, if
desired.

\- Modify each instance of class 'Material' that should have a
non-default transparency for the sense by defining the property xxxThru
for the material.

\- Modify class Actor to add the sense to the default mySenses list;
this is only necessary if the sense is one that all actors should have
by default.

**`sight`**` :   `[`Sense`](../object/Sense.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`sight`**  
`         `[`Sense`](../object/Sense.html)  
`                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`ambienceProp`](#ambienceProp)`  `[`presenceProp`](#presenceProp)`  `[`sizeProp`](#sizeProp)`  `[`thruProp`](#thruProp)`  `

` `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `

Inherited from `Sense` :  
` `[`canObjBeSensed`](../object/Sense.html#canObjBeSensed)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="ambienceProp"></span>

`ambienceProp`<span class="rem">OVERRIDDEN</span>

[sense.t](../file/sense.t.html)\[[256](../source/sense.t.html#256)\]

<div class="desc">

*no description available*

</div>

<span id="presenceProp"></span>

`presenceProp`<span class="rem">OVERRIDDEN</span>

[sense.t](../file/sense.t.html)\[[255](../source/sense.t.html#255)\]

<div class="desc">

*no description available*

</div>

<span id="sizeProp"></span>

`sizeProp`<span class="rem">OVERRIDDEN</span>

[sense.t](../file/sense.t.html)\[[254](../source/sense.t.html#254)\]

<div class="desc">

*no description available*

</div>

<span id="thruProp"></span>

`thruProp`<span class="rem">OVERRIDDEN</span>

[sense.t](../file/sense.t.html)\[[253](../source/sense.t.html#253)\]

<div class="desc">

*no description available*

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

*(none)*

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>