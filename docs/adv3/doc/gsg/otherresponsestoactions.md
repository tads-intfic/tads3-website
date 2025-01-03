---
layout: docs
---


[<img src="topbar.jpg" data-border="0" />](index.html)





[\[Main\]](index.html)  
*[\[Previous\]](messages.html)   [\[Next\]](settingthescene.html)*

### Other Responses to Actions

So far we have concentrated on how you can customise the responses to
actions on objects directly involved in those actions as direct or
indirect object, and that will probably be the most common type of
action customisation you'll perform. But there are other types of
response we should look at for the sake of completeness. (**NOTE**: This
discussion assumes that `gameMain.beforeRunsBeforeCheck` is `nil`,
otherwise stopping an action in `check()` will not prevent
`beforeAction()` and `roomBeforeAction()` from being called on other
objects, although everything else will be the same).

  
If you want an object not directly involved in a command to respond to
it, you can use `beforeAction()` or `afterAction()`. As their names
suggest, the first of these responds to the action just before it's
performed (i.e. just before the appropriate action routine is invoked)
while afterAction() is called just after an action is performed. These
two routines are called on every object that's in the actor's scope when
the action is performed, but only if the command reaches the action
stage (i.e. it hasn't already been ruled out by verify(), check(), or
preCond). Thus, if you want another object to respond to an action that
fails, you must make it fail in `action()`, rather than before, e.g.  

` `

|     |     |
|-----|-----|
|     |     |

wickedWitch: Person 'wicked ugly witch' 'wicked witch'  
  "Boy is she ugly! "  
  isHer = true  
  dobjFor(Kiss)  
  {  
     verify() { }  
     action()  
     {  
         reportFailure('You move your lips towards hers, but your  
           nerve fails you at the last moment. ');  
     }  
  }  
;  

` `

|     |     |
|-----|-----|
|     |     |

bob: Person ' fine young man /bob'  'Bob'  
   "He looks a fine young man. "  
   isHim = true  
   isProperName = true  
   beforeAction()  
   {  
       if(gActionIs(Kiss) && gDobj == wickedWitch)  
       {  
           "\<q\>Hey, what do you  think you\\re doing!\</q\> cries Bob,  
            grabbing you by the arm and pulling you back, \<q\>Don\\t you  
           know that kissing her will turn you into a lump of vile green  
           blancmange?\</q\> ";        
           exit;  
       }  
   }  
;  

` `

|     |     |
|-----|-----|
|     |     |

If the PC tries to kiss the wicked witch while Bob is present we'll
get:  

` `

|     |     |
|-----|-----|
|     |     |

**\>kiss witch  
**"Hey, what do you think you're doing!" cries Bob, grabbing you by the
arm and pulling you back, "Don't you know that kissing her will turn you
into a lump of vile green blancmange?"  

` `

|     |     |
|-----|-----|
|     |     |

Whereas if the PC tries to kiss her when Bob is elsewhere we'll get:  

` `

|     |     |
|-----|-----|
|     |     |

**\>kiss witch  
**You move your lips towards hers, but your nerve fails you at the last
moment.  

` `

|     |     |
|-----|-----|
|     |     |

Note the use of the exit macro in Bob's beforeAction() routine to veto
the action before it takes place. We could alternatively have given Bob
an afterAction() routine to give his reaction after the event:  

` `

|     |     |
|-----|-----|
|     |     |

  afterAction()  
   {  
       if(gActionIs(Kiss) && gDobj == wickedWitch)  
       {  
           "\<q\>Wise decision\</q\> Bob approves, \<q\>I suppose you realize  
            that if you had gone ahead and kissed her you\\d have been  
            turned into a lump of vile green blancmange!\</q\> ";        
       }  
   }  

` `

|     |     |
|-----|-----|
|     |     |

You can also allow the actor's location (Room or NestedRoom) to respond
to actions in a similar way, but in that case you need to use
roomBeforeAction() or roomAfterAction, e.g.:  

` `

|     |     |
|-----|-----|
|     |     |

topOfTree : OutdoorRoom 'At the top of the tree'  
   "You cling precariously to the trunk, next to a firm, narrow branch."  
    down = clearing       
    enteringRoom(traveler)   
    {         
      if(!traveler.hasSeen(self) && traveler == gPlayerChar)     
          addToScore(1, 'reaching the top of the tree. ');                
    }  
    roomBeforeAction()  
    {  
      if(gActionIs(Jump))  
         failCheck('Not here -- you might fall to the ground and  
            hurt yourself. ');    
    }  
    roomAfterAction()  
    {  
       if(gActionIs(Yell))  
         "Your shout is lost on the breeze. ";            
    }  
;  

` `

|     |     |
|-----|-----|
|     |     |

Finally, you can also use the actorAction() method on the actor
performing the action to interfere with or otherwise repond to an action
the actor is about to perform. For example, suppose at some point in
your game your player character is tied up, and while he's tied up he
can't perform any actions other that system actions (like **quit**,
**save** and **undo**) and **look**, **inventory** or **examine**; you
might achieve this by adding an isTiedUp property to your Player
Character object (normally me), and then adding the following
actorAction() routine:

    actorAction(){    if(isTiedUp && !gAction.ofKind(SystemAction)        && !gActionIn(Look, Inventory, Examine)     {           "You can't do that while you're tied up. ";            exit;     } }

Finally, note that we've introduced a few more of those things beginning
with g in the last page or so. Remember that `gAction` means the current
action; `gActionIs(Whatever)` tests whether `gAction` is `Whatever` and
returns true or nil accordingly; `gActionIn(Foo, Bar, Whatsit)` tests
whether `gAction` is either `Foo` or `Bar` or `Whatsit` and returns true
if it is or nil otherwise. The other one, `gMessageParams(obj)`, is a
bit different; it's used to allow `obj` to be used in message parameter
strings (like `'{the obj/him}'`) where `obj` is the name of an existing
local variable. This allows us to write:

    cannotPutComponentMsg(obj){    gMessageParams(obj);    return 'You can\'t do that, because it\'s part of {the obj/him}. ';}

Instead of:

    cannotPutComponentMsg(obj){    return 'You can\'t do that, because it\'s part of '        + obj.theName + '. ';}

------------------------------------------------------------------------

*Getting Started in TADS 3*  
[\[Main\]](index.html)  
*[\[Previous\]](messages.html)   [\[Next\]](settingthescene.html)*


