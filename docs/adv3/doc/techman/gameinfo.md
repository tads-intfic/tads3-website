---
layout: docs
---
<div class="topbar">

<img src="topbar.jpg" data-border="0" />

</div>

<div class="nav">

<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="fund.html" class="nav">Fundamentals</a> \> Bibliographic
Metadata - the GameInfo Format  
<span class="navnp"><a href="t3iautohot.html" class="nav"><em>Prev:</em> Using AutoHotKey
with the Workbench Editor (Windows)</a>    
<a href="depth.html" class="nav"><em>Next:</em> TADS 3 In Depth</a>    
</span>

</div>



# Bibliographic Metadata: The GameInfo Format

TADS has a mechanism that lets you include bibliographic information -
title, author, release date, etc. - directly in your compiled game file.
The information is essentially a "card catalog" entry for your game.
This system is called the "GameInfo" format, and it's what's known as a
"metadata" system.

What's the point of this, you might wonder? After all, most games
already display their title and author and so on when they start up; so
why go to the additional trouble of filling in this card catalog entry?
Well, consider the plight of someone who has a few dozen TADS .gam files
sitting on their hard disk, and they want to find a particular one, but
they don't remember its filename. If they had to rely on the game's own
title screen, they'd have to run each game in turn, maybe clicking
through a few initial screens and hunting through a few paragraphs of
text, before they found the right one. Now consider the problem for the
maintainers of the IF Archive, who have several *hundred* TADS games to
keep track of - along with hundreds of games from other systems. It's a
huge job to track all of that information manually; it would be a big
help if even some of it could be automated.

The point of the GameInfo data, then, is that it lets you get at the
bibliographic data for a game without having to run the game and read
the title screen. What's more, it puts the information in a standard,
structured format that lets automated tools unambiguously identify
particular *parts* of the information. For example, a tool that wants to
present you a list of games sorted by the author's name could find that
information using the GameInfo data.

For full details on how GameInfo works internally, you can read the full
[GameInfo Specification](http://www.tads.org/howto/gameinfo.html) on the
<a href="http://www.tads.org" data-<="" data-a="">tads.org</a> site.
This article just gives you some quick "recipe" information about how to
put GameInfo data in your project.

## <span id="ifids">IFIDs</span>

The first thing you need to do is assign an "IFID" for your game.

An IFID is a unique identifier that the IF Archive and others can use to
index your game, and to tie together different release versions of it.
IFIDs are simply very long random numbers - to be exact, 32 random hex
digits.

If you use TADS Workbench to create your game, the system will select an
IFID for you and automatically set it up properly in your source.

If you're creating your game manually, you'll have to select an IFID
yourself. The easiest way to do this is to use the [on-line IFID
generator](http://www.tads.org/ifidgen/ifidgen) on tads.org.

You can find a lot more information about IFIDs in the full [GameInfo
specification](http://www.tads.org/howto/gameinfo.html). In brief, an
IFID is an industry-standard UUID, which is a random 128-bit number
written out in hexadecimal in the format
xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx. Every game should have a unique
IFID, which is effectively guaranteed when everyone picks their IFIDs
randomly. (Uniqueness is guaranteed by the laws of probability; 128-bit
numbers are so large that the chances of two people ever picking the
same one are vanishingly small.) Each game should use the same IFID
throughout its entire lifecycle, meaning that you should use the same
IFID each time you release an updated version of your game; this ensures
that the Archive will be able to tie together the different incarnations
of your game and realize that they comprise a single work.

## <span id="tads3">Steps for adding the information</span>

The procedure we outline here lets you generate the GameInfo.txt file
automatically whenever you compile your game for release, which is nice
because it means that you can use the same dynamic information you have
in your game's source code to generate your GameInfo.txt data. This
approach will also save you the trouble of finding a text editor that
can handle UTF-8, because TADS 3 is perfectly happy to do the character
set conversion work for you automatically.

If you would prefer to create your GameInfo.txt file manually, see
[above](#manual).

Note: this procedure assumes you're using the Adv3 library, since it
depends on some classes defined in the library.

**Step 1 - for users of TADS Workbench for Windows only**. (If you're
not using TADS Workbench on Windows, you can skip this step. If you
created your project using Workbench's "New Project" command, you can
also skip this step, because Workbench will have already done it for
you.) Open your project in Workbench, and right-click on "Resource
Files" in the project window; this will open a standard Windows file
selector dialog. Make sure the file selector is showing the directory
containing your project (your .t3m file) - if not, navigate to your
project directory. Type "GameInfo.txt" into the filename box and click
the Open button. (It doesn't matter if this file doesn't exist; your
game will create it automatically during pre-initialization.)

(Optional) If you want to include cover art, save your cover art image
as either a JPEG or a PNG file. Go to the Project window, open the
Special Files section, and find the item labeled Cover Art. Right-click
this item, then select "Set File..." from the pop-up menu. This will
bring up a file selection dialog; simply select your image file.

**Step 2.** Create an object of class GameID to describe your game. The
GameID class is described in detail in the TADS 3 library file modid.t;
the quick summary is that this class lets you define some descriptive
information for your game, which the library uses to generate the
GameInfo file automatically. The library also uses the GameID
information for other purposes, such as the VERSION command. If you're
using Workbench for Windows, and you used the "New Project" command to
create your game, Workbench will already have created a placeholder for
this object in your game's main source file, so you merely need to find
the placeholder object and edit its property values. Here's an example
of how this object should look:

```
    versionInfo: GameID
      IFID = '64d2c120-c80b-11da-a94d-0800200c9a66'
      name = 'My Test Game'
      version = '1.0'
      byline = 'by Bob I.\ Fiction'
      htmlByline = 'by <a href="mailto:bob@if.com">Bob I.\ Fiction</a>'
      authorEmail = 'Bob I. Fiction <bob@if.com>'
      desc = 'My simple test game, just to demonstrate how
          to write GameInfo data.'
      htmlDesc = 'My simple <b>test game</b>, just to demonstrate
          how to write <i>GameInfo</i> data.'
    ;
```

**Step 3.** Compile your game. You must compile for release (not for
debugging) in order for preinitialization to run during compilation - if
you compile for debugging, the GameInfo.txt file won't be created until
you actually run your game.

**Step 4 - for command-line compiler users only.** (If you're using
Workbench for Windows, you can skip this - Workbench will perform this
step for you automatically because of the way you set things up back in
Step 1.) Run the T3 Resource Compiler (t3res) and bind the generated
GameInfo.txt file into your game:

<div class="cmdline">

    t3res mygame.t3 -add GameInfo.txt



(Optional) If you want to include cover art in your game, save your
image as either a JPEG or PNG image. On the tadsrsc command line above,
add that filename at the end of the command, after GameInfo.txt, but
list it like this:

       image.jpg=.system/CoverArt.jpg

Replace "image.jpg" with the actual name of your file, but leave the
rest exactly as shown. The "=" sign says that you want to give the file
the special name ".system/CoverArt.jpg" (or .png) in the resource
catalog - the catalog name has to be exactly as shown for tools to
recognize its special purpose.

That's it! Your game information is now stored in your compiled game
file.

## <span id="fields">The Standard Name/Value Pairs</span>

A GameInfo record is simply a list of name/value pairs defining specific
bits of information about the game. Each name/value pair consists of a
standard identifier - the "name" - and an associated value. Each name
has a specific meaning, and defines a specific format for its value. For
example, to specify a game's title, you specify value for the "Name"
identifier; the value is simply a string giving the full title of the
game.

When using the Adv3 library, you can use the versionInfo object to
define your metadata values instead of writing a gameinfo.txt file by
hand. Each entry in the list below includes a "TADS 3 versionInfo
example" showing what you'd add to your versionInfo object definition to
define that key.

## Name/Value pairs every game should have

All of the name/value pairs are optional. However, to improve
interoperability with the IF Archive and various tools, we recommend
that you minimally define the following in every game:

- IFID
- Name
- AuthorEmail

The [iFiction standard](#ifiction) *requires* the information that these
tags define, so to interoperate properly with the IF Archive and other
iFiction-based systems, you should always define these tags.

## The Name/Value pairs in detail

The standard, pre-defined Name/Value pairs are as follows:

**IFID**  
Format: xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx  
Example: `IFID: 17AF6C-990E-7220-06F7-3962AA61F09A`  
TADS 3 versionInfo example:
`IFID = '17AF6C-990E-7220-06F7-3962AA61F09A'`  
  
The IFID is the game's universally unique identifier. Refer to the [IFID
section](#ifids) for full details on this field. Note that you can
specify multiple IFIDs here by separating them with commas - but do this
**only** to encode legacy IFIDs for past releases that didn't include
IFIDs, as described in the [IFID section](#ifids).

**Name**  
Format: Any text  
Example: `Name: Mars by Night`  
TADS 3 versionInfo example: `name = 'Mars by Night'`  
  
The full title of the game, as it should appear in plain text.

**Headline**  
Format: Any text  
Example: `Headline: An Interactive Rescue`  
TADS 3 versionInfo example: `headline = 'An Interactive Rescue'`  
  
A subtitle for the game, following the tradition set by the Infocom
games. This is usually something like "An Interactive Mystery" that you
display just after the title of your game at startup.

**Byline**  
Format: Any text  
Example: `Byline: by S.F. Author`  
TADS 3 versionInfo example: `byline = 'by S.F. Author'`  
  
Name of the author or authors of the game, as it should appear in a
plain text credit. The byline is meant to be displayed after the name of
the game, so it can include phrasing like "by *author*" if desired.

**HtmlByline**  
Format: HTML source text  
Example: `HtmlByline: by S.F.&nbsp;Author`  
TADS 3 versionInfo example: `htmlByline = 'by S.F.&nbsp;Author'`  
  
Name of the author or authors of the game, as it should appear in HTML.
This should contain roughly the same information as the "Byline" field,
but can include HTML markups in its value. It is desirable (although not
required) for this field to incorporate \<A HREF='mailto:'\> tags to
provide email address hyperlinks for the authors. Note that if the
HtmlByline field is present, a regular Byline field should be included
as well, so that the plain text version of the information is available
to tools that can't handle HTML.

**AuthorEmail**  
Format: *Name* `<`*email*`><`*email*`>;` ...  
Example: `AuthorEmail: S.F. Author <sfauthor@mywebsite.org>`  
TADS 3 versionInfo example:
`authorEmail = 'S.F. Author <sfauthor@mywebsite.org>'`  
  
Names and email addresses of the authors. Each author can have one or
more email addresses listed in angle brackets after the author's
human-readable name. Multiple authors can be listed by separating the
entries with semicolons. You should only include email addresses that
are likely to be valid for the foreseeable future, since games uploaded
to the IF Archive will be stored indefinitely.

**Url**  
Format: http://...  
Example: `Url: http://mywebsite.org/marsbynight.html`  
TADS 3 versionInfo example:
`gameUrl = 'http://mywebsite.org/marsbynight.html'`  
  
The URL for the game's web site. This must be an absolute URL with http:
as the protocol. Since IF games that are uploaded to the Archive will be
stored indefinitely, people might be looking at this information well
into the future; so we recommend that you only include a URL if your
site is likely to be around for a while.

**Desc**  
Format: Any text  
Example: `Desc: All contact lost with the first manned mission...`  
TADS 3 versionInfo example:
`desc = 'All contact lost with the first manned mission...'`  
  
A plain text description of the game. This is a "blurb" describing the
game - the sort of thing you'd find on the inside jacket of a book, or
on the back of the box for a computer game. This is "plain" text in the
sense that it can't contain any formatting - HTML markups aren't
allowed, for example. There's one exception: if you want to include a
paragraph break, you can write `\n` - that is, a backslash followed by a
lower-case 'n'. When displayed, this will usually appear as *two* line
breaks in a row, so that there's a blank line between paragraphs. If you
want to write just a backslash, use two in a row (`\\`) - this is so
that there will be no confusion if the backslash happens to be followed
by an 'n', and also so that we can safely add new backslash sequences in
the future if they're ever needed.

**HtmlDesc**  
Format: HTML source text  
Example: `HtmlDesc: <i>All contact lost</i> with the first...`  
TADS 3 versionInfo example:
`htmlDesc = '<i>All contact lost</i> with the first...'`  
  
HTML description of the game. This should contain roughly the same
information as the "Desc" field, but this field can contain HTML markups
in its value. Note that if an HtmlDesc is given, a regular Desc should
be given as well, because some tools that use the game information are
not capable of handling HTML.

**Version**  
Format: Any text  
Example: `Version: 2`  
TADS 3 versionInfo example: `version = '2'`  
  
The version number string for the game. This is usually just a number,
like "2" for version 2. There's a tradition in computer software of
using elaborate "dotted" version numbers with a multitude of sub-parts,
as in "2.5.7.11.14B"; but most IF games see only a handful of releases,
so a simple one-part version number ("2") is usually quite adequate. You
shouldn't include the word "version" in this string - just include the
version number information.

**FirstPublished**  
Format: YYYY *or* YYYY-MM-DD  
Example: `FirstPublished: 2003`  
TADS 3 versionInfo example: `firstPublished = '2003'`  
  
The date of *first* publication for the game's original edition. This
can be either a year, or a full year-month-day (March 5, 2001 would be
written "2001-03-05"). The date of first publication of a work is
sometimes important for copyright purposes, and can be of interest to
archivists. Note that this does **not** change with version updates -
this reflects the original publication date of the original version of
the game.

**ReleaseDate**  
Format: YYYY-MM-DD  
Example: `ReleaseDate: 2006-04-10`  
TADS 3 versionInfo example: `releaseDate = '2006-04-10'`  
  
The release date of this version of the game. (Note that the format
specifies the year, month, and day of release in numeric format: March
5, 2001 is rendered as "2001-03-05".)

**Language**  
Format: [RFC3066](http://www.ietf.org/rfc/rfc3066.txt) language
specifier  
Example: `Language: en-US`  
TADS 3 versionInfo example: `languageCode = 'en-US'`  
  
The language in which the work's text is written (or primarily written,
if the work uses multiple languages). This information can help
potential users identify works written in languages they know, and could
also be used as a hint to text-to-speech converters or other natural
language analysis tools. For simplicity, it is recommended that the
language identifier string consist of an
[ISO-639](http://www.loc.gov/standards/iso639-2) two- or three-letter
language code, followed by a hyphen and an
[ISO-3166](http://www.din.de/gremien/nas/nabd/iso3166ma) two-letter
country code, but any valid RFC3066 specifier is allowed. For English,
typical specifiers would be en-US (for US English) or en-GB (for British
English).

**Series**  
Format: Any text  
Example: `Series: The Lost Mars Trilogy`  
TADS 3 versionInfo example: `seriesName = 'The Lost Mars Trilogy'`  
  
If this work is part of a series, this gives the name of the series. For
example, "The Enchanter Trilogy". If you specify this tag, you might
also want to specify SeriesNumber to indicate the position of this work
in the series, but that's optional - some series are just groups of
related works with no canonical ordering.

**SeriesNumber**  
Format: Integer  
Example: `SeriesNumber: 1`  
TADS 3 versionInfo example: `seriesNumber = '1'`  
  
The sequence number of this work in its series. This should be a simple
integer value - 1 or 2 or 3, not "Part One" or "The Second Book". This
is optional, even if the Series is specified, since a series might just
be a group of works with no defined ordering. If this tag is specified,
the Series must be defined as well.

**Genre**  
Format: Any text  
Example: `Genre: Science Fiction`  
TADS 3 versionInfo example: `genreName = 'Science Fiction'`  
  
The genre that, in the author's opinion, best describes the work. We
recognize that not everyone thinks genre labeling is a good idea - a lot
of authors dislike the whole idea; many works are impossible to
pigeonhole; and if you ask three people the genre of a particular game,
you might well get three different answers. Even so, realistically, it
seems just about inevitable that players and archivists will try to
force even the most singular works into genre straitjackets. So, we
define this tag to give the author the option of stating her own opinion
on the subject.

If you dislike genre tagging, you can just omit this tag. Otherwise, you
can use any text you want here, but we suggest that you keep it short (a
word or two) and use a genre label that's generally recognized as such.
We particularly recommend choosing an entry from [Baf's Guide's genre
list](http://www.wurb.com/if/genre).

**Forgiveness**  
Format: Text  
Example: `Forgiveness: Polite`  
TADS 3 versionInfo example: `forgivenessLevel = 'Polite'`  
  
This gives the author's estimation of the game's forgiveness level on
the Zarfian scale (as propounded by Andrew Plotkin on
rec.arts.int-fiction. This must have one of these values, in the exact
case shown:

- **Merciful** - the player cannot get stuck, the PC cannot die
- **Polite** - you can get stuck or the PC can die, but it's immediately
  obvious when you're stuck or dead
- **Tough** - you can get stuck, but it's immediately obvious that
  you're about to do something irrevocable
- **Nasty** - you can get stuck, but after you do something irrevocable,
  it's clear
- **Cruel** - you can get stuck by doing something that isn't obviously
  irrevocable, even after doing it

**LicenseType**  
Format: Text  
Example: `LicenseType: Freeware`  
TADS 3 versionInfo example: `licenseType = 'Freeware'`  
  
The type of copyright license under which the game is distributed. This
field is not meant to capture all possible license information, but is
meant to indicate in broad terms how the work is distributed.

The value should be chosen from the following keywords:

- **Public Domain** for a work that is not copyrighted;
- **Freeware** for a work that is made available without charge, but
  whose author nonetheless retains copyright;
- **Shareware** for a work distributed on a free-trial basis but with
  some degree of suggestion or requirement that users pay the author if
  they choose to use the software;
- **Commercial** for a work that is distributed only to paying customers
- **Commercial Demo** for a limited-functionality version, which may be
  freely distributed, of a full work distributed commercially;
- **Other** for a work that does not fit any of these categories.

Cases that are substantially similar to one of the categories enumerated
above should use the nearest category; for example, "postcard-ware,"
where users are requested to send postcards to the author if they like
the game, could be considered Shareware, because the game is distributed
freely but with a request for sending something (token though it is) to
the author. Note that this field does **not** grant or imply any license
rights, and is not meant to provide a "digital rights management" system
or the like; authors should always include full license terms in a
separate text file accompanying the game or in-line as part of the
game's displayed text.

**CopyingRules**  
Format: Text  
Example: `CopyingRules: Nominal Cost Only; Compilations Allowed`  
TADS 3 versionInfo example:
`copyingRules = 'Nominal Cost Only; Compilations Allowed'`  
  
Information on the rules under which the author allows the work to be
copied and redistributed. Most new works of IF these days are freeware,
which means that they're distributed for free but the authors retain
copyright and place some restrictions on redistribution; this field is
meant to provide some guidance, in general terms, about the author's
copying rules.

This field's value should be chosen from the following keywords:

- **Prohibited** if no copying or redistribution of any kind is allowed
- **No Restrictions** if the game may be copied without restriction
- **No-Cost Only** if the game may be redistributed but only with
  absolutely no fees to recipients;
- **At-Cost Only** if the game may be redistributed with a maximum
  charge to recipients of the actual cost of the physical distribution,
  such as media, mailing, or connection charges, but with no profit or
  other benefit to the distributor;
- **Nominal Cost Only** if the game may be redistributed for a small
  charge to recipients to cover the actual cost of the physical
  distribution and some small compensation to the distributor for the
  work involved in providing the distribution;
- **Other** for rules that don't fit into any of these categories.

In addition to the keywords above, one of the keywords "**Compilations
Prohibited**" or "**Compilations Allowed**" may be added, after a
semicolon, to indicate whether or not the game may be distributed as
part of a group of freeware and shareware games compiled by a third
party, such as a compilation CD offered for sale or included with a
magazine. Like the LicenseType field, this field provides guidance only
and is **not** definitive: users must consult the license text that
accompanies the game to learn the author's full, official copying rules.

**PresentationProfile**  
Format: Text  
Example: `PresentationProfile: Multimedia`  
TADS 3 versionInfo example: `presentationProfile = 'Multimedia'`  
  
The name of the recommended "presentation profile" for the game. This is
a hint that gives the run-time interpreter an idea of the style of the
game's user interface; interpreters can use this information to choose
the most appropriate display settings, such as fonts and colors.
Interpreters need not use this information at all; it's purely advisory.

This value can be a user-defined profile name, or one of these
pre-defined values:

- **Plain Text** indicates that the game is entirely text, with no
  graphics and with text formatting limited to "highlighted" text (i.e.,
  the traditional TADS 2 highlighting, which is usually rendered as
  bold-face or equivalent).
- **Multimedia** indicates that the game makes use of HTML text
  formatting effects (such as fonts, text colors, text sizes, italics,
  and tables) and/or displays graphics.
- **Default** isn't a true profile, but rather explicitly selects the
  default profile. Some interpreters let the user choose a particular
  profile as the default, in which case this will select that profile.

Authors can, if they wish, specify custom profile names of their own
creation here, but authors doing so are advised that (1) interpreters
will not generally be able to infer anything from profile names other
than ones defined here, and (2) other standard profile names may be
added here in the future, so custom names that authors choose could
conceivably collide with future additions.

The profile name isn't sensitive to case (that is, "multimedia" is
treated as equivalent to "MULTIMEDIA"). However, we recommend that if
you're using one of the pre-defined profile names listed above, you
should use the exact capitalization as shown.

In practical terms, the presentation profile is used by some
interpreters to select a default set of visual settings to use when
starting the game. For example, HTML TADS for Windows looks for a
"theme" that has the same name as the presentation profile, and uses the
matching theme, if any, when starting the game. An HTML TADS theme is
simply a set of font, color, and other visual settings. Other
interpreters, including all of the current text-only interpreters,
completely ignore the presentation profile setting. Authors mustn't
expect a presentation profile to select any particular color or font
scheme or to have any other specific effects, because it's up to each
interpreter to determine how to use the profile setting, if at all.

Note that the presentation profile does **not** have any effect at all
on the capabilities of the interpreter: the profile setting doesn't turn
off any features an interpreter would otherwise offer, and it doesn't
limit what kind of interpreter can be used to play the game. Selecting
the "plain text" profile, for example, does not disable graphics or
sound in an interpreter; it simply gives the interpreter guidance that
the author feels the game will look best when displayed in a style
(fonts, colors, etc.) suitable for traditional text-only games.
Similarly, selecting the "multimedia" profile doesn't prevent the game
from being played on text-only interpreters; it merely hints to
interpreters that they should use a visual style suited for a more
diverse mixture of text effects and/or graphics.

## Adding more keys

When you define your versionInfo object as shown above, here's what's
really going on internally: at pre-init time, the library looks for
certain property names in your versionInfo object, and writes their
values to the "gameinfo.txt" file using the associated keys. The library
creates the gameinfo.txt file itself, so you don't ever need to edit
this file directly. In fact, you *can't* edit it directly even if you
wanted to, because any changes you make would be lost the next time you
compile - the library overwrites the file with its
automatically-generated copy on every build.

Since you can't edit gameinfo.txt directly, you might wonder how you go
about defining key/value pairs other than those we've shown in the
example above.

The first thing to do is to look at the list of [standard name/value
pairs](#fields) above. For each one, notice that there's a "TADS 3
versionInfo example" listed. That shows you the format to use for that
name/value pair. So, if you can find the key that you want to use in the
standard list above, just add it to your versionInfo object as shown.

If you *can't* find the key you're looking for in the list above, either
because the key was added to the list since the last time we updated
this article, or because you want to add a custom key rather than a
standard key, you have to perform an extra step. What you need to do is
to add a mapping from a versionInfo property name to your new GameInfo
key name. To do this, you simply override the metadataKeys property of
your versionInfo object to add your new key. The metadataKeys property
contains a list of alternating GameInfo key names and versionInfo
property IDs. Each pair creates one association, so you just need to add
one pair for each new key you want to use.

For example, suppose you want to use a custom key called
"kids.age-range". You could accomplish this like so:

       versionInfo: GameID
         metadataKeys = (inherited + ['kids.age-range', &ageRange])
         ageRange = '5-11'
         IFID = '64d2c120-c80b-11da-a94d-0800200c9a66'

         // etc with the same definitions as before...
       ;

We've overridden the metadataKeys property, first inheriting the default
value and then adding in our new key-name-to-property association -
specifically, we've associated the custom GameInfo key called
"kids.age-range" with the versionInfo property ageRange. Once we've done
that, we can set the "kids.age-range" value simply by setting the
property we've associated with it.

For full details on how the versionInfo object works, you should look at
its Adv3 library superclasses: in particular, its immediate superclass,
GameID; and that class's superclass, GameInfoModuleID.

## <span id="coverArt">Cover Art</span>

You can include a piece of "cover art" with your game. This is a PNG or
JPEG image that you'd like to associate with your game when it appears
in a listing, such as in IF Archive game browsers.

To include cover art, simply add to the game file a resource called
".system/CoverArt.jpg" or ".system/CoverArt.png". The name must match
the file format - if you call it ".system/CoverArt.jpg", it has to be a
JPEG image, and if you call it ".system/CoverArt.png" then it has to be
a PNG image. Use the TADS resource compiler to embed the image; use the
exact resource name ".system/CoverArt.jpg" or ".system/CoverArt.png",
with no other path prefix.

To ensure maximum compatibility with third-party tools that want to use
your cover art, there are some limitations you should observe when
preparing your image. The image *must* be at least 120x120 pixels, and
it *should* be no larger than 1200x1200; 960x960 is the preferred size.
The image should be roughly square. You can use any color depth or other
variation that's valid in your chosen format.

### Displaying cover art within the game

When you bundle a cover art image into your game as we've just
described, the image is stored within the compiled game file just like
any other multimedia resource. This means that you can display it within
your game, using the standard HTML \<IMG\> tag. Just refer to the image
by the special resource name ".system/CoverArt.jpg" (or ".png", if you
used a PNG image).

For example, here's how you could show the image in your ABOUT message
in TADS 3:

    versionInfo: GameID
       name = 'My Game'
       // ...other versionInfo definitions...

       showAbout()
       {
          "<center>
          <img src='.system/CoverArt.jpg' width=256 height=256>
          </center>
          <.p>Welcome to <i>My Game</i>! ";
       }
    ;

## <span id="ifiction"></span>The Treaty of Babel

The so-called [Treaty of Babel](http://babel.ifarchive.org) is a
standard that the developers of the major IF systems agreed upon in
2006. The Treaty defines an interoperability standard that lets anyone
extract a basic set of bibliographic metadata from any game written in
any participating system. GameInfo is the TADS mechanism for defining
this metadata, so if you use GameInfo, the IF Archive and other third
parties will be able to extract the information you define. This will
let the Archive and other tools do a better job of indexing your game
and presenting it to users.

</div>

------------------------------------------------------------------------

<div class="navb">

*TADS 3 Technical Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="fund.html" class="nav">Fundamentals</a> \> Bibliographic
Metadata - the GameInfo Format  
<span class="navnp"><a href="t3iautohot.html" class="nav"><em>Prev:</em> Using AutoHotKey
with the Workbench Editor (Windows)</a>    
<a href="depth.html" class="nav"><em>Next:</em> TADS 3 In Depth</a>    
</span>

</div>
