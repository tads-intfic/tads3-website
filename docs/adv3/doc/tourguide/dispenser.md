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
<td style="text-align: left;"><strong>Dispenser : <a
href="thing-introduction.html">Thing</a><br />
</strong></td>
<td style="text-align: right;"><a
href="restrictedcontainer.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="stretchycontainer.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
Later in the game the player will use a candle to start exploring the
dark areas. In theory the candle could burn out before the player
succeeds in finding an alternative light source, thus rendering the game
unwinnable. It would thus be desirable for the player to have a large
supply of candles available. For this we'll create a box that dispenses
candles - a Dispenser object. In fact the Dispenser doesn't handle much
apart from restricting what can be put in it, so this may not be a
terribly good example, since we'll have to do most of the work in our
own code.  
  
The standard Dispensable properties we override on this object will be
**myItemClass** and **canReturnItem**. We shall shortly create a
RedCandle class to be the item dispensed from this box, so we set
myItemClass = RedCandle. If this were a matchbook we could not return
matches to it after we had torn them off, but there seems no reason why
we should not return candles to the box, so we set canReturnItem to
true.  
  
We don't want to create a whole lot of red candles that will never be
used - the idea is to allow the player to obtain another one if the one
he or she is using burns down before an alternative light source is
found. We shall therefore create new candles dynamically on demand; we
do this in the notifyRemove method. However, to avoid creating candles
needlessly, we only create a new one if there's less than two left in
the box. Again, we don't want the player to be able to go on obtaining
candles *ad infinitum* so we set a maximum (in our custom property
maxCandlesToCreate) and keep a count of the number created (in the
custom property candlesCreated). Provided it's okay to create another
candle, we do so using the dynamic object creation syntax (new
RedCandle) and move it into the box. The definition of the candleBox
then looks like this:  
  
candleBox : Dispenser 'large green box' 'large green box' @secretPassage  
   desc()  
   {  
     "The box is ";  
     if(contents.length \> 10 \|\| candlesCreated \< maxCandlesToCreate/2 )  
       "full of red candles. "  ;  
     else if (contents.length \< 1 && candlesCreated == maxCandlesToCreate)  
       "empty. ";  
     else if(candlesCreated \< (3 \* maxCandlesToCreate)/4)  
       "is about half full of red candles. ";  
     else  
       "is running out of red candles. ";   
       
   }  
   myItemClass = RedCandle  
   canReturnItem = true  
   initSpecialDesc = "A large green box sits by the wall. "  
   notifyRemove(obj)  
   {  
     if(contents.length \< 2 && candlesCreated \< maxCandlesToCreate)  
     {  
       local cur = new RedCandle;  
       candlesCreated++;  
       cur.moveInto(self);  
     }  
   }  
   candlesCreated = 0  
   maxCandlesToCreate = 40  
   weight = (2 + maxCandlesToCreate - candlesCreated)  
   bulk = 5  
   dobjFor(LookIn) asDobjFor(Examine)  
;  
  
The other things we have done to the candleBox is to give it a fairly
complex description method which gives a suitable but vague description
of its contents, and a calculation of its weight based on the number of
candles there are left to create (which must notionally still be in the
box). To put an initial red candle in the box we need simply to add:  
  
+ RedCandle;  
  
But then we have to implement the RedCandle class:  
  
class RedCandle : Dispensable, Candle 'red candle\*candles' 'red candle'  
  "It's a long red candle. "  
  isEquivalent = true  
  isListedInContents = (!isIn(myDispenser))  
  myDispenser = candleBox  
;  
  
[Candle](candle.html) is a library class that we'll come to presently.
What needs to be noted here is that since all the red candles will be
identical, we set **isEquivalent** to true on the class definition; this
tells the library that all members of the RedCandle class are
functionally identical and interchangeable. This allows you to (say)
issue a command TAKE A CANDLE or DROP A CANDLE and have the game respond
appropriately even when there are several red candles in scope. It also
means that if we pick up three candles and issue an INVENTORY command,
we'll be told "You are carrying three red candles" rather than "You are
carrying a red candle, a red candle and a red candle." Note that it is
important to specify the \*candles plural in the vocabWords property so
we can issue commands like TAKE TWO CANDLES or DROP BOTH CANDLES.  
  
We set the library **myDispenser** property to candleBox; this simply
allows the parser to assume that any command other than TAKE or TAKE
FROM directed at a candle is more likely to refer to a candle that's
already out of the box. We make further use of this property in an
overridden **isListedInContents**, which we set to nil for candles still
in their original container. This is to prevent the game announcing the
exact number of candles in the box, which would be a misleading number
(not taking into account the new candles the box was capable of
creating) and would clash with the description we have provided in
candleBox.desc.  
