[disambigPhrase]{.title}[GrammarProd]{.type}

`grammar `**[`disambigPhrase(all)`](../object/disambigPhrase(all).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`989`](../source/grammar.t.html#989)`]`

::: gramrule
\'all\' \| \'everything\' \| \'all\' \'of\' \'them\'
:::

`grammar `**[`disambigPhrase(any)`](../object/disambigPhrase(any).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`1003`](../source/grammar.t.html#1003)`]`

::: gramrule
\'any\' \| \'any\' \'of\' \'them\'
:::

`grammar `**[`disambigPhrase(both)`](../object/disambigPhrase(both).html)**` :   `[`QuantifierProduction`](../object/QuantifierProduction.html)

[`grammar.t`](../file/grammar.t.html)`[`[`995`](../source/grammar.t.html#995)`]`

::: gramrule
\'both\' \| \'both\' \'of\' \'them\'\
:::

`grammar `**[`disambigPhrase(list)`](../object/disambigPhrase(list).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`1007`](../source/grammar.t.html#1007)`]`

::: gramrule
disambigList-\>lst\_
:::

`grammar `**[`disambigPhrase(locational)`](../object/disambigPhrase(locational).html)**` :   `[`LocationalProduction`](../object/LocationalProduction.html)

[`grammar.t`](../file/grammar.t.html)`[`[`1018`](../source/grammar.t.html#1018)`]`

::: gramrule
locationPrep-\>prep\_ completeNounPhraseWithoutAll-\>cont\_\
:::

`grammar `**[`disambigPhrase(ordinalList)`](../object/disambigPhrase(ordinalList).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`1010`](../source/grammar.t.html#1010)`]`

::: gramrule
disambigOrdinalList-\>lst\_ \'ones\'\
\| \'the\' disambigOrdinalList-\>lst\_ \'ones\'\
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::