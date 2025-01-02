---
layout: docs
---
## Messages

|  |  |  |  |
|----|----|----|---:|
| `DMsg(acknowledge footnote status, '<.parser>The setting is now {1}. <./parser>', shortFootnoteStatus(stat));` |  |  | [`footnote.t`](../file/footnote.t.html)`[`[`393`](../source/footnote.t.html#393)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(acknowledge notify status, '<.parser>Score notifications are now <<stat ? 'on' : 'off'>>.<./parser> ');` |  |  | [`action.t`](../file/action.t.html)`[`[`981`](../source/action.t.html#981)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(actor already in, '{I}{\'m} already {in dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6591`](../source/thing.t.html#6591)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(actor arriving, '{The subj traveler} arrive{s/d} in the area. ');` |  |  | [`actor.t`](../file/actor.t.html)`[`[`1424`](../source/actor.t.html#1424)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(actor here, '\^<<theNameIs>> {here}. ');` |  |  | [`actor.t`](../file/actor.t.html)`[`[`123`](../source/actor.t.html#123)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(actor in location, '\^<<theNameIs>> <<location.objInName>>. ');` |  |  | [`actor.t`](../file/actor.t.html)`[`[`125`](../source/actor.t.html#125)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(actor in remote location, '\^<<theNameIs>> <<getOutermostRoom.inRoomName(pov)>>. ');` |  |  | [`actor.t`](../file/actor.t.html)`[`[`158`](../source/actor.t.html#158)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(actor is here, '{The subj myactor} {is} {here}. ');` |  |  | [`actor.t`](../file/actor.t.html)`[`[`6295`](../source/actor.t.html#6295)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(actor nested location name, ' (<<actor.location.objInPrep>> <<actor.location.theName>>)');` |  |  | [`travel.t`](../file/travel.t.html)`[`[`378`](../source/travel.t.html#378)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(actor nested location posture name, ' (<<actor.posture.participle>> <<actor.location.objInPrep>> <<actor.location.theName>>)');` |  |  | [`postures.t`](../file/postures.t.html)`[`[`518`](../source/postures.t.html#518)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(actor not in, '{I}{\'m} not in {the dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6658`](../source/thing.t.html#6658)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(actor not on, '{I}{\'m} not on {the dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6659`](../source/thing.t.html#6659)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(actor stays put, '{I} wait{s/ed} in vain for {1} to go anywhere. ', theName)` |  |  | [`actor.t`](../file/actor.t.html)`[`[`1329`](../source/actor.t.html#1329)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(aft, 'aft')` |  |  | [`travel.t`](../file/travel.t.html)`[`[`1930`](../source/travel.t.html#1930)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(all not allowed, 'Sorry; ALL is not allowed with this command. ');` |  |  | [`action.t`](../file/action.t.html)`[`[`1657`](../source/action.t.html#1657)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(already attached, '{The subj dobj} {is} already attached to {1}. ', attachedTo.theName)` |  |  | [`attachables.t`](../file/attachables.t.html)`[`[`153`](../source/attachables.t.html#153)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(already back there, '{I}{\'m} already there. ');` |  |  | [`actions.t`](../file/actions.t.html)`[`[`787`](../source/actions.t.html#787)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(already clean, '{The subj dobj} {is} already quite clean enough. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7055`](../source/thing.t.html#7055)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(already closed, '{The subj dobj} {isn\'t} open. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`4838`](../source/thing.t.html#4838)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(already fastened, '{The subj dobj} {is} already fastened. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7687`](../source/thing.t.html#7687)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(already has, '{The subj iobj} already {has} {the dobj}.')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`8980`](../source/thing.t.html#8980)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(already holding, '{I}{\'m} already holding {the dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`4235`](../source/thing.t.html#4235)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(already in, '{The subj dobj} {is} already {in iobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`5431`](../source/thing.t.html#5431)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(already lit, '{The subj dobj} {is} already lit. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6893`](../source/thing.t.html#6893)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(already locked, '{The subj dobj} {is} already locked. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`5895`](../source/thing.t.html#5895)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(already moved to, '{The subj dobj} {has} already been moved to {the iobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6860`](../source/thing.t.html#6860)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(already on, '{I}{\'m} already {in dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6458`](../source/thing.t.html#6458)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(already open, '{The subj dobj} {is} already open. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`4795`](../source/thing.t.html#4795)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(already plugged in, '{The subj dobj} {is} already plugged into {1}. ', attachedTo.theName)` |  |  | [`attachables.t`](../file/attachables.t.html)`[`[`743`](../source/attachables.t.html#743)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(already plugged in vague, '{The subj {dobj} {is} already plugged in. ')` |  |  | [`attachables.t`](../file/attachables.t.html)`[`[`746`](../source/attachables.t.html#746)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(already present, '{The subj dobj} {is} right {here}. ') ` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7543`](../source/thing.t.html#7543)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(already pulled, '{The subj dobj} {is} already in the pulled position. ')` |  |  | [`gadget.t`](../file/gadget.t.html)`[`[`98`](../source/gadget.t.html#98)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(already pushed, '{The subj dobj} {is} already in the pushed position. ');` |  |  | [`gadget.t`](../file/gadget.t.html)`[`[`122`](../source/gadget.t.html#122)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(already set, '{The subj dobj} {is} already set to {1}. ', curSetting)` |  |  | [`gadget.t`](../file/gadget.t.html)`[`[`208`](../source/gadget.t.html#208)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(already standing, '{I} {am} standing. ');` |  |  | [`actions.t`](../file/actions.t.html)`[`[`729`](../source/actions.t.html#729)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(already switched on, '{The subj dobj} {is} already switched on. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6184`](../source/thing.t.html#6184)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(already talking, '{I} {am} already talking to {1}. ', theName)` |  |  | [`actor.t`](../file/actor.t.html)`[`[`1951`](../source/actor.t.html#1951)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(already there, '{I}{\'m} already there. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7542`](../source/thing.t.html#7542)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(already worn, '{I}{\'m} already wearing {the dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6318`](../source/thing.t.html#6318)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(antecedent out of scope, '{I} no longer {see} that {here}.', cmd);` |  |  | [`parser.t`](../file/parser.t.html)`[`[`5396`](../source/parser.t.html#5396)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(ask about, 'ask {him interlocutor} about ')` |  |  | [`actor.t`](../file/actor.t.html)`[`[`6707`](../source/actor.t.html#6707)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(ask for, 'ask {him interlocutor} for ')` |  |  | [`actor.t`](../file/actor.t.html)`[`[`6712`](../source/actor.t.html#6712)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(ask query, 'ask {him interlocutor} ')` |  |  | [`actor.t`](../file/actor.t.html)`[`[`6706`](../source/actor.t.html#6706)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(basic score change, '''Your <<aHref('full score', 'score', 'Show full score')>>` |  |  | [`score.t`](../file/score.t.html)`[`[`310`](../source/score.t.html#310)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(be more specific, 'I don\'t know which ones you mean. Can you be more specific?');` |  |  | [`parser.t`](../file/parser.t.html)`[`[`5677`](../source/parser.t.html#5677)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(before push travel dir, '{I} <<gDobj.matchPullOnly ? 'pull(s/ed}' : 'push{es/ed}'>> {the dobj} {1}. ', dir.departureName); ` |  |  | [`thing.t`](../file/thing.t.html)`[`[`8475`](../source/thing.t.html#8475)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(being worn, ' (being worn)');` |  |  | [`english.t`](../file/english.t.html)`[`[`2974`](../source/english.t.html#2974)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(cannot add to derived relation, 'ERROR! You cannot explicitly relate items via a derived relation (%1). ', name);` |  |  | [`relations.t`](../file/relations.t.html)`[`[`418`](../source/relations.t.html#418)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot attach, '{I} {cannot} attach {the dobj} to anything. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7590`](../source/thing.t.html#7590)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot attach to, '{I} {cannot} attach anything to {the iobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7592`](../source/thing.t.html#7592)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot attach to more, '{I} {can\'t} attach {the dobj} to anything else while {he dobj}{\'s} attached to {1}. ', makeListStr(attachedToList, &theName)) ` |  |  | [`attachables.t`](../file/attachables.t.html)`[`[`632`](../source/attachables.t.html#632)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot attach to self, '{I} {cannot} attach {the iobj} to {itself iobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7595`](../source/thing.t.html#7595)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot attack, 'It{dummy}{\'s} best to avoid pointless violence. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`4567`](../source/thing.t.html#4567)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot attack actor, 'That hardly {dummy} seem{s/ed} appropriate. ')` |  |  | [`actor.t`](../file/actor.t.html)`[`[`2296`](../source/actor.t.html#2296)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot attack with, '{I} {can\'t} attack anything with {that iobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`4614`](../source/thing.t.html#4614)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot attack with self, '{I} {can\'t} attack anything with itself. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`4611`](../source/thing.t.html#4611)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot be attached, '{The subj dobj} {cannot} be attached to {the iobj}. ')` |  |  | [`attachables.t`](../file/attachables.t.html)`[`[`339`](../source/attachables.t.html#339)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot be plugged in, '{The subj dobj} {can\'t} be plugged into {the iobj}. ')` |  |  | [`attachables.t`](../file/attachables.t.html)`[`[`798`](../source/attachables.t.html#798)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot board, '{The subj dobj} {is} not something {i} {can} get on. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6456`](../source/thing.t.html#6456)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot board carried, '{I} {can\'t} get on {the dobj} while {i}{\'m} carrying {him dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6460`](../source/thing.t.html#6460)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot break, '{The subj dobj} {is} not the sort of thing (i) {can} break. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`4641`](../source/thing.t.html#4641)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot burn, '{I} {cannot} burn {the dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6291`](../source/thing.t.html#6291)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot burn with, '{I} {can\'t} burn {the dobj} with {that iobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6292`](../source/thing.t.html#6292)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(cannot carry any more, '{I} {can\'t} carry any more than {i}{\'m} already carrying. ');` |  |  | [`thing.t`](../file/thing.t.html)`[`[`4419`](../source/thing.t.html#4419)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(cannot carry any more weight, '{I} {can\'t} carry that much more weight. ');` |  |  | [`weight.t`](../file/weight.t.html)`[`[`125`](../source/weight.t.html#125)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot clean, '{The subj dobj} {is} not something {i} {can} clean. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7052`](../source/thing.t.html#7052)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot clean with, '{I} {can\'t} clean {the dobj} with {the iobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7118`](../source/thing.t.html#7118)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot climb, '{The subj dobj} {is} not something {i} {can} climb. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6381`](../source/thing.t.html#6381)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot climb down, '{The subj dobj} {is} not something {i} {can} climb down. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6396`](../source/thing.t.html#6396)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot climb stairway down, '{I} {can\'t} climb {the dobj}, but {i} could go down {him dobj}. ')` |  |  | [`extras.t`](../file/extras.t.html)`[`[`708`](../source/extras.t.html#708)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(cannot command system action, 'Only the player can carry out that kind of command. ');` |  |  | [`actor.t`](../file/actor.t.html)`[`[`253`](../source/actor.t.html#253)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(cannot command thing, 'There{dummy}\'s no point trying to give orders to {1}. ', aName);` |  |  | [`thing.t`](../file/thing.t.html)`[`[`3833`](../source/thing.t.html#3833)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot consult, '{The subj dobj} {is} not a provider of information. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`8120`](../source/thing.t.html#8120)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot cut, '{I} {can\'t} cut {the dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`4962`](../source/thing.t.html#4962)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot cut with, '{I} {can\'t} cut anything with {that iobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`4963`](../source/thing.t.html#4963)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot cut with self, '{I} {cannot} cut anything with itself. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`4965`](../source/thing.t.html#4965)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot detach, 'There{dummy} {is}n\'t anything from which {the subj dobj} could be detached. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7611`](../source/thing.t.html#7611)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot detach from, 'There{dummy} {is}n\'t anything that could be detached from {the iobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7640`](../source/thing.t.html#7640)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot detach from self, '{The subj dobj} {can\'t} be detached from {itself dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7643`](../source/thing.t.html#7643)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot detach from this, 'The {subj dobj} {can\'t} be detached from {the iobj}. ')` |  |  | [`attachables.t`](../file/attachables.t.html)`[`[`268`](../source/attachables.t.html#268)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot detach this, '{The subj dobj} {cannot} be detached from {1}. ', location.theName)` |  |  | [`attachables.t`](../file/attachables.t.html)`[`[`238`](../source/attachables.t.html#238)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot dig, '{I} {can\'t} dig there. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7174`](../source/thing.t.html#7174)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot dig with, '{I} {can\'t} dig anything with {that iobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7175`](../source/thing.t.html#7175)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot dig with self, '{I} {can\'t} dig {the dobj} with {itself dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7177`](../source/thing.t.html#7177)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot dispense, '{I} {can\'t} take any more from {the dobj}. ')` |  |  | [`collective.t`](../file/collective.t.html)`[`[`411`](../source/collective.t.html#411)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(cannot do that while attached, '{I} {can\'t} do that while {the subj obj} is attached to {the att}. ');` |  |  | [`precond.t`](../file/precond.t.html)`[`[`717`](../source/precond.t.html#717)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(cannot do that while wearing, '{I} {can\'t} do that while {he actor}{\'m} wearing {the obj}. ');` |  |  | [`precond.t`](../file/precond.t.html)`[`[`492`](../source/precond.t.html#492)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot do to sensory, '{I} {can\'t} do that to {a cobj}. ')` |  |  | [`sensory.t`](../file/sensory.t.html)`[`[`177`](../source/sensory.t.html#177)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot drop, '{The subj dobj} {can\'t} be dropped. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`4427`](../source/thing.t.html#4427)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot eat, '{The subj dobj} {is} plainly inedible. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6957`](../source/thing.t.html#6957)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot enter, '{The subj dobj} {is} not something {i} {can} enter. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6589`](../source/thing.t.html#6589)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot enter carried, '{I} {can\'t} get in {the dobj} while {i}{\'m} carrying {him dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6593`](../source/thing.t.html#6593)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot enter on, '{I} {can\'t} enter anything on {the dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`8079`](../source/thing.t.html#8079)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot extinguish, '{The dobj} {cannot} be extinguished. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6932`](../source/thing.t.html#6932)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot fasten, '{That subj dobj}{\'s} not something {i} {can} fasten. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7684`](../source/thing.t.html#7684)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot fasten to, '{I} {can\'t} fasten anything to {that iobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7717`](../source/thing.t.html#7717)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot fasten to self, '{The subj iobj} {can\'t} be fastened to {itself iobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7720`](../source/thing.t.html#7720)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot feel, 'It{\'s} hardly a good idea to try feeling {the dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`4131`](../source/thing.t.html#4131)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot flip, '{I} {can\'t} usefully flip {the dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6249`](../source/thing.t.html#6249)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot follow, '{The subj dobj} {isn\'t} going anywhere. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`4521`](../source/thing.t.html#4521)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot follow from here, '{I} {can\'t} follow {him dobj} from {here}. ')` |  |  | [`actor.t`](../file/actor.t.html)`[`[`2499`](../source/actor.t.html#2499)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot follow self, '{I} {can\'t} follow {myself}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`4524`](../source/thing.t.html#4524)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot give to, '{I} {can\'t} give anything to {that iobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`8996`](../source/thing.t.html#8996)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot give to self, '{I} {can\'t} give anything to {himself actor}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`8999`](../source/thing.t.html#8999)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot go, '{I} {can\'t} go that way. ' )` |  |  | [`travel.t`](../file/travel.t.html)`[`[`254`](../source/travel.t.html#254)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot go in dark, 'It{dummy}{\'s} too dark to see where {i}{\'m} going. ')` |  |  | [`travel.t`](../file/travel.t.html)`[`[`278`](../source/travel.t.html#278)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot go there, '{I} {can\'t} go there right {now}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`9194`](../source/thing.t.html#9194)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot go through, '{I} {can\'t} go through {that dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`5325`](../source/thing.t.html#5325)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot go through, '{I} {can\'t} go along {that dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`5342`](../source/thing.t.html#5342)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot go through closed door, '{The subj obj} {is} in the way. ')` |  |  | [`travel.t`](../file/travel.t.html)`[`[`946`](../source/travel.t.html#946)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot hear, '{I} {can\'t} hear {1} through {2}. ', obj.theName, lst[1].theName);` |  |  | [`precond.t`](../file/precond.t.html)`[`[`550`](../source/precond.t.html#550)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot jump off, '{I}{\'m} not on {the dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7979`](../source/thing.t.html#7979)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot kiss, '{I} really {can\'t} kiss {that dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7932`](../source/thing.t.html#7932)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot lie in, '{I} {can\'t} lie in {the dobj}. ')` |  |  | [`postures.t`](../file/postures.t.html)`[`[`463`](../source/postures.t.html#463)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot lie on, '{The subj dobj} {isn\'t} something {i} {can} lie on. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6545`](../source/thing.t.html#6545)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot light, '{The subj dobj} {is} not something {i} {can} light. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6890`](../source/thing.t.html#6890)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot lock with, '{I} {can\'t} lock anything with {that iobj}. ' )` |  |  | [`thing.t`](../file/thing.t.html)`[`[`5919`](../source/thing.t.html#5919)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot lock with self, '{I} {can\'t} lock anything with itself. ' )` |  |  | [`thing.t`](../file/thing.t.html)`[`[`5922`](../source/thing.t.html#5922)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot look behind, '{I} {can\'t} look behind {that dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`5278`](../source/thing.t.html#5278)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot look through, '{I} {can\'t} look through {that dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`5305`](../source/thing.t.html#5305)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot look under, '{I} {can\'t} look under {that dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`5182`](../source/thing.t.html#5182)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot move to, '{The subj dobj} {can\'t} be moved to {the iobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6854`](../source/thing.t.html#6854)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot move to self, '{The subj dobj} {can\'t} be moved to {itself dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6857`](../source/thing.t.html#6857)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(cannot move while attached, '{The subj cobj} {cannot} be moved while {he cobj} {is} attached to {the other}. '); ` |  |  | [`attachables.t`](../file/attachables.t.html)`[`[`334`](../source/attachables.t.html#334)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot move with, '{I} {can\'t} move {the dobj} with {the iobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6782`](../source/thing.t.html#6782)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot move with self, '{The subj dobj} {can\'t} be used to move {itself dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6785`](../source/thing.t.html#6785)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot open, '{The subj dobj} {is} not something {i} {can} open. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`4793`](../source/thing.t.html#4793)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot plug, '{The subj dobj} {can\'t} be plugged into anything. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7816`](../source/thing.t.html#7816)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot plug in any more, '{I} {can\'t} plug any more into {the iobj}. ')` |  |  | [`attachables.t`](../file/attachables.t.html)`[`[`778`](../source/attachables.t.html#778)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot plug into, '{I} {can\'t} plug anything into {the iobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7820`](../source/thing.t.html#7820)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot plug into self, '{I} {can\'t} plug {the dobj} into {itself dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7818`](../source/thing.t.html#7818)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot pour, '{I} {can\'t} pour {1} anywhere. ', fluidName)` |  |  | [`thing.t`](../file/thing.t.html)`[`[`8246`](../source/thing.t.html#8246)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot pour in self, '{I} {can\'t} pour {the dobj} into {itself dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`8250`](../source/thing.t.html#8250)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot pour into, '{I} {can\'t} pour {1} into {that dobj}. ', gDobj.fluidName)` |  |  | [`thing.t`](../file/thing.t.html)`[`[`8252`](../source/thing.t.html#8252)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot pour on self, '{I} {can\'t} pour {the dobj} onto {itself dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`8248`](../source/thing.t.html#8248)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot pour onto, '{I} {can\'t} pour {1} into {that dobj}. ', gDobj.fluidName)` |  |  | [`thing.t`](../file/thing.t.html)`[`[`8254`](../source/thing.t.html#8254)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot pull, 'There{\'s} no point trying to pull {that dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`5383`](../source/thing.t.html#5383)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot purloin container, '{I} {can\'t} purloin something {i}{\'m} contained within. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`9165`](../source/thing.t.html#9165)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot purloin room, '{I} {can\'t} purloin a room. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`9163`](../source/thing.t.html#9163)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot purloin self, '{I} {can\'t} purloin {myself}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`9161`](../source/thing.t.html#9161)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot push, 'There{\'s} no point trying to push {that dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`5361`](../source/thing.t.html#5361)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot push down, '{I} {can\'t} {1} anything down {the iobj}. ', gVerbWord)` |  |  | [`thing.t`](../file/thing.t.html)`[`[`8838`](../source/thing.t.html#8838)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot push into, '{I} {can\'t} {1} anything into {the iobj}. ', gVerbWord)` |  |  | [`thing.t`](../file/thing.t.html)`[`[`8750`](../source/thing.t.html#8750)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot push own container, '{I} {can\'t} {1} {the dobj} anywhere while {he actor}{\'s} {2} {him dobj}. ', gVerbWord, gDobj.objInPrep)` |  |  | [`thing.t`](../file/thing.t.html)`[`[`8401`](../source/thing.t.html#8401)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot push through, '{I} {can\'t} {1} anything through {the iobj}. ', gVerbWord)` |  |  | [`thing.t`](../file/thing.t.html)`[`[`8704`](../source/thing.t.html#8704)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot push travel, 'There{dummy}{\'s} no point trying to {1} {that dobj} anywhere. ', gVerbWord);` |  |  | [`thing.t`](../file/thing.t.html)`[`[`8510`](../source/thing.t.html#8510)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot push up, '{I} {can\'t} {1} anything up {the iobj}. ', gVerbWord)` |  |  | [`thing.t`](../file/thing.t.html)`[`[`8814`](../source/thing.t.html#8814)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot push via self, '{I} {can\'t} {1} {the dobj} {2} {itself dobj}. ', gVerbWord, viaMode.prep)` |  |  | [`thing.t`](../file/thing.t.html)`[`[`8405`](../source/thing.t.html#8405)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot put behind, '{I} {cannot} put anything behind {the iobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`5743`](../source/thing.t.html#5743)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot put in, '{I} {can\'t} put anything in {the iobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`5557`](../source/thing.t.html#5557)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot put in self, '{I} {can\'t} put {the dobj} {1} {itself dobj}. ', gIobj.objInPrep)` |  |  | [`thing.t`](../file/thing.t.html)`[`[`5436`](../source/thing.t.html#5436)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot put on, '{I} {can\'t} put anything on {the iobj}. ' )` |  |  | [`thing.t`](../file/thing.t.html)`[`[`5466`](../source/thing.t.html#5466)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot put under, '{I} {cannot} put anything under {the iobj}. ' )` |  |  | [`thing.t`](../file/thing.t.html)`[`[`5650`](../source/thing.t.html#5650)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot reach, '{I} {can\'t} reach {the target} through {the obj}. ');` |  |  | [`thing.t`](../file/thing.t.html)`[`[`3502`](../source/thing.t.html#3502)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot reach out, '{I} {can\'t} reach {the target} from {the loc}. ');` |  |  | [`thing.t`](../file/thing.t.html)`[`[`3526`](../source/thing.t.html#3526)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot read, 'There {dummy} {is} nothing to read on {the dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`4496`](../source/thing.t.html#4496)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot remove, '{The subj dobj} {cannot} be removed. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6700`](../source/thing.t.html#6700)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(cannot remove from derived relation, 'ERROR! You cannot explicitly remove a derived relation (%) between items. ', name);` |  |  | [`relations.t`](../file/relations.t.html)`[`[`429`](../source/relations.t.html#429)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot screw, '{I} {can\'t} screw {the dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`8343`](../source/thing.t.html#8343)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot screw with, '{I} {can\'t} screw anything with {that iobj}. ') ` |  |  | [`thing.t`](../file/thing.t.html)`[`[`8344`](../source/thing.t.html#8344)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot screw with self, '{I} {can\'t} screw {the iobj} with {itself iobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`8346`](../source/thing.t.html#8346)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot see obj, '{I} {can\'t} see {1}. ', obj.theName));` |  |  | [`precond.t`](../file/precond.t.html)`[`[`511`](../source/precond.t.html#511)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot set, '{The subj dobj} {is} not something {i} {can} set. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`8020`](../source/thing.t.html#8020)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot set to, '{I} {cannot} set {that dobj} to anything. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7418`](../source/thing.t.html#7418)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot show to, '{I} {can\'t} show anything to {that iobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`9027`](../source/thing.t.html#9027)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot show to self, '{I} {can\'t} show anything to {himself actor}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`9030`](../source/thing.t.html#9030)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot sit in, '{I} {can\'t} sit in {the dobj}. ')` |  |  | [`postures.t`](../file/postures.t.html)`[`[`431`](../source/postures.t.html#431)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot sit on, '{The subj dobj} {isn\'t} something {i} {can} sit on. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6543`](../source/thing.t.html#6543)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot smell, '{I} {can\'t} smell {the dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`4059`](../source/thing.t.html#4059)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot smell through, '{I} {can\'t} smell {1} through {2}. ', obj.theName, lst[1].theName);` |  |  | [`precond.t`](../file/precond.t.html)`[`[`593`](../source/precond.t.html#593)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot stand in, '{I} {can\'t} stand in {the dobj}. ')` |  |  | [`postures.t`](../file/postures.t.html)`[`[`395`](../source/postures.t.html#395)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot stand on, '{The subj dobj} {isn\'t} something {i} {can} stand on. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6541`](../source/thing.t.html#6541)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot start from here, '{I}{\'m} not where {i} last saw {the dobj}. ')` |  |  | [`actor.t`](../file/actor.t.html)`[`[`2497`](../source/actor.t.html#2497)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot take, '{The subj cobj} {is} fixed in place. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`4232`](../source/thing.t.html#4232)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot take actor, '{The subj dobj} {won\'t} let {me} {dummy} pick {him dobj} up. ')` |  |  | [`actor.t`](../file/actor.t.html)`[`[`170`](../source/actor.t.html#170)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot take component, '{I} {can\'t} have {that cobj}, {he dobj}{\'s} part of {1}. ', location.theName)` |  |  | [`extras.t`](../file/extras.t.html)`[`[`283`](../source/extras.t.html#283)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot take container door, '{I} {can\'t} have {the cobj}; {he dobj}{\'s} part of {1}. ', location.theName)` |  |  | [`extras.t`](../file/extras.t.html)`[`[`1009`](../source/extras.t.html#1009)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot take from actor, '{The subj this} {won\'t} let {me} have {the obj} while {he obj}{\'s} in {her this} possession. ');` |  |  | [`actor.t`](../file/actor.t.html)`[`[`2147`](../source/actor.t.html#2147)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot take from self, '{I} {can\'t} take {the subj dobj} from {the dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7223`](../source/thing.t.html#7223)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot take immovable, '{I} {cannot} take {the cobj}. ')` |  |  | [`extras.t`](../file/extras.t.html)`[`[`591`](../source/extras.t.html#591)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot take my container, '{I} {can\'t} take {the dobj} while {i}{\'m} {1} {him dobj}. ', objInPrep)` |  |  | [`thing.t`](../file/thing.t.html)`[`[`4238`](../source/thing.t.html#4238)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot take self, '{I} {can} hardly take {myself}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`4241`](../source/thing.t.html#4241)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot talk, 'There{dummy}{\'s} no point trying to talk to {the cobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`8954`](../source/thing.t.html#8954)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot talk to self, 'Talking to oneself {dummy} {is} generally pointless. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`8957`](../source/thing.t.html#8957)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot taste, '{The subj dobj} {is} not suitable for tasting. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`4101`](../source/thing.t.html#4101)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot throw, '{I} {can\'t} throw {the dobj} anywhere. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`4678`](../source/thing.t.html#4678)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot throw at, '{I} {can\'t} throw anything at {the iobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7291`](../source/thing.t.html#7291)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot throw at self, '{The subj dobj} {can\'t} be thrown at {itself dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7294`](../source/thing.t.html#7294)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot throw to, '{The subj dobj} {can\'t} catch anything. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7326`](../source/thing.t.html#7326)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot throw to self, '{The subj dobj} {can\'t} be thrown to {itself dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7329`](../source/thing.t.html#7329)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot turn, '{The subj dobj} {can\'t} be turned. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`4871`](../source/thing.t.html#4871)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot turn to, '{I} {cannot} turn {that dobj} to anything. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7380`](../source/thing.t.html#7380)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot turn with, '{I} {can\'t} turn anything with {that iobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`4914`](../source/thing.t.html#4914)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot type on, '{I} {can\'t} type anything on {the dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`8052`](../source/thing.t.html#8052)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot unfasten, '{The subj dobj} {cannot} be unfastened. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7766`](../source/thing.t.html#7766)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot unfasten from, '{I} {can\'t} unfasten anything from {that iobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7769`](../source/thing.t.html#7769)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot unfasten from self, '{I} {can\'t} unfasten {the dobj} from {itself dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7772`](../source/thing.t.html#7772)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot unlock with, '{I} {can\'t} unlock anything with {that iobj}. ' )` |  |  | [`thing.t`](../file/thing.t.html)`[`[`5849`](../source/thing.t.html#5849)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot unlock with self, '{I} {can\'t} unlock anything with itself. ' )` |  |  | [`thing.t`](../file/thing.t.html)`[`[`5852`](../source/thing.t.html#5852)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot unplug, '{The subj dobj} {can\'t} be unplugged. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7853`](../source/thing.t.html#7853)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot unplug from, '{I} {can\'t} unplug anything from {the iobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7859`](../source/thing.t.html#7859)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot unplug from self, '{I} {can\'t} unplug {the dobj} from {itself dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7856`](../source/thing.t.html#7856)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot unscrew, '{I} {can\'t} unscrew {the dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`8348`](../source/thing.t.html#8348)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot unscrew with, '{I} {can\'t} unscrew anything with {that iobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`8349`](../source/thing.t.html#8349)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot unscrew with self, '{I} {can\'t} unscrew {the iobj} with {itself iobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`8351`](../source/thing.t.html#8351)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot wear, '{The subj dobj} {can\'t} be worn. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6317`](../source/thing.t.html#6317)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cannot write on, '{I} {can\'t} write anything on {the dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`8098`](../source/thing.t.html#8098)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(cant bear more weight, '{The subj this} {can\'t} bear any more weight. ');` |  |  | [`weight.t`](../file/weight.t.html)`[`[`93`](../source/weight.t.html#93)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(cant list derived relation, '<i>Since {1} is a DerivedRelation, any items it relates cannot be listed.</i> ', valToSym(rel));` |  |  | [`relations.t`](../file/relations.t.html)`[`[`891`](../source/relations.t.html#891)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(cant take from dispenser, '{I} {can\'t} take {a dobj} from {the iobj}. ')` |  |  | [`collective.t`](../file/collective.t.html)`[`[`383`](../source/collective.t.html#383)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(carrying collective group, '{I} {am} carrying {1}. ', makeListStr(heldLst));` |  |  | [`extras.t`](../file/extras.t.html)`[`[`550`](../source/extras.t.html#550)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(catch okay, '{The subj iobj} {catches} {the obj}. ');` |  |  | [`actor.t`](../file/actor.t.html)`[`[`2407`](../source/actor.t.html#2407)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(circularly in, '{I} {can\'t} put {the dobj} {in iobj} while {the subj iobj} {is} {in dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`5433`](../source/thing.t.html#5433)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(click, 'Click!'); }` |  |  | [`gadget.t`](../file/gadget.t.html)`[`[`34`](../source/gadget.t.html#34)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(cmdhelp go to, 'Or you could: ');` |  |  | [`cmdhelp.t`](../file/cmdhelp.t.html)`[`[`184`](../source/cmdhelp.t.html#184)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(cmdhelp investigate, 'Here are some suggestions (other actions may also be possible):\n');` |  |  | [`cmdhelp.t`](../file/cmdhelp.t.html)`[`[`219`](../source/cmdhelp.t.html#219)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(cmdhelp manipulate, 'Some things you could try include (there may be many other possibilities):\b');` |  |  | [`cmdhelp.t`](../file/cmdhelp.t.html)`[`[`586`](../source/cmdhelp.t.html#586)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(cmdhelp no exit, 'None ');` |  |  | [`cmdhelp.t`](../file/cmdhelp.t.html)`[`[`158`](../source/cmdhelp.t.html#158)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(cmdhelp no one to talk to, 'Sorry, but there\'s no one here to talk to right now.\b');` |  |  | [`cmdhelp.t`](../file/cmdhelp.t.html)`[`[`740`](../source/cmdhelp.t.html#740)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(cmdhelp relocate, 'Here are some suggestions (there may well be several other possibilities):\n');` |  |  | [`cmdhelp.t`](../file/cmdhelp.t.html)`[`[`316`](../source/cmdhelp.t.html#316)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(cmdhelp show options, 'What would you like to do?\b <<aHref('1','1')>>. Go to another location\n` |  |  | [`cmdhelp.t`](../file/cmdhelp.t.html)`[`[`44`](../source/cmdhelp.t.html#44)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(cmdhelp talk to someone, '<<aHref('5','5')>>.` |  |  | [`cmdhelp.t`](../file/cmdhelp.t.html)`[`[`57`](../source/cmdhelp.t.html#57)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(cmdhelp where go, 'Where would you like to go?\n The possible exits are: ');` |  |  | [`cmdhelp.t`](../file/cmdhelp.t.html)`[`[`131`](../source/cmdhelp.t.html#131)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(collective group empty, 'There{\'s} no {1} {here}. ', name);` |  |  | [`extras.t`](../file/extras.t.html)`[`[`541`](../source/extras.t.html#541)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(collective group members, 'There{\'s} {1} {here}. ', makeListStr(lst));` |  |  | [`extras.t`](../file/extras.t.html)`[`[`554`](../source/extras.t.html#554)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(command full score, 'full score'), nil, nil, AHREF_Plain)>>";` |  |  | [`status.t`](../file/status.t.html)`[`[`271`](../source/status.t.html#271)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(command interuption prefix, '<.p>');` |  |  | [`output.t`](../file/output.t.html)`[`[`1383`](../source/output.t.html#1383)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(command look around, 'look around'),` |  |  | [`status.t`](../file/status.t.html)`[`[`259`](../source/status.t.html#259)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(command not present, '<.parser>That command isn&rsquo;t needed in this story.<./parser> ');` |  |  | [`action.t`](../file/action.t.html)`[`[`973`](../source/action.t.html#973)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(command prompt, '>');` |  |  | [`main.t`](../file/main.t.html)`[`[`164`](../source/main.t.html#164)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(command prompt, '>');` |  |  | [`sysrules.t`](../file/sysrules.t.html)`[`[`644`](../source/sysrules.t.html#644)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(command results empty, 'Nothing obvious {dummy}{happens}.<.p>'));` |  |  | [`output.t`](../file/output.t.html)`[`[`1493`](../source/output.t.html#1493)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(command results prefix, '<.p0>');` |  |  | [`output.t`](../file/output.t.html)`[`[`1344`](../source/output.t.html#1344)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(command results separator, '<.p>');` |  |  | [`output.t`](../file/output.t.html)`[`[`1413`](../source/output.t.html#1413)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(command results suffix, ''));` |  |  | [`output.t`](../file/output.t.html)`[`[`1511`](../source/output.t.html#1511)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(container needs to be open, '{The subj obj} need{s/ed} to be open for that. ');` |  |  | [`precond.t`](../file/precond.t.html)`[`[`124`](../source/precond.t.html#124)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(corrected spelling, '(<i>{1}</i>)<br>', str);` |  |  | [`spelling.t`](../file/spelling.t.html)`[`[`756`](../source/spelling.t.html#756)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(current exit settings, 'Exits are listed <<if(inStatusLine && inRoomDesc)>>` |  |  | [`exits.t`](../file/exits.t.html)`[`[`522`](../source/exits.t.html#522)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(currently no hints, '<.parser>Sorry, no hints are currently available. Please check back later.<./parser> ');` |  |  | [`hintsys.t`](../file/hintsys.t.html)`[`[`625`](../source/hintsys.t.html#625)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(dark desc, 'It{dummy} {is} pitch black; {i} {can\'t} see a thing. '); ` |  |  | [`thing.t`](../file/thing.t.html)`[`[`1022`](../source/thing.t.html#1022)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(dark name, 'In the dark')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`1017`](../source/thing.t.html#1017)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(debug test now holding, '{I} {am} {now} holding {1}.\n', makeListStr(testHolding, &theName));` |  |  | [`debug.t`](../file/debug.t.html)`[`[`527`](../source/debug.t.html#527)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(debugger not present, 'Debugger not present. ');` |  |  | [`debug.t`](../file/debug.t.html)`[`[`101`](../source/debug.t.html#101)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(default pcsayquip, '<q><<gTopicText.substr(1,1).toUpper()>><<gTopicText.substr(2).toLower()>>,</q> ` |  |  | [`actor.t`](../file/actor.t.html)`[`[`2234`](../source/actor.t.html#2234)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(depart aft, 'aft')` |  |  | [`travel.t`](../file/travel.t.html)`[`[`1931`](../source/travel.t.html#1931)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(depart down, 'down')` |  |  | [`travel.t`](../file/travel.t.html)`[`[`1856`](../source/travel.t.html#1856)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(depart east, 'to the east')` |  |  | [`travel.t`](../file/travel.t.html)`[`[`1800`](../source/travel.t.html#1800)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(depart forward, 'forward')` |  |  | [`travel.t`](../file/travel.t.html)`[`[`1923`](../source/travel.t.html#1923)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(depart in, 'inside')` |  |  | [`travel.t`](../file/travel.t.html)`[`[`1872`](../source/travel.t.html#1872)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(depart north, 'to the north')` |  |  | [`travel.t`](../file/travel.t.html)`[`[`1792`](../source/travel.t.html#1792)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(depart northeast, 'to the northeast')` |  |  | [`travel.t`](../file/travel.t.html)`[`[`1824`](../source/travel.t.html#1824)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(depart northwest, 'to the northwest')` |  |  | [`travel.t`](../file/travel.t.html)`[`[`1832`](../source/travel.t.html#1832)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(depart out, 'out')` |  |  | [`travel.t`](../file/travel.t.html)`[`[`1880`](../source/travel.t.html#1880)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(depart port, 'to port')` |  |  | [`travel.t`](../file/travel.t.html)`[`[`1907`](../source/travel.t.html#1907)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(depart south, 'to the south')` |  |  | [`travel.t`](../file/travel.t.html)`[`[`1808`](../source/travel.t.html#1808)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(depart southeast, 'to the southeast')` |  |  | [`travel.t`](../file/travel.t.html)`[`[`1840`](../source/travel.t.html#1840)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(depart southwest, 'to the southwest')` |  |  | [`travel.t`](../file/travel.t.html)`[`[`1848`](../source/travel.t.html#1848)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(depart starboard, 'to starboard')` |  |  | [`travel.t`](../file/travel.t.html)`[`[`1915`](../source/travel.t.html#1915)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(depart up, 'up')` |  |  | [`travel.t`](../file/travel.t.html)`[`[`1864`](../source/travel.t.html#1864)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(depart west, 'to the west')` |  |  | [`travel.t`](../file/travel.t.html)`[`[`1816`](../source/travel.t.html#1816)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(describe move pushable, '{The subj obj} {comes} to a halt. ' );` |  |  | [`thing.t`](../file/thing.t.html)`[`[`8651`](../source/thing.t.html#8651)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(destination unknown, '{I} {don\'t know} how to reach {him dobj}.' );}` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7538`](../source/thing.t.html#7538)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(distant, '{The subj cobj} {is} too far away. ')` |  |  | [`extras.t`](../file/extras.t.html)`[`[`297`](../source/extras.t.html#297)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(dont break, '{I} {see} no point in breaking {that dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`4644`](../source/thing.t.html#4644)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(dont know where gone, '{I} {don\'t know} where {the subj dobj} {has} gone. ')` |  |  | [`actor.t`](../file/actor.t.html)`[`[`2495`](../source/actor.t.html#2495)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(dont need cleaning obj, '{I} {don\'t need[ed]} anything to clean {the dobj} with. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7062`](../source/thing.t.html#7062)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(door opens, '{The subj obj} open{s/ed}. ');` |  |  | [`travel.t`](../file/travel.t.html)`[`[`915`](../source/travel.t.html#915)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(down, 'down')` |  |  | [`travel.t`](../file/travel.t.html)`[`[`1855`](../source/travel.t.html#1855)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(drop catch, '{The subj iobj} fail{s/ed} to catch {the obj}, so that {he obj} land{s/ed} on the ground instead. ');` |  |  | [`actor.t`](../file/actor.t.html)`[`[`2414`](../source/actor.t.html#2414)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(east, 'east')` |  |  | [`travel.t`](../file/travel.t.html)`[`[`1799`](../source/travel.t.html#1799)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(eat, '{I} {eat} {1}. ', gActionListStr);` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6953`](../source/thing.t.html#6953)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(empty command line, 'I beg your pardon?');` |  |  | [`parser.t`](../file/parser.t.html)`[`[`760`](../source/parser.t.html#760)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(exit color change, 'Okay, unvisited exits in the status line will now be shown in {1}. ', cmd.verbProd.colour_);` |  |  | [`actions.t`](../file/actions.t.html)`[`[`185`](../source/actions.t.html#185)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(exit color onoff, 'Okay, colouring of unvisited exits is now {1}.<.p>', cmd.verbProd.on_);` |  |  | [`actions.t`](../file/actions.t.html)`[`[`177`](../source/actions.t.html#177)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(exits, 'Exits:');` |  |  | [`exits.t`](../file/exits.t.html)`[`[`350`](../source/exits.t.html#350)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(exits from here, 'From {here} {i} could go ');` |  |  | [`exits.t`](../file/exits.t.html)`[`[`460`](../source/exits.t.html#460)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(exits on off okay, 'Okay. Exit listing in the status line is now <<stat ? 'ON' : 'OFF'>>, while exit listing in room descriptions is now <<look ? 'ON' : 'OFF'>>. ');` |  |  | [`exits.t`](../file/exits.t.html)`[`[`172`](../source/exits.t.html#172)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(explain continue, 'To continue the journey use the command <<aHref('Continue','CONTINUE','Continue')>> or C. ')` |  |  | [`actions.t`](../file/actions.t.html)`[`[`866`](../source/actions.t.html#866)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(explain exits on off, '<.p>Exit Listing can be adjusted with the following commands:\n EXITS ON -- show exits in both the status line and in room descriptions.\n EXITS OFF -- show exits neither in the status line nor in room descriptions.\n EXITS STATUS -- show exits in the status line only.\n EXITS LOOK -- show exits in room descriptions only.\n EXITS COLOR ON -- show unvisited exits in a different colour.\n EXITS COLOR OFF -- don\'t show unvisited exits in a different colour.\n EXITS COLOR RED / BLUE / GREEN / YELLOW -- show unvisted exits in the specified colour. <.p>'); ` |  |  | [`exits.t`](../file/exits.t.html)`[`[`140`](../source/exits.t.html#140)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(explain extra hints, 'If you\'re new to Interactive Fiction and would like to read a few extra hints and tips that will pop up here and there as you explore the story, type <<cmdStr('ON')>>. If you` |  |  | [`hintsys.t`](../file/hintsys.t.html)`[`[`950`](../source/hintsys.t.html#950)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(extinguish, '{I} {put} out {1}. ', gActionListStr);` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6926`](../source/thing.t.html#6926)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(extra hint cmd str, '<<aHref('EXTRA ' + stat, 'EXTRA ' + stat, 'Turning extra hints ' + stat.toLower)>>');` |  |  | [`hintsys.t`](../file/hintsys.t.html)`[`[`959`](../source/hintsys.t.html#959)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(extra hints command, 'EXTRA ')` |  |  | [`actions.t`](../file/actions.t.html)`[`[`390`](../source/actions.t.html#390)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(extra hints off, 'off')` |  |  | [`actions.t`](../file/actions.t.html)`[`[`387`](../source/actions.t.html#387)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(extra hints on, 'on')` |  |  | [`actions.t`](../file/actions.t.html)`[`[`388`](../source/actions.t.html#388)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(extra hints on or off, 'Okay; extra hints are now {1}. ', onOff );` |  |  | [`actions.t`](../file/actions.t.html)`[`[`361`](../source/actions.t.html#361)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(extra hints status, 'Extra hints are currently <<onOrOff(extraHintsActive)>>. To turn` |  |  | [`actions.t`](../file/actions.t.html)`[`[`373`](../source/actions.t.html#373)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(fail check, '{I} {cannot} do that (but the author of this game failed to specify why).')` |  |  | [`action.t`](../file/action.t.html)`[`[`966`](../source/action.t.html#966)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(feel nothing, '{I} {feel} nothing unexpected.<.p>');` |  |  | [`thing.t`](../file/thing.t.html)`[`[`4162`](../source/thing.t.html#4162)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(fiat lux, '{I} suddenly {1} glowing. ', gPlayerChar.isLit ? 'start' : 'stop' );` |  |  | [`debug.t`](../file/debug.t.html)`[`[`196`](../source/debug.t.html#196)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(file prompt failed, '<.parser>A system error occurred asking for a filename. Your computer might be running low on memory, or might have a configuration problem.<./parser> ');` |  |  | [`actions.t`](../file/actions.t.html)`[`[`2959`](../source/actions.t.html#2959)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(file prompt failed msg, '<.parser>Failed: <<makeSentence(msg)>><./parser> ');` |  |  | [`actions.t`](../file/actions.t.html)`[`[`2967`](../source/actions.t.html#2967)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(find hidden, '\^{1} {the dobj} {i} {find} {2}<<if findHiddenDest == gActor>>, which {i} {take}<<end>>. ', prep.prep, makeListStr(self.(prop)));` |  |  | [`thing.t`](../file/thing.t.html)`[`[`5094`](../source/thing.t.html#5094)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(finish death, 'YOU HAVE DIED');` |  |  | [`misc.t`](../file/misc.t.html)`[`[`877`](../source/misc.t.html#877)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(finish failure, 'YOU HAVE FAILED');` |  |  | [`misc.t`](../file/misc.t.html)`[`[`883`](../source/misc.t.html#883)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(finish game over, 'GAME OVER');` |  |  | [`misc.t`](../file/misc.t.html)`[`[`886`](../source/misc.t.html#886)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(finish victory, 'YOU HAVE WON');` |  |  | [`misc.t`](../file/misc.t.html)`[`[`880`](../source/misc.t.html#880)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(first footnote, 'A number in [square brackets] like the one above refers to a footnote, which you can read by typing FOOTNOTE followed by the number: <<aHref('footnote 1', 'FOOTNOTE 1', 'Show footnote [1]')>>, for example.` |  |  | [`footnote.t`](../file/footnote.t.html)`[`[`207`](../source/footnote.t.html#207)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(follow, '<.p>{The follower} follow{s/ed} behind {the pc}. ');` |  |  | [`actor.t`](../file/actor.t.html)`[`[`1208`](../source/actor.t.html#1208)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(follow actor, '{I} follow{s/ed} {1}. ', theName)` |  |  | [`actor.t`](../file/actor.t.html)`[`[`1323`](../source/actor.t.html#1323)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(footnote full, 'FULL'));` |  |  | [`footnote.t`](../file/footnote.t.html)`[`[`404`](../source/footnote.t.html#404)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(footnote medium, 'MEDIUM')` |  |  | [`footnote.t`](../file/footnote.t.html)`[`[`403`](../source/footnote.t.html#403)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(footnote off, 'OFF')` |  |  | [`footnote.t`](../file/footnote.t.html)`[`[`402`](../source/footnote.t.html#402)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(footnote ref, '<sup>[<<aHref('footnote ' + num, toString(num))>>]</sup>');` |  |  | [`footnote.t`](../file/footnote.t.html)`[`[`117`](../source/footnote.t.html#117)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(footnotes, 'FOOTNOTES ');` |  |  | [`footnote.t`](../file/footnote.t.html)`[`[`400`](../source/footnote.t.html#400)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(forward, 'forward')` |  |  | [`travel.t`](../file/travel.t.html)`[`[`1922`](../source/travel.t.html#1922)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(full score item points, '\n <<totalPoints>> point<<totalPoints == 1 ? '' : 's'>> for ');` |  |  | [`score.t`](../file/score.t.html)`[`[`105`](../source/score.t.html#105)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(full score prefix, 'Your score consists of:');` |  |  | [`score.t`](../file/score.t.html)`[`[`213`](../source/score.t.html#213)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(futile attack, 'Attacking {1} prove{s/d} futile. ', gActionListStr)` |  |  | [`thing.t`](../file/thing.t.html)`[`[`4591`](../source/thing.t.html#4591)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(game already brief, 'The game is already in BRIEF mode. ');` |  |  | [`actions.t`](../file/actions.t.html)`[`[`406`](../source/actions.t.html#406)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(game already verbose, 'The game is already in VERBOSE mode. ');` |  |  | [`actions.t`](../file/actions.t.html)`[`[`414`](../source/actions.t.html#414)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(game now brief, 'The game is now in BRIEF mode. <<first time>>Full room descriptions will now only be shown on the first visit to a room or in response to an explict <<aHref('LOOK', 'LOOK', 'Look around')>> command.<<only>> ');` |  |  | [`actions.t`](../file/actions.t.html)`[`[`399`](../source/actions.t.html#399)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(game now verbose, 'The game is now in VERBOSE mode. <<first time>>Full room descriptions be shown each time a room is visited.<<only>> ');` |  |  | [`actions.t`](../file/actions.t.html)`[`[`418`](../source/actions.t.html#418)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(get recording prompt, 'Please select a name for the new command log file'))` |  |  | [`actions.t`](../file/actions.t.html)`[`[`2446`](../source/actions.t.html#2446)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(get replay prompt, 'Please select the command log file to replay'))` |  |  | [`actions.t`](../file/actions.t.html)`[`[`2573`](../source/actions.t.html#2573)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(get restore prompt, 'Restore game from file'),` |  |  | [`actions.t`](../file/actions.t.html)`[`[`2772`](../source/actions.t.html#2772)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(get save prompt, 'Save game to file'))` |  |  | [`actions.t`](../file/actions.t.html)`[`[`2658`](../source/actions.t.html#2658)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(get scripting prompt, 'Please select a name for the new script file'))` |  |  | [`actions.t`](../file/actions.t.html)`[`[`2294`](../source/actions.t.html#2294)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(give, 'give {him interlocutor} ')` |  |  | [`actor.t`](../file/actor.t.html)`[`[`6710`](../source/actor.t.html#6710)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(going back dir, '(going {1})\n', dir.name);` |  |  | [`actions.t`](../file/actions.t.html)`[`[`793`](../source/actions.t.html#793)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(going dir, '(going {1})\n', dir.name);` |  |  | [`actions.t`](../file/actions.t.html)`[`[`857`](../source/actions.t.html#857)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(gonear, '{I} {am} translated in the twinkling of an eye...<.p>');` |  |  | [`thing.t`](../file/thing.t.html)`[`[`9186`](../source/thing.t.html#9186)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(hear nothing listen, '{I} hear{s/d} nothing out of the ordinary.<.p>');` |  |  | [`actions.t`](../file/actions.t.html)`[`[`642`](../source/actions.t.html#642)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(hear nothing listen to, '{I} hear{s/d} nothing out of the ordinary.<.p>')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`4091`](../source/thing.t.html#4091)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(hints disabled, '<.parser>Hints are now disabled.<./parser> ');` |  |  | [`hintsys.t`](../file/hintsys.t.html)`[`[`578`](../source/hintsys.t.html#578)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(hints done, '<.parser>Done.<./parser> ');` |  |  | [`hintsys.t`](../file/hintsys.t.html)`[`[`638`](../source/hintsys.t.html#638)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(hints not present, '<.parser>Sorry, this story doesn&rsquo;t have any built-in hints.<./parser> ');` |  |  | [`actions.t`](../file/actions.t.html)`[`[`318`](../source/actions.t.html#318)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(i lie, '{I} {lie}')` |  |  | [`postures.t`](../file/postures.t.html)`[`[`109`](../source/postures.t.html#109)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(i sit, '{I} {sit}')` |  |  | [`postures.t`](../file/postures.t.html)`[`[`99`](../source/postures.t.html#99)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(i stand, '{I} {stand}')` |  |  | [`postures.t`](../file/postures.t.html)`[`[`89`](../source/postures.t.html#89)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(implicit action report failure, 'trying to ')` |  |  | [`english.t`](../file/english.t.html)`[`[`5476`](../source/english.t.html#5476)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(implicit action report separator, ' then ');` |  |  | [`english.t`](../file/english.t.html)`[`[`5443`](../source/english.t.html#5443)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(implicit action report start, '(first ');` |  |  | [`english.t`](../file/english.t.html)`[`[`5428`](../source/english.t.html#5428)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(implicit action report terminator, ')\n');` |  |  | [`english.t`](../file/english.t.html)`[`[`5451`](../source/english.t.html#5451)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(implicit go, '(first heading for {1})\n', destRoom.theName);` |  |  | [`senseRegion.t`](../file/senseRegion.t.html)`[`[`1729`](../source/senseRegion.t.html#1729)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(in, 'in')` |  |  | [`travel.t`](../file/travel.t.html)`[`[`1871`](../source/travel.t.html#1871)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(in room name, 'in {1}', theName);` |  |  | [`senseRegion.t`](../file/senseRegion.t.html)`[`[`416`](../source/senseRegion.t.html#416)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(indirect lockable, '{The dobj} appear{s/ed} to use some other kind of locking mechanism. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`5824`](../source/thing.t.html#5824)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(input script failed, '<.parser>Failed; the script input file could not be opened.<./parser>');` |  |  | [`actions.t`](../file/actions.t.html)`[`[`2613`](../source/actions.t.html#2613)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(input script failed exception, '<.parser>Failed; <<exc.displayException>><./parser>'); ` |  |  | [`actions.t`](../file/actions.t.html)`[`[`2610`](../source/actions.t.html#2610)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(input script okay, '<.parser>Reading commands from <q><< File.getRootName(fname).htmlify()>></q>...<./parser>\n ');` |  |  | [`actions.t`](../file/actions.t.html)`[`[`2622`](../source/actions.t.html#2622)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(invalid finish option, '<q>{1}</q> was not one of the options.<.p>', resp);` |  |  | [`misc.t`](../file/misc.t.html)`[`[`1049`](../source/misc.t.html#1049)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(invalid setting, 'That {dummy} {is} not a valid setting for {the dobj}. ')` |  |  | [`gadget.t`](../file/gadget.t.html)`[`[`205`](../source/gadget.t.html#205)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(inventory tall, 'Inventory Listing is now set to TALL');` |  |  | [`actions.t`](../file/actions.t.html)`[`[`434`](../source/actions.t.html#434)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(inventory wide, 'Inventory Listing is now set to WIDE');` |  |  | [`actions.t`](../file/actions.t.html)`[`[`446`](../source/actions.t.html#446)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(jump, '{I} jump{s/ed} on the spot, fruitlessly. ');` |  |  | [`actions.t`](../file/actions.t.html)`[`[`537`](../source/actions.t.html#537)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(jump off, '{I} jump{s/ed} off {1} and land{s/ed} on the ground', gActionListStr);` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7974`](../source/thing.t.html#7974)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(key doesnt work, 'Unfortunately {1} {dummy} {doesn\'t work[ed]} on {the dobj}. ', useKey_.theName)` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6151`](../source/thing.t.html#6151)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(key not needed, '{I} {don\'t need[ed]} a key to lock and unlock {the dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`5822`](../source/thing.t.html#5822)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(kiss response, '{The subj dobj} {doesn\'t like[d]} that. ')` |  |  | [`actor.t`](../file/actor.t.html)`[`[`2256`](../source/actor.t.html#2256)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(list immediate container, '{I} {am} {in loc}. <.p>');` |  |  | [`thing.t`](../file/thing.t.html)`[`[`1219`](../source/thing.t.html#1219)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(list tall empty, '\n{I} {am} empty-handed. '); }` |  |  | [`lister.t`](../file/lister.t.html)`[`[`319`](../source/lister.t.html#319)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(list tall prefix, '\n{I} {am} carrying:\n '); }` |  |  | [`lister.t`](../file/lister.t.html)`[`[`315`](../source/lister.t.html#315)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(locked, '{The subj dobj} {is} locked. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`4796`](../source/thing.t.html#4796)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(look behind, '{I} {find} nothing behind {the dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`5281`](../source/thing.t.html#5281)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(look in, '{I} {see} nothing interesting in {the dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`5068`](../source/thing.t.html#5068)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(look through, '{I} {see} nothing through {the dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`5308`](../source/thing.t.html#5308)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(look under, '{I} {find} nothing of interest under {the dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`5185`](../source/thing.t.html#5185)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(lying, 'lying')` |  |  | [`postures.t`](../file/postures.t.html)`[`[`104`](../source/postures.t.html#104)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(mention full score, 'To see your complete list of achievements, use the <<aHref('full score', 'FULL SCORE', 'show full score')>> command. ` |  |  | [`actions.t`](../file/actions.t.html)`[`[`214`](../source/actions.t.html#214)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(move no effect, 'Moving {1} {dummy} {has} no effect. ', gActionListStr)` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6757`](../source/thing.t.html#6757)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(multi not allowed, 'Sorry; multiple objects aren\'t allowed with that command.'); ` |  |  | [`parser.t`](../file/parser.t.html)`[`[`5721`](../source/parser.t.html#5721)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(need to hold, '{I} need{s/ed} to be holding {the obj} to do that. ');` |  |  | [`precond.t`](../file/precond.t.html)`[`[`439`](../source/precond.t.html#439)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(no antecedent, 'I\'m not sure what you mean by "{1}".', np.prod.getText());` |  |  | [`parser.t`](../file/parser.t.html)`[`[`5372`](../source/parser.t.html#5372)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(no clean, '{The subj dobj} {doesn\'t need[ed]} cleaning. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7058`](../source/thing.t.html#7058)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(no clear exits, 'It{dummy}{\'s} not clear where {i} {can} go from {here}. ');` |  |  | [`exits.t`](../file/exits.t.html)`[`[`454`](../source/exits.t.html#454)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(no compass directions, 'Compass directions {plural} {have} no meaning {here}, ');` |  |  | [`doer.t`](../file/doer.t.html)`[`[`412`](../source/doer.t.html#412)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(no destination, 'That{dummy} {doesn\'t} lead anywhere. ');` |  |  | [`travel.t`](../file/travel.t.html)`[`[`1236`](../source/travel.t.html#1236)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(no exit lister, 'Sorry, that command is not available in this game, since there\'s no exit lister. '); ` |  |  | [`actions.t`](../file/actions.t.html)`[`[`193`](../source/actions.t.html#193)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(no exits, 'Exits: none. ');` |  |  | [`exits.t`](../file/exits.t.html)`[`[`424`](../source/exits.t.html#424)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(no exits from here, 'There {plural} {are} no exits from {here}. ');` |  |  | [`exits.t`](../file/exits.t.html)`[`[`395`](../source/exits.t.html#395)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(no extra hints, 'Sorry, there are no extra hints in this game. ');` |  |  | [`actions.t`](../file/actions.t.html)`[`[`340`](../source/actions.t.html#340)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(no goodbye response, 'The conversation{dummy} {is} ended. ')` |  |  | [`actor.t`](../file/actor.t.html)`[`[`1954`](../source/actor.t.html#1954)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(no hello response, '{I} now {have} {1} attention. ', possAdj)` |  |  | [`actor.t`](../file/actor.t.html)`[`[`1948`](../source/actor.t.html#1948)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(no hints to disable, '<.parser>This game doesn\'t have any hints to turn off.<./parser> ');` |  |  | [`actions.t`](../file/actions.t.html)`[`[`328`](../source/actions.t.html#328)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(no interlocutor, '{I}{\'m} not talking to anyone. ');` |  |  | [`actions.t`](../file/actions.t.html)`[`[`879`](../source/actions.t.html#879)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(no journey, '{I}{\'m} not going anywhere. ');` |  |  | [`actions.t`](../file/actions.t.html)`[`[`820`](../source/actions.t.html#820)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(no longer talking to anyone, '{I}{\'m} no longer talking to anyone. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`9093`](../source/thing.t.html#9093)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(no matched topic, '{The subj dobj} {has} nothing to say on that. ')` |  |  | [`topicEntry.t`](../file/topicEntry.t.html)`[`[`300`](../source/topicEntry.t.html#300)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(no one here, 'There{dummy}{\'s} no one {here} to talk to. ');` |  |  | [`actions.t`](../file/actions.t.html)`[`[`1854`](../source/actions.t.html#1854)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(no oops now, 'Sorry, I\'m not sure what you\'re correcting.');` |  |  | [`parser.t`](../file/parser.t.html)`[`[`5128`](../source/parser.t.html#5128)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(no relations defined, 'No relations are defined in this game. ');` |  |  | [`relations.t`](../file/relations.t.html)`[`[`772`](../source/relations.t.html#772)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(no relations defined, '<i>no relations defined</i> ');` |  |  | [`relations.t`](../file/relations.t.html)`[`[`907`](../source/relations.t.html#907)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(no repeat, 'Sorry, there is no action available to repeat. ');` |  |  | [`actions.t`](../file/actions.t.html)`[`[`3002`](../source/actions.t.html#3002)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(no response, '{The subj cobj} {doesnot respond[ed]}. ')` |  |  | [`actor.t`](../file/actor.t.html)`[`[`186`](../source/actor.t.html#186)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(no room, 'There {dummy} {is} not enough room {1} {2} for {the obj}. ', objInPrep, theName); ` |  |  | [`thing.t`](../file/thing.t.html)`[`[`2119`](../source/thing.t.html#2119)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(no room behind, 'There {dummy}{isn\'t} enough room for {the dobj} behind {the iobj}. '); ` |  |  | [`thing.t`](../file/thing.t.html)`[`[`5719`](../source/thing.t.html#5719)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(no room in, 'There {dummy}{isn\'t} enough room for {the dobj} in {the iobj}. '); ` |  |  | [`thing.t`](../file/thing.t.html)`[`[`5534`](../source/thing.t.html#5534)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(no room under, 'There {dummy}{isn\'t} enough room for {the dobj} under {the iobj}. '); ` |  |  | [`thing.t`](../file/thing.t.html)`[`[`5626`](../source/thing.t.html#5626)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(no shipboard directions, 'Shipboard directions {plural} {have} no meaning {here}. ');` |  |  | [`doer.t`](../file/doer.t.html)`[`[`400`](../source/doer.t.html#400)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(no sleeping, 'This {dummy} {is} no time for sleeping. ');` |  |  | [`actions.t`](../file/actions.t.html)`[`[`658`](../source/actions.t.html#658)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(no staging loc, '{The subj obj} {can\'t} be reached. ');` |  |  | [`precond.t`](../file/precond.t.html)`[`[`781`](../source/precond.t.html#781)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(no such footnote, '<.parser>The story has never referred to any such footnote.<./parser> ');` |  |  | [`footnote.t`](../file/footnote.t.html)`[`[`155`](../source/footnote.t.html#155)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(no such relation, 'ERROR, there is no such relation as <q>{1}</q>. ', rel);` |  |  | [`relations.t`](../file/relations.t.html)`[`[`487`](../source/relations.t.html#487)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(no such relation, 'There is no such relation in the game as {1}. ', literal);` |  |  | [`relations.t`](../file/relations.t.html)`[`[`870`](../source/relations.t.html#870)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(no test scripts, 'There are no test scripts defined in this game. ');` |  |  | [`debug.t`](../file/debug.t.html)`[`[`411`](../source/debug.t.html#411)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(no thoughts, '{I} {have} no thoughts on that particular topic.')` |  |  | [`thoughts.t`](../file/thoughts.t.html)`[`[`57`](../source/thoughts.t.html#57)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(no way back, 'There{dummy}{\'s} no way back. ');` |  |  | [`actions.t`](../file/actions.t.html)`[`[`781`](../source/actions.t.html#781)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(none in location, '{I} {see} no {2} {3} {the 4}.', cmd, txt, locQual.locType.prep, locQual.matches[1].obj);` |  |  | [`parser.t`](../file/parser.t.html)`[`[`5535`](../source/parser.t.html#5535)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(none in locations, '{I} {see} no {2} {3} any {4}.', cmd, txt, locQual.locType.prep, locQual.prod.getText());` |  |  | [`parser.t`](../file/parser.t.html)`[`[`5521`](../source/parser.t.html#5521)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(none in owner, '{The subj obj} {doesn\'t appear[ed]} to have any {2}.', cmd, txt);` |  |  | [`parser.t`](../file/parser.t.html)`[`[`5481`](../source/parser.t.html#5481)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(none in owners, 'No {2} {dummy}appear{s/ed} to have any {3}.', cmd, possQual.prod.getText(), txt);` |  |  | [`parser.t`](../file/parser.t.html)`[`[`5465`](../source/parser.t.html#5465)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(none with contents, '{I} {see} no {2} of {3}.', cmd, txt, contQual.matches[1].obj);` |  |  | [`parser.t`](../file/parser.t.html)`[`[`5590`](../source/parser.t.html#5590)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(none with contents in list, '{I} {see} no {2} of {3}.', cmd, txt, contQual.prod.getText());` |  |  | [`parser.t`](../file/parser.t.html)`[`[`5575`](../source/parser.t.html#5575)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(north, 'north')` |  |  | [`travel.t`](../file/travel.t.html)`[`[`1791`](../source/travel.t.html#1791)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(northeast, 'northeast')` |  |  | [`travel.t`](../file/travel.t.html)`[`[`1823`](../source/travel.t.html#1823)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(northwest, 'northwest')` |  |  | [`travel.t`](../file/travel.t.html)`[`[`1831`](../source/travel.t.html#1831)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(not attached, '{The subj dobj} {is}n\'t attached to anything. ')` |  |  | [`attachables.t`](../file/attachables.t.html)`[`[`174`](../source/attachables.t.html#174)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(not attached to that, '{The subj dobj} {isn\'t} attached to {the iobj}. ')` |  |  | [`attachables.t`](../file/attachables.t.html)`[`[`271`](../source/attachables.t.html#271)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(not closeable, '{The subj dobj} {is} not something that {can} be closed. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`4836`](../source/thing.t.html#4836)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(not enough nouns, '{I} {don\'t see} that many {2} {here}.', cmd, txt); ` |  |  | [`parser.t`](../file/parser.t.html)`[`[`5426`](../source/parser.t.html#5426)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(not fastened, '{The subj dobj} {isn\'t} fastened. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7775`](../source/thing.t.html#7775)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(not holding, '{I} {amn\'t} holding {the dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`4471`](../source/thing.t.html#4471)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(not important, '{The subj cobj} {is} not important. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`3942`](../source/thing.t.html#3942)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(not in staging location, '{I} need{s/ed} to be <<if stagingLoc.ofKind(Room)>> directly <<end>>` |  |  | [`precond.t`](../file/precond.t.html)`[`[`830`](../source/precond.t.html#830)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(not inside, '{The dobj} {is}n\'t {in iobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7222`](../source/thing.t.html#7222)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(not interlocutor, '{I}{\'m} not talking to {1}. ', theName);` |  |  | [`actor.t`](../file/actor.t.html)`[`[`1923`](../source/actor.t.html#1923)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(not lit, '{The subj dobj} {isn\'t} lit. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6930`](../source/thing.t.html#6930)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(not lockable, '{The subj dobj} {isn\'t} lockable. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`5821`](../source/thing.t.html#5821)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(not locked, '{The subj dobj} {isn\'t} locked. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`5826`](../source/thing.t.html#5826)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(not on anything, '{I}{\'m} not on anything. ');` |  |  | [`actions.t`](../file/actions.t.html)`[`[`1420`](../source/actions.t.html#1420)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(not plugged in, '{The subj dobj} {isn\'t} plugged into anything. ') ` |  |  | [`attachables.t`](../file/attachables.t.html)`[`[`836`](../source/attachables.t.html#836)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(not plugged into that, '{The subj dobj} {isn\'t} plugged into {the iobj}. ')` |  |  | [`attachables.t`](../file/attachables.t.html)`[`[`839`](../source/attachables.t.html#839)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(not potable, '{I} {can\'t} drink {1}. ', fluidName)` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6975`](../source/thing.t.html#6975)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(not switchable, '{The subj dobj} {can\'t} be switched on and off. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6182`](../source/thing.t.html#6182)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(not switched on, '{The subj dobj} {isn\'t} switched on. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6210`](../source/thing.t.html#6210)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(not talking, '{I}{\'m} not talking to anyone. ');` |  |  | [`actions.t`](../file/actions.t.html)`[`[`1758`](../source/actions.t.html#1758)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(not talking to anyone, '{I}{\'m} not talking to anyone. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`9090`](../source/thing.t.html#9090)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(not that many left, 'There{plural} {aren\'t} that many left to take. ')` |  |  | [`collective.t`](../file/collective.t.html)`[`[`418`](../source/collective.t.html#418)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(not understood, 'I don\'t understand that command.');` |  |  | [`parser.t`](../file/parser.t.html)`[`[`5027`](../source/parser.t.html#5027)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(not worn, '{I}{\'m} not wearing {the dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6354`](../source/thing.t.html#6354)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(note main restore, 'Game restored.<.p>');` |  |  | [`misc.t`](../file/misc.t.html)`[`[`144`](../source/misc.t.html#144)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(note with script, 'Comment recorded. ');` |  |  | [`input.t`](../file/input.t.html)`[`[`769`](../source/input.t.html#769)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(note without script, 'Comment NOT recorded. ');` |  |  | [`input.t`](../file/input.t.html)`[`[`773`](../source/input.t.html#773)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(note without script warning, 'Comment NOT recorded. ');` |  |  | [`input.t`](../file/input.t.html)`[`[`771`](../source/input.t.html#771)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(nothing attached, 'There {dummy} {isn\'t} anything attached to {the iobj}. ')` |  |  | [`attachables.t`](../file/attachables.t.html)`[`[`274`](../source/attachables.t.html#274)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(nothing in mind, '{I} {have} nothing in mind to discuss with {1} just {then}. ', gPlayerChar.currentInterlocutor.theObjName);` |  |  | [`actor.t`](../file/actor.t.html)`[`[`6462`](../source/actor.t.html#6462)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(nothing on, '{I} {find} nothing of interest on {the dobj}. ')` |  |  | [`extras.t`](../file/extras.t.html)`[`[`199`](../source/extras.t.html#199)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(nothing special, '{I} {see} nothing special about {the 1}. ', self); ` |  |  | [`thing.t`](../file/thing.t.html)`[`[`4027`](../source/thing.t.html#4027)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(nothing suitable for all, 'There{\'s} nothing suitable for ALL to refer to. ');` |  |  | [`parser.t`](../file/parser.t.html)`[`[`5416`](../source/parser.t.html#5416)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(nothing to discuss on that topic, '{I} {have} nothing to discuss on that topic just {then}. '); ` |  |  | [`actor.t`](../file/actor.t.html)`[`[`3300`](../source/actor.t.html#3300)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(nothing to take, 'There{dummy}{\'s} nothing available to take from {1}. ', gCommand.iobj.theName);` |  |  | [`actions.t`](../file/actions.t.html)`[`[`1376`](../source/actions.t.html#1376)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(nowhere back, '{I} {have} nowhere to go back to. ');` |  |  | [`actions.t`](../file/actions.t.html)`[`[`770`](../source/actions.t.html#770)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(npc opens door, '{The subj traveler} open{s/ed} {the obj}. ');` |  |  | [`travel.t`](../file/travel.t.html)`[`[`902`](../source/travel.t.html#902)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(obj needs to be closed, '{The subj obj} need{s/ed} to be closed for that. ');` |  |  | [`precond.t`](../file/precond.t.html)`[`[`258`](../source/precond.t.html#258)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(object needs to be open, '{The subj obj} need{s/ed} to be open for that. ');` |  |  | [`precond.t`](../file/precond.t.html)`[`[`189`](../source/precond.t.html#189)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(off route, '{I}{\'m} no longer on {my} route. Use the GO TO command to set up a new route. ');` |  |  | [`actions.t`](../file/actions.t.html)`[`[`834`](../source/actions.t.html#834)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(okay adopt posture, 'Okay, {i} {am} {now} {1}. ', pos.participle); ` |  |  | [`postures.t`](../file/postures.t.html)`[`[`157`](../source/postures.t.html#157)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(okay attach, '{I} attach{es/ed} {1} to {the iobj}. ', gActionListStr) ` |  |  | [`attachables.t`](../file/attachables.t.html)`[`[`150`](../source/attachables.t.html#150)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(okay clean, 'Cleaned.|{I} clean{s/ed} {1}. ', gActionListStr)` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7065`](../source/thing.t.html#7065)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(okay detach, '{I} detach{es/ed} {1}. ', gActionListStr)` |  |  | [`attachables.t`](../file/attachables.t.html)`[`[`200`](../source/attachables.t.html#200)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(okay detach from, '{I} detach{es/ed} {1} from {the iobj}. ', gActionListStr)` |  |  | [`attachables.t`](../file/attachables.t.html)`[`[`235`](../source/attachables.t.html#235)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(okay doff, 'Okay, {I}{\'m} no longer wearing {1}. ', gActionListStr);` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6345`](../source/thing.t.html#6345)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(okay fasten, 'Done|{I} fasten{s/ed} {1}. ', gActionListStr);` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7680`](../source/thing.t.html#7680)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(okay get in, '{I} {get} in {1}. ', gActionListStr);` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6584`](../source/thing.t.html#6584)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(okay get on, '{I} {get} on {1}. ', gActionListStr);` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6452`](../source/thing.t.html#6452)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(okay get on posture, '{1} on {2}. ', gActor.posture.verbPhrase, gActionListStr);` |  |  | [`postures.t`](../file/postures.t.html)`[`[`298`](../source/postures.t.html#298)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(okay get outof, 'Okay, {i} {get} {outof dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6656`](../source/thing.t.html#6656)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(okay lie in, '{I} {lie} in {1}. ', gActionListStr)` |  |  | [`postures.t`](../file/postures.t.html)`[`[`460`](../source/postures.t.html#460)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(okay lie on, '{I} {lie} on {1}. ', gActionListStr)` |  |  | [`postures.t`](../file/postures.t.html)`[`[`275`](../source/postures.t.html#275)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(okay lit, 'Done.|{I} {light} {1}. ', gActionListStr);` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6886`](../source/thing.t.html#6886)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(okay lock with, okayLockWithMsg, gActionListStr);` |  |  | [`thing.t`](../file/thing.t.html)`[`[`9426`](../source/thing.t.html#9426)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(okay move to, '{I} move{s/d} {1} {dummy} to {the iobj}. ', gActionListStr);` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6818`](../source/thing.t.html#6818)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(okay open, okayOpenMsg, gActionListStr);` |  |  | [`thing.t`](../file/thing.t.html)`[`[`4781`](../source/thing.t.html#4781)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(okay plug, '{I} plug{s/?ed} {1} into {the iobj}. ', gActionListStr) ` |  |  | [`attachables.t`](../file/attachables.t.html)`[`[`740`](../source/attachables.t.html#740)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(okay plug in, '{I} plug{s/?ed} in {1}. ', gActionListStr); }` |  |  | [`attachables.t`](../file/attachables.t.html)`[`[`908`](../source/attachables.t.html#908)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(okay pulled, 'Done|{I} pull{s/ed} {1}', gActionListStr); }` |  |  | [`gadget.t`](../file/gadget.t.html)`[`[`93`](../source/gadget.t.html#93)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(okay push into, '{I} <<if matchPullOnly>> pull{s/ed} <<else>> push{es/ed}<<end>>} {the dobj} into {the iobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`8722`](../source/thing.t.html#8722)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(okay push out of, '{I} <<if matchPullOnly>> pull{s/ed} <<else>> push{es/ed}<<end>> {the dobj} {outof iobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`8790`](../source/thing.t.html#8790)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(okay pushed, 'Done|{I} push{es/ed} {1}', gActionListStr); }` |  |  | [`gadget.t`](../file/gadget.t.html)`[`[`118`](../source/gadget.t.html#118)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(okay set to, '{I} {set} {1} to {2}. ', gActionListStr, curSetting)` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7415`](../source/thing.t.html#7415)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(okay sit in, '{I} {sit} in {1}. ', gActionListStr)` |  |  | [`postures.t`](../file/postures.t.html)`[`[`428`](../source/postures.t.html#428)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(okay sit on, '{I} {sit} on {1}. ', gActionListStr)` |  |  | [`postures.t`](../file/postures.t.html)`[`[`243`](../source/postures.t.html#243)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(okay stand in, '{I} {stand} in {1}. ', gActionListStr)` |  |  | [`postures.t`](../file/postures.t.html)`[`[`399`](../source/postures.t.html#399)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(okay stand on, '{I} {stand} on {1}. ', gActionListStr)` |  |  | [`postures.t`](../file/postures.t.html)`[`[`212`](../source/postures.t.html#212)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(okay turn to, 'Okay, {I} turn{s/ed} {1} to {2}', gActionListStr, gLiteral);` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7364`](../source/thing.t.html#7364)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(okay unlock with, okayUnlockWithMsg, gActionListStr);` |  |  | [`thing.t`](../file/thing.t.html)`[`[`9369`](../source/thing.t.html#9369)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(okay unplug, '{I} unplug{s/?ed} {1}. ', gActionListStr)` |  |  | [`attachables.t`](../file/attachables.t.html)`[`[`872`](../source/attachables.t.html#872)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(okay unplug from, '{I} unplug{s/?ed} {1} from {the iobj}. ', gActionListStr)` |  |  | [`attachables.t`](../file/attachables.t.html)`[`[`833`](../source/attachables.t.html#833)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(okay wear, 'Okay, {i}{\'m} now wearing {1}. ', gActionListStr);` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6312`](../source/thing.t.html#6312)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(only listen, '{I} {can\'t} do that to a sound. ')` |  |  | [`extras.t`](../file/extras.t.html)`[`[`94`](../source/extras.t.html#94)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(only smell, '{I} {can\'t} do that to a smell. ')` |  |  | [`extras.t`](../file/extras.t.html)`[`[`54`](../source/extras.t.html#54)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(onset of darkness, '\n{I} {am} plunged into darkness. ');` |  |  | [`action.t`](../file/action.t.html)`[`[`292`](../source/action.t.html#292)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(onset of darkness, '\n{I} {am} plunged into darkness. ');` |  |  | [`sysrules.t`](../file/sysrules.t.html)`[`[`176`](../source/sysrules.t.html#176)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(or, ' or ');` |  |  | [`actor.t`](../file/actor.t.html)`[`[`6637`](../source/actor.t.html#6637)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(or list separator, '; or ')` |  |  | [`actor.t`](../file/actor.t.html)`[`[`6716`](../source/actor.t.html#6716)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(ordinal out of range, 'Sorry, I don\'t see what you\'re referring to.');` |  |  | [`parser.t`](../file/parser.t.html)`[`[`5710`](../source/parser.t.html#5710)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(out, 'out')` |  |  | [`travel.t`](../file/travel.t.html)`[`[`1879`](../source/travel.t.html#1879)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(part of me, '{The subj dobj} {is} part of {me}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`4472`](../source/thing.t.html#4472)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(plunged into darkness, ', plunging {1} into darkness', gPlayerChar.theName)` |  |  | [`fueled.t`](../file/fueled.t.html)`[`[`124`](../source/fueled.t.html#124)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(pointless to jump over, 'It {dummy}{is} pointless to try to jump over {the dobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7999`](../source/thing.t.html#7999)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(port, 'port')` |  |  | [`travel.t`](../file/travel.t.html)`[`[`1906`](../source/travel.t.html#1906)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(posture already adopted, '{I} {am} already {1}. ', pos.participle);` |  |  | [`postures.t`](../file/postures.t.html)`[`[`147`](../source/postures.t.html#147)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(pull no effect, 'Pulling {1} {dummy} {has} no effect. ', gActionListStr)` |  |  | [`thing.t`](../file/thing.t.html)`[`[`5386`](../source/thing.t.html#5386)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(purloin, '{I} suddenly {find} {myself} holding {1}. ', gActionListStr );` |  |  | [`thing.t`](../file/thing.t.html)`[`[`9156`](../source/thing.t.html#9156)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(push no effect, 'Pushing {1} {dummy} {has} no effect. ', gActionListStr)` |  |  | [`thing.t`](../file/thing.t.html)`[`[`5364`](../source/thing.t.html#5364)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(push travel somewhere, '{I} <<if matchPullOnly>> pull{s/ed} <<else>> push{es/ed}<<end>> {the dobj} {1} {the iobj}. <.p>', via.prep); ` |  |  | [`thing.t`](../file/thing.t.html)`[`[`8671`](../source/thing.t.html#8671)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(push travel traversal, '{I} <<if matchPullOnly>> pull{s/ed} <<else>> push{es/ed}<<end>> {the dobj} {1}. <.p>', gIobj.traversalMsg);` |  |  | [`thing.t`](../file/thing.t.html)`[`[`8667`](../source/thing.t.html#8667)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(quit query, '<.p>Do you really want to quit? (y/n)?\n>');` |  |  | [`actions.t`](../file/actions.t.html)`[`[`24`](../source/actions.t.html#24)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(record off ignored, '<.parser>No command recording is currently being made.<./parser> ');` |  |  | [`actions.t`](../file/actions.t.html)`[`[`2547`](../source/actions.t.html#2547)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(record off okay, '<.parser>Command recording ended.<./parser> ');` |  |  | [`actions.t`](../file/actions.t.html)`[`[`2561`](../source/actions.t.html#2561)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(recording canceled, '<.parser>Canceled.<./parser> '); }` |  |  | [`actions.t`](../file/actions.t.html)`[`[`2453`](../source/actions.t.html#2453)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(recording failed, '<.parser>Failed; an error occurred opening the command recording file.<./parser>');` |  |  | [`actions.t`](../file/actions.t.html)`[`[`2501`](../source/actions.t.html#2501)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(recording failed exception, '<.parser>Failed; <<exc.displayException()>><./parser>');` |  |  | [`actions.t`](../file/actions.t.html)`[`[`2497`](../source/actions.t.html#2497)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(recording okay, '<.parser>Commands will now be recorded. Type <<aHref('record off', 'RECORD OFF', 'Turn off recording')>>` |  |  | [`actions.t`](../file/actions.t.html)`[`[`2481`](../source/actions.t.html#2481)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(refuse command, '{I} {have} better things to do. ')` |  |  | [`actor.t`](../file/actor.t.html)`[`[`313`](../source/actor.t.html#313)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(remap error, '<b>ERROR!</b> The long form of remap is no longer available; please use a Doer instead. ');` |  |  | [`action.t`](../file/action.t.html)`[`[`484`](../source/action.t.html#484)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(remote contents prefix, '<.p>\^{1} {i} {see} ', irName);` |  |  | [`senseRegion.t`](../file/senseRegion.t.html)`[`[`518`](../source/senseRegion.t.html#518)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(remote contents suffix, '. ');` |  |  | [`senseRegion.t`](../file/senseRegion.t.html)`[`[`523`](../source/senseRegion.t.html#523)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(remote subcontents prefix, '<.p>\^{1} <<pl ? '{plural} {is}' : '{dummy} {is}'>> ', inParentName); ` |  |  | [`senseRegion.t`](../file/senseRegion.t.html)`[`[`543`](../source/senseRegion.t.html#543)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(remote subcontents suffix, '. ');` |  |  | [`senseRegion.t`](../file/senseRegion.t.html)`[`[`549`](../source/senseRegion.t.html#549)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(replay canceled, '<.parser>Canceled.<./parser> '); }` |  |  | [`actions.t`](../file/actions.t.html)`[`[`2580`](../source/actions.t.html#2580)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(report close, 'Done. |{I} close{s/d} {1}. ', gActionListStr);` |  |  | [`thing.t`](../file/thing.t.html)`[`[`4832`](../source/thing.t.html#4832)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(report drop, 'Dropped. |{I} drop{s/?ed} {1}. ', gActionListStr);` |  |  | [`thing.t`](../file/thing.t.html)`[`[`4467`](../source/thing.t.html#4467)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(report kiss, 'Kissing {1} {dummy}prove{s/d} remarkably unrewarding. ', gActionListStr); ` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7925`](../source/thing.t.html#7925)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(report left behind, '<<if moveReport == ''>>Moving {1} <<else>>It also <<end>> {dummy} {leaves} {2} behind. ', theName, makeListStr(lst));` |  |  | [`thing.t`](../file/thing.t.html)`[`[`4356`](../source/thing.t.html#4356)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(report lock, okayLockMsg, gActionListStr);` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6072`](../source/thing.t.html#6072)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(report put behind, '{I} {put} {1} behind {the iobj}. ', gActionListStr);` |  |  | [`thing.t`](../file/thing.t.html)`[`[`5682`](../source/thing.t.html#5682)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(report put in, '{I} {put} {1} in {the iobj}. ', gActionListStr);` |  |  | [`thing.t`](../file/thing.t.html)`[`[`5499`](../source/thing.t.html#5499)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(report put on, '{I} {put} {1} on {the iobj}. ', gActionListStr);` |  |  | [`thing.t`](../file/thing.t.html)`[`[`5427`](../source/thing.t.html#5427)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(report put under, '{I} {put} {1} under {the iobj}. ', gActionListStr);` |  |  | [`thing.t`](../file/thing.t.html)`[`[`5590`](../source/thing.t.html#5590)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(report switch, 'Okay, {i} turn{s/ed} {1} {2}. ', isOn ? 'on' : 'off', gActionListStr);` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6229`](../source/thing.t.html#6229)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(report take, 'Taken. | {I} {take} {1}. ', gActionListStr);` |  |  | [`thing.t`](../file/thing.t.html)`[`[`4228`](../source/thing.t.html#4228)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(report turn off, 'Done.|{I} turn{s/ed} off {the dobj}. ');` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6206`](../source/thing.t.html#6206)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(report turn on, 'Done.|{I} turn{s/ed} on {the dobj}. ');` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6178`](../source/thing.t.html#6178)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(report unlock, okayUnlockMsg, gActionListStr);` |  |  | [`thing.t`](../file/thing.t.html)`[`[`5995`](../source/thing.t.html#5995)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(restart query, 'Do you really want to start again from the beginning (y/n)?\n>');` |  |  | [`actions.t`](../file/actions.t.html)`[`[`60`](../source/actions.t.html#60)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(restore canceled, '<.parser>Canceled.<./parser> ');` |  |  | [`actions.t`](../file/actions.t.html)`[`[`2802`](../source/actions.t.html#2802)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(restore corrupted file, '<.parser>Failed: this saved state file appears to be corrupted. This can occur if the file was modified by another program, or the file was copied between computers in a non-binary transfer mode, or the physical media storing the file were damaged.<./parser> '); ` |  |  | [`actions.t`](../file/actions.t.html)`[`[`2909`](../source/actions.t.html#2909)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(restore failed, '<.parser>Failed: the position could not be restored.<./parser>'); ` |  |  | [`actions.t`](../file/actions.t.html)`[`[`2918`](../source/actions.t.html#2918)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(restore failed on server, '<.parser>Failed, because of a problem accessing the storage server: <<makeSentence(sse.errMsg)>><./parser>'); ` |  |  | [`actions.t`](../file/actions.t.html)`[`[`2882`](../source/actions.t.html#2882)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(restore invalid file, '<.parser>Failed: this is not a valid saved position file.<./parser> '); ` |  |  | [`actions.t`](../file/actions.t.html)`[`[`2896`](../source/actions.t.html#2896)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(restore invalid match, '<.parser>Failed: the file was not saved by this story (or was saved by an incompatible version of the story).<./parser> '); ` |  |  | [`actions.t`](../file/actions.t.html)`[`[`2902`](../source/actions.t.html#2902)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(restore okay, '<.parser>Restored.<./parser> ');` |  |  | [`actions.t`](../file/actions.t.html)`[`[`2928`](../source/actions.t.html#2928)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(reveal move behind, 'Moving {1} {dummy} reveal{s/ed} {2} previously hidden behind {3}. ', theName, makeListStr(hiddenBehind), himName);` |  |  | [`thing.t`](../file/thing.t.html)`[`[`4319`](../source/thing.t.html#4319)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(reveal move under, 'Moving {1} {dummy} reveal{s/ed} {2} previously hidden under {3}. ', theName, makeListStr(hiddenUnder), himName);` |  |  | [`thing.t`](../file/thing.t.html)`[`[`4302`](../source/thing.t.html#4302)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(route unknown, '{I} {don\'t know} how to get there. ');}` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7535`](../source/thing.t.html#7535)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(save cancelled, '<.parser>Canceled.<./parser> '); }` |  |  | [`actions.t`](../file/actions.t.html)`[`[`2665`](../source/actions.t.html#2665)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(save failed, '<.parser>Failed; your computer might be running low on disk space, or you might not have the necessary permissions to write this file.<./parser>'); ` |  |  | [`actions.t`](../file/actions.t.html)`[`[`2695`](../source/actions.t.html#2695)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(save failed on server, '<.parser>Failed, because of a problem accessing the storage server: <<makeSentence(sse.errMsg)>><./parser>');` |  |  | [`actions.t`](../file/actions.t.html)`[`[`2685`](../source/actions.t.html#2685)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(save okay, '<.parser>Saved.<./parser> ');` |  |  | [`actions.t`](../file/actions.t.html)`[`[`2704`](../source/actions.t.html#2704)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(say burned out, '{The subj obj} {goes} out')` |  |  | [`fueled.t`](../file/fueled.t.html)`[`[`123`](../source/fueled.t.html#123)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(say departing dir, '<.p>{The subj traveler} {goes} {1}. ' , depdir.departureName);` |  |  | [`travel.t`](../file/travel.t.html)`[`[`1408`](../source/travel.t.html#1408)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(say departing down stairs, '{The subj traveler} {goes} down {1}. ', theName);` |  |  | [`extras.t`](../file/extras.t.html)`[`[`689`](../source/extras.t.html#689)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(say departing through door, '{The subj traveler} {leaves} through {1}. ', theName);` |  |  | [`travel.t`](../file/travel.t.html)`[`[`1052`](../source/travel.t.html#1052)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(say departing up stairs, '{The subj traveler} {goes} up {1}. ', theName);` |  |  | [`extras.t`](../file/extras.t.html)`[`[`633`](../source/extras.t.html#633)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(say departing vague, '<.p>{The subj traveler} {leaves} the area. ');` |  |  | [`travel.t`](../file/travel.t.html)`[`[`1405`](../source/travel.t.html#1405)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(say dispensed, '{I} {take} {1} from {2}. ', objDesc, theName);` |  |  | [`collective.t`](../file/collective.t.html)`[`[`284`](../source/collective.t.html#284)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(say following dir, '<.p>{The subj follower} follow{s/ed} {the leader} {1}. ', depdir.departureName);` |  |  | [`travel.t`](../file/travel.t.html)`[`[`1429`](../source/travel.t.html#1429)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(say following down staircase, '{The subj follower} follow{s/ed} {the leader} down {1}. ', theName);` |  |  | [`extras.t`](../file/extras.t.html)`[`[`702`](../source/extras.t.html#702)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(say following through door, '{The subj follower} follow{s/ed} {the leader} through {1}. ', theName);` |  |  | [`travel.t`](../file/travel.t.html)`[`[`1065`](../source/travel.t.html#1065)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(say following up staircase, '{The subj follower} follow{s/ed} {the leader} up {1}. ', theName);` |  |  | [`extras.t`](../file/extras.t.html)`[`[`647`](../source/extras.t.html#647)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(say following vague, '<.p>{The subj follower} follow{s/ed} {the leader}. ');` |  |  | [`travel.t`](../file/travel.t.html)`[`[`1426`](../source/travel.t.html#1426)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(say head after actor, '{I} head{s/ed} off {1} after {2}. ', conn.traversalMsg, theName);` |  |  | [`actor.t`](../file/actor.t.html)`[`[`2487`](../source/actor.t.html#2487)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(say no, 'say no')` |  |  | [`actor.t`](../file/actor.t.html)`[`[`3735`](../source/actor.t.html#3735)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(say prefix, 'say ')` |  |  | [`actor.t`](../file/actor.t.html)`[`[`6705`](../source/actor.t.html#6705)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(say yes, 'say yes')` |  |  | [`actor.t`](../file/actor.t.html)`[`[`3720`](../source/actor.t.html#3720)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(say yes or no, 'say yes or no')` |  |  | [`actor.t`](../file/actor.t.html)`[`[`3759`](../source/actor.t.html#3759)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(score not present, '<.parser>This story doesn&rsquo;t use scoring.<./parser> '); ` |  |  | [`actions.t`](../file/actions.t.html)`[`[`231`](../source/actions.t.html#231)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(script off ignored, '<.parser>No script is currently being recorded.<./parser>');` |  |  | [`actions.t`](../file/actions.t.html)`[`[`2418`](../source/actions.t.html#2418)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(script off okay, '<.parser>Scripting ended.<./parser>');` |  |  | [`actions.t`](../file/actions.t.html)`[`[`2432`](../source/actions.t.html#2432)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(scripting canceled, '<.parser>Canceled.<./parser>'); }` |  |  | [`actions.t`](../file/actions.t.html)`[`[`2301`](../source/actions.t.html#2301)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(scripting failed, '<.parser>Failed; an error occurred opening the script file.<./parser> ');` |  |  | [`actions.t`](../file/actions.t.html)`[`[`2359`](../source/actions.t.html#2359)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(scripting failed exception, '<.parser>Failed; <<exc.displayException>><./parser>');` |  |  | [`actions.t`](../file/actions.t.html)`[`[`2355`](../source/actions.t.html#2355)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(scripting okay, '<.parser>The transcript will be saved to the file. Type <<aHref('script off', 'SCRIPT OFF', 'Turn off scripting')>> to` |  |  | [`actions.t`](../file/actions.t.html)`[`[`2373`](../source/actions.t.html#2373)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(scripting okay web temp, '<.parser>The transcript will be saved. Type <<aHref('script off', 'SCRIPT OFF', 'Turn off scripting')>>` |  |  | [`actions.t`](../file/actions.t.html)`[`[`2366`](../source/actions.t.html#2366)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(short notify status, 'NOTIFY <<isOn ? 'ON' : 'OFF'>>');` |  |  | [`score.t`](../file/score.t.html)`[`[`587`](../source/score.t.html#587)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(should not kiss, 'That hardly {dummy} seem{s/ed} appropriate. ')` |  |  | [`actor.t`](../file/actor.t.html)`[`[`2249`](../source/actor.t.html#2249)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(should not pour into, 'It{dummy}{\'s} better not to pour {1} into {the iobj}. ', gDobj.fluidName)` |  |  | [`thing.t`](../file/thing.t.html)`[`[`8256`](../source/thing.t.html#8256)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(should not pour onto, 'It{dummy}{\'s} better not to pour {1} onto {the iobj}. ', gDobj.fluidName) ` |  |  | [`thing.t`](../file/thing.t.html)`[`[`8259`](../source/thing.t.html#8259)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(should not touch actor, '{The subj dobj} {doesn\'t appreciate[d]} being touched. ')` |  |  | [`actor.t`](../file/actor.t.html)`[`[`2317`](../source/actor.t.html#2317)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(show, 'show {him interlocutor} ')` |  |  | [`actor.t`](../file/actor.t.html)`[`[`6711`](../source/actor.t.html#6711)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(show finish msg, '\b*** {1} ***\b\b', msg);` |  |  | [`misc.t`](../file/misc.t.html)`[`[`943`](../source/misc.t.html#943)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(show footnotes full, 'FULL, which shows every footnote reference, even to notes you&rsquo;ve already read. Type <<aHref('footnotes medium', 'FOOTNOTES MEDIUM', 'Set footnotes to Medium')>> to show` |  |  | [`footnote.t`](../file/footnote.t.html)`[`[`466`](../source/footnote.t.html#466)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(show footnotes medium, 'MEDIUM, which shows references to unread footnotes, but hides references to those you&rsquo;ve already read. Type <<aHref('footnotes off', 'FOOTNOTES OFF', 'Turn off footnotes')>> to hide` |  |  | [`footnote.t`](../file/footnote.t.html)`[`[`454`](../source/footnote.t.html#454)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(show footnotes off, 'OFF, which hides all footnote references. Type <<aHref('footnotes medium', 'FOOTNOTES MEDIUM', 'Set footnotes to Medium')>> to` |  |  | [`footnote.t`](../file/footnote.t.html)`[`[`443`](../source/footnote.t.html#443)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(show notify status, '<.parser>Score notifications are currently <<stat ? 'on' : 'off'>>.<./parser> ');` |  |  | [`actions.t`](../file/actions.t.html)`[`[`273`](../source/actions.t.html#273)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(show score, 'In {1} turn<<turns == 1 ? '' : 's'>> you have scored {2} of a total {3} point<<maxPoints == 1 ? '' : 's'>>. ', turns, points, maxPoints);` |  |  | [`score.t`](../file/score.t.html)`[`[`442`](../source/score.t.html#442)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(show score no max, 'In {1} turn<<turns == 1 ? '' : 's'>> you have scored {2} point<<points == 1 ? '' : 's'>>. ', turns, points);` |  |  | [`score.t`](../file/score.t.html)`[`[`451`](../source/score.t.html#451)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(show score rank, 'This makes you {1}. ', msg );` |  |  | [`score.t`](../file/score.t.html)`[`[`487`](../source/score.t.html#487)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(show version, '{1} version {2}', nam, ver);` |  |  | [`modid.t`](../file/modid.t.html)`[`[`73`](../source/modid.t.html#73)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(showHintWarning, '<.notification>Warning: Some people don&rsquo;t like built-in hints, since the temptation to ask for help prematurely can become overwhelming when hints are so close at hand. If you&rsquo;re worried that your willpower won&rsquo;t hold up, you can disable hints for the rest of this session by typing <<aHref('hints off', 'HINTS OFF')` |  |  | [`hintsys.t`](../file/hintsys.t.html)`[`[`664`](../source/hintsys.t.html#664)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(sitting, 'sitting')` |  |  | [`postures.t`](../file/postures.t.html)`[`[`94`](../source/postures.t.html#94)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(sky beyond reach, '{The subj cobj} {is} way beyond {my} reach. ')` |  |  | [`roomparts.t`](../file/roomparts.t.html)`[`[`133`](../source/roomparts.t.html#133)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(smell nothing, '{I} {smell} nothing out of the ordinary.<.p>')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`4077`](../source/thing.t.html#4077)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(smell nothing intransitive, '{I} {smell} nothing out of the ordinary.<.p>');` |  |  | [`actions.t`](../file/actions.t.html)`[`[`595`](../source/actions.t.html#595)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(sorry hints disabled, '<.parser>Sorry, but hints have been disabled for this session, as you requested. If you&rsquo;ve changed your mind, you&rsquo;ll have to save your current position, exit the TADS interpreter, and start a new interpreter session.<./parser> ');` |  |  | [`hintsys.t`](../file/hintsys.t.html)`[`[`611`](../source/hintsys.t.html#611)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(south, 'south')` |  |  | [`travel.t`](../file/travel.t.html)`[`[`1807`](../source/travel.t.html#1807)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(southeast, 'southeast')` |  |  | [`travel.t`](../file/travel.t.html)`[`[`1839`](../source/travel.t.html#1839)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(southwest, 'southwest')` |  |  | [`travel.t`](../file/travel.t.html)`[`[`1847`](../source/travel.t.html#1847)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(standing, 'standing')` |  |  | [`postures.t`](../file/postures.t.html)`[`[`84`](../source/postures.t.html#84)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(starboard, 'starboard')` |  |  | [`travel.t`](../file/travel.t.html)`[`[`1914`](../source/travel.t.html#1914)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(state follow, '{The follower} follow{s/ed} behind {the pc}. ');` |  |  | [`actor.t`](../file/actor.t.html)`[`[`2607`](../source/actor.t.html#2607)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(status line noexits, '<i>None</i>')>>` |  |  | [`exits.t`](../file/exits.t.html)`[`[`357`](../source/exits.t.html#357)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(still in nested, '{I} {can\'t} do that while {he actor} {is} {in loc}. ');` |  |  | [`precond.t`](../file/precond.t.html)`[`[`882`](../source/precond.t.html#882)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(suggestion list intro, '{I} could ');` |  |  | [`actor.t`](../file/actor.t.html)`[`[`6440`](../source/actor.t.html#6440)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(talk about, 'talk about ')` |  |  | [`actor.t`](../file/actor.t.html)`[`[`6709`](../source/actor.t.html#6709)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(taste nothing, '{I} taste{s/d} nothing unexpected.<.p>');` |  |  | [`thing.t`](../file/thing.t.html)`[`[`4117`](../source/thing.t.html#4117)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(tell about, 'tell {him interlocutor} about ')` |  |  | [`actor.t`](../file/actor.t.html)`[`[`6708`](../source/actor.t.html#6708)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(tell to, 'tell {him interlocutor} to ')` |  |  | [`actor.t`](../file/actor.t.html)`[`[`6713`](../source/actor.t.html#6713)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(test sequence not found, 'Test sequence not found. ');` |  |  | [`debug.t`](../file/debug.t.html)`[`[`457`](../source/debug.t.html#457)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(think, '{I} {think}, therefore {i} {am}. ');` |  |  | [`actions.t`](../file/actions.t.html)`[`[`2001`](../source/actions.t.html#2001)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(throw, '{The subj obj} sail{s/ed} through the air and land{s/ed} on the ground. ' );` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6418`](../source/thing.t.html#6418)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(throw at, '{The subj obj} {strikes} {the iobj} and land{s/ed} on the ground. '); ` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7281`](../source/thing.t.html#7281)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(throw dir, '{I} {throw} {the obj} {1} and {he obj} land{s/ed} on the ground. ', gAction.direction.name );` |  |  | [`thing.t`](../file/thing.t.html)`[`[`4673`](../source/thing.t.html#4673)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(throw falls short, '{The subj dobj} land{s/ed} far short of {the iobj}. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`7332`](../source/thing.t.html#7332)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(time fuse interval error, 'Bad interval <<interval>> supplied to TimeFuse constructor. ');` |  |  | [`objtime.t`](../file/objtime.t.html)`[`[`293`](../source/objtime.t.html#293)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(token error, 'I don\'t understand the punctuation {1}', err.curChar_);` |  |  | [`parser.t`](../file/parser.t.html)`[`[`231`](../source/parser.t.html#231)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(too big, '{The subj obj} {is} too big to fit {1} {2}. ', objInPrep, theName);` |  |  | [`thing.t`](../file/thing.t.html)`[`[`2110`](../source/thing.t.html#2110)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(too big to carry, '{The subj dobj} {is} too big for {me} to carry. ');` |  |  | [`thing.t`](../file/thing.t.html)`[`[`4401`](../source/thing.t.html#4401)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(too dark to read, 'There{\'s} not enough light {here} to read {the dobj}. ');` |  |  | [`brightness.t`](../file/brightness.t.html)`[`[`394`](../source/brightness.t.html#394)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(too dark to see, 'It{dummy}{\'s} too dark to see anything. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`4049`](../source/thing.t.html#4049)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(too far away, '{The subj obj} {is} too far away. ');` |  |  | [`thing.t`](../file/thing.t.html)`[`[`3514`](../source/thing.t.html#3514)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(too far away to hear, '{The subj dobj} {is} too far away to hear distinctly. ')` |  |  | [`senseRegion.t`](../file/senseRegion.t.html)`[`[`961`](../source/senseRegion.t.html#961)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(too far away to hear obj, '{The subj obj} {is} too far away to hear. ');` |  |  | [`precond.t`](../file/precond.t.html)`[`[`542`](../source/precond.t.html#542)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(too far away to read, '{The subj dobj} {is} too far away to read. ')` |  |  | [`senseRegion.t`](../file/senseRegion.t.html)`[`[`980`](../source/senseRegion.t.html#980)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(too far away to see detail, '{The subj dobj} {is} too far away to make out any detail. ')` |  |  | [`senseRegion.t`](../file/senseRegion.t.html)`[`[`906`](../source/senseRegion.t.html#906)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(too far away to smell, '{The subj dobj} {is} too far away to smell distinctly. ')` |  |  | [`senseRegion.t`](../file/senseRegion.t.html)`[`[`1035`](../source/senseRegion.t.html#1035)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(too far away to smell obj, '{The subj obj} {is} too far away to smell. ');` |  |  | [`precond.t`](../file/precond.t.html)`[`[`585`](../source/precond.t.html#585)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(too heavy, '{The subj cobj} {is} too heavy to move. ')` |  |  | [`extras.t`](../file/extras.t.html)`[`[`572`](../source/extras.t.html#572)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(too heavy, '{The subj obj} {is} too heavy to go {1} {2}. ', objInPrep, theName);` |  |  | [`weight.t`](../file/weight.t.html)`[`[`81`](../source/weight.t.html#81)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(too heavy to carry, '{The subj dobj} {is} too heavy for {me} to carry. ');` |  |  | [`weight.t`](../file/weight.t.html)`[`[`116`](../source/weight.t.html#116)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(too heavy to hide, '{The sub obj} {is} too heavy to hide {1} {2}. ', insType.prep, theName);` |  |  | [`weight.t`](../file/weight.t.html)`[`[`226`](../source/weight.t.html#226)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(traverse connector, '{1}', depDir.departureName);` |  |  | [`travel.t`](../file/travel.t.html)`[`[`1442`](../source/travel.t.html#1442)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(traverse door, 'through {1}', theName)` |  |  | [`travel.t`](../file/travel.t.html)`[`[`1069`](../source/travel.t.html#1069)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(traverse path passage, 'down {1}', theName)` |  |  | [`extras.t`](../file/extras.t.html)`[`[`767`](../source/extras.t.html#767)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(traverse stairway down, 'down {1}', theName)` |  |  | [`extras.t`](../file/extras.t.html)`[`[`706`](../source/extras.t.html#706)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(traverse stairway up, 'up {1}', theName)` |  |  | [`extras.t`](../file/extras.t.html)`[`[`651`](../source/extras.t.html#651)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(turn self, '{I} {cannot} turn anything with itself. ')` |  |  | [`thing.t`](../file/thing.t.html)`[`[`4917`](../source/thing.t.html#4917)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(turn useless, 'Turning {1} {dummy} achieve{s/d} nothing. ', gActionListStr)` |  |  | [`thing.t`](../file/thing.t.html)`[`[`4873`](../source/thing.t.html#4873)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(undo failed, 'Undo failed. ');` |  |  | [`actions.t`](../file/actions.t.html)`[`[`48`](../source/actions.t.html#48)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(undo okay, 'One turn undone: {1}', libGlobal.lastCommandForUndo);` |  |  | [`actions.t`](../file/actions.t.html)`[`[`38`](../source/actions.t.html#38)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(unknown word, 'I don\'t know the word "{1}".', badWord);` |  |  | [`parser.t`](../file/parser.t.html)`[`[`5101`](../source/parser.t.html#5101)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(unmatched actor, '{I} {see} no {1} {here}.', txt);` |  |  | [`parser.t`](../file/parser.t.html)`[`[`5326`](../source/parser.t.html#5326)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(unmatched noun, '{I} {see} no {2} {here}.', cmd, stripArticle(txt));` |  |  | [`parser.t`](../file/parser.t.html)`[`[`5343`](../source/parser.t.html#5343)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(unthing absent, '{The subj cobj} {isn\'t} {here}. ')` |  |  | [`extras.t`](../file/extras.t.html)`[`[`408`](../source/extras.t.html#408)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(up, 'up')` |  |  | [`travel.t`](../file/travel.t.html)`[`[`1863`](../source/travel.t.html#1863)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(vague travel, 'Which way do you want to go? ');` |  |  | [`actions.t`](../file/actions.t.html)`[`[`758`](../source/actions.t.html#758)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(wait, 'Time {dummy} pass{es/ed}. ');` |  |  | [`actions.t`](../file/actions.t.html)`[`[`529`](../source/actions.t.html#529)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(wait to see, '{I} wait{s/ed} to see where {he dobj} {goes}. ')` |  |  | [`actor.t`](../file/actor.t.html)`[`[`2491`](../source/actor.t.html#2491)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(waiting for follow, '{The subj myactor} {is} waiting for {the pc} {dummy} to follow {him myactor} {1}. ', nd.departureName);` |  |  | [`actor.t`](../file/actor.t.html)`[`[`6292`](../source/actor.t.html#6292)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(west, 'west')` |  |  | [`travel.t`](../file/travel.t.html)`[`[`1815`](../source/travel.t.html#1815)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(with key, '(with {1})\n', useKey_.theName)` |  |  | [`thing.t`](../file/thing.t.html)`[`[`6081`](../source/thing.t.html#6081)`]` |
|  |  |  |  |
|  |  |  |  |
| `BMsg(wont light, '\^{1} {dummy} {won\'t} light. ', theName)` |  |  | [`fueled.t`](../file/fueled.t.html)`[`[`159`](../source/fueled.t.html#159)`]` |
|  |  |  |  |
|  |  |  |  |
| `DMsg(yell, '{I} shout{s/ed} very loudly. ');` |  |  | [`actions.t`](../file/actions.t.html)`[`[`547`](../source/actions.t.html#547)`]` |
|  |  |  |  |
|  |  |  |  |

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
