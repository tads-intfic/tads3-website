---
layout: docs
---
<span class="title">spelledHundred</span><span class="type">GrammarProd</span>

`grammar `<span class="classExtLink">[`spelledHundred(aHundred)`](../object/spelledHundred(aHundred).html)</span>` :   `[`NumberProd`](../object/NumberProd.html)

[`en_us.t`](../file/en_us.t.html)`[`[`7790`](../source/en_us.t.html#7790)`]`



'a' 'hundred'



`grammar `<span class="classExtLink">[`spelledHundred(aHundredPlus)`](../object/spelledHundred(aHundredPlus).html)</span>` :   `[`NumberProd`](../object/NumberProd.html)

[`en_us.t`](../file/en_us.t.html)`[`[`7794`](../source/en_us.t.html#7794)`]`



'a' 'hundred' 'and' spelledSmallNumber-\>num\_  



`grammar `<span class="classExtLink">[`spelledHundred(hundreds)`](../object/spelledHundred(hundreds).html)</span>` :   `[`NumberProd`](../object/NumberProd.html)

[`en_us.t`](../file/en_us.t.html)`[`[`7778`](../source/en_us.t.html#7778)`]`



spelledSmallNumber-\>hun\_ 'hundred'  



`grammar `<span class="classExtLink">[`spelledHundred(hundredsPlus)`](../object/spelledHundred(hundredsPlus).html)</span>` :   `[`NumberProd`](../object/NumberProd.html)

[`en_us.t`](../file/en_us.t.html)`[`[`7783`](../source/en_us.t.html#7783)`]`



spelledSmallNumber-\>hun\_ 'hundred' spelledSmallNumber-\>num\_  
\| spelledSmallNumber-\>hun\_ 'hundred' 'and'-\>and\_
spelledSmallNumber-\>num\_  



`grammar `<span class="classExtLink">[`spelledHundred(small)`](../object/spelledHundred(small).html)</span>` :   `[`NumberProd`](../object/NumberProd.html)

[`en_us.t`](../file/en_us.t.html)`[`[`7774`](../source/en_us.t.html#7774)`]`



spelledSmallNumber-\>num\_





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


