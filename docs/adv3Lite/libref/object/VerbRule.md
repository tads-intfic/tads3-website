---
layout: docs
---
<span class="title">VerbRule</span><span class="type">GrammarProd</span>

`VerbRule(About)      `*`// original source text`*  

`grammar `**[`VerbRule(About)`](../object/VerbRule(About).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2377`](../source/grammar.t.html#2377)]`



'about'  



`VerbRule(Again)      `*`// original source text`*  

`grammar `**[`VerbRule(Again)`](../object/VerbRule(Again).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2278`](../source/grammar.t.html#2278)]`



'again' \| 'g'  



`VerbRule(AskAbout)      `*`// original source text`*  

`grammar `**[`VerbRule(AskAbout)`](../object/VerbRule(AskAbout).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`1878`](../source/grammar.t.html#1878)]`



('ask' \| 'a') singleDobj 'about' topicIobj  



`VerbRule(AskAboutImplicit)      `*`// original source text`*  

`grammar `**[`VerbRule(AskAboutImplicit)`](../object/VerbRule(AskAboutImplicit).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`1888`](../source/grammar.t.html#1888)]`



('a' \| ('ask' \| 'tell' 'me') ('about')) topicIobj  



`VerbRule(AskAboutWhat)      `*`// original source text`*  

`grammar `**[`VerbRule(AskAboutWhat)`](../object/VerbRule(AskAboutWhat).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`1898`](../source/grammar.t.html#1898)]`



\[badness 500\] 'ask' singleDobj  



`VerbRule(AskFor)      `*`// original source text`*  

`grammar `**[`VerbRule(AskFor)`](../object/VerbRule(AskFor).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`1845`](../source/grammar.t.html#1845)]`



('ask' \| 'a') singleDobj 'for' topicIobj  
\| ('ask' \| 'a') 'for' topicIobj 'from' singleDobj  



`VerbRule(AskForImplicit)      `*`// original source text`*  

`grammar `**[`VerbRule(AskForImplicit)`](../object/VerbRule(AskForImplicit).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`1866`](../source/grammar.t.html#1866)]`



('a' \| 'ask') 'for' topicIobj  



`VerbRule(AskVague)      `*`// original source text`*  

`grammar `**[`VerbRule(AskVague)`](../object/VerbRule(AskVague).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`1973`](../source/grammar.t.html#1973)]`



\[badness 500\] 'ask' singleDobj topicIobj  



`VerbRule(AskWhomFor)      `*`// original source text`*  

`grammar `**[`VerbRule(AskWhomFor)`](../object/VerbRule(AskWhomFor).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`1856`](../source/grammar.t.html#1856)]`



('ask' \| 'a') 'for' topicIobj  



`VerbRule(Attach)      `*`// original source text`*  

`grammar `**[`VerbRule(Attach)`](../object/VerbRule(Attach).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2997`](../source/grammar.t.html#2997)]`



('attach' \| 'connect') multiDobj  



`VerbRule(AttachTo)      `*`// original source text`*  

`grammar `**[`VerbRule(AttachTo)`](../object/VerbRule(AttachTo).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2987`](../source/grammar.t.html#2987)]`



('attach' \| 'connect') multiDobj 'to' singleIobj  



`VerbRule(Attack)      `*`// original source text`*  

`grammar `**[`VerbRule(Attack)`](../object/VerbRule(Attack).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2215`](../source/grammar.t.html#2215)]`



('attack' \| 'kill' \| 'hit' \| 'kick' \| 'punch') singleDobj  



`VerbRule(AttackWith)      `*`// original source text`*  

`grammar `**[`VerbRule(AttackWith)`](../object/VerbRule(AttackWith).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2224`](../source/grammar.t.html#2224)]`



('attack' \| 'kill' \| 'hit' \| 'strike')  
singleDobj 'with' singleIobj  



`VerbRule(AuxQuery)      `*`// original source text`*  

`grammar `**[`VerbRule(AuxQuery)`](../object/VerbRule(AuxQuery).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`1809`](../source/grammar.t.html#1809)]`



('a' \| 'ask'\|) ('do' \| 'does' \| 'did' \| 'is' \| 'are'\| 'have' \|
'has' \|'can' \|  
'could' \| 'would' \| 'should' \| 'were' ) topicDobj  



`VerbRule(Board)      `*`// original source text`*  

`grammar `**[`VerbRule(Board)`](../object/VerbRule(Board).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3186`](../source/grammar.t.html#3186)]`



('board'  
\| ('get' ('on' \| 'onto' \| 'on' 'to'))  
\| ('climb' ('on' \| 'onto' \| 'on' 'to')))  
singleDobj  



`VerbRule(Break)      `*`// original source text`*  

`grammar `**[`VerbRule(Break)`](../object/VerbRule(Break).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2858`](../source/grammar.t.html#2858)]`



('break' \| 'ruin' \| 'destroy' \| 'wreck' \| 'smash') multiDobj  



`VerbRule(Brief)      `*`// original source text`*  

`grammar `**[`VerbRule(Brief)`](../object/VerbRule(Brief).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3441`](../source/grammar.t.html#3441)]`



'brief' \| 'terse'  



`VerbRule(Burn)      `*`// original source text`*  

`grammar `**[`VerbRule(Burn)`](../object/VerbRule(Burn).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2830`](../source/grammar.t.html#2830)]`



('burn' \| 'ignite' \| 'set' 'fire' 'to') multiDobj  



`VerbRule(BurnWith)      `*`// original source text`*  

`grammar `**[`VerbRule(BurnWith)`](../object/VerbRule(BurnWith).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2838`](../source/grammar.t.html#2838)]`



('light' \| 'burn' \| 'ignite' \| 'set' 'fire' 'to') singleDobj  
('with' \| 'from') singleIobj  



`VerbRule(Clean)      `*`// original source text`*  

`grammar `**[`VerbRule(Clean)`](../object/VerbRule(Clean).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2969`](../source/grammar.t.html#2969)]`



'clean' multiDobj  



`VerbRule(CleanWith)      `*`// original source text`*  

`grammar `**[`VerbRule(CleanWith)`](../object/VerbRule(CleanWith).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2977`](../source/grammar.t.html#2977)]`



'clean' singleDobj 'with' singleIobj  



`VerbRule(Climb)      `*`// original source text`*  

`grammar `**[`VerbRule(Climb)`](../object/VerbRule(Climb).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2926`](../source/grammar.t.html#2926)]`



'climb' singleDobj  



`VerbRule(ClimbDown)      `*`// original source text`*  

`grammar `**[`VerbRule(ClimbDown)`](../object/VerbRule(ClimbDown).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2952`](../source/grammar.t.html#2952)]`



('climb' \| 'go' \| 'walk') 'down' singleDobj  



`VerbRule(ClimbDownWhat)      `*`// original source text`*  

`grammar `**[`VerbRule(ClimbDownWhat)`](../object/VerbRule(ClimbDownWhat).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2961`](../source/grammar.t.html#2961)]`



('climb' \| 'go' \| 'walk') 'down'  



`VerbRule(ClimbUp)      `*`// original source text`*  

`grammar `**[`VerbRule(ClimbUp)`](../object/VerbRule(ClimbUp).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2935`](../source/grammar.t.html#2935)]`



('climb' \| 'go' \| 'walk') 'up' singleDobj  



`VerbRule(ClimbUpWhat)      `*`// original source text`*  

`grammar `**[`VerbRule(ClimbUpWhat)`](../object/VerbRule(ClimbUpWhat).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2944`](../source/grammar.t.html#2944)]`



'climb' 'up'  



`VerbRule(Close)      `*`// original source text`*  

`grammar `**[`VerbRule(Close)`](../object/VerbRule(Close).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3033`](../source/grammar.t.html#3033)]`



('close' \| 'shut') multiDobj  



`VerbRule(CmdMenu)      `*`// original source text`*  

`grammar `**[`VerbRule(CmdMenu)`](../object/VerbRule(CmdMenu).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`cmdhelp.t`](../file/cmdhelp.t.html) [`[`845`](../source/cmdhelp.t.html#845)]`



numericDobj  



`VerbRule(ConsultAbout)      `*`// original source text`*  

`grammar `**[`VerbRule(ConsultAbout)`](../object/VerbRule(ConsultAbout).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2743`](../source/grammar.t.html#2743)]`



'consult' singleDobj ('on' \| 'about') topicIobj  
\| 'search' singleDobj 'for' topicIobj  



`VerbRule(ConsultWhatAbout)      `*`// original source text`*  

`grammar `**[`VerbRule(ConsultWhatAbout)`](../object/VerbRule(ConsultWhatAbout).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2764`](../source/grammar.t.html#2764)]`



(('look' \| 'l') ('up' \| 'for')  
\| 'find'  
\| 'search' 'for'  
\| 'read' 'about')  
topicIobj  
\| ('look' \| 'l') topicIobj 'up'  



`VerbRule(Continue)      `*`// original source text`*  

`grammar `**[`VerbRule(Continue)`](../object/VerbRule(Continue).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2470`](../source/grammar.t.html#2470)]`



'continue' \| 'c'  



`VerbRule(Credits)      `*`// original source text`*  

`grammar `**[`VerbRule(Credits)`](../object/VerbRule(Credits).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2370`](../source/grammar.t.html#2370)]`



'credits'  



`VerbRule(Cut)      `*`// original source text`*  

`grammar `**[`VerbRule(Cut)`](../object/VerbRule(Cut).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2866`](../source/grammar.t.html#2866)]`



\[badness 500\] 'cut' singleDobj  



`VerbRule(CutWith)      `*`// original source text`*  

`grammar `**[`VerbRule(CutWith)`](../object/VerbRule(CutWith).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2874`](../source/grammar.t.html#2874)]`



'cut' singleDobj 'with' singleIobj  



`VerbRule(Debug)      `*`// original source text`*  

`grammar `**[`VerbRule(Debug)`](../object/VerbRule(Debug).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`debug.t`](../file/debug.t.html) [`[`52`](../source/debug.t.html#52)]`



'debug' literalDobj  



`VerbRule(DebugI)      `*`// original source text`*  

`grammar `**[`VerbRule(DebugI)`](../object/VerbRule(DebugI).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`debug.t`](../file/debug.t.html) [`[`105`](../source/debug.t.html#105)]`



'debug'  



`VerbRule(Detach)      `*`// original source text`*  

`grammar `**[`VerbRule(Detach)`](../object/VerbRule(Detach).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3017`](../source/grammar.t.html#3017)]`



('detach' \| 'disconnect') multiDobj  



`VerbRule(DetachFrom)      `*`// original source text`*  

`grammar `**[`VerbRule(DetachFrom)`](../object/VerbRule(DetachFrom).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3007`](../source/grammar.t.html#3007)]`



('detach' \| 'disconnect') multiDobj 'from' singleIobj  



`VerbRule(Dig)      `*`// original source text`*  

`grammar `**[`VerbRule(Dig)`](../object/VerbRule(Dig).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2549`](../source/grammar.t.html#2549)]`



('dig' \| 'dig' 'in') singleDobj  



`VerbRule(DigWith)      `*`// original source text`*  

`grammar `**[`VerbRule(DigWith)`](../object/VerbRule(DigWith).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2558`](../source/grammar.t.html#2558)]`



('dig' \| 'dig' 'in') singleDobj 'with' singleIobj  



`VerbRule(Doff)      `*`// original source text`*  

`grammar `**[`VerbRule(Doff)`](../object/VerbRule(Doff).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`1748`](../source/grammar.t.html#1748)]`



('doff' \| 'take' 'off') multiDobj  
\| 'take' multiDobj 'off'  



`VerbRule(Drink)      `*`// original source text`*  

`grammar `**[`VerbRule(Drink)`](../object/VerbRule(Drink).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2892`](../source/grammar.t.html#2892)]`



('drink' \| 'quaff' \| 'imbibe') multiDobj  



`VerbRule(Drop)      `*`// original source text`*  

`grammar `**[`VerbRule(Drop)`](../object/VerbRule(Drop).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`1530`](../source/grammar.t.html#1530)]`



('drop' \| 'put' 'down' \| 'set' 'down') multiDobj  
\| ('put' \| 'set') multiDobj 'down'  



`VerbRule(Eat)      `*`// original source text`*  

`grammar `**[`VerbRule(Eat)`](../object/VerbRule(Eat).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2884`](../source/grammar.t.html#2884)]`



('eat' \| 'consume') multiDobj  



`VerbRule(Enter)      `*`// original source text`*  

`grammar `**[`VerbRule(Enter)`](../object/VerbRule(Enter).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3198`](../source/grammar.t.html#3198)]`



('enter' \| ('walk' \| 'go' \| 'get' \| 'climb')  
( 'in' \| 'in' 'to' \| 'into' \| 'inside'))  
singleDobj  



`VerbRule(EnterOn)      `*`// original source text`*  

`grammar `**[`VerbRule(EnterOn)`](../object/VerbRule(EnterOn).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2713`](../source/grammar.t.html#2713)]`



'enter' literalDobj  
('on' \| 'in' \| 'in' 'to' \| 'into' \| 'with') singleIobj  



`VerbRule(Evaluate)      `*`// original source text`*  

`grammar `**[`VerbRule(Evaluate)`](../object/VerbRule(Evaluate).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3482`](../source/grammar.t.html#3482)]`



'eval' literalDobj  



`VerbRule(Examine)      `*`// original source text`*  

`grammar `**[`VerbRule(Examine)`](../object/VerbRule(Examine).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`1539`](../source/grammar.t.html#1539)]`



('examine' \| 'inspect' \| 'x' \| 'look' 'at' \| 'l' 'at') multiDobj  



`VerbRule(Exits)      `*`// original source text`*  

`grammar `**[`VerbRule(Exits)`](../object/VerbRule(Exits).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3388`](../source/grammar.t.html#3388)]`



'exits'  



`VerbRule(ExitsColour)      `*`// original source text`*  

`grammar `**[`VerbRule(ExitsColour)`](../object/VerbRule(ExitsColour).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3407`](../source/grammar.t.html#3407)]`



('exits'\|'exit') ('color'\|'colour') ('on' -\>on\_\| 'off' -\>on\_ \|  
'blue' -\>colour\_ \| 'red' -\> colour\_ \|  
'green' -\> colour\_ \| 'yellow' -\>  
colour\_)  



`VerbRule(ExitsMode)      `*`// original source text`*  

`grammar `**[`VerbRule(ExitsMode)`](../object/VerbRule(ExitsMode).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3395`](../source/grammar.t.html#3395)]`



'exits' ('on'-\>on\_ \| 'all'-\>on\_  
\| 'off'-\>off\_ \| 'none'-\>off\_  
\| ('status' ('line' \| ) \| 'statusline') 'look'-\>on\_  
\| 'look'-\>on\_ ('status' ('line' \| ) \| 'statusline')  
\| 'status'-\>stat\_ ('line' \| ) \| 'statusline'-\>stat\_  
\| 'look'-\>look\_)  



`VerbRule(Extinguish)      `*`// original source text`*  

`grammar `**[`VerbRule(Extinguish)`](../object/VerbRule(Extinguish).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2849`](../source/grammar.t.html#2849)]`



('extinguish' \| 'douse' \| 'put' 'out' \| 'blow' 'out') multiDobj  
\| ('blow' \| 'put') multiDobj 'out'  



`VerbRule(ExtraHints)      `*`// original source text`*  

`grammar `**[`VerbRule(ExtraHints)`](../object/VerbRule(ExtraHints).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3433`](../source/grammar.t.html#3433)]`



('extra' \| 'extras'\| 'bonus') ('hint' \| 'hints' \|'tips' \|'tip'\|
)  
('on'-\>onOff \| 'off'-\>onOff \| )  



`VerbRule(Fasten)      `*`// original source text`*  

`grammar `**[`VerbRule(Fasten)`](../object/VerbRule(Fasten).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3216`](../source/grammar.t.html#3216)]`



('fasten' \| 'buckle' \| 'buckle' 'up') multiDobj  



`VerbRule(FastenTo)      `*`// original source text`*  

`grammar `**[`VerbRule(FastenTo)`](../object/VerbRule(FastenTo).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3224`](../source/grammar.t.html#3224)]`



('fasten' \| 'buckle') multiDobj 'to' singleIobj  



`VerbRule(Feel)      `*`// original source text`*  

`grammar `**[`VerbRule(Feel)`](../object/VerbRule(Feel).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`1611`](../source/grammar.t.html#1611)]`



('feel' \| 'touch') multiDobj  



`VerbRule(FiatLux)      `*`// original source text`*  

`grammar `**[`VerbRule(FiatLux)`](../object/VerbRule(FiatLux).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3475`](../source/grammar.t.html#3475)]`



'fiat' 'lux' \| 'let' 'there' 'be' 'light'  



`VerbRule(Flip)      `*`// original source text`*  

`grammar `**[`VerbRule(Flip)`](../object/VerbRule(Flip).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2786`](../source/grammar.t.html#2786)]`



'flip' multiDobj  



`VerbRule(Follow)      `*`// original source text`*  

`grammar `**[`VerbRule(Follow)`](../object/VerbRule(Follow).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2206`](../source/grammar.t.html#2206)]`



'follow' singleDobj  



`VerbRule(Footnote)      `*`// original source text`*  

`grammar `**[`VerbRule(Footnote)`](../object/VerbRule(Footnote).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`footnote.t`](../file/footnote.t.html) [`[`307`](../source/footnote.t.html#307)]`



('footnote' \| 'note') numericDobj  



`VerbRule(FootnotesFull)      `*`// original source text`*  

`grammar `**[`VerbRule(FootnotesFull)`](../object/VerbRule(FootnotesFull).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`footnote.t`](../file/footnote.t.html) [`[`315`](../source/footnote.t.html#315)]`



'footnotes' 'full'  



`VerbRule(FootnotesMedium)      `*`// original source text`*  

`grammar `**[`VerbRule(FootnotesMedium)`](../object/VerbRule(FootnotesMedium).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`footnote.t`](../file/footnote.t.html) [`[`322`](../source/footnote.t.html#322)]`



'footnotes' 'medium'  



`VerbRule(FootnotesOff)      `*`// original source text`*  

`grammar `**[`VerbRule(FootnotesOff)`](../object/VerbRule(FootnotesOff).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`footnote.t`](../file/footnote.t.html) [`[`329`](../source/footnote.t.html#329)]`



'footnotes' 'off'  



`VerbRule(FootnotesStatus)      `*`// original source text`*  

`grammar `**[`VerbRule(FootnotesStatus)`](../object/VerbRule(FootnotesStatus).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`footnote.t`](../file/footnote.t.html) [`[`336`](../source/footnote.t.html#336)]`



'footnotes'  



`VerbRule(FullScore)      `*`// original source text`*  

`grammar `**[`VerbRule(FullScore)`](../object/VerbRule(FullScore).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2292`](../source/grammar.t.html#2292)]`



'full' 'score' \| 'fullscore' \| 'full'  



`VerbRule(GetOff)      `*`// original source text`*  

`grammar `**[`VerbRule(GetOff)`](../object/VerbRule(GetOff).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3165`](../source/grammar.t.html#3165)]`



'get' ('off' \| 'off' 'of' \| 'down' 'from') singleDobj  



`VerbRule(GetOut)      `*`// original source text`*  

`grammar `**[`VerbRule(GetOut)`](../object/VerbRule(GetOut).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3174`](../source/grammar.t.html#3174)]`



'get' 'out'  
\| 'get' 'off'  
\| 'get' 'down'  
\| 'disembark'  
\| 'climb' 'out'  



`VerbRule(GetOutOf)      `*`// original source text`*  

`grammar `**[`VerbRule(GetOutOf)`](../object/VerbRule(GetOutOf).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3155`](../source/grammar.t.html#3155)]`



('out' 'of' \| 'get' 'out' 'of' \| 'climb' 'out' 'of' \| 'leave' \|
'exit')  
singleDobj  



`VerbRule(GiveTo)      `*`// original source text`*  

`grammar `**[`VerbRule(GiveTo)`](../object/VerbRule(GiveTo).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2047`](../source/grammar.t.html#2047)]`



('give' \| 'offer') multiDobj 'to' singleIobj  



`VerbRule(GiveToImplicit)      `*`// original source text`*  

`grammar `**[`VerbRule(GiveToImplicit)`](../object/VerbRule(GiveToImplicit).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2068`](../source/grammar.t.html#2068)]`



('give' \| 'offer') multiDobj  



`VerbRule(GiveToType2)      `*`// original source text`*  

`grammar `**[`VerbRule(GiveToType2)`](../object/VerbRule(GiveToType2).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2056`](../source/grammar.t.html#2056)]`



('give' \| 'offer') singleIobj multiDobj  



`VerbRule(GoAlong)      `*`// original source text`*  

`grammar `**[`VerbRule(GoAlong)`](../object/VerbRule(GoAlong).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2531`](../source/grammar.t.html#2531)]`



('walk' \| 'go' ) ('along')  
singleDobj  



`VerbRule(GoBack)      `*`// original source text`*  

`grammar `**[`VerbRule(GoBack)`](../object/VerbRule(GoBack).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2542`](../source/grammar.t.html#2542)]`



'back' \| 'go' 'back' \| 'return'  



`VerbRule(GoNear)      `*`// original source text`*  

`grammar `**[`VerbRule(GoNear)`](../object/VerbRule(GoNear).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3466`](../source/grammar.t.html#3466)]`



('gonear' \|'go' 'near'\| 'gn') singleDobj  



`VerbRule(Goodbye)      `*`// original source text`*  

`grammar `**[`VerbRule(Goodbye)`](../object/VerbRule(Goodbye).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2015`](../source/grammar.t.html#2015)]`



('say' \| ()) ('goodbye' \| 'good-bye' \| 'good' 'bye' \| 'bye')  



`VerbRule(GoSomewhere)      `*`// original source text`*  

`grammar `**[`VerbRule(GoSomewhere)`](../object/VerbRule(GoSomewhere).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`newbie.t`](../file/newbie.t.html) [`[`780`](../source/newbie.t.html#780)]`



(('go' \| 'walk' \| 'proceed' \| 'run') ( \| ('to' 'the') )  
('left' \| 'right' \| 'on' \| 'onwards' \| 'onward' \| 'forward' \|
'forwards' \|  
'around' \| 'somewhere' \| (('straight'\| ) 'ahead'))) \| ('turn'  
('left'\|'right'))  



`VerbRule(GoThrough)      `*`// original source text`*  

`grammar `**[`VerbRule(GoThrough)`](../object/VerbRule(GoThrough).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2521`](../source/grammar.t.html#2521)]`



('walk' \| 'go' ) ('through' \| 'thru')  
singleDobj  



`VerbRule(GoTo)      `*`// original source text`*  

`grammar `**[`VerbRule(GoTo)`](../object/VerbRule(GoTo).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2459`](../source/grammar.t.html#2459)]`



('go' 'to' \| 'walk' 'to')  
singleDobj  



`VerbRule(Hello)      `*`// original source text`*  

`grammar `**[`VerbRule(Hello)`](../object/VerbRule(Hello).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2006`](../source/grammar.t.html#2006)]`



('say' \| ) ('hello' \| 'hallo' \| 'hi')  



`VerbRule(Help)      `*`// original source text`*  

`grammar `**[`VerbRule(Help)`](../object/VerbRule(Help).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`newbie.t`](../file/newbie.t.html) [`[`582`](../source/newbie.t.html#582)]`



('help' \| 'assist' \| 'assistance' ) \|  
'how' ('do' \| 'can' \| 'does' \| 'will' \| 'shall' \| 'could' \|
'should' \| 'may'  
\| 'must')  
('i' \| 'me' \| 'he' \| 'she' \| 'it' \| 'we' \| 'you' \| 'they' \|
'person' \| 'one'  
\| 'someone' \| 'anyone' \| 'somebody' \| 'anybody') literalDobj  



`VerbRule(Hints)      `*`// original source text`*  

`grammar `**[`VerbRule(Hints)`](../object/VerbRule(Hints).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3425`](../source/grammar.t.html#3425)]`



'hint' \| 'hints'  



`VerbRule(HintsOff)      `*`// original source text`*  

`grammar `**[`VerbRule(HintsOff)`](../object/VerbRule(HintsOff).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3418`](../source/grammar.t.html#3418)]`



'hints' 'off'  



`VerbRule(In)      `*`// original source text`*  

`grammar `**[`VerbRule(In)`](../object/VerbRule(In).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2507`](../source/grammar.t.html#2507)]`



'enter'  



`VerbRule(instructions)      `*`// original source text`*  

`grammar `**[`VerbRule(instructions)`](../object/VerbRule(instructions).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`instruct.t`](../file/instruct.t.html) [`[`998`](../source/instruct.t.html#998)]`



'instructions'  



`VerbRule(Intro)      `*`// original source text`*  

`grammar `**[`VerbRule(Intro)`](../object/VerbRule(Intro).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`newbie.t`](../file/newbie.t.html) [`[`631`](../source/newbie.t.html#631)]`



('show'\|'view'\|) ('brief'\|) ('intro' \| 'introduction')  



`VerbRule(Inventory)      `*`// original source text`*  

`grammar `**[`VerbRule(Inventory)`](../object/VerbRule(Inventory).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2235`](../source/grammar.t.html#2235)]`



'i' \| 'inv' \| 'inventory' \| 'take' 'inventory'  



`VerbRule(InventoryTall)      `*`// original source text`*  

`grammar `**[`VerbRule(InventoryTall)`](../object/VerbRule(InventoryTall).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2242`](../source/grammar.t.html#2242)]`



('i' \| 'inv' \| 'inventory') 'tall'  



`VerbRule(InventoryWide)      `*`// original source text`*  

`grammar `**[`VerbRule(InventoryWide)`](../object/VerbRule(InventoryWide).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2249`](../source/grammar.t.html#2249)]`



('i' \| 'inv' \| 'inventory') 'wide'  



`VerbRule(Jump)      `*`// original source text`*  

`grammar `**[`VerbRule(Jump)`](../object/VerbRule(Jump).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2568`](../source/grammar.t.html#2568)]`



'jump'  



`VerbRule(JumpOff)      `*`// original source text`*  

`grammar `**[`VerbRule(JumpOff)`](../object/VerbRule(JumpOff).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2582`](../source/grammar.t.html#2582)]`



'jump' 'off' singleDobj  



`VerbRule(JumpOffIntransitive)      `*`// original source text`*  

`grammar `**[`VerbRule(JumpOffIntransitive)`](../object/VerbRule(JumpOffIntransitive).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2575`](../source/grammar.t.html#2575)]`



'jump' 'off'  



`VerbRule(JumpOver)      `*`// original source text`*  

`grammar `**[`VerbRule(JumpOver)`](../object/VerbRule(JumpOver).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2591`](../source/grammar.t.html#2591)]`



('jump' \| 'jump' 'over') singleDobj  



`VerbRule(KeepGoing)      `*`// original source text`*  

`grammar `**[`VerbRule(KeepGoing)`](../object/VerbRule(KeepGoing).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`newbie.t`](../file/newbie.t.html) [`[`495`](../source/newbie.t.html#495)]`



('keep' \| 'continue') ('going'\|'walking'\|'running'\|'heading')
singleDir  
\| 'head' ('back' \| ) singleDir  



`VerbRule(Kiss)      `*`// original source text`*  

`grammar `**[`VerbRule(Kiss)`](../object/VerbRule(Kiss).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`1757`](../source/grammar.t.html#1757)]`



'kiss' singleDobj  



`VerbRule(Lie)      `*`// original source text`*  

`grammar `**[`VerbRule(Lie)`](../object/VerbRule(Lie).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3124`](../source/grammar.t.html#3124)]`



'lie' 'down'



`VerbRule(LieIn)      `*`// original source text`*  

`grammar `**[`VerbRule(LieIn)`](../object/VerbRule(LieIn).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3113`](../source/grammar.t.html#3113)]`



'lie' ('in' \| 'down' 'in')  
singleDobj  



`VerbRule(LieOn)      `*`// original source text`*  

`grammar `**[`VerbRule(LieOn)`](../object/VerbRule(LieOn).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3103`](../source/grammar.t.html#3103)]`



'lie' ('on' \| 'down' 'on' )  
singleDobj  



`VerbRule(Light)      `*`// original source text`*  

`grammar `**[`VerbRule(Light)`](../object/VerbRule(Light).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2814`](../source/grammar.t.html#2814)]`



'light' multiDobj  



`VerbRule(Listen)      `*`// original source text`*  

`grammar `**[`VerbRule(Listen)`](../object/VerbRule(Listen).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`1650`](../source/grammar.t.html#1650)]`



'listen' \| 'hear'  



`VerbRule(ListenTo)      `*`// original source text`*  

`grammar `**[`VerbRule(ListenTo)`](../object/VerbRule(ListenTo).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`1642`](../source/grammar.t.html#1642)]`



('hear' \| 'listen' 'to' ) multiDobj  



`VerbRule(ListRelations)      `*`// original source text`*  

`grammar `**[`VerbRule(ListRelations)`](../object/VerbRule(ListRelations).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`relations.t`](../file/relations.t.html) [`[`830`](../source/relations.t.html#830)]`



('list'\|) 'relations'  



`VerbRule(ListTests)      `*`// original source text`*  

`grammar `**[`VerbRule(ListTests)`](../object/VerbRule(ListTests).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`debug.t`](../file/debug.t.html) [`[`433`](../source/debug.t.html#433)]`



('list' \| 'l') 'tests' (\| 'fully' -\> fully)  



`VerbRule(Lock)      `*`// original source text`*  

`grammar `**[`VerbRule(Lock)`](../object/VerbRule(Lock).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3041`](../source/grammar.t.html#3041)]`



'lock' multiDobj  



`VerbRule(LockWith)      `*`// original source text`*  

`grammar `**[`VerbRule(LockWith)`](../object/VerbRule(LockWith).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3057`](../source/grammar.t.html#3057)]`



'lock' singleDobj 'with' singleIobj  



`VerbRule(Look)      `*`// original source text`*  

`grammar `**[`VerbRule(Look)`](../object/VerbRule(Look).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2264`](../source/grammar.t.html#2264)]`



'look' \| 'look' 'around' \| 'l' \| 'l' 'around'  



`VerbRule(LookBehind)      `*`// original source text`*  

`grammar `**[`VerbRule(LookBehind)`](../object/VerbRule(LookBehind).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`1603`](../source/grammar.t.html#1603)]`



('search' \| 'look' \| 'l') 'behind' multiDobj  



`VerbRule(LookHere)      `*`// original source text`*  

`grammar `**[`VerbRule(LookHere)`](../object/VerbRule(LookHere).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`newbie.t`](../file/newbie.t.html) [`[`427`](../source/newbie.t.html#427)]`



('l' \| 'look' \| 'search') ('here'-\>placeName\|'there'-\>placeName)  



`VerbRule(LookIn)      `*`// original source text`*  

`grammar `**[`VerbRule(LookIn)`](../object/VerbRule(LookIn).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`1570`](../source/grammar.t.html#1570)]`



('look' \| 'l') ('in' \| 'inside') multiDobj  



`VerbRule(LookThrough)      `*`// original source text`*  

`grammar `**[`VerbRule(LookThrough)`](../object/VerbRule(LookThrough).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`1587`](../source/grammar.t.html#1587)]`



('look' \| 'l' \| 'peer') ('through' \| 'thru' \| 'out') multiDobj  



`VerbRule(LookUnder)      `*`// original source text`*  

`grammar `**[`VerbRule(LookUnder)`](../object/VerbRule(LookUnder).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`1595`](../source/grammar.t.html#1595)]`



('search' \| 'look' \| 'l') 'under' multiDobj  



`VerbRule(LookUp)      `*`// original source text`*  

`grammar `**[`VerbRule(LookUp)`](../object/VerbRule(LookUp).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2753`](../source/grammar.t.html#2753)]`



(('look' \| 'l') ('up' \| 'for') \| 'find' \| 'search' 'for' \| 'read'
'about')  
topicIobj ('in' \| 'on') singleDobj  
\| ('look' \| 'l') topicIobj 'up' ('in' \| 'on') singleDobj  



`VerbRule(LookX)      `*`// original source text`*  

`grammar `**[`VerbRule(LookX)`](../object/VerbRule(LookX).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`1547`](../source/grammar.t.html#1547)]`



('look'\|'l') multiDobj  



`VerbRule(Move)      `*`// original source text`*  

`grammar `**[`VerbRule(Move)`](../object/VerbRule(Move).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2616`](../source/grammar.t.html#2616)]`



'move' multiDobj  



`VerbRule(MoveTo)      `*`// original source text`*  

`grammar `**[`VerbRule(MoveTo)`](../object/VerbRule(MoveTo).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2624`](../source/grammar.t.html#2624)]`



('push' \| 'move') multiDobj ('to' \| 'under') singleIobj  



`VerbRule(MoveWith)      `*`// original source text`*  

`grammar `**[`VerbRule(MoveWith)`](../object/VerbRule(MoveWith).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2633`](../source/grammar.t.html#2633)]`



'move' singleDobj 'with' singleIobj  



`VerbRule(No)      `*`// original source text`*  

`grammar `**[`VerbRule(No)`](../object/VerbRule(No).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2031`](../source/grammar.t.html#2031)]`



'no' \| 'negative' \| 'say' 'no'  



`VerbRule(Notify)      `*`// original source text`*  

`grammar `**[`VerbRule(Notify)`](../object/VerbRule(Notify).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2299`](../source/grammar.t.html#2299)]`



'notify'  



`VerbRule(NotifyOff)      `*`// original source text`*  

`grammar `**[`VerbRule(NotifyOff)`](../object/VerbRule(NotifyOff).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2313`](../source/grammar.t.html#2313)]`



'notify' 'off'  



`VerbRule(NotifyOn)      `*`// original source text`*  

`grammar `**[`VerbRule(NotifyOn)`](../object/VerbRule(NotifyOn).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2306`](../source/grammar.t.html#2306)]`



'notify' 'on'  



`VerbRule(Open)      `*`// original source text`*  

`grammar `**[`VerbRule(Open)`](../object/VerbRule(Open).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3025`](../source/grammar.t.html#3025)]`



'open' multiDobj  



`VerbRule(Out)      `*`// original source text`*  

`grammar `**[`VerbRule(Out)`](../object/VerbRule(Out).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2514`](../source/grammar.t.html#2514)]`



'exit' \| 'leave'  



`VerbRule(PlugIn)      `*`// original source text`*  

`grammar `**[`VerbRule(PlugIn)`](../object/VerbRule(PlugIn).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3274`](../source/grammar.t.html#3274)]`



'plug' multiDobj 'in'  
\| 'plug' 'in' multiDobj  



`VerbRule(PlugInto)      `*`// original source text`*  

`grammar `**[`VerbRule(PlugInto)`](../object/VerbRule(PlugInto).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3252`](../source/grammar.t.html#3252)]`



'plug' multiDobj ('in' \| 'into' \| 'in' 'to') singleIobj  



`VerbRule(PlugIntoWhat)      `*`// original source text`*  

`grammar `**[`VerbRule(PlugIntoWhat)`](../object/VerbRule(PlugIntoWhat).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3262`](../source/grammar.t.html#3262)]`



\[badness 500\] 'plug' multiDobj  



`VerbRule(Pour)      `*`// original source text`*  

`grammar `**[`VerbRule(Pour)`](../object/VerbRule(Pour).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2900`](../source/grammar.t.html#2900)]`



'pour' multiDobj  



`VerbRule(PourInto)      `*`// original source text`*  

`grammar `**[`VerbRule(PourInto)`](../object/VerbRule(PourInto).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2908`](../source/grammar.t.html#2908)]`



'pour' multiDobj ('in' \| 'into' \| 'in' 'to') singleIobj  



`VerbRule(PourOnto)      `*`// original source text`*  

`grammar `**[`VerbRule(PourOnto)`](../object/VerbRule(PourOnto).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2917`](../source/grammar.t.html#2917)]`



'pour' multiDobj ('on' \| 'onto' \| 'on' 'to') singleIobj  



`VerbRule(Pull)      `*`// original source text`*  

`grammar `**[`VerbRule(Pull)`](../object/VerbRule(Pull).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2608`](../source/grammar.t.html#2608)]`



'pull' multiDobj  



`VerbRule(Purloin)      `*`// original source text`*  

`grammar `**[`VerbRule(Purloin)`](../object/VerbRule(Purloin).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3458`](../source/grammar.t.html#3458)]`



('purloin' \| 'pn') singleDobj  



`VerbRule(Push)      `*`// original source text`*  

`grammar `**[`VerbRule(Push)`](../object/VerbRule(Push).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2600`](../source/grammar.t.html#2600)]`



('push' \| 'press') multiDobj  



`VerbRule(PushTravelClimbDown)      `*`// original source text`*  

`grammar `**[`VerbRule(PushTravelClimbDown)`](../object/VerbRule(PushTravelClimbDown).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3379`](../source/grammar.t.html#3379)]`



('push' \| 'pull' \| 'drag' \| 'move') singleDobj  
'down' singleIobj  



`VerbRule(PushTravelClimbUp)      `*`// original source text`*  

`grammar `**[`VerbRule(PushTravelClimbUp)`](../object/VerbRule(PushTravelClimbUp).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3370`](../source/grammar.t.html#3370)]`



('push' \| 'pull' \| 'drag' \| 'move') singleDobj  
'up' singleIobj  



`VerbRule(PushTravelDir)      `*`// original source text`*  

`grammar `**[`VerbRule(PushTravelDir)`](../object/VerbRule(PushTravelDir).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3336`](../source/grammar.t.html#3336)]`



('push' \| 'pull' \| 'drag' \| 'move') singleDobj singleDir  



`VerbRule(PushTravelEnter)      `*`// original source text`*  

`grammar `**[`VerbRule(PushTravelEnter)`](../object/VerbRule(PushTravelEnter).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3351`](../source/grammar.t.html#3351)]`



('push' \| 'pull' \| 'drag' \| 'move') singleDobj  
('in' \| 'into' \| 'in' 'to') singleIobj  



`VerbRule(PushTravelGetOutOf)      `*`// original source text`*  

`grammar `**[`VerbRule(PushTravelGetOutOf)`](../object/VerbRule(PushTravelGetOutOf).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3360`](../source/grammar.t.html#3360)]`



('push' \| 'pull' \| 'drag' \| 'move') singleDobj  
'out' ('of' \| ) singleIobj  



`VerbRule(PushTravelThrough)      `*`// original source text`*  

`grammar `**[`VerbRule(PushTravelThrough)`](../object/VerbRule(PushTravelThrough).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3342`](../source/grammar.t.html#3342)]`



('push' \| 'pull' \| 'drag' \| 'move') singleDobj  
('through' \| 'thru') singleIobj  



`VerbRule(PutBehind)      `*`// original source text`*  

`grammar `**[`VerbRule(PutBehind)`](../object/VerbRule(PutBehind).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`1687`](../source/grammar.t.html#1687)]`



('put' \| 'place' \| 'set') multiDobj 'behind' singleIobj  



`VerbRule(PutIn)      `*`// original source text`*  

`grammar `**[`VerbRule(PutIn)`](../object/VerbRule(PutIn).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`1657`](../source/grammar.t.html#1657)]`



('put' \| 'place' \| 'set' \| 'insert') multiDobj  
('in' \| 'into' \| 'in' 'to' \| 'inside' \| 'inside' 'of') singleIobj  



`VerbRule(PutOn)      `*`// original source text`*  

`grammar `**[`VerbRule(PutOn)`](../object/VerbRule(PutOn).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`1667`](../source/grammar.t.html#1667)]`



('put' \| 'place' \| 'drop' \| 'set') multiDobj  
('on' \| 'onto' \| 'on' 'to' \| 'upon') singleIobj  
\| 'put' multiDobj 'down' 'on' singleIobj  



`VerbRule(PutUnder)      `*`// original source text`*  

`grammar `**[`VerbRule(PutUnder)`](../object/VerbRule(PutUnder).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`1678`](../source/grammar.t.html#1678)]`



('put' \| 'place' \| 'set') multiDobj 'under' singleIobj  



`VerbRule(PutWhere)      `*`// original source text`*  

`grammar `**[`VerbRule(PutWhere)`](../object/VerbRule(PutWhere).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`1696`](../source/grammar.t.html#1696)]`



\[badness 500\] ('put' \| 'place') multiDobj  



`VerbRule(Query)      `*`// original source text`*  

`grammar `**[`VerbRule(Query)`](../object/VerbRule(Query).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`1765`](../source/grammar.t.html#1765)]`



('a' \| 'ask') ('what' -\>qtype \| 'who' -\>qtype \| 'where' -\> qtype
\| 'why'  
-\>qtype \| 'when' -\> qtype\| 'how' -\> qtype \| 'whether' -\>  
qtype \| 'if' -\> qtype) topicDobj  



`VerbRule(Query2)      `*`// original source text`*  

`grammar `**[`VerbRule(Query2)`](../object/VerbRule(Query2).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`1776`](../source/grammar.t.html#1776)]`



('what' -\>qtype \| 'who' -\>qtype \| 'where' -\> qtype \| 'why'  
-\>qtype \| 'when' -\> qtype\| 'how' -\> qtype) topicDobj  



`VerbRule(QueryAbout)      `*`// original source text`*  

`grammar `**[`VerbRule(QueryAbout)`](../object/VerbRule(QueryAbout).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`1786`](../source/grammar.t.html#1786)]`



('a' \| 'ask') singleDobj ('what' -\>qtype \| 'who' -\>qtype \|  
'where' -\> qtype \| 'why'  
-\>qtype \| 'when' -\> qtype\| 'how' -\> qtype \| 'whether' -\>  
qtype \| 'if' -\> qtype) topicIobj  



`VerbRule(QueryVague)      `*`// original source text`*  

`grammar `**[`VerbRule(QueryVague)`](../object/VerbRule(QueryVague).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`1798`](../source/grammar.t.html#1798)]`



('a' \| 'ask'\|) ('what' -\>qType \| 'who' -\>qtype \| 'where' -\> qtype
\| 'why'  
-\>qType \| 'when' -\> qtype\| 'how' -\> qtype \| 'whether' -\>  
qtype \| 'if' -\> qtype)  



`VerbRule(Quit)      `*`// original source text`*  

`grammar `**[`VerbRule(Quit)`](../object/VerbRule(Quit).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2271`](../source/grammar.t.html#2271)]`



'quit' \| 'q'  



`VerbRule(Read)      `*`// original source text`*  

`grammar `**[`VerbRule(Read)`](../object/VerbRule(Read).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`1562`](../source/grammar.t.html#1562)]`



'read' multiDobj  



`VerbRule(Record)      `*`// original source text`*  

`grammar `**[`VerbRule(Record)`](../object/VerbRule(Record).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2405`](../source/grammar.t.html#2405)]`



'record' \| 'record' 'on'  



`VerbRule(RecordEvents)      `*`// original source text`*  

`grammar `**[`VerbRule(RecordEvents)`](../object/VerbRule(RecordEvents).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2419`](../source/grammar.t.html#2419)]`



'record' 'events' \| 'record' 'events' 'on'  



`VerbRule(RecordEventsString)      `*`// original source text`*  

`grammar `**[`VerbRule(RecordEventsString)`](../object/VerbRule(RecordEventsString).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2426`](../source/grammar.t.html#2426)]`



'record' 'events' quotedStringPhrase-\>fname\_  



`VerbRule(RecordOff)      `*`// original source text`*  

`grammar `**[`VerbRule(RecordOff)`](../object/VerbRule(RecordOff).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2433`](../source/grammar.t.html#2433)]`



'record' 'off'  



`VerbRule(RecordString)      `*`// original source text`*  

`grammar `**[`VerbRule(RecordString)`](../object/VerbRule(RecordString).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2412`](../source/grammar.t.html#2412)]`



'record' quotedStringPhrase-\>fname\_  



`VerbRule(RelationDetails)      `*`// original source text`*  

`grammar `**[`VerbRule(RelationDetails)`](../object/VerbRule(RelationDetails).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`relations.t`](../file/relations.t.html) [`[`935`](../source/relations.t.html#935)]`



('relation' \| 'relations' \| 'rel') literalDobj  



`VerbRule(Remove)      `*`// original source text`*  

`grammar `**[`VerbRule(Remove)`](../object/VerbRule(Remove).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`1522`](../source/grammar.t.html#1522)]`



'remove' multiDobj  



`VerbRule(ReplayQuiet)      `*`// original source text`*  

`grammar `**[`VerbRule(ReplayQuiet)`](../object/VerbRule(ReplayQuiet).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2451`](../source/grammar.t.html#2451)]`



'rq' (quotedStringPhrase-\>fname\_ \| )  



`VerbRule(ReplayString)      `*`// original source text`*  

`grammar `**[`VerbRule(ReplayString)`](../object/VerbRule(ReplayString).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2440`](../source/grammar.t.html#2440)]`



'replay' ('quiet'-\>quiet\_ \| 'nonstop'-\>nonstop\_ \| )  
(quotedStringPhrase-\>fname\_ \| )  



`VerbRule(Restart)      `*`// original source text`*  

`grammar `**[`VerbRule(Restart)`](../object/VerbRule(Restart).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2349`](../source/grammar.t.html#2349)]`



'restart'  



`VerbRule(Restore)      `*`// original source text`*  

`grammar `**[`VerbRule(Restore)`](../object/VerbRule(Restore).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2334`](../source/grammar.t.html#2334)]`



'restore'  



`VerbRule(RestoreString)      `*`// original source text`*  

`grammar `**[`VerbRule(RestoreString)`](../object/VerbRule(RestoreString).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2341`](../source/grammar.t.html#2341)]`



'restore' quotedStringPhrase-\>fname\_  



`VerbRule(Sample)      `*`// original source text`*  

`grammar `**[`VerbRule(Sample)`](../object/VerbRule(Sample).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`newbie.t`](../file/newbie.t.html) [`[`643`](../source/newbie.t.html#643)]`



('show'\|'view'\|) 'sample' ('transcript' \| )  



`VerbRule(Save)      `*`// original source text`*  

`grammar `**[`VerbRule(Save)`](../object/VerbRule(Save).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2320`](../source/grammar.t.html#2320)]`



'save'  



`VerbRule(SaveString)      `*`// original source text`*  

`grammar `**[`VerbRule(SaveString)`](../object/VerbRule(SaveString).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2327`](../source/grammar.t.html#2327)]`



'save' quotedStringPhrase-\>fname\_  



`VerbRule(Say)      `*`// original source text`*  

`grammar `**[`VerbRule(Say)`](../object/VerbRule(Say).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2110`](../source/grammar.t.html#2110)]`



'say' ('that' \|) topicDobj  



`VerbRule(SayTo)      `*`// original source text`*  

`grammar `**[`VerbRule(SayTo)`](../object/VerbRule(SayTo).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2118`](../source/grammar.t.html#2118)]`



'say' ('that' \|) topicIobj 'to' singleDobj  



`VerbRule(Score)      `*`// original source text`*  

`grammar `**[`VerbRule(Score)`](../object/VerbRule(Score).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2285`](../source/grammar.t.html#2285)]`



'score' \| 'status'  



`VerbRule(Screw)      `*`// original source text`*  

`grammar `**[`VerbRule(Screw)`](../object/VerbRule(Screw).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3300`](../source/grammar.t.html#3300)]`



'screw' multiDobj  



`VerbRule(ScrewWith)      `*`// original source text`*  

`grammar `**[`VerbRule(ScrewWith)`](../object/VerbRule(ScrewWith).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3308`](../source/grammar.t.html#3308)]`



'screw' multiDobj 'with' singleIobj  



`VerbRule(ScriptOff)      `*`// original source text`*  

`grammar `**[`VerbRule(ScriptOff)`](../object/VerbRule(ScriptOff).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2398`](../source/grammar.t.html#2398)]`



'script' 'off' \| 'unscript'  



`VerbRule(ScriptOn)      `*`// original source text`*  

`grammar `**[`VerbRule(ScriptOn)`](../object/VerbRule(ScriptOn).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2384`](../source/grammar.t.html#2384)]`



'script' \| 'script' 'on'  



`VerbRule(ScriptString)      `*`// original source text`*  

`grammar `**[`VerbRule(ScriptString)`](../object/VerbRule(ScriptString).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2391`](../source/grammar.t.html#2391)]`



'script' quotedStringPhrase-\>fname\_  



`VerbRule(Search)      `*`// original source text`*  

`grammar `**[`VerbRule(Search)`](../object/VerbRule(Search).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`1579`](../source/grammar.t.html#1579)]`



'search' multiDobj  



`VerbRule(Seek)      `*`// original source text`*  

`grammar `**[`VerbRule(Seek)`](../object/VerbRule(Seek).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`newbie.t`](../file/newbie.t.html) [`[`1056`](../source/newbie.t.html#1056)]`



('seek' \| ('hunt' 'for')) topicDobj  



`VerbRule(Set)      `*`// original source text`*  

`grammar `**[`VerbRule(Set)`](../object/VerbRule(Set).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2671`](../source/grammar.t.html#2671)]`



'set' multiDobj  



`VerbRule(SetTo)      `*`// original source text`*  

`grammar `**[`VerbRule(SetTo)`](../object/VerbRule(SetTo).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2679`](../source/grammar.t.html#2679)]`



'set' singleDobj 'to' literalIobj  



`VerbRule(ShowTo)      `*`// original source text`*  

`grammar `**[`VerbRule(ShowTo)`](../object/VerbRule(ShowTo).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2078`](../source/grammar.t.html#2078)]`



'show' multiDobj 'to' singleIobj  



`VerbRule(ShowToImplicit)      `*`// original source text`*  

`grammar `**[`VerbRule(ShowToImplicit)`](../object/VerbRule(ShowToImplicit).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2099`](../source/grammar.t.html#2099)]`



'show' multiDobj  



`VerbRule(ShowToType2)      `*`// original source text`*  

`grammar `**[`VerbRule(ShowToType2)`](../object/VerbRule(ShowToType2).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2087`](../source/grammar.t.html#2087)]`



'show' singleIobj multiDobj  



`VerbRule(Sit)      `*`// original source text`*  

`grammar `**[`VerbRule(Sit)`](../object/VerbRule(Sit).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3097`](../source/grammar.t.html#3097)]`



'sit' ( \| 'down')



`VerbRule(SitIn)      `*`// original source text`*  

`grammar `**[`VerbRule(SitIn)`](../object/VerbRule(SitIn).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3087`](../source/grammar.t.html#3087)]`



'sit' ('in' \| 'down' 'in')  
singleDobj  



`VerbRule(SitOn)      `*`// original source text`*  

`grammar `**[`VerbRule(SitOn)`](../object/VerbRule(SitOn).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3077`](../source/grammar.t.html#3077)]`



'sit' ('on' \| 'down' 'on' )  
singleDobj  



`VerbRule(Sleep)      `*`// original source text`*  

`grammar `**[`VerbRule(Sleep)`](../object/VerbRule(Sleep).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3209`](../source/grammar.t.html#3209)]`



'sleep'  



`VerbRule(Smell)      `*`// original source text`*  

`grammar `**[`VerbRule(Smell)`](../object/VerbRule(Smell).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`1635`](../source/grammar.t.html#1635)]`



'smell' \| 'sniff'  



`VerbRule(SmellSomething)      `*`// original source text`*  

`grammar `**[`VerbRule(SmellSomething)`](../object/VerbRule(SmellSomething).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`1627`](../source/grammar.t.html#1627)]`



('smell' \| 'sniff') multiDobj  



`VerbRule(Stand)      `*`// original source text`*  

`grammar `**[`VerbRule(Stand)`](../object/VerbRule(Stand).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3148`](../source/grammar.t.html#3148)]`



'stand' \| 'stand' 'up' \| 'get' 'up'  



`VerbRule(StandIn)      `*`// original source text`*  

`grammar `**[`VerbRule(StandIn)`](../object/VerbRule(StandIn).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3139`](../source/grammar.t.html#3139)]`



'stand' ('in' \| 'into' \| 'in' 'to') singleDobj  



`VerbRule(StandOn)      `*`// original source text`*  

`grammar `**[`VerbRule(StandOn)`](../object/VerbRule(StandOn).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3130`](../source/grammar.t.html#3130)]`



'stand' ('on' \| 'onto' \| 'on' 'to' ) singleDobj  



`VerbRule(Strike)      `*`// original source text`*  

`grammar `**[`VerbRule(Strike)`](../object/VerbRule(Strike).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2822`](../source/grammar.t.html#2822)]`



'strike' multiDobj  



`VerbRule(Switch)      `*`// original source text`*  

`grammar `**[`VerbRule(Switch)`](../object/VerbRule(Switch).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2778`](../source/grammar.t.html#2778)]`



'switch' multiDobj  



`VerbRule(SwitchOff)      `*`// original source text`*  

`grammar `**[`VerbRule(SwitchOff)`](../object/VerbRule(SwitchOff).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2804`](../source/grammar.t.html#2804)]`



('deactivate' \| ('turn' \| 'switch') 'off') multiDobj  
\| ('turn' \| 'switch') multiDobj 'off'  



`VerbRule(SwitchOn)      `*`// original source text`*  

`grammar `**[`VerbRule(SwitchOn)`](../object/VerbRule(SwitchOn).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2794`](../source/grammar.t.html#2794)]`



('activate' \| ('turn' \| 'switch') 'on') multiDobj  
\| ('turn' \| 'switch') multiDobj 'on'  



`VerbRule(Take)      `*`// original source text`*  

`grammar `**[`VerbRule(Take)`](../object/VerbRule(Take).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`1503`](../source/grammar.t.html#1503)]`



('take' \| 'pick' 'up' \| 'get') multiDobj  
\| 'pick' multiDobj 'up'  



`VerbRule(TakeFrom)      `*`// original source text`*  

`grammar `**[`VerbRule(TakeFrom)`](../object/VerbRule(TakeFrom).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`1512`](../source/grammar.t.html#1512)]`



('take' \| 'get') multiDobj  
('from' \| 'out' 'of' \| 'off' \| 'off' 'of') singleIobj  
\| 'remove' multiDobj 'from' singleIobj  



`VerbRule(TalkAbout)      `*`// original source text`*  

`grammar `**[`VerbRule(TalkAbout)`](../object/VerbRule(TalkAbout).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`1954`](../source/grammar.t.html#1954)]`



'talk' 'to' singleDobj 'about' topicIobj  



`VerbRule(TalkAboutImplicit)      `*`// original source text`*  

`grammar `**[`VerbRule(TalkAboutImplicit)`](../object/VerbRule(TalkAboutImplicit).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`1964`](../source/grammar.t.html#1964)]`



'talk' 'about' topicIobj  



`VerbRule(TalkTo)      `*`// original source text`*  

`grammar `**[`VerbRule(TalkTo)`](../object/VerbRule(TalkTo).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`1990`](../source/grammar.t.html#1990)]`



('greet' \| 'say' 'hello' 'to' \| 'talk' 'to') singleDobj  



`VerbRule(Taste)      `*`// original source text`*  

`grammar `**[`VerbRule(Taste)`](../object/VerbRule(Taste).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`1619`](../source/grammar.t.html#1619)]`



'taste' multiDobj  



`VerbRule(TellAbout)      `*`// original source text`*  

`grammar `**[`VerbRule(TellAbout)`](../object/VerbRule(TellAbout).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`1912`](../source/grammar.t.html#1912)]`



('tell' \| 't') singleDobj 'about' topicIobj  



`VerbRule(TellAboutImplicit)      `*`// original source text`*  

`grammar `**[`VerbRule(TellAboutImplicit)`](../object/VerbRule(TellAboutImplicit).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`1922`](../source/grammar.t.html#1922)]`



('t' \| 'tell' 'about') topicIobj  



`VerbRule(TellAboutWhat)      `*`// original source text`*  

`grammar `**[`VerbRule(TellAboutWhat)`](../object/VerbRule(TellAboutWhat).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`1931`](../source/grammar.t.html#1931)]`



\[badness 500\] 'tell' singleDobj  



`VerbRule(TellThat)      `*`// original source text`*  

`grammar `**[`VerbRule(TellThat)`](../object/VerbRule(TellThat).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2126`](../source/grammar.t.html#2126)]`



'tell' singleDobj 'that' topicIobj  



`VerbRule(TellTo)      `*`// original source text`*  

`grammar `**[`VerbRule(TellTo)`](../object/VerbRule(TellTo).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`1945`](../source/grammar.t.html#1945)]`



'tell' singleDobj 'to' literalIobj  



`VerbRule(TellVague)      `*`// original source text`*  

`grammar `**[`VerbRule(TellVague)`](../object/VerbRule(TellVague).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`1981`](../source/grammar.t.html#1981)]`



('tell'\|'t') singleDobj topicIobj  



`VerbRule(Test)      `*`// original source text`*  

`grammar `**[`VerbRule(Test)`](../object/VerbRule(Test).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`debug.t`](../file/debug.t.html) [`[`466`](../source/debug.t.html#466)]`



'test' literalDobj  



`VerbRule(Think)      `*`// original source text`*  

`grammar `**[`VerbRule(Think)`](../object/VerbRule(Think).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2134`](../source/grammar.t.html#2134)]`



'think' \| 'ponder' \| 'cogitate'  



`VerbRule(ThinkAbout)      `*`// original source text`*  

`grammar `**[`VerbRule(ThinkAbout)`](../object/VerbRule(ThinkAbout).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2141`](../source/grammar.t.html#2141)]`



('think' \| 'ponder' \| 'cogitate') 'about' topicDobj  



`VerbRule(Throw)      `*`// original source text`*  

`grammar `**[`VerbRule(Throw)`](../object/VerbRule(Throw).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2150`](../source/grammar.t.html#2150)]`



('throw' \| 'toss') multiDobj  



`VerbRule(ThrowAt)      `*`// original source text`*  

`grammar `**[`VerbRule(ThrowAt)`](../object/VerbRule(ThrowAt).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2158`](../source/grammar.t.html#2158)]`



('throw' \| 'toss') multiDobj 'at' singleIobj  



`VerbRule(ThrowDir)      `*`// original source text`*  

`grammar `**[`VerbRule(ThrowDir)`](../object/VerbRule(ThrowDir).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2188`](../source/grammar.t.html#2188)]`



('throw' \| 'toss') multiDobj ('to' ('the' \| ) \| ) singleDir  



`VerbRule(ThrowDirDown)      `*`// original source text`*  

`grammar `**[`VerbRule(ThrowDirDown)`](../object/VerbRule(ThrowDirDown).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2198`](../source/grammar.t.html#2198)]`



'throw' ('down' \| 'd') multiDobj  



`VerbRule(ThrowTo)      `*`// original source text`*  

`grammar `**[`VerbRule(ThrowTo)`](../object/VerbRule(ThrowTo).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2167`](../source/grammar.t.html#2167)]`



('throw' \| 'toss') multiDobj 'to' singleIobj  



`VerbRule(ThrowToType2)      `*`// original source text`*  

`grammar `**[`VerbRule(ThrowToType2)`](../object/VerbRule(ThrowToType2).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2176`](../source/grammar.t.html#2176)]`



'throw' singleIobj multiDobj  



`VerbRule(Topics)      `*`// original source text`*  

`grammar `**[`VerbRule(Topics)`](../object/VerbRule(Topics).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`1999`](../source/grammar.t.html#1999)]`



'topics'  



`VerbRule(Travel)      `*`// original source text`*  

`grammar `**[`VerbRule(Travel)`](../object/VerbRule(Travel).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2486`](../source/grammar.t.html#2486)]`



(('go' \| 'walk' \| 'run') singleDir) \| singleDir  



`VerbRule(Turn)      `*`// original source text`*  

`grammar `**[`VerbRule(Turn)`](../object/VerbRule(Turn).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2643`](../source/grammar.t.html#2643)]`



('turn' \| 'twist' \| 'rotate') multiDobj  



`VerbRule(TurnTo)      `*`// original source text`*  

`grammar `**[`VerbRule(TurnTo)`](../object/VerbRule(TurnTo).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2661`](../source/grammar.t.html#2661)]`



('turn' \| 'twist' \| 'rotate') singleDobj  
'to' literalIobj  



`VerbRule(TurnWith)      `*`// original source text`*  

`grammar `**[`VerbRule(TurnWith)`](../object/VerbRule(TurnWith).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2651`](../source/grammar.t.html#2651)]`



('turn' \| 'twist' \| 'rotate') singleDobj 'with' singleIobj  



`VerbRule(TypeLiteralOn)      `*`// original source text`*  

`grammar `**[`VerbRule(TypeLiteralOn)`](../object/VerbRule(TypeLiteralOn).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2696`](../source/grammar.t.html#2696)]`



'type' literalDobj 'on' singleIobj  



`VerbRule(TypeLiteralOnWhat)      `*`// original source text`*  

`grammar `**[`VerbRule(TypeLiteralOnWhat)`](../object/VerbRule(TypeLiteralOnWhat).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2705`](../source/grammar.t.html#2705)]`



\[badness 500\] 'type' literalDobj  



`VerbRule(TypeOn)      `*`// original source text`*  

`grammar `**[`VerbRule(TypeOn)`](../object/VerbRule(TypeOn).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2688`](../source/grammar.t.html#2688)]`



'type' 'on' singleDobj  



`VerbRule(Undo)      `*`// original source text`*  

`grammar `**[`VerbRule(Undo)`](../object/VerbRule(Undo).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2356`](../source/grammar.t.html#2356)]`



'undo'  



`VerbRule(Unfasten)      `*`// original source text`*  

`grammar `**[`VerbRule(Unfasten)`](../object/VerbRule(Unfasten).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3234`](../source/grammar.t.html#3234)]`



('unfasten' \| 'unbuckle') multiDobj  



`VerbRule(UnfastenFrom)      `*`// original source text`*  

`grammar `**[`VerbRule(UnfastenFrom)`](../object/VerbRule(UnfastenFrom).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3242`](../source/grammar.t.html#3242)]`



('unfasten' \| 'unbuckle') multiDobj 'from' singleIobj  



`VerbRule(Unlock)      `*`// original source text`*  

`grammar `**[`VerbRule(Unlock)`](../object/VerbRule(Unlock).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3049`](../source/grammar.t.html#3049)]`



'unlock' multiDobj  



`VerbRule(UnlockWith)      `*`// original source text`*  

`grammar `**[`VerbRule(UnlockWith)`](../object/VerbRule(UnlockWith).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3067`](../source/grammar.t.html#3067)]`



'unlock' singleDobj 'with' singleIobj  



`VerbRule(Unplug)      `*`// original source text`*  

`grammar `**[`VerbRule(Unplug)`](../object/VerbRule(Unplug).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3292`](../source/grammar.t.html#3292)]`



'unplug' multiDobj  



`VerbRule(UnplugFrom)      `*`// original source text`*  

`grammar `**[`VerbRule(UnplugFrom)`](../object/VerbRule(UnplugFrom).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3283`](../source/grammar.t.html#3283)]`



'unplug' multiDobj 'from' singleIobj  



`VerbRule(Unscrew)      `*`// original source text`*  

`grammar `**[`VerbRule(Unscrew)`](../object/VerbRule(Unscrew).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3318`](../source/grammar.t.html#3318)]`



'unscrew' multiDobj  



`VerbRule(UnscrewWith)      `*`// original source text`*  

`grammar `**[`VerbRule(UnscrewWith)`](../object/VerbRule(UnscrewWith).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3326`](../source/grammar.t.html#3326)]`



'unscrew' multiDobj 'with' singleIobj  



`VerbRule(VagueTravel)      `*`// original source text`*  

`grammar `**[`VerbRule(VagueTravel)`](../object/VerbRule(VagueTravel).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2477`](../source/grammar.t.html#2477)]`



'go' \| 'walk' \| 'run'  



`VerbRule(Verbose)      `*`// original source text`*  

`grammar `**[`VerbRule(Verbose)`](../object/VerbRule(Verbose).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`3448`](../source/grammar.t.html#3448)]`



'verbose' \| 'wordy'  



`VerbRule(Version)      `*`// original source text`*  

`grammar `**[`VerbRule(Version)`](../object/VerbRule(Version).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2363`](../source/grammar.t.html#2363)]`



'version'  



`VerbRule(Wait)      `*`// original source text`*  

`grammar `**[`VerbRule(Wait)`](../object/VerbRule(Wait).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2257`](../source/grammar.t.html#2257)]`



'z' \| 'wait'  



`VerbRule(Wear)      `*`// original source text`*  

`grammar `**[`VerbRule(Wear)`](../object/VerbRule(Wear).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`1739`](../source/grammar.t.html#1739)]`



('wear' \| 'don' \| 'put' 'on') multiDobj  
\| 'put' multiDobj 'on'  



`VerbRule(WhatAmICarrying)      `*`// original source text`*  

`grammar `**[`VerbRule(WhatAmICarrying)`](../object/VerbRule(WhatAmICarrying).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`newbie.t`](../file/newbie.t.html) [`[`693`](../source/newbie.t.html#693)]`



'what' ('am'\|'are') ('i'\|'we'\|'you') ('carrying' \| 'holding')  
\| 'what' 'do' ('i'\|'we'\|'you') 'have'  
\| 'what' 'have' ('i'\|'we'\|'you') 'got'  



`VerbRule(WhatIsNoun)      `*`// original source text`*  

`grammar `**[`VerbRule(WhatIsNoun)`](../object/VerbRule(WhatIsNoun).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`newbie.t`](../file/newbie.t.html) [`[`657`](../source/newbie.t.html#657)]`



('whats' \| 'what' ('is'\|'are')) multiDobj  



`VerbRule(WhatNext)      `*`// original source text`*  

`grammar `**[`VerbRule(WhatNext)`](../object/VerbRule(WhatNext).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`newbie.t`](../file/newbie.t.html) [`[`603`](../source/newbie.t.html#603)]`



'what' ('next' \| 'now') \|  
'what' ('should' \| 'can' \| 'do' \| 'does' \| 'am' \| 'is')  
('i' \| 'one' \|'anyone' \| 'someone')  
(('meant' 'to')\|) ('do' \| 'try') ('next' \| 'now'\|)  



`VerbRule(WhatsHere)      `*`// original source text`*  

`grammar `**[`VerbRule(WhatsHere)`](../object/VerbRule(WhatsHere).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`newbie.t`](../file/newbie.t.html) [`[`818`](../source/newbie.t.html#818)]`



'what' 'is' 'here'  
\| 'whats' 'here'  



`VerbRule(WhatsThePoint)      `*`// original source text`*  

`grammar `**[`VerbRule(WhatsThePoint)`](../object/VerbRule(WhatsThePoint).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`newbie.t`](../file/newbie.t.html) [`[`724`](../source/newbie.t.html#724)]`



('whats' \| 'what' 'is') ('the'\|) ('point' \| 'idea' \| 'goal' \|
'purpose')  
(literalDobj \| )  



`VerbRule(WhatThisGame)      `*`// original source text`*  

`grammar `**[`VerbRule(WhatThisGame)`](../object/VerbRule(WhatThisGame).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`newbie.t`](../file/newbie.t.html) [`[`741`](../source/newbie.t.html#741)]`



('whats' \| 'what' ('is'\|'are')) ('the' \| 'these' \| 'this' \|)  
('game' \| 'story' \| 'program' \| 'games' \| ('interactive'
'fiction'))  
('for' \| 'about' \| )  



`VerbRule(WhereAmI)      `*`// original source text`*  

`grammar `**[`VerbRule(WhereAmI)`](../object/VerbRule(WhereAmI).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`newbie.t`](../file/newbie.t.html) [`[`808`](../source/newbie.t.html#808)]`



'where' ('are' \| 'am' \| 'is') ('i' \| 'we')  



`VerbRule(WhereGo)      `*`// original source text`*  

`grammar `**[`VerbRule(WhereGo)`](../object/VerbRule(WhereGo).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`newbie.t`](../file/newbie.t.html) [`[`869`](../source/newbie.t.html#869)]`



'where' ('can' \| 'do' \| 'does' \| 'should') ('i' \| 'we' \| 'one'\|
'anyone')  
'go'  



`VerbRule(WhereHelp)      `*`// original source text`*  

`grammar `**[`VerbRule(WhereHelp)`](../object/VerbRule(WhereHelp).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`newbie.t`](../file/newbie.t.html) [`[`557`](../source/newbie.t.html#557)]`



'where' ('can' \| 'do' \| 'does' \| 'should')  
('i' \| 'we' \| 'one' \| 'anyone'\| 'someone')  
('get' \| 'find' \| 'obtain')  
('help' \| 'assistance' \| 'instructions')  
(literalDobj \| )  



`VerbRule(WhoAmI)      `*`// original source text`*  

`grammar `**[`VerbRule(WhoAmI)`](../object/VerbRule(WhoAmI).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`newbie.t`](../file/newbie.t.html) [`[`846`](../source/newbie.t.html#846)]`



('who'\| 'what') ('am'\|'is') ('i'\|'me')  



`VerbRule(Write)      `*`// original source text`*  

`grammar `**[`VerbRule(Write)`](../object/VerbRule(Write).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2733`](../source/grammar.t.html#2733)]`



'write' literalDobj  



`VerbRule(WriteOn)      `*`// original source text`*  

`grammar `**[`VerbRule(WriteOn)`](../object/VerbRule(WriteOn).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2724`](../source/grammar.t.html#2724)]`



'write' literalDobj ('on' \| 'in') singleIobj  



`VerbRule(Yell)      `*`// original source text`*  

`grammar `**[`VerbRule(Yell)`](../object/VerbRule(Yell).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2040`](../source/grammar.t.html#2040)]`



'yell' \| 'scream' \| 'shout' \| 'holler'  



`VerbRule(Yes)      `*`// original source text`*  

`grammar `**[`VerbRule(Yes)`](../object/VerbRule(Yes).html)**` :   [`VerbProduction`](../object/VerbProduction.html)      `*`// after macro expansion`*

[`grammar.t`](../file/grammar.t.html) [`[`2022`](../source/grammar.t.html#2022)]`



'yes' \| 'affirmative' \| 'say' 'yes'  
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


