<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>Dial : <a
href="settable.htm">Settable</a><br />
</strong></td>
<td style="text-align: right;"><a href="lever.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="onoffcontrol.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
The Dial class is an immediate descendant of the
[Settable](settable.htm) class and the immediate ancestor of the
[NumberedDial](numbereddial.htm) and [LabeledDial](labeleddial.htm)
classes. As such, it is not likely to be used much in game code, since
if something is a dial at all, it is likely to be either numbered or
labeled if it is to be at all useful, and if one wants something more
general that a NumberedDial or a LabeledDial the chances are it'll be a
Settable, like the slider we implemented before.  
  
There may be one or two niches Dial can fill in game code, however. The
most obvious might be a Dial with case-sensitive labels (since the
LabeledDial assumes that its labels are not case sensitive). Although
there may not be much call for case-sensitive labels, it could be
possible to construct a minor puzzle of sorts out of a Dial with such
labels, and it's probably easier (or at least, no harder) to do so
starting from the Dial class than the LabeledDial class. Basically, all
one need do to make it work is to define one's own validSettings list
and override the **isValidSettings** method on such a dial thus:  
  
   isValidSetting(val) { return validSettings.indexOf(val) != nil; }  
  
To show how this might work in practice, we'll add one of these in the
secret chamber behind the stone altar, which we'll transmogrify into a
lift in the process. The dial will be the lift control, which can be
turned to thinly-disguised versions of the words UP and DOWN; no other
setting has any effect. If the handle is turned to DOWN (disguised as
Dupe OWN) the lift descends (unless it's already at the bottom). If it's
turned to UP (disguised as dUPe own) the lift ascends again (unless it's
already at the top):  
  
templeChamber : DarkRoom 'Small Square Chamber' 'the small square chamber'  
  "The most noticeable feature of this otherwise featureless chamber is the  
   way out to the east**, "**  
  out = temple  
  **east = (out)**  
  **moveInto(newDest)  
  {  
    if(out == newDest)  
      "and nothing happens. ";  
    else   
      "and with a shudder, the small chamber \<\<newDest==temple ? 'ascends' :  
       'descends'\>\> a long shaft, and finally comes to a halt. ";  
    out = newDest;  
  }**  
;  
  
+ Dial, Fixture 'curious (wall) dial/handle' 'dial'  
  "The dial comprises a handle set into the stone work that can be turned to  
   point to any of the eight phrases carved round its circumference: \<\<listSettings\>\>.  
  It currently points to \<i\>\<\<curSetting\>\>\</i\>. "  
  inRoomDesc = "but there is also a curious dial set into one wall. "  
  disambigName = 'curious wall dial'  
  curSetting = 'DUPE OWN'  
  listSettings()  
  {  
    stringLister.showSimpleList(validSettings);  
  }  
  validSettings = \['dupe own', 'dupE own', 'dUPe own', 'DUPe own',  
                 'Dupe OWN', 'DUPE oWn', 'DUPE oWN', 'DUPE OWN'\]  
  isValidSetting(val) { return validSettings.indexOf(val) != nil; }    
  makeSetting(val)  
  {  
    if(val == curSetting)  
    {  
      "The dial already points to \<i\>\<\<val\>\>\</i\>. ";  
      return;  
    }  
    "You turn the dial to \<i\>\<\<val\>\>\</i\>, ";  
    switch(val)  
    {  
      case 'dUPe own': templeChamber.moveInto(temple); break;  
      case 'Dupe OWN': templeChamber.moveInto(templeCellar); break;  
      default: "but nothing happens. ";      
    }  
    inherited(val);      
  }  
;  
  
Note that we have to change the definition of templeChamber.east, since
the asExit macro won't do what we want if it refers to a directional
property we subsequently change. Note also that we have overridden
templeChamber.moveInto to something quite different from what moveInto
normally does; we could have used any method name we liked for this, but
moveInto is quite descriptive here, and we have no use for the

standard Thing.moveInto handling here, so we might as well replace it.
Finally, note that we define a listSettings method to avoid (the tedious
and possibly error-prone process of) writing out the possible settings
of the dial twice. This calls the convenient
stringLister.showSimpleList() method to format the list in the form "a,
b, c and d".  
  
Finally, we need to define the location the list/chamber arrives at if
the dial is turned to the *Dupe OWN* position. As an attempt at brevity
we might write:  
  
templeCellar : DarkRoom 'Cellar beneath Temple' 'the cellar beneath the Temple'  
  "This long, damp cellar probably hasn't been visited in years. "  
  lift = templeChamber  
  west = (lift.out == self ? lift : nil)    
;  
  
The west property shows a possible but not very sanitary method of
checking that the lift is in place before allowing entry to it. It works
after a fashion, but will cause an immediate runtime error if you then
added, for example:  
  
in asExit(west)  
  
Although we probably won't be implementing any other way into the temple
cellar than via the lift, so the lift will always be available to the
west when the player character is in the cellar, if we want to make this
kind of test at all, it would be far better to use the recommended
method we have already seen (using a nested TravelConnector), even
though it is a bit more long-winded:  
  
templeCellar : DarkRoom 'Cellar beneath Temple' 'the cellar beneath the Temple'  
  "This long, damp cellar probably hasn't been visited in years. "  
  lift = templeChamber  
  west: OneWayRoomConnector   
  {  
    destination = (lexicalParent.lift)  
    canTravelerPass(traveler)  
    {  
      return lexicalParent.lift.out == lexicalParent;  
    }  
    explainTravelBarrier(traveler)  
    {    
      "There's nothing that way but an empty shaft. ";  
    }  
  }    
;  
  
The above definition could be made a bit less verbose if we dispensed
with the lift property and replaced each instance of lexicalParent.lift
with templeChamber.  
  
  
  
  
  
