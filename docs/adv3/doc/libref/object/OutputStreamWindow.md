---
layout: docs
---
<span class="title">OutputStreamWindow</span><span class="type">class</span>

[output.t](../file/output.t.html)\[[1948](../source/output.t.html#1948)\]

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



Output stream window.

This is an abstract base class for UI widgets that have output streams,
such as Banner Windows and Web UI windows. This base class essentially
handles the interior of the window, and leaves the details of the
window's layout in the broader UI to subclasses.

`class `**`OutputStreamWindow`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`OutputStreamWindow`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`OutputStreamWindow`**  
[`BannerWindow`](../object/BannerWindow.html)  
[`WebBannerWin`](../object/WebBannerWin.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`outputStream_`](#outputStream_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`captureOutput`](#captureOutput) [`createOutputStream`](#createOutputStream) [`createOutputStreamObj`](#createOutputStreamObj) [`setOutputStream`](#setOutputStream)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="outputStream_"></span>

`outputStream_`

[output.t](../file/output.t.html)\[[2015](../source/output.t.html#2015)\]



My output stream - this is a transient OutputStream instance. Subclasses
must create this explicitly by calling createOutputStream() when the
underlying UI window is first created.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="captureOutput"></span>

`captureOutput (func)`

[output.t](../file/output.t.html)\[[1955](../source/output.t.html#1955)\]



Invoke the given callback function, setting the default output stream to
the window's output stream for the duration of the call. This allows
invoking any code that writes to the current default output stream and
displaying the result in the window.



<span id="createOutputStream"></span>

`createOutputStream ( )`

[output.t](../file/output.t.html)\[[1990](../source/output.t.html#1990)\]



Create our output stream. We'll create the appropriate output stream
subclass and set it up with our default output filters. Subclasses can
override this as needed to customize the filters.



<span id="createOutputStreamObj"></span>

`createOutputStreamObj ( )`

[output.t](../file/output.t.html)\[[2007](../source/output.t.html#2007)\]



Create the output stream object. Subclasses can override this to create
the appropriate stream subclass. Note that the stream should always be
created as a transient object.



<span id="setOutputStream"></span>

`setOutputStream ( )`

[output.t](../file/output.t.html)\[[1979](../source/output.t.html#1979)\]



Make my output stream the default in the output manager. Returns the
previous default output stream; the caller can note the return value and
use it later to restore the original output stream via a call to
outputManager.setOutputStream(), if desired.
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


