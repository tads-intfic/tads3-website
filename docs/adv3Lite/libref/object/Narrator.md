---
layout: docs
---
<span class="title">Narrator</span><span class="type">object</span>

[messages.t](../file/messages.t.html)\[[21](../source/messages.t.html#21)\]

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



Global narration parameters. This object's properties control the way
parameter-based messages are generated. The message generator consults
the narration parameters each time it generates a message, so you can
change the settings on the fly, and subsequent output will automatically
adapt to the latest settings.

**`Narrator`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`Narrator`**  
`         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`tense`](#tense)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  
*(none)* <span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="tense"></span>

`tense`

[messages.t](../file/messages.t.html)\[[52](../source/messages.t.html#52)\]



The verb tense of the narration. This is one of the VerbTense objects
(Present, Past, Perfect, Past Perfect, Future, Future Perfect). This
controls the way {verb} substitution parameters are generated, which in
turn affects most library messages. The default is Present, which is the
conventional tense for most IF.

Examples of the English tenses:

  
Present: Bob opens the box.  
Past: Bob opened the box.  
Perfect: Bob has opened the box.  
Past Perfect: Bob had opened the box.  
Future: Bob will open the box.  
Future Perfect: Bob will have opened the box.

(Language modules are free to add their own tenses if the target
language has others that would be of interest to IF authors. They're
also free to ignore any of the "standard" tenses we define. At a
minimum, though, some form of present tense should always be provided,
since most IF is narrated in the present. If you need to differentiate
among different present tenses, you might prefer to define your own IDs
instead of using the generic Present, but you should still support
\*some\* present tense that's suitable for narration. Some type of past
tense usable in narration is also nice to have. The others are probably
of marginal value; in English, at least, other tenses are rare in any
kind of narrative fiction, and are mostly limited to experimental or
novelty use.)



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


