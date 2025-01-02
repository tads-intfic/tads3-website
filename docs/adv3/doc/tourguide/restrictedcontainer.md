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
<td style="text-align: left;"><strong>RestrictedContainer :
RestrictedHolder<br />
</strong></td>
<td style="text-align: right;"><a
href="lockablecontainer.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="dispenser.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A Restricted Container is a container that will accept only a limited
set of items, defined by the game author.  
  
You may recall that we defined a hexagonal hole in the panel fixed to
the quarterdeck rail. This is an obvious candidate for a restricted
container, since, as you may by now have guessed, it is designed solely
for the hexagonal crystal (for some reason known only in IF Heaven, the
ship will only sail when the crystal is in its slot). The definition of
the hole needs to be put directly after that of the panel, which we
therefore repeat for convenience:  
  
+ Component 'large wooden panel' 'panel'  
  "The panel seems to have something to do with sailing the ship. A wheel and a lever  
   are mounted on it, and between them is a hexagonal aperture. "    
;     
  
++ hexHole : RestrictedContainer, Component 'hexagonal hole/aperture' 'hexagonal hole'  
   validContents = \[hexCrystal\]  
;  
  
Note that we specify what can be put in the hole using its
**validContents** property, which contains a list (here containing only
a single item) of everything that can be validly inserted. In some cases
it might be more convenient to override a RestrictedContainer's
**canPutIn(obj)** method. For example if we had defined a Widget class
and were now defining a widgetBox that could only take Widgets, we might
define its canPutIn method as  
  
canPutIn(obj) { return obj.ofKind(Widget); }  
  
<span id="openjar">The only difficulty we have right now is that the
hexagonal crystal is trapped inside a glass jar, so we can't try
inserting it in the hole. Let's assume that one way of getting it out is
by cutting the jar open with something suitably hard. First, we'll
define a couple of potential cutters (which will also figure later in
the game for other purposes):  
  
diamond : Thing 'sparkling diamond' 'diamond' @pathEnd  
  "It looks like the genuine article. "  
  iobjFor(CutWith) { verify() { } }  
;  
  
diamondRing : Wearable 'diamond ring' 'diamond ring'  
  "It's a fine platinum band with a sparkling solitaire diamond. "  
  iobjFor(CutWith) { verify() { } }  
;  
  
Don't worry that we haven't given any location to the diamondRing, the
reason will become apparent in due course. Now we can amend our
definition of the class jar to allow it to be cut open:  
  
glassJar : Container 'glass jar' 'glass jar' @mainCave  
  **"It \<\<if
isOpen\>\>has been cut open\<\<else\>\>seems to be sealed fast\<\<end\>\>. "**  
  isOpen = nil  
  bulkCapacity = 4  
  material = glass  
  **canBeCutBy = \[diamond, diamondRing\]  
  cannotOpenMsg = (isOpen ? 'It\\s already been cut open' :  
                     '{You/he} can\\t see any way to open it. ')  
  notAContainerMsg = iobjMsg(isOpen ? 'Now that it\\s been cut open, it  
                    won\\t hold anything. ' : 'There\\s no way   
                    {you/he} can put anything inside the sealed jar. ')  
  dobjFor(CutWith)  
  {  
    verify()   
    {   
      if(isOpen) illogicalNow('The glass jar has already been cut open.' );  
    }  
    check()  
    {  
      if(canBeCutBy.indexOf(gIobj) == nil)  
         failCheck('{You/he} can\\t cut it with {that iobj/him}. ');       
    }  
    action()  
    {  
      "{You/he} cut{s} open the glass jar. ";  
      isOpen = true;  
    }  
  }**  
;  
  
Note that canBeCutBy is not a library property, it is one we have
defined ourselves. It makes it easy to add to the list of items that can
be used to cut open the glass jar, should we think of any others at
later stage. The failCheck() method (a method of Thing) was introduced
in version 3.0.9. Check methods often contain code like this:  
  
 check()  
  {  
    if(someCondition)  
    {  
       reportFailure('There\\s some reason why that won\\t work. ');  
       exit;  
   }  
  }  
  
Where the reportFailure macro tells the parser that the proposed action
has failed for some reason (though in practice you could use a
double-quoted string) and the exit macro terminates processing of the
command on this object (and so prevents the action routine from being
run). Since this coding pattern is so common, in TADS 3.0.9 it can now
be shortened to:  
  
check()  
  {  
      if(someCondition)  
        failCheck('There\\s some reason why that won\\t work. ');  
  }  
  
Which does exactly the same thing. So the check routine on glassJar is
exactly equivalent to:  
  
**  **check()  
    {  
      if(canBeCutBy.indexOf(gIobj) == nil)  
      {  
         reportFailure('{You/he} can\\t cut it with {that iobj/him}. ');       
         exit;  
      }  
    }**  
**  
It's just that using the failCheck() method enables you to code this a
little more concisely.  
  
Note also that we have made use of the ability introduced in TADS 3.0.6n
to override library messages with our own versions (in this case
cannotOpenMsg and notAContainerMsg) to display something more meaningful
in this particular case. Note also that in the case of notAContainerMsg
we have used the iobjMsg() macro (new in version 3.0.9), because we only
want the customized response to be used when the glass jar is used as
the *indirect* object of a command. If we didn't do that we'd see
something like:  
  
\>PUT COIN IN GLASS JAR  
There's no way you can put anything inside the glass jar.  
  
\>PUT GLASS JAR IN COIN  
There's no way you can put anything inside the glass jar.  
  
This is because unless we specify otherwise, our overridden message will
be used whenever the object on which it is overridden is involved in the
corresponding command (in this case, a PUT IN command), whether as the
direct object or the indirect object. To avoid that we could write:  
  
notAContainerMsg = (gIobj == self ? 'My custom message' : nil)  
  
If a message property returns nil this is taken as meaning "use the
standard library message". The iobjMsg macro simply makes this a bit
easier; allowing us to write the above line as:  
  
notAContainerMsg = iobjMsg('My custom message')  
  
Which compiles to exactly the same code. If we wanted our custom message
to work only when the object its defined on is the *direct* object of a
command, we'd use the dobjFor macro instead; the following two lines are
exactly equivalent:  
  
notAContainerMsg = dobjMsg('My custom message')  
notAContainerMsg = (gDobj == self ? 'My custom message' : nil)  
  
Note that there is no need to use this for a message property for a verb
that only takes a direct object; e.g., if we define a custom
cannotOpenMsg property there's no need to use the dobjMsg macro since an
object can never be the indirect object of an OPEN command.  
  
You may wonder how we know what names to use for these properties: one
answer is to look in the library source code to see what message
properties are used in the verify(), check() or action() methods of the
verbs for which you want to customize the responses.  
For example, if we look at the definition of Thing in the library code,
we find the following handling for when a Thing is the indirect object
of a PutIn command:  
  
iobjFor(PutIn)   
{   
    preCond = \[touchObj\]   
    verify()   
    {  
         /\* by default, objects cannot be put in this object \*/   
            illogical(&notAContainerMsg);   
    }  
}  
  
This means that, left to its own devices, a Thing will respond to an
attempt to put anything inside it with the message defined in the
notAContainerMsg of the playerActionMessages object. If, however, as
here, we define our own version of notAContainerMsg on either the direct
or indirect object involved in the action, our own version will be used
in preference (subject to our use of the iobjMsg and dobjMsg macros or
their long-winded equivalents).  
  
You may, however, find it easier to use the TADS 3 Action Messages
quick-reference chart, which you can download either from</span>
[www.tads.org/howto/ActionMessages.zip](http://www.tads.org/howto/ActionMessages.zip)
or from
[users.ox.ac.uk/~manc0049/TADSGuide/QRefs.zip](http://users.ox.ac.uk/~manc0049/TADSGuide/QRefs.zip).  
  
Note that there are also RestrictedSurface, RestrictedUnderside,
RestrictedRearSurface and RestrictedRearContainer classes which work
analogously to RestrictedContainer except that they relate respectively
to [Surface](surface.html), [Underside](underside.html),
[RearSurface](rearsurface.html) and [RearContainer](rearcontainer.html).
All these RestrictedWhatever classes derive from the common
RestrictedHolder base class which define validContents and canPutIn(obj)
as described for RestrictedContainer above.  
  
  
  
  
  
