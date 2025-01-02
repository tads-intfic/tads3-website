---
layout: docs
---


[<img src="topbar.jpg" data-border="0" />](index.html)





[\[Main\]](index.html)  
*[\[Previous\]](abasicburner.html)
  [\[Next\]](theartofconversation.html)*

## Ending the Game

TADS 3 provides a finishGameMsg(msg, extra) function for ending a game
and displaying a message. This function optionally displays a message
explaining precisely how or why the game has ended, such as \*\*\* YOU
HAVE DIED \*\*\* or \*\*\* YOU HAVE WON \*\*\*. Although there will not
be many ways of ending the game in *The Further Adventures of Heidi*,
and we won't let Heidi get killed off, we can demonstrate the use of
this funtion at one point in the game: when the player wins.

  
What the function does is to end the game, display a message explaining
why, and then provide the user with options to RESTORE, RESTART, or
QUIT, plus any additional options such as UNDO or show the FULL SCORE
defined by the extra parameter (which is passed as a list). So, for
example, if you want the UNDO option and the FULL SCORE option to be
displayed, specify the second argument to finishGameMsg as
\[finishOptionUndo,finishOptionFullScore\].   
  
The first argument, msg, can either be a single quoted string containing
the message you want displayed, such as 'YOU HAVE FAILED DISMALLY IN
YOUR QUEST' or one of the pre-defined FinishType objects: ftDeath,
ftVictory, ftFailure or ftGameOver, which display an appropriate message
(you could also define your own FinishType objects, but that's a
complication we'll leave for now). Either way the message will appear
surrounded by asterisks ('\*\*\*'). Alternatively, if the msg argument
is nil no message will be displayed.  
  
If you were going to call this function from several different places in
your code, always with the same options, you might find it convenient to
define your own wrapper function to do this, for example:  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

endGame(msg)  
{    
    finishGameMsg(msg, \[finishOptionUndo,finishOptionFullScore\]);  
}  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

Then at each point where you wanted the game to end, you could simply
call endGame(msg) without having to specify the list of extra options
that you always wanted to be displayed. Since, however, finishGameMsg is
only called once in heidi.t, there's little point our doing that here.  
  
That's all very well, but we now need to call finshGameMsg() when Heidi
hands the ring over to the charcoal burner, and at first sight that
looks a bit tricky because it appears that all the GiveShowTopic does is
to display a string.  
  
One way to get round this would be to place
\<\<finshGame(ftVictory, \[finishOptionUndo,finishOptionFullScore\]))\>\> at
the end of the double-quoted string in the GiveShowTopic. Since a
function call is a perfectly valid expression, and this one effectively
returns nil, this should work perfectly well. However, we might also
want to add a couple of points to the player's score at this point, at
which point using the \<\<\>\> construct starts to get a bit cumbersome.
Besides, it's useful to have another approach up our sleeve for
situations where embedding expressions in double-angle brackets won't
really do the job.  
  
What we do is simply to exploit the fact that although the library
expects topicResponse to be a property containing a double-quoted
string, the TADS 3 compiler will be perfectly happy if we treat it as a
method containing any code we like. We can thus amend our definition of
the GiveShowTopic to:  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

+ GiveShowTopic @ring  
  topicResponse  
  {  
    "As you hand the ring over to {the burner/him}, his eyes light up in   
      delight and his jaws drop in amazement. \<q\>You found it!\</q\> he   
      declares, \<q\>God bless you, you really found it! Now I can go and call   
      on my sweetheart after all! Thank you, my dear, that's absolutely   
      wonderful!\</q\>";  
     addToScore (2, 'giving {the burner/him} his ring back. ');  
     finishGameMsg(ftVictory, \[finishOptionUndo,finishOptionFullScore\]);  
  }  
;  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

We have finally reached the point where the game is playable all the way
through. It's not a very exciting game, to be sure, but at least it's
now winnable. It would be more interesting if we could make the charcoal
burner a more responsive character, so the player could learn a little
more about him, how he came to lose the ring, why it's so important to
him, and so forth. That is what we shall try to do next.  
  

------------------------------------------------------------------------

*Getting Started in TADS 3*  
[\[Main\]](index.html)  
*[\[Previous\]](abasicburner.html)
  [\[Next\]](theartofconversation.html)*


