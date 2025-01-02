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
<td style="text-align: left;"><strong>EventList : <a
href="script.html">Script</a><br />
</strong></td>
<td style="text-align: right;"><a href="script.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="stopeventlist.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
An EventList is a [Script](script.html) object that works through a list
of events in sequence, until the list is exhausted, after which it does
nothing. Unlike a bare Script, which supplies only the bare framework,
EventList is a fully-functional class, although one may often want to
use one of its subclasses.  
  
Normally all one needs to specify on an EventList (and many of its
subclasses) is its eventList property. The **doScript** method of the
EventList automatically steps through each event in sequence. But what,
in this context, is an event? It may be either a single-quoted string, a
function pointer, another Script object, a property pointer, or nil. To
expand on this we may start by quoting the comment in the library
code:  
  
*The script is driven by a list of values; each value represents one
step of the script. Each value can be a single-quoted string, in which
case the string is simply displayed; a function pointer, in which case
the function is invoked without arguments; another Script object, in
which case the object's doScript() method is invoked; a property
pointer, in which case the property of 'self' (the EventList object) is
invoked with no arguments; or nil, in which case nothing happens.  
  
This base type of event list runs through the list once, in order, and
then simply stops doing anything once we pass the last event.  
*  
This may be clearer if we give an example of an EventList using each
type of entry in turn.  
  
sampleEventList : EventList  
   /\* The EventList template allows us to specify the eventList property as the first property after the  
    \* class name without needing explicitly to specify eventList =  
    \*/  
   \[  
      'First we display this string. ',  
  
      new function { "Then we do whatever we define inside this function. ";  
                              someOtherObject.someOtherMethod;  
                             "Which can be more or less what we like. "; },  
  
      otherScript, // call otherScript.doScript  
  
      &anotherProperty, // execute the code in self.otherProperty;  
  
      nil  // finally, do nothing (which makes this element superfluous here)  
   \]  
   anotherProperty { "This can also do whatever we want it to. "; }  
;  
  
otherScript : EventList  
  \[    
     'This will be displayed as the first element of otherScript. ',  
     'And this will be shown as the second element, if otherScript.doScript is ever called again. '  
  \]  
;  
  
In the case of a function that uses only a single statement, we can use
the short-form anonymous function syntax. This can be useful, for
example, for using double-quoted strings in an EventList:  
  
anotherEventList : EventList  
   \[  
      { : "\<q\>Hi, my name's \<\<sarah.makeProperName()\>\>.\</q\> she tells you. " },  
  
      '\<q\>You already know my name.\</q\> Sarah reminds you. ',  
  
      { : "\<q\>Oh - my last name's Smith.\</q\> she explains.   
           \<\<gPlayerChar.setKnowsAbout(smithName)\>\> " }  
   \]  
;  
  
An EventList with a single entry can sometimes be useful, as a way of
having something happen once only. For this type of use, see the
examples under [CyclicEventList](cycliceventlist.html) and
[InitiateTopic](initiatetopic.html).  
  
  
  
  
