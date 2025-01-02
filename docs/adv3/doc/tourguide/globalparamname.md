<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>globalParamName<br />
</strong></td>
<td style="text-align: right;"><a
href="initdesc+initspecialdesc.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="specialdesc.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
The brassCoin is a little unusual in that it changes its name when it is
first examined. This really ought to be reflected in the initSpecialDesc
property which could instead have been defined as:  
  
initSpecialDesc = "\\\<\<aName\>\> lies on the ground in a dim corner of the cave. "  
  
Then, before the coin is examined it will be listed in a room
description as:  
  
"A small brassy object lies on the ground in a dim corner of the cave.
"  
  
Whereas if it is examined before being picked up and another LOOK
command is issued, it will then appear listed as:  
  
"A small brass coin lies on the ground in a dim corner of the cave."  
  
Which more accurately describes the player's state of knowledge of the
object. This is fine, but globalParamName allows a slightly neater way
of doing the same thing. It's really only useful on objects that change
their name in the course of the game (which is likely to be a small
minority), and they allow the object to be referred to in a
<a href="%20http://www.tads.org/howto/t3msg.htm%20"
target="_top">parameter substitution string</a>. This works by setting
the globalParamName property to a single-quoted string that can be
anything we like, but which must be unique (in the realm of parameter
names). The globalParamName thus set can then be used as a message
parameter which refers to this particular object, just as the library
parameter dobj and iobj refer to the direct and indirect objects of the
current command. This means we can then rewrite initSpecialDesc as  
  
initSpecialDesc = "{A coin/he} lies on the ground in a dim corner of the cave. "  
  
The definition of the brass coin object then becomes:  
  
brassCoin : Thing '(small) brassy object' 'small brassy object' @longCave  
  "On the obverse is the head of King Freddie the Fat, and on the reverse  
   is stamped ONE GROAT. "   
   **initSpecialDesc = "{A coin/he} lies on the ground in a dim corner of the cave. "  
**   initDesc = "It looks like it might be a coin of some sort. "   
   **globalParamName = 'coin'**  
    
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
     cmdDict.removeWord(self, 'object', &noun);  
     initializeVocabWith('brass coin/groat\*coins');  
   }   
;  
  
