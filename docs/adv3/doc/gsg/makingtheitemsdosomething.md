---
layout: docs
---


[<img src="topbar.jpg" data-border="0" />](index.html)
[\[Main\]](index.html)  
*[\[Previous\]](addingitemstothegame.html)
  [\[Next\]](startinganewgame.html)*

## Making the Items do Something

The game is still rather bland; it has no puzzles. So, let's introduce a
small puzzle. Let's assume that the gold skull wasn't merely left lying
around; instead, whoever left it there arranged for a trap to go off if
it should be lifted off the pedestal. To implement this, we need to add
a *method* to the goldSkull object. A *method* is a special type of
property which contains code (i.e. a sequence of one or more statements)
to be executed; it is very much like a function in C or Pascal. The new
goldSkull with the method looks like this:  



  goldSkull: Thing  



    name = 'gold skull'  

    vocabWords = 'gold skull/head'  

    location = pedestal  

      

    actionDobjTake()      

    {  

      "As you lift the skull, a volley of poisonous  

      arrows is shot from the walls! You try to dodge  

      the arrows, but they take you by surprise!";  

        

      finishGameMsg(ftDeath, [finishOptionUndo]);  

    }  

  ;  

 


The method actionDobjTake (which stands for "action **D**irect
**obj**ect **Take**") is invoked when the player (or any other actor)
tries to take the skull. Here, we've simply defined it first to display
a message (since the message is enclosed in double quotes, it is
displayed immediately upon being evaluated), and to then call a special
function called finishGameMsg (the argument ftDeath shows that we want
finishGameMsg to end the game with a YOU HAVE DIED message;
finishOptionUndo offers the player an UNDO option after the death
message).  


You should note that we didn't just pick the name actionDobjTake out of
thin air. The actionDobjTake method in the goldSkull object is called by
TADS 3 when the player types a "take" command with goldSkull as the
direct object. Each verb the player types results in the system calling
particular methods in the object or objects named in the command. The
naming of these methods is described in more detail later in this
guide.  
  
You might wonder why we didn't need a actionDobjTake method in our
original definition of goldSkull, or you might have assumed that the
system automatically knows what to do if no actionDobjTake is defined
for an object. In fact, all objects do need a actionDobjTake method, and
the system doesn't automatically know anything about it. However, since
practically every object has the same actionDobjTake, with a few
exceptions such as goldSkull, it would be extremely tedious to type a
actionDobjTake method for every object in the game. Instead, we use
something called "inheritance." By defining the goldSkull to be a member
of the Thing class, you tell TADS 3 that goldSkull "inherits" all of the
definitions for Thing, in addition to any definitions it makes on its
own. The Thing class, which appears in the adv3 library file included at
the beginning of the program, defines a actionDobjTake method, so
anything that is defined to be a Thing inherits that definition.
However, if something is defined in both Thing and goldSkull, as
actionDobjTake is in this example, the definition in goldSkull takes
precedence - it "overrides" the inherited method.  


We actually don't have a very good puzzle here, because there's no way
to take the gold skull without dying. So, let's put a rock on the cave
floor:  

  smallRock: Thing  


    name = 'small rock'  
    vocabWords = 'small rock'  
    location = cave  
  ;  




Now, let's change the actionDobjTake method of the goldSkull.  
  
  actionDobjTake()  
  {  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="25"></td>
<td>    if (location != pedestal ||       /* am I off the pedestal? */
 <br />
</td>
<td width="25"></td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="25"></td>
<td>    smallRock.location == pedestal )  /* or is the rock there? */
 <br />
</td>
<td width="25"></td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="25"></td>
<td>      inherited;                      /* yes - take as usual */
 <br />
</td>
<td width="25"></td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="25"></td>
<td>    else                              /* no - the trap goes off! */
 <br />
</td>
<td width="25"></td>
</tr>
</tbody>
</table>
    {  
      "As you lift the skull, a volley  
      of poisonous arrows is shot from  
      the walls! You try to dodge the  
      arrows, but they take you by surprise!";  

      finishGameMsg(ftDeath, [finishOptionUndo]);  
    }  
  }  




This new actionDobjTake first checks to see if the object being taken
(the special object self, which is the object to which the message
actionDobjTake was originally sent), which in this case is the gold
skull, is already off the pedestal; if it is, we don't want anything to
happen, so we invoke the *inherited* handling of actionDobjTake. We also
use the inherited handling if the small rock is on the pedestal. When we
invoke the *inherited* handling, the actionDobjTake method that we
inherit from our parent class (in this case, Thing) is invoked. This
allows us to override a method only under certain special circumstances,
and otherwise do business as usual. If we don't satisfy one of these two
requirements, the volley of poisonous arrows is released as before.  


So, the solution to the puzzle is to put the rock on the pedestal before
taking the skull, thereby fooling the pedestal into thinking the skull
is still there.  


As this stands, the player can avoid losing the game, but can't actually
win it. To finish the game with a winning ending instead of a deadly
one, you can call finishGameMsg with ftVictory instead of ftDeath. If
you want to try experimenting for yourself before going on to the next
chapter, see if you can make the game end in victory either (a) when the
player succeeds in picking up the gold skull, or (b) when he succeeds in
leaving the cave with it. For the latter, try putting your extra code in
the enteringRoom(traveler) method of startroom, and testing for the
condition goldSkull.isIn(gPlayerChar). If you want to be even more
adventurous, try adding another room, say a path through the jungle
leading away from startroom, and make the player win the game when the
player character enters your new room with the skull. However, if you
don't feel confident enough to try any of this on your own just yet, no
matter, just read on.  


This should give you some idea of how a TADS 3 program looks. In the
next chapter, we'll start to develop a somewhat larger game, starting
once again from the very basics and developing our understanding of how
they're normally handled in TADS 3, before going on to add items and
puzzles of increasing complexity.  
  
  

------------------------------------------------------------------------

*Getting Started in TADS 3*  
[\[Main\]](index.html)  
*[\[Previous\]](addingitemstothegame.html)
  [\[Next\]](startinganewgame.html)*


