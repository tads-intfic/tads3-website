---
layout: docs
---


<img src="topbar.jpg" data-border="0" />
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="builtins.html" class="nav">The Intrinsics</a> \> tads-gen
Function Set  
<span class="navnp"><a href="t3vm.html" class="nav"><em>Prev:</em> t3vm Function Set</a>
   
<a href="regex.html" class="nav"><em>Next:</em> Regular Expressions</a>
    </span>
# tads-gen Function Set

The tads-gen function set provides general utility and data manipulation
functions. These functions have no user interface component.

To use the tads-gen function set in a program, you should
`\#include` either
`\<tadsgen.h\>` or
`\<tads.h\>` (the latter includes both
`\<tadsio.h\>` and
`\<tadsgen.h\>`, for the full set of TADS
intrinsics). If you're using the adv3 library, you can simply
`\#include \<adv3.h\>`, since that automatically
incluedes the basic system headers.

## tads-gen functions

<span id="abs"></span>

`abs(*val*)`



Returns the absolute value of the given number. *val* can be an integer
or a BigNumber value; the result has the same type as *val*. If *val* is
positive or zero, the result is *val*; if *val* is negative, the result
is -*val*. For example, `abs(-3)` returns 3.



<span id="concat"></span>

`concat(...)`



Returns a string with the concatenation of the argument values, in the
order given. The arguments can be strings, or any other types that can
be converted to strings. If there are no arguments, the result is an
empty string.

Non-string values are converted to strings automatically. The automatic
conversion rules are similar to [toString](#toString), except that
`nil` values are treated as empty strings.

This function is essentially the same as concatenating the values with
the `+` operator, but it's more efficient when
combining three or more values. The `+` operator
is applied successively to one pair of values at a time, so it has to
create an intermediate result string at each step, and copy that
intermediate result at the next step; the function, in contrast, creates
a single result string for the entire list and only copies each input
string once.



<span id="dataType"></span>

`dataType(*val*)`



Returns the datatype of the given value. The return value is one of the
`TypeXxx` values (see the section on
[reflection](reflect.html)).



<span id="firstObj"></span>

`firstObj(*cls*?, *flags*?)`



Returns the first object of class *cls*, or the first object in the
entire program if *cls* is not specified. This is used to start
iterating over the set of all instances of a given class; use
[`nextObj()`](#nextObj) to continue the
iteration. The order in which objects are enumerated by
`firstObj()` and
`nextObj()` is arbitrary, but each object will
be returned exactly once. Returns `nil` if there
are no objects of the given class.

If the *flags* argument is specified, it can a combination (with the
`\|` operator) of the following bit flags:

- `ObjInstances` - the function returns only
  instances, not "class" objects. This is the default.
- `ObjClasses` - the function returns only
  objects originally defined as "class" objects.
- `ObjAll` - this is defined for convenience as
  `(ObjInstances \| ObjClasses)`.

If the *flags* argument is omitted, only instances are enumerated, as
though `ObjInstances` had been specified.

**A note on garbage collection:** Retrieving objects with
`firstObj()` and
`nextObj()` can have the sometimes surprising
effect of "resurrecting" objects that aren't reachable in any other way.
Normally, when the last reference to an object is removed, there's no
way for your program to ever reach that object again, so in effect the
object is dead - ready to be deleted by the [garbage collector](gc.html).
However, the collection process only happens intermittently; between
passes, dead objects linger in memory, waiting for the collector to
remove them. Between garbage collection passes, TADS doesn't know
whether an object is reachable or not, since it's fairly time-consuming
to figure this out - that's really the main work the garbage collector
does when it runs. As a result, `firstObj()` and
`nextObj()` simply visit every object currently
in memory, without trying to determine which are still reachable. If
it's important to your program's logic that you visit only reachable
objects, you can call
[`t3RunGC()`](t3vm.html#t3RunGC) just before
starting your
`firstObj()`-`nextObj()`
loop, to ensure that objects that are unreachable at the start of the
loop are removed from memory. Of course, even this won't absolutely
guarantee that `nextObj()` won't return any
unreachable objects, since more objects could become unreachable in the
course of the loop itself, but it will at least ensure that objects that
were already dead don't turn up.

Resurrecting an unreachable object with
`firstObj()` or
`nextObj()` is harmless as far as the TADS VM is
concerned, so if your program logic doesn't have a problem with finding
objects that you thought you had removed from the game, you don't have
to worry about calling `t3RunGC()` before object
loops. The garbage collector will only delete an object if it's
unreachable at the moment the collector runs; the fact that an object
was unreachable for some period in the past doesn't matter, and in fact
the garbage collector won't even know, because reachability is only
determined during the collection process. If you resurrect an object,
and then the collector runs while you're still holding a reference to
the resurrected object, the collector will see your reference and will
keep the object in memory just like any other reachable object.



<span id="getArg"></span>

`getArg(*idx*)`



Retrieve the given argument to the current function. The first argument
is at index 1. *idx* must be in the range 1 to
`argcount`, or the function throws a run-time
error ("bad value for built-in function").



<span id="getFuncParams"></span>

`getFuncParams(*funcptr*)`



Returns information on the parameters taken by the given function. The
return value is a list with three elements:

- `returnValue\[1\]` is the minimum number of
  arguments taken by the function;
- `returnValue\[2\]` is the number of additional
  optional arguments taken by the function;
- `returnValue\[3\]` is
  `true` if the function accepts any number of
  additional arguments (i.e., it's a "varargs" function),
  `nil` if not.

The second element gives the number of optional arguments; this element
is always zero, because there's no way for an ordinary function
(non-intrinsic) to specify optional arguments. This element is included
in the list specifically so that the list uses the same format as the
`Object.getPropParams()` method.

If the third element is `true`, it indicates
that the function was defined with the `...`
varying argument list notation.



<span id="getTime"></span>

`getTime(*timeType*?)`



Returns the current system time, according to *timeType*. If *timeType*
is not specified, `GetTimeDateAndTime` is the
default. The valid *timeType* values are:

- `GetTimeDateAndTime` - returns the current
  system date and time as a list with the following elements:
  `\[year, month, monthDay, weekDay, yearDay, hour,
  minute, second, timer\]`.

  - `year` is the AD year number (the full
    four-digit number)
  - `month` is the month number (January = 1,
    February = 2, etc.)
  - `monthDay` is the day of the month (on March
    13, this returns 13)
  - `weekDay` is the day of the week (Sunday =
    1, Monday = 2, etc.)
  - `yearDay` is the day of the year (January 1
    = 1, January 2 = 2, etc.)
  - `hour` is the hour of the day on a 24-hour
    clock (2:00 PM returns 14)
  - `minute` is the minute of the hour (2:35 PM
    returns 35)
  - `second` is the second of the minute
    (2:35:12 PM returns 12)
  - `timer` is the number of seconds since
    January 1, 1970.

  Note that if the `timer` value is too large
  for the TADS integer type, it will be stored as a BigNumber value.
  This is true of dates after 03:14:07 UTC on January 19, 2038, which is
  2,147,483,647 seconds from January 1, 1970.

  For much more comprehensive and convenient date and time handling, see
  the [Date](date.html) class.

- `GetTimeTicks` - returns the number of
  milliseconds since some arbitrary zero point on the local system. The
  precision of the timer varies by system, so the fact that the return
  value is represented with millisecond precision doesn't necessarily
  mean that the system is actually capable of measuring time differences
  that precisely. The zero point is chosen as the time of the first call
  to this function during a VM session, which reduces the likelihood
  that the program will ever encounter a timer rollover (i.e., the point
  at which the timer exceeds the 31-bit precision of the integer return
  value and thus resets back to zero), which occurs after about 23 days
  of continuous execution.



<span id="makeList"></span>

`makeList(*val*, *repeatCount*?)`



Constructs a list by repeating the given value the given number of
times. Returns the new list.

(For a more flexible way of constructing a list that allows for varying
element values, see the [List.generate](list.html#generate) method.)



`makeString(*val*, *repeatCount*?)`



Constructs a string by repeating the given value the given number of
times. The result of the function depends on the data type of *val*:

- If *val* is a string, the return value is the given number of copies
  of the string appended one after the other. For example,
  `makeString('abc', 3)` yields
  `'abcabcabc'`.
- If *val* is a list (or a [list-like object](opoverload.html#listlike)),
  the list must contain integers. Each integer in the list gives a
  Unicode character value. The function constructs a string with the
  same number of characters as the list has elements, and with each
  character of the string having the Unicode code point of the
  corresponding integer in the list. This string is then repeated the
  given number of times. For example,
  `makeString(\[65,66,67\])` yields
  `'ABC'`.
- If *val* is an integer, the function returns a string consisting of
  the single Unicode character whose code point is given by the integer,
  repeated the specified number of times. For example,
  `makeString(65, 5)` yields
  `'AAAAA'`.
- Other types are invalid.

If *repeatCount* is not specified, the default is 1. If the value is
less than zero, an error is thrown.



`max(*val1*, ...)`



Returns the least argument value. The values must be of comparable
types.



`min(*val1*, ...)`



Returns the greatest argument value. The values must be of types that
can be compared with one another, or the function throws an error.



<span id="nextObj"></span>

`nextObj(*obj*, *cls*?, *flags*?)`



Get the next object after *obj* of class *cls*. If *cls* is not
specified, returns the next object of any type. Returns
`nil` if *obj* is the last object of class
*cls*. This is used (with
[`firstObj()`)](#firstObj) to iterate over all
objects of a given class, or over all objects. The order in which these
functions enumerate objects is arbitrary, but each object will be
returned exactly once. The *flags* argument has the same meaning as it
does in `firstObj()`.

Note that `nextObj()` can return objects that
aren't otherwise reachable, because objects that become unreachable
aren't removed from memory until the garbage collector runs, which only
happens intermittently. For more on this, see
[`firstObj()`](#firstObj).



`rand(*x*, ...)`



<span id="rand"></span> Returns a pseudo-random number, or randomly
selects a value from a set of values.

- With a single integer argument, `rand()`
  generates a random integer from 0 to one less than the given value,
  inclusive, and returns the integer value; for example,
  `rand(10)` returns a value from 0 to 9.
- With two or more arguments, `rand()` randomly
  selects one of the arguments, evaluates it, and returns the result.
  Unlike an ordinary function call, `rand()`
  only evaluates the single selected argument, which means that only the
  selected argument's side effects are triggered. This is useful because
  it means you can intentionally use `rand()` to
  randomly select a set of side effects to trigger. For example,
  `rand(f(x), g(x), h(x))` picks one of the
  functions f(), g(), or h() at random and calls only that selected
  function.
- With a single argument that's a list, Vector, or [list-like
  object](opoverload.html#listlike), `rand()`
  randomly selects one of the elements of the list and returns it. For
  example, `rand(\['red', 'green', 'blue'\])`
  will pick one of the color names at random and return it.
- With a single string argument, `rand()`
  returns a string of random characters based on a template given by the
  argument string. The template is a series of codes specifying classes
  of characters to select randomly. For example, 'd' specifies a random
  digit, so if you want to create a string of five random digits, you
  can write 'ddddd'. The template syntax also has some extended features
  that allow repetition and grouping, using syntax that's similar to the
  regular expression language. Here are all of the template codes:
  - `a` - randomly selects a lower-case letter,
    'a' to 'z'
  - `A` - randomly selects an upper-case letter,
    'A' to 'Z'
  - `c` - a mixed-case letter, 'a' to 'z' or 'A'
    to 'Z'
  - `z` - a digit or mixed-case letter, '0' to
    '9', 'a' to 'z', or 'A' to 'Z'
  - `d` - a digit, '0' to '9'
  - `x` - a lower-case hexadecimal digit, '0' to
    'f'
  - `X` - an upper-case hex digit, '0' to 'F'
  - `i` - any printable ASCII character (U+0020
    to U+007E)
  - `l` - (lower-case L) any printable Latin-1
    character (U+0020 to U+007E, U+00A0 to U+00FF)
  - `u` - any printable Unicode character; this
    includes all Unicode characters except undefined characters, the
    private use area, and the control characters.
  - `b` - a random "byte" - that is, a character
    whose Unicode character code fits in eight bits (U+0000 to U+00FF)
  - `%x` - literally 'x' (copies the character
    following the `%` sign exactly as given).
    This removes the special meaning from the character. To include a
    literal '%', write '%%'.
  - "abc" - literally "abc"; removes the special meanings of all
    characters within the quotes, and groups the characters together as
    though they were enclosed in parentheses. For example, "abc"{3}
    turns into 'abcabcabc'. To include a quote, write it twice in a row:
    "abc""def".
  - `\[abcw-z\]` - one character chosen randomly
    from the listed characters. "w-z" includes the range of characters
    from "w" to "z" (so it includes w, x, y, and z). To include '\]' or
    '-' in the set, use '%\]' or '%-', respectively (and to include '%',
    use '%%').
  - a\|b - select one of a or b at random. Each of these can be any
    string of character codes. Any number of alternatives can be strung
    together with additional '\|' symbols. For example, 'ddd\|aaa\|AAA'
    random selects a string of three digits *or* three lower-case
    letters *or* three upper-case letters. Each alternative is equally
    likely, so if there are four alternatives, each one has a 25% chance
    of being chosen.
  - ` {5}` - repeat the preceding item 5 times.
    Each repeat is a new random selection; for example, d{9} produces
    nine random digits. You can use parentheses to repeat a group of
    items: ` (ddd%-){2}` produces three random
    digits and a hyphen, then three more random digits and another
    hyphen. (`(d{3}%-){2}` is another way to
    write the same thing.)
  - ` {5,8}` - repeat the preceding item a
    random number of times from 5 to 8. A uniformly distributed random
    integer is chosen within the given range to determine the number of
    repeats.
  - ` {5,}` - repeat the preceding item at least
    five times, plus a random number of times more than that. Each
    additional item is added with a 2/3 probability, so the odds of no
    more items being added are 1/3, the odds of exactly one extra item
    are 2/9, and so on.
  - `?` - repeat the preceding item zero or one
    times, at random. Same as ` {0,1}`.
  - `\*` - repeat the preceding item zero or
    more times, at random. Same as ` {0,}`.
  - `+` - repeat the preceding item one or more
    times, at random. Same as ` {1,}`.
  - \(a\) - parentheses can be used to group items for the symbols
    `\|`, ` { }`,
    `\*`, `?`, and
    `+`. For example, ab{3} is the same as abbb,
    while (ab){3} is equivalent to ababab.
  - All other characters are ignored (and produce no output at all).

In all cases, `rand()` chooses numbers that are
uniformly distributed over the relevant range, which means that each
value in the range has equal probability. <span id="rand"></span>

`rand()` uses a pseudo-random number generator
algorithm that you can select via [randomize()](#randomize). The default
is a generator called ISAAC that's designed for general-purpose and
cryptographic use.

Pseudo-random numbers aren't truly random. They come from a mathematical
formula that generates numbers that *look* random, in the sense that the
results pass various statistical tests of randomness. Each RNG algorithm
that TADS provides has a deterministic formula, which means that you'll
always get the same series of output values for a given starting state
for the generator. If you want a different series of numbers each time
the program runs (as you probably do), you have to randomize the
starting state so that it's different on each run. As of TADS 3.1, the
interpreter does this automatically by default at launch. TADS asks the
operating system for random initial "seed" data, and uses this to
initialize the RNG. Most modern systems have sources of true entropy for
this purpose.

In some cases you might actually want the same sequence of numbers on
every run; for example, when running regression tests, you need a
reproducible sequence of events that plays out exactly the same way each
time. You can prevent the interpreter from automatically randomizing the
RNG state by using the "-norand" option when starting the interpreter.
You can alternatively use the `randomize()`
function within the program to set a fixed seed value.



<span id="randomize"></span>

`randomize(...)`



Initialize the random number generator (RNG). This selects the random
number generator algorithm used by [rand()](#rand), initializes it with
a "seed" value (fixed or randomly chosen), and can be used to save and
restore the state of the RNG so that `rand()`
result sequences can be repeated as needed.

Starting in TADS 3.1, the interpreter automatically makes a call to
randomize() (the no-arguments version) when it starts up, unless the
user specifies the "-norand" option when launching the interpreter. For
most programs, this means that you'll never have to make your own call
to randomize(); you can just call rand() when you need random numbers.

This function performs several tasks, depending on how you invoke it:

- `randomize()` - with no arguments, the
  function selects the default RNG algorithm (ISAAC), and seeds the RNG
  with truly random data from the operating system. (This is the call
  the interpreter makes by default at start-up, unless the user
  specifies "-norand".)
- `randomize(*nil*)` - retrieves the current
  state of the RNG. Returns a list: \[id, state\], where 'id' is the ID
  of the currently selected RNG algorithm, and 'state' is a value giving
  its internal state. This list can be used in a later call to
  `randomize()` to restore the RNG state,
  causing subsequent calls to `rand()` to
  produce the same sequence of numbers it did after the
  `randomize(nil)` call.
  The 'state' value is opaque, meaning that you shouldn't use it
  directly. The only thing you should do with it it save it for later
  use to restore the RNG state.
- `randomize(\[*id*, *state*\])` - if you pass
  in a list that obtained from an earlier call to
  `randomize(nil)`, the RNG will be returned to
  its state at the time of the `randomize(nil)`
  call. This selects the same RNG algorithm that was in effect then and
  restores the internal state of the generator. After calling this, a
  series of calls to `rand()` will return the
  same sequence of numbers that were returned after the call to
  `randomize(nil)`.
- `randomize(*id*)` - selects the RNG algorithm
  identified by 'id' (an RNG_Xxx value - see below). This doesn't change
  the state of the generator; it simply selects the algorithm.
- `randomize(*id*, *nil*)` - selects the RNG
  algorithm identified by 'id' (an RNG_Xxx value), and seeds the
  generator with truly random data obtained from the operating system.
- `randomize(*id*, *val*)` - selects the RNG
  algorithm identified by 'id' (an RNG_Xxx value), and seeds the
  generator with the initial value 'val'. This can be either an integer
  value or a string; the preferred format varies by algorithm, but
  they'll all accept either format. After you set a given seed value,
  `rand()` will return a sequence of numbers
  that's repeatable every time you set the same seed value. This can be
  useful for things like testing, where you want a sequence of numbers
  that's statistically random, but which can be reproduced on demand.

TADS provides several different RNG algorithms. Each RNG has different
properties, so some applications might have reasons to prefer a
particular algorithm. For general purposes, any of them should produce
good results. The RNG algorithms are identified by RNG_xxx constants,
which you specify as the *id* parameter in calls to
`randomize()`:

- `RNG_ISAAC` - the ISAAC algorithm. This is the
  default RNG algorithm that `rand()` uses if
  you never call `randomize()`. ISAAC is based
  on techniques used in cryptography for stream ciphers and hashing.
  It's designed to produce numbers that pass the usual statistical tests
  for general-purpose RNGs, and also satisfy some additional
  requirements for a cryptographic RNG. It serves well in many
  applications, which is why it's the default algorithm.
- `RNG_LCG` - a Linear Congruential Generator.
  This is the old standby of computer RNGs; it's the type of generator
  that you'll commonly find in the standard libraries for C and other
  languages. LCGs are fast and extremely simple, but they have some
  known weaknesses in their statistical properties. ISAAC and the
  Mersenne algorithms are probably better choices for most purposes.
  TADS includes an LCG in case anyone specifically wants the properties
  of this kind of generator. The TADS LCG uses the algorithm in Knuth,
  *The Art of Computer Programming*, vol 2.
- `RNG_MT19937` - the Mersenne Twister MT19937
  algorithm. This is a newer algorithm (dating from 1997) that was
  designed to remedy most of the known shortcomings of the older
  generators, especially LCGs. It's fast and does well on the standard
  statistical tests. This algorithm has become popular in other modern
  languages, so TADS includes it for the sake of anyone who's familiar
  with its properties from other systems and wants the same RNG behavior
  in TADS.

Most programs that use random numbers want truly unpredictable numbers.
That is, numbers that (a) have a statistically random distribution, with
no discernible patterns, and (b) are different every time the program
runs. `rand()` fulfills part (a): it uses a
formula to generate a series of numbers that are statistically
distributed in a random fashion (for example, so that 1 occurs as often
as 2 or 3 or 1000 or any other number, so that any given sequence of 2,
3, or more numbers is equally likely, and so on. (Mathematicians have
several much more formal tests that RNGs must satisfy to be considered
random.) `randomize()` fulfills part (b), which
is to ensure that the sequence of numbers is different every time you
run the program. This is important because by itself,
`rand()` is deterministic: it uses a fixed
mathematical formula, so given the same initial conditions, it'll always
crank out the same sequence of numbers. So the trick is to randomize the
initial conditions - and of course we can't just turn to
`rand()` for help, since it's the thing we're
trying to randomize!

This is where the "seed" values come in.
`randomize()` and
`randomize(id, nil)` ask the operating system
for truly random data to use for the initial conditions. The degree of
entropy in this OS seed data varies by system; some systems have better
entropy sources than others. But whatever the source, the seed data
should be different each time you run the program when you use this
option. `randomize()` feeds the OS seed data
into the RNG to set its initial conditions, so each time you run,
`rand()` will be starting from a different
initial state. This makes for a different series of numbers from
`rand()` on each run.

Note that it's not necessary, or desirable, to call
`randomize()` every time you want a random
number. Once you seed the RNG, you should use
`rand()` to generate random numbers. Given that
we supposedly have this source of true randomness from the operating
system, you might wonder why we shouldn't use it every time we need a
random number, and dispense with the formulaic RNGs. There are a couple
of reasons. One is that the OS sources tend to be slow, since they can
involve things like hardware device interaction and scans of large
amounts of memory. RNGs are fast. Another problem with OS sources of
randomness is that they don't always change quickly - they're designed
to provide high entropy when called infrequently, like once per program
session, but obvious patterns might emerge if you relied on them for
many random numbers over a short period.

The fixed seed values, with `randomize(id,
val)`, are a little different. Rather than making the RNG produce
different sequences on each run, a fixed seed makes
`rand()` generate the same series of numbers
every time. The numbers will still be statistically random, so they'll
look random to an observer, but the same sequence will be returned each
time you run the program. (The sequence is a function of the seed value.
You'll get a different sequence for each different seed value.)

Why would you want a fixed series of random-looking numbers? You'd want
this any time you need repeatability, but you still want the appearance
of randomness. One common situation where this arises is regression
testing, in which you run the program and compare its output to a
reference version that you know is correct. If there are no differences,
you know that changes you've made to the program since the last test
didn't break anything in the test script. Randomness makes this kind of
testing difficult, because it makes the output intentionally different
on each run; you can't do a simple file comparison of the new and old
output because they'll always differ, whether or not the program is
still working correctly. Fixed seeds offer a solution. Using a fixed
seed, you can still exercise the program's random behavior, but the
sequence of random behavior will repeat on every run, so you can do
regression testing after all. What's more, the only thing that you have
to change to switch between testing mode and release mode is the single
call to randomize(), so the rest of the code can be identical in the two
modes.

When you specify a fixed seed value, you should use an integer for the
LCG algorithm, and a string for ISAAC or Mersenne Twister. The latter
algorithms have large internal state vectors, so they can accept large
seed data values. The LCG's entire internal state is a single integer
value, so there's no point in specifying more seed data than an integer.
The actual string values you use for ISAAC or MT seeds aren't important;
the algorithms should produce good sequences from any seed data.



`restartGame()`



Resets all objects (except transient objects) to their initial state, as
they were when the program was just loaded. This function doesn't affect
transient objects.



<span id="restoreGame"></span>

`restoreGame(*filename*)`



Restore the saved state from a file. *filename* is the name of the file
to restore; this can be a string with the name of a file in the local
file system, a [FileName](filename.html) object, or a
[TemporaryFile](tempfile.html) object.

All objects, except transient objects, are restored to the state they
had when the state was saved to the given file.

If an error occurs, the function throws a run-time error. The errno\_
property of the RuntimeError exception object gives a VM error code
describing the problem; the possible errors are:

- 1201 - the file does not contain a saved state (it has some other type
  of data)
- 1202 - the state was saved by a different program, or by a different
  version of the same program
- 1207 - the file is corrupted

Starting in 3.1.1, the [file safety](terp.html#file-safety) settings must
allow read access to the target file. [FileName](filename.html) objects
obtained from [inputFile()](tadsio.html#inputFile) "open" dialogs are
always accessible.



<span id="rexGroup">`rexGroup(*groupNum*)`</span>



Returns information on the text that matched a parenthesized group for
the last regular expression search or match. *groupNum* is the number of
the parenthesized group for which to retrieve the information. Groups
are numbered according to the order of appearance of the *left*
parenthesis of each group, starting from group number 1. The special
group number 0 contains the entire match.

Only ordinary "capturing" groups are counted in the numbering scheme.
Assertions and non-capturing groups aren't counted.

The return value is `nil` if *groupNum* is
higher than the number of groups in the regular expression, or if there
was no match for the group. If there's a match for the group, the return
value is a three-element list: the first element (at index
`\[1\]`) is the character index of the group
match within the original source string; the second element is the
length in characters of the group match; and third element is a string
giving the matching text.



`rexMatch(*pat*, *str*, *index*?)`



<span id="rexmatch"></span> Tests *str* to see if the substring starting
at character index *index* matches the given regular expression *pat*.
*pat* can be given as a string containing a valid regular expression, or
as a `RexPattern object`.

If the leading substring of *str* matches the regular expression, the
function returns the number of characters of the matching substring; if
there's no match, the function returns `nil`.
This does not search for a match, but merely determines if *str* matches
the expression in its leading substring. Note that a regular expression
can successfully match zero characters, so a return value of zero is
distinct from a return value of `nil`: zero
indicates a successful match that's zero characters long, and
`nil` indicates no match.

If *index* is given, it indicates the starting index for the match;
index 1 indicates the first character in the string, and is the default
if index is omitted. If *index* is negative, it's an index from the end
of the string (-1 for the last character, -2 for the second to last,
etc). This can be used to match a substring of str to the pattern
without actually creating a separate substring value.

Refer to the [regular expressions](regex.html) section for details on how
to construct a pattern string.



<span id="rexReplace"></span>

`rexReplace(*pat*, *str*, *replacement*, *flags*?,
*index*?, *limit*?)`



<span id="rexReplace"></span>Replaces one or more matches for the
regular expression pattern *pat* within the subject string *str*,
starting at the character index given by *index*. *replacement* is a
string giving the replacement text, or a function (regular or anonymous)
to be invoked for each match to compute the replacement text.

The return value is the resulting string with the substitutions applied.

*pat* can a string that uses the [regular expression](regex.html) syntax
to specify the search pattern, or it can be a
[`RexPattern`](rexpat.html) object. (The latter
is more efficient if you'll be performing the same search repeatedly,
since it saves the work of re-parsing the regular expression each time.)
*pat* can also be a list (or a Vector or other [list-like
object](opoverload.html#listlike)) containing multiple search patterns;
if it is, *replacement* can similarly be a list of replacements. More on
this shortly.

Refer to the [regular expressions](regex.html) section for details on how
to construct a pattern string.

The *flags* value is optional. It controls variations on the replacement
process. If it's not provided, the default is ReplaceAll. If *flags* is
specified, it's a bitwise combination (with '\|') of the following
values:

- `ReplaceOnce`: replace only the first match
  for the pattern(s). This is ignored if a *limit* argument is provided.
- `ReplaceAll`: replace all matches for the
  pattern(s). This is ignored if a *limit* argument is provied.
  `ReplaceAll` is the default if
  `ReplaceOnce` isn't specified, and supersedes
  `ReplaceOnce` if both are included.
- `ReplaceIgnoreCase`: ignore case (that is,
  capitalization) when searching for the pattern. If this flag isn't
  included, the default is to search for the pattern exactly, matching
  capitals only to capitals and lower-case only to lower-case. However,
  any `\<case\>` or
  `\<nocase\>` directive in the regular
  expression itself supersedes the presence or absence of this flag.
- `ReplaceFollowCase`: capitalize lower-case
  letters in the replacement text to follow the capitalization pattern
  in the matched text for each match. Specifically, if all of the
  letters in the matched text are upper-case, every letter in the
  replacement text is capitalized; if all of the letters in the match
  are lower-case, the replacement text is unchanged; if the match has a
  mix of capitals and minuscules, the first lower-case letter in the
  replacement text is capitalized, and the rest are unchanged. This only
  affects lower-case letters in the replacement string. "%" sequences
  aren't affected. If the replacement is a callback function instead of
  a string, it's not affected either; it's assumed that the function
  returns the exact replacement text it intends.
- `ReplaceSerial`: if a list of patterns is
  provided, this flag scans for the patterns in the list serially:
  first, we replace all occurrences of the *first pattern only* (or just
  the first occurrence, in `ReplaceOnce` mode);
  then we start over with the updated string, and replace occurrences of
  the second pattern only; and so on for each pattern in the list. The
  default mode is "parallel" mode, which scans the string for all of the
  patterns at once, replacing the leftmost match for any of them, then
  repeating this process on the remainder of the string after the first
  match. See [below](#rexReplaceLists) for more details.

Note that you should never use 0 as the *flags* value. For compatibility
with older versions, 0 has a special meaning equivalent to
`ReplaceOnce`. If you have no other flags to
specify, always use either `ReplaceOnce` or
`ReplaceAll`, or simply omit the *flags*
argument entirely.

If *index* is given, replacements start with the first instance of the
pattern at or after the character index position. The first character is
at index 1. If *index* is omitted, the search starts at the first
character. If *index* is negative, it's an index from the end of the
string (-1 for the last character, -2 for the second to last, and so
on). Note that a negative index doesn't change the left-to-right order
of the replacement; it's simply a convenience for specifying the
starting point.

If *limit* is included, it specifies the maximum number of replacements
to perform. This can be `nil` to indicate that
all matches are to be replaced, or an integer giving the maximum number
of matches to replace. 0 (zero) means that no matches are to be
replaced, in which case the original subject string is returned
unchanged. If a *limit* argument is present, it overrides the
`ReplaceAll` and
`ReplaceOnce` flags - those flags are ignored if
*limit* is present. If *limit* is omitted, the limit is taken from the
flags.

*replacement* is a string to be substituted for each occurrence of a
match to the regular expression pattern *pat* (or for just the first
match, when `ReplaceOnce` is specified). Each
match is deleted from the string, and *replacement* is inserted in its
place.

The replacement text can include the special sequences
`%1` through `%9` to
substitute the original text that matches the corresponding
parenthesized group in the regular expression.
`%1` is replaced by the original matching text
of the first parenthesized group expression,
`%2` by the second group's matching text, and so
on. In addition, `%\*` is replaced by the match
for the entire regular expression. Because of the special meaning of the
percent sign, you have to use the special code
`%%` if you want to include a literal percent
sign in the replacement text.

For example, this would replace negative numbers in a string with
accountant's notation, by putting each negative number within
parentheses and coloring it red:

```
    str = rexReplace('-(<digit>+)', str, '<font color=red>(%1)</font>', ReplaceAll);
```

Note that we've used a parenthesized group in the pattern to group the
digits together. This grouped part of the match is available as
`%1` in the replacement text. This is how we
manage to specify a replacement that includes the original numeric value
that we matched. Note also that the minus sign is outside of the group,
because we don't want to include it in the substitution - we want to
change a string like "-120" to "(120)".

<span id="rexReplaceLists"></span>**Using a pattern list:** *pat* can be
specified as a list of regular expressions (as strings,
`RexPattern` objects, or a mix of the two). This
lets you make substitutions for several different patterns at one time,
without making successive calls to
`rexReplace()`.

When you supply a list of patterns, you can optionally supply a list of
replacements (as strings, callback functions, or a mix). Each item in
the pattern list is matched up with the corresponding item - the item at
the same list index - in the replacement list. That is, *pat*\[1\] will
be replaced with *replacement*\[1\], *pat*\[2\] will be replaced with
*replacement*\[2\], and so on. If there are more patterns than
replacements, the excess patterns are replaced with empty strings. Any
excess replacements are simply ignored.

If *pat* is a list but *replacement* isn't,
`rexReplace()` simply uses the same replacement
for every pattern. Note that this is different from passing
*replacement* as a list containing one element: when *replacement* is a
single-item list, all patterns after the first are replaced by empty
strings, because of the rule for when the pattern list is longer than
the replacement list.

There are two ways that `rexReplace()` can apply
a list of replacements. The default is "parallel" mode. In this mode,
`rexReplace()` scans the string for all of the
patterns at once, and replaces the first (leftmost) occurrence of any
pattern. (If two of the patterns match at the same position in the
string, the one with the lower *pat* list index takes precedence.) If
the `ReplaceOnce` flag is specified, the whole
operation is done after that first replacement; otherwise,
`rexReplace()` scans the remainder of the
string, to the right of the first replacement, again looking for the
leftmost occurrence of any of the patterns. It replaces that second
occurrence, then repeats the process until there are no more matches for
any of the patterns.

Parallel mode is similar to combining all of the patterns in the list
using "\|" to make a single pattern. There's a key difference, though:
using a list of patterns allows you to specify a separate replacement
for each pattern.

The other mode is "serial" mode, which is used when you specify the
`ReplaceSerial` flag. In serial mode,
`rexReplace()` starts by scanning *only* for the
first pattern, replacing each occurrence of that pattern throughout the
string (or, if the `ReplaceOnce` flag is used,
replacing just the first occurrence). If
`ReplaceOnce` is specified, and we replaced a
match for the first pattern, we're done. Otherwise,
`rexReplace()` starts over with the *updated*
string - the result of applying the replacements for the first pattern -
and scans this updated string for the second pattern. As with the first
pass, we scan *only* for the second pattern on this pass, and we replace
all occurrences (or just the first, if
`ReplaceOnce` is used). We repeat this process
for each additional pattern.

The `ReplaceSerial` mode is *almost* equivalent
to calling `rexReplace()` iteratively, once for
each pattern in the search list, using the result of the first call as
the subject string on the second call, the result of the second as the
subject string for the third, and so on. The difference is that a serial
mode list will result in only one replacement overall, whereas calling
the function iteratively could make another replacement on each
iteration.

You should note an important feature of the serial mode: the replacement
text from one pattern is subject to further replacement on the next
pattern. This is because the entire result from each pass is used as the
new subject string on the next pass. In contrast, in parallel mode the
replaced text is never rescanned.

**Using a callback function to generate the replacement:** You can
supply a function for *replacement*, instead of a string. This can be a
regular named function or an anonymous function. When a function is
specified, `rexReplace()` invokes it for each
match to determine the replacement text. This is powerful because it
lets you apply virtually any transformation to each replacement, rather
than just substituting a fixed string.

A *replacement* function is invoked once for each matching string, as
follows:

```
    func(matchString, matchIndex, originalString);
```

The *matchString* parameter receives a string containing the text that
the regular expression matched, and which is to be replaced.
*matchIndex* is the character index within the original string where
this match starts. *originalString* is the full original string that's
being searched. The function should return a string giving the
replacement text. It can alternatively return
`nil` to replace the match with nothing, which
is equivalent to returning an empty string. Within the function, you can
use `rexGroup()` to retrieve the match text for
any parenthesized groups within the search pattern.

You can omit one or more of the parameters when you define the callback
function, because `rexReplace` will only supply
as many arguments as the function actually wants. The arguments are
always in the same order, though - the names don't matter, just the
order. This means that if you provide a callback that only takes one
argument, it gets the match string value; with two arguments, they'll be
assigned the match string and match index, respectively.

Here's an example that uses a replacement function to perform "title
case" capitalization on a string. This capitalizes the first letter of
each word in the string, except that it leaves a few small words (such
as "of" and "the") unchanged, but only when they occur in the middle of
the text. This takes advantage of a callback function's ability to vary
the replacement based on the matched text and its position in the
subject text. Note that this function omits the third parameter, since
it doesn't need the original string to carry out its task.

```
    titleCase(str)
    {
       local r = function(s, idx)
       {
           /* don't capitalize certain small words, except at the beginning */
           if (idx > 1 && ['a', 'an', 'of', 'the', 'to'].indexOf(s.toLower()) != nil)
               return s;

           /* capitalize the first letter */
           return s.substr(1, 1).toTitleCase() + s.substr(2);
       };
       return rexReplace('%<(<alphanum>+)%>', str, r, ReplaceAll);
    }
```
<span id="rexSearch"></span>

`rexSearch(*pat*, *str*, *index*?)`



Searches for the regular expression *pat* in the search string *str*,
starting at the character position *index*. The pattern *pat* can be
given as a string containing a valid regular expression, or as a
`RexPattern` object.

If *index* is given, it gives the starting character position in *str*
for the search. The first character is at index 1. If *index* is
omitted, the search starts with the first character. A negative value is
an index from the end of the string: -1 for the last character, -2 for
the second to last, etc. Note that a negative index doesn't change the
left-to-right order of the search; it's simply a convenience for
specifying the starting point. The *index* value can be used to search
for repeated instances of the pattern, by telling the function to ignore
matches before the given point in the string.

If the function finds a match, it returns a list with three elements:
the character index within *str* of the first character of the matching
substring (the first character in the string is at index 1); the length
in characters of the matching substring; and a string giving the
matching substring. If there's no match, the function returns
`nil`.

Refer to the [regular expressions](regex.html) section for details on how
to construct a pattern string.



<span id="rexSearchLast"></span>

`rexSearchLast(*pat*, *str*, *index*?)`



Searches the string *str* backwards from the end for a match to the
regular expression *pat*, starting at the character position *index*.
This works like [rexSearch()](#rexSearch), but performs the search in
the reverse order, starting at the end of the string and working towards
the beginning.

*index* is the optional starting position for the search. The method
looks for a match before but not including the character at this index.
If *index* is omitted, the default is to search the entire string from
the end. Equivalently, you can set *index* to
*str*`.length()+1`, to indicate the imaginary
character position just after the end of the string. Specifying 0 for
*index* means the same thing. If *index* is negative, it's an offset
from the end of the string: -1 is the last character, -2 is the second
to last, and so on. Note that -1 (or, equivalently,
*str*`.length()`) means that you want to search
the portion of the string up to but not including the last character,
since the match can't include the starting character.

The `\<FirstBegin\>` and
`\<FirstEnd\>` modes (see [regular
expressions](regex.html)) work in mirror image compared to ordinary
forward searches. The easiest way to think about this is to picture the
reverse search as a forward search viewed in a mirror. For a reverse
search, `\<FirstBegin\>` means that the match
with its *right* end closest to the starting point is selected as the
winner, while `\<FirstEnd\>` means that the
match with its *left* end closest to the starting point is selected.
Since the search proceeds right to left, closer to the starting point
means further right, at a higher index.

Note that we use the terms left, and right-to-left loosely in the
discussion above. In particular, we're ignoring that different languages
and scripts are written on paper in different directions. We're talking
purely about the order of characters in the string, using "left" to mean
towards the beginning of the string and "right" to mean towards the end,
regardless of whether the string contains Roman characters or Arabic
characters or anything else.



<span id="saveGame"></span>

`saveGame(*filename*, *metaTable*?)`



Saves the state of all objects (except transient objects) to a file.

*filename* specifies the file to save to; this can be a string giving
the name of a file in the local file system, a [FileName](filename.html)
object, or a [TemporaryFile](tempfile.html) object.

If an error occurs, the function throws a run-time error to indicate the
problem. The saved state can later be restored using
`restoreGame()`.

*metaTable* is an optional LookupTable object containing "metadata"
information to store in the file. This is a collection of game-specific
descriptive information; this could include things like the current room
name, score, number of turns, chapter number, etc. The interpreter and
other tools can extract this information and display it to the user when
browsing saved game files. For example, the file selector dialog for a
RESTORE command could display the metadata for each available file.

The *metaTable* LookupTable must consist of string key/value pairs.
`saveGame()` simply ignores any non-string keys
or non-string values found in the table. Both the keys and the values
are meant to be displayed to the user, so the keys should be descriptive
titles for their respective values.

Starting in 3.1.1, the [file safety](terp.html#file-safety) settings must
allow write access to the target file. [FileName](filename.html) objects
obtained from [inputFile()](tadsio.html#inputFile) "save" dialogs are
always accessible.



<span id="savepoint"></span>

`savepoint()`



Establish an undo savepoint. Multiple savepoints can be established, to
mark multiple points in time. For example, you could establish a
savepoint just after reading a command line from the user, so that the
user can subsequently undo the entire effect of the command if desired.
Similarly, if you wanted to perform an operation speculatively, to see
what would happen if you carried out some series of actions, you could
set an undo savepoint, then undo to the savepoint once you've finished
the speculative operation.



<span id="sgn"></span>

`sgn(*val*)`



Returns the sign of the given number. *val* can be an integer or a
BigNumber value. The return value is 1 if *val* is positive, 0 if *val*
is zero, or -1 if *val* is negative. The result is always an integer,
regardless of *val*'s type.



<span id="sprintf"></span>

`sprintf(*format*, ...)`



Generates a formatted text string from a list of data values, according
to the template string *format*. sprintf is especially handy for
formatting numeric data, since it provides a number of numeric
formatting options that are difficult to code by hand.

*format* is the format template string, which controls how the result
string looks. The format string can include a mix of plain text and
"format codes". A format code starts with "%", followed by a series of
characters describing how to format one data item. The format code
syntax is very similar to the syntax used in the C/C++ version of
sprintf.

The additional arguments after *format* are the data values to plug into
the the format codes in the template. Each format code in the *format*
string corresponds to an item in the argument list, and is replaced by
the string-formatted value of that argument.

The return value is a new string, consisting of the text of the format
string, with each format code replaced by the corresponded argument
value, formatted according to the format code.

Here's a simple example:

```
    local str = sprintf('i=%d, j=%d, k=%d', 99, 23, 145);
```

"%d" is the format code for a decimal integer value; when sprintf sees
"%d" in a format string, it takes the next argument, formats it into
text as a decimal number, and replaces the "%d" with the formatted
number. Each format item "consumes" an argument from the list, so when
we have multiple format items, each one is replaced with the next
argument in the list. So the code above produces the result string
`'i=99, j=23, k=145'`.

A format code consists of the following elements, in order:
`%` *flags*
*width*`.`*precision* *type-spec*. The
`%` (a literal percent sign) and *type-spec* are
required, and everything else is optional.

The *flags*, if present, consist of one or more of the following, in any
order:

`\[`*n*`\]`

Argument number. *n* is a number from 1 to the number of arguments after
the format string. The value for this item is taken from the given
argument number rather than the default positional argument. For
example, `sprintf('i = %\[2\]d, j = %\[1\]d', 100,
200)` produces `'i = 200, j = 100'`. When
this flag is used, the format item doesn't affect the position counter
for other items; for example, `sprintf('i=\[%2\]d,
j=%d', 100, 200)` produces `'i=200,
j=100'`, because the first format "i=\[%2d\]" item doesn't count
as a positional item, leaving the first positional argument still
available for "j=%d".

`-`

Left alignment. If the formatted value is shorter than the *width*
value, padding is added after the value. By default, the value is
right-aligned (padding is added before the value). For example,
`sprintf('i=%-4d', 123)` produces
`'i=123 '`.

`+`

Always show the sign. A "+" sign is shown before positive numbers and 0.
By default, only negative numbers are shown with a sign. For example,
`sprintf('i = %+d', 123)` produces
`'i = +123'`.

``

(Space character): Show a space character before positive numbers and 0.
This can be used to make positive and negative values use the same
number of characters, without forcing a "+" sign before positive values.

`,`

Digit grouping. For integer and floating point types (b, d, e, E, f, g,
G, o, u, x, X), adds a comma between each group of three digits (only
before any decimal point). For example, `sprintf('i =
%,d', 1234567)` produces `'i =
1,234,567'`.

`\_`*x*

Padding character: changes the padding character from the default (a
space) to *x*, which is any single character. E.g.,
`%\_\*8x` formats 123 as '\*\*\*\*\*123'.

`\#`

For integer types (b, d, o, u, x, X), if a *width* is specified, adds
leading zeros as needed to display at least *width* digits.

For the floating point types (e, E, f, g, G) displays a decimal point
even if there are no digits after the decimal.

For floating point types g and G, keeps all trailing zeros after the
decimal point (trailing zeros are normally removed) so that *precision*
digits are always displayed.

*width* is an optional number giving the minimum number of characters to
use for the item. If the formatted value is shorter than *width*,
padding is added before or after the item to fill out the specified
field width. Spaces are used for padding by default, except that if
*width* starts with a zero (e.g., "%08d"), leading zeros are used
instead, provided that left alignment isn't also specified. The "\_"
flag (see above) lets you specify a custom padding character. *width* is
only a minimum; if the displayed value is longer than *width*, the value
isn't truncated.

*precision* is another optional number, preceded by a period ".". For
example, `%.8d` specifies a precision of 8. The
meaning of *precision* varies by type:

Integer types (b, d, u, o, x, X)

The minimum number of digits to display. Leading zeros are added as
needed. For example, '%.8d' displays 1234 as '00001234'. By default, no
leading zeros are added.

Basic floating point types (e, E, f)

The number of digits to display after the decimal point. The default is
6 digits. If the argument value has more digits than can be displayed,
the value is rounded. For example, `%.3f`
formats 123.456789 as `'123.457'`.

Variant floating point types (g, G)

The maximum number of significant digits to display (including before
and after the decimal point). If the argument value has more significant
digits than can be displayed, the value is rounded. For example,
`%.3g` formats 12.789 as
`'12.8'`.

Other types

Ignored

*type-spec* is the type specifier, which determines how the argument
value is interpreted and formatted. This is a single character, from the
following list:

`%`

a literal `%` sign. This type doesn't use an
argument value.

`b`

binary integer. The argument is interpreted as a number, and its
**unsigned** integer value is rendered in binary (base 2, using 1s and
0s to represent the bits).

`c`

character. If the argument is a string, the first character of the
string is used; otherwise the argument is interpreted as a number giving
a Unicode character code, and that character is used.

`d`

decimal integer. The argument is interpreted as a number, and its
integer value is rendered in decimal.

`e`

number in scientific notation ("exponent" format, such as 1.23e+010).
The argument is interpreted as a number, and its value is rendered in
scientific notation. By default, the value is displayed with exactly 6
digits after the decimal point, but you can change this by specifying a
*precision*. For example, `%.8e` uses 8 digits
after the decimal point. A precision of zero,
`%.0e` or `%.e`, omits
the decimal point, unless the `\#` flag is
specified (e.g., `%#0.e`).

`E`

same as `e`, but displays the exponent with a
capital "E".

`f`

floating point number. The argument is interpreted as a number, and its
value is rendered in floating point format. By default, the number is
displayed with no limit on the digits before the decimal point, and
exactly 6 digits after the decimal point. You can change the number of
digits after the decimal point by specifying a precision value; e.g.,
`%.8f` displays 8 digits after the decimal
point. A precision of zero, `%.0f` or
`%.f`, omits the decimal point, unless the
`\#` flag is specified (e.g.,
`%#0.f`).

`g`

compact floating point: uses either the `e` or
`f` format, according to which one produces the
shorter text output. The `f` format is shorter
for any number whose decimal exponent is from -4 to the format's
precision option value, and the `e` format is
shorter for anything outside this range. The precision option for this
format specifies the total number of significant digits to display; the
default is 6. By default, trailing zeros after the decimal point are
removed, and the decimal point itself is removed if no digits are
displayed after it. The `\#` flag keeps any
trailing zeros, and keeps the decimal point even if there aren't any
digits to display.

`G`

same as `g`, but displays a capital "E" if
scientific notation is used.

`o`

octal integer. The argument is interpreted as a number, and its
**unsigned** integer value is rendered in octal (base 8).

`r`

Roman numerals, lower case. The argument is interpreted as a number, and
its signed integer value is rendered in lower-case Roman numerals. If
the value is less than 1 or greater than 4999, it's displayed as a
decimal integer, as though `%d` had been used.

`R`

Roman numerals, upper case. This is the same as
`%r`, but displays the numeral in upper-case.

`s`

string. The argument value is rendered as a string. By default, the
entire string is shown, but if there's a precision setting, it specifies
the maximum number of characters to show from the string; if the string
is longer, it's truncated to that number of characters.

`u`

decimal integer, unsigned. The argument is interpreted as a number, and
its **unsigned** integer value is rendered in decimal.

`x`

hexadecimal integer. The argument is interpreted as a number, and its
**unsigned** integer value is rendered in hexadecimal (base 16) using
lower-case letters (abcdef).

`X`

same as `x`, but uses upper-case letters
(ABCDEF).

Other characters are not valid as type specifiers. If you use an invalid
type code, the whole `%` sequence is retained in
the result string without any substitutions.

The first (leftmost) `%` item in the format
string is matched up with the first argument in the argument list, and
each subsequent `%` item is matched up with the
next argument. (You can also use the `\[ \]`
flag to select a particular argument, instead of automatically using the
next argument in the list.)

Each *type-spec* code expects a particular datatype for its argument
value. If the value isn't of the correct type to begin with,
`sprintf` will automatically try to convert it
to the correct type, as follows:

<table class="sprintfTab">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td>Floating point types (e, E, f, g, G)</td>
<td><ul>
<li>Integer and BigNumber values are displayed as given</li>
<li>Strings are converted to numbers, as though by calling <a
href="#toNumber">toNumber()</a></li>
<li>`true` and `nil` are
displayed as 1 and 0 respectively</li>
<li>Other types cause an error</li>
</ul></td>
</tr>
<tr>
<td>Integer types (b, d, o, u, x, X)</td>
<td><ul>
<li>Integer values are displayed as given</li>
<li>BigNumbers are rounded to the nearest integer (but they're still
BigNumbers, so they don't have to fit into a 32-bit integer)</li>
<li>Strings are converted to numbers, as though by calling <a
href="#toNumber">toNumber()</a>, then rounded to the nearest integer if
they have decimal points</li>
<li>`true` and `nil` are
displayed as 1 and 0 respectively</li>
<li>Other types cause an error</li>
</ul></td>
</tr>
<tr>
<td>Character (c)</td>
<td><ul>
<li>An integer gives the Unicode character code to display, from 0 to
65535 (values outside this range cause an error)</li>
<li>A BigNumber value is rounded to the nearest integer, which gives the
Unicode character code to display</li>
<li>For a string, the first character of the string is displayed</li>
<li>Other types cause an error</li>
</ul></td>
</tr>
<tr>
<td>String (s)</td>
<td><ul>
<li>String values are displayed as given</li>
<li>Anything else is converted to a string, as though by calling <a
href="#toString">toString()</a></li>
</ul></td>
</tr>
</tbody>
</table>

**Unsigned integers:** several of the integer types (b, o, u, x, X)
display "unsigned" integer values. This means that if the argument is a
regular 32-bit integer value, and it's negative, the value is
interpreted as an unsigned quantity in the native hardware format of the
machine the program is running on. Almost all modern computers use two's
complement format, which represents negative numbers as though they were
very large positive numbers. For example, `%x`
formats -1 as `'ffffffff'`. See
[`toString`](#toString) for more discussion on
unsigned integers.

There's no such thing as an unsigned BigNumber, and no way to interpret
a BigNumber as unsigned. If you format a negative BigNumber value with
an unsigned integer type spec, the "unsigned" aspect of the format code
is ignored, and the value is shown as negative, with a minus sign. For
example, `%x` formats -255.0 as
`'-ff'`. If you really want the two's complement
version of a BigNumber value, use `toInteger()`
to explicitly convert the argument to an integer (but if you do this,
note that the value must be in the valid range for a 32-bit integer,
-2147483648 to +2147483647).



<span id="toInteger"></span>

`toInteger(*val*, *radix*?)`



Convert the value given by *val* to an integer.

If the *radix* value is specified, the conversion uses the given radix
as the numeric base for the conversion; this value can be any integer
from 2 to 36. If *radix* is omitted, the default is 10 (decimal).

The interpretation of *val* depends on its type:

- If *val* is an integer, the return value is simply *val*.
- If *val* is a BigNumber, the value is converted to an integer by
  rounding to the nearest whole number. If the number is too large for
  the integer type to hold (that is, outside the valid integer range,
  -2147483648 to +2147483647), a run-time error occurs ("numeric
  overflow").
- If *val* is `nil` or the string 'nil'
  (ignoring any leading or trailing spaces), the return value is 0.
- If *val* is `true` or the string 'true'
  (ignoring any leading or trailing spaces), the return value is 1.
- If *val* is any other string value, the function skips any leading
  spaces in the string, then parses the text as an integer in the given
  radix. If the first character after any leading spaces is a "+" sign
  or hyphen "-", the function notes the sign, and skips the sign symbol
  and any spaces after it. The function then scans all following
  consecutive numerals in the given radix and returns the resulting
  integer value. If the radix is greater than 10, the letters A through
  Z (in upper or lower case) represent the "digits" 10 through 35, in
  analogy to hexadecimal notation. Parsing stops at the first character
  that isn't a valid digit in the given radix. For example, if *radix*
  is 12, the string '-A1C' returns the value -121: parsing stops at the
  'C' because it's not a valid digit in base 12.
  If the value is outside the bounds of the 32-bit integer type, a
  numeric overflow error is thrown. However, there's special treatment
  for "programmer" bases - binary, octal, and hexadecimal, base 2, 8,
  and 16, respectively. As long as there's no '-' sign, a hex, octal, or
  binary number will be treated as an "unsigned" 32-bit integer, which
  can hold values up to 4294967295. The result will still be *returned*
  as an ordinary (signed) integer, so any value above 2147483647 will be
  returned as a negative number. For example, parsing 'ffffffff' in
  radix 16 returns the integer value -1. This special handling is used
  because it's traditional in C-style languages to use hex constants
  (and sometimes octal, and occasionally binary) to represent bit
  vectors rather than arithmetic values. It's convenient in bit vectors
  to be able to use all 32 bits of the integer type directly, rather
  than having to worry about how the positive/negative sign is
  represented. Remember, this only applies to hex, octal, and binary
  inputs; ordinary decimal numbers, or numbers in unusual bases like
  base 12, will overflow if they go outside the normal signed integer
  boundaries of -2147483648 to +2147483647.
- If *val* is of any other type, an error is generated ("invalid type
  for built-in").

See also the [toNumber](toNumber) function, which can parse strings
containing floating point values and whole numbers too large for the
ordinary integer type.



<span id="toNumber"></span>

`toNumber(*val*, *radix*?)`



Convert the value given by *val* to an integer or BigNumber, as
appropriate.

If the *radix* value is specified, the conversion uses the given radix
as the numeric base for the conversion; this value can be any integer
from 2 to 36. If *radix* is omitted, the default is 10 (decimal).

The interpretation of *val* depends on its type:

- If *val* is an integer, the return value is simply *val*.

- If *val* is a BigNumber, the return value is simply *val*.

- If *val* is `nil` or the string 'nil'
  (ignoring any leading or trailing spaces), the return value is 0.

- If *val* is `true` or the string 'true'
  (ignoring any leading or trailing spaces), the return value is 1.

- If *val* is any other string value, the function parses it as a number
  in the given radix.

  If the string represents a whole number that fits within the bounds of
  a 32-bit integer, the result is returned as an integer value. If the
  number represented in the string is outside the bounds of the 32-bit
  integer type, it's returned as a BigNumber value. This makes it
  possible to parse extremely large integer values.

  If the radix is 10, and the string contains a decimal point (a period,
  '.') or a scientific notation exponent (the letter 'e' or 'E',
  followed by an optional '+' or '-' sign, followed by at least one
  digit), the value is parsed as a floating point number, and the result
  is returned as a BigNumber. Note that a decimal point always causes
  the value to be returned as a BigNumber, even when the actual value
  turns out to be a whole number that would have fit in the ordinary
  integer type, such as '1234.000' or '1234.'.

  Floating point values can only be represented in decimal. For any
  radix other than 10, decimal points are considered non-digit
  characters and terminate parsing. Similarly, scientific notation isn't
  recognized in non-decimal bases: if the radix is 15 or higher, 'E' and
  'e' represent the digit value 14, and for radix 14 or lower they're
  simply non-digit characters that terminate parsing.

- If *val* is of any other type, an error is generated ("invalid type
  for built-in").

See also the [toInteger](toInteger) function, which explicitly converts
values to integers. The main difference between toInteger and toNumber
is that toNumber can parse strings that have to be represented as
BigNumber values (such as floating point values and very large whole
numbers), whereas toInteger can only handle ordinary integers.



<span id="toString"></span>

`toString(*val*, *radix*?, *isSigned*?)`



<span id="toString"></span> Convert the given value *val* to a string.

- If *val* is a string, the return value is simply *val*.

- If *val* is `true` or
  `nil`, the result is the string
  `'true'` or the string
  `'nil'`, respectively.

- If *val* is a [list](list.html) or [Vector](vector.html), the return
  value is a string containing the elements of *val* concatenated
  together, with commas separating elements. Each element is itself
  first converted to a string via toString(), using the given *radix*
  and *isSigned* parameters.

- If *val* is an integer, the value is converted to a textual
  representation of the number. If *radix* is specified, the conversion
  is performed in that numeric base. If it's omitted, the default is
  decimal (base 10). The integer's numerical value is interpreted as
  "signed" if *isSigned* is `true`, or if
  *isSigned* omitted and the radix is 10; otherwise, the value is
  interpreted as "unsigned". See below for more details on the radix and
  signed/unsigned treatment.

- If *val* is a [BigNumber](bignum.html), and the *radix* value is 10 (or
  omitted) **or** the number has a fractional component, it's converted
  to a decimal (base 10) floating point representation, using the
  default BigNumber formatting. This is the same as calling the
  [`formatString()`](bignum.html#formatString)
  method on the value with all of the options set to defaults.

  If *radix* is value other than 10, **and** the value is a whole number
  with no fractional part, the value is represented in the given numeric
  base instead of decimal. Scientific notation (with an exponent, as in
  '1.0e+2') will never be used for a non-decimal base, no matter how
  large the number is, and no decimal point will appear in the result,
  since only whole numbers can be converted to a non-decimal base.

  The *isSigned* value is ignored for BigNumbers.

- If *val* is a [ByteArray](bytearr.html) object, it's converted to a
  string by treating each byte as a Unicode character value.

- If *val* is a [StringBuffer](strbuf.html), the buffer's current
  contents are returned as a string.

- If *val* is a [Date](date.html), the date value is converted to a
  string using a default format.

- If *val* is a [TimeZone](timezone.html), the name of the timezone is
  returned as a string.

- If *val* is a [FileName](filename.html), the filename path (represented
  using the host operating system's native syntax) is returned as a
  string.

- If *val* is a [RexPattern](rexpat.html), the original regular
  expression pattern string is returned.

- If *val* is any other object type, and the object defines the property
  `objToString`, the function calls that method,
  and returns the result if it's a string. Otherwise, the function calls
  to `reflectionServices.valToSymbol(val)` if
  it's defined (see [reflection services](reflect.html)), and returns the
  result if it's a string. If all else fails, the function returns a
  generic "object#nn" string showing an internal numeric identifier for
  the object.

- If *val* is a property, function pointer, pointer to built-in
  function, or enum value, it's passed to
  `reflectionServices.valToSymbol()` if
  available, and otherwise converted using a generic format showing the
  type of the value and an internal numeric identifier, such as
  "property#23".

- For any other type, an error occurs ("no string conversion").

*radix* is a number giving the base for a numeric value; if this is
omitted, the default is 10, for a decimal representation. The base can
be any value from 2 (binary) to 36. Bases above 10 use letters for
"digits" above 9: A=10, B=11, C=12, etc. This is analogous to the usual
hexadecimal number system, just generalized for any base up to 36 (where
Z=35). The radix is meaningful only when *val* is an integer, or a
BigNumber with no fractional part. It's ignored for other values.

*isSigned* is meaningful only with integer values. It's ignored for
other types (including BigNumber values, even when they're whole numbers
with no fractional part). `true` means that an
integer value is represented in the result as its ordinary positive or
negative arithmetic value; negative numbers are represented with a minus
sign (a hyphen, '-') followed by the absolute value, and positive
numbers simply with the digits of the absolute value.
`nil` means that an integer is interpreted as
"unsigned", as explained below.

If *isSigned* is omitted, the default is `true`
if the *radix* is 10 (or omitted, in which case the default value is
10), `nil` for any other *radix* value - so the
default is "unsigned" for hex, octal, and all other non-decimal bases.
This is the default because hex and octal notation are traditionally
used as a way to represent bit patterns or raw byte-oriented data rather
than arithmetic values.

"Unsigned" means that the value is interpreted as a simple binary number
with no positive/negative sign information. Normally, TADS treats
integer values as "signed", meaning they have a plus or minus sign
attached. Computers store signed integers by using half of the overall
binary value range to represent positive numbers, and the other half to
represent negative numbers. This reduces the maximum value that can be
stored by a factor of two. That's why a 32-bit signed integer can only
hold values up to +2,147,483,647, even though 2<sup>32</sup> is
4,294,967,296. The unsigned interpretation means that we ignore the
special meaning of the plus/minus sign information. This doubles the
maximum value up to the full +4,294,967,295 (2<sup>32</sup>-1, not
2<sup>32</sup>, since zero takes up one of the available 2<sup>32</sup>
values), but the price is that there's no such thing as a negative
number in this interpretation (thus the name "unsigned").

The main value of an unsigned interpretation is when you're using an
integer as a combination of bit flags (using the bitwise operators
`\|` and `&`), or for
interpreting raw bytes from a binary file format or other binary source,
rather than as an arithmetic value. In this case, an unsigned view lets
you see all of the bits directly, without regard to how the machine uses
the bits to encode negative numbers.



`undo()`



Undoes all changes to object state back to the most recent undo
savepoint, as established with the `savepoint()`
function. Returns `true` if successful,
`nil` if insufficient undo information is
available. This can be called repeatedly; each call undoes changes to
the next most recent savepoint. All changes affecting object state since
the last savepoint are undone by this operation, except that transient
objects are not affected.

When the function returns `nil`, it will have
made no changes to the system state. The function never makes any
changes unless it has a complete set of undo information back to a
savepoint, so the function will never leave the system in an
inconsistent state. The VM has an internal limit on the total amount of
undo information retained in memory at any given time, to keep memory
consumption under control during a long-running session; as new undo
information is added, the VM discards the oldest undo information as
needed to keep within the memory limits. This maintains a rolling window
of the most recent undo information.
------------------------------------------------------------------------



*TADS 3 System Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="builtins.html" class="nav">The Intrinsics</a> \> tads-gen
Function Set  
<span class="navnp"><a href="t3vm.html" class="nav"><em>Prev:</em> t3vm Function Set</a>
   
<a href="regex.html" class="nav"><em>Next:</em> Regular Expressions</a>
    </span>


