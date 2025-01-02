<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>Unthing : <a
href="decoration.htm">Decoration</a><br />
</strong></td>
<td style="text-align: right;"><a href="distant.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="immovable.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
An Unthing is a special kind of Decoration used to represent something
that *isn't* present, but to which the player might try to refer; it
then displays its notHereMsg to explain why it isn't there. The most
common use for an Unthing is to represent the absence of something that
has just disappeared. For example suppose we plant what appears to be
treasure in mainCave, but have it disappear when the player attempts to
take it. We might then move an Unthing into its place to describe its
absence if the player continues to refer to it:  
  
fakeTreasure : Thing 'huge great golden gold banana/treasure'  
    'golden banana' @mainCave  
  "It's a fantastic treasure, over two feet long, and by the look of it, solid  
   gold. It must be worth an absolute fortune!"  
   initSpecialDesc = "A huge treasure - a great golden banana - lies on the ground. "  
   dobjFor(Take)  
   {  
     action()  
     {  
       "All that glisters is not gold, and as you try to take the great golden  
        banana it crumbles into dust and vanishes away. ";  
       noTreasure.moveInto(location);  
       moveInto(nil);  
     }  
   }  
   getFacets() { return \[noTreasure\]; }  
;  
  
noTreasure : Unthing  'huge great golden gold treasure/banana/dust' 'golden banana'  
  'The illusory golden banana vanished into fine dust that is no  
   longer visible. '   
;  
  
Note the use of getFacets on fakeTreasure, so that if a player types
TAKE BANANA followed by, say, X IT, the parser will know that IT now
refers to the noTreasure object that's just been substituted for the
fakeTreasure. In this case there's no need to add a getFacets method to
noTreasure, since the fakeTreasure will never reappear to be referred to
as IT. Note also the range of vocabulary words we have given to both
objects, and that we added' dust' to the list of words by which the
noTreasure object can be referred to.  
  
Note that the third property we have defined on Unthing is
*single-quoted string*, not a double-quoted string. This is because
there is a special [Unthing template](unthingtemplate.htm) which puts
the notHereMsg instead of desc in third place. We don't want to define
desc on an Unthing, because it's not generally useful, we just want to
define the notHereMsg which will be used for any command that tries to
interact with the Unthing. The above definition of noTreasure is
equivalent to:  
  
noTreasure : Unthing  'huge great golden gold treasure/banana/dust' 'golden banana'  
  notHereMsg = 'The illusory golden banana vanished into fine dust that is no  
   longer visible. '   
;  
  
Or to:  
  
noTreasure : Unthing    
  vocabWords = 'huge great golden gold treasure/banana/dust'   
  name = 'golden banana'  
  notHereMsg = 'The illusory golden banana vanished into fine dust that is no  
   longer visible. '   
;  
  
