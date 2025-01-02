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
<td style="text-align: left;"><strong>Fixture : <a
href="nonportableintroduction.html">NonPortable</a><br />
</strong></td>
<td style="text-align: right;"><a
href="nonportableintroduction.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="customfixture.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
The Fixture class is for items that are quite evidently fixed in place
within their locations. Unless a Fixture is given an initSpecialDesc or
specialDesc property, it is not normally listed as part of the contents
of a room, since it is assumed that some reference will have been made
to it in the description of the room. Some such Fixtures have already
been implemented as Passage objects; now we'll add a few others.  
  
For example, the description of mainCave refers to a torch fixed to the
wall, so we might implement it as a Fixture (although later we shall
also need to make it a FireSource):  
  
Fixture 'torch' 'torch' @mainCave  
  "The torch, which is fixed firmly to wall by a steel bracket, is blazing merrily,  
   its flames casting a bright but flickering light over the cave. "  
  cannotTakeMsg = 'It\\s fixed to the wall. '  
;  
  
Note that we have overridden cannotTakeMsg to give a slightly more
meaningful response than the default when the player attempts to take
the torch. It would also be possible to override the cannotMoveMsg and
cannotPutMsg in a similar way. If any of these properties is overridden
it should be with a *single*-quoted string (or a property pointer) and
never with a double-quoted string.  
  
The description of the Quarterdeck likewise refers to a deck rail, which
we can implement thus:  
  
Fixture 'wooden (deck) rail' 'deck rail' @quarterDeck  
  "The wooden deck rail runs along the forward edge of the Quarterdeck,  
  separating it from the main deck, although it is possible to get round  
  the rail either to starboard or port to go foreward. A large wooden  
  panel is fixed to the centre of the rail. "  
;  
  
In neither case is it necessary to give names to these objects, since
they will not be referred to elsewhere in code (though this may not
always be the case with Fixtures). Note the use of the 'weak tokens'
syntax in the vocabulary for the rail; this allows players to refer to
it as a 'wooden deck rail' without its answering to 'deck' alone.  
