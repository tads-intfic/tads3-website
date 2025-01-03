---
layout: docs
---


[<img src="topbar.jpg" data-border="0" />](index.html)





[\[Main\]](index.html)  
*[\[Previous\]](startinganewgame.html)
  [\[Next\]](addinganobjecttotheroom.html)*

## Defining Our First Room

So far, the only really significant thing we have done to the source
file is to indicate that the room in which the game will start will be
called outsideCottage. Our next job is to define this room. As a first
attempt, add the following to the end of your source file:

  
outsideCottage: OutdoorRoom  
   roomName = 'In front of a cottage'  
   desc = "You stand just outside a cottage; the forest stretches east. "  
;  
  
Be careful to copy this code exactly, including the punctuation, not
least the semicolon at the end (by itself on the last line). Also, be
careful to note that 'In front of cottage' is enclosed in single
quotation marks, and "You stand outside a cottage; the forest stretches
east. " in double quotation marks. This distinction is important and
must be followed (the significance of the distinction will be explained
in more detail on p. 50 below).  
  
If you compile and run the game it should now run, although the game is
pretty basic. Since there's only one room in the game you can't actually
move anywhere, and there are no objects to manipulate or even examine.
About the most interesting thing you can do with the game right now is
to **quit** straight away!  
  
Before making things more interesting, let's take a look at the
definition of the one room we have defined so far. The first line
outsideCottage: OutdoorRoom consists of the object name followed (after
the colon) to the superclass to which it belongs. The object name is
simply the name by which this object will be referred in our code; we
could have called it room101 or auntieMyrtle, but it is obviously better
to choose something that makes reasonable sense. Note that we have
followed the TADS 3 convention of starting an object name with a
lowercase letter, while using a capital letter at the start of any
subsequent words in the name.  
  
OutdoorRoom is the name of the class to which we want this game object
to belong. By default an OutdoorRoom has ground and sky, but no walls,
which is what we want here. Try running the game again and type
**examine ground**, **x sky** and **x wall**. Now change OutdoorRoom to
Room, and compile and run the game again and type the same commands.
Finally change Room back to OutdoorRoom. Again note the naming
convention, since OutdoorRoom names not an object but a *class* it
starts with a capital letter.  
  
The next two lines define the *properties* of our OutdoorRoom object:  

` `

`roomName = 'In front of a cottage' `

`desc = "You stand just outside a cottage; the forest stretches east. " `

` `
The roomName property (a string enclosed in single quotation marks) is
the brief title that names the current room in the status line and at
the start of a room description. The desc property (a double quoted
string) is the longer description that is displayed the first time a
room is seen, or in response to a **look** command (or every time a room
is entered if the game is in **verbose** mode).  
  
Finally, on the last line, is a semicolon by itself; this simply ends
the definition of this object. An alternative is to enclose the property
list in curly braces thus:  

` `

```

outsideCottage: OutdoorRoom  
{  
   roomName = 'In front of a cottage'  
   desc = "You stand just outside a cottage; the forest stretches east. "  
}  
  
Either form is possible and which you use is largely up to you. There
are situations (as we shall see later) in which you have to use braces;
in other situations (as we shall again see) the use of the semicolon can
make for more compact code.  
  
Note that the semicolon is also used to terminate TADS 3 program
statements. This can be a source of confusion because the property
definitions look rather like assignment statements, so it can be very
easy to slip into writing:  

` `

```

outsideCottage: OutdoorRoom  
   roomName = 'In front of a cottage';  
   desc = "You stand just outside a cottage; the forest stretches east. ";  
;  
  
If you try to compile this, you'll get an error, because the compiler
will now think the definition of outsideCottage ends with the
name property and won't know what to do with the desc property. Since
this is such a common source of potential confusion it's worth
remembering the following golden rule straight away:  
*  
A property definition is not a programming statement. Do not end it with
a semicolon.  
*  
We have laboured the definition of outsideCottage at some length, since
the principles involved are common to a great deal of TADS 3
programming, most of which consists in defining objects.  
  
If you read the previous chapter, then all this should be reasonably
familiar from the "goldskull" example. Now we come to our first major
innovation: although the definition of outsideCottage seems simple
enough, it can in fact be made a good deal simpler through a feature of
the language called 'templates'. A template simply defines a shorthand
way of defining the most common properties an object is likely to have.
Since every room will have a name and a description the TADS 3 library
defines a template that looks like this:  

` `

```

Room template 'roomName' 'destName'? 'name'? "desc"?;   

` `

```

This means that if we follow the class name of a Room-type object with a
string in single quotation-marks, it will be taken as the roomName
property of the Room; we can then optionally supply a second
single-quoted string as the destName property and (if destName is
supplied) a third single-quoted string as the name property (a pair of
complications we shan't go into here) and, also optionally, a
double-quoted string as the desc property. This would allow our room to
be defined simply as:  

` `

```

outsideCottage : OutdoorRoom 'In front of a cottage'     
   "You stand just outside a cottage; the forest stretches east. "  
;  

` `

```

In other words, when defining a room we can simply follow the class (or
class list) with the room name in single quotation marks, followed by
the full room description in double quotation (ignoring the destName
property for now). Since this is generally a far more convenient way of
defining objects, it is the way we shall generally adopt from now on.
The compiler will, however, complain if you attempt something that does
not conform to the template; for example, you would get a compile-time
error if you wrote:  

` `

```

outsideCottage : OutdoorRoom  
   "You stand just outside a cottage; the forest stretches east. "  
   'In front of a cottage'  
;  

` `

```

In other words, the properties must be supplied in the order defined in
the template, and must conform to the number and format of properties
the template expects. Note, however, that there is nothing magical about
laying the code out for this object definition on three lines. So far as
the compiler is concerned, it could have been written:  

` `

```

outsideCottage : OutdoorRoom 'In front of a cottage' "You stand just outside a cottage; the forest stretches east. ";  

` `

```

It is just that the three-line version is more readable to the human
eye, and makes for more legible code. Thanks to templates, though, there
are cases in which it is both feasible and legible to code an entire
object on a single line.  
  

------------------------------------------------------------------------

*Getting Started in TADS 3*  
[\[Main\]](index.html)  
*[\[Previous\]](startinganewgame.html)
  [\[Next\]](addinganobjecttotheroom.html)*


