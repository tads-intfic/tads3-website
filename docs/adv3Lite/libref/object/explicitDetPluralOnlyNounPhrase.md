[explicitDetPluralOnlyNounPhrase]{.title}[GrammarProd]{.type}

`grammar `**[`explicitDetPluralOnlyNounPhrase(definite)`](../object/explicitDetPluralOnlyNounPhrase(definite).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`638`](../source/grammar.t.html#638)`]`

::: gramrule
\'the\' indetPluralOnlyNounPhrase-\>np\_\
:::

`grammar `**[`explicitDetPluralOnlyNounPhrase(definiteNumber)`](../object/explicitDetPluralOnlyNounPhrase(definiteNumber).html)**` :   `[`QuantifierProduction`](../object/QuantifierProduction.html)

[`grammar.t`](../file/grammar.t.html)`[`[`645`](../source/grammar.t.html#645)`]`

::: gramrule
\'the\' numberPhrase-\>quant\_ indetPluralNounPhrase-\>np\_\
:::

`grammar `**[`explicitDetPluralOnlyNounPhrase(possessive)`](../object/explicitDetPluralOnlyNounPhrase(possessive).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`652`](../source/grammar.t.html#652)`]`

::: gramrule
possessiveAdjPhrase-\>poss\_ indetPluralOnlyNounPhrase-\>np\_\
\| indetPluralOnlyNounPhrase-\>np\_ \'of\'
possessiveNounPhrase-\>poss\_\
:::

`grammar `**[`explicitDetPluralOnlyNounPhrase(possessiveNumber)`](../object/explicitDetPluralOnlyNounPhrase(possessiveNumber).html)**` :   `[`QuantifierProduction`](../object/QuantifierProduction.html)

[`grammar.t`](../file/grammar.t.html)`[`[`658`](../source/grammar.t.html#658)`]`

::: gramrule
possessiveAdjPhrase-\>poss\_ numberPhrase-\>quant\_
indetPluralNounPhrase-\>np\_\
\| \'the\' numberPhrase-\>quant\_ indetPluralNounPhrase-\>np\_\
\'of\' possessiveNounPhrase-\>poss\_\
:::

`grammar `**[`explicitDetPluralOnlyNounPhrase(possessiveNumber2)`](../object/explicitDetPluralOnlyNounPhrase(possessiveNumber2).html)**` :   `[`QuantifierProduction`](../object/QuantifierProduction.html)

[`grammar.t`](../file/grammar.t.html)`[`[`668`](../source/grammar.t.html#668)`]`

::: gramrule
numberPhrase-\>quant\_ indetPluralNounPhrase-\>np\_\
\'of\' possessiveNounPhrase-\>poss\_\
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
