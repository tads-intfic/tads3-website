---
layout: docs
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



Downloadable temporary file descriptor. We create this object when the
program calls inputFile() to ask for a writable file. This lets the
caller create and write a temporary file on the server side; when the
caller is done with the file, we'll offer the file for download to the
client through the UI.

`class `**`DownloadTempFile`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`DownloadTempFile`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`isReady`](#isReady) [`isWebTempFile`](#isWebTempFile) [`mimeType`](#mimeType) [`resName`](#resName) [`resPath`](#resPath) [`tempFileName`](#tempFileName) [`timeCreated`](#timeCreated)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`closeFile`](#closeFile) [`construct`](#construct) [`getFilename`](#getFilename)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="isReady"></span>

`isReady`

[webui.t](../file/webui.t.html)\[[3415](../source/webui.t.html#3415)\]



is the file ready for download?



<span id="isWebTempFile"></span>

`isWebTempFile`

[webui.t](../file/webui.t.html)\[[3418](../source/webui.t.html#3418)\]



this is a web temp file



<span id="mimeType"></span>

`mimeType`

[webui.t](../file/webui.t.html)\[[3409](../source/webui.t.html#3409)\]



MIME type



<span id="resName"></span>

`resName`

[webui.t](../file/webui.t.html)\[[3405](../source/webui.t.html#3405)\]



root resource name, and full resource path



<span id="resPath"></span>

`resPath`

[webui.t](../file/webui.t.html)\[[3406](../source/webui.t.html#3406)\]



*no description available*



<span id="tempFileName"></span>

`tempFileName`

[webui.t](../file/webui.t.html)\[[3402](../source/webui.t.html#3402)\]



TemporaryFile object for the local temp file



<span id="timeCreated"></span>

`timeCreated`

[webui.t](../file/webui.t.html)\[[3412](../source/webui.t.html#3412)\]



creation timestamp, as a system tick count value



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="closeFile"></span>

`closeFile ( )`

[webui.t](../file/webui.t.html)\[[3392](../source/webui.t.html#3392)\]



*no description available*



<span id="construct"></span>

`construct (res, mimeType)`

[webui.t](../file/webui.t.html)\[[3370](../source/webui.t.html#3370)\]



*no description available*



<span id="getFilename"></span>

`getFilename ( )`

[webui.t](../file/webui.t.html)\[[3391](../source/webui.t.html#3391)\]



File spec interface. This allows the DownloadTempFile to be used as
though it were a filename string.

When the object is passed to one of the File.open methods, or to
saveGame(), setScriptFile(), etc., the system will call our
getFilename() method to determine the actual underlying file. We'll
return our temporary file object.

When the underlying file is closed, the system calls our closeFile()
method to notify us.





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


