---
layout: docs
---
<span class="title">StyleTag</span><span class="type">class</span>

[output.t](../file/output.t.html)\[[765](../source/output.t.html#765)\]

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



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`StyleTag`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`StyleTag`**  
[`HtmlStyleTag`](../object/HtmlStyleTag.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



[`announceObjStyleTag`](../object/announceObjStyleTag.html) [`assumeStyleTag`](../object/assumeStyleTag.html) [`notificationStyleTag`](../object/notificationStyleTag.html) [`parserStyleTag`](../object/parserStyleTag.html) [`roomdescStyleTag`](../object/roomdescStyleTag.html) [`roomnameStyleTag`](../object/roomnameStyleTag.html) [`roomparaStyleTag`](../object/roomparaStyleTag.html) [`tipStyleTag`](../object/tipStyleTag.html)
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`closeText`](#closeText) [`openText`](#openText) [`tagName`](#tagName)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  





*(none)* <span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="closeText"></span>

`closeText`

[output.t](../file/output.t.html)\[[780](../source/output.t.html#780)\]



Closing text - this is substituted for each instance of the tag with a
'/' prefix (\<./xxx\>). Note that non-container tags don't have closing
text at all.



<span id="openText"></span>

`openText`

[output.t](../file/output.t.html)\[[773](../source/output.t.html#773)\]



opening text - this is substituted for each instance of the tag without
a '/' prefix



<span id="tagName"></span>

`tagName`

[output.t](../file/output.t.html)\[[767](../source/output.t.html#767)\]



name of the tag - the tag appears in source text in \<.xxx\> notation



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


