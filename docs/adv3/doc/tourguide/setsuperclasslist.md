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
<td style="text-align: left;"><strong>setSuperclassList<br />
</strong></td>
<td style="text-align: right;"><a
href="bulkandweight.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="readable.html">[Next]</a></td>
</tr>
</tbody>
</table>

  

It's conceivable that we could have an object that starts out as one
kind of thing, but later becomes another. For example we might have a
component of something that later proves to be detachable. For example,
suppose that the wooden panel becomes detached from the deck rail when
it is struck with a heavy hammer. It might seem that this would be
impossible to implement since once we have defined something as a
Component, it is fated to remain a Component for the duration. But in
fact this is not the case, since in TADS 3 it is possible to change the
class list of an object at run-time, using the method
**setSuperclassList(new class list)**. For example, to make the large
wooden panel come free when struck by the hammer we could write:  
  
+ Component 'large wooden panel' 'panel'  
  ...  
  dobjFor(AttackWith)  
  {  
     verify()   
     {  
         if(getSuperclassList() != \[Component\])  
           illogicalAlready('You've done it enough damage already! ');  
     }  
  
     action()  
     {  
        if(gIobj == heavyHammer)  
        {  
            setSuperclassList(\[Thing\]);  
            moveInto(getOutermostRoom);  
            "The hammer strikes the panel with such force that the panel comes free of the  
             rail and falls to the deck. ";  
        }  
        else  
          "{The iobj/he} simply bounces off the panel. ";  
     }  
  }  
;  
  
Note the use of **getSuperclassList()** to test what class or classes
the panel currently belongs to.  
  
The setSuperclassList method can be very useful in cases such as this,
where the alternative of determining the behaviour of the temporary
Component (or Fixture or whatever it may be) by testing the value of
some flag in lots of different places would be tedious, long-winded and
error-prone. Nevertheless, it's a technique you'll probably want to use
sparingly, and with care (we shan't actually be using it at all in *The
Quest of the Golden Banana* - the immediately preceding code is
hypothetical rather than something to be added to the game). The effect
of setSuperclassList() is that any methods or properties inherited by
the object in question are now inherited from the new list of
superclasses, but that properties and methods defined on the object
itself remain unaffected (unless they explicitly inherit behaviour). A
corresponding transformation will be wrought on anything that inherits
from an object (or class) on which setSuperclass list is invoked.
Obviously this is a tool that needs to be used with some care; it would
probably be foolish and reckless to use it to transform a Flashlight
into a Actor, or a ComplexContainer into a Candle for example. On the
other hand, it may often be useful to transform, say, a Fixture into a
Thing (when something previously fixed becomes portable) or a Thing into
a Distant (when a portable object goes out of reach - say because it's a
flag and we've just hoisted it to the top of the pole).  
  
  
