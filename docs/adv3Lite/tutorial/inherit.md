::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Reviewing the
Basics](reviewing.htm){.nav} \> Inheritance, Modification and
Overriding\
[[*Prev:* Methods, Functions and Statements](methods.htm){.nav}    
[*Next:* Things in Quotes](quotes.htm){.nav}     ]{.navnp}
:::

::: main
# Inheritance, Modification and Overriding

We have already discussed the basic principles of inheritance above,
when we observed that any object or class you define in your game must
inherit from one or more classes (the so-called superclasses of the
class or object being defined). In this section we shall discuss a few
of the practical consequences of this, and how to make use of them when
writing Interactive Fiction with adv3Lite.

## Overriding

You may recall towards the end of the previous chapter we tested for the
nest being placed on the branch with the following code:

::: code
    + branch: Thing 'wide firm bough; flat; branch'
        "It's flat enough to support a small object. "
        
        iFixed = true
        isListed = true
        contType = On
        
        afterAction()
        {
            if(nest.isIn(self))
                finishGameMsg(ftVictory, [finishOptionUndo]);
        }
    ;
:::

But you may be wondering, where exactly did this [afterAction()]{.code}
method come from, and how does the Heidi game know how to use it? The
answer is that [afterAction()]{.code} is in fact defined on Thing, and
that the action-handling routines in the adv3Lite library know that they
have to call the [afterAction()]{.code} method on every Thing in scope
after the performance of each successful action. On the Thing class,
however, the afterAction() routine is defined like this:

::: code
    class Thing:  Mentionable
      ...
      
      afterAction() { }
     
      ...
    ;
:::

Thus the [afterAction()]{.code} method on Thing is an empty method that
does nothing at all (since in general we don\'t want most objects to
react to actions, and in any case the library can\'t know how you would
want particular objects to react in your particular game). What the
[afterAction()]{.code} method on the branch object does is to *override*
the [afterAction()]{.code} method define on the Thing class, so that
when [branch.afterAction()]{.code} is called, it\'s the branch\'s
version of afterAction that\'s used.

This is about as simple an example of overriding as one can get. To
understand the full implications we need a slightly more complex one.
The Thing class defines an [isOn]{.code} property to determine whether a
Thing is switched on or off. It also defines an [isSwitchable]{.code}
property to determine whether that Thing can be switched on and off
(obviously most things can\'t). On the Thing class this property and
this method are defined as follows:

::: code
    isSwitchable = nil

    makeOn(stat) { isOn = stat; }
:::

If we want to create a Thing that can be switched on and off, we\'d
therefore need to override its [isSwitchable]{.code} property to true,
for example:

::: code
    lightSwitch: Thing 'light switch'
       "It's just an ordinary light switch that can be turned on and off. "
       isSwitchable = true
       isFixed = true
    ;
:::

That\'s all we have to do in adv3Lite to create a light switch (by the
way, I hope by now it\'s obvious why we also defined [isFixed =
true]{.code}; light switches aren\'t generally the kinds of things you
can pick up and carry around with you unless the electrician hasn\'t
fitted them yet). In particular the lightSwitch object inherits from
Thing the handling of the SWITCH ON and SWITCH OFF commands, the rule
that these commands can be carried out if [isSwitchable]{.code} is true,
the [isOn]{.code} property that determines whether or not the Thing is
currently switched on or off, and the [makeOn(stat)]{.code} method
that\'s used by the SWITCH ON and SWITCH OFF commands; the former calls
[makeOn(true)]{.code} and the latter [makeOn(nil)]{.code}.

That\'s all fine as far as it goes, and thanks to inheritance we\'re
getting a lot of the right kind of behaviour on our light switch simply
by defining a couple of properties, but in practice it probably isn\'t
enough. Normally when you turn a light switch on and off you want
something else to happen, like a light going on and off, and you\'d
probably want the same in your game. The obvious way to handle this
would be to *override* the makeOn(stat) method on the lightSwitch to
light up or turn off a light bulb somewhere. Here\'s a first (but
erroneous) attempt:

::: code
    lightSwitch: Thing 'light switch'
       "It's just an ordinary light switch that can be turned on and off. "
       isSwitchable = true
       isFixed = true
       
       makeOn(stat) { lightBulb.makeLit(stat); }
    ;
:::

Can you see what\'s wrong with this? We\'ll assume you\'ve defined the
[lightBulb]{.code} object elsewhere, and I can assure you
[makeLit(stat)]{.code} is another method defined on Thing, so the code
will make the bulb light up and go out again. The problem is that by
overriding makeOn(stat) in this way we\'ve removed what it originally
did on Thing so we\'re no longer keeping track of whether the light
switch is turned on and off. One way to fix it would be to copy the
original code from [Thing.makeOn(stat)]{.code} into
[lightSwitch.makeOn(stat)]{.code}, giving us:

::: code
    lightSwitch: Thing 'light switch'
       "It's just an ordinary light switch that can be turned on and off. "
       isSwitchable = true
       isFixed = true
       
       makeOn(stat) 
       { 
         isOn = stat; 
         lightBulb.makeLit(stat); 
       }
    ;
:::

This would certainly work, and after a fashion it does solve the
problem, but it really isn\'t a terribly good solution. Although in this
case it doesn\'t seem much effort to copy a single line of code, if we
were overriding a rather more elaborate method it would both tedious and
wasteful to have to copy lines and lines of code into our overridden
method, especially if all we wanted to do is to add a single line of
code or two to what the method does on the base class. Also, if there\'s
subsequently an improvement or correction to the method on the base
class (perhaps in a new version of the library), our overridden method
won\'t benefit from it. In fact, if we override methods in the manner of
the code sample immediately above, we\'re missing out on most of the
benefits of the inheritance model. The proper solution is to use the
**inherited** keyword, thus:

::: code
    lightSwitch: Thing 'light switch'
       "It's just an ordinary light switch that can be turned on and off. "
       isSwitchable = true
       isFixed = true
       
       makeOn(stat) 
       { 
         inherited(stat); 
         lightBulb.makeLit(stat); 
       }
    ;
:::

Here, [inherited(stat)]{.code} means \"at this point in the code, do
whatever the method I\'m overriding would have done\". In this case,
then, [inherited(stat)]{.code} effectively calls
[Thing.makeOn(stat)]{.code} to carry out the base handling that would
have been carried out on Thing. Note that the call to the inherited
method doesn\'t have to be the first statement in the overriding method;
you can put it wherever it\'s convenient to do so within the overriding
method. However, you do have to call [interited()]{.code} with the same
parameter list as the method you\'re overriding; since we\'re overriding
the [makeOn(stat)]{.code} method of Thing, we thus need to call
[inherited(stat)]{.code}.

This is a *very* important technique to bear in mind when you come to
override object and class methods in your own code, as you\'ll find
yourself increasingly doing as the more adventurous you become with what
you want your games to do. While in certain cases, like the
[afterAction()]{.code} method on the branch object in the first example
above, we may know from experience that the base method on Thing
doesn\'t do anything so there\'s no point in calling the inherited
method when overriding it, if in any doubt at all, the best rule of
thumb is to always include a call to [inherited()]{.code} when
overriding a method.

## Modifying

In addition to inheriting behaviour from classes (and objects), we can
also modify existing classes and objects, by making use of the
**modify** keyword. This is best explained by means of an example.
Suppose we were writing a game in which there were going to be a lot of
light switches in different places, each one controlling a different
light bulb. It might become a bit tedious to have to define the same
code over and over again on each and every light switch. An alternative
would be to add the desired behaviour to the Thing class by modifying
it, perhaps like this:

::: code
    modify Thing
       bulbObj = nil
       isSwitchable = (bulbObj != nil)
       
       makeOn(stat)
       {
          inherited(stat);
          if(bulbObj != nil)
             bulbObj.makeLit(stat);
       }
    ;
:::

There are several things to note here. The first is that we\'ve added a
new property, [bulbObj]{.code}, to the Thing class to hold a reference
to the light bulb that should be lit when this Thing is switched on.
We\'ve then overridden the [isSwitchable]{.code} property so that it
becomes true if [bulbObj]{.code} is not [nil]{.code}, in other words if
we have defined a bulb object associated with this Thing. This means
that when we come to define our individual light switch objects, we
don\'t have to remember to define [isSwitchable = true ]{.code}along
with setting the [bulbObj]{.code} property to indicate the bulb
controlled by this switch. Next note the use of the [inherited()]{.code}
keyword here to call the version of the [makeOn()]{.code} method on the
original Thing class. Finally, note the check in the if statement to
make sure we don\'t accidentally try to call the [makeLit()]{.code}
method of a [nil]{.code} value, which would cause a run-time error that
could easily happen if we made a Thing switchable without defining an
associated [bulbObj]{.code}. If we modified Thing as above we could then
define an individual light switch object thus:

::: code
    lightSwitch: Thing 'light switch'
       "It's just an ordinary light switch that can be turned on and off. "
       bulbObj = lightBulb
       isFixed = true   
    ;
:::

This is a big improvement if we have a lot of light switches to define
in our game. It has to be said, though, that unless virtually every
switchable object in our game was going to be a light switch, and
perhaps even then, this probably isn\'t the best way to go about
addressing this particular issue. We\'d almost certainly be better off
defining a custom LightSwitch class along the following lines:

::: code
    class LightSwitch: Thing
       bulbObj = nil
       isSwitchable = true
       isFixed = true
       
       makeOn(stat)
       {
          inherited(stat);
          if(bulbObj != nil)
             bulbObj.makeLit(stat);
       }
    ;

    ...

    lightSwitch: LightSwitch 'light switch'
       "It's just an ordinary light switch that can be turned on and off. "
       bulbObj = lightBulb      
    ;
:::

This is neater primarily because this way we can now give the light
switch behaviour only to those objects that actually need it, and also
because we can simply define [isSwitchable = true]{.code} and [isFixed =
true]{.code} on the LightSwitch class knowing that these will almost
certainly be the appropriate values on every light switch we create. The
example nevertheless serves to illustrate the principle of modifying
classes, and in future chapters we shall come across cases when this is
indeed the best approach. In the meantime you may have noticed that the
code on the modified Thing class and the code on the new LightSwitch
class look very similar. This is no accident: what we are in fact doing
when we use the [modify]{.code} keyword on a class (or object) is to
create a new version of that class (or object) that inherits from the
old one.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Tutorial*\
[Table of Contents](toc.htm){.nav} \| [Reviewing the
Basics](reviewing.htm){.nav} \> Inheritance, Modification and
Overriding\
[[*Prev:* Methods, Functions and Statements](methods.htm){.nav}    
[*Next:* Things in Quotes](quotes.htm){.nav}     ]{.navnp}
:::
