<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>Thing - Introduction<br />
</strong></td>
<td style="text-align: right;"><a href="component.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="thing-thebasics.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
The Thing class is important in the TADS3 library for two reasons: (1)
because it is the class used for all sorts of portable objects the
player may interact with and (2) because it is the ancestor class for
anything that represents a physical object in game (included those that
are [non-portable](nonportableintroduction.htm) and some that are
intangible). In the present chapter we shall concentrate principally on
the first use of Thing - as a class in its own right - but because so
many classes inherit (directly or indirectly) from Thing, much of what
we say about the properties and methods of Thing will be equally
applicable to classes that inherit from Thing.  
  
The properties and methods of Thing we shall be going on to discuss (or
at least, exemplify) include:  
  
[brightness](brightness.htm)  
[bulk](bulkandweight.htm)  
[canBeTouchedBy](dynamite.htm)  
[desc](thing-thebasics.htm)  
[described](described.htm)  
[disambigName](food.htm)  
[distantInitSpecialDesc](distanceconnector.htm)  
[feelDesc](food.htm)  
[globalParamName](globalparamname.htm)  
[initSpecialDesc](initdesc+initspecialdesc.htm)  
[initDesc](initdesc+initspecialdesc.htm)  
[isEquivalent](sensoryevent.htm)  
[isHeldBy](lightsource.htm)  
[isKnown](actorknowledge.htm)  
[location](thing-thebasics.htm)  
[material](container.htm)  
[moved](initdesc+initspecialdesc.htm)  
[name](thing-thebasics.htm)  
[remoteInitSpecialDesc](distanceconnector.htm)  
[seen](actorknowledge.htm)  
[sightSize](distanceconnector.htm)  
[soundSize](senseconnector.htm)  
[smellDesc](food.htm)  
[specialDesc](specialdesc.htm)  
[tasteDesc](food.htm)  
[throwTargetCatch](cycliceventlist.htm)  
[useSpecialDesc](specialdesc.htm)  
[vocabWords](vocabwords.htm)  
[weight](bulkandweight.htm)  
  
In the present chapter we shall discuss only the simplest and most
common of these, since some of the others will only become relevant in
the light of other classes and concepts we haven't covered yet.  
  
There are also one or two subclasses of Thing that are both so
straightforward and so miscellaneous they may as well be dealt with in
this chapter, namely:  
  
[Food](food.htm)  
[Readable](readable.htm)  
[Wearable](wearable.htm)  
  
  
  
