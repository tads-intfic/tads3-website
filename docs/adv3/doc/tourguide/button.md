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
<td style="text-align: left;"><strong>Button : <a
href="thing-introduction.html">Thing</a><br />
</strong></td>
<td style="text-align: right;"><a
href="gadgets-introduction.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="labeleddial.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
The Button is the simplest kind of gadget class. It is simply something
you can PUSH or PRESS. By default it then simply displays a message
saying "Click. ", but you'll nearly always want to override this to do
something else. You do so by overriding the action method of its Push
handling, i.e. either  
  
myButton : Button 'button' 'button'   
   dobjFor(Push)  
   {  
     action()  
     {  
         /\* My button-push handling here \*/  
     }  
   }  
;  
  
Or the functionally identical but cosmetically more compact (though
arguably less clear) equivalent:  
  
myButton : Button 'button' 'button'   
   actionDobjPush  
   {       
         /\* My button-push handling here \*/  
   }  
;  
  
This is so simple that we have already used a couple of buttons: the
first to open the [HiddenDoor](hiddendoor.html#smallbrownbutton) in the
main cabin, and the second in the implementation of the
[Autorectifying](keyedcontainer.html#orangebutton) device. We'll continue
to use buttons on our various contraptions, notably on the
[Tardis](dynamiclocations.html) control console, but there's no need to
give another specific example here.  
  
