<span class="title">spelledMillion</span><span class="type">GrammarProd</span>

`grammar `**[`spelledMillion(aMillion)`](../object/spelledMillion(aMillion).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`1308`](../source/grammar.t.html#1308)`]`

<div class="gramrule">

'a' 'million'

</div>

`grammar `**[`spelledMillion(aMillionAndSmall)`](../object/spelledMillion(aMillionAndSmall).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`1312`](../source/grammar.t.html#1312)`]`

<div class="gramrule">

'a' 'million' 'and' spelledSmallNumber-\>num\_  

</div>

`grammar `**[`spelledMillion(millions)`](../object/spelledMillion(millions).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`1296`](../source/grammar.t.html#1296)`]`

<div class="gramrule">

spelledHundred-\>mil\_ 'million'

</div>

`grammar `**[`spelledMillion(millionsAndSmall)`](../object/spelledMillion(millionsAndSmall).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`1319`](../source/grammar.t.html#1319)`]`

<div class="gramrule">

spelledHundred-\>mil\_ 'million' 'and' spelledSmallNumber-\>num\_  

</div>

`grammar `**[`spelledMillion(millionsPlus)`](../object/spelledMillion(millionsPlus).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`1300`](../source/grammar.t.html#1300)`]`

<div class="gramrule">

spelledHundred-\>mil\_ 'million'  
(spelledThousand-\>nxt\_ \| spelledHundred-\>nxt\_)  

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
