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
<td style="text-align: left;"><strong>Thing - Introduction<br />
</strong></td>
<td style="text-align: right;"><a href="component.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="thing-thebasics.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
The Thing class is important in the TADS3 library for two reasons: (1)
because it is the class used for all sorts of portable objects the
player may interact with and (2) because it is the ancestor class for
anything that represents a physical object in game (included those that
are [non-portable](nonportableintroduction.html) and some that are
intangible). In the present chapter we shall concentrate principally on
the first use of Thing - as a class in its own right - but because so
many classes inherit (directly or indirectly) from Thing, much of what
we say about the properties and methods of Thing will be equally
applicable to classes that inherit from Thing.  
  
The properties and methods of Thing we shall be going on to discuss (or
at least, exemplify) include:  
  
[brightness](brightness.html)  
[bulk](bulkandweight.html)  
[canBeTouchedBy](dynamite.html)  
[desc](thing-thebasics.html)  
[described](described.html)  
[disambigName](food.html)  
[distantInitSpecialDesc](distanceconnector.html)  
[feelDesc](food.html)  
[globalParamName](globalparamname.html)  
[initSpecialDesc](initdesc+initspecialdesc.html)  
[initDesc](initdesc+initspecialdesc.html)  
[isEquivalent](sensoryevent.html)  
[isHeldBy](lightsource.html)  
[isKnown](actorknowledge.html)  
[location](thing-thebasics.html)  
[material](container.html)  
[moved](initdesc+initspecialdesc.html)  
[name](thing-thebasics.html)  
[remoteInitSpecialDesc](distanceconnector.html)  
[seen](actorknowledge.html)  
[sightSize](distanceconnector.html)  
[soundSize](senseconnector.html)  
[smellDesc](food.html)  
[specialDesc](specialdesc.html)  
[tasteDesc](food.html)  
[throwTargetCatch](cycliceventlist.html)  
[useSpecialDesc](specialdesc.html)  
[vocabWords](vocabwords.html)  
[weight](bulkandweight.html)  
  
In the present chapter we shall discuss only the simplest and most
common of these, since some of the others will only become relevant in
the light of other classes and concepts we haven't covered yet.  
  
There are also one or two subclasses of Thing that are both so
straightforward and so miscellaneous they may as well be dealt with in
this chapter, namely:  
  
[Food](food.html)  
[Readable](readable.html)  
[Wearable](wearable.html)  
  
  
  
