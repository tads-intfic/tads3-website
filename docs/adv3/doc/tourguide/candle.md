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
<td style="text-align: left;"><strong>Candle &amp; FireSource<br />
</strong></td>
<td style="text-align: right;"><a href="flashlight.html">[Previous]</a>
<a href="generalintroduction.html">[Main]</a> <a
href="oillamp.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
Candle is the other specialization of LightSource provided in the
library (strictly speaking, it inherits from FueledLightSource, which in
turn inherits from [LightSource](lightsource.html)). It can, of course,
be used to implement candles (as we'll do in just a minute), but it is
useful for implementing any light source with a limited fuel supply or
burn life (as we shall go on to explore).  
  
We have already defined some candles in our game (back when we
implemented a [Dispenser](dispenser.html)). You may recall we in fact
defined our own RedCandle class. As yet, however, we have provided no
means of lighting them. What we need for the task is a FireSource. One
is available in the shape of the flaming torch attached to the wall, but
we need to make some changes to it so it will act as a FireSource.  
  
**FireSource, **Fixture '**flaming torch torch/flame/flames**' 'torch' @mainCave  
  "The torch, which is fixed firmly to wall by a steel bracket, is blazing merrily,  
   its flames casting a bright but flickering light over the cave. "  
   cannotTakeMsg = 'It\\s fixed to the wall. '  
   **preCondIobjBurnWith = static inherited - objHeld  
   isLit = true  
   disambigName = 'flaming torch'  
**;  
  
There's a few things to note here. Firstly, the default handling for a
FireSource requires that the actor is holding it before it can be used
to light anything else; this is not appropriate, or not even possible,
for a flaming torch fixed to the wall, so we need to removed the objHeld
precondition. This is what we do with
preCondIobjBurnWith = static inherited - objHeld, which, so far as the
compiler is concerned, is precisely the same as if we had written:  
  
iobjFor(BurnWith)  
{  
  preCond = static inherited - objHeld  
}  
  
Which might have been clearer, but is also a bit more long-winded. This
shorter syntax is worth considering when overriding only a single method
of a dobjFor or iobjFor set, but probably not worth the loss of clarity
if overriding two or more such methods. (To construct the appropriate
method or property name, begin with 'verify', 'check', 'action' or
'preCond', then add either 'Dobj' or 'Iobj' and conclude with the action
specifier, e.g. 'Take', 'Drop' , or, as here, 'BurnWith' ).  
  
We need to set isLit = true, otherwise the FireSource will be regarded
as unlit and thus not capable of lighting anything else (until lit
itself). Finally, we add a disambigName in case there's ever a name
clash with the torch (flashlight) we defined in the last section.  
  
A further customization that might be worth making is to the vocabulary
for the BurnWith command. That defined in the library allows you to
BURN, LIGHT, IGNITE or SET FIRE something WITH something. In the case of
the candle and the torch, however, it would be perfectly natural for the
player to type, for example, LIGHT CANDLE FROM TORCH. To allow this, we
can simply override the vocabulary defined in the library, leaving
everything else as it is:  
  
modify VerbRule(BurnWith)  
     ('light' \| 'burn' \| 'ignite' \| 'set' 'fire' 'to') singleDobj  
         ('with' \| 'from') singleIobj  
     :   
;  
  
Although we have already defined a RedCandle class, we need to tweak it
a bit. Firstly, once a candle is lit, there's no reason why it shouldn't
be used to light other candles (or anything else that's ignitable), so
we should add FireSource to its class list. Secondly, a candle is not a
very efficient light source (we shall assume), so we'll reduce its
brightnessOn to 2 (this may not make much practical difference here, but
one could devise situations in which it could be made to). Thirdly, a
Candle continues to burn until its **fuelLevel** reaches zero, its
fuelLevel being decremented by 1 each turn. By default a Candle starts
with a fuelLevel of 20, but we'll be less generous with our Candles,
making them a temporary expedient until the player finds a more
efficient light source. Finally, once a candle has burned down, there's
nothing left but a stub, and this should be reflected in its
description. It's this last requirement that will add most of the
complication.  
  
class RedCandle : **FireSource,** Dispensable, Candle 'red candle\*candles' 'red candle'  
  **desc()  
  {  
    switch(fuelLevel)  
    {  
     case 0:  
      "It's just the stub of a red candle. "; break;  
     case 1:   
      "There's not much of it left. "; break;  
     case 2:  
      "It's little more than a stub. "; break;       
     case 3:  
      "It's a short red candle. "; break;  
     case 4:  
      "It's reasonably long. "; break;  
     default:  
      "It's a long red candle. ";           
    }  
    if(isLit)  
    {  
      "It's alight";  
      if(fuelLevel \< 3)  
        ", but its flame is starting to flicker";   
      ". ";    
    }  
  }**  
  isEquivalent = true  
  isListedInContents = (!isIn(myDispenser))  
  myDispenser = candleBox  
  **fuelLevel = 7  
  brightnessOn = 2  
  sayBurnedOut()  
  {  
    inherited;  
    local cur = new RedCandleStub;  
    cur.moveInto(location);  
    moveInto(nil);      
  }  
  
  dobjFor(BurnWith)  
  {  
    check()  
    {  
      if(fuelLevel \< 1)  
        sayBurnedOut;  
      else  
        inherited;  
    }  
  }  
  
**;  
  
class RedCandleStub: Thing 'red candle stub\*stubs\*candles' 'red candle stub'  
  "It's just the stub of a red candle. "  
  isEquivalent = true  
  weight = 0  
  bulk = 0  
;  
  
The desc() method provides a suitable description of the candle at
various fuel levels, adding a suitable second sentence if it's lit. When
the candle runs out of fuel its **sayBurnedOut()** method is called,
which makes this a good place to add any other special handling for this
eventuality. What we want here is for the original candle to be replaced
by a worthless candlestub object, so we create a new RedCandleStub, move
it into the location of the candle that's just burned down to nothing,
then move the burned-out candle to nil to dispose of it. We can't just
tinker with the name and vocabWords properties of the burned out candle
object, since the **isEquivalent** property being set to true means that
all members of the RedCandle class must be effectively identical. The
checkDobjBurnWith() handles the case when the player douses the candle
just before it goes out and then tries to light it again; the standard
library behaviour would prevent the candle being lit, and so it would
never be replaced with a stub.  
  
