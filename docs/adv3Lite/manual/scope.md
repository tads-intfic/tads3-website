::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Actions](action.htm){.nav} \>
Scope\
[[*Prev:* Querying the World Model](query.htm){.nav}     [*Next:*
Debugging Commands](debug.htm){.nav}     ]{.navnp}
:::

::: main
# Scope

[]{#objscope}

## Object Scope and Topic Scope

Scope denotes the set of objects that are available to be the target of
a command, or to react to any actions that are carried out in the course
of executing that command. The two most common kinds of scope for
commands in Interactive Fiction are *object scope* and *topic scope*.

**Object scope** denotes the set of objects in the game world that the
player character (or some other actor) can physically interact with (at
least through one of the senses, not necessarily touch) at a particular
point in time. Roughly speaking object scope normally thus comprises the
set of objects that are both in the same physical location as the actor
(i.e. within the same top-level Room) and visible to the player (i.e.
not enclosed in an opaque closed container). In a darkened room scope is
generally restricted to the actor, the actor\'s contents (anything
carried by the actor) and objects that are visible in the dark (i.e. for
which visibleInDark is true). The set of objects in physical scope for
an actor can be obtained by calling the method
Q.scopeList(actor).toList().

**Topic scope** denotes the set of objects (Things and/or Topics) that
can match the topicDobj or topicIobj token in a VerbRule, in other words
the set of objects the player character can refer to without necessarily
interacting with. By default this is the subset of all Things and Topics
defined in the game that are known to the player character (i.e. for
which obj.known is true or, equivalently, gPlayerChar.knowsAbout(obj) is
true). The list of objects in topic scope for the player character can
be obtained by calling the method Q.topicScope().

A third type of scope, universal scope, can sometimes be useful for
[debugging commands](debug.htm) that need to be able to refer to any
object in the game world regardless of whether the normal world model
would allow the player character to interact with them. If you need to
add debugging commands in your own game you can get a universal scope
list either by calling the makeScopeUniversal() method on your action,
or by using [World.universalScope]{.code} (for all Things and Topics) or
[World.universalScope.subset({o: o.ofKind(Thing)})]{.code} if, as is
more likely, you just want a list of every Thing in the game. Universal
scope may also be useful for some non-debugging commands such as GO TO
that can refer to objects that aren\'t immediately present, although
such commands may prefer to use a fourth kind of scope, known scope,
which only includes the Things (but not the Topics) known to the player
character. This can be obtained from Q.knownScopeList().

\
[]{#changing}

## Changing the Definition of Scope

Most of the time the library default definitions of scope will do what
you need, but if you do need to use something different (e.g. to add
additional items to scope when the player character is in a dark room,
or to allow objects to be viewed or listened to when they\'re in a
remote location), there are several techniques available.

First, you could amend the library\'s default definition of Scope by
defining a [Special](query.htm#special) object that\'s active when you
need it. This allows you to change what is returned by
Q.scopeList(actor) or Q.topicScope.

Second, you could override the addExtraScopeItems(role) method on the
current action (where role is either DirectObject or IndirectObject) to
place additional items in scope for the action in question. For a
debugging action, for example, you might make this method call
[makeScopeUniversal()]{.code} to put every game object in scope.

Third, you could override addExtraScopeItems(action) on the current Room
(where *action* is the current action). Note that this is what
Action.addExtraScopeItems(role) does by default, so if you override the
addExtraScopeItems() method on the action, addExtraScopeItems() might
not work on the Room or Region unless you remember to call the inherited
handling.

Fourth, you could list the additional items to be placed in scope in the
extraScopeItems property of the enclosing Room or Region(s). Note that
this will only work if you have not overridden the addExtraScopeItems()
method of the Rooms and/or Regions in question to do something
different.

Fifth, you could override the addExtraScopeItems(action) method on the
Region.

Sixth (and probably most trickily), you could override the
buildScopeList(role) method on the action to define some totally
different way of defining scope for that particular action.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [Actions](action.htm){.nav} \>
Scope\
[[*Prev:* Querying the World Model](query.htm){.nav}     [*Next:*
Debugging Commands](debug.htm){.nav}     ]{.navnp}
:::
