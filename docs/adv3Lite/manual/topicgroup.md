---
layout: docs
---
<div class="topbar">

<img src="topbar.jpg" data-border="0" />

</div>

<div class="nav">

<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="actor.html" class="nav">Actors</a> \> Topic Groups  
<span class="navnp"><a href="specialtopic.html" class="nav"><em>Prev:</em> Special Topics</a>
   
<a href="convnode.html" class="nav"><em>Next:</em> Conversation Nodes</a>
    </span>

</div>

<div class="main">

# Topic Groups

A Topic Group is simply a way of grouping together ActorTopicEntries
that have certain characteristics in common. A TopicGroup can appear
anywhere an ActorTopicEntry can appear, and the ActorTopicEntries it
groups togetther are then located directly within it.

In particular, a TopicGroup defines the following properties:

- **isActive**: For an ActorTopicEntry to be active both its own
  isActive property and the isActive property of any TopicGroup to which
  it belongs must be true. The isActive property of a TopicGroup can
  therefore be used to specify a common isActive condition for a group
  of ActorTopicEntries.
- **convKeys**: Any convKeys defined on a TopicGroup are added to the
  convKeys of all the ActorTopicEntries it contains.
- **scoreBoost**: Any scoreBoost defined on a TopicGroup is added to the
  scoreBoost of all the ActorTopicEntries it contains (provided their
  scoreBoost property is defined as a simple integer).
- **nodeActive**: The nodeActive method of a TopicGroup returns true if
  one of its own convKeys is that of an active node.

A TopicGroup can be of particular use for defining Conversation Nodes:
the [ConvNode](convnode.html#convnode) subclass of TopicGroup is provided
especially for this purpose.

The TopicGroup template is defined as `+scoreBoost?
'convKeys' \| \[convKeys\] ?`, so that both the scoreBoost and the
convKeys properties can be readily defined through the template.
Consider the following example:

```
    + TopicGroup +10 'alice-info'
       isActive = gRevealed('alice')
    ;

    ++ AskTopic @tAlice
        "<q>Who is this Alice, anyway?</q>
         <q>Lots of folk would like to know that,</q> he replies, scratching his head. "
    ;
     
     
    ++ QueryTopic 'where' 'he heard about alice; did you hear'
       "<q>Where did you hear about this Alice person?</q> you enquire. 
        <q>From the old vicar,</q> he tells you. "
    ;
```

This adds the 'alice-info' convKey to both the TopicEntries defined
above, and ensures that they are only active when the 'alice' tag has
been revealed. It also boosts their matchScore by 10 (which might help
ensure, for example, that the QueryTopic is reached in preference to
another when the player types a partial query like WHERE HEAR).

</div>

------------------------------------------------------------------------

<div class="navb">

*adv3Lite Library Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="actor.html" class="nav">Actors</a> \> Topic Groups  
<span class="navnp"><a href="specialtopic.html" class="nav"><em>Prev:</em> Special Topics</a>
   
<a href="convnode.html" class="nav"><em>Next:</em> Conversation Nodes</a>
    </span>

</div>
