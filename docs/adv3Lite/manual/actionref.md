---
layout: docs
---


<img src="topbar.jpg" data-border="0" />
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="action.html" class="nav">Actions</a> \> Action Reference  
<span class="navnp"><a href="debug.html" class="nav"><em>Prev:</em> Debugging Commands</a>
    *Next:* <a href="actor.html" class="nav">Actors</a>    </span>
# Action Reference

## How To Use This Reference

This reference section is designed to fulfil two purposes: (1) to make
it easy for you to find the name of the Action you want if you only know
the grammar (the form of the command) that leads to it (e.g. KILL FRED);
and (2) to provide basic information to help with the customizing of
action responses (for fuller information you may need to consult the
library source code).

If you know the name of the action you're looking for, you can go
straight to the [Action List](#actionlist) below to find it (and follow
the directions there). If you don't, you can use the [Grammar
List](#grammar) immediately below to find it. For example, to find what
action would be triggered by KILL FRED, click on K in the list of
letters at the start of the Grammar List, and find the line that reads
'**kill** something'. At the end of the line you'll see the hyperlinked
action name `Attack`. Clicking on the link will
take you to further information about the Attack action in the Action
List.

## <span id="grammar">Grammar List</span>

[A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I)
[J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R)
[S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z)

### <span id="A">A</span>

**a** topic [AskAboutImplicit](#AskAboutImplicit)  
**a** someone **about** topic [AskAbout](#AskAbout)  
**a** someone **for** topic [AskFor](#AskFor)  
**a** someone **how/if/when/where/whether/who** topic
[QueryAbout](#QueryAbout)  
**a for** topic [AskForImplicit](#AskForImplicit)  
**a for** topic **from** someone [AskFor](#AskFor)  
**a how/if/what/when/where/whether/who** [QueryVague](#QueryVague)  
**a how/if/when/where/whether/who** topic [Query](#Query)  
**<span class="system">about</span>** [About](#About)  
**activate** something [SwitchOn](#SwitchOn)  
**aft** [Travel](#Travel)  
**again** [Again](#Again)  
**affirmative** [SayYes](#SayYes)  
**are** topic [Query](#Query)  
**ask** topic [AskAboutImplicit](#AskAboutImplicit)  
**ask** someone **about** topic [AskAbout](#AskAbout)  
**ask** someone **for** topic [AskFor](#AskFor)  
**ask** someone **how/if/when/where/whether/who** topic
[QueryAbout](#QueryAbout)  
**ask about** topic [AskAboutImplicit](#AskAboutImplicit)  
**ask for** topic [AskForImplicit](#AskForImplicit)  
**ask for** topic **from** someone [AskFor](#AskFor)  
**ask how/if/what/when/where/whether/who** [QueryVague](#QueryVague)  
**ask how/if/what/when/where/whether/who** topic [Query](#Query)  
**attach** something [Attach](#Attach)  
**attach** something **to** something [AttachTo](#AttachTo)  
**attack** something [Attack](#Attack)  
**attack** something **with** something [AttackWith](#AttackWith)  

### <span id="B">B</span>

**back** [GoBack](#GoBack)  
**blow** something **out** [Extinguish](#Extinguish)  
**blow out** something [Extinguish](#Extinguish)  
**board** something [Board](#Board)  
**break** something [Break](#Break)  
**<span class="system">brief</span>** [Brief](#Brief)  
**bye** [Goodbye](#Goodbye)  
**buckle \[up\]** something [Fasten](#Fasten)  
**buckle** something **to** something [FastenTo](#FastenTo)  
**burn** something [Burn](#Burn)  
**burn** something **with** something [BurnWith](#BurnWith)  

### <span id="C">C</span>

**c** [Continue](#GoTo)  
**can** topic [Query](#Query)  
**clean** something [Clean](#Clean)  
**clean** something **with** something [CleanWith](#CleanWith)  
**climb** something [Climb](#Climb)  
**climb down** [ClimbDownVague](#ClimbDownVague)  
**climb down** something [ClimbDown](#ClimbDown)  
**climb in/inside/in to/into** something [Enter](#Enter)  
**climb on/on to/onto** something [Board](#Board)  
**climb out** [GetOut](#GetOff)  
**climb out of** something [GetOutOf](#GetOutOf)  
**climb up** [ClimbUpVague](#ClimbUpVague)  
**climb up** something [ClimbUp](#ClimbUp)  
**close** something [Close](#Close)  
**cogitate** [Think](#Think)  
**cogitate about** topic [ThinkAbout](#ThinkAbout)  
**consult** something **about/on** topic [ConsultAbout](#ConsultAbout)  
**connect** something [Attach](#Attach)  
**connect** something **to** something [AttachTo](#AttachTo)  
**consume** something [Eat](#Eat)  
**continue** [Continue](#GoTo)  
**could** topic [Query](#Query)  
**<span class="system">credits</span>** [Credits](#Credits)  

### <span id="D">D</span>

**d** [Travel](#Travel)  
**<span class="debug">debug</span>** [DebugI](#DebugI)  
**<span class="debug">debug
actions/doers/messages/spelling/status/stop/off</span>**
[Debug](#Debug)  
**deactivate** something [SwitchOff](#SwitchOff)  
**destroy** something [Break](#Break)  
**detach** something [Detach](#Detach)  
**detach** something **from** something [DetachFrom](#DetachFrom)  
**dig** something [Dig](#Dig)  
**dig** something **with** something [DigWith](#DigWith)  
**disconnect** something [Detach](#Detach)  
**disconnect** something **from** something [DetachFrom](#DetachFrom)  
**disembark** [GetOut](#GetOff)  
**do/does** topic [Query](#Query)  
**doff** something [Doff](#Doff)  
**don** something [Wear](#Wear)  
**douse** something [Extinguish](#Extinguish)  
**down** [Travel](#Travel)  
**drag** something direction [PushTravelDir](#PushTravelDir)  
**drag** something **down** something
[PushTravelClimbDown](#PushTravelClimbDown)  
**drag** something **in/in to/into** something
[PushTravelEnter](#PushTravelEnter)  
**drag** something **out/out** of something
[PushTravelGetOutOf](#PushTravelGetOutOf)  
**drag** something **through/thru something**
[PushTravelThrough](#PushTravelThrough)  
**drag** something **up** something
[PushTravelClimbUp](#PushTravelClimbUp)  
**drink** something [Drink](#Drink)  
**drop** something [Drop](#Drop)  
**drop** something **on/onto/on to/upon** something [PutOn](#PutOn)  

### <span id="E">E</span>

**e** [Travel](#Travel)  
**east** [Travel](#Travel)  
**eat** something [Eat](#Eat)  
**enter** [GoIn](#GoIn)  
**enter** something [Enter](#Enter)  
**enter** literal **in/in to/into/on/with** something
[EnterOn](#EnterOn)  
**<span class="debug">eval</span>** literal [Evaluate](#Evaluate)  
**examine** something [Examine](#Examine)  
**extinguish** something [Extinguish](#Extinguish)  
**exit** [GoOut](#GoOut)  
**exit** something [GetOutOf](#GetOutOf)  
**<span class="system">exit colo\[u\]r
off/on/blue/green/red/yellow</span>** [ExitsColour](#ExitsColour)  
**<span class="system">exits</span>** [Exits](#Exits)  
**<span class="system">exits all</span>** [ExitsMode](#ExitsMode)  
**<span class="system">exits colo\[u\]r
off/on/blue/green/red/yellow</span>** [ExitsColour](#ExitsColour)  
**<span class="system">exits look</span>** [ExitsMode](#ExitsMode)  
**<span class="system">exits none</span>** [ExitsMode](#ExitsMode)  
**<span class="system">exits off/on</span>** [ExitsMode](#ExitsMode)  
**<span class="system">exits status/status line/statusline</span>**
[ExitsMode](#ExitsMode)  

### <span id="F">F</span>

**f** [Travel](#Travel)  
**fasten** something [Fasten](#Fasten)  
**fasten** something **to** something [FastenTo](#FastenTo)  
**feel** something [Feel](#Feel)  
**<span class="debug">fiat lux</span>** [FiatLux](#FiatLux)  
**find** topic [ConsultWhatAbout](#ConsultWhatAbout)  
**find** topic **in/on** something [ConsultAbout](#ConsultAbout)  
**flip** something [Flip](#Flip)  
**follow** something [Follow](#Follow)  
**fore** [Travel](#Travel)  
**<span class="system">full/full score/fullscore</span>**
[FullScore](#FullScore)  

### <span id="G">G</span>

**g** [Again](#Again)  
**get** something [Take](#Take)  
**get** something **from/out of/off/off of** something
[TakeFrom](#TakeFrom)  
**get down** [GetOut](#GetOff)  
**get down from** something [GetOff](#GetOff)  
**get in/inside/in to/into** something [Enter](#Enter)  
**get off** [GetOut](#GetOff)  
**get off/off of** something [GetOff](#GetOff)  
**get on/on to/onto** something [Board](#Board)  
**get out** [GetOut](#GetOff)  
**get out of** something [GetOutOf](#GetOutOf)  
**get up** [Stand](#Stand)  
**give** something [GiveToImplicit](#GiveToImplicit)  
**give** someone something [GiveTo](#GiveTo)  
**give** something **to** someone [GiveTo](#GiveTo)  
**<span class="debug">gn</span>** something [GoNear](#GoNear)  
**goodbye/good-bye/good bye** [Goodbye](#Goodbye)  
**go** [VagueTravel](#VagueTravel)  
**go** direction [Travel](#Travel)  
**go back** [GoBack](#GoBack)  
**go down** [ClimbDownVague](#ClimbDownVague)  
**go down** something [ClimbDown](#ClimbDown)  
**go in/inside/in to/into** something [Enter](#Enter)  
**<span class="debug">go near</span>** something [GoNear](#GoNear)  
**go through/thru** something [GoThrough](#GoThrough)  
**go to\|to the** direction [Travel](#Travel)  
**go to** somewhere [GoTo](#GoTo)  
**go up** [ClimbUpVague](#ClimbUpVague)  
**go up** something [ClimbUp](#ClimbUp)  
**<span class="debug">gonear</span>** something [GoNear](#GoNear)  
**greet** someone [TalkTo](#TalkTo)  

### <span id="H">H</span>

**hallo** [Hello](#Hello)  
**have/has** topic [Query](#Query)  
**hello** [Hello](#Hello)  
**hi** [Hello](#Hello)  
**hit** something [Attack](#Attack)  
**hit** something **with** something [AttackWith](#AttackWith)  
**<span class="system">hint</span>** [Hints](#Hints)  
**<span class="system">hints</span>** [Hints](#Hints)  
**<span class="system">hints off</span>** [HintsOff](#HintsOff)  
**holler** [Yell](#Yell)  
**how** topic [Query](#Query)  

### <span id="I">I</span>

**i** [Inventory](#Inventory)  
**if** topic [Query](#Query)  
**ignite** something [Burn](#Burn)  
**ignite** something **with** something [BurnWith](#BurnWith)  
**imbibe** something [Drink](#Drink)  
**in** [Travel](#Travel)  
**insert** something **in/into/in to/inside/inside of** something
[PutIn](#PutIn)  
**inspect** something [Examine](#Examine)  
**inv** [Inventory](#Inventory)  
**inventory** [Inventory](#Inventory)  
**is** topic [Query](#Query)  

### <span id="I">J</span>

**jump** [Jump](#Jump)  
**jump** something [JumpOver](#JumpOver)  
**jump off** [JumpOffIntransitive](#JumpOffIntransitive)  
**jump off** something [JumpOff](#JumpOff)  
**jump over** something [JumpOver](#JumpOver)  

### <span id="K">K</span>

**kick** something [Attack](#Attack)  
**kill** something [Attack](#Attack)  
**kill** something **with** something [AttackWith](#AttackWith)  
**kiss** something [Kiss](#Kiss)  

### <span id="L">L</span>

**l** [Look](#Look)  
**l** something [Examine](#Examine)  
**l** topic **up** [ConsultWhatAbout](#ConsultWhatAbout)  
**l** topic **up in/on** something [ConsultAbout](#ConsultAbout)  
**l around** [Look](#Look)  
**l at** something [Examine](#Examine)  
**l behind** something [LookBehind](#LookBehind)  
**l for** topic [ConsultWhatAbout](#ConsultWhatAbout)  
**l for** topic **in/on** something [ConsultAbout](#ConsultAbout)  
**l in/inside** something [LookIn](#LookIn)  
**l tests** (/fully) [ListTests](#ListTests)  
**l through/thru** something [LookThrough](#LookThrough)  
**l under** something [LookUnder](#LookUnder)  
**l up** topic [ConsultWhatAbout](#ConsultWhatAbout)  
**l up** topic **in/on** something [ConsultAbout](#ConsultAbout)  
**leave** [GoOut](#GoOut)  
**leave** something [GetOutOf](#GetOutOf)  
**<span class="debug">let there be light</span>** [FiatLux](#FiatLux)  
**lie down** [Lie](#Lie)  
**lie down in** something [LieIn](#LieIn)  
**lie down on** something [LieOn](#LieOn)  
**lie in** something [LieIn](#LieIn)  
**lie on** something [LieOn](#LieOn)  
**light** something [Light](#Light)  
**light** something **with** something [BurnWith](#BurnWith)  
**list tests** (/fully) [ListTests](#ListTests)  
**listen** [Listen](#Listen)  
**listen to** something [ListenTo](#ListenTo)  
**lock** something [Lock](#Lock)  
**lock** something **with** something [LockWith](#LockWith)  
**look** [Look](#Look)  
**look** something [Examine](#Examine)  
**look** topic **up** [ConsultWhatAbout](#ConsultWhatAbout)  
**look** topic **up in/on** something [ConsultAbout](#ConsultAbout)  
**look around** [Look](#Look)  
**look at** something [Examine](#Examine)  
**look behind** something [LookBehind](#LookBehind)  
**look for** topic [ConsultWhatAbout](#ConsultWhatAbout)  
**look for** topic **in/on** something [ConsultAbout](#ConsultAbout)  
**look in/inside** something [LookIn](#LookIn)  
**look through/thru** something [LookThrough](#LookThrough)  
**look under** something [LookUnder](#LookUnder)  
**look up** topic [ConsultWhatAbout](#ConsultWhatAbout)  
**look up** topic **in/on** something [ConsultAbout](#ConsultAbout)  

### <span id="M">M</span>

**move** something [Move](#Move)  
**move** something direction [PushTravelDir](#PushTravelDir)  
**move** something **down** something
[PushTravelClimbDown](#PushTravelClimbDown)  
**move** something **in/in to/into** something
[PushTravelEnter](#PushTravelEnter)  
**move** something **out/out** of something
[PushTravelGetOutOf](#PushTravelGetOutOf)  
**move** something **to/under** something [MoveTo](#MoveTo)  
**move** something **through/thru something**
[PushTravelThrough](#PushTravelThrough)  
**move** something **up** something
[PushTravelClimbUp](#PushTravelClimbUp)  
**move** something **with** something [MoveWith](#MoveWith)  

### <span id="N">N</span>

**n** [Travel](#Travel)  
**ne** [Travel](#Travel)  
**negative** [SayNo](#SayNo)  
**no** [No](#No)  
**north** [Travel](#Travel)  
**northeast** [Travel](#Travel)  
**<span class="system">notify</span>** [Notify](#Notify)  
**<span class="system">notify off</span>** [NotifyOff](#NotifyOff)  
**<span class="system">notify on</span>** [NotifyOn](#NotifyOn)  

### <span id="O">O</span>

**offer** something [GiveToImplicit](#GiveToImplicit)  
**offer** someone something [GiveTo](#GiveTo)  
**offer** something **to** someone [GiveTo](#GiveTo)  
**open** something [Open](#Open)  
**out** [Travel](#Travel)  
**out of** something [GetOutOf](#GetOutOf)  

### <span id="P">P</span>

**p** [Travel](#Travel)  
**peer through/thru** something [LookThrough](#LookThough)  
**pick** something **up** [Take](#Take)  
**pick up** something [Take](#Take)  
**place** something **behind** something [PutBehind](#PutBehind)  
**place** something **in/into/in to/inside/inside of** something
[PutIn](#PutIn)  
**place** something **on/onto/on to/upon** something [PutOn](#PutOn)  
**place** something **under** something [PutUnder](#PutUnder)  
**plug** something **in** [PlugIn](#PlugIn)  
**plug** something **in/in to/into** something [PlugInto](#PlugInto)  
**plug in** something [PlugIn](#PlugIn)  
**<span class="debug">pn</span>** something [Purloin](#Purloin)  
**ponder** [Think](#Think)  
**ponder about** topic [ThinkAbout](#ThinkAbout)  
**port** [Travel](#Travel)  
**pour** something [Pour](#Pour)  
**pour** something **in/in to/into** something [PourInto](#PourInto)  
**pour** something **on/on to/onto** something [PourOnto](#PourOnto)  
**press** something [Push](#Push)  
**pull** something [Pull](#Pull)  
**pull** something direction [PushTravelDir](#PushTravelDir)  
**pull** something **down** something
[PushTravelClimbDown](#PushTravelClimbDown)  
**pull** something **in/in to/into** something
[PushTravelEnter](#PushTravelEnter)  
**pull** something **out/out** of something
[PushTravelGetOutOf](#PushTravelGetOutOf)  
**pull** something **through/thru something**
[PushTravelThrough](#PushTravelThrough)  
**pull** something **up** something
[PushTravelClimbUp](#PushTravelClimbUp)  
**punch** something [Attack](#Attack)  
**<span class="debug">purloin</span>** something [Purloin](#Purloin)  
**push** something [Push](#Push)  
**push** something direction [PushTravelDir](#PushTravelDir)  
**push** something **down** something
[PushTravelClimbDown](#PushTravelClimbDown)  
**push** something **in/in to/into** something
[PushTravelEnter](#PushTravelEnter)  
**push** something **out/out** of something
[PushTravelGetOutOf](#PushTravelGetOutOf)  
**push** something **to/under** something [MoveTo](#MoveTo)  
**push** something **through/thru something**
[PushTravelThrough](#PushTravelThrough)  
**push** something **up** something
[PushTravelClimbUp](#PushTravelClimbUp)  
**put** something **down** [Drop](#Drop)  
**put** something **behind** something [PutBehind](#PutBehind)  
**put** something **in/into/in to/inside/inside of** something
[PutIn](#PutIn)  
**put** something **on** [Wear](#Wear)  
**put** something **on/onto/on to/upon** something [PutOn](#PutOn)  
**put** something **out** [Extinguish](#Extinguish)  
**put** something **under** something [PutUnder](#PutUnder)  
**put down** something [Drop](#Drop)  
**put on** something [Wear](#Wear)  
**put out** something [Extinguish](#Extinguish)  

### <span id="Q">Q</span>

**<span class="system">q</span>** [Quit](#Quit)  
**quaff** something [Drink](#Drink)  
**<span class="system">quit</span>** [Quit](#Quit)  

### <span id="R">R</span>

**read** something [Read](#Read)  
**read about** topic [ConsultWhatAbout](#ConsultWhatAbout)  
**read about** topic **in/on** something [ConsultAbout](#ConsultAbout)  
**<span class="system">record</span>** \[filename\]
[RecordOn](#RecordOn)  
**<span class="system">record events</span>** \[filename\]
[RecordEvents](#RecordEvents)  
**<span class="system">record events on</span>**
[RecordEvents](#RecordOn)  
**<span class="system">record off</span>** [RecordOff](#RecordOff)  
**<span class="system">record on</span>** [RecordOn](#RecordOn)  
**remove** something [Remove](#Remove)  
**remove** something **from** something [TakeFrom](#TakeFrom)  
**<span class="system">replay</span>** \[filename\] [Replay](#Replay)  
**<span class="system">replay nonstop/quiet</span>** \[filename\]
[Replay](#Replay)  
**<span class="system">restart</span>** [Restart](#Restart)  
**<span class="system">restore</span>** \[filename\]
[Restore](#Restore)  
**return** [GoBack](#GoBack)  
**rotate** something [Turn](#Turn)  
**rotate** something **to** literal [TurnTo](#TurnTo)  
**rotate** something **with** something [TurnWith](#TurnWith)  
**<span class="system">rq</span>** \[filename\] [Replay](#Replay)  
**ruin** something [Break](#Break)  
**run** [VagueTravel](#VagueTravel)  
**run** direction [Travel](#Travel)  

### <span id="S">S</span>

**s** [Travel](#Travel)  
**<span class="system">save</span>** \[filename\] [Save](#Save)  
**say** topic [Say](#Say)  
**say** topic **to** someone [SayTo](#SayTo)  
**say bye/goodbye/good-bye/good bye** [Goodbye](#Goodbye)  
**say hallo/hello/hi** [Hello](#Hello)  
**say hello to** someone [TalkTo](#TalkTo)  
**say no** [SayNo](#SayNo)  
**say that** topic [Say](#Say)  
**say that** topic **to** someone [SayTo](#SayTo)  
**say yes** [SayYes](#SayYes)  
**sb** [Travel](#Travel)  
**screw** something [Screw](#Screw)  
**screw** something **with** something [ScrewWith](#ScrewWith)  
**<span class="system">score</span>** [Score](#Score)  
**scream** [Yell](#Yell)  
**<span class="system">script</span>** \[filename\]
[ScriptOn](#ScriptOn)  
**<span class="system">script off</span>** [ScriptOff](#ScriptOff)  
**<span class="system">script on</span>** [ScriptOn](#ScriptOn)  
**se** [Travel](#Travel)  
**search** something [Search](#Search)  
**search** something **for** topic [ConsultAbout](#ConsultAbout)  
**search for** topic [ConsultWhatAbout](#ConsultWhatAbout)  
**search for** topic **in/on** something [ConsultAbout](#ConsultAbout)  
**set** something [Set](#Set)  
**set** something **down** [Drop](#Drop)  
**set** something **behind** something [PutBehind](#PutBehind)  
**set** something **in/into/in to/inside/inside of** something
[PutIn](#PutIn)  
**set** something **on/onto/on to/upon** something [PutOn](#PutOn)  
**set** something **to** literal [SetTo](#SetTo)  
**set** something **under** something [PutUnder](#PutUnder)  
**set down** something [Drop](#Drop)  
**set fire to** something [Burn](#Burn)  
**set fire to** something **with** something [BurnWith](#BurnWith)  
**sit** [Sit](#Sit)  
**sit down** [Sit](#Sit)  
**sit down in** something [SitIn](#SitIn)  
**sit down on** something [SitOn](#SitOn)  
**sit in** something [SitIn](#SitIn)  
**sit on** something [SitOn](#SitOn)  
**sleep** [Sleep](#Sleep)  
**smash** something [Break](#Break)  
**should** topic [Query](#Query)  
**shout** [Yell](#Yell)  
**show** something [ShowToImplicit](#ShowToImplicit)  
**show** someone something [ShowTo](#ShowTo)  
**show** something **to** someone [ShowTo](#ShowTo)  
**shut** something [Close](#Close)  
**smell** [Smell](#Smell)  
**smell** something [SmellSomething](#SmellSomething)  
**sniff** [Smell](#Sniff)  
**sniff** something [SmellSomething](#SmellSomething)  
**south** [Travel](#Travel)  
**southeast** [Travel](#Travel)  
**southwest** [Travel](#Travel)  
**<span class="system">status</span>** [Score](#Score)  
**stand** [Stand](#Stand)  
**stand in\|in to\|into** something [StandIn](#StandIn)  
**stand on\|on to\|onto** something [StandOn](#StandOn)  
**stand up** [Stand](#Stand)  
**starboard** [Travel](#Travel)  
**strike** something **with** something [AttackWith](#AttackWith)  
**sw** [Travel](#Travel)  
**switch** something [SwitchVague](#SwitchVague)  
**switch** something **off** [SwitchOff](#SwitchOff)  
**switch** something **on** [SwitchOn](#SwitchOn)  
**switch off** something [SwitchOff](#SwitchOff)  
**switch on** something [SwitchOn](#SwitchOn)  

### <span id="T">T</span>

**t** topic [TellAboutImplicit](#TellAboutImplicit)  
**t** someone **about** topic [TellAbout](#TellAbout)  
**talk about** topic [TalkAboutImplicit](#TalkAboutImplicit)  
**talk to** someone [TalkTo](#TalkTo)  
**talk to** someone **about** topic [TalkAbout](#TalkAbout)  
**take** something [Take](#Take)  
**take** something off [Doff](#Doff)

dobj



  
**take** something **from/out of/off/off of** something
[TakeFrom](#TakeFrom)  
**take inventory** [Inventory](#Inventory)  
**take off** something [Doff](#Doff)

dobj

  
**taste** something [Taste](#Taste)  
**tell** topic [TellAboutImplicit](#TellAboutImplicit)  
**tell** someone **about** topic [TellAbout](#TellAbout)  
**tell** someone **that** topic [SayTo](#SayTo)  
**tell** someone **to** literal [TellTo](#TellTo)  
**tell me about** topic [AskAboutImplicit](#AskAboutImplicit)  
**<span class="system">terse</span>** [Brief](#Brief)  
**test** literal [DoTest](#DoTest)  
**think** [Think](#Think)  
**think about** topic [ThinkAbout](#ThinkAbout)  
**throw** something [Throw](#Throw)  
**throw** something direction [ThrowDir](#ThrowDir)  
**throw** someone something [ThrowTo](#ThrowTo)  
**throw** something **at** something [ThrowAt](#ThrowAt)  
**throw** something **to/to the** direction [ThrowDir](#ThrowDir)  
**throw** something **to** someone [ThrowTo](#ThrowTo)  
**throw d/down** something [ThrowDir](#ThrowDir)  
**topics** [Topics](#Topics)  
**toss** something [Throw](#Throw)  
**toss** something direction [ThrowDir](#ThrowDir)  
**toss** something **at** something [ThrowAt](#ThrowAt)  
**toss** something **to/to the** direction [ThrowDir](#ThrowDir)  
**toss** something **to** someone [ThrowTo](#ThrowTo)  
**touch** something [Feel](#Feel)  
**turn** something [Turn](#Turn)  
**turn** something **off** [SwitchOff](#SwitchOff)  
**turn** something **on** [SwitchOn](#SwitchOn)  
**turn** something **to** literal [TurnTo](#TurnTo)  
**turn** something **with** something [TurnWith](#TurnWith)  
**turn off** something [SwitchOff](#SwitchOff)  
**turn on** something [SwitchOn](#SwitchOn)  
**twist** something [Turn](#Turn)  
**twist** something **to** literal [TurnTo](#TurnTo)  
**twist** something **with** something [TurnWith](#TurnWith)  
**type** literal [Type](#Type)  
**type** literal **on** something [TypeOn](#TypeOn)  
**type on** something [TypeOnVague](#TypeOnVague)  

### <span id="U">U</span>

**u** [Travel](#Travel)  
**unbuckle** something [Unfasten](#Unfasten)  
**unbuckle** something **from** something
[UnfastenFrom](#UnfastenFrom)  
**<span class="system">undo</span>** [Undo](#Undo)  
**unfasten** something [Unfasten](#Unfasten)  
**unfasten** something **from** something
[UnfastenFrom](#UnfastenFrom)  
**unlock** something [Unlock](#Unlock)  
**unlock** something **with** something [UnlockWith](#UnlockWith)  
**unplug** something [Unplug](#Unplug)  
**unplug** something **from** something [UnplugFrom](#UnplugFrom)  
**unscrew** something [Unscrew](#Unscrew)  
**unscrew** something **with** something [UnscrewWith](#UnscrewWith)  
**up** [Travel](#Travel)  

### <span id="V">V</span>

**<span class="system">verbose</span>** [Verbose](#Verbose)  
**<span class="system">version</span>** [Version](#Version)  

### <span id="W">W</span>

**wait** [Wait](#Wait)  
**walk** [VagueTravel](#VagueTravel)  
**walk** direction [Travel](#Travel)  
**walk down** [ClimbDownVague](#ClimbDownVague)  
**walk down** something [ClimbDown](#ClimbDown)  
**walk in/inside/in to/into** something [Enter](#Enter)  
**walk through/thru** something [GoThrough](#GoThrough)  
**walk to\|to the** direction [Travel](#Travel)  
**walk to** somewhere [GoTo](#GoTo)  
**walk up** [ClimbUpVague](#ClimbUpVague)  
**walk up** something [ClimbUp](#ClimbUp)  
**wear** something [Wear](#Wear)  
**what/when/where/whether/who** topic [Query](#Query)  
**<span class="system">wordy</span>** [Verbose](#Verbose)  
**would** topic [Query](#Query)  
**wreck** something [Break](#Break)  
**write** literal [Write](#Write)  
**write** literal **in/on** something [WriteOn](#WriteOn)  

### <span id="X">X</span>

**x** something [Examine](#Examine)  

### <span id="Y">Y</span>

**yell** [Yell](#Yell)  
**yes** [SayYes](#SayYes)  

### <span id="Z">Z</span>

**z** [Wait](#Wait)  

## <span id="actionlist">Action List</span>

The table below lists each of the actions defined in the adv3Lite
library, and summarizes the effects of each action and the conditions
under which it is allowed to proceed. The purpose is to give game
authors a quick reference to the main properties they may need to
customize to allow an action to go ahead or explain why it can't.
<span class="system">System actions</span> and
<span class="debug">debugging actions</span> are listed in a different
colour, since game code is less likely to need to customize these.

The table deals with three classes of action: (1) those that take no
Thing objects (IActions, SystemActions, TopicActions and
LiteralActions); (2) those that take one Thing object (TActions,
TopicTActions and LiteralTActions) and (3) those that take two Thing
objects (TIActions). Class (1) and (2) actions are listed in a single
row of the table; class (3) actions take two rows. Class (1) actions
have a dash in the **obj** column (indicating that no objects are
involved). Class (2) actions have 'dobj' in the **obj** column,
indicating that the information given relates to the direct object of
the action. Class (3) actions have 'dobj' in the **obj** column in the
first row, and 'iobj' in the **obj** column in the second row,
indicating that the information given in each row relates to the direct
object and indirect objects of the action respectively.

For Class (2) and (3) actions the remaining columns relate to how the
action handling is defined on the Thing class. The **Verify
Property/Condition** column holds the name of the basic property that
must be true for the action to go ahead with that object, together with
the default value of that property in the form
`propName = val`. For example, the basic
property determining whether something can be opened is
`isOpenable`, which is nil by default on Thing,
so it appears as `isOpenable = nil`. Sometimes
this property depends on the value of another property, e.g.
`isTakeable = !isFixed`, meaning a Thing is
takeable if it is not fixed in place. Occasionally this colummn just
holds the value nil, which means that the verfy routine on Thing fails
the action unconditionally (as is mainly the case with conversational
actions).

The **Failure Message** column then holds the name of the property that
defines the message to be displayed if the action fails on account of
not meeting the Verify Property/Condition requirement. For example, if
the player attempts to OPEN an object whose
`isOpenable` property is nil, the object's
`cannotOpenMsg` property is displayed. Knowing
this property name makes it easy for game authors to customize the
failure messages on particular objects or classes of object.

The **Action Result** column attempts to summarize the *main* result of
the action if it is allowed to proceed. Note that actions may have
additional side effects not shown in the table. Where an entry is blank,
no action results are defined for that action on Thing. Where the action
column contains an entry like `report { DMsg (so and
so) }`, this means that the action method does nothing, but the
report phase displays the report indicated. Occasionally there is a link
to another class name, such as Key; this means that more significant
handling for the action is defined on the class in question and that
clicking on the link will take you to an appropriate code extract where
you can see the details of the handling on that class.

For Class (1) actions there are no verify routines and no corresponding
properties, but where it is possible to summarize the conditions under
which a Class (1) action might fail and the message that would then be
displayed, this information is given in the appropriate column. The
outcome of Class (1) actions is summarized in the **Action Result**
column.

A blank cell indicates that the library defines no verify or action
routine (as the case may be) for the action in question on Thing (though
action handling may be defined on other classes). Actions with blank
entries in the **Action Result** column do nothing on the Thing class
(and will normally be failed at the verify stage).

Sometimes the verification conditions or action outcomes are simply too
complicated to be usefully summarized in the table. Where that is the
case a row of three asterisks (\* \* \*) appears instead. If the
asterisks are hyperlinked, you can click on the link to view a relevant
code extract which should give you the full picture.

In any case a table like this can hardly give the full picture except
for the very simplest cases. In particular, the properties listed in the
**Verify Property/Condition** column are simply those relating to
whether an action can succeed on an object because of the type of object
it is. For example, there is no prospect of an OPEN command operating on
an object unless that object is openable (isOpenable = true), but while
`isOpenable = true` is a necessary condition for
the OPEN command to work, it may not be sufficient. An OPEN command will
also fail, for example, if the object in question is already open, or if
it is locked. In some cases the presence of further such information is
indicated in the table by a hyperlinked double asterisk
([\*\*](#actionlist)); clicking on the link will take you to a code
extract that should give you a fuller picture.

For some types of customization there will be no substitute for
consulting the full library source code. The table below should,
however, hopefully reduce the need to do so by listing the properties
you will most commonly need to override.

[A](#aA) [B](#aB) [C](#aC) [D](#aD) [E](#aE) [F](#aF) [G](#aG) [H](#aH)
[I](#aI) [J](#aJ) [K](#aK) [L](#aL) [M](#aM) [N](#N) [O](#aO) [P](#aP)
[Q](#aQ) [R](#aR) [S](#aS) [T](#aT) [U](#aU) [V](#uV) [W](#aW) X
[Y](#aY) Z

**Action**

**obj**

**Verify Property/Condition**

**Failure Message**

**Action Result**

**<span id="aA">A</span>**

<span id="About"></span><span class="system">About</span>

—

versionInfo.showAbout()

<span id="Again"></span><span class="system">Again</span>

—

[\* \* \*](source.html#Again)

<span id="AskAbout"></span>AskAbout

dobj

nil

cannotTalkToMsg

<span id="AskAboutImplicit"></span>AskAboutImplicit

—

\[[ImplicitConversationAction](source.html#ImplicitConversationAction)\]

<span id="AskFor"></span>AskFor

dobj

nil

cannotTalkToMsg

<span id="AskForImplicit"></span>AskForImplicit

—

\[[ImplicitConversationAction](source.html#ImplicitConversationAction)\]

<span id="Attach"></span>Attach

dobj

isAttachable = nil

cannotAttachMsg

askForIobj(AttachTo)

<span id="AttachTo"></span>AttachTo

dobj

isAttachable = nil

cannotAttachMsg

iobj

canAttachToMe = nil

cannotAttachToMsg

<span id="Attack"></span>Attack

dobj

isAttackable = nil

cannotAttackMsg

<span id="AttackWith"></span>AttackWith

dobj

isAttackable = nil

cannotAttackMsg

iobj

canAttackWithMe = nil

cannotAttackWithMsg

**<span id="aB">B</span>**

<span id="Board"></span>Board

dobj

isBoardable = nil

cannotBoardMsg

gActor.actionMoveInto(self)

<span id="Break"></span>Break

dobj

isBreakable = true

cannotBreakMsg

<span id="Brief"></span><span class="system">Brief</span>

—

gameMain.verbose = nil

<span id="Burn"></span>Burn

dobj

isBurnable = nil

cannotBurnMsg

<span id="BurnWith"></span>BurnWith

dobj

isBurnable = nil

cannotBurnMsg

iobj

canBurnWithMe = nil

cannotBurnWithMsg

**<span id="aC">C</span>**

<span id="Clean"></span>Clean

dobj

isCleanable = true

cannotCleanMsg

makeCleaned(true)

<span id="CleanWith"></span>CleanWith

dobj

isCleanable = true

cannotCleanMsg

makeCleaned(true)

iobj

canCleanWithMe = nil

cannotCleanWithMsg

<span id="Climb"></span>Climb

dobj

isClimbable = nil

cannotClimbMsg

<span id="ClimbDown"></span>ClimbDown

dobj

canClimbDownMe = isClimbable

cannotClimbDownMsg

<span id="ClimbDownVague"></span>ClimbDownVague

—

askForDobj(ClimbDown)

<span id="ClimbUp"></span>ClimbUp

dobj

canClimbUpMe = isClimbable

cannotClimbMsg

<span id="ClimbUpVague"></span>ClimbUpVague

—

askForDobj(ClimbUp)

<span id="Close"></span>Close

dobj

isCloseable = isOpenable [\*\*](source.html#Thing:Close)

cannotCloseMsg

makeOpen(nil) [\*\*](source.html#Thing:Close)

<span id="ConsultAbout"></span>ConsultAbout

dobj

isConsultable

cannotConsultMsg

<span id="ConsultWhatAbout"></span>ConsultWhatAbout

—

askForDobj(ConsultAbout)

<span id="Continue"></span>Continue

—

[\* \* \*](source.html#Continue)

<span id="Credits"></span><span class="system">Credits</span>

—

versionInfo.showCredit()

<span id="Cut"></span>Cut

dobj

isCuttable = nil

cannotCutMsg

askForIobj(CutWith)

<span id="CutWith"></span>CutWith

dobj

isCuttable = nil

cannotCutMsg

iobj

canCutWithMe = nil

cannotCutWithMsg

**<span id="aD">D</span>**

<span id="Debug"></span><span class="debug">Debug</span>

—

[\* \* \*](source.html#Debug)

<span id="DebugI"></span><span class="debug">DebugI</span>

—

t3DebugTrace(T3DebugCheck)

DMsg(debugger not present)

t3DebugTrace(T3DebugBreak)

<span id="Detach"></span>Detach

dobj

isDetachable = nil

cannotDetachMsg

<span id="DetachFrom"></span>DetachFrom

dobj

isDetachable = nil

cannotDetachMsg

iobj

canDetachFromMe = nil

cannotDetachFromMsg

<span id="Dig"></span>Dig

dobj

isDiggable = nil

cannotDigMsg

askForIobj(DigWith)

<span id="DigWith"></span>DigWith

dobj

isDiggable = nil

cannotDigMsg

iobj

canDigWithMe = nil

cannotDigWithMsg

<span id="Doff"></span>Doff

dobj

isDoffable = isWearable [\*\*](source.html#Thing:Doff)

cannotDoffMsg

makeWorn(nil)

<span id="DoTest"></span><span class="debug">DoTest</span>

—

—

—

run test script

<span id="Drink"></span>Drink

dobj

isDrinkable = nil

cannotDrinkMsg

<span id="Drop"></span>Drop

dobj

isDroppable = true

cannotDropMsg

actionMoveInto(gActor.location.dropLocation);

**<span id="aE">E</span>**

<span id="Eat"></span>Eat

dobj

isEdible = nil

cannotEatMsg

moveInto(nil)

<span id="Enter"></span>Enter

dobj

isEnterable = nil

cannotEnterMsg

gActor.actionMoveInto(self)

<span id="EnterOn"></span>EnterOn

dobj

canEnterOnMe = nil

cannotEnterOnMsg

<span id="Evaluate"></span><span class="debug">Evaluate</span>

—

Compiler.eval(stripQuotesFrom(cmd.dobj.name))

<span id="Examine"></span>Examine

dobj

desc; examineStatus(); [\*\*](source.html#Thing:Examine)

<span id="Exits"></span><span class="system">Exits</span>

—

gExitLister != nil

DMsg(no exit lister)

gExitLister.showExitsCommand()

<span id="ExitsColour"></span><span class="system">ExitsColour</span>

—

gExitLister != nil

DMsg(no exit lister)

[\* \* \*](source.html#ExitsColour)

<span id="ExitsMode"></span><span class="system">ExitsMode</span>

—

gExitLister != nil

DMsg(no exit lister)

gExitLister.exitsOnOffCommand(stat, stat)

<span id="Extinguish"></span>Extinguish

dobj

isExtinguishable = true

cannotExtinguishMsg

makeLit(nil)

**<span id="aF">F</span>**

<span id="Fasten"></span>Fasten

dobj

isFastenable = nil

cannotFastenMsg

makeFastened(true)

<span id="FastenTo"></span>FastenTo

dobj

isFastenable = nil

cannotFastenMsg

iobj

canFastenToMe = nil

cannotFastenToMsg

<span id="Feel"></span>Feel

dobj

isFeelable = true

cannotFeelMsg

display(&feelDesc);

<span id="FiatLux"></span><span class="debug">FiatLux</span>

—

gPlayerChar.isLit = !gPlayerChar.isLit

<span id="Flip"></span>Flip

dobj

isFlippable = isSwitchable

cannotFlipMsg

<span id="Follow"></span>Follow

dobj

isFollowable = nil

cannotFollowMsg

<span id="FullScore"></span><span class="system">FullScore</span>

—

libGlobal.scoreObj.showFullScore()

**<span id="aG">G</span>**

<span id="GetOff"></span>GetOff

dobj

gActor.isIn(self)

actorNotOnMsg

gActor.actionMoveInto(exitLocation)

<span id="GetOut"></span>GetOut

—

GoOut.execAction(cmd)

<span id="GetOutOf"></span>GetOutOf

dobj

gActor.isIn(self)

actorNotInMsg

gActor.actionMoveInto(exitLocation)

<span id="GiveTo"></span>GiveTo

dobj

!isIn(gIobj)

alreadyHasMsg

iobj

nil

cannotGiveToMsg

<span id="GiveToImplicit"></span>GiveToImplicit

dobj

\* \* \*

gPlayerChar.currentInterlocutor.handleTopic(&giveTopics, \[self\])

<span id="GoBack"></span>GoBack

—

[\* \* \*](source.html#GoBack)

<span id="Goodbye"></span>Goodbye

—

gPlayerChar.currentInterlocutor != nil

DMsg(not talking)

gPlayerChar.currentInterlocutor.endConversation(endConvBye)

<span id="GoIn"></span>GoIn

—

[\[Travel\]](source.html#GoIn)

<span id="GoNear"></span><span class="debug">GoNear</span>

dobj

[\* \* \*](source.html#Thing:GoNear)

getOutermostRoom.travelVia(gActor); [\*\*](source.html#Thing:GoNear)

<span id="GoThrough"></span>GoThrough

dobj

canGoThroughMe = nil

cannotGoThroughMsg

<span id="GoTo"></span>GoTo

dobj

[\* \* \*](source.html#Thing:GoTo)

[\* \* \*](source.html#Thing:GoTo)

<span id="GoOut"></span>GoOut

—

[\[Travel or GetOff\]](source.html#GoOut)

**<span id="aH">H</span>**

<span id="Hello"></span>Hello

—

[\* \* \*](source.html#Hello)

<span id="Hints"></span><span class="system">Hints</span>

—

gHintManager != nil

DMsg(hints not present)

gHintManager.showHints()

<span id="HintsOff"></span><span class="system">HintsOff</span>

—

gHintManager != nil

DMsg(no hints to disable)

gHintManager.disableHints()

**<span id="aI">I</span>**

<span id="Inventory"></span>Inventory

—

[\* \* \*](source.html#Inventory)

**<span id="aJ">J</span>**

<span id="Jump"></span>Jump

—

DMsg(jump)

<span id="JumpOff"></span>JumpOff

dobj

canJumpOffMe = \[the actor is on dobj\]

cannotJumpOffMsg

gActor.actionMoveInto(location)

<span id="JumpOffIntransitive"></span>JumpOffIntransitive

<span id="JumpOver"></span>JumpOver

dobj

canJumpOverMe = nil

cannotJumpOverMsg

**<span id="aK">K</span>**

<span id="Kiss"></span>Kiss

dobj

isKissable = true

cannotKissMsg

report { DMsg(kiss) }

**<span id="aL">L</span>**

<span id="Lie"></span>Lie

—

askForDobj(LieOn)

<span id="LieIn"></span>LieIn

dobj

asDobjFor(Enter)

cannotEnterMsg

asDobjFor(Enter)

<span id="LieOn"></span>LieOn

dobj

canLieOnMe = isBoardable

cannotLieOnMsg

asDobjFor(Board)

<span id="Light"></span>Light

dobj

isLightable = nil

cannotLightMsg

makeLit(true)

<span id="Listen"></span>Listen

—

[\* \* \*](source.html#Listen)

<span id="ListenTo"></span>ListenTo

dobj

display(&listenDesc);

<span id="ListTests"></span><span class="debug">ListTests</span>

—

—

—

list available test scripts

<span id="Lock"></span>Lock

dobj

lockability = notLockable [\*\*](source.html#Thing:Lock)

notLockableMsg

makeLocked(true) [\*\*](source.html#Thing:Lock)

<span id="LockWith"></span>LockWith

dobj

lockability = notLockable [\*\*](source.html#Thing:LockWith)

notLockableMsg

iobj

canLockWithMe = canUnlockWithMe

cannotLockWithMsg

[Key](source.html#Key:LockWith)

<span id="LookBehind"></span>LookBehind

dobj

canLookBehindMe = true

cannotLookBehindMsg

[\* \* \*](source.html#Thing:LookBehind)

<span id="Look"></span>Look

\-

gActor.outermostVisibleParent().lookAroundWithin()

<span id="LookIn"></span>LookIn

dobj

[\* \* \*](source.html#Thing:LookIn)

<span id="LookThrough"></span>LookThrough

dobj

canLookThroughMe = true

cannotLookThroughMsg

say(lookThroughMsg)

<span id="LookUnder"></span>LookUnder

dobj

canLookUnderMe = true

cannotLookUnderMsg

[\* \* \*](source.html#Thing:LookUnder)

**<span id="aM">M</span>**

<span id="Move"></span>Move

dobj

isMoveable = !isFixed

cannotMoveMsg

report { DMsg(move no effect); }

<span id="MoveTo"></span>MoveTo

dobj

isMoveable = !isFixed

cannotMoveMsg

makeMovedTo(gIobj)

iobj

canMoveToMe = true

cannotMoveToMsg

<span id="MoveWith"></span>MoveWith

dobj

isMoveable = !isFixed

cannotMoveMsg

report { DMsg(move no effect); }

iobj

canMoveWithMe = nil

cannotMoveWithMsg

**<span id="aN">N</span>**

<span id="Notify"></span><span class="system">Notify</span>

—

\* \* \*

<span id="NotifyOff"></span><span class="system">NotifyOff</span>

—

libGlobal.scoreObj.showNotify.isOn = nil

<span id="NotifyOn"></span><span class="system">NotifyOn</span>

—

libGlobal.scoreObj.scoreNotify.isOn = true

**<span id="aO">O</span>**

<span id="Open"></span>Open

dobj

isOpenable = nil [\*\*](source.html#Thing:Open)

cannotOpenMsg

makeOpen(true) [\*\*](source.html#Thing:Open)

**<span id="aP">P</span>**

<span id="PlugIn"></span>PlugIn

dobj

isPlugable = nil

cannotPlugMsg

<span id="PlugInto"></span>PlugInto

dobj

isPlugable = nil

cannotPlugMsg

iobj

canPlugIntoMe = nil

cannotPlugIntoMsg

<span id="Pour"></span>Pour

dobj

isPourable = nil

cannotPourMsg

<span id="PourInto"></span>PourInto

dobj

isPourable = nil

cannotPourMsg

iobj

canPourIntoMe = (contType == In \|\| remapIn != nil)

cannotPourIntoMsg

<span id="PourOnto"></span>PourOnto

dobj

isPourable = nil

cannotPourMsg

iobj

canPourOntoMe = true

cannotPourOntoMsg

<span id="Pull"></span>Pull

dobj

isPullable = true

cannotPullMsg

say(pullNoEffectMsg)

<span id="Purloin"></span><span class="debug">Purloin</span>

dobj

!isFixed

cannotTakeMsg

moveInto(gActor)

<span id="Push"></span>Push

dobj

isPushable = true

cannotPushMsg

say(pushNoEffectMsg)

<span id="PushTravelClimbDown"></span>PushTravelClimbDown

dobj

canPushTravel = nil

cannotPushTravelMsg

doPushTravel(Down) [\*\*](source.html#Thing:PushTravelClimbDown)

iobj

canClimbDownMe = nil

cannotPushDownMsg

<span id="PushTravelClimbUp"></span>PushTravelClimbUp

dobj

canPushTravel = nil

cannotPushTravelMsg

doPushTravel(Up)

\*\*

iobj

isClimbable = nil

cannotPushUpMsg

<span id="PushTravelDir"></span>PushTravelDir

dobj

canPushTravel = nil

cannotPushTravelMsg

[\* \* \*](source.html#PushTravelDir)

<span id="PushTravelEnter"></span>PushTravelEnter

dobj

canPushTravel = nil

cannotPushTravelMsg

iobj

isEnterable

cannotPushIntoMsg

\* \* \*

<span id="PushTravelGetOutOf"></span>PushTravelGetOutOf

dobj

canPushTravel = nil

cannotPushTravelMsg

\* \* \*

iobj

\* \* \*

\* \* \*

\* \* \*

<span id="PushTravelThrough"></span>PushTravelThrough

dobj

canPushTravel = nil

cannotPushTravelMsg

doPushTravel(Through)

\*\*

iobj

canGoThroughMe = nil

cannotPushThroughMsg

<span id="PutBehind"></span>PutBehind

dobj

!isFixed [\*\*](source.html#Thing:dobjPutBehind)

cannotTakeMsg

iobj

canPutBehindMe = (contType == Behind)
[\*\*](source.html#Thing:iobjPutBehind)

cannotPutBehindMsg

gDobj.actionMoveInto(self) [\*\*](source.html#Thing:iobjPutBehind)

<span id="PutIn"></span>PutIn

dobj

!isFixed [\*\*](source.html#Thing:dobjPutIn)

cannotTakeMsg

iobj

canPutInMe = (contType == In) [\*\*](source.html#Thing:iobjPutIn)

cannotPutInMsg

gDobj.actionMoveInto(self) [\*\*](source.html#Thing:iobjPutIn)

<span id="PutOn"></span>PutOn

dobj

!isFixed [\*\*](source.html#Thing:dobjPutOn)

cannotTakeMsg

iobj

contType == On [\*\*](source.html#Thing:iobjPutOn)

cannotPutOnMsg

gDobj.actionMoveInto(self) [\*\*](source.html#Thing:iobjPutOn)

<span id="PutUnder"></span>PutUnder

dobj

!isFixed [\*\*](source.html#Thing:dobjPutUnder)

cannotTakeMsg

iobj

canPutUnderMe = (contType == Under)
[\*\*](source.html#Thing:iobjPutUnder)

cannotPutUnderMsg

gDobj.actionMoveInto(self) [\*\*](source.html#Thing:iobjPutUnder)

**<span id="aQ">Q</span>**

<span id="Query"></span>Query

—

\[ImplicitConversationAction\]

<span id="QueryAbout"></span>QueryAbout

—

nil

cannotTalkToMsg

<span id="QueryVague"></span>QueryVague

—

\[MiscConvAction\]

<span id="Quit"></span><span class="system">Quit</span>

—

throw new QuittingException

**<span id="aR">R</span>**

<span id="Read"></span>Read

dobj

isReadable = propType(&readDesc) != TypeNil

cannotReadMsg

display(&readDesc);

<span id="Record"></span><span class="system">Record</span>

—

\* \* \*

<span id="RecordEvents"></span><span class="system">RecordEvents</span>

—

\* \* \*

<span id="RecordOff"></span><span class="system">RecordOff</span>

—

\* \* \*

<span id="Remove"></span>Remove

dobj

isRemoveable = isTakeable

cannotRemoveMsg

removeDoer:doInstead(Take\|Doff)

<span id="Replay"></span><span class="system">Replay</span>

—

\* \* \*

<span id="Restart"></span><span class="system">Restart</span>

—

throw new RestartSignal

<span id="Restore"></span><span class="system">Restore</span>

—

askAndRestore()

**<span id="aS">S</span>**

<span id="Save"></span><span class="system">Save</span>

—

\* \* \*

<span id="Say"></span>Say

—

\[[ImplicitConversationAction](source.html#ImplicitConversationAction)\]

<span id="SayNo"></span>SayNo

—

\[MiscConvAction\]

<span id="SayTo"></span>SayTo

dobj

nil

cannotTalkToMsg

<span id="SayYes"></span>SayYes

—

\[MiscConvAction\]

<span id="Screw"></span>Screw

dobj

isScrewable = nil

cannotScrewMsg

<span id="ScrewWith"></span>ScrewWith

dobj

isScrewable = nil

cannotScrewMsg

iobj

canScrewWithMe = nil

cannotScrewWithMsg

<span id="Search"></span>Search

dobj

asDobjFor(LookIn)

asDobjFor([LookIn](#LookIn))

<span id="Set"></span>Set

dobj

isSettable = nil

cannotSetMsg

<span id="SetTo"></span>SetTo

dobj

canSetMeTo = nil

cannotSetToMsg

makeSetting(gLiteral)

<span id="Sit"></span>Sit

—

askForDobj(SitOn)

<span id="SitIn"></span>SitIn

dobj

asDobjFor(Enter)

cannotEnterMsg

asDobjFor(Enter)

<span id="SitOn"></span>SitOn

dobj

canSitOnMe = isBoardable

cannotSitOnMsg

asDobjFor(Board)

<span id="Score"></span><span class="system">Score</span>

—

libGlobal.scoreObj.showScore()

<span id="ScriptOff"></span><span class="system">ScriptOff</span>

—

\* \* \*

<span id="ScriptOn"></span><span class="system">ScriptOn</span>

—

\* \* \*

<span id="ShowTo"></span>ShowTo

dobj

iobj

nil

cannotShowToMsg

<span id="ShowToImplicit"></span>ShowToImplicit

dobj

\* \* \*

\* \* \*

gPlayerChar.currentInterlocutor.handleTopic(&showTopics, \[self\])

<span id="Sleep"></span>Sleep

—

DMsg(no sleeping)

<span id="Smell"></span>Smell

—

[\* \* \*](source.html#Smell)

<span id="SmellSomething"></span>SmellSomething

dobj

isSmellable = true

cannotSmellMsg

display(&smellDesc);

<span id="Stand"></span>Stand

—

replaceAction(GetOff, gActor.location) \| DMsg(already standing)

<span id="StandIn"></span>StandIn

dobj

asDobjFor(Enter)

cannotEnterMsg

asDobjFor(Enter)

<span id="StandOn"></span>StandOn

dobj

canStandOnMe = isBoardable

cannotStandOnMsg

asDobjFor(Board)

<span id="Strike"></span>Strike

dobj

asDobjFor([Attack](#Attack))

<span id="SwitchOff"></span>SwitchOff

dobj

isSwitchable

notSwitchableMsg

makeOn(nil)

<span id="SwitchOn"></span>SwitchOn

dobj

isSwitchable

notSwitchableMsg

makeOn(true)

<span id="SwitchVague"></span>SwitchVague

dobj

isSwitchable

notSwitchableMsg

makeOn(!isOn)

**<span id="aT">T</span>**

<span id="TalkAbout"></span>TalkAbout

dobj

nil

cannotTalkToMsg

<span id="TalkAboutImplicit"></span>TalkAboutImplicit

—

\[[ImplicitConversationAction](source.html#ImplicitConversationAction)\]

<span id="TalkTo"></span>TalkTo

dobj

nil

cannotTalkToMsg

<span id="Take"></span>Take

dobj

isTakeable = !isFixed [\*\*](source.html#Thing:Take)

cannotTakeMsg

actionMoveInto(gActor) [\*\*](source.html#Thing:Take)

<span id="TakeFrom"></span>TakeFrom

dobj

isTakeable = !isFixed [\*\*](source.html#Thing:dobjTakeFrom)

cannotTakeMsg

actionDobjTake()

iobj

[\* \* \*](source.html#Thing:iobjTakeFrom)

<span id="Taste"></span>Taste

dobj

isTasteable = true

cannotTasteMsg

display(&tasteDesc);

<span id="TellAbout"></span>TellAbout

nil

cannotTalkToMsg

<span id="TellAboutImplicit"></span>TellAboutImplicit

—

\[[ImplicitConversationAction](source.html#ImplicitConversationAction)\]

<span id="TellTo"></span>TellTo

<span id="Think"></span>Think

—

DMsg(think)

<span id="ThinkAbout"></span>ThinkAbout

—

libGlobal.thoughtManagerObj.handleTopic(cmd.dobj.topicList)

<span id="Throw"></span>Throw

dobj

isThrowable = !isFixed

cannotThrowMsg

moveInto(getOutermostRoom)

<span id="ThrowAt"></span>ThrowAt

dobj

verifyDobjThrow()

iobj

canThrowAtMe = true

cannotThrowAtMsg

gDobj.moveInto(getOutermostRoom)

<span id="ThrowDir"></span>ThrowDir

dobj

isThrowable = !isFixed

cannotThrowMsg

moveInto(getOutermostRoom)

<span id="ThrowTo"></span>ThrowTo

dobj

verifyDobjThrow()

iobj

canThrowToMe = nil

cannotThrowToMsg

<span id="Topics"></span>Topics

—

otherActor != nil

DMsg(no interlocutor)

otherActor.showSuggestions(true)

<span id="Travel"></span>Travel

—

[\* \* \*](source.html#Travel)

<span id="Turn"></span>Turn

dobj

isTurnable = true

cannotTurnMsg

report{ say(turnNoEffectMsg) }

<span id="TurnTo"></span>TurnTo

dobj

canTurnMeTo = nil

cannotTurnToMsg

makeSetting(gLiteral)

<span id="TurnWith"></span>TurnWith

dobj

isTurnable = true

cannotTurnMsg

report{ say(turnNoEffectMsg) }

iobj

canTurnWithMe = nil

cannotTurnWithMsg

<span id="Type"></span>Type

—

askForIobj(TypeOn)

<span id="TypeOn"></span>TypeOn

dobj

canTypeOnMe = nil

cannotTypeOnMsg

<span id="TypeOnVague"></span>TypeOnVague

dobj

canTypeOnMe = nil

cannotTypeOnMsg

**<span id="aU">U</span>**

<span id="Unplug"></span>Unplug

dobj

isUnplugable = isPlugable

cannotUnplugMsg

<span id="UnplugFrom"></span>UnplugFrom

dobj

isUnplugable = isPlugable

cannotUnplugMsg

iobj

canUnplugFromMe = canPlugIntoMe

cannotUnplugFromMsg

<span id="Undo"></span><span class="system">Undo</span>

—

undo()

\>

<span id="Unfasten"></span>Unfasten

dobj

isUnfastenable = nil

cannotUnfastenMsg

<span id="UnfastenFrom"></span>UnfastenFrom

dobj

isUnfastenable = nil

cannotUnfastenMsg

iobj

canUnfastenFromMe

cannotUnfastenFromMsg

<span id="Unlock"></span>Unlock

dobj

lockability = notLockable [\*\*](source.html#Thing:Unlock)

notLockableMsg

makeLocked(nil) [\*\*](source.html#Thing:Unlock)

<span id="UnlockWith"></span>UnlockWith

dobj

lockability = notLockable [\*\*](source.html#Thing:UnlockWith)

notLockableMsg

[Key](source.html#Key:UnlockWith)

iobj

canUnlockWithMe

cannotUnlockWithMsg

<span id="Unscrew"></span>Unscrew

dobj

isUnscrewable = isScrewable

cannotUnscrewMsg

<span id="UnscrewWith"></span>UnscrewWith

dobj

isUnscrewable = isScrewable

cannotUnscrewMsg

iobj

canUnscrewWithMe = canScrewWithMe

cannotUnscrewWithMsg

**<span id="aV">V</span>**

<span id="VagueTravel"></span>VagueTravel

—

DMsg(vague travel)

<span id="Verbose"></span><span class="system">Verbose</span>

—

gameMain.verbose = true

<span id="Version"></span><span class="system">Version</span>

—

foreach ModuleID.showVersion()

**<span id="aW">W</span>**

<span id="Wait"></span>Wait

—

DMsg(wait)

<span id="Wear"></span>Wear

dobj

isWearable = true

cannotWearMsg

makeWorn(true)

<span id="Write"></span>Write

—

askForIobj(WriteOn)

<span id="WriteOn"></span>WriteOn

dobj

canWriteOnMe = nil

cannotWriteOnMsg

**<span id="aY">Y</span>**

<span id="Yell"></span>Yell

—

DMsg(yell)

------------------------------------------------------------------------



*adv3Lite Library Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="action.html" class="nav">Actions</a> \> Action Reference  
<span class="navnp"><a href="debug.html" class="nav"><em>Prev:</em> Debugging Commands</a>
    *Next:* <a href="actor.html" class="nav">Actors</a>    </span>


