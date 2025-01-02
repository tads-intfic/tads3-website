<span class="title">spelledSmallNumber</span><span class="type">GrammarProd</span>

`grammar `**[`spelledSmallNumber(digit)`](../object/spelledSmallNumber(digit).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`1196`](../source/grammar.t.html#1196)`]`

<div class="gramrule">

digitWord-\>num\_

</div>

`grammar `**[`spelledSmallNumber(teen)`](../object/spelledSmallNumber(teen).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`1204`](../source/grammar.t.html#1204)`]`

<div class="gramrule">

teenWord-\>num\_

</div>

`grammar `**[`spelledSmallNumber(tens)`](../object/spelledSmallNumber(tens).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`1212`](../source/grammar.t.html#1212)`]`

<div class="gramrule">

tensWord-\>num\_

</div>

`grammar `**[`spelledSmallNumber(tensAndUnits)`](../object/spelledSmallNumber(tensAndUnits).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`1220`](../source/grammar.t.html#1220)`]`

<div class="gramrule">

tensWord-\>tens\_ '-'-\>sep\_ digitWord-\>units\_  
\| tensWord-\>tens\_ digitWord-\>units\_  

</div>

`grammar `**[`spelledSmallNumber(zero)`](../object/spelledSmallNumber(zero).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`1233`](../source/grammar.t.html#1233)`]`

<div class="gramrule">

'zero'

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
