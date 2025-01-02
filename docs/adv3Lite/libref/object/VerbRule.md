---
layout: docs
---
<span class="title">VerbRule</span><span class="type">GrammarProd</span>

`VerbRule(About)      `*`// original source text`*  

`grammar `**[`VerbRule(About)`](../object/VerbRule(About).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2377`](../source/grammar.t.html#2377)]`

<div class="gramrule">

'about'  

</div>

`VerbRule(Again)      `*`// original source text`*  

`grammar `**[`VerbRule(Again)`](../object/VerbRule(Again).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2278`](../source/grammar.t.html#2278)]`

<div class="gramrule">

'again' \| 'g'  

</div>

`VerbRule(AskAbout)      `*`// original source text`*  

`grammar `**[`VerbRule(AskAbout)`](../object/VerbRule(AskAbout).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`1878`](../source/grammar.t.html#1878)]`

<div class="gramrule">

('ask' \| 'a') singleDobj 'about' topicIobj  

</div>

`VerbRule(AskAboutImplicit)      `*`// original source text`*  

`grammar `**[`VerbRule(AskAboutImplicit)`](../object/VerbRule(AskAboutImplicit).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`1888`](../source/grammar.t.html#1888)]`

<div class="gramrule">

('a' \| ('ask' \| 'tell' 'me') ('about')) topicIobj  

</div>

`VerbRule(AskAboutWhat)      `*`// original source text`*  

`grammar `**[`VerbRule(AskAboutWhat)`](../object/VerbRule(AskAboutWhat).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`1898`](../source/grammar.t.html#1898)]`

<div class="gramrule">

\[badness 500\] 'ask' singleDobj  

</div>

`VerbRule(AskFor)      `*`// original source text`*  

`grammar `**[`VerbRule(AskFor)`](../object/VerbRule(AskFor).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`1845`](../source/grammar.t.html#1845)]`

<div class="gramrule">

('ask' \| 'a') singleDobj 'for' topicIobj  
\| ('ask' \| 'a') 'for' topicIobj 'from' singleDobj  

</div>

`VerbRule(AskForImplicit)      `*`// original source text`*  

`grammar `**[`VerbRule(AskForImplicit)`](../object/VerbRule(AskForImplicit).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`1866`](../source/grammar.t.html#1866)]`

<div class="gramrule">

('a' \| 'ask') 'for' topicIobj  

</div>

`VerbRule(AskVague)      `*`// original source text`*  

`grammar `**[`VerbRule(AskVague)`](../object/VerbRule(AskVague).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`1973`](../source/grammar.t.html#1973)]`

<div class="gramrule">

\[badness 500\] 'ask' singleDobj topicIobj  

</div>

`VerbRule(AskWhomFor)      `*`// original source text`*  

`grammar `**[`VerbRule(AskWhomFor)`](../object/VerbRule(AskWhomFor).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`1856`](../source/grammar.t.html#1856)]`

<div class="gramrule">

('ask' \| 'a') 'for' topicIobj  

</div>

`VerbRule(Attach)      `*`// original source text`*  

`grammar `**[`VerbRule(Attach)`](../object/VerbRule(Attach).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2997`](../source/grammar.t.html#2997)]`

<div class="gramrule">

('attach' \| 'connect') multiDobj  

</div>

`VerbRule(AttachTo)      `*`// original source text`*  

`grammar `**[`VerbRule(AttachTo)`](../object/VerbRule(AttachTo).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2987`](../source/grammar.t.html#2987)]`

<div class="gramrule">

('attach' \| 'connect') multiDobj 'to' singleIobj  

</div>

`VerbRule(Attack)      `*`// original source text`*  

`grammar `**[`VerbRule(Attack)`](../object/VerbRule(Attack).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2215`](../source/grammar.t.html#2215)]`

<div class="gramrule">

('attack' \| 'kill' \| 'hit' \| 'kick' \| 'punch') singleDobj  

</div>

`VerbRule(AttackWith)      `*`// original source text`*  

`grammar `**[`VerbRule(AttackWith)`](../object/VerbRule(AttackWith).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2224`](../source/grammar.t.html#2224)]`

<div class="gramrule">

('attack' \| 'kill' \| 'hit' \| 'strike')  
singleDobj 'with' singleIobj  

</div>

`VerbRule(AuxQuery)      `*`// original source text`*  

`grammar `**[`VerbRule(AuxQuery)`](../object/VerbRule(AuxQuery).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`1809`](../source/grammar.t.html#1809)]`

<div class="gramrule">

('a' \| 'ask'\|) ('do' \| 'does' \| 'did' \| 'is' \| 'are'\| 'have' \|
'has' \|'can' \|  
'could' \| 'would' \| 'should' \| 'were' ) topicDobj  

</div>

`VerbRule(Board)      `*`// original source text`*  

`grammar `**[`VerbRule(Board)`](../object/VerbRule(Board).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3186`](../source/grammar.t.html#3186)]`

<div class="gramrule">

('board'  
\| ('get' ('on' \| 'onto' \| 'on' 'to'))  
\| ('climb' ('on' \| 'onto' \| 'on' 'to')))  
singleDobj  

</div>

`VerbRule(Break)      `*`// original source text`*  

`grammar `**[`VerbRule(Break)`](../object/VerbRule(Break).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2858`](../source/grammar.t.html#2858)]`

<div class="gramrule">

('break' \| 'ruin' \| 'destroy' \| 'wreck' \| 'smash') multiDobj  

</div>

`VerbRule(Brief)      `*`// original source text`*  

`grammar `**[`VerbRule(Brief)`](../object/VerbRule(Brief).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3441`](../source/grammar.t.html#3441)]`

<div class="gramrule">

'brief' \| 'terse'  

</div>

`VerbRule(Burn)      `*`// original source text`*  

`grammar `**[`VerbRule(Burn)`](../object/VerbRule(Burn).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2830`](../source/grammar.t.html#2830)]`

<div class="gramrule">

('burn' \| 'ignite' \| 'set' 'fire' 'to') multiDobj  

</div>

`VerbRule(BurnWith)      `*`// original source text`*  

`grammar `**[`VerbRule(BurnWith)`](../object/VerbRule(BurnWith).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2838`](../source/grammar.t.html#2838)]`

<div class="gramrule">

('light' \| 'burn' \| 'ignite' \| 'set' 'fire' 'to') singleDobj  
('with' \| 'from') singleIobj  

</div>

`VerbRule(Clean)      `*`// original source text`*  

`grammar `**[`VerbRule(Clean)`](../object/VerbRule(Clean).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2969`](../source/grammar.t.html#2969)]`

<div class="gramrule">

'clean' multiDobj  

</div>

`VerbRule(CleanWith)      `*`// original source text`*  

`grammar `**[`VerbRule(CleanWith)`](../object/VerbRule(CleanWith).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2977`](../source/grammar.t.html#2977)]`

<div class="gramrule">

'clean' singleDobj 'with' singleIobj  

</div>

`VerbRule(Climb)      `*`// original source text`*  

`grammar `**[`VerbRule(Climb)`](../object/VerbRule(Climb).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2926`](../source/grammar.t.html#2926)]`

<div class="gramrule">

'climb' singleDobj  

</div>

`VerbRule(ClimbDown)      `*`// original source text`*  

`grammar `**[`VerbRule(ClimbDown)`](../object/VerbRule(ClimbDown).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2952`](../source/grammar.t.html#2952)]`

<div class="gramrule">

('climb' \| 'go' \| 'walk') 'down' singleDobj  

</div>

`VerbRule(ClimbDownWhat)      `*`// original source text`*  

`grammar `**[`VerbRule(ClimbDownWhat)`](../object/VerbRule(ClimbDownWhat).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2961`](../source/grammar.t.html#2961)]`

<div class="gramrule">

('climb' \| 'go' \| 'walk') 'down'  

</div>

`VerbRule(ClimbUp)      `*`// original source text`*  

`grammar `**[`VerbRule(ClimbUp)`](../object/VerbRule(ClimbUp).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2935`](../source/grammar.t.html#2935)]`

<div class="gramrule">

('climb' \| 'go' \| 'walk') 'up' singleDobj  

</div>

`VerbRule(ClimbUpWhat)      `*`// original source text`*  

`grammar `**[`VerbRule(ClimbUpWhat)`](../object/VerbRule(ClimbUpWhat).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2944`](../source/grammar.t.html#2944)]`

<div class="gramrule">

'climb' 'up'  

</div>

`VerbRule(Close)      `*`// original source text`*  

`grammar `**[`VerbRule(Close)`](../object/VerbRule(Close).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3033`](../source/grammar.t.html#3033)]`

<div class="gramrule">

('close' \| 'shut') multiDobj  

</div>

`VerbRule(CmdMenu)      `*`// original source text`*  

`grammar `**[`VerbRule(CmdMenu)`](../object/VerbRule(CmdMenu).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`cmdhelp.t`](../file/cmdhelp.t.html)[`[`845`](../source/cmdhelp.t.html#845)]`

<div class="gramrule">

numericDobj  

</div>

`VerbRule(ConsultAbout)      `*`// original source text`*  

`grammar `**[`VerbRule(ConsultAbout)`](../object/VerbRule(ConsultAbout).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2743`](../source/grammar.t.html#2743)]`

<div class="gramrule">

'consult' singleDobj ('on' \| 'about') topicIobj  
\| 'search' singleDobj 'for' topicIobj  

</div>

`VerbRule(ConsultWhatAbout)      `*`// original source text`*  

`grammar `**[`VerbRule(ConsultWhatAbout)`](../object/VerbRule(ConsultWhatAbout).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2764`](../source/grammar.t.html#2764)]`

<div class="gramrule">

(('look' \| 'l') ('up' \| 'for')  
\| 'find'  
\| 'search' 'for'  
\| 'read' 'about')  
topicIobj  
\| ('look' \| 'l') topicIobj 'up'  

</div>

`VerbRule(Continue)      `*`// original source text`*  

`grammar `**[`VerbRule(Continue)`](../object/VerbRule(Continue).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2470`](../source/grammar.t.html#2470)]`

<div class="gramrule">

'continue' \| 'c'  

</div>

`VerbRule(Credits)      `*`// original source text`*  

`grammar `**[`VerbRule(Credits)`](../object/VerbRule(Credits).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2370`](../source/grammar.t.html#2370)]`

<div class="gramrule">

'credits'  

</div>

`VerbRule(Cut)      `*`// original source text`*  

`grammar `**[`VerbRule(Cut)`](../object/VerbRule(Cut).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2866`](../source/grammar.t.html#2866)]`

<div class="gramrule">

\[badness 500\] 'cut' singleDobj  

</div>

`VerbRule(CutWith)      `*`// original source text`*  

`grammar `**[`VerbRule(CutWith)`](../object/VerbRule(CutWith).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2874`](../source/grammar.t.html#2874)]`

<div class="gramrule">

'cut' singleDobj 'with' singleIobj  

</div>

`VerbRule(Debug)      `*`// original source text`*  

`grammar `**[`VerbRule(Debug)`](../object/VerbRule(Debug).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`debug.t`](../file/debug.t.html)[`[`52`](../source/debug.t.html#52)]`

<div class="gramrule">

'debug' literalDobj  

</div>

`VerbRule(DebugI)      `*`// original source text`*  

`grammar `**[`VerbRule(DebugI)`](../object/VerbRule(DebugI).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`debug.t`](../file/debug.t.html)[`[`105`](../source/debug.t.html#105)]`

<div class="gramrule">

'debug'  

</div>

`VerbRule(Detach)      `*`// original source text`*  

`grammar `**[`VerbRule(Detach)`](../object/VerbRule(Detach).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3017`](../source/grammar.t.html#3017)]`

<div class="gramrule">

('detach' \| 'disconnect') multiDobj  

</div>

`VerbRule(DetachFrom)      `*`// original source text`*  

`grammar `**[`VerbRule(DetachFrom)`](../object/VerbRule(DetachFrom).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3007`](../source/grammar.t.html#3007)]`

<div class="gramrule">

('detach' \| 'disconnect') multiDobj 'from' singleIobj  

</div>

`VerbRule(Dig)      `*`// original source text`*  

`grammar `**[`VerbRule(Dig)`](../object/VerbRule(Dig).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2549`](../source/grammar.t.html#2549)]`

<div class="gramrule">

('dig' \| 'dig' 'in') singleDobj  

</div>

`VerbRule(DigWith)      `*`// original source text`*  

`grammar `**[`VerbRule(DigWith)`](../object/VerbRule(DigWith).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2558`](../source/grammar.t.html#2558)]`

<div class="gramrule">

('dig' \| 'dig' 'in') singleDobj 'with' singleIobj  

</div>

`VerbRule(Doff)      `*`// original source text`*  

`grammar `**[`VerbRule(Doff)`](../object/VerbRule(Doff).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`1748`](../source/grammar.t.html#1748)]`

<div class="gramrule">

('doff' \| 'take' 'off') multiDobj  
\| 'take' multiDobj 'off'  

</div>

`VerbRule(Drink)      `*`// original source text`*  

`grammar `**[`VerbRule(Drink)`](../object/VerbRule(Drink).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2892`](../source/grammar.t.html#2892)]`

<div class="gramrule">

('drink' \| 'quaff' \| 'imbibe') multiDobj  

</div>

`VerbRule(Drop)      `*`// original source text`*  

`grammar `**[`VerbRule(Drop)`](../object/VerbRule(Drop).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`1530`](../source/grammar.t.html#1530)]`

<div class="gramrule">

('drop' \| 'put' 'down' \| 'set' 'down') multiDobj  
\| ('put' \| 'set') multiDobj 'down'  

</div>

`VerbRule(Eat)      `*`// original source text`*  

`grammar `**[`VerbRule(Eat)`](../object/VerbRule(Eat).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2884`](../source/grammar.t.html#2884)]`

<div class="gramrule">

('eat' \| 'consume') multiDobj  

</div>

`VerbRule(Enter)      `*`// original source text`*  

`grammar `**[`VerbRule(Enter)`](../object/VerbRule(Enter).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3198`](../source/grammar.t.html#3198)]`

<div class="gramrule">

('enter' \| ('walk' \| 'go' \| 'get' \| 'climb')  
( 'in' \| 'in' 'to' \| 'into' \| 'inside'))  
singleDobj  

</div>

`VerbRule(EnterOn)      `*`// original source text`*  

`grammar `**[`VerbRule(EnterOn)`](../object/VerbRule(EnterOn).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2713`](../source/grammar.t.html#2713)]`

<div class="gramrule">

'enter' literalDobj  
('on' \| 'in' \| 'in' 'to' \| 'into' \| 'with') singleIobj  

</div>

`VerbRule(Evaluate)      `*`// original source text`*  

`grammar `**[`VerbRule(Evaluate)`](../object/VerbRule(Evaluate).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3482`](../source/grammar.t.html#3482)]`

<div class="gramrule">

'eval' literalDobj  

</div>

`VerbRule(Examine)      `*`// original source text`*  

`grammar `**[`VerbRule(Examine)`](../object/VerbRule(Examine).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`1539`](../source/grammar.t.html#1539)]`

<div class="gramrule">

('examine' \| 'inspect' \| 'x' \| 'look' 'at' \| 'l' 'at') multiDobj  

</div>

`VerbRule(Exits)      `*`// original source text`*  

`grammar `**[`VerbRule(Exits)`](../object/VerbRule(Exits).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3388`](../source/grammar.t.html#3388)]`

<div class="gramrule">

'exits'  

</div>

`VerbRule(ExitsColour)      `*`// original source text`*  

`grammar `**[`VerbRule(ExitsColour)`](../object/VerbRule(ExitsColour).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3407`](../source/grammar.t.html#3407)]`

<div class="gramrule">

('exits'\|'exit') ('color'\|'colour') ('on' -\>on\_\| 'off' -\>on\_ \|  
'blue' -\>colour\_ \| 'red' -\> colour\_ \|  
'green' -\> colour\_ \| 'yellow' -\>  
colour\_)  

</div>

`VerbRule(ExitsMode)      `*`// original source text`*  

`grammar `**[`VerbRule(ExitsMode)`](../object/VerbRule(ExitsMode).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3395`](../source/grammar.t.html#3395)]`

<div class="gramrule">

'exits' ('on'-\>on\_ \| 'all'-\>on\_  
\| 'off'-\>off\_ \| 'none'-\>off\_  
\| ('status' ('line' \| ) \| 'statusline') 'look'-\>on\_  
\| 'look'-\>on\_ ('status' ('line' \| ) \| 'statusline')  
\| 'status'-\>stat\_ ('line' \| ) \| 'statusline'-\>stat\_  
\| 'look'-\>look\_)  

</div>

`VerbRule(Extinguish)      `*`// original source text`*  

`grammar `**[`VerbRule(Extinguish)`](../object/VerbRule(Extinguish).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2849`](../source/grammar.t.html#2849)]`

<div class="gramrule">

('extinguish' \| 'douse' \| 'put' 'out' \| 'blow' 'out') multiDobj  
\| ('blow' \| 'put') multiDobj 'out'  

</div>

`VerbRule(ExtraHints)      `*`// original source text`*  

`grammar `**[`VerbRule(ExtraHints)`](../object/VerbRule(ExtraHints).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3433`](../source/grammar.t.html#3433)]`

<div class="gramrule">

('extra' \| 'extras'\| 'bonus') ('hint' \| 'hints' \|'tips' \|'tip'\|
)  
('on'-\>onOff \| 'off'-\>onOff \| )  

</div>

`VerbRule(Fasten)      `*`// original source text`*  

`grammar `**[`VerbRule(Fasten)`](../object/VerbRule(Fasten).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3216`](../source/grammar.t.html#3216)]`

<div class="gramrule">

('fasten' \| 'buckle' \| 'buckle' 'up') multiDobj  

</div>

`VerbRule(FastenTo)      `*`// original source text`*  

`grammar `**[`VerbRule(FastenTo)`](../object/VerbRule(FastenTo).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3224`](../source/grammar.t.html#3224)]`

<div class="gramrule">

('fasten' \| 'buckle') multiDobj 'to' singleIobj  

</div>

`VerbRule(Feel)      `*`// original source text`*  

`grammar `**[`VerbRule(Feel)`](../object/VerbRule(Feel).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`1611`](../source/grammar.t.html#1611)]`

<div class="gramrule">

('feel' \| 'touch') multiDobj  

</div>

`VerbRule(FiatLux)      `*`// original source text`*  

`grammar `**[`VerbRule(FiatLux)`](../object/VerbRule(FiatLux).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3475`](../source/grammar.t.html#3475)]`

<div class="gramrule">

'fiat' 'lux' \| 'let' 'there' 'be' 'light'  

</div>

`VerbRule(Flip)      `*`// original source text`*  

`grammar `**[`VerbRule(Flip)`](../object/VerbRule(Flip).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2786`](../source/grammar.t.html#2786)]`

<div class="gramrule">

'flip' multiDobj  

</div>

`VerbRule(Follow)      `*`// original source text`*  

`grammar `**[`VerbRule(Follow)`](../object/VerbRule(Follow).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2206`](../source/grammar.t.html#2206)]`

<div class="gramrule">

'follow' singleDobj  

</div>

`VerbRule(Footnote)      `*`// original source text`*  

`grammar `**[`VerbRule(Footnote)`](../object/VerbRule(Footnote).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`footnote.t`](../file/footnote.t.html)[`[`307`](../source/footnote.t.html#307)]`

<div class="gramrule">

('footnote' \| 'note') numericDobj  

</div>

`VerbRule(FootnotesFull)      `*`// original source text`*  

`grammar `**[`VerbRule(FootnotesFull)`](../object/VerbRule(FootnotesFull).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`footnote.t`](../file/footnote.t.html)[`[`315`](../source/footnote.t.html#315)]`

<div class="gramrule">

'footnotes' 'full'  

</div>

`VerbRule(FootnotesMedium)      `*`// original source text`*  

`grammar `**[`VerbRule(FootnotesMedium)`](../object/VerbRule(FootnotesMedium).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`footnote.t`](../file/footnote.t.html)[`[`322`](../source/footnote.t.html#322)]`

<div class="gramrule">

'footnotes' 'medium'  

</div>

`VerbRule(FootnotesOff)      `*`// original source text`*  

`grammar `**[`VerbRule(FootnotesOff)`](../object/VerbRule(FootnotesOff).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`footnote.t`](../file/footnote.t.html)[`[`329`](../source/footnote.t.html#329)]`

<div class="gramrule">

'footnotes' 'off'  

</div>

`VerbRule(FootnotesStatus)      `*`// original source text`*  

`grammar `**[`VerbRule(FootnotesStatus)`](../object/VerbRule(FootnotesStatus).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`footnote.t`](../file/footnote.t.html)[`[`336`](../source/footnote.t.html#336)]`

<div class="gramrule">

'footnotes'  

</div>

`VerbRule(FullScore)      `*`// original source text`*  

`grammar `**[`VerbRule(FullScore)`](../object/VerbRule(FullScore).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2292`](../source/grammar.t.html#2292)]`

<div class="gramrule">

'full' 'score' \| 'fullscore' \| 'full'  

</div>

`VerbRule(GetOff)      `*`// original source text`*  

`grammar `**[`VerbRule(GetOff)`](../object/VerbRule(GetOff).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3165`](../source/grammar.t.html#3165)]`

<div class="gramrule">

'get' ('off' \| 'off' 'of' \| 'down' 'from') singleDobj  

</div>

`VerbRule(GetOut)      `*`// original source text`*  

`grammar `**[`VerbRule(GetOut)`](../object/VerbRule(GetOut).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3174`](../source/grammar.t.html#3174)]`

<div class="gramrule">

'get' 'out'  
\| 'get' 'off'  
\| 'get' 'down'  
\| 'disembark'  
\| 'climb' 'out'  

</div>

`VerbRule(GetOutOf)      `*`// original source text`*  

`grammar `**[`VerbRule(GetOutOf)`](../object/VerbRule(GetOutOf).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3155`](../source/grammar.t.html#3155)]`

<div class="gramrule">

('out' 'of' \| 'get' 'out' 'of' \| 'climb' 'out' 'of' \| 'leave' \|
'exit')  
singleDobj  

</div>

`VerbRule(GiveTo)      `*`// original source text`*  

`grammar `**[`VerbRule(GiveTo)`](../object/VerbRule(GiveTo).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2047`](../source/grammar.t.html#2047)]`

<div class="gramrule">

('give' \| 'offer') multiDobj 'to' singleIobj  

</div>

`VerbRule(GiveToImplicit)      `*`// original source text`*  

`grammar `**[`VerbRule(GiveToImplicit)`](../object/VerbRule(GiveToImplicit).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2068`](../source/grammar.t.html#2068)]`

<div class="gramrule">

('give' \| 'offer') multiDobj  

</div>

`VerbRule(GiveToType2)      `*`// original source text`*  

`grammar `**[`VerbRule(GiveToType2)`](../object/VerbRule(GiveToType2).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2056`](../source/grammar.t.html#2056)]`

<div class="gramrule">

('give' \| 'offer') singleIobj multiDobj  

</div>

`VerbRule(GoAlong)      `*`// original source text`*  

`grammar `**[`VerbRule(GoAlong)`](../object/VerbRule(GoAlong).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2531`](../source/grammar.t.html#2531)]`

<div class="gramrule">

('walk' \| 'go' ) ('along')  
singleDobj  

</div>

`VerbRule(GoBack)      `*`// original source text`*  

`grammar `**[`VerbRule(GoBack)`](../object/VerbRule(GoBack).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2542`](../source/grammar.t.html#2542)]`

<div class="gramrule">

'back' \| 'go' 'back' \| 'return'  

</div>

`VerbRule(GoNear)      `*`// original source text`*  

`grammar `**[`VerbRule(GoNear)`](../object/VerbRule(GoNear).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3466`](../source/grammar.t.html#3466)]`

<div class="gramrule">

('gonear' \|'go' 'near'\| 'gn') singleDobj  

</div>

`VerbRule(Goodbye)      `*`// original source text`*  

`grammar `**[`VerbRule(Goodbye)`](../object/VerbRule(Goodbye).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2015`](../source/grammar.t.html#2015)]`

<div class="gramrule">

('say' \| ()) ('goodbye' \| 'good-bye' \| 'good' 'bye' \| 'bye')  

</div>

`VerbRule(GoSomewhere)      `*`// original source text`*  

`grammar `**[`VerbRule(GoSomewhere)`](../object/VerbRule(GoSomewhere).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`newbie.t`](../file/newbie.t.html)[`[`780`](../source/newbie.t.html#780)]`

<div class="gramrule">

(('go' \| 'walk' \| 'proceed' \| 'run') ( \| ('to' 'the') )  
('left' \| 'right' \| 'on' \| 'onwards' \| 'onward' \| 'forward' \|
'forwards' \|  
'around' \| 'somewhere' \| (('straight'\| ) 'ahead'))) \| ('turn'  
('left'\|'right'))  

</div>

`VerbRule(GoThrough)      `*`// original source text`*  

`grammar `**[`VerbRule(GoThrough)`](../object/VerbRule(GoThrough).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2521`](../source/grammar.t.html#2521)]`

<div class="gramrule">

('walk' \| 'go' ) ('through' \| 'thru')  
singleDobj  

</div>

`VerbRule(GoTo)      `*`// original source text`*  

`grammar `**[`VerbRule(GoTo)`](../object/VerbRule(GoTo).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2459`](../source/grammar.t.html#2459)]`

<div class="gramrule">

('go' 'to' \| 'walk' 'to')  
singleDobj  

</div>

`VerbRule(Hello)      `*`// original source text`*  

`grammar `**[`VerbRule(Hello)`](../object/VerbRule(Hello).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2006`](../source/grammar.t.html#2006)]`

<div class="gramrule">

('say' \| ) ('hello' \| 'hallo' \| 'hi')  

</div>

`VerbRule(Help)      `*`// original source text`*  

`grammar `**[`VerbRule(Help)`](../object/VerbRule(Help).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`newbie.t`](../file/newbie.t.html)[`[`582`](../source/newbie.t.html#582)]`

<div class="gramrule">

('help' \| 'assist' \| 'assistance' ) \|  
'how' ('do' \| 'can' \| 'does' \| 'will' \| 'shall' \| 'could' \|
'should' \| 'may'  
\| 'must')  
('i' \| 'me' \| 'he' \| 'she' \| 'it' \| 'we' \| 'you' \| 'they' \|
'person' \| 'one'  
\| 'someone' \| 'anyone' \| 'somebody' \| 'anybody') literalDobj  

</div>

`VerbRule(Hints)      `*`// original source text`*  

`grammar `**[`VerbRule(Hints)`](../object/VerbRule(Hints).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3425`](../source/grammar.t.html#3425)]`

<div class="gramrule">

'hint' \| 'hints'  

</div>

`VerbRule(HintsOff)      `*`// original source text`*  

`grammar `**[`VerbRule(HintsOff)`](../object/VerbRule(HintsOff).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3418`](../source/grammar.t.html#3418)]`

<div class="gramrule">

'hints' 'off'  

</div>

`VerbRule(In)      `*`// original source text`*  

`grammar `**[`VerbRule(In)`](../object/VerbRule(In).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2507`](../source/grammar.t.html#2507)]`

<div class="gramrule">

'enter'  

</div>

`VerbRule(instructions)      `*`// original source text`*  

`grammar `**[`VerbRule(instructions)`](../object/VerbRule(instructions).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`instruct.t`](../file/instruct.t.html)[`[`998`](../source/instruct.t.html#998)]`

<div class="gramrule">

'instructions'  

</div>

`VerbRule(Intro)      `*`// original source text`*  

`grammar `**[`VerbRule(Intro)`](../object/VerbRule(Intro).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`newbie.t`](../file/newbie.t.html)[`[`631`](../source/newbie.t.html#631)]`

<div class="gramrule">

('show'\|'view'\|) ('brief'\|) ('intro' \| 'introduction')  

</div>

`VerbRule(Inventory)      `*`// original source text`*  

`grammar `**[`VerbRule(Inventory)`](../object/VerbRule(Inventory).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2235`](../source/grammar.t.html#2235)]`

<div class="gramrule">

'i' \| 'inv' \| 'inventory' \| 'take' 'inventory'  

</div>

`VerbRule(InventoryTall)      `*`// original source text`*  

`grammar `**[`VerbRule(InventoryTall)`](../object/VerbRule(InventoryTall).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2242`](../source/grammar.t.html#2242)]`

<div class="gramrule">

('i' \| 'inv' \| 'inventory') 'tall'  

</div>

`VerbRule(InventoryWide)      `*`// original source text`*  

`grammar `**[`VerbRule(InventoryWide)`](../object/VerbRule(InventoryWide).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2249`](../source/grammar.t.html#2249)]`

<div class="gramrule">

('i' \| 'inv' \| 'inventory') 'wide'  

</div>

`VerbRule(Jump)      `*`// original source text`*  

`grammar `**[`VerbRule(Jump)`](../object/VerbRule(Jump).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2568`](../source/grammar.t.html#2568)]`

<div class="gramrule">

'jump'  

</div>

`VerbRule(JumpOff)      `*`// original source text`*  

`grammar `**[`VerbRule(JumpOff)`](../object/VerbRule(JumpOff).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2582`](../source/grammar.t.html#2582)]`

<div class="gramrule">

'jump' 'off' singleDobj  

</div>

`VerbRule(JumpOffIntransitive)      `*`// original source text`*  

`grammar `**[`VerbRule(JumpOffIntransitive)`](../object/VerbRule(JumpOffIntransitive).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2575`](../source/grammar.t.html#2575)]`

<div class="gramrule">

'jump' 'off'  

</div>

`VerbRule(JumpOver)      `*`// original source text`*  

`grammar `**[`VerbRule(JumpOver)`](../object/VerbRule(JumpOver).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2591`](../source/grammar.t.html#2591)]`

<div class="gramrule">

('jump' \| 'jump' 'over') singleDobj  

</div>

`VerbRule(KeepGoing)      `*`// original source text`*  

`grammar `**[`VerbRule(KeepGoing)`](../object/VerbRule(KeepGoing).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`newbie.t`](../file/newbie.t.html)[`[`495`](../source/newbie.t.html#495)]`

<div class="gramrule">

('keep' \| 'continue') ('going'\|'walking'\|'running'\|'heading')
singleDir  
\| 'head' ('back' \| ) singleDir  

</div>

`VerbRule(Kiss)      `*`// original source text`*  

`grammar `**[`VerbRule(Kiss)`](../object/VerbRule(Kiss).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`1757`](../source/grammar.t.html#1757)]`

<div class="gramrule">

'kiss' singleDobj  

</div>

`VerbRule(Lie)      `*`// original source text`*  

`grammar `**[`VerbRule(Lie)`](../object/VerbRule(Lie).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3124`](../source/grammar.t.html#3124)]`

<div class="gramrule">

'lie' 'down'

</div>

`VerbRule(LieIn)      `*`// original source text`*  

`grammar `**[`VerbRule(LieIn)`](../object/VerbRule(LieIn).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3113`](../source/grammar.t.html#3113)]`

<div class="gramrule">

'lie' ('in' \| 'down' 'in')  
singleDobj  

</div>

`VerbRule(LieOn)      `*`// original source text`*  

`grammar `**[`VerbRule(LieOn)`](../object/VerbRule(LieOn).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3103`](../source/grammar.t.html#3103)]`

<div class="gramrule">

'lie' ('on' \| 'down' 'on' )  
singleDobj  

</div>

`VerbRule(Light)      `*`// original source text`*  

`grammar `**[`VerbRule(Light)`](../object/VerbRule(Light).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2814`](../source/grammar.t.html#2814)]`

<div class="gramrule">

'light' multiDobj  

</div>

`VerbRule(Listen)      `*`// original source text`*  

`grammar `**[`VerbRule(Listen)`](../object/VerbRule(Listen).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`1650`](../source/grammar.t.html#1650)]`

<div class="gramrule">

'listen' \| 'hear'  

</div>

`VerbRule(ListenTo)      `*`// original source text`*  

`grammar `**[`VerbRule(ListenTo)`](../object/VerbRule(ListenTo).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`1642`](../source/grammar.t.html#1642)]`

<div class="gramrule">

('hear' \| 'listen' 'to' ) multiDobj  

</div>

`VerbRule(ListRelations)      `*`// original source text`*  

`grammar `**[`VerbRule(ListRelations)`](../object/VerbRule(ListRelations).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`relations.t`](../file/relations.t.html)[`[`830`](../source/relations.t.html#830)]`

<div class="gramrule">

('list'\|) 'relations'  

</div>

`VerbRule(ListTests)      `*`// original source text`*  

`grammar `**[`VerbRule(ListTests)`](../object/VerbRule(ListTests).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`debug.t`](../file/debug.t.html)[`[`433`](../source/debug.t.html#433)]`

<div class="gramrule">

('list' \| 'l') 'tests' (\| 'fully' -\> fully)  

</div>

`VerbRule(Lock)      `*`// original source text`*  

`grammar `**[`VerbRule(Lock)`](../object/VerbRule(Lock).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3041`](../source/grammar.t.html#3041)]`

<div class="gramrule">

'lock' multiDobj  

</div>

`VerbRule(LockWith)      `*`// original source text`*  

`grammar `**[`VerbRule(LockWith)`](../object/VerbRule(LockWith).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3057`](../source/grammar.t.html#3057)]`

<div class="gramrule">

'lock' singleDobj 'with' singleIobj  

</div>

`VerbRule(Look)      `*`// original source text`*  

`grammar `**[`VerbRule(Look)`](../object/VerbRule(Look).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2264`](../source/grammar.t.html#2264)]`

<div class="gramrule">

'look' \| 'look' 'around' \| 'l' \| 'l' 'around'  

</div>

`VerbRule(LookBehind)      `*`// original source text`*  

`grammar `**[`VerbRule(LookBehind)`](../object/VerbRule(LookBehind).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`1603`](../source/grammar.t.html#1603)]`

<div class="gramrule">

('search' \| 'look' \| 'l') 'behind' multiDobj  

</div>

`VerbRule(LookHere)      `*`// original source text`*  

`grammar `**[`VerbRule(LookHere)`](../object/VerbRule(LookHere).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`newbie.t`](../file/newbie.t.html)[`[`427`](../source/newbie.t.html#427)]`

<div class="gramrule">

('l' \| 'look' \| 'search') ('here'-\>placeName\|'there'-\>placeName)  

</div>

`VerbRule(LookIn)      `*`// original source text`*  

`grammar `**[`VerbRule(LookIn)`](../object/VerbRule(LookIn).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`1570`](../source/grammar.t.html#1570)]`

<div class="gramrule">

('look' \| 'l') ('in' \| 'inside') multiDobj  

</div>

`VerbRule(LookThrough)      `*`// original source text`*  

`grammar `**[`VerbRule(LookThrough)`](../object/VerbRule(LookThrough).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`1587`](../source/grammar.t.html#1587)]`

<div class="gramrule">

('look' \| 'l' \| 'peer') ('through' \| 'thru' \| 'out') multiDobj  

</div>

`VerbRule(LookUnder)      `*`// original source text`*  

`grammar `**[`VerbRule(LookUnder)`](../object/VerbRule(LookUnder).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`1595`](../source/grammar.t.html#1595)]`

<div class="gramrule">

('search' \| 'look' \| 'l') 'under' multiDobj  

</div>

`VerbRule(LookUp)      `*`// original source text`*  

`grammar `**[`VerbRule(LookUp)`](../object/VerbRule(LookUp).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2753`](../source/grammar.t.html#2753)]`

<div class="gramrule">

(('look' \| 'l') ('up' \| 'for') \| 'find' \| 'search' 'for' \| 'read'
'about')  
topicIobj ('in' \| 'on') singleDobj  
\| ('look' \| 'l') topicIobj 'up' ('in' \| 'on') singleDobj  

</div>

`VerbRule(LookX)      `*`// original source text`*  

`grammar `**[`VerbRule(LookX)`](../object/VerbRule(LookX).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`1547`](../source/grammar.t.html#1547)]`

<div class="gramrule">

('look'\|'l') multiDobj  

</div>

`VerbRule(Move)      `*`// original source text`*  

`grammar `**[`VerbRule(Move)`](../object/VerbRule(Move).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2616`](../source/grammar.t.html#2616)]`

<div class="gramrule">

'move' multiDobj  

</div>

`VerbRule(MoveTo)      `*`// original source text`*  

`grammar `**[`VerbRule(MoveTo)`](../object/VerbRule(MoveTo).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2624`](../source/grammar.t.html#2624)]`

<div class="gramrule">

('push' \| 'move') multiDobj ('to' \| 'under') singleIobj  

</div>

`VerbRule(MoveWith)      `*`// original source text`*  

`grammar `**[`VerbRule(MoveWith)`](../object/VerbRule(MoveWith).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2633`](../source/grammar.t.html#2633)]`

<div class="gramrule">

'move' singleDobj 'with' singleIobj  

</div>

`VerbRule(No)      `*`// original source text`*  

`grammar `**[`VerbRule(No)`](../object/VerbRule(No).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2031`](../source/grammar.t.html#2031)]`

<div class="gramrule">

'no' \| 'negative' \| 'say' 'no'  

</div>

`VerbRule(Notify)      `*`// original source text`*  

`grammar `**[`VerbRule(Notify)`](../object/VerbRule(Notify).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2299`](../source/grammar.t.html#2299)]`

<div class="gramrule">

'notify'  

</div>

`VerbRule(NotifyOff)      `*`// original source text`*  

`grammar `**[`VerbRule(NotifyOff)`](../object/VerbRule(NotifyOff).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2313`](../source/grammar.t.html#2313)]`

<div class="gramrule">

'notify' 'off'  

</div>

`VerbRule(NotifyOn)      `*`// original source text`*  

`grammar `**[`VerbRule(NotifyOn)`](../object/VerbRule(NotifyOn).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2306`](../source/grammar.t.html#2306)]`

<div class="gramrule">

'notify' 'on'  

</div>

`VerbRule(Open)      `*`// original source text`*  

`grammar `**[`VerbRule(Open)`](../object/VerbRule(Open).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3025`](../source/grammar.t.html#3025)]`

<div class="gramrule">

'open' multiDobj  

</div>

`VerbRule(Out)      `*`// original source text`*  

`grammar `**[`VerbRule(Out)`](../object/VerbRule(Out).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2514`](../source/grammar.t.html#2514)]`

<div class="gramrule">

'exit' \| 'leave'  

</div>

`VerbRule(PlugIn)      `*`// original source text`*  

`grammar `**[`VerbRule(PlugIn)`](../object/VerbRule(PlugIn).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3274`](../source/grammar.t.html#3274)]`

<div class="gramrule">

'plug' multiDobj 'in'  
\| 'plug' 'in' multiDobj  

</div>

`VerbRule(PlugInto)      `*`// original source text`*  

`grammar `**[`VerbRule(PlugInto)`](../object/VerbRule(PlugInto).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3252`](../source/grammar.t.html#3252)]`

<div class="gramrule">

'plug' multiDobj ('in' \| 'into' \| 'in' 'to') singleIobj  

</div>

`VerbRule(PlugIntoWhat)      `*`// original source text`*  

`grammar `**[`VerbRule(PlugIntoWhat)`](../object/VerbRule(PlugIntoWhat).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3262`](../source/grammar.t.html#3262)]`

<div class="gramrule">

\[badness 500\] 'plug' multiDobj  

</div>

`VerbRule(Pour)      `*`// original source text`*  

`grammar `**[`VerbRule(Pour)`](../object/VerbRule(Pour).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2900`](../source/grammar.t.html#2900)]`

<div class="gramrule">

'pour' multiDobj  

</div>

`VerbRule(PourInto)      `*`// original source text`*  

`grammar `**[`VerbRule(PourInto)`](../object/VerbRule(PourInto).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2908`](../source/grammar.t.html#2908)]`

<div class="gramrule">

'pour' multiDobj ('in' \| 'into' \| 'in' 'to') singleIobj  

</div>

`VerbRule(PourOnto)      `*`// original source text`*  

`grammar `**[`VerbRule(PourOnto)`](../object/VerbRule(PourOnto).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2917`](../source/grammar.t.html#2917)]`

<div class="gramrule">

'pour' multiDobj ('on' \| 'onto' \| 'on' 'to') singleIobj  

</div>

`VerbRule(Pull)      `*`// original source text`*  

`grammar `**[`VerbRule(Pull)`](../object/VerbRule(Pull).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2608`](../source/grammar.t.html#2608)]`

<div class="gramrule">

'pull' multiDobj  

</div>

`VerbRule(Purloin)      `*`// original source text`*  

`grammar `**[`VerbRule(Purloin)`](../object/VerbRule(Purloin).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3458`](../source/grammar.t.html#3458)]`

<div class="gramrule">

('purloin' \| 'pn') singleDobj  

</div>

`VerbRule(Push)      `*`// original source text`*  

`grammar `**[`VerbRule(Push)`](../object/VerbRule(Push).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2600`](../source/grammar.t.html#2600)]`

<div class="gramrule">

('push' \| 'press') multiDobj  

</div>

`VerbRule(PushTravelClimbDown)      `*`// original source text`*  

`grammar `**[`VerbRule(PushTravelClimbDown)`](../object/VerbRule(PushTravelClimbDown).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3379`](../source/grammar.t.html#3379)]`

<div class="gramrule">

('push' \| 'pull' \| 'drag' \| 'move') singleDobj  
'down' singleIobj  

</div>

`VerbRule(PushTravelClimbUp)      `*`// original source text`*  

`grammar `**[`VerbRule(PushTravelClimbUp)`](../object/VerbRule(PushTravelClimbUp).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3370`](../source/grammar.t.html#3370)]`

<div class="gramrule">

('push' \| 'pull' \| 'drag' \| 'move') singleDobj  
'up' singleIobj  

</div>

`VerbRule(PushTravelDir)      `*`// original source text`*  

`grammar `**[`VerbRule(PushTravelDir)`](../object/VerbRule(PushTravelDir).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3336`](../source/grammar.t.html#3336)]`

<div class="gramrule">

('push' \| 'pull' \| 'drag' \| 'move') singleDobj singleDir  

</div>

`VerbRule(PushTravelEnter)      `*`// original source text`*  

`grammar `**[`VerbRule(PushTravelEnter)`](../object/VerbRule(PushTravelEnter).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3351`](../source/grammar.t.html#3351)]`

<div class="gramrule">

('push' \| 'pull' \| 'drag' \| 'move') singleDobj  
('in' \| 'into' \| 'in' 'to') singleIobj  

</div>

`VerbRule(PushTravelGetOutOf)      `*`// original source text`*  

`grammar `**[`VerbRule(PushTravelGetOutOf)`](../object/VerbRule(PushTravelGetOutOf).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3360`](../source/grammar.t.html#3360)]`

<div class="gramrule">

('push' \| 'pull' \| 'drag' \| 'move') singleDobj  
'out' ('of' \| ) singleIobj  

</div>

`VerbRule(PushTravelThrough)      `*`// original source text`*  

`grammar `**[`VerbRule(PushTravelThrough)`](../object/VerbRule(PushTravelThrough).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3342`](../source/grammar.t.html#3342)]`

<div class="gramrule">

('push' \| 'pull' \| 'drag' \| 'move') singleDobj  
('through' \| 'thru') singleIobj  

</div>

`VerbRule(PutBehind)      `*`// original source text`*  

`grammar `**[`VerbRule(PutBehind)`](../object/VerbRule(PutBehind).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`1687`](../source/grammar.t.html#1687)]`

<div class="gramrule">

('put' \| 'place' \| 'set') multiDobj 'behind' singleIobj  

</div>

`VerbRule(PutIn)      `*`// original source text`*  

`grammar `**[`VerbRule(PutIn)`](../object/VerbRule(PutIn).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`1657`](../source/grammar.t.html#1657)]`

<div class="gramrule">

('put' \| 'place' \| 'set' \| 'insert') multiDobj  
('in' \| 'into' \| 'in' 'to' \| 'inside' \| 'inside' 'of') singleIobj  

</div>

`VerbRule(PutOn)      `*`// original source text`*  

`grammar `**[`VerbRule(PutOn)`](../object/VerbRule(PutOn).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`1667`](../source/grammar.t.html#1667)]`

<div class="gramrule">

('put' \| 'place' \| 'drop' \| 'set') multiDobj  
('on' \| 'onto' \| 'on' 'to' \| 'upon') singleIobj  
\| 'put' multiDobj 'down' 'on' singleIobj  

</div>

`VerbRule(PutUnder)      `*`// original source text`*  

`grammar `**[`VerbRule(PutUnder)`](../object/VerbRule(PutUnder).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`1678`](../source/grammar.t.html#1678)]`

<div class="gramrule">

('put' \| 'place' \| 'set') multiDobj 'under' singleIobj  

</div>

`VerbRule(PutWhere)      `*`// original source text`*  

`grammar `**[`VerbRule(PutWhere)`](../object/VerbRule(PutWhere).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`1696`](../source/grammar.t.html#1696)]`

<div class="gramrule">

\[badness 500\] ('put' \| 'place') multiDobj  

</div>

`VerbRule(Query)      `*`// original source text`*  

`grammar `**[`VerbRule(Query)`](../object/VerbRule(Query).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`1765`](../source/grammar.t.html#1765)]`

<div class="gramrule">

('a' \| 'ask') ('what' -\>qtype \| 'who' -\>qtype \| 'where' -\> qtype
\| 'why'  
-\>qtype \| 'when' -\> qtype\| 'how' -\> qtype \| 'whether' -\>  
qtype \| 'if' -\> qtype) topicDobj  

</div>

`VerbRule(Query2)      `*`// original source text`*  

`grammar `**[`VerbRule(Query2)`](../object/VerbRule(Query2).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`1776`](../source/grammar.t.html#1776)]`

<div class="gramrule">

('what' -\>qtype \| 'who' -\>qtype \| 'where' -\> qtype \| 'why'  
-\>qtype \| 'when' -\> qtype\| 'how' -\> qtype) topicDobj  

</div>

`VerbRule(QueryAbout)      `*`// original source text`*  

`grammar `**[`VerbRule(QueryAbout)`](../object/VerbRule(QueryAbout).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`1786`](../source/grammar.t.html#1786)]`

<div class="gramrule">

('a' \| 'ask') singleDobj ('what' -\>qtype \| 'who' -\>qtype \|  
'where' -\> qtype \| 'why'  
-\>qtype \| 'when' -\> qtype\| 'how' -\> qtype \| 'whether' -\>  
qtype \| 'if' -\> qtype) topicIobj  

</div>

`VerbRule(QueryVague)      `*`// original source text`*  

`grammar `**[`VerbRule(QueryVague)`](../object/VerbRule(QueryVague).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`1798`](../source/grammar.t.html#1798)]`

<div class="gramrule">

('a' \| 'ask'\|) ('what' -\>qType \| 'who' -\>qtype \| 'where' -\> qtype
\| 'why'  
-\>qType \| 'when' -\> qtype\| 'how' -\> qtype \| 'whether' -\>  
qtype \| 'if' -\> qtype)  

</div>

`VerbRule(Quit)      `*`// original source text`*  

`grammar `**[`VerbRule(Quit)`](../object/VerbRule(Quit).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2271`](../source/grammar.t.html#2271)]`

<div class="gramrule">

'quit' \| 'q'  

</div>

`VerbRule(Read)      `*`// original source text`*  

`grammar `**[`VerbRule(Read)`](../object/VerbRule(Read).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`1562`](../source/grammar.t.html#1562)]`

<div class="gramrule">

'read' multiDobj  

</div>

`VerbRule(Record)      `*`// original source text`*  

`grammar `**[`VerbRule(Record)`](../object/VerbRule(Record).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2405`](../source/grammar.t.html#2405)]`

<div class="gramrule">

'record' \| 'record' 'on'  

</div>

`VerbRule(RecordEvents)      `*`// original source text`*  

`grammar `**[`VerbRule(RecordEvents)`](../object/VerbRule(RecordEvents).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2419`](../source/grammar.t.html#2419)]`

<div class="gramrule">

'record' 'events' \| 'record' 'events' 'on'  

</div>

`VerbRule(RecordEventsString)      `*`// original source text`*  

`grammar `**[`VerbRule(RecordEventsString)`](../object/VerbRule(RecordEventsString).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2426`](../source/grammar.t.html#2426)]`

<div class="gramrule">

'record' 'events' quotedStringPhrase-\>fname\_  

</div>

`VerbRule(RecordOff)      `*`// original source text`*  

`grammar `**[`VerbRule(RecordOff)`](../object/VerbRule(RecordOff).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2433`](../source/grammar.t.html#2433)]`

<div class="gramrule">

'record' 'off'  

</div>

`VerbRule(RecordString)      `*`// original source text`*  

`grammar `**[`VerbRule(RecordString)`](../object/VerbRule(RecordString).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2412`](../source/grammar.t.html#2412)]`

<div class="gramrule">

'record' quotedStringPhrase-\>fname\_  

</div>

`VerbRule(RelationDetails)      `*`// original source text`*  

`grammar `**[`VerbRule(RelationDetails)`](../object/VerbRule(RelationDetails).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`relations.t`](../file/relations.t.html)[`[`935`](../source/relations.t.html#935)]`

<div class="gramrule">

('relation' \| 'relations' \| 'rel') literalDobj  

</div>

`VerbRule(Remove)      `*`// original source text`*  

`grammar `**[`VerbRule(Remove)`](../object/VerbRule(Remove).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`1522`](../source/grammar.t.html#1522)]`

<div class="gramrule">

'remove' multiDobj  

</div>

`VerbRule(ReplayQuiet)      `*`// original source text`*  

`grammar `**[`VerbRule(ReplayQuiet)`](../object/VerbRule(ReplayQuiet).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2451`](../source/grammar.t.html#2451)]`

<div class="gramrule">

'rq' (quotedStringPhrase-\>fname\_ \| )  

</div>

`VerbRule(ReplayString)      `*`// original source text`*  

`grammar `**[`VerbRule(ReplayString)`](../object/VerbRule(ReplayString).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2440`](../source/grammar.t.html#2440)]`

<div class="gramrule">

'replay' ('quiet'-\>quiet\_ \| 'nonstop'-\>nonstop\_ \| )  
(quotedStringPhrase-\>fname\_ \| )  

</div>

`VerbRule(Restart)      `*`// original source text`*  

`grammar `**[`VerbRule(Restart)`](../object/VerbRule(Restart).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2349`](../source/grammar.t.html#2349)]`

<div class="gramrule">

'restart'  

</div>

`VerbRule(Restore)      `*`// original source text`*  

`grammar `**[`VerbRule(Restore)`](../object/VerbRule(Restore).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2334`](../source/grammar.t.html#2334)]`

<div class="gramrule">

'restore'  

</div>

`VerbRule(RestoreString)      `*`// original source text`*  

`grammar `**[`VerbRule(RestoreString)`](../object/VerbRule(RestoreString).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2341`](../source/grammar.t.html#2341)]`

<div class="gramrule">

'restore' quotedStringPhrase-\>fname\_  

</div>

`VerbRule(Sample)      `*`// original source text`*  

`grammar `**[`VerbRule(Sample)`](../object/VerbRule(Sample).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`newbie.t`](../file/newbie.t.html)[`[`643`](../source/newbie.t.html#643)]`

<div class="gramrule">

('show'\|'view'\|) 'sample' ('transcript' \| )  

</div>

`VerbRule(Save)      `*`// original source text`*  

`grammar `**[`VerbRule(Save)`](../object/VerbRule(Save).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2320`](../source/grammar.t.html#2320)]`

<div class="gramrule">

'save'  

</div>

`VerbRule(SaveString)      `*`// original source text`*  

`grammar `**[`VerbRule(SaveString)`](../object/VerbRule(SaveString).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2327`](../source/grammar.t.html#2327)]`

<div class="gramrule">

'save' quotedStringPhrase-\>fname\_  

</div>

`VerbRule(Say)      `*`// original source text`*  

`grammar `**[`VerbRule(Say)`](../object/VerbRule(Say).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2110`](../source/grammar.t.html#2110)]`

<div class="gramrule">

'say' ('that' \|) topicDobj  

</div>

`VerbRule(SayTo)      `*`// original source text`*  

`grammar `**[`VerbRule(SayTo)`](../object/VerbRule(SayTo).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2118`](../source/grammar.t.html#2118)]`

<div class="gramrule">

'say' ('that' \|) topicIobj 'to' singleDobj  

</div>

`VerbRule(Score)      `*`// original source text`*  

`grammar `**[`VerbRule(Score)`](../object/VerbRule(Score).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2285`](../source/grammar.t.html#2285)]`

<div class="gramrule">

'score' \| 'status'  

</div>

`VerbRule(Screw)      `*`// original source text`*  

`grammar `**[`VerbRule(Screw)`](../object/VerbRule(Screw).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3300`](../source/grammar.t.html#3300)]`

<div class="gramrule">

'screw' multiDobj  

</div>

`VerbRule(ScrewWith)      `*`// original source text`*  

`grammar `**[`VerbRule(ScrewWith)`](../object/VerbRule(ScrewWith).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3308`](../source/grammar.t.html#3308)]`

<div class="gramrule">

'screw' multiDobj 'with' singleIobj  

</div>

`VerbRule(ScriptOff)      `*`// original source text`*  

`grammar `**[`VerbRule(ScriptOff)`](../object/VerbRule(ScriptOff).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2398`](../source/grammar.t.html#2398)]`

<div class="gramrule">

'script' 'off' \| 'unscript'  

</div>

`VerbRule(ScriptOn)      `*`// original source text`*  

`grammar `**[`VerbRule(ScriptOn)`](../object/VerbRule(ScriptOn).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2384`](../source/grammar.t.html#2384)]`

<div class="gramrule">

'script' \| 'script' 'on'  

</div>

`VerbRule(ScriptString)      `*`// original source text`*  

`grammar `**[`VerbRule(ScriptString)`](../object/VerbRule(ScriptString).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2391`](../source/grammar.t.html#2391)]`

<div class="gramrule">

'script' quotedStringPhrase-\>fname\_  

</div>

`VerbRule(Search)      `*`// original source text`*  

`grammar `**[`VerbRule(Search)`](../object/VerbRule(Search).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`1579`](../source/grammar.t.html#1579)]`

<div class="gramrule">

'search' multiDobj  

</div>

`VerbRule(Seek)      `*`// original source text`*  

`grammar `**[`VerbRule(Seek)`](../object/VerbRule(Seek).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`newbie.t`](../file/newbie.t.html)[`[`1056`](../source/newbie.t.html#1056)]`

<div class="gramrule">

('seek' \| ('hunt' 'for')) topicDobj  

</div>

`VerbRule(Set)      `*`// original source text`*  

`grammar `**[`VerbRule(Set)`](../object/VerbRule(Set).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2671`](../source/grammar.t.html#2671)]`

<div class="gramrule">

'set' multiDobj  

</div>

`VerbRule(SetTo)      `*`// original source text`*  

`grammar `**[`VerbRule(SetTo)`](../object/VerbRule(SetTo).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2679`](../source/grammar.t.html#2679)]`

<div class="gramrule">

'set' singleDobj 'to' literalIobj  

</div>

`VerbRule(ShowTo)      `*`// original source text`*  

`grammar `**[`VerbRule(ShowTo)`](../object/VerbRule(ShowTo).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2078`](../source/grammar.t.html#2078)]`

<div class="gramrule">

'show' multiDobj 'to' singleIobj  

</div>

`VerbRule(ShowToImplicit)      `*`// original source text`*  

`grammar `**[`VerbRule(ShowToImplicit)`](../object/VerbRule(ShowToImplicit).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2099`](../source/grammar.t.html#2099)]`

<div class="gramrule">

'show' multiDobj  

</div>

`VerbRule(ShowToType2)      `*`// original source text`*  

`grammar `**[`VerbRule(ShowToType2)`](../object/VerbRule(ShowToType2).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2087`](../source/grammar.t.html#2087)]`

<div class="gramrule">

'show' singleIobj multiDobj  

</div>

`VerbRule(Sit)      `*`// original source text`*  

`grammar `**[`VerbRule(Sit)`](../object/VerbRule(Sit).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3097`](../source/grammar.t.html#3097)]`

<div class="gramrule">

'sit' ( \| 'down')

</div>

`VerbRule(SitIn)      `*`// original source text`*  

`grammar `**[`VerbRule(SitIn)`](../object/VerbRule(SitIn).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3087`](../source/grammar.t.html#3087)]`

<div class="gramrule">

'sit' ('in' \| 'down' 'in')  
singleDobj  

</div>

`VerbRule(SitOn)      `*`// original source text`*  

`grammar `**[`VerbRule(SitOn)`](../object/VerbRule(SitOn).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3077`](../source/grammar.t.html#3077)]`

<div class="gramrule">

'sit' ('on' \| 'down' 'on' )  
singleDobj  

</div>

`VerbRule(Sleep)      `*`// original source text`*  

`grammar `**[`VerbRule(Sleep)`](../object/VerbRule(Sleep).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3209`](../source/grammar.t.html#3209)]`

<div class="gramrule">

'sleep'  

</div>

`VerbRule(Smell)      `*`// original source text`*  

`grammar `**[`VerbRule(Smell)`](../object/VerbRule(Smell).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`1635`](../source/grammar.t.html#1635)]`

<div class="gramrule">

'smell' \| 'sniff'  

</div>

`VerbRule(SmellSomething)      `*`// original source text`*  

`grammar `**[`VerbRule(SmellSomething)`](../object/VerbRule(SmellSomething).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`1627`](../source/grammar.t.html#1627)]`

<div class="gramrule">

('smell' \| 'sniff') multiDobj  

</div>

`VerbRule(Stand)      `*`// original source text`*  

`grammar `**[`VerbRule(Stand)`](../object/VerbRule(Stand).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3148`](../source/grammar.t.html#3148)]`

<div class="gramrule">

'stand' \| 'stand' 'up' \| 'get' 'up'  

</div>

`VerbRule(StandIn)      `*`// original source text`*  

`grammar `**[`VerbRule(StandIn)`](../object/VerbRule(StandIn).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3139`](../source/grammar.t.html#3139)]`

<div class="gramrule">

'stand' ('in' \| 'into' \| 'in' 'to') singleDobj  

</div>

`VerbRule(StandOn)      `*`// original source text`*  

`grammar `**[`VerbRule(StandOn)`](../object/VerbRule(StandOn).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3130`](../source/grammar.t.html#3130)]`

<div class="gramrule">

'stand' ('on' \| 'onto' \| 'on' 'to' ) singleDobj  

</div>

`VerbRule(Strike)      `*`// original source text`*  

`grammar `**[`VerbRule(Strike)`](../object/VerbRule(Strike).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2822`](../source/grammar.t.html#2822)]`

<div class="gramrule">

'strike' multiDobj  

</div>

`VerbRule(Switch)      `*`// original source text`*  

`grammar `**[`VerbRule(Switch)`](../object/VerbRule(Switch).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2778`](../source/grammar.t.html#2778)]`

<div class="gramrule">

'switch' multiDobj  

</div>

`VerbRule(SwitchOff)      `*`// original source text`*  

`grammar `**[`VerbRule(SwitchOff)`](../object/VerbRule(SwitchOff).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2804`](../source/grammar.t.html#2804)]`

<div class="gramrule">

('deactivate' \| ('turn' \| 'switch') 'off') multiDobj  
\| ('turn' \| 'switch') multiDobj 'off'  

</div>

`VerbRule(SwitchOn)      `*`// original source text`*  

`grammar `**[`VerbRule(SwitchOn)`](../object/VerbRule(SwitchOn).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2794`](../source/grammar.t.html#2794)]`

<div class="gramrule">

('activate' \| ('turn' \| 'switch') 'on') multiDobj  
\| ('turn' \| 'switch') multiDobj 'on'  

</div>

`VerbRule(Take)      `*`// original source text`*  

`grammar `**[`VerbRule(Take)`](../object/VerbRule(Take).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`1503`](../source/grammar.t.html#1503)]`

<div class="gramrule">

('take' \| 'pick' 'up' \| 'get') multiDobj  
\| 'pick' multiDobj 'up'  

</div>

`VerbRule(TakeFrom)      `*`// original source text`*  

`grammar `**[`VerbRule(TakeFrom)`](../object/VerbRule(TakeFrom).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`1512`](../source/grammar.t.html#1512)]`

<div class="gramrule">

('take' \| 'get') multiDobj  
('from' \| 'out' 'of' \| 'off' \| 'off' 'of') singleIobj  
\| 'remove' multiDobj 'from' singleIobj  

</div>

`VerbRule(TalkAbout)      `*`// original source text`*  

`grammar `**[`VerbRule(TalkAbout)`](../object/VerbRule(TalkAbout).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`1954`](../source/grammar.t.html#1954)]`

<div class="gramrule">

'talk' 'to' singleDobj 'about' topicIobj  

</div>

`VerbRule(TalkAboutImplicit)      `*`// original source text`*  

`grammar `**[`VerbRule(TalkAboutImplicit)`](../object/VerbRule(TalkAboutImplicit).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`1964`](../source/grammar.t.html#1964)]`

<div class="gramrule">

'talk' 'about' topicIobj  

</div>

`VerbRule(TalkTo)      `*`// original source text`*  

`grammar `**[`VerbRule(TalkTo)`](../object/VerbRule(TalkTo).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`1990`](../source/grammar.t.html#1990)]`

<div class="gramrule">

('greet' \| 'say' 'hello' 'to' \| 'talk' 'to') singleDobj  

</div>

`VerbRule(Taste)      `*`// original source text`*  

`grammar `**[`VerbRule(Taste)`](../object/VerbRule(Taste).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`1619`](../source/grammar.t.html#1619)]`

<div class="gramrule">

'taste' multiDobj  

</div>

`VerbRule(TellAbout)      `*`// original source text`*  

`grammar `**[`VerbRule(TellAbout)`](../object/VerbRule(TellAbout).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`1912`](../source/grammar.t.html#1912)]`

<div class="gramrule">

('tell' \| 't') singleDobj 'about' topicIobj  

</div>

`VerbRule(TellAboutImplicit)      `*`// original source text`*  

`grammar `**[`VerbRule(TellAboutImplicit)`](../object/VerbRule(TellAboutImplicit).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`1922`](../source/grammar.t.html#1922)]`

<div class="gramrule">

('t' \| 'tell' 'about') topicIobj  

</div>

`VerbRule(TellAboutWhat)      `*`// original source text`*  

`grammar `**[`VerbRule(TellAboutWhat)`](../object/VerbRule(TellAboutWhat).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`1931`](../source/grammar.t.html#1931)]`

<div class="gramrule">

\[badness 500\] 'tell' singleDobj  

</div>

`VerbRule(TellThat)      `*`// original source text`*  

`grammar `**[`VerbRule(TellThat)`](../object/VerbRule(TellThat).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2126`](../source/grammar.t.html#2126)]`

<div class="gramrule">

'tell' singleDobj 'that' topicIobj  

</div>

`VerbRule(TellTo)      `*`// original source text`*  

`grammar `**[`VerbRule(TellTo)`](../object/VerbRule(TellTo).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`1945`](../source/grammar.t.html#1945)]`

<div class="gramrule">

'tell' singleDobj 'to' literalIobj  

</div>

`VerbRule(TellVague)      `*`// original source text`*  

`grammar `**[`VerbRule(TellVague)`](../object/VerbRule(TellVague).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`1981`](../source/grammar.t.html#1981)]`

<div class="gramrule">

('tell'\|'t') singleDobj topicIobj  

</div>

`VerbRule(Test)      `*`// original source text`*  

`grammar `**[`VerbRule(Test)`](../object/VerbRule(Test).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`debug.t`](../file/debug.t.html)[`[`466`](../source/debug.t.html#466)]`

<div class="gramrule">

'test' literalDobj  

</div>

`VerbRule(Think)      `*`// original source text`*  

`grammar `**[`VerbRule(Think)`](../object/VerbRule(Think).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2134`](../source/grammar.t.html#2134)]`

<div class="gramrule">

'think' \| 'ponder' \| 'cogitate'  

</div>

`VerbRule(ThinkAbout)      `*`// original source text`*  

`grammar `**[`VerbRule(ThinkAbout)`](../object/VerbRule(ThinkAbout).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2141`](../source/grammar.t.html#2141)]`

<div class="gramrule">

('think' \| 'ponder' \| 'cogitate') 'about' topicDobj  

</div>

`VerbRule(Throw)      `*`// original source text`*  

`grammar `**[`VerbRule(Throw)`](../object/VerbRule(Throw).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2150`](../source/grammar.t.html#2150)]`

<div class="gramrule">

('throw' \| 'toss') multiDobj  

</div>

`VerbRule(ThrowAt)      `*`// original source text`*  

`grammar `**[`VerbRule(ThrowAt)`](../object/VerbRule(ThrowAt).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2158`](../source/grammar.t.html#2158)]`

<div class="gramrule">

('throw' \| 'toss') multiDobj 'at' singleIobj  

</div>

`VerbRule(ThrowDir)      `*`// original source text`*  

`grammar `**[`VerbRule(ThrowDir)`](../object/VerbRule(ThrowDir).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2188`](../source/grammar.t.html#2188)]`

<div class="gramrule">

('throw' \| 'toss') multiDobj ('to' ('the' \| ) \| ) singleDir  

</div>

`VerbRule(ThrowDirDown)      `*`// original source text`*  

`grammar `**[`VerbRule(ThrowDirDown)`](../object/VerbRule(ThrowDirDown).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2198`](../source/grammar.t.html#2198)]`

<div class="gramrule">

'throw' ('down' \| 'd') multiDobj  

</div>

`VerbRule(ThrowTo)      `*`// original source text`*  

`grammar `**[`VerbRule(ThrowTo)`](../object/VerbRule(ThrowTo).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2167`](../source/grammar.t.html#2167)]`

<div class="gramrule">

('throw' \| 'toss') multiDobj 'to' singleIobj  

</div>

`VerbRule(ThrowToType2)      `*`// original source text`*  

`grammar `**[`VerbRule(ThrowToType2)`](../object/VerbRule(ThrowToType2).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2176`](../source/grammar.t.html#2176)]`

<div class="gramrule">

'throw' singleIobj multiDobj  

</div>

`VerbRule(Topics)      `*`// original source text`*  

`grammar `**[`VerbRule(Topics)`](../object/VerbRule(Topics).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`1999`](../source/grammar.t.html#1999)]`

<div class="gramrule">

'topics'  

</div>

`VerbRule(Travel)      `*`// original source text`*  

`grammar `**[`VerbRule(Travel)`](../object/VerbRule(Travel).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2486`](../source/grammar.t.html#2486)]`

<div class="gramrule">

(('go' \| 'walk' \| 'run') singleDir) \| singleDir  

</div>

`VerbRule(Turn)      `*`// original source text`*  

`grammar `**[`VerbRule(Turn)`](../object/VerbRule(Turn).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2643`](../source/grammar.t.html#2643)]`

<div class="gramrule">

('turn' \| 'twist' \| 'rotate') multiDobj  

</div>

`VerbRule(TurnTo)      `*`// original source text`*  

`grammar `**[`VerbRule(TurnTo)`](../object/VerbRule(TurnTo).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2661`](../source/grammar.t.html#2661)]`

<div class="gramrule">

('turn' \| 'twist' \| 'rotate') singleDobj  
'to' literalIobj  

</div>

`VerbRule(TurnWith)      `*`// original source text`*  

`grammar `**[`VerbRule(TurnWith)`](../object/VerbRule(TurnWith).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2651`](../source/grammar.t.html#2651)]`

<div class="gramrule">

('turn' \| 'twist' \| 'rotate') singleDobj 'with' singleIobj  

</div>

`VerbRule(TypeLiteralOn)      `*`// original source text`*  

`grammar `**[`VerbRule(TypeLiteralOn)`](../object/VerbRule(TypeLiteralOn).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2696`](../source/grammar.t.html#2696)]`

<div class="gramrule">

'type' literalDobj 'on' singleIobj  

</div>

`VerbRule(TypeLiteralOnWhat)      `*`// original source text`*  

`grammar `**[`VerbRule(TypeLiteralOnWhat)`](../object/VerbRule(TypeLiteralOnWhat).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2705`](../source/grammar.t.html#2705)]`

<div class="gramrule">

\[badness 500\] 'type' literalDobj  

</div>

`VerbRule(TypeOn)      `*`// original source text`*  

`grammar `**[`VerbRule(TypeOn)`](../object/VerbRule(TypeOn).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2688`](../source/grammar.t.html#2688)]`

<div class="gramrule">

'type' 'on' singleDobj  

</div>

`VerbRule(Undo)      `*`// original source text`*  

`grammar `**[`VerbRule(Undo)`](../object/VerbRule(Undo).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2356`](../source/grammar.t.html#2356)]`

<div class="gramrule">

'undo'  

</div>

`VerbRule(Unfasten)      `*`// original source text`*  

`grammar `**[`VerbRule(Unfasten)`](../object/VerbRule(Unfasten).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3234`](../source/grammar.t.html#3234)]`

<div class="gramrule">

('unfasten' \| 'unbuckle') multiDobj  

</div>

`VerbRule(UnfastenFrom)      `*`// original source text`*  

`grammar `**[`VerbRule(UnfastenFrom)`](../object/VerbRule(UnfastenFrom).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3242`](../source/grammar.t.html#3242)]`

<div class="gramrule">

('unfasten' \| 'unbuckle') multiDobj 'from' singleIobj  

</div>

`VerbRule(Unlock)      `*`// original source text`*  

`grammar `**[`VerbRule(Unlock)`](../object/VerbRule(Unlock).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3049`](../source/grammar.t.html#3049)]`

<div class="gramrule">

'unlock' multiDobj  

</div>

`VerbRule(UnlockWith)      `*`// original source text`*  

`grammar `**[`VerbRule(UnlockWith)`](../object/VerbRule(UnlockWith).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3067`](../source/grammar.t.html#3067)]`

<div class="gramrule">

'unlock' singleDobj 'with' singleIobj  

</div>

`VerbRule(Unplug)      `*`// original source text`*  

`grammar `**[`VerbRule(Unplug)`](../object/VerbRule(Unplug).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3292`](../source/grammar.t.html#3292)]`

<div class="gramrule">

'unplug' multiDobj  

</div>

`VerbRule(UnplugFrom)      `*`// original source text`*  

`grammar `**[`VerbRule(UnplugFrom)`](../object/VerbRule(UnplugFrom).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3283`](../source/grammar.t.html#3283)]`

<div class="gramrule">

'unplug' multiDobj 'from' singleIobj  

</div>

`VerbRule(Unscrew)      `*`// original source text`*  

`grammar `**[`VerbRule(Unscrew)`](../object/VerbRule(Unscrew).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3318`](../source/grammar.t.html#3318)]`

<div class="gramrule">

'unscrew' multiDobj  

</div>

`VerbRule(UnscrewWith)      `*`// original source text`*  

`grammar `**[`VerbRule(UnscrewWith)`](../object/VerbRule(UnscrewWith).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3326`](../source/grammar.t.html#3326)]`

<div class="gramrule">

'unscrew' multiDobj 'with' singleIobj  

</div>

`VerbRule(VagueTravel)      `*`// original source text`*  

`grammar `**[`VerbRule(VagueTravel)`](../object/VerbRule(VagueTravel).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2477`](../source/grammar.t.html#2477)]`

<div class="gramrule">

'go' \| 'walk' \| 'run'  

</div>

`VerbRule(Verbose)      `*`// original source text`*  

`grammar `**[`VerbRule(Verbose)`](../object/VerbRule(Verbose).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`3448`](../source/grammar.t.html#3448)]`

<div class="gramrule">

'verbose' \| 'wordy'  

</div>

`VerbRule(Version)      `*`// original source text`*  

`grammar `**[`VerbRule(Version)`](../object/VerbRule(Version).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2363`](../source/grammar.t.html#2363)]`

<div class="gramrule">

'version'  

</div>

`VerbRule(Wait)      `*`// original source text`*  

`grammar `**[`VerbRule(Wait)`](../object/VerbRule(Wait).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2257`](../source/grammar.t.html#2257)]`

<div class="gramrule">

'z' \| 'wait'  

</div>

`VerbRule(Wear)      `*`// original source text`*  

`grammar `**[`VerbRule(Wear)`](../object/VerbRule(Wear).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`1739`](../source/grammar.t.html#1739)]`

<div class="gramrule">

('wear' \| 'don' \| 'put' 'on') multiDobj  
\| 'put' multiDobj 'on'  

</div>

`VerbRule(WhatAmICarrying)      `*`// original source text`*  

`grammar `**[`VerbRule(WhatAmICarrying)`](../object/VerbRule(WhatAmICarrying).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`newbie.t`](../file/newbie.t.html)[`[`693`](../source/newbie.t.html#693)]`

<div class="gramrule">

'what' ('am'\|'are') ('i'\|'we'\|'you') ('carrying' \| 'holding')  
\| 'what' 'do' ('i'\|'we'\|'you') 'have'  
\| 'what' 'have' ('i'\|'we'\|'you') 'got'  

</div>

`VerbRule(WhatIsNoun)      `*`// original source text`*  

`grammar `**[`VerbRule(WhatIsNoun)`](../object/VerbRule(WhatIsNoun).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`newbie.t`](../file/newbie.t.html)[`[`657`](../source/newbie.t.html#657)]`

<div class="gramrule">

('whats' \| 'what' ('is'\|'are')) multiDobj  

</div>

`VerbRule(WhatNext)      `*`// original source text`*  

`grammar `**[`VerbRule(WhatNext)`](../object/VerbRule(WhatNext).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`newbie.t`](../file/newbie.t.html)[`[`603`](../source/newbie.t.html#603)]`

<div class="gramrule">

'what' ('next' \| 'now') \|  
'what' ('should' \| 'can' \| 'do' \| 'does' \| 'am' \| 'is')  
('i' \| 'one' \|'anyone' \| 'someone')  
(('meant' 'to')\|) ('do' \| 'try') ('next' \| 'now'\|)  

</div>

`VerbRule(WhatsHere)      `*`// original source text`*  

`grammar `**[`VerbRule(WhatsHere)`](../object/VerbRule(WhatsHere).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`newbie.t`](../file/newbie.t.html)[`[`818`](../source/newbie.t.html#818)]`

<div class="gramrule">

'what' 'is' 'here'  
\| 'whats' 'here'  

</div>

`VerbRule(WhatsThePoint)      `*`// original source text`*  

`grammar `**[`VerbRule(WhatsThePoint)`](../object/VerbRule(WhatsThePoint).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`newbie.t`](../file/newbie.t.html)[`[`724`](../source/newbie.t.html#724)]`

<div class="gramrule">

('whats' \| 'what' 'is') ('the'\|) ('point' \| 'idea' \| 'goal' \|
'purpose')  
(literalDobj \| )  

</div>

`VerbRule(WhatThisGame)      `*`// original source text`*  

`grammar `**[`VerbRule(WhatThisGame)`](../object/VerbRule(WhatThisGame).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`newbie.t`](../file/newbie.t.html)[`[`741`](../source/newbie.t.html#741)]`

<div class="gramrule">

('whats' \| 'what' ('is'\|'are')) ('the' \| 'these' \| 'this' \|)  
('game' \| 'story' \| 'program' \| 'games' \| ('interactive'
'fiction'))  
('for' \| 'about' \| )  

</div>

`VerbRule(WhereAmI)      `*`// original source text`*  

`grammar `**[`VerbRule(WhereAmI)`](../object/VerbRule(WhereAmI).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`newbie.t`](../file/newbie.t.html)[`[`808`](../source/newbie.t.html#808)]`

<div class="gramrule">

'where' ('are' \| 'am' \| 'is') ('i' \| 'we')  

</div>

`VerbRule(WhereGo)      `*`// original source text`*  

`grammar `**[`VerbRule(WhereGo)`](../object/VerbRule(WhereGo).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`newbie.t`](../file/newbie.t.html)[`[`869`](../source/newbie.t.html#869)]`

<div class="gramrule">

'where' ('can' \| 'do' \| 'does' \| 'should') ('i' \| 'we' \| 'one'\|
'anyone')  
'go'  

</div>

`VerbRule(WhereHelp)      `*`// original source text`*  

`grammar `**[`VerbRule(WhereHelp)`](../object/VerbRule(WhereHelp).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`newbie.t`](../file/newbie.t.html)[`[`557`](../source/newbie.t.html#557)]`

<div class="gramrule">

'where' ('can' \| 'do' \| 'does' \| 'should')  
('i' \| 'we' \| 'one' \| 'anyone'\| 'someone')  
('get' \| 'find' \| 'obtain')  
('help' \| 'assistance' \| 'instructions')  
(literalDobj \| )  

</div>

`VerbRule(WhoAmI)      `*`// original source text`*  

`grammar `**[`VerbRule(WhoAmI)`](../object/VerbRule(WhoAmI).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`newbie.t`](../file/newbie.t.html)[`[`846`](../source/newbie.t.html#846)]`

<div class="gramrule">

('who'\| 'what') ('am'\|'is') ('i'\|'me')  

</div>

`VerbRule(Write)      `*`// original source text`*  

`grammar `**[`VerbRule(Write)`](../object/VerbRule(Write).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2733`](../source/grammar.t.html#2733)]`

<div class="gramrule">

'write' literalDobj  

</div>

`VerbRule(WriteOn)      `*`// original source text`*  

`grammar `**[`VerbRule(WriteOn)`](../object/VerbRule(WriteOn).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2724`](../source/grammar.t.html#2724)]`

<div class="gramrule">

'write' literalDobj ('on' \| 'in') singleIobj  

</div>

`VerbRule(Yell)      `*`// original source text`*  

`grammar `**[`VerbRule(Yell)`](../object/VerbRule(Yell).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2040`](../source/grammar.t.html#2040)]`

<div class="gramrule">

'yell' \| 'scream' \| 'shout' \| 'holler'  

</div>

`VerbRule(Yes)      `*`// original source text`*  

`grammar `**[`VerbRule(Yes)`](../object/VerbRule(Yes).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html)[`[`2022`](../source/grammar.t.html#2022)]`

<div class="gramrule">

'yes' \| 'affirmative' \| 'say' 'yes'  

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
