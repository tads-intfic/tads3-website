---
layout: docs
---
<span class="title">disambigPhrase</span><span class="type">GrammarProd</span>

`grammar `**[`disambigPhrase(all)`](../object/disambigPhrase(all).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`989`](../source/grammar.t.html#989)`]`

<div class="gramrule">

'all' \| 'everything' \| 'all' 'of' 'them'

</div>

`grammar `**[`disambigPhrase(any)`](../object/disambigPhrase(any).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`1003`](../source/grammar.t.html#1003)`]`

<div class="gramrule">

'any' \| 'any' 'of' 'them'

</div>

`grammar `**[`disambigPhrase(both)`](../object/disambigPhrase(both).html)**` :   `[`QuantifierProduction`](../object/QuantifierProduction.html)

[`grammar.t`](../file/grammar.t.html)`[`[`995`](../source/grammar.t.html#995)`]`

<div class="gramrule">

'both' \| 'both' 'of' 'them'  

</div>

`grammar `**[`disambigPhrase(list)`](../object/disambigPhrase(list).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`1007`](../source/grammar.t.html#1007)`]`

<div class="gramrule">

disambigList-\>lst\_

</div>

`grammar `**[`disambigPhrase(locational)`](../object/disambigPhrase(locational).html)**` :   `[`LocationalProduction`](../object/LocationalProduction.html)

[`grammar.t`](../file/grammar.t.html)`[`[`1018`](../source/grammar.t.html#1018)`]`

<div class="gramrule">

locationPrep-\>prep\_ completeNounPhraseWithoutAll-\>cont\_  

</div>

`grammar `**[`disambigPhrase(ordinalList)`](../object/disambigPhrase(ordinalList).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`1010`](../source/grammar.t.html#1010)`]`

<div class="gramrule">

disambigOrdinalList-\>lst\_ 'ones'  
\| 'the' disambigOrdinalList-\>lst\_ 'ones'  

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
