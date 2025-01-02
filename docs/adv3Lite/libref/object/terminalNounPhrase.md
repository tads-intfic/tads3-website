---
layout: docs
---
<span class="title">terminalNounPhrase</span><span class="type">GrammarProd</span>

`grammar `**[`terminalNounPhrase(allBut)`](../object/terminalNounPhrase(allBut).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`365`](../source/grammar.t.html#365)`]`



('all' \| 'everything') ('but' \| 'except' \| 'except' 'for')  
exceptList-\>except\_  



`grammar `**[`terminalNounPhrase(anyBut)`](../object/terminalNounPhrase(anyBut).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`379`](../source/grammar.t.html#379)`]`



'any' nounPhrase-\>np\_  
('but' \| 'except' \| 'except' 'for' \| 'but' 'not')
exceptList-\>except\_  



`grammar `**[`terminalNounPhrase(pluralExcept)`](../object/terminalNounPhrase(pluralExcept).html)**` :   `[`Production`](../object/Production.html)

[`grammar.t`](../file/grammar.t.html)`[`[`373`](../source/grammar.t.html#373)`]`



(qualifiedPluralNounPhrase-\>np\_ \| detPluralNounPhrase-\>np\_)  
('except' \| 'except' 'for' \| 'but' \| 'but' 'not')
exceptList-\>except\_  





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


