---
layout: docs
---
<span class="title">firstCommandPhrase</span><span class="type">GrammarProd</span>

`grammar `**[`firstCommandPhrase(askTellActorTo)`](../object/firstCommandPhrase(askTellActorTo).html)**` :   `[`CommandProduction`](../object/CommandProduction.html)

[`grammar.t`](../file/grammar.t.html)`[`[`61`](../source/grammar.t.html#61)`]`

<div class="gramrule">

('ask' \| 'tell' \| 'a' \| 't') singleNounOnly-\>actor\_  
'to' commandPhrase-\>cmd\_  

</div>

`grammar `**[`firstCommandPhrase(commandOnly)`](../object/firstCommandPhrase(commandOnly).html)**` :   `[`CommandProduction`](../object/CommandProduction.html)

[`grammar.t`](../file/grammar.t.html)`[`[`52`](../source/grammar.t.html#52)`]`

<div class="gramrule">

commandPhrase-\>cmd\_  

</div>

`grammar `**[`firstCommandPhrase(withActor)`](../object/firstCommandPhrase(withActor).html)**` :   `[`CommandProduction`](../object/CommandProduction.html)

[`grammar.t`](../file/grammar.t.html)`[`[`56`](../source/grammar.t.html#56)`]`

<div class="gramrule">

singleNounOnly-\>actor\_ ',' commandPhrase-\>cmd\_  

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
