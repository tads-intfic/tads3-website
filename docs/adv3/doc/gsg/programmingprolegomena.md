---
layout: docs
---
<div class="topbar">

[<img src="topbar.jpg" data-border="0" />](index.html)

</div>

<div class="main">

[\[Main\]](index.html)  
*[\[Previous\]](creatingyourfirsttads3project.html)
  [\[Next\]](furtherprogramming.html)*

## Programming Prolegomena

Many readers may prefer to skip this section altogether and dive
straight into the more interesting business of writing a game. But if
you are completely new to programming in TADS (or TADS 3) you may
appreciate a brief introduction to some of the basic ground rules. This
section makes no attempt to give a comprehensive or systematic account
of the TADS 3 language, but simply introduces some of the things you
will be meeting in this *Getting Started* Guide.

### a. Overview of Basic Concepts

Writing a game in TADS 3 requires two different styles of programming:
*declarative* and *procedural*. *Declarative* programming is largely a
matter of defining *objects* and setting their *properties* (see below).
Setting the properties of objects means giving them *values*; a *value*
may typically be a number, a string (i.e. a piece of text) or another
object. Since adv3, the library that comes with TADS 3, is so rich, you
can achieve a great deal in TADS 3 with declarative programming alone.

*Procedural* programming involves writing a sequence of *statements*.
Each *statement* is an instruction that you want your game to carry out.
Statements may typically assign a value to a *variable* or property, or
call a *function* or *method*. A *variable* is a kind of temporary store
for a value; a property can act as a more permanent store.

With one or two exceptions we needn't worry about here, statements can
appear only in *functions* and *methods*; there needs to be some context
in which they are executed. Similarly, *variables* can only be used in
*functions* and *methods*; all TADS 3 variables are thus *local*
variables (see further below).

A *function* is a kind of wrapper for a group of related statements you
want to be executed together. An individual function is usually designed
to carry out one specific task (although it may be a highly complex task
involving many individual steps). The process of telling TADS 3 that we
want a function to carry out its task is known as *calling* or
*invoking* the function (the two terms are synonymous).

A *method* is similar to a function, but is associated with a particular
*object*. A function can be invoked (i.e. called) simply using its name
(e.g. the statement `foo()` will invoke the
function named `foo`), whereas invoking a method
generally requires specifying the name of the object to which it belongs
as well (e.g. `foo.bar()` would invoke the bar
method of the `foo` object). The exception is
when a method is invoked from another method of the same object.

### b. Objects

Broadly speaking, most programming in TADS consists of defining
*objects* (although you may also find yourself defining classes,
functions, and one or two other things, but we'll leave those to one
side for the moment). An object may be an object in the physical sense
of something that appears in your game world, such as a spade, a
cottage, or a shopkeeper, but it may also be a more abstract construct
designed to do some job or other in your code. Examples of some of
abstract objects we shall be encountering include ActorStates that help
describe how an actor behaves under particular circumstances, and
TopicEntries that define how an actor responds to various questions.

Objects generally belong in some form of *containment hierarchy.* For
physical objects this usually represents the notional containment
relationships in your game world. At the top of the hierarchy are the
rooms (locations) that make up the map of your world. Each individual
room may contain a number of objects, such as tables, chairs, rocks,
boxes and the like, as well as actors such as the player character (PC)
and non-player characters (NPCs). These in turn may 'contain' further
objects (and so on). For example, if there is coin inside one of the
boxes, the coin is contained by the box, just as the box is contained by
the room. 'Containment' is, however, a slightly more general relation
than this example might suggest. For example, if a pen is sitting on the
table, then the table is considered to be the pen's container. Anything
held (or worn) by an actor is considered to be contained by the actor.
So, for example, if the PC picks up one of the rocks, that rock's
container changes from the room to the PC. If the PC then puts one of
the boxes on the table, the box is now 'contained' by the table instead
of directly by the room (although it remains indirectly contained by the
room). At this point the coin is contained by the box, but is also 'in'
the table and the room. In TADS 3 the immediately container of an object
is always specified in its `location` property.

Containment may also be used to relate abstract objects. For example,
menu items may be contained in a menu, or an actor may 'contain'
abstract objects such as ActorStates and TopicEntries (these will be
explained in due course) as well as physical objects being carried
around by the actor.

Typically an object definition begins with the name of an object,
followed by a colon, followed by a class list, followed by a list of its
*properties* and *methods*:


  myObj: Thing
  name = 'boring object'
  changeName
  {
    name = 'even more boring object';
  }  ;

In this definition `name` is a *property* of
`myObj`, `changeName` is
a *method* and `Thing` is the *class* (or
*superclass* or *base class*) of the object. The functional difference
between a *property* and a *method* is that properties hold values while
methods contain code: a list of one or more statements that do something
when the method is invoked. The syntactical difference is that the name
of a property is separated from its value by an equals sign (=) while
that of a method is not, the statements that make up the method being
enclosed in braces { }.

A further point of syntax to note is the use of the semicolon. This is
used (a) to terminate the object definition, and (b) to terminate
statements. It is *not* used to terminate property definitions (a very,
very easy mistake to make). Although they look very similar, the line
`name = 'boring object'` is a property
definition that means "define a `name` property
on `myObj` and set its initial value to 'boring
object'", while the statement within the
`changeName` method, i.e.
`name = 'even more boring object'; `is an
assignment statement that means "change the value of the already
existing value of the `name` property to 'even
more boring object'."

Note that you could use braces instead of a terminating semicolon to
define the extent of the object definition; the foregoing object
definition could then have been written:
```

  myObj: Thing  {
  name = 'boring object'
  changeName
  {

    name = 'even more boring object';
  }
  }
```
Which you use is up to you, but this *Guide* will use the terminating
semicolon.  

### c. Assignment Statements

An assignment statement is probably one of the most common kinds of
statement that you will come across in TADS 3 programming. It always
takes the form:


  lvalue = expression; 

Where `lvalue `can be either an object property
or a variable (which we'll talk about in just a bit). An expression can
be as simple as a constant value or the name of another variable, a
function call or method name (assuming the function or method returns a
suitable value), or a more complex expression involving a number of the
foregoing elements joined together with *operators*, for example:


  myName = 'my ' + name;

As a statement this would assign the value 'my boring object' to the
variable `myName` (assuming that
`name `started off by holding the value 'boring
object'). Note that an expression can also be used as the value of a
*property* (in which case it should be enclosed in parentheses), so that
if we made `myName` a *property* of
`myObj`, we could definine it thus:
```
  myObj: Thing
  name = 'boring object'
  changeName
  {

    name = 'even more boring object'
    ;
  }
  myName = ('my ' + name)
  ;
```
This definition would mean that `myName`
contained 'my boring object' until the
`changeName` method was invoked, and would
contain 'my even more boring object' afterwards (we'll talk about
invoking methods presently). In fact, it is, except for its appearance,
*exactly* the same as writing:

```
  myName  { return 'my ' + name; }
```
When it is used with (single-quoted) strings, + is thus a concatenation
operator. With numbers it does what you would expect, i.e. add them
together, e.g.:

```
  myNumber = 3 + 4;
```
Would assign the number 7 to `myNumber`. All the
numbers we'll be dealing with in this Guide will be *integers* (i.e.
whole numbers); TADS 3 does possess a
`BigNumber` class that allows you to work with
real numbers (i.e. numbers including a fractional part, such as
3.14159), but most Interactive Fiction can get by quite happily with
standard integer arithmetic.

Other common arithmetic operators include -, \* and / (subtract,
multiply and divide) which do much what you would expect (note that the
division is integer division, so that `myNumber = 3 /
4 `would set `myNumber` to zero, while
`myNumber = 10 / 4 `would set it to 2). Less
obvious but almost just as common and useful are the various shortcut
operators that provide a more concise way of coding common operations.
There are several of these, but the only ones we need deal with here are
+= -= ++ and --. It is quite common in programming to want to add or
subtract a number from the current value of a variable or property and
store the result in the same variable or property, e.g.:


  myNumber = myNumber + 4;  myNumber = myNumber - 2;

If `myNumber` started out at 6, then after the
first line was executed, myNumber would be changed to 10, and after the
second line was executed, it would be changed to 8. This could be
written more succinctly as:

```
  myNumber += 4;  myNumber -= 2;
```
This may look a litle strange at first, but it's a highly convenient
feature once you get the hang of it. Another one is the use of ++ or --
to increase or reduce a property or variable by one. Thus intead of
writing `myNumber = myNumber + 1` or even
`myNumber+=1` one could write simply
`myNumber++`; likewise one could use
`myNumber-- `in place of
`myNumber = myNumber - 1`.

In these examples, `myNumber` could be either a
property or a variable. In TADS 3 programming properties tend to be used
for semi-permanent storage of information you need to be available to
the whole program, while variables are local in scope and temporary in
duration, used, for example, to hold the results of some intermediate
calculation (there are some library defined quanties of the form
`gWhatsit `that look like global variables, but
these are simply shorthand ways of referring to some commonly used
property of a library object). Being local in *scope* means that the
variable is available only to code within the same block (usually the
same method or function) as that in which the variable is defined; being
temporary in *duration* means that the variable only retains its value
for that particular invocation of the function or method. A variable
must be declared with the keyword `local` in the
block in which it appears, and may optionally be initialized in the same
statement in which it is initialized, e.g.:

```
  local x;  local numberOfCabbageEaters = 12;
```
### d. Referring to Methods and Properties

Variables, and indeed statements, are generally used within object
methods and global functions. But how are the functions and methods used
in turn? Often the library will expect a method to be defined on an
object you create and will invoke (call) it under the appropriate
circumstances; moreover, you can often use a method in place of a
property when you want to do something more complex than you can do with
a property; then, when the library tries to (say) display the value of
the `name` property it may quite happily use the
value returned by the `name` method instead. If
you've defined a method `myMethod` on an object
`myObj` you can invoke it from anywhere in your
code by writing the statement:

```
  myObj.myMethod;
```
  or   

```
  myObj.myMethod(); 
```
Similarly, you can reference the value of the
`myProperty` property of
`myObj` with
`myObj.myProperty`. Note the use of the dot (.)
notation here, since you will be using it a lot.  
  
In TADS 2 (or Inform 6), if you wanted to reference
`myObj.myMethod()` or
`myObj.myProperty` from another property or
method of `myObj` you would typically write
`self.myMethod()` or
`self.myProperty(), `where
`self` is a special keyword meaning "the current
object". There are still situations where you may need to use the
`self` keyword in TADS 3 but this is no longer
one of them; instead, in this situation, you could write simply,
`myMethod()` or
`myProperty`. To make this clearer, we'll give
an example:  

```
myObj: Thing
    name = 'boring object'
    changeName
    {
        name = 'very boring object';
    }
    myName = ('my ' + name);myOtherObject: Thing
    name = 'exciting object'
    describeName
    {
        local dName = 'This is an ' + name + ', unlike ';

        myObj.changeName;

        dName += myObj.myName;

        say(dName);

        return dName;
    };
```
In this example, a call to
`myOtherObj.describeName` should result in the
display of the message "This is an exciting object, unlike my very
boring object"; moreover, if you wrote a statement such as
`msg = myOtherObj.describeName`, not only would
"This is an exciting object, unlike my very boring object" be displayed,
but the string 'This is an exciting object, unlike my very boring
object' would be stored in the variable `msg`.
This comes about because the last statement of
`describeName` tells the method to return a
value (in this case the value of the local variable
`dName`), and this value will be treated as the
value of the method if it is used in an expression.

### e. Functions and Methods

Functions may return values in similar ways. The purpose of using a
function is typically to perform an often-used calculation that is not
related to any particular object, e.g.:

```
function salesTax(salesValue, taxPercent){
return (salesValue * taxPercent)/100;}
```
The `function` keyword used here is optional but
perhaps makes the code clearer, although it is more usual to omit it in
TADS 3 code. Note that in this example, unless we're using the
`BigNumber` class,
`salesValue` and
`taxPercent` must both be integers (e.g. 120
meaning, say, 120 pence or 120 cents, and 15 meaning 15%). More to the
point, note that `salesValue` and
`taxPercent` are the two formal parameters of
this function, which means that they're placeholders for whatever values
we want to pass to the function when we call it. So, for example, if
from somewhere in the program we called
`taxPennies = salesTax(120, 15);`
`taxPennies` would be assigned the value 18.
Methods may also take parameters, so for example we could define:

```
myObj: Thing
baseName = 'object'
myName (qualifier)
{
  return 'my ' + qualifier + ' ' + baseName;
};
```
Note the use of extra string spaces so that
`myObj.myName('boring')` returns 'my boring
object' rather than 'myboringobject'. Note also that we can also define
a method (or function) that takes no arguments by using an empty
argument list thus: (). So, for example, we could have defined:

```
myObj: Thing
    name = 'boring object'
    changeName()
    {

        name = 'very boring object';
    }
    myName = ('my ' + name);
```
And it would have meant precisely the same as the earlier definition
without the empty () after `changeName`. Which
you use is entirely up to you.

  

### f. Conditions - If Statements

Often one will want to use methods and functions to perform something a
bit more complex than we've shown here. One of the basic requirements of
any programming language is to be able to test for conditions and act
according to the results. For example, we might want
`myObj` to declare itself as either a boring
object or exciting object on the basis of a property used as a flag:

```
myObj : Thing   name   {
   if(exciting)

   return 'exciting object';
   else

   return 'boring object';   }
   exciting = nil
   myName = ('my ' + name);
```
The new construction introduced here means "if the condition in
parentheses following the keyword 'if' is true, carry out the statement
on the following line, otherwise carry out the statement following the
'else' keyword". TADS 3 defines two special values,
`true` and `nil `which
mean true and false (N.B., it's *very* easy, especially if you're used
to using another language, to type 'false' when you mean 'nil'; TADS 3
uses `nil` since it has other uses beyond
Boolean false). Since the property `exciting`
contains `nil`
`myObj.name` will return 'boring object'; if
`exciting` were later changed to
`true` (or to any non-zero number),
`myObj.name` would then return 'exciting
object'.

The condition in an `if` statement can be much
more elaborate than the name of a property that evaluates to
`nil` or `true`. For
example, suppose that instead of a boolean
(`nil` or `true`)
`exciting` property we defined a numeric
`excitement` property, with the rule that the
object only becomes exciting if its `excitement`
property exceeds 10. We should then have written the test as
`if(excitement \> 10)`. Alternatively, we might
have decided that the object value was only exciting if its excitement
value was exactly 123, in which case the condition would be written
`if(excitement == 123)`.

Note that this test for equality uses a *double equals sign* (==), and
must be written this way if this is what you mean. It's very easy to
write something like `if(excitement = 123)` by
mistake, in which case the compiler will give you a warning, because it
almost certainly isn't what you meant.

You may also want to combine tests using the logical operators *and*,
*or* and *not*, which in TADS 3 are defined with
`&&`, `\|\|` and
`!` respectively. For example if we have defined
a `boring` property on
`myObj`, we might have wanted the exciting test
to be:


```
if((!boring && excitement > 12) || excitement == 123)
```
This would mean, if `excitement` is equal to 123
or if it's greater than 12 and `boring` is not
true. Note the use of grouping parentheses to resolve any potential
ambiguities in the order in which these conditions are evaluated.

There is no need to use the `else` clause at
all, if you don't need it. But what happens if you need more than one
statement to be executed if something is true, and/or a whole set of
statements to be performed otherwise? In this case, we'd use braces
`{}` to group the statements, for example:

```
if((!boring && excitement > 12) || excitement == 123){
myIndefiniteArticle = 'an';
return 'exciting object';}else{
myIndefiniteArticle = 'a';
return 'boring object';}
```
It's quite common to want to assign one value to something if a
condition holds, and another otherwise, for example:

```
if(length > 5)
size = 'big';else
size = 'small';
```
This is kind of thing is so common that TADS 3 provides a short-cut way
of doing it. Instead of writing the above, you could write simply:

```
size = (length > 5) ? 'big' : 'small';
```
More generally this ternary operator works as follows:

```
cond ? true-value  : false-value
```
If `cond` is true this evaluates to
`true-value`, otherwise it evaluates to
`false-value`.

  

### g. The Switch Statement

It is possible to nest `if… else…` statements to
any required depth, so that one could, for example, have the following:

```
if(excitement == 0)
    name = 'very boring object';else if (excitement == 1)
    name = 'boring object';else if (excitement == 2)
    name = 'moderately boring object';else if (excitement < 5)
    name = 'vaguely boring object'else if(excitement < 10)
    name = 'not too boring object';else
    name = 'exciting object'
    ;
```
But the trouble with this is that it can quickly become confusing to
keep track of which `else` is meant to match
which `if` (this can be alleviated by using
braces to group the code the way you want, though that can lead to
messy-looking and verbose code). In some cases this may be the only way
to achieve the effect you want, but in this particular case, where we
are simply testing the value of a single variable, it is often easier to
use a *switch* statement; in this case the equivalent switch statement
would be:

```
switch(excitement)
    {case 0: name = 'very boring object'
     break
    case 1: name = 'boring object'
     break
    case 2: name = 'moderately boring object'
     break
    case 3:case 4: name = 'vaguely boring object'
     break
    case 5:case 6:case 7:case 8:case 9: name = 'not too boring object'
     break
    default: name = 'exciting object'
}
```
Note the use of the `break;` statements to stop
the test 'falling through' to other matches. Since we want the test to
fall through if `excitement` is 3, 5, 6, 7 or 8
we do not define a `break` statement for those
cases. So, for example, if `excitement` is 6 the
`switch` statement will execute the statements
for all the cases following `case 6` until it
encounters a `break`; this has the desired
effect of setting name to 'not too boring object'. The
`default` case defines what happens if none of
the preceding cases is matched.

The `switch() `statement is not restricted to
matching numbers, it can also match (single-quoted) strings, objects,
lists, Boolean values (true or nil) or enumerators (which we'll meet
again below). Again, the `case` value need not
be expressed as a constant of one of these types, so long as it is an
expression that evaluates to a constant value of one of these types.

  

### h. Properties Containing Objects and Lists

This brings us to the final introductory point: so far our examples of
properties and variables have all been of ones that contain either
numbers, strings, or Boolean values (true or nil); but properties and
variables can also contain other data types such as objects, lists,
enumerators and function pointers, and although we shall be meeting few
enumerators and function pointers in what follows, properties containing
objects and lists will be rather more common. The concept of a property
or variable containing an object is really no more complicated than that
of having them refer to strings or numbers. For example if we had two
objects, `myObj1` and
`myObj2`, we could, say, use the assignment
statement `obj = myObj2` and then use obj to
refer to `myObj2`. This may seem a bit pointless
at first, but it could be useful if we didn't know in advance which
object obj was going to be, and we wanted to write general code that
could work equally well with a number of objects. To take a trivial
example, suppose we wrote the following function:

```
function showName(obj){
    say(obj.name);
    }
```
This definition would then allow us to call
`showName(myObj1)` to display
`myObj1.name`,
`showName(myObj2)` to display
`myObj2.name` and so on. This example is so
trivial that it may still seem pointless, but even in a slightly more
complex case the value may start to become apparent:

```
function talkAbout(obj){
    local msg = 'My '
    msg += obj.name
    msg += ' is really very '
    if(obj.excitement < 10)       msg += 'dull.'
    else      msg += 'interesting.'
    say(msg)
}
```
Perhaps an even more common use of assigning objects to properties is
where other objects need to keep track of them. For example, if I have
an object (say 'ball') inside another object ('bag'), then the
`location` property of the ball can keep track
of where the ball is by being set to the bag object. If the ball is then
moved to the tennis court the `location`
property of the ball object could be set to the
`tennisCourt` object to keep track of it.

At first sight, it may seem that doing it the other way round wouldn't
work so well, since, say, using `bag.contents`
to keep track of what's in the bag would only allow one object to be in
the bag at the time. In fact this is an example of where one would use a
`list` value. A list is basically a list of
items (of any of the valid types, including other lists) enclosed in
square brackets and separated by commas, e.g.:


bag.contents = [ball, coin, banana, horseshoe]

To find out whether something's in a list one can use its
`indexOf` method; e.g.
`bag.contents.indexOf(ball)` would be 1;
`bag.contents.indexOf(banana)` would be 3, and
`bag.contents.indexOf(elixirOfLife) `would be
nil.


### i. Nested Objects

The previous section only scratches the surface of TADS 3 lists; to find
out more, look up lists in the *System Manual* that comes with the TADS
3 Author's Kit. We'll conclude with a rather different kind of list to
illustrate one last point, the use of nested objects in TADS 3.

Suppose we have a ball that appears to change colour randomly when we
look at it. We might define it like this:
```
ball: Thing 'ball' 'ball'
"When you look at it, it looks <<colour>>. "
 colour  { return colourList.getNextValue(); };colourList: ShuffledList
valueList = ['red', 'green', 'blue', 'violet', 'white',

'black', 'orange', 'indigo'];
```
The purpose of a `ShuffledList` is to return one
of its values randomly, without repeating a value until it has used them
all. It's a bit like shuffling a pack of cards, then taking one in turn
until all have been used, then reshuffling the pack and starting again.
But in order to function this way a
`ShuffledList` needs to be a separate object,
not only with a list of values (its `valueList`
property) but also a method (`getNextValue`)
that returns the next shuffled value. In order to define the
varicoloured ball object, therefore, we also need to define a separate
`colourList` object. While this is far from
catastrophic, it can be a little inconvenient, since code that helps to
define the behaviour of one object is spread into another; the two
objects might in time get separated in your code, or the presence of the
second object might mess up the containment hierarchy in some way. This
is where a nested object could come in handy.

As an intermediary step, note that a property can contain a reference to
an object; for example, we could have written:

```
ball: Thing 'ball' 'ball'
"When you look at it, it looks <<colour>>. "
 colour  { return colourList.getNextValue(); }
 colourList = colourListObj;colourListObj: ShuffledList
valueList = ['red', 'green', 'blue', 'violet', 'white',

'black', 'orange', 'indigo'];
```
And this would work just the same (although it appears a little more
verbose). The `colour` method now refers to the
`colourList` property which in turn refers to
the `colourListObj` object. The way we could
make this more compact is to turn the
`colourListObj` object into an anonymous object
defined directly on the `colourList` property:

```
ball: Thing 'ball' 'ball'
    "When you look at it, it looks <<colour>>. "
     colour  { return colourList.getNextValue(); }
     colourList: ShuffledList
     {
        valueList = ['red', 'green', 'blue', 'violet', 'white',

    'black', 'orange', 'indigo']
     };
```
Not only is this more concise, but it has the advantage of keeping all
the code together in one object. The
`ShuffledList` has now become an *anonymous
nested object*. All nested objects are anonymous, because they have no
name: `colourList` is not the name of the
`ShuffledList` object here, it's the name of a
property of `ball`; the
`ShuffledList` can nevertheless be referred to
as `ball.colourList`, since it is the value of
`ball`'s `colourList`
property. Note that while an ordinary object definition may either be
terminated with a semicolon or enclosed in braces, the braces
(`{}`) form must *always* be used with a nested
object, as here.  
  
This may seem a bit strange and convoluted at first, but you'll find the
use of anonymous nested objects is a powerful and common feature of TADS
3 programming, so it will be as well to become familiar with it.  
     
------------------------------------------------------------------------

*Getting Started in TADS 3*  
[\[Main\]](index.html)  
*[\[Previous\]](creatingyourfirsttads3project.html)
  [\[Next\]](furtherprogramming.html)*

</div>
