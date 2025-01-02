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
<td style="text-align: left;"><strong>vocabWords_<br />
</strong></td>
<td style="text-align: right;"><a
href="thing-thebasics.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="initdesc+initexaminedesc.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
The vocabWords\_ property defines the vocabulary with which the player
can refer to the object. The definition of brassCoin is  
  
brassCoin : Thing '(small) brass coin/groat\*coins' 'small brass coin' @longCave  
  "On the obverse is the head of King Freddie the Fat, and on the reverse  
   is stamped ONE GROAT. "  
;  
  
In this definition the format of the vocabWords\_ property defined
through the template is:  
  
(weakToken) adjective noun/noun\*plural  
  
A weak token is a word that may be included among the words used to
identify an object, but which is not sufficient to do so by itself. In
this case, for example, the player may call the coin SMALL BRASS COIN or
SMALL GROAT or SMALL BRASS and the parser will know what is meant, but
the coin will not answer to being referred to simply as SMALL (as in
EXAMINE SMALL or TAKE SMALL). Any word (it need not be the first)
included in parentheses in the vocabWords\_ property of a Thing is a
weak token. We have here made SMALL a weak token since it seems too
common a word to stand on its own as defining which object is meant.  
  
The functional difference between adjectives and nouns is that any
number of the listed adjectives may be used by the player to identify
the object, but only one of the nouns. Thus the player may type X SMALL
COIN, or X BRASS COIN or TAKE SMALL BRASS GROAT and the parser will
accept all of these as valid references to the coin. However, if the
player types X GROAT COIN or X SMALL COIN GROAT this will not be taken
as referring to the coin. If you felt GROAT COIN was a valid way of
referring to this object you could allow it by adding 'groat' to the
list of adjectives as well, i.e.  
  
+ brassCoin : Thing '(small) brass groat coin/groat\*coins' 'brass coin'   
  "On the obverse is the head of King Freddie the Fat, and on the reverse  
   is stamped ONE GROAT. "  
;  
  
Players can then refer to it as a SMALL BRASS GROAT COIN if they so
wish.  
  
The plural (anything after the asterisk) can be used to refer to a
number of coin objects collectively. For example, if we defined a silver
coin and a gold coin, and gave them both a plural of 'coins', then,
provided all three were in scope, the word COINS could be used to refer
to all three coins at once. For example, X COINS would list a
description of all three coins and TAKE COINS would cause the Player
Character to pick up all three coins (assuming that TAKE was a valid
action for all three coins when the command was issued).  
  
A further complication of the vocabWords\_ property is that you can't
usefully change the vocabulary used to refer to an object by a
programming statement that manipulates it directly. For example, if you
wanted the player to be able to refer to the coin as a groat only after
something else had occurred (perhaps his examining the coin) you could
not achieve this by writing a statement like:  
  
brassCoin.vocabWords\_ += 'groat';  
  
Since although this code would execute, it would not have the desired
effect. Instead the easiest way to add vocabulary to an object is with
the initializeVocabWith() method, which accepts a string argument in the
same format as the vocabWords\_ property, so we could write:  
  
brassCoin.initializeVocabWith('groat');   
  
To add 'groat' as a noun to the brassCoin's vocabulary. Or even  
  
brassCoin.initializeVocabWith('little shiny object');   
  
To add 'little' and 'shiny' as adjectives and 'object' as a noun.  
  
An alternative is to use G_dict.addWord(obj, str, voc_prop), e.g. to
achieve the same as the previous example:  
  
G_dict.addWord(brassKey, 'little' &adjective);  
G_dict.addWord(brassKey, 'shiny' &adjective);  
G_dict.addWord(brassKey, 'object' &noun);  
  
Although this is rather more long-winded. You can use the similar
removeWord method to take vocabulary *away* from an object, which may
occasionally be useful. For example, let's suppose that when the coin is
first seen lying on the ground it just appears to be a small brassy
object. We want it referred to as a small brassy object until it's
examined, after which it becomes a small brass coin; at that point we no
longer want the vague word 'object' to refer to it, but until then the
player can't refer to it as a coin or groat. We can achieve this with
the following:-  
  
brassCoin : Thing **'(small) brassy object' 'small brassy object'** @longCave  
  "On the obverse is the head of King Freddie the Fat, and on the reverse  
   is stamped ONE GROAT. "     
   **dobjFor(Examine)  
   {  
     action()  
     {  
       inherited;  
       changeName();  
     }  
   }  
  changeName()  
  {  
    name = 'small brass coin';  
    G_dict.removeWord(self, 'object', &noun);  
    initializeVocabWith('brass coin/groat\*coins');  
  } **  
;  
