<span class="title">terminalNounPhrase</span><span class="type">GrammarProd</span>

`grammar `<span class="classExtLink">[`terminalNounPhrase(allBut)`](../object/terminalNounPhrase(allBut).html)</span>` :   `[`EverythingButProd`](../object/EverythingButProd.html)

[`en_us.t`](../file/en_us.t.html)`[`[`5675`](../source/en_us.t.html#5675)`]`

<div class="gramrule">

('all' \| 'everything') ('but' \| 'except' \| 'except' 'for')  
exceptList-\>except\_  

</div>

`grammar `<span class="classExtLink">[`terminalNounPhrase(anyBut)`](../object/terminalNounPhrase(anyBut).html)</span>` :   `[`IndefiniteNounButProd`](../object/IndefiniteNounButProd.html)

[`en_us.t`](../file/en_us.t.html)`[`[`5694`](../source/en_us.t.html#5694)`]`

<div class="gramrule">

'any' nounPhrase-\>np\_  
('but' \| 'except' \| 'except' 'for' \| 'but' 'not')
exceptList-\>except\_  

</div>

`grammar `<span class="classExtLink">[`terminalNounPhrase(pluralExcept)`](../object/terminalNounPhrase(pluralExcept).html)</span>` :   `[`ListButProd`](../object/ListButProd.html)

[`en_us.t`](../file/en_us.t.html)`[`[`5685`](../source/en_us.t.html#5685)`]`

<div class="gramrule">

(qualifiedPluralNounPhrase-\>np\_ \| detPluralNounPhrase-\>np\_)  
('except' \| 'except' 'for' \| 'but' \| 'but' 'not')
exceptList-\>except\_  

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>