---
layout: docs
---


<img src="topbar.jpg" data-border="0" />





<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="fund.html" class="nav">Fundamentals</a> \> Some Common
Input/Output Issues  
<span class="navnp"><a href="t3oop.html" class="nav"><em>Prev:</em> Object-Oriented
Programming Overview</a>    
<a href="t3build_config.html" class="nav"><em>Next:</em> Using Build
Configurations</a>     </span>





# Some Common Input/Output Issues

*by Eric Eve*

## Introduction

For the most part, input and output in TADS 3 is pretty straightforward.
The player types commands at the command prompt and presses the RETURN
or ENTER key, and your game responds. You output text to the screen
using a string in double-quotes such as `"this will be
shown on screen"` or else by using the
`say()` function, and the library contributes to
the output with its own standard messages and responses. For many games
this is enough, and there's no need to complicate matters any further.

Some games, however, may occasionally need to do more, such as pausing
the output for dramatic effect, clearing the screen, waiting for a
keypress, or asking the player to input something other than a command
at the regular command prompt. TADS 3 provides a set of i/o functions to
handle this, which the *System Manual* documents in the section on the
[tads-io Function Set](../sysman/tadsio.html). If you've tried to use
some of these functions, however, you may have found that they don't
work in quite the way you expected. In fact, they may not be the best
tools to get the job done (and if you want to compile your game for the
[Web UI](../sysman/webui.html) they won't work at all). This article will
briefly explore some of the alternatives.

## The inputManager

The tads-io function set includes the functions
`morePrompt()`, which displays a MORE prompt and
waits for the player to press a key;
`inputKey()`, which waits for the player to
press a key and returns the key pressed, and
`inputLine()`, which reads a whole line of text
from the player (up to the point the player presses the ENTER or RETURN
key) and then returns the string entered.

The trouble is, as you will soon discover if you've tried to use them,
that these functions don't entirely work as you want them to. For
example you may try placing `morePrompt()` in a
the middle of some text to create a dramatic pause, but what actually
happens is that all your text is displayed, and only then the does the
more prompt appear, at the end, and not in the middle where you actually
wanted it. E.g. you might write code like:

```
    "The evil baby-eating villain points his splat-gun at you, pulls the trigger and...";  
    morePrompt();   
    "... suffers a sudden fatal heart attack! ";  
     
      

    But you then find the more prompt is actually displayed after the second line of text,
    defeating your dramatic pause. 

    One way to deal with this is to toggle the transcript off and on: 


    gTranscript.deactivate(); 
    "The evil baby-eating villain points his splat-gun at you, pulls the trigger and...";   
    morePrompt();   
    "... suffers a sudden fatal heart attack! ";    
    gTranscript.activate(); 
     

    But this is a little long-winded. The simpler way would be to use an inputManager method: 


    "The evil baby-eating villain points his splat-gun at you, pulls the trigger and...";   
    inputManager.pauseForMore(true);   
    "... suffers a sudden fatal heart attack! ";  
     
      

    And you should find this works as you want. 

    So rather than use the three tads-io functions mentioned above, it's
    generally better to use the corresponding inputManager methods: 


    Instead of morePrompt() use 
    inputManager.pauseForMore(true);
      
    Instead of inputKey()
    use inputManager.getKey(nil, nil);
      
    Instead of inputLine() use
    inputManager.getInputLine(nil, nil);  
     
     
    The arguments of these methods will only be of interest to you if you want to allow real time 
    events to continue in the background while waiting for user input; this is a complication we
    shan't go into here - if you need real time processing look at the definition of inputManager in the Library Reference Manual (or input.t) and follow the comments in the library code. 

    If you were planning to make a lot of use of these methods in your game,
    you might find it convenient to define wrapper functions (or perhaps macros)
    for them, to save you not only a bit of typing but the need to remember the
    appropriate argument list for each one on each occasion, e.g.:


    more() { inputManager.pauseForMore(true); }

    waitKey() { return inputManager.getKey(nil, nil); } 
     

    Or, if you got to the point of needing more sophisticated versions that
    would optionally allow you to pass the arguments to the inputManager methods
    when you actually needed them (but only when you actually need them), you could define:


    more(freezeRealTime = true) { inputManager.pauseForMore(freezeRealTime); }

    waitKey(allowRealTime?, promptFunc?) 
    {      
       return inputManager.getKey(allowRealTime, promptFunc); 
    } 
     

    But that's a sophistication you'll only need if you're trying to implement real-time
    input, so it may well be that the simpler definitions will suffice.

    The About Box and Clearing the Screen

    There may be points in the game when you want to clear the screen: for example, at the
    end of an extended prologue, or to mark some other dramatic change of scene. The tads-io 
    function set includea a clearscreen() function for this purpose, and
    you may well have been tempted to use it.

    You may also have come across the <ABOUTBOX> tag than can be used to create an about
    box that displays when a player selects Help|About from an interpreter window. For example, 
    the following would create a fairly general purpose plain-vanilla about box:


    "<ABOUTBOX>
     <CENTER>
     <<versionInfo.name.toUpper()>>\b
     <<versionInfo.byline>>\b
     Version <<versionInfo.version>>\b       
     </CENTER>
     </ABOUTBOX>";


    These seemingly disparate points are actually related. For if you have ever used 
    clearscreen() to clear the screen, you may have noticed that 
    it causes your about box to disappear. Clearing the screen also clears the about box.

    There is a straightforward solution; you just need to do two things:

    Don't use clearscreen(); use the library function in
    cls() instead.
    Use gameMain.setAboutBox() to define your about box, e.g.:



    gameMain:GameMainDef
        initialPlayerChar = me

        setAboutBox()
        {
          "<ABOUTBOX>
           <CENTER>
           <<versionInfo.name.toUpper()>>\b
           <<versionInfo.byline>>\b
           Version <<versionInfo.version>>\b       
           </CENTER>
           </ABOUTBOX>";
        }
    ;


    There's a second and subtler reason why you should always use cls()
    rather than clearscreen(); cls()
    flushes the transcript before clearing the screen, ensuring that any buffered reports
    don't appear on the screen after it's been cleared.

    Finally, if you are intending to compile your game for the Web UI you must use cls() rather than clearscreen(), since clearscreen() is another tads-io function that won't work with the Web UI. Neither, for that matter, will <ABOUTBOX>.

    The mainOutputStream

    The complement to the inputManager object is the mainOutputStream object, which has a number of methods that can sometimes be useful. However, the situations in which they're likely to 
    prove useful are rather less common than the ones we've been looking at up to now, and the
    treatment of them is a bit more advanced. The main things we'll be discussing in this
    section are how to capture the output of a routine (such a double-quoted string, or a method
    that displays something) in a single-quoted string so we can examine it or manipulate it, and
    how to test whether a routine actually output anything to the display. If these aren't of
    any immediate interest you may want to skip to the final piece on 
    typographical quotes right at the end.

    captureOutput()

    Surprisingly enough, the captureOutput() method allows you to
    capture output (i.e. store what would have been output to the screen in a variable or property instead). To do this you can call 
    mainOutputStream.captureOutput(func, [args]). This takes a function
    pointer as its first argument, and the arguments to that function (if any) as its remaining arguments. It returns the string that would have been output to the screen. The 'function
    pointer' can typically be an anonymous function, and often a short-form one (if you're not
    sure what that means, see the section on Anonymous Functions
    in the System Manual).

    For example, the statement: 


    local utterance = mainOutputStream.captureOutput( 
                             {: "The rain in Spain stays mainly in the plain. " }); 


    Would result in utterance containing the string 
    'The rain in Spain stays mainly in the plain. ', without anything being output to the screen. 

    That particular example may not be particularly useful, but it serves to illustrate the
    principle. To take develop a slightly more elaborate example, suppose we needed to get at the
    value of a property defined as a double-quoted string, such as the desc property of a Thing, in order to manipulate it in some way. We might, for example, have defined a number of objects
    like: 


    redBall: Thing 'big red bouncy round ball' 'red ball' 
      "It's a big bouncy object, red and round. " 
    ; 

    blueBall: Thing 'small blue round bouncy ball' 'blue ball'
      "It's a small bouncy ball, blue and <<flattened ? 'flat' : 'round'>>"
      flattened = nil
    ;



    Now suppose that for some bizarre reason we need to construct a list of all the 
    objects in our game whose descriptions contain the words 'round' and 'bouncy'. 
    The problem is that there's no obvious way to manipulate double-quoted strings; the
    only thing TADS 3 lets us do with them is display them. It's bad enough in the case
    of the red ball, since TADS 3 provides no means of searching a double-quoted string 
    for a substring; in the case of the blue ball it looks even trickier, since the blue 
    ball's description depends on the value of its flattened 
    property. The way it's defined makes it effectively equivalent to a method for printing
    different strings under different circumstances, and one can hardly look for a substring
    of a method.

    But one can look for substrings in the output that a double-quoted string or
    method would display. All we need do to do is to capture the output of these 
    desc() methods or properties in a single-quoted string,
    which we can then manipulate. This can be achieved like so:



    roundBouncy()
    {
      local vec = new Vector(10);
      
      forEachInstance(Thing, new function(obj) {
           local str = mainOutputStream.captureOutput({: obj.desc() });
           local toks = Tokenizer.tokenize(str);
           if(toks.indexWhich({tok: getTokOrig(tok) == 'round'})
             && toks.indexWhich({tok: getTokOrig(tok) == 'bouncy'}))
           {
             vec.append(obj);
           } 
       }
      );

      return vec.toList();
    }


    Don't worry if you don't understand all this code; if some parts look a bit puzzling
    they're probably the parts that are just providing shortcut ways to loop over collections
    of objects and tokens to find the ones we want. The important thing is that we can use


    local str = mainOutputStream.captureOutput({: obj.desc() });


    to convert whatever obj.desc() outputs into a single-quoted
    string that we can then inspect and manipulate as we please.

    Note that if we know for sure that a property holds a simple double-quoted string, and not a method that prints a double-quoted string, or a double-quoted string that contains an embedded expression (with the << >> syntax), then we could obtain the equivalent single-quoted string with:


    local str = obj.getMethod(&desc);


    But if, as in the example above, we can't be sure that the property or method whose string value we want doesn't hold a method, then it's much safer to use the string capture technique just described.

    watchForOutput()

    Another thing mainOutputStream can help with is determining whether anything has been output at all. For this you use its watchForOutput() method. 
    You use it by calling 
    mainOutputStream.watchForOutput(func), which returns true if 
    calling func() caused something to be displayed and nil otherwise. 

    For example, suppose you define a class with a specialMessage property, which may contain
    either a double-quoted string, or a routine that displays a string, or a single-quoted string, 
    or a routine that returned a single-quoted string, or a number, and we want it displayed
    appropriately whichever of these ways the property is defined. If specialMessage property
    is a double-quoted string or a routine that prints a string, then all we need to do is
    invoke it. If it contains a single-quoted string or a number, then we need to take further
    action to display its contents. We could do it like this:


     class SpecialThing : Thing  
        specialMessage = nil   
        showSpecialMessage   
        {   
          local val;   
          local hasDisplayed = mainOutputStream.watchForOutput( {: val = specialMessage } ); 
          if(!hasDisplayed)          
           switch(dataType(val))   
           {   
             case TypeSString:   
             case TypeInt: "<<val>><.p>"; break;   
             case TypeTrue: "True<.p>"; break;   
             default: "Nothing to report. ";              
           }     
        }   
     ;  
      
     specialBall: SpecialThing 'ball' 'ball'   
        specialMessage = "It's a special ball.<.p>"
     ;  
     
      
     specialStick: SpecialThing 'stick' 'stick'   
        specialMessage = 'It\'s a stick. '   
     ;  
     
       
     specialNumber: SpecialThing 'number' 'number'   
        specialMessage = 532   
     ;  
     
      
     DefineIAction(Test)   
       execAction()   
       {   
         specialBall.showSpecialMessage;   
         specialStick.showSpecialMessage;  
         specialNumber.showSpecialMessage;   
       }   
     ;  
     
     
     VerbRule(Test)   
      'test'   
      :TestAction   
     ;  
     
      

    In this case, issuing the command TEST will result in the display: 


       >test
       It's a special ball.
       It's a stick. 
       532 

Although in this case we could have tested for
`dataType(val)` being of kind
`TypeDString`, that wouldn't work in the more
general case in which `specialMessage` was a
routine that may or may not display something, e.g:



     specialBall: SpecialThing 'ball' 'ball'   
        specialMessage   
         {   
           if(fooVal < 2)   
             "It's an ordinary ball. ";   
           else if(fooVal == 2)     
             "It's a special ball.<.p>";   
           else if(fooVal > 10)   
             "It's a very special ball. ";   
           return 'It\'s a moderately special ball. ';   
         }   
        fooVal = 4   
     ;  
```

In this highly artificial example,
`specialBall.specialMessage` always returns
'It\\s a moderately special ball. ' but may also display a different
string as well depending on the value of
`specialBall.fooVal`. Calling
`specialBall.showSpecialMessage` will cause
'It\\s a moderately special ball. ' to be displayed if and only if
`fooVal` is between 3 and 9 inclusive; otherwise
one of the other messages will be displayed instead.

### Output Filters

If you look up the `OutputManager` class in the
*Library Reference Manual* (or in output.t), you'll see that it has a
number of methods for adding and removing Output Filters:
`addOutputFilter(filter), addOutputFilterBelow
(newFilter, existingFilter),` and
`removeOutputFilter(filter)`. An OutputFilter is
simply an object that defines a `filterText()`
method that can process any string passed to it and then pass it on to
the next filter (or, finally, to the display). Both
`captureOutput()` and
`watchForOutput()` work by temporarily
installing an OutputFilter and then removing it again when it's done its
job. The library also installs a number of OutputFilters to carry out
tasks such as managing the transcript and interpreting style tags. For
the most part you can leave the TADS 3 library to employ the
OutputFilters it uses automatically, and you may write dozens of TADS 3
games without ever worrying about this mechanism.

It may, however, be useful to know that it's there, just in case the
time should come when you want to manipulate the output in ways that go
beyond what the normal display mechanism offers (e.g. to summarize a
series of action reports into one summary report). This is not something
we shall attempt to go into here; the point is just to note that
OutputFilters *may* turn out to be something you could use sometime in
the future. <span id="typo"></span>

There is, however, one further OuputFilter you might find useful
straight away: this is the `cquoteOutputFilter`
provided by Stephen Granade's very useful cquotes.t extension. (The
source file is in the *lib/extensions* folder in the standard TADS 3
distributions.) Its function is simply to change straight quotes into
typographic (curly) ones. Since many of the library messages use
typographic quotes, and output from code you've written using
`\<q\>` and `\</q\>`
tags will also use them, but since it's a huge effort to use
`&rsquo;` for every apostrophe in your own text,
you can all too easily end up with a ugly mixture of quote styles like:

“Let's get going – I'm starving!” Bob insists.

When it would look so much better to have:

“Let’s get going – I’m starving!” Bob insists.

The cquotes.t extension makes this easy by installing an OutputFilter
that converts all your straight apostrophes (') into typographical ones
(’), without your having to go to the trouble of typing
`&rsquo;` for each and every apostrophe in your
game. It's both an extension well worth using, and a neat illustration
of the potential usefulness of OutputFilters.

### Displaying ASCII Diagrams

Sometimes in a game it's useful to be able to dispay a diagram or
picture made up from ordinary text characters, perhaps as a crude map,
along the lines of:

    +---   -----------
    |    *         +  \
    |    *     |   |   \
    +-------------------

If we try to do this in TADS 3, however, we that find the normally
helpful output formatting, designed to produce good-looking textual
output, will do its best to defeat us. In particular, runs of
consecutive dashes will be converted to m-dashes or n-dashes, and runs
of consecutive spaces will be converted to a single space.

The conversion of consecutive dashes into m-dashes and n-dashes is
carried out by an OutputFilter called the typograhicalOutputFilter.
Perhaps the neatest way to solve this part of our ASCII art problem is
to tweak the typographicalOutputFilter so we can turn it off when we
don't want it (i.e. when we're about to output our diagram) and turn it
back on again when we do (i.e. when we've finished with our diagram and
we're ready to display ordinary text again):

```
    modify typographicalOutputFilter
        isActive = true
        activate() { isActive = true; }
        deactivate { isActive = nil; }
        filterText(ostr, val) { return isActive ? inherited(ostr, val) : val; }
    ;  
```

Next, we can define a special function for displaying diagrams; this can
deactive and reactive the typographicalOutputFilter and also convert
ordinary spaces to quoted spaces so that consecutive spaces won't be
reduced to single spaces. It's probably convenient if the function
accepts a list of strings and inserts a newline after each one, and also
if it sets and unsets the use of a fixed-spacing font. Our custom
function could thus look something like this:

```
    showDiag(lst)
    {    
        typographicalOutputFilter.deactivate();
        "<pre>";
        foreach(local txt in lst)
        {
           txt = txt.findReplace(' ', '\ ', ReplaceAll);
           "<<txt>>\n";
        }
        "</pre>";
        typographicalOutputFilter.activate();
    } 
```

We could then use the following code to display our ASCII diagram:

```
    local diag = [
        '+---   -----------',
        '|    *         +  \',
        '|    *     |   |   \',
        '+-------------------'    
      ];
     
    showDiag(diag);
```



------------------------------------------------------------------------



*TADS 3 Technical Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="fund.html" class="nav">Fundamentals</a> \> Some Common
Input/Output Issues  
<span class="navnp"><a href="t3oop.html" class="nav"><em>Prev:</em> Object-Oriented
Programming Overview</a>    
<a href="t3build_config.html" class="nav"><em>Next:</em> Using Build
Configurations</a>     </span>




