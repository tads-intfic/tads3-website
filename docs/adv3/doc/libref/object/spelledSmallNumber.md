---
---
<span class="title">spelledSmallNumber</span><span class="type">GrammarProd</span>

`grammar `<span class="classExtLink">[`spelledSmallNumber(digit)`](../object/spelledSmallNumber(digit).html)</span>` :   `[`NumberProd`](../object/NumberProd.html)

[`en_us.t`](../file/en_us.t.html)`[`[`7729`](../source/en_us.t.html#7729)`]`

<div class="gramrule">

digitWord-\>num\_

</div>

`grammar `<span class="classExtLink">[`spelledSmallNumber(teen)`](../object/spelledSmallNumber(teen).html)</span>` :   `[`NumberProd`](../object/NumberProd.html)

[`en_us.t`](../file/en_us.t.html)`[`[`7742`](../source/en_us.t.html#7742)`]`

<div class="gramrule">

teenWord-\>num\_

</div>

`grammar `<span class="classExtLink">[`spelledSmallNumber(tens)`](../object/spelledSmallNumber(tens).html)</span>` :   `[`NumberProd`](../object/NumberProd.html)

[`en_us.t`](../file/en_us.t.html)`[`[`7750`](../source/en_us.t.html#7750)`]`

<div class="gramrule">

tensWord-\>num\_

</div>

`grammar `<span class="classExtLink">[`spelledSmallNumber(tensAndUnits)`](../object/spelledSmallNumber(tensAndUnits).html)</span>` :   `[`NumberProd`](../object/NumberProd.html)

[`en_us.t`](../file/en_us.t.html)`[`[`7758`](../source/en_us.t.html#7758)`]`

<div class="gramrule">

tensWord-\>tens\_ '-'-\>sep\_ digitWord-\>units\_  
\| tensWord-\>tens\_ digitWord-\>units\_  

</div>

`grammar `<span class="classExtLink">[`spelledSmallNumber(zero)`](../object/spelledSmallNumber(zero).html)</span>` :   `[`NumberProd`](../object/NumberProd.html)

[`en_us.t`](../file/en_us.t.html)`[`[`7770`](../source/en_us.t.html#7770)`]`

<div class="gramrule">

'zero'

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
