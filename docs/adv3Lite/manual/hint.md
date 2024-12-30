::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Optional
Modules](optional.htm){.nav} \> Hints\
[[*Prev:* Menus](menu.htm){.nav}     [*Next:*
Instructions](instruct.htm){.nav}     ]{.navnp}
:::

::: main
# Hints

## Standard Hints

The hintsys.t module can be used to implement a built-in hint system for
your game. If you don\'t want any built-in hints in your game, exclude
hintsys.t from your build. If you do include hintsys.t you must also
include menusys.t.

The hintsys module in advLite is almost identical to that in adv3,
except that what adv3 calls the openWhenDescribed and closeWhenDescribed
properties of Goal are called openWhenExamined and closeWhenExamined in
adv3Lite, and adv3Lite additionally defines openWhenMoved and
closeWhenMoved.

To build a hint system with the hintsys.t module, you must start by
defining a **TopHintMenu** item, which can be an anonymous object. The
hintManager will automatically register the TopHintMenu item with the
library so that a HINTS command can make use of it. Depending on how
many hints you\'re likely to need to show at once, you can either put
**Goal** objects directly under the TopHintMenu (a Goal object describes
a current objective the player may be trying to achieve) or create a
sub-menu structure using **HintMenu** items; for example:

::: code
     topHintMenu: TopHintMenu 'Hints';
       + HintMenu 'General Questions';
       ++ Goal 'What am I supposed to be doing?' [answer, answer, answer];
       ++ Goal 'Amusing things to try' [thing, thing, thing];
       + HintMenu 'First Area';
       ++ Goal 'How do I get past the shark?' [answer, answer, answer];
       ++ Goal 'How do I open the fish tank?' [answer, answer, answer];
       + HintMenu 'Second Area';
       ++ Goal 'Where is the gold key?' [answer, answer, answer];
       ++ Goal 'How do I unlock the gold door?' [answer, answer, answer];  
:::

Note that there\'s no requirement that the hint menu tree takes exactly
this shape. A very small game could dispense with the submenus and
simply put all of the goals directly in the top hint menu. A very large
game with lots of goals could add more levels of sub-menus to make it
easier to navigate the large number of topics.

The main work of building your hint system will be in defining your
[]{#goal}**Goal** object. Each Goal typically represents a task that the
player is currently trying to achieve. To avoid giving too much away
prematurely you generally want to avoid displaying a Goal until the
player knows s/he needs to achieve it, and to avoid cluttering your
hints menu you generally want to stop offering hints for a Goal once
it\'s been achieved. A Goal can thus be in one of three states:
Undiscovered, Open and Closed. An Undiscovered Goal is one the player
doesn\'t know about yet. An Open Goal is one the player should be
currently working on. A Closed Goal is a task that no longer needs
working on (either because it\'s been solved or because other
circumstances have rendered it unnecessary). Goals generally start out
Undiscovered and the library generally takes care of their state for you
according to other properties you define (more on which immediately
below), but if you want to provide the player with hints on something
right from the start of the game (e.g. \'What am I mean to be doing?\')
you can define it as Open from the start by setting its goalState
property to OpenGoal.

Otherwise, to make a Goal become open at the appropriate point of the
game you can define one of the following properties to stipulate the
conditions under which the Goal becomes open:

-   **openWhenSeen = *obj***: The Goal becomes open when the object
    defined on this property has been seen by the player character.
-   **openWhenExamined = *obj***: The Goal becomes open when the object
    defined on this property has been examined by the player character.
-   **openWhenMoved = *obj***: The Goal becomes open when the object
    defined on this property has been moved.
-   **openWhenKnown = *obj***: The Goal becomes open when the player
    character knows about the object or topic defined on this property.
-   **openWhenRevealed = *\'key\'***: The Goal becomes open when
    gRevealed(\'key\') is true (\'key\' is an arbitrary string; you make
    it count as revealed by calling gRevealed(\'key\')).
-   **openWhenAchieved = *achievement***: The Goal becomes open when the
    achievement defined on this property has been achieved (as defined
    in the [scoring](score) module).
-   **openWhenTrue = *condition***: The Goal becomes open when the
    condition becomes true. This can be used to define any other
    condition not covered by those above.

You close a Goal in exactly the same way, except that the properties for
closing Goals are called closedWhenSeen, closeWhenExamined,
closeWhenMoved, closeWhenKnown, closeWhenRevealed, closeWhenAchieved and
closeWhenTrue.

The other part of defining a Goal is defining the list of hints that
lead towards its achievement. You define these on the menuContents
property (the second item in a Goal template) as a list, normally of
single-quoted strings, each one successively nudging the player towards
the goal by giving just a bit more information or a slightler clearer
clue (since they will be displayed one at a time); for example:

::: code
    + Goal 'Where is the gold key?'
       [
          'What did the old man tell you?',
          'Specifically, about rhymes? ',
          'What rhymes with gold? ',
          'Have you seen anything cold round here? ',
          'What\'s the temperature like in the fountain? '
       ]
       
       openWhenSeen = goldDoor
       closeWhenSeen = goldKey
    ;
:::

Occasionally, though, you may want to use a [Hint]{#hint-idx} object
instead of a single-quoted string in this list. This can be useful
either when you want the same hint to appear in more than one list, or
you want displaying the hint to open a fresh goal. For example, instead
of the final item in the previous example we might have defined:

::: code
    fountainHint: Hint 'What\'s the temperature like in the fountain? ' [fountainGoal] ; 


    This would display the text "What\'s the temperature like in the fountain?" and at the same time open the fountainGoal Goal. (The properties of Hint used in this template are hintText, a single-quoted string, and referencedGoals, a list of Goal objects).

    Occasionally we may want our hint menu to display some instructions that are always present, rather than transient hints. For this purpose we can use a HintLongTopicItem, which is the hint menu equivalent of a MenuLongTopicItem.



    Extra Hints

    The hints described above are displayed when the player requests them. It may be, however, that if a player is getting stuck we want to offer him/her a few nudges even when they're not explicitly requested. This can either be because the player has asked for such nudges, or because some check in the game has determined that they may be needed. In adv3Lite such nudges are called ExtraHints. An ExtraHint is a little like a Hint, but instead of being displayed in response to a HINTS command, it is displayed when the game decides it should be.

    To provide ExtraHints in your game, just define one or more objects of the ExtraHint class. These don't need to be located anywhere special; they'll automatically be associated with the extraHintManager object that controls them. The properties and methods of an ExtraHint that control when and what it displays are:



    hintDelay: the number of turns that must elapse after openWhen becomes true before this ExtraHint is displayed; the default is 0 but a higher number could be used to allow players to figure out a solution for themselves before being given a nudge.
    hintText: the text of the hint to display; this should be defined as a double-quoted string or as method that displays some text.
    priority: only one ExtraHint will be displayed on any one turn, so if more than one become available at the same time, the ExtraHint with the highest priority is the one that will be used. The default value of priority is 100.



    In addition there are the properties that are used to decide when an ExtraHint become relevant and when it ceases to be relevant. The ExtraHint becomes applicable when its openWhen property becomes true, but game code would not normally use this property directly. Instead you should define one or more of openWhenSeen, openWhenExamined, openWhenMoved, openWhenKnown, openWhenAchieved, openWhenRevealed or openWhenTrue, which have the same meaning, and work the same way, as the same properties on Goal. Similarly you can use one of more of closeWhenSeen, closeWhenExamined, closeWhenMoved, closeWhenKnown, closeWhenAchieved, closeWhenRevealed or closeWhenTrue to close off an ExtraHint that ceased to be relevant because the player has already done what it would prompt him or her to do. An ExtraHint is in any case closed off once it is fully displayed (more on which below), so the chief function of the closeWhenXXX properties is to prevent the display of unnecessary ExtraHints (bearing in mind not least that for ExtraHints there may be a delay between the openWhen condition becoming true and the display of the ExtraHint, as defined by the hintDelay property).


    The way you would use ExtraHints is to define a number of them at some convenient place in your code; they can probably all be defined as anonymous objects, for example:

     
    ExtraHint +7 "Try taking the document. "
        openWhenSeen = study
        closeWhenMoved = document    
    ;

    ExtraHint +7 "Have you examined the desk yet?"
        openWhenSeen = study
        closeWhenExamined = desk
        
        priority = 110
    ;
:::

Note how we can make use of the ExtraHint template to define the
hintDelay and hintText properties of these ExtraHints. In this instance
we\'re assuming that the game has a room called study in which, among
other things, there are a desk and a document, and that once the player
character has seen the study examining the desk and taking the document
are two actions that should follow. Since these might well occur to the
player in any case, we here allow a seven-turn delay before offering the
hint. Since both hints might then want to be displayed on the same turn,
we give the hint about examining the desk a higher priority so that it
will take precedence. This is, to be sure, a somewhat artificial
example, but it should serve to illustrate how ExtraHints might be used.

Although ExtraHints are displayed under circumstances determined by the
game author, it\'s normally up to players to decide whether they want
them at all, through issuing the commands EXTRA ON and EXTRA OFF. If you
want your game to display extra hints even though the player hasn\'t
asked for them, perhaps because your game has determined that the player
is floundering (see the discussion of the
[playerHelper](newbie.htm#playerhelper) object for one way to determine
that), you can call [extraHintManager.activate()]{.code} to force the
display of extra hints. If players don\'t like them, they can still
banish them with an EXTRA OFF command, but this may be a tactic of last
resort to use with a stubbornly struggling player who refused to ask for
help!

Often, you\'ll only want to give the player a single nudge, and once the
ExtraHint is displayed it will be closed off and not used again. But
there may be some cases where you feel that a player may need more than
one nudge, particularly if s/he fails to respond to the first. In such a
case you can mix the ExtraHint in with an EventList class to provide a
series of nudges, for example:

::: code
    ExtraHint, EventList +7 
        [
           'Try taking the document. ',
           'You really should take the document, you know. ',
           'To take the documemnt, use the command TAKE DOCUMENT. '
        ]
        openWhenSeen = study
        closeWhenMoved = document  
    ;
:::

[]{#setdelay}

In most cases you won\'t want these three hints to be displayed on
successive terms, since you\'d instead want to give players the
opportunity to respond to the first nudge before giving them the second.
In fact each of the hints in the list will be displayed *hintDelay*
turns afer the last. But what happens if we want to vary the interval
between hints? We can do this by means of the **setDelay()** method:
calling [setDelay(val)]{.code} will change the value of
[hintDelay]{.code} to [val]{.code}, thereby reducing or increasing the
number of turns that must elapse until the next hint in the series is
displayed. But how and where can one call this method? Because
single-quoted strings can contained embedded expressions, you might be
tempted to make the following mistake:

::: code
    ExtraHint, EventList +7 
        [
           'Try taking the document. <<setDelay(6)>>',  // DON'T DO THIS!
           'You really should take the document, you know. <<setDelay(5)>>',
           'To take the documemnt, use the command TAKE DOCUMENT. '
        ]
        openWhenSeen = study
        closeWhenMoved = document  
    ;
:::

The problem with code like this is that all the list elements are
evaluated the first time the list is referenced, so that it will most
likely result in the hintDelay being set to 5 all the way through. One
way to avoid this is to embed the calls to setDelay in double-quoted
strings inside anonymous functions, like this:

::: code
    ExtraHint, EventList +7 
        [
           {: "Try taking the document. <<setDelay(6)>>" },  // DO THIS INSTEAD
           {: "You really should take the document, you know. <<setDelay(5)>>"},
           'To take the documemnt, use the command TAKE DOCUMENT. '
        ]
        openWhenSeen = study
        closeWhenMoved = document  
    ;
:::

If you use an EventList, as in the foregoing examples, then the
ExtraHint will automatically close itself off after the last hint in the
list has been displayed. If you want to keep repeating the final hint
until the player acts on it you could use a StopEventList instead.

[]{#ehstylytag}

By default extra hints are shown in italics. If you like you can change
this by modifying the **extraHintStyleTag**. For example, to make the
hints appear in bold blue, you\'d define the following:

::: code
    modify extraHintStyleTag
        openText = '<.p><b><font color=blue>'
        closeText = '</font></b><.p>'
    ;
:::

You need to be a bit careful about specifying particular colours like
this, however; what may look good in your interpreter may not work at
all well for your players if they\'ve decided to set their interpreters
to use a different set of colours, for example white text on a blue
background! For that reason it may be safer to stick to using different
styles (bold, italic, etc.) or prefix and suffix characters such a
square brackets or asterisks, e.g.:

::: code
    modify extraHintStyleTag
        openText = '<.p>** '
        closeText = ' **<.p>'
    ;
:::

Of course, you can simply stick with the default italics here and not
bother with modifying extraHintStyleTag at all.

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [Optional
Modules](optional.htm){.nav} \> Hints\
[[*Prev:* Menus](menu.htm){.nav}     [*Next:*
Instructions](instruct.htm){.nav}     ]{.navnp}
:::
:::
