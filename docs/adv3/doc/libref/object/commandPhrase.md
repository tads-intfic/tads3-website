<span class="title">commandPhrase</span><span class="type">GrammarProd</span>

`grammar `<span class="classExtLink">[`commandPhrase(ambiguousConj)`](../object/commandPhrase(ambiguousConj).html)</span>` :   `[`CommandProdWithAmbiguousConj`](../object/CommandProdWithAmbiguousConj.html)

[`parser.t`](../file/parser.t.html)`[`[`1188`](../source/parser.t.html#1188)`]`

<div class="gramrule">

predicate-\>cmd1\_ commandOrNounConjunction-\>conj\_
commandPhrase-\>cmd2\_  

</div>

`grammar `<span class="classExtLink">[`commandPhrase(definiteConj)`](../object/commandPhrase(definiteConj).html)</span>` :   `[`CommandProdWithDefiniteConj`](../object/CommandProdWithDefiniteConj.html)

[`parser.t`](../file/parser.t.html)`[`[`1177`](../source/parser.t.html#1177)`]`

<div class="gramrule">

predicate-\>cmd\_  
\| predicate-\>cmd\_ commandOnlyConjunction-\>conj\_ \*  

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
