[FileInfo]{.title}[class]{.type}

[file.t](../file/file.t.html)\[[21](../source/file.t.html#21)\]

[Superclass\
Tree](#_SuperClassTree_)

[Subclass\
Tree](#_SubClassTree_)

[Global\
Objects](#_ObjectSummary_)

[Property\
Summary](#_PropSummary_)

[Method\
Summary](#_MethodSummary_)

[Property\
Details](#_Properties_)

[Method\
Details](#_Methods_)

::: fdesc
File status information. This is returned from file.getFileInfo().

`class `**`FileInfo`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`FileInfo`**\
`         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

*(none)* []{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`fileAccessTime`](#fileAccessTime)`  `[`fileAttrs`](#fileAttrs)`  `[`fileCreateTime`](#fileCreateTime)`  `[`fileLinkTarget`](#fileLinkTarget)`  `[`fileModifyTime`](#fileModifyTime)`  `[`fileSize`](#fileSize)`  `[`fileType`](#fileType)`  `[`isDir`](#isDir)`  `[`specialLink`](#specialLink)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`construct`](#construct)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#fileAccessTime}

`fileAccessTime`

[file.t](../file/file.t.html)\[[81](../source/file.t.html#81)\]

::: desc
*no description available*
:::

[]{#fileAttrs}

`fileAttrs`

[file.t](../file/file.t.html)\[[69](../source/file.t.html#69)\]

::: desc
file attributes, as a combination of FileAttrXxx bit flags (see
filename.h)
:::

[]{#fileCreateTime}

`fileCreateTime`

[file.t](../file/file.t.html)\[[79](../source/file.t.html#79)\]

::: desc
The file\'s time of creation, last modification, and last access, as
Date objects. On some systems, these timestamps might not all be
available; an item that\'s not available is set to nil.
:::

[]{#fileLinkTarget}

`fileLinkTarget`

[file.t](../file/file.t.html)\[[57](../source/file.t.html#57)\]

::: desc
Link target. If the file is a symbolic link, this contains a string
giving the target file\'s path. This is the direct target of this link,
which might itself be another link.
:::

[]{#fileModifyTime}

`fileModifyTime`

[file.t](../file/file.t.html)\[[80](../source/file.t.html#80)\]

::: desc
*no description available*
:::

[]{#fileSize}

`fileSize`

[file.t](../file/file.t.html)\[[72](../source/file.t.html#72)\]

::: desc
size of the file in bytes
:::

[]{#fileType}

`fileType`

[file.t](../file/file.t.html)\[[63](../source/file.t.html#63)\]

::: desc
type of the file, as a combination of FileTypeXxx bit flags (see
filename.h)
:::

[]{#isDir}

`isDir`

[file.t](../file/file.t.html)\[[38](../source/file.t.html#38)\]

::: desc
is this file a directory?
:::

[]{#specialLink}

`specialLink`

[file.t](../file/file.t.html)\[[50](../source/file.t.html#50)\]

::: desc
Is this a special link directory? This is FileTypeSelfLink for a
directory link to itself; it\'s FileTypeParentLink for a directory link
to the parent; it\'s zero for all other files. On Windows and Unix,
these flags will be set for the special \".\" and \"..\" directories,
respectively. These flags only apply to the \*system-defined\* special
links; they aren\'t set for user-created links that happen to point to
self or parent. This is zero for all other files.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#construct}

`construct (typ, siz, ctime, mtime, atime, target, attrs, ...)`

[file.t](../file/file.t.html)\[[22](../source/file.t.html#22)\]

::: desc
*no description available*
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
