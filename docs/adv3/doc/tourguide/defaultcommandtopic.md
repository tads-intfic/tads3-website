---
---
<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>DefaultCommandTopic : <a
href="defaulttopics-overview.html">DefaultTopic</a><br />
</strong></td>
<td style="text-align: right;"><a href="commandtopic.html">[Previous]</a>
<a href="generalintroduction.html">[Main]</a> <a
href="overridingobeycommand.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
By default, if a player issues a command which the author has not
catered for, such as CURATOR, KISS SARAH, the game responds with a
message like "The curator refuses your request." The DefaultCommandTopic
provides a convenient means of customizing this response, either on each
individual actor state, or globally for the actor.  
  
Here's how we might define a global DefaultCommandTopic (located in the
sarah object) for Sarah:  
  
+ DefaultCommandTopic, ShuffledEventList  
  \[  
    '\<q\>No, I\\d really rather not!\</q\> she tells you.\<.p\>',  
    '\<q\>I don\\t think so.\</q\> she declines.\<.p\>',  
    '\<q\>Since when did you have the right to boss me around?\</q\>  
      she demands.\<.p\>',  
    '{The sarah/she} merely shakes her head.\<.p\>',  
    '\<q\>Do it yourself!\</q\> she tells you.\<.p\>'    
  \]   
;  
  
This is fine, except that if a command is directed at Sarah before
you've struck up a conversation with her, you get something like this:  
  
**\>woman, examine the ship**  
"Hello there," you say.  
  
"Hello." she smiles at you, slightly quizzically.  
  
"Do it yourself!" she tells you.  
  
  
The player will probably see what it means, but it does read a little
strangely. It would be nicer if we could get something like this:  
  
\>**woman, x ship**  
"Hello there," you say.  
  
"Hello." she smiles at you, slightly quizzically.  
  
"Young woman, please examine the ship," you request.  
  
"Do it yourself!" she tells you.  
  
  
This can be achieved, but it will take a bit of work; fortunately this
work will prove generally beneficial in extending the power of the
CommandTopic system. We'll take it a step at a time.  
  
