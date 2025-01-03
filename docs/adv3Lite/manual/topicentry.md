---
layout: docs
---


<img src="topbar.jpg" data-border="0" />





<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="optional.html" class="nav">Optional Modules</a> \> Topic
Entries  
<span class="navnp"><a href="senseregion.html" class="nav"><em>Prev:</em> SenseRegion</a>
    <a href="thought.html" class="nav"><em>Next:</em> Thoughts</a>    
</span>





# Topic Entries

The topicEntry.t implements the base TopicEntry class that forms the
basis of Consultables, Thoughts and the conversation system. It also
defines the Consultable and ConsultTopic classes that make particular
use of this base class. Since game code is unlikely to use the base
TopicEntry class (except, perhaps, if a game author wants to define a
custom type of TopicEntry for special purposes), we can illustrate the
use of TopicEntries by moving straight to a discussion of Consultables
and ConsultTopics.

A **Consultable** is something you can look things up in, through
commands like LOOK UP ORANGES IN BLUE BOOK or CONSULT BOOK ABOUT LEMONS.
To create a Consultable object in adv3Lite we first define an object of
class Consultable, in much the same way as we'd define any other Thing,
for example:

```
    blueBook: Consultable 'blue book; useless trusty of[prep];dictionary information' @desk
        "It's your trusty dictionary of useless information. "
        
        readDesc = "It's not the sort of book you'd want to read from cover to
            cover; it's more for looking things up in. "
    ;
```

Each item you want the player to be able to look up in the blue book can
then be represented by a **ConsultTopic** object. These should be
defined with some combination of the following properties:

- **matchObj**: The game object or class or Topic this ConsultTopic
  matches, or a list of objects and/or classes and/or topics any one of
  which will match this ConsultTopic.
- **matchPattern**: A regular expression that this ConsultTopic matches.
  (Note you wouldn't define both this and the previous property, since
  if a matchObj is defined any matchPattern will be ignored).
- **matchExactCase**: A flag to indicate whether the matchPattern has to
  match the exact case of the player's input. The default is nil.
- **matchScore**: A numeric value to decide which ConsultTopic should be
  chosen in case there's more than one match. The ConsultTopic with the
  highest matchScore wins. The default value is 100.
- **scoreBoost**: An optional method or expression that can be used to
  boost the matchScore under specified circumstances (by default this is
  simply 0).
- **isActive**: A flag to indicate whether this ConsultTopic should be
  considered for a match. If it's nil then this ConsultTopic won't be
  matched. The default is true. It is intended that this property should
  be defined as an expression (or if necessary, a method) on the
  TopicEntry object rather than manipulated in code elsewhere, since
  treating it declaratively this way will make it much easier to read
  your code when you come back to it.
- **topicResponse**: A double-quoted string (or possibly a method) that
  provides this ConsultTopic's response when it's matched.
- **eventList**: If an EventList class is added to the class-list of
  this TopicEntry, we can define its eventList property, and the
  TopicEntry will respond with the next item in its eventList (in which
  case we should not also define the topicResponse property, since if we
  do, that will be used instead.).
- **topicMatched**: The topic actually matched by this TopicEntry. This
  is set by the `matchTopic()` method and is
  intended for use by the `topicResponse()`
  method, which can then access the Topic (or Thing) whose match
  triggered this TopicEntry (in case the TopicEntry can match more than
  one Topic or Thing).

Most of these properties can be defined through a template. The basic
template for a TopicEntry looks like this:

```
    TopicEntry template
       +matchScore?
       @matchObj | [matchObj] | 'matchPattern'
       "topicResponse" | [eventList] ?;
```

This means that a TopicEntry can optionally be defined with a + sign and
a number giving its matchScore; following that (if it is present) or
starting off (if it is not) you then write at @ sign immediately before
the matchObj, or a list of matchObjs, or a matchPattern in single
quotes. Finally you either give the topicResponse in double-quotes or
else define a list of responses (typically a list of single-quoted
strings) if the TopicEntry is also an EventList.

To continue the previous example, we might begin to populate our
dictionary of useless information with ConsultTopics thus:

```
    + ConsultTopic @tLemons    
        "Apparently they're yellow and sour. "
    ;

    + ConsultTopic 'oranges'
        "They're round and juicy. "
    ;

    + ConsultTopic @Door
        "Doors can be opened and closed, and when open you can go through them. "
    ;

    + ConsultTopic '(black|red|green) blob(s){0,1}'
       "They're very blobby. "   
    ;
```

<span id="defaultconsult"></span>

Finally, we probably also want a response for when the player types
something for which we haven't provided a matching ConsultTopic, LOOK UP
ABRAHAM LINCOLN IN BOOK or CONSULT DICTIONARY ABOUT KNOWN UNKNOWNS for
example. For that purpose we use a **DefaultConsultTopic** which acts a
catch-all for anything we haven't specifically defined:

```
    + DefaultConsultTopic
        "You thumb through the blue book in vain for any interesting information on
        that topic. "
    ;
```

Alternatively, we might mix in the DefaultConsultTopic with an EventList
class to provide a sequence of responses:

```
    + DefaultConsultTopic, StopEventList
      [
        'You thumb through the blue book in vain for any interesting information on
        that topic. ',
        
        'Once again you fail to find anything useful. ',
        
        'You begin to wonder whether this book is much use; that\'s the third time
         it\'s failed to provide information on something. ',
         
        'Oh dear! Yet again you fail to find what you\'re looking for. '    
       ]
    ;
```

If you don't need Consultables or any other kind of TopicEntries then
you can exclude topicEntry.t from your build, but note that topicEntry
must be present if you want to use thoughts.t or actor.t.

------------------------------------------------------------------------



*adv3Lite Library Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="optional.html" class="nav">Optional Modules</a> \> Yopic
Entries  
<span class="navnp"><a href="senseregion.html" class="nav"><em>Prev:</em> SenseRegion</a>
    <a href="thought.html" class="nav"><em>Next:</em> Thoughts</a>    
</span>




