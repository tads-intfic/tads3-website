[DownloadTempFile]{.title}[class]{.type}

[webui.t](../file/webui.t.html)\[[3369](../source/webui.t.html#3369)\]

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
Downloadable temporary file descriptor. We create this object when the
program calls inputFile() to ask for a writable file. This lets the
caller create and write a temporary file on the server side; when the
caller is done with the file, we\'ll offer the file for download to the
client through the UI.

`class `**`DownloadTempFile`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`DownloadTempFile`**\
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

` `[`isReady`](#isReady)`  `[`isWebTempFile`](#isWebTempFile)`  `[`mimeType`](#mimeType)`  `[`resName`](#resName)`  `[`resPath`](#resPath)`  `[`tempFileName`](#tempFileName)`  `[`timeCreated`](#timeCreated)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`closeFile`](#closeFile)`  `[`construct`](#construct)`  `[`getFilename`](#getFilename)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#isReady}

`isReady`

[webui.t](../file/webui.t.html)\[[3415](../source/webui.t.html#3415)\]

::: desc
is the file ready for download?
:::

[]{#isWebTempFile}

`isWebTempFile`

[webui.t](../file/webui.t.html)\[[3418](../source/webui.t.html#3418)\]

::: desc
this is a web temp file
:::

[]{#mimeType}

`mimeType`

[webui.t](../file/webui.t.html)\[[3409](../source/webui.t.html#3409)\]

::: desc
MIME type
:::

[]{#resName}

`resName`

[webui.t](../file/webui.t.html)\[[3405](../source/webui.t.html#3405)\]

::: desc
root resource name, and full resource path
:::

[]{#resPath}

`resPath`

[webui.t](../file/webui.t.html)\[[3406](../source/webui.t.html#3406)\]

::: desc
*no description available*
:::

[]{#tempFileName}

`tempFileName`

[webui.t](../file/webui.t.html)\[[3402](../source/webui.t.html#3402)\]

::: desc
TemporaryFile object for the local temp file
:::

[]{#timeCreated}

`timeCreated`

[webui.t](../file/webui.t.html)\[[3412](../source/webui.t.html#3412)\]

::: desc
creation timestamp, as a system tick count value
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#closeFile}

`closeFile ( )`

[webui.t](../file/webui.t.html)\[[3392](../source/webui.t.html#3392)\]

::: desc
*no description available*
:::

[]{#construct}

`construct (res, mimeType)`

[webui.t](../file/webui.t.html)\[[3370](../source/webui.t.html#3370)\]

::: desc
*no description available*
:::

[]{#getFilename}

`getFilename ( )`

[webui.t](../file/webui.t.html)\[[3391](../source/webui.t.html#3391)\]

::: desc
File spec interface. This allows the DownloadTempFile to be used as
though it were a filename string.

When the object is passed to one of the File.open methods, or to
saveGame(), setScriptFile(), etc., the system will call our
getFilename() method to determine the actual underlying file. We\'ll
return our temporary file object.

When the underlying file is closed, the system calls our closeFile()
method to notify us.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
