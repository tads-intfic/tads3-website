::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Actions](action.htm){.nav} \>
Source\
[[*Prev:* ActionReference](actionref.htm){.nav}     *Next:*
[ActionReference](actionref.htm){.nav}    ]{.navnp}
:::

::: main
# Source Reference

This file contains *extracts* from various library source files,
intended for reference from the [Action Reference](actionref.htm). It is
not a complete listing. For complete listings please see the actual
source files.

::: code
    action.t
    /* 
     *   A TravelAction is one that moves (or at least tries to move) the player
     *   character from one place to another via a command like GO NORTH, or EAST.
     */

    class TravelAction: Action
        
        baseActionClass = TravelAction
        
        /* 
         *   Use the inherited handling but first make a note of the direction the
         *   actor wants to travel in.
         */
        execCycle(cmd)
        {
            /* 
             *   Obtain the direction from the verbProd of the current command
             *   object, unless this TravelAction already defines its direction
             */
            if(!predefinedDirection)
               direction = cmd.verbProd.dirMatch.dir; 
            
            IfDebug(actions, 
                        "[Executing <<actionTab.symbolToVal(baseActionClass)>> 
                        <<direction.name>>]\n" );
            
            /* Carry out the inherited handling. */
            inherited(cmd);
        }
        
        
        /* 
         *   Does this TravelAction already define a set direction on its direction
         *   property (so we don't need to look to what direction object the command
         *   refers)?
         */
        predefinedDirection = nil
        
        /* 
         *   Execute the travel command, first carrying out any implicit actions
         *   needed to facilitate travel
         */
        
        execAction(cmd)
        {        
            
            /* 
             *   If the actor is not directly in the room, treat OUT as a request to
             *   get out of the immediate container.
             */
            if(!gActor.location.ofKind(Room) && direction == outDir)
            {
                replaceAction(GetOff, gActor.location);
                return;
            }
                 
            /* 
             *   If the actor is not directly in the room, make him/her get out of
             *   his immediate container(s) before attempting travel.
             */
            
            while(!gActor.location.ofKind(Room))
            {
                /* Note the actor's current location. */
                local loc = gActor.location;
                
                /* 
                 *   Try to get the actor out of his/her current location with an
                 *   implicit action.
                 */
                tryImplicitAction(GetOff, loc);
                
                /* Note and if necessary display the implicit action report. */
                "<<buildImplicitActionAnnouncement(true)>>";
                
                
                /*
                 *   if the command didn't work, quit the loop or we'll be stuck in
                 *   it forever.
                 */
                if(gActor.location == loc)
                    exit;
                
            }
            
            /* 
             *   Note and if necessary display any other implicit action reports
             *   that may have been generated prior to executing this action.
             */
            "<<buildImplicitActionAnnouncement(true)>>";
                  
            /* Carry out the actual travel. */
            doTravel();
        }
        
        /* 
         *   Carry out travel in direction. For this purpose we first have to define
         *   what the corresponding direction property of the actor's current
         *   location refers to. If it's nil, no travel is possible, and we simply
         *   display a refusal message. If it's an object we execute its travelVia()
         *   method for the current actor. If it's a double-quoted string or a
         *   method we execute it and make a note of where the actor ends up, if the
         *   actor is the player character. If it's a single-quoted string we
         *   display it.
         *
         *   Note that we only display the various messages announcing failure of
         *   travel if the actor is the player character. We presumably don't want
         *   to see these messages as the result of NPCs trying to move around the
         *   map.
         */
        
        doTravel()
        {
            /* Note the actor's current location. */
            local loc = gActor.getOutermostRoom;
            local conn;
            
            /* 
             *   Note whether the current location is located, or whether it permits
             *   travel in the dark (in which case we treat it as illuminated for
             *   the purposes of allowing travel).
             */
            local illum = loc.allowDarkTravel || loc.isIlluminated;
            
            
            /* 
             *   Find out what's attached to the direction property of the direction
             *   in which the actor wants to travel and respond accordingly.
             */
            switch (loc.propType(direction.dirProp))
            {
                /* 
                 *   If there's nothing there, simply display the appropriate
                 *   message explaining that travel that way isn't possible.
                 */
            case TypeNil:
                if(illum && gActor == gPlayerChar)
                    loc.cannotGoThatWay(direction);
                else if(gActor == gPlayerChar)
                    loc.cannotGoThatWayInDark(direction);            
                break;
                
                /* 
                 *   If the direction property points to an object, assume it's some
                 *   kind of TravelConnector (which also includes Rooms and Doors)
                 *   and then attempt travel via that object.
                 */
            case TypeObject:     
                /* Note our connector */
                conn = loc.(direction.dirProp);
                
                /* 
                 *   If the connector is apparent to the actor then attempt travel
                 *   via the connector.
                 */
                if(conn.isConnectorApparent)
                    conn.travelVia(gActor);
                
                /* 
                 *   Otherwise if there's light enough to travel and the actor is
                 *   the player character, display the standard can't travel message
                 *   (as if the connector wasn't there.
                 */
                else if(illum && gActor == gPlayerChar)
                    loc.cannotGoThatWay(direction);
                
                /* 
                 *   Otherwise if the actor is the player character, display the
                 *   standard message forbidding travel in the dark.
                 */
                else if(gActor == gPlayerChar)
                    loc.cannotGoThatWayInDark(direction);
                break;       
                
                /* 
                 *   If the direction property points to a double-quoted method or a
                 *   string, then provided the illumination is right, we display the
                 *   string or execute the method. Otherwise show the message saying
                 *   we can't travel that way in the dark.
                 */            
            case TypeDString:
            case TypeCode:
                if(illum)
                {            
                    /* 
                     *   Call the before travel notifications on every object that's
                     *   in scope for the actor. Since we don't have a connector
                     *   object to pass to the beforeTravel notifications, we use
                     *   the direction object instead.
                     */
                    Q.scopeList(gActor).toList.forEach({x: x.beforeTravel(gActor,
                        direction)});
                                       
                    /*  
                     *   If going this way would take us to a known destination
                     *   that's a Room (so that executing the travel should take the
                     *   actor out of his/her current room) notify the current room
                     *   that the actor is about to depart.
                     */                
                    local dest;
                    
                    if(loc.propType(direction.dirProp) == TypeCode)                
                        dest = libGlobal.extraDestInfo[[loc, direction]];
                    else
                        dest = nil;
                    
                    if(dest && dest.ofKind(Room))
                        loc.notifyDeparture(gActor, dest);
                                       
                    /*  
                     *   Then execute the method or display the double-quoted
                     *   string.
                     */             
                    loc.(direction.dirProp);
                    
                    /* 
                     *   If we've just executed a method, it may have moved the
                     *   actor to a new location, so if the actor is the player
                     *   character note where the method took the actor to so that
                     *   the pathfinder can find a route via this exit.
                     */
                    if(gActor == gPlayerChar)
                        libGlobal.addExtraDestInfo(loc, direction,
                                               gActor.getOutermostRoom);
                }
                else if(gActor == gPlayerChar)
                    loc.cannotGoThatWayInDark(direction);
                break;
                
                /* 
                 *   If the direction property points to a single-quoted string,
                 *   simply display the string if the illumination is sufficient,
                 *   otherwise display the message saying we can't go that way in
                 *   the dark. If the actor isn't the player character, do nothing.
                 */
            case TypeSString:
                if(gActor == gPlayerChar)
                {
                    conn = loc.(direction.dirProp);
                    if(illum)
                    {
                        say(conn);
                        libGlobal.addExtraDestInfo(loc, direction,
                                                   gActor.getOutermostRoom); 
                    }
                    else
                        loc.cannotGoThatWayInDark(direction);
                }    
                break;
                
            }       
        }
        
        /* 
         *   The direction the actor wants to travel in. This is placed here by the
         *   execCycle method and takes the form of A Direction object, e.g.
         *   northDir.
         */
        direction = nil
        
        /* It's generally possible to undo a travel command. */
        canUndo = true
    ;
:::

## actions.t

::: code
    DefineSystemAction(Again)
        
        exec(cmd)
        {
            if((gameMain.againRepeatsParse && libGlobal.lastCommandForAgain is in
               ('',nil)) || (!gameMain.againRepeatsParse && libGlobal.lastCommand is
               in ('', nil)))
            {
                DMsg(no repeat, 'Sorry, there is no action available to repeat. ');
            }
            else if (gameMain.againRepeatsParse)
            {
                Parser.parse(libGlobal.lastCommandForAgain);
            }
            else
            {
                libGlobal.lastCommand.exec();
            }
        }
        
        clearForAgain()
        {
            libGlobal.lastAction = nil;
            libGlobal.lastCommand = nil;
        }
        
    ;
:::

::: code
    DefineIAction(Continue)
        execAction(cmd)
        {
            local path;
            path = defined(pcRouteFinder) ? pcRouteFinder.cachedRoute : nil;
            if(path == nil)
            {
                DMsg(no journey, '{I}{\'m} not going anywhere. ');
            }
            
            local idx = path.indexWhich({x: x[2] == gActor.getOutermostRoom});
            
            if(idx == nil)
            {
                path = defined(pcRouteFinder) ?
                    pcRouteFinder.findPath(gActor.getOutermostRoom,
                                           pcRouteFinder.currentDestination) : nil;
                
                if(path == nil)
                {
                    DMsg(off route, '{I}{\'m} no longer on {my} route. Use the GO TO
                        command to set up a new route. ');
                    return;
                }
                else
                    idx = 1;                
            }
            
            if(idx == path.length)
            {
                DMsg(already there, '{I}{\'m} already there. ');
                return;
            }
            
            local dir = path[idx + 1][1];
            
            takeStep(dir, path[path.length][2]);
            
            
        }
        
        takeStep(dir, dest)
        {
            DMsg(going dir, '(going {1})\n', dir.name);
            
            gActor.getOutermostRoom.(dir.dirProp).travelVia(gActor);
            
            if(!gActor.isIn(dest))
            {
                local contMsg = BMsg(explain continue, 'To continue the journey
                    use the command
                    <<aHref('Continue','CONTINUE','Continue')>> or C. ');
                htmlSay(contMsg);
            }
        }
        
    ;
:::

::: code
    DefineSystemAction(ExitsColour)
        execAction(cmd)
        {
            if(gExitLister == nil)
            {
                 DMsg(no exit lister, 'Sorry, that command is not available in this
                    game, since there\'s no exit lister. ');
                return;
            }
            
            if(cmd.verbProd.on_ != nil)
            {
                statuslineExitLister.highlightUnvisitedExits = 
                    (cmd.verbProd.on_ == 'on');
                
                DMsg(exit color onoff, 'Okay, colouring of unvisited exits is now
                    {1}.<.p>', cmd.verbProd.on_);
            }
            
            if(cmd.verbProd.colour_ != nil)
            {
                statuslineExitLister.unvisitedExitColour = cmd.verbProd.colour_;
                statuslineExitLister.highlightUnvisitedExits = true;
                DMsg(exit color change, 'Okay, unvisited exits in the status line
                    will now be shown in {1}. ', cmd.verbProd.colour_);
            }
        }
    ;
:::

::: code
    DefineIAction(GoBack)
        execAction(cmd)
        {
            local pathBack = nil;
            
            if(libGlobal.lastLoc == nil)
            {
                DMsg(nowhere back, '{I} {have} nowhere to go back to. ');
                return;            
            }
            
            pathBack = defined(routeFinder) ? 
                 routeFinder.findPath(gActor.getOutermostRoom,
                    libGlobal.lastLoc) : nil;
                   
            
            if(pathBack == nil)
            {
                DMsg(no way back, 'There{dummy}{\'s} no way back. ');
                return;
            }
            
            if(pathBack.length == 1)
            {
                DMsg(already there, '{I}{\'m} already there. ');
                return;
            }
            
            local dir = pathBack[2][1];
            
            DMsg(going dir, '(going {1})\n', dir.name);
            
            gActor.getOutermostRoom.(dir.dirProp).travelVia(gActor);
            
        }
    ;
:::

::: code
    GoIn: TravelAction
        direction = inDir
        predefinedDirection = true
    ;

    GoOut: TravelAction
        direction = outDir
        predefinedDirection = true
        
        execAction(cmd)
        {
            if(!gActor.location.ofKind(Room))
                replaceAction(GetOff, gActor.location);
            else
            {
                "<<buildImplicitActionAnnouncement(true)>>";
                doTravel();
            }
        }
    ;
:::

::: code
    Hello: IAction
        baseActionClass = Hello
        
        execAction(cmd)
        {
            /* first build the scope list so we know which actors are in scope */
            buildScopeList();
            
            /* 
             *   if the pc isn't already talking to someone then this is an attempt
             *   to engage a new interlocutor in conversation.
             */
            if(gPlayerChar.currentInterlocutor == nil)
            {
                /* 
                 *   Ascertain how many actors other than the player char are in
                 *   scope (and thus potentially greetable.
                 */

                local greetList = scopeList.subset(
                        { x: x.ofKind(Actor) && x != gPlayerChar });
                
                local greetCount = greetList.length;
                
                /* If there are no other actors in scope, say so. */            
                if(greetCount == 0)
                {
                    DMsg(no one here, 'There{dummy}{\'s} no one {here} to talk to.
                        ');
                }
                /* 
                 *   Otherwise construct a list of all the actors in scope and greet
                 *   all of them (rather than asking the player to disambiguate -
                 *   after all the pc may have just said 'hello' to a room full of
                 *   people and there's no reason why they shouldn't all respond).
                 */
                else
                {               
                    foreach(local greeted in greetList)
                    {
                        curObj = greeted;
                        greeted.sayHello();
                    }
                }
            }
            /* 
             *   If the player char is currently talking to someone, say so and
             *   carry out a repeat greeting.
             */
            else
            {
                DMsg(already talking, '{I}{\'m} already talking to {1}. ',
                     gPlayerChar.currentInterlocutor.theName);
                
                gPlayerChar.currentInterlocutor.sayHello();
            }
        }
        
        curObj = nil  
    ;
:::

::: code
    class ImplicitConversationAction: TopicAction
        execAction(cmd)
        {
            if(cmd.iobj == nil && cmd.dobj != nil)
            {
                if(cmd.dobj.ofKind(ResolvedTopic))
                    topics = cmd.dobj.topicList;
                else
                    topics = cmd.dobj;
            }
            else if (cmd.dobj == nil && cmd.iobj != nil)
            {
                if(cmd.iobj.ofKind(ResolvedTopic))
                    topics = cmd.iobj.topicList;
                else
                    topics = cmd.iobj;
            }
            
            if(gPlayerChar.currentInterlocutor == nil ||
               !Q.canTalkTo(gPlayerChar, gPlayerChar.currentInterlocutor))  
                DMsg(not talking, '{I}{\'m} not talking to anyone. ');
            else
            {
                resolvePronouns();
                curObj = gPlayerChar.currentInterlocutor;
                gPlayerChar.currentInterlocutor.handleTopic(topicListProperty, 
                    topics);
            }
        }
        
        /* 
         *   This is a bit of a kludge to deal with the fact that the Parser doesn't
         *   seem able to resolve pronouns within ResolvedTopics. We do it here
         *   instead.
         */
        
        resolvePronouns()
        {
            local actor = gPlayerChar.currentInterlocutor;
            for(local cur in topics, local i = 1;; ++i)
            {
                if(cur == Him && actor.isHim)
                    topics[i] = actor;
                
                if(cur == Her && actor.isHer)
                    topics[i] = actor;
                
                if(cur == It && actor.isIt)
                    topics[i] = actor;
            }
        }
        
        
        topicListProperty = nil
        topics = nil
    ;
:::

::: code
    DefineIAction(Inventory)
        execAction(cmd)
        {
            /* 
             *   If splitListing is true, we potentially need to display two lists,
             *   one of what the actor is wearing and one of what the actor is
             *   carrying.
             */
            if(splitListing)
            {
                /* Construct a list of what the actor is wearing */
                local wornList = gActor.contents.subset({o: o.wornBy == gActor });
                
                /* Construst a list of what the actor is carrying */
                local carriedList = gActor.contents.subset({o: o.wornBy == nil });

                /* 
                 *   If anything is being worn, get a list of it minus the final
                 *   paragraph break and then display it.
                 */
                if(wornList.length > 0)
                {               
                    wornLister.show(wornList, 0, nil);
                    
                    /* 
                     *   If nothing is being carried, terminate the list with a full
                     *   stop and a paragraph break.
                     */
                    if(carriedList.length == 0)
                        ".<.p>";
                    
                    /*  
                     *   Otherwise prepare to append the list of what's being
                     *   carried.
                     */
                    else
                        DMsg(inventory list conjunction, ', and \v');
                    
                }
                /* 
                 *   If something's being carried or nothing's being worn, display
                 *   an inventory list of what's being carried. If nothing's being
                 *   worn or carried, this will display the "You are empty-handed"
                 *   message.
                 */
                if(carriedList.length > 0 || wornList.length == 0)
                    inventoryLister.show(carriedList, 0);
            }
            else
            {
                inventoryLister.show(gActor.contents, 0);
            }
            
            /* Mark eveything just listed as having been seen. */
            gActor.contents.forEach({x: x.noteSeen()});
        }
       
        /* Do we want separate lists of what's worn and what's carried? */
        splitListing = true
    ;
:::

::: code
    DefineIAction(Listen)
        execAction(cmd)
        {
            /* 
             *   I may be able to hear things that aren't technically in scope,
             *   since they may be hidden in containers that allow sound through.
             */        
            local s_list = gActor.getOutermostRoom.allContents.subset(
                {x: Q.canHear(gActor,x) && x.isProminentNoise});
            
            s_list = s_list.getUnique();
            
            local r_list = getRemoteSoundList().getUnique() - s_list;
            
            /* 
             *   Create a local variable to keep track of whether we've displayed
             *   anything.
             */
            local somethingDisplayed = nil;
            
            foreach(local cur in s_list)
            {
                if(cur.displayAlt(&listenDesc))
                    somethingDisplayed = true;
            }
            
            if(listRemoteSounds(r_list))
                somethingDisplayed = true;
            
            
            if(!somethingDisplayed)
                DMsg(hear nothing listen, '{I} hear{s/d} nothing out of the
                    ordinary.<.p>');

            
        }
        
        /* Do nothing in the core library; senseRegion.t will override if present */
        getRemoteSoundList() { return []; }
        
        /* Do nothing in the core library; senseRegion.t will override if present */
        listRemoteSounds(lst) { }
    ;
:::

::: code
    DefineTAction(PushTravelDir)
        execAction(cmd)
        {
            local conn;
        
            /* Note whether travel is allowed. This can be adjusted by the dobj */
            travelAllowed = nil;
            
            /* Get the direction of travel from the command */
            direction = cmd.verbProd.dirMatch.dir;
            
            /* 
             *   Carry out the inherited handling, including calling dobjFor(PushTravelDir))
             *   on the dobj
             */
            inherited(cmd);
            
            /* Proceed to carry out the travel if the dobj allows it */
            if(travelAllowed)
            {
                /* Note the old location, which is the actor's current room. */ 
               local oldLoc = gActor.getOutermostRoom; 
                
               /*  
                *   If the relevant direction property of the actor's current room
                *   points to an object, then try pushing the dobj via that object
                *   (e.g. up the stairs or through the door).
                */ 
               if(oldLoc.propType(direction.dirProp) == TypeObject)
               {
                    /* Note the connector object in the relevant direstion */
                    local conn = oldLoc.(direction.dirProp);
                    
                    /*  
                     *   If the connector object defines a PushTravelVia action,
                     *   then replace the current action with that PushTravelVia
                     *   action (e.g. PushTravelGoThrough or PushTravelClimbUp).
                     */
                    if(conn.PushTravelVia)
                        replaceAction(conn.PushTravelVia, gDobj, conn);
                                   
                    /* 
                     *   Otherwise, if the travel barriers would not allow the dobj
                     *   to pass, stop the action here.
                     */
                    if(!conn.checkTravelBarriers(curDobj))
                    {                    
                        return;
                    }
                    
                }
                
                /* 
                 *   If the direction property isn't attached to an object, the
                 *   chances are that travel won't be allowed, so in that case we
                 *   don't want to display a message about attempting to push the
                 *   direct object anywhere, but if it is, then the chances are that
                 *   travel is possible (unless it's already been ruled out) so we
                 *   display a suitable message.
                 */
                if(oldLoc.propType(direction.dirProp) == TypeObject)
                    gDobj.beforeMovePushable(conn, direction);
                
                /* 
                 *   Temporarily set the isHidden property of the direct
                 *   object to true so we don't see it listed in its old location if
                 *   there's a sight path to it there from the actor's new location.
                 */
                
                local wasHidden;
                try
                {
                    wasHidden = gDobj.propType(&isHidden) is in (TypeCode, TypeFuncPtr) ?
                        gDobj.getMethod(&isHidden) : isHidden;
                    
                    gDobj.isHidden = true;
                    
                    /* 
                     *   Carry out the standard handling of TravelAction to move the
                     *   actor in the appropriate direction
                     */ 
                    delegated TravelAction(cmd);
                }
                finally
                {
                    if(dataTypeXlat(wasHidden) is in (TypeCode, TypeFuncPtr))
                        gDobj.setMethod(&isHidden, wasHidden);
                    else
                        gDobj.isHidden = wasHidden;
                }
                
                
                /* 
                 *   If the actor has moved to a new location, move the dobj to that
                 *   location and report what's happened.
                 */
                if(oldLoc != gActor.getOutermostRoom)
                {
                    curDobj.moveInto(gActor.getOutermostRoom);
                    curDobj.describeMovePushable(conn, gActor.getOutermostRoom);
                }
            }
                
        }
        
        travelAllowed = nil
        direction = nil
        
        doTravel() { delegated TravelAction(); }
    ;
:::

::: code
    DefineIAction(Smell)
        execAction(cmd)
        {
            /* 
             *   Build a list of all the objects in scope that both (1) define a
             *   nsmellDesc property that will display something and (2) whose
             *   isProminentSmell property is true
             */
            local s_list = gActor.getOutermostRoom.allContents.subset(
                {x: Q.canSmell(gActor, x)  &&  x.isProminentSmell});
            
            local r_list = getRemoteSmellList().getUnique() - s_list;
            
            /*  Obtain the corresponding list for remote rooms */
            local r_list = getRemoteSmellList();
            
            /* 
             *   Create a local variable to keep track of whether we've displayed
             *   anything.
             */
            local somethingDisplayed = nil;
            
            /* 
             *   Display the smellDesc of every item in our local smell list,
             *   keeping track of whether anything has actually been displayed as a
             *   result.
             */
            foreach(local cur in s_list)
            {
                if(cur.displayAlt(&smellDesc))
                    somethingDisplayed = true;
            }
            
            /* Then list any smells from remote locations */
            if(listRemoteSmells(r_list))
                somethingDisplayed = true;
            
            
            /*  If nothing has been displayed report that there is nothing to smell */        
            if(!somethingDisplayed)            
                DMsg(smell nothing intransitive, '{I} {smell} nothing out of the
                    ordinary.<.p>');
        }
        
        /* Do nothing in the core library; senseRegion.t will override if present */
        getRemoteSmellList() { return []; }
        
        /* Do nothing in the core library; senseRegion.t will override if present */
        listRemoteSmells(lst) { }
    ;
:::

::: code
    Travel: TravelAction
        direction = (dirMatch.dir)
    ;
:::

## debug.t

::: code
    DefineSystemAction(Debug)
        execAction(cmd)
        {
            gLiteral = cmd.dobj.name.toLower;
            switch(gLiteral)
            {
            case 'messages':
            case 'spelling':
            case 'actions':
            case 'doers':
                DebugCtl.enabled[gLiteral] = !DebugCtl.enabled[gLiteral];
                /* Deliberately omit break to allow fallthrough */
            case 'status':
                DebugCtl.status();
                break;
            case 'off':
            case 'stop':    
                foreach(local opt in DebugCtl.all)
                    DebugCtl.enabled[opt] = nil;
                DebugCtl.status();
                break;
            default:
                "That is not a valid option. The valid DEBUG options are DEBUG
                MESSAGES, DEBUG SPELLING, DEBUG ACTIONS, DEBUG DOERS,
                DEBUG OFF or DEBUG STOP (to turn off all options) or
                just DEBUG by itself to break into the debugger. ";
            }
            
        }
    ;
:::

## thing.t

::: code
    class Thing:  ReplaceRedirector, Mentionable

       
        
        /*  
         *   Check whether an item can be inserted into this object, or whether
         *   doing so would either exceed the total bulk capacity of the object or
         *   the maximum bulk allowed for a single item.
         */
        checkInsert(obj)
        {
            /* Create a message parameter substitution. */
            gMessageParams(obj);
            
            /* 
             *   If the bulk of obj is greater than the maxSingleBulk this Thing can
             *   take, or greater than its overall bulk capacity then display a
             *   message to say it's too big to fit inside ue.
             */
            if(obj.bulk > maxSingleBulk || obj.bulk > bulkCapacity)
                DMsg(too big, '{The subj obj} {is} too big to fit {1} {2}. ', 
                     objInPrep, theName);
            
            /* 
             *   Otherwise if the bulk of obj is greater than the remaining bulk
             *   capacity of this Thing allowing for what it already contains,
             *   display a message saying there's not enough room for obj.
             */
            else if(obj.bulk > bulkCapacity - getBulkWithin())
                DMsg(no room, 'There {dummy} {is} not enough room {1} {2} for {the
                    obj). ', objInPrep, theName);            
        }
        


        /* 
         *   Attempt to display prop appropriately according to it data type
         *   (single-quoted string, double-quoted string, integer or code )
         */
        display(prop)    
        {
            switch(propType(prop))
            {
                /* 
                 *   If prop is a single-quoted string or an integer, simply display
                 *   it.
                 */
            case TypeSString:
            case TypeInt:    
                say(self.(prop));
                break;
                
                /* If prop is a double-quoted string, display it by executing it. */
            case TypeDString:
                self.(prop);
                break;
                
                /* if prop is a method, execute it. */
            case TypeCode:
                /* 
                 *   In case prop is a method that returns a single-quoted string,
                 *   note the return value from executing prop.
                 */
                local str = self.(prop);
                
                /* If it's a string, display it. */
                if(dataType(str) == TypeSString)
                    say(str);
                break;
            default:
                /* do nothing */
                break;
            }
        }
        
        /* 
         *   Additional information to display after our desc in response to an
         *   EXAMINE command.
         */ 
        examineStatus()
        {        
            /* First display our stateDesc (our state-specific information) */
            display(&stateDesc);
            
            /* 
             *   Then display our list of contents, unless we're a Carrier (an actor
             *   carrying our oontents) or our contentsListedInExamine is nil.
             */
            if(contType != Carrier && contentsListedInExamine)        
            {          
                /* 
                 *   Start by marking our contents as not mentioned to ensure that
                 *   they all get listed.
                 */
                unmention(contents);
                
                /* Then list our contents using our examineLister. */
                listSubcontentsOf(self, examineLister);            
            }           
               
        }
        
         /*   Calculate the total bulk of the items contained within this object. */
        getBulkWithin()
        {
            local totalBulk = 0;
            foreach(local cur in contents)
                totalBulk += cur.bulk;
            
            return totalBulk;
        }
        
        /*  
         *   Calculate the total bulk carried by an actor, which excludes the bulk
         *   of any items currently worn or anything fixed in place.
         */
         getCarriedBulk()
        {
            local totalBulk = 0;
            foreach(local cur in directlyHeld)
            {           
                totalBulk += cur.bulk;
            }
            
            return totalBulk;
        }
        
        /* 
         *   Basic moveInto for moving an object from one container to another by
         *   program fiat.
         */
        
        moveInto(newCont)
        {
            /* If we have a location, remove us from its list of contents. */
            if(location != nil)            
                location.removeFromContents(self);
               
             /* Set our new location. */           
            location = newCont;
             
            /* 
             *   Provided our new location isn't nil, add us to our new location's
             *   list of contents.
             */         
            if(location != nil)
                location.addToContents(self);        
        }
        
        /* Move into generated by a user action, which includes notifications */
        actionMoveInto(newCont)
        {
            /* 
             *   If we have a location, notify our existing location that we're
             *   about to be removed from it.
             */
            if(location != nil)
                location.notifyRemove(self);            
            
            /* 
             *   If the location we're about to be moved into is non-nil, notify our
             *   new location that we're about to be moved into it. Note that both
             *   this and the previous notification can veto the move with an exit
             *   command.
             */
            if(newCont != nil)
                newCont.notifyInsert(self); 
            
            /* Carry out the move. */
            moveInto(newCont);
            
            /* Note that we have been moved. */
            moved = true;
            
            /* If the player character can now see us, note that we've been seen */
            if(Q.canSee(gPlayerChar, self))
                noteSeen();
        }
        
        /* 
         *   Receive notification that obj is about to be removed from inside us; by
         *   default we do nothing.
         */
        notifyRemove(obj) { }
        
        /* 
         *   Receive notification that obj is about to be inserted into us; by
         *   default we do nothing.
         */
        notifyInsert(obj) { }
        
        

        /* Note that we've been seen and where we were last seen */    
        noteSeen()
        {
            gPlayerChar.setHasSeen(self);
            lastSeenAt = location;
        }  
        
        /*
         *   Have we been seen?  This is set to true the first time the object
         *   is described or listed in a room description or the description of
         *   another object (such as LOOK IN this object's container).  
         */
        seen = nil

        /*
         *   The last location where the player character saw this object.
         *   Whenever the object is described or listed in the description of a
         *   room or another object, we set this to the object's location at
         *   that time.  
         */
        lastSeenAt = nil
        
        /* 
         *   Mark everything item in lst as not mentioned , and carry on down the
         *   containment tree marking the contents of every item in lst as not
         *   mentioned.
         */
        unmention(lst)
        {
            foreach(local obj in lst)
            {
                obj.mentioned = nil;
                
                /* If obj has any contents, unmention every item in is contents */
                if(obj.contents.length > 0)
                    unmention(obj.contents);
            }
        }
        
        /********************************************
         *   CLOSE
         ********************************************/
        
        /* By default something is closeable if it's openable */         
        isCloseable = (isOpenable)
        
        dobjFor(Close)
        {
            preCond = [touchObj]
            
            remap()
            {
                if(!isCloseable && remapIn != nil && remapIn.isClosable)
                    return remapIn;
                else
                    return self;
            }
            
            
            verify()
            {
                if(!isCloseable)
                    illogical(cannotCloseMsg);
                if(!isOpen)
                    illogicalNow(alreadyClosedMsg);
                logical;
            }
               
            
            action()
            {            
                makeOpen(nil);
            }
            
            report()
            {
                DMsg(report close, 'Done |{I} {close} <<theName>>. ');
            }
        }
        
        cannotCloseMsg = BMsg(not closeable, '{The subj dobj} {is} not something
            that {can} be closed. ')
        alreadyClosedMsg = BMsg(already closed,'{The subj dobj} {isn\'t} open. ')
        
         /********************************************
         *   DOFF
         ********************************************/
        
        /* By default we assume that something's doffable if it's wearable */
        isDoffable = (isWearable)
        
        dobjFor(Doff)
        {
            
            verify()
            {
                if(wornBy != gActor)
                    illogicalNow(notWornMsg);
                            
                if(!isDoffable)
                    illogical(cannotDoffMsg);
            }
            
            check()
            {
                checkRoomToHold();
            }
            
            action()  {   makeWorn(nil);  }
            
            report()
            {
                DMsg(okay doff, 'Okay, {I}{\'m} no longer wearing {1}. ', 
                     gActionListStr);
                
            }
        }
        
      
        cannotDoffMsg = (cannotWearMsg)
        
        notWornMsg = BMsg(not worn, '{I}{\'m} not wearing {the dobj}. ')
        
         /********************************************
         *   DROP
         ********************************************/
        
        dobjFor(Drop)
        {
            preCond = [objNotWorn]
            
            verify()
            {
                /* I can't drop something I'm not holding */
                if(!isDirectlyIn(gActor))
                    illogicalNow(notHoldingMsg);
                
                /* 
                 *   Even if something is directly in me, I can't drop it if it's
                 *   fixed in place (since it's then presumably a part of me).
                 */
                else if(isFixed)
                    illogical(partOfYouMsg);
                
                /*  
                 *   And I can't drop something that game code has deemed to be not
                 *   droppable for some other reason.
                 */
                else if(!isDroppable)
                    illogical(cannotDropMsg);
                
                logical;
            }
                    
            
            action()
            {           
                actionMoveInto(gActor.location.dropLocation);
            }
            
            report()
            {
                DMsg(report drop, 'Dropped. |{I} {drop} {1}. ', gActionListStr);            
            }
        }
        
        notHoldingMsg = BMsg(not holding, '{I} {amn\'t} holding {the dobj}. ')
        partOfYouMsg = BMsg(part of me, '{The subj dobj} {is} part of {me}. ')
        
        /* By default we can drop anything that's held */
        isDroppable = true
        
        cannotDropMsg = BMsg(cannot drop, '{The subj dobj} {can\'t} be dropped. ')
        
        /* The location in which something dropped in me should land. */
        dropLocation = self
        
         /********************************************
         *   EXAMINE
         ********************************************/
        
        dobjFor(Examine)
        {
            preCond = [objVisible]
            
            verify() 
            { 
                if(isDecoration)
                    logicalRank(70);
                else
                    logical; 
            }
            
            check() { }
            
            action()
            {
                /* 
                 *   Display our description. Normally the desc property will be
                 *   specified as a double-quoted string or a routine that displays
                 *   a string, but by using the display() message we ensure that it
                 *   will still be shown even desc has been defined a single-quoted
                 *   string.
                 */ 
                display(&desc);
                
                /*   
                 *   Display any additional information, such as our stateDesc (if
                 *   we have one) and our contents (if we have any).
                 */
                examineStatus();
                
                /*   Note that we've now been examined. */
                examined = true;
                "\n";
            }
        }
        
        
         /********************************************
         *   GONEAR
         ********************************************/
        
        /* 
         *   The GoNear action allows the player character to teleport around the
         *   map.
         */
        dobjFor(GoNear)
        {
            verify()
            {
                if(getOutermostRoom == nil)
                    illogicalNow(cannotGoNearThereMsg);
                
                if(ofKind(Room))
                    logicalRank(120);
            }
            
            action()
            {
                DMsg(gonear, '{I} {am} translated in the twinkling of an
                    eye...<.p>');
                getOutermostRoom.travelVia(gActor);
            }
        }
        
         
        
        cannotGoNearThereMsg = BMsg(cannot go there, '{I} {can\'t} go there right
            {now}. ')

         /********************************************
         *   GOTO
         ********************************************/
        
        /* 
         *   The GoTo action allows the player character to navigate the map through
         *   the use of commands such as GO TO LOUNGE.
         */
        dobjFor(GoTo)
        {
            verify()
            {
                /* 
                 *   If the actor is already in the direct object, there's no need
                 *   to move any further.
                 */
                if(gActor.isIn(self))
                    illogicalNow(alreadyThereMsg);
                
                /*  
                 *   If the direct object is in the actor's location, there's no
                 *   need for the actor to move to get to it.
                 */
                if(isIn(gActor.getOutermostRoom))
                    illogicalNow(alreadyPresentMsg);
                    
                /*  
                 *   It's legal to GO TO a decoration object, but given the choice,
                 *   it's probably best to let the parser choose a non-decoration in
                 *   cases of ambiguity, so we'll decorations a slightly lower
                 *   logical rank.
                 */
                if(isDecoration)
                    logicalRank(90);    
            }
            
            /* 
             *   The purpose of the GO TO action is to take the player char along
             *   the shortest route to the destination. The action routine
             *   calculates the route and takes the first step.
             */
            action()
            {
                /* 
                 *   Calculate the route from the actor's current room to the
                 *   location where the target object was last seen, using the
                 *   pcRouteFinder to carry out the calculations if it is present.
                 */
                local route = defined(pcRouteFinder) && lastSeenAt != nil 
                    ? pcRouteFinder.findPath(
                    gActor.getOutermostRoom, lastSeenAt.getOutermostRoom) : nil;
                
                /*  
                 *   If we don't find a route, just display a message saying we
                 *   don't know how to get to our destination.
                 */
                if(route == nil)            
                    sayDontKnowHowToGetThere();
                    
                /*  
                 *   If the route we find has only one element in its list, that
                 *   means that we're where we last saw the target but it's no
                 *   longer there, so we don't know where it's gone. In which case
                 *   we display a message saying we don't know how to reach our
                 *   target.
                 */    
                else if(route.length == 1)
                    sayDontKnowHowToReach();
                        
                /*  
                 *   If the route we found has at least two elements, then use the
                 *   first element of the second element as the direction in which
                 *   we need to travel, and use the Continue action to take a step
                 *   in that direction.
                 */        
                else
                {
                    local idx = 2;
                    local dir = route[2][1];
                    local oldLoc = gPlayerChar.getOutermostRoom();
                    
                    local commonRegions =
                        gPlayerChar.getOutermostRoom.regionsInCommonWith(dest);
                    
                    local regionFastGoTo = 
                        commonRegions.indexWhich({r: r.fastGoTo }) != nil;
                    
                    local fastGo = regionFastGoTo || gameMain.fastGoTo;
                    
                    Continue.takeStep(dir, getOutermostRoom, fastGo);                
                    
                    
                    /* 
                     *   If the fastGoTo option is active, continue moving towards
                     *   the destination until either we reach it our we're
                     *   prevented from going any further.
                     */
                    while((fastGo)
                          && oldLoc != gPlayerChar.getOutermostRoom 
                          && idx < route.length)
                    {
                        local dir = route[++idx][1];
                        Continue.takeStep(dir, getOutermostRoom, true);
                    }               
                }
            }
        }
        
        alreadyThereMsg = BMsg(already there, '{I}{\'m} already there. ')
        alreadyPresentMsg = BMsg(already present, '{The subj dobj} {is} right
            {here}. ')    
            
            
        /* 
         *   The lockability property determines whether this object is lockable and
         *   if so how. The possible values are notLockable, lockableWithoutKey,
         *   lockableWithKey and indirectLockable.
         */
         
        /* 
         *   Note: we don't use isLockable, because this is not a binary property;
         *   there are different kings of lockability and defining an isLockable
         *   property in addition would only confuse things and might break the
         *   logic.
         */    
        lockability = notLockable
        
        /* Is this object currently locked */
        isLocked = nil
        
        /* 
         *   Make us locked or ublocked. We define this as a method so that
         *   subclasses such as Door can override to produce side effects (such as
         *   locking or unlocking the other side).
         */    
        makeLocked(stat)
        {
            isLocked = stat;
        }    
            
         /********************************************
         *   LOCK
         ********************************************/    
            
            
        dobjFor(Lock)
        {
            preCond = [objClosed, touchObj]
            
             /* 
              *   Remap the lock action to our remapIn object if we're not lockable
              *   but we have a lockable remapIn object (i.e. an associated
              *   container).
              */
            remap()
            {
                if(lockability == notLockable && remapIn != nil &&
                   remapIn.lockability != notLockable)
                    return remapIn;
                else
                    return self;
            }
            
            verify()
            {
                if(lockability == notLockable || lockability == nil)
                    illogical(notLockableMsg);
                
                if(lockability == indirectLockable)
                    implausible(indirectLockableMsg);
                
                if(isLocked)
                    illogicalNow(alreadyLockedMsg);            
            }
            
            check()
            {
                /* 
                 *   if we need a key to be unlocked with, check whether the player
                 *   is holding a suitable one.
                 */
                if(lockability == lockableWithKey)            
                    findPlausibleKey();                
                
                   
            }
            
            action()
            {
                /* 
                 *   The useKey_ property will have been set by the
                 *   findPlausibleKey() method at the check stage. If it's non-nil
                 *   it's the key we're going to use to try to lock this object
                 *   with, so we display a parenthetical note to the player that
                 *   we're using this key. (Note: the action would have failed at
                 *   the check stage if useKey_ wasn't the right key for the job).
                 */
                if(useKey_ != nil)
                    extraReport(withKeyMsg);
                    
                /* 
                 *   Otherwise, if we need a key to unlock this object with, ask the
                 *   player to specify it and then execute a LockWith action
                 *   using that key.
                 */     
                else
                    askForIobj(LockWith);
                
                /*  Make us locked. */
                makeLocked(true);                        
            }
            
            report()
            {
                DMsg(report lock, okayLockMsg, gActionListStr);
            }
        }
        
        okayLockMsg = 'Locked.|{I} {lock} {1}. '
        
        withKeyMsg = BMsg(with key, '(with {1})\n', useKey_.theName)
        
        /* 
         *   Find a key among the actor's possessions that might plausibly lock or
         *   unlock us.
         */
        findPlausibleKey(silent = nil)
        {
          
            useKey_ = nil;  
            local lockObj = self;        
            
            /* 
             *   First see if the actor is holding a key that is known to work on
             *   this object. If so, use it.
             */
            foreach(local obj in gActor.contents)
            {
                if(obj.ofKind(Key) 
                   && obj.knownLockList.indexOf(self) !=  nil)
                {
                    useKey_ = obj;
                    return;
                }
            }
            
            /*  
             *   Then see if the actor is holding a key that might plausibly work on
             *   this object; if so, try that.
             */
            foreach(local obj in gActor.contents)
            {
                if(obj.ofKind(Key) 
                   && obj.plausibleLockList.indexOf(self) !=  nil)
                {
                    useKey_ = obj;
                    break;
                }
            }
            
            /*  
             *   If we haven't found a suitable key yet, check to see if the actor
             *   is holding one that might fit our lexicalParent, if we have a
             *   lexicalParent whose interior we're representing.
             */
            if(useKey_ == nil)
            {
                if(lexicalParent != nil && lexicalParent.remapIn == self)
                {
                    lexicalParent.findPlausibleKey();
                    useKey_ = lexicalParent.useKey_;
                    lockObj = lexicalParent; 
                }
            }
            
            /*  
             *   If we've found a possible key but it doesn't actually work on this
             *   object, report that we're trying this key but it doesn't work.
             */
            if(useKey_ && useKey_.actualLockList.indexOf(lockObj) == nil && !silent)
            {
                say(withKeyMsg);
                say(keyDoesntWorkMsg);            
            }
            
        }
        
        withKeyMsg = BMsg(with key, '(with {1})\n', useKey_.theName)
           
        keyDoesntWorkMsg = BMsg(key doesnt work, 'Unfortunately {1} {dummy}
            {doesn\'t work} on {the dobj}. ', useKey_.theName)
        
        useKey_ = nil
            
         /********************************************
         *   LOCKWITH
         ********************************************/    
            
        dobjFor(LockWith)
        {
            preCond  = [objClosed, touchObj]
            
            /* 
             *   Remap the lock action to our remapIn object if we're not lockable
             *   but we have a lockable remapIn object (i.e. an associated
             *   container).
             */
            remap()
            {
                if(lockability == notLockable && remapIn != nil &&
                   remapIn.lockability != notLockable)
                    return remapIn;
                else
                    return self;
            }
            
            verify()
            {
                if(lockability == notLockable || lockability == nil)
                    illogical(notLockableMsg);
                
                if(lockability == lockableWithoutKey)
                    implausible(keyNotNeededMsg);
                
                if(lockability == indirectLockable)
                    implausible(indirectLockableMsg);
                
                if(lockability == lockableWithKey)
                {
                    if(isLocked)
                       illogicalNow(alreadyLockedMsg);
                    else                    
                        logical;
                }
            }
            
        }
        
        alreadyLockedMsg = BMsg(already locked, '{The subj dobj} {is} already
            locked. ')
        
        
        /* 
         *   Usually, if something can be used to unlock things it can also be used
         *   to lock them
         */
        canLockWithMe = (canUnlockWithMe)
           
         /********************************************
         *   LOOKBEHIND
         ********************************************/    
        
        /*   
         *   By default we make it possible to look behind things, but there could
         *   be many things it makes no sense to try to look behind.
         */
        
        canLookBehindMe = true    
        
        dobjFor(LookBehind)
        {
            preCond = [objVisible, touchObj]
            
            remap = remapBehind
            
            verify()
            {
                if(!canLookBehindMe)
                    illogical(cannotLookBehindMsg);
            }
            
            
            action()
            {
                
                /* 
                 *   If we're actually a rear-type object, i.e. if our contType is
                 *   Behind, try to determine what's behind us and display a list of
                 *   it; if there's nothing behind us just display a message to that
                 *   effect.
                 */
                if(contType == Behind)
                {                
                    /* 
                     *   If there's anything hidden behind us move it into us before
                     *   doing anything else
                     */
                    if(hiddenBehind.length > 0)                
                        moveHidden(&hiddenBehind, self);                    
                    
                    /* 
                     *   If there's nothing behind us, simply display our
                     *   lookBehindMsg
                     */
                    if(contents.length == 0)
                        display(&lookBehindMsg); 
                    else
                    {
                        obj.unmention(contents);
                        
                        /* 
                         *   It's possible that we have contents but nothing in our
                         *   contents is listable, so instead of just displaying a
                         *   list of contents we also watch to see if anything is
                         *   displayed; if nothing was we display our lookBehindMsg
                         *   instead.
                         */
                        if(gOutStream.watchForOutput(
                            {: obj.listSubcontentsOf(self, lookInLister) }) == nil)                        
                            display(&lookBehindMsg); 

                    }
                }
                /* 
                 *   Otherwise, if we're not a rear-type object (our contType is not
                 *   Behind), if there's anything in our hiddenBehind list move it
                 *   into scope and display a list of it.
                 */
                else if(hiddenBehind.length > 0)            
                    findHidden(&hiddenBehind, Behind);   

                 /*  Otherwise just display our lookBehindMsg */
                else
                    display(&lookBehindMsg);           
                
                
            }
        }
        
        cannotLookBehindMsg = BMsg(cannot look behind, '{I} {can\'t} look behind
            {that dobj}. ')
        
        lookBehindMsg = BMsg(look behind, '{I} {find} nothing behind {the
            dobj}. ')
        
        /* 
         *   If there's something hidden in the dobj but nowhere obvious to move it
         *   to then by default we move everything from the hiddenIn list to the
         *   actor's inventory and announce that the actor has taken it. We call
         *   this out as a separate method to make it easy to override if desired.
         */    
        findHidden(prop, prep)
        {
            DMsg(find hidden, '\^{1} {the dobj} {i} {find} {2}<>, which {i} {take}<>. ',
                 prep.prep, makeListStr(self.(prop)));
            
            moveHidden(prop, findHiddenDest);        
        }
        
         
       
        /* 
         *   If  the actor finds something in a hiddenPrep list and there's nowhere
         *   obvious for it go, should he take it? By default the actor should take
         *   it if the object he's found it in/under/behind is fixed in place.
         */
        autoTakeOnFindHidden = (isFixed)
        
        /*   
         *   Where should an item that's been hidden in/under/behind something be
         *   moved to when its found? If it's taken, move into the actor; otherwise
         *   move it to the location of the object it's just been found
         *   in/under/behind.
         */
        findHiddenDest = (autoTakeOnFindHidden ? gActor : location)
        
        
        
          
         /********************************************
         *   LOOKIN
         ********************************************/  
          
        dobjFor(LookIn)
        {
            preCond = [objVisible, containerOpen]
            
            remap = remapIn        
            
            verify()
            {
                if(contType == In || remapIn != nil)
                    logicalRank(120);
                            
                logical;
            }
            
            action()
            {
               /* 
                *   If we're actually a container-type object, i.e. if our contType
                *   is In, try to determine what's inside us and display a list of
                *   it; if there's nothing inside us just display a message to that
                *   effect.
                */
                if(contType == In)
                {            
                    /* 
                     *   If there's anything hidden inside us move it into us before
                     *   doing anything else
                     */
                    if(hiddenIn.length > 0)                
                        moveHidden(&hiddenIn, self);                    
                    
                    
                    /* If there's nothing inside us, simply display our lookInMsg */
                    if(contents.length == 0)
                        display(&lookInMsg);                    
                    
                    /* Otherwise display a list of our contents */
                    else
                    {
                        /* Start by marking our contents as not mentioned. */
                        unmention(contents);
                        
                        /* 
                         *   It's possible that we have contents but nothing in our
                         *   contents is listable, so instead of just displaying a
                         *   list of contents we also watch to see if anything is
                         *   displayed; if nothing was we display our lookInMsg
                         *   instead.
                         */
                        if(gOutStream.watchForOutput(
                            {: listSubcontentsOf(self, lookInLister) }) == nil)
                          display(&lookInMsg);       

                    }
                }
                
                /* 
                 *   Otherwise, if we're not a container-type object (our contType
                 *   is not In), if there's anything in our hiddenIn list move it
                 *   into scope and display a list of it.
                 */
                else if(hiddenIn.length > 0)            
                    findHidden(&hiddenIn, In);                               
                            
                
                /*  Otherwise just display our lookInMsg */
                else
                    display(&lookInMsg);
            }
            
        }
        
        
        
        lookInMsg = BMsg(look in, '{I} {see} nothing interesting in {the
            dobj}. ')
        
        

         /********************************************
         *   LOOKUNDER
         ********************************************/
        
        /* 
         *   We can look under most things, but there are some things (houses, the
         *   ground, sunlight) it might not make much sense to try looking under.
         */
        canLookUnderMe = true
            
        
        dobjFor(LookUnder)
        {
            preCond = [objVisible, touchObj]
            
            remap = remapUnder
            
            verify()
            {
                if(!canLookUnderMe)
                    illogical(cannotLookUnderMsg);       
            }
            
            
            action()
            {            
                /* 
                 *   If we're actually an underside-type object, i.e. if our
                 *   contType is Under, try to determine what's under us and display
                 *   a list of it; if there's nothing under us just display a
                 *   message to that effect.
                 */                       
                if(contType == Under)
                {
                    
                    /* 
                     *   If there's anything hidden under us move it into us before
                     *   doing anything else
                     */
                    if(hiddenUnder.length > 0)                
                        moveHidden(&hiddenUnder, self);                    
                    
                    /* If there's nothing under us, simply display our lookUnerMsg */
                    if(contents.length == 0)
                        display(&lookUnderMsg);  
                    
                    /* Otherwise display a list of our contents */
                    else
                    {
                        /* Start by marking our contents as not mentioned. */
                        unmention(contents);
                        
                        /* 
                         *   It's possible that we have contents but nothing in our
                         *   contents is listable, so instead of just displaying a
                         *   list of contents we also watch to see if anything is
                         *   displayed; if nothing was we display our lookUnderMsg
                         *   instead.
                         */
                        if(gOutStream.watchForOutput(
                            {: listSubcontentsOf(self, lookInLister) }) == nil)
                            display(&lookUnderMsg);  
                        
                    }
                }
                
                /* 
                 *   Otherwise, if we're not an underside-type object (our contType
                 *   is not Under), if there's anything in our hiddenUnder list move
                 *   it into scope and display a list of it.
                 */
                else if(hiddenUnder.length > 0)            
                    findHidden(&hiddenUnder, Under);      
                
                /*  Otherwise just display our lookUnderMsg */
                else
                    display(&lookUnderMsg);           
                
            }
        }
        
        cannotLookUnderMsg = BMsg(cannot look under, '{I} {can\'t} look under {that
            dobj}. ')
        
        lookUnderMsg = BMsg(look under, '{I} {find} nothing of interest under
            {the dobj}. ')
        
         
        
         /********************************************
         *   OPEN
         ********************************************/
         
        /* 
         *   Is this object openable. If this property is set to true then this
         *   object can be open and closed via the OPEN and CLOSE commands. Note
         *   that setting this property to true also automatically makes the
         *   OpenClosed State apply to this object, so that it can be referred to as
         *   'open' or 'closed' accordingly.
         */
        isOpenable = nil
        
        /* 
         *   Is this object open. By default we'll make Things open so that their
         *   interiors (if they have any) are accessible, unless they're openable,
         *   in which case we'll assume they start out closed.
         */
        isOpen = (!isOpenable)
        
        /* 
         *   Make us open or closed. We define this as a method so that subclasses
         *   such as Door can override to produce side effects (such as opening or
         *   closing the other side).
         */
        
        makeOpen(stat)
        {
            isOpen = stat;
        }
        
        dobjFor(Open)
        {
            
            preCond = [touchObj]
            
            /* 
             *   If this object is not itself openable, but its remapIn property
             *   points to an associated object that is, remap this action to use
             *   the remapIn object instead of us.
             */
            remap()
            {
                if(!isOpenable && remapIn != nil && remapIn.isOpenable)
                    return remapIn;
                else
                    return self;
            }
            
            verify()
            {
                if(isOpenable == nil)
                    illogical(cannotOpenMsg);
                
                if(isOpen)
                    illogicalNow(alreadyOpenMsg);
                
                logical;                          
            }
            
            /* 
             *   An object can't be open if it's locked. We test this at check
             *   rather than verify since it may not be obvious that an object's
             *   locked until someone tries to open it.
             */
            check()
            {
                if(isLocked)
                    say(lockedMsg);
            }
            
            action()
            {
                makeOpen(true);
                if(!gAction.isImplicit)
                {              
                    unmention(contents);
                    
                   /* 
                    *   If opening us is not being performed as an implicit action,
                    *   list the contents that are revealed as a result of our being
                    *   opened.
                    */
                    listSubcontentsOf(self, openingContentsLister);
                }           
            }
            
            report()
            {
                DMsg(okay open, okayOpenMsg, gActionListStr);
            }
        }
        

        okayOpenMsg = 'Opened.|{I} {open} {1}. '
        
        cannotOpenMsg = BMsg(cannot open, '{The subj dobj} {is} not something {i}
            {can} open. ')
        alreadyOpenMsg = BMsg(already open, '{The subj dobj} {is} already open. ')
        lockedMsg = BMsg(locked, '{The subj dobj} {is} locked. ')
     
       
        
         /********************************************
         *   PUSH TRAVEL
         ********************************************/
        
        /* 
         *   Common handler for verifying push travel actions. The via parameter may
         *   be a preposition object (such as Through) defining what kind of push
         *   traveling the actor is trying to do (e.g. through a door or up some
         *   stairs).
         */
        verifyPushTravel(via)
        {
            /* Note the mode of push travel (a preposition) for use in messages. */ 
            viaMode = via;
            
            if(!allowPushTravel)
                illogical(cannotPushTravelMsg);
            
            if(gActor.isIn(self))
                illogicalNow(cannotPushOwnContainerMsg);
            
            if(gIobj == self)
                illogicalSelf(cannotPushViaSelfMsg);
        }
            
        viaMode = ''
        
        cannotPushOwnContainerMsg = BMsg(cannot push own container, '{I} {can\'t}
            push {the dobj} anywhere while {he actor}{\'s} {1} {him dobj}. ',
                                         gDobj.objInPrep)
        
        cannotPushViaSelfMsg = BMsg(cannot push via self, '{I} {can\'t} push {the
            dobj} {1} {itself dobj}. ', viaMode.prep)
        
        /* 
         *   By default we can't push travel most things. Push Travel means pushing
         *   an object from one place to another and traveling with it.
         */
        allowPushTravel = nil
        
         /********************************************
         *   PUSHTRAVELDIR
         ********************************************/
        
        /* 
         *   PushTravelDir handles pushing an object in a particular direction, e.g.
         *   PUSH BOX NORTH
         */
        dobjFor(PushTravelDir)
        {
            preCond = [touchObj]
            
            verify()  {  verifyPushTravel('');  }
            
            
            action()
            {
                /* 
                 *   Most of the action is carried out by the PushTravel Action. All
                 *   we need to do here is to tell the action that we're allowing
                 *   push travel and reveal any items that come to light as a result
                 *   of moving this object.
                 */ 
                gAction.travelAllowed = true;
                
                /*  
                 *   Reveal items previously under or behind us that now become
                 *   visible.
                 */
                pushTravelRevealItems();            
            }
        }
        
        pushTravelRevealItems()
        {
            /* 
             *   Check whether moving this object revealed any items hidden behind
             *   or beneath it (even if we don't succeed in pushing the object to
             *   another room we can presumably move it far enough across its
             *   current one to reveal any items it was concealing.
             */
            revealOnMove();
            
            /* 
             *   If moving this item did reveal any hidden items, we want to see the
             *   report of them now, before moving to another location./
             */
            
            gCommand.afterReport();
            
            /* 
             *   We don't want to see these reports again at the end of the action,
             *   so clear the list.
             */
            gCommand.afterReports = [];   
        }
        
        /* Display a message explaining that push travel is not possible */  
        cannotPushTravelMsg()
        {
            if(isFixed)
                return cannotTakeMsg;
            return BMsg(cannot push travel, 'There{dummy}{\'s} no point trying to
                push {that dobj} anywhere. ');
        }
        
        /* Check the travel barriers on the indirect object of the action */
        checkPushTravel()
        {
            checkTravelBarriers(gDobj);
            checkTravelBarriers(gActor);
        }
        
        /*  Carry out the push travel on the direct object of the action. */
        doPushTravel(via)
        {
            /* 
             *   Check whether moving this object revealed any items hidden behind
             *   or beneath it (even if we don't succeed in pushing the object to
             *   another room we can presumably move it far enough across its
             *   current one to reveal any items it was concealing.
             */
            pushTravelRevealItems();       
            
            if(!gIobj.isLocked)
                describePushTravel(via); 
            
            /*  
             *   We temporarily make the push traveler item hidden before moving it
             *   to the new location so that it doesn't show up listed in its former
             *   location when actor moves to the new location and there's a sight
             *   path between the two.
             */
            local wasHidden;
            try
            {
                wasHidden = propType(&isHidden) is in (TypeCode, TypeFuncPtr) ?
                        getMethod(&isHidden) : isHidden;
                
                isHidden = true;
                
                gIobj.travelVia(gActor);
            }
            finally
            {
                if(dataTypeXlat(wasHidden) is in (TypeCode, TypeFuncPtr))
                    setMethod(&isHidden, wasHidden);
                else
                    isHidden = wasHidden;
            }
            
            /*   
             *   Use the travelVia() method of the iobj to move the iobj to its new
             *   location.
             */        
            
            if(gActor.isIn(gIobj.destination))
            {
                gIobj.travelVia(gDobj);
                gDobj.describeMovePushable(self, gActor.location);
            }        
        }
        
        
        beforeMovePushable(connector, dir)
        {
            if(connector == nil || connector.ofKind(Room))
                DMsg(before push travel dir, '{I} push{es/ed} {the dobj} {1}. ',
                     dir.departureName);
            else
                describePushTravel(viaMode);      
            
        }
        
        describeMovePushable (connector, dest)
        {
            local obj = self;
            gMessageParams(obj, dest);
            DMsg(describe move pushable, '{The subj obj} {comes} to a halt. ' );
            
        }
        
        /* 
         *   This message, called on the direct object of a PushTravel command (i.e.
         *   the object being pushed) is displayed just before travel takes place.
         *   It is used when the PushTravel command also involves an indirect
         *   object, e.g. a Passage, Door or Stairway the direct object is being
         *   pushed through, up or down. The via parameter is the preposition
         *   relevant to the kind of pushing, e.g. Into, Through or Up.
         */
        describePushTravel(via)
        {
            /* If I have a traversalMsg, use it */
            if(gIobj && gIobj.propType(&traversalMsg) != TypeNil)
                DMsg(push travel traversal, '{I} push{es/ed} {the dobj} {1}. ',
                     gIobj.traversalMsg);
            else
                DMsg(push travel somewhere, '{I} push{es/ed} {the dobj} {1}
                    {the iobj}. ', via.prep); 
        }
        
        
         /********************************************
         *   PUSHTRAVELTHROUGH
         ********************************************/
       
        /* 
         *   PushTravelThrough handles pushing something through something, such as
         *   a door or archway. Most of the actual handling is dealt with by the
         *   common routines defined above.
         */
        dobjFor(PushTravelThrough)    
        {
            preCond = [touchObj]
            verify()   {   verifyPushTravel(Through);   }
            
            action() { doPushTravel(Through); }
        }
        
        iobjFor(PushTravelThrough)
        {
            preCond = [touchObj]
            verify() 
            {  
                if(!canGoThroughMe || destination == nil)
                    illogical(cannotPushThroughMsg);
            }
            
            check() { checkPushTravel(); }
                    
            
        }
        
        cannotPushThroughMsg = BMsg(cannot push through, '{I} {can\'t} {push}
            anything through {the iobj}. ')
        
        
         /********************************************
         *   PUSHTRAVELENTER
         ********************************************/
        
        /* 
         *   PushTravelEnter handles commands like PUSH BOX INTO COFFIN, where the
         *   indirect object is a Booth-like object. The syntactically identical
         *   command for pushing things into an Enterable (e.g. PUSH BOX INTO HOUSE
         *   where HOUSE represents the outside of a separate location) is handled
         *   on the Enterable class.
         */
        dobjFor(PushTravelEnter)
        {
            preCond = [touchObj]
            verify()  {  verifyPushTravel(Into);  }        
            
        }
        
        okayPushIntoMsg = BMsg(okay push into, '{I} {push} {the dobj} into {the
            iobj}. ')
        
        iobjFor(PushTravelEnter)
        {
            preCond = [containerOpen]
            verify() 
            {  
                if(!isEnterable)
                    illogical(cannotPushIntoMsg);
            }
            
            check() 
            {             
                checkInsert(gActor);            
                checkInsert(gDobj);
            }    
            
            action() 
            {
                gDobj.actionMoveInto(self);
                gActor.actionMoveInto(self);
                if(gDobj.isIn(self))
                    say(okayPushIntoMsg);
            }
        }
        
        cannotPushIntoMsg = BMsg(cannot push into, '{I} {can\'t} {push}
            anything into {the iobj}. ')
        
         /********************************************
         *   PUSHTRAVELGETOUTOF
         ********************************************/
        
        
        dobjFor(PushTravelGetOutOf)
        {
            preCond = [touchObj]
            verify()
            {
                verifyPushTravel(OutOf);
                if(!self.isIn(gIobj))
                    illogicalNow(notInMsg);
            }       
        }
        
        
        iobjFor(PushTravelGetOutOf)
        {
            preCond = [touchObj]
            
            verify() 
            {  
                if(!gActor.isIn(self))
                    illogicalNow(actorNotInMsg);               
            }
            
            action()
            {
                gDobj.actionMoveInto(location);
                if(gDobj.location ==  location)
                {
                    say(okayPushOutOfMsg);
                    gActor.actionMoveInto(location);
                }
            }
           
        }
        
        okayPushOutOfMsg = BMsg(okay push out of, '{I} {push} {the dobj} {outof
            iobj}. ')
        
         /********************************************
         *   PUSHTRAVELCLIMBUP
         ********************************************/
        
        dobjFor(PushTravelClimbUp)
        {
            preCond = [touchObj]
            verify()  {  verifyPushTravel(Up);  }
            
            action() { doPushTravel(Up); }
        }
        
        iobjFor(PushTravelClimbUp)
        {
            preCond = [touchObj]
            
            verify() 
            {  
                if(!isClimbable || destination == nil)
                    illogical(cannotPushUpMsg);
            }
            
            check() { checkPushTravel(); }
        }
        
        cannotPushUpMsg = BMsg(cannot push up, '{I} {can\'t} {push}
            anything up {the iobj}. ')
        
        
         /********************************************
         *   PUSHTRAVELCLIMBDOWN
         ********************************************/
        
        dobjFor(PushTravelClimbDown)
        {
            preCond = [touchObj]
            verify()  { verifyPushTravel(Down);  }
            
            action() { doPushTravel(Down); }
        }
        
        iobjFor(PushTravelClimbDown)
        {
            preCond = [touchObj]
            
            verify() 
            {  
                if(!isClimbDownable || destination == nil)
                    illogical(cannotPushThroughMsg);
            }
            
            check() { checkPushTravel(); }
        }
        
        cannotPushDownMsg = BMsg(cannot push down, '{I} {can\'t} {push}
            anything down {the iobj}. ')
        
         /********************************************
         *   PUTBEHIND
         ********************************************/
        
        dobjFor(PutBehind)
        {
            preCond = [objHeld, objNotWorn]
            
            verify()
            {
                if(gIobj != nil && self == gIobj)
                    illogicalSelf(cannotPutInSelfMsg);     
                
                if(isFixed)
                    illogical(cannotTakeMsg);
                
                if(gIobj != nil && (isDirectlyIn(gIobj)))
                    illogicalNow(alreadyInMsg);
                
                if(gIobj != nil && gIobj.isIn(self))
                    illogicalNow(circularlyInMsg);           
                
                             
                logical;           
            }
            
            action()
            {
                /* Handled by iobj */
            }
            
            report()
            {
                DMsg(report put behind, '{I} {put} {1} behind {the iobj}. ', 
                     gActionListStr);
            }
            
                
        }
        
        iobjFor(PutBehind)
        {
            preCond = [touchObj]
            
            remap = remapBehind
            
            verify()
            {
                if(!canPutBehindMe)
                    illogical(cannotPutBehindMsg);
                else
                    logical;
            }
            
            check() 
            { 
                /* 
                 *   If we're actually a rear-like object (our contType is Behind),
                 *   check whether there's enough room behind us to contain the
                 *   direct object.
                 */
                if(contType == Behind)
                    checkInsert(gDobj);
                    
                /*  
                 *   Otherwise check whether adding the direct object to our
                 *   hiddenBehind list would exceed the amount of bulk allowed
                 *   there.
                 */   
                 else if(gDobj.bulk > maxBulkHiddenBehind - getBulkHiddenBehind)
                    DMsg(no room in, 'There {dummy}{isn\'t} enough room for {the
                        dobj} behind {the iobj}. ');    
            }
            
            action()
            {
                /* 
                 *   If we're actually a rear-like object (i.e. if our contType is
                 *   Behind) then something put behind us can be moved inside us.
                 *   Otherwise, all we can do with something put behind us is to add
                 *   it to our hiddenBehind list and move it off-stage.
                 */       
                if(contType == Behind)
                    gDobj.actionMoveInto(self);               
                else
                {
                    hiddenBehind += gDobj;
                    gDobj.actionMoveInto(nil);
                }
            }
            
            
        }   
        
        cannotPutBehindMsg = BMsg(cannot put behind, '{I} {cannot} put anything
            behind {the iobj}. ')
        
        
        
         /********************************************
         *   PUTIN
         ********************************************/
        
        dobjFor(PutIn)
        {
            preCond = [objHeld, objNotWorn]
            
            verify()
            {
                if(gIobj != nil && self == gIobj)
                    illogicalSelf(cannotPutInSelfMsg);   
                
                if(isFixed)
                    illogical(cannotTakeMsg);
                
                if(gIobj != nil && isDirectlyIn(gIobj))
                    illogicalNow(alreadyInMsg);
                
                if(gIobj != nil && gIobj.isIn(self))
                    illogicalNow(circularlyInMsg);    
                
                
                
                logical;
            }
            
                  
            action()
            {                     
                /* handled on iobj */                          
            }
            
            report()
            {
                DMsg(report put in, '{I} {put} {1} in {the iobj}. ', gActionListStr);            
            }
        }
        
        
            
        iobjFor(PutIn)
        {
            preCond = [containerOpen, touchObj]
            
            remap = remapIn 
            
            verify()
            {
                if(!canPutInMe)
                    illogical(cannotPutInMsg);
                
                logical;
            }
            
            check()
            {   
                /* 
                 *   If we're actually a container-like object (our contType is In),
                 *   check whether there's enough room inside us to contain the
                 *   direct object.
                 */
                if(contType == In)
                   checkInsert(gDobj);
                   
                /*  
                 *   Otherwise check whether adding the direct object to our
                 *   hiddenIn list would exceed the amount of bulk allowed there.
                 */   
                else if(gDobj.bulk > maxBulkHiddenIn - getBulkHiddenIn)
                    DMsg(no room in, 'There {dummy}{isn\'t} enough room for {the
                        dobj} in {the iobj}. ');            
            }
            
            action()
            {
                /* 
                 *   If we're actually a container-like object (i.e. if our contType
                 *   is In) then something put in us can be moved inside us.
                 *   Otherwise, all we can do with something put in us is to add it
                 *   to our hiddenIn list and move it off-stage.
                 */
                if(contType == In)
                    gDobj.actionMoveInto(self);
                else
                {
                    hiddenIn += gDobj;
                    gDobj.actionMoveInto(nil);
                }  
            }      
        
        }
        
        cannotPutInMsg = BMsg(cannot put in, '{I} {can\'t} put anything in {the
            iobj}. ')
        
        
         /********************************************
         *   PUTON
         ********************************************/
        
        dobjFor(PutOn)
        {
            preCond = [objHeld, objNotWorn]
            
            verify()
            {
                if(gIobj != nil && self == gIobj)
                    illogicalSelf(cannotPutInSelfMsg);  
                
                if(isFixed)
                    illogical(cannotTakeMsg);
                
                if(gIobj != nil && isDirectlyIn(gIobj))
                    illogicalNow(alreadyInMsg);
                
                if(gIobj != nil && gIobj.isIn(self))
                    illogicalNow(circularlyInMsg);               
                
                logical;
            }
            
            
            action()
            {          
                /* Handled on iobj */                                    
            }
            
            report()
            {
                DMsg(report put on, '{I} {put} {1} on {the iobj}. ', gActionListStr);            
            }
        }
        
        alreadyInMsg = BMsg(already in, '{The subj dobj} {is} already {in iobj}. ')
        
        circularlyInMsg = BMsg(circularly in, '{I} {can\'t} put {the dobj} {in iobj}
            while {the subj iobj} {is} {in dobj}. ')
            
        cannotPutInSelfMsg = BMsg(cannot put in self, '{I} {can\'t} put anything
            {1} itself. ', gIobj.objInPrep)
        
        iobjFor(PutOn)
        {
            
            preCond = [touchObj]
            
            remap = remapOn        
            
            verify()
            {
                if(contType != On)
                    illogical(cannotPutOnMsg);
                
                logical;
            }
            
            check()
            {
                checkInsert(gDobj);
            }
            
            action()
            {
                gDobj.actionMoveInto(self);
            }      
        
        }
        
        cannotPutOnMsg = BMsg(cannot put on,'{I} {can\'t} put anything on {the
            iobj}. '   )
        
        
        
         /********************************************
         *   PUTUNDER
         ********************************************/
        
        dobjFor(PutUnder)
        {
            preCond = [objHeld, objNotWorn]
            
            verify()
            {
                if(gIobj != nil && self == gIobj)
                    illogicalSelf(cannotPutInSelfMsg);     
                
                if(isFixed)
                    illogical(cannotTakeMsg);
                
                if(gIobj != nil && (isDirectlyIn(gIobj)))
                    illogicalNow(alreadyInMsg);
                
                if(gIobj != nil && gIobj.isIn(self))
                    illogicalNow(circularlyInMsg);           
                
                             
                logical;           
            }
            
            action()
            {
                /* Handled by iobj */
            }
            
            report()
            {
                DMsg(report put under, '{I} {put} {1} under {the iobj}. ', 
                     gActionListStr);
            }
            
                
        }
        
        iobjFor(PutUnder)
        {
            preCond = [touchObj]
            
            remap = remapUnder
            
            verify()
            {
                if(!canPutUnderMe)
                    illogical(cannotPutUnderMsg);
                else
                    logical;
            }
            
            check() 
            { 
                /* 
                 *   If we're actually an underside-like object (our contType is
                 *   Under), check whether there's enough room under us to contain
                 *   the direct object.
                 */
                if(contType == Under)
                   checkInsert(gDobj); 
                   
                /*  
                 *   Otherwise check whether adding the direct object to our
                 *   hiddenUnder list would exceed the amount of bulk allowed there.
                 */   
                else if(gDobj.bulk > maxBulkHiddenUnder - getBulkHiddenUnder)
                    DMsg(no room in, 'There {dummy}{isn\'t} enough room for {the
                        dobj} under {the iobj}. ');    
            }
            
            action()
            {
                /* 
                 *   If we're actually an underside-like object (i.e. if our
                 *   contType is Under) then something put under us can be moved
                 *   inside us. Otherwise, all we can do with something put under us
                 *   is to add it to our hiddenUnder list and move it off-stage.
                 */
                if(contType == Under)
                    gDobj.actionMoveInto(self);
                else
                {
                    hiddenUnder += gDobj;
                    gDobj.actionMoveInto(nil);
                }
            }
            
            
        }
        
        cannotPutUnderMsg = BMsg(cannot put under, '{I} {cannot} put anything under
            {the iobj}. ' )
        
        
        
        
         /********************************************
         *   TAKE
         ********************************************/ 
        
        dobjFor(Take)    
        {
            preCond = [touchObj]
            
            verify()
            {
                if(!isTakeable)
                    illogical(cannotTakeMsg);
                
                if(isDirectlyIn(gActor))
                    illogicalNow(alreadyHeldMsg);
                
                if(gActor.isIn(self))
                    illogicalNow(cannotTakeMyContainerMsg);
                
                if(gActor == self)
                    illogicalSelf(cannotTakeSelfMsg);
                
                logical;
            }
            
            check() 
            {
                /* 
                 *   Check that the actor has room to hold the item s/he's about to
                 *   pick up.
                 */
                checkRoomToHold();
            }
            
            action()
            {
                /* 
                 *   If we have any contents hidden behind us or under us, reveal it
                 *   now
                 */
                revealOnMove();   

                /* 
                 *   move us into the actor who is taking us, triggering the
                 *   appropriate notifications.
                 */            
                actionMoveInto(gActor);
            }
            
            /* 
             *   Report that we've been taken. Note that if the action causes
             *   several items to be taken, this method will only be called on the
             *   final item, and will need to report on all the items taken.
             */
            report()
            {            
                DMsg(report take, 'Taken. | {I} {take} {1}. ', gActionListStr);
            }
        }
           
         /* By default a Thing is takeable if it's not fixed in place */
        isTakeable = (!isFixed)   
           
        cannotTakeMsg = BMsg(cannot take, '{The subj dobj} {is} fixed in place.
            ')
        
        alreadyHeldMsg = BMsg(already holding, '{I}{\'m} already holding {the dobj}.
            ')
        
        cannotTakeMyContainerMsg = BMsg(cannot take my container, '{I} {can\'t}
            {take} {the dobj} while {i}{\'m} {1} {him dobj}. ', objInPrep)
        
        cannotTakeSelfMsg = BMsg(cannot take self, '{I} {can} hardly take {myself}. ')
        
        /* 
         *   List and move into an appropriate location any item that was hidden
         *   behind or under us. We place this in a separate method so it can be
         *   conveniently called by other actions that move an object, or overridden
         *   by particular objects that want a different handling.
         *
         *   Note that we don't provide any handling for the hiddenIn property here,
         *   on the assumption that items hidden in something may well stay there
         *   when it's moved; but this method can always be overridden to provide
         *   custom behaviour.
         */
        
        revealOnMove()
        {
            local moveReport = '';
            local underLoc = location;
            local behindLoc = location;
            
            /* 
             *   If I don't want to leave items under me behind when I'm moved, and
             *   I am or have an underside, change the location to move items hidden
             *   under me to accordingly.
             */
            if(contType == Under && dropItemsUnder == nil)
                underLoc = self;
            else if(remapUnder != nil && dropItemsUnder == nil)
                underLoc = remapUnder;
            
             /* 
              *   If I don't want to leave items behind me behind when I'm moved,
              *   and I am or have a RearContainer, change the location to move
              *   items hidden under me to accordingly.
              */
            if(contType == Behind && dropItemsBehind == nil)
                behindLoc = self;
            else if(remapBehind != nil && dropItemsBehind == nil)
                behindLoc = remapBehind;
            
            
            /* 
             *   If anything is hidden under us, add a report saying that it's just
             *   been revealed moved and then move the previously hidden items to
             *   our location.
             */
            if(hiddenUnder.length > 0)
            {
                moveReport += 
                    BMsg(reveal move under,'Moving {1} {dummy} reveal{s/ed} {2}
                        previously hidden under {3}. ',
                         theName, makeListStr(hiddenUnder), himName);
                                    
                moveHidden(&hiddenUnder, underLoc);
                
            }
            
            /* 
             *   If anything is hidden behind us, add a report saying that's just
             *   been revealed and then move the previously hidden items to our
             *   location.
             */
            if(hiddenBehind.length > 0)
            {
                moveReport += 
                    BMsg(reveal move behind,'Moving {1} {dummy} reveal{s/ed} {2}
                        previously hidden behind {3}. ',
                         theName, makeListStr(hiddenBehind), himName);
                            
                moveHidden(&hiddenBehind, behindLoc);            
            }
             

            local lst = [];
            
            /* 
             *   Construct a list of anything left behind from under or behind us
             *   when we're moved.
             */
            if(dropItemsUnder)
            {
                if(contType == Under)
                    lst = contents;
                else if(remapUnder)
                    lst = remapUnder.contents;                    
            }
                   
            if(dropItemsBehind)
            {
                if(contType == Behind)
                    lst += contents;
                else if(remapBehind)
                    lst += remapBehind.contents;           
            }
            
            lst = lst.subset({o: !o.isFixed});
            
            if(lst.length > 0)
            {
                foreach(local cur in lst)
                    cur.moveInto(location);                
             
                moveReport +=
                    BMsg(report left behind, '<<if moveReport == ''>>Moving {1}
                        <<else>>It also <<end>> {dummy} {leaves} {2} behind. ',
                         theName, makeListStr(lst));
            }
            
            /* 
             *   If anything has been reported as being revealed, report the
             *   discovery after reporting the action that caused it.
             */
            if(moveReport != '' )
                reportAfter(moveReport);
        }
        
        /* 
         *   Service method: move everything in the prop property to loc and mark it
         *   as seen
         */    
        moveHidden(prop, loc)
        {
            foreach(local cur in self.(prop))
            {
                cur.moveInto(loc);
                cur.noteSeen();
            }
            self.(prop) = [];
                    
        }
        
        /* 
         *   Check that the actor has enough spare bulkCapacity to add this item to
         *   his/her inventory. Since by default everything has a bulk of zero and a
         *   very large bulkCapacity by default there will be no effective
         *   restriction on what an actor (and in particular the player char) can
         *   carry, but game authors may often wish to give portable items bulk in
         *   the interests of realism and may wish to impose an inventory limit by
         *   bulk by reducing the bulkCapacity of the player char.
         */    
        checkRoomToHold()
        {
            /* 
             *   First check whether this item is individually too big for the actor
             *   to carry.
             */
            if(bulk > gActor.maxSingleBulk)
                DMsg(too big to carry, '{The subj dobj} {is} too big for {me} to
                    carry. ');
                    
            /* 
             *   If the BagOfHolding class is defined and the actor doesn't have
             *   enough spare bulk capacity, see if the BagOfHolding class can deal
             *   with it by moving something to a BagOfHolding.
             */
            if(defined(BagOfHolding) 
               && bulk > gActor.bulkCapacity - gActor.getCarriedBulk
               && BagOfHolding.tryHolding(self));        
                    
            /* 
             *   otherwise check that the actor has sufficient spare carrying
             *   capacity.
             */
            else if(bulk > gActor.bulkCapacity - gActor.getCarriedBulk())
                DMsg(cant carry any more, '{I} {can\'t} carry any more than
                    {i}{\'m} already carrying. ');
        }
        
         /********************************************
         *   TAKEFROM
         ********************************************/
        
        /* 
         *   We treat TAKE FROM as equivalent to TAKE except at the verify stage,
         *   where we first check that the direct object is actually in the indirect
         *   object.
         */
        dobjFor(TakeFrom) asDobjWithoutVerifyFor(Take)
        
        dobjFor(TakeFrom)
        {           
            verify()
            {
                if(!isTakeable)
                    illogical(cannotTakeMsg);
                
                if(gIobj.notionalContents.indexOf(self) == nil)
                    illogicalNow(notInMsg);
                if(self == gIobj)
                    illogicalSelf(cannotTakeFromSelfMsg);
            }        
        }
        
        
        iobjFor(TakeFrom)
        {
            preCond = [touchObj]
            
            verify()       
            {          
                /*We're a poor choice of indirect object if there's nothing in us */
                if(notionalContents.countWhich({x: !x.isFixed}) == 0)
                    logicalRank(70);
                
                /* 
                 *   We're also a poor choice if none of the tentative direct
                 *   objects is in our list of notional contents
                 */
                if(gTentativeDobj.overlapsWith(notionalContents) == nil)
                    logicalRank(80);        
            
            }      
        }
        
        notInMsg = BMsg(not inside, '{The dobj} {is}n\'t {in iobj}. ')
        cannotTakeFromSelfMsg =  BMsg(cannot take from self, '{I} {can\'t} take
            {the subj dobj} from {the dobj}. ')
        
        
         /********************************************
         *   UNLOCK
         ********************************************/
        
        
        dobjFor(Unlock)
        {
            preCond = [touchObj]
            
            /* 
             *   Remap the unlock action to our remapIn object if we're not lockable
             *   but we have a lockable remapIn object (i.e. an associated
             *   container).
             */
            remap()
            {
                if(lockability == notLockable && remapIn != nil &&
                   remapIn.lockability != notLockable)
                    return remapIn;
                else
                    return self;
            }
            
            verify()
            {
                if(lockability == notLockable || lockability == nil)
                    illogical(notLockableMsg);
                
                if(lockability == indirectLockable)
                    implausible(indirectLockableMsg);
                
                if(!isLocked)            
                    illogicalNow(notLockedMsg);
                
            }
            
            check()
            {
                /* 
                 *   if we need a key to be unlocked with, check whether the player
                 *   is holding a suitable one.
                 */
                if(lockability == lockableWithKey)
                {
                    findPlausibleKey();                
                }
                   
            }
            
            action()
            {
                /* 
                 *   The useKey_ property will have been set by the
                 *   findPlausibleKey() method at the check stage. If it's non-nil
                 *   it's the key we're going to use to try to unlock this object
                 *   with, so we display a parenthetical note to the player that
                 *   we're using this key. (Note: the action would have failed at
                 *   the check stage if useKey_ wasn't the right key for the job).
                 */
                if(useKey_ != nil)
                    extraReport(withKeyMsg);
                    
                /* 
                 *   Otherwise, if we need a key to unlock this object with, ask the
                 *   player to specify it and then execute an UnlockWith action
                 *   using that key.
                 */
                else
                    askForIobj(UnlockWith);
                
                /*  Make us unlocked. */
                makeLocked(nil);                        
            }
            
            report()
            {
                DMsg(report unlock, okayUnlockMsg, gActionListStr);
            }
        }
        
        okayUnlockMsg = 'Unlocked.|{I} {unlock} {1}. '
        
        
         /********************************************
         *   UNLOCKWITH
         ********************************************/
        
        dobjFor(UnlockWith)
        {
            
            preCond = [touchObj]
            
            /* 
             *   Remap the unlock action to our remapIn object if we're not lockable
             *   but we have a lockable remapIn object (i.e. an associated
             *   container).
             */
            remap()
            {
                if(lockability == notLockable && remapIn != nil &&
                   remapIn.lockability != notLockable)
                    return remapIn;
                else
                    return self;
            }
            
            verify()
            {
                /* 
                 *   If we're not lockable at all, we're a very poor choice of
                 *   direct object for an UnlockWith action.
                 */
                if(lockability == notLockable || lockability == nil)
                    illogical(notLockableMsg);
                
                /*  
                 *   If we're lockable, but not with a key (either because we don't
                 *   need one at all or because we use some other form of locking
                 *   mechanism) then we're still a bad choice of object for an
                 *   UnlockWith action, but not so bad as if we weren't lockable at
                 *   all.
                 */
                if(lockability == lockableWithoutKey)
                    implausible(keyNotNeededMsg);
                
                if(lockability == indirectLockable)
                    implausible(indirectLockableMsg);
                
                /*  
                 *   If we are lockable with key, then were a good choice of object
                 *   for an UnlockWith action provided we're currently locked.
                 */
                if(lockability == lockableWithKey)
                {
                    if(isLocked)
                        logical;
                    else
                        illogicalNow(notLockedMsg);
                }
            }
        }
        
        notLockableMsg = BMsg(not lockable, '{The subj dobj} {isn\'t} lockable. ')
        keyNotNeededMsg = BMsg(key not needed,'{I} {don\'t need} a key to lock and
            unlock {the dobj}. ')
        indirectLockableMsg = BMsg(indirect lockable,'{The dobj} {appears} to use
            some other kind of locking mechanism. ')
        notLockedMsg = BMsg(not locked, '{The subj dobj} {isn\'t} locked. ')
            
        iobjFor(UnlockWith)
        {
            verify()
            {
                if(!canUnlockWithMe)
                   illogical(cannotUnlockWithMsg);
                
                if(gDobj == self)
                    illogicalSelf(cannotUnlockWithSelfMsg);
            }      
        }
        
        /* 
         *   Most things can't be used to unlock with. In practice there's probably
         *   little point in overriding this property since if you do want to use
         *   something to unlock other things with, you'd use the Key class.
         */
        canUnlockWithMe = nil 
        
        cannotUnlockWithMsg = BMsg(cannot unlock with, '{I} {can\'t} unlock
            anything with {that dobj}. ' )
        
        cannotUnlockWithSelfMsg = BMsg(cannot unlock with self, '{I} {can\'t} unlock
            anything with itself. ' )
    ;
:::

::: code
     /*  
     *   A Key is any object that can be used to lock or lock selected items whose
     *   lockabilty is lockableWithKey. We define all the special handling on the
     *   Key class rather than on the items to be locked and/or unlocked.
     */
    class Key: Thing

        /* The list of things this key can actually be used to lock and unlock. */    
        actualLockList = []
        
        /* 
         *   The list of things this key plausibly looks like it might lock and
         *   unlock (e.g. if we're a yale key, we might list all the doors in the
         *   game that have yale locks here).
         */
        plausibleLockList = []
        
        /* 
         *   The list of all the things the player character knows this key can lock
         *   and unlock. Items are automatically added to this list when this key is
         *   successfully used to lock or unlock them, but game code can also use
         *   this property to list items the player character starts out knowing,
         *   such as the door locked by his/her own front door key.
         */
        knownLockList = []
        
        /*  
         *   Determine whether we're a possible key for obj (i.e. whether we might
         *   be able to lock or unlock obj).
         */
        isPossibleKeyFor(obj)
        {
            /* 
             *   First test if we've been defined as a plausible or known key for
             *   our lexicalParent in the case that we're the remapIn object for our
             *   lexicalParent. If so return true. We do this because game code
             *   might easily define the plausibleKeyList and/or knownKeyList on our
             *   lexicalParent intending to refer to what keys might unlock is
             *   associated container (i.e. ourselves if we're our lexicalParent's
             *   remapIn object).
             */ 
            if(obj.lexicalParent != nil && obj.lexicalParent.remapIn == obj
               &&(knownLockList.indexOf(obj.lexicalParent) != nil
                  || plausibleLockList.indexOf(obj.lexicalParent) != nil))
                return true;
            
            /* 
             *   Otherwise return true if obj is in either our knownLockList or our
             *   plausibleLockList or nil otherwise.
             */
            return knownLockList.indexOf(obj) != nil ||
                plausibleLockList.indexOf(obj) != nil;
        }
        
        /* A key is something we can unlock with. */
        canUnlockWithMe = true
        
        iobjFor(UnlockWith)
        {
            preCond = [objHeld]
            
                   
            verify()
            {
                inherited;
                
                /* 
                 *   We're a logical choice of key if we're a possible key for the
                 *   direct object.
                 */
                if(isPossibleKeyFor(gDobj))
                    logical;
                    
                /* Otherwise we're not a very good choice. */    
                else
                    implausible(notAPlausibleKeyMsg);            
            }
            
            check()
            {
                /* 
                 *   Check whether this key *actually* fits the direct object, and
                 *   if not display a message to say it doesn't (which halts the
                 *   action).
                 *
                 *   This is complicated by the fact that if the direct object is a
                 *   SubComponent the game author may have listed the dobj's
                 *   lexicalParent in our actualLockList property instead of the
                 *   actual dobj (e.g. the fridge object itself instead of the
                 *   SubComponent representing the interior of the fridge). So in
                 *   addition to seeing if the dobj is included in our
                 *   actuallockList we need to check whether, if the dobj has a
                 *   lexicalParent of which it's the remapIn object, dobj's
                 *   lexicalParent is in our actualLockList.
                 */
                if(actualLockList.indexOf(gDobj) == nil
                   && (gDobj.lexicalParent == nil
                   || gDobj.lexicalParent.remapIn != gDobj
                   || actualLockList.indexOf(gDobj.lexicalParent) == nil))
                    say(keyDoesntFitMsg);              
            }
            
            action()
            {
                /* Make the dobj unlocked. */
                gDobj.makeLocked(nil);
                
                /* If the dobj is not already in our knownLockList, add it there. */
                if(knownLockList.indexOf(gDobj) == nil)
                    knownLockList += gDobj;
            }
            
            report()
            {
                DMsg(okay unlock with, okayUnlockWithMsg, gActionListStr);
            }
            
        }
        
        okayUnlockWithMsg = '{I} {unlock} {the dobj} with {the iobj}. '
        
        iobjFor(LockWith)
        {
            preCond = [objHeld]
            
            verify()
            {
                inherited;
                
                if(isPossibleKeyFor(gDobj))
                    logical;
                else
                    implausible(notAPlausibleKeyMsg);            
            }
            
            check()
            {
                /* 
                 *   Check whether this key *actually* fits the direct object, and
                 *   if not display a message to say it doesn't (which halts the
                 *   action).
                 *
                 *   This is complicated by the fact that if the direct object is a
                 *   SubComponent the game author may have listed the dobj's
                 *   lexicalParent in our actualLockList property instead of the
                 *   actual dobj (e.g. the fridge object itself instead of the
                 *   SubComponent representing the interior of the fridge). So in
                 *   addition to seeing if the dobj is included in our
                 *   actuallockList we need to check whether, if the dobj has a
                 *   lexicalParent of which it's the remapIn object, dobj's
                 *   lexicalParent is in our actualLockList.
                 */
                 if(actualLockList.indexOf(gDobj) == nil
                   && (gDobj.lexicalParent == nil
                   || gDobj.lexicalParent.remapIn != gDobj
                   || actualLockList.indexOf(gDobj.lexicalParent) == nil))
                    say(keyDoesntFitMsg);              
            }
            
            action()
            {
                /*Make the dobj locked. */
                gDobj.makeLocked(true);
                
                /* If the dobj is not already in our knownLockList, add it there. */
                if(knownLockList.indexOf(gDobj) == nil)
                    knownLockList += gDobj;
            }
            
            report()
            {
                 DMsg(okay lock with, okayLockWithMsg, gActionListStr);
            }
        }
        
        /* The message to say that the actor has lock the dobj with this key. */
        okayLockWithMsg = '{I} {lock} {the dobj} with {the iobj}. '
        
        /* 
         *   The message to say that this key clearly won\'t work on the dobj
         *   (because it\'s the wrong sort of key for the lock; e.g. a yale key
         *   clearly won\'t fit the lock on a small jewel box).
         */
        notAPlausibleKeyMsg = '\^<<theName>> clearly won\'t work on <<gDobj.theName>>. '
        
        /*  The message to say that this key doesn\'t in fact fit the dobj. */
        keyDoesntFitMsg = '\^<<theName>> won\'t fit <<gDobj.theName>>. '   
        
        preinitThing()
        {
            inherited;
            
            /* 
             *   Add the actualLockList to the plausibleLockList if it's not already
             *   there to ensure that this key will work on anything in its
             *   actualLockList.
             */
            plausibleLockList = plausibleLockList.appendUnique(actualLockList);
        }
    ;
:::
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [Actions](action.htm){.nav} \>
Source Reference\
[[*Prev:* ActionReference](actionref.htm){.nav}     *Next:*
[ActionReference](actionref.htm){.nav}    ]{.navnp}
:::
