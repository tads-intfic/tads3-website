[OutputStreamWindow]{.title}[class]{.type}

[output.t](../file/output.t.html)\[[1772](../source/output.t.html#1772)\]

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
Output stream window.

This is an abstract base class for UI widgets that have output streams,
such as Banner Windows and Web UI windows. This base class essentially
handles the interior of the window, and leaves the details of the
window\'s layout in the broader UI to subclasses.

`class `**`OutputStreamWindow`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`OutputStreamWindow`**\
`         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`OutputStreamWindow`**\
`         `[`BannerWindow`](../object/BannerWindow.html)\
`         `[`WebBannerWin`](../object/WebBannerWin.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`outputStream_`](#outputStream_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`captureOutput`](#captureOutput)`  `[`createOutputStream`](#createOutputStream)`  `[`createOutputStreamObj`](#createOutputStreamObj)`  `[`setOutputStream`](#setOutputStream)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#outputStream_}

`outputStream_`

[output.t](../file/output.t.html)\[[1838](../source/output.t.html#1838)\]

::: desc
My output stream - this is a transient OutputStream instance. Subclasses
must create this explicitly by calling createOutputStream() when the
underlying UI window is first created.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#captureOutput}

`captureOutput (func)`

[output.t](../file/output.t.html)\[[1779](../source/output.t.html#1779)\]

::: desc
Invoke the given callback function, setting the default output stream to
the window\'s output stream for the duration of the call. This allows
invoking any code that writes to the current default output stream and
displaying the result in the window.
:::

[]{#createOutputStream}

`createOutputStream ( )`

[output.t](../file/output.t.html)\[[1814](../source/output.t.html#1814)\]

::: desc
Create our output stream. We\'ll create the appropriate output stream
subclass and set it up with our default output filters. Subclasses can
override this as needed to customize the filters.
:::

[]{#createOutputStreamObj}

`createOutputStreamObj ( )`

[output.t](../file/output.t.html)\[[1830](../source/output.t.html#1830)\]

::: desc
Create the output stream object. Subclasses can override this to create
the appropriate stream subclass. Note that the stream should always be
created as a transient object.
:::

[]{#setOutputStream}

`setOutputStream ( )`

[output.t](../file/output.t.html)\[[1803](../source/output.t.html#1803)\]

::: desc
Make my output stream the default in the output manager. Returns the
previous default output stream; the caller can note the return value and
use it later to restore the original output stream via a call to
outputManager.setOutputStream(), if desired.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
