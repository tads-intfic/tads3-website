---
layout: docs
---
<span class="title">CustomMessages</span><span class="type">class</span>

[messages.t](../file/messages.t.html)\[[817](../source/messages.t.html#817)\]

[Superclass  
Tree](#_SuperClassTree_)

[Subclass  
Tree](#_SubClassTree_)

[Global  
Objects](#_ObjectSummary_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)



Message customizer object. Language extensions and games can use this
class to define their own custom messages that override the default
English messages used throughout the library.

Each CustomMessages object can define a list of messages to be
customized. This lets you centrally locate all of your custom messages
by putting them all in a single object, if you wish. Alternatively, you
can create separate objects, if you prefer to keep them with some other
body of code they apply to. In either case, the library gathers them all
up during preinit.

`class `**`CustomMessages`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`CustomMessages`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`active`](#active) [`all`](#all) [`messages`](#messages) [`msgTab`](#msgTab) [`priority`](#priority)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="active"></span>

`active`

[messages.t](../file/messages.t.html)\[[849](../source/messages.t.html#849)\]



Is this customizer active? If you want to change the messages at
different points in the course of the game, you can use this to turn
sets of messages on and off. For example, if your game includes narrator
changes at certain points, you can create separate sets of messages per
narrator. By default, we make all customizations active, but you can
override this to turn selected messages on and off as needed. Note that
the library consults this every time it looks up a message, so you can
change the value dynamically, or use a method whose return value changes
dynamically.



<span id="all"></span>

`all`

[messages.t](../file/messages.t.html)\[[890](../source/messages.t.html#890)\]



class property: the master list of CustomMessages objects defined
throughout the game



<span id="messages"></span>

`messages`

[messages.t](../file/messages.t.html)\[[864](../source/messages.t.html#864)\]



The message list. This can contain any number of messages; the order
isn't important. Each message is defined with a Msg() macro:

  
Msg(id key, 'Message text'), ...

The "id key" is the message ID that the library uses in the DMsg()
message that you're customizing. (DON'T use quotes around the ID key.)
The message text is a single-quoted string giving the message text. This
can contain curly-brace replacement parameters.



<span id="msgTab"></span>

`msgTab`

[messages.t](../file/messages.t.html)\[[884](../source/messages.t.html#884)\]



message lookup table - this maps ID keys to message text strings



<span id="priority"></span>

`priority`

[messages.t](../file/messages.t.html)\[[835](../source/messages.t.html#835)\]



The priority determines the precedence of a message defined in this
object, if the same message is defined in more than one CustomMessages
object. The message with the highest priority is the one that's actually
displayed.

The library defines one standard priority level: 100 is the priority for
language module overrides. Each language module provides a translated
set of the standard library messages, via a CustomMessages object with
priority 100. (The default English messages defined in-line throughout
the library via DMsg() macros effectively have a priority of negative
infinity, since any custom message of any priority overrides a default.)

Games will generally want to override all library messages, including
translations, so we set the default here to 200.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct ( )`

[messages.t](../file/messages.t.html)\[[870](../source/messages.t.html#870)\]



Construction. Build the lookup table of our messages for fast access at
run-time.
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


