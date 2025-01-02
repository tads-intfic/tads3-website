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
<td style="text-align: left;"><strong>OilLamp : <a
href="candle.html">Candle</a><br />
</strong></td>
<td style="text-align: right;"><a href="candle.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="matchstick+matchbook.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
Actually, there's no OilLamp class in the TADS 3 library, but that
doesn't stop us creating an oil lamp of our own. We've deliberately made
the candles rather annoying to use, so the player will need a steadier
light source, even before s/he encounters the flashlight in the
Tardis.  
  
In fact, an oil lamp is virtually the same as a candle, in that when lit
it gives off light, and continues to burn until extinguished by the
player or until it runs out of fuel. We can therefore base our oil lamp
on the Candle class. The main complication comes from the fact that,
unlike a candle, an oil lamp can be refuelled, so we need to add
handling for oil being poured into the lamp. We also need to provide a
description that depends on the state of the lamp, and to have the lamp
warn the player when it's about to go out. The last can conveniently be
achieved in the burnDaemon method, which is called once every turn that
the lamp is lit.  
  
oilLamp : FireSource, Candle 'brass (oil) lamp' 'brass oil lamp' @sack  
  desc()  
  {  
    "It's a fine, polished brass oil lamp, in good working order. ";  
    if(isLit)  
    {  
      "It's currently lit";  
      if(fuelLevel\<4)  
        ", but the flame is starting to burn low";  
      ". ";  
    }  
  }  
  fuelLevel = 20  
  fuelCapacity = 100  
  burnDaemon()  
  {      
    if(fuelLevel \< 4 && fuelLevel \> 0)  
      "\nThe oil lamp is starting to burn low. ";  
    inherited;    
  }  
  iobjFor(PourInto)  
  {  
    verify()   
     {   
         
       if(fuelLevel == fuelCapacity)  
         illogicalNow('The oil lamp is already full.' );  
       if(isLit)  
         illogicalNow('You can\\t pour fuel into the lamp while it\\s lit. ');         
     }  
    check()  
    {  
      if(gDobj.oilLevel == nil)        
         failCheck('That\\s not appropriate fuel for an oil lamp. ');        
    }  
    action()  
    {  
      local fuelTransferred = min(gDobj.oilLevel, fuelCapacity - fuelLevel);  
      fuelLevel += fuelTransferred;        
      gDobj.oilLevel -= fuelTransferred;  
      if(fuelLevel == fuelCapacity)  
        "You refill the lamp. ";  
      else  
        "You pour some oil into the lamp. ";  
    }  
  }  
  bulk = 2  
  weight = 2 + (4 \* fuelLevel)/fuelCapacity  
;  
  
There's nothing *very* complicated in any of this. We include the check
for fuelLevel \> 0 (as well as fuelLevel \< 4) in the overridden
burnDaemon to avoid being told that the lamp is burning low after it's
gone out. The two checks in verifyIobjPourInto prevent the player from
filling a lamp that's already full, or pouring oil in while the lamp is
lit, while checkIobjPourInto won't allow anything to be poured into the
lamp from an object that hasn't got a non-nil oilLevel property. The
action method then calculates the amount of oil poured in, which is the
lesser of the amount of oil in the source container and the amount
needed to fill the oil lamp to capacity. This quantity is then added to
the fuelLevel in the lamp and deducted from the oilLevel in the source
container, following which an appropriate message is displayed to
describe the action. Since one might expect the weight of the oil lamp
to vary with the amount of fuel it contains, the weight property is
calculated appropriately.  
  
The obvious source for oil for the lamp is the oil can we have already
defined. But to make it suitable as a source for the lamp, we almost
have to redefine it totally. While we're at it, we'll also move it into
the smallCave:  
  
oilCan : Thing 'oil can/oilcan' 'can of oil' @smallCave  
  "The can is \<\<howFull()\>\>. "  
  howFull()  
  {  
    if(oilLevel\<1)  
      "empty";  
    else if(oilLevel \< maxOilLevel/10)  
      "almost empty";  
    else if(oilLevel \< maxOilLevel/3)  
      "about quarter full";  
    else if(oilLevel \< (2\*maxOilLevel)/3)  
      "about half full";  
    else  
      "more or less full";  
  }  
  initSpecialDesc = "An old oil can lies abandoned on the ground. "  
  dobjFor(PourOnto) { verify() { } }  
  dobjFor(PourInto)   
   {   
     verify()   
     {   
       if(oilLevel \< 1) illogicalNow('The oil can is empty. ');  
     }   
   }  
  dobjFor(LookIn) asDobjFor(Examine)  
  initializeThing()  
  {  
    inherited;  
    oilLevel = maxOilLevel;  
  }  
  oilLevel = 0  
  maxOilLevel = 500  
  weight = 1 + (10 \* oilLevel)/maxOilLevel  
;  
  
This is perhaps less complicated than it looks. The lengthy howFull()
method merely provides a description (or rough estimate) of the amount
of oil left in the can. The verifyDobjPourInto makes it illogical to
pour any more oil from the lamp when it is empty. The initializeThing
method makes sure the can starts off full, and once again we calculate
the weight based on the amount of oil left in the can. It would probably
be an unnecessary complication to add any further handling for PourOnto,
since the amount of oil involved in lubricating the latch on the
sailors' locker (or anything else that we may decide needs lubricating)
is likely to be negligible.  
