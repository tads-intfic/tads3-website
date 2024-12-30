---
layout: article
title: Learning TADS 3 with adv3Lite by Eric Eve
toroot: ../../../
styleType: article
---

# 14. Non-Player Characters

## 14.1. Introduction to NPCs

Non-Player Characters (or NPCs) are any actors (or if you like, any animate objects) that appear in our game besides the Player Character (the character whose actions are controlled by the player).  By 'appear' we mean any actor that is actually implemented as an object in the game, and not merely mentioned in a cut-scene, conversation, or some other passing reference. Adv3Lite offers a rich set of tools for controlling NPC behaviour and, in particular, for writing conversations between the player character and NPCs, although making lifelike NPCs remains one of the most difficult and challenging tasks facing any IF author. Rather than try to cover every aspect of it, the present chapter will simply try to give an overview of what is possible with NPCs in adv3Lite, and one or two additional tips along the way.

We'll start with a very brief overview indeed, which we'll flesh out in the following sections. The way adv3Lite is designed means that we generally write very little code on the NPC objects themselves, even for very complex NPCs, since most of an NPC's behaviour is defined on other objects, which we locate (with the + notation) inside the NPC (or Actor) object itself. These other objects include ActorStates, TopicEntries, Conversation Nodes and AgendaItems (all of which we'll look at in more detail below). An ActorState represents what an Actor is currently doing, generally speaking his or her physical state (such as conversing with the player character, sitting doing some knitting, digging the road, sleeping profoundly, reciting an epic poem, or anything else we care to model in our game). This allows us to define most of the NPC's state-dependent behaviour on the ActorState objects instead of the Actor. TopicEntries represent the NPC's responses to conversational commands (such as `ask bob about susan`, `tell bob about about treasure`, or `show bob the strange coin`). Broadly speaking, each topic is handled by a different TopicEntry;  TopicEntries may either be located in the Actor object, or in one of its ActorStates (if they are specific to that state). A Conversation Node is an object representing a particular point in the conversation when certain responses become meaningful (e.g. when the NPC has just asked the Player Character a question to which the replies `yes` or `no` might be appropriate). Finally, an AgendaItem is an object encapsulating something the NPC wants to say or do when the conditions are right and the opportunity arises.

The reason for using all these different kinds of object is that we can thereby avoid a great deal of complicated 'spaghetti' programming with convoluted if-statement and massive switch statements. By distributing the behaviour of a complex NPC over a great many objects of different kinds, we can make each piece of code quite simple, indeed we can often avoid the need to write any code at all, defining much of the NPC's behaviour purely declaratively. This makes for code that is ultimately easier to write, easier to maintain, and less prone to hard-to-track-down bugs.

## 14.2. Actors

The `Actor` class defines most of the behaviour needed for animate objects (NPCs). NPCs defined with the `Actor` class are non-portable by default (so the player character can't pick them up and take them around). If you need to define any Actor that are portable, perhaps small animals such a cats, mice and rabbits, you could override the `isFixed` property to nil on them (though often the behaviour of such small animals in a work of IF won't really be complex enough to require the use of the Actor class).

The definition of an Actor object can be fairly minimal: we need to specify its `vocab, `including its `name`, and we probably want to give it a description. If it's a person (or gendered animal) we need to remember to indicates its gender by including 'him' or 'her' at the end of its vocab string. If the Actor has a proper name (e.g. 'Bob' rather than 'the tall man' or whatever), then so long as every word in the name section of the vocab string starts with a capital letter, the name will be treated as a proper name (i.e. the library won't precede it with 'a' or 'the' when referring to it), although if we do define what's meant to be a proper name that includes some words not beginning with a capital letter we would need to explicitly define `proper =true` on the Actor. Thus a minimal Actor object definition might look like:
 
    mavis: Actor 'Aunt Mavis;  old frail;  woman;
 her'
    
 
        "Well past her prime, she is now looking distinctly frail. "
    ;

In practice we'd probably want a bit more than that. In particular, we'd probably want to define some handling for custom actions, or at least customize some of the action response messages, e.g.:

 
    mavis: Actor 'Aunt Mavis;  old frail;  woman;
 her' @lounge
 
        "Well past her prime, she is now looking distinctly frail. "
 
        
    shouldNotKissMsg = 'She\'s not of a generation that welcomesoutward

 
        
     shows of affection. '
    cannotEatMsg = 'Whatever else Aunt Mavis is, she is definitely notthat

 
        
    tasty. '
    shouldNotAttackMsg = 'Beating up Aunt Mavis will not encourage herto be

 
        
    generous to you in her will. '; 
If the actor's name can change during the course of play (typically because the player character comes to know the actor better), for example changing from 'The tall man' to 'Bob', then it's also very useful to define the `globalParamName` property. This can be defined as any (single-quoted) string value we like, but it's generally a good idea to make it resemble the actor's name. We can then use this string value in a parameter substitution string. For example, if we gave Mavis a `globalParamName` of 'mavis', we could then refer to her in any messages we write as `'{The subjmavis}
'`, which would expand to 'The old woman' or 'Aunt Mavis' or whatever her current name
property was. This would then enable us to write all our messages about Mavis knowing that they'll use the right name for her whatever the player character knows her as at the point when they're displayed.

To give another example of this:

 
    bob: Person 'tall man; ; ;
 him' @highStreet
    
 
        "He's a tall man, wearing a smart business suit and sporting a
thin
        moustache. "
 
        
     globalParamName = 'bob'
 
        makeProper(properName)
    {
 
        
     addVocab(properName);
 
        return name;

 
        }
  ;

Here, `makeProper() `is a custom method we've just defined. It would allow us to write code like `"<q>Hello, I'm <<bob.makeProper('Bob')>>,</q> heintroduces himself.
"`, which would update his `name` and `vocabWords` properties in line with his self-introduction. Descriptions like `"You see {a bob}
 standing in the
street"` would then change from "You see a tall man standing in the street" to "You see Bob standing in the street".
One further point;
 note that with both the `mavis` object and the `bob` object we defined the initial location of the actor with the `@` symbol in the template. If we're defining an NPC of any complexity (for whom we're going to define quite a few associated objects) it's probably better to put all the code relating to that NPC in a separate source file, rather than nesting it all in the NPC's starting location with the `+` notation (which, with an NPC of any complexity, very quickly becomes `++`, `+++` and `++++`).

We can give an NPC possessions and clothing just like the player character, by locating them just inside the relevant actor object. We can also give an NPC body parts (if we feel we need to) by making them components of the NPC. For example, immediately following the above definition of the `bob` object we might add:

 
    + Fixture 'moustache;  thin'
 
        
    ownerNamed = true
     ;

 
    + Wearable 'suit;  smart business;  clothes[pl]'
 
        wornBy = bob;

 
    + stick: Thing 'walking stick'
 
    ;

We'd no doubt also want to add descriptions for all three of these objects, and maybe some custom messages (e.g. responding to commands like `pull moustache`), but the minimalist code above suffices to demonstrate the principle.

## 14.3. Actor States

NPCs who show any interesting signs of life are likely to be doing different things at different times. Aunt Mavis may stand staring at herself in the mirror, or sit to read a book, or nod off to sleep, or engage in vigorous conversation with the player character. Bob won't stand around in the street forever, he may go into a restaurant to buy lunch, or in another scene he may be seated behind his desk or out playing golf. The way we want to describe an NPC, and the way we want NPCs to respond to what's going on around them, will vary according to what the NPC is up to at the time. To encapsulate this behaviour we use `ActorState` objects, which we locate in the actor object to which they refer. For example:

 
    bob: Person 'tall man' @highStreet
    
 
        "He's a tall man, wearing a smart business suit and sporting a
thin
        moustache. "
 
        
     globalParamName = 'bob'
 
    ;

 
    + bobStanding: ActorState
    isInitState = true
 
        specialDesc = "{The subj bob}
 is standing in the street, looking
in a shop
     window. "
 
        stateDesc = "He's looking in a shop window. "; 
 
    + bobWalking: ActorState
 
        specialDesc = "{The subj bob}
 is walking briskly down the street.
"
    stateDesc = "He's walking briskly down the street. "

 
    ;

The most commonly used properties and methods defined on the ActorState class include:

- `isInitState` -- set to true if this is the ActorState the associated actor starts out in.

- `specialDesc` -- the description of the NPC as it appears in a room description when the NPC is in this ActorState.

- `stateDesc` -- an additional description of the NPC appended to the desc property of the associated actor when the NPC is in this ActorState.

- `getActor()` - the actor with which this ActorState is associated (note, this should be treated as a read-only method;
 we don't use it to associate an Actor with an ActorState but only to find out which Actor is already associated with a particular ActorState).

- `activateState(actor,
oldState)` - this method is executed just as this ActorState becomes active (i.e. becomes the current state for the associated Actor).
- `deactivateState(actor,
newState)` -- called just as the associated Actor is about to switch from this state to *newState*.
In addition ActorState defines the methods `beforeAction()`, `afterAction()`, `beforeTravel(traveler, connector) `and `afterTravel(traveler,connector)`, which have the same meaning as these methods do in sections[ 13.4 ]()and[ 13.5 ]()above, except that they are particular to the ActorState. This allows us to define a different reaction to actions and travel on each ActorState. If we want a common reaction (e.g. Aunt Mavis reacts the same way to the player character yelling no matter what ActorState she's in) we can define it on the actor object, but we must then prepend actor to the method name (e.g. `actorBeforeAction()`, `actorBeforeTravel() `or` actorAfterAction()`) , otherwise we'll break the mechanism that farms these responses out to ActorStates in other cases:
 
    mavis: Person 'Aunt Mavis;  old frail;  woman;
 her'
    @lounge
    
 
        "Well past her prime, she is now looking distinctly frail. "
    actorAfterAction()
  
 
    { 
        if(gActionIs(Yell))
 
        
 
        "Aunt Mavis glowers at you with a look fit to freeze the sun.";
 
        }
    
 
    ;

More usually, we'd define this kind of reaction on the ActorState, for example:

 
    + mavisReading: ActorState
 
        specialDesc = "Aunt Mavis is sitting in her favourite chair,engrossed
        in <i>The Last Chronicle of Barset</i>. "
 
        stateDesc = "She's sitting reading her favourite Trollope novel."
     afterAction()
    
 
    { 
        if(gActionIs(Yell))
 
          
 
        "Aunt Mavis peers over the top of her novel to give you alook
        
        that would have silenced even Mrs Proudie. ";
    
 
        }
;

Or

 
    + bobStanding: ActorState
    isInitState = true
 
        specialDesc = "{The subj bob}
 is standing in the street, looking
in a shop
     window. "
 
        stateDesc = "He's looking in a shop window. "
    afterTravel(traveler, connector)
  
 
    { 
        
        if(traveler == me)
 
     
 
    { 
     
 
        "{The subj bob}
 takes one look at you, and then turns awayand

 
        
        
    starts walking briskly down the street. ";
 
        
    bob.setState(bobWalking);

 
        
     }
 
    }

 
    ;

Note the use of `setState(state)` to change an actor's ActorState to *state*. If we want

to change an actor's ActorState in our code, we should always use this method, and never directly assign a value directly to the `curState` property. We can, however, of course test the `curState` property to find out what ActorState an actor is currently in.

The general rule is that where a method is used to define some behaviour specific to an ActorState, we can define the same method on the Actor, provided we prepend 'actor' to its name, and the actorXXX method will be used as well. But there are one or two exceptions, the most notable being `specialDesc` (defined on the ActorState) and `actorSpecialDesc` (defined on the Actor). The function of `specialDesc` is to provide a description of the Actor's presence in a room description. Normally, how an Actor should be described depends on what its current ActorState is, so the current ActorState's `specialDesc` will be used. It wouldn't make sense to use the `actorSpecialDesc` as well, since that would mean mentioning the same actor twice. However, if the Actor doesn't have a current ActorState (maybe because it's such a simple Actor that it doesn't need ActorStates), then the `actorSpecialDesc` will be used to supply the listing of the Actor in a room description.

Note that you *can* override `specialDesc`, `beforeAction()` and all the rest on the Actor object;
 it's just advisable not to do so, since if you do you'll break their library-defined behaviour and the ActorState mechanism won't work properly.

Actor defines a number of other methods which in one way or another rely on ActorStates, but one other of particular interest is `takeTurn()`. This does a number of things by default (so that if we override it we must be sure to call the `inherited` method unless we're really absolutely sure we don't want it). One of the things it does is call the `doScript()` method of the current ActorState if the ActorState is also an EventList of some kind (provided the actor isn't already engaged in something with a higher priority like an AgendaItem or Conversation Node, on which see below). This means we can can define an ActorState like this:

 
    + mavisReading: ActorState, ShuffledEventList
 
        specialDesc = "Aunt Mavis is sitting in her favourite chair,engrossed
        in <i>The Last Chronicle of Barset</i>. "
 
        stateDesc = "She's sitting reading her favourite Trollope novel."
     eventList = 
 
        [
        'Aunt Mavis turns over another page of her book. ',
 
        
        'Aunt Mavis chuckles to herself. ',
        'Aunt Mavis snorts with disapproval. ',
 
        
        'Aunt Mavis glances over the top of her book at you, as if to
        
     reassure herself that you\'re not disbehaving. '
 
        
    ]
 
    ;

And we'll see one of these 'Aunt Mavis' messages each turn, thus helping to bring Aunt Mavis a little more to life.

## 14.4. Conversing with NPCs -- Topic Entries

The standard form of conversation implemented in the adv3Lite library is the ask/tell model. This handles commands like `ask bob about shopping` or `tell mavis about barchester`. It also handles commands of the form `show gold ring to bob`, `give coin to shopkeeper` and `ask king henry for his crown`.

In TADS 3, the responses to such conversational commands are defined in objects of the `TopicEntry` class, or rather, of one of the various subclasses of `ActorTopicEntry`. We have already met one such subclass, namely `ConsultTopic`, used to look up entries in a `Consultable`. The other `TopicEntry` subclasses work in a similar way, except that they handle conversational commands (of the types we have just seen) rather than attempts to look things up.

The various subclasses of TopicEntry we are immediately concerned with here are:

- `AskTopic` -- the response to a command of the form `ask someone about x`.

- `TellTopic` -- the response to a command of the form `tell someone about x`.

- `AskTellTopic` -- responds to `ask someone about x `or `tell someone about x`.

- `GiveTopic` -- responds to `give something to someone
- `ShowTopic` -- responds to `show something to someone
- `GiveShowTopic` -- responds to `give something to someone` or `show something to someone
- `AskForTopic` -- responds to `ask someone for x
- `AskAboutForTopic` -- responds to `ask someone about x` or `ask someone for x
- `AskTellAboutForTopic` -- responds to `ask someone about x` or `tell someone about x` or `ask someone for x
- `AskTellGiveShowTopic` -- responds to `ask someone about something` or `tell someone about something` or `give something to someone` or `show something to someone`.

- `AskTellShowTopic -- `responds to `ask someone about something` or `tell someone about something` or `show something to someone
- `AltTopic` -- provides an alternative response to any of the others when it's located in it.

In the above list, `someone` is the NPC we're talking with, `something` is generally a Thing (i.e. an object of class Thing implemented somewhere in the game) and `x` can be either a Thing or a Topic. There are also other kinds of TopicEntry, but the ones listed above are quite enough for now.

To define *which* Thing or Topic a TopicEntry relates to we define its `matchObj` property. This can either be a single object (a Thing, or where appropriate, a Topic) or it can be a list of Things (or, where appropriate, Topics, or a mixture of Things and Topics), or it can be a Thing-derived class or a list of Things and/or classes. If it's a list then the TopicEntry will be matched provided any one of the objects in the list match what the player wants to talk about, and provided the player character knows about the object in question (i.e. `gPlayerChar.knowsAbout(x)` is true, where x is the relevant object).

How the NPC responds to the conversational command (or better, the complete conversational exchange) is defined in the `topicResponse` property. This may be defined simply as a double-quoted string to display what is said, or it can be defined as a method to display the conversational command and carry out some related side-effects, e.g.:

 
    + GiveTopic
 
        
    matchObj = coin
        topicResponse()
    
 
    { 
     
 
        "You give {the bob}
 the coin and he accepts it with a curtnod. ";
    

 
        
        
    coin.moveInto(bob);
 
     }

 
    ;

Or in a simpler case:

 
    + AskTopic
 
        
    matchObject = tTrollope
        topicResponse = "<q>Tell me, aunt, do you really think AnthonyTrollope is

 
        
        such a great novelist?</q> you ask.\b
        <q>I find his writing infinitely preferable to your idlechatter,</q> she

 
        
    replies frostily. ";

Since the `matchObj` and `topicResponse` properties of Topic Entries are defined so frequently, the above examples can be written more succinctly using a template:

 
    + GiveTopic @coin
 
        
    topicResponse()
 
    {
 
          
 
        "You give {the bob/him}
 the coin and he accepts it with acurt nod. ";
 
        
     coin.moveInto(bob);
    
 
        
    }
;

 
    + AskTopic @tTrollope
 
     
 
        "<q>Tell me, aunt, do you really think Anthony Trollope is
        such a great novelist?</q> you ask.\b
 
        
    <q>I find his writing infinitely preferable to your idlechatter,</q> she
        replies frostily. "
 
    ;

We can also use a template when the matchObj contains a list of objects, for example if the matchObj for the AskTopic had been:

 
    matchObj = [tTrollope, novel]
We could define the AskTopic as:

 
    + AskTopic [tTrollope, novel] 
 
        "<q>Tell me, aunt, do you really think Anthony Trollope is
 
        
        such a great novelist?</q> you ask.\b
        <q>I find his writing infinitely preferable to your idlechatter,</q> she

 
        
     replies frostily. ";

One slight problem with this AskTopic is that if the player keeps issuing the command `ask mavis about trollope `or `ask mavis about novel` she'll keep giving the same response, which will pretty quickly make her seem either surreal or robotic. If we want to vary her response, we can include an EventList class in the class list of the TopicEntry and define the eventList property instead of the topicResponse property, for example:

 
    + AskTopic, StopEventList
     matchObj = [tTrollope, novel]
 
        eventList =
        [
 
        
     '<q>Tell me, aunt, do you really think Anthony Trollope is
        such a great novelist?</q> you ask.\b
 
        
        <q>I find his writing infinitely preferable to your idlechatter,</q> she
        replies frostily.',
 
        
     '<q>Seriously, aunt, is Trollope that great a novelist?</q>you ask.

 
        
        <q>My English master at school always thought him a bit ofa
        
    second-rate Victorian hack.</q>\b
 
        
        <q>Then you obviously went to the wrong school!</q> youraunt
        replies, visibly bridling. ',
 
        
     'It might be wise to leave that topic alone, before you causeany

 
        
        further offence. '
        ]
 
    ;

Once again, this is sufficiently common that we can write it using a template:

 
    + AskTopic, StopEventList [tTrollope, novel]
 
        [
        '<q>Tell me, aunt, do you really think Anthony Trollope is
 
        
        such a great novelist?</q> you ask.\b
        <q>I find his writing infinitely preferable to your idlechatter,</q> she

 
        
        replies frostily.',
 
        
     '<q>Seriously, aunt, is Trollope that great a novelist?</q>you ask.
        <q>My English master at school always thought him a bit of a 
 
        
        second-rate Victorian hack.</q>\b
        <q>Then you evidently went to the wrong school!</q> youraunt

 
        
        declares, visibly bridling. ',
 
        
     'It might be wise to leave that topic alone, before you causeany
        further offence. ' 
 
        ];

We could use a similar template form with `@tTrollope` (a single `matchObj`) in place of `[tTrollope, novel] `(the `matchObj` list).

Another way to vary the response is to make the availability of certain Topic Entries dependent upon some condition, such as what has been said previously, or some aspect of the game state. We can do that by attaching a condition (or rather an expression that may be either true or false) to the `isActive` property of a Topic Entry. For example, we may want to ask Bob a certain question about the lighthouse only if the player character has actually seen the lighthouse, so we might write:

 
    + AskTopic @lighthouse
 
        "<q>What exactly happened at the lighthouse?</q> you ask.
<q>When I saw
    it, it looked as if someone had tried to set it on fire!</q>\b

 
        <q>It was the troubles,</q> he replies grimly, <q>but you
don't want to
    know about them, you really don't!</q> 

 
    <.reveal bob-troubles>"
 
        isActive = me.hasSeen(lighthouse)
 
    ;

It may that we'd want to ask a different question about the lighthouse if the player character hadn't seen it, so we *could *write:

 
    + AskTopic @lighthouse  "<q>What's this I hear about a lighthouse?</q> you ask.\b
 
        <q>Oh, you don't want to go there,</q> he tells you,
<q>there's nothing
    of interest at all, besides... well, just don't bother with it,
that's 

 
        all.</q> "
 
        isActive = !me.hasSeen(lighthouse);

Then we'd get one response when the player character had seen the lighthouse and another when s/he hadn't.

An alternative would be to make use of a property we haven't mentioned yet, namely `matchScore`. When adv3Lite finds more than one TopicEntry that could match the conversational command the player typed, it chooses the one with the highest matchScore. The default matchScore of a TopicEntry is 100, so we could write:

 
    + AskTopic @lighthouse  "<q>What's this I hear about a lighthouse?</q> you ask.\b
 
        <q>Oh, you don't want to go there,</q> he tells you,
<q>there's nothing
    of interest at all, besides... well, just don't bother with it,
that's 

 
        all.</q> "
    matchScore = 90
 
    ;

The `matchScore` property can also be assigned via the template, using the + symbol and making it the first item, so this could be written:

 
    + AskTopic +90 @lighthouse
 
        "<q>What's this I hear about a lighthouse?</q> you ask.\b
    <q>Oh, you don't want to go there,</q> he tells you,
<q>there's nothing

 
        of interest at all, besides... well, just don't bother with it,
that's
     all.</q> " 
 
    ;

When the player character hasn't seen the lighthouse the first AskTopic can't match (since its `isActive` property evaluates to nil), so we get the second AskTopic response. When the player character has seen the lighthouse both AskTopics match, so the one with the higher `matchScore` wins, and we get the "What exactly happened at the lighthouse?" exchange.

But the best way to handle this case is with an `AltTopic`. To use an AltTopic, we locate it (with a + sign) in the TopicEntry for which it's an alternative response. It will then match whatever its parent TopicEntry matches, but will be used in preference to its parent when its isActive property is true. So, making use of an AltTopic, we'd probably handle the previous example like this:

 
    + AskTopic @lighthouse
 
        "<q>What's this I hear about a lighthouse?</q> you ask.\b
    <q>Oh, you don't want to go there,</q> he tells you,
<q>there's nothing

 
        of interest at all, besides... well, just don't bother with it,
that's
     all.</q> "    
 
    ;

 
    ++ AltTopic
 
        "<q>What exactly happened at the lighthouse?</q> you ask.
<q>When I saw

 
        it, it looked as if someone had tried to set it on fire!</q>\b
    <q>It was the troubles,</q> he replies grimly, <q>but you
don't want to
    know about them, you really don't!</q> 

 
    <.reveal bob-troubles>"
 
        isActive = me.hasSeen(lighthouse)
    ;

Note that we can have as many AltTopics as we like associated with any given TopicEntry;
 the one that will be used is the last one (i.e. the one furthest down in the source file) for which isActive is true.

Note also the `<.revealbob-troubles>` in the topicResponse of the AltTopic. We encountered the reveal mechanism in the chapter on Knowledge, but this is the first time we've seen it used in the situation for which it was principally designed, namely to keep track of what has already been said in a conversation. Just to recap, including `<.reveal *tag*>` in a string cause the string *tag* to be added to the table of things that have been revealed, which we can then test for with `gRevealed('tag')`. We've used the tag 'bob-troubles' here to note that Bob has now mentioned the troubles. This would allows us to write a subsequent AskTopic that should only come into effect once Bob has referred to the troubles in something he's said:

 
    + AskTopic @tTroubles
 
        "<q>What are these troubles you mentioned?</q> you want to
know.\b
    <q>Never you mind, they're best forgotten,</q> he mutters. "

 
        isActive = gRevealed('bob-troubles') ; 
This ensures that the question about the troubles can't be asked until Bob has mentioned the troubles (since the exchange clearly presupposes that Bob *has* previously mentioned the troubles). Of course it doesn't stop the player from typing the command `ask bob about troubles`, but it may be that until Bob mentions the troubles there won't be any matching Topic Entry for this question. Indeed players are likely to try asking and telling our NPCs about all sorts of things for which we haven't provided a specific response. In such a case we ideally need our NPCs to make some vague non-committal response that shows that they're still in the conversation without saying anything positively incongruous. For this purpose adv3Lite defines a special kind of Topic Entry called a `DefaultTopic`. Or rather, adv3Lite defines a range of DefaultTopic classes to handle default responses for a variety of conversational commands:

- `DefaultAskTopic` -- responds to `ask` `about
- `DefaultTellTopic` -- responds to `tell` `about
- `DefaultAskTellTopic` -- responds to `ask about` or `tell about
- `DefaultGiveTopic` -- responds to `give
- `DefaultShowTopic` -- responds to `show
- `DefaultGiveShowTopic` -- responds to `give` or `show
- `DefaultAskForTopic` -- responds to `ask` `for
- `DefaultAnyTopic` -- responds to any conversational command

These various kinds of `DefaultTopic` match any topic or object, but they have low matchScores, so that where a more specific response exists (and is active), it will always be used in preference to the DefaultTopic. There's also a hierarchy among the `DefaultTopic` classes: a `DefaultAnyTopic` has a `matchScore` of 1;  
    DefaultAskTellTopic` and `DefaultGiveShowTopic` have a `matchScore` of 4;
 and the other four have a `matchScore` of 5. This means, for example, that if we have defined a `DefaultAnyTopic`, a `DefaultAskTellTopic`, and a `DefaultAskTopic`, the `DefaultAskTellTopic` will be used in preference to the `DefaultAnyTopic`, and the `DefaultAskTopic` in preference to the `DefaultAskTellTopic`.

Normally the only property we need to define on a DefaultTopic is its `topicResponse`. So, for example, for Aunt Mavis we might define:

 
    + DefaultGiveShowTopic
 
        
    topicResponse = "Aunt Mavis waves {the dobj}
 away with animpatient
        gesture. "
 
    ;

 
    + DefaultAnyTopic
        topicResponse = "Aunt Mavis peers over the top of her book andreplies,

 
        
        <q>Why people feel the need to fill the air with suchpointless noise
        is quite beyond me. Really, if you don't have anything moreimportant 

 
        
        to talk about than that, you should not disturb me withit!</q> ";
    

Once again, we can make these definitions a bit more concise using a template:

 
    + DefaultGiveShowTopic 
 
        "Aunt Mavis waves {the dobj}
 away with an impatient gesture. "
 
    ;

 
    + DefaultAnyTopic 
 
        "Aunt Mavis peers over the top of her book and replies,
 
        
    <q>Why people feel the need to fill the air with such pointlessnoise
        is quite beyond me. Really, if you don't have anything moreimportant 

 
        
    to talk about than that, you should not disturb me with it!</q>";
    

Since players are likely to encounter our DefaultTopics fairly frequently, it's a good idea to vary the response they'll see;  once again, this can help to make our NPCs seem a little less robotic. The way to do this is to add an EventList class (usually ShuffledEventList, in this context) to the DefaultTopic class and define a varied list of default responses in the `eventList` property. This property can again be implicitly defined using the DefaultTopic template, e.g.

 
    + DefaultAnyTopic, ShuffledEventList  [
 
        
    'Aunt Mavis peers over the top of her book and replies,
        <q>Why people feel the need to fill the air with such pointlessnoise

 
        
    is quite beyond me. Really, if you don't have anything moreimportant
        to talk about than that, you should not disturb me with it!</q>',

 
        
    '<q>Can't you see I'm trying to read?</q> she complainsirritably,

 
        
     <q>Really, the manners of people these days!</q> ',
 
        
    '<q>We can discuss that when I'm not trying to read,</q>she suggests. '  ]

 
    ;

We've now covered the basics of using Topic Entries to define conversational responses apart from one rather major point: we've shown how to define Topic Entry objects, but we haven't yet discussed where to put them. Clearly Topic Entries need to be associated with the actor whose conversation they're implementing, and this can be done in one of four ways:

1. Topic Entries can be located directly in their associated actor, in which case

(with certain qualifications) they'll be available whenever the player character addresses that actor.

2. Topic Entries can be located in one of their associated actor's ActorStates, in

which case they will be available only when the actor is in that ActorState.

3. TopicEntries can be located in a `TopicGroup. `They are then available when the

 
    TopicGroup` is active (and its location is available).

4. TopicEntries can be located in a ConvNode, but that's something we'll come to

later.

A `TopicGroup` is basically a way to apply a common `isActive` condition to a group of Topic Entries. Topic Entries within a `TopicGroup` may also define their own individual `isActive` conditions, in which case both the `isActive` condition on the `TopicGroup` and the `isActive` condition on the individual Topic Entry must be true for that individual Topic Entry to be reachable. A TopicGroup can go anywhere a Topic Entry can go, located either in an Actor, or in an ActorState, or in another TopicGroup. In addition to the `isActive` property, TopicGroup defines a `scoreBoost` property which can be used to boost the matchScores of all the Topic Entries in the TopicGroup. For example, if we give a TopicGroup a `scoreBoost` of 10, then any Topic Entry within it which has a default `matchScore` of 100 will have an effective `matchScore` of 110. Apart from the effects of the TopicGroup's `isActive` and `scoreBoost` properties, Topic Entries in a TopicGroup behave just as if they were in that TopicGroup's container (actually a TopicGroup can do other things as well, but we'll get to them when we come to look at a special kind of TopicGroup called a ConvNode).

This may all become a little clearer with a skeletal example:

 
    mary: Person 'Mary; ;  woman;
 her'
 
    ;

 
    + TopicGroup
     isActive = (mary.curState is in (maryWalking, maryTalking))
 
    ;

 
    ++ AskTopic @robert
 
        "blah blah"
 
    ;

 
    ++ TellTopic @tWedding
 
        "blah blah"
 
    ;

 
    + AskTopic @mary  "blah blah"
 
    ;

 
    + maryWalking: ActorState  specialDesc = "Mary is walking along beside you. "
 
    ;

 
    ++ AskTopic @tShopping
    
 
        "blah blah";

 
    ++ TellTopic @robert
  
 
        "blah blah";

 
    ++ TellTopic +10 @robert
  
 
        "blah blah"  isActive = gRevealed('robert-affair')
 
    ;

 
    ++ DefaultAnyTopic  "blah blah"
 
    ;

 
    + maryTalking: ActorState  specialDesc = "Mary is looking at you. "
 
    ;

 
    ++ GiveTopic @ring
 
        "blah blah"
 
    ;

 
    ++ AskTopic @robert  "blah blah"
 
    ;

 
    + marySinging: ActorState  specialDesc = "Mary is busily rehearsing an aria from <i>The
Marriage of

 
        Figaro<i>. " ;

 
    ++ DefaultAnyTopic
    
 
        "You don't like to interrupt her singing. "; 
The TopicGroup directly under Mary is active when Mary is either in the `maryTalking` state or in the `maryWalking` state;
 this is a convenient way to make a group of Topic Entries common to two or more Actor States (but not all of them). Note that there's an AskTopic for Robert defined under both the TopicGroup and the `maryTalking` ActorState;  when Mary is in the `maryTalking` state it's the latter that will be used, since an ActorState's Topic Entries are always used in preference to that of an Actor's. A subtler effect of this is that the DefaultAnyTopic in the `maryWalking` state will render all the Topic Entries in our TopicGroup unreachable when Mary is in the `maryWalking` state. This probably isn't what we want;  one solution is to move the DefaultAnyTopic directly under Mary and then define `isActive = mary.curState ==maryWalking` on it.
## 14.5. Suggesting Topics of Conversation

One thing we don't want is for people playing our game to feel that they're having to play "guess the topic" when they're conversing with our NPCs. We don't want them to become frustrated by reading our default responses dozens of times over while hunting for the few topics we've actually implemented, and we don't want them to miss the topics that are vital to their understanding of the game or the advancement of the plot. It may be that we can avoid all these problems by making it obvious from the context and from our NPCs' previous replies which topics are worth talking about, but it may be we want to give our players a helping hand by suggesting which topics are particularly worth asking or telling about.

We can do this getting adv3Lite to suggest topics of conversation to the player. To do that, all we need to do is to define a `name` property on one or more TopicEntries defining how we want the suggestion described. This should be a (single-quoted) string that could meaningfully complete a sentence like "You could ask Anne about..." or "You could tell Bob about..." or "You could show him..." For example:

 
    + AskTopic @mavis
  
 
        "<q>How are you today, Aunt Mavis?</q> you enquire.\b
    <q>Well enough,</q> she replies. "
 
        name = 'herself'; 
 
    + TellTopic @me
  
 
        "<q>You know aunt, I've been meaning to tell you about..."  name = 'yourself'
 
    ;

 
    + GiveShowTopic  @ring  "<q>That's a nice ring!</q> she declares. "
 
        name = (ring.theName);

 
    + AskForTopic @tMoney
  
 
        "<q>Could you lend me..."  name = 'money'
 
    ;

Suggestions are displayed either when the player character explicitly greets the actor (with a command like `talk to aunt` or `say hello to mavis`) or in response to an explicit `topics` command, or when the game author schedules a display of suggested topics using the `<.topics>` tag in conversational output. Suggestions are only displayed when they're reachable. Normally each TopicEntry will only be suggested once, that is only suggested until the player tries conversing about that topic for the first time. In fact, however, a TopicEntry continues to be suggested until its `curiositySatisfied` property becomes true. By default this is when it has been accessed the number of times defined in its `timesToSuggest` property, and in turn the default value of `timesToSuggest` is 1. But when a SuggestedTopic is combined with an EventList, we may want to suggest the topic more than once. Consider the following

example:

 
    + AskTopic, StopEventList [tTrollope, novel]
 
        [
        '<q>Tell me, aunt, do you really think Anthony Trollope is
 
        
        such a great novelist?</q> you ask.\b
        <q>I find his writing infinitely preferable to your idlechatter,</q> she

 
        
        replies frostily. ',
 
        
     '<q>Seriously, aunt, is Trollope that great a novelist?</q>you ask,
        <q> My English master at school always thought him a bit ofa 

 
        
        second-rate Victorian hack.</q>\b
        <q>Then you evidently went to the wrong school!</q> youraunt

 
        
        declares, bridling visibly. ',
 
        
     'It might be wise to leave that topic alone, before you causeany
        further offence. ' 
 
        ]
     name = 'Anthony Trollope'
 
        timesToSuggest = 2
     isConversational = (!curiositySatisfied)
 
    ;

Here it seems sensible to change `timesToSuggest` to 2, since there are two potentially interesting responses. There's no point in suggesting this topic for the third time, however, since the third response is simply a way of saying "this topic is exhausted". At the same time it seems a good idea to define `isConversational` to return nil once the final response is reached (which is also when curiosity is satisfied), since this third response is indeed not conversational: it doesn't represent a conversational exchange, it simply tells the player why no further conversational exchange on that topic should take place. The practical effect of this is that asking Aunt Mavis about Trollope for the third time won't trigger greeting protocols (which we'll explain just below), which aren't appropriate when no conversation takes place;  in essence, we want to avoid this kind of thing:

 
    >ask aunt about trollope`"Hello there, Aunt!" you declare enthusiastically.

"Oh, it's you again," she replies without enthusiasm.

It might be wise to
leave that topic alone, before you cause any further offence.

Normally the library will decide what to suggest a topic as. For example, if you give an AskTopic a name, it will be suggested as "You could ask Mavis about...", whereas if you give a TellTopic a name, it will be suggested as "You could tell Mavis about...". For some types of TopicEntry, such as AskTellTopic, there's more than one possibility, but then the library will always choose one of them (in the case of an AskTellTopic it will be "You could ask about..."). You can override the library's choice in such a case using the `suggestAs` property;  for example:

 
    + AskTellTopic @ring
 
        "<q>Have you heard anything about a ring -- a special ring?</q>
you ask.\b
    <q>I've heard talk of a magic gold ring -- but it's only
talk,</q> he

 
        replies.
    name = (ring.theName)
 
        suggestAs = TellTopic;

This will make the above TopicEntry be suggested as "You could tell Merlin about the ring". Note that any value you give to a suggestAs property must be one the TopicEntry could match;
 it would have been pointless, for example, define `suggestAs = GiveTopic `on an` AskTellTopic.

Conversely, in a situation like the one above where we want the name of the suggested topic to reflect that of the object it's matching, we could simply define `autoName =true` on the TopicEntry, and let the library work out the name for us; so the previous AskTellTopic could become:

 
    + AskTellTopic @ring  "<q>Have you heard anything about a ring -- a special ring?</q>
you ask.\b

 
        <q>I've heard talk of a magic gold ring -- but it's only
talk,</q> he
    replies.

 
        autoName = true
    suggestAs = TellTopic
 
    ;

This would once again result in "You could tell Merlin about the ring", assuming this AskTellTopic was located in an Actor called Merlin.

## 14.6. Hello and Goodbye -- Greeting Protocols

In real life, people don't generally leap straight into the middle of a conversation and then break it off arbitrarily;  but in Interactive Fiction conversations can all too easily be like that. Adv3Lite tries to avoid this by implementing a scheme of greeting protocols. Not only does this make it possible to begin and end a conversation by saying hello and goodbye in response to explicit player commands, it allows these greeting (and farewell) protocols to be triggered implicitly whenever the player character starts and ends a conversation with an NPC. These greeting protocols are based on a number of special Topic Entry classes used to say Hello and Goodbye:

- `HelloTopic` -- A response to an explicit greeting;
 also used for an implicit greeting response if no `ImpHelloTopic` has been defined.

- `ActorHelloTopic` -- The greeting when an NPC initiates the conversation (see below).

- `ImpHelloTopic` -- response to an implicit greeting

- `ByeTopic` -- A response to an explicit farewell;
 also used for an implicit farewell response if no implicit response has been defined.

- `ImpByeTopic` -- response to an implicit farewell if the relevant more specialized implicit farewell responses (one of the next three classes) hasn't been defined.

- `BoredByeTopic` -- an implicit farewell response used when the NPC becomes bored waiting for the player character to speak (i.e. the NPC's attentionSpan has been exceeded)

- `LeaveByeTopic` -- an implicit farewell response used when the player character terminates the conversation by leaving the vicinity

- `ActorByeTopic` -- a farewell response for the case in which the NPC decides to terminate the conversation.

- `HelloGoodbyeTopic` -- response to either HELLO or GOODBYE

An *explicit* greeting or farewell is one in which the player explicitly types a command such as `talk to bob `or `bob, hello` or `bye`. An *implicit* greeting is one triggered by the player issuing a conversational command (such as `ask bob about shop`) without first issuing an explicit greeting. An *implicit* farewell is one triggered by ending the conversation other than by an explicit `bye` or `say goodbye` command (or the like).

The next issue is where these various kind of hello and goodbye topics should be located. For a very simple actor, one that makes little or no use of ActorStates, you could put them directly in the Actor, along with any other TopicEntries. More usually, however, you will want to put them in the actor's relevant ActorState, not least because the act of saying hello or goodbye may well make the Actor change state;  how Bob should be described when he's talking to the player character is probably different from the way he should be described when he's about his own business, and this difference would normally be reflected by the use of different ActorStates.

The rule is that any greeting topic used at the start of a conversation (`HelloTopic` and its variants) should be located in the ActorState the Actor is in just prior to the conversation, while any greeting topic used at the end of the conversation (`ByeTopic` and its variants) should be located in the ActorState the Actor is in while the conversation is taking place;
 or to state the rule more succinctly, greeting topics should be located in the ActorState that will be active at the point at which they're invoked. So, for example, we might have:

 
    bob: Actor 'Bob;  tall thin;  man;
 him' @street
    
 
        "He's a tall, thin man. "
    ;

 
    + bobLooking: ActorState
 
        isInitState = true
    commonDesc = " standing in the street, peering into a shop window.
"

 
        specialDesc = "Bob is <<commonDesc>>"
    stateDesc = "He's <<commonDesc>>"
;
 
    ++ HelloTopic, StopEventList
 
        [
     '<q>Hello, there!</q> you say.\b
 
        
    <q>Hi!</q> Bob replies, turning to you with a smile. ',
 
        '<q>Hello, again,</q> you greet him.\b
        <q>Yes?</q> he replies, turning back to you. '
 
        ]  changeToState = bobTalking
 
    ;

 
    + bobTalking: ActorState
    attentionSpan = 5
 
        specialDesc = "Bob is standing by the shop window, waiting for you
to
        speak. "
 
        stateDesc = "He's waiting for you to speak. "; 
 
    ++ ByeTopic
 
        "<q>Well, cheerio then!</q> you say.\b
    <q>'Bye for now,</q> Bob replies, turning back to the shop
window.  

 
        changeToState = bobLooking;

 
    ++ BoredByeTopic
    
 
        "Bob gives up waiting for you to speak and turns back to the shop
window. "
    changeToState = bobLooking 

 
    ;

 
    ++ LeaveByeTopic
 
        "Bob watches you walk away, then turns back to the shop window.
";
    

 
        changeToState = bobLooking;

 
    ++ ActorByeTopic
    
 
        "<q>Goodness! Is that the time?</q> Bob declares, glancing at
his watch,
     <q>I'd best be going! Goodbye!</q>\b
 
        So saying, he turns away and hurries off down the street. "
     changeToState = bobWalkingAway
 
    ;

 
    ++ AskTopic @bob
 
        "<q>How are you today?</q> you ask.\b
 
        <q>Fine, just fine,</q> he assures you. ";

There a several additional points to note here. The first is the use of the `changeToState` property on the various greeting topics. This tells the game to change the Actor to the specified `ActorState` when the greeting topic is triggered, so that, for example, any conversational command that triggers the `HelloTopic` while Bob is in the `bobLooking` state will change Bob to the `bobTalking` state, while the `ByeTopic`, `BoredByeTopic` and `LeaveByeTopic` will put Bob back into the `bobLooking` state. The `ActorByeTopic`, however, would put him into a new `bobWalkingAway` state (not shown here).

The `ByeTopic` would be triggered by an explicit BYE command. The `LeaveByeTopic` would be triggered by the player character walking away in the middle of the conversation. The `ActorByeTopic` would be triggered by Bob deciding to end the conversation for some reason of his own. To make the actor terminate the conversation in this way we can simply call `endConversation(reason)` on the actor object, e.g.:

 
    bob.endConversation(endConvActor);

Here `endConvActor` means that the Actor has chosen to end the conversation. The other possible values for the *reason* parameter are `endConvBye` (the player character said goodbye), `endConvTravel` (the player character left the vicinity) and `endConvBoredom` (the Actor became tired of waiting for the player character to speak), but we seldom need to call `endConversation()` with any of these three other values of *reason*, since the library will do this for us as and when appropriate.

This leaves us with the `BoredByeTopic` (corresponding to `endConvBoredom`). This is triggered by the Actor having to wait too long for the player character to speak, or to put it a bit more precisely, by the number of turns since the player last issued a conversational command exceeding the actor's `attentionSpan`. The `attentionSpan` in question is that defined on the current ActorState, or, if there is none, on the Actor. The default value of nil means the Actor never gets tired of waiting;  a numerical value would define the number of turns until the Actor gives up on the conversation.

## 14.7. Conversation Nodes

There come points in a conversation when a particular set of responses become appropriate that wasn't appropriate before, and soon won't be appropriate again. Generally this happens when the other party to the conversation asks a question, or else makes a statement that demands (or invites) a particular type of response. If Bob asks "Would you like me to show you to the lighthouse?" it becomes relevant to reply `yes` or `no`, although neither of those responses would be appropriate if interjected into some random point in the conversation, and their significance would be somewhat altered if offered in response to a different question such as "Are you sleeping with my wife?".

To model such points in a conversation adv3Lite uses Conversation Nodes. These are objects of the `ConvNode` class. A `ConvNode` is like a `TopicGroup` in that we can put a number of Topic Entries in it, but it is used a little differently (although in adv3Lite `ConvNode` is in fact a subclass of `TopicGroup`).

At its simplest, the definition of a ConvNode object can be very simple indeed:

 
    + ConvNode
     convKeys = 'node-name'
 
    ;

This can be made even more compact using the ConvNode template:

 
    + ConvNode 'node-name'; 
Here 'node-name' can be any string we like (so long as it doesn't contain the character '>'), but it must be unique among the names we give the ConvNodes (or other convKeys) for any particular actor. Following the ConvNode, and located within it, we put the Topic Entries that are relevant when the ConvNode is active:

 
    + ConvNode 'lighthouse'; 
 
    ++ YesTopic
 
        "<q>Yes, I would like you to show me the lighthouse,</q> you
say.\b

 
        <q>Right;
 I can't take you there now. Come back and meet mehere at six,</q>
     he tells you. "
 
    ;

 
    ++ NoTopic  "<q>No, I've been warned that the lighthouse is not a good place
to visit,</q>

 
        you reply.\b
    <q>Very well,</q> he shrugs. "
 
    ;

ConvNodes can be more complicated that this, and we'll look at the complications shortly. But the next question to address is how we get the conversation into a particular ConvNode. We do so by outputting a special tag, either `<.convnodename>` or `<.convnodet
name>`, where *name* is the name (technically the convKeys property) of the ConvNode we want to activate. The only difference between `<.convnode
x>` and `<.convnodet
x>` is that the latter is a convenient shorthand for `<.convnode
x> <.topics>`; in other words it both activates the Conversation Node and then displays a list of suggested available topics.

So, for example, to activate the 'lighthouse' `ConvNode` shown above we'd typically do something like this:

 
    ++ AskTopic @lighthouse
    
 
        "<q>What's this I hear about the lighthouse?</q> you ask.\b
     <q>It's easier to explain if you see it for yourself,</q> hereplies.

 
        <q>Would you like me to show you thelighthouse?</q><.convnode lighthouse> ";
    

In this case, when we enter the ConvNode, the game has just displayed the question to which yes or no (the responses defined in the ConvNode) are the obvious possible answers.

This example shows how we use the `<.convnode>` tag by including it in a string of text to be displayed. This is how we always use it, but it does not follow that a `<.convnode>` tag can be used anywhere. This is partly because the library has to know which actor's Conversation Node is being invoked, and partly because the library has to do certain pieces of housekeeping behind the scenes to make the Conversation

Node mechanism work properly, and can only do that if the use of `<.convnode>` and `<.convnodet>` tags is restricted to predictable contexts. In particular, there are only four contexts in which they are guaranteed to work as expected:

- In the topicResponse() method of a TopicEntry (as shown above)

- In the eventList property of a TopicEntry (in one of the elements of the list)

- In the invokeItem() method of a ConvAgendaItem (which will be explained later in this chapter)

- In a string used as the argument to the `actorSay(str)` method of Actor (which method exists largely for this very purpose).

The last of these can be used, for example, to trigger a conversation in an `afterAction()` or `afterTravel()` method, for example:

 
    bobStanding: ActorState
 
        specialDesc = "Bob is standing in the street, looking in a shop
window. "
    afterTravel(traveler, connector)

  
 
    { 
        inherited(traveler, connector);

 
        
     if(traveler == me)
        
     bob.actorSay('Bob turns to greet you. <q>Hello,there!</q>

 
        
        
        he says. <q>I\'ve been thinking -- would you like to
        
        
    come and see the lighthouse?</q> <.convnodelighthouse>

 
        
        
     <.state bobTalkingState>');     }

 
    ;

This, incidentally, illustrates the use of another tag, the `<.statex>` tag which can be used to change an actor's ActorState to x;  precisely the same limitations on its use apply as to the `<.convnode x>` tag.
As we've defined this ConvNode so far, it will last only until the player makes some conversational response. That response could be any conversational command, not just the yes or no Bob's question expects. If we want an NPC to insist on receiving a reply to his question, we have to do a bit more work. In particular, we have to supply one or more DefaultTopics that will handle all topics other than those that constitute a reply to the NPC's question (otherwise the Topic Entries available in the NPC's current ActorState, plus also perhaps any defined directly in the Actor, will also be available). The easiest way to handle this is to define a single DefaultAnyTopic (also located within the ConvNode) to field all the conversational responses other than the ones we have specifically catered for, perhaps combining it with a ShuffledEventList to vary the responses:

 
    ++ DefaultAnyTopic, ShuffledEventList
 
        [
        '<q>Don\'t try to change the subject, I asked you if you wantme to

 
        
     show you the lighthouse,</q> Bob replies. <q>So, doyou?</q><.convstay> ',

 
        
    '<q>That doesn\'t answer my question,</q> he complains.<q>Do you want
        me to take you to the lighthouse?</q><.convstay> ',
 
        
    '<q>I asked you if you wanted me to show you thelighthouse,</q> he
        reminds you. <q>Do you?</q><.convstay> '
 
        ];

Note the use of the `<.convstay>` tag here. This is used to tell the system *not* to leave the current ConvNode when the item in which it occurs is triggered. We thus need to include it in each of the responses in the DefaultAnyTopic to ensure that all of them keep the current ConvNode active.

Note that there's no law that says that a ConvNode *has* to have a DefaultAnyTopic, or that if it does it always has to use a `<.convstay>` tag. For example, if an Actor asks a question that might be taken as a rhetorical one, we could have it set up a ConvNode to field a YES or NO response if the player chooses to give one, but which otherwise lets the moment pass if the player prefers to talk about something else. Again, even if we do include a DefaultAnyTopic, it doesn't have to use a `<.convstay>` tag;  it could instead have the NPC complain about the player character's attempt to change the subject and then move the conversation on. We do, however, need to use the `DefaultTopic/<.convstay>` mechanism if we want the ConvNode to remain active until the player chooses one of the TopicEntries we've explicitly defined for that ConvNode.

In such a case, we may well want our NPC to keep insisting on an answer if the player insists on entering a series of non conversational commands (such as I, LOOK, X BOB, THROW BALL AT VASE) while the NPC is waiting for an answer. To do that we can define a `NodeContinuationTopic`, which is again located within the ConvNode it's designed to continue, for example:

 
     ++ NodeContinuationTopic: ShuffledEventList
  
 
    { 
     [
 
        
        '<q>I asked you a question,</q> Bob reminds you. <q>Doyou want me to
        
     show you the lighthouse?</q> ',
 
        
        '<q>I didn\'t think I\'d asked a particularly difficultquestion,</q>

 
        
        Bob remarks. <q>Do you want me to show you the lighthouseor don\'t
        
     you? A simple yes or no will do!</q> ',
 
        
        '<q>I\'m still waiting for your answer,</q> says Bob.<q>Do you want

 
        
        me to take you to the lighthouse, yes or no?</q> '
        ]
 
        
    eventPercent = 67
    }

 
    ;

In this example we used a `ShuffledEventList` to vary Bob's 'nag' message, and defined `eventPercent =67` so that the 'nag' message would only appear on average on two turns out of three.
There's one more aspect we may want to control if we're defining a ConvNode where our NPC is insisting on an answer. In principle the player could frustrate the NPC's insistence by ending the conversation, either by saying BYE or by walking away or by waiting until the NPC exhausted its `attentionSpan`. To control what happens in such cases we can define a `NodeEndCheck` object to go in our ConvNode, and define its `canEndConversation()` method to determine what should happen in such cases:

 
    ++ NodeEndCheck
 
        canEndConversation(reason)
    {
 
        
     switch(reason) 
 
    {
 
        
        case endConvBye:
        
 
        "<q><q>Goodbye</q> isn't an answer,</q> Bobcomplains. <q>I asked

 
        
        
        if you wanted me to show you the lighthouse;
 doyou?</q>";
 
        
        return blockEndConv;
    
 
        
        case endConvTravel:
 
        
        
 
        "<q>Hey, don't walk away when I'm talking toyou!</q> Bob complains.
        
        <q>I asked you a question! Do you want me to take you tothe

 
        
        
        lighthouse?</q> ";
 
        
        return blockEndConv;

 
        
        default:
 
        
        
        return nil;
 
        }

 
        }
;

The `canEndConversation(reason)` method should return true to allow the conversation to end, or nil to prevent it. Returning `blockEndConv`, as do two of the branches of the switch statement in the above example, also prevents the conversation from ending but additionally tells the game that the actor has conversed on this turn. This prevents the game from trying to make the actor carry out any additional conversation on the same turn, such as displaying one of the items from the `NodeContinuationTopic`, which would look superfluous immediately following Bob's responses to attempts by the player character to say goodbye or walk away.

Incidentally, you can also define `canEndConversation(reason)` on an ActorState to control whether conversation can end while the actor is in that state, or `actorCanEndConversation(reason) `on the Actor object to determine if the Actor will allow the conversation to end independently of state.

One last point: we've emphasized the use of the `<.convstay>` tag to make sure that a conversation remains at a particular node when we don't want to leave it, but it can, of course, be equally useful to use a `<.convnode>` or `<.convnodet>` in one ConvNode's TopicEntries to change to a different ConvNode, perhaps thereby setting up a threaded conversation that passes through a number of different ConvNodes, each of which offers the player a number of options relevant to the particular point in the conversation that has been reached.

## 14.8. Special Topics -- Extending the Conversational Range

In the Conversation Node example above we gave the player the option of replying YES or NO;
 anything else was treated as an attempt to change the subject. Within the ask/tell system we have seen so far we could have implemented other options, such as ASK BOB ABOUT THE TROUBLES or TELL BOB ABOUT YOUR PHOBIA or even ASK BOB FOR ADVICE, but there's a limit to the expressiveness of such conversational commands. For example, when we ASK BOB ABOUT THE TROUBLES, so we want to know when they started, or how long they lasted, or why they were so terrible, or what they were about? Of course, *not* allowing the player to specify which is meant can have its advantages, since the game author can then control how the question is meant and how it should be answered, making it easier to script the conversation. But sometimes we may want to give the player some more expressive options, and to do that we can make use of SpecialTopics.

Or rather, we can make use of one of the two subclasses of SpecialTopic defined in the adv3Lite library: `SayTopic` and `QueryTopic `(we don't use SpecialTopic directly). The first of these allows the player to say almost anything we like (within reasonable length);  the second extends the range of questions that can be asked to ASK WHO/WHAT/WHY/WHERE/WHEN/HOW/IF such-and-such.

We can define a `SayTopic` in one of two ways. The first is to define a Topic object (or use one we've already defined) to give the vocab for what the player character can say. For example, to let the player character say he's afraid to go, you could define:

 
    tAfraidToGo: Topic 'you\'re afraid to go;  you are i\'m i am'; 
The corresponding SayTopic can then be defined simply as:

 
    + SayTopic tAfraidToGo
 
        "<q>I'm afraid to go to the lighthouse, after what I'veheard,</q>

 
        
    you confess.\b
        <q>You shouldn't believe all those scare stories and old wives'tales,</q>

 
        
    Bob chides you. ";

This will then respond to `say you're afraid`. Because of the way we've defined the vocab property of tAfraidToGo it will also respond to most of the obvious variants, such as `say you are afraid`,` say I'm afraid, `and` say I am afraid`. In fact, it will even work if the player omits the say and just types `i'm afraid`.

We may think that the way the tAfraidToGo's vocab property is defined here is a bit too liberal here, since the SayTopic could even respond to just `are` or `am`. This might be a case where it would be helpful to mark such auxiliaries as weak tokens, so that the word 'afraid' has to appear in the player's input for the SayTopic to be triggered:

 
    tAfraidToGo: Topic '(you\'re) afraid (to) (go);  (you) (are)
(i\'m) (i) (am)';     

This general approach is fine if we're going to use the tAfraidToGo Topic elsewhere in our game, but if we're having to define it just for the purposes of this one SayTopic then it may seem a bit laborious to have to go through the additional step of doing so. Adv3Lite therefore lets us define such a Topic along with the SayTopic all in one go, like this:

 
    + SayTopic '(you\'re) afraid (to) (go);  (you) (are) (i\'m) (i)
(am)'

    
 
        "<q>I'm afraid to go to the lighthouse, after what I'veheard,</q>
        you confess.\b
 
        
    <q>You shouldn't believe all those scare stories and oldwives' tales,</q>
        Bob chides you. "
;
By default a SayTopic will always be suggested (since the player can hardly be expected to guess the syntax), using the name property of its associated Topic as its own `name` property (in other words, a SayTopic has `autoName =true` by default). By default the form of the suggestion will be "You could say [topic name]". In some cases, though, you may want to exclude the 'say' from the name of the suggestion, which you can do by setting `includeSayInName` to nil. For example:
 
    + SayTopic 'be evasive'
    
 
        "<q>You mumble something incoherent about keepingconfidences...</q>"
     includeSayInName = nil
 
    ;

Such a topic would be suggested in the form "You could be evasive".

There are some restrictions on what kind of text can match a SayTopic without an explicit SAY however. These arise from the fact that the parser will attempt to match player input to an ordinary command before it tries it as an attempt to say something. Thus if the player types `take me` (for example), it will never be interpreted as `say take me`. Usually this isn't too much of a restriction in practice, but we may run up against it occasionally.

For example, suppose we wanted one possible response in a ConvNode to be `tell the truth`. We can't define this as a SayTopic with vocab 'tell the truth' and an autoName of nil, since the input `tell the truth` will be parsed as a TELL command before it's ever tried as a SAY command. In this case we should need to define a Topic matching 'truth' and then use a TellTopic to field the response:

 
    + TellTopic @tTruth
    
 
        "<q>Well, to tell the truth,</q> you begin... "
     autoName = true
 
    ;

 
    tTruth: Topic 'truth'
And so on for any other conversational commands beginning `tell` such as `tell a white lie`.

A `QueryTopic` is like a SayTopic, except that it's used to ask a question. Just as with a SayTopic the question asked can either be defined on a separate Topic object, or defined in-line with the QueryTopic. In addition, however, we have to define what type of question we're asking: who, what, why, how, when, if or whether. This is defined on a separate property call `qType`, which makes it easier for the parser to recognize and match such questions, although we'd normally define this property implicitly through the QueryTopic template. So, for example, if we want to be able to ask Bob where the lighthouse is, we could do it like this:

 
    + QueryTopic 'where' @tLighthouseIs
    
 
        "<q>Where is the lighthouse, anyway?</q> you ask.\b
        <q>On the promontory, overlooking the cove,</q> he replies."

 
    ;

 
    tLighthouseIs: Topic 'lighthouse[n] (is)'; 
Or all in one like this:

 
    + QueryTopic 'where' 'lighthouse[n] (is)'
 
        "<q>Where is the lighthouse, anyway?</q> you ask.\b
 
        
    <q>On the promontory, overlooking the cove,</q> he replies."`;
Or even, if we prefer, by merging the qType into the topic's vocab property (although the library will then separate them out again for us):

 
    + QueryTopic 'where lighthouse[n] (is)'
 
        "<q>Where is the lighthouse, anyway?</q> you ask.\b
 
        
    <q>On the promontory, overlooking the cove,</q> he replies."`;
All three of these forms will respond to `ask bob where the lighthouse is `or `ask where the lighthouse is `or even just `where is the lighthouse`. Since the player may use the third form you'll often need to provide extra vocab words to cater for it, for example:

 
    + QueryTopic 'where' 'you are;  am I'
 
        "<q>Where am I?</q> you ask..."
 
    ;

This will respond to either `ask where you are `or `where am I `(along with a number of other variants).

Like SayTopic, QueryTopic has an autoName of true by default, so you'll generally want to arrange things such that the name part of the associated Topic's vocab property makes sense in a suggestion like "You could ask where [topic name]".

Finally, you can make a QueryTopic match more than one qType word by separating the alternatives with a vertical bar;
 this is most useful with 'if' and 'whether', for example:

 
    + QueryTopic 'if|whether' 'he saw the troubles for himself;  you
    see'

    
 
        "<q>Did you see...</q> ";

We add 'you see' to the vocab here, since this QueryTopic could then indeed match `did you see the troubles`.

Although we began this section by talking about possible responses in a Conversation Node, SpecialTopics and QueryTopics are by no means restricted to Conversation Nodes;
 they can be used anywhere any other conversational TopicEntry can be used.

## 14.9. NPC Agendas

Most of what we have seen so far has been about how we can make NPCs react to what the player character is doing. But our NPCs may seem more realistic if we can make them pursue their own agendas. We can do this with the `AgendaItem` class. By defining AgendaItems for our NPCs we can have them carry out certain actions as and when certain conditions become true, for example:

 
    + bobWanderAgenda: AgendaItem
        isReady = (bob.curState == bobWalking)
 
        
     initiallyActive = true
        agendaOrder = 10
 
        
        
        invokeItem()
 
    {
 
        
 
        "Bob wanders off down the street and disappears round acorner. ";
    

 
        
        getActor.moveInto(nil);
 
        }

 
    ;

 
    + bobAngryAgenda: AgendaItem
 
    isReady = (bob.canSee(mavis))
 
    invokeItem()
 
     
 
    {
 
          
 
        "<q>You hypocritical old woman!</q> Bob storms at Mavis.<q>You sit
        
        there like some stern old maiden aunt, but I know just whatyou

 
        
        
     were in your youth -- you were a <i>trollope</i>! ";

 
        isDone = true;

 
        
     }
;

The first of these, `bobWanderAgenda`, is initiallyActive, so it will fire as soon as its `isReady` property becomes true (which is when Bob enters the `bobWalking` state). While this AgendaItem is ready, its `invokeItem()` method will be called each turn until its `isDone` property becomes true (which, in this case, is at once), whereupon the AgendaItem will be removed from Bob's `agendaList`. In this example the invokeItem() method makes Bob walk away (and then leave the game map). The `bobAngryAgenda `is not initially active, however, so it won't do anything at all until we add it to Bob's `agendaList`, which we can do by calling `bob.addToAgenda(bobAngryAgenda)`.  Once we've done this, bobAngryAgenda's

 
    invokeItem()` method will be called as soon as Bob can see Mavis, with one proviso: only one AgendaItem can fire for a given actor on any one term, so if Mavis should happen upon Bob while bobWanderAgenda is about to send Bob on his walk, Bob will simply walk away and ignore Mavis. The reason is that we have given bobWanderAgenda an `agendaOrder` of 10, much lower than the default value of 100, and that in cases where more than one AgendaItem is ready on a single term, the one with the lowest `agendaOrder` is the one that's used.

There's one further point to bear in mind here: bobAngryAgenda displays some text in its `invokeItem()` method. This is fine if the player character can see what Bob is doing, but might be inappropriate if the player character is in a completely different location when the AgendaItem is invoked. If we want an AgendaItem to display some text only if the player character can see its actor, we can use the `report()` method (note, this is a method of AgendaItem, not a generally available function), for example:

 
    + bobWanderAgenda: AgendaItem
 
        
     isReady = (bob.curState == bobWalking)
        initiallyActive = true
 
        
     agendaOrder = 10
 
        
     invokeItem()
 
    {
 
        
        report('Bob wanders off down the street and disappears rounda
        
        corner. ');     
 
        
        getActor.moveInto(nil);
 
        }

 
    ;

To summarize so far: to make it possible for an AgendaItem to be activated it either needs to start out active (with `initiallyActive` set to true) or else be added to its actor's `agendaList` by calling its actor's `addToAgenda(item)` method (where *item* is the AgendaItem in question). AgendaItems should be located directly in the actor to which they relate. The most commonly important properties and methods of AgendaItem are:

- `agendaOrder `-- the priority of this AgendaItem;
 the lower the agendaOrder, the higher the priority;
 the default value is 100.

- `initiallyActive` -- set to true if this AgendaItem should be added to its actor's agendaList at the start of the game.

- `isDone` -- set this to true when the AgendaItem has finished doing whatever it needs to do;
 the AgendaItem will then be removed from its actor's agendaList.

- `isReady` -- this should become true when we want the invokeItem() method to be called. Usually we define this as a method or expression that becomes true when the appropriate conditions obtain, but we could also set its value from an external method.

- `getActor()` - returns the actor with which this AgendaItem is associated.

- `invokeItem()` - this method should contain the code we want to execute once isReady becomes true.

- `resetItem()` - this method is automatically called when we add this item to its actor's agendaList;  its function is to reset isDone to nil provided isDone is a simple true/nil value and not code that returns a value;  the purpose is to allow us to reuse an AgendaItem without having to reset the isDone flag explicitly.

There are also two special kinds of AgendaItem we can use: `DelayedAgendaItem` and `ConvAgendaItem`. A `DelayedAgendaItem` is simply an AgendaItem that becomes ready so many turns in the future. We can add a DelayedAgendaItem to an actor's agendaList and set the delay at the same time by calling:

 
    actor.addToAgenda(myDelayedAgendaItem.setDelay(*n*));

Where *n* is the number of turns in the future at which we want  `myDelayedAgendaItem `to become ready. If we want to impose an additional condition, e.g. we want Bob to be able to see Mavis as well, we must combine this with `inherited`:

 
    + bobDelayedAngerAgenda: DelayedAgendaItem
     isReady = (inherited && bob.canSee(mavis))
 
        ...;

A `ConvAgendaItem` is one that becomes ready when (a) the actor can speak to the player character and (b) the player character hasn't conversed with the actor this turn. We can use this to allow an actor to pursue his or her own conversational agenda once he or she gets a chance to get a word in edgeways. If we want the actor to try to converse with some other NPC, we can change the `otherActor` property of the ConvAgendaItem to that other NPC (it's the player character by default). If we want an AgendaItem to be both a ConvAgendaItem and a DelayedAgendaItem, we can just list both of these in the class list, e.g.:

 
    + bobDelayedAngerAgenda: DelayedAgendaItem, ConvAgendaItem
     isReady = (inherited && bob.canSee(mavis))
 
        ...;

We'll say a bit more about ConvAgendaItem in the next section;  in the meantime, for more information about AgendaItems look up AgendaItem in the *Library Reference Manual*.

## 14.10. Making NPCs Initiate Conversation

We've now met a number of ways in which we can make an NPC initiate conversation.  We could just use a Fuse or Daemon and have it display the text of what we want the NPC to say (preferably via the `actorSay()` method of the NPC in question). Or we can use actorSay() in the `afterAction()`, `beforeAction()`, `afterTravel()` or `beforeTravel()` method of an ActorState (remembering to call it on the Actor).  Or we can use an AgendaItem, or better, a `ConvAgendaItem`. Or we can use a mechanism we've not yet met, namely calling the actor's `initiateTopic(obj)` method.

Often, the best place to start will be with a `ConvAgendaItem`, since this already checks that the NPC is in a position to converse with the player character and that they haven't already conversed on that turn. If we want to build in a delay we can simply add DelayedAgendaItem to the class list, as we've already seen. If we want to add further conditions to when the NPC should make his or her conversational gambit we can either do so by defining `isReady = (inherited &&ourExtraConditions)` or by waiting until we're ready before adding the ConvAgendaItem to the NPC's agendaList. The question is then what to put in the ConvAgendaItem's `invokeItem()` method. We can basically just display some text, particularly if we just want the NPC to make a remark which doesn't require any particular response on the part of the player character. For example:
 
    + bobLighthouseAgenda: ConvAgendaItem
 
        isReady = (inherited && bob.canSee(lighthouse))
     invokeItem()
    
 
    {    
 
        "<q>Look! There's the lighthouse!</q> Bob declares. "; 
 
        
        isDone = true
     }

 
    ;

If, in addition, we want the actor to change state and/or enter a Conversation Node we can use a `<.state newState>` tag and/or a `<.convnodenode-name>` or `<.convnodet
node-name>` tag (the last of these also displays a list of suggested topics). As an alternative to using a `<.state
newState>` tag we could call `getActor.setState(newState)`. For example:
 
    + bobLighthouseAgenda: ConvAgendaItem
 
        isReady = (inherited && bob.canSee(lighthouse))
     invokeItem()
    
 
    {    
 
        "<q>Look! There's the lighthouse!</q> Bob declares.<q>Shall we go 

 
        
        in?</q> <.convnode enter-lighthouse> <.statebobByLighthouseState>";
 
        isDone = true
 
        }
;

There are three slightly different situations in which a `ConvAgendaItem` might be triggered:

1. No conversation is currently in progress and the NPC is starting one.

2. A conversation is in progress and the NPC is taking advantage of a lull in the

conversation (i.e. a turn on which the player does not enter a conversational command) to pursue its own conversational agenda.

3. The player enters a conversational command for which there's no specific

response and the response is handled by a `DefaultAgendaTopic`.

We may wish to vary what the NPC says according to which of these situations obtains when the `ConvAgendaItem` is triggered. We can do this by checking the value of its `reasonInvoked` property, which will be one of `InitiateConversationReason` (the NPC is starting a new conversation from scratch), `ConversationLullReason` (the NPC is taking an advantage of a lull in the conversation) or `DefaultTopicReason` (the NPC is using a default response to change the subject). So, for example, the previous `ConvAgendaItem` could become:

 
    + bobLighthouseAgenda: ConvAgendaItem
 
        isReady = (inherited && bob.canSee(lighthouse))
     invokeItem()
    
 
    { 
        if(reasonInvoked == DefaultTopicReason)
 
        
        
 
        "<q>Never mind that now, that's the lighthouse justover there.</q>
        
        Bob interrupts. ";
    
 
        
        else
        
 
        "<q>Look! There's the lighthouse!</q> Bob declares.";     

 
        
 
        "<q>Shall we go in?</q> <.convnode enter-lighthouse>
        
        <.state bobByLighthouseState>";

 
        
        isDone = true
     }

 
    ;

A `DefaultAgendaTopic` can be used in place of the normal kinds of DefaultTopic to allow the NPC to seize the conversational agenda when the player enters a conversational command that's not dealt with by some more specific kind of TopicEntry. This may often be better than a bland default reply, and can be used to create a more pushy NPC determined to pursue his or her own conversational agenda by changing the subject as soon at the player tries to talk about something the NPC isn't immediately interested in. A `DefaultAgendaTopic` is only active if it has something in its `agendaList`, so although you'd use it like any other kind of DefaultTopic, you'd also want to define one or more other kinds of DefaultTopic to field the conversational commands the `DefaultAgendaTopic` will ignore when it has no AgendaItems to trigger. It's also conceivable that a DefaultAgendaTopic will have items in its agendaList that are not due to be executed, so it's a good idea to define a default response on a `DefaultAgendaTopic` to be used in such a situation. Typically,

then, you might define a `DefaultAgendaTopic` like this:

 
    + DefaultAgendaTopic
 
     
 
        "Bob merely grunts in reply. ";

Note that we referred to the `DefaultAgendaItem`'s agendaList. This is kept separately from the Actor's agendaList (the list of AgendaItems waiting to be executed), since there may be items in the latter that aren't suitable in the former;  in particular it will usually make sense for a `DefaultAgendaItem` to trigger only `ConvAgendaItems` and not ordinary `AgendaItems`. The Actor's `addToAgenda(item) `method adds item only to the Actor's agenda. To add item to the Actor's ConvAgendaItem's agenda as well, use either `addToAllAgendas(item)` (called on the Actor) or the tag `<.agendaitem> `(which can be used in contexts where a `<.convnode>` tag would be legal).
There's one further way we can make NPCs take some conversational initiative, and that's through `InitiateTopic` objects. An `InitiateTopic` is a kind of TopicEntry, and we can use it just like any other kind of TopicEntry. The difference is that an `InitiateTopic` is not triggered by any player command, but by the actor's `initiateTopic(obj) `method, which will trigger the `InitiateTopic` (if one exists) whose `matchObj` is *obj* (or contains *obj* in its `matchObj` list). For example, suppose we have an NPC who comments on some of the locations as she visits them for the first time. We could implement this as follows:

 
    + sallyFollowing: ActorState
     specialDesc = "Sally is at your side. "
 
        arrivingTurn() { sally.initiateTopic(sally.getOutermostRoom);
 }
;

 
    ++ InitiateTopic, EventList @forest
 
        [
        '<q>What a gloomy place!</q> Sally declares. '
 
        ];

 
    ++ InitiateTopic, EventList @meadow
 
        [
        '<q>Look at the tower, over there!</q> Sally tells you,pointing to

 
        
     the north. '
    ]
 
    ;

Here we've made the InitiateTopics EventLists as well so that Sally's comments will only be displayed the first time she enters each location alongside the player character.

## 14.11. Giving Orders to NPCs

In Interactive Fiction it's common for players to be able to give commands to NPCs, like `bob, go north` or `mavis, eat the cake`. By default adv3Lite will respond to all such commands with "Bob has better things to do" (or whichever NPC it is that refuses your request). We should now give a little thought to how we can change this, either to make an NPC obey a command, or to customize his or her refusal.

The method that determines what an NPC will do with a command is `handleCommand(action)`, where *action* is the action that* *the player wants the NPC to perform. Normally, however, this should just be left to get on with its job, which is to rule out system actions (it doesn't make sense to issue a command like `bob, undo`), and translate various others (e.g. `bob, give me the cake` is turned into `ask bob for cake`). If it's not one of the actions that need translating (and most don't), then `handleCommand()` will attempt to find a `CommandTopic` to handle it, so it is through the use of `CommandTopics` that we mostly determine how an NPC will respond to orders. If we don't define any `CommandTopics` at all, or there's no `DefaultCommandTopic` to handle the particular command that's just been issued, then the fall-back position is to display the actor's `refuseCommandMsg`, which by default simply says something along the lines of "Bob has better things to do."

We could, of course, use a different message here if we wanted to, and this would be the simplest way to customize the way in which an actor responds to commands;
 for example:

 
    mavis: Actor 'Aunt Mavis;  old;  woman;
 her'
 
        refuseCommandMsg = '<q>Don\'t you tell me what to do, young
man!</q>
        she snaps. '
 
        ;

We can customize the NPC's reaction to commands by defining `CommandTopic` entries, which work just like other Topic Entries except that they match on action classes rather than game objects or topics. For example, we could customize Bob's response to `bob, jump` by defining a `CommandTopic` like this:

 
    + CommandTopic @Jump
 
        "<q>Jump!</q> you cry.\b
 
        <q>No -- go jump yourself!</q> he replies. ";

Alternatively, we could make Bob carry out the command by calling the method `nestedActorAction()` in the topicResponse():

 
    + CommandTopic @Jump
    topicResponse()
  
 
    {  
 
        "<q>Jump!</q> you cry.\b";

 
        
     nestedActorAction(bob, Jump);
    }

 
    ;

But where we just want the actor to obey the command as issued, it's easier just to set the CommandTopic's `allowAction` property to true:

 
    + CommandTopic @Jump
 
        "<q>Jump!</q> you cry."
 
        allowAction = true;

We can also define a `DefaultCommandTopic` to catch all the commands we haven't written specific CommandTopics for;  for example, as an alternative to overriding defaultCommandResponse() on Mavis we could give her a DefaultCommandTopic:

 
    + DefaultCommandTopic
 
        "<q>Don't you tell me what to do, young man!</q> she snaps.
" 

 
    ;

Here, though, we may want to include the player's command as well as the NPC's response, since otherwise the interchange may look a little odd, especially if it's the opening interchange in a conversation. We can do this by using the `actionPhrase` method to return a string representing the command just issued, in the form "jump" or "take the red ball";  for example:

 
    + DefaultCommandTopic
    
 
        "<q>Aunt, I think you should <<actionPhrase>>,</q> you
suggest.\b
     <q>Don't you tell me what to do, young man!</q> she snaps." 

 
    ;

In many situations we won't just want to match a CommandTopic on the kind of action (e.g. Jump, Take, or PutIn), but, in the case of a transitive action, on the particular objects involved in that action. For example, we'd probably want to handle `mavis, eat cake` differently from `mavis, eat table` or `mavis, eat your hat`, and distinguish `bob, put the red ball in the brown box` from `bob, put the flaming torch in the vat of petrol`. We can achieve this by defining the `matchDobj` and `matchIobj` properties on a `CommandTopic`, for example:

 
    + CommandTopic @PutIn
    
 
        "<q>Put the red ball in the brown box, would you?</q>\b
        <q>Okay,</q> Bob agrees. "
 
        
    matchDobj = redBall
        matchIobj = brownBox
 
        
    allowAction = true;

## 14.12. NPC Travel

There may be some NPCs who have a good reason for staying right where they are throughout the course of a game, but the chances are that at least some of our NPC will need to move around. The simplest way to move an NPC from place to place is to call its `moveInto(dest)` method to move it to *dest*, but sometimes we may want something a bit more sophisticated than instant teleportation.

Rather than simply moving an NPC round the game map by programmatic fiat, for example, we may want to move it via a particular TravelConnector, the better to simulate how actors actually move round the map, and to ensure both that any side-effects of the travel are carried out and that any travel barriers are given due opportunity to veto the travel. We can do that by calling `travelVia(npc)` on the *travel connector* we want the npc to traverse. If the player character is in a position to see the travel we can also call `sayDeparting(conn)` on the actor to report the travel. It's usually more convenient, however, to combine these steps into a single step by calling `travelVia(conn)` on the *Actor. *This first calls s`ayDeparting()` on the Actor if the player character can see the actor departing;  it then carries out the travel via *conn*;  it finally calls `sayArriving(oldLoc)` on the Actor provided the player character can see the arrival but did not see the departure (where *oldLoc* is the location the Actor has just arrived from). This in turn calls `sayArriving(oldLoc)` on the current ActorState if there is one, or `actorSayArriving(oldLoc)` if there isn't. By default this just displays a message like "Bob arrives in the area", so game code may often want to override this to something more specific. Alternatively you can suppress the arrival message altogether by calling `travelVia(conn,nil)`, with nil as the optional second parameter.
Sometimes we may want an NPC to follow the player character around for a while. To do that we can simply call the NPC's `startFollowing()` method, and the NPC will attempt to keep following the player character around until we call `stopFollowing()`. Each turn when the NPC is following the player character the `sayFollowing(oldLoc, conn)` method is called on the NPC's current ActorState (if there is one), or else `sayActorFollowing(oldLoc,conn)` is called on the NPC, where *oldLoc* is the location the NPC is following from and *conn *is the connector the NPC is following the player character through. By default these just display something along the lines of "Bob follows behind you", but obviously they could be overridden to say something more specific to the character or the game.
Conversely, we may want to let the player character follow an NPC around. To do that we create a `FollowAgendaItem` for the NPC which defines where it will go when it's followed. In fact, a `FollowAgendaItem` is a bit of a hybrid between an AgendaItem and an ActorState, in that it fulfils some of the functions of each. The properties and methods we'd typically need to define on a `FollowAgendaItem` are:

- `connectorList` -- a list of TravelConnectors (which may just be rooms, but

could include Doors, Stairways and the like) through which the NPC wants to lead the player character.

- `specialDesc` -- this is used in place of the regular specialDesc to list the NPC in a room description, and should normally say that the NPC is waiting for the player character to follow him or her in a particular direction;
 the default implementation already does this in a plain vanilla way, but game code may want to override this to something more specific to the game.

- `arrivingDesc` -- the specialDesc to be shown on the turn on which the player character follows our NPC to a new location. By default we just show our specialDesc (as defined immediately above).

- `noteArrival()` - this method is called when the NPC arrives at his or her destination (i.e., when the NPC has traveled via the last connector in the connectorList). By default this method does nothing but it could be overridden, for example, to put the NPC into a new ActorState.

- `sayDeparting(conn)` -- the message to display to describe our NPC's departure from its current location via conn. The default behaviour is to call `conn.sayActorFollowing()` to describe the player character following the NPC via conn.

- `beforeTravel(traveler,
connector)` -- this notification is called just before *traveler* attempts to depart via *connector*. By default it does nothing, but it could typically be used to veto an attempt by the player character to travel anywhere other than where the NPC is trying to lead him or her. We'd normally do this by displaying some text representing the NPC's protest and then using `exit` to prevent the travel.

- `cancel()` - we can call this method on the FollowAgendaItem to cancel it before our NPC reaches its destination.

- `nextConnector` -- the TravelConnector through which the NPC wishes to lead the player character next (this should be treated as read-only).

- `nextDirection` -- the direction in which the NPC wishes to lead the player character next (this should also be treated as read-only, and returns a direction object, e.g. northDir).

For example, suppose Bob wants to lead the player character out through the front door, along the main road, across the field, down the cliff path and into the lighthouse;
 we might define a `FollowAgendaItem` for him thus:

 
    + bobLeading: FollowAgendaItem
 
        connectorList = [frontDoor, mainRoadSouth, largeField, cliffPath,
        
        lighthouseDoor]
 
        beforeTravel(traveler, connector)
     {
 
        
        if(traveler == gPlayerChar && connector != nextConnector)  
 
    {
 
        
     
 
        "<q>No, <i>this</i> way,</q> Bob insists, pointingfirmly to the

 
        
        
    <<nextDirection.name>> ";
 
        
     exit;

 
        
        }

 
        noteArrival()
     {
 
        
        getActor.setState(bobInLighthouseState);
 
    }

 
    ;

Note that we would have to call `bob.addToAgenda(bobLeading)` for this to have any effect, and that we'd normally do so just at the point at which Bob had indicated that the player character should follow him. The player could then make the player character follow Bob either by issuing a `follow bob `command, or by issuing a travel command that would take the player character in the direction Bob wants to lead him.

All the ways of moving NPCs we've looked at so far presuppose that we know exactly which connectors we want to move the NPC through. This may often be the case, but suppose we want to send an NPC to a particular destination when we don't know in general where he or she will be starting out from? In this case we can use the `findPath` method of the `routeFinder` object to calculate the route for us. For example, suppose we want to send Bob to the lighthouse from wherever he happens to be;  then we could obtain the route thus:
 
    bobRoute = routeFinder.findPath(bob.getOutermostRoom, lighthouse);

The route that's returned will either be nil (if there's no path available to the lighthouse) or a list of two-element lists, the first element of which will be the direction to travel in and the second the destination it leads to, for example:

 
    [[eastDir, mainRoad], [southDir, mainRoadSouth], [southWestDir,
largeField],

 
    [westDir, cliffPath], [westDir, lighthouse]]

To use this route we might want to convert it into a list of TravelConnectors to be traversed, which we could do with code like the following:

 
    local
 
    bobRoute = routeFinder.findPath(bob.getOutermostRoom, lighthouse);

 
    local loc = bob.getOutermostRoom;
local path = [];

 
    foreach(item in bobRoute){
 
        path += loc.(item[1].dirProp);
    loc = item[2];

 
    }
    

Then, for example, we could set the value of the `connectorList` of a `FollowAgendaItem` to `path`, or else write an ordinary AgendaItem to send Bob one step along path each turn (by calling `bob.travelVia(path[idx])`, where idx was a

counter of steps taken).

## 14.13. Afterword

Writing life-like NPCs is usually the most complex and challenging task an IF author can face. This chapter has been correspondingly long and complex;
 there's a lot of material to take in here, and we haven't covered all there is, especially on the conversation side. We have, however, covered enough (and probably more than enough) to illustrate the basics, and if you can master the contents of this chapter, you'll be well on the way to writing well-implemented NPCs in your own work. For further information about the nooks and crannies not covered here you can turn to the *adv3Lite Manual* if and when you need it.

You may, for example, have noticed that a `convKeys` property has been mentioned more than once in passing without ever really being explained. It can be used for a number of purposes. We've seen part of its use in relation to ConvNodes, but it could also be used (for example) to make the same TopicEntry appear in more than one ConvNode, or to set up a TopicEntry that suggests other topics for discussion, so that, for example, the player could type `talk about the troubles `and be rewarded with a list of questions s/he could ask or statements s/he could make about the troubles. This, incidentally, reveals a further type of TopicEntry we've not yet mentioned, the `TalkTopic` and its various relatives (at its simplest a TalkTopic can be used much like an AskTopic, except that it responds to `talk about x` rather than `ask about x`). We can also use various tags not yet mentioned like `<.activatekey>` and `<.suggest key>` or `<.arouse
key>` to control what TopicEntries should be made active or suggested, where *key* relates to the convKeys property of one or more TopicEntries. At this point we merely mention these possibilities without explaining them so that you're aware of their existence; you can read the Actors section of the *Library Manual* if and when you want to know more about them.

One additional tag it might be worth knowing about at this stage, however, is the `<.inform info>` tag. This works just like the `<.revealinfo>` tag described back in Chapter 7, except that instead of recording what the player character knows, such as what an NPC has just revealed to the player character in conversation, it records what the NPC knows, in particular what the player character has just informed the NPC about in conversation. This can then be used to track what different NPCs have been told. To test whether an NPC has been informed about something you can use the macro `gInformed('info')`. Note that for this to work it can only be used in a context where the library can figure out which actor's knowledge you're asking about, which will be on any object that defines the `getActor` method (i.e. an ActorState, TopicGroup, ConvNode, AgendaItem, TopicEntry or, indeed, Actor). While 'info' can be any arbitrary single-quoted string you like, it's a good idea to use the same string to mean the same thing in both `<.reveal info>` and `<.inform
info>` tags.
*Exercise 20:* Both the NPC articles in the *TADS 3 Technical Manual* and several of those in this chapter refer to a character called Bob who stacks cans and mutters darkly about a lighthouse and some "troubles", so try writing a small game based on that. Here's some further suggestions: The player character is new to the town and has just gone into Bob's shop, where Bob is busily stacking cans and a blonde woman (let's call her Sally) is inspecting the clothes on the clothes rack. Sally is too interested in the clothes to engage a stranger in conversation, but Bob is more talkative. You can ask him about a number of topics, but if you ask him about the town, he'll mention the lighthouse and the troubles, and then clam up on those topics. When Sally hears Bob mention the troubles she goes outside. When the player character leaves the shop Sally comes up to him and asks whether he wants her to show him the lighthouse. The player can reply yes or no or ask why she's offering. If the player replies yes, Sally leads the player character to the lighthouse and then invites him to lead the way inside. On the lowest floor of the lighthouse there's nothing but an abandoned storeroom and an abandoned office, which Sally comments on the first time she follows the player character there. Halfway up a spiral staircase is an oak door. When the player character goes through the door he meets more than he bargained for.

[&laquo; Go to previous chapter](13-more-about-actions.html)&nbsp;&nbsp;&nbsp;&nbsp;[Return to table of contents](LearningT3Lite.html)&nbsp;&nbsp;&nbsp;&nbsp;[Go to next chapter &raquo;](15-multilocs-and-scenes.html)