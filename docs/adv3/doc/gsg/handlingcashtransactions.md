---
---
<div class="topbar">

[<img src="topbar.jpg" data-border="0" />](index.html)

</div>

<div class="main">

[\[Main\]](index.html)  
*[\[Previous\]](goingshopping.html)   [\[Next\]](fillinginsomegaps.html)*

## Handling Cash Transactions

### a. Providing Goods and Money

Although we have created a shop and a shopkeeper, we have yet to program
the actual purchase process. This will turn out to be one of the most
complex tasks we have attempted so far; money is a surprisingly
difficult thing to handle in IF. We shall first try an approach with a
couple of buyable items and four coins. We shall then discuss how this
might be expanded and simplified to cope with more general cases,
without trying to add a more general case to our game.  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

What Heidi needs to buy from the shop is a battery. To make things a bit
more interesting we'll assume she can also buy a bag of sweets (that's
'candy' for all you folks on the western side of the Atlantic). The
first thing to do, then, is to remove the battery from the tin (where we
last left it) and to create a sweets/candy object. Remove the + sign
from in front of the battery, move it after the contents of insideShop,
and then define the bag of sweets:  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

battery : Thing 'small red battery' 'small red battery'  
  "It's a small red battery, 1.5v, manufactured by ElectroLeax  
  and made in the People's Republic of Erewhon. "  
  bulk = 1  
;  
  
sweetBag : Dispenser 'bag of candy/sweets' 'bag of sweets'  
  "A bag of sweets. "  
  canReturnItem = true  
  myItemClass = Sweet  
;  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

We define the bag of sweets as a Dispenser since we expect it to contain
individual items (i.e. sweets) which can be taken from the bag (and
returned to it, since we have defined canReturnItem = true). We set
myItemClass = Sweet to define the type of object we expect the bag to
hold. We must next define the Sweet class; the following code is more or
less lifted straight from the TADS 3 sample game (sample.t) changing
'coin' to 'sweet' throughout and adding a few more customisations
relevant to sweets, most notably making Sweet inherit from Food as well
as Dispensable. While we're at it we'll adapt code from the sample game
to make the sweets list neatly (e.g. "there are 9 sweets (3 red, 3
yellow and 3 green)" rather than "there is a red sweet, a red sweet, a
red sweet, a yellow sweet etc."). For this we need a ListGroupParen and
an ItemizingCollectiveGroup along with definitions of a Sweet class and
subclasses to define collections of basically similar objects. Since
this is something of a decorative distraction from our main objective
here (Heidi doesn't need the sweets for the player to win the game), I
shall simply present the adaptation from the sample.t code as an
example, without pausing to discuss it in any depth; if you like, you
can just skip it all for now.   

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

class Sweet : Dispensable, Food   
  desc = "It's a small, round, clear, \<\<sweetGroupBaseName\>\> boiled sweet. "  
  vocabWords = 'sweet/candy\*sweets'  
  location = sweetBag  
  listWith = \[sweetGroup\]  
  sweetGroupBaseName = ''  
  collectiveGroups = \[sweetCollective\]  
  sweetGroupName = ('one ' + sweetGroupBaseName)  
  countedSweetGroupName(cnt)  
        { return spellIntBelow(cnt, 100) + ' ' + sweetGroupBaseName; }  
  tasteDesc = "It tastes sweet and tangy. "  
  dobjFor(Eat)  
  {  
    action()  
    {  
      "You pop \<\<theName\>\> into your mouth and suck it. It tastes nice  
       but it doesn't last as long as you'd like.\<.p\>";  
       inherited;  
    }  
  }  
;  
  
class RedSweet : Sweet 'red - ' 'red sweet'   
    isEquivalent = true   
  sweetGroupBaseName = 'red'  
;  
  
class GreenSweet : Sweet 'green - ' 'green sweet'   
  isEquivalent = true   
  sweetGroupBaseName = 'green'  
;  
  
class YellowSweet : Sweet 'yellow - ' 'yellow sweet'  
  isEquivalent = true   
  sweetGroupBaseName = 'yellow'  
;  
  
sweetGroup: ListGroupParen  
    showGroupCountName(lst)  
    {  
        "\<\<spellIntBelowExt(lst.length(), 100, 0,  
           DigitFormatGroupSep)\>\> sweets";  
    }  
    showGroupItem(lister, obj, options, pov, info)  
        { say(obj.sweetGroupName); }  
    showGroupItemCounted(lister, lst, options, pov, infoTab)  
        { say(lst\[1\].countedSweetGroupName(lst.length())); }  
;  
  
sweetCollective: ItemizingCollectiveGroup 'candy\*sweets' 'sweets'  
;  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td>Finally, we put some sweets in the bag simply by defining a number
of anonymous objects of the appropriate type; note that the class
definitions already locate the sweets in the bag so the code required to
create the sweets is minimal: <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

RedSweet;  
RedSweet;  
RedSweet;  
RedSweet;  
GreenSweet;  
GreenSweet;  
GreenSweet;  
YellowSweet;  
YellowSweet;  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

Rather than getting bogged down in a description of how all this works
(for which see the comments in sample.t), we'll regard it for now as
simply an exercise in copying and adapting boilerplate code and get on
with the business of setting up shop (indeed, for the main purpose of
the exercise you could simply skip all the above and leave the bag of
sweets as a Thing object, since Heidi's ability to eat, examine and
taste the sweets plays no essential role in the game).  
  
The two objects so far created, battery and sweetBag, are the two
objects that will be handed to Heidi when as she completes her
purchases. With only four pounds at her disposal, however, she is not
going to buy up the shop's complete stock of these items. In other
words, there should be sweets and batteries on display before and after
the sale. On the other hand, it would be good if Heidi could not simply
reach out and take them; placing them on shelves out of reach behind the
counter and defining them to be of class Distant would achieve this
object. But once they're in sight, they'll be the obvious objects for
the parser to select in response to a command referring to batteries or
sweets - including any command we use to indicate what Heidi is
interested in buying. It would therefore be useful to define some custom
properties on these items that can be used when we come to code the
transactions. Add the following code so that the shelves are contained
directly in the shop (e.g. by placing them directly after the definition
of +++ Component 'knob/button' 'knob'):  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

+ Distant, Surface 'shelf\*shelves' 'shelves'  
  "The shelves with the most interesting goodies are behind the counter. "  
  isPlural = true    
;  
  
++ batteries : Distant 'battery\*batteries' 'batteries on shelf'  
  "A variety of batteries sits on the shelf behind the counter. "  
  isPlural = true    
  salePrice = 3  
  saleName = 'torch battery'  
  saleItem = battery      
;  
  
++ sweets : Distant 'candy/sweets' 'sweets on shelf'  
  "All sorts of tempting jars, bags, packets and boxes of sweets lurk   
   temptingly on the shelves behind the counter. "  
  isPlural = true     
  salePrice = 1  
  saleName = 'bag of sweets'  
  saleItem = sweetBag  
;  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

The salePrice property should be fairly self explanatory; saleItem
contains the object that will actually be handed over to Heidi, while
saleName is a name that will be used to describe this object in the
course of the transaction. Finally, we need to put some money where
Heidi will find it. Since we've taken the battery out of the tin and
left it empty, let's put the cash in the tin:  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

++ tin : OpenableContainer 'small tin' 'small tin'     
  "It's a small square tin with a lid. "  
  subLocation = &subSurface  
  bulkCapacity = 5  
;  
  
class Coin : Thing 'pound coin/pound\*coins\*pounds' 'pound coin'  
  "It's gold in colour, has the Queen's head on one side and \<q\>One   
   Pound\</q\> written on the reverse. The edge is inscribed with the words   
   \<q\>DECUS ET TUTAMEN\</q\>"  
   isEquivalent = true  
;  
  
+++  Coin;  
+++  Coin;  
+++  Coin;  
+++  Coin;  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

Note that we can create the Coin class between the tin and the Coin
objects and still use the + notation without any difficulty (the tin
object was defined previously and is repeated here only for the sake of
convenience). By the way if pound coins seem just too British to you,
feel free to change them to dollar bills, euro notes or anything else;
the principles will remain the same (though you'll need to be sure you
make your changes consistently throughout what follows).  
  

### b. Making the Sale

What we now want to achieve is for Heidi to be able to ask for an item,
be told the price, and receive the item she's asked for once she's
handed over the correct money. We shall assume that once she's suggested
one transaction, she can't start a second until she's completed the
first. We shall also prevent her buying more than one of each item (she
doesn't have enough money to buy a second battery, if she buys two bags
of sweets she'll have insufficient funds left to buy the battery and the
game will become unwinable, and in any case we only have one of each
type of object to give her). Although we could create a separate
transaction object to keep track of all this, we might as well use the
shopkeeper object.  
  
To make things a bit easier, we'll treat an **ask for** command directed
to the shopkeeper as equivalent to **ask about** (on the assumption that
if Heidi asks about a battery she wants to know about buying it, which
comes to much the same thing as asking for it). We'll do this when we
come to it by using the combined AskAboutForTopic. The next thing we
have to reckon with is that if Heidi hands over more than one coin at a
time (e.g. because the player types **give shopkeeper three pounds**),
although this will count as one player *turn*, it will be treated as
three iterations of the code handling the giving of a single coin to the
shopkeeper. The problem here is that in this situation we don't want the
shopkeeper to respond as each coin is handed over, but only after the
complete number of coins specified in the player's command have been
handed over. One way to handle this is via a fuse: the handing over of
the first coin creates a new fuse; the handing over of subsequent coins
merely keeps track of how many coins have been handed over. Once the
specified number of coins has been handed over the player's turn is
complete, and the fuse will fire - the code in the method called by the
fuse can then handle the shopkeeper's response to the aggregate number
of coins handed over (which might be too few, too many, or just right
for the item asked for).  
  
The code for starting the fuse will need to be on the GiveTopic that
handles the giving of coins, but we'll code the method the fuse calls on
the shopkeeper. We also need to add several custom properties to the
shopkeeper object to keep track of the transaction. The code to be added
to the shopkeeper is the following:  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

shopkeeper : Person, SoundObserver 'young shopkeeper/woman' 'young shopkeeper'  
…  
cashReceived = 0  
 price = 0  
 saleObject = nil  
 cashFuseID = nil  
 cashFuse  
 {  
    if(saleObject == nil)  
       {  
         "\<q\>What's this for?\</q\> asks {the shopkeeper/she}, handing the  
          money back, \<q\>Shouldn't you tell me what you want to buy   
          first?\</q\>";  
        cashReceived = 0;   
       }  
    else if(cashReceived \< price)  
      "\<q\>Er, that's not enough.\</q\> she points out, looking at you   
        expectantly while she waits for the balance. ";  
    else  
    {  
      "{The shopkeeper/she} takes the money and turns to take   
       \<\<saleObject.aName\>\> off the shelf. She hands you   
       \<\<saleObject.theName\>\> saying, \<q\>Here you are then";  
      if(cashReceived \> price)  
        ", and here's your change";  
      ".\</q\>\</p\>";  
      saleObject.moveInto(gPlayerChar);  
      price = 0;  
      cashReceived = 0;  
      saleObject = nil;       
    }  
   cashFuseID = nil;   
 }  
;  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

The cashReceived property holds the number of coins that have been
handed over to the shopkeeper in the current transaction; price is the
number of coins needed in total to complete the transaction; saleObject
is the object that will be handed over to the player on completion of
the transaction; and cashFuseID points to the current fuse if there is
one (we need this only so we can tell if there is a current fuse).  
  
The cashFuse method is called when the fuse fires; if saleObject is nil
Heidi has handed over some money without saying what she wants to buy
with it, so we simply give the shopkeeper a suitable message to display,
suggesting the player specifies what she or he wants to buy, and
resetting cashReceived to zero ready for the next transaction.
Otherwise, if a transaction is in process but the money handed over
isn't enough to pay for the goods, the shopkeeper simply displays a
message to the effect that she's expecting more cash. If however, there
is a current transaction and enough money has been handed over, the
routine moves the object requested (saleObject) to the player character,
displays a suitable message, and resets all the relevant properties
ready for a new transaction; if the player has actually handed over too
much money an additional message is displayed to that effect. Finally,
whatever else has happened, cashFuseID is reset to nil to show that
there's no longer a current CashFuse.  
  
The next job is to create the GiveShowTopic that will handle the handing
over of coins. This will look a bit different from the GiveShowTopics
we've seen before, both because of what it has to match, and because of
what it has to do. We can't use the template because we have no way of
specifying an object for this topic to match; instead is has to match
any object belonging to the Coin class. We achieve this effect by
overriding the matchTopic method; this method returns a score which is
typically 100 for a good match and 0 for no match at all (the idea being
that the TopicEntry with the highest score will be the one selected for
matching); for any given TopicEntry the score is held in the matchScore
property, so we make matchTopic return matchScore if an object is of
class Coin and 0 otherwise. This is also a good occasion for using the
handleTopic method rather than the TopicResponse to handle the action,
since it gives us access to the object that we want to manipulate, (as
the obj parameter):  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

++ GiveShowTopic  
   matchTopic(fromActor, obj)  
   {  
     return obj.ofKind(Coin) ? matchScore : 0;  
   }  
   handleTopic(fromActor, obj)  
   {  
     if(shopkeeper.cashFuseID == nil)           
            shopkeeper.cashFuseID = new Fuse(shopkeeper, &cashFuse, 0);                     
     shopkeeper.cashReceived ++;  
     if(shopkeeper.cashReceived \> 1)  
           "number \<\<shopkeeper.cashReceived\>\>";  
     if(shopkeeper.cashReceived \<= shopkeeper.price)  
           obj.moveInto(shopkeeper);  
   }  
;  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

The handleTopic method will be called once for every coin that's handed
over; for example, if the player types **give three pound coins to
shopkeeper**, it will be run three times. We want a new Fuse created
only the first time, so we first check whether shopkeeper.cashFuseID is
nil before creating a new fuse and pointing the shopkeeper.cashFuseID
property to it. We want to know how many coins are being handed over, so
we increment shopkeeper.cashReceived each time through the loop. If the
command involves multiple coins, the game will print "pound coin:" on a
new line for each pass through the loop; to make this look slightly less
superfluous we make it look like the coins are being counted out by
printing "number two" etc. just after the "pound coin" display, but we
don't do this the first time, in order to avoid an unnecessary "number
one" if only one coin is handed over. Finally, we want to transfer the
coins from the player character to the shopkeeper, but only up to the
number of coins needed to meet the price asked for; any surplus coins
are left in the player character's inventory. The whole GiveShowTopic
should go in with the other topic entries under the sallyTalking
state.  
  
The final stage is to create the AskAboutForTopic objects (which will
respond to either **ask for** or **ask about**) that will allow Heidi to
request either a battery or a bag of sweets. The logic in each case is a
little complicated, since there will be several things to check for (as
we shall see). To avoid having to code this complicated logic twice
over, we shall define a custom BuyTopic class (descended from
AskAboutForTopic) which will handle all the complications, then simply
create two BuyTopic objects, one for the battery and one for the sweets.
Normally, one would use AltTopic to avoid burdening TopicEntry objects
with a lots of if… else… type constructions, but since we want to
encapsulate all the complexities of the behaviour in one class, we shall
have to resort to if and else in the definition of that class:  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

class BuyTopic : AskAboutForTopic  
  topicResponse  
  {  
    if(matchObj.saleItem.moved)      
            alreadyBought();  
    else if (shopkeeper.saleObject == matchObj.saleItem)  
          "\<q\>Can I have the \<\<matchObj.saleName\>\>, please?\</q\> you ask.\<.p\>  
           \<q\>I need another \<\<currencyString(shopkeeper.price -   
            shopkeeper.cashReceived)\>\> from you.\</q\> she points out.\<.p\>";  
    else if (shopkeeper.saleObject != nil)  
         "\<q\>Oh, and I'd like a \<\<matchObj.saleName\>\> too, please.\</q\> you   
           announce.\<.p\>  
         \<q\>Shall we finish dealing with the \<\<shopkeeper.saleObject.name\>\>   
           first?\</q\> {the shopkeeper/she} suggests. ";  
   else  
   {  
        purchaseRequest();  
        purchaseResponse();  
        shopkeeper.price = matchObj.salePrice;  
        shopkeeper.saleObject = matchObj.saleItem;  
   }  
  }  
  alreadyBought = "You've already bought a \<\<matchObj.saleName\>\>.\<.p\>"  
  purchaseRequest = "\<q\>I'd like a \<\<matchObj.saleName\>\> please,\</q\> you  
    request.\<.p\>"  
  purchaseResponse = "\<q\>Certainly, that'll be   
    \<\<currencyString(matchObj.salePrice)\>\>,\</q\>  
    {the shopkeeper/she} informs you.\<.p\>"  
;  
  
We provide the properties alreadyBought, purchaseRequest and
purchaseResponse to allow easy customization of the messages displayed
by a BuyTopic, while at the same time providing acceptable default
values for these properties that will allow a BuyTopic to be used
without any customization. Note that we are using matchObj to get at the
actual object that a given BuyTopic matches.  
  
The topicResponse method then runs through a series of checks to trap
the conditions under which we should not initiate a new transaction.
First of all we check whether we've already purchased this object - note
that the way we've things up the object purchased (moved into the player
character's inventory) won't be the matchObj itself (which refers to the
items sitting on the shelf) but the object referred to in the matchObj's
saleItem property, so we check whether the latter has been moved; if it
has, it's already been sold so we simply display the message defined in
alreadyBought and take no further action.  
  
The next condition we check for is whether the player is already part of
the way through paying for the object requested. E.g. if the player
typed **ask shopkeeper for battery** and then **give her two pounds**,
there'd still be one pound to pay; here we trap the possibility that the
player then types **ask shopkeeper for battery** again. If the
transaction is already under way but incomplete, the saleObject property
of the shopkeeper will have been set to the object asked for, so we test
for this being the same as the saleItem corresponding to the matchObj.
If it is, we display a message telling the player how much there is
still to pay and take no further action.  
  
The third possibility we have to eliminate is that the player may ask
for one item, and then ask for another before the first transaction is
complete; e.g. by entering the commands, **ask shopkeeper for battery**,
**give her one pound**, **ask her for sweets**. If a transaction is in
progress shopkeeper.saleObj will point to the object being purchased,
since we have already tested for this being the object associated with
matchObj, if we reach this point and shopkeeper.saleObj is not nil, it
must be some other object. We accordingly display a message suggesting
that the player should concentrate on buying one thing at a time.  
  
Finally, if we have fallen at none of the preceding hurdles, we are in
the position to set up a new transaction. This is fairly simple. First
we display the player character's request (defined in purchaseRequest),
which should normally say what Heidi wants to buy, then the shopkeeper's
response (defined in purchaseResponse), which should say what the price
is; the default values we define for these two properties will do this
automatically, but these properties can be overridden to allow a greater
variety of conversational interchanges at this point. Finally we set up
the transaction by setting the two appropriate properties on the
shopkeeper.  
  
In a couple of places the code employs a custom function
currencyString(amount), which simply returns a string spelling out an
amount in pounds (e.g. currencyString(3) would return 'three pounds').
We can use the library function spellInt to do most of the work, so this
function is defined simply as:  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

currencyString(amount)  
{    
  return spellInt(amount) + ' '  + ((amount\>1) ? 'pounds' : 'pound');    
}  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

If you are using dollars, euros, yen or denarii instead of pounds,
remember to change this function accordingly.  
  
Finally, we need to define the two BuyTopics to cope with the battery
and the sweets. This then becomes very straightforward:  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

++ BuyTopic @batteries  
   alreadyBought = "You only need one battery, and you've already bought it.\<.p\>"  
;  
  
++ BuyTopic @sweets  
   alreadyBought = "You've already bought one bag of sweets. Think of your  
    figure! Think of your teeth!\<.p\>"  
;  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

And this, apart from a few minor tweaks we shall be looking at in the
next chapter, takes *The Further Adventures of Heidi* as far as this
Guide is going to take them. If you compile and run the game again
(after correcting any syntax errors and the other mysterious bugs that
may have arisen through your mistyping or your computer's intrinsic
cussedness), you should now be able to play it all the way through
(which may take all of five minutes).  

### c. Generalizing Financial Transactions

The way we have defined BuyTopic would make it relatively easy to add to
the items that Heidi could buy. All you would need to do is to define
another object to sit on the shelf, a corresponding item to be handed
over to Heidi, and the corresponding BuyTopic; to give a minimalist
example:  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

/\* Put this just after the shelf \*/  
++ pears : Distant 'pear\*pears' 'pears on shelf'  
"A basket of fresh pears sits on the shelf behind the counter. "  
    isPlural = true     
    salePrice = 2  
    saleName = 'pear'  
    saleItem = pear  
;  
  
pear : Food 'pear' 'pear'  
  "It's fresh-looking, green, and somewhat pear-shaped. "  
 ;  
  
/\*Make sure this gets contained in sallyTalking \*/  
BuyTopic @pears;  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

Provided you also add to the stock of pound coins (or whatever currency
you're using) to cover the cost of all the items that could be
purchased, it would be reasonably easy to going on adding as many
buyable items as you wanted - provided they could all be priced in a
small number of round pounds (or dollars, yen, roubles, drachmae,
sesterces, euro, shekalim or whatever other currency takes your fancy).
As soon as you want to start handling large amounts of money, and/or
prices in pounds and pence (or dollars and cents etc.) the whole thing
will start to become quite unwieldy. You certainly don't want to have to
cope with handling individual twenty pound notes, ten pound notes, five
pound notes, two pound coins, one pound coins, 50p, 20p, 10p, 5p, 2p and
1p coins in all possible combinations and permutations (dollars, dimes,
nickels, quarters and cents would be quite bad enough). You'd do far
better to define a single money object, with a value property stating
how much money it represents at any one time, e.g.:  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

money : Thing 'cash/money' 'money'  
  @outsideCottage  
  "A quick count reveals that it comes to \<\<currencyString(value)\>\>. "  
  value = 1204   
  isPlural = true  
;  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

Note that here we've chosen to store the value in the lowest
denomination (pence, cents etc.) so any calculations can be handled as
integer arithmetic (although you could always experiment with the
BigNumber class as an alternative). One would then need to redefine the
function currencyString to convert a value in pence, say, to a £12.04
display format.  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

function currencyString(amount)  
{  
   local valStr = ' &#163;';  /\* £ sign; for dollars you could simply use  
     '\$' \*/  
    valStr += (amount / 100);  
    valStr += '.';  
    local pence = amount % 100;  
    if (pence \< 10)  
      valStr += '0';  
    valStr += pence;  
    return valStr;  
}  
  
The implementation of transactions would then become easier. They could
be set up in exactly the same way (with a BuyTopic), but then one could
implement a routine to respond simply to **give money to shopkeeper** or
**pay shopkeeper**. This would simply have to check that enough money
was available, and, if so, deduct it, e.g.  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

++ GiveTopic @money  
topicResponse  
{  
    money.value -= shopkeeper.price;  
    "You hand over the money and the shopkeeper gives you   
        \<\<shopkeeper.saleObject.theName\>\>.\<.p\>";  
     shopkeeper.saleObject.moveInto(gPlayerChar);  
   if(money.value == 0)  
  {  
       "But you've used all your money!\<.p\>";  
        money.moveInto(nil);  
  }  
}  
;  
  
+++ AltTopic  
   "You don't have enough money to pay.\<.p\>"  
   isActive = (shopkeeper.price \> money.value)  
;  
  
+++ AltTopic  
    "\<q\>What's this for?\</q\> asks {the shopkeeper/she}, handing the  
     money back, \<q\>Shouldn't you tell me what you want to buy  
     first?\</q\>"  
    isActive = (shopkeeper.saleObject == nil)  
;  
  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

Note that with this method there's no longer any need to use a fuse, so
that all the shopkeeper.cashFuse method could be eliminated altogether.
Similarly, since with this revised model there's no possibility of the
player character issuing a command mid-transaction, so the definition of
BuyTopic could be simplified considerably:  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

class BuyTopic : AskTopic  
  topicResponse  
  {  
   if(matchObj.saleItem.moved)      
        alreadyBought();      
   else  
   {  
        purchaseRequest();  
        purchaseResponse();  
        shopkeeper.price = matchObj.salePrice;  
        shopkeeper.saleObject = matchObj.saleItem;  
   }  
  }  
  alreadyBought = "You've already bought a \<\<matchObj.saleName\>\>.\<.p\>"  
  purchaseRequest = "\<q\>I'd like a \<\<matchObj.saleName\>\> please,\</q\> you   
    request.\<.p\>"  
  purchaseResponse = "\<q\>Certainly, that'll be   
   \<\<currencyString(matchObj.salePrice)\>\>,\</q\>  
  {the shopkeeper/she} informs you.\<.p\>"  
;  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

In this way, the handling of the apparently more general and complex
situation could actually be made rather simpler than the code we needed
to handle four pound coins!  
  
If you'd like to experiment with this, you could try it out in the Heidi
game as an alternative to handling the four pound coins separately.
Since most of the principles have now been spelt out, this may once
again be left as an exercise for the reader.  
  

------------------------------------------------------------------------

*Getting Started in TADS 3*  
[\[Main\]](index.html)  
*[\[Previous\]](goingshopping.html)   [\[Next\]](fillinginsomegaps.html)*

</div>
