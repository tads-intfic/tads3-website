---
layout: docs
---
<span class="title">FileUpload</span><span class="type">class</span>

[tadsnet.t](../file/tadsnet.t.html)\[[292](../source/tadsnet.t.html#292)\]

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

A FileUpload represents a file uploaded by a network client via a
protocol server, such as an HTTPServer.

When your program is acting as a network server, a FileUpload object
represents a file received from the client. For example,
HTTPRequest.getFormFields() returns a FileUpload object to represent
each \<INPUT TYPE=FILE\> field in the posted form.

When your program acts as a network client (via sendNetRequest), you can
create use FileUpload to post file attachments to posted forms.

`class `**`FileUpload`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`FileUpload`**  
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

` `[`contentType`](#contentType)`  `[`file`](#file)`  `[`filename`](#filename)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`construct`](#construct)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="contentType"></span>

`contentType`

[tadsnet.t](../file/tadsnet.t.html)\[[335](../source/tadsnet.t.html#335)\]

<div class="desc">

The content type. This a string giving the MIME type specified by the
client with the upload. This is the full content-type string, including
any attributes, such "charset" for a text type. This can be nil if the
client doesn't specify a content-type at all.

It's important to recognize that this information is supplied by the
client, and is NOT validated by the protocol server. At best you should
consider it a suggestion, and at worst a malicious lie. The client could
be innocently mistaken about the type, or could even be intentionally
misrepresenting it. You should always validate the actual contents,
rather than relying on the client's description of the format; in
particular, be careful not to assume that expected data fields are
present, in the valid range, etc.

</div>

<span id="file"></span>

`file`

[tadsnet.t](../file/tadsnet.t.html)\[[318](../source/tadsnet.t.html#318)\]

<div class="desc">

The file data.

When you create the FileUpload object for use with sendNetRequest() to
post form data, you must use a string or ByteArray value for this
property.

When the FileUpload is created by HTTPRequest.getFormFields(), this
property contains a File object with the uploaded content. This is open
for read-only access. If the contentType parameter is a text type
("text/html", "text/plain", etc), and the interpreter recognizes the
character set parameter in the contentType, the file is in Text mode
(FileModeText) with the appropriate character mapper in effect.
Otherwise, the file is in raw binary mode (FileModeRaw). If you need the
file to be opened in a different mode, you can use setFileMode() on the
file to change the mode.

</div>

<span id="filename"></span>

`filename`

[tadsnet.t](../file/tadsnet.t.html)\[[352](../source/tadsnet.t.html#352)\]

<div class="desc">

The client-side filename, if specified. This is a string giving the name
of the file on the client machine. This generally has no particular
meaning to the server, since we can't infer anything about the directory
structure or naming conventions on an arbitrary client. However, this
might be useful for reference, such as showing information about the
upload in a user interface. It's sometimes also marginally useful to
know the suffix (extension) for making further guesses about the content
type - although as with the content-type, you can't rely upon this, but
can only use it as a suggestion from the client.

The client won't necessarily specify a filename at all, in which case
this will be nil.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (file, contentType, filename)`

[tadsnet.t](../file/tadsnet.t.html)\[[293](../source/tadsnet.t.html#293)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
