---
layout: docs
---
<span class="title">qualifiedPluralNounPhrase</span><span class="type">GrammarProd</span>

`grammar `**[`qualifiedPluralNounPhrase(all)`](../object/qualifiedPluralNounPhrase(all).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`554`](../source/grammar.t.html#554)`]`



'all' detPluralNounPhrase-\>np\_  
\| 'all' 'of' explicitDetPluralNounPhrase-\>np\_  



`grammar `**[`qualifiedPluralNounPhrase(allNum)`](../object/qualifiedPluralNounPhrase(allNum).html)**` :   `[`QuantifierProduction`](../object/QuantifierProduction.html)

[`grammar.t`](../file/grammar.t.html)`[`[`521`](../source/grammar.t.html#521)`]`



'all' numberPhrase-\>quant\_ indetPluralNounPhrase-\>np\_  
\| 'all' numberPhrase-\>quant\_ 'of'
explicitDetPluralNounPhrase-\>np\_  



`grammar `**[`qualifiedPluralNounPhrase(anyNum)`](../object/qualifiedPluralNounPhrase(anyNum).html)**` :   `[`QuantifierProduction`](../object/QuantifierProduction.html)

[`grammar.t`](../file/grammar.t.html)`[`[`513`](../source/grammar.t.html#513)`]`



('any' \| ) numberPhrase-\>quant\_ indetPluralNounPhrase-\>np\_  
\| ('any' \| ) numberPhrase-\>quant\_ 'of'
explicitDetPluralNounPhrase-\>np\_  



`grammar `**[`qualifiedPluralNounPhrase(both)`](../object/qualifiedPluralNounPhrase(both).html)**` :   `[`QuantifierProduction`](../object/QuantifierProduction.html)

[`grammar.t`](../file/grammar.t.html)`[`[`534`](../source/grammar.t.html#534)`]`



'both' detPluralNounPhrase-\>np\_  
\| 'both' 'of' explicitDetPluralNounPhrase-\>np\_  



`grammar `**[`qualifiedPluralNounPhrase(definiteNum)`](../object/qualifiedPluralNounPhrase(definiteNum).html)**` :   `[`QuantifierProduction`](../object/QuantifierProduction.html)

[`grammar.t`](../file/grammar.t.html)`[`[`547`](../source/grammar.t.html#547)`]`



'the' numberPhrase-\>quant\_ indetPluralNounPhrase-\>np\_  



`grammar `**[`qualifiedPluralNounPhrase(determiner)`](../object/qualifiedPluralNounPhrase(determiner).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`506`](../source/grammar.t.html#506)`]`



'any' detPluralOnlyNounPhrase-\>np\_  



`grammar `**[`qualifiedPluralNounPhrase(theOnesContaining)`](../object/qualifiedPluralNounPhrase(theOnesContaining).html)**` :   `[`ContentsQualifierProduction`](../object/ContentsQualifierProduction.html)

[`grammar.t`](../file/grammar.t.html)`[`[`572`](../source/grammar.t.html#572)`]`



('the' 'ones' \| 'everything' \| 'all')  
contentsPrepOrVerb-\>prep\_ completeNounPhraseWithoutAll-\>cont\_  



`grammar `**[`qualifiedPluralNounPhrase(theOnesIn)`](../object/qualifiedPluralNounPhrase(theOnesIn).html)**` :   `[`LocationalProduction`](../object/LocationalProduction.html)

[`grammar.t`](../file/grammar.t.html)`[`[`562`](../source/grammar.t.html#562)`]`



('the' 'ones' ('that' ('are' \| 'were') \| )  
\| ('everything' \| 'all')  
('that' ('is' \| 'was') \| 'that' tokApostropheS \| ))  
locationPrep-\>prep\_ completeNounPhraseWithoutAll-\>cont\_  





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


