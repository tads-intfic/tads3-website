<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>Container : <a
href="basiccontainer.htm">BasicContainer</a><br />
</strong></td>
<td style="text-align: right;"><a
href="basiccontainer.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="openablecontainer.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
Although the plain Container class contains no handling for dealing with
OPEN and CLOSE commands from the player (for that you need
[OpenableContaine](openablecontainer.htm)r or one of its subclasses), it
does have an isOpen property that can be set and manipulated by the
author in game code, and, unlike BasicContainer, a Container does allow
things to be put inside it in response to a PUT IN command.  
  
One item we have already defined that could be used as a Container,
though not obviously so, is the [sailor's cap](wearable.htm). It won't
have a huge capacity, but a cap ought to be able to contain a few small
items. Also, it will have the interesting property that it will be
closed when worn and open otherwise.  
  
cap : Wearable, **Container** 'sailor\\s cap' 'sailor\\s cap' @mainCave  
  "It's a large round hat with a white top and a small blue peak. "  
  **bulkCapacity = 3  
  isOpen { return !isWorn(); }**  
;  
  
Try compiling and running the game, then move to mainCave and experiment
with using the cap as a Container when it is and isn't worn (for now you
can use the boulder as the object to put in it, though this isn't very
realistic). Everything should work fine until you try to put the boulder
in the cap while the player character is wearing the cap, whereupon
you'll get:  
  
\>**put boulder in cap**  
You can't move that through the sailor's cap.  
  
Although far from disastrous, this is certainly less than ideal.
Although you could override the message, a neater solution is to add
objNotWorn to the preconditions for putting anything in the cap:  
  
cap : Wearable, Container 'sailor\\s cap' 'sailor\\s cap' @mainCave  
  "It's a large round hat with a white top and a small blue peak. "  
  bulkCapacity = 3  
  isOpen { return !isWorn(); }  
  **iobjFor(PutIn) { preCond = static inherited + objNotWorn }  
**;  
  
Then, when the player attempts to put something in the cap while it is
worn, a REMOVE CAP command is carried out as an implicit action and the
PUT IN command follows (try it and see).  
  
  
