---
---
<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>Changes for v3.1.0<br />
</strong></td>
<td style="text-align: right;"><a
href="vocabobjecttemplate.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="changesforv3_0_17.html">[Next]</a></td>
</tr>
</tbody>
</table>

  

- Small changes to [DefaultConsultTopic](defaultconsulttopic.html) to
  correct use of stringLister.
- Corrected numerous typos reported by Bob Bates and Mike Sousa.
- Changed the description of the rock object in the [Hiding With
  Words](wordgames.html) section so that there's still a description once
  the diamond is moved.
- Removed the long obsolete reference to the showExitsInStatusLine
  property in the [gameMain](startupcodegamemain.html) object.
- Corrected Solomon's [DefaultAskTellTopic](defaultasktelltopic.html) to
  make proper use of gTopicText.
- Changes to the implementation of the dynamite object in connection
  with the [Fuse](fuse.html) class.
- Corrected dobjFor(LieOn) on the monolith in the discussion of the
  [TravelPushable](travelpushable.html) class.
- Slight change to the explanation of sightSize in connection with
  [DistanceConnector](distanceconnector.html).
- Changed the stagingLocations method of the top bunk
  [HighNestedRoom](highnestedroom.html) so it's possible to get off the
  bunk as well as on.
- Corrected the way [InitiateTopics](initiatetopic.html) work with the
  curatorWatching State.
- Changed the definition of the templeWestWall in the [Lever](lever.html)
  section.
- Corrected Sarah's [DefaultShowTopic](defaultshowtopic.html).
- Corrected Sarah's InitiateTopic in the
  [initiateConversation](initiateconversation.html) section to produce
  the desired result.
- Tweaked the isReady condition of the curatorSurprise
  [AgendaItem](agendaitem.html) and [ConvAgendaItem](convagendaitem.html).
- Expanded the definition of the eastShore room in the
  [Vaporous](vaporous.html) section, and reversed the direction of the
  steps leading up and down to make them compatible with the direction
  of the steps from the landing above.
- Amended discussion of [PathPassage](pathpassage.html) to reflect the
  fact that the library now uses getEnteredVerbPhrase to redirect TAKE
  PATH (but not GET PATH or PICK UP PATH) to FOLLOW PATH.
- Amended discussion of [OutdoorRoom](outdoorroom.html) to illustrate the
  use of the new style \<\<one of\>\>..\<\<or\>\>..\<\<at random\>\>
  syntax.
- Changed the desc property of the glassJar in the section on
  [RestrictedContainer](restrictedcontainer.html) to illustrate the use
  of the new style \<\<if expr\>\>...\<\<else\>\>...\<\<end\>\> syntax.
- Removed the now obsolete discussion of a bug in TADS prior to version
  3.0.9 from the discussion of [Candle & Fire Source](candle.html).
- Modified the atmosphereList of the streetCorner location defined in
  the section on [SenseFuse](sensefuse.html) to take advantage of the
  abolity to embed expressions in single-quoted strings, and added an
  explanatory note.
- Added examples of \<\<one of\>\>...\<\<at random\>\>, \<\<one
  of\>\>...\<\<shuffled\>\> and \<\<one of\>\>...\<\<cycling\>\> to the
  discussion of [DefaultGiveShowTopic](defaultgiveshowtopic.html).
- Amended [DefaultAskForTopic](defaultaskfortopic.html) to take advantage
  of embedding expressions in single-quoted strings.
- Modified the discussion of [TCommandTopic](tcommandtopic.html) to
  reflect the fact that the TCommand extension is now supplied with the
  standard TADS 3 distribution.
- Added solomonBedroom to the list of possible Tardis destinations at
  the end of the discussion of [VehicleBarrier](vehiclebarrier.html), and
  changed the definition to illustrate an alternative syntax for
  initializing a LookupTable.
- In various places rewrote certain string expressions to take advantage
  of the new ability to put \<\< \>\> embedded expressions in
  single-quoted strings.

  
  
