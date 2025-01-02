<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>disambigName<br />
</strong></td>
<td style="text-align: right;"><a href="food.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="wearable.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
If you haven't tried compiling and running the game for a while, now
would be a good time to try. Try going into the square cave (using the
MEGA or FIAT LUX command to light your path) and then try TASTE BANANA,
SMELL BANANA, FEEL BANANA and LISTEN TO BANANA. Then try taking the
banana, moving west back into the main cave, dropping the banana, and
then trying to take it again with a TAKE BANANA command. At this point
you should encounter the following problem:  
  
\>**take banana**  
Which banana do you mean, the banana, or the golden banana?  
  
\>**banana**  
Which banana do you mean, the banana, or the golden banana?  
  
\>  
  
Since we have called our edible banana simply 'banana' there is nothing
we can call it that will distinguish it from the golden banana, so in
this situation nothing we type will enable us to take the (edible)
banana. We could, of course, add edible to its vocabWords, but that
won't be apparent to the player, and actually calling it 'edible banana'
in its name property would look a bit clumsy. In a case like this the
solution is to give it a **disambigName** property, a name that will be
used solely for the purpose of disambiguation. We might amend our banana
thus:  
  
Food '**(edible)** banana' 'banana' @squareCave  
  "It's yellow, about six inches long, and slightly curved. And It looks  
   reasonably fresh. "  
  tasteDesc = "It's distinctly banana-flavoured. "  
  smellDesc = "It has a kind of faint, fruity smell. "  
  feelDesc = "The banana skin feels firm but smooth. "  
  soundDesc = "The banana is strangely silent. "  
  **disambigName = 'edible banana'**  
  initSpecialDesc = "Someone has left a banana here. "  
;  
  
If you now compile and run the game again, you'll see how using
disambigName (coupled with adding 'edible' to the banana's vocabulary)
has solved the problem.  
  
