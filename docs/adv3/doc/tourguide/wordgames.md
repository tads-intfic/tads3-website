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
<td style="text-align: left;"><strong>Hiding with Words<br />
</strong></td>
<td style="text-align: right;"><a
href="hiding+fiding-introduction.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="findingincode.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
Perhaps the most basic way you could go about trying to hide something
is by obscuring the way it's described, at least until it comes into the
player's possession. We want to make the diamond lying at the end of the
path a bit less obvious. To do this we could juggle the various
description and name properties of the diamond, giving it a null string
initSpecialDesc so it isn't listed anywhere until moved, and employ our
custom inRoomDesc method to add a little hint to the room description.
As a first (and somewhat over-the-top attempt) we might try something
like:  
  
diamond : Thing 'sparkle' 'sparkle' @pathEnd  
  "It looks like a genuine diamond - and a valuable one too, exquisitely cut  
   and multifaceted. "  
  iobjFor(CutWith) { verify() { } }  
  initSpecialDesc = ""  
  initDesc = "It's hard to make out; maybe there's something there, or  
   maybe it's just a trick of the light. "  
  inRoomDesc()  
  {  
    if(!moved) "Something seems to sparkle among the rocks. ";  
  }  
  moveInto(newDest)  
  {  
    if(!moved)  
    {  
      initializeVocabWith('sparkling diamond');        
      name = 'diamond';  
      "Take a sparkle? You'll be wanting to drink a rainbow next!\b  
       Oh well, if you insist. So, you scrabble among the rocks with your  
       clumsy little fingers and - my goodness! They close upon the sparkle,   
       and as you pick it up it turns out to be something very solid and  
       hard after all - a diamond no less! ";  
    }  
    inherited(newDest);  
  }  
;  
  
Decoration 'rocks' 'rocks' @pathEnd  
  desc = "\<\<diamond.moved ? 'They\\re just rocks. ' : diamond.inRoomDesc\>\>"  
  isPlural = true  
;  
  
This is really pretty horrendous, quite apart from the sarcasm of the
message displayed when the player first takes the diamond, he or she is
meant to guess that the correct action here is TAKE SPARKLE. This makes
it little better than a "read the author's mind" puzzle. It can be
improved, however, by adding handling for searching the rocks (which is
something the player is more likely to think of):  
  
diamond : Thing 'sparkle' 'sparkle' @pathEnd  
  "It looks like a genuine diamond - and a valuable one too, exquisitely cut  
   and multifaceted. "  
  iobjFor(CutWith) { verify() { } }  
  initSpecialDesc = ""  
  initDesc = "It's hard to make out; maybe there's something there, or  
   maybe it's just a trick of the light. "  
  inRoomDesc()  
  {  
    if(!moved) "Something seems to sparkle among the rocks. ";  
  }  
  moveInto(newDest)  
  {  
    **if(!renamed)  
    {  
      "When you pick it up it turns out to be a gem - a diamond no less! ";  
      rename();         
    }**  
    inherited(newDest);  
  }  
  **rename()  
  {  
     initializeVocabWith('sparkling diamond');       
     name = 'diamond';  
     renamed = true;  
  }  
  renamed = nil  
**;  
  
Fixture 'rocks' 'rocks' @pathEnd  
  desc = = "\<\<diamond.moved ? 'They\\re just rocks. ' : diamond.inRoomDesc\>\>"  
  isPlural = true  
  dobjFor(LookIn)  
  {  
    action()  
    {  
      if(diamond.moved)  
        "There's not much here. ";  
      else if(diamond.renamed)  
        "A diamond nestles among the rocks. ";  
      else  
      {  
        diamond.rename();  
        "Hunting diligently among the rocks you come across the source of the  
         sparkle - something tangible and hard - a diamond! ";  
      }  
    }  
  }  
;  
  
This may be acceptable, but it's quite a lot of code for finding a
diamond, and unless this is exactly what you want, there are probably
better ways of doing it, as we shall see.  
