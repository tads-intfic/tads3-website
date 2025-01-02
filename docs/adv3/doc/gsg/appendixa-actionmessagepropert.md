---
layout: docs
---
<div class="topbar">

[<img src="topbar.jpg" data-border="0" />](index.html)

</div>

<div class="main">

[\[Main\]](index.html)  
*[\[Previous\]](wheretogofromhere.html)   *

# Appendix A - Action Message Properties

d = dObjFor i = iObjFor A=Action C=Check V=Verify  
  
AskAbout     Thing dV          notAddressableMsg  
AskFor       Thing dV          notAddressableMsg  
AttachTo     Thing dV          cannotAttachMsg  
             Thing iV          cannotAttachToMsg  
Attack       Thing dA          uselessToAttackMsg  
AttackWith   Thing dA          uselessToAttackMsg  
             Thing iV          notAWeaponMsg  
Board        Thing dV          cannotBoardMsg  
Break        Thing dV          shouldNotBreakMsg  
BurnWith     Thing dV          cannotBurnMsg  
             Thing iV          cannotBurnWithMsg  
Clean        Thing dV          cannotCleanMsg  
CleanWith    Thing dV          cannotCleanMsg  
             Thing iV          cannotCleanWithMsg  
Climb        Thing dV          cannotClimbMsg  
ClimbDown    Thing dV          cannotClimbMsg  
ClimbUp      Thing dV          cannotClimbMsg  
Close        Thing dV          cannotCloseMsg  
Consult      Thing dV          cannotConsultMsg  
ConsultAbout Thing dV          cannotConsultMsg  
CutWith      Thing dA          cutNoEffectMsg  
             Thing iV          cannotCutWithMsg  
Default      Decoration diV    notImportantMsg  
             Distant diV       tooDistantMsg(self)  
             Intangible diV    notWithIntangibleMsg  
             Unthing diV       notHereMsg  
Detach       Thing dV          cannotDetachMsg  
DetachFrom   Thing dV          cannotDetachMsg  
             Thing iV          cannotDetachFromMsg  
DigWith      Thing dV          cannotDigMsg  
             Thing iV          cannotDigWithMsg  
Drink        Thing dV          cannotDrinkMsg  
Drop         Immovable dA      cannotMoveMsg  
Doff         Thing dV          notDoffableMsg  
Eat          Thing dV          cannotEatMsg  
Enter        Thing dV          cannotEnterMsg  
EnterOn      Thing dV          cannotEnterOnMsg  
Extinguish   Thing dV          cannotExtinguishMsg  
Fasten       Thing dV          cannotFastenMsg  
FastenTo     Thing dV          cannotFastenMsg  
             Thing iV          cannotFastenToMsg  
Flip         Thing dV          cannotFlipMsg  
Feel         Thing dA          feelDesc ""  
Follow       Thing dV          notFollowableMsg  
GetOffOf     Thing dV          cannotGetOffOfMsg  
GetOutOf     Thing dV          cannotUnboardMsg  
GoThrough    Thing dV          cannotGoThroughMsg  
GiveTo       Thing iV          notInterestedMsg  
JumpOff      Thing dV          cannotJumpOffMsg  
JumpOver     Thing dV          cannotJumpOverMsg  
Kiss         Thing dV          cannotKissMsg  
             Actor dA          cannotKissActorMsg  
LieOn        Thing dV          cannotLieOnMsg  
Listen       Thing dA         (soundDesc "" )  
Light        Thing             asDobjFor(Burn)  
Lock         Thing dV          cannotLockMsg  
         IndirectLockable dC   cannotLockMsg  
LockWith     Thing dV          cannotLockMsg  
             Thing iV          cannotLockWithMsg  
             Lockable dV       noKeyNeededMsg  
         IndirectLockable dC   cannotLockMsg  
LookBehind   Thing dA          nothingBehindMsg  
LookIn       Thing dA          lookInDesc ""  
LookThrough  Thing dA          nothingThroughMsg  
LookUnder    Thing dA          nothingUnderMsg  
Move         Thing dA          moveNoEffectMsg  
             Fixture dV        cannotMoveMsg  
             Immovable dA      cannotMoveMsg  
MoveTo       Thing dA          moveToNoEffectMsg  
             Fixture dV        cannotMoveMsg  
             Immovable dC      cannotMoveMsg  
MoveWith     Thing dA          moveNoEffectMsg  
             Thing iV          cannotMoveWithMsg  
             Immovable dC      cannotMoveMsg  
             Fixture dV        cannotMoveMsg  
Open         Thing dV          cannotOpenMsg  
PlugIn       Thing dV          cannotPlugInMsg  
PlugInto     Thing dV          cannotPlugInMsg  
             Thing iV          cannotPlugInToMsg  
Pour         Thing dV          cannotPourMsg  
PourInto     Thing dV          cannotPourMsg  
             Thing iV          cannotPourIntoMsg  
PourOnto     Thing dV          cannotPourMsg  
             Thing iV          cannotPourOntoMsg  
Pull         Thing dA          pullNoEffectMsg  
             Fixture dV        cannotMoveMsg  
             Immovable dA      cannotMoveMsg  
Push         Thing dA          pushNoEffectMsg  
             Fixture dV        cannotMoveMsg  
             Immovable dA      cannotMoveMsg  
PushTravel   Thing dV          cannotPushTravelMsg  
             Fixture dV        cannotMoveMsg  
             Immovable dA      cannotMoveMsg  
PutBehind    Thing iV          cannotPutBehindMsg  
             Fixture dV        cannotPutMsg  
             Component dV      cannotPutComponentMsg(location)  
             Immovable dC      cannotPutMsg  
PutIn        Thing iV          notAContainerMsg  
             Fixture dV        cannotPutMsg  
             Component dV      cannotPutComponentMsg(location)  
             Immovable dC      cannotPutMsg  
PutOn        Thing iV          notASurfaceMsg  
             Fixture dV        cannotPutMsg  
             Component dV      cannotPutComponentMsg(location)  
             Immovable dC      cannotPutMsg  
PutUnder     Thing iV          cannotPutUnderMsg  
             Fixture dV        cannotPutMsg  
             Component dV      cannotPutComponentMsg(location)  
             Immovable dC      cannotPutMsg  
Screw        Thing dV          cannotScrewMsg  
ScrewWith    Thing dV          cannotScrewMsg  
             Thing iV          cannotScrewWithMsg  
Search       Thing dA          as LookIn  
SitOn        Thing dV          cannotSitOnMsg  
ShowTo       Thing iV          notInterestedMsg  
Smell        Thing dA         (smellDesc "" )  
StandOn      Thing dV          cannotStandOnMsg  
Switch       Thing dV          cannotSwitchMsg  
Take         Fixture dV        cannotTakeMsg  
             Component dV      cannotTakeComponentMsg(location)  
             Immovable dA      cannotTakeMsg  
TakeFrom     Fixture dV        cannotTakeMsg  
             Component dV      cannotTakeComponentMsg(location)  
             Immovable dC      cannotTakeMsg  
TellAbout    Thing dV          notAddressableMsg  
TalkTo       Thing dV          notAddressableMsg  
Taste        Thing dA          tasteDesc ""  
Turn         Thing dV          cannotTurnMsg  
             Immovable dA      cannotMoveMsg  
TurnOff      Thing dV          cannotTurnOffMsg  
TurnOn       Thing dV          cannotTurnOnMsg  
TurnTo       Thing dV          cannotTurnMsg  
TurnWith     Thing dV          cannotTurnMsg  
             Thing iV          cannotTurnWithMsg  
ThrowDir     Thing dA          dontThrowDirMsg *or* ShouldNotThrowAtFloorMsg  
ThrowTo      Thing dV          willNotCatchMsg(self)  
TypeLiteralOn Thing dV         cannotTypeOnMsg  
Unfasten     Thing dV          cannotUnfastenMsg  
             Thing iV          cannotUnfastenFromMsg  
UnPlug       Thing dV          cannotUnplugMsg  
UnPlugFrom   Thing dV          cannotUnplugMsg  
             Thing iV          cannotUnplugFromMsg  
Unlock       Thing dV          cannotUnlockMsg  
         IndirectLockable dC   cannotUnlockMsg  
UnlockWith   Thing dV          cannotUnlockMsg  
             Thing iV          cannotUnlockWithMsg  
             Lockable dV       noKeyNeededMsg  
         IndirectLockable dC   cannotUnlockMsg  
Unscrew      Thing dV          cannotUnscrewMsg  
UnscrewWith  Thing dV          cannotUnscrewMsg  
             Thing iV          cannotUnscrewMsg  
Wear         Thing dV          notWearableMsg  
  
  

------------------------------------------------------------------------

*Getting Started in TADS 3*  
[\[Main\]](index.html)  
*[\[Previous\]](wheretogofromhere.html)   *

</div>
