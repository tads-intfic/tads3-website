---
layout: docs
---
<span class="title">explicitDetPluralNounPhrase</span><span class="type">GrammarProd</span>

`grammar `**[`explicitDetPluralNounPhrase(definite)`](../object/explicitDetPluralNounPhrase(definite).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`596`](../source/grammar.t.html#596)`]`



'the' indetPluralNounPhrase-\>np\_  



`grammar `**[`explicitDetPluralNounPhrase(definiteNumber)`](../object/explicitDetPluralNounPhrase(definiteNumber).html)**` :   `[`QuantifierProduction`](../object/QuantifierProduction.html)

[`grammar.t`](../file/grammar.t.html)`[`[`603`](../source/grammar.t.html#603)`]`



'the' numberPhrase-\>quant\_ indetPluralNounPhrase-\>np\_  



`grammar `**[`explicitDetPluralNounPhrase(possessive)`](../object/explicitDetPluralNounPhrase(possessive).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`610`](../source/grammar.t.html#610)`]`



possessiveAdjPhrase-\>poss\_ indetPluralNounPhrase-\>np\_  
\| indetPluralNounPhrase-\>np\_ 'of' possessiveNounPhrase-\>poss\_  



`grammar `**[`explicitDetPluralNounPhrase(possessiveNumber)`](../object/explicitDetPluralNounPhrase(possessiveNumber).html)**` :   `[`QuantifierProduction`](../object/QuantifierProduction.html)

[`grammar.t`](../file/grammar.t.html)`[`[`616`](../source/grammar.t.html#616)`]`



possessiveAdjPhrase-\>poss\_ numberPhrase-\>quant\_
indetPluralNounPhrase-\>np\_  
\| 'the' numberPhrase-\>quant\_ indetPluralNounPhrase-\>np\_  
'of' possessiveNounPhrase-\>poss\_  



`grammar `**[`explicitDetPluralNounPhrase(possessiveNumber2)`](../object/explicitDetPluralNounPhrase(possessiveNumber2).html)**` :   `[`QuantifierProduction`](../object/QuantifierProduction.html)

[`grammar.t`](../file/grammar.t.html)`[`[`629`](../source/grammar.t.html#629)`]`



numberPhrase-\>quant\_ indetPluralNounPhrase-\>np\_  
'of' possessiveNounPhrase-\>poss\_  
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


