<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>DefaultShowTopic : <a
href="defaulttopics-overview.htm">DefaultTopic</a><br />
</strong></td>
<td style="text-align: right;"><a
href="defaultgivetopic.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="defaultgiveshowtopic.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
A DefaultShowTopic responds to any SHOW X TO Y command when no specific
response (ShowTopic or GiveShowTopic) has been provided for X. Note
that, as with the DefaultGiveTopic, X must be an object in scope, but,
unlike the DefaultGiveTopic, it need not be portable. Thus, in Sarah's
starting location, the DefaultShowTopic will be triggered by commands
such as SHOW SARAH THE DOOR and SHOW SARAH THE SHIP (but not SHOW SARAH
THE LAKE, since the lake is a Decoration object).  
  
This means that we must either be careful not to supply any default
responses that presuppose that the object shown to Sarah can be picked
up and physically handed over, or else devise some method of supplying
different responses for portable and non-portable items. Just for fun,
we'll go down the second route, by overriding handleTopic to test
whether the object matched is portable or not, and using the eventList
property to list the portable responses and the topicResponse property
to handle the non-portable cases.  
  
Here's how we'll define the DefaultShowTopic for Sarah (again, put this
in sarah, not one of her ActorStates):  
  
+ DefaultShowTopic, ShuffledEventList  
  "{The sarah/she} glances at {the dobj/him} and remarks, \<q\>I'd say   
    it's {a dobj/he}, \<\<rand('definitely', 'palpably', 'undeniably')\>\> {a dobj/he}.   
    How \<\<rand('remarkable','quaint','nice','strange','odd')\>\>!\</q\> "  
     
  eventList =  
  \[  
    '\<q\>Very nice, I\\m sure.\</q\> she remarks, with no obvious enthusiasm. ',  
    '\<q\>How interesting!\</q\> she declares. ',  
    'She examines {the dobj/him} and hands {it dobj/him} back to you. ',  
    '\<q\>It\\s {a dobj/he}.\</q\> she observes, \<q\>So?\</q\> '      
  \]  
  /\* We override this method to distinguish between portable and other objects \*/  
  handleTopic(fromActor, obj)    
  {  
     /\* note the invocation \*/  
     noteInvocation(fromActor);  
       
     /\* set pronoun antecedents if possible \*/  
     setTopicPronouns(fromActor, obj);  
           
     /\* check to see if the matched object is portable \*/  
     if (!obj.ofKind(NonPortable))  
      {                     
          /\* invoke our script \*/  
          doScript();  
      }  
     else  
      {  
         /\* show our simple response string \*/  
          topicResponse;  
      }       
  }  
;  
  
Note the use of the dobj parameter substitution strings to get at the
object that Sarah has been shown. Since SHOW TO is a TIAction, any valid
SHOW TO action will have a valid direct object, so we can use these
parameter strings to describe it (or gDobj to get at the object itself).
This would also work with GIVE TO (but not with ASK ABOUT, ASK FOR, or
TELL ABOUT). Note also how we use the rand() function to provide some
variety to the topicResponse without actually specifying a list of
separate responses. When the rand() function is supplied with the list,
it selects one of the elements at random.  
  
  
