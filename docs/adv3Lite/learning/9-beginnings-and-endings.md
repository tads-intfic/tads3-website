---
layout: article
title: Learning TADS 3 with adv3Lite by Eric Eve
toroot: ../../../
styleType: article
---

# 9. Beginnings and Endings

## 9.1. GameMainDef

Most games start with some kind of introductory text before the first room description, to set the scene and maybe give some brief instructions to the player. The normal place to do this in the `showIntro()` method of the `gameMain` object, which we have to define for every adv3Lite game:

 
    gameMain: GameMainDef
 
        showIntro()
     {
 
        
 
        "Welcome to Zork Adventure, a totally original treasure-huntset in
        
     the Colossal Underground Cave Empire. Armed only with abottle

 
        
        of water, your trusty carbide lamp, and your wits, you mustovercome
        
     a small army of dwarvish grues and gruesome dwarves to collectthe

 
        
        famed fifty-five firestones of Fearsome Folly!\b
        
     First time players should type ABOUT. ";

 
        }
;

Although we don't absolutely *have* to have a `showIntro() `method, it's generally a good idea, and we do absolutely have to have a `gameMain` object which must be of the `GameMainDef` class.

The one property of `gameMain` we absolutely *must* define is `initialPlayerChar`, which defines which object represents the player character at the start of play. In most adv3Lite games (especially those created from the templates used by Workbench) the initial player character is called `me` (though we could call it anything we liked), so a minimal `gameMain` would typically consist of:

 
    gameMain: GameMainDef
     initialPlayerChar = me
 
    ;

Previous chapters have sometimes referred to the player character as me, and sometimes as `gPlayerChar`;
 a word of explanation is now in order. `gPlayerChar` is a macro defined as:

 
    #define gPlayerChar (libGlobal.playerChar)
In the `adv3LibPreinit `object (a `PreinitObject`) the following statement occurs:

 
    gPlayerChar = gameMain.initialPlayerChar;

In other words `gPlayerChar` (aka` libGlobal.playerChar`) is pre-initialized to the value of `gameMain.initialPlayerChar`, which is usually `me`. If the player character remains the same throughout the game, as if often, if not usually, the case, then `gPlayerChar` and `me` will refer to the same object throughout the game. It's then a

matter of preference which of these we use to refer to the player character, although `me` is generally quite a bit less typing! If, however, we're writing a game in which the player character changes (or may change) in the course of play, it's probably best to use `gPlayerChar` to refer to the current player character throughout.

We can override a number of other properties on `gameMain`, but most of these are either ones that are best dealt with in later chapters as they become relevant, or left for the reader to investigate in due course. A few of the more commonly useful properties of `gameMain` include:

- `allVerbsAllowAll` -- by default this is true, but if we set it to nil this restricts the use of ALL to a handful of inventory-handling verbs. This prevents the player from taking a brute force approach to game-play and puzzle-solving by disallowing commands like EXAMINE ALL and SHOW ALL TO BOB.

- `beforeRunsBeforeCheck` -- changes the order of the before() and check() handling;
 we'll come back to this in the 'More About Actions' chapter.

- `usePastTense` -- this is nil by default, but if it's set to true all the library messages are displayed in the past tense (for use in a game narrated in the past tense).

There's also a couple of methods of `gameMain` we might want to use quite commonly. One is `showGoodbye()`, which can be used to display a parting message right at the end of the game, and `setAboutBox()` which can be used to set up an about box that displays when players use the Help->About option in their interpreter. This might typically look something like this:

 
    gameMain: GameMainDef
    initialPlayerChar = me
 
        setAboutBox()
    {
 
        
 
        "<ABOUTBOX><CENTER>
        <b>ZORK ADVENTURE</b>\b
 
        
        Version 1.0\b
        by Watt A. Ripov
 
        
        </CENTER></ABOUTBOX>";
    }

 
    ;

Or you could make a general purpose about box that takes all its information from the `versionInfo` object:

gameMain: GameMainDef

 
        initialPlayerChar = me
    setAboutBox()
  
 
    {  
 
        "<ABOUTBOX><CENTER>
 
        
        <b><<versionInfo.name>></b>\b
        Version <<versionInfo.version>>\b
 
        
        <<versionInfo.byline>>
        </CENTER></ABOUTBOX>";

 
        }

 
    ;

Such an automated about box has the merit that it will always accurately reflect changes made to versionInfo (which we'll look at more closely in just a moment), so that such changes only need to be made in one place. Note that you can't set up an about box (at least, not one that uses the <ABOUTBOX> tag) if you're compiling your game for the web interface.

For more information on `GameMainDef`, look up `GameMainDef` in the *Library Reference Manual*.

## 9.2. Version Info

The other object we have to define, along with `gameMain`, is `versionInfo`. This provides information about the name, version and author of our game, and can contain additional information for classifying our game. A typical versionInfo object mighty look like:

 
    versionInfo: GameID
 
        IFID = '2b5c2e11-003f-6e0c-4d75-6092f703208b'
     name = 'Bomb Disposal'
 
        byline = 'by Eric Eve'
     htmlByline = 'by <a href="mailto:eric.eve@whatsit.org">
 
        
        
        
        Eric Eve</a>'
     version = '0.1'
 
        authorEmail = 'Eric Eve <eric.eve@whatsit.org>'
     desc = 'A demonstration of Fuse and Daemon classes (and alsoInitObject,

 
        
        PreinitObject, CollectiveGroup and Consultable).'
     htmlDesc = 'A demonstration of Fuse and Daemon classes (and alsoInitObject,

 
        
        PreinitObject, CollectiveGroup and Consultable).'; 
This should be reasonably self-explanatory, but for further information look up `GameID `in the *adv3Lite Library Reference Manual* and read the article on 'Bibliographic Metadata' in the *TADS 3 Technical Manual*.

There are two methods we may well wish to define on this object, `showAbout() `and `showCredit()`. These methods define what is displayed in response to an `about` or `credits` command respectively, and should always be defined in a reasonably polished game to give appropriate responses. What we put in `showAbout() `can be anything from a brief set of instructions to an explanation of what the game is about with details of special commands and the like, to a full set of help menus. The response to `showCredit()` should normally acknowledge the assistance of anyone who has contributed to our game, including the authors of any extensions we have used and a list of beta-testers.

For further details of these two methods, look up `ModuleID` in the *Library Reference Manual*.

## 9.3. Coding Excursus 15 -- Intrinsic Functions

TADS 3 defines a number of *intrinsic functions, *functions built into the system. These are fairly fully documented in three of the chapters in Part IV of the *TADS 3 System Manual: '*t3vm Function Set', 'tads-gen Function Set' and 'tads-io Function Set'. Here we'll just take a brief look at some of the more generally useful ones. Most of these will be from the tads-gen Function Set.

One such function that we have already met is `dataType(val)`, which returns the data type of its *val *argument;
 see section 7.2 above.

Another pair of functions that we've met before are `firstObj() `and `nextObj()`. Together, these can be used to iterate over all objects in the game, or all objects of a certain class in the game;  `firstObj(*cls*)` returns the first object of class *cls*;  `nextObj(obj,cls) `returns the next object of class *cls* after `obj`. So, for example, to iterate over every object of class `Decoration` in the game (suppose, for some reason, we wanted to count the number of `Decoration` objects our game contained), we could use the two functions in tandem, either with:

 
    local decorationCount = 0;

 
    local obj = firstObj(Decoration);
while(obj != nil)
 
    { 
    decorationCount++;

 
        obj = nextObj(obj, Decoration);
}

Or, a little more succinctly, with:

 
    local decorationCount = 0;
for(local obj = firstObj(Decoration);
 obj ;
 obj = nextObj(obj,
Decoration) )

 
        decorationCount++;

Or, if we want to use a library-defined function `forEachInstance()`, which does part of this job for us, simply:

 
    local decorationCount = 0;
forEachInstance(Decoration, {x: decorationCount++ }
 ) ;
  

Another useful pair of functions are `max()` and `min() `which return respectively the maximum and minimum value in their argument lists (which accordingly must contain values all of the same type). For example `max(1, 3, 5, 7,9)` would return 9, while `min(1, 3, 5, 7,
9) `would return 1 (obviously this is rather more useful when the argument list contains at least one variable!).
The `rand() `function can be used both to return random numbers and to make random choices.

 
    rand(n)` (where n is an integer) returns a random integer between 0 and n-1. For example, `rand(10)` returns a random number between 0 and 9.

 
    rand(lst)`, where *lst* is a list, randomly returns one of the elements of lst.

 
    rand(val1, val2, ...
val*n*)` (i.e. where `rand()` has two or more arguments) randomly returns one of the arguments.
The `randomize()` function is used to re-seed the random number generator (to ensure that we get a different sequence of random choices each time the program is run).

We would typically call `randomize()` right at the start of our game;
 if we do so it must be called in an `InitObject` (or `gameMain.showIntro()`) rather than a `PreinitObject`;
 the same applies if we want to do anything random at start up (e.g. making a random choice of what the safe combination will be, or of which wire to cut to disable a bomb). Note that it usually isn't necessary to call randomize() at the start of the game since TADS effectively does this anyway (except when running in the Workbench development/debugging environment).

Another pair of generally useful intrinsic functions are `toInteger()` and `toString()`. The first of these, `toInteger(val)` returns the value of val as an integer if *val* is an integer, a `BigNumber` within the integer range (-2147483648 to +2147483647) or a string comprising of digits (possibly with leading spaces, a leading + or a leading -). If *val* is true or nil the function returns true or nil respectively. Otherwise a runtime error is generated.

The second, `toString(val)`, returns a string representation of *val* if val is an integer, `BigNumber`, string, true or nil. Otherwise it throws an error.

The functions in the tads-io set are less generally useful to game authors than might generally appear. The `systemInfo() `function is useful if we want information about the interpreter and operating system our game is running on (e.g. to test whether it has graphical or HTML capabilities);
 for details see the description of this function in the 'tads-io Function set' chapter of the *System Manual*.

The various bannerXXX functions look interesting, but are quite tricky to use in practice. If you want banner functionality (the ability to divide the interpreter window up into sub-windows) in your game, consult the article on 'Using the Banner API' in the *Technical Manual*.

The functions `morePrompt()` (for pausing output and asking the player to press a key), `clearscreen()` (for clearing the screen),` inputKey()` (for reading a single keystroke) and `inputLine()` (for reading a line of text input by the player), all look as if they should do something useful, but for various reasons it's better to avoid them and use the alternatives suggested below:

- Instead of `morePrompt() `use `inputManager.pauseForMore()`;
- Instead of `inputKey() `use `inputManager.getKey(nil, nil)`;
- Instead of `inputLine()` use `inputManager.getInputLine(nil, nil)`;
- Instead of `clearscreen()` use `cls()`;
The main reason for preferring these methods to the intrinsic functions is that it will make things easier if you subsequently want to convert your game to run with the WebUI interface (i.e. to make it playable remotely in a web browser).

## 9.4. Ending a Game

We've now seen several ways to do things at the beginning of a game, but we've not yet seen how to bring a game to an end.

The normal way to end a TADS 3 game is to call the function `finishGameMsg()`. This is called with two arguments: `finishGameMsg(msg,extra)`. The first parameter, *msg*, can be a single-quoted string or a `FinishType` object. If it's a single-quoted string, this will be displayed as the game ending message, preceded and followed by three asterisks in the standard IF format;  for example, calling `finishGameMsg('AllOver', [])` will end the game displaying:
 
    * All Over *

Alternatively the *msg* parameter can be a `FinishType` object, which can be used to display one of the very common ending messages:

- `ftDeath` -- You have died

- `ftFailure` -- You have failed

- `ftGameOver` -- Game Over

- `ftVictory` -- You have won

If there was some other message you thought you were going to use frequently, it would be very easy to define your own `FinishType` object, e.g.

 
    ftWellDone: FinishType  finishMsg = 'Well Done!'; 
The second parameter, *extra*, should contain a list (which may be an empty list) of `FinishOption` objects. When the game ends the player is always offered the QUIT, RESTART and RESTORE options;
 the *extra* parameter defines which additional FinishOptions the player is offered. The library defines the following `FinishOption` objects:

- `finishOptionAmusing` -- offer the AMUSING option

- `finishOptionCredits` -- offer the CREDITS option

- `finishOptionFullScore` -- offer the FULL SCORE option

- `finishOptionQuit` -- offer the QUIT option

- `finishOptionRestart` -- offer the RESTART option

- `finishOptionRestore` -- offer the RESTORE option

- `finishOptionScore` -- offer the SCORE option

- `finishOptionUndo` -- offer the UNDO option

As just noted, the QUIT, RESTART and RESTORE options are always offered as standard, so there's no need to specify any of these in the *extra* parameter. The difference between the Full Score and the Score options is that the former displays a lists of achievements that make up the score, whereas the latter simply displays the final score.

So, for example, we might end the game with:

 
    finishGameMsg(ftVictory, [finishOptionUndo,
finishOptionFullScore]);
    

The game will then be ended with the message "`* You have won *`", following which the player will be offered the RESTART, RESTORE, FULL SCORE, UNDO and QUIT options.

If we include the AMUSING option, we also need to define what it does. To do this we need to modify `finishOptionAmusing` and override its `doOption()` method. This can then do whatever we like, but at the end it should normally return true in order to redisplay the list of options. For example:

 
    modify finishOptionAmusing
     doOption()
    
 
    {    
 
        "Have you tried asking Attila the Hun about his favouriteopera, 

 
        
        or drinking from the bottle marked <q>Cat Poison</q>, orriding
        
        the sea-horse, or smelling the drain in the sewerageroom?\b";
    

 
        
        return true;

 
        }
;

Of course the AMUSING option could do something much more sophisticated than this, up to and including displaying a menu of sub-options.

It would also be possible, though seldom ever necessary, to define a FinishOption of your own. The following example illustrates the principle:

 
    finishOptionBoring: FinishOption
     desc = "see some truly <<aHrefAlt('boring', 'BORING','<b>B</b>ORING',

 
        
        
        'Show some boring things to try')>> things to try"
 
        responseKeyword = 'boring'
     responseChar = 'b'
 
        doOption()
    
 
    {    
 
        "1. When play begins, try pressing Z exactly 1,234 times.\n
 
        
        2. Try climbing the north wall of the sitting room.\n
        
    3. Ask every NPC you meet everything you can think of aboutthe

 
        
        
     first ten Roman emperors.\n
 
        
        4. Establish just how many doors, boxes and containers thebent

 
        
        
     brass key <i>won't</i> unlock.\b"; 
 
        
        return true;
 
    }

 
    ;

For more details (should you wish to create your own `FinishOption` and actually need more details), look up `FinishOption` and the various `finishOptionXXX` objects in the *Library Reference Manual*.

Exercise 16:  Complete the Bomb Disposal example from Exercise 15 by adding appropriate introductory text and suitable winning and losing endings. Also add start-up code to randomize which is the correct wire for the player to cut.

[&laquo; Go to previous chapter](8-events.html)&nbsp;&nbsp;&nbsp;&nbsp;[Return to table of contents](LearningT3Lite.html)&nbsp;&nbsp;&nbsp;&nbsp;[Go to next chapter &raquo;](10-darkness-and-light.html)