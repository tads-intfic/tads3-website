::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Final Moves](final.htm){.nav} \>
Some Output and Input Issues\
[[*Prev:* Final Moves](final.htm){.nav}     [*Next:* Utility
Functions](utility.htm){.nav}     ]{.navnp}
:::

::: main
# Some Output and Input Issues

Outputting text to the screen in adv3Lite is mostly pretty
straightforward. Since, unlike adv3, there is no transcript as such,
text in a double-quoted string (or a say(txt) statement) is generally
output straight to the screen, thereby obviated most of the output
problems that can vex adv3 game authors.

About the one case you might have to worry about is text containing
[HTML markup]{#markup-idx}, especially if that markup contains quotation
marks (e.g. \<FONT NAME=\"Verdana\"\>). The problem is that by default
one of the adv3Lite output filters converts all straight quotes into
\"curly\" or \"typographical\" quotes, so that \" can become " or " and
\' can become ' or ', thereby messing up the HTML. This is also an issue
with the aHref() function that can be used to produce clickable command
links in your output (since it uses HTML markup). This was more of a
problem in earlier versions of adv3Lite. The adv3Lite library is now
better at handling quotation marks in HTML mark-up without user
intervention so it may be you won\'t experience any problems with this.
But just in case you do, there are a couple of ways round it.

One is to use the **htmlSay(txt)** function. This will output txt (given
as a single-quoted string) without any conversion of straight quotes to
typographical quotes, so it\'s safe to use with HTML mark-up or anything
else that needs to preserve the straight quotes.

The other, which you need to use if you want to output text using a
double-quoted string, is to disable and enable the cquotes output filter
before and after outputting your text, like this:

::: code
    cquoteOutputFilter.deactivate();
    "<FONT name='Verdana'>No curly quotes here!</FONT>";
    cquoteOutputFilter.activate();
:::

The library makes use of a number of other output filters which you may
occasionally find useful in your own game code. The most convenient way
to use them is probably via the appropriate methods of
outputManager.curOutputStream (which you can abbreviate to gOutStream):

-   **watchForOutput(func)**: Watch the stream for output. It\'s
    sometimes useful to be able to call out to some code and determine
    whether or not the code generated any text output. This routine
    invokes the given callback function, monitoring the stream for
    output; if any occurs, we\'ll return true, otherwise we\'ll return
    nil.
-   **captureOutput(func, \[args\])**: Call the given function,
    capturing all text output to this stream in the course of the
    function call. Return a string containing the captured text.

A simple example of the second of these might be:

::: code
      local str = gOutStream( {: "Hello World!" } );
      
:::

Which would result in str containing \'Hello World!\'. A more practical
example might be:

::: code
      local str = gOutStream( {: myObj.doSomething() } );
:::

When we don\'t know in advance what output doSomething() will produce.

[]{#input}

# Some Input Issues

## inputManager

You may want to look at the [inputManager](webui.htm#inputmanager)
methods for ways of pausing output and requesting input.

\
[]{#parserquery}

## Parser Queries

When the parser doesn\'t understand a player\'s command it will often
ask a clarificatory question, such as \"Which do you mean, the red ball
or the blue ball?\" in response to X BALL. Occasionally the parser may
then need to decide whether the player\'s response is intended to be an
answer to the query or a fresh command.

For example, consider the following exchange:

::: cmdline
     
     >X WALL
     Which do you mean, the east wall or the west wall?
     
     >EAST
:::

\
Is the player tellling the parser than s/he means the east wall, or is
s/he issuing a new command to go east? The parser\'s interpretation here
is governed by the **priority** property of the **ParseErrorQuestion**
class. If this is set to true (the default) then the parser will assume
that in such cases the player is responding to the immediately preceding
query (e.g., that s/he means to refer to the east wall). If game code
overrides it to nil, then the parser will make the opposite assumption.

Note that this only applies if the player\'s input could be interpreted
either way. So, for example, if instead of typing EAST the player typed
GO EAST this would be taken as a command to GO EAST in any case.

\

## StringPreParser

It is sometimes useful to alter the player\'s input before passing it to
the Parser to interpret. For this purpose you can use a
[StringPreParser]{.code} and define its **doParsing()** method:

::: code
     myPreParser: StringPreParser
        doParsing(str, which)
        {
            /* do stuff here */
            
            return str;
        }
     
     
:::

Here, *str* is the string typed by the player (possibly adjusted by one
or more previous StringPreParsers). The *which* parameter gives some
indication of the context of what the player just typed and can be one
of:

-   **rmcDisambig**: the player has just responded to a disambiguation
    prompt.
-   **rmcAskObject**: the player has just responded to a request to
    supply a missing object to complete a command.
-   **rmcCommand**: the player has entered a new command at the command
    prompt.

Note that even if *which* is [rmcDisambig]{.code} or
[rmcAskObject]{.code} the player may have entered a complete new command
instead of responding to the request to disambiguate or to supply a
missing noun. You code will need to check for this possibility.

[]{#comment}

The [doParsing()]{.code} method should then return the (same or
adjusted) string which will passed on to the Parser to interpret.
Alternatively it can return nil to signal that the StringPreParser has
dealt with the player\'s input in full, so the Parser can ignore it. For
example, the adv3Lite library defines a **commentPreParser** thus (in
order to field play-testers\' comments on beta versions of your game):

::: code
     /* ------------------------------------------------------------------------ */
    /*
     *   The "comment" pre-parser.  If the command line starts with a special
     *   prefix string (by default, "*", but this can be changed via our
     *   commentPrefix property), this pre-parser intercepts the command,
     *   treating it as a comment from the player and otherwise ignoring the
     *   entire input line.  The main purpose is to give players a way to put
     *   comments into recorded transcripts, as notes to themselves when later
     *   reviewing the transcripts or as notes to the author when submitting
     *   play-testing feedback.  
     */
    commentPreParser: StringPreParser
        doParsing(str, which)
        {
            /* get the amount of leading whitespace, so we can ignore it */
            local sp = rexMatch(leadPat, str);
            
            /* 
             *   if the command line starts with the comment prefix, treat it
             *   as a comment 
             */
            if (str.substr(sp + 1, commentPrefix.length()) == commentPrefix)
            {
                /*
                 *   It's a comment.
                 *   
                 *   If a transcript is being recorded, simply acknowledge the
                 *   comment; if not, acknowledge it, but with a warning that
                 *   the comment isn't being saved anywhere 
                 */
                if (scriptStatus.scriptFile != nil)
                    DMsg(note with script, 'Comment recorded. ');
                else if (warningCount++ == 0)
                    DMsg(note without script warning, 'Comment NOT recorded. ');
                else
                    DMsg(note without script, 'Comment NOT recorded. ');

                /* 
                 *   Otherwise completely ignore the command line.  To do this,
                 *   simply return nil: this tells the parser that the command
                 *   has been fully handled by the preparser. 
                 */
                return nil;
            }
            else
            {
                /* it's not a command - return the string unchanged */
                return str;
            }
        }

        /* 
         *   The comment prefix.  You can change this to any character, or to
         *   any sequence of characters (longer sequences, such as '//', will
         *   work fine).  If a command line starts with this exact string (or
         *   starts with whitespace followed by this string), we'll consider
         *   the line to be a comment.  
         */
        commentPrefix = '*'
        
        /* 
         *   The leading-whitespace pattern.  We skip any text that matches
         *   this pattern at the start of a command line before looking for the
         *   comment prefix.
         *   
         *   If you don't want to allow leading whitespace before the comment
         *   prefix, you can simply change this to '' - a pattern consisting of
         *   an empty string always matches zero characters, so it will prevent
         *   us from skipping any leading charactres in the player's input.  
         */
        leadPat = static new RexPattern('<space>*')

        /* warning count for entering comments without SCRIPT in effect */
        warningCount = 0

        /*
         *   Use a lower execution order than the default, so that we run
         *   before most other pre-parsers.  Most other pre-parsers are written
         *   to handle actual commands, so it's usually just a waste of time to
         *   have them look at comments at all - and can occasionally be
         *   problematic, since the free-form text of a comment could confuse a
         *   pre-parser that's expecting a more conventional command format.
         *   When the comment pre-parser detects a comment, it halts any
         *   further processing of the command - so by running ahead of other
         *   pre-parsers, we'll effectively bypass other pre-parsers when we
         *   detect a comment.  
         */
        runOrder = 50
     
:::

Note the use of the **runOrder** property to determine the order in
which this StringPreParser is consulted in relation to any other
StringPreParsers that have been defined. StringPreParsers are run in
ascending order of their [runOrder]{.code} property (i.e. lowest first);
the default value of [runOrder]{.code} is 100.

Note that StringPreParsers also have an **isActive** property; this can
be set to nil on individual StringPreParsers if you want to temporarily
disable them.

Finally, note how the **commentPrefix** property of the
[commentPreParser]{.code} defined above can be overridden to change the
character (or characters) used to introduce a play-tester\'s comments.

As an example of a StringPreParser that (sometimes) changes the text
passed to it into something else, here\'s the [queryPreParser]{.code}
defined in the adv3Lite library (its function is to change commands like
WHERE\'S THE SALT into a form like WHERE IS THE SALT, that the parser
can more easily understand):

::: code
    /* 
     *   For queries, turn an apostrophe-s form into the underlying qtype plus is so
     *   that the grammar defined immediately above can be matched.
     */

    queryPreParser: StringPreParser
        doParsing(str, which)
        {
            local s = str.toLower();
            
            /* First, check that this looks like a query */
            if(s.startsWith('a ') || s.startsWith('ask ') || s.substr(1, 3) is in
               ('who', 'wha', 'whe', 'why', 'how'))
            {
                str = s.findReplace(['what\'s','who\'s', 'where\'s', 'why\'s',
                    'when\'s', 'how\'s'], ['what is', 'who is', 'where is', 'why
                        is', 'when is', 'how is'], ReplaceOnce);        
                           
            
            }

        
            return str;
        }
    ;
     
     
:::
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [Final Moves](final.htm){.nav} \>
Some Output and Input Issues\
[[*Prev:* Final Moves](final.htm){.nav}     [*Next:* Utility
Functions](utility.htm){.nav}     ]{.navnp}
:::
