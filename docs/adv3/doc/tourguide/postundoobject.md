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
<td style="text-align: left;"><strong>PostUndoObject: <a
href="moduleexecobject.html">ModuleExecObject</a><br />
</strong></td>
<td style="text-align: right;"><a
href="postrestoreobject.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="prerestartobject.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
PostUndoObject - every instance of this class is notified, via its
execute() method, immediately after we perform an 'undo' command.  
  
You can probably guess how our manic player-hating author might put this
to evil use:  
  
PostUndoObject  
  execute()   
  {  
     "If there's one thing I hate more than players feeble enough to save and restore,   
      it's idiots who ruin the amazing gaming experience I've devised for them by   
      resorting to UNDO. The penalty of \<i\>fifty\</i\> thousand points you're about to   
      suffer is thus richly deserved.\b  
      By the way, this makes the game unwinnable - but hey, only lousy LOSERS like   
      you use UNDO.\<.p\>";  
  
     addToScore(-50000, 'using undo');  
  }  
;  
  
Hopefully if you do find yourself using a PostUndoObject it will be for
a more legitimate purpose than this, though it's probably not something
you'll need to use very often, if at all. A more legitimate use might be
if, for some research purpose, you wanted to keep track of how often
players used UNDO during a session with your game, then you might do
something like this:  
  
transient statisticsObj: object  
   undoCount = 0  
   saveCount = 0  
   restoreCount = 0  
;  
  
PostUndoObject  
  execute()  
  {  
     statisticsObj.undoCount += 1;  
  }  
;  
  
Because statisticsObj has been declared as **transient** (for fuller
details of which see the Object Definitions section of the language
documentation) its properties will be preserved across operations such
as UNDO, RESTART, SAVE and RESTORE, and this should work (although since
a transient object is thus not itself saved or restored, its properties
cannot be preserved across different game sessions, hence the seemingly
odd name 'transient' for this type of object).  
  
