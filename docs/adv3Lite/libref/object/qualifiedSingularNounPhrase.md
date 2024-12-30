[qualifiedSingularNounPhrase]{.title}[GrammarProd]{.type}

`grammar `**[`qualifiedSingularNounPhrase(anyOneIn)`](../object/qualifiedSingularNounPhrase(anyOneIn).html)**` :   `[`LocationalProduction`](../object/LocationalProduction.html)

[`grammar.t`](../file/grammar.t.html)`[`[`442`](../source/grammar.t.html#442)`]`

::: gramrule
(\'anything\' \| \'one\') (\'that\' (\'is\' \| \'was\') \| \'that\'
tokApostropheS \| )\
locationPrep-\>prep\_\
completeNounPhraseWithoutAll-\>cont\_\
:::

`grammar `**[`qualifiedSingularNounPhrase(anyPlural)`](../object/qualifiedSingularNounPhrase(anyPlural).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`420`](../source/grammar.t.html#420)`]`

::: gramrule
(\'any\' \| \'one\' \| \'any\' \'one\' \| ) \'of\'
explicitDetPluralNounPhrase-\>np\_\
:::

`grammar `**[`qualifiedSingularNounPhrase(arbitrary)`](../object/qualifiedSingularNounPhrase(arbitrary).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`407`](../source/grammar.t.html#407)`]`

::: gramrule
(\'any\' \| \'one\' \| \'1\' \| \'any\' (\'one\' \| \'1\'))
indetSingularNounPhrase-\>np\_\
:::

`grammar `**[`qualifiedSingularNounPhrase(definite)`](../object/qualifiedSingularNounPhrase(definite).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`393`](../source/grammar.t.html#393)`]`

::: gramrule
(\'the\' \| \'the\' \'one\' \| \'the\' \'1\' \| )
indetSingularNounPhrase-\>np\_\
:::

`grammar `**[`qualifiedSingularNounPhrase(indefinite)`](../object/qualifiedSingularNounPhrase(indefinite).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`400`](../source/grammar.t.html#400)`]`

::: gramrule
(\'a\' \| \'an\') indetSingularNounPhrase-\>np\_\
:::

`grammar `**[`qualifiedSingularNounPhrase(possessive)`](../object/qualifiedSingularNounPhrase(possessive).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`414`](../source/grammar.t.html#414)`]`

::: gramrule
possessiveAdjPhrase-\>poss\_ indetSingularNounPhrase-\>np\_\
\| indetSingularNounPhrase-\>np\_ \'of\' possessiveNounPhrase-\>poss\_\
:::

`grammar `**[`qualifiedSingularNounPhrase(theOneContaining)`](../object/qualifiedSingularNounPhrase(theOneContaining).html)**` :   `[`ContentsQualifierProduction`](../object/ContentsQualifierProduction.html)

[`grammar.t`](../file/grammar.t.html)`[`[`435`](../source/grammar.t.html#435)`]`

::: gramrule
\'the\' \'one\' contentsPrepOrVerb-\>prep\_
completeNounPhraseWithoutAll-\>cont\_\
:::

`grammar `**[`qualifiedSingularNounPhrase(theOneIn)`](../object/qualifiedSingularNounPhrase(theOneIn).html)**` :   `[`LocationalProduction`](../object/LocationalProduction.html)

[`grammar.t`](../file/grammar.t.html)`[`[`427`](../source/grammar.t.html#427)`]`

::: gramrule
\'the\' \'one\' (\'that\' (\'is\' \| \'was\') \| \'that\' tokApostropheS
\| )\
locationPrep-\>prep\_ completeNounPhraseWithoutAll-\>cont\_\
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
