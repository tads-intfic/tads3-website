---
layout: docs
---
<span class="title">spelledMillion</span><span class="type">GrammarProd</span>

`grammar `**[`spelledMillion(aMillion)`](../object/spelledMillion(aMillion).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`1308`](../source/grammar.t.html#1308)`]`



'a' 'million'



`grammar `**[`spelledMillion(aMillionAndSmall)`](../object/spelledMillion(aMillionAndSmall).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`1312`](../source/grammar.t.html#1312)`]`



'a' 'million' 'and' spelledSmallNumber-\>num\_  



`grammar `**[`spelledMillion(millions)`](../object/spelledMillion(millions).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`1296`](../source/grammar.t.html#1296)`]`



spelledHundred-\>mil\_ 'million'



`grammar `**[`spelledMillion(millionsAndSmall)`](../object/spelledMillion(millionsAndSmall).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`1319`](../source/grammar.t.html#1319)`]`



spelledHundred-\>mil\_ 'million' 'and' spelledSmallNumber-\>num\_  



`grammar `**[`spelledMillion(millionsPlus)`](../object/spelledMillion(millionsPlus).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`1300`](../source/grammar.t.html#1300)`]`



spelledHundred-\>mil\_ 'million'  
(spelledThousand-\>nxt\_ \| spelledHundred-\>nxt\_)  





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


