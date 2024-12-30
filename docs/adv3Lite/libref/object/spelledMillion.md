[spelledMillion]{.title}[GrammarProd]{.type}

`grammar `**[`spelledMillion(aMillion)`](../object/spelledMillion(aMillion).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`1308`](../source/grammar.t.html#1308)`]`

::: gramrule
\'a\' \'million\'
:::

`grammar `**[`spelledMillion(aMillionAndSmall)`](../object/spelledMillion(aMillionAndSmall).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`1312`](../source/grammar.t.html#1312)`]`

::: gramrule
\'a\' \'million\' \'and\' spelledSmallNumber-\>num\_\
:::

`grammar `**[`spelledMillion(millions)`](../object/spelledMillion(millions).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`1296`](../source/grammar.t.html#1296)`]`

::: gramrule
spelledHundred-\>mil\_ \'million\'
:::

`grammar `**[`spelledMillion(millionsAndSmall)`](../object/spelledMillion(millionsAndSmall).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`1319`](../source/grammar.t.html#1319)`]`

::: gramrule
spelledHundred-\>mil\_ \'million\' \'and\' spelledSmallNumber-\>num\_\
:::

`grammar `**[`spelledMillion(millionsPlus)`](../object/spelledMillion(millionsPlus).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`1300`](../source/grammar.t.html#1300)`]`

::: gramrule
spelledHundred-\>mil\_ \'million\'\
(spelledThousand-\>nxt\_ \| spelledHundred-\>nxt\_)\
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
