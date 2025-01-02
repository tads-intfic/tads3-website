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
<td style="text-align: left;"><strong>mainOutputStream:
OutputStream<br />
</strong></td>
<td style="text-align: right;"><a href="inputmanager.html">[Previous]</a>
<a href="generalintroduction.html">[Main]</a> <a
href="pasttense.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
The complement to the inputManager object is the mainOutputStream
object, which has a couple of methods that can be of use on occasion.  
  
The first of these allows you to capture output (i.e. store what would
have been output to the screen in a variable or property instead). To do
this you can call its **captureOutput()** method. This takes a function
pointer as its first argument, and the arguments to that function (if
any) as its remaining arguments. It returns the string that would have
been output to the screen.  
  
For example, the statement:  
  
  a = mainOutputStream.captureOutput( {: "The rain in Spain stays mainly in the plain. " });  
  
Would result in a containing the string 'The rain in Spain stays mainly
in the plain. ', without anything being output to the screen.  
  
That particular example may not be useful, but suppose we wanted to get
at the value of a property defined as a double-quoted string, such as
the desc property of a Thing to manipulate it in some way, e.g. suppose
we had:  
  
redBall: Thing 'big red bouncy round ball' 'red ball'  
  "It's a big bouncy object, red and round. "  
;  
  
And we wanted at some other point to generate the string "He said that
it's a big bouncy object, red and round. " from this description. This
can't be done by writing something like:  
  
"He said that \<\<redBall.desc.toLower\>\>"  
  
Since toLower can't be applied to a double-quoted string. To manipulate
the double-quoted string we need to be able to convert it to a
single-quoted string, but normally any attempt to manipulate a
double-quoted string will simply result in its being displayed.  
  
This is one case where we could use output capture. For example, we
could write:  
  
   local descText = mainOutputStream.captureOutput( {: redBall.desc });  
   "He said that \<\<descText.toLower\>\> ";  
  
Alternatively, if you were going to do this sort of thing often, you
could define:  
  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="14"></td>
<td>function objDesc(obj)  <br />
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
<td>{  <br />
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
<td>   obj.desc;   <br />
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
<td>}  <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

  
And then call  
  
local descText = mainOutputStream.captureOutput(objDesc, redBall);  
  
To achieve the same effect. Of course, it wouldn't be worth the bother
of defining quite such a simple function, but this simple example shows
the principle that could be applied to a more complex case.  
  
  
The other thing mainOutputStream can help with is determining whether
anything has been output at all. For this you can use its
**watchForOutput** method. TYou use this by calling
mainOutputStream.watchForOutput(func), which returns true if calling
func caused something to be displayed and nil otherwise.  
  
For example, suppose you define a custom class with a specialMessage
property, which defaults to nil on your class, but may contain a
double-quoted string or a routine that displays a string on some members
of the class:  
  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="14"></td>
<td>class SpecialThing : Thing  <br />
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
<td>   specialMessage = nil  <br />
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
<td>   showSpecialMessage  <br />
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
<td>   {  <br />
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
<td>      if(!mainOutputStream.watchForOutput({: specialMessage }))
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
<td>        "There's nothing special about &lt;&lt;theName&gt;&gt;.&lt;.p&gt; ";
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
<td>   }  <br />
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
<td>;  <br />
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
<td>specialBall: SpecialThing 'ball' 'ball'  <br />
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
<td>   specialMessage = "It's a special ball.&lt;.p&gt;"  <br />
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
<td>;  <br />
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
<td>specialStick: SpecialThing 'stick' 'stick'  <br />
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
<td>;  <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

  
Then calling specialBall.specialMessage will result in the display of
"It's a special ball", while calling specialStick.specialMessage will
result in "There's nothing special about the stick. "  

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

Apart from showing the principle, the above example is pretty pointless,
since it would have been more straightforward to have defined
SpecialThing.specialMessage = "There's nothing special about \<\<theName\>\>.\<.p\> " A
slightly more useful example would be a variant in which we wanted
specialMessage to be displayed correctly whether it was defined as
double-quoted string, a routine that displayed a string, a single-quoted
string, or a routine that returned a single-quoted string. We could do
that with the following code:  
  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="14"></td>
<td>class SpecialThing : Thing  <br />
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
<td>   specialMessage = nil  <br />
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
<td>   showSpecialMessage  <br />
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
<td>   {  <br />
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
<td>     local val;  <br />
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
<td>     local hasDisplayed = mainOutputStream.watchForOutput( {: val = specialMessage } ); 
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
<td>     if(!hasDisplayed)         <br />
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
<td>      switch(dataType(val))  <br />
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
<td>      {  <br />
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
<td>        case TypeSString:  <br />
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
<td>        case TypeInt: "&lt;&lt;val&gt;&gt;&lt;.p&gt;"; break;
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
<td>        case TypeTrue: "True&lt;.p&gt;"; break;  <br />
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
<td>        default: "Nothing to report. ";  <br />
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
<td>            <br />
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
<td>      }    <br />
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
<td>   }  <br />
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
<td>;  <br />
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
<td>specialBall: SpecialThing 'ball' 'ball'  <br />
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
<td>   specialMessage = "It's a special ball.&lt;.p&gt;"  <br />
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
<td>;  <br />
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
<td>specialStick: SpecialThing 'stick' 'stick'  <br />
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
<td>   specialMessage = 'It\'s a stick. '  <br />
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
<td>;  <br />
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
<td>specialNumber: SpecialThing 'number' 'number'  <br />
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
<td>   specialMessage = 532  <br />
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
<td>;  <br />
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
<td>DefineIAction(Bar)  <br />
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
<td>  execAction()  <br />
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
<td>  {  <br />
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
<td>    specialBall.showSpecialMessage;  <br />
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
<td>    specialStick.showSpecialMessage;  <br />
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
<td>    specialNumber.showSpecialMessage;  <br />
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
<td>  }  <br />
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
<td>;  <br />
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
<td>VerbRule(Bar)  <br />
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
<td> 'bar'  <br />
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
<td> :BarAction  <br />
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
<td>;  <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

  
In this case, issuing the command BAR will result in the display:  
  
**\>bar**  
It's a special ball.  
  
It's a stick.  
  
532  
  
Although in this case we could have tested for dataType(val) being of
kind TypeDString, that wouldn't work in the more general case in which
specialMessage was a routine that may or may not display something,
e.g:  
  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="14"></td>
<td>specialBall: SpecialThing 'ball' 'ball'  <br />
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
<td>   specialMessage  <br />
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
<td>    {  <br />
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
<td>      if(fooVal &lt; 2)  <br />
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
<td>        "It's an ordinary ball. ";  <br />
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
<td>      else if(fooVal == 2)    <br />
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
<td>        "It's a special ball.&lt;.p&gt;";  <br />
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
<td>      else if(fooVal &gt; 10)  <br />
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
<td>        "It's a very special ball. ";  <br />
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
<td>      return 'It\'s a moderately special ball. ';  <br />
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
<td>    }  <br />
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
<td>   fooVal = 4  <br />
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
<td>;  <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

  
In this highly artificial example, specialBall.specialMessage always
returns 'It\\s a moderately special ball. ' but may also display a
different string as well depending on the value of specialBall.fooVal.
Calling specialBall.showSpecialMessage will cause 'It\\s a moderately
special ball. ' to be displayed if and only if fooVal is between 3 and 9
inclusive; otherwise one of the other messages will be displayed
instead. A more real example is the use of watchForOutput in my lookDir
library extension, where it checks to see if the relevant xxxLook
property (e.g. northLook) has output anything before falling back on one
of the defaults (describing the north wall or displaying a default
message).  
  
DefineIAction(LookDir)  
  execAction()  
  {  
     local dirn = dirMatch.dir;  
     local prop = dirLook.dirTab\[dirn\];  
     local loc = gActor.roomLocation.lookLocation(dirn);  
     local hasDisplayed = nil;  
     local rPart;  
       
       
     /\*   
      \* If the player simply types LOOK IN treat it as an incomplete  
      \* form of the library's LookInAction, and redirect the command  
      \* accordingly.  
      \*/  
        
     if(dirn == inDirection)  
        askForDobj(LookIn);  
          
          
     /\*   
      \*  If it's too dark to see, diplay a failure message to that effect.  But allow  
      \*  this to be overridden for special cases (e.g. the player char may be able to see  
      \*  a distant light in the dark).        
      \*  
      \*  There are three ways you can go about this. The easiest, and generally  
      \*  preferred, way is simply to define an xxxxLookDark property on the location  
      \*  where you want a custom message displayed in the dark. For example, if  
      \*  you have a dark cave with an entrance to the west, you may want to display  
      \*  a message about light coming in from tbe west when an actor LOOKS WEST in the cave.  
      \*  In which case define a westLookDark property on the cave thus:  
      \*  
      \*     westLookDark = "{You/he} see{s} a small amount of light seeping in through   
      \*                       the cave entrance. "  
      \*         
      \*  The second is to override  
      \*  tooDarkForDirLook(dirn) on the appropriate location so that it returns  
      \*  nil. The location will then be treated as if it were lit for the purposes  
      \*  of processing the LOOK DIR command.  
      \*  
      \*  The third is to override lookDirInDark(dirn) on the  
      \*  appropriate location to display whatever custom messages(s) you want  
      \*  displayed when an actor looks to dirn in the dark.  
      \*          
      \*/  
        
      if(!gActor.isLocationLit && loc.tooDarkForDirLook(dirn))  
      {                
         return;  
      }  
        
     /\*   
      \* Otherwise, if the current location defines the appropriate  
      \* dirLook property (or method), let that handle the action.    
      \*/    
     if(prop != nil && loc.propDefined(prop) && loc.propType(prop) != TypeNil)  
     {  
       /\*   
        \*  Even if prop is defined and is non-nil, it may fail to display anything,  
        \*  so we test to ensure it does. Failure to display may occur because prop  
        \*  is a method or expression that evaluates to nil, or because it evaluates  
        \*  to a single-quoted string.  
        \*/   
          
       local val;  
       hasDisplayed = mainOutputStream.watchForOutput( {: val = loc.(prop) } );         
         
       /\*   
        \*  If we displayed something, we're done, unless we returned showRoomPart   
        \*  The test for returning showRoomPart is a special case to allow us to display  
        \*  a custom message followed by a description of the appropriate room part.  
        \*  e.g.:  
        \*  
        \*  northLook { "You look north across the room. "; return showRoomPart; }  
        \*  
        \*  This would display "You look north across the room. " followed by the description  
        \*  of the north wall, if there is one (or else display the defaultLook message,  
        \*  which probably wouldn't be what you want).   
        \*/   
         
       if(hasDisplayed && val != showRoomPart)  
         return;  
         
       /\*   
        \*  If we didn't display something, perhaps loc.(prop) evaluated to a  
        \*  single-quoted string; in which case display the string and return.  
        \*/  
       if(dataType(val) == TypeSString)  
       {  
          say(val);  
          return;  
       }         
     }  
         
     /\*   
      \* If no outLook was defined, treat LOOK OUT as an incomplete LOOK THROUGH  
      \* command.   
      \*/    
     if(dirn == outDirection)  
       askForDobj(LookThrough);  
         
     /\*  
      \* Otherwise, if the player specified a shipboard direction (e.g. LOOK PORT) and  
      \* we're not in a shipboard room, display the standard 'not aboard ship' message.  
      \*  
      \* Note that putting this check \*after\* the previous ones allows an author to  
      \* define a portLook, starboardLook, aftLook or foreLook even on a non-shipboard  
      \* room; whether this is useful is left to authors to decide, not dictated by  
      \* this extension.  
      \*   
      \*/    
     else if(dirn.ofKind(ShipboardDirection) && !loc.isShipboard)  
         libMessages.notOnboardShip();  
           
       
     /\*   
      \* Otherwise see if we can find a room part matching the compass direction name, and, if  
      \* so, examine it, provided this location allows it.  
      \*/  
       
     else if(loc.lookDirToRoomPart(dirn) && (rPart = findRoomPart(dirn)) != nil)  
     {  
       /\* If we found an appropriate room part, examine it \*/       
         
          replaceAction(Examine, rPart);           
                       
     }  
       
        /\*  
         \*  Otherwise print the default message "You see nothing remarkable by looking \<\<dir\>\>. ",           
         \*  unless we previously displayed something else.  
         \*/  
     else if(!hasDisplayed)  
        loc.defaultLook(dirn);                
  }  
    
  /\*  
   \*  This is made a separate method in case it needs to be customised for  
   \*  languages other than English.  
   \*/  
  findRoomPart(dirn)  
  {  
     local loc = gActor.getOutermostRoom;   
        /\* If the command was LOOK DOWN try looking at the current room's floor object \*/  
     if(dirn == downDirection)  
        return loc.roomFloor;  
             
        /\* If the command was LOOK UP try to find the sky or ceiling object \*/     
     if(dirn == upDirection)  
         return loc.roomParts.valWhich(  
          { x: nilToList(x.noun).indexOf(dirLook.sky) != nil  
           \|\| nilToList(x.noun).indexOf(dirLook.ceiling) != nil } );  
              
        /\* Otherwise try to find a wall (or other room part) with an adjective that matches our direction name \*/      
       
     return loc.roomParts.valWhich(  
         {x: nilToList(x.adjective).indexOf(dirn.name) != nil });       
       
  }  
      
;  
  
  
  
  
  
  
  
  
  
  
  
  
  
