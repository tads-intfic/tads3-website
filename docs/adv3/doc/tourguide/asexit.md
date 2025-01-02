<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>asExit<br />
</strong></td>
<td style="text-align: right;"><a
href="roomconnector.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="enterable.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
The asExit() macro can be used when we want more than one direction to
point to the same destination, but we only want one of the directions to
appear in the list of exits (the others effectively being synonyms). In
the outsideCave room the cave entrance is described as lying to the
south, so that the Player might type either SOUTH or IN to enter it.
Here we'll make SOUTH the explicit way in and add handling for IN as a
synonym using asExit:  
  
outsideCave : OutdoorRoom 'Parser Valley' 'Parser Valley'  
  "To the north stretches the broad green Parser Valley under a clear blue sky,   
   past a small car park lying just off to the east. The main feature of  
   interest round here is the notorious Eerhtsdat Caves, the entrance to which  
   lies just to the south, marked by a large blue sign that proclaims, predictably  
   enough:\b\<FONT FACE='TADS-Typewriter' BGCOLOR=BLUE COLOR=WHITE\>  
   ENTRANCE TO THE\nEERHTSDAT CAVES\</FONT\>\n"  
    north : FakeConnector { "You start to stride off into the valley, but soon  
     decide it's not that interesting, so you wander back towards the cave  
     entrance. " }  
   **south = entranceTunnel  
   in asExit(south)**  
   east : FakeConnector { "You go and wander round the car park for a few   
    minutes, but decide you don't want to leave just yet, so you return  
    to the cave entrance. " }  
   atmosphereList : ShuffledEventList {  
   \[  
     'A flight of birds disappears off to the west. ',  
     {: "\nA \<\<one of\>\>small\<\<or\>\>large\<\<at random\>\>  
       \<\<one
of\>\>green\<\<or\>\>red\<\<or\>\>blue\<\<or\>\>black\<\<or\>\>white\<\<at
random\>\> car  
       pulls out of the car park and drives off to the north. " },  
     'An aeroplane flies far overhead. ',  
     nil  
   \]   
   }  
;  
  
Once again, the new properties to be added are shown in bold. Note that
we point the south property not to another room, but to the previously
defined [RoomConnector](roomconnector.htm), entranceTunnel.  
