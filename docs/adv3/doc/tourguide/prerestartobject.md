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
<td style="text-align: left;"><strong>PreRestartObject: <a
href="moduleexecobject.html">ModuleExecObject</a><br />
</strong></td>
<td style="text-align: right;"><a
href="postundoobject.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="travelpushable.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
PreRestartObject is the last member of this set. Every instance of this
class is notified, via its execute() method, just before we restart the
game (with a RESTART command, for example).  
  
Our totally insane implementor would probably use it like this:  
  
PreRestartObject  
  execute()  
  {  
    "NO!! You pathetic worm! I have filled this game with a myriad unmappable   
    mazes, an infinity of instadeath rooms, a glut of guess-the-verb puzzles,  
    an unbounded cornucopia of unimplemented objects, and you -- you, you miserable  
    wretch -- you want to back out of all this by RESTARTING! Well, I'm not   
    having it. You'll just have to carry on. So there! ";  
      
    exit;  
  }  
;  
  
At this point you may be feeling thoroughly grateful that there's no
PreQuitObject. Unfortunately our Insane Implementor could always resort
to:  
  
modify QuitAction  
  execSystemAction()  
  {   
    "What? You want to quit my masterpiece? No way! What kind of cretin are  
     you, anyway?";  
  }  
;  
  
But please don't try this at home!  
  
And now, after that little diversion, let's get back to the Quest of the
Golden Banana.  
  
