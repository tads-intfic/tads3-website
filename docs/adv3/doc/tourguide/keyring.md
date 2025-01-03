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
<td style="text-align: left;"><strong>Keyring : <a
href="bagofaffinity.html">BagOfHolding</a><br />
</strong></td>
<td style="text-align: right;"><a
href="lockablewithkey.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="openable.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A KeyRing is a specialized BagOfHolding designed for use with keys. In
practice this means that if a player character is carrying a KeyRing,
every time he or she picks up a key it's automatically added to the
KeyRing, and when he or she comes across a previous unencountered locked
door, an attempt to unlock it will automatically cause every key on the
KeyRing to be tried (until one fits).  
  
Since this is a convenient object for the player to have, we'll let the
player find one early on. The definition can be minimal:  
  
Keyring 'silver (key) keyring/ring' 'silver keyring' @firstAidKit  
;  
  
To see how it works, you might like to try going through the game so
far, picking up the silver keyring at an early stage, and seeing what
happens when you pick up the two keys and try opening the locked door
into the Tardis and the locked trunk without specifying which key to
use.  
  
There are not many methods or properties of Keyrings you'd generally
want to override, but you might have cause to override **isMyKey(key)**.
This method determines whether key is an acceptable object to be placed
on the Keyring, and by default accepts anything of class Key. It may be,
however, that you're developing a game with several types of key, for
example the conventional metal rods with teeth that turn in cylindrical
locks and flat magnetic cards that are pushed into slots, and you may
feel that the same type of Keyring would hardly be suitable for both. If
you defined a CardKey subclass for the second type of key you might want
to define Keyrings for the two types of key thus:  
  
conventionalKeyring: Keyring 'brass keyring'  'brass keyring'  
   isMyKey(key)  
  {  
     return key.ofKind(Key) && !key.ofKind(CardKey);  
  }  
;  
  
cardHolder: Keyring 'plastic cardholder' 'plastic cardholder'  
  isMyKey(key)  { return key.ofKind(CardKey); }  
;  
  
We'll be doing something like this presently, when we come to implement
a [card key](anotherlock.html).  
