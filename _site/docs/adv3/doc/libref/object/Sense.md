<span class="title">Sense</span><span class="type">class</span>

[sense.t](../file/sense.t.html)\[[104](../source/sense.t.html#104)\]

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

Sense: the basic class for senses.

`class `**`Sense`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`Sense`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

` `[`sight`](../object/sight.html)`  `[`smell`](../object/smell.html)`  `[`sound`](../object/sound.html)`  `[`touch`](../object/touch.html)`  `
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`ambienceProp`](#ambienceProp)`  `[`presenceProp`](#presenceProp)`  `[`sizeProp`](#sizeProp)`  `[`thruProp`](#thruProp)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`canObjBeSensed`](#canObjBeSensed)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="ambienceProp"></span>

`ambienceProp`

[sense.t](../file/sense.t.html)\[[173](../source/sense.t.html#173)\]

<div class="desc">

Each sense can define this property to specify a property pointer used
to define a Thing's "ambient" energy emissions. Senses which do not use
ambient energy should define this to nil.

Some senses work only on directly emitted sensory data; human hearing,
for example, has no (at least effectively no) use for reflected sound,
and can sense objects only by the sounds they're actually emitting.
Sight, on the other hand, can make use not only of light emitted by an
object but of light reflected by the object. So, sight defines an
ambience property, whereas hearing, touch, and smell do not.

</div>

<span id="presenceProp"></span>

`presenceProp`

[sense.t](../file/sense.t.html)\[[158](../source/sense.t.html#158)\]

<div class="desc">

Each sense must define the property presenceProp as a property pointer
giving the xxxPresence property for the sense. The xxxPresence property
is the property of a Thing which determines whether or not the object
has a "presence" in this sense, which is to say whether or not the
object is emitting any detectable sensory data for the sense. For
example, soundPresence indicates whether or not a Thing is making any
noise.

The sensory presence is used to determine if an object is in scope. An
object with a detectable sensory presence is normally in scope. Note
that sounds and smells emitted by a tangible object are frequently
represented as additional intangible objects, and in these cases the
intangible object (the sensory emanation) is usually the object with a
sensory presence, rather than the tangible object making the noise/odor.
However, it is sometimes obvious that a particular sound or odor is
coming from a particular kind of object, so the presence of the sound or
odor implies the presence of the source object and thus places the
source object in scope. In such cases, it is desirable for the source
object to have a sensory presence of its own, in addition to the sensory
presence of the intangible sensory emanation object.

Note that the "presence" doesn't have any effect on whether or not an
object can be sensed. Only the sense path matters for that: an object
without a presence can still be sensed if there's a non-opaque sense
path to the object. Presence only determines whether or not an object is
\*actively\* calling attention to itself.

</div>

<span id="sizeProp"></span>

`sizeProp`

[sense.t](../file/sense.t.html)\[[125](../source/sense.t.html#125)\]

<div class="desc">

Each sense must define the property sizeProp as a property pointer
giving the xxxSize property for the sense. The xxxSize property is the
property of a Thing which determines how "large" the object is with
respect to the sense. For example, sightSize indicates how large the
object is visually, while soundSize indicates how loud the object is.

The purpose of an object's size in a given sense is to determine how
well the object can be sensed through an obscuring medium or at a
distance.

</div>

<span id="thruProp"></span>

`thruProp`

[sense.t](../file/sense.t.html)\[[111](../source/sense.t.html#111)\]

<div class="desc">

Each sense must define the property thruProp as a property pointer
giving the xxxThru property for the sense. The xxxThru property is the
property of a material which determines how the sense passes through
that material.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="canObjBeSensed"></span>

`canObjBeSensed (obj, trans, ambient)`

[sense.t](../file/sense.t.html)\[[188](../source/sense.t.html#188)\]

<div class="desc">

Determine if, in general, the given object can be sensed under the given
conditions. Returns true if so, nil if not. By default, if the ambient
level is zero, we'll return nil; otherwise, if the transparency level is
'transparent', we'll return true; otherwise, we'll consult the object's
size:

\- Small objects cannot be sensed under less than transparent
conditions.

\- Medium or large objects can be sensed in any conditions other than
opaque.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
