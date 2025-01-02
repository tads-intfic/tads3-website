<div class="topbar">

[<img src="topbar.jpg" data-border="0" />](index.html)

</div>

<div class="main">

[\[Main\]](index.html)  
*[\[Previous\]](averysimplegame.htm)
  [\[Next\]](makingtheitemsdosomething.htm)*

## Adding Items to the Game

Now let's add a few items to the game that can be manipulated by the
player, so he can do something besides walk back and forth between our
two rooms. We'll add a solid gold skull, and a pedestal for it to sit
upon.

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td>  pedestal: Surface, Fixture <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td>    name = 'pedestal' <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td>    noun = 'pedestal' <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td>    location = cave <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td>  ; <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td>  goldSkull: Thing <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td>    name = 'gold skull' <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td>    noun = 'skull' 'head' <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td>    adjective = 'gold' <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td>    location = pedestal <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td>  ; <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="25"></td>
<td> <br />
</td>
<td width="25"></td>
</tr>
</tbody>
</table>

|     |     |     |     |
|-----|-----|-----|-----|
|     |     |     |     |

Here we've defined two objects, pedestal and goldSkull.  
  
The pedestal belongs to two classes, Surface and Fixture. This means
that it has attributes of both classes; when there's a conflict, the
Surface class takes precedence, because it's first in the list of
classes. Objects of the Surface class can have other objects placed on
top of them; objects of the Fixture class can't be carried. The
goldSkull belongs to the Thing class, which is the generic class for
portable objects without any special properties.  
  
Since these objects can be manipulated directly by the player, the
player needs words to refer to them. This is what the noun and adjective
properties define. All objects that the player can manipulate must have
at least one noun. Note that the goldSkull has two nouns; they are
simply listed with a space between them. Objects can also have
adjectives; these serve to distinguish between objects which have the
same noun, but are otherwise optional. A good game will recognize all of
the words it uses to describe an object, so if you describe the skull as
a "gold skull," you should understand it when the player says "take the
gold skull."  
  
Although here we have defined noun and adjective as separate properties,
as indeed they are, the English-language part of the TADS 3 library
allows a short cut: we can instead define an object's vocabulary - its
nouns and adjectives - in the single property vocabWords, like so:  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td>vocabWords = 'gold skull/head' <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

This brings us to a subtlety. Notice that the desc property uses
*double* quotes around its strings, but the other properties have
*single* quotes. The distinction is that a string enclosed in double
quotes is displayed immediately every time it is evaluated, while a
string enclosed in single quotes is a string value that can be
manipulated internally. Double-quoted strings are displayed
automatically as a convenience, since most strings in text adventures
are displayed without further processing. (Note that the double quote
mark is a separate character on the keyboard, and is not simply two
single quote marks.) We'll discuss this distinction further at the end
of the next chapter.  
  
These two objects have another new property, location. This simply
defines the object that contains the object being defined. In the case
of the pedestal, the containing object is the cave room; since the
goldSkull is on the pedestal, its location is pedestal. Note that the
internal workings of the containment model make no distinction between
an object being *inside* another object and the object being *on*
another object. This means that an object can't (usefully) be both a
Surface and a Container.  
  
  

------------------------------------------------------------------------

*Getting Started in TADS 3*  
[\[Main\]](index.html)  
*[\[Previous\]](averysimplegame.htm)
  [\[Next\]](makingtheitemsdosomething.htm)*

</div>
