---
layout: docs
---
<span class="title">SettingsFileComment</span><span class="type">class</span>

[settings.t](../file/settings.t.html)\[[587](../source/settings.t.html#587)\]

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



SettingsFileComment - this object describes an unparsed line in the
settings file. We treat lines that don't match our parsing rules as
comments. We preserve the contents and order of these lines, but we
don't otherwise try to interpret them.

`class `**`SettingsFileComment`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`SettingsFileComment`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`str_`](#str_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct) [`writeToFile`](#writeToFile)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="str_"></span>

`str_`

[settings.t](../file/settings.t.html)\[[602](../source/settings.t.html#602)\]



the text from the file



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (str)`

[settings.t](../file/settings.t.html)\[[588](../source/settings.t.html#588)\]



*no description available*



<span id="writeToFile"></span>

`writeToFile (f)`

[settings.t](../file/settings.t.html)\[[599](../source/settings.t.html#599)\]



write the comment line to a file





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


