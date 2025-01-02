---
---
<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>RearSurface : <a
href="rearcontainer.html">RearContainer</a><br />
</strong></td>
<td style="text-align: right;"><a
href="rearcontainer.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="complexcontainer.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A RearSurface is simply a RearContainer for which
[abandonLocation](spaceoverlay.html) is nil by default, meaning that the
contents of a RearSurface are considered to be attached to it and so
move with it. As the comments in the library code explain it:  
  
*A "rear surface" is essentially the same as a "rear container," but
models the contents as being attached to the back of the object rather
than merely sitting behind it.  
  
The only practical difference between the "container" and the "surface"
is that moving a surface moves its contents along with it, whereas
moving a container abandons the contents, leaving them behind where the
container used to be.  
*  
As with RearContainer, you'd be most likely to use RearSurface as the
ComplexComponent of a [ComplexContainer](complexcontainer.html), but you
could also use it for a flat object that has something attached to back.
For example, we could have a small photo with a mysterious piece of
paper attached loosely to the back (we'll return to this piece of paper
later). For now you can put this pair of objects in any convenient
location; we'll be assigning them their proper home later:  
  
+ smallPicture : RearSurface 'small picture' 'small picture'  
  "It's a faded photograph of an eccentrically-dressed man with a  
    long scarf, in company with a smiling young woman with  
    long blonde hair. "  
   allowPutBehind = nil  
;  
  
++ rightHalfPaper : Hidden, Readable 'right half torn sheet yellow paper\*sheets'   
  'torn sheet of yellow paper'    
  "It looks like the right hand half of a sheet of paper that's been torn in two. It  
   contains a list of names. "    
;  
  
Once again, we make this piece of paper Hidden so the player won't find
it without looking behind the picture. The piece of paper will move with
the picture, but will readily detach from it when taken, thereby
modelling a piece of paper that is only loosely attached.  
  
One final detail we can handle is that it may occur to the player to
look at the rear of the picture, but to do so by typing LOOK AT BACK OF
PICTURE instead of the, perhaps less natural and less obvious, LOOK
BEHIND PICTURE. This can be handled quite readily by adding the
following:  
  
++ Decoration 'back/picture/photo/photograph' 'back of the picture'  
   dobjFor(Examine)   
   {  
     verify() { nonObvious; }  
     action() { replaceAction(LookBehind, smallPicture); }  
   }     
;  
  
The thing to note here is our use of the nonObvious in the verify
routine; this is to prevent the back of the picture being included by
the parser as a likely target of the EXAMINE command, so that a command
like X PICTURE doesn't give the game away by responding with "Which do
picture do you mean, the small picture or the back of the picture?"  
