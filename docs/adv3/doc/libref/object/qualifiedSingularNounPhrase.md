---
layout: docs
---
<span class="title">qualifiedSingularNounPhrase</span><span class="type">GrammarProd</span>

`grammar `<span class="classExtLink">[`qualifiedSingularNounPhrase(anyOneIn)`](../object/qualifiedSingularNounPhrase(anyOneIn).html)</span>` :   `[`VagueContainerIndefiniteNounPhraseProd`](../object/VagueContainerIndefiniteNounPhraseProd.html)

[`en_us.t`](../file/en_us.t.html)`[`[`5798`](../source/en_us.t.html#5798)`]`



('anything' \| 'one') ('that' ('is' \| 'was') \| 'that' tokApostropheS
\| )  
('in' \| 'inside' \| 'inside' 'of' \| 'on' \| 'from')  
completeNounPhraseWithoutAll-\>cont\_  



`grammar `<span class="classExtLink">[`qualifiedSingularNounPhrase(anyPlural)`](../object/qualifiedSingularNounPhrase(anyPlural).html)</span>` :   `[`ArbitraryNounProd`](../object/ArbitraryNounProd.html)

[`en_us.t`](../file/en_us.t.html)`[`[`5772`](../source/en_us.t.html#5772)`]`



'any' 'of' explicitDetPluralNounPhrase-\>np\_  



`grammar `<span class="classExtLink">[`qualifiedSingularNounPhrase(arbitrary)`](../object/qualifiedSingularNounPhrase(arbitrary).html)</span>` :   `[`ArbitraryNounProd`](../object/ArbitraryNounProd.html)

[`en_us.t`](../file/en_us.t.html)`[`[`5754`](../source/en_us.t.html#5754)`]`



('any' \| 'one' \| '1' \| 'any' ('one' \| '1'))
indetSingularNounPhrase-\>np\_  



`grammar `<span class="classExtLink">[`qualifiedSingularNounPhrase(definite)`](../object/qualifiedSingularNounPhrase(definite).html)</span>` :   `[`DefiniteNounProd`](../object/DefiniteNounProd.html)

[`en_us.t`](../file/en_us.t.html)`[`[`5737`](../source/en_us.t.html#5737)`]`



('the' \| 'the' 'one' \| 'the' '1' \| ) indetSingularNounPhrase-\>np\_  



`grammar `<span class="classExtLink">[`qualifiedSingularNounPhrase(indefinite)`](../object/qualifiedSingularNounPhrase(indefinite).html)</span>` :   `[`IndefiniteNounProd`](../object/IndefiniteNounProd.html)

[`en_us.t`](../file/en_us.t.html)`[`[`5745`](../source/en_us.t.html#5745)`]`



('a' \| 'an') indetSingularNounPhrase-\>np\_  



`grammar `<span class="classExtLink">[`qualifiedSingularNounPhrase(possessive)`](../object/qualifiedSingularNounPhrase(possessive).html)</span>` :   `[`PossessiveNounProd`](../object/PossessiveNounProd.html)

[`en_us.t`](../file/en_us.t.html)`[`[`5762`](../source/en_us.t.html#5762)`]`



possessiveAdjPhrase-\>poss\_ indetSingularNounPhrase-\>np\_  



`grammar `<span class="classExtLink">[`qualifiedSingularNounPhrase(theOneIn)`](../object/qualifiedSingularNounPhrase(theOneIn).html)</span>` :   `[`VagueContainerDefiniteNounPhraseProd`](../object/VagueContainerDefiniteNounPhraseProd.html)

[`en_us.t`](../file/en_us.t.html)`[`[`5781`](../source/en_us.t.html#5781)`]`



'the' 'one' ('that' ('is' \| 'was') \| 'that' tokApostropheS \| )  
('in' \| 'inside' \| 'inside' 'of' \| 'on' \| 'from')  
completeNounPhraseWithoutAll-\>cont\_  
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


