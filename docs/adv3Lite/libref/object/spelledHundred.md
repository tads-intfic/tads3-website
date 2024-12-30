[spelledHundred]{.title}[GrammarProd]{.type}

`grammar `**[`spelledHundred(aHundred)`](../object/spelledHundred(aHundred).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`1255`](../source/grammar.t.html#1255)`]`

::: gramrule
\'a\' \'hundred\'
:::

`grammar `**[`spelledHundred(aHundredPlus)`](../object/spelledHundred(aHundredPlus).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`1258`](../source/grammar.t.html#1258)`]`

::: gramrule
\'a\' \'hundred\' \'and\' spelledSmallNumber-\>num\_\
:::

`grammar `**[`spelledHundred(hundreds)`](../object/spelledHundred(hundreds).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`1241`](../source/grammar.t.html#1241)`]`

::: gramrule
spelledSmallNumber-\>hun\_ \'hundred\'\
:::

`grammar `**[`spelledHundred(hundredsPlus)`](../object/spelledHundred(hundredsPlus).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`1247`](../source/grammar.t.html#1247)`]`

::: gramrule
spelledSmallNumber-\>hun\_ \'hundred\' spelledSmallNumber-\>num\_\
\| spelledSmallNumber-\>hun\_ \'hundred\' \'and\'-\>and\_
spelledSmallNumber-\>num\_\
:::

`grammar `**[`spelledHundred(small)`](../object/spelledHundred(small).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`1237`](../source/grammar.t.html#1237)`]`

::: gramrule
spelledSmallNumber-\>num\_
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
