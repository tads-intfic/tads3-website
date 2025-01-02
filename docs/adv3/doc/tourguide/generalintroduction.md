---
layout: docs
---
<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>General Introduction<br />
</strong></td>
<td style="text-align: right;"><a
href="generalintroduction.html">[Main]</a> <a
href="thesamplegame.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
  

**TADS 3 TOUR GUIDE**  

  

**FOR TADS 3.1**  

  
The adv3 library that comes with the TADS 3 Interactive Fiction
authoring system is extensive and powerful. It can also seem rather
overpowering to new users of TADS 3, because there is so much to learn,
and one hardly knows where to start looking for what one needs.  
  
Enter the *TADS 3 Tour Guide*. Its aim is to give a guided tour of some
of the main features of the TADS 3 library. We shall not be exploring
every nook and cranny (at this stage it would probably be more confusing
than helpful to do so). Nor shall we be able to wander down every side
street and alley, though we may poke our noses into a few. What we shall
aim to do is to walk round most of the main streets so that their basic
layout and interconnections will hopefully start to become clear.  
  
This Tour Guide is *not* intended as the first port of call in learning
TADS 3. If you are a complete beginner I strongly recommend you start
with my introductory *Getting Started in TADS 3 : A Beginner's Guide,*
which you can download from
<a href="%20http://www.tads.org" target="_top">http://www.tads.org</a>
(or which you may already have with your TADS 3 distribution). Although
there will be some overlap with material covered there, the *Tour Guide*
assumes basic familiarity with programming in the TADS 3 language and
the definition of simple TADS 3 objects. For this Guide is *not* a TADS
3 manual, or a substitute for one. Neither is it an introduction to
writing games in TADS 3, or an exhaustive description of every Class,
property and method in the TADS 3 library. Finally, it is *not* a
complete guide to the TADS language, many features of which are already
well documented in the *System Manual* that come with the TADS 3
distribution, or which can be downloaded from
<a href="%20http://www.tads.org" target="_top">http://www.tads.org</a>.  
  
What this *Tour Guide* *is* is a kind of Guided Tour to the TADS 3
library, that tries to take in as many as possible of the classes,
properties and methods that are likely to be useful to most game
authors. The assumption is that what you will find useful is not so much
a load of abstract explanation, but rather a series of concrete
examples. This *Tour Guide* therefore takes you through developing a
sample game, introducing each Class in turn with one or two examples of
its use. Later sections re-use classes and properties introduced before,
and sometimes suggest further sophistications.  
  
This *Guide* may thus be used either as a tutorial or as a reference (or
both). As a tutorial it may be worked through from start to finish,
developing the game step-by-step until all the main features of the
library have been introduced and exemplified; you may like to use it as
a follow-on tutorial from *Getting Started in TADS 3*. But it may also
be used as a reference to the use of various library classes. For the
latter purpose the Windows help file version of this *Guide* is likely
to prove most useful; for the former you may prefer the PDF version.
Note, however, that the *Tour Guide* will probably be more useful as a
reference once you have worked through it as a tutorial, since in the
very nature of its treatment of developing a game, its later sections
presuppose objects and concepts mentioned in earlier sections, and many
techniques have to be introduced in passing. Note also that a complete
reference to the library is provided by the *TADS 3 Library Reference
Manual*.  
  
Of necessity there must be some compromise between the need to develop
the sample game in a reasonably logical sequence and the desirability of
presenting the various library classes in a reasonably logical sequence.
For this reason we start by looking at Rooms and Connectors, since
laying out some kind of map is necessary before anything much else can
happen in a game. We then go through the other Classes representing
concrete game objects, before going on to look at the creation of NPCs
and the use of more abstract classes for conversations, scoring, hints
and the like.  
  
**<u>IMPORTANT NOTE</u>** - This Guide is intended for use with **TADS
3.1**. Although changes from the immediately preceding versions of TADS
3 (especially TADS 3.0.12 and later) are relatively minor prior,
successive library updates have substantial changes; if you are using a
significantly older version of TADS 3 a great deal in this guide
***<u>may not work</u>***. Please therefore:  
  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14">·</td>
<td>Update to TADS 3.1 before attempting to work through this Guide. See
<a href="%20http://www.tads.org/t3dl.html"
target="_top">http://www.tads.org/t3dl.html</a>.  <br />
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
<tr data-valign="top">
<td width="14">·</td>
<td>If, for some reason, you are unable to update to TADS 3.1, please be
aware that any problems you encounter may be due to incompatibilities
between versions of the library rather than bugs in the sample code.
 <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

  
Finally, I hope this Tour Guide will prove helpful, and even enjoyable
to use. I always welcome feedback and suggestions, not least those that
point out genuine errors, typos or bugs. I can be contacted by email on
*eric dot eve at hmc dot ox dot ac dot uk*.  
  
Eric Eve  
08-May-11  
