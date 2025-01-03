---
layout: docs
---
<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>inputManager<br />
</strong></td>
<td style="text-align: right;"><a
href="messagesubstitutionparameters.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="mainoutputstream.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
The inputManager is one of the best-kept secrets of TADS 3. It provides
(arguably) more usable alternatives to some of the input methods listed
in the "tads-io" function set.  
  
This tads-io function set includes functions like **morePrompt**, which
displays a MORE prompt and waits for the player to press a key;
**inputKey**, which waits for the player to press a key and returns the
key pressed, and **inputLine**, which reads a whole line of text from
the player (up to the point the player presses the ENTER or RETURN key)
and then returns the string entered.  
  
The trouble is, as you soon discover, that these functions don't
entirely work as you want them to. The problem typically is that you
place, say. morePrompt in a the middle of some text to create a dramatic
pause, but what actually happens is that you see all the text, and only
then the more prompt. E.g. you write code like:  
  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="14"></td>
<td>"The evil baby-eating villain points his splat-gun at you, pulls the trigger and...";
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
<tr data-valign="TOP">
<td width="14"></td>
<td>morePrompt();  <br />
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
<tr data-valign="TOP">
<td width="14"></td>
<td>"... suffers a sudden fatal heart attack! ";  <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

  
But find the more prompt is actually displayed *after* the second line
of text, defeating your dramatic pause.  
  
One way to deal with this is to toggle the transcript off and on:  
  
   gTranscript.deactivate();  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="14"></td>
<td> "The evil baby-eating villain points his splat-gun at you, pulls the trigger and...";
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
<tr data-valign="TOP">
<td width="14"></td>
<td> morePrompt();  <br />
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
<tr data-valign="TOP">
<td width="14"></td>
<td> "... suffers a sudden fatal heart attack! ";  <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

   gTranscript.activate();  
  
But this is a little awkward. The simpler way, would be to use an
inputManager method:  
  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="14"></td>
<td>"The evil baby-eating villain points his splat-gun at you, pulls the trigger and...";
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
<tr data-valign="TOP">
<td width="14"></td>
<td>inputManager.pauseForMore(true);  <br />
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
<tr data-valign="TOP">
<td width="14"></td>
<td>"... suffers a sudden fatal heart attack! ";  <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

  
And you should find this more works as you want.  
  
In general, instead of the tads-io functions you'll always want to use
the corresponding inputManager methods thus:  
  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="14"></td>
<td>Instead of morePrompt() use inputManager.pauseForMore(true);  <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="14"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="14"></td>
<td>Instead of inputKey() use inputManager.getKey(nil, nil);  <br />
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
<tr data-valign="TOP">
<td width="14"></td>
<td> <br />
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
<tr data-valign="TOP">
<td width="14"></td>
<td>Instead of inputLine() use inputManager.getInputLine(nil, nil);
 <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

  
The parameters of these methods will only be of interest to you if you
want to allow real time events to continue in the background while
waiting for user input; this is a complication we shan't go into here -
if you need real time processing look at the definition of inputManager
in input.t and follow the comments in the library code.  
  
  
  
  
