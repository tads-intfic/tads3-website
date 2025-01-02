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
<td style="text-align: left;"><strong>Past Tense<br />
</strong></td>
<td style="text-align: right;"><a
href="mainoutputstream.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="achievementtemplate.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
Since version 3.0.9 TADS 3 has incorporated Michel Nizette's past tense
extension, which allows an IF work to be narrated in the past tense
instead of the more present tense, either for the complete work, or for
certain sections of it (such as flashbacks). To switch a game from
present tense to past tense narration (e.g. "On the table was a banana"
instead of "On the table is a banana"), you simply need to set
gameMain.usePastTense = true. To experiment with the effect you could
try setting gameMain.usePastTense = true on *The Quest of the Golden
Banana*; but if you do, you'll probably find that it only half works.  
  
Setting gameMain.usePastTense to true will ensure that all the default
library messages come out in the past tense rather than the present, but
you will also be writing a large amount of text of your own, including
room and object descriptions, custom messages, responses to actions and
the like. If your whole game is in the past tense, this is no problem,
because you can simply write all your custom text in the past tense. If
you want your game to switch tenses part-way through, however, you need
to write messages that switch between present and past tense depending
on the setting of gameMain.usePastTense. The comments in en_us.t give
some details of how to do that, but for more reader-friendly
documentation take a look at the section on
<a href="../techman/t3past.html" target="_top">Writing a Game in the Past
Tense</a> in the *Technical Manual.*  
  
