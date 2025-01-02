---
layout: docs
---


<img src="topbar.jpg" data-border="0" />





<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="begin.html" class="nav">Opening Moves</a> \> Naming
Conventions  
<span class="navnp"><a href="syntax.html" class="nav"><em>Prev:</em> Typographical
Conventions</a>    
<a href="hello.html" class="nav"><em>Next:</em> Hello, World!</a>    
</span>





# Naming Conventions

TADS 3's standard libraries follow a naming convention similar to that
used for the Java system classes. For consistency, the intrinsic
function name and intrinsic class method definitions provided with the
compiler follow this same set of conventions. Here's a summary of the
naming rules:

- All identifiers use mixed-case letters. After the initial letter,
  small letters are used, except that if an identifier consists of more
  than one word, the first letter of each additional word is
  capitalized. It isn't necessary to capitalize the first letter of an
  embedded word in a few cases, such as when the pair of words could
  reasonably be rendered in ordinary writing as a compound word or with
  a hyphen (for example, "sublist" could be used rather than "subList").
- A class name starts with a capital letter.
- Function, method, property, and object instance names start with a
  small letter.
- A manifest constant name (a "#define" symbol that expands to a simple
  numeric or other constant value) starts with a capital letter.
- \#define symbols that define names that are meant to behave like
  global variables use an initial "g" prefix (for example, "gActor" in
  the adv3 library).
- Macros used only to control conditional compilation (through the
  "#ifdef" preprocessor directive) use all capitals, with underscores to
  separate words.
- Other macro names should follow the appropriate convention for their
  intended use. For example, a macro that's used to define a class
  should start with a capital letter, and a macro that is used like a
  function or method call should start with a small letter.

The standard libraries sometimes use an abbreviation or acronym as
though it were an ordinary word, to avoid really long names or long runs
of capital letters. For example, the regular expression functions use
"rex" instead of "regularExpression," because the latter is too long
(rexMatch, rexSearch, etc.), and the String method "htmlify" doesn't
capitalize the letters "HTML."



------------------------------------------------------------------------



*TADS 3 System Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="begin.html" class="nav">Opening Moves</a> \> Naming
Conventions  
<span class="navnp"><a href="syntax.html" class="nav"><em>Prev:</em> Typographical
Conventions</a>    
<a href="hello.html" class="nav"><em>Next:</em> Hello, World!</a>    
</span>


