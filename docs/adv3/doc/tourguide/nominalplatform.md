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
<td style="text-align: left;"><strong>NominalPlatform : <a
href="fixture.html">Fixture</a>, <a
href="platform.html">Platform</a><br />
</strong></td>
<td style="text-align: right;"><a href="platform.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="bed.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A NominalPlatform is a named place where an NPC can stand (or sit, or
lie). This can be used to have NPCs described as standing in relation to
a particular part of the room, e.g. "by the door" or "under the ceiling
light". By default the NPC will be described as standing "on" the
NominalPlatform, but this can easily changed by defining the
**actorInPrep** to something other than 'on'. For example, to allow an
NPC to be described as "standing behind the table" in the museum lobby,
we could add this after the room definition:  
  
+ behindTable : NominalPlatform     
  name = 'table'  
  actorInPrep = 'behind'  
;  
  
Note that we do not give this NominalPlatform any description or
vocabWords, since it is not an object the player is meant to interact
with directly. We thus have to assign the name property explicitly.  
  
To see this actually doing anything, we need to add an NPC; since we
have not yet reached the Actor class, we'll make him about as minimal as
we can:  
  
Person 'curator' 'curator' @behindTable  
  "The curator is a ferret-faced little man in is mid-forties. "  
  isHim = true    
;  
  
When you visit the museum lobby you will now see that the curator is
described as standing behind the table. At this point, though, you may
be wondering whether this was really worth the bother; why not simply
state this in the curator's description? The answer is that we might
want the actor to move around, so that we don't always want him to be
described as standing behind the table. We can demonstrate this by
starting to define the museum proper and adding another NominalPlatform
there:  
  
museum : Room 'Museum of Curious Antiquities' 'the main museum'  
 "Many display cases line this long chamber, each containing its own curious  
  exhibit. There seems to be another chamber off to the south, marked by  
  a sign saying \<q\>Benefactors' Exhibition\</q\>, while the main exit is to the east. "  
 east = museumLobby   
;  
  
+ byCases : NominalPlatform  
  name = 'display cases'  
  actorInPrep = 'by'    
;  
  
To show this at work we need to move the curator from one place to the
other. To do this we'll have the curator follow the player character in
and out of the museum:  
  
curator : Person 'curator' 'curator' @behindTable  
  "The curator is a ferret-faced little man in is mid-forties. "  
  isHim = true      
  **beforeTravel(traveler, connector)  
  {  
   inherited(traveler, connector);  
    if(traveler==gPlayerChar && connector is in (museum, museumLobby))  
    {  
      "The curator follows you \<\<connector==museum ? 'in' : 'out'\>\>. ";  
      if(connector == museum)  
         moveIntoForTravel(byCases);  
      else  
         moveIntoForTravel(behindTable);  
    }      
  }**  
;  
  
If you want to have the curator standing by the display cases but
sitting behind the table, you could add the line posture = sitting to
the initial definition of the curator, and then posture = standing; and
posture = sitting; after the two moveIntoForTravel statements, i.e.:  
  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="28"></td>
<td>if(connector == museum)  <br />
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
<td width="28"></td>
<td>      {  <br />
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
<td width="28"></td>
<td>         moveIntoForTravel(byCases);  <br />
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
<td width="28"></td>
<td>         posture = standing;  <br />
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
<td width="28"></td>
<td>      }     <br />
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
<td width="28"></td>
<td>      else  <br />
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
<td width="28"></td>
<td>      {  <br />
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
<td width="28"></td>
<td>         moveIntoForTravel(behindTable);  <br />
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
<td width="28"></td>
<td>         posture = sitting;    <br />
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
<td width="28"></td>
<td>      }  <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

  
Although raises the question of what the curator is sitting on, and
whether one should not then implement a chair object to place him in,
instead of a NominalPlatform.  
  
The standard postures defined in the library are standing, sitting and
lying, so if you want to have an NPC described as doing anything else in
a NominalPlatform (such as leaning against the doorpost), you'll either
have to define a new posture (which would be rather laborious for a
one-off use) or else override a batch of methods on the NominalPlatform.
According to the comments in the library code, 'For more elaborate
customizations, such as "leaning against the streetlamp", you'll need to
override actorStandingHere, statusStanding, actorStandingDesc,
listActorStanding, and actorStandingGroupPrefix/Suffix'. Unfortunately
the last two don't appear to be properties of NominalPlatform, (they're
actually methods of the libMessages object and can hardly be customised
on a per NominalPlatform basis). One can, however, override all the rest
on a custom class:  
  
class VNominalPlatform : NominalPlatform  
  postureName = 'standing'  
  actorInPrep = 'on'  
  statusStanding(actor) { " (\<\<postureName\>\> \<\<actorInName\>\>)";  }  
  actorStandingDesc(actor)   
    { "\\\<\<actor.itIs\>\> \<\<postureName\>\> \<\<actorInName\>\>. "; }  
  actorStandingHere(actor)  
    { "\\\<\<actor.nameIs\>\> \<\<postureName\>\> \<\<actorInName\>\>. "; }   
  listActorStanding(actor)  
    { "\\\<\<actor.nameIs\>\> \<\<postureName\>\> \<\<actorInName\>\>. "; }     
;   
  
Then if one wanted to describe the curator as "leaning against the
display cases" you could simply change that NominalPlatform to:  
  
+ byCases : VNominalPlatform  
  name = 'display cases'  
  actorInPrep = 'against'    
  postureName = 'leaning'  
;  
  
And it will probably work well enough (and remove the need to set
curator.posture). Whether this is worth the effort for a single case is
debatable, but it may become worthwhile if you wanted to make a lot of
use of NominalPlatforms describing various postures.  
  
  
  
  
  
