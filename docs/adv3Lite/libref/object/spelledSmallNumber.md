---
layout: docs
---
<span class="title">spelledSmallNumber</span><span class="type">GrammarProd</span>

`grammar `**[`spelledSmallNumber(digit)`](../object/spelledSmallNumber(digit).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`1196`](../source/grammar.t.html#1196)`]`



digitWord-\>num\_



`grammar `**[`spelledSmallNumber(teen)`](../object/spelledSmallNumber(teen).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`1204`](../source/grammar.t.html#1204)`]`



teenWord-\>num\_



`grammar `**[`spelledSmallNumber(tens)`](../object/spelledSmallNumber(tens).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`1212`](../source/grammar.t.html#1212)`]`



tensWord-\>num\_



`grammar `**[`spelledSmallNumber(tensAndUnits)`](../object/spelledSmallNumber(tensAndUnits).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`1220`](../source/grammar.t.html#1220)`]`



tensWord-\>tens\_ '-'-\>sep\_ digitWord-\>units\_  
\| tensWord-\>tens\_ digitWord-\>units\_  



`grammar `**[`spelledSmallNumber(zero)`](../object/spelledSmallNumber(zero).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`1233`](../source/grammar.t.html#1233)`]`



'zero'
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


