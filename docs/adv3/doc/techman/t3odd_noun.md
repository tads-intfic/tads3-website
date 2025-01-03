---
layout: docs
---


<img src="topbar.jpg" data-border="0" />





<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="advtop.html" class="nav">Advanced Topics</a> \> Handling Odd
Noun Phrases  
<span class="navnp"><a href="t3staging.html" class="nav"><em>Prev:</em> Using Nested Rooms as
Staging Locations</a>    
<a href="t3globalremap.html" class="nav"><em>Next:</em> Global Command
Remapping</a>     </span>





# Handling Odd Noun Phrases

The TADS 3 library's English command parser makes it easy to create a
wide range of object names in your game:

> book  
> orange box  
> yellow piece of paper  
> small pile of dry straw  
> \#47 bus  
> P.O. Box 39  
> button 7  
> 7 button  
> "lobby" sign  
> button "G"  

All of the object names above can be programmed with almost no work -
all you have to do is define the appropriate "noun" and "adjective"
vocabulary for the objects. The parser knows that simple noun phrases
consist of zero or more adjectives and a noun. It understands that the
word "of" can be used to link two simple noun phrases. The parser
recognizes "#" signs as parts of numbers, and knows that numbers (or
quoted phrases) might come before or after the noun they modify. In
practice, these relatively simple rules built into the English library
can handle a surprising fraction of object names.

Once in a while, though, an object that you want to include in your game
will have a name that doesn't fit any of the pre-programmed patterns. No
human language (least of all English) is perfectly regular - there's
always something that breaks the mold, something that doesn't fit any of
the usual patterns.

> Science and Progress Magazine  
> the A and P  
> Kranky the Clown  
> the key to the wall safe  

Object names that don't fit the parser's standard patterns are
relatively uncommon, but it does seem like one crops up in every game.
Fortunately, the TADS 3 parser is readily extensible, so you can plug in
your own custom object name parsing when the need arises.

A full explanation of the TADS 3 grammar-rule system is beyond this
article's scope, but if you're not already familiar with the grammar
system, don't worry. We'll provide step-by-step recipes for a few common
cases, so with any luck, you'll be able to find something close enough
to your situation that you can follow the recipe.

## Step One: Choosing where to add the new rule

The first thing you have to decide is how your special object name fits
into regular English. There are three common cases:

- The special part of the name acts like an adjective, in that it comes
  before and qualifies a noun. The overall phrase is still something you
  can qualify with words like "the" or "a" or "his." This is the kind of
  phrase that we'd use for something like "Science and Progress
  Magazine" - the "science and progress" part acts like an adjective
  that modifies "magazine." In these cases, you should define an
  **adjWord** grammar rule.
- The special part acts like an entire noun phrase, but it can still be
  qualified by words like "the." This is useful for things like "the A
  and P" (which might also fit the adjective pattern above, if it were
  also called "the A and P store"). For these, define a **nounPhrase**
  grammar rule.
- The name is an entire noun phrase, and you can't even further qualify
  it with words like "the." This is usually the case with proper names,
  like "Kranky the Clown." In these cases, you should define a
  **qualifiedSingularNounPhrase** grammar rule.

To choose where you should define your new rule, think about how you'd
use the phrase in ordinary English. Think about whether it sounds right
when you put words like "the," "a," or "his" in front of the phrase.
Think about where the special part of the phrase is: is there just one
way of saying the entire phrase, or is it just special because there's a
special word (like "and") somewhere in it? If there's just a special
word, find the smallest sub-phrase that seems to stand alone. In
"science and progress magazine," for example, the special part is
"science and progress," which we can see acts like an adjective, because
it modifies our noun "magazine."

## Step Two: Defining the new rule

Now that you've chosen where to define the rule, we actually have to
define it. This takes a little bit of special TADS 3 syntax. We'll show
four examples for some common situations.

The first example is for something like "science and progress" magazine,
where we want to define "science and progress" as a special adjective
phrase.

    grammar adjWord(sAndP) :
        'science' 'and' 'progress'
        : SpecialNounPhraseProd
        getMatchList = [magazine]
        getAdjustedTokens =
          ['science', &adjective, 'and', &adjective, 'progress', &adjective]
    ;

Okay, let's go over that in detail.

The first line says that we're defining a new grammar rule, and that
we're plugging it in under the "adjWord" rules. The library already has
several adjWord rules of its own, so the part in parentheses - the
"(sAndP)" - gives our new rule its own unique name among the other
adjWord rules. You have to make up a unique name like this for each
grammar rule you define. The name doesn't mean anything; it's just a
unique identifier, just like an object name or a function name. Just
choose something descriptive that makes sense to you.

Note that all that punctuation - the parentheses, the colon on the end
of the line - is important. Type it exactly as shown.

The second line gives the actual words that we want to recognize in
player input. Each word is enclosed in single quote marks. The parser
simply matches the list of words exactly as given - so this rule will
match the input phrase "science and progress" in a player command, and
nothing else. Every single word in the rule has to match, and in the
exact sequence shown.

The third line gives the base class for the grammar rule. A grammar rule
is a special kind of object class, so it has a base class, just like any
other class definition. In this case, the base class is
SpecialNounPhraseProd, which we'll talk about more later. As with the
other punctuation in this definition, be sure you put in the colon at
the start of this line. (As always in TADS, the line breaks and
whitespace aren't important - you can put this whole rule on a single
line if you want. The only reason we put the colon at the start of this
line rather than on the end of the prior line is that some people find
it a little easier to read this way.)

Next, we define the "getMatchList" property. This is simply a list
giving the set of objects to which the grammar rule can possibly refer.
Here, we've included our "magazine" object in the list - this is just an
ordinary Readable object (for example) that we'll have to define
elsewhere in the game. When we match "science and progress" in player
input, this information tells the parser that the "magazine" object is
what the player is talking about.

Finally, the "getAdjustedTokens" property tells the parser how we're
interpreting the "tokens" (essentially, the individual words) in the
player's input when we match this grammar rule. In this case, we're
simply telling the parser that the phrase consists of each of its
constituent words, used as adjectives. The parser uses getAdjustedTokens
mainly for calling the matchName() method in the matched objects - the
result is passed as the "adjustedTokens" argument to matchName().

Now that we've defined the special adjective phrase, how do we define
our "magazine" object? This turns out to be quite simple; we define it
exactly as we would any ordinary object with an ordinary name - except
that we don't have to define any adjectives, because our special grammar
rule already knows that it refers to us.

    magazine: Readable 'magazine' 'Science and Progress magazine'
        "It's a popular science magazine.  You usually enjoy it when
        you have a chance to read it, but you hardly ever seem to have
        the time these days. "
    ;

Now, when we type "read magazine," the parser will match our noun using
the ordinary library grammar rules. When we type "science and progress
magazine," the parser will still match us: it'll match our ordinary noun
"magazine," and it will match the "science and progress" part to our
custom adjWord grammar rule.

What happens if we just type "science magazine," though? It turns out
this *won't* match our "magazine" object, because there's no rule for it
to match. The single word "science" doesn't match our custom rule,
because our custom rule only matches the entire phrase "science and
progress." And we don't have any ordinary adjectives defined for this
object. If we wanted to match "science magazine" or "progress magazine,"
we could simply add these as ordinary adjectives to our "magazine"
object:

    magazine: Readable 'science progress magazine'
        // and the rest is the same...
    ;

The second case is for an entire noun phrase, such as "A and P":

    grammar nounPhrase(aAndP) :
        'a' 'and' 'p'
        : SpecialNounPhraseProd
        getMatchList = [aAndP]
        getAdjustedTokens =
          ['a', &noun, 'and', &adjective, 'p', &noun]
    ;

This is almost exactly the same as our "science and progress" rule
above, so we won't repeat all of the detailed explanations; we'll just
mention the changes. First, note that this is plugged into the
"nounPhrase" rules, because we want this to match an entire noun phrase.
Second, note that we're now returning an "aAndP" object when we match
the phrase. Third, our adjusted tokens reflect the new vocabulary, and
note that we treat 'a' and 'p' as a nouns. This is more or less
arbitrary, but it's a better fit for how we're interpreting the phrase.

For our "aAndP" object itself, note that we wouldn't need any vocabulary
at all, because the entire noun phrase is handled by our special grammar
rule.

The third case is for an entire noun phrase that doesn't allow any
further qualification (so we can't put "the" in front of it, for
example).

    grammar qualifiedSingularNounPhrase(kranky):
        'kranky' 'the' 'clown'
        : SpecialNounPhraseProd
        getMatchList = [clown]
        getAdjustedTokens =
          ['kranky', &noun, 'the', &adjective, 'clown', &noun]
    ;

Again, this is almost identical to the earlier examples. We're changing
the grammar rule we're plugging into, of course; in this case, it's
qualifiedSingularNounPhrase, because we want to treat this as an entire
phrase that doesn't allow any further qualification - no "the" or "a"
allowed. And we're changing the match list and adjusted tokens, for
reasons that should be obvious at this point.

## Step Three: Defining SpecialNounPhraseProd

We used something called SpecialNounPhraseProd as the base class for the
grammar rules in the examples above. You might have assumed that this is
a library class, but it's not - it's something we made up for these
examples. It's a simple class that you'll need to add to your game if
you add code based on these examples. Here's the class definition:

    class SpecialNounPhraseProd: NounPhraseWithVocab
        /* get the list of objects matching our special phrase */
        getMatchList = []

        /* resolve the objects */
        getVocabMatchList(resolver, results, flags)
        {
            /* return all of the in-scope matches */
            return getMatchList().subset({x: resolver.objInScope(x)})
                .mapAll({x: new ResolveInfo(x, flags)});
        }
    ;

You can just use this class as-is, but in case you're interested, here
are the basics of how it works.

The base class of our new class is NounPhraseWithVocab - and
fortunately, this one *is* a library class, so you don't have to worry
about defining it yourself. NounPhraseWithVocab is a base class for the
many grammar rules in the library that define noun phrases that have
associated vocabulary words.

We define the propery "getMatchList" purely for documentation purposes,
to make it easier to define each time we create one of these special
rules. Note that we've defined a fixed getMatchList in each of our
examples above, but you could just as well write a method that does
something dynamic.

Finally, we define the method "getVocabMatchList". Our base class,
NounPhraseWithVocab, requires each of its subclasses to define this
method, because it provides required information to other methods we
inherit from the base class. We define the method to return the in-scope
part of the match list we defined in getMatchlist - this ensures that
when we match our custom grammar, we'll only resolve it to objects that
are actually in scope for the current command.

## One More Thing: Special Punctuation

Sometimes the thing that makes an object name special isn't the words
that make up the name, but the letters and symbols that make up the
words:

> 7% solution  
> actor/singer

The parser doesn't normally recognize "%" or "/" as valid characters in
player input, so by default, you'll receive an error if you type one of
these: "The story doesn't know how to use the character '%' in a
command."

The part of the parser that handles these low-level details of
punctuation and word structure is called the "tokenizer." This is the
subsystem that scans the input command and separates it into words and
punctuation marks. The standard rules are defined in an object called
"cmdTokenizer" in the file en_us.t (which is found in English part of
the library, in the en_us subdirectory). The full details of the
tokenizer are a bit too much to cover here, so we'll just offer a couple
of recipes for common cases like those above.

If you want to make the parser recognize a punctuation mark that
currently isn't accepted at all, so that it can be used within words,
this is fairly easy. You just have to supplement the tokenizer's rules
for ordinary words, to add a regular expression pattern that includes
the new punctuation mark you want to add. For example, to recognize "7%"
and "actor/singer", we could add a tokenizer rule using this code:

    PreinitObject
        execute()
        {
            cmdTokenizer.insertRule(
                ['percentage', new RexPattern('<digit>+<percent>'),
                 tokString, nil, nil],
                'word', nil);
        }
    ;

We define this as a PreinitObject in order to insert our new rule during
the pre-initialization, when we're setting up the game just after
compiling it. Within our start-up code, we insert a new rule into the
master command tokenizer (the cmdTokenizer object). The new rule is the
part in square brackets; last two arguments - 'word',nil - tell the
tokenizer to insert our new rule just *before* the existing rule called
'word', which is the tokenizer's basic rule for picking out the ordinary
words in a command.

Choosing the right spot for a new rule isn't always trivial; the trick
is to put your new rule before any other rule that would pick out the
same characters for a different use. The tokenizer works left to right
through the command string, applying each rule in turn until it finds
one that works.

If you're not sure where to insert a new rule, the easiest thing to do
might be to insert it as the very first rule - that way, you'll be sure
that the tokenizer will try your rule first, before it tries any of the
built-in rules. To do this, rather than using "insertRule," use
"insertRuleAt(\[rule\], 1)" - the "1" tells the tokenizer to insert the
new rule at the first position, before any existing rules.

Back to the new rule: the rule itself is given by the contents of the
square brackets.

The first item is the name for the new rule; this is just an arbitrary
identifier, and its main use is to let you refer to your new rule again
in subsequent "insertRule" calls, so that you can insert more new rules
just before or after this one. Just give the rule a name that makes
sense to you.

The second item is a regular expression pattern. This is the key element
that determines what the rule matches in player input. The tokenizer
works by applying each rule in order to the command string, checking
each rule's regular expression, until it finds a rule with a matching
regular expression. The regular expression has to match the start of the
input string to qualify - the tokenizer doesn't search for a match to
the expression, but just tries matching from the start of the input
string. When a rule's pattern matches, the parser takes out the part of
the command string that matches, and then repeats the process (starting
again at the first token rule) on whatever remains of the input string.
In our case, we've defined a pattern that matches one or more digits
followed by a percent sign - when we see such a sequence of characters,
we'll pull it out as a token. So, we'll match tokens like "7%" or
"110%", but not just "%" (because we need at least one digit), and not
"abc%" (because we only match digits, not letters).

The third item is the type of token we generate. For tokens that you're
going to turn into object names, you should almost always make this
"tokString", which is a simple character string token.

The final two items let you define some special handling for the token
match, but that's a bit beyond this article. For the kinds of things
we're talking about here, you can always just set these to nil.

So that's the "percent" case. The "actor/singer" example can be handled
almost identically; the only thing we have to change is the regular
expression pattern, which in this case we'll define as accepting one or
more letters, a slash, and one or more letters:

    PreinitObject
        execute()
        {
            cmdTokenizer.insertRule(
                ['slash-word', new RexPattern('<alpha>+/<alpha>+'),
                 tokString, nil, nil],
                'word', nil);
        }
    ;

Note that if you're defining several custom tokenizer rules in your
game, you can combine the calls to cmdTokenizer.insertRule() into a
single PreinitObject, if you want. Just list the calls in sequence
within the execute() method.



------------------------------------------------------------------------



*TADS 3 Technical Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="advtop.html" class="nav">Advanced Topics</a> \> Handling Odd
Noun Phrases  
<span class="navnp"><a href="t3staging.html" class="nav"><em>Prev:</em> Using Nested Rooms as
Staging Locations</a>    
<a href="t3globalremap.html" class="nav"><em>Next:</em> Global Command
Remapping</a>     </span>


