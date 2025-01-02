---
---
<span class="title">Parser</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[66](../source/parser.t.html#66)\],
[cmdhelp.t](../file/cmdhelp.t.html)\[[17](../source/cmdhelp.t.html#17)\]

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

<div class="fdesc">

Parser is the class that implements the main parsing procedure, namely
taking a line of text from the player, figuring out what it means, and
executing it.

The conventional IF parsing loop simply consists of reading a line of
text from the player, calling Parser.parse() on the string, and
repeating.

In most cases you'll just need a single Parser instance. The Parser
object keeps track of unfinished commands, such as when we need to ask
for disambiguation help or for a missing object. If for some reason you
want to keep multiple sets of this kind of state (reading input from
more than one player, for example), you can create as many Parser
instances as needed.

*Modified in
[cmdhelp.t](../file/cmdhelp.t.html)\[[17](../source/cmdhelp.t.html#17)\]:*  
Modifications to Parser for CMDHELP EXTENSION

`class `**`Parser`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`Parser`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`autoHelp`](#autoHelp)`  `[`autoLook`](#autoLook)`  `[`autoSpell`](#autoSpell)`  `[`DefaultAction`](#DefaultAction)`  `[`defaultActions`](#defaultActions)`  `[`lastTokens`](#lastTokens)`  `[`question`](#question)`  `[`showUnknownWords`](#showUnknownWords)`  `[`spellTimeLimit`](#spellTimeLimit)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`emptyCommand`](#emptyCommand)`  `[`parse`](#parse)`  `[`rmcType`](#rmcType)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="autoHelp"></span>

`autoHelp`

[cmdhelp.t](../file/cmdhelp.t.html)\[[37](../source/cmdhelp.t.html#37)\]

<div class="desc">

Flag: Do we want to show a menu of command options in response to an
empty command? By default we do since that's the purpose of this CMDHELP
EXTENSION.

</div>

<span id="autoLook"></span>

`autoLook`

[parser.t](../file/parser.t.html)\[[95](../source/parser.t.html#95)\]

<div class="desc">

Auto-Look: Should we treat an empty command line (i.e., the user just
presses Return) as a LOOK AROUND command?

The traditional handling since the Infocom era has always been to treat
an empty command line as a parsing error, and display an error message
along the lines of "I beg your pardon?". Given that an empty command
line has no conflicting meaning, though, we \*could\* assign it a
meaning.

But what meaning should that be? A blank line is the simplest possible
command for a player to enter, so it would make sense to define it as
some very commonly used command. It's also fairly easy to enter a blank
line accidentally (which is partly why the traditional reply is an error
message), so the command should be benign - it shouldn't be a problem to
enter it unintentionally. It can't be anything with parallel verbs, like
NORTH, since then there'd be no good reason to pick NORTH instead of,
say, SOUTH. Finally, it has to be intransitive, since it obviously won't
involve an object name. The obvious candidates that fit all of these
criteria are LOOK and INVENTORY. LOOK is probably the more useful and
the more frequently used of the two, so it's the one we choose by
default.

If this property is set to true, we'll perform a LOOK AROUND command
when the player enters a blank command line. If nil, we'll show an error
message.

</div>

<span id="autoSpell"></span>

`autoSpell`

[parser.t](../file/parser.t.html)\[[132](../source/parser.t.html#132)\]

<div class="desc">

Should we attempt automatic spelling correction? If this is true,
whenever a command fails, we'll check for a word that we don't
recognize; if we find one, we'll try applying spelling correction to see
if we can come up with a working command.

Our spelling correction algorithm is designed to be quite conservative.
In particular, we generally limit candidates for "correct" words to the
vocabulary for objects that are actually in scope, which avoids
revealing the existence of objects that haven't been seen yet; and we
only apply a correction when it yields a command that parses and
resolves correctly. When we can't correct a command and get something
resolvable, we don't even mention that we tried. This avoids the
bizarre, random guesses at "corrections" that often show up in other
applications, and more importantly avoids giving away information that
the player shouldn't know yet.

We set this to true by default, in an attempt to reduce the player's
typing workload by automatically correcting simple typos when possible.
If for some reason the spelling corrector is problematic in a particular
game, you can disable it by setting this property to nil.

As an experiment, change the default value to be nil when we're in a
conversation and true otherwise, since over-zealous spelling corrections
can be particularly troublesome in a conversational context.

</div>

<span id="DefaultAction"></span>

`DefaultAction`

[parser.t](../file/parser.t.html)\[[771](../source/parser.t.html#771)\]

<div class="desc">

The action to be tried if the parser can't find a verb in the command
line and tries to parse the command line as the single object of a
DefaultAction command instead.

</div>

<span id="defaultActions"></span>

`defaultActions`

[parser.t](../file/parser.t.html)\[[107](../source/parser.t.html#107)\]

<div class="desc">

Default Actions: Should we treat a command line that consists entirely
of a single noun phrase to be a "Default Action" on the named object?
The precise meaning of the default action varies by object. For most
objects, it's EXAMINE. For locations, it's GO TO.

We make the default value nil since setting it to true can result in
some rather odd parser behaviour.

</div>

<span id="lastTokens"></span>

`lastTokens`

[parser.t](../file/parser.t.html)\[[728](../source/parser.t.html#728)\]

<div class="desc">

The token list from the last command, if an error occurred. This is the
token list that we'll retry if the player enters an OOPS command.

</div>

<span id="question"></span>

`question`

[parser.t](../file/parser.t.html)\[[738](../source/parser.t.html#738)\]

<div class="desc">

The outstanding Question object. When we ask an interactive question
(such as a disambiguation query, a missing noun phrase query, or a
custom question from the game), this is set to the Question waiting to
be answered. We parse the next command against the Question to see if
it's a reply, and if so we execute the reply.

</div>

<span id="showUnknownWords"></span>

`showUnknownWords`

[parser.t](../file/parser.t.html)\[[199](../source/parser.t.html#199)\]

<div class="desc">

When the parser doesn't recognize a word, should it say so? If this
property is set to true, when parsing fails, we'll scan the command line
for a word that's not in the dictionary and show a message such as "I
don't know the word \<foo\>." If this property is nil, the parser will
instead simply say that it doesn't recognize the syntax, or that the
object in question isn't present, without saying specifically which word
wasn't recognized, or indeed even admitting that there was such a thing.

There are two schools of thought on this, both concerned with optimizing
the user experience.

The first school holds that the parser's job is to be as helpful as
possible. First and foremost, that means we should understand the user's
input as often as possible. But when we can't, it means that we should
be do our best to explain what we didn't understand, to help the user
formulate a working command next time. In the case of a word the parser
doesn't recognize, we can be pretty sure that the unknown word is the
reason we can't understand the input. The best way to help the user
correct the problem is to let them know exactly which word we didn't
know, rather than make them guess at what we didn't understand. This is
the way the classic Infocom games worked, and it's the traditional TADS
default as well.

The second school holds that the user's overriding interest is
maintaining suspension of disbelief, and that the parser should do its
best not to interfere with that. A major aspect of this in IF the
illusion that the game world is as boundless as the real world. Missing
dictionary words tend to break this illusion: if the user types EXAMINE
ZEBRA, and the parser replies that it doesn't know the word "zebra",
we've suddenly exposed a limit of the game world. If we instead play coy
and simply say that there's no zebra currently present, we allow the
player to imagine that a zebra might yet turn up. This is the way Inform
games typically work.

Each approach has its advantages and disadvantages, adherents and
detractors, and it seems that neither one is objectively "right". It
comes down to taste. But there seems to be a clear preference among the
majority of players in the modern era for the second approach. The key
factor is probably that typical IF commands are so short that it's easy
enough to spot a typo without help from the parser, so the clarity
benefits of "unknown word" messages seem considerably outweighed by the
harm they do to the illusion of boundlessness. So, our default is the
second option, playing coy.

</div>

<span id="spellTimeLimit"></span>

`spellTimeLimit`

[parser.t](../file/parser.t.html)\[[148](../source/parser.t.html#148)\]

<div class="desc">

Maximum spelling correction time, in milliseconds. The spelling
correction process is iterative, and each iteration involves a new
parsing attempt. On a fast machine this doesn't tend to be noticeable,
but it's conceivable that a pathological case could involve a large
number of attempts that could be noticeably slow on an older machine. To
avoid stalling the game while we overanalyze the spelling possibilities,
we set an upper bound to the actual elapsed time for spelling
correction. Each time we consider a new correction candidate, we'll
check the elapsed time, and abort the process if it exceeds this limit.
Note that this limit doesn't limit the parsing time itself - we'll never
interrupt that mid-stream.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="emptyCommand"></span>

`emptyCommand ( )`

[parser.t](../file/parser.t.html)\[[747](../source/parser.t.html#747)\],
[cmdhelp.t](../file/cmdhelp.t.html)\[[24](../source/cmdhelp.t.html#24)\]

<div class="desc">

Execute an empty command line. The parse() routine calls this when given
a blank command line (i.e., the user simply pressed the Return key). By
default, we execute a Look Around command if autoLook is enabled,
otherwise we show the "I beg your pardon" error.

*Modified in
[cmdhelp.t](../file/cmdhelp.t.html)\[[24](../source/cmdhelp.t.html#24)\]:*  
Overridden for CMDHELP EXTENSION. If our autoHelp property is true then
respond to an empty command by displaying a brief menu of command
options.

</div>

<span id="parse"></span>

`parse (str)`

[parser.t](../file/parser.t.html)\[[211](../source/parser.t.html#211)\]

<div class="desc">

Parse and execute a command line. This is the main parsing routine. We
take the text of a command line, parse it against the grammar defined in
the language module, resolve the noun phrases to game-world objects, and
execute the action. If the command line has more than one verb phrase,
we repeat the process for each one.

'str' is the text of the command line, as entered by the player.

</div>

<span id="rmcType"></span>

`rmcType ( )`

[parser.t](../file/parser.t.html)\[[774](../source/parser.t.html#774)\]

<div class="desc">

Return an rmcXXXX enum code depending on the state of Parser.question

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
