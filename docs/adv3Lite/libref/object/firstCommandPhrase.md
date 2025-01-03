---
layout: docs
---
<span class="title">firstCommandPhrase</span><span class="type">GrammarProd</span>

`grammar `**[`firstCommandPhrase(askTellActorTo)`](../object/firstCommandPhrase(askTellActorTo).html)**` :   `[`CommandProduction`](../object/CommandProduction.html)

[`grammar.t`](../file/grammar.t.html)`[`[`61`](../source/grammar.t.html#61)`]`



('ask' \| 'tell' \| 'a' \| 't') singleNounOnly-\>actor\_  
'to' commandPhrase-\>cmd\_  



`grammar `**[`firstCommandPhrase(commandOnly)`](../object/firstCommandPhrase(commandOnly).html)**` :   `[`CommandProduction`](../object/CommandProduction.html)

[`grammar.t`](../file/grammar.t.html)`[`[`52`](../source/grammar.t.html#52)`]`



commandPhrase-\>cmd\_  



`grammar `**[`firstCommandPhrase(withActor)`](../object/firstCommandPhrase(withActor).html)**` :   `[`CommandProduction`](../object/CommandProduction.html)

[`grammar.t`](../file/grammar.t.html)`[`[`56`](../source/grammar.t.html#56)`]`



singleNounOnly-\>actor\_ ',' commandPhrase-\>cmd\_  
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


