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
<td style="text-align: left;"><strong>CollectiveGroup (mobile)<br />
</strong></td>
<td style="text-align: right;"><a
href="collectivegroup.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="script.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
The previous example may have seemed a little complicated, but at least
the CollectiveGroup and its members all stay in the same place. What if
we want a CollectiveGroup that represents a collections of portable
objects that can move around during the course of the game?  
  
A case in point might be the two halves of the torn yellow piece of
paper. At some point the player might want to be able effectively to
join the two halves together and read the two columns side by side,
instead of one after the other. With a bit of thought and effort, we can
bring this about with a CollectiveGroup, such that when both halves of
the piece of paper are available the player can command X YELLOW SHEETS
or READ YELLOW SHEETS and see the paper whole.  
  
The first step is to define the collectiveGroup object we want to use on
both halves of the piece of paper:  
  
++ leftHalfPaper : Hidden, Readable 'left half torn sheet yellow paper\*sheets\*papers'   
  'torn sheet of yellow paper'    
  "It looks like the left hand half of a sheet of paper that's been torn in two. It  
   contains a list of letters and numbers. "  
  readDesc = "A0\nA2\nC9\nJ8\nM3\nQ7\nT5\n"    
  mainExamine  
  {  
    if(!described) name += ' (left half)';  
    inherited;  
  }  
  **collectiveGroups = \[yellowPaperGroup\]  
**;  
  
/\* Recall this is in a different location \*/  
  
+ smallPicture : RearSurface 'small picture/photo/photograph' 'small picture'  
  "It's a faded photograph of an eccentrically-dressed man with a  
    long scarf, in company with a smiling young woman with  
    long blonde hair. "  
   allowPutBehind = nil  
;  
  
++ rightHalfPaper : Hidden, Readable 'right half torn sheet yellow paper\*sheets\*papers'   
  'torn sheet of yellow paper'    
  "It looks like the right hand half of a sheet of paper that's been torn in two. It  
   contains a list of names. "  
  readDesc = "Ship Hold\nSpaceStation\nNew Mars\nJerusalem\n  
      Nivalis\nLondon\nOutside Caves\n"    
  mainExamine  
  {  
    if(!described) name += ' (right half)';  
    inherited;  
  }  
 ** collectiveGroups = \[yellowPaperGroup\]  
**;  
  
The next task is to define the yellowPaperGroup CollectiveGroup object
(to which we give no location):  
  
yellowPaperGroup : CollectiveGroup 'yellow paper \*sheets' 'sheets of yellow paper'  
  "When you hold the two sheets of paper together, you find that the combined sheet  
   reads:\nA0 Ship Hold\nA2 Space Station\nC9 New Mars\n  
   J8 Jerusalem\nM3 Nivalis\nQ7 London\nT5 Outside Caves\n"  
  dobjFor(Examine)  
  {  
    verify() {}  
    preCond = \[leftSheetHeld, rightSheetHeld\]      
  }   
  basicExamine  
  {  
    if(gActor.isLocationLit)  
      desc;  
    else  
      desc;  
  }  
  dobjFor(Read) asDobjFor(Examine)  
  isCollectiveAction(action, whichObj)  
     {  
         /\* we handle 'Examine' & 'Read'\*/  
         if (action.ofKind(ExamineAction) \|\| action.ofKind(ReadAction))  
             return true;  
   
         /\* it's not one of ours \*/  
         return nil;  
     }  
;  
  
What we have done here is, first of all, define the description we want
displayed when the two halves of the piece of paper are read or examined
together, and then provided a handling for the Examine command that
displays this description. We also include ReadAction among the kinds of
action yellowPaperGroup will handle by overriding its isCollectiveAction
method appropriately, and redirecting READ to EXAMINE. The main
complication is that we don't want the player to be able to EXAMINE or
READ both halves of the sheet of paper together unless they are both
available to him or her separately. We therefore make it a precondition
of examining the sheets together that they are both held (although we
will allow them to be picked up in an implicit action if they are
available to be picked up). We finally need to define the custom
preconditions; since they'll be so similar we'll define a custom class
and then derive both the preconditions from it:  
  
class SheetHeldPreCondition : PreCondition  
  sheet = nil  
  checkPreCondition(obj, allowImplicit)  
     {  
         /\* check to see if the actor is holding the sheet - if so, we're done \*/  
         if (sheet.isHeldBy(gActor))  
             return nil;  
   
         /\* the actor isn't holding the sheet, try a "take sheet" command \*/  
         if (allowImplicit && tryImplicitAction(Take, sheet))  
         {  
             /\*   
              \*   make sure that leaves the actor holding the sheet - if not,  
              \*   exit silently, since the reason for failure will have  
              \*   been reported by the "take sheet" action   
              \*/  
             if (!sheet.isHeldBy(gActor))  
                 exit;  
               
             /\* indicate that we executed an implicit command \*/  
             return true;  
         }  
           
         /\* we can't take the sheet implicitly - report the problem and exit \*/  
         reportFailure('You don\\t have both sheets. ');  
         exit;  
     }  
;  
  
leftSheetHeld : SheetHeldPreCondition  
   sheet = leftHalfPaper  
;  
  
rightSheetHeld : SheetHeldPreCondition  
   sheet = rightHalfPaper  
;  
