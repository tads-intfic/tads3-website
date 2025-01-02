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
<td style="text-align: left;"><strong>Food : <a
href="thing-thebasics.html">Thing</a><br />
</strong></td>
<td style="text-align: right;"><a href="readable.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="disambigname.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
The Food class, as its name suggests, is used for things that can be
eaten. By default, when eaten, an object of class Food simply disappears
(with a default message telling the player that he or she has eaten it).
Since food can be eaten it can also be tasted, or smelt. For that
matter, it can be touched or felt. To describe what happens when we
TASTE it, SMELL it or FEEL it we can use its **tasteDesc**,
**smellDesc** and **feelDesc** properties. If you really want to you can
even define **soundDesc** to define a response to a LISTEN TO command.
Actually, all four of these properties exist on Thing, but this seemed a
convenient point at which to introduce them. Later on we shall be
looking at more sophisticated ways of handling sensory information. For
now we'll just define a banana we'll leave in squareCave:  
  
Food 'banana' 'banana' @squareCave  
  "It's yellow, about six inches long, and slightly curved. And It looks  
   reasonably fresh. "  
  tasteDesc = "It's distinctly banana-flavoured. "  
  smellDesc = "It has a kind of faint, fruity smell. "  
  feelDesc = "The banana skin feels firm but smooth. "    
  soundDesc = "The banana is strangely silent. "  
  initSpecialDesc = "Someone has left a banana here. "  
;  
  
  
