<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>Changes for v3.0.9<br />
</strong></td>
<td style="text-align: right;"><a href="changes2.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="changesforv3_0_8.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14">·</td>
<td>Correction to the code for the vending machine slot in <a
href="plugattachable.htm">PlugAttachable</a> to prevent the coin
reappearing once the ticket is issued.  <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14">·</td>
<td>Definition of the endGame function in <a
href="cannotgothatwayindark.htm">cannotGoThatWayInDark</a> corrected,
and the redundant redefinition in <a href="dynamite.htm">Dynamite</a>
removed.  <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14">·</td>
<td>Added a section on the <a
href="travelconnector.htm">TravelConnector</a> class.  <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14">·</td>
<td>Added a section on the <a
href="mainoutputstream.htm">mainOutputStream</a> object.  <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14">·</td>
<td>Changed definition of <a href="decoration.htm">longCaveWords</a> to
reflect the fact that it's no longer necessary to override
isListedInRoomPart().  <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14">·</td>
<td><a href="distanceconnector.htm">remoteInitSpecialDesc()</a> now
takes actor instead of pov as its parameter.  <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14">·</td>
<td>Use the new macro gTopicText in <a
href="defaultasktelltopic.htm">DefaultAskTellTopic</a> in place of
gTopic.getTopicText.  <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14">·</td>
<td>Provided examples of dobjMsg and failCheck() which also correct
previous bugs on the <a href="restrictedcontainer.htm">glassJar</a>
object. The failCheck() method has also been used in one or two other
places instead of the previous lengthier construct.  <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14">·</td>
<td>Corrected an error on the <a href="oillamp.htm">oilLamp</a> object
by using the new failCheck routine.  <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14">·</td>
<td>Added a note of the new <a href="hinttemplate.htm">Hint</a>, <a
href="synceventlisttemplate.htm">SyncEventList</a> and <a
href="unthingtemplate.htm">Unthing</a> templates. The use of the new <a
href="unthing.htm">Unthing</a> template is also discussed in the Unthing
section, and of the Hint template in the <a href="hint.htm">Hint</a>
section.  <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14">·</td>
<td>Added a discussion of some of the main properties and methods on <a
href="lockable.htm">Lockable</a>, including the new
lockStatusReportable.  <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14">·</td>
<td>Added a brief discussion of <a href="basicdoor.htm">BasicDoor</a>
and noted that <a href="door.htm">Door</a> and <a
href="secretdoor.htm">SecretDoor</a> now inherit from it.  <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14">·</td>
<td>Added sections on <a href="openable.htm">Openable</a> and <a
href="basicopenable.htm">BasicOpenable</a>.  <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14">·</td>
<td>Removed iobjFor(BurnWith) code on <a href="candle.htm">RedCandle</a>
that's no longer necessary with TADS 3.0.9.  <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14">·</td>
<td>Added a brief description of the new moveIntoAdd() and moveOutOf
methods for <a href="roomparts.htm">RoomParts</a>.  <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14">·</td>
<td>Updated the explanation of verboseMode on <a
href="startupcodegamemain.htm">gameMain</a>.  <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14">·</td>
<td>Added an example of <a href="decoration.htm">RoomPartItem</a>.
 <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14">·</td>
<td>Added an explanation of the new SensoryEmanation property
isEmanating in the <a href="odor.htm">Odor</a> section.  <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14">·</td>
<td>Added a discussion of the revised occludeObj() method and the new
isOccludedBy() method to the <a href="occluder.htm">Occluder</a>
section.  <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14">·</td>
<td>Added a brief section on <a
href="randomfiringscript.htm">RandomFiringScript</a> and amended the
superclass lists of <a href="randomeventlist.htm">RandomEventList</a>
and <a href="shuffledeventlist.htm">ShuffledEventList</a> to show that
they now inherit from it.  <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14">·</td>
<td>Added an example of the new <a
href="autoclosingdoor.htm">AutoClosingDoor</a> property
reportAutoClose().  <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14">·</td>
<td>Added a brief section on using the <a href="pasttense.htm">past
tense</a> in TADS 3.0.9.  <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14">·</td>
<td>Corrected sundry typos.  <br />
</td>
</tr>
</tbody>
</table>

|     |
|-----|
|     |
