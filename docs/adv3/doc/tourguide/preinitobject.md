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
<td style="text-align: left;"><strong>PreinitObject: <a
href="moduleexecobject.html">ModuleExecObject</a><br />
</strong></td>
<td style="text-align: right;"><a href="initobject.html">[Previous]</a>
<a href="generalintroduction.html">[Main]</a> <a
href="presaveobject.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A PreinitObject works in exactly the same way as an
[InitObject](initobject.html) with one important difference, its execute
method is executed at the preinitialization stage, not at game startup.
Preinitialization is carried out by the *compiler* before the game image
is written rather than by the *interpreter* when the game starts, and so
is useful for any game initialization code that will always have the
same results (since, having been already carried out at compilation, it
doesn't need to be carried out at game startup when the player might
otherwise notice a delay in the game starting).  
  
For example, suppose that instead of randomizing which woman each of our
predatory males fancies at the start of the game, we want to define this
for ourselves (so that it never changes from game to game), but that for
ease of computation at some point in our game it's convenient for each
of the fanciable woman to maintain a list of the men who are after them.
We might define:  
  
class FanciableWoman: Person  
   fanciedBy = \[\]  
;  
  
class PredatoryMale: Person, PreinitObject  
  mainTargetOfDesire = nil  
  execute()    
  {  
     if(mainTargetOfDesire != nil)  
       mainTargetOfDesire.fanciedBy += self;  
  }  
;  
  
Or indeed, in the interests of gender equality, we might have:  
  
class AmorousPerson: Person, PreinitObject  
   fanciedBy = \[\]  
   mainTargetOfDesire = nil  
   execute()    
   {  
     if(mainTargetOfDesire != nil)  
       mainTargetOfDesire.fanciedBy += self;  
   }  
;  
  
Which would allow us to set up whatever tangled web of relationships or
would-be relationships we wish, even including:  
  
narcissus: AmorousPerson 'narcissus'  'Narcissus'  
  isHim = true  
  mainObjectOfDesire = self  
;  
  
  
An alternative (and not uncommon) way to use a PreinitObject to achieve
roughly the same result where we want every Person in the game to be
potentially involved in amorous activities and we don't want to define a
new class for it would be the following:  
  
modify Person  
  fanciedBy = \[\]  
  mainTargetOfDesire = nil  
;  
  
PreinitObject  
  execute(}  
  {       
     for(local obj = firstObj(Person); obj != nil; obj = nextObj(obj, Person));  
     {  
      if(obj.mainTargetOfDesire != nil)  
       obj.mainTargetOfDesire.fanciedBy += obj;  
     }  
 }  
;  
  
  
  
  
  
