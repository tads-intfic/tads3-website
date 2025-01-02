---
---
Resources in HTML TADS

# Resources in HTML TADS

### What is a "resource"?

If you're a Macintosh or Windows system programmer (or you've done any
other type of graphical user interface programming), you're probably
familiar with the term "resource," meaning a bit of data, usually
binary, that's external to a program, and which is loaded and used by
the program as it runs. Resources in this context are used for things
such as icons, bitmaps, menu definitions, and other types of initialized
binary data that would be inconvenient to type in to a C program
directly; resources are also used to externalize things such as strings,
so that they can be changed without recompiling the program (which is
useful when translating a program to a different national language, for
example). On most GUI systems, the operating system provides a set of
tools, programmatic interfaces, and file format definitions for
manipulating resources.

HTML TADS uses the term "resource" for a similar concept, although the
implementation is quite different. HTML TADS resources are *not*
implemented using operating system resources. To avoid any confusion,
keep in mind that normal operating system resources are never used in an
HTML TADS context.

HTML TADS allows the game author to incorporate certain types of binary
data, such as JPEG, PNG, and MNG images, into a game. With normal HTML
in a normal Web browser, these objects are referenced using URL's
("Uniform Resource Locators," the filename-like strings that identify
web pages and graphics; URL's usually look something like
"http://www.somewhere.com/dir/whatever.html").

HTML TADS is not a normal browser, and it doesn't interpret object
references as URL's. Instead, it uses resources.

### <span id="naming">Specifying resource names</span>

A game author uses a resource by referring to the resource from an HTML
tag in the game's text. When the game displays the tag, HTML TADS loads
the resource and displays it as specified by the tag.

As mentioned earlier, with normal HTML, this type of reference is simply
a URL that points to a file stored on a web server. With HTML TADS, the
reference is instead a resource name.

At its simplest, a resource name is very much like a relative URL --
that is, one which is specified relative to the address of the page that
references it, and therefore doesn't contain any protocol or absolute
path prefix. This type of URL reference might look like this:

       <IMG SRC="background.jpeg">

This tells the browser to load an image from a file called
"background.jpeg", looking in the same location as the current page.

HTML TADS resource references work very much like this, because they're
simply filenames. The location of the "current page" for HTML TADS is
always the directory that contains your .GAM file or .t3 file.

For example, support you're running Windows 95, and the compiled version
of the game you're working on is called `C:\TADS\GAMES\MYGAME.GAM`. The
root location where HTML TADS will start looking for resource files is
the directory containing the .GAM file, `C:\TADS\GAMES`. Now, suppose
you use this tag in your game text:

        <IMG SRC="picture.jpg">

HTML TADS will load the image from the file `C:\TADS\GAMES\PICTURE.JPG`,
since it looks for the file you specify in the directory containing the
.GAM or .t3 file.

Note that you can **never** refer to resources across the internet - you
can't use "http:" or "ftp:" paths, for example. You can only refer to
resources that are on the local computer's hard disk.
<span id="RelativePaths"></span>

### Relative Paths

The name of a resource can include a "relative path," using roughly the
same format as a relative URL. Since HTML TADS doesn't interpret actual
URL's, you can't start a resource name with "http://" as you would an
absolute URL; instead, you use a path that's relative to the current
location (which is always the directory containing the .GAM or .t3
file), just as you could use an URL relative to the current page.

HTML TADS resource names that use relative paths *always* use slashes
for the path separator characters, regardless of what conventions your
operating system uses. TADS internally converts these paths into
appropriate filenames for the local system. Because resource names
always use a uniform notation, regardless of the type of operating
system you're using, you don't have to worry about changing your game to
make it run on other operating systems.

Suppose you're running on a Macintosh, and your compiled game file is
called `Macintosh HD:TADS:Games:MyGame.gam`. Now suppose your game
displays this tag:

        <IMG SRC="pics/skull.png">

HTML TADS will convert this to a Macintosh filename, treating it as a
path relative to the folder containing the .GAM or .t3 file, so it will
look for a file called `Macintosh HD:TADS:Games:pics:skull.png`.
<span id="CaseSensitivity"></span>

### Case Sensitivity

You need to be careful about using upper- and lower-case letters in your
resource names. HTML TADS does not itself treat case as significant, but
some file systems (notably Unix) do. If you're developing your game on
an operating system with case-sensitive filenames, you'll need to use
the exact mixture of upper- and lower-case letters in your resource
references as you do in the actual filenames.

Note that the HTML TADS [resource mechanism](#EmbeddedResources) is
*not* case-sensitive. So, if you develop a game on a system with
case-sensitive filenames, and then you bundle your resources into the
.GAM or .t3 file for distribution, the resource names will not
distinguish case in the version your players receive. While this may
appear at first glance to simplify things for you, it actually can
create a problem: if you have two resources whose names differ only in
case, HTML TADS will treat them as separate resources as long as they're
in external files, but it will *not* be able to tell them apart after
you bundle them into the .GAM or .t3 file. So, if you're developing on a
case-sensitive operating system, be careful that your resource names are
all unique irrespective of case.

Note that resource names only need to be unique within a directory. You
may still want to avoid using the same resource name for different files
in different directories, because of the confusion it might create for
you, but HTML TADS will distinguish files with the same name based on
their paths, regardless of whether you're using external files or
bundled resources.

### Image types

HTML TADS supports two static image formats: JPEG and PNG. Ideally, HTML
TADS would support only one format, since this would make it easier to
port HTML TADS to new operating systems; however, no single image format
adequately addresses the full range of needs for storing images.
Fortunately, the JPEG and PNG formats complement one another very well,
so between the two, most needs should be met.

In addition to the static image formats, HTML TADS supports MNG, an
animated image format.

Note that the GIF format is not supported. Although GIF is a widely
deployed and popular image format, I chose not to support it in HTML
TADS due to patent licensing restrictions on the GIF data compression
system. PNG provides all of the benefits of GIF (and more), without the
onerous restrictions encumbering GIF, and is becoming widely supported.

You can learn more about the PNG format at
<http://www.cdrom.com/pub/png/> . This site includes information about
tools that support PNG. Even if the graphics software you prefer to use
doesn't support this format, conversion tools are available that produce
PNG files from files in the other popular formats.

Information about the MNG format can be found at [the MNG web
site](http://www.libpng.org/pub/mng/).

### Sound types

HTML TADS supports four sound formats: MIDI, WAV, MPEG Audio 2.0 (layers
I, II, and III, also known as MP1, MP2, and MP3, respectively), and Ogg
Vorbis digital audio. Refer to [HTML TADS Sounds and Music](sound.html)
for information on the sound features in HTML TADS.

We recommend using Ogg Vorbis over MP3. Ogg is generally considered a
superior format in terms of playback quality and compression ratio, and
it's a fully open-source format. Some Linux Multimedia TADS players
don't support MP3 due to intellectual property entanglements, but all
platforms support Ogg.

### Filename suffixes

HTML TADS determines the type of object that a resource contains based
on the resource's suffix. You must always use an appropriate suffix when
naming a resource. Here are the valid suffixes:

- `.JPG` - a JPEG image
- `.JPE` - a JPEG image
- `.JPEG` - a JPEG image
- `.PNG` - a PNG (Portable Network Graphics) image
- `.MNG` - an MNG (Multiple-image Network Graphics) animated image
- `.MID` - a MIDI music sequence
- `.MIDI` - a MIDI music sequence
- `.WAV` - waveform audio
- `.MPG` - MPEG audio 2.0 layer (II or III) sound
- `.MP2` - MPEG audio 2.0 layer II sound
- `.MP3` - MPEG audio 2.0 layer III sound
- `.OGG` - Ogg Vorbis digital audio

Note that the suffix always begins with a period.

Some of the types are associated with multiple suffixes. For example,
JPEG images can use the suffixes .JPG, .JPE, and .JPEG. There's no
difference between the suffixes in these cases; the variations are
allowed simply because the different suffixes are all in widespread use.
<span id="EmbeddedResources"></span>

### Embedding resources in a .GAM or .t3 file

To make it easy to distribute a game, you can embed all of your
resources into your compiled .GAM or .t3 file. Once the resources are
embedded, you only have to distribute the compiled game file - you don't
have to distribute all of the JPEGs and PNGs and OGGs and so on
individually. (This also makes it a little more work for players to
"cheat" by browsing the images in your game; the temptation could be
overwhelming if you were to distribute your game with a set of .JPG
files.)

Since you may not want to go to the trouble of embedding your resources
in the .GAM or .t3 file while you're developing your game (since you'll
probably be recompiling the game frequently), the resource embedding
mechanism is strictly optional. Most authors will want to use external
files while developing a game, and then bundle everything into the
compiled game file when building the distribution version of the game.
You generally won't want to bundle resources into the compiled game file
while working on the game, since you'd need to apply the extra resource
bundling step each time you compile the game.

Note that, apart from the possible differences in [case
sensitivity](#CaseSensitivity) between your operating system and the
HTML TADS resource mechanism, you won't have to make any changes in your
game to switch between using external files and bundled resources. The
bundling mechanism stores the resources using the same name they'd have
if they were external files.

To embed resources into a .GAM or .t3 file, you use the TADS resource
manager. For TADS 2, this is called TADSRSC; for TADS 3, it's t3res.

The simplest way of using the resource manager is to store all of your
resources in one or more subdirectories of the directory containing the
compiled game file. Since [relative paths](#RelativePaths) work best for
external files if you're working this way, you'll probably want to
arrange your resources into this type of directory structure anyway.

Suppose you have your resources in two subdirectories of the directory
containing your .GAM file; the subdirectories are called `Rooms` and
`Objects`. Using external files, you'd refer to resources in one of
these directories using a tag like this:

        <IMG SRC="Rooms/Cave.jpeg">

To bundle all of these resources into your .GAM file, you'd first
compile your game as normal, then you'd run TADSRSC or t3res on it:

`tadsrsc mygame.gam Rooms Objects`

*for TADS 2*

`t3res mygame.t3 Rooms Objects`

*for TADS 3*

This invokes the resource manager, and tells it to store every file in
the `Rooms` and `Objects` subdirectories in your .GAM or .t3 file. The
resource tool stores these resources using the same names they'd have if
they were external files, so your cave picture gets stored as a resource
called `Rooms/Cave.jpeg` in the game file.

Note that you need to run TADSRSC/t3res each time you compile your game,
because the TADS compiler overwrites any existing copy of your .GAM/.t3
file each time you compile your game.

When you refer to a resource, HTML TADS always looks for the resource in
the .GAM or .t3 file first. If it can't find a resource in the game
file, it looks for an external file. <span id="ExternalResfiles"></span>

### Using External Resource Files for Multiple Configurations

If you're planning to distribute your game on CD-ROM, or better yet
DVD-ROM, you're probably not too concerned about how big your game is
going to be when you bundle together all of your image and sound files.
However, if you're planning to distribute your game over the internet,
you probably will be concerned about the total size of your distribution
files, and you may want to accommodate players who have slow network
connections.

One approach to accommodating players who don't want to download very
large game files is simply to be conservative in your use of graphics
and sound resources. HTML TADS allows you to use graphics and sounds as
heavily or lightly as you like; if you use graphics and sound in only a
few places, where they will provide the greatest impact, you can keep
your total distribution size within reason.

An alternative approach that some game authors may wish to consider is
to offer their games in multiple configurations. The idea is that you
offer your game in two or more pieces: a "core" file that everyone
downloads, which includes the .GAM or .t3 file plus the minimum set of
resources; and one or more add-on files that people can download at
their option, and which contain additional resources that you consider
optional. Alternatively, you could provide one file that contains
full-quality versions of your resources, and a separate file that
contains lower-quality (using fewer colors, for example, or lower
resolution digitized sound) and therefore smaller versions of the same
resources; people with slow connections would be able to download the
lower-quality version if they wanted, but those who had a fast network
connection (or lots of patience) would still be able to get the
full-quality version.

To facilitate these types of configuration options, HTML TADS lets you
put your resources into separate files from your .GAM/.t3 file. With
external resource files, you can still bundle a group of files into a
single file for easier distribution, but now they're separated from the
.GAM/.t3 file for more versatile configuration.

**TADS 2 Note:** the external resource file mechanism requires TADSRSC
version 2.2.4 or higher.

#### Creating External Resource Files

You prepare a secondary resource file using the same resource manager as
you use to add resources to your .GAM/.t3 file. The only difference is
that, in order to create your external resource file in the first place,
you must use the `-create` option on the resource manager command line:

`tadsrsc -create mygame.rs0 -add Rooms`

*for TADS 2*

`t3res -create mygame.3r0 -add Rooms`

*for TADS 3*

The `-create` option tells the resource manager to create a new file
rather than look for an existing file. You would never use this option
with a .GAM or .t3 file, of course, because the TADS compiler creates
the game file before you add resources to it; with a separate resource
file, there's no prior compilation step, so you need to create the file
directly with the resource manager the first time you use it.

#### How HTML TADS Loads External Resource Files

Whenever HTML TADS loads a game, it looks to see if there are any files
in the same directory as the game with the same name as the game and the
suffix ".rsN" (for TADS 2) or ".3rN" (for TADS 3), where N is a digit
from 0 to 9. For example, if your game is called GOLD.GAM, HTML TADS
will look in the same directory as GOLD.GAM for files called GOLD.RS0,
GOLD.RS1, GOLD.RS2, and so on. For a TADS 3 game called GOLD.T3, the
interpreter would look for GOLD.3R0, GOLD.3R1, GOLD.3R2, and so on. HTML
TADS will open each file and add its resources to the resources in the
.GAM/.t3 file.

A resource in an external resource file overrides a resource of the same
name in the .GAM or .t3 file. This allows you to place your minimum,
core set of resources in the game file, so that everyone who downloads
your game has at least that minimal set of resources, and then provide
an "upgrade" resource file to players that don't mind the additional
download. Since the separate resource file overrides the .GAM file
resources, players who download the additional file will automatically
see the upgraded resources.

If resources with the same name appear in multiple external resource
files, the resource in the file with the highest suffix number overrides
any conflicting resources. For example, if MYGAME.RS3 and MYGAME.RS1
both contain a resource with the same name, the resource in MYGAME.RS3
is used, and the one in MYGAME.RS1 is ignored. (Likewise for TADS 3
files: MYGAME.3R3 overrides MYGAME.3R1.)

Note that the player can optionally specify the path to the external
resource files. By default, HTML TADS looks for resource files in the
same directory that contains the .GAM file. If, for some reason, the
player can't put resource files into the same directory (which might be
the case if some of the files are distributed on read-only media such as
CD-ROM, while others are distributed for installation on the player's
hard disk), the player can specify another directory for resource files.
To do this, the player uses the `-respath` command-line option when
invoking HTML TADS:

        htmltads -respath d:\gold\res gold.gam

This tells HTML TADS to run GOLD.GAM from the current directory, but to
look for GOLD.RS0, GOLD.RS1, and so on in the directory `D:\GOLD\RES`
instead of in the current directory.

#### An Example of Using External Resource Files

Numerous configurations are possible using this mechanism. As an
example, one use of external resource files would be to provide a
high-quality version of your sound effects for people that didn't mind
large files, and a lower-quality version for people with slow network
connections. To do this, you'd sample your sound effects at full
quality, then use the sound tool of your choice to produce smaller
versions (for example, by reducing the quantization, or reducing a
stereo recording to mono). Put the high-quality sounds in the directory
AudioHQ, and put the more compact versions in AudioLQ. Now you can
produce a pair of resource files for the sound effects:

        tadsrsc -create mygame.rs0 -add AudioLQ
        tadsrsc -create mygame.rs1 -add AudioHQ

We've intentionally placed the higher-quality resources in the .RS1
file, so that if a player should happen to have both resource files
installed, the higher-quality ones will be used. (As described earlier,
the resource mechanism automatically picks the resource in the
highest-numbered resource file if the same resource name appears in
multiple external resource files.)

When you distribute your game, you would put together two zip files. The
first contains MYGAME.GAM and MYGAME.RS0; this is the large version, for
people with fast network connections. The second contains MYGAME.GAM and
MYGAME.RS1; this is the compact version.
<span id="compatibility"></span>

### Embedded Resources and TADS 2 .GAM File Compatibility

HTML TADS uses the same TADS .GAM file format as previous versions of
TADS (file format version "C"), so games that you compile for HTML TADS
can be read by older versions of the interpreter. However, note that
embedded HTML resources do use a new resource type, which older
interpreters will not recognize. Therefore, if you embed resources
directly into your .GAM file, players that play the game with a
character-mode interpreter must have at least version 2.2.3. If you do
not embed resources directly in your .GAM file, this restriction does
not apply; you may want to use external resource files, as described
above, if this is of concern to you.
