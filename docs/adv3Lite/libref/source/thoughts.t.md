---
layout: docs
---
# thoughts.t

[documentation](../file/thoughts.t.html)

    #charset "us-ascii"
    #include "advlite.h"


    /*
     *   *************************************************************************
     *   thoughts.t
     *
     *   This module forms part of the adv3Lite library (c) 2012-13 Eric Eve
     *
     *
     *   This file adds support for a THINK about command
     */

    /* 
     *   The base clase for a thought manager object. To use this in a game create a
     *   single object of this class and locate a number of Thought objects in it
     *   (with the + notation) to represent responses to THINK ABOUT
     */
    class ThoughtManager: PreinitObject, TopicDatabase
        
        /* Carry out the ThoughtManager's preinitialization */
        execute()
        {
            /* Register this object as the game's thoughtManager object. */
            libGlobal.thoughtManagerObj = self;
            
            /* 
             *   Add every Thought object that's located in us to our topic entry
             *   list
             */
            forEachInstance(Thought, new function(t) {
                if(t.location == self)
                    addTopic(t);
            });
        }   
        
        /*  Handle a THINK ABOUT command. */
        handleTopic(top)
        {
            /* First get the best match to the topic we want to think about */
            local match = getBestMatch(thoughtList, top);
            
            /* If we didn't find a match, display a message to that effect. */
            if(match == nil)
                say(noThoughtMsg);
            
            /* Otherwise have our best match display its reponse. */
            else
                match.topicResponse();
        }
        
        /* The list of Thoughts associated with this ThoughtManager object */
        thoughtList = []
        
        /* The message to display when we don't find a matching Thought */
        noThoughtMsg = BMsg(no thoughts, '{I} {have} no thoughts on that particular
            topic.')
    ;


    /* 
     *   A kind of TopicEntry that responds to a THINK ABOUT command when located in
     *   a ThoughtManager object. These can be defined just like any other topic
     *   entry objects, and work in just the same way as ConsultTopics.
     */
    class Thought: TopicEntry
        includeInList = [&thoughtList]
    ;

    /* 
     *   A DefaultThought is a Thought that matches any THINK ABOUT command with a
     *   very low match score, so that any more specific Thought that's matched will
     *   take precedence. Game code can use this to provide a fall-back response
     *   when no more specific response is available.
     */
    class DefaultThought: Thought
        matchTopic(top)
        {
            return matchScore + scoreBoost;
        }
        
        matchScore = 1
    ;



Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


