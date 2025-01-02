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
<td style="text-align: left;"><strong>StringPreParser<br />
</strong></td>
<td style="text-align: right;"><a
href="amodifieddefaultcommandtopic.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="telltoaction.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A StringPreParser object is a class that takes a command string and
optionally transforms it into another string before it's passed to the
parser. We could, for example, use this to transform any command of the
form TELL SARAH TO OPEN THE DOOR into SARAH, OPEN DOOR. Experienced
players will know that they're meant to try the latter form, but less
experienced players will inevitably try commands like ASK SARAH TO GO
NORTH or TELL SARAH TO FOLLOW ME and feel aggrieved that the game
doesn't understand them.  
  
Using a StringPreParser to massage an input string is always a slightly
fragile mechanism, since the player may always enter something you
hadn't thought of which will result in the string being transformed into
something you certainly didn't want; but here's a StringPreParser that
makes a fair shot of turning TELL X TO Y or ASK X TO Y into X, Y:  
  
StringPreParser  
  doParsing(str, which)  
     {  
         local workStr = str.toLower();  
         /\* First check that the string starts with 'tell' or 'ask' \*/  
         if(!workStr.startsWith('tell ') \|\| !workStr.startsWith('ask '))  
           return str;  
         /\* If the string contains 'about ' assume it's a TELL ABOUT   
          \* or ASK ABOUT command  
          \*/  
         if(workStr.find(' about '))  
           return str;  
             
         /\* If the string doesn't contain 'to' it can't be a TELL TO   
            or ASK TO command \*/  
                
         local locTo = workStr.find(' to ');  
         if(locTo == nil)  
           return str;    
           
         local locSpace = workStr.find(' ');           
         str = workStr.substr(locSpace + 1, locTo - locSpace - 1)  
           + ',' + workStr.substr(locTo + 3);  
           
         /\* finally, replace 'you' with 'me' in case the player  
          \* typed TELL X TO X YOU or the like  
          \*/  
         str = str.findReplace(' you ', ' me ', ReplaceAll);  
         if(str.endsWith(' you'))  
           str = str.findReplace(' you', ' me', ReplaceOnce, str.length-5);  
         return str;  
     }  
;  
  
One weakness of this is that it will not work with TELL HER TO OPEN THE
DOOR even in contexts where it is obvious what HER refers to. A rather
more robust way of handling this is to define a
[TellToAction](telltoaction.html) which does the job, which we'll look at
in the next section.  
  
On the other hand, a StringPreParser may be the only way you could
straightforwardly translate X, GIVE ME Y into ASK X FOR Y.  
  
StringPreParser  
  runOrder = 110  
  doParsing(str, which)  
     {  
         local workStr = str.toLower;  
         local iComma = workStr.find(',');  
         local iGiveMe = workStr.find('give me');  
         if(iComma == nil \|\| iGiveMe == nil)  
           return str;  
         str = 'ask ' + workStr.substr(1, iComma-1)  
          + ' for ' + workStr.substr(iGiveMe + 8);  
        
         return str;  
     }  
;  
  
To see this in action, let's define an AskForTopic that turns ASK SARAH
FOR A KISS into SARAH, KISS ME; then you can try SARAH, GIVE ME A KISS,
which will be turned into ASK SARAH FOR KISS and thence into SARAH, KISS
ME.  
  
First, we need a kiss topic:  
  
tKiss : Topic 'kiss';  
  
Then we can define our AskForTopic for Sarah (directly located in
sarah):  
  
+ AskForTopic @tKiss  
  topicResponse()  
  {  
    "\<q\>Give us a kiss.\</q\> you ask.\<.p\>";  
    local tokList = Tokenizer.tokenize('kiss me');  
    executeCommand(getActor, gActor, tokList, true);  
  }  
;  
  
  
  
  
