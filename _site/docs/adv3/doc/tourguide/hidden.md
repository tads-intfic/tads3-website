<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>Hidden : <a
href="thing-introduction.htm">Thing</a><br />
</strong></td>
<td style="text-align: right;"><a
href="sightpresence+islisted.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="presentlater.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
The Hidden class provides a very convenient means of temporarily hiding
something you want discovered later by some action by the player. It's a
subclass of Thing that adds a **discovered** property and a **discover**
method. By default, a Hidden starts with its **discovered** property set
to nil. The overridden **canBeSensed** method then hides the object from
the player (making it effectively invisible) until **discovered** ****
is set to true, which is what calling the **discover** method does.  
  
Suppose we want to hide the brass key under the rug in the roundCave.
One way we can do this is simply to add Hidden to brassKey's class list
and then override rug.actionDobjForLookUnder \[ = the action method in
dobjFor(LookUnder)\] to call brassKey.discover if the brass key has not
yet been discovered:  
  
brassKey : **Hidden**, Key 'small brass key' 'brass key' @roundCave  
  "It\<\<isBent ? ' looks slightly bent' : '\\s been straightened'\>\>. "  
  isBent = true  
;  
  
rug : Immovable 'large rectangular chinese rug/pattern/leaves/dragons' 'Chinese rug'  
   @roundCave  
  "The rectangular rug is patterned in pastel colours, mainly turquoise round the  
   edge and principally golds and browns within. The patterns consists mainly  
   of leaves and dragons. "  
  initSpecialDesc = "A Chinese rug covers the centre of the floor. "  
  specialDesc = "The Chinese rug has been pulled over to one side of the cave. "  
  cannotTakeMsg = 'You probably could roll the carpet up and drag it around,  
    but you don\\t want to be encumbered with it. '  
  dobjFor(Pull)  
  {  
    action()  
    {  
      if(moved)  
        "You can't pull the rug any further, it's already at the edge of the cave. ";  
      else  
      {  
        "Pulling the rug over to the edge of the cave reveals a square hole in the floor. ";  
        moved = true;  
      }  
    }  
  }  
  **actionDobjLookUnder()  
  {  
    if(brassKey.discovered)  
      "{You/he} find{s} nothing else under the rug. ";  
    else  
    {  
      "Under the rug {you/he} find{s} a small brass key. ";  
      brassKey.discover();  
      addToScore(1, 'finding the brass key ');  
    }  
  }**  
;  
  
Although it's not strictly necessary here, I've taken the opportunity to
slip in an example of the **addToScore()** function. As defined here, it
will add one point to the player's score together with the explanation
(should the player issue a FULL SCORE command) that the award is for
finding the brass key. You should be aware that this function will
increase the score every time it's called, so you want to make sure it
can only be called once if you only want the score to be increased once
(or use the addToScoreOnce method instead). Since in this case we can be
sure that the else clause will only be executed once, it's safe to use
addToScore here. We'll come to a full discussion of
[scoring](scoring-overview.htm) later.  
  
Another (and in this case, simpler and easier) way of hiding something
under something else is to put it in an [Underside](underside.htm),
normally the subUnderside of a [ComplexContainer](complexcontainer.htm).
We could so this with the book of matches we defined earlier, then they
won't be revealed until the player specifically orders LOOK UNDER
DRESSING TABLE, at which point they'll automatically be revealed. To do
this, all we need to do is to add Hidden to the matchbook's class
list:  
  
matchbook : **Hidden,** Matchbook 'book matches' 'book of matches'   
   @(dressingTable.subUnderside)  
  "The matchbook bears a picture of a banana and the words  
   CABAL LIGHTING CO. "  
;  
  
