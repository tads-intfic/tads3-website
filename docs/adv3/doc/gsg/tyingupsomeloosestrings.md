---
layout: docs
---


[<img src="topbar.jpg" data-border="0" />](index.html)
[\[Main\]](index.html)  
*[\[Previous\]](addinganobjecttotheroom.html)
  [\[Next\]](basictravel.html)*

## Tying Up Some Loose Strings

The two objects we have defined so far have included both double-quoted
and single-quoted strings in their property definitions. To the seasoned
TADS 2 programmer the distinction will need little further explanation.
An author coming from Inform will be partly prepared and partly misled
by the way in which single and double-quoted strings work in that
language. Other readers may be totally mystified. At least a brief
attempt at explanation is due at this point, since the distinction is
fairly basic to TADS programming.

As a first approximation, a single-quoted string is simply a string
constant, whereas a double-quoted string is a shorthand form of a
statement that displays the string. That is to say the statement
 
"To err is human; to make a total mess-up requires a computer. "; 


is equivalent to the statement:  
 
say('To err is human; to make a total mess-up requires a computer. '); 


It follows, as a first approximation, that a single-quoted string can be
used wherever it makes sense to use a string constant, while a
double-quoted string can be used wherever it's legal to write a
statement. Thus a single-quoted string can be passed as an argument to a
function, used in an assignment statement, or manipulated with the
various string functions, but a double-quoted string cannot.  
  
The main confusion comes about because a definition such as  


widget : Thing 'widget' 'brass widget'  
  desc = "It's a brass widget"  
;  


might erroneously lead you to suppose that you could subsequently change
the desc property of the widget by a statement such as  


desc = "It's a silver widget";  


But this code would generate a compiler error. The desc property should
be regarded, not as holding a string constant, but a routine that prints
a string constant, so that the definition is effectively equivalent
to:  


widget : Thing 'widget' 'brass widget'  
desc  { say('It\'s a brass widget'); } 



;  


It is thus almost as if a property holding a double-quoted string were
in reality a method that displays a string, despite its syntactic
appearance (by the way, note that when we define a *method* in TADS 3 we
do not include the = sign).  
  
The difference in the way the two kinds of string are employed in object
definitions is that single-quoted strings are generally used for single
words or short phrases that will generally be displayed as part of a
longer message (such as the name property), whereas a double-quoted
string is generally used for properties that are expected to hold
possibly quite lengthy text, usually one or more complete sentences,
that will always be displayed just as they are (such as the full
description of an object or room). One further key difference between
single-quoted and double-quoted strings, and maybe the most important
selection criterion in the library itself, is that the value of a
single-quoted string can be inspected and manipulated, whereas a
double-quoted string can really only be displayed. So, for example, if
it's going to be necessary to look inside a string to see if it starts
with a vowel, then we'll definitely want the single-quoted version.  
  
As of TADS 3.1.0 both single and double-quoted strings may contain
embedded expressions enclosed in double (\<\< \>\>). Such embedded
expressions may evaluate to a number, a double-quoted string or a
single-quoted string (or nothing at all, i.e. nil). This means that the
statement  
 
"The rain in Spain stays &lt;&lt;someExpression&gt;&gt; in the plain."; 


is equivalent to  
 
say('The rain in Spain stays ' + someExpression + ' in the plain.'); 


Where someExpression could, for example, be a function call or another
method or property on the same or a different object. Not only does this
allow a double-quoted string to print variable text, it allows it to
call a method that may have all sorts of other useful side-effects such
as changing the game state, a trick we shall be using more than once in
what follows.  



One can have a single-quoted string by itself as a statement, at least
the compiler won't complain about it, but it will do absolutely nothing
when the program is run.  


A final example may help to make this all a bit clearer. Here's the
definition for a widget that changes from brass to silver when it is
picked up:  


widget : Thing 'widget' 'brass widget'  
  "It's a \<\<metal\>\> widget. "  
  dobjFor(Take)  
  {  
    action()  
    {  
      name = 'silver widget';  
      metal = 'silver';  
      inherited;  
    }  
  }  
 metal = 'brass'  
;  


With such an object defined, one could obtain the following
transcript:  


You see a brass widget here.  
  
\>**x widget**  
It's a brass widget.  
  
\>**take widget**  
Taken.  
  
\>**x it**  
It's a silver widget.  
  
\>**i**  
You are carrying a silver widget.  


One final point about strings: in TADS a string that will be used to
display a complete message (as opposed to an isolated word or phrase)
should always end with a space (or newline) just before the closing
quote, to allow for the possibility that something may be displayed
directly after it. For a newline, insert \n in your string. For a
newline followed by a blank line use \b or \<.p\>; the latter form
ensures that only one blank line will appear (even if several \<.p\>
tags occur in succession), whereas the former, \b, may result in several
blank lines, depending on what is printed next. If you *want* several
blank lines, then you need to use \b.  
  
And one final point overall. You may have noticed that the above example
used something called dobjFor(Take) followed by a method called action()
enclosed within outer braces. If you followed the goldskull example in
the previous chapter, you might have expected to see a method called
actionDobjTake() here. In fact, the two ways of doing it are exactly
equivalent. Technically, dobjFor(Take) is a *macro*, which the
*preprocessor* expands into the code the compiler actually sees. The
effect in this case is that what the compiler actually sees here is a
method called actionDobjTake, exactly as before. Although a macro is
usually meant to be a kind of shortcut, while in this case it actually
makes the code a little more verbose, the use of the dobjFor and iobjFor
macros in TADS 3 programming is so common that this is the style we
shall follow from now on.  
  

------------------------------------------------------------------------

*Getting Started in TADS 3*  
[\[Main\]](index.html)  
*[\[Previous\]](addinganobjecttotheroom.html)
  [\[Next\]](basictravel.html)*


