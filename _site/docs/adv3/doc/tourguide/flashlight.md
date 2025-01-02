<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>Flashlight : <a
href="lightsource.htm">LightSource</a>, <a
href="switch.htm">Switch</a><br />
</strong></td>
<td style="text-align: right;"><a href="lightsource.htm">[Previous]</a>
<a href="generalintroduction.htm">[Main]</a> <a
href="candle.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
A Flashlight is basically a LightSource with a switch that can be used
to turn it on and off (just like a flashlight or, as we'd call it in
Britain, a torch).  
  
blackTorch : Flashlight 'large black flashlight/torch' 'large black torch' @mainCave  
  "It looks a serious heavy-duty instrument, with a firm ridged grip and  
   a powerful bulb. "  
   brightnessOn = 4  
   bulk = 2  
   weight = 2    
;  
  
There's no particular reason for setting brightnessOn to 4 here, other
than the fact that it's described as a powerful torch and to demonstrate
that it can be done. You can try this torch/flashlight out if you like,
but we won't be leaving it lying around in mainCave for the player to
pick up so easily. Instead we'll put in a storage cabinet aboard the
Tardis:  
  
tardisLivingQuarters : ShipboardRoom 'Tardis Living Quarters' 'the living quarters'  
  "These living quarters are pretty bare right now, but there is a storage cabinet  
   fixed to one wall, and a door that leads out. "  
  out = tardisLivingQuartersDoor  
  fore asExit(out)  
;  
  
OpenableContainer, Fixture 'storage cabinet' 'storage cabinet' @tardisLivingQuarters   
  "The large cabinet is painted a cream colour and looks securely fixed to the wall. "  
;  
  
+ blackTorch : Flashlight 'large black flashlight/torch' 'large black torch'  
  "It looks a serious heavy-duty instrument, with a firm ridged grip and  
   a powerful bulb. "  
   brightnessOn = 4  
   bulk = 2  
   weight = 2    
;  
  
This, of course, leaves players with the problem of finding an
alternative light source before they can reach the Tardis. We'll deal
with that next.  
