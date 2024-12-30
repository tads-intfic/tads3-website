::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Reviewing the
Basics](reviewing.htm){.nav} \> Things in Quotes\
[[*Prev:* Inheritance, Modification and Overriding](inherit.htm){.nav}
    [*Next:* Heidi Revisited](revisit.htm){.nav}     ]{.navnp}
:::

::: main
# Things in Quotes

## Single and Double-Quoted Strings

There\'s just one more topic we need to consider before we return to
*The Adventures of Heidi*. Another name for a work of Interactive
Fiction is a Text Adventure, and, as the name implies, whether or not a
particular work of Interactive Fiction really constitutes an adventure,
it will certainly involve a lot of text. In the discussion so far we
have seen quite a lot of text included in code, some of it between
single quote marks \'like this\', and some of it between double quote
marks \"like this\". In TADS 3 (and hence in adv3Lite) the distinction
between the two is important, and to distinguish between the two they
are referred to respectively as single-quoted strings and double-quoted
strings:

::: code
    'This is a single-quoted string.';
    "This is a double-quoted string.";
:::

The basic distinction between the two is relatively straightforward: a
single-quoted string is a piece of textual data that can be assigned to
a property or variable, passed as the argument to a function or method,
and manipulated in all sorts of interesting ways (such as extracting
parts of the string, or changing parts of it, or changing its case, or
searching it for the presence of a sub-string), whereas a double-quoted
string is simply an instruction to the game to display the text it
contains (as we saw in the discussion of the [double-quoted string
statement](methods.htm#dquote) above).

This apparently simple distinction is, however, apparently blurred by
the fact that some object properties are defined as single-quoted
strings and others as double-quoted strings, as, for example, in the
typical definition of a Thing where the [vocab]{.code} property is
single-quoted string and the [desc]{.code} property a double-quoted
string:

::: code
    + bird: Thing 'baby bird;;nestling'
        "Too young to fly, the nestling tweets helplessly. "
        
        bulk = 1
    ;
:::

The distinction isn\'t too badly blurred here. The [vocab]{.code}
property (\'baby bird;;nestling\', via the template) is one that the
library has to do quite a bit of further manipulation with in order to
extract the name property and the nouns and adjectives that can be used
to refer to the bird. On the other hand the desc property (\"Too young
to fly, the nestling tweets helplessly. \", via the template) is
something that\'s displayed when the bird is examined. Indeed, a
double-quoted string property is always in effect an instruction to
display some text, almost (though not quite) equivalent to a method that
displays some text. Indeed, it would have been perfectly legal (though
in this case pointless) to define the bird object thus:

::: code
    + bird: Thing 'baby bird;;nestling'
        desc() { "Too young to fly, the nestling tweets helplessly. "; }
        
        bulk = 1
    ;
:::

In fact, wherever the library requires a double-quoted string property,
it\'s always legal (and sometimes useful) to supply a method that
displays some text instead. It becomes useful when the text we want to
display varies according to complex conditions (we\'ll see an example
below) so it\'s convenient to write a method with lots of [if]{.code}
statements rather than trying to cram all the possibilities into a
double-quoted string with lots of embedded expressions. From the point
of view of the player, the two definitions of the bird object will
appear to act exactly the same.

Thus, as a first approximation, we can say that a double-quoted string
property is really more like a short-hand method than a piece of data
(just as a double-quoted string statement is a convenient means to
display some text rather than an expression that can be assigned to
anything), and as a first approximation that\'s probably not a bad way
to think about it, although as we shall see below there are some subtle
differences between a double-quoted string property and a method that
uses precisely the same double-quoted string to display some text;
internally to the compiler they are two different things, and in certain
contexts that can affect what you can do with them.

For the sake of completeness we should mention at this point that it\'s
also legal to use a method that returns a single-quoted string instead
of a simple single-quoted string; the method and the single-quoted
string remain rather different kinds of programming entity nevertheless.

When you first encounter adv3Lite (or TADS 3) it may at first sight seem
a bit arbitrary which text-containing properties are single-quoted
strings and which are double-quoted. As a rough rule of thumb,
double-quoted string properties tend to be complete sentences or even
longer pieces of text that will always be displayed just as they are,
whereas single-quoted strings are typically shorter sentence fragments,
or just names or adjectives or verbs that will be used to build up
complete sentences for display and which may be manipulated further in
different ways. But there are a whole lot of properties ending in msg
(such as [cannotTakeMsg]{.code}) which for reasons that need not detain
us right now are defined as single-quoted strings yet consist of
complete sentences. A second rule of thumb is that properties whose name
ends in desc (such as [desc]{.code}, [specialDesc]{.code}, and
[initSpecialDesc]{.code}) tend to be double-quoted strings (because they
contain complete descriptions, but here again there are some exceptions:
[stateDesc]{.code} is a single-quoted string (because it\'s only ever
meant to be part of a description and it can easily change), while
[readDesc]{.code}, [smellDesc]{.code}, [tasteDesc]{.code},
[feelDesc]{.code} and [listenDesc]{.code} are allowed to be either
single-quoted or double-quoted strings (so that they\'ll work okay
whichever way you define them). So although these rules of thumb may
have some use, in the end you just have to get used to knowing which
kind of string is used for which property. (Actually, the library
attempts to be as fault-tolerant as possible over whether you define
certain properties as single-quoted or double-quoted string, but you are
urged not to rely on this, since some properties have to be one or the
other).

One important thing to realize is that though a property definition may
superficially resemble an assignment statement, the two are quite
different things. That means that while the following definition is
legal:

::: code
    + bird: Thing 'baby bird;;nestling'
        desc = "Too young to fly, the nestling tweets helplessly. "   
    ;
:::

The following statement is not:

::: code
    bird.desc = "The nestling looks calmer now. "; // DON'T DO THIS!
:::

You *cannot* assign a double-quoted string directly to a property or
variable (or pass it as a parameter), since a double-quoted string is
not a value or an expression, but an instruction to display some text.
(There is a way of indirectly assigning a double-quoted string value to
a property at run-time, which we\'ll mention briefly below). The normal
way to handle the kind of variation in a description (or other
double-quoted string property) is by including conditional statements
either in an embedded expression or a method:

::: code
    + bird: Thing 'baby bird;;nestling'
        "<<if isCalm>>The nestling looks calmer now<<else>>Too young to fly, the nestling tweets helplessly<<end>>. "   
        
        isCalm = nil
    ;
:::

Or:

::: code
    + bird: Thing 'baby bird;;nestling'
        desc()
        {
           if(isCalm)
              "The nestling looks calmer now. ";
           else
              "Too young to fly, the nestling tweets helplessly. ";
        }
        
        isCalm = nil
    ;
:::

In this relatively simple case, you\'d probably prefer the first way. In
a more complex case you might well prefer the second.

There is a way of sorts of assigning a new double-quoted string value to
a property. Just for the record, it looks like this:

::: code
    bird.setMethod(&desc, 'The nestling looks calmer now. ');
:::

Conversely, you can get at the current single-quoted string value of a
double-quoted string property with a statement like:

::: code
    local str = bird.getMethod(&desc);
:::

But note that this will only work as expected (a) if desc has been
defined as a double-quoted string and not as a method (this is one of
the subtle differences between the two) and (b) if the double-quoted
string contains no embedded expressions (otherwise it will be treated as
a method). These restrictions mean you have to be very careful about
using [getMethod()]{.code} to get at the single-quoted string equivalent
of a double-quoted string value, and you should probably avoid it (it\'s
not really what [getMethod()]{.code} is for). A more reliable way of
achieving the objective would be:

::: code
    local str = gOutStream.captureOutput({ : bird.desc });
:::

But that\'s using features way beyond anything we\'re likely to cover in
this tutorial. For now, therefore, I suggest you stick to using the
if-statement method (embedded or otherwise) for creating variable
descriptions.

## Further Reading

For the full story on strings, see the section on \"String Literals\" in
Part III of the *TADS 3 System Manual*. If you\'re at all unclear about
what we\'ve just covered, or you\'re left feeling you\'d like to go into
more detail straight away (we certainly didn\'t cover everything), I
suggest you take a look at it now. But if you\'re reasonably happy and
want to carry straight on to the next chapter, that\'s fine too; only do
take the trouble to see what the *System Manual* has to say about
strings at some point.

Incidentally we mentioned more than once that single-quoted strings are
data that can be manipulated, but beyond mentioning string concatenation
(with the + operator) in a previous part of this chapter, we haven\'t
gone into any detail how. When you\'re ready to find out, you\'ll find
most of the answers in the section on \"String\" in Part IV of the [TADS
3 System Manual](../sysman.htm), but that\'s something you can well
afford to leave for now.

\

## Afterword

This chapter has proved to be a bit more than a review of the concepts
introduced in the previous one. In the course of the review we have
taken the opportunity to introduce a number of new concepts and features
to round out the picture. If you\'ve mastered everything in this chapter
you\'re a long way towards acquiring the basic skill set you need to
write Interactive Fiction using adv3Lite. If you don\'t feel you\'ve
totally mastered it all yet, not to worry; in the chapters that follow
we\'ll be reinforcing what\'s been covered here as well as building on
it and extending on it to introduce other features of the TADS 3
language and the adv3Lite library you\'ll probably find useful in your
own work. Our next immediate task will be to revisit *The Adventures of
Heidi* and make some improvements.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Tutorial*\
[Table of Contents](toc.htm){.nav} \| [Reviewing the
Basics](reviewing.htm){.nav} \> Things in Quotes\
[[*Prev:* Inheritance, Modification and Overriding](inherit.htm){.nav}
    [*Next:* Heidi Revisited](revisit.htm){.nav}     ]{.navnp}
:::
