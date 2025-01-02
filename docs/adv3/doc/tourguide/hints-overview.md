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
<td style="text-align: left;"><strong>Hints - Overview<br />
</strong></td>
<td style="text-align: right;"><a href="maxscore.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="tophintmenu.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
If you want to add a context-sensitive hints system to your game, it's
probably a lot of work, but at least the TADS 3 library does what it can
to help by providing a set of classes to ease the coding of a menu-based
hint system. Basically, all you need to do is to set up a menu tree
that, in outline, might look something like this:  
  
[TopHintMenu](tophintmenu.html) 'Hints';  
  
+ [HintMenu](hintmenu.html) 'Cave Region';  
  
++ [Goal](goal.html) 'How do I...?' \['Have you tried...?'\];  
  
++ Goal ...  
  
++ Goal ...  
+++ [Hint](hint.html) ..  
  
++ Goal  
  
+ HintMenu 'The Ship'  
  
++ Goal  
....  
  
This is probably best done in a source file of its own - say hints.t -
which you keep separate from the rest of your game code. You may need to
add a few things to the game proper for your hints system to pick up on,
but otherwise your hints system should not change anything in the game
proper, and certainly nothing in hints.t (or whatever you choose to call
it) should change anything in the game state at all. Apart from the
availability of hints the game should compile and play just the same
whether you include hints.t in the build or not.  
  
What the hint system aims to do is to provide a successive list of hints
for each of the various goals that the player might be pursuing at any
particular point in the game, but not to list any goals that have not
yet become relevant or have ceased to be relevant. These goals may
optionally be organized in submenus under the main hints menu to aid
navigation through the hint system for the player. How this all works in
detail, we shall now explore, though it must be emphasized from the
outset that the aim here is merely to give enough examples for you to
see how the hint system works, not to try to provide a complete set of
hints for the game we have created, which would be far too large a task
to complete here.  
  
  
  
  
