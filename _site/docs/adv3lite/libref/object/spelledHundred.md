<span class="title">spelledHundred</span><span class="type">GrammarProd</span>

`grammar `**[`spelledHundred(aHundred)`](../object/spelledHundred(aHundred).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`1255`](../source/grammar.t.html#1255)`]`

<div class="gramrule">

'a' 'hundred'

</div>

`grammar `**[`spelledHundred(aHundredPlus)`](../object/spelledHundred(aHundredPlus).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`1258`](../source/grammar.t.html#1258)`]`

<div class="gramrule">

'a' 'hundred' 'and' spelledSmallNumber-\>num\_  

</div>

`grammar `**[`spelledHundred(hundreds)`](../object/spelledHundred(hundreds).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`1241`](../source/grammar.t.html#1241)`]`

<div class="gramrule">

spelledSmallNumber-\>hun\_ 'hundred'  

</div>

`grammar `**[`spelledHundred(hundredsPlus)`](../object/spelledHundred(hundredsPlus).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`1247`](../source/grammar.t.html#1247)`]`

<div class="gramrule">

spelledSmallNumber-\>hun\_ 'hundred' spelledSmallNumber-\>num\_  
\| spelledSmallNumber-\>hun\_ 'hundred' 'and'-\>and\_
spelledSmallNumber-\>num\_  

</div>

`grammar `**[`spelledHundred(small)`](../object/spelledHundred(small).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`1237`](../source/grammar.t.html#1237)`]`

<div class="gramrule">

spelledSmallNumber-\>num\_

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
