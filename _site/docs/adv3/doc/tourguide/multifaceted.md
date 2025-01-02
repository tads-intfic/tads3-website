<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>MultiFaceted : <a
href="multiinstance.htm">MultiInstance</a><br />
</strong></td>
<td style="text-align: right;"><a
href="multiinstance.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="collectivegroup.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
MultiFaceted is almost identical to [MultiInstance](multiinstance.htm),
except that it is used to place copies of what is notionally the *same*
object in multiple locations, rather than copies of what are similar but
numerically distinct objects. For example, although the forest contains
many trees, it is only one forest, so that if we might want to refer to
both the trees and the forest throughout its extent we should use a
[MultiInstance](multiinstance.htm) to represent the trees and a
MultiFaceted to represent the forest:  
  
MultiFaceted  
  locationList = \[snowForest, nwForestPath, neForestPath, snowForestEdge\]  
  instanceObject : Fixture {'frosty forest' 'forest'  
     "The frosty forest is full of tall snow-laden pines growing close together. "  
  }  
;  
  
The only real difference here is that the objects set up as instances by
the MultiFaceted class have MultiFacetedFacet instead of
MultiInstanceInstance as their mix-in class (again this is all handled
by the library so you don't have to worry about it), which in turn means
that the instances are regarded as facets of one another. The
*practical* upshot of this is that you can EXAMINE FOREST in one
location, go to any other location in which the forest exists, and type
EXAMINE IT and the parser will know that you're still talking about the
forest, whereas if you EXAMINE TREES in one location, the parser won't
know what you're talking about if you immediately try to EXAMINE THEM in
another.  
  
Apart from this difference, everything said about
[MultiInstance](multiinstance.htm) applies to MultiFaceted and need not
be repeated. You can use exactly the same methods to move MultiFaceted
objects around dynamically, or specify the initial locations the
instance objects should occupy.  
  
Some time back we defined a lake decoration object thus:  
  
MultiLoc, Decoration 'great (giant) underground lake/water' 'lake'  
  "The lake looks as flat as a millpond. "  
  locationList = \[lakeRoom, pathEnd\]  
;  
  
This is actually harmless in this case, but to be on the safe side we
could make it a MultiFaceted, and we could even take advantage of the
change to vary the description of the lake depending on where it's being
viewed from:  
  
MultiFaceted   
  locationList = \[lakeRoom, pathEnd, starboardDeck, westShore, eastShore, southShore\]     
  instanceObject : Decoration  
  {  
    'great (giant) underground lake/water' 'lake'  
    "The lake, which stretches as far \<\<whichDirection\>\> as you can  
     see, looks almost as flat as a millpond, although the occasional  
     ripple runs across its surface. It is also strikingly  
     phosphorescent, casting an eerie green glow over the whole  
     vast cavern. "  
     whichDirection = (miParent.whichDirection(location))  
  }  
  whichDirection(loc)  
    {  
      switch(loc)  
     {  
      case lakeRoom :  
      case pathEnd: return 'south';  
      case westShore : return 'east';  
      case southShore : return 'north';  
      case eastShore : return 'west';  
      case starboardDeck : return 'to starboard';  
      default : return 'away';  
     }  
   }    
;  
  
  
  
