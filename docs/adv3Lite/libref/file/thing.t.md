[thing.t]{.title}[file]{.type}

[source file](../source/thing.t.html)

**Classes**\
[Summary](#_ClassSummary_)\
 

**Objects**\
[Summary](#_ObjectSummary_)\
 

**Functions**\
[Summary](#_FunctionSummary_)\
[Details](#_Functions_)

::: fdesc
Mentionable is the base class for objects that the player can refer to
in command input. In order for the parser to recognize an object, the
object must have vocabulary words in the dictionary. This class\'s main
function, then, is to set up the dictionary for an object, so that its
words are recognizable to the parser.

This class is based on LMentionable, which is defined in the language
module. LMentionable provides implementations for certain methods that
we rely upon for functionality that varies by language.
:::

[]{#_ClassSummary_}

::: mjhd
[Summary of Classes]{.hdln}  
:::

` `[`Floor`](../object/Floor.html)`  `[`Key`](../object/Key.html)`  `[`LocType`](../object/LocType.html)`  `[`Mentionable`](../object/Mentionable.html)`  `[`MultiLoc`](../object/MultiLoc.html)`  `[`Player`](../object/Player.html)`  `[`ReplaceRedirector`](../object/ReplaceRedirector.html)`  `[`State`](../object/State.html)`  `[`SubComponent`](../object/SubComponent.html)`  `[`Thing`](../object/Thing.html)`  `[`Topic`](../object/Topic.html)`  `[`ViaType`](../object/ViaType.html)`  `[`VocabWord`](../object/VocabWord.html)`  `
[]{#_ObjectSummary_}

::: mjhd
[Summary of Global Objects]{.hdln}  
:::

` `[`Attached`](../object/Attached.html)`  `[`Behind`](../object/Behind.html)`  `[`Carrier`](../object/Carrier.html)`  `[`defaultGround`](../object/defaultGround.html)`  `[`displayProbe`](../object/displayProbe.html)`  `[`Down`](../object/Down.html)`  `[`ExtLocType`](../object/ExtLocType.html)`  `[`Held`](../object/Held.html)`  `[`In`](../object/In.html)`  `[`IntLocType`](../object/IntLocType.html)`  `[`Into`](../object/Into.html)`  `[`multiLocInitiator`](../object/multiLocInitiator.html)`  `[`On`](../object/On.html)`  `[`OutOf`](../object/OutOf.html)`  `[`Outside`](../object/Outside.html)`  `[`PartOf`](../object/PartOf.html)`  `[`thingPreinit`](../object/thingPreinit.html)`  `[`Through`](../object/Through.html)`  `[`Under`](../object/Under.html)`  `[`Up`](../object/Up.html)`  `[`Worn`](../object/Worn.html)`  `
[]{#FunctionSummary_}

::: mjhd
[Summary of Global Functions]{.hdln}  
:::

` `[`matchToken`](#matchToken)`  `

[]{#_Functions_}

::: mjhd
[Global Functions]{.hdln}  
:::

[]{#matchToken}

`matchToken (tok, words, cmp)`

[thing.t](../file/thing.t.html)\[[684](../source/thing.t.html#684)\]

::: desc
Match a token from the player\'s input against a given vocabulary list.
Returns a set of MatchXxx flags for a match, or 0 if there\'s no match.

\'tok\' is the token string to match. \'words\' is the list of words to
match, as VocabWords objects. \'cmp\' is the StringComparator object
that we use to compare the strings.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::