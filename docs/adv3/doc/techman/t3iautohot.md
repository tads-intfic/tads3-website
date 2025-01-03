---
layout: docs
---


<img src="topbar.jpg" data-border="0" />
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="fund.html" class="nav">Fundamentals</a> \> Using AutoHotKey with
the Workbench Editor (Windows)  
<span class="navnp"><a href="t3inc.html" class="nav"><em>Prev:</em> Understanding Separate
Compilation</a>    
<a href="gameinfo.html" class="nav"><em>Next:</em> Bibliographic Metadata
- the GameInfo Format</a>     </span>
# Using AutoHotKey with the Workbench Editor (Windows)

*by Eric Eve*

## Introduction

The editor incorporated into TADS 3 Workbench for Windows comes with
many excellent features for creating and editing Interactive Fictions
written in TADS 3, but one potentially useful feature it lacks is a way
of creating macros to automate common programming tasks or ease the
typing of fiddly but frequently used key combinations. This article
outlines one way of adding this feature to the Workbench editor using
third party software.

First, visit the AutoHotKey website at <http://www.autohotkey.com/> from
where you can download the program and, as and when you need to, read
the documentation. Go to the download page and download the installer to
a convenient location (you have a choice of versions; in this article
we'll only be looking at very basic features, so you could download the
basic version, but if you think you might like to explore more advanced
features later on, by all means download the newer version,
AutoHotKey_L). Once the file is downloaded, double-click on it to run
the installer, and follow the instructions the installer should give
you.

Next, use your favourite text editor (Notepad will do) to create a plain
text file, and then save it in a convenient location giving it a name
with the extension ahk, for example "tads.ahk". You might find it
convenient to place it in your Startup Folder, then it will be
automatically loaded at startup. When it's loaded you should see an icon
in the system tray that looks a white H on a green square. To load your
script (ahk file) manually, you need to double-click on its icon (or
name in a list) in Windows Explorer, but there's no point doing that
until we've put something in the file. Once the system tray icon
appears, you can right-click on it to bring up a menu of items that
includes, for example, editing and reloading the script, as well as a
Help option, but first we need to write a script.

## Adding Some Basic Hotkeys

Assuming you still have your .ahk file open in your text editor, try
adding the following to the file and then saving it:

```
    #ifWinActive ahk_class TADS_MDIFrame_Window
    {
    #`::Send \'
    #Enter::Send <.p>
    #p::Send <.p>
    #q::Send <q></q>{Left 4}
    #i::Send <i></i>{Left 4}
    #r::Send <.reveal >{Left}
    #c::Send <.convnode >{Left}
    #[::Send &#123;&#123;}{}}{Left}
    }  
     

    The first line #ifWinActive ahk_class TADS_MDIFrame_Window ensures that the hotkeys you have just defined are only operative when Windows Workbench is the active window. This means you can define TADS-specific hotkeys here and not have them get in the way of any other program; indeed by using multiple #ifWinActive statements you could include hotkey definitions for some of your other favourite programs as well, which will only work when those particular programs are running in the active window. (To find out what identifier to put after #ifWinActive, bring whichever program you’re interested in to the front and then select the Window Spy option from the context menu that appears when you right-click on the AutoHotKey icon in the System Tray). The braces { } then indicate which elements of the script are subject to the #ifWinActive condition, much as braces denote the extent of an if-statement in TADS 3 code.
    The definitions that follow all take the form of the hotkey combination to press, followed by a double colon (::) followed by what happens when the hotkey combination being defined is pressed. The hash sign (#) represents the Windows key, so here we’re defining a series of hotkey combinations that all involve pressing the Windows key plus one other key. The letter or symbol that follows is the key that must be pressed along with the Windows key to trigger the hotkey action, except that where it appears Enter refers to the Enter key.
    Thus the first hotkey combinate we’re defining, #`::Send \', is triggered by pressing the Windows Key together with the backquote key (`), which we’ll abbreviate to Win+`. The Send command that follows the double colon tells AutoHotKey to send the characters that follow to the active window, just as it they'd been typed at the keyboard, so the effect of hitting Win+` is simply to type \' (an escaped single-quote mark). Depending on your keyboard layout, you may or may not find this easier than simply typing \', but it illustrates the principle.
    The next two lines provide two different hotkey combinations, Win+p and Win+Enter, for inserting the <.p> paragraph-break tag into your TADS 3 source code. Here there almost certainly is at least some gain, since <.p> can be a little fiddly to type.
    The fourth line, #q::Send <q></q>{Left 4}, is probably even more useful. This not only outputs the code for opening and closing smart quotes, but then moves the cursor back four spaces so that it ends up between the opening and closing quote markers, like this <q>|</q>, ready for you to type what you want to go between the quotes. Not only does this save quite a bit of typing, it also makes sure that the opening and closing smart quote tags end up matched, something it can be surprisingly easy to fail to do when typing them manually. Note that we use {Left 4} at the end of the line here to move the cursor four spaces to the left, so that it ends up where we want it.
    The fifth line, #i::Send <i></i>{Left 4} uses exactly the same principle to give us a matched pair of opening and closing italicizing tags with the cursor placed between them, so that Win+i give us <i>|</i> (where | marks the position of the cursor). 
    The sixth and seventh lines make it a bit easier to enter reveal and convnode tags, converting Win+r into <.reveal |> and Win+c into <.convnode |> (where | once again denotes the position where the cursor ends up, not a literal vertical bar).
    The final line, #[::Send &#123;&#123;}{}}{Left} causes Win+[ to output a matched pair of braces with the cursor placed between them, like this: {|}. We might use this to enter a parameter substitution string in our TADS source code. Note a small complication here. Since opening and closing braces (along with one or two other characters, such as +,^,!, and #) have a special meaning in a Send statement, we need to escape them by surrounding them with braces.
    The above examples all used the Win key as an element of the hotkey combination, but plenty of other keys can be defined for the purpose. For the full list consult the AutoHotKey help file or visit http://www.autohotkey.com/docs/Hotkeys.html

    Hotstrings

    In addition to defining hotkeys, we can define hot-strings, strings that act as abbreviations for a longer piece of text, that is a sequence of characters that turns into another string of characters on the appropriate trigger (which can be either simply completing the string, or else typing the string and then typing a concluding character such as a space or punctuation mark). This is probably best explained by means of a simple example. Open your ahk file (right click on the H icon in the system tray and select the 'Edit This Script' option from the context menu) and add the following line just before the closing brace:


    :*:th#::Thing '' ''{enter}""{enter};{Up}{Up}{End}{Left 4}
     


    Now right click on the H icon in the system tray again and select the 'Reload This Script' option (note you always need to do this after editing your script to make any changes take effect). Now go to the Workbench editor and type the key combination th#. You should find that it’s more or less instantly replaced with:


    + Thing '|' ''
        ""
    ;
     
    That is, with the bare skeleton of a Thing with the cursor positioned ready for you to type the vocabWords section of the Thing template, and the other parts of the template ready to be completed.

    In this type of definition the first :: introduces the hot-string definition, the text between the first :: and the second :: represents the abbreviation to be typed to trigger the hot-string substitution, and the text following the second :: is the text that’s to be used to replace the abbreviation, in this case a skeletal Thing definition. Finally we place an asterisk (*) between the first and second colon (giving :*:) to tell AutoHotKeys not to wait for a terminating key before making the substitution, but to make the substitution as soon as # is typed.

    A skeletal Thing may be of only marginal benefit. With some other classes the benefit may be more apparent. For example a RoomPartItem generally needs to define a specialDesc property and a specialNominalRoomPartLocation property, the latter being quite a fistful to type. So you might define the following hotstring to cope with it:


    :*:rpi#::
    send RoomPartItem '' ''{enter}""{enter}specialDesc = ""{enter}
    send specialNominalRoomPartLocation = default{enter};{Up 4}{End}{Left 4}
    return
     

    On typing the closing # of rpi# this should then be replaced with:


    RoomPartItem '|' ''
        ""
        specialDesc = ""
        specialNominalRoomPartLocation = default
    ;
     

    Where | once again denotes where the cursor should end up (ready for you to type the vocabWords for this RoomPartItem). The value of the specialNominalRoomPartLocation property is typically something like defaultNorthWall, which is why we have the substitution provide specialNominalRoomPartLocation = default ready for us to add northWall or whatever other room part we want immediately after default.

    Since this definition would be awkward to fit on one line in our ahk script file, we have used a multi-line form, which we terminate with the return keyword. In this form :*:rpi#:: needs to stand on a line by itself, and we need to use an explicit send command at the start of each line that follows.

    As another example, we could use the hotstring age# to generate a skeleton AgendaItem. Since an AgendaItem is generally located directly in an Actor, we could include a plus sign at the start of the definition, and then position the cursor just after it ready to type the Agenda object's name:


    :*:age#::
    Send {+} : AgendaItem{enter}isReady = true{enter}{enter}
    Send invokeItem(){enter}&#123;&#123;}{enter}
    Send isDone = true;{enter}{}}{enter};{enter}{Up 8}{Home}{Right 2}
    return
     

    Typing age# should then produce the following on hitting the #:


    + |: AgendaItem
        isReady = true
        
        invokeItem()
        {
            isDone = true;
        }
    ;
     

    As a possibly even more ambitious example, we might define a hotstring that provides the skeleton both of an InConversationState and of the matching ConversationReadyState nested in it:


    :*:ics#::
    Send {+} : InConversationState{enter}specialDesc = nil{enter}stateDesc = nil{enter};
    Send {enter}{enter}
    Send {+}{+} ConversationReadyState{enter}specialDesc = nil{enter}stateDesc = nil{enter}
    Send isInitState = nil{enter};{enter}{Up 10}{Home}{Right 2}
    return
     

    Note that we need to escape the + signs by enclosing them in braces. Typing ics# should then produce the following on hitting the #:


    + |: InConversationState
        specialDesc = nil
        stateDesc = nil
    ;

    ++ ConversationReadyState
        specialDesc = nil
        stateDesc = nil
        isInitState = nil
    ;


    Conclusion and Acknowledgement

    Whether the particular examples given above are of any use to you will no doubt depend on your own preferences and coding style, but hopefully they should help you to get started using AutoHotKey to automate some of the typing chores in the Workbench code editor. With the help of the AutoHotKey documentation if need be, you should be able to adapt these examples to your own needs, or create hotkey and hotstring combinations that are useful to you. As you study the AutoHotKey documentation you’ll see that the program is capable of a great deal more than we have illustrated here, should you wish to try something more ambitious.

    Finally, I should point out that it was Jim Aikin who put me on to AutoHotKey as a great utility to use in conjunction with TADS 3 Workbench for Windows.    TADS 3 Technical Manual

    Table of Contents | 
    Fundamentals > 
    Using AutoHotKey with the Workbench Editor (Windows)

    Prev: Understanding Separate Compilation     Next: Bibliographic Metadata - the GameInfo Format     


```