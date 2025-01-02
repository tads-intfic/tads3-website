<div class="topbar">

<img src="topbar.jpg" data-border="0" />

</div>

<div class="nav">

<a href="toc.htm" class="nav">Table of Contents</a> \|
<a href="optional.htm" class="nav">Optional Modules</a> \> Thoughts  
<span class="navnp"><a href="topicentry.htm" class="nav"><em>Prev:</em> Topic Entries</a>
    <a href="action.htm" class="nav"><em>Next:</em> Actions</a>    
</span>

</div>

<div class="main">

# Thoughts

The thoughts.t module provides a framework for responding to commands of
the form THINK ABOUT WHATEVER. It uses precisely the same TopicEntry
mechanism as the Consultable/ConsultTopic classes, and can be used in
almost precisely the same way. All you need to do is to define an object
of the **ThoughtManager** class and then populate it with **Thought**
objects, like so:

<div class="code">

    myThoughts: ThoughtManager
    ;

    + Thought @george
        "To be honest, you're not really sure what he's doing here. "
    ;

    + Thought @tFire
        "It's a wretched nuiscance. Your nephew's probably to blame for it
        somehow, but the important thing right now is just to escape from it. "
    ;

    + DefaultThought
        "You find your thoughts start to wander; for some reason you can't
        concentrate on that topic right now. "
    ;

</div>

Thought inherits from [TopicEntry](topicentry.htm), so you can use all
the properties and methods of TopicEntry with it; Thought and
DefaultThought work just like ConsultTopic and DefaultConsultTopic.

You can exclude thoughts.t if you don't want to implement a THINK ABOUT
command (or you don't want to implement it this way), but if you include
thoughts.t you must also include topicentry.t.

------------------------------------------------------------------------

<div class="navb">

*adv3Lite Library Manual*  
<a href="toc.htm" class="nav">Table of Contents</a> \|
<a href="optional.htm" class="nav">Optional Modules</a> \> Thoughts  
<span class="navnp"><a href="topicentry.htm" class="nav"><em>Prev:</em> Topic Entries</a>
    <a href="action.htm" class="nav"><em>Next:</em> Actions</a>    
</span>

</div>

</div>