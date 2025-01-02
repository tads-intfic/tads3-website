---
layout: docs
---
<span class="title">StyleTag</span><span class="type">class</span>

[output.t](../file/output.t.html)\[[920](../source/output.t.html#920)\]

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

Style tag. This defines an HTML-like tag that can be used in output text
to display an author-customizable substitution string.

Each StyleTag object defines the name of the tag, which can be invoked
in output text using the syntax "\<.name\>" - we require the period
after the opening angle-bracket to plainly distinguish the sequence as a
style tag, not a regular HTML tag.

Each StyleTag also defines the text string that should be substituted
for each occurrence of the "\<.name\>" sequence in output text, and,
optionally, another string that is substituted for occurrences of the
"closing" version of the tag, invoked with the syntax "\<./name\>".

`class `**`StyleTag`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`StyleTag`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`StyleTag`**  
[`HtmlStyleTag`](../object/HtmlStyleTag.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

[`announceObjStyleTag`](../object/announceObjStyleTag.html)[`assumeStyleTag`](../object/assumeStyleTag.html)[`extraHintStyleTag`](../object/extraHintStyleTag.html)[`notificationStyleTag`](../object/notificationStyleTag.html)[`parserStyleTag`](../object/parserStyleTag.html)[`roomcontentsStyleTag`](../object/roomcontentsStyleTag.html)[`roomdescStyleTag`](../object/roomdescStyleTag.html)[`roomnameStyleTag`](../object/roomnameStyleTag.html)[`roomparaStyleTag`](../object/roomparaStyleTag.html)
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`closeText`](#closeText)[`openText`](#openText)[`tagName`](#tagName)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>



*(none)* <span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="closeText"></span>

`closeText`

[output.t](../file/output.t.html)\[[935](../source/output.t.html#935)\]

<div class="desc">

Closing text - this is substituted for each instance of the tag with a
'/' prefix (\<./xxx\>). Note that non-container tags don't have closing
text at all.

</div>

<span id="openText"></span>

`openText`

[output.t](../file/output.t.html)\[[928](../source/output.t.html#928)\]

<div class="desc">

opening text - this is substituted for each instance of the tag without
a '/' prefix

</div>

<span id="tagName"></span>

`tagName`

[output.t](../file/output.t.html)\[[922](../source/output.t.html#922)\]

<div class="desc">

name of the tag - the tag appears in source text in \<.xxx\> notation

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

*(none)*

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
