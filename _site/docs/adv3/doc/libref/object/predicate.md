<span class="title">predicate</span><span class="type">GrammarProd</span>

`VerbRule(About)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(About)`](../object/predicate(About).html)</span>` :   `[`AboutAction`](../object/AboutAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9919`](../source/en_us.t.html#9919)`]`

<div class="gramrule">

'about'  

</div>

`VerbRule(Again)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Again)`](../object/predicate(Again).html)</span>` :   `[`AgainAction`](../object/AgainAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9757`](../source/en_us.t.html#9757)`]`

<div class="gramrule">

'again' \| 'g'  

</div>

`VerbRule(AskAbout)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(AskAbout)`](../object/predicate(AskAbout).html)</span>` :   `[`AskAboutAction`](../object/AskAboutAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9453`](../source/en_us.t.html#9453)`]`

<div class="gramrule">

('ask' \| 'a') singleDobj 'about' singleTopic  

</div>

`VerbRule(AskAboutImplicit)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(AskAboutImplicit)`](../object/predicate(AskAboutImplicit).html)</span>` :   `[`AskAboutAction`](../object/AskAboutAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9461`](../source/en_us.t.html#9461)`]`

<div class="gramrule">

'a' singleTopic  

</div>

`VerbRule(AskAboutWhat)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(AskAboutWhat)`](../object/predicate(AskAboutWhat).html)</span>` :   `[`AskAboutAction`](../object/AskAboutAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9474`](../source/en_us.t.html#9474)`]`

<div class="gramrule">

\[badness 500\] 'ask' singleDobj  

</div>

`VerbRule(AskFor)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(AskFor)`](../object/predicate(AskFor).html)</span>` :   `[`AskForAction`](../object/AskForAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9430`](../source/en_us.t.html#9430)`]`

<div class="gramrule">

('ask' \| 'a') singleDobj 'for' singleTopic  
\| ('ask' \| 'a') 'for' singleTopic 'from' singleDobj  

</div>

`VerbRule(AskVague)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(AskVague)`](../object/predicate(AskVague).html)</span>` :   `[`AskVagueAction`](../object/AskVagueAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9524`](../source/en_us.t.html#9524)`]`

<div class="gramrule">

\[badness 500\] 'ask' singleDobj singleTopic  

</div>

`VerbRule(AskWhomFor)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(AskWhomFor)`](../object/predicate(AskWhomFor).html)</span>` :   `[`AskForAction`](../object/AskForAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9440`](../source/en_us.t.html#9440)`]`

<div class="gramrule">

('ask' \| 'a') 'for' singleTopic  

</div>

`VerbRule(AttachTo)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(AttachTo)`](../object/predicate(AttachTo).html)</span>` :   `[`AttachToAction`](../object/AttachToAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10476`](../source/en_us.t.html#10476)`]`

<div class="gramrule">

('attach' \| 'connect') dobjList 'to' singleIobj  

</div>

`VerbRule(AttachToWhat)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(AttachToWhat)`](../object/predicate(AttachToWhat).html)</span>` :   `[`AttachToAction`](../object/AttachToAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10483`](../source/en_us.t.html#10483)`]`

<div class="gramrule">

\[badness 500\] ('attach' \| 'connect') dobjList  

</div>

`VerbRule(Attack)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Attack)`](../object/predicate(Attack).html)</span>` :   `[`AttackAction`](../object/AttackAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9704`](../source/en_us.t.html#9704)`]`

<div class="gramrule">

('attack' \| 'kill' \| 'hit' \| 'kick' \| 'punch') singleDobj  

</div>

`VerbRule(AttackWith)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(AttackWith)`](../object/predicate(AttackWith).html)</span>` :   `[`AttackWithAction`](../object/AttackWithAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9711`](../source/en_us.t.html#9711)`]`

<div class="gramrule">

('attack' \| 'kill' \| 'hit' \| 'kick' \| 'punch' \| 'strike')  
singleDobj  
'with' singleIobj  

</div>

`VerbRule(Board)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Board)`](../object/predicate(Board).html)</span>` :   `[`BoardAction`](../object/BoardAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10636`](../source/en_us.t.html#10636)`]`

<div class="gramrule">

('board'  
\| ('get' ('in' \| 'into' \| 'in' 'to' \| 'on' \| 'onto' \| 'on'
'to'))  
\| ('climb' ('in' \| 'into' \| 'in' 'to')))  
singleDobj  

</div>

`VerbRule(Break)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Break)`](../object/predicate(Break).html)</span>` :   `[`BreakAction`](../object/BreakAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10359`](../source/en_us.t.html#10359)`]`

<div class="gramrule">

('break' \| 'ruin' \| 'destroy' \| 'wreck') dobjList  

</div>

`VerbRule(Burn)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Burn)`](../object/predicate(Burn).html)</span>` :   `[`BurnAction`](../object/BurnAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10336`](../source/en_us.t.html#10336)`]`

<div class="gramrule">

('burn' \| 'ignite' \| 'set' 'fire' 'to') dobjList  

</div>

`VerbRule(BurnWith)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(BurnWith)`](../object/predicate(BurnWith).html)</span>` :   `[`BurnWithAction`](../object/BurnWithAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10342`](../source/en_us.t.html#10342)`]`

<div class="gramrule">

('light' \| 'burn' \| 'ignite' \| 'set' 'fire' 'to') singleDobj  
'with' singleIobj  

</div>

`VerbRule(Clean)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Clean)`](../object/predicate(Clean).html)</span>` :   `[`CleanAction`](../object/CleanAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10462`](../source/en_us.t.html#10462)`]`

<div class="gramrule">

'clean' dobjList  

</div>

`VerbRule(CleanWith)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(CleanWith)`](../object/predicate(CleanWith).html)</span>` :   `[`CleanWithAction`](../object/CleanWithAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10468`](../source/en_us.t.html#10468)`]`

<div class="gramrule">

'clean' dobjList 'with' singleIobj  

</div>

`VerbRule(Climb)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Climb)`](../object/predicate(Climb).html)</span>` :   `[`ClimbAction`](../object/ClimbAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10417`](../source/en_us.t.html#10417)`]`

<div class="gramrule">

'climb' singleDobj  

</div>

`VerbRule(ClimbDown)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(ClimbDown)`](../object/predicate(ClimbDown).html)</span>` :   `[`ClimbDownAction`](../object/ClimbDownAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10443`](../source/en_us.t.html#10443)`]`

<div class="gramrule">

('climb' \| 'go' \| 'walk') 'down' singleDobj  

</div>

`VerbRule(ClimbDownWhat)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(ClimbDownWhat)`](../object/predicate(ClimbDownWhat).html)</span>` :   `[`ClimbDownAction`](../object/ClimbDownAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10450`](../source/en_us.t.html#10450)`]`

<div class="gramrule">

\[badness 200\] ('climb' \| 'go' \| 'walk') 'down'  

</div>

`VerbRule(ClimbUp)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(ClimbUp)`](../object/predicate(ClimbUp).html)</span>` :   `[`ClimbUpAction`](../object/ClimbUpAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10424`](../source/en_us.t.html#10424)`]`

<div class="gramrule">

('climb' \| 'go' \| 'walk') 'up' singleDobj  

</div>

`VerbRule(ClimbUpWhat)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(ClimbUpWhat)`](../object/predicate(ClimbUpWhat).html)</span>` :   `[`ClimbUpAction`](../object/ClimbUpAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10431`](../source/en_us.t.html#10431)`]`

<div class="gramrule">

\[badness 200\] ('climb' \| 'go' \| 'walk') 'up'  

</div>

`VerbRule(Close)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Close)`](../object/predicate(Close).html)</span>` :   `[`CloseAction`](../object/CloseAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10514`](../source/en_us.t.html#10514)`]`

<div class="gramrule">

('close' \| 'shut') dobjList  

</div>

`VerbRule(Consult)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Consult)`](../object/predicate(Consult).html)</span>` :   `[`ConsultAction`](../object/ConsultAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10258`](../source/en_us.t.html#10258)`]`

<div class="gramrule">

'consult' singleDobj

</div>

`VerbRule(ConsultAbout)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(ConsultAbout)`](../object/predicate(ConsultAbout).html)</span>` :   `[`ConsultAboutAction`](../object/ConsultAboutAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10264`](../source/en_us.t.html#10264)`]`

<div class="gramrule">

'consult' singleDobj ('on' \| 'about') singleTopic  
\| 'search' singleDobj 'for' singleTopic  
\| (('look' \| 'l') ('up' \| 'for')  
\| 'find'  
\| 'search' 'for'  
\| 'read' 'about')  
singleTopic 'in' singleDobj  
\| ('look' \| 'l') singleTopic 'up' 'in' singleDobj  

</div>

`VerbRule(ConsultWhatAbout)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(ConsultWhatAbout)`](../object/predicate(ConsultWhatAbout).html)</span>` :   `[`ConsultAboutAction`](../object/ConsultAboutAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10279`](../source/en_us.t.html#10279)`]`

<div class="gramrule">

(('look' \| 'l') ('up' \| 'for')  
\| 'find'  
\| 'search' 'for'  
\| 'read' 'about')  
singleTopic  
\| ('look' \| 'l') singleTopic 'up'  

</div>

`VerbRule(Credits)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Credits)`](../object/predicate(Credits).html)</span>` :   `[`CreditsAction`](../object/CreditsAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9913`](../source/en_us.t.html#9913)`]`

<div class="gramrule">

'credits'  

</div>

`VerbRule(CutWith)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(CutWith)`](../object/predicate(CutWith).html)</span>` :   `[`CutWithAction`](../object/CutWithAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10377`](../source/en_us.t.html#10377)`]`

<div class="gramrule">

'cut' singleDobj 'with' singleIobj  

</div>

`VerbRule(CutWithWhat)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(CutWithWhat)`](../object/predicate(CutWithWhat).html)</span>` :   `[`CutWithAction`](../object/CutWithAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10365`](../source/en_us.t.html#10365)`]`

<div class="gramrule">

\[badness 500\] 'cut' singleDobj  

</div>

`VerbRule(Detach)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Detach)`](../object/predicate(Detach).html)</span>` :   `[`DetachAction`](../object/DetachAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10502`](../source/en_us.t.html#10502)`]`

<div class="gramrule">

('detach' \| 'disconnect') dobjList  

</div>

`VerbRule(DetachFrom)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(DetachFrom)`](../object/predicate(DetachFrom).html)</span>` :   `[`DetachFromAction`](../object/DetachFromAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10495`](../source/en_us.t.html#10495)`]`

<div class="gramrule">

('detach' \| 'disconnect') dobjList 'from' singleIobj  

</div>

`VerbRule(Dig)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Dig)`](../object/predicate(Dig).html)</span>` :   `[`DigAction`](../object/DigAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10064`](../source/en_us.t.html#10064)`]`

<div class="gramrule">

('dig' \| 'dig' 'in') singleDobj  

</div>

`VerbRule(DigWith)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(DigWith)`](../object/predicate(DigWith).html)</span>` :   `[`DigWithAction`](../object/DigWithAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10071`](../source/en_us.t.html#10071)`]`

<div class="gramrule">

('dig' \| 'dig' 'in') singleDobj 'with' singleIobj  

</div>

`VerbRule(Doff)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Doff)`](../object/predicate(Doff).html)</span>` :   `[`DoffAction`](../object/DoffAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9417`](../source/en_us.t.html#9417)`]`

<div class="gramrule">

('doff' \| 'take' 'off') dobjList  
\| 'take' dobjList 'off'  

</div>

`VerbRule(Drink)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Drink)`](../object/predicate(Drink).html)</span>` :   `[`DrinkAction`](../object/DrinkAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10391`](../source/en_us.t.html#10391)`]`

<div class="gramrule">

('drink' \| 'quaff' \| 'imbibe') dobjList  

</div>

`VerbRule(Drop)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Drop)`](../object/predicate(Drop).html)</span>` :   `[`DropAction`](../object/DropAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9269`](../source/en_us.t.html#9269)`]`

<div class="gramrule">

('drop' \| 'put' 'down' \| 'set' 'down') dobjList  
\| ('put' \| 'set') dobjList 'down'  

</div>

`VerbRule(Eat)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Eat)`](../object/predicate(Eat).html)</span>` :   `[`EatAction`](../object/EatAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10385`](../source/en_us.t.html#10385)`]`

<div class="gramrule">

('eat' \| 'consume') dobjList  

</div>

`grammar `<span class="classExtLink">[`predicate(EmptySpecialTopic)`](../object/predicate(EmptySpecialTopic).html)</span>` :   `[`IAction`](../object/IAction.html)

[`actions.t`](../file/actions.t.html)`[`[`2118`](../source/actions.t.html#2118)`]`

<div class="gramrule">

'xspcltopic'

</div>

`VerbRule(Enter)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Enter)`](../object/predicate(Enter).html)</span>` :   `[`EnterAction`](../object/EnterAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10049`](../source/en_us.t.html#10049)`]`

<div class="gramrule">

('enter' \| 'in' \| 'into' \| 'in' 'to'  
\| ('walk' \| 'go') ('to' \| 'in' \| 'in' 'to' \| 'into'))  
singleDobj  

</div>

`VerbRule(EnterOn)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(EnterOn)`](../object/predicate(EnterOn).html)</span>` :   `[`EnterOnAction`](../object/EnterOnAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10203`](../source/en_us.t.html#10203)`]`

<div class="gramrule">

'enter' singleLiteral  
('on' \| 'in' \| 'in' 'to' \| 'into' \| 'with') singleDobj  

</div>

`VerbRule(EnterOnWhat)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(EnterOnWhat)`](../object/predicate(EnterOnWhat).html)</span>` :   `[`EnterOnAction`](../object/EnterOnAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10211`](../source/en_us.t.html#10211)`]`

<div class="gramrule">

'enter' singleLiteral  

</div>

`VerbRule(Examine)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Examine)`](../object/predicate(Examine).html)</span>` :   `[`ExamineAction`](../object/ExamineAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9276`](../source/en_us.t.html#9276)`]`

<div class="gramrule">

('examine' \| 'inspect' \| 'x'  
\| 'look' 'at' \| 'l' 'at' \| 'look' \| 'l') dobjList  

</div>

`VerbRule(Exits)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Exits)`](../object/predicate(Exits).html)</span>` :   `[`ExitsAction`](../object/ExitsAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10788`](../source/en_us.t.html#10788)`]`

<div class="gramrule">

'exits'  

</div>

`VerbRule(ExitsMode)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(ExitsMode)`](../object/predicate(ExitsMode).html)</span>` :   `[`ExitsModeAction`](../object/ExitsModeAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10794`](../source/en_us.t.html#10794)`]`

<div class="gramrule">

'exits' ('on'-\>on\_ \| 'all'-\>on\_  
\| 'off'-\>off\_ \| 'none'-\>off\_  
\| ('status' ('line' \| ) \| 'statusline') 'look'-\>on\_  
\| 'look'-\>on\_ ('status' ('line' \| ) \| 'statusline')  
\| 'status'-\>stat\_ ('line' \| ) \| 'statusline'-\>stat\_  
\| 'look'-\>look\_)  

</div>

`VerbRule(Extinguish)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Extinguish)`](../object/predicate(Extinguish).html)</span>` :   `[`ExtinguishAction`](../object/ExtinguishAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10352`](../source/en_us.t.html#10352)`]`

<div class="gramrule">

('extinguish' \| 'douse' \| 'put' 'out' \| 'blow' 'out') dobjList  
\| ('blow' \| 'put') dobjList 'out'  

</div>

`VerbRule(Fasten)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Fasten)`](../object/predicate(Fasten).html)</span>` :   `[`FastenAction`](../object/FastenAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10652`](../source/en_us.t.html#10652)`]`

<div class="gramrule">

('fasten' \| 'buckle' \| 'buckle' 'up') dobjList  

</div>

`VerbRule(FastenTo)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(FastenTo)`](../object/predicate(FastenTo).html)</span>` :   `[`FastenToAction`](../object/FastenToAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10658`](../source/en_us.t.html#10658)`]`

<div class="gramrule">

('fasten' \| 'buckle') dobjList 'to' singleIobj  

</div>

`VerbRule(Feel)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Feel)`](../object/predicate(Feel).html)</span>` :   `[`FeelAction`](../object/FeelAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9319`](../source/en_us.t.html#9319)`]`

<div class="gramrule">

('feel' \| 'touch') dobjList  

</div>

`VerbRule(Flip)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Flip)`](../object/predicate(Flip).html)</span>` :   `[`FlipAction`](../object/FlipAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10303`](../source/en_us.t.html#10303)`]`

<div class="gramrule">

'flip' dobjList  

</div>

`VerbRule(Follow)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Follow)`](../object/predicate(Follow).html)</span>` :   `[`FollowAction`](../object/FollowAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9697`](../source/en_us.t.html#9697)`]`

<div class="gramrule">

'follow' singleDobj  

</div>

`VerbRule(Footnote)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Footnote)`](../object/predicate(Footnote).html)</span>` :   `[`FootnoteAction`](../object/FootnoteAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9763`](../source/en_us.t.html#9763)`]`

<div class="gramrule">

('footnote' \| 'note') singleNumber  

</div>

`VerbRule(FootnotesFull)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(FootnotesFull)`](../object/predicate(FootnotesFull).html)</span>` :   `[`FootnotesFullAction`](../object/FootnotesFullAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9769`](../source/en_us.t.html#9769)`]`

<div class="gramrule">

'footnotes' 'full'  

</div>

`VerbRule(FootnotesMedium)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(FootnotesMedium)`](../object/predicate(FootnotesMedium).html)</span>` :   `[`FootnotesMediumAction`](../object/FootnotesMediumAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9775`](../source/en_us.t.html#9775)`]`

<div class="gramrule">

'footnotes' 'medium'  

</div>

`VerbRule(FootnotesOff)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(FootnotesOff)`](../object/predicate(FootnotesOff).html)</span>` :   `[`FootnotesOffAction`](../object/FootnotesOffAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9781`](../source/en_us.t.html#9781)`]`

<div class="gramrule">

'footnotes' 'off'  

</div>

`VerbRule(FootnotesStatus)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(FootnotesStatus)`](../object/predicate(FootnotesStatus).html)</span>` :   `[`FootnotesStatusAction`](../object/FootnotesStatusAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9787`](../source/en_us.t.html#9787)`]`

<div class="gramrule">

'footnotes'  

</div>

`VerbRule(FullScore)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(FullScore)`](../object/predicate(FullScore).html)</span>` :   `[`FullScoreAction`](../object/FullScoreAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9829`](../source/en_us.t.html#9829)`]`

<div class="gramrule">

'full' 'score' \| 'fullscore' \| 'full'  

</div>

`VerbRule(GetOffOf)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(GetOffOf)`](../object/predicate(GetOffOf).html)</span>` :   `[`GetOffOfAction`](../object/GetOffOfAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10615`](../source/en_us.t.html#10615)`]`

<div class="gramrule">

'get' ('off' \| 'off' 'of' \| 'down' 'from') singleDobj  

</div>

`VerbRule(GetOut)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(GetOut)`](../object/predicate(GetOut).html)</span>` :   `[`GetOutAction`](../object/GetOutAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10626`](../source/en_us.t.html#10626)`]`

<div class="gramrule">

'get' 'out'  
\| 'get' 'off'  
\| 'get' 'down'  
\| 'disembark'  
\| 'climb' 'out'  

</div>

`VerbRule(GetOutOf)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(GetOutOf)`](../object/predicate(GetOutOf).html)</span>` :   `[`GetOutOfAction`](../object/GetOutOfAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10603`](../source/en_us.t.html#10603)`]`

<div class="gramrule">

('out' 'of' \| 'get' 'out' 'of' \| 'climb' 'out' 'of' \| 'leave' \|
'exit')  
singleDobj  

</div>

`VerbRule(GiveTo)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(GiveTo)`](../object/predicate(GiveTo).html)</span>` :   `[`GiveToAction`](../object/GiveToAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9593`](../source/en_us.t.html#9593)`]`

<div class="gramrule">

('give' \| 'offer') dobjList 'to' singleIobj  

</div>

`VerbRule(GiveToType2)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(GiveToType2)`](../object/predicate(GiveToType2).html)</span>` :   `[`GiveToAction`](../object/GiveToAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9600`](../source/en_us.t.html#9600)`]`

<div class="gramrule">

('give' \| 'offer') singleIobj dobjList  

</div>

`VerbRule(GiveToWhom)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(GiveToWhom)`](../object/predicate(GiveToWhom).html)</span>` :   `[`GiveToAction`](../object/GiveToAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9610`](../source/en_us.t.html#9610)`]`

<div class="gramrule">

('give' \| 'offer') dobjList  

</div>

`VerbRule(GoBack)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(GoBack)`](../object/predicate(GoBack).html)</span>` :   `[`GoBackAction`](../object/GoBackAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10058`](../source/en_us.t.html#10058)`]`

<div class="gramrule">

'back' \| 'go' 'back' \| 'return'  

</div>

`VerbRule(Goodbye)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Goodbye)`](../object/predicate(Goodbye).html)</span>` :   `[`GoodbyeAction`](../object/GoodbyeAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9569`](../source/en_us.t.html#9569)`]`

<div class="gramrule">

('say' \| ()) ('goodbye' \| 'good-bye' \| 'good' 'bye' \| 'bye')  

</div>

`VerbRule(GoThrough)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(GoThrough)`](../object/predicate(GoThrough).html)</span>` :   `[`GoThroughAction`](../object/GoThroughAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10041`](../source/en_us.t.html#10041)`]`

<div class="gramrule">

('walk' \| 'go' ) ('through' \| 'thru')  
singleDobj  

</div>

`VerbRule(Hello)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Hello)`](../object/predicate(Hello).html)</span>` :   `[`HelloAction`](../object/HelloAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9563`](../source/en_us.t.html#9563)`]`

<div class="gramrule">

('say' \| ) ('hello' \| 'hallo' \| 'hi')  

</div>

`VerbRule(Hint)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Hint)`](../object/predicate(Hint).html)</span>` :   `[`HintAction`](../object/HintAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10811`](../source/en_us.t.html#10811)`]`

<div class="gramrule">

'hint' \| 'hints'  

</div>

`VerbRule(HintsOff)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(HintsOff)`](../object/predicate(HintsOff).html)</span>` :   `[`HintsOffAction`](../object/HintsOffAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10805`](../source/en_us.t.html#10805)`]`

<div class="gramrule">

'hints' 'off'  

</div>

`VerbRule(In)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(In)`](../object/predicate(In).html)</span>` :   `[`InAction`](../object/InAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10027`](../source/en_us.t.html#10027)`]`

<div class="gramrule">

'enter'  

</div>

`VerbRule(instructions)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(instructions)`](../object/predicate(instructions).html)</span>` :   `[`InstructionsAction`](../object/InstructionsAction.html)`      `*`// after macro expansion`*

[`instruct.t`](../file/instruct.t.html)`[`[`1000`](../source/instruct.t.html#1000)`]`

<div class="gramrule">

'instructions'

</div>

`VerbRule(Inventory)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Inventory)`](../object/predicate(Inventory).html)</span>` :   `[`InventoryAction`](../object/InventoryAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9721`](../source/en_us.t.html#9721)`]`

<div class="gramrule">

'i' \| 'inventory' \| 'take' 'inventory'  

</div>

`VerbRule(InventoryTall)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(InventoryTall)`](../object/predicate(InventoryTall).html)</span>` :   `[`InventoryTallAction`](../object/InventoryTallAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9727`](../source/en_us.t.html#9727)`]`

<div class="gramrule">

'i' 'tall' \| 'inventory' 'tall'  

</div>

`VerbRule(InventoryWide)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(InventoryWide)`](../object/predicate(InventoryWide).html)</span>` :   `[`InventoryWideAction`](../object/InventoryWideAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9733`](../source/en_us.t.html#9733)`]`

<div class="gramrule">

'i' 'wide' \| 'inventory' 'wide'  

</div>

`VerbRule(Jump)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Jump)`](../object/predicate(Jump).html)</span>` :   `[`JumpAction`](../object/JumpAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10080`](../source/en_us.t.html#10080)`]`

<div class="gramrule">

'jump'  

</div>

`VerbRule(JumpOff)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(JumpOff)`](../object/predicate(JumpOff).html)</span>` :   `[`JumpOffAction`](../object/JumpOffAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10092`](../source/en_us.t.html#10092)`]`

<div class="gramrule">

'jump' 'off' singleDobj  

</div>

`VerbRule(JumpOffI)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(JumpOffI)`](../object/predicate(JumpOffI).html)</span>` :   `[`JumpOffIAction`](../object/JumpOffIAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10086`](../source/en_us.t.html#10086)`]`

<div class="gramrule">

'jump' 'off'  

</div>

`VerbRule(JumpOver)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(JumpOver)`](../object/predicate(JumpOver).html)</span>` :   `[`JumpOverAction`](../object/JumpOverAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10099`](../source/en_us.t.html#10099)`]`

<div class="gramrule">

('jump' \| 'jump' 'over') singleDobj  

</div>

`VerbRule(Kiss)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Kiss)`](../object/predicate(Kiss).html)</span>` :   `[`KissAction`](../object/KissAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9424`](../source/en_us.t.html#9424)`]`

<div class="gramrule">

'kiss' singleDobj  

</div>

`VerbRule(Lie)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Lie)`](../object/predicate(Lie).html)</span>` :   `[`LieAction`](../object/LieAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10579`](../source/en_us.t.html#10579)`]`

<div class="gramrule">

'lie' ( \| 'down')

</div>

`VerbRule(LieOn)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(LieOn)`](../object/predicate(LieOn).html)</span>` :   `[`LieOnAction`](../object/LieOnAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10567`](../source/en_us.t.html#10567)`]`

<div class="gramrule">

'lie' ('on' \| 'in' \| 'down' 'on' \| 'down' 'in')  
singleDobj  

</div>

`VerbRule(Light)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Light)`](../object/predicate(Light).html)</span>` :   `[`LightAction`](../object/LightAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10323`](../source/en_us.t.html#10323)`]`

<div class="gramrule">

'light' dobjList  

</div>

`VerbRule(ListenImplicit)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(ListenImplicit)`](../object/predicate(ListenImplicit).html)</span>` :   `[`ListenImplicitAction`](../object/ListenImplicitAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9363`](../source/en_us.t.html#9363)`]`

<div class="gramrule">

'listen' \| 'hear'  

</div>

`VerbRule(ListenTo)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(ListenTo)`](../object/predicate(ListenTo).html)</span>` :   `[`ListenToAction`](../object/ListenToAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9350`](../source/en_us.t.html#9350)`]`

<div class="gramrule">

('hear' \| 'listen' 'to' ) dobjList  

</div>

`VerbRule(Lock)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Lock)`](../object/predicate(Lock).html)</span>` :   `[`LockAction`](../object/LockAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10520`](../source/en_us.t.html#10520)`]`

<div class="gramrule">

'lock' dobjList  

</div>

`VerbRule(LockWith)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(LockWith)`](../object/predicate(LockWith).html)</span>` :   `[`LockWithAction`](../object/LockWithAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10532`](../source/en_us.t.html#10532)`]`

<div class="gramrule">

'lock' singleDobj 'with' singleIobj  

</div>

`VerbRule(Look)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Look)`](../object/predicate(Look).html)</span>` :   `[`LookAction`](../object/LookAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9745`](../source/en_us.t.html#9745)`]`

<div class="gramrule">

'look' \| 'look' 'around' \| 'l' \| 'l' 'around'  

</div>

`VerbRule(LookBehind)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(LookBehind)`](../object/predicate(LookBehind).html)</span>` :   `[`LookBehindAction`](../object/LookBehindAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9313`](../source/en_us.t.html#9313)`]`

<div class="gramrule">

('look' \| 'l') 'behind' dobjList  

</div>

`VerbRule(LookIn)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(LookIn)`](../object/predicate(LookIn).html)</span>` :   `[`LookInAction`](../object/LookInAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9289`](../source/en_us.t.html#9289)`]`

<div class="gramrule">

('look' \| 'l') ('in' \| 'inside') dobjList  

</div>

`VerbRule(LookThrough)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(LookThrough)`](../object/predicate(LookThrough).html)</span>` :   `[`LookThroughAction`](../object/LookThroughAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9301`](../source/en_us.t.html#9301)`]`

<div class="gramrule">

('look' \| 'l') ('through' \| 'thru' \| 'out') dobjList  

</div>

`VerbRule(LookUnder)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(LookUnder)`](../object/predicate(LookUnder).html)</span>` :   `[`LookUnderAction`](../object/LookUnderAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9307`](../source/en_us.t.html#9307)`]`

<div class="gramrule">

('look' \| 'l') 'under' dobjList  

</div>

`VerbRule(Move)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Move)`](../object/predicate(Move).html)</span>` :   `[`MoveAction`](../object/MoveAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10118`](../source/en_us.t.html#10118)`]`

<div class="gramrule">

'move' dobjList  

</div>

`VerbRule(MoveTo)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(MoveTo)`](../object/predicate(MoveTo).html)</span>` :   `[`MoveToAction`](../object/MoveToAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10124`](../source/en_us.t.html#10124)`]`

<div class="gramrule">

('push' \| 'move') dobjList ('to' \| 'under') singleIobj  

</div>

`VerbRule(MoveWith)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(MoveWith)`](../object/predicate(MoveWith).html)</span>` :   `[`MoveWithAction`](../object/MoveWithAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10132`](../source/en_us.t.html#10132)`]`

<div class="gramrule">

'move' singleDobj 'with' singleIobj  

</div>

`VerbRule(No)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(No)`](../object/predicate(No).html)</span>` :   `[`NoAction`](../object/NoAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9581`](../source/en_us.t.html#9581)`]`

<div class="gramrule">

'no' \| 'negative' \| 'say' 'no'  

</div>

`VerbRule(Notify)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Notify)`](../object/predicate(Notify).html)</span>` :   `[`NotifyAction`](../object/NotifyAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9835`](../source/en_us.t.html#9835)`]`

<div class="gramrule">

'notify'  

</div>

`VerbRule(NotifyOff)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(NotifyOff)`](../object/predicate(NotifyOff).html)</span>` :   `[`NotifyOffAction`](../object/NotifyOffAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9847`](../source/en_us.t.html#9847)`]`

<div class="gramrule">

'notify' 'off'  

</div>

`VerbRule(NotifyOn)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(NotifyOn)`](../object/predicate(NotifyOn).html)</span>` :   `[`NotifyOnAction`](../object/NotifyOnAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9841`](../source/en_us.t.html#9841)`]`

<div class="gramrule">

'notify' 'on'  

</div>

`VerbRule(Oops)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Oops)`](../object/predicate(Oops).html)</span>` :   `[`OopsAction`](../object/OopsAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10817`](../source/en_us.t.html#10817)`]`

<div class="gramrule">

('oops' \| 'o') singleLiteral  

</div>

`VerbRule(OopsOnly)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(OopsOnly)`](../object/predicate(OopsOnly).html)</span>` :   `[`OopsIAction`](../object/OopsIAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10823`](../source/en_us.t.html#10823)`]`

<div class="gramrule">

('oops' \| 'o')  

</div>

`VerbRule(Open)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Open)`](../object/predicate(Open).html)</span>` :   `[`OpenAction`](../object/OpenAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10508`](../source/en_us.t.html#10508)`]`

<div class="gramrule">

'open' dobjList  

</div>

`VerbRule(Out)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Out)`](../object/predicate(Out).html)</span>` :   `[`OutAction`](../object/OutAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10034`](../source/en_us.t.html#10034)`]`

<div class="gramrule">

'exit' \| 'leave'  

</div>

`VerbRule(Pause)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Pause)`](../object/predicate(Pause).html)</span>` :   `[`PauseAction`](../object/PauseAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9895`](../source/en_us.t.html#9895)`]`

<div class="gramrule">

'pause'  

</div>

`VerbRule(PlugIn)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(PlugIn)`](../object/predicate(PlugIn).html)</span>` :   `[`PlugInAction`](../object/PlugInAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10697`](../source/en_us.t.html#10697)`]`

<div class="gramrule">

'plug' dobjList 'in'  
\| 'plug' 'in' dobjList  

</div>

`VerbRule(PlugInto)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(PlugInto)`](../object/predicate(PlugInto).html)</span>` :   `[`PlugIntoAction`](../object/PlugIntoAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10678`](../source/en_us.t.html#10678)`]`

<div class="gramrule">

'plug' dobjList ('in' \| 'into' \| 'in' 'to') singleIobj  

</div>

`VerbRule(PlugIntoWhat)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(PlugIntoWhat)`](../object/predicate(PlugIntoWhat).html)</span>` :   `[`PlugIntoAction`](../object/PlugIntoAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10685`](../source/en_us.t.html#10685)`]`

<div class="gramrule">

\[badness 500\] 'plug' dobjList  

</div>

`VerbRule(Port)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Port)`](../object/predicate(Port).html)</span>` :   `[`PortAction`](../object/PortAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10013`](../source/en_us.t.html#10013)`]`

<div class="gramrule">

'go' 'to' ('port' \| 'p')  

</div>

`VerbRule(Pour)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Pour)`](../object/predicate(Pour).html)</span>` :   `[`PourAction`](../object/PourAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10397`](../source/en_us.t.html#10397)`]`

<div class="gramrule">

'pour' dobjList  

</div>

`VerbRule(PourInto)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(PourInto)`](../object/predicate(PourInto).html)</span>` :   `[`PourIntoAction`](../object/PourIntoAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10403`](../source/en_us.t.html#10403)`]`

<div class="gramrule">

'pour' dobjList ('in' \| 'into' \| 'in' 'to') singleIobj  

</div>

`VerbRule(PourOnto)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(PourOnto)`](../object/predicate(PourOnto).html)</span>` :   `[`PourOntoAction`](../object/PourOntoAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10410`](../source/en_us.t.html#10410)`]`

<div class="gramrule">

'pour' dobjList ('on' \| 'onto' \| 'on' 'to') singleIobj  

</div>

`VerbRule(Pull)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Pull)`](../object/predicate(Pull).html)</span>` :   `[`PullAction`](../object/PullAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10112`](../source/en_us.t.html#10112)`]`

<div class="gramrule">

'pull' dobjList  

</div>

`VerbRule(Push)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Push)`](../object/predicate(Push).html)</span>` :   `[`PushAction`](../object/PushAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10106`](../source/en_us.t.html#10106)`]`

<div class="gramrule">

('push' \| 'press') dobjList  

</div>

`VerbRule(PushTravelClimbDown)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(PushTravelClimbDown)`](../object/predicate(PushTravelClimbDown).html)</span>` :   `[`PushTravelClimbDownAction`](../object/PushTravelClimbDownAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10781`](../source/en_us.t.html#10781)`]`

<div class="gramrule">

('push' \| 'pull' \| 'drag' \| 'move') singleDobj  
'down' singleIobj  

</div>

`VerbRule(PushTravelClimbUp)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(PushTravelClimbUp)`](../object/predicate(PushTravelClimbUp).html)</span>` :   `[`PushTravelClimbUpAction`](../object/PushTravelClimbUpAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10773`](../source/en_us.t.html#10773)`]`

<div class="gramrule">

('push' \| 'pull' \| 'drag' \| 'move') singleDobj  
'up' singleIobj  

</div>

`VerbRule(PushTravelDir)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(PushTravelDir)`](../object/predicate(PushTravelDir).html)</span>` :   `[`PushTravelDirAction`](../object/PushTravelDirAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10745`](../source/en_us.t.html#10745)`]`

<div class="gramrule">

('push' \| 'pull' \| 'drag' \| 'move') singleDobj singleDir  

</div>

`VerbRule(PushTravelEnter)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(PushTravelEnter)`](../object/predicate(PushTravelEnter).html)</span>` :   `[`PushTravelEnterAction`](../object/PushTravelEnterAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10758`](../source/en_us.t.html#10758)`]`

<div class="gramrule">

('push' \| 'pull' \| 'drag' \| 'move') singleDobj  
('in' \| 'into' \| 'in' 'to') singleIobj  

</div>

`VerbRule(PushTravelGetOutOf)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(PushTravelGetOutOf)`](../object/predicate(PushTravelGetOutOf).html)</span>` :   `[`PushTravelGetOutOfAction`](../object/PushTravelGetOutOfAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10765`](../source/en_us.t.html#10765)`]`

<div class="gramrule">

('push' \| 'pull' \| 'drag' \| 'move') singleDobj  
'out' ('of' \| ) singleIobj  

</div>

`VerbRule(PushTravelThrough)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(PushTravelThrough)`](../object/predicate(PushTravelThrough).html)</span>` :   `[`PushTravelThroughAction`](../object/PushTravelThroughAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10751`](../source/en_us.t.html#10751)`]`

<div class="gramrule">

('push' \| 'pull' \| 'drag' \| 'move') singleDobj  
('through' \| 'thru') singleIobj  

</div>

`VerbRule(PutBehind)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(PutBehind)`](../object/predicate(PutBehind).html)</span>` :   `[`PutBehindAction`](../object/PutBehindAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9392`](../source/en_us.t.html#9392)`]`

<div class="gramrule">

('put' \| 'place' \| 'set') dobjList 'behind' singleIobj  

</div>

`VerbRule(PutIn)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(PutIn)`](../object/predicate(PutIn).html)</span>` :   `[`PutInAction`](../object/PutInAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9369`](../source/en_us.t.html#9369)`]`

<div class="gramrule">

('put' \| 'place' \| 'set') dobjList  
('in' \| 'into' \| 'in' 'to' \| 'inside' \| 'inside' 'of') singleIobj  

</div>

`VerbRule(PutInWhat)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(PutInWhat)`](../object/predicate(PutInWhat).html)</span>` :   `[`PutInAction`](../object/PutInAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9398`](../source/en_us.t.html#9398)`]`

<div class="gramrule">

\[badness 500\] ('put' \| 'place') dobjList  

</div>

`VerbRule(PutOn)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(PutOn)`](../object/predicate(PutOn).html)</span>` :   `[`PutOnAction`](../object/PutOnAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9377`](../source/en_us.t.html#9377)`]`

<div class="gramrule">

('put' \| 'place' \| 'drop' \| 'set') dobjList  
('on' \| 'onto' \| 'on' 'to' \| 'upon') singleIobj  
\| 'put' dobjList 'down' 'on' singleIobj  

</div>

`VerbRule(PutUnder)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(PutUnder)`](../object/predicate(PutUnder).html)</span>` :   `[`PutUnderAction`](../object/PutUnderAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9386`](../source/en_us.t.html#9386)`]`

<div class="gramrule">

('put' \| 'place' \| 'set') dobjList 'under' singleIobj  

</div>

`VerbRule(Quit)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Quit)`](../object/predicate(Quit).html)</span>` :   `[`QuitAction`](../object/QuitAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9751`](../source/en_us.t.html#9751)`]`

<div class="gramrule">

'quit' \| 'q'  

</div>

`VerbRule(Read)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Read)`](../object/predicate(Read).html)</span>` :   `[`ReadAction`](../object/ReadAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9283`](../source/en_us.t.html#9283)`]`

<div class="gramrule">

'read' dobjList  

</div>

`VerbRule(Record)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Record)`](../object/predicate(Record).html)</span>` :   `[`RecordAction`](../object/RecordAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9943`](../source/en_us.t.html#9943)`]`

<div class="gramrule">

'record' \| 'record' 'on'  

</div>

`VerbRule(RecordEvents)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(RecordEvents)`](../object/predicate(RecordEvents).html)</span>` :   `[`RecordEventsAction`](../object/RecordEventsAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9955`](../source/en_us.t.html#9955)`]`

<div class="gramrule">

'record' 'events' \| 'record' 'events' 'on'  

</div>

`VerbRule(RecordEventsString)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(RecordEventsString)`](../object/predicate(RecordEventsString).html)</span>` :   `[`RecordEventsStringAction`](../object/RecordEventsStringAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9961`](../source/en_us.t.html#9961)`]`

<div class="gramrule">

'record' 'events' quotedStringPhrase-\>fname\_  

</div>

`VerbRule(RecordOff)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(RecordOff)`](../object/predicate(RecordOff).html)</span>` :   `[`RecordOffAction`](../object/RecordOffAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9967`](../source/en_us.t.html#9967)`]`

<div class="gramrule">

'record' 'off'  

</div>

`VerbRule(RecordString)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(RecordString)`](../object/predicate(RecordString).html)</span>` :   `[`RecordStringAction`](../object/RecordStringAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9949`](../source/en_us.t.html#9949)`]`

<div class="gramrule">

'record' quotedStringPhrase-\>fname\_  

</div>

`VerbRule(Remove)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Remove)`](../object/predicate(Remove).html)</span>` :   `[`RemoveAction`](../object/RemoveAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9263`](../source/en_us.t.html#9263)`]`

<div class="gramrule">

'remove' dobjList  

</div>

`VerbRule(ReplayQuiet)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(ReplayQuiet)`](../object/predicate(ReplayQuiet).html)</span>` :   `[`ReplayStringAction`](../object/ReplayStringAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9983`](../source/en_us.t.html#9983)`]`

<div class="gramrule">

'rq' (quotedStringPhrase-\>fname\_ \| )  

</div>

`VerbRule(ReplayString)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(ReplayString)`](../object/predicate(ReplayString).html)</span>` :   `[`ReplayStringAction`](../object/ReplayStringAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9973`](../source/en_us.t.html#9973)`]`

<div class="gramrule">

'replay' ('quiet'-\>quiet\_ \| 'nonstop'-\>nonstop\_ \| )  
(quotedStringPhrase-\>fname\_ \| )  

</div>

`VerbRule(Restart)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Restart)`](../object/predicate(Restart).html)</span>` :   `[`RestartAction`](../object/RestartAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9889`](../source/en_us.t.html#9889)`]`

<div class="gramrule">

'restart'  

</div>

`VerbRule(Restore)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Restore)`](../object/predicate(Restore).html)</span>` :   `[`RestoreAction`](../object/RestoreAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9865`](../source/en_us.t.html#9865)`]`

<div class="gramrule">

'restore'  

</div>

`VerbRule(RestoreDefaults)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(RestoreDefaults)`](../object/predicate(RestoreDefaults).html)</span>` :   `[`RestoreDefaultsAction`](../object/RestoreDefaultsAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9883`](../source/en_us.t.html#9883)`]`

<div class="gramrule">

'restore' 'defaults'  

</div>

`VerbRule(RestoreString)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(RestoreString)`](../object/predicate(RestoreString).html)</span>` :   `[`RestoreStringAction`](../object/RestoreStringAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9871`](../source/en_us.t.html#9871)`]`

<div class="gramrule">

'restore' quotedStringPhrase-\>fname\_  

</div>

`VerbRule(Save)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Save)`](../object/predicate(Save).html)</span>` :   `[`SaveAction`](../object/SaveAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9853`](../source/en_us.t.html#9853)`]`

<div class="gramrule">

'save'  

</div>

`VerbRule(SaveDefaults)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(SaveDefaults)`](../object/predicate(SaveDefaults).html)</span>` :   `[`SaveDefaultsAction`](../object/SaveDefaultsAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9877`](../source/en_us.t.html#9877)`]`

<div class="gramrule">

'save' 'defaults'  

</div>

`VerbRule(SaveString)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(SaveString)`](../object/predicate(SaveString).html)</span>` :   `[`SaveStringAction`](../object/SaveStringAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9859`](../source/en_us.t.html#9859)`]`

<div class="gramrule">

'save' quotedStringPhrase-\>fname\_  

</div>

`VerbRule(Score)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Score)`](../object/predicate(Score).html)</span>` :   `[`ScoreAction`](../object/ScoreAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9823`](../source/en_us.t.html#9823)`]`

<div class="gramrule">

'score' \| 'status'  

</div>

`VerbRule(Screw)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Screw)`](../object/predicate(Screw).html)</span>` :   `[`ScrewAction`](../object/ScrewAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10717`](../source/en_us.t.html#10717)`]`

<div class="gramrule">

'screw' dobjList  

</div>

`VerbRule(ScrewWith)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(ScrewWith)`](../object/predicate(ScrewWith).html)</span>` :   `[`ScrewWithAction`](../object/ScrewWithAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10723`](../source/en_us.t.html#10723)`]`

<div class="gramrule">

'screw' dobjList 'with' singleIobj  

</div>

`VerbRule(Script)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Script)`](../object/predicate(Script).html)</span>` :   `[`ScriptAction`](../object/ScriptAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9925`](../source/en_us.t.html#9925)`]`

<div class="gramrule">

'script' \| 'script' 'on'  

</div>

`VerbRule(ScriptOff)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(ScriptOff)`](../object/predicate(ScriptOff).html)</span>` :   `[`ScriptOffAction`](../object/ScriptOffAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9937`](../source/en_us.t.html#9937)`]`

<div class="gramrule">

'script' 'off' \| 'unscript'  

</div>

`VerbRule(ScriptString)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(ScriptString)`](../object/predicate(ScriptString).html)</span>` :   `[`ScriptStringAction`](../object/ScriptStringAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9931`](../source/en_us.t.html#9931)`]`

<div class="gramrule">

'script' quotedStringPhrase-\>fname\_  

</div>

`VerbRule(Search)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Search)`](../object/predicate(Search).html)</span>` :   `[`SearchAction`](../object/SearchAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9295`](../source/en_us.t.html#9295)`]`

<div class="gramrule">

'search' dobjList  

</div>

`VerbRule(Set)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Set)`](../object/predicate(Set).html)</span>` :   `[`SetAction`](../object/SetAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10164`](../source/en_us.t.html#10164)`]`

<div class="gramrule">

'set' dobjList  

</div>

`VerbRule(SetTo)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(SetTo)`](../object/predicate(SetTo).html)</span>` :   `[`SetToAction`](../object/SetToAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10170`](../source/en_us.t.html#10170)`]`

<div class="gramrule">

'set' singleDobj 'to' singleLiteral  

</div>

`VerbRule(ShowTo)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(ShowTo)`](../object/predicate(ShowTo).html)</span>` :   `[`ShowToAction`](../object/ShowToAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9622`](../source/en_us.t.html#9622)`]`

<div class="gramrule">

'show' dobjList 'to' singleIobj  

</div>

`VerbRule(ShowToType2)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(ShowToType2)`](../object/predicate(ShowToType2).html)</span>` :   `[`ShowToAction`](../object/ShowToAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9629`](../source/en_us.t.html#9629)`]`

<div class="gramrule">

'show' singleIobj dobjList  

</div>

`VerbRule(ShowToWhom)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(ShowToWhom)`](../object/predicate(ShowToWhom).html)</span>` :   `[`ShowToAction`](../object/ShowToAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9639`](../source/en_us.t.html#9639)`]`

<div class="gramrule">

'show' dobjList  

</div>

`VerbRule(Sit)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Sit)`](../object/predicate(Sit).html)</span>` :   `[`SitAction`](../object/SitAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10562`](../source/en_us.t.html#10562)`]`

<div class="gramrule">

'sit' ( \| 'down')

</div>

`VerbRule(SitOn)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(SitOn)`](../object/predicate(SitOn).html)</span>` :   `[`SitOnAction`](../object/SitOnAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10550`](../source/en_us.t.html#10550)`]`

<div class="gramrule">

'sit' ('on' \| 'in' \| 'down' 'on' \| 'down' 'in')  
singleDobj  

</div>

`VerbRule(Sleep)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Sleep)`](../object/predicate(Sleep).html)</span>` :   `[`SleepAction`](../object/SleepAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10646`](../source/en_us.t.html#10646)`]`

<div class="gramrule">

'sleep'  

</div>

`VerbRule(Smell)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Smell)`](../object/predicate(Smell).html)</span>` :   `[`SmellAction`](../object/SmellAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9331`](../source/en_us.t.html#9331)`]`

<div class="gramrule">

('smell' \| 'sniff') dobjList  

</div>

`VerbRule(SmellImplicit)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(SmellImplicit)`](../object/predicate(SmellImplicit).html)</span>` :   `[`SmellImplicitAction`](../object/SmellImplicitAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9344`](../source/en_us.t.html#9344)`]`

<div class="gramrule">

'smell' \| 'sniff'  

</div>

`grammar `<span class="classExtLink">[`predicate(SpecialTopic)`](../object/predicate(SpecialTopic).html)</span>` :   `[`SpecialTopicAction`](../object/SpecialTopicAction.html)

[`actions.t`](../file/actions.t.html)`[`[`2106`](../source/actions.t.html#2106)`]`

<div class="gramrule">

'xspcltopic' literalPhrase-\>literalMatch  

</div>

`VerbRule(Stand)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Stand)`](../object/predicate(Stand).html)</span>` :   `[`StandAction`](../object/StandAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10597`](../source/en_us.t.html#10597)`]`

<div class="gramrule">

'stand' \| 'stand' 'up' \| 'get' 'up'  

</div>

`VerbRule(StandOn)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(StandOn)`](../object/predicate(StandOn).html)</span>` :   `[`StandOnAction`](../object/StandOnAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10584`](../source/en_us.t.html#10584)`]`

<div class="gramrule">

('stand' ('on' \| 'in' \| 'onto' \| 'on' 'to' \| 'into' \| 'in' 'to')  
\| 'climb' ('on' \| 'onto' \| 'on' 'to'))  
singleDobj  

</div>

`VerbRule(Starboard)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Starboard)`](../object/predicate(Starboard).html)</span>` :   `[`StarboardAction`](../object/StarboardAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10020`](../source/en_us.t.html#10020)`]`

<div class="gramrule">

'go' 'to' ('starboard' \| 'sb')  

</div>

`VerbRule(Strike)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Strike)`](../object/predicate(Strike).html)</span>` :   `[`StrikeAction`](../object/StrikeAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10330`](../source/en_us.t.html#10330)`]`

<div class="gramrule">

'strike' dobjList  

</div>

`VerbRule(Switch)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Switch)`](../object/predicate(Switch).html)</span>` :   `[`SwitchAction`](../object/SwitchAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10297`](../source/en_us.t.html#10297)`]`

<div class="gramrule">

'switch' dobjList  

</div>

`VerbRule(Take)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Take)`](../object/predicate(Take).html)</span>` :   `[`TakeAction`](../object/TakeAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9248`](../source/en_us.t.html#9248)`]`

<div class="gramrule">

('take' \| 'pick' 'up' \| 'get') dobjList  
\| 'pick' dobjList 'up'  

</div>

`VerbRule(TakeFrom)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(TakeFrom)`](../object/predicate(TakeFrom).html)</span>` :   `[`TakeFromAction`](../object/TakeFromAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9255`](../source/en_us.t.html#9255)`]`

<div class="gramrule">

('take' \| 'get') dobjList  
('from' \| 'out' 'of' \| 'off' \| 'off' 'of') singleIobj  
\| 'remove' dobjList 'from' singleIobj  

</div>

`VerbRule(TalkTo)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(TalkTo)`](../object/predicate(TalkTo).html)</span>` :   `[`TalkToAction`](../object/TalkToAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9536`](../source/en_us.t.html#9536)`]`

<div class="gramrule">

('greet' \| 'say' 'hello' 'to' \| 'talk' 'to') singleDobj  

</div>

`VerbRule(TalkToWhat)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(TalkToWhat)`](../object/predicate(TalkToWhat).html)</span>` :   `[`TalkToAction`](../object/TalkToAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9543`](../source/en_us.t.html#9543)`]`

<div class="gramrule">

\[badness 500\] 'talk'  

</div>

`VerbRule(Taste)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Taste)`](../object/predicate(Taste).html)</span>` :   `[`TasteAction`](../object/TasteAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9325`](../source/en_us.t.html#9325)`]`

<div class="gramrule">

'taste' dobjList  

</div>

`VerbRule(TellAbout)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(TellAbout)`](../object/predicate(TellAbout).html)</span>` :   `[`TellAboutAction`](../object/TellAboutAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9489`](../source/en_us.t.html#9489)`]`

<div class="gramrule">

('tell' \| 't') singleDobj 'about' singleTopic  

</div>

`VerbRule(TellAboutImplicit)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(TellAboutImplicit)`](../object/predicate(TellAboutImplicit).html)</span>` :   `[`TellAboutAction`](../object/TellAboutAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9497`](../source/en_us.t.html#9497)`]`

<div class="gramrule">

't' singleTopic  

</div>

`VerbRule(TellAboutWhat)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(TellAboutWhat)`](../object/predicate(TellAboutWhat).html)</span>` :   `[`TellAboutAction`](../object/TellAboutAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9510`](../source/en_us.t.html#9510)`]`

<div class="gramrule">

\[badness 500\] 'tell' singleDobj  

</div>

`VerbRule(TellVague)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(TellVague)`](../object/predicate(TellVague).html)</span>` :   `[`AskVagueAction`](../object/AskVagueAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9530`](../source/en_us.t.html#9530)`]`

<div class="gramrule">

\[badness 500\] 'tell' singleDobj singleTopic  

</div>

`VerbRule(Terse)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Terse)`](../object/predicate(Terse).html)</span>` :   `[`TerseAction`](../object/TerseAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9817`](../source/en_us.t.html#9817)`]`

<div class="gramrule">

'terse' \| 'brief'  

</div>

`VerbRule(Throw)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Throw)`](../object/predicate(Throw).html)</span>` :   `[`ThrowAction`](../object/ThrowAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9651`](../source/en_us.t.html#9651)`]`

<div class="gramrule">

('throw' \| 'toss') dobjList  

</div>

`VerbRule(ThrowAt)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(ThrowAt)`](../object/predicate(ThrowAt).html)</span>` :   `[`ThrowAtAction`](../object/ThrowAtAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9657`](../source/en_us.t.html#9657)`]`

<div class="gramrule">

('throw' \| 'toss') dobjList 'at' singleIobj  

</div>

`VerbRule(ThrowDir)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(ThrowDir)`](../object/predicate(ThrowDir).html)</span>` :   `[`ThrowDirAction`](../object/ThrowDirAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9681`](../source/en_us.t.html#9681)`]`

<div class="gramrule">

('throw' \| 'toss') dobjList ('to' ('the' \| ) \| ) singleDir  

</div>

`VerbRule(ThrowDirDown)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(ThrowDirDown)`](../object/predicate(ThrowDirDown).html)</span>` :   `[`ThrowDirAction`](../object/ThrowDirAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9688`](../source/en_us.t.html#9688)`]`

<div class="gramrule">

'throw' ('down' \| 'd') dobjList  

</div>

`VerbRule(ThrowTo)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(ThrowTo)`](../object/predicate(ThrowTo).html)</span>` :   `[`ThrowToAction`](../object/ThrowToAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9664`](../source/en_us.t.html#9664)`]`

<div class="gramrule">

('throw' \| 'toss') dobjList 'to' singleIobj  

</div>

`VerbRule(ThrowToType2)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(ThrowToType2)`](../object/predicate(ThrowToType2).html)</span>` :   `[`ThrowToAction`](../object/ThrowToAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9671`](../source/en_us.t.html#9671)`]`

<div class="gramrule">

'throw' singleIobj dobjList  

</div>

`VerbRule(TipsOff)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(TipsOff)`](../object/predicate(TipsOff).html)</span>` :   `[`TipModeAction`](../object/TipModeAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9802`](../source/en_us.t.html#9802)`]`

<div class="gramrule">

('tips' \| 'tip') 'off'  

</div>

`VerbRule(TipsOn)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(TipsOn)`](../object/predicate(TipsOn).html)</span>` :   `[`TipModeAction`](../object/TipModeAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9793`](../source/en_us.t.html#9793)`]`

<div class="gramrule">

('tips' \| 'tip') 'on'  

</div>

`VerbRule(Topics)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Topics)`](../object/predicate(Topics).html)</span>` :   `[`TopicsAction`](../object/TopicsAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9557`](../source/en_us.t.html#9557)`]`

<div class="gramrule">

'topics'  

</div>

`VerbRule(Travel)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Travel)`](../object/predicate(Travel).html)</span>` :   `[`TravelAction`](../object/TravelAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9994`](../source/en_us.t.html#9994)`]`

<div class="gramrule">

'go' singleDir \| singleDir  

</div>

`VerbRule(Turn)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Turn)`](../object/predicate(Turn).html)</span>` :   `[`TurnAction`](../object/TurnAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10141`](../source/en_us.t.html#10141)`]`

<div class="gramrule">

('turn' \| 'twist' \| 'rotate') dobjList  

</div>

`VerbRule(TurnOff)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(TurnOff)`](../object/predicate(TurnOff).html)</span>` :   `[`TurnOffAction`](../object/TurnOffAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10316`](../source/en_us.t.html#10316)`]`

<div class="gramrule">

('deactivate' \| ('turn' \| 'switch') 'off') dobjList  
\| ('turn' \| 'switch') dobjList 'off'  

</div>

`VerbRule(TurnOn)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(TurnOn)`](../object/predicate(TurnOn).html)</span>` :   `[`TurnOnAction`](../object/TurnOnAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10309`](../source/en_us.t.html#10309)`]`

<div class="gramrule">

('activate' \| ('turn' \| 'switch') 'on') dobjList  
\| ('turn' \| 'switch') dobjList 'on'  

</div>

`VerbRule(TurnTo)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(TurnTo)`](../object/predicate(TurnTo).html)</span>` :   `[`TurnToAction`](../object/TurnToAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10155`](../source/en_us.t.html#10155)`]`

<div class="gramrule">

('turn' \| 'twist' \| 'rotate') singleDobj  
'to' singleLiteral  

</div>

`VerbRule(TurnWith)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(TurnWith)`](../object/predicate(TurnWith).html)</span>` :   `[`TurnWithAction`](../object/TurnWithAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10147`](../source/en_us.t.html#10147)`]`

<div class="gramrule">

('turn' \| 'twist' \| 'rotate') singleDobj 'with' singleIobj  

</div>

`VerbRule(TypeLiteralOn)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(TypeLiteralOn)`](../object/predicate(TypeLiteralOn).html)</span>` :   `[`TypeLiteralOnAction`](../object/TypeLiteralOnAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10184`](../source/en_us.t.html#10184)`]`

<div class="gramrule">

'type' singleLiteral 'on' singleDobj  

</div>

`VerbRule(TypeLiteralOnWhat)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(TypeLiteralOnWhat)`](../object/predicate(TypeLiteralOnWhat).html)</span>` :   `[`TypeLiteralOnAction`](../object/TypeLiteralOnAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10191`](../source/en_us.t.html#10191)`]`

<div class="gramrule">

\[badness 500\] 'type' singleLiteral  

</div>

`VerbRule(TypeOn)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(TypeOn)`](../object/predicate(TypeOn).html)</span>` :   `[`TypeOnAction`](../object/TypeOnAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10178`](../source/en_us.t.html#10178)`]`

<div class="gramrule">

'type' 'on' singleDobj  

</div>

`VerbRule(Undo)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Undo)`](../object/predicate(Undo).html)</span>` :   `[`UndoAction`](../object/UndoAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9901`](../source/en_us.t.html#9901)`]`

<div class="gramrule">

'undo'  

</div>

`VerbRule(Unfasten)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Unfasten)`](../object/predicate(Unfasten).html)</span>` :   `[`UnfastenAction`](../object/UnfastenAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10665`](../source/en_us.t.html#10665)`]`

<div class="gramrule">

('unfasten' \| 'unbuckle') dobjList  

</div>

`VerbRule(UnfastenFrom)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(UnfastenFrom)`](../object/predicate(UnfastenFrom).html)</span>` :   `[`UnfastenFromAction`](../object/UnfastenFromAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10671`](../source/en_us.t.html#10671)`]`

<div class="gramrule">

('unfasten' \| 'unbuckle') dobjList 'from' singleIobj  

</div>

`VerbRule(Unlock)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Unlock)`](../object/predicate(Unlock).html)</span>` :   `[`UnlockAction`](../object/UnlockAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10526`](../source/en_us.t.html#10526)`]`

<div class="gramrule">

'unlock' dobjList  

</div>

`VerbRule(UnlockWith)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(UnlockWith)`](../object/predicate(UnlockWith).html)</span>` :   `[`UnlockWithAction`](../object/UnlockWithAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10541`](../source/en_us.t.html#10541)`]`

<div class="gramrule">

'unlock' singleDobj 'with' singleIobj  

</div>

`VerbRule(Unplug)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Unplug)`](../object/predicate(Unplug).html)</span>` :   `[`UnplugAction`](../object/UnplugAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10711`](../source/en_us.t.html#10711)`]`

<div class="gramrule">

'unplug' dobjList  

</div>

`VerbRule(UnplugFrom)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(UnplugFrom)`](../object/predicate(UnplugFrom).html)</span>` :   `[`UnplugFromAction`](../object/UnplugFromAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10704`](../source/en_us.t.html#10704)`]`

<div class="gramrule">

'unplug' dobjList 'from' singleIobj  

</div>

`VerbRule(Unscrew)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Unscrew)`](../object/predicate(Unscrew).html)</span>` :   `[`UnscrewAction`](../object/UnscrewAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10731`](../source/en_us.t.html#10731)`]`

<div class="gramrule">

'unscrew' dobjList  

</div>

`VerbRule(UnscrewWith)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(UnscrewWith)`](../object/predicate(UnscrewWith).html)</span>` :   `[`UnscrewWithAction`](../object/UnscrewWithAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`10737`](../source/en_us.t.html#10737)`]`

<div class="gramrule">

'unscrew' dobjList 'with' singleIobj  

</div>

`VerbRule(VagueTravel)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(VagueTravel)`](../object/predicate(VagueTravel).html)</span>` :   `[`VagueTravelAction`](../object/VagueTravelAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9990`](../source/en_us.t.html#9990)`]`

<div class="gramrule">

'go' \| 'walk'

</div>

`VerbRule(Verbose)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Verbose)`](../object/predicate(Verbose).html)</span>` :   `[`VerboseAction`](../object/VerboseAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9811`](../source/en_us.t.html#9811)`]`

<div class="gramrule">

'verbose'  

</div>

`VerbRule(Version)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Version)`](../object/predicate(Version).html)</span>` :   `[`VersionAction`](../object/VersionAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9907`](../source/en_us.t.html#9907)`]`

<div class="gramrule">

'version'  

</div>

`VerbRule(Wait)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Wait)`](../object/predicate(Wait).html)</span>` :   `[`WaitAction`](../object/WaitAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9739`](../source/en_us.t.html#9739)`]`

<div class="gramrule">

'z' \| 'wait'  

</div>

`VerbRule(Wear)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Wear)`](../object/predicate(Wear).html)</span>` :   `[`WearAction`](../object/WearAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9410`](../source/en_us.t.html#9410)`]`

<div class="gramrule">

('wear' \| 'don' \| 'put' 'on') dobjList  
\| 'put' dobjList 'on'  

</div>

`VerbRule(Yell)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Yell)`](../object/predicate(Yell).html)</span>` :   `[`YellAction`](../object/YellAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9587`](../source/en_us.t.html#9587)`]`

<div class="gramrule">

'yell' \| 'scream' \| 'shout' \| 'holler'  

</div>

`VerbRule(Yes)      `*`// original source text`*  

`grammar `<span class="classExtLink">[`predicate(Yes)`](../object/predicate(Yes).html)</span>` :   `[`YesAction`](../object/YesAction.html)`      `*`// after macro expansion`*

[`en_us.t`](../file/en_us.t.html)`[`[`9575`](../source/en_us.t.html#9575)`]`

<div class="gramrule">

'yes' \| 'affirmative' \| 'say' 'yes'  

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
