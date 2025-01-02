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
<td style="text-align: left;"><strong>described<br />
</strong></td>
<td style="text-align: right;"><a href="specialdesc.html">[Previous]</a>
<a href="generalintroduction.html">[Main]</a> <a
href="bulkandweight.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
The **described** property is simply a flag that indicates whether an
object has been explicitly examined by the player. It starts out at nil,
and is set to true when the player EXAMINES the object. We can take
advantage of this to provide a slightly smoother response if the player
first picks up the coin and only then examines it, by explaining on what
is then the first examination that the 'small brassy object' is in fact
a coin; and while we're at it we can also use it to avoid needlessly
calling the changeName() routine more than once (note that this test
must come *before* we call the inherited handling, or changeName will
never be called):  
  
  
brassCoin : Thing '(small) brassy object' 'small brassy object' @longCave  
  **"\<\<described ? nil : 'It turns out to be a coin. '\>\>  
**    On the obverse is the head of King Freddie the Fat, and on the reverse  
   is stamped ONE GROAT. "   
   initSpecialDesc = "{A coin/he} lies on the ground in a dim corner of the cave. "  
   initDesc = "It looks like it might be a coin of some sort. "  
   globalParamName = 'coin'  
   specialDesc = "{A coin/he} lies on the floor. "     
   useSpecialDesc { return location.ofKind(Room) \|\| useInitSpecialDesc(); }  
   dobjFor(Examine)  
   {  
     action()  
     {  
        **if (!described) changeName();  
    **inherited;  
     }  
   }  
   changeName()  
   {  
     name = 'small brass coin';  
     cmdDict.removeWord(self, 'object', &noun);  
     initializeVocabWith('brass coin/groat\*coins');  
   }   
;  
  
If this is beginning to seem like a lot of complicated work for one
simple coin, don't worry; in practice most object definitions are not
nearly this elaborate, we have made this one so mainly to illustrate
what *can* be done with some of the methods and properties of Thing, not
what *must* be done on each occasion. Our small brass coin is now well
and truly defined enough, and we shall move on to define some other
Things to populate our game world.  
  
