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
<td style="text-align: left;"><strong>PostRestoreObject: <a
href="moduleexecobject.html">ModuleExecObject</a><br />
</strong></td>
<td style="text-align: right;"><a
href="presaveobject.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="postundoobject.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A PostRestoreObject is similar to a [PreSaveObject](presaveobject.html),
except that instead of its execute method being invoked just before
saving, it is invoked just after restoring.  
  
For example, if our imaginary mad IF author (he'd have to be man,
wouldn't he) wanted to inspire not only anger but hatred and loathing,
he could add the following:  
  
PostRestoreObject()  
  execute()  
  {  
     "You ridiculous wretch! To be restoring this game you must have saved it,   
      and you \<i\>know\</i\> how much I hate that! I suppose you think that way you   
      can escape the points penalty for saving. Well, you can't -- I'm deducting  
      another ten thousand points for restoring, and IT SERVES YOU RIGHT!!!!\<.p\>";  
  
     addToScore(-10000, 'restoring the game');     
  }  
;  
  
It goes without saying, of course, that the good reader of this guide
would never use PostRestoreObject for so nefarious a purpose, but it
could happen that there was some legitimate housekeeping activity we
needed to carry out just after a restore (for example, if we were trying
to keep track of how long the player had been playing our game for).  
  
  
