---
layout: docs
---
<span class="title">firstCommandPhrase</span><span class="type">GrammarProd</span>

`grammar `<span class="classExtLink">[`firstCommandPhrase(askTellActorTo)`](../object/firstCommandPhrase(askTellActorTo).html)</span>` :   `[`FirstCommandProdWithActor`](../object/FirstCommandProdWithActor.html)

[`en_us.t`](../file/en_us.t.html)`[`[`5107`](../source/en_us.t.html#5107)`]`



('ask' \| 'tell' \| 'a' \| 't') singleNounOnly-\>actor\_  
'to' commandPhrase-\>cmd\_  



`grammar `<span class="classExtLink">[`firstCommandPhrase(commandOnly)`](../object/firstCommandPhrase(commandOnly).html)</span>` :   `[`FirstCommandProd`](../object/FirstCommandProd.html)

[`parser.t`](../file/parser.t.html)`[`[`781`](../source/parser.t.html#781)`]`



commandPhrase-\>cmd\_  



`grammar `<span class="classExtLink">[`firstCommandPhrase(withActor)`](../object/firstCommandPhrase(withActor).html)</span>` :   `[`FirstCommandProdWithActor`](../object/FirstCommandProdWithActor.html)

[`en_us.t`](../file/en_us.t.html)`[`[`5095`](../source/en_us.t.html#5095)`]`



singleNounOnly-\>actor\_ ',' commandPhrase-\>cmd\_  
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


