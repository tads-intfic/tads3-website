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
<td style="text-align: left;"><strong>VehicleBarrier : <a
href="travelbarrier.html">TravelBarrier</a><br />
</strong></td>
<td style="text-align: right;"><a href="vehicle.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="multiloc.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A VehicleBarrier is a special kind of [TravelBarrier](travelbarrier.html)
that allows actors to pass (effectively on foot) but (at least by
default) prevents the passage of Vehicles, though this behaviour can be
overridden (by overriding its **canTravelerPass(traveler)** method) to
make it more selective about which kind of vehicles it will and won't
allow to pass. Here, however, we simply want to override the
explainTravelBarrier method to provide a more specific message:  
  
snowmobileBarrier : VehicleBarrier  
  explainTravelBarrier(traveler)  
     {  
         reportFailure('You can\\t ride the snowmobile into there. ');  
     }  
;  
  
Since the snowmobile is the only Vehicle we're going to implement in
this game, we can be sure that the explainTravelBarrier method will only
ever be called for the snowmobile; otherwise, the
explainTravelBarrier(traveler) method would have to test which traveler
it was taking about, or else (and perhaps preferably)
canTravelerPass(traveler) would need to be overridden to block only the
snowmobile.  
  
We don't want the snowmobile to be used anywhere except the snowy world
on which it's found, so the first place we'll put this barrier is on the
outside door of the Tardis, to prevent the snowmobile being ridden into
the Tardis (you will recall that it's too heavy to carry):  
  
+ tardisDoor : LockableWithKey, Door '(tardis) door' 'door'  
  disambigName = 'Tardis door'  
  keyList = \[tardisKey\]  
  **travelBarrier = \[snowmobileBarrier\]  
**;  
  
You may recall that the purpose of the snowmobile is to carry the player
character further than he can walk on foot through the snow. We can
enforce this by defining a custom TravelBarrier that allows *only* the
snowmobile to pass:  
  
snowBarrier : TravelBarrier   
  canTravelerPass(traveler) { return traveler==snowMobile; }  
  explainTravelBarrier(traveler)  
  {  
    if(traveler == gPlayerChar)  
    "You trudge for half an hour or so through the snow, but then you  
     are forced to realize that you can't keep it up for long, so  
     you turn round and come back. ";  
  }  
;  
  
Note that the way we have defined it, this TravelBarrier will provide a
'soft' boundary for travelers on foot; in other words it will make any
TravelConnector with which it's associated act like a FakeConnector for
pedestrians but like a normal connector for those on the snowmobile.
Note further that when the player character is riding the snowmobile,
it's the snowmobile that's considered to be the traveler (in the sense
of the traveler parameter here), even though its passengers are in a
sense traveling with it.  
  
While we're at it, we'll provide a general custom connector to provide
soft boundaries to our snowy world, as a kind of FakeConnector that
provides different messages depending on whether we're traveling on foot
or on the snowmobile:  
  
snowWorldFakeConnector : TravelConnector  
   canTravelerPass(traveler) { return nil; }  
   explainTravelBarrier(traveler)  
   {  
     if(traveler == snowMobile)  
       "You ride across the vast snowy plain for several hours, without  
        finding anything of interest, so you eventually decide to   
        turn round and come back. ";  
     else if(traveler == gPlayerChar)  
       "You walk through the snow for what seems like hours, but all  
        around the unremitting plain seems unchanging, so before you  
        are overcome by frostbite or hypothermia you turn back. ";       
   }  
;  
  
We'll also define a reusable connector for returning to the spot where
the Tardis materializes on this world from locations that can only be  
reached by riding the snowmobile:  
  
snowWorldConnector : OneWayRoomConnector    
    -\> snowWorld  
    travelBarrier = \[snowBarrier\]  
    noteTraversal(traveler)  
    {  
      "You ride the snowmobile across the plain back to the Tardis. ";  
    }  
;  
  
Armed with these special connectors and barriers we can now create the
rest of our snowy world, the northern reaches of which will contain a
forest in which we'll hide the last of our mysterious tablets:  
  
snowWorld : OutdoorRoom 'Snow-Covered Plain' 'the snow-covered plain'  
  "The bleak, snow-covered plain stretches as far as the eye can see in all directions  
   under a leaden sky, the only visible feature being a tall mountain range to  
   the east. "  
  vocabWords = 'snow plain'  
  east : OneWayRoomConnector  
          {  
            -\>snowCliff  
            noteTraversal(traveler)  
            {   
              if(traveler is in (gPlayerChar, snowMobile))   
              "You \<\<traveler==snowMobile ? 'ride across' : 'trudge through'\>\> the snow  
               to the base of the mountains. ";              
            }  
          }  
  north : OneWayRoomConnector   
         {  
           -\> snowForestEdge  
           travelBarrier = \[snowBarrier\]  
           noteTraversal(traveler)  
           { "It roars off to the north and takes you  
             sweeping across the snow-clad plain until you eventually arrive  
             at the edge of a forest. "; }  
         }  
  west : OneWayRoomConnector  
        {  
          -\> snowPrecipice  
          travelBarrier = \[snowBarrier\]  
          noteTraversal(traveler)  
          {  
             "You ride it westwards across the dazzling plain,  
              until the monotony threatens to send you to sleep. Fortunately  
              you are just alert enough to stop at the edge of a precipice. ";  
          }             
        }  
  south = snowWorldFakeConnector  
;  
  
+ Distant 'small mountain range' 'small mountain range'  
  "Distances are hard to judge on this almost featureless white plain, but the  
   mountains do not look far off. They seem to jut abruptly up against the sky  
   without the basic courtesy of intervening foothills, suggesting that they  
   were formed by a geological fault running across the plain. "  
;  
  
snowCliff : OutdoorRoom 'Under the cliff' 'under the cliff'  
  "The sheer cliff of the mountain range brings the plain to an abrupt end at  
   this point. A small wooden hut hugs the side of the cliff. "  
  west : OneWayRoomConnector  
        {  
          -\> snowWorld  
          noteTraversal(traveler)  
          {  
            if(traveler is in (gPlayerChar, snowMobile))  
             "You \<\<traveler==snowMobile ? 'ride the snowmobile' : 'walk'\>\> back  
             to the Tardis. ";  
          }  
        }  
  in = insideHut  
  north = snowWorldFakeConnector  
  south = snowWorldFakeConnector  
  east : NoTravelMessage { "The sheer cliff blocks progress further south,  
   and there's no way you can climb it. " }  
;  
  
+ Enterable -\>insideHut 'small wooden hut' 'small wooden hut'  
  "It's a shabby structure, made of thin planking knocked together clumsily.  
   It hasn't weathered well, either. ";  
;  
  
snowForestEdge : OutdoorRoom 'Edge of Forest' 'the edge of the forest'  
  "Although the snow-filled plain stretches to the eastern, southern and  
   western horizons, directly to the north lies a pine forest thick with  
   snow-covered trees. "  
  south = snowWorldConnector  
  east = snowWorldFakeConnector  
  west = snowWorldFakeConnector  
  north = snowForest  
;  
  
  
snowForest : OutdoorRoom 'Snow Forest Fork' 'the fork in the path'  
  "This forest looks like it's been deep in winter since time began. All around  
   the tall pine trees are white with frost, their branches laden with  
   snow. At this point in the forest the path from the south forks to  
   northeast and northwest. "  
  south = snowForestEdge  
  northwest = nwForestPath  
  northeast = neForestPath  
  travelBarrier = \[snowmobileBarrier\]  
;  
  
nwForestPath : OutdoorRoom 'Northwest Forest Path' 'the northwest forest path'  
  "Not only does this forest been in the depths of winter since time  
   began, it seems to be of interminable extent, for this path running  
   roughly northwest-southeast through it seem never-ending. "  
   southeast = snowForest  
   northwest : FakeConnector { "You carry on down the interminable  
     forest path, and still there seems no end to it. " }  
;  
  
neForestPath : OutdoorRoom 'Clearing' 'the clearing'  
  "The long path northeast through the forest eventually comes to an  
   end in a small clearing, where branches and pine-leaves lie in  
   a tangle on the ground amidst the snow. "  
   southwest = snowForest  
;  
  
+ Immovable '(pine) branches/leaves/twigs/pine-leaves' 'leaves and branches'  
  "A tangle of pine twigs, branches and leaves clutters the ground, mingling  
   with the snow. "  
  isPlural = true  
  dobjFor(LookIn) asDobjFor(LookUnder)  
  dobjFor(LookUnder)  
  {  
    verify() {}  
    action()  
    {  
      if(woodenTablet.moved)  
        "You find nothing else there. ";  
      else  
       {  
         woodenTablet.discover;  
         "Half-buried among the leaves and twigs is a square wooden tablet. ";  
       }  
    }  
  }  
;  
  
+ woodenTablet : Hidden, Tablet 'wooden tablet\*tablets' 'wooden tablet'  
  inscription = "T D A Z P\n S H S I L\nH E R O A\nC O H E N\nW H I T E"  
  initSpecialDesc = "A wooden tablet lies half-buried in the snow. "  
;  
  
  
snowPrecipice : OutdoorRoom 'Edge of Precipice' 'the edge of the precipice'  
  "A deep fault line severs the plain here, leaving a sheer drop to the west.  
   A white mist drifts below, making it hard to tell lies beyond, especially  
   as it's hard to distinguish white mist from white snow. The snowy plain  
   continues to east, south, and north. "  
  east = snowWorldConnector  
  south = snowWorldFakeConnector  
  north = snowWorldFakeConnector  
  west : NoTravelMessage { "That way lies a sheer drop. " }  
;  
  
Finally, we mustn't forget to make it possible for the Tardis to reach
our new snow world (and Solomon's bedroom, which we also need to add).
While we're at it, we'll also illustrate an alternative way of
initializing the values of a LookupTable:  

    + tardisDestinations : SecretFixture, PreinitObject
      destinations = nil

      execute()
      {
         destinations = [
             'A0' -> hold,
             'A2' -> spaceStation,
             'C9' -> redDesert,
             'J8' -> solomonBedroom,
             'M3' -> snowWorld,
             'Q7' -> londonStreet,
             'T5' -> outsideCave 
            ];   
       } 
       ...
    ;

  
  
