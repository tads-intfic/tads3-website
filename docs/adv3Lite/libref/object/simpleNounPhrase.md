[simpleNounPhrase]{.title}[GrammarProd]{.type}

`grammar `**[`simpleNounPhrase(adjAndOne)`](../object/simpleNounPhrase(adjAndOne).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`763`](../source/grammar.t.html#763)`]`

::: gramrule
noun-\>noun\_ \'one\'\
:::

`grammar `**[`simpleNounPhrase(adjAndOnes)`](../object/simpleNounPhrase(adjAndOnes).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`767`](../source/grammar.t.html#767)`]`

::: gramrule
noun-\>noun\_ \'ones\'\
:::

`grammar `**[`simpleNounPhrase(empty)`](../object/simpleNounPhrase(empty).html)**` :   `[`EmptyNounProduction`](../object/EmptyNounProduction.html)

[`grammar.t`](../file/grammar.t.html)`[`[`775`](../source/grammar.t.html#775)`]`

::: gramrule
\[badness 600\]
:::

`grammar `**[`simpleNounPhrase(list)`](../object/simpleNounPhrase(list).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`750`](../source/grammar.t.html#750)`]`

::: gramrule
nounWord-\>noun\_ simpleNounPhrase-\>np\_\
:::

`grammar `**[`simpleNounPhrase(literal)`](../object/simpleNounPhrase(literal).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`754`](../source/grammar.t.html#754)`]`

::: gramrule
literalNounPhrase-\>noun\_\
:::

`grammar `**[`simpleNounPhrase(literalAndList)`](../object/simpleNounPhrase(literalAndList).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`758`](../source/grammar.t.html#758)`]`

::: gramrule
literalNounPhrase-\>noun\_ simpleNounPhrase-\>np\_\
:::

`grammar `**[`simpleNounPhrase(misc)`](../object/simpleNounPhrase(misc).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`771`](../source/grammar.t.html#771)`]`

::: gramrule
\[badness 200\] miscWordList-\>lst\_
:::

`grammar `**[`simpleNounPhrase(noun)`](../object/simpleNounPhrase(noun).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`747`](../source/grammar.t.html#747)`]`

::: gramrule
nounWord-\>noun\_
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::