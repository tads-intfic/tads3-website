---
layout: docs
---
<span class="title">FileInfo</span><span class="type">class</span>

[file.t](../file/file.t.html)\[[21](../source/file.t.html#21)\]

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



File status information. This is returned from file.getFileInfo().

`class `**`FileInfo`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`FileInfo`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`fileAccessTime`](#fileAccessTime)[`fileAttrs`](#fileAttrs)[`fileCreateTime`](#fileCreateTime)[`fileLinkTarget`](#fileLinkTarget)[`fileModifyTime`](#fileModifyTime)[`fileSize`](#fileSize)[`fileType`](#fileType)[`isDir`](#isDir)[`specialLink`](#specialLink)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="fileAccessTime"></span>

`fileAccessTime`

[file.t](../file/file.t.html)\[[81](../source/file.t.html#81)\]



*no description available*



<span id="fileAttrs"></span>

`fileAttrs`

[file.t](../file/file.t.html)\[[69](../source/file.t.html#69)\]



file attributes, as a combination of FileAttrXxx bit flags (see
filename.h)



<span id="fileCreateTime"></span>

`fileCreateTime`

[file.t](../file/file.t.html)\[[79](../source/file.t.html#79)\]



The file's time of creation, last modification, and last access, as Date
objects. On some systems, these timestamps might not all be available;
an item that's not available is set to nil.



<span id="fileLinkTarget"></span>

`fileLinkTarget`

[file.t](../file/file.t.html)\[[57](../source/file.t.html#57)\]



Link target. If the file is a symbolic link, this contains a string
giving the target file's path. This is the direct target of this link,
which might itself be another link.



<span id="fileModifyTime"></span>

`fileModifyTime`

[file.t](../file/file.t.html)\[[80](../source/file.t.html#80)\]



*no description available*



<span id="fileSize"></span>

`fileSize`

[file.t](../file/file.t.html)\[[72](../source/file.t.html#72)\]



size of the file in bytes



<span id="fileType"></span>

`fileType`

[file.t](../file/file.t.html)\[[63](../source/file.t.html#63)\]



type of the file, as a combination of FileTypeXxx bit flags (see
filename.h)



<span id="isDir"></span>

`isDir`

[file.t](../file/file.t.html)\[[38](../source/file.t.html#38)\]



is this file a directory?



<span id="specialLink"></span>

`specialLink`

[file.t](../file/file.t.html)\[[50](../source/file.t.html#50)\]



Is this a special link directory? This is FileTypeSelfLink for a
directory link to itself; it's FileTypeParentLink for a directory link
to the parent; it's zero for all other files. On Windows and Unix, these
flags will be set for the special "." and ".." directories,
respectively. These flags only apply to the \*system-defined\* special
links; they aren't set for user-created links that happen to point to
self or parent. This is zero for all other files.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (typ, siz, ctime, mtime, atime, target, attrs, ...)`

[file.t](../file/file.t.html)\[[22](../source/file.t.html#22)\]



*no description available*





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


