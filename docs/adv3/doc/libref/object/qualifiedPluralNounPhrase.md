---
layout: docs
---
<span class="title">qualifiedPluralNounPhrase</span><span class="type">GrammarProd</span>

`grammar `<span class="classExtLink">[`qualifiedPluralNounPhrase(all)`](../object/qualifiedPluralNounPhrase(all).html)</span>` :   `[`AllPluralProd`](../object/AllPluralProd.html)

[`en_us.t`](../file/en_us.t.html)`[`[`5888`](../source/en_us.t.html#5888)`]`



'all' detPluralNounPhrase-\>np\_  
\| 'all' 'of' explicitDetPluralNounPhrase-\>np\_  



`grammar `<span class="classExtLink">[`qualifiedPluralNounPhrase(allNum)`](../object/qualifiedPluralNounPhrase(allNum).html)</span>` :   `[`ExactQuantifiedPluralProd`](../object/ExactQuantifiedPluralProd.html)

[`en_us.t`](../file/en_us.t.html)`[`[`5874`](../source/en_us.t.html#5874)`]`



'all' numberPhrase-\>quant\_ indetPluralNounPhrase-\>np\_  
\| 'all' numberPhrase-\>quant\_ 'of'
explicitDetPluralNounPhrase-\>np\_  



`grammar `<span class="classExtLink">[`qualifiedPluralNounPhrase(anyNum)`](../object/qualifiedPluralNounPhrase(anyNum).html)</span>` :   `[`QuantifiedPluralProd`](../object/QuantifiedPluralProd.html)

[`en_us.t`](../file/en_us.t.html)`[`[`5867`](../source/en_us.t.html#5867)`]`



('any' \| ) numberPhrase-\>quant\_ indetPluralNounPhrase-\>np\_  
\| ('any' \| ) numberPhrase-\>quant\_ 'of'
explicitDetPluralNounPhrase-\>np\_  



`grammar `<span class="classExtLink">[`qualifiedPluralNounPhrase(both)`](../object/qualifiedPluralNounPhrase(both).html)</span>` :   `[`BothPluralProd`](../object/BothPluralProd.html)

[`en_us.t`](../file/en_us.t.html)`[`[`5881`](../source/en_us.t.html#5881)`]`



'both' detPluralNounPhrase-\>np\_  
\| 'both' 'of' explicitDetPluralNounPhrase-\>np\_  



`grammar `<span class="classExtLink">[`qualifiedPluralNounPhrase(determiner)`](../object/qualifiedPluralNounPhrase(determiner).html)</span>` :   `[`LayeredNounPhraseProd`](../object/LayeredNounPhraseProd.html)

[`en_us.t`](../file/en_us.t.html)`[`[`5861`](../source/en_us.t.html#5861)`]`



('any' \| ) detPluralOnlyNounPhrase-\>np\_  



`grammar `<span class="classExtLink">[`qualifiedPluralNounPhrase(theOnesIn)`](../object/qualifiedPluralNounPhrase(theOnesIn).html)</span>` :   `[`AllInContainerNounPhraseProd`](../object/AllInContainerNounPhraseProd.html)

[`en_us.t`](../file/en_us.t.html)`[`[`5895`](../source/en_us.t.html#5895)`]`



('the' 'ones' ('that' ('are' \| 'were') \| )  
\| ('everything' \| 'all')  
('that' ('is' \| 'was') \| 'that' tokApostropheS \| ))  
('in' \| 'inside' \| 'inside' 'of' \| 'on' \| 'from')  
completeNounPhraseWithoutAll-\>cont\_  
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


