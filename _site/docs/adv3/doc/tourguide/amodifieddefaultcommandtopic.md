<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>A Modified
DefaultCommandTopic<br />
</strong></td>
<td style="text-align: right;"><a
href="tcommandtopic.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="consultable.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
Some way back, we promised to give a modified form of the
[DefaultCommandTopic](defaultcommandtopic.htm) that would generate a
more satisfactory transcript when a command is issued to Sarah before
she's in her InConversationState (so that the greeting protocols
intervene between the issuing of the command and Sarah's response to
it). In the light of the changes made up to this point, we should now
modify DefaultCommandTopic thus:  
  
modify DefaultCommandTopic  
handleTopic(fromActor, action)  
  {  
    actionPhrase = action.getInfPhrase;  
      
    /\*   
     \* if the player types a command like X ME, getInfPhrase will  
     \* return 'examine you'. In such a case we want to replace 'you'  
     \* with 'me'.  
     \*/  
    actionPhrase = actionPhrase.findReplace(' you ', ' me ', ReplaceAll);  
    if(actionPhrase.endsWith(' you'))  
      actionPhrase = actionPhrase.findReplace(' you', ' me', ReplaceOnce,  
        actionPhrase.length-5);  
    currentAction = action;  
    inherited(fromActor, action);  
  }    
  actionPhrase = nil  
  currentAction = nil  
;  
  
We can then redefine Sarah's DefaultCommandTopic thus:  
  
+ DefaultCommandTopic  
  topicResponse()  
  {  
    "\<q\>\\\<\<getActor.name\>\>,  please   
    \<\<actionPhrase\>\>,\</q\> you request.\<.p\>";  
    responseList.doScript();  
  }  
  responseList : ShuffledEventList  
  {  
   \[  
    '\<q\>No, I\\d really rather not!\</q\> she tells you.\<.p\>',  
    '\<q\>I don\\t think so.\</q\> she declines.\<.p\>',  
    '\<q\>Since when did you have the right to boss me around?\</q\>  
      she demands.\<.p\>',  
    '{The sarah/she} merely shakes her head.\<.p\>',  
    '\<q\>Do it yourself!\</q\> she tells you.\<.p\>'    
   \]  
  }    
;  
  
And we now can indeed get transcripts like the following:  
  
\>**woman, x ship**  
"Hello there," you say.  
  
"Hello." she smiles at you, slightly quizzically.  
  
"Young woman, please examine the ship," you request.  
  
"Do it yourself!" she tells you.  
