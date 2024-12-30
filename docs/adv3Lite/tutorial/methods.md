::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Reviewing the
Basics](reviewing.htm){.nav} \> Methods, Functions and Statements\
[[*Prev:* Object Containment](containment.htm){.nav}     [*Next:*
Inheritance, Modification and Overriding](inherit.htm){.nav}    
]{.navnp}
:::

::: main
# Methods, Functions and Statements

## Methods and Functions

Methods and functions are quite similar both in appearance and, if
you\'ll pardon the pun, function. Methods and functions are both
containers for blocks of code, that is, for a series of *statements*, or
instructions to the computer to carry out the commands the method or
function defines. The principal difference between them is that a method
belongs to an object, whereas a function is free-standing. For example,
in the Heidi example we developed in the previous chapter,
[afterAction()]{.code} was a method of the [branch]{.code} object, while
[finishGameMsg()]{.code} was a function defined in the adv3Lite library
(in fact, in this particular instance, precisely the same function is
defined in the adv3 library too).

The syntax for defining a function is:

::: syntax
    functionName ( [ paramName [ , paramName ... ]  ]  )
    {
       functionBody
    }
:::

This means that to define a function you start with the function name,
then put an opening parenthesis, then a list of parameters the function
takes, then a closing parenthesis, following which you write the body of
the function between opening and closing braces. To give a couple of
more concrete examples:

::: code
    sayHello()
    {
       "Hello World!";
    }

    double(x)
    {
       return x * 2;
    }
:::

The [sayHello()]{.code} function simply displays the text \"Hello
World!\" when it is invoked. The [double()]{.code} function accepts a
single number as a parameter and returns double that number. It could be
used like this:

::: code
      y = double(3);
:::

Which would result in y containing the value 6. (In this code fragment,
y is a variable; we\'ll explain variables in the next subsection).

The sayHello() example incidentally shows that if you want to define a
function (or method) that takes no parameters, you simply follow its
name with a pair of parentheses. A parameter is simply a temporary
storage area (just like a variable) that you can use to pass a value to
a function or method. In the [double()]{.code} example, calling
[double(3)]{.code} causes the x parameter to take the value 3, so that
when [double(3)]{.code} executes the statement [return x \* 2;]{.code}
it first multiplies 3 by 2 (since x now has the value 3) and then
returns the result (i.e. 6) to the caller.

Incidentally, you\'ll often come across *parameters* referred to as
*arguments*. Technically the two terms mean something slightly
different: parameters are what you define when you define the function
or method, arguments are what you pass when you call the function or
method, but for most practical purposes this is a distinction that
seldom matters, and if you refer to both parameters and arguments as
\'arguments\' you probably won\'t get into much trouble!

A method is defined almost exactly like a function, except that its
definition occurs within the body of an object or class. For example:

::: code
    class Greeter: Thing
       greet()
       {
          "<<name>> says hello! ";
       }
    ;

    bob: Greeter 'Bob; tall; man; him'
      "He's a very tall man. "
      
      doSum(x, y)
      {
         "<q>Let me see,</q> says Bob. <q>By my reckoning,<<x>> plus <<y>> is
           <<x + y>>. ";
      }
    ;
:::

In this somewhat contrived example, the [Greeter]{.code} class defines a
[greet()]{.code} method, which the [bob]{.code} object inherits (since
it\'s of class [Greeter]{.code}). Calling [bob.greet()]{.code} would
result in the display of \"Bob says hello!\" while calling
[bob.doSum(10, 5)]{.code} would result in the display of \'\"Let me
see,\" says Bob. \"By my reckoning 10 plus 5 is 15.\"\'

In this example bob gets its name property via the vocab property we
defined using the Thing template (since Greeter inherits from Thing, we
can still use the Thing template with it). This incidentally illustrates
another important difference between a method and a function. A method
can refer to other properties and methods of the object on which it\'s
defined. A function can\'t do this because it isn\'t part of any object.
Likewise a method can use the special keyword [self]{.code} to refer to
the object on which it\'s defined; a function can\'t do this since there
would be no object for [self]{.code} to refer to, a function not being
part of any object.

By the way, these examples have all been of very simple methods and
functions with a single line of code (in fact, a single statement). In
fact a function or method can contain as many statements as you like
(although if a function or method starts to grow too big that may be a
sign that it should be broken up into a number of functions or methods).
We have simply kept these examples as simple as possible to illustrate
the basic principles of defining functions and methods.

## [Variables]{#variables}

A variable is simply a temporary container for a piece of information,
such as a number, a piece of text, a list, a reference to an object, or
a special value like [true]{.code} or [nil]{.code}. In TADS 3 all
variables are *local*, which means that they can only exist within a
function or method, and only keep their value for as long as that
function or method is being executed. In fact, the lifetime of a TADS 3
variable may be even less than that, for a variable only persists for as
long as the *block* in which it is defined is being executed, where a
block is any set of statements enclosed in a matching pair of opening
and closing braces ([{}]{.code}). A method or function is simply the
outermost possible kind of enclosing block.

A variable must be *declared* before it can be used. A variable is
declared using the keyword [local]{.code}, followed by one or more
variable names (separated by commas, if there\'s more than one). A
variable may optionally be *initialized* at the same time it is declared
by following it with an equals sign followed by whatever value you wish
to give it. If a variable is declared but not initialized it will have
the value [nil]{.code} (i.e. nothing at all) until it is assigned a
value. The following are all examples of legal variable declarations:

::: code
      local a;
      local numberOfEggs, weightOfFlour, quantityOfButter;
      local price = 10, weight, title = 'cake recipe';
:::

On the whole it\'s best to give your variables meaningful names as in
the second and third examples above, since this will make your code
easier to read (and maintain). For some purposes (such as a loop
counter), a brief single-letter variable name may suffice, however. A
variable name should be unique in the block of code in which it occurs,
and you should try to avoid using the name of an object, method,
function or other identifier as a variable name since this is likely to
confuse the compiler (as well as you) and would probably lead to
compilation errors.

On the other hand, it\'s quite okay to use the same variable name in
different functions and methods. If you define a local variable called
[title]{.code} in a function called [showName()]{.code} and another
local variable called [title]{.code} in a method called
[mixCake()]{.code} the two [title]{.code} variables will have no
relation to each other at all, and no confusion will occur.

As its name suggests, a variable is something whose value can vary as
your code is executed. Consider the following code snippet:

::: code
    someFunction()
    {
       local myVar = 2;
       myVar = myVar + 2;  // now myVar is 4
       myVar = 'Hello';    // now myVar is 'Hello'
       myVar += ' World!'; // now myVar is 'Hello World!'   
    }
:::

## Statements

With one or two exceptions, we were able to write almost the whole of
*The Adventures of Heidi* in the previous chapter using purely
declarative programming, that is by defining objects and declaring the
values of certain of their properties. Although adv3Lite tries to let
you write your game as far as possible this way, as we\'ve already seen
in the code for ending the Heidi game, you can\'t do everything that
way, and the more original, interesting and sophisticated you want your
game to be, the more you\'ll need to supplement your declarative code
with *procedural code*, that is code that consists of a set of
instructions (i.e. a procedure) telling your game what to do under
certain circumstances. Such code is made up of individual *statements*.

A *statement* is simply an instruction to your game to carry out a
particular task, expressed in the TADS 3 programming language. With one
or two exceptions that need not concern us here, statements can only
occur within a function or method (one obvious exception would be
statements that define (the header of a) function or method). In this
section, however, we shall be entirely concerned with *procedural*
statements, that is the kind of statements that can be put inside a
method or function to make it carry out a particular procedure.

The kinds of procedural statements you\'ll most commonly used are:

-   declarations
-   assignment statements
-   method and function calls
-   flow control statements
-   double-quoted string statements

As we\'ll see, some of these kinds can be combined into a single
statement, but for convenience of presentation we\'ll take each kind in
turn. But one feature all procedural statements have in common is that
they must be terminated with a semicolon.

### Declarations

A declaration statement is one that declares a new local
[variable](#variables), as we have already seen above. The following
statement declares the local variable [myNewVar]{.code}:

::: code
    local myNewVar;
:::

As already noted, a local variable must be declared before it can be
used, but a variable can be declared and assigned an initial value in
the same statement, for example:

::: code
    local myNewVar = 10;
    local someonesName = 'John Doe';
    local obj = bird;
    local bool = true;
:::

The above example could alternatively be written all as one statement:

::: code
    local myNewVar = 10, someonesName = 'John Doe', obj = bird, bool = true;
:::

### Assignment Statments

An assignment statement assigns the value of an expression to a local
variable or object property. It has the form:

      lvalue = expression;

Where *lvalue* is the property or variable to which the value is being
assigned, and *expression* is any valid TADS 3 expression. Examples of
assignment statements include:

::: code
      x = 2;
      x = x + 3;
      obj = bird;
      obj.name = 'parrot';
      str = 'Hello' + ' World';
      val = double(x + 1) / 3 + 18;  // val is now 22
:::

An *expression* can be any legal combination of variables, property
names, function and/or method calls, and operators. *Operators* include
the common arithmetic operators [+ - / \*]{.code} (the last two of which
are used for division and multiplication), the string concatenation
operator [+]{.code}, the logical operators [&& \|\| ]{.code}and
[!]{.code} (and, or and not), and the comparison operators [== != \> \<
\>=]{.code} and [\<=]{.code} (equals, not equals, less than, greater
than, greater than or equal to, and less than or equal to).

NOTE. Just as in C (whose syntax TADS 3 borrows to a large extent) be
very careful not to confuse the assignment operator [=]{.code} with the
test for equality operator [==]{.code}. Consider the following:

::: code
      a = 3; // Assigns the value 3 to a.
      a == 3; // Tests whether a is 3 (and here evaluates to true), but doesn't do anything.
      
      if(a = 4)   // legal but doesn't do what you probably expect 
         say ('a is 4!')
:::

The statement [a == 3]{.code} is a legal statement because a statement
can consist just of an expression, even if the expression doesn\'t do
anything as here. The test [if(a = 4)]{.code} is legal, because an
assignment like [a = 4]{.code} is also an expression (it evaluates to
4). But since 4 is considered a true value (being neither zero nor
[nil]{.code}), the test will be passed whatever the initial value of a,
causing \'a is 4!\' to be displayed no matter what.

There are also various short form assignment statements. Because it\'s
so common to write statements like:

::: code
      count = count + 2;
:::

This can be abbreviated to:

::: code
      count += 2;
:::

And so on with similar operators like [-= \*=]{.code} and [/=]{.code}.
Because adding or subtracting 1 from a number is so common, this can be
abbreviated even further:

::: code
      
      count++; // equivalent to count += 1;
      count--; // equivalent to count -= 1;  
      ++count; // equivalent to count += 1;
      --count; // equivalent to count -= 1;
:::

The difference between [++count]{.code} and [count++]{.code} is simply
the point at which the incrementing of [count]{.code} occurs. This can
be illustrated briefly like this:

::: code
      count = 0;
      a = count++; // a is now 0 and count is now 1, because count is incremented after its value is assigned to a
      b = ++count; // b and count are now both 2, because count is incremented before its value is assigned to b
:::

### Method and Function Calls

As we have seen, an expression by itself can constitute a perfectly
valid statement. Often it would be a pointless statement; the expression
[count + 1;]{.code} is valid as a statement, but it doesn\'t actually do
anything (in particular, it doesn\'t increase the value of count by 1).
But expressions that consist of method or function calls are often
useful as statements, because of their so-called side-effects.
\"Side-effect\" is actually a slightly odd term here, because what we
mean is what the method or function actually does. Examples we have
actually seen include:

::: code
      finishGameMsg(ftVictory, [finishOptionUndo]); // ends the game
      bird.moveInto(nest); // moves the bird into the nest
:::

As you come to write more TADS 3 code (whether in adv3Lite or adv3)
you\'ll probably find yourself using this kind of statement a lot.

### Flow Control Statements

The statements we have discussed so far allow you to write methods and
functions that do things, but they don\'t give you much flexibility or
control. The power of any computer language comes from its ability to
take different routes through the code depending on circumstances, and
that\'s every bit as important when writing Interactive Fiction as it is
for other kinds of application.

One of the most common --- and most important --- statements is the
[if]{.code} statement. We have already met it (in the
[afterAction()]{.code} method of the [branch]{.code} object) in the
form:

::: syntax
    if ( conditionExpression )
      thenPart
:::

Where [conditionExpression]{.synPar} is an expression that typically
evaluates to either true or nil and [thenPart]{.synPar} is either a
single statement or a block (enclosed by opening and closing braces)
containing multiple statements. For example:

::: code
    + branch: Thing 'wide firm bough; flat; branch'
        "It's flat enough to support a small object. "
        
        iFixed = true
        isListed = true
        contType = On
        
        afterAction()
        {
            if(nest.isIn(self))
                finishGameMsg(ftVictory, [finishOptionUndo]);
        }
    ;
:::

There\'s also a second form of the [if]{.code} statement that looks like
this:

::: syntax
    if ( conditionExpression )
      thenPart
    else
      elsePart 
:::

In this form of the if statement, both [thenPart]{.synPar} and
[elsePart]{.synPar} may be either a single statement or a block of
statements. If [conditionExpression]{.synPar} evaluates to anything but
[nil]{.code} or [0]{.code}, then [thenPart]{.synPar} is executed, but if
[conditionExpression]{.synPar} does evaluate to either [nil]{.code} or
[0]{.code} then [elsePart]{.synPar} is executed. For example;

::: code
     if(obj.weight > 50)
     {
        "You can't budge it. ";
     }
     else
     {
        obj.moveInto(crevasse);
        "You push <<obj.theName>> over the edge, and it tumbles away out of sight. ";
     }
     
:::

In this example, if obj had a weight of 51, say, then the player would
see the \"You can\'t budge it\" message, but if it had a weight of 50,
obj would be moved into the crevasse and the player would see the
message about it tumbling out of sight.

Another common flow-control statement is the [return]{.code} statement,
which terminates the execution of a function or method. This has two
forms:

     return;
     return expression;
     

The first form simply terminates the function or method. The second
terminates it and returns the value of [expression]{.synPar} to the
caller. For example:

::: code
     
     absolute(x)
     {
        if(x < 0)
           return -x;
           
        return x;
     }
     
     sayDivide(x, y)
     {
        if(y == 0)
        {
           "You can't divide by zero. ";
           return;
        }
        
        "<<x>> divided by <<y>> is <<x/y>>. ";
        return;
     }
     
     ...
     
       a = absolute(-40) // a is now 40
       a = sayDivide(a, 20) // a is now nil
     
:::

In the second case, although the player would see the message \"40
divided by 20 is 2\", since the function returns no value, [a]{.code}
will end up as [nil]{.code}.

The third common type of flow-control statement is the loop statement,
of which TADS 3 provides several. The most versatile (and hence common)
of these is the [for ]{.code}statement, which can take several forms:

::: syntax
    for ( [ initializer ]  ; [ condition ]  ; [ updater ]  )
      loopBody
:::

The [initializer]{.synPar} is either an ordinary expression, or a list
of local variable declarations, or a mix of both:

::: syntax
    ( expression | local varName = expression )  [ , ... ] 
:::

An example of this kind of for loop would be:

::: code
      local count = 0;
      for(local i = 1; i <= 10; i++)
         count += i;  
     
:::

This would sum the numbers from 1 to 10 and store the total (55) in
[count]{.code}.

The second form of the for loop is:

::: syntax
    for ( [ local ]  loopVar in expression )
       loopBody
:::

In this form of the for loop, [expression]{.synPar} would typically be a
list (or an expression that evaluates to a list). For example, to
calculate the total bulk of the items carried by Heidi (perhaps in a
game where we didn\'t restrict her carrying capacity quite so much) we
might use:

::: code
    local totalBulk = 0;
    for(local item in heidi.contents)
       totalBulk += item.bulk;
:::

The third form of the for loop is:

::: syntax
    for ( [ local ]  loopVar in fromExpr .. toExpr [ step stepExpr ]  )
       loopBody
:::

Where *fromExpr*, *toExpr*, and the optional *stepExpr* are expressions
that evaluate to integer values. If there\'s no [step]{.code} clause,
the default step value is 1. With this form of the loop the first
example (summing the numbers from 1 to 10) could have been written as:

::: code
    local count = 0;
    for(local i in 1..10)
      count += i;
     
:::

As an added bonus, we can combine these different forms of for loop into
a single statement. For example, the following could be used to display
an enumerated list of Heidi\'s possessions:

::: code
    "Heidi is holding:\n";

    for(local item in heidi.contents, local i = 1 ;; i++)
       "<<i>>. <<item.aName>>\n";
     
:::

These are not the only kind of loop (and other flow-control) statements
that TADS 3 provides, but they are the ones that are most commonly used.
We\'ll explain any others that arise if and when we come to them.

### [Double-Quoted String Statements]{#dquote}

Although we\'ve already used several examples of it, we should complete
this review of statement types by mentioning the double-quoted string
statement. This is simply an instruction to display some text to the
player, and takes the form of placing the text between double quote
marks, and ending the statement with a semicolon:

::: code
     
    "This text will be displayed to the player. ";
:::

The same result can be achieved via a function call:

::: code
    say('This text will be displayed to the player. ');
:::

But the double-quoted string statement form is often more convenient.
Note that in this statement the text to be displayed can contain
embedded expressions, that is expressions enclosed in double
angle-brackets \<\<\>\>. So for example we could write:

::: code
    "Heidi is carrying <<heidi.contents.length>> things right now. ";
:::

The above example won\'t read too well if Heidi is carrying just one
thing, and may not be ideal if she is completely empty handed, but we
can also use embedded expressions to change what\'s displayed according
to various conditions, for example:

::: code
    local numItems = heidi.contents.length;
    "Heidi is <<if numItems == 0>> empty-handed<<else if numItems == 1>>carrying just one thing<<else>> carrying <<numItems>> things<<end>>. ";
:::

Embedded expressions can also be used to vary what\'s displayed either
randomly or sequentially, for example:

::: code
    "Heidi is very<<one of>>sad <<or>>happy <<or>>energetic <<or>>tired <<shuffled>> today. ";
    "Heidi is very<<one of>>sad <<or>>happy <<or>>energetic <<or>>tired <<stopping>> today. "
:::

The first statement will run through \'sad\', \'happy\', \'energetic\'
and \'tired\' in random order, then shuffle the order and repeat through
again in the new order and so on. The second statement will run through
\'sad\', \'happy\', \'energetic\' and \'tired\' in that order and then
keep repeating \'tired\'. For a full list of the embedded expressions
you can use, see the section on \"String Literals\" in Part III of the
*TADS 3 System Manual*.

## Further Reading

We have covered a lot of ground in rather a compressed manner in this
section. Don\'t worry too much if it doesn\'t all make perfect sense
yet, we\'ll be explaining many of the new features again when we use
them in the games we\'ll be looking at. To get the full story on the
material we have just sketched above, see the section on \"Procedural
Code\" in Part III of the *TADS 3 System Manual*. You might also find it
helpful to look at the sections on \"Fundamental Datatypes\" and
\"Expressions and Operators\" in the same part of the *System Manual*.
If you\'re at all unsure about the material we\'ve just covered, or
you\'re interested in going into more detail to get the full picture,
now might be a good time to read these three sections. On the other
hand, if you\'re comfortable with what we\'ve just covered in this
section and would like to carry on reading the next straight away,
that\'s fine too, but I would still recommend that you read those three
sections of the [TADS 3 System Manual](../sysman.htm) sooner or later.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Tutorial*\
[Table of Contents](toc.htm){.nav} \| [Reviewing the
Basics](reviewing.htm){.nav} \> Methods, Functions and Statements\
[[*Prev:* Object Containment](containment.htm){.nav}     [*Next:*
Inheritance, Modification and Overriding](inherit.htm){.nav}    
]{.navnp}
:::
