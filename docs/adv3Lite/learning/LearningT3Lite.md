---
layout: article
title: Learning TADS 3 with adv3Lite by Eric Eve
toroot: ../../../
styleType: article
---

<center>
 
    <h1>Learning TADS 3 with adv3Lite</h1>
 
    <i>by Eric Eve</i>
</center>

## Table of Contents

-
    [1 Introduction](1-introduction.html)
 
    -    [1.1 The Aim and Purpose of this Book]()
 
    -    [1.2 What You Need to Know Before You Start]()
 
    -    [1.3 Feedback and Acknowledgements]()
-
    [2 Map-Making -- Rooms](2-map-making--rooms.html)
 
     -
    [2.1 Rooms]()
 
     -
    [2.2 Coding Excursus 1: Defining Objects]()
 
     -
    [2.3 Rooms and Regions]()
 
     -
    [2.4 Coding Excursus 2 -- Inheritance]()
 
     -
    [2.5 A Bit More About Rooms]()
-
     [3 Putting Things on the Map](3-putting-things-on-the-map.html)
 
     -
    [3.1 The Root of All Things]()
 
     -
    [3.2 Coding Excursus 3 -- Methods and Functions]()
 
     -
    [3.3 Some Other Kinds of Thing]()
 
     -
    [3.4 Coding Excursus 4 -- Assignments and Conditions]()
 
     -
    [3.5 Fixtures and Fittings]()
-
     [4 Doors and Connectors](4-doors-and-connectors.html)
 
     -
    [4.1 Doors]()
 
     -
    [4.2 Coding Excursus 5 -- Two Kinds of String]()
 
     -
    [4.3 Other Kinds of Physical Connector]()
 
     -
    [4.4 Coding Excursus 6 -- Special Things to Put in Strings]()
 
     -
    [4.5 TravelConnectors]()
-
     [5 Containment](5-containment.html)
 
     -
    [5.1 Containers and the Containment Hierarchy]()
 
        
    -    [5.1.1 The Containment Hierarchy]()
 
        
    -    [5.1.2 Moving Objects Around the Hierarchy]()
 
        
    -    [5.1.3 Defining the Initial Location of Objects]()
 
        
    -    [5.1.4 Testing for Containment]()
 
        
    -    [5.1.5 Containment and Class Definitions]()
 
        
    -    [5.1.6 Bulk and Container Capacity]()
 
        
    -    [5.1.7 Items Hidden in Containers]()
 
        
    -    [5.1.8 Notifications]()
 
     -
    [5.2 Coding Excursus 7 -- Overriding and Inheritance]()
 
     -
    [5.3 In, On, Under, Behind]()
 
        
    -    [5.3.1 Kinds of Container]()
 
        
    -    [5.3.2 Other Kinds of Containment]()
 
     -
    [5.4 Coding Excursus 8 -- Anonymous and Nested Objects]()
 
     -
    [5.5 Multiple Containment]()
-
     [6 Actions](6-actions.html)
 
     -
    [6.1 Taxonomy of Actions]()
 
     -
    [6.2 Coding Excursus 9 -- Macros and Propertysets]()
 
        
    -    [6.2.1 Macros]()
 
        
    -    [6.2.2 Propertysets]()
 
     -
    [6.3 Customizing Action Behaviour]()
 
        
    -    [6.3.1 Actions Without Objects]()
 
        
    -    [6.3.2 Actions With Objects]()
 
        
    -    [6.3.3 Stages of an Action]()
 
        
    -    [6.3.4 Remap]()
 
        
    -    [6.3.5 Verify]()
 
        
    -    [6.3.6 Check]()
 
        
    -    [6.3.7 Action]()
 
        
    -    [6.3.8 Report]()
 
        
    -    [6.3.9 Precondition]()
 
     -
    [6.4 Coding Excursus 10 -- Switching and Looping]()
 
        
    -    [6.4.1 The Switch Statement]()
 
        
    -    [6.4.2 Loops]()
 
     -
    [6.5 Commands and Doers]()
 
        
    -    [6.5.1 Commands]()
 
        
    -    [6.5.2 Doers]()
 
     -
    [6.6 Defining New Actions]()
-
     [7 Knowledge](7-knowledge.html)
 
     -
    [7.1 Seen and Known]()
 
        
    -    [7.1.1 Tracking What Has Been Seen]()
 
        
    -    [7.1.2 Tracking What Is Known]()
 
        
    -    [7.1.3 Revealing]()
 
     -
    [7.2 Coding Excursus 11 -- Comments, Literals and Datatypes]()
 
        
    -    [7.2.1 Comments]()
 
        
    -    [7.2.2 Identifiers]()
 
        
    -    [7.2.3 Literals and Datatypes]()
 
        
    -    [7.2.4 Determining the Datatype (and Class) of Something]()
 
        
    -    [7.2.5 Property and Function Pointers]()
 
        
    -    [7.2.6 Enumerators]()
 
     -
    [7.3 Topics]()
 
     -
    [7.4 Coding Excursus 12 -- Dynamically Creating Objects]()
 
     -
    [7.5 Consultables]()
-
     [8 Events](8-events.html)
 
     -
    [8.1 Fuses and Daemons]()
 
     -
    [8.2 Coding Excursus 13 -- Anonymous Functions]()
 
     -
    [8.3 EventLists]()
 
     -
    [8.4 Coding Excursus 14 -- Lists and Vectors]()
 
     -
    [8.5 Initialization and Pre-initialization]()
 
        
    -    [8.5.1 Initialization]()
 
        
    -    [8.5.2 Pre-Initialization]()
 
        
    -    [8.5.3 Static Property Initialization]()
-
     [9 Beginnings and Endings](9-beginnings-and-endings.html)
 
     -
    [9.1 GameMainDef]()
 
     -
    [9.2 Version Info]()
 
     -
    [9.3 Coding Excursus 15 -- Intrinsic Functions]()
 
     -
    [9.4 Ending a Game]()
-
     [10 Darkness and Light](10-darkness-and-light.html)
 
     -
    [10.1 Dark Rooms]()
 
     -
    [10.2 Coding Excursus 16 -- Adjusting Vocabulary]()
 
        
    -    [10.2.1 Adding Vocabulary the Easy Way]()
 
        
    -    [10.2.2 State]()
 
     -
    [10.3 Sources of Light]()
-
     [11 Nested Rooms](11-nested-rooms.html)
 
     -
    [11.1 Nested Room Basics]()
 
     -
    [11.2 Nested Rooms and Postures]()
 
     -
    [11.3 Other Features of Nested Rooms]()
 
        
    -    [11.3.1 Nested Rooms and Bulk]()
 
        
    -    [11.3.2 Dropping Things in Nested Rooms]()
 
        
    -    [11.3.3 Enclosed Nested Rooms]()
 
        
    -    [11.3.4 Staging and Exit Locations]()
 
     -
    [11.4 Vehicles]()
 
     -
    [11.5 Reaching In and Out]()
-
     [12 Locks and Other Gadgets](12-locks-and-other-gadgets.html)
 
     -
    [12.1 Locks and Keys]()
 
     -
    [12.2 Control Gadgets]()
 
        
    -    [12.2.1 Buttons, Levers and Switches]()
 
        
    -    [12.2.2 Controls With Multiple
        
        Settings]()
-
     [13 More About Actions](13-more-about-actions.html)
 
     -
    [13.1 Messages]()
 
     -
    [13.2 Stopping Actions]()
 
     -
    [13.3 Coding Excursus 17 -- Exceptions and Error Handling]()
 
     -
    [13.4 Reacting to Actions]()
 
     -
    [13.5 Reacting to Travel]()
 
     -
    [13.6 NPC Actions]()
-
     [14 Non-Player Characters](14-non-player-characters.html)
 
     -
    [14.1 Introduction to NPCs]()
 
     -
    [14.2 Actors]()
 
     -
    [14.3 Actor States]()
 
     -
    [14.4 Conversing with NPCs -- Topic Entries]()
 
     -
    [14.5 Suggesting Topics of Conversation]()
 
     -
    [14.6 Hello and Goodbye -- Greeting Protocols]()
 
     -
    [14.7 Conversation Nodes]()
 
     -
    [14.8 Special Topics -- Extending the Conversational Range]()
 
     -
    [14.9 NPC Agendas]()
 
     -
    [14.10 Making NPCs Initiate Conversation]()
 
     -
    [14.11 Giving Orders to NPCs]()
 
     -
    [14.12 NPC Travel]()
 
     -
    [14.13 Afterword]()
-
     [15 MultiLocs and Scenes](15-multilocs-and-scenes.html)
 
     -
    [15.1 MultiLocs]()
 
     -
    [15.2 Scenes]()
-
     [16 Senses and Sensory Connections](16-senses-and-sensory-connections.html)
 
     -
    [16.1 The Four Other Senses]()
 
     -
    [16.2 Sensory Connections]()
 
     -
    [16.3 Describing Things in Remote Locations]()
 
     -
    [16.4 Remote Communications]()
- `[17 Attachables](17-attachables.html)
 
     -
    [17.1 What Attachable Means]()
 
     -
    [17.2 SimpleAttachable]()
 
     -
    [17.3 NearbyAttachable]()
 
     -
    [17.4 AttachableComponent]()
 
     -
    [17.5 Attachable]()
 
     -
    [17.6 PlugAttachable]()
-
     [18 Menus, Hints and Scoring](18-menus-hints-and-scoring.html)
 
     -
    [18.1 Menus]()
 
     -
    [18.2 Hints]()
 
     -
    [18.3 Scoring]()
-
     [19 Beyond the Basics](19-beyond-the-basics)
 
     -
    [19.1 Introduction]()
 
     -
    [19.2 Parsing and Object Resolution]()
 
        
    -    [19.2.1 Tokenizing and Preparsing]()
 
        
    -    [19.2.2 Object Resolution]()
 
     -
    [19.3 Similarity, Disambiguation and Difference]()
 
     -
    [19.4 Fancier Output]()
 
     -
    [19.5 Changing Person, Tense, and Player Character]()
 
     -
    [19.6 Pathfinding]()
 
     -
    [19.7 Coding Excursus 18]()
 
        
    -    [19.7.1 Varying, Optional and Named Argument Lists]()
 
        
    -    [19.7.2 Regular Expressions]()
 
        
    -    [19.7.3 LookupTable]()
 
        
    -    [19.7.4 Multi-Methods]()
 
        
    -    [19.7.5 Modifying Code at Run-Time]()
 
     -
    [19.8 Compiling for Web-Based Play]()
-
    [20 Where To Go From Here](20-where-to-go-from-here.html)
-
    [21 Alphabetical Index](21-alphabetical-index.html)
