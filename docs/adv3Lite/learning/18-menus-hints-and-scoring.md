---
layout: article
title: Learning TADS 3 with adv3Lite by Eric Eve
toroot: ../../../
styleType: article
---

# 18. Menus, Hints and Scoring

## 18.1. Menus

There are various places in a work of Interactive Fiction where it can be useful to display a menu, usually at the beginning (perhaps in response to an `about` command if we have a lot of information to offer our players) and perhaps at the end, if, for example, we want to offer a number of options in response to an `amusing` command.

We can construct a menu in adv3Lite by using a combination of `MenuItem` and `MenuLongTopicItem` objects. We create the structure of the menu with a tree of `MenuItem` objects. We can use `MenuLongTopicItems` at the ends of the branches to display substantial amounts of text.

On a `MenuItem` we normally only need to define the `title` property (as a single-quoted string);
 this is the title of the option as it appears in its parent menu. It's also the heading given to the menu when the `MenuItem` displays its own list of options, unless we override the `heading` property to do something different. So for example we could define:

 
    + MenuItem
 
        
     title = 'Instructions'
        heading = 'Instructions Menu'
 
    ;

Or, using the MenuItem template, simply:

 
    + MenuItem  'Instructions' 'Instructions Menu'`; Within a MenuItem (using the + notation) we can either place more MenuItems (to implement sub-menus) or MenuLongTopicItems, which will actually display some text (or do whatever else we want them to do). We define the `title` and `heading` properties of a MenuLongTopicItem in the same way as for a MenuItem. We also define the `menuContents` property to display some text or do whatever else we want to do. This can be a string (single-quoted or double-quoted) to be displayed, or a routine that does whatever we want. If it's a single-quoted string, this can be the last item in the template. If we want a sequence of MenuLongTopicItems to function as a series of 'chapters', then we can override their `isChapterMenu` property to be true (this causes a 'next' option to be displayed at the end of each MenuLongTopicItem which the player can select to proceed directly to the next MenuLongTopicItem without having to go back to the parent menu).

In order to get a menu displayed in the first place, we call the `display()` method on the top level menu we want to display. If we do so in response to a command, it's a good idea to display a brief message like "Done." immediately afterwards.

So, for example, to display an "About" menu (in response to an `about` command), we could do something along the following lines:

 
    versionInfo: GameID
 
        ...
    showAbout()
  
 
    { 
     aboutMenu.showAbout();

 
     
 
        "Done. ";
    }

 
    ;

 
    aboutMenu: MenuItem 'About'; 
 
    + MenuLongTopicItem 'About this game'  'This is the most exciting game I have ever written (not that
that\'s

 
        saying much). The protagonist is an entrant into the South Dakota
    Annual Paint Drying Contest. Consequently the special command
<b>watch

 
        paint dry</b> is one you\'ll need to make frequent use of in
this game. ';     

 
    + MenuLongTopicItem 'Credits'
 
        menuContents() { versionInfo.showCredit();
 }
;

 
    + MenuItem 'How to Play' 'Playing Instructions'; 
 
    ++ MenuItem 'Instructions for Players New to IF'
 
    +++ MenuLongTopicItem 'Standard Commands'
 
        'LOOK, INVENTORY, blah, blah, QUIT'; 
 
    +++ MenuLongTopicItem 'Movement Commands'
 
        'NORTH, SOUTH blah blah...'; 
 
    +++ MenuLongTopicItem 'Conversational Commands'
 
        'ASK FRED ABOUT PAINT, TELL BOB ABOUT PAINT, blah blah...'; 
 
    ++ MenuLongTopicItem 'Instructions for Player New to <i>Paint
Dry!</q>'

 
        'Use the command <b>watch paint dry</b>. Then use it again.
And again.
     And again and again and again and again.'
 
    ;

There's just one point to note: some TADS 3 interpreters can't cope with more than nine items under a single menu, so it's as well to design your menus so that they don't display more than nine items at a time. If we need more options than that, then we should put them under sub-menus.

If we want to include one top-level menu among the options of another menu, we can do so by explicitly listing it in the `contents` property of the menu we want it to display under. For example, suppose `intructionsMenu` is the top-level menu displayed in response to an `instructions` command, but we also want to be able to offer this instructions menu from within the about menu. We can do this by defining:

 
    aboutMenu: MenuItem 'About'
 
        contents = [instructionsMenu];

Whatever options/sub-menus we list explicitly in the `contents` property will be listed in addition to whatever options we define under the menu with the + notation.

We can control the order in which menu items are displayed by overriding their `menuOrder` property. Items are sorted in ascending order of this property just before the menu is displayed;
 by default `menuOrder` is set to `sourceTextOrder` (the order in which the menu items are defined within the same source file).

If we want to add an item to a menu during the course of play, we can do so by calling the `addToContents(obj) `method on the `MenuItem` to which we want to add *obj*. To remove *obj * from a menu during the course of play use `contents -=obj`.
Finally, there is an instructions menu built into the library that's just a little tricky to access. The library file instruct.t defines an `instructions` command, which by default does a huge text dump. It can, however, be made to present the same set of instructions in the form of a menu (`topInstructionsMenu`). To do this we need to do a complete recompile for debugging after ensuring that the constant INTRUCTIONS_MENU is defined. In Workbench, go to Build -> Settings from the menu and click Defines in the dialogue box;  then add INSTRUCTIONS_MENU to the list of symbols to define;  then use the Build -> Full Compile For Debugging option from the main Workbench menu. If compiling from the command line using t3make, add -D INSTRUCTIONS_MENU to the command line (or project file) and use the -a option the first time you recompile.

## 18.2. Hints

There is, of course, no need to provide any hints at all in a work of Interactive Fiction;
 whether or not to do so depends on the nature of our game, our target audience, and our own sense of what makes our game complete. If we do decide to provide hints, there's obviously a number of ways in which we can do it. The way provided by the library is an invisiclues type system (in which a series of progressively clearer hints on any given topic can be revealed one at a time) embedded in a context-sensitive hint system (in which the topics on which hints are offered become available and cease to be available depending on their relevance, in relation to where the player is in the game). If we don't want this hint system at all, we can exclude the file hintsys.t from our build. In what follows, however, we shall assume we do want to use the hint system built in to the adv3Lite library.

This hint system is basically a specialization of the menu system discussed in the previous section. We construct a hint system for our game by creating a menu of hints, or rather a menu of goals that the player may want information on at any particular time. Our top-level hint menu should be an object of the `TopHintMenu` class

(and there should only be one of these defined in our game). An object of this class automatically registers itself as the root menu of the hint system, and will thus be the menu that's invoked when the player issues a `hint` command. We only need to give this menu object an object name if we want to refer to elsewhere in our code, for example to make it accessible as an option from the `about` command (by listing it in the `contents` property of another menu).

Located in the `TopHintMenu` we should put either `HintMenu` objects (if we want to create submenus in our hint system), `HintLongTopicItem` objects (the hint system equivalent of `MenuLongTopicItem`, which we might use, say, for a permanent set of instructions on using the hint system)  or `Goal` objects (which we'll say more about below). The *only* difference between `HintMenu` and `TopHintMenu` is that the latter automatically registers itself as the root of the hint menu tree.

The difference between a `HintMenu` and a `MenuItem` is that the former is intended to part of an *adaptive* menu system. A `HintMenu` is only displayed when it has active contents, and its `contents` property only holds its active contents. An item is active if its `isActiveInMenu` property is true. This property is true by default for `HintLongTopicItem`, and for a `HintMenu` with active contents, and for an open `Goal`. For the most part game authors don't need to worry about this as the library takes care of it all. We can just define our menu tree in much the same way as we would for ordinary menus, except that most of the items at the bottom of the tree will be Goals:

 
    + TopHintMenu 'Hints'; 
 
    ++ HintMenu 'In the Garden'; 
 
    +++ Goal 'How do I water the exotic cabbage?'; 
 
    +++ Goal 'How do I reach the tower window?'; 
 
    ++ HintMenu 'In the Bedroom'; 
 
    +++ Goal 'How do I tell which woman is the sleeping princess?'+++ Goal 'Where can I hide from the jealous prince?'
Whether we need HintMenus between the TopHintMenu and the Goals depends on how many Goals are likely to be active at any one time. If we're confident it will never be more than nine, then we probably don't need any intermediate sub-menus. If it may be more than nine, then we need to implement some kind of sub-menu structure, since some TADS 3 interpreters can't cope with menus that have more than nine items.

Setting up the menu structure is relatively straightforward;
 the real work of building an adaptive hint system in TADS 3 comes with defining the various Goal objects. These are objects that represent the various objectives the player may be trying to pursue at particular points in the game. A Goal thus consists primarily of the question to which the player is looking for an answer (e.g. 'How do I get past the five-headed cat?'), defined in its `title` property, and a list of hints relating to the question,

defined in the `menuContents` property. Since these two properties are common to all Goals, we can define them via the Goal template, e.g.:

 
    + Goal 'How do I get past the five-headed cat?'
 
        [
        'Why is the cat such a problem? ',
 
        
        'What else might keep its mouths occupied? ',
        'What do cats like to chase? ',
 
        
        mouseHint,
        'You\'ll need five mice, of course, one for each mouth. '
 
        ];

These hints will be displayed one at a time, as the player requests each in turn. For the most part, they can just be single-quoted strings, in which case they'll just be displayed. But if we want displaying a hint to have some further side-effect, we need to use a `Hint` object (which is what we are assuming `mouseHint` to be in the above example).

The default behaviour of a` Hint` object is to display the text in its `hintText` property (a single-quoted string) and to open the Goals listed in its `referencedGoals` property (opening a Goal makes it available to the player, as we shall see below). In this example the `mouseHint` Hint may suggest to the player that s/he needs to find some mice, which will then make finding mice a new Goal for the player to pursue. There was no point displaying this new Goal before, since that would be a potential spoiler for the cat puzzle, but once we offer a hint that the cat may be distracted by mice, it's fair enough to offer another series of hints about finding mice. Since the `hintText` and `referencedGoals` properties are so commonly defined on Hint objects, they can be defined via a template:

 
    ++ Hint 'Perhaps the cat would be distracted by mice. '
[mouseGoal];
    

Here `mouseGoal` would be another Goal object that we'd define elsewhere. Putting two plus signs before the `Hint` object implies that we're locating it inside the previous `Goal`;  there is no need to do this, but doing so does no harm, and it's a convenient way of keeping the Hint close to its associated Goal in the source code without it interfering with the hint containment hierarchy.

If we want displaying a Hint to carry out any other side-effects besides opening one or more Goals, the best place to code them is in the Hint's `getItemText()` method. If we override this method we must remember to conclude it with `returninherited;  
     or else make it return a singe-quoted string containing the text of the hint.

As we've already mentioned, but not yet fully explained, `Goal` objects are used to create an *adaptive* hint system, that is a system that displays hints only when they become relevant, and removes them once they cease to be relevant. To that end, a `Goal` can be in one of three states: `UndiscoveredGoal`, `OpenGoal` or `ClosedGoal`, the current state of a Goal being defined by its `goalState` property. A `Goal` generally

starts out in the `UndiscoveredGoal` state (although we could define it as being an `OpenGoal` if we want it to be available at the start of play). A goal is undiscovered when it concerns an objective the player doesn't yet know about (so to display it would be at best an irrelevance and at worst a spoiler). Once the player has reached a point in the game when a particular `Goal` becomes relevant, it changes to the `OpenGoal` state. Open goals are those that are displayed in response to a `hint` command, since they relate to the problems the player is currently working on (or could be working on) at that point in the game. Once the player achieves the objective defined by the `Goal`, the `Goal` is no longer relevant, so it changes to the `ClosedGoal` state. Every time the game is about to display a hint menu it runs through the Goals contained in that menu to see which should be changed to `OpenGoal` and which should be changed to `ClosedGoal`. It then displays all those for which `goalState` is `OpenGoal`.

It is, of course, up to us to define under what conditions our Goals become opened and closed. We can do this by means of the following properties:

- `openWhenAchieved` -- the goal becomes open when this Achievement object (see the next section, on scoring) is achieved (we set this property to the Achievement object in question).

- `openWhenExamined` -- the goal becomes open when this object has been described (i.e. when the player has examined it).

- `openWhenMoved` -- the goal becomes open when this object has been moved

- `openWhenKnown` -- the goal becomes open when this Topic or Thing becomes known to the player (i.e. `gPlayerChar.knowsAbout(openWhenKnown)` becomes true).

- `openWhenRevealed` -- a single-quoted string value;
 the goal becomes open when this tag is revealed (e.g. if this were set to 'cat' then the goal would become open when `gRevealed('cat') `became true).

- `openWhenSeen` -- the goal becomes open when this object has been seen by the player character.

- `openWhenTrue` -- the goal becomes open when this condition becomes true;
 this can be used to define any condition that doesn't fit the other openWhenXXXX properties. For example, if this goal should become open when the player has seen the blue plaque and taken the brass key, then we could define `openWhenTrue = (bluePlaque.seen && brassKey.moved)`.

Note that the goal will be opened when *any* of the above are satisfied, so, for example, if we defined:

 
    + Goal 'How do I get past the five-headed cat?'
 
        [
 
        
        'Why is the cat such a problem? ',
        'What else might keep its mouths occupied? ',
 
        
        'What do cats like to chase? ',
        mouseHint,
 
        
        'You\'ll need five mice, of course, one for each mouth. '
     ]
 
        openWhenSeen = cat
     openWhenKnown = mice
 
        openWhenRevealed = 'five-cat'
     openWhenExamined = bewareOfTheCatSign
;
Then this Goal would become open *either* when the player character had seen the cat, *or* when the player character knows about the mice *or* when the 'five-cat' tag has been revealed *or* when the player character has examined the bewareOfTheCatSign.

Goals are closed by a similar set of properties: `closeWhenAchieved`, `closeWhenExamined`, `closeWhenMoved`, `closeWhenKnown`, `closeWhenRevealed`, `closeWhenSeen`, and `closeWhenTrue`, which all work in the same way as their openWhenXXXX equivalents. Thus a more typical Goal definition might look like:

 
    + Goal 'How do I get past the five-headed cat?'
 
        [
        'Why is the cat such a problem? ',
 
        
        'What else might keep its mouths occupied? ',
        'What do cats like to chase? ',
 
        
        mouseHint,
        'You\'ll need five mice, of course, one for each mouth. '
 
        ]`
     `openWhenSeen = cat
 
        closeWhenTrue = (cat.curState == chasingMiceState);

Behind this series of `openWhenXXX` and `closeWhenXXX` properties are a pair of properties called simply `openWhen` and `closeWhen`. If we wanted to, we could use these to extend the set of conditions a Goal can test for. For example, suppose in our game we quite often wanted to open and close goals when certain items had been opened, then we could modify Goal to allow this:

 
    modify Goal
    openWhenOpened = nil
 
        closeWhenOpened = nil
    openWhen = (inherited || (openWhenOpened != nil &&
openWhenOpened.opened))

 
        closeWhen = (inherited || (closeWhenOpened != nil &&
closeWhenOpened.opened));
    

Then we'd be able to use our new `openWhenOpened` and `closeWhenOpened` properties along with all the others.

## 18.3. Scoring

Many works of Interactive Fiction, especially more story-based ones, don't need to keep score. If scoring is irrelevant to our game, we can simply exclude the file score.t from our game, and all traces of score-keeping will be removed. If, however, we do want to keep a score in our game, then there are several ways we can go about it.

If all we want to do is to keep a record of the points the player has scored, we can simply add them to `libScore.totalScore` (the total number of points scored so far). So, for example, to award two points, we could simply write:

 
    libScore.totalScore += 2;

More commonly, though, we want to tell the player not only how many points have been scored, but what they have been awarded for.  One way we can do that is by calling the function `addToScore(points,desc)` where *points* is the number of points we want to award and *desc *is either a description of the achievement (as a single-quoted string) or an `Achievement` object. For example we might write:

 
    addToScore(2, 'Distracting the cat'); 
Note that if we call `addToScore(points,desc)` more than once with the same *desc*, it will be considered the same achievement (i.e. it will appear only once when the player's achievements are listed in response to a `full score` command), although the points associated with it will be increased accordingly.

We can also use `Achievement` objects to award points, and this probably gives us the greatest degree of control over how scoring works in our game. One big advantage of using `Achievement` objects is that they can track how often they've been used to award points, which makes it quite straightforward to avoid awarding the player repeatedly for the same action. Another big advantage is that, under certain circumstances, we can use `Achievement` objects to calculate the maximum score in our game automatically.

To award points using an `Achievement` object, we can use one of the following methods:

- `addToScoreOnce(points)` -- award *points* points for this Achievement, provided we haven't previously awarded any points for it (in which case the score remains unchanged). If points are awarded, return true, otherwise return nil.

- `awardPoints()` - award the number of points defined in this Achievement's `points` property.

- `awardPointsOnce()` - award the number of points defined in this Achievement's `points` property provided no points have been awarded for this Achievement before;  return true if points were awarded.

In addition, we can define or query the following properties for an Achievement:

- `desc -- `a double-quoted string or a routine that displays a string describing this Achievement.

- `maxPoints` -- the maximum number of points that can be awarded for this Achievement. By default this is the same as points, but we may need to use a larger value here if we are going to allow this Achievement to be awarded more than once.

- `scoreCount` -- the number of times points have been awarded for this Achievement

- `totalPoints` -- the total number of points that have been awarded for this Achievement

In the simplest and most common case, we expect to award points for each Achievement only once, in which case the only properties that need concern us are `desc` and (possibly) `points`. We can also look at `scoreCount` to see if the Achievement has been achieved. Since `desc` and `points` are the commonest properties to award on an Achievement, they can be defined via a template. The points property is optional in the template, but if it is present it should come before the `desc`, and the number of points immediately preceded by a + sign. So, for example, we could define:

 
    catAchievement: Achievement  +2 "distracting the cat";

 
    mouseAchievement: Achievement  "catching some mice";

Calling `catAchievement.awardPointsOnce()` would then award two points for distracting the cat. For `mouseAchievement`, though, we should need to call `mouseAchievement.addToScoreOnce(2)` or whatever, since no points property has been defined. If there are five mice to catch and the player gets one point for each mouse, we might go for a more elaborate definition of `mouseAchievement`:

 
    mouseAchievement: Achievement
 
        "catching <<mouseCount()>>. "
 
        mouseCount()
     {
 
        
        if(scoreCount > 1)
        
 
        "<<spellInt(scoreCount)>> mice";

 
        
        else
        
 
        "a mouse"
 
        }
 
    maxPoints = 5
 
        points = 1;

If we ensure that *all* the points in our game are awarded through calling `awardPoints()` or `awardPointsOnce() `on Achievement objects, *and* that we adjust `maxPoints` appropriately on any Achievement for which points can be awarded more

than once, then we can leave the library to calculate the maximum number of points in our game (provided, that is, that the winning path through the game causes all the Achievement objects to be awarded). If there are alternative paths through the game which would result in the awarding of points through different Achievements, then we would need to use the `addToScoreOnce() `method (or the `addToScore()` function)  to award points on those alternative Achievements, and we would also need *not* to define their points properties, in order to ensure that they did not get added to the total points available. Ensuring that all winning routes through our game ended up with the same maximum score could prove quite tricky, and may or may not be possible depending on the details of the game design;
 having an automatically calculated maximum score may work best with a highly linear game with one set of Achievements that must be met.

If we're not confident that the library can calculate the maximum score for us, or we're not sticking to restrictions that allow it to do so, we need to calculate it for ourselves (or find out what it is by playing through our game and seeing what it comes to), and then override `gameMain.maxScore` with whatever the maximum score is.

There's one more property on `gameMain` we may want to override in relation to scoring, and that's `scoreRankTable`. This is the property to use if we want a message like 'This makes you a total novice' appended to the player's score. The property should consist of a list of entries, each of which is itself a two element list, the first element being the minimum score required to attain the rank, and the second being a string describing that rank, for example:

 
    gameMain: GameMainDef
 
        ...
    scoreRankTable = [
 
        
    [ 0, 'a total novice'],
        [ 10, 'a well-meaning tyro'],
 
        
    [ 25, 'a casual adventurer'],
        [ 50, 'a would-be hero'],
 
        
    [ 100, 'a paladin']
    ]
 
    ;

As in the foregoing example, the table must be arranged in ascending order of scores. If we want to change the wording of the message that announces the rank from the standard "This makes you..." form, we can do so by overriding `libScore.showScoreRankMessage(msg)`, e.g.:

 
    modify libScore
 
        showScoreRankMessage(msg) { "This gives you the rank of<<msg>>. ";
 }
 
    ;
    
Exercise 23:  This final exercise will give you an opportunity to brush up on EventLists and one or two other things from earlier in the manual, as well as menus, hints, and scoring.

The map for this game is fairly simple. Play starts in 'Deep in the Forest' from which paths lead northeast, southeast and west. To the west is a dead end (blocked by a fallen tree), but attempting to travel down it the first time results in the player character finding a branch, which he takes. In the starting location itself a variety of forest sounds can be heard, or small animals seen moving about.  Northeast from the starting location is the 'By the River' location. From here paths run southwest, back to the starting location, and southeast. Progress north is blocked by the stream. If the player attempts to cross the stream, the first two attempts are blocked with suitable messages, but the third time the attempt is allowed, and the player character drowns. This happens whether the player types `north` or `swim river`, but the first two refusal responses should differ according to the command used. Thick undergrowth prevents walking along the bank of the stream to east and west. There should be a suitable selection of riverside atmospheric messages.

Southeast of 'By the River' is 'Outside a Cave', from which paths run northwest (back to the river) and southwest (to a clearing). The cave lies to the east. The cave is in darkness, and the only way out from it is to the west. The second time the player character leaves the cave there's a warning message about an imminent rockfall. The third time the player leaves the cave the rockfall occurs, blocking the entrance to the cave. Inside the cave is a bucket, but the player character can't find it until light is brought into the cave.

Southwest of 'Outside a Cave' is a clearing, from which paths run northeast (back to 'Outside a Cave') and northwest (back to the starting location, 'Deep in the Forest'). In the clearing a large bonfire is billowing clouds of acrid smoke, the smell of which is described as increasingly overwhelming the longer the player character remains in the clearing. The player character needs to leave the clearing to the south in order to find the way back to the car park and win the game, but the smoke keeps driving him back. There's also a very simple NPC who starts out in this location, a tall man who walks round and round the four locations in the forest, but stops for one turn each time he reaches the river to scoop up some water in his hands.

To win the game the player needs to light the branch from the bonfire to make it act as a torch, then go to the cave to collect the bucket, fill the bucket with water from the river, then pour the water on the bonfire to douse it, and finally leave the clearing to the south.

Provide the game with a help/about menu, a set of adaptive hints, and a score for each step. Make the game automatically calculate the maximum score.

[&laquo; Go to previous chapter](17-attachables.html)&nbsp;&nbsp;&nbsp;&nbsp;[Return to table of contents](LearningT3Lite.html)&nbsp;&nbsp;&nbsp;&nbsp;[Go to next chapter &raquo;](19-beyond-the-basics.html)