<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>ConsultTopic : <a
href="topicentry.htm">TopicMatchTopic</a><br />
</strong></td>
<td style="text-align: right;"><a href="consultable.htm">[Previous]</a>
<a href="generalintroduction.htm">[Main]</a> <a
href="defaultconsulttopic.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
A ConsultTopic is the class of [TopicEntry](topicentry.htm) that is used
with a [Consultable](consultable.htm). Just as an
[AskTopic](asktopic.htm), for example, provides a response to commands
such as ASK CURATOR ABOUT MUSEUM, so a ConsultTopic would provide a
response to CONSULT HISTORY BOOK ABOUT MUSEUM or LOOK UP MUSUEM IN
BOOK.  
  
Although ConsultTopic inherits all the methods and properties of
TopicEntry, there is usually less reason to override any of them. A
typical Consultable, such as a book, is a fairly static object that will
always provide the same information on any given topic, regardless of
the state of the game. You could, perhaps, combine a TopicEntry with an
[EventList](eventlist.htm) class to provide a series of responses,
perhaps representing the player character reading further on the same
topic, particularly if you want your Consultable to provide a large
amount of information on the topic and it is better broken up into
smaller chunks; but then you'd probably want to make it abundantly clear
that there *was* more to read on a given topic rather than leaving the
player to guess. Again, you could have a more complex Consultable, such
a computer, where the information displayed might change with
circumstances, in which case you might want to use some of the
techniques we have already seen in connection with TopicEntries on
actors (such as [AltTopics](alttopic.htm) and the use of isActive).  
  
In the present game, however, we'll keep things at their simplest and
just add a number of basic ConsultTopics to our history book:  
  
+ ConsultTopic \[ghost, statue, tBenedict\]  
  "According to the book, Benedict the Banana-Bearer lived 537 years ago  
   and was responsible for bearing the Golden Banana of Discord from  
   Hell Fire Cavern. Although many at the time (and since) reckoned  
   that the ordeal drove him mad, this was no obstacle to his becoming  
   king, for many reckoned his deed to be a feat of great daring. A golden  
   statue commemorating the glorious memory of King Benedict can still be  
   found on the western side of the lake.   
   \<\<gSetKnown(goldenBanana)\>\>"    
;  
  
+ ConsultTopic @goldenBanana  
  "The Golden Banana of Discord is a talisman of great power. Snatched  
   from the demons of hell fire cavern some 537 years ago it enabled  
   mad Benedict to become king. No one since King Benedict has been  
   quite sure what powers the Golden Banana wields, but its value and  
   significance remain unquestioned. For obvious reasons great care  
   has always been taken to ensure that this artifact does not fall into  
   the wrong hands. "    
;  
  
+ ConsultTopic @tHellFireCavern  
  "Deep in the bowels of the earth, Hell Fire Cavern is a name that has  
  long struck fear and dread into the souls of mortals. Inhabited by vile  
  demons, and polluted by the putrid flames of Mount Gloom, the cavern is  
  as near to being an authentic underworld as one could hope - or fear -  
  to encounter. Only one man - Benedict the Banana-Bearer - has been known  
  to return from the Hell Fire Cavern alive. "  
;  
  
+ ConsultTopic @tMuseum  
  "According to the book, the Museum of Curious Antiquities was set up from  
   a benefaction of King Benedict the Banana-Bearer himself. Although the   
   museum has always had a certain historical interest, its exhibits tend  
   towards the eccentric and the bizarre. Should you find yourself on the  
   southern side of the lake, however, the museum is well worth a visit  
   if only for its curiosity value. "  
;  
  
tBenedict : Topic 'benedict';  
tHellFireCavern: Topic 'hell fire cavern';  
  
Note the use of the list of matchable topics in the first ConsultTopic,
since the player might become aware of Benedict through either the
statue or the ghost. Again, since the statue does not match the word
'benedict' and the ghost may not either, we also supply a tBenedict
topic to ensure that the word 'benedict' will always match this
ConsultTopic (along with such other words as 'statue' and 'ghost' that
may also do so).  
  
Note also that there's no such thing as a SuggestedConsultTopic. With a
suitable amount of ingenuity it might be possible to devise a
SuggestedConsultTopic class that worked, but this would be non-trivial,
since the library currently assumes that SuggestedTopics work only with
actors. If you want to suggest to the player what topics might be
available in the book, it might be simpler to list them in the readDesc
(e.g. ""It's too long to read from cover to cover right now, but you
could consult it on specific topics, such as Benedict, the Golden Banana
of Discord, the museum and Hell Fire Cavern "), or else perhaps in the
[DefaultConsultTopic](defaultconsulttopic.htm), (e.g. "The book doesn't
seem to have anything useful to say in that, but a quick check in the
index suggests you could look up...). We'll return to the second
possibility shortly.  
  
