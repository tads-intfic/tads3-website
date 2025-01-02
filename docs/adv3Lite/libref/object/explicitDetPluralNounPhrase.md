---
---
<span class="title">explicitDetPluralNounPhrase</span><span class="type">GrammarProd</span>

`grammar `**[`explicitDetPluralNounPhrase(definite)`](../object/explicitDetPluralNounPhrase(definite).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`596`](../source/grammar.t.html#596)`]`

<div class="gramrule">

'the' indetPluralNounPhrase-\>np\_  

</div>

`grammar `**[`explicitDetPluralNounPhrase(definiteNumber)`](../object/explicitDetPluralNounPhrase(definiteNumber).html)**` :   `[`QuantifierProduction`](../object/QuantifierProduction.html)

[`grammar.t`](../file/grammar.t.html)`[`[`603`](../source/grammar.t.html#603)`]`

<div class="gramrule">

'the' numberPhrase-\>quant\_ indetPluralNounPhrase-\>np\_  

</div>

`grammar `**[`explicitDetPluralNounPhrase(possessive)`](../object/explicitDetPluralNounPhrase(possessive).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`610`](../source/grammar.t.html#610)`]`

<div class="gramrule">

possessiveAdjPhrase-\>poss\_ indetPluralNounPhrase-\>np\_  
\| indetPluralNounPhrase-\>np\_ 'of' possessiveNounPhrase-\>poss\_  

</div>

`grammar `**[`explicitDetPluralNounPhrase(possessiveNumber)`](../object/explicitDetPluralNounPhrase(possessiveNumber).html)**` :   `[`QuantifierProduction`](../object/QuantifierProduction.html)

[`grammar.t`](../file/grammar.t.html)`[`[`616`](../source/grammar.t.html#616)`]`

<div class="gramrule">

possessiveAdjPhrase-\>poss\_ numberPhrase-\>quant\_
indetPluralNounPhrase-\>np\_  
\| 'the' numberPhrase-\>quant\_ indetPluralNounPhrase-\>np\_  
'of' possessiveNounPhrase-\>poss\_  

</div>

`grammar `**[`explicitDetPluralNounPhrase(possessiveNumber2)`](../object/explicitDetPluralNounPhrase(possessiveNumber2).html)**` :   `[`QuantifierProduction`](../object/QuantifierProduction.html)

[`grammar.t`](../file/grammar.t.html)`[`[`629`](../source/grammar.t.html#629)`]`

<div class="gramrule">

numberPhrase-\>quant\_ indetPluralNounPhrase-\>np\_  
'of' possessiveNounPhrase-\>poss\_  

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
