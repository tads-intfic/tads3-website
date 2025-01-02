---
---
<div class="topbar">

<img src="topbar.jpg" data-border="0" />

</div>

<div class="nav">

<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="advtop.html" class="nav">Advanced Topics</a> \> Internet Media
Types for TADS  
<span class="navnp"><a href="t3past.html" class="nav"><em>Prev:</em> Writing a Game in the
Past Tense</a>    
<a href="t3projectStarters.html" class="nav"><em>Next:</em> Workbench
Project Starter Templates</a>     </span>

</div>

<div class="main">

# Internet Media Types for TADS

*by Andreas Sewe*

Both TADS 2 and 3 define quite a few file formats used by their
corresponding interpreters and development tools like compilers and
linkers. This article describes how to utilize media types when
distributing files in those formats via the Internet. Media or MIME
types were originally designed for Internet mail, but have been adopted
by a number of other protocols of which HTTP is probably the most
prominent one. All these protocols use media types to specify format and
purpose of the data transmitted.

If you already know what media types are all about, and you just want to
look up a particular media type for a file format defined by TADS,
select one from the following list:

- [TADS 2 Game](#gam)
- [TADS 2 Saved Game](#sav)
- [TADS 2 Saved Resource](#rs)
- [TADS 3 Executable](#t3x)
- [TADS 3 Saved Position](#t3v)
- [TADS 3 Resource](#t3r)
- [TADS 3 Project](#t3m)
- [TADS 3 Library](#tl)
- [TADS Source](#t)

  

<div class="section_title">

Background: Media Type Syntax

</div>

While media or MIME types were originally introduced by RFC 1341 their
current incarnation is defined by a set of five core RFCs, some of which
have received minor updates. All these RFCs can be obtained from the
[Internet Engineering Task Force](http://www.ietf.org/). These five
documents are:

- [RFC 2045](urn:ietf:rfc:2045) (Draft Standard), MIME: Format of
  Internet Message Bodies
- [RFC 2046](urn:ietf:rfc:2046) (Draft Standard), MIME: Media Types
- [RFC 2047](urn:ietf:rfc:2047) (Draft Standard), MIME: Message Header
  Extensions for Non-ASCII Text
- [RFC 2048](urn:ietf:rfc:2048) (Best Current Practice), MIME:
  Registration Procedure
- [RFC 2049](urn:ietf:rfc:2049) (Draft Standard), MIME: Conformance
  Criteria and Examples

Despite the extensive number of RFCs covering this very subject the
structure of media types themselves is quite simple although there are
some subtleties to be aware of, too. Every media type consists of a
(primary) type and a subtype, separated by a slash. Furthermore a media
type can have a list of parameters attached, each parameter starting
with a semicolon. Please note that the type, subtype and parameter names
are not case sensitive, whereas parameter values might very well be case
sensitive, that is unless explicitly stated otherwise. Finally parameter
values *may* be included in quotations marks.

Examples of media types include `application/zip`, `image/jpeg`, and
`text/html;charset=us-ascii`, all of which are used by
[www.tads.org](http://www.tads.org/) itself. There is also a [complete
database](http://www.isi.edu/in-notes/iana/assignments/media-types) of
all media types registered with the [Internet Assigned Numbers
Authority](http://www.iana.org/) so far.

<div class="section_title">

Background: Types and Subtypes

</div>

As mentioned above a media type consists of both a (top-level) type and
a subtype. The former can be chosen from the registration tree of
predefined types, the tree of IETF-defined extensions, or it can be an
experimental type. All experimental types *must* be prefixed with `x-`,
but even then introducing experimental types is strongly discouraged.

Furthermore these types are divided into discrete and composite types.
As of this writing the list of non-experimental discrete types reads as
follows, the latter two entries being defined in the IETF extension
tree:

- `text`: Textual information
- `image`: Image data
- `audio`: Audio data
- `video`: Video data
- `application`: Some other kind of data, typically either uninterpreted
  binary data or information to be processed by an application
- `model`: 3D model format
- `chemical`: Chemical data set

The only non-experimental composite types defined so far are:

- `multipart`: Data consisting of multiple entities of independent data
  types
- `message`: An encapsulated message

As already mentioned the introduction of experimental types is strongly
discouraged by the IETF, but fortunately the above lists of predefined
types already include a pair suitable for use by TADS: `application` and
`text`.

Subtypes can also be either experimental or chosen from the registration
trees of IETF-approved subtypes, “Vendor” subtypes, and
“Personal/Vanity” subtypes. The latter ones are all prefixed with `vnd.`
or `prs.`, respectively. Subtypes of all three trees are registered with
the IANA. But, as already mentioned, instead of choosing an already
registered subtype one can also define an unregistered experimental
subtype, which *must* be prefixed with either `x.` or `x-`. Now
experimental subtypes are well-suited for use by TADS, especially since
official IANA-registration is quite unlikely to occur—that is unless the
IF Cabal has already infiltrated the Internet Assigned Numbers
Authority.

The rationale behind the naming of these experimental subtypes, as used
by TADS, is best illustrated by the following quote from [The T3 Virtual
Machine Specification](http://www.tads.org/t3spec/format.html):

> The structure of the name has some significance: the `x-` prefix
> conforms to the MIME standard for indicating an unregistered ad hoc
> \[sub\]type; the `t3vm` portion is descriptive and relatively unlikely
> to collide with other ad hoc \[sub\]types; and the `-image` suffix
> suggests an obvious namespace structure, in case it becomes
> interesting to designate MIME \[sub\]types for other t3vm-related file
> types ([saved-game files](#t3v), for example) in the future.

One final thing worth mentioning is that a media type is by no means
just an opaque string. A (top-level) type may impose additional
constraints upon content or even a default handling in case of an
unrecognized subtype. So an unrecognized `text`-subtype may be presented
to the user nevertheless, whereas an unrecognized `application`-subtype
probably won't.

Also data of any subtype of `text`, when distributed via a
MIME-compatible protocol, e.g. as an mail attachment, is subject to the
following constraint: All line breaks *must* be represented as a CR LF
(`"\x0D\x0A"`) sequence. Use of CR and LF outside of line break
sequences is forbidden. This constraint does not affect distribution via
HTTP though, which allows line breaks to be represented as CR, LF, or CR
LF, respectively. But for interoperability reasons the sole use of CR LF
is *recommended*.

This ensures maximum interoperability for distribution via the Internet
or use with third-party development tools, even though TADS itself is,
according to Mike Roberts, very flexible in this respect:

> Regarding the text \[media\] types, the TADS compilers are actually
> very flexible about newline conventions; they'll accept CR, LF, CR LF,
> or LF CR.

Similarly one is encouraged to follow the general Internet guidelines of
being conservative in what you send and liberal in what you accept.

<div class="section_title">

Background: Use Cases

</div>

There are a number of ways in which media types can be used. First of
all there is the use case they were originally designed for:
distribution of various file formats via **Internet mail**. Here media
types provide means to transmit reliable information about the content's
format and purpose across different systems.

Similarly HTTP uses media types to specify this information about the
data made available on the **World Wide Web**. Furthermore HTTP allows
content negotiation based on the media types an application, e.g. a web
browser, is able to understand. Finally the media type is used to
determine which plug-in, if any, ought to be invoked upon receiving
content of a specific type. So following a hyperlink to a [TADS 3
game](#t3x), thus receiving content of type `application/x-t3vm-image`,
could automatically invoke an appropriate interpreter.

Finally some **file systems** such as the BeFS incorporate native
support for media types and require them for the description of file
formats stored therein.

Most operating systems, however, *don't* use MIME types for their own
internal purposes. Most systems instead have their own peculiar ways of
handling file type sensing, either something completely ad hoc, or
something proprietary. For example, DOS and Windows systems use file
extensions (the last part of a filename, conventionally a few letters
following a period, such as ".txt" or ".doc"). Mac OS 9 and earlier use
hidden metadata fields in the file system for the "file type" and
"creator" codes, which are four-character ID codes; application
developers were *supposed* to register these with Apple to avoid
collisions, but most never did. Mac OS X uses a combination of pre-X
type codes, file extensions, and, starting with OS X 10.3, a whole new
proprietary type system from Apple called [Uniform Type
Identifiers](http://developer.apple.com/macosx/uniformtypeidentifiers.html),
or UTIs. Unix-like systems have traditionally relied on "magic numbers",
which means that they look at the *contents* of a file (usually the
first few bytes, where most binary formats place a fixed "signature"
designed for just this kind of sensing) rather than its metadata.

The MIME type system has a couple of advantages over most of these
OS-specific systems. For one thing it's uniform across systems, which
none of the proprietary systems are, obviously. For another, it's
formally defined rather than ad hoc. It's more robust than bundling
information into the file name - renaming a file won't affect the type
it claims to be. Most MIME types are registered with the IANA instead of
being just made up by a developer, or registered only with a single
vendor. (But even for unregistered media types—like the ones defined by
TADS—name clashes are less likely than they are with, say, extensions or
Mac type codes, just because the namespace is so much larger for MIME
types.)

For the sake of consistency among applications that work with TADS file
types on various operating systems, we've listed the "official" values
for several of these ad hoc and proprietary type systems for each of our
file types, alongside the MIME type in the tables below. "Official" is
in quotes because these are only official as far as coming from us here
at tads.org; for the most part, these aren't registered with the OS
vendors or any formal standards body.

<div class="section_title">

<span id="gam">Media Type: TADS 2 Game</span>

</div>

This media type is defined for game files as used by TADS 2 interpreters
and development tools.

It was chosen in consultation with the managers of the [IF
Archive](http://www.ifarchive.org/), which has adopted it as a local
standard.

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<th width="30%">MIME media type name</th>
<td><code>application</code></td>
</tr>
<tr class="odd">
<th>MIME subtype name</th>
<td><code>x-tads</code></td>
</tr>
<tr>
<th>Required parameters</th>
<td>none</td>
</tr>
<tr class="odd">
<th>Optional parameters</th>
<td>none</td>
</tr>
<tr>
<th>Applications which use this media type</th>
<td>TADS 2 interpreters and development tools</td>
</tr>
<tr class="odd">
<th>Magic number(s)</th>
<td>12 byte sequence. In hexadecimal: 54 41 44 53 32 20 62 69 6E 0A 0D
1A (<code>"TADS2 bin\x0A\x0D\x1A"</code>)</td>
</tr>
<tr>
<th>File extension(s)</th>
<td><code>.gam</code></td>
</tr>
<tr class="odd">
<th>Macintosh File Type Code(s)</th>
<td><code>TADG</code></td>
</tr>
<tr>
<th>UTI</th>
<td><code>org.tads.tads2-game</code><br />
conforms to <code>org.tads.tads-game</code></td>
</tr>
</tbody>
</table>

Please note that the magic number contains, contrary to common usage,
the sequence LF CR (`"\x0A\x0D"`) instead of CR LF (`"\x0D\x0A"`).

<div class="section_title">

<span id="sav">Media Type: TADS 2 Saved Game</span>

</div>

This media type is defined for saved game files as used by TADS 2
interpreters.

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<th width="30%">MIME media type name</th>
<td><code>application</code></td>
</tr>
<tr class="odd">
<th>MIME subtype name</th>
<td><code>x-tads-save</code></td>
</tr>
<tr>
<th>Required parameters</th>
<td>none</td>
</tr>
<tr class="odd">
<th>Optional parameters</th>
<td>none</td>
</tr>
<tr>
<th>Applications which use this media type</th>
<td>TADS 2 interpreters</td>
</tr>
<tr class="odd">
<th>Magic number(s)</th>
<td>15 byte sequence. In hexadecimal: 54 41 44 53 32 20 73 61 76 65 2F
67 0A 0D 1A (<code>"TADS2 save/g\x0A\x0D\x1A"</code>)</td>
</tr>
<tr>
<th>File extension(s)</th>
<td><code>.sav</code></td>
</tr>
<tr class="odd">
<th>Macintosh File Type Code(s)</th>
<td><code>TADS</code></td>
</tr>
<tr>
<th>UTI</th>
<td><code>org.tads.tads2-saved-game</code><br />
conforms to <code>org.tads.tads-saved-game</code></td>
</tr>
</tbody>
</table>

Please note that the magic number contains, contrary to common usage,
the sequence LF CR (`"\x0A\x0D"`) instead of CR LF (`"\x0D\x0A"`).

<div class="section_title">

<span id="rs">Media Type: TADS 2 Resource</span>

</div>

This media type is defined for resource files as used by TADS 2
interpreters and development tools.

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<th width="30%">MIME media type name</th>
<td><code>application</code></td>
</tr>
<tr class="odd">
<th>MIME subtype name</th>
<td><code>x-tads-resource</code></td>
</tr>
<tr>
<th>Required parameters</th>
<td>none</td>
</tr>
<tr class="odd">
<th>Optional parameters</th>
<td>none</td>
</tr>
<tr>
<th>Applications which use this media type</th>
<td>TADS 2 interpreters and development tools</td>
</tr>
<tr class="odd">
<th>Magic number(s)</th>
<td>12 byte sequence. In hexadecimal: 54 41 44 53 32 20 72 73 63 0A 0D
1A (<code>"TADS2 rsc\x0A\x0D\x1A"</code>)</td>
</tr>
<tr>
<th>File extension(s)</th>
<td><code>.rs</code><var>n</var>; where <var>n</var> = 0, 1, 2, …,
9</td>
</tr>
<tr class="odd">
<th>Macintosh File Type Code(s)</th>
<td><code>.RS*</code></td>
</tr>
<tr>
<th>UTI</th>
<td><code>org.tads.tads2-resource-bundle</code><br />
conforms to <code>org.tads.tads-resource-bundle</code></td>
</tr>
</tbody>
</table>

Please note that the magic number contains, contrary to common usage,
the sequence LF CR ("\x0A\x0D") instead of CR LF ("\x0D\x0A").

<div class="section_title">

<span id="t3x">Media Type: TADS 3 Executable</span>

</div>

This media type is defined for executable files as used by TADS 3
interpreters and development tools.

It was chosen in consultation with the managers of the [IF
Archive](http://www.ifarchive.org/), which has adopted it as a local
standard.

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<th width="30%">MIME media type name</th>
<td><code>application</code></td>
</tr>
<tr class="odd">
<th>MIME subtype name</th>
<td><code>x-t3vm-image</code></td>
</tr>
<tr>
<th>Required parameters</th>
<td>none</td>
</tr>
<tr class="odd">
<th>Optional parameters</th>
<td>none</td>
</tr>
<tr>
<th>Applications which use this media type</th>
<td>TADS 3 interpreters and development tools</td>
</tr>
<tr class="odd">
<th>Magic number(s)</th>
<td>11 byte sequence. In hexadecimal: 54 33 2D 69 6D 61 67 65 0D 0A 1A
(<code>"T3-image\x0D\x0A\x1A"</code>)</td>
</tr>
<tr>
<th>File extension(s)</th>
<td><code>.t3x</code>, <code>.t3</code></td>
</tr>
<tr class="odd">
<th>Macintosh File Type Code(s)</th>
<td><code>.T3X</code></td>
</tr>
<tr>
<th>UTI</th>
<td><code>org.tads.tads3-game</code><br />
conforms to <code>org.tads.tads-game</code></td>
</tr>
</tbody>
</table>

<div class="section_title">

<span id="t3v">Media Type: TADS 3 Saved Position</span>

</div>

This media type is defined for saved position files as used by TADS 3
interpreters.

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<th width="30%">MIME media type name</th>
<td><code>application</code></td>
</tr>
<tr class="odd">
<th>MIME subtype name</th>
<td><code>x-t3vm-state</code></td>
</tr>
<tr>
<th>Required parameters</th>
<td>none</td>
</tr>
<tr class="odd">
<th>Optional parameters</th>
<td>none</td>
</tr>
<tr>
<th>Applications which use this media type</th>
<td>TADS 3 interpreters</td>
</tr>
<tr class="odd">
<th>Magic number(s)</th>
<td>10 byte sequence, followed by a 4 byte version identifier, followed
by a 3 byte sequence. In hexadecimal: 54 33 2D 73 74 61 74 65 26 76
(<code>"T3-state-v"</code>), version identifier, 0D 0A 1A
(<code>"\x0D\x0A\x1A"</code>)</td>
</tr>
<tr>
<th>File extension(s)</th>
<td><code>.t3v</code></td>
</tr>
<tr class="odd">
<th>Macintosh File Type Code(s)</th>
<td><code>.T3V</code></td>
</tr>
<tr>
<th>UTI</th>
<td><code>org.tads.tads3-saved-game</code><br />
conforms to <code>org.tads.tads-saved-game</code></td>
</tr>
</tbody>
</table>

<div class="section_title">

<span id="t3r">Media Type: TADS 3 Resource</span>

</div>

This media type is defined for resource files as used by TADS 3
interpreters and development tools. Due to the fact that resource files
are merely a variation of TADS 3 executables, no new media has been
defined. According to [The T3 Virtual Machine
Specification](http://www.tads.org/t3spec/format.html):

> This variation of the T3 image format allows for one or more separate
> resource files to accompany an image file; this is a resource-only
> image file. A resource-only image file is identical to a standard
> image file, but contains only MRES and EOF blocks.

TADS 3 resources have the own file extensions and Macintosh file type
codes, though.

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<th width="30%">MIME media type name</th>
<td><code>application</code></td>
</tr>
<tr class="odd">
<th>MIME subtype name</th>
<td><code>x-t3vm-image</code></td>
</tr>
<tr>
<th>Required parameters</th>
<td>none</td>
</tr>
<tr class="odd">
<th>Optional parameters</th>
<td>none</td>
</tr>
<tr>
<th>Applications which use this media type</th>
<td>TADS 3 interpreters and development tools</td>
</tr>
<tr class="odd">
<th>Magic number(s)</th>
<td>11 byte sequence. In hexadecimal: 54 33 2D 69 6D 61 67 65 0D 0A 1A
(<code>"T3-image\x0D\x0A\x1A"</code>)</td>
</tr>
<tr>
<th>File extension(s)</th>
<td><code>.t3r</code>, <code>.3r</code><var>n</var>; where <var>n</var>
= 0, 1, 2, …, 9</td>
</tr>
<tr class="odd">
<th>Macintosh File Type Code(s)</th>
<td><code>.T3R</code>, <code>.3R*</code></td>
</tr>
<tr>
<th>UTI</th>
<td><code>org.tads.tads3-resource-bundle</code><br />
conforms to <code>org.tads.tads-resource-bundle</code></td>
</tr>
</tbody>
</table>

Please note that a file extension of `.t3r` *should* only be used for
compiler-loaded resources, e.g. `cmaplib.t3r`. In contrast
interpreter-loaded resources *must* always use a `.3r``n` extension.

<div class="section_title">

<span id="t3m">Media Type: TADS 3 Project</span>

</div>

This media type is defined for project files as used by TADS 3
development tools, most notably its build system.

MIME media type name

</div>

`text`

MIME subtype name

`plain`

Required parameters

none

Optional parameters

`charset`. If the `charset` parameter is specified, its value *must* be
`us-ascii`

Applications which use this media type

TADS 3 development tools

Magic number(s)

none

File extension(s)

`.t3m`

Macintosh File Type Code(s)

`TEXT`, `.T3M`; the latter one is currently reserved for future use

UTI

`org.tads.tads3-project`  
conforms to `org.tads.tads-project`

  
conforms to `public.plain-text`

All line breaks *should* be represented as a CR LF (`"\x0D\x0A"`)
sequence when distributed via HTTP and *must* be represented as such
when distributed via MIME-compatible protocols. The use of CR and LF
outside of line break sequences is forbidden.

Please note that the values of the `charset` parameter are not case
sensitive.

<div class="section_title">

<span id="tl">Media Type: TADS 3 Library</span>

</div>

This media type is defined for library files as used by TADS 3
development tools, most notably its build system.

MIME media type name

`text`

MIME subtype name

`plain`

Required parameters

none

Optional parameters

`charset`. If the `charset` parameter is specified, its value *must* be
`us-ascii`

Applications which use this media type

TADS 3 development tools

Magic number(s)

none

File extension(s)

`.tl`

Macintosh File Type Code(s)

`TEXT`

UTI

`org.tads.tads3-source-library`  
conforms to `org.tads.tads-source-library`

  
conforms to `public.plain-text`

All line breaks *should* be represented as a CR LF (`"\x0D\x0A"`)
sequence when distributed via HTTP and *must* be represented as such
when distributed via MIME-compatible protocols. The use of CR and LF
outside of line break sequences is forbidden.

Please note that the values of the `charset` parameter are not case
sensitive.

<div class="section_title">

<span id="t">Media Type: TADS Source</span>

</div>

This media type is defined for source and header files as used by both
TADS 2 and 3 development tools. Note that, despite sharing media type,
file extension, and Macintosh file type code, these files are neither
forward nor backward compatible.

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<th width="30%">MIME media type name</th>
<td><code>text</code></td>
</tr>
<tr class="odd">
<th>MIME subtype name</th>
<td><code>plain</code></td>
</tr>
<tr>
<th>Required parameters</th>
<td>none</td>
</tr>
<tr class="odd">
<th>Optional parameters</th>
<td><code>charset</code>. If the <code>charset</code> parameter is
specified, its value <em>should</em> indicate the charset the file is
actually encoded in</td>
</tr>
<tr>
<th>Applications which use this media type</th>
<td>TADS 3 development tools</td>
</tr>
<tr class="odd">
<th>Magic number(s)</th>
<td>none</td>
</tr>
<tr>
<th>File extension(s)</th>
<td><code>.t</code>, <code>.h</code></td>
</tr>
<tr class="odd">
<th>Macintosh File Type Code(s)</th>
<td><code>TEXT</code></td>
</tr>
<tr>
<th>UTI</th>
<td><code>org.tads.tads-source</code><br />
conforms to <code>public.plain-text</code></td>
</tr>
</tbody>
</table>

All line breaks *should* be represented as a CR LF (`"\x0D\x0A"`)
sequence when distributed via HTTP and *must* be represented as such
when distributed via MIME-compatible protocols. The use of CR and LF
outside of line break sequences is forbidden.

Please note that the values of the `charset` parameter are not case
sensitive.

In most cases the value of the `charset` parameter simply matches the
charset name as used by TADS, e.g. by its `#charset` directive. In some
cases though, TADS does not only accept the MIME charset names
registered with the IANA but also further aliases. When in doubt please
consult the [complete
database](http://www.iana.org/assignments/character-sets) of all charset
names registered with the [Internet Assigned Numbers
Authority](http://www.iana.org/) so far. The use of those
widely-recognized names is *recommended*.

<div class="section_title">

How-To: Configuring Apache

</div>

This section describes briefly how to configure the [Apache web
server](http://httpd.apache.org/) to distribute your TADS files using
their defined media types. For this purpose the Apache base module
[`mod_mime`](http://httpd.apache.org/docs-2.0/mod/mod_mime.html)
provides all the configuration directives needed to set up an automatic
mapping of filename extensions to media types and their respective
`charset` parameters. Fortunately, since it is considered a base module,
`mod_mime` is available on almost every Apache installation. At any
rate, although this section applies to both Apache version
[1.3](http://httpd.apache.org/docs/) and
[2.0](http://httpd.apache.org/docs-2.0/), all links point to
documentation for the latter.

The following two configuration directives are all you need to configure
your web server appropriately:
[`AddType`](http://httpd.apache.org/docs-2.0/mod/mod_mime.html#addtype)
and
[`AddCharset`](http://httpd.apache.org/docs-2.0/mod/mod_mime.html#addcharset).

Now you can add these to either the main [`httpd.conf` configuration
file](http://httpd.apache.org/docs-2.0/configuring.html#main) or, in
case you are not allowed to alter it, to a local [`.htaccess`
configuration
file](http://httpd.apache.org/docs-2.0/configuring.html#htaccess).
Either way you have to make sure that your TADS files are in
[scope](http://httpd.apache.org/docs-2.0/sections.html) of the
respective directives, i.e. that they are affected by them. Furthermore,
when using local `.htaccess` configuration files you have to check
whether you are allowed to change a file's associated metadata, e.g. its
media type, at all. This is controlled by the central
[`AllowOverride`](http://httpd.apache.org/docs-2.0/mod/core.html#allowoverride)
directive, which has to be set to at least `FileInfo`. This ought to be
done by the web server's administrator.

Once you have made a decision about the scope and location of the
appropriate directives, you can add the following to the respective
configuration file:

<div class="code">

    # TADS 2 Game
    AddType application/x-tads .gam
    # TADS 2 Saved Game
    AddType application/x-tads-save .sav
    # TADS 2 Resource
    AddType application/x-tads-resource .rs0 .rs1 .rs2 .rs3 .rs4 .rs5 .rs6 .rs7 .rs8 .rs9

    # TADS 3 Executable
    AddType application/x-t3vm-image .t3x .t3
    # TADS 3 Saved Position
    AddType application/x-t3vm-state .t3v
    # TADS 3 Resource
    AddType application/x-t3vm-image .t3r .3r0 .3r1 .3r2 .3r3 .3r4 .3r5 .3r6 .3r7 .3r8 .3r9

    # TADS 3 Project
    AddType text/plain .t3m
    AddCharset us-ascii .t3m
    # TADS 3 Library
    AddType text/plain .tl
    AddCharset us-ascii .tl
    # TADS Source
    AddType text/plain .t .h

</div>

Additionally, in case all your [TADS Source](#t) files are encoded in a
single charset, e.g. `us-ascii`, you might want to add a directive like
`AddCharset us-ascii .t .h`—with the correct charset specified, of
course.

Please note that, while being an alternative way to configure the
mapping of filename extensions to media types, the list of media types
predefined in `mime.types`—or any other file as set by the
[`TypesConfig`](http://httpd.apache.org/docs-2.0/mod/mod_mime.html#typesconfig)
directive—*should not* be edited directly.

------------------------------------------------------------------------

<div class="navb">

*TADS 3 Technical Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="advtop.html" class="nav">Advanced Topics</a> \> Internet Media
Types for TADS  
<span class="navnp"><a href="t3past.html" class="nav"><em>Prev:</em> Writing a Game in the
Past Tense</a>    
<a href="t3projectStarters.html" class="nav"><em>Next:</em> Workbench
Project Starter Templates</a>     </span>

</div>
