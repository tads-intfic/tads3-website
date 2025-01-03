---
layout: docs
---
<span class="title">spelledMillion</span><span class="type">GrammarProd</span>

`grammar `<span class="classExtLink">[`spelledMillion(aMillion)`](../object/spelledMillion(aMillion).html)</span>` :   `[`NumberProd`](../object/NumberProd.html)

[`en_us.t`](../file/en_us.t.html)`[`[`7838`](../source/en_us.t.html#7838)`]`



'a' 'million'



`grammar `<span class="classExtLink">[`spelledMillion(aMillionAndSmall)`](../object/spelledMillion(aMillionAndSmall).html)</span>` :   `[`NumberProd`](../object/NumberProd.html)

[`en_us.t`](../file/en_us.t.html)`[`[`7842`](../source/en_us.t.html#7842)`]`



'a' 'million' 'and' spelledSmallNumber-\>num\_  



`grammar `<span class="classExtLink">[`spelledMillion(millions)`](../object/spelledMillion(millions).html)</span>` :   `[`NumberProd`](../object/NumberProd.html)

[`en_us.t`](../file/en_us.t.html)`[`[`7827`](../source/en_us.t.html#7827)`]`



spelledHundred-\>mil\_ 'million'



`grammar `<span class="classExtLink">[`spelledMillion(millionsAndSmall)`](../object/spelledMillion(millionsAndSmall).html)</span>` :   `[`NumberProd`](../object/NumberProd.html)

[`en_us.t`](../file/en_us.t.html)`[`[`7848`](../source/en_us.t.html#7848)`]`



spelledHundred-\>mil\_ 'million' 'and' spelledSmallNumber-\>num\_  



`grammar `<span class="classExtLink">[`spelledMillion(millionsPlus)`](../object/spelledMillion(millionsPlus).html)</span>` :   `[`NumberProd`](../object/NumberProd.html)

[`en_us.t`](../file/en_us.t.html)`[`[`7831`](../source/en_us.t.html#7831)`]`



spelledHundred-\>mil\_ 'million'  
(spelledThousand-\>nxt\_ \| spelledHundred-\>nxt\_)  
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


