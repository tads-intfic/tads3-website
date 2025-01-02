---
---
<span class="title">DownloadTempFile</span><span class="type">class</span>

[webui.t](../file/webui.t.html)\[[3369](../source/webui.t.html#3369)\]

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

Downloadable temporary file descriptor. We create this object when the
program calls inputFile() to ask for a writable file. This lets the
caller create and write a temporary file on the server side; when the
caller is done with the file, we'll offer the file for download to the
client through the UI.

`class `**`DownloadTempFile`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`DownloadTempFile`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`isReady`](#isReady)`  `[`isWebTempFile`](#isWebTempFile)`  `[`mimeType`](#mimeType)`  `[`resName`](#resName)`  `[`resPath`](#resPath)`  `[`tempFileName`](#tempFileName)`  `[`timeCreated`](#timeCreated)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`closeFile`](#closeFile)`  `[`construct`](#construct)`  `[`getFilename`](#getFilename)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="isReady"></span>

`isReady`

[webui.t](../file/webui.t.html)\[[3415](../source/webui.t.html#3415)\]

<div class="desc">

is the file ready for download?

</div>

<span id="isWebTempFile"></span>

`isWebTempFile`

[webui.t](../file/webui.t.html)\[[3418](../source/webui.t.html#3418)\]

<div class="desc">

this is a web temp file

</div>

<span id="mimeType"></span>

`mimeType`

[webui.t](../file/webui.t.html)\[[3409](../source/webui.t.html#3409)\]

<div class="desc">

MIME type

</div>

<span id="resName"></span>

`resName`

[webui.t](../file/webui.t.html)\[[3405](../source/webui.t.html#3405)\]

<div class="desc">

root resource name, and full resource path

</div>

<span id="resPath"></span>

`resPath`

[webui.t](../file/webui.t.html)\[[3406](../source/webui.t.html#3406)\]

<div class="desc">

*no description available*

</div>

<span id="tempFileName"></span>

`tempFileName`

[webui.t](../file/webui.t.html)\[[3402](../source/webui.t.html#3402)\]

<div class="desc">

TemporaryFile object for the local temp file

</div>

<span id="timeCreated"></span>

`timeCreated`

[webui.t](../file/webui.t.html)\[[3412](../source/webui.t.html#3412)\]

<div class="desc">

creation timestamp, as a system tick count value

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="closeFile"></span>

`closeFile ( )`

[webui.t](../file/webui.t.html)\[[3392](../source/webui.t.html#3392)\]

<div class="desc">

*no description available*

</div>

<span id="construct"></span>

`construct (res, mimeType)`

[webui.t](../file/webui.t.html)\[[3370](../source/webui.t.html#3370)\]

<div class="desc">

*no description available*

</div>

<span id="getFilename"></span>

`getFilename ( )`

[webui.t](../file/webui.t.html)\[[3391](../source/webui.t.html#3391)\]

<div class="desc">

File spec interface. This allows the DownloadTempFile to be used as
though it were a filename string.

When the object is passed to one of the File.open methods, or to
saveGame(), setScriptFile(), etc., the system will call our
getFilename() method to determine the actual underlying file. We'll
return our temporary file object.

When the underlying file is closed, the system calls our closeFile()
method to notify us.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
