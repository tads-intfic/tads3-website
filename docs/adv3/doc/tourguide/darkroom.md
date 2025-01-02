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
<td style="text-align: left;"><strong>DarkRoom : <a
href="room.html">Room</a><br />
</strong></td>
<td style="text-align: right;"><a
href="throughpassage.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="travelmessage.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
Since by the time we end up at the end of the tunnel north from the
secret passage we're now some way from the well-lit mainCave, it would
not be surprising if we were now totally in the dark. We could simply
override the brightness property to be 0 in the smallCave, but instead
we'll make it a DarkRoom, which does this for us (using the [Room
template](roomtemplate.html)):  
  
smallCave : DarkRoom 'Small Cave' 'the small cave'  
  "The long narrow tunnel from the south comes to an end in this cramped,  
    sandy-floored cave, whose rough rocky walls press in claustrophobically  
    on every side. Anyone much taller than average would have to stoop here. "  
;  
  
You can now compile the program and test it, but you'll quickly find
that not only is there no way out of smallCave, but there's as yet no
way of bringing any light to it. While developing a game it would
obviously be useful to be able to test dark locations without
necessarily having to use the methods the player will be obliged to use
(either because you simply haven't implemented them yet, or because you
don't want to have to go through the business of procuring the light
source each time you want to test a new dark location). What would be
useful is some way of producing light on demand while testing, and the
way to do that is to provide a means of adjusting the brightness
property of the Player Character object (i.e. allow the PC to be its own
light source, so that it does not need to carry one). You could download
Nikos Chantziaras's ncDebugActions.t library extension and use that,
since it provides a number of useful debugging verbs, including MEGA and
UNMEGA which (amongst other things) turns the player into a light source
and back again. If for any reason you have any difficulty in acquiring
this file, (which you should be able to obtain from the if-archive at <a
href="%20http://www.ifarchive.org/indexes/if-archiveXprogrammingXtads3XlibraryXcontributions.html%20"
target="_top">http://www.ifarchive.org/indexes/if-archiveXprogrammingXtads3XlibraryXcontributions.html</a>)
you can get a similar effect by including the following in your own
code, perhaps out of the way at the end of the file:  
  
  
\#ifdef \_\_DEBUG  
  
DefineIAction(FiatLux)  
 execAction  
{  
  if(gPlayerChar.brightness == 0)  
  {  
    "You start to glow!\n";  
    gPlayerChar.brightness = 3;  
  }  
  else  
  {  
    "Repeating the spell reverses its effect, and your glowing aura disappears. ";  
    gPlayerChar.brightness = 0;  
  }  
}  
;  
  
VerbRule(FiatLux)  
  'fiat' 'lux'  
  : FiatLuxAction  
  verbPhrase = 'make/making light'  
;  
  
\#endif  
  
You don't have to call it Fiat Lux, of course, you can call it anything
convenient you like, but whatever you call it it's worth enclosing it
between \#ifdef \_\_DEBUG (note the double underscore before DEBUG) and
\#endif so that this cheating verb won't be available in the release
version of your game. In the debug version, however, you'll be able to
type FIAT LUX (or whatever you define the command to be) to make the
player character a light source, and the same command again to reverse
the spell.  
