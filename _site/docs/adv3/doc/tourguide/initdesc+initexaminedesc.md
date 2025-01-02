<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>initDesc &amp;
initExamineDesc<br />
</strong></td>
<td style="text-align: right;"><a href="vocabwords.htm">[Previous]</a>
<a href="generalintroduction.htm">[Main]</a> <a
href="globalparamname.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
If the coin starts life lying on the ground as a small brassy object,
rather than seeing a description that reads "You see a small brassy
object here" it would be nicer if it read something like "A small brassy
object lies on the ground in a dim corner of the cave. " Likewise, if we
examined the coin without first picking it up if would be good if we
obtained a vaguer description such as "It looks like it might be a coin
of some sort. " - after all, the standard description we've given the
coin refers to what's on its obverse and its reverse, but how can we see
what's on both sides of the coin while it's still lying on the ground?  
  
To achieve this we can use the initDesc and initExamineDesc properties.
The first of these, initDesc, is what will be displayed in a room or
contents listing before the object has been moved (while its moved
property is nil); initExamineDesc (if defined) is the description that
will be given in response to an EXAMINE command before the object has
been moved (if initExamineDesc is not defined, the ordinary desc
property will be used instead). The definition of brassCoin then
becomes:  
  
brassCoin : Thing '(small) brassy object' 'small brassy object' @longCave  
  "On the obverse is the head of King Freddie the Fat, and on the reverse  
   is stamped ONE GROAT. "   
   **initDesc = "A small brassy object lies on the ground in a dim corner of the cave. "  
   initExamineDesc = "It looks like it might be a coin of some sort. "**  
   dobjFor(Examine)  
   {  
     action()  
     {  
       inherited;  
       changeName();  
     }  
   }  
   changeName()  
   {  
     name = 'small brass coin';  
     G_dict.removeWord(self, 'object', &noun);  
     initializeVocabWith('brass coin/groat\*coins');  
   }   
;  
  
Note that initDesc and initExamineDesc are only used so long as moved is
nil; as soon as moved is set to true they are no longer employed. The
moved property is set to nil by the mainMoveInto(newContainer), which is
called by moveIntoForTravel(newContainer) which is in turn called by
moveInto(newContainer), the method most commonly used to move objects in
game code or the library's handling of actions like TAKE. Normally this
does not matter, but there may be occasions when it could defeat the use
of initDesc and initExamineDesc. For example, suppose the player had to
perform some action to reveal the coin, e.g. because it was hidden under
something else or falls out of something else. We might start the coin
in another container (or nil) and then move it into the longCave
using:  
  
brassCoin.moveInto(longCave);  
  
The trouble is that this will set brassCoin.moved to true, so the
initDesc and initExaminedDesc won't be used, even though this is
effectively the first appearance of the coin in the game. The way round
this under such circumstances is to set moved back to nil in your
code:  
  
brassCoin.moveInto(longCave);  
brassCoin.moved = nil;  
  
