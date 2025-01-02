<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>Overriding obeyCommand<br />
</strong></td>
<td style="text-align: right;"><a
href="defaultcommandtopic.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="tcommandtopic.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
The library version of ActorState.obeyCommand is defined as follows:  
  
obeyCommand(issuingActor, action)   
{   
   /\*   
    \* By default, we ignore all orders. We do need to generate a   
    \* response, though, so for this purpose, treat the order as a   
    \* conversational action, with the 'action' object as the topic.   
    \*/  
  
     handleConversation(issuingActor, action, commandConvType);   
  
    /\* indicate that the order is refused \*/   
   return nil;   
}   
  
It is the call to handleConversation that will invoke any CommandTopics
(or DefaultCommandTopics). Unfortunately, at this point, the action is
not fully resolved. As we have seen, it contains a list of the direct
objects (if any) that are the target of the command, but as yet it has
not selected any of them (even if there is only one) as the direct
object. As it stands, when a CommandTopic is triggered and wants to
handle the command on some direct objects but not others, it will have
to examine the complete list of direct objects, decide whether it wants
to match any of them, and then decide what it wants to do both with the
objects that it does match and with those that it doesn't. This makes
considerable demands on the author and makes for potentially messy
code.  
  
It would be much easier for authors if instead of calling
handleConversation once for the complete list of direct objects (where
there are direct objects), obeyCommand() called handleConversation once
for each of the direct objects in turn. Then all CommandTopics could be
written knowing that there will be at most one direct object to any
command it handles. If different direct objects of a command are to be
handled in different ways, then each object (or set of objects) that is
to be handled differently can have a CommandTopic of its own, which is
much neater and makes each individual CommandTopic easier to write. In
addition, it would be even better if handleConversation set the current
direct object for every command passed to handleConversation, so that
CommandTopics can use the full range of action methods that assume this
is defined.  
  
The code for such an obeyCommand routine is as follows:  
  
modify ActorState  
  obeyCommand(issuingActor, action)  
     {  
         /\*   
          \*   By default, we ignore all orders.  We do need to generate a  
          \*   response, though, so for this purpose, treat the order as a  
          \*   conversational action, with the 'action' object as the topic.  
          \*/  
  
         /\*   
          \*  If the action takes a direct object (and so could have a list  
          \*  of direct objects), split it into a series of actions  
          \*  with a single direct object  
          \*/  
         local dobjLst = action.getResolvedDobjList;  
  
         if(dobjLst != nil)   
         {  
            local singleAction = action;  
   
        foreach(local obj in dobjLst)  
           {  
              singleAction.dobjCur\_ = obj;  
              handleConversation(issuingActor, singleAction, commandConvType);   
           }  
         }  
         /\* Otherwise, just treat it as a single command \*/  
  
         else  
           handleConversation(issuingActor, action, commandConvType);  
   
         /\* indicate that the order is refused \*/  
         return nil;  
     }  
;  
  
There's really also no need to try to cater for commands with multiple
indirect objects, since the standard library defines none, and they are
perhaps seldom likely occur; there's very little reason to cater for
commands like PUT THE ONION IN THE PAN, THE OVEN AND THE JAR or UNLOCK
THE DOOR WITH THE BRASS KEY, THE SILVER KEY AND THE IRON KEY.  
