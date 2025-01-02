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
<td style="text-align: left;"><strong>SimpleOdor : <a
href="odor.html">Odor</a><br />
</strong></td>
<td style="text-align: right;"><a href="vaporous.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="simplenoise.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
Along with its close relative, [SimpleNoise](simplenoise.html),
SimpleOdor offers a very straightforward way of representing an
intangible sensory presence (i.e. a sound or smell), which can be
associated either with a location, a particular object, or a number of
objects. For more sophisticated behaviour involving smells you may want
to consider the [Odor](odor.html) class, which we shall come to
shortly.  
  
Let's suppose that we want the player to know that there's a whiff of
sulphur around the cavern entrance we mentioned in the description of
the hellVestibule location. We could achieve this simply by adding the
following to the list of objects in hellVestibule  
  
+ SimpleOdor 'sulphur/sulfur' 'sulphur'  
  "A strong whiff of sulphur comes through the cavern entrance to the east. "    
;  
  
Now if we go to hellVestibule and type a SMELL command, we'll see the
message "A strong whiff of sulphur comes through the cavern entrance to
the east. " This is the standard use of SimpleOdor (and SimpleNoise): to
add an ongoing smell (or sound) to a location.  
  
However, since we've mentioned the cavern entrance in the room
description, and we say that that's where the smell is coming from, we
might prefer to associate the SimpleOdor particularly with the
entrance:  
  
+ cavernEntrance: ThroughPassage 'east eastern cavern entrance' 'cavern entrance'  
  "It's wide, with a sign next to it, and it emits an eerie red glow. "  
;  
  
++ SimpleOdor 'whiff sulphur/sulfur' 'sulphur'  
  "A strong whiff of sulphur comes through the cavern entrance. "  
;  
  
At first sight this may seem to achieve no more than adding smellDesc =
"A strong whiff of sulphur comes through the cavern entrance. " to the
definition of cavernEntrance. There is, however, one small but important
difference. Using the smellDesc method, we get a description of the odor
if we type SMELL CAVERN ENTRANCE but not if we just type SMELL (in which
case we'll be told "You smell nothing out of the ordinary"). Using the
SimpleOdor object, however, we get the description of the smell either
way. We can also SMELL WHIFF or SMELL SULPHUR or SMELL WHIFF OF
SULPHUR.  
  
We can also add a further refinement. With the SimpleOdor nested in the
cavernEntrance as above, if we issue the command SMELL RED GLOW we'll be
told "You smell nothing out of the ordinary. " Now, there's an argument
for saying that since a glow doesn't smell, this is the right response.
And yet one may feel it's a bit odd that when one smells the entrance
one smells the sulphur, but that when one smells the glow coming through
the entrance one smells nothing odd; is the human sense of smell really
that localised? Well, if we did take that view we could very easily
attach the SimpleOdor to the red glow as well by making it a MultiLoc:  
  
+ MultiLoc, SimpleOdor 'whiff sulphur/sulfur' 'sulphur'  
  "A strong whiff of sulphur comes through the cavern entrance. "  
  locationList = \[cavernEntrance, redGlow\]  
;  
  
(Note that once we define it as a MultiLoc the + no longer defines its
location, it just allows us to continue listing other objects after if
with the + notation and have them be located in hellVestibule). Now we
can SMELL, SMELL ENTRANCE, SMELL WHIFF, or SMELL RED GLOW and receive
the same answer each time, and this is certainly rather more than we can
do by setting one smellDesc property.  
  
If we really want, we can take this a stage further still. SimpleOdor
(and [SimpleNoise](simplenoise.html)) have an **isAmbient** property
which, by default, is set to true. If we set it to nil, the SimpleOdor
won't wait for us to SMELL anything, it'll announce its presence each
time we get a description of the room - or each time we examine the cave
entrance or the red glow:  
  
+ MultiLoc, SimpleOdor 'whiff sulphur/sulfur' 'sulphur'  
  "A strong whiff of sulphur comes through the cavern entrance. "  
  isAmbient = nil  
  locationList = \[cavernEntrance, redGlow\]  
;  
  
You may or may not think the effect is appropriate here; it calls
attention to a smell that the player might otherwise miss, but could
quickly become monotonous. We are getting to the point where it might be
better to use the greater complexity of an [Odor](odor.html) to get the
effect we'd really like. Nevertheless, we introduce the isAmbient
property here just to show what it does; whether you prefer to leave
isAmbient as nil or true here is up to you. It also illustrates a point
that may at first sight seem counter-intuitive. A SimpleOdor (or any
other kind of SensoryEmanation object) announces its presence when
isAmbient is *nil*, but not when it is *true*, whereas one might have
expected an ambient sensory one to be something that was *more*
proactive in making its presence felt. Here we have to understand
'ambient' in the sense of 'background' (which is admittedly not quite
the meaning given in the OED); a background smell (or noise) is one that
doesn't obtrude itself on our awareness unless and until we actively
seek it out (by explicitly SMELLing or LISTENing).  
  
  
