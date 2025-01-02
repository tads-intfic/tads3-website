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
<td style="text-align: left;"><strong>bulk and weight<br />
</strong></td>
<td style="text-align: right;"><a href="described.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="setsuperclasslist.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
The **bulk** and **weight** properties are fairly self-explanatory, in
that they can be used to hold numbers (which must be integers)
representing the bulk (volume) and weight of the item according to any
scheme the game author finds convenient.  
  
One use of these properties, which is normally deprecated in modern IF,
is to limit what the player character can carry, either by weight or
volume. This can be done by setting the player character's bulkCapacity
and weightCapacity properties to some value lower than the default of
10000. Conversely, if you are going to use a large range of numbers for
the bulk property of you objects, you might want to raise its
maxSingleBulk property to something larger than its default value of 10.
Although inventory puzzles are now unpopular, it is more acceptable to
limit what a PC can carry round in his or hands if you provide something
(such as a bag or sack) he or she can use to transport objects that
exceed the capacity of his or her hands.  
  
Another use for the bulk property might be as a rough and ready way of
preventing the absurdity of allowing an obviously small container like a
purse contain one or more obviously large objects like a packing case or
a pair of oars; for this reason alone you might want to give at least a
little thought to the bulk you give your objects and the bulkCapacity
you give any container objects. At the very least it would be odd to
have a container whose bulkCapacity exceeded its bulk.  
  
Apart from limiting what a player can carry, weight could be used to
limit what various platforms and passages can support; you could, for
example, have a flimsy bridge that collapses if the total weight it is
made to bear exceeds a certain amount. In this game, however, we shall
use weight for a different kind of puzzle, namely one that involves
putting exactly the correct total weight (which in this game will be 54)
on a stone altar in order to open a secret door behind it. Any
combination of objects that weigh 54 in total will trigger the secret
door, and in due course we shall provide a weighing machine for the
player to find out what any portable object weighs. But to make sure the
problem is soluble, we shall also provide a set of objects that weigh 1,
2, 4, 8, 16 and 32 units, which guarantees that (once all these objects
have been collected) any weight up to 63 units can be formed by some
combination of these objects (to obtain 54 the player will need 32 +
16 + 4 + 2). Each of these objects will be a square tablet, each made of
some different material. One face of each of these objects will contain
a grid of 25 (5 x 5) letters; when the complete set is collected these
inscriptions will, when deciphered, contain the instruction to place 54
pounds on the altar. An inscription on a tombstone outside the temple
(in which the altar is located) will provide a clue how the inscriptions
are to be deciphered.  
  
Since there will be several of these tablets in the game, all with
similar descriptions, it will be convenient to define a Tablet class:  
  
class Tablet : Thing   
  desc = "\\\<\<theName\>\> is about eight inches square and an inch thick.  
   On it is inscribed:\b\<FONT FACE='TADS-Typewriter'\>\<\<inscription\>\>\</FONT\>\b"     
  bulk = 4  
;  
  
We can then define our first tablet and place it in longCave:  
  
brassTablet : Tablet 'brass tablet\*tablets' 'brass tablet' @longCave  
  inscription = "F T M T R\nA O O I U\nS T U N L\nT I L R E\nR A D A R"  
  initSpecialDesc = "A brass tablet rests by the ladder. "  
  weight = 4    
;  
  
We'll explain how the coded message works later; in the meantime you're
welcome to try to work it out for yourself!  
  
