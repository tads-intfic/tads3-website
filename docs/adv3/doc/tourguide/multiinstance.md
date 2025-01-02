<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>MultiInstance : BaseMultiLoc<br />
</strong></td>
<td style="text-align: right;"><a href="multiloc.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="multifaceted.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
The MultiInstance class is used for creating copies of objects,
typically Decorations, in multiple locations. This can often be
preferable to using [MultiLoc](multiloc.htm) for this purpose, since a
MultiLoc is a single object, and thus (for example) will be lit for all
locations even if it's lit only in one.  
  
A typical use for a MultiInstance might be for creating trees in a
forest. The trees are not interestingly distinctive, but they are
numerically distinct objects. To put a 'trees' Decoration object in each
location where we mention the forest, we first create a MultiInstance
shell object and set its **locationList** property to the list of
locations we want the trees to appear in, and then set up a template
trees object in its **instanceObject** property.  
  
MultiInstance  
  locationList = \[snowForest, nwForestPath, neForestPath, snowForestEdge\]  
  instanceObject: Decoration { 'pine tree/trees/pines' 'trees'  
        "The trees, mainly tall pines, are covered in snow. "  
        isPlural = true  
      }  
;  
  
This is all you have to do; the library does the rest of the work by
creating an instance of your template object in each of the rooms listed
in the locationList. The library also adds MultiInstanceInstance to the
class list of the objects it creates (so you don't have to bother). This
basically handles specialized handling for **moveInto** so you can move
the instance objects around (assuming you can find a way to refer to
them) and everything will be kept in sync with the MultiInstance object.
Probably the more useful way to relocate MultiInstanceInstance objects
dynamically is to call the **moveInto(loc)**, **moveIntoAdd(loc)**, and
**moveOutOf(loc)** methods of the MultiInstance object. For example, if
we wanted the forest to grow into a new location during the course of
the game (which we don't), we could give the MultiInstance object a name
(such as 'trees') and then call:  
  
   trees.moveIntoAdd(newLocation);  
  
Note that if we called trees.moveInto(newLocation) the trees would be
removed from every other location. If on the other hand we wanted to
chop down part of the forest (which we don't) we could call:  
  
    trees.moveOutOf(neForestPath);  
  
Finally, we don't have to use the locationList to specify the initial
location of the trees. As an alternative, we could have defined a
ForestRoom class for use at each of our forested locations, and then
have used MultiInstance's (or rather MultiLoc's)
**initialLocationClass** property to define where we wanted the trees to
appear:  
  
MultiInstance  
  initialLocationClass = ForestRoom  
  instanceObject: Decoration { 'pine tree/trees/pines' 'trees'  
        "The trees, mainly tall pines, are covered in snow. "  
        isPlural = true  
      }  
;  
  
As a third (though in this case utterly pointless) alternative, we could
simply have overridden the **isInitiallyIn(obj)** method:  
  
MultiInstance  
  isInitiallyIn(obj) { return obj in in (snowForest, nwForestPath, neForestPath, snowForestEdge); }  
  instanceObject: Decoration { 'pine tree/trees/pines' 'trees'  
        "The trees, mainly tall pines, are covered in snow. "  
        isPlural = true  
      }  
;  
  
There may, however, be more complex cases in which this would be useful
for implementing a rule for determining where the MultiInstanceInstances
should start out. Lastly, and even more pointlessly in this case, you
could override **buildLocationList()** to construct the initial list of
locations:  
  
MultiInstance   
  buildLocationList()   
  {   
     local lst;   
     lst = new Vector(16);  
     lst.append(snowForest);  
     lst.append(nwForestPath);  
     lst.append(neForestPath);  
     lst.append(snowForestEdge);  
     return lst.toList();  
  }  
  instanceObject: Decoration { 'pine tree/trees/pines' 'trees'  
        "The trees, mainly tall pines, are covered in snow. "  
        isPlural = true  
      }  
;  
  
Of course the method could simply have been defined:  
  
 buildLocationList() { return \[snowForest, nwForestPath, neForestPath, snowForestEdge\]; }  
  
But since there is absolutely no point in overriding the method in this
case anyway, we might as well make it appear more complicated to
simulate a situation in which you *might* actually want to use this
method; though it's hard to think of a case where this could achieve
something that couldn't be achieved just as well by overriding
isInitiallyIn(obj).  
  
  
