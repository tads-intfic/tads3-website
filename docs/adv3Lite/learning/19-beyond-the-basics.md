---
layout: article
title: Learning TADS 3 with adv3Lite by Eric Eve
toroot: ../../../
styleType: article
---

# 19. Beyond the Basics

## 19.1. Introduction

We've now covered all the basics of writing Interactive Fiction in TADS 3 with adv3Lite;  if you've mastered everything up to now you should be well on your way to being able to carry out most common TADS 3/adv3Lite programming tasks without too much difficulty. But the nature of IF programming means we often want to carry out less common programming tasks;  it's likely to be the unusual that makes our game stands out.

We can't cover everything TADS 3 and adv3Lite can do here, but we can briefly survey some of the other features that are likely to be of interest. In the present chapter we shan't try to explain them in any detail;  we'll simply introduce them and give some brief pointers (in particular to where more information can be found).

## 19.2. Parsing and Object Resolution

### 19.2.1. Tokenizing and Preparsing

Parsing is the business of reading the player's command, matching it to an action the game can execute and deciding which game objects it refers to;  in case of ambiguity object resolution is the business of narrowing down the possibilities to those that are most likely. The standard cases have already been dealt with in the two chapters on Actions.

The first stage of interpreting a player's command is to divide it up into tokens (roughly speaking, the individual words that make up the command, so that the command `take the knife` contains the tokens 'take', 'the' and 'knife'). To do this the parser uses the `Tokenizer` class. For details of how this works and how it can be customized, see the chapter "Basic Tokenizer" in Part VI of the *System Manual*. If *str* is a string we want to tokenize, we can do so with a statement like:

 
    local toks = Tokenizer.tokenize(str);

There's seldom any need to do this in adv3Lite, but it's worth knowing that the Parser deals with results of tokenizing the player input. For some information on what the parser does with the tokens when matching player input to action syntax and noun phrases, you could take a look at the article on GrammarProd in Part IV of the *System Manual*, but it's not the easiest read, and it's usually possible to be able to do what you want in adv3Lite without understanding that part of the system in any depth.

It is sometimes useful to be able to intercept the player's input and tweak it before the parser gets to work on it. For this purpose we can use a `StringPreParser`. This

class performs its work in its `doParsing(str,which)` method, where *str  *is the string (initially the command typed by the player) containing the command we may want to tweak. This method should return either the original or an adjusted string, or nil. If it returns a new string, this will be used instead of the command that was entered. If it returns nil, then the command will be aborted (on the assumption that the `StringPreParser` has fully dealt with it). For example, if we wanted to write a particularly prudish game, we could define a StringPreParser like this

 
    StringPreParser
 
        doParsing(str, which)  {
 
        
    if(str.toLower.find('shit'))
 
    {
 
          
 
        "If you're going to use language like that I shall ignoreyou! ";  
        
     return nil;
    
 
        
    }
 
     return str;

 
        }
;

We can have as many StringPreParsers as we like in our game, and the player's input will be processed by each in turn (unless one of them returns nil, in which case processing of the player's command will stop there). We can control the order in which StringPreParsers are used by means of their `runOrder` property. For more details, look up StringPreParser in the *Library Reference Manual*.

### 19.2.2. Object Resolution

The adv3Lite library can understand a reasonable range of noun phrases as referring to a particular object: zero or more adjectives followed by a noun, or a pair of nouns separated by 'of', or a noun followed by a number, or a locational phrase like "the ball on the table", and its parser isn't fussy about word order, making it easy to match noun phrases like 'Cranky the Clown' or 'S and P Magazine'. We've also seen that we can bracket selected words in the `vocab` property of an object to make them weak tokens, which can't then match the object on their own (but only in conjunction with other tokens that are not weak).

If the order of words is important, or you want an item to match a particular phrase but not necessarily the individual words that make up that phrase, you can use the `matchPhrases` property to define one or more phrases you want the object to match;
 this can be defined as a single-quoted string or as list of single-quoted strings.

For example, suppose we have a game that contains both a red wine bottle and a red bottle. The phrase 'red bottle' is then ambiguous, and it's not easy to see how the player could refer to the red bottle as distinct from the red wine bottle. One way to handle this would be to define the `matchPhrases` property on the red wine bottle:

 
    redWineBottle: Thing 'red wine bottle;  glass'
 
        matchPhrases = ['red wine', 'wine']; 
 
    redBottle: Thing 'red bottle;  glass'
 
    ;

The `redWineBottle` object will now match 'red wine bottle' or 'wine bottle' but not 'red bottle'. Note that the `matchPhrases` property doesn't add any vocab to an object;  it just restricts the circumstances under which its existing vocab words will match. Note also that we need to list 'wine' in the `matchPhrases` list, since the presence of 'red wine' in the list would otherwise not allow 'wine' to match by itself.

If this still don't give us enough control over which objects are matched, we can override `matchNameCommon()` on the object in question (roughly speaking, this is the equivalent of an Inform 6 `parse_name` routine). For details of how to do this, look up `matchNameCommon()` (defined on `Mentionable`) in the *Library Reference Manual*.

A slightly different situation is where the player is well aware (or ought to be well aware) of a number of objects that could match what s/he types, but is more likely to mean one thing than another. For example, suppose that the player character is carrying around a red book and a blue book, each of which she's likely to need to consult quite frequently. Since `x book` won't select between the books, the player is quite likely to type `x red` to refer to the red book. On occasion, there may well be other red objects in scope, but in this scenario it's still more likely that `red` by itself is intended to refer to the red book, so it will be most helpful to the player if we can nudge the parser towards preferring the red book to other red objects (other things being equal) while telling the player what choice the parser has made in cases of potential ambiguity. For this purpose we can use the `vocabLikelihood` property;  the default value is 0, so we could give the red book a `vocabLikelihood` of 10, say, to make the parser prefer it in cases of ambiguity it couldn't resolve in any other way. For further details, look up `vocabLikehood` (defined on `Thing`) in the *Library Reference Manual*. For even finer-grained control you could override `scoreObject()` on a particular Thing or class;  again, for further details, consult the Library Reference Manual.

The techniques outlined above all presuppose that we're happy with the parser's idea of scope (since the parser will only match objects it considers to be in scope for the current command). In slightly simplified terms, scope defines what objects the player  character can actually interact with for a given command;  normally this will be the objects the player character can see (or perhaps sense in some other way), the main exception being that we can obviously talk, read or think about things without being able to see them. The vast majority of the time, the parser's idea of scope will do what we want, but every now and again we may want something different. There are various ways of adjusting scope in adv3Lite. The most fundamental is probably the `addExtraScopeItems(role)` method of a particular action;  by default this simply calls

 
    addExtraScopeItems(action)` on the actor's current room (which thus provides another opportunity to affect scope), which in turn calls `addExtraScopeItems()` on all the regions that room is in. By default the methods on Room and Region simply add to scope any objects that are in the Room or Region's `extraScopeItems` list.

For example, the GoTo Action, which allows the player character to travel to the location of any known room or object with a `go to wherever` command defines its `addExtraScopeItems` method like this:

/* Add all known items to scope */

 
        addExtraScopeItems(whichRole?)
     {
 
        
        scopeList = scopeList.appendUnique(Q.knownScopeList);
 
    }

## 19.3. Similarity, Disambiguation and Difference

One of the things no player of our game wants to see is a disambiguation disaster like this:

 
    >take mat`Which mat do you mean, the mat, the mat or the mat?

We should normally be able to avoid this sort of thing by ensuring that we give each object a unique name property, in this case perhaps 'rubber mat', 'beer mat' and  'place mat', but there may be cases where we don't want to do this, perhaps because the full distinctive name of the object would seem too cumbersome for use in inventory listings and the like (perhaps our game contains a large black decorative door mat, a medium-sized black decorative door mat and a large brown decorative door mat). In such cases we can instead define the `disambigName` property to contain a uniquely distinctive name. Then the regular name will be used in inventory and room listings, while the `disambigName` will be used in disambiguation prompts like the one above. If we do define a `disambigName` we should be careful to ensure that it does actually provide a combination of words that identifies each object uniquely, and that this combination of words will match the `vocab` property of the object.

If we want we can define the order in which items are listed in a disambiguation prompt using the `disambigOrder` property, which by default takes its value from the `listOrder` property. This can be useful when items are explicitly enumerated, or otherwise have some natural order, e.g.:

 
    >open drawer`Which drawer you mean: the top drawer, the middle drawer or
the bottom drawer?

For further details, look up these properties in the *Library Reference Manual*.

Some objects may be genuinely indistinguishable, at least for the purposes of our game. One pound coin or silver dollar is much like another. Adv3Lite treats items as effectively indistinguishable if they have the same names and can be referred to by the same vocab. So, for example,  to define a bowl containing five identical grapes we might write:

 
    class Grape: Food 'grape;  green round;  fruit[pl]'  'grape'
    
 
        "It's round and green. "
     ;

 
    bowl: Container 'bowl'
 
    ;

 
    + Grape;
+ Grape;

 
    + Grape;
+ Grape;

 
    + Grape;

Then we'll see the bowl described as containing five grapes (rather than "a grape, a grape, a grape, a grape and a grape"), and players will be able to issue commands like `take a grape` without the parser bothering them with a disambiguation prompt. One thing to watch out for with equivalent objects is irregular plurals. The adv3Lite library knows about most of the common ones already, but if for some reason your game objects include several pericopae (singular pericope), you would stipulate this uncommon plural in braces immediately after the singular form:

 
    pericope: Thing 'short pericope{pericopae}
;
 brief'
 
    ;

Similarly, if your game featured alien insects called mantikae (singular mantika) you could just include the plural suffix in curly braces:

 
    mantika: Thing 'black mantika{-e}
;
 alien;
 insect'
 
    ;

Even when objects are equivalent in this sense, the parser can distinguish them in some cases;
 for example the player could refer to "a grape in the bowl" or "the grape on the table" even when the grapes are otherwise identical.

Before the parser distinguishes by location, it tries to distinguish by ownership. This can be defined explicitly by setting the `owner` property (so that, for example, Bob's wallet remains Bob's wallet even if Nancy steals it), or implicitly by location, (so that, for example, a pen in Bob's inventory can be referred to as Bob's pen if it's not explicitly owned by anyone else). For more details look up the `owner`, `nominalOwner() `and` ownsContents` properties on Thing in the *Library Reference Manual*.

We have seen how identically-named objects are automatically grouped together by adv3Lite. It can also happen that similarly-named objects are arranged in a class hierarchy, so that, for example, we have a Coin class from which the GoldCoin and

SilverCoin classes inherit. In such cases we can, if we like, inherit part of the vocab and/or name. For example, a  + sign in the name part of a vocab string indicates that the name part of the superclass is to be inserted at that point;
 for example:

 
    class Coin: Thing 'coin;  round metal'
 
    ;

 
    class GoldCoin: Coin 'gold +'; 
 
    class SilverCoin: Coin 'silver +'
 
    ;

 
    smallSilverCoin:SilverCoin 'small +'; 
In this case, the GoldCoin and SilverCoin classes have name properties of 'gold coin' and 'silver coin' respectively, while the smallSilverCoin's name will be initialized to 'small silver coin'. In addition, all these classes and objects will inherited the adjectives 'round' and 'metal' from the Coin class. If we don't want adjectives to be inherited from a parent class, we can start the adjectives section of the vocab property with a minus sign, like so:

 
    squarePlasticCoin: Coin ' square plastic +;  - blue'; 
## 19.4. Fancier Output

We have already seen how we can use HTML tags to format the output of a game;
 for example "<b>...</b>" to display text in bold, or "<FONT COLOR=RED>...</FONT>" to display text in red. But HTML-TADS can do a great deal more than that;
 in addition to the other things we can do with HTML mark-up we can display pictures and play sound. For details see the *Introduction to HTML TADS*.

If you want to use any of these fancy output features (HTML mark-up, sound, and graphics) you need to be aware that not all TADS 3 interpreters may be able to handle them (especially the TADS 3 interpreters available on non-Windows systems). Your game therefore needs to test the capabilities of the interpreter it's running on and provide some suitable alternative for features a less capable interpreter cannot support. For example, if your game displays a picture in response to an `examine `command, it should also display a textual description on interpreters that can't cope with graphics. To determine what features the interpreter your game is running on can support you can use the `systemInfo()` function, which is fully described in the  "tads-io Function Set" chapter in Part IV of the *System Manual*.

Amongst other things the library changes two successive dashes into an en-dash and three into an em-dash. This is great for producing nice-looking textual output, but can be problematic if we actually want to see a run of dashes (for example, because we're trying to display some kind of diagram). The place where the library converts runs of dashes is the `typographicalOutputFilter,` so if we need to disable this behaviour

from time to time to draw our diagrams, we can override it thus:

 
    modify typographicalOutputFilter
 
        isActive = true
     activate() { isActive = true;
 }

 
        deactivate { isActive = nil;
 }
 
    filterText(ostr, val) { return isActive ? inherited(ostr, val) :val;
 }
    

 
    ;

The we can call `typographicalOutputFilter.deactivate()` before outputting our dash-using diagram and `typographicalOutputFilter.activate()` afterwards. Depending on the context we may also need to call `gTranscript.deactivate() `and `gTranscript.activate() `before and after outputting our diagram.

## 19.5. Changing Person, Tense, and Player Character

Interactive Fiction is normally narrated in the second person singular and the present tense: "You are carrying a spade, a compass, and an old brown sack" or "You see nothing of interest in the old brown sack." But if we like we can change both the person and the tense. In addition to second-person narration, adv3iLte allows narration in either the first person ("I see nothing of interest in the old brown sack") or the third ("Martha sees nothing of interest in the old brown sack"). It's also possible to write a game in the past tense ("You saw nothing of interest in the old brown sack"), or partly in the present and partly in the past (perhaps using the latter for flashbacks);  or, indeed, in any of four other tenses (perfect, past perfect, future and future perfect), though these will probably be less commonly used.

To change to first-person or third-person narration is fairly straightforward;
 we just need to override the `person` property on the player character object (typically called `me`). The default value is `2`;
 for first-person narration we simply change it to `1`, and for third-person narration we change it to `3`.

If we are using third-person narration there's one more step we need to take: we need to give the player character object a name by which he or she will be referred to, for example:

 
    me: Actor 'Martha; ;  woman;
 her'
        
    person = 3
 
    ;

If we have written all our own action response messages in the form "{I}
 turn{s/ed}
 the handle" rather than "You turn the handle", then they will automatically adapt to whichever person and tense we use;
 we could even switch between first, second and third-person narration in the course of the game and all our messages would automatically adapt. This is one reason why it's a good idea to get into the habit of writing all our message using parameter substitution strings;  if we do that and then

decide half way through the game that our seemingly cool idea for third-person narrative isn't working out so well after all, all we have to do is to change `person`;  if we hadn't used parameter substitutions we'd also have to go back and change all our custom messages by hand.

Changing tense is also reasonably easy. If we want to narrate our entire game in the past tense then all we need to do is to override `gameMain.usePastTense` to true (which will take care of all the library messages) and then write all our own text in the past tense. If we want to switch tenses during the course of our game, then it will have been as well to use parameter substitutions for all our custom messages so that they'll change tense automatically too. Then we can change tense by changing the value of `gameMain.usePastTense` between nil and true, or, if we want to use one of the more exotic tenses, by changing the value of `Narrator.tense` (but if we do that once, we must keep on doing it rather than relying on `gameMain.usePastTense`). If we're only changing between past and present (the most likely combination) we can also use the tSel() macro or a vertical bar in a message parameter substitution to write text that changes text accordingly. The following two strings, illustrating the use of these two methods, are effectively equivalent:

"There <<tSel('is', 'was')>> absolutely nothing
<<tSel('here', 'there')>>. "; "There {is|was}
 absolutely nothing {here|there}
. ";
If we want to change player character during the course of a game, we can do this simply with the `setPlayer(actor)` function. For example, if we start out with `me` as the player character, and later want to switch to Mary as the player character, we can just call `setPlayer(mary)`;
 we could subsequently call `setPlayer(me)` to switch back to the original player character.

Actually, we probably need to do a *bit* more than that, since while `setPlayer()` indeed changes the player character, it doesn't give any indication to the player that it has done so, so at the very least, we might want to display some text informing the player about the switch;  it would probably be a good idea to look around from the perspective of the new player character too, e.g.:

 
    setPlayer(mary);
 
        "All of a sudden, you find you are Mary!\b";
 
    mary.getOutermostRoom.lookAroundWithin();

Something else we can do is to add an indication in the status line that the player character has changed;
 that's often done by adding " (as so-and-so)" after the room name. We can achieve that with the following modification to Room:

 
    modify Room
     statusName(actor)
    
 
    { 
        inherited(actor);

 
        
        if(libGlobal.playerCharName != nil)
 
        
        
 
        " (as <<libGlobal.playerCharName>>) ";

 
        }
;

We have to use `libGlobal.playerCharName` rather than just `actor.theName` here otherwise we'd just see "(as you)" in the status line, which wouldn't be particularly informative.

One other thing we need to take care of once we start swapping the player character around is the way the actor object in question is described when it's the player character, and when it's an NPC (as it will be if the player character encounters it when the player character is someone else). If an Actor can switch between being the player character and an NPC, when we need to use its `isPlayerChar` property to adjust its description between perspectives accordingly, for example:

 
    bob: Actor 'Bob;  tall gangling;  man fellow;
 him'
 
        "<<if isPlayerChar>>You're a tall man, and not bad-looking,
though you

 
        
    say it yourself. <<else>>He's a gangling sort of fellow whorather
     fancies himself. <<end>>"
 
        person = 2
 
    ;

Note that even if Bob starts out by being the player character, if he may later become an NPC you need to make him an Actor and define his `vocab` property in a way that will be suitable for his future role as an NPC.

## 19.6. Pathfinding

Adv3Lite comes with a built-in pathfinding module. We have already seen how to use it to calculate a route for an NPC to take from his/her current location to any given destination (provided a viable route exists), using `routeFinder.findPath(start, destination)`. For a full discussion, see section[ 14.12 ]()above. The default behaviour of the `routeFinder` object is to exclude any route that passes through a locked door (on the basis that an NPC would probably be unable to navigate it). To change that assumption you can set `routeFinder.excludeLockedDoors` to nil.

There's also a `pcRouteFinder` object that can be used to help the player character navigate the map using `go to` and `continue` commands. The difference between this and the `routeFinder` is that it will only find routes to places (or objects) the player character already knows about via TravelConnectors the destinations of which are already known to the player character. This prevents players from using the route-finder to avoid the need to explore the map. However, if there's an area of the map that should be familiar to the player character at the start of the game (such as her own house or his home town), then you can define that area as a `Region` and then define `familiar =true` on that Region. The player will then be able to navigate the familiar region with `go to `and` continue `without first having to explore it.
Beyond that, there's nothing more you need to do to make this form of player navigation work;  it's built in as standard. For example, the player can enter the command `go to kitchen `to take the first step towards the kitchen, and then on subsequent turns enter the command `continue `or just `c `to keep taking the next step until the player character arrives at the destination. This mechanism allows the player to stop along the route to interact with anything that turns up, and then continue the journey if and when appropriate.

If you want to disable this kind of navigation for the player, the simplest thing to do is simply to exclude pathfind.t from your build. If, however, you need to include pathfind.t either because you want to use the `routeFinder` for NPCs or because you only want to disable the `go to` command under particular circumstances, you could use a Doer:

 
    Doer 'go to Thing'
 
        execAction(c)
     {
 
        
 
        "In this game, you'll have to navigate with compassdirections. ";  
        abort;
    
 
        }
;

Both `routeFinder` and `pcRouteFinder` are designed to find routes around a game map. They both, however, inherit from the more abstract `Pathfinder` class which could in principle be used as the basis for other types of path-finding. To to this you would need to define your own object of the `Pathfinder` class and define its `findDestinations(cur)` method to find all the destinations one step away from *cur*, where *cur* represents a particular step along the path, which would be given as a two element list, the second element of which is the node to which it leads and the first element defines how to get to this node from the previous one. To explain how to go about this in any more depth is way beyond the scope of this book, but the place to start would be to examine how `routeFinder` and `pcRouteFinder` implement this method.

## 19.7. Coding Excursus 18

Although we've covered most of the coding topics needed for most of what you're likely to need to do in TADS 3, and although you can always find out about the rest by reading the *TADS 3 System Manual*, there's a couple more topics we should mention, if only to point out which other parts of the *System Manual* are most worth studying.

### 19.7.1. Varying, Optional and Named Argument Lists

We talked about defining methods and functions very early on, but one thing we didn't mention is that both methods and functions can be defined to take a variable number of arguments. There are two ways to define such a function or method. We can either

write:

 
    myFunc(someArg, ...)
 
    {    /* code */
 
    }

Or else

 
    myFunc(someArg, [args])
 
    { 
     /* code */
 
    }

Here either the ellipis (...) or the [args] parameter can be replaced with any number of arguments (including none) when this function is called, so that any of the following would be legal ways of calling `myFunc()`:

 
    myFunc(2);

 
    myFunc(2, 'foobar'); myFunc(2, me, 3, 'ridiculous-looking pants'); 
And indeed, many other variants besides. If we use the ellipsis notation, then to obtain the values of the arguments within the function or method we must use the `getArg(n)` function, where *n* is the number of the argument we want to manipulate. The number of arguments is then `argcount`. For example, with the third call to `myFunc()` in the above example, `argcount` would be 4, `getArg(1)` would be 2, `getArg(2)` would be `me`, `getArg(3)` would be 3, and `getArg(4)` would be 'ridiculous looking pants'. If we use the second form, with `[args]` in place of the ellipsis (we can use any name here, it doesn't have to be 'args'), then we can obtain the variable arguments directly by looking at the `args` list within the function (or method);  for example in the same example `arg[1] `would be me, `arg[2]` would be 3, and `arg[3]` would be 'ridiculous looking pants'.

We can use any number of fixed parameters (like `someArg` in the above example) before the ellipsis or list notation, including no fixed parameters at all.

We can also *send* a list value to a function or method, as though the list were a series of individual argument values. To do this, place an ellipsis after the list argument value in the function or method call's argument list:

 
    local lst = [me, 3, 'sensible-looking shirt']; 
 
    myFunc(2, lst...);

This passes four arguments to `myFunc(),` not two.

For a fuller (and probably clearer) explanation of this, see the sections on "Varying parameter lists" and "Varying-argument calls" in the chapter on "Procedural Code" in Part III of the *TADS 3 System Manual*.

A related but not identical case is where we want a function or method to have optional parameters. A varying argument list is one in which there can be any number of parameters. With optional parameters, on the other hand, the number of parameters is fixed, but some of them can be omitted when the method or function is called. This can be particularly useful for parameters that usually take a default value or which are commonly not used.

We define an optional parameter by following it with a question-mark (?) in the argument list, for example:

 
    truncate(str, len, upperCase?)
 
    {
 
    str = str.substr(1, len);

 
    if(upperCase)
 
    str = str.toUpper();

 
    return str;

 
    }

This returns a string that is `str` truncated to the first *len* characters and optionally converted to upper case. If we don't want to convert the string to upper case, we needn't supply the third parameter at all;  the function could simply be called as:

 
        msg = truncate('The rain in Spain stays mainly in the plain',
16);
    

If an optional parameter is not used in a function or method call, its value at the start of the function or method is nil. If we want it to default to some other value, we can initialize it by following it with = plus the required default value, e.g.:

 
    increment(x, y = 1)
 
        
    return x + y;
;

If this is called as `increment(2)` it will return 3;
 if it is called as `increment(2,2)`, it will return 4.
The above examples have mixed compulsory and optional parameters. It's also perfectly legal to have a function or method with only optional parameters (and no compulsory ones), but where there is a mix of compulsory and optional parameters, the compulsory ones must come first. For the full story on optional parameters see the chapter on 'Optional Parameters' in Part III of the *TADS 3 System Manual*.

A final variation on the kinds of argument list we can create is *named arguments*. This allows an argument to be passed by name instead of positionally. We indicate a names argument by following its name with a colon. For example we could write:

 
    truncate(str:, len:, upperCase:?){
 
    str = str.substr(1, len);
if(upperCase)
 
    str = str.toUpper();

 
    return str;

 
    }

Since the arguments are named, they don't need be listed in the same order when the function or method is called. For example, we could call the above function with:

 
        local msg = truncate(len:6, upperCase: true, str: 'oranges and
lemons');     

For the full story on named arguments see the chapter on 'Named Arguments' in Part III of the *TADS 3 System Manual*.

### 19.7.2. Regular Expressions

It's possible to do quite a bit of string manipulation and matching with the ordinary string methods, such as `find()` and `findReplace()`, and for certain purposes these can be fine. For example, if we need to check whether the player's command includes the name 'Nathaniel Weatherspoon' and replace it with 'nate' we can perfectly well convert it to lower case and use the `find()` method, e.g.

 
    StringPreParser(str, which)
 
        doParsing(str, which)  {
 
        
    if(str.toLower.find('nathaniel weatherspoon'))
        
    str = str.toLower.findReplace('nathaniel weatherspoon','nate', 

 
        
        
    ReplacAll);

 
        
    return str;
  }

 
    ;

In more complex cases we may soon run up against the limitations of this method, however. For example, if we wanted to test whether the player's command contained any of the prepositions 'at', 'in', 'on', or 'by', this would be much trickier, since we should not only need to look for each of them individually, but also check that they were occurring as a word in their own right, and not as part of some other word, such as 'attack' or 'indecent' or 'honest' or 'ruby';  simply surrounding them with spaces wouldn't work either, since them we'd miss any of these words if the occurred right at the end beginning of the end of the string we were testing ('he wanted to pass them by' or 'on the table is a brass bell'). For this kind of case we're really far better off searching with the aid of a regular expression such as:

 
    rexSearch('<NoCase>%<(at|in|on|by)%>', str); 
This will test whether any of 'at', 'in', 'on' or 'by' occur as separate words in `str`, without worrying about whether they're in upper or lower case.

At first sight, regular expressions look horrifyingly confusing creatures. At second and third sight, they're merely confusing (if we're not used to them). But if we plan to do a significant amount of string manipulation they're worth getting to grips with sooner or later. To find out about them, read the "Regular Expressions" chapter in Part IV of the

*TADS 3 System Manual*. Then read it again, and expect to have to refer to it frequently until you become *very* familiar with regular expressions. And when you start using regular expressions in your own code, start simple and don't be too disheartened if your first efforts don't quite work as you expect. In the long term it *is* worth getting to grips with these beasties.

### 19.7.3. LookupTable

There's one other class we'll briefly mention here, the `LookupTable`. This can be used like a list or Vector, except that we can index it on any kind of value. We create a new LookupTable in much the same way as we create a new Vector:

 
        myTab = new LookupTable();

Once the LookupTable has been created we can store and retrieve values in and from it using arbitrary keys, for example:

 
        myTab['villain'] = bob; 
 
        myTab[bob] = myrtle;
 
    myTab[[myrtle, 'mood']] = 'sad'; 
We can then retrieve these values with:

 
        local v1 = myTab['villain'];  
    local v2 = myTab[bob];

 
        local v3 = myTab[[myrtle, 'mood']];  
    Following which v1, v2 and v3 would be bob, myrtle and 'sad' respectively. If we try to assign a value to a key that already exists, we'll simply override the key-value pair with a new one. If we try to retrieve a value for a key that hasn't been defined, we'll get the value nil.
For more details, see the chapter on LookupTable in Part IV of the *TADS 3 System Manual.*

### 19.7.4. Multi-Methods

TADS 3 also has a feature called "multi-methods." This implements a relatively new object-oriented programming technique known as multiple dispatch, in which the types of *multiple* arguments can be used to determine which of several possible functions to call. The traditional TADS method call uses a *single-dispatch* system: when we write `x.foo(3)`, we're invoking the method foo as defined on the object x, or as inherited from the nearest superclass of x that defines that method. This is known as single dispatch because a single value (x) controls the selection of which definition of foo will be invoked. Multiple dispatch extends this notion so that multiple values can be considered when selecting which method to invoke. For example, we could write one version of a function `putIn()` that operates on a Thing and a Container, and another version of the same function that operates on a Liquid and a Vessel, and the system will automatically choose the correct version at run-time based on the types of

*both* arguments;
 e.g. (leaving a lot to the imagination):

 
    putIn(Thing obj, Container cont)
 
    { 
    obj.moveInto(cont);

    
 
        "{I}
 {put}
 <<obj.theName>> into <<cont.theName>>";
}

 
    putIn(Liquid liq, Vessel ves)
 
    { 
    local blk = liq.bulk;

 
        liq.bulk -= ves.getFreeBulk();
 
    if(liq.bulk <= 0)
 
        
        liq.moveInto(nil);
 
    vess.addLiquid(liq, blk);

    
 
        "{I}
 pour{s/ed}
 <<liq.theName>> into <<ves.theName>>.";
}
    

For more details, see the chapter on Multi-Methods in Part III of the *System Manual*.

### 19.7.5. Modifying Code at Run-Time

Not only can we change the data held in a property at run-time (we'd hardly be able to do much in TADS 3 if we couldn't), we can also change the code attached to methods. That is, we can assign a new method to an object property (and also retrieve the method that's attached to a property for use elsewhere). We do this using the methods `getMethod(prop)` and `setMethod(prop,meth)`, which we encountered earlier in relation to double-quoted strings. For the full story on these two methods see the chapter on TadsObject in Part IV of the *TADS 3 System Manual*.
In order to be able to do more than copy a method from one object property and apply it to another, we need some means of defining a method which can later be attached to a property. This can be done either as a *floating method* or as an *anonymous method*.

A *floating method* is so called because it doesn't belong to any particular object. We can create it using the keyword `method` in much the same way that we create a function. For example:

 
    method describeMe{
 
        if(ofKind(NonPortable))
     
 
        "\^<<theName>> is not the sort of thing you couldcarry 

 
        
        
     around with you. ";
 
    else
 
        
 
        "It looks small enough to be carried. ";
}

This method could then be attached to, say, the desc property of an object using a statement like:

 
        
    ballBearing.setMethod(&desc, describeMe);

An anonymous method is created in a way similar to that in which we'd create an anonymous function, for example:

 
        
        local meth = method(obj, newCont) {
        
        gMessageParams(obj, newCont);

 
        
        
        if(obj.bulk > maxBulk)
        
        
 
    {

    
 
        "{The subj obj}
 {is}
 too big to fit into {the newCont}
. ";

 
        
        
        
     exit;

 
        
        
        }

 
        
     else
    
 
        "{The subj onj}
 {is}
 being inserted into {the newCont}
. ";

 
        
        }

 
        
        blackBox.setMethod(&notifyInsert, meth);

Note that in both cases the floating or anonymous method takes on the context of the object to which it's attached by `setMethod`. That is, the floating or anonymous method can refer to `self` and to methods and properties of the self object (and can use keywords such as `inherited` and `delegated`) and this will all work as expected in the context of the object to which the anonymous/floating method has been attached.

We've already seen an example of this, where the library defines a CustomRoomLister class allows prefix and suffix *methods* to be passed via its constructor:

 
    class CustomRoomLister: ItemLister
 
        /* is the object listed in a LOOK AROUND description? */
     listed(obj) { return obj.lookListed && !obj.isHidden;
 }

 
        
        /*
 
        
    *    In the simple form of the constructor, we just supply astring that
        *
    will form the prefix string for the lister. In the moresophisticated

 
        
    *    form we can supply an additional argument that's ananonymous method or
        *
    function that's used to show the list prefix or suffix, orelse just

 
        
    *    the suffix string.
        */
 
        construct(prefix, prefixMethod:?, suffix:?, suffixMethod:?)
     {
 
        
        prefix_ = prefix;

 
        
        if(prefixMethod != nil)
        
        setMethod(&showListPrefix, prefixMethod);

 
        
        
        
     if(suffix != nil)
 
        
        
        suffix_ = suffix;

 
        
        if(suffixMethod != nil)
        
        setMethod(&showListSuffix, suffixMethod);

 
        }

 
        prefix_ = nil
     suffix_ = '. '
 
        
        showListPrefix(lst, pl, irName)
    
 
    {
 
        
 
        "<.p><<prefix_>> ";
 
    }

 
        
        showListSuffix(lst, pl, irName)
    
 
    { 
     
 
        "<<suffix_>>";

 
        }

 
        showSubListing = (gameMain.useParentheticalListing);

We could then pass the methods we want to use when we create the lister, for example:

 
    longPath: Room 'Path'
 
        "This long path goes nowhere in particular. There's a market justto the

 
        west. <<first time>>As paths go it's fairlyfutile.<<only>> There's a
     field to the east. "
 
        east = field
     west = startroom
 
        remoteRoomContentsLister(other)
     {
 
        
        return new CustRoomLister(nil, prefixMethod:
        
        
    method(lst, pl, irName)
 
        
        
 
    { "Lying around <<irName>> <<ifpl>>are<<else>>is<<end>> ";
 }
 
        );
    
 
        }
;

The above example incidentally shows that an anonymous method can be declared on the fly within a method or function call, just like an anonymous function. For further details see the section on 'Floating Methods' in the chapter on 'Procedural Code', and the section on 'Anonymous Methods' in the chapter on 'Anonymous Functions', both in Part III of the *Tads 3 System Manual*.

If anonymous and floating methods don't give you enough flexibility, you can go a step or two further with *DynamicFunc*. The DynamicFunc class lets you compile a string expression into executable code at run-time (specifically, into a function which you can then call). This string could, of course, be one that has been dynamically created elsewhere in your code, allowing a TADS 3 game to write some of its own source code and then compile it. For details, see the chapter on 'DynamicFunc' in Part IV of the *TADS 3 System Manual.*

## 19.8. Compiling for Web-Based Play

Full instructions for compiling and deploying a TADS 3 for playing on the web are given in Section VII of the *TADS 3 System Manual* ('Playing on the Web'), and the instructions specific to adv3Lite can be found in the *adv3Lite Library Manual*, so they need not be repeated here. A few points may be noted in passing, however.

First, a web-based game cannot use the Banner API (although it can display a

standard interpreter layout with a status line). So, if your game needs the Banner API, you'll have to compile and deploy it in the normal way (although to date, few if any published TADS 3 games have made much use of the Banner API). On the other hand a web-based game has full access to the features of the browser on which it's played, including Javascript, CSS and HTML DOM, which are not available through the standard HTML-TADS interpreter. This potentially allows a game author a great deal *more* control over the interface presented to players.

Second, if you wish to use the standard interpreter layout with just a status line and scrolling play area, it's pretty straightforward to write a TADS 3 game which can then be compiled in two versions, for playing via a traditional interpreter *and* for playing via the web. To do this, it's probably easiest to develop and test the traditional interpreter-based version first, and then compile and deploy the web version once you're done (which just requires a few manual tweaks to the .t3m file).

Third, although there are very few compatibility issues when switching between the web and traditional versions of a TADS 3 game that uses the standard interface layout, there are one or two. The first is that the <ABOUTBOX> tag can't be used in the web-based version, which almost certainly renders the entire setAboutBox() method redundant in the web version. Perhaps the easiest way to deal with this in a game intended for both traditional and web-based play is to surround your setAboutBox statement with #ifdef ... #endif conditional compilation statements thus:

 
    gameMain: GameMainDef
 
    #ifndef TADS_INCLUDE_NET
     setAboutBox()
 
    { 
     
 
        "<ABOUTBOX> <b><FONT FACE=Verdana,TADS-Sans COLOR=BLUESIZE=+2>

 
        <<versionInfo.name>><FONT></b>\b
        
    <FONT FACE=Verdana,TADS-Sans><<versionInfo.byline>>\bVersion 

 
        <<versionInfo.version>></FONT>\b
        
    <b><FONT SIZE=-1FACE=Verdana,Arial,Sans-Serif><<versionInfo.htmlDesc>>

 
        
        </FONT></b></ABOUTBOX>";
 
    }

 
    #endif
 
    ...;

Actually, this is not strictly necessary in this case, since `gameMain.setAboutBox()` will never be called from a game compiled for the web interface, and so leaving it in would almost certainly be harmless. There may, however, be other parts of our code that we want to work differently in the web based and traditional interpreter-based versions, and this illustrates what is probably the neatest way of handling it.

Another compatibility issue you may run into is if the traditional version of your game uses an identifier that's used for a different purpose in the web-ui library. For example, an early version of the web-ui library used 'path' as the name of a property. Using 'path' as the name of an object (a room representing a path, perhaps) in game code then resulted in series of error messages the game was compiled for the web version, even though the game worked fine in the traditional version. The solution was to change the name of the offending identifier (in the case of 'path' we might change it to 'longPath' for example) and then do a full recompile for debugging. A full recompile for debugging may in any case be necessary when switching between the traditional and web-based versions of the same game. (Note, by the time you read this the web-ui libraries may have been changed to avoid the clash with the identifier name 'path', so you may not encounter this particular incompatibility).

[&laquo; Go to previous chapter](18-menus-hints-and-scoring.html)&nbsp;&nbsp;&nbsp;&nbsp;[Return to table of contents](LearningT3Lite.html)&nbsp;&nbsp;&nbsp;&nbsp;[Go to next chapter &raquo;](20-where-to-go-from-here.html)