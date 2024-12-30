::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Optional Modules](core.htm){.nav}
\> Menus\
[[*Prev:* Gadgets](gadget.htm){.nav}     [*Next:* Hints](hint.htm){.nav}
    ]{.navnp}
:::

::: main
# Menus

The menusys.t module (which requires the menucon.t module) provides a
way of displaying menus from which the player can make choices. It is
identical to the adv3 module of the same name. If your game doesn\'t
need any menus you can excluse menusys.t from your build, but you will
need to include it if your game includes [hints.](hint.t)

Menus consist of **MenuItems**, **MenuTopicItems**, and
**MenuLongTopicItems**.

**MenuItems** are the menu (and sub-menu) items that the player will
select. Their **title** attribute is what will be shown in the menu, and
the **heading** attribute is shown as the heading while the menu itself
is active; by default, the heading simply uses the title.

**MenuTopicItems** are for lists of topic strings that the player will
be shown, like hints. **title** is what will be shown in the menu;
**menuContents** is a list of either strings to be displayed, one at a
time, or objects which each must return a string via a \"menuContents\"
method.

**MenuLongTopicItems** are for longer discourses. **title** is what will
be shown in the menu; **menuContents** is either a string to be printed
or a routine to be called.

advLite.h contains templates for MenuItems, for your convenience.

A simple example menu:

::: code
       FirstMenu: MenuItem 'Test menu';
       + MenuItem 'Pets';
       ++ MenuItem 'Chinchillas';
       +++ MenuTopicItem 'About them'
           menuContents = ['Furry', 'South American', 'Curious', 'Note: Not a coat'];
       +++ MenuTopicItem 'Benefits'
            menuContents = ['Non-allergenic', 'Cute', 'Require little space'];
       +++ MenuTopicItem 'Downsides'
             menuContents = ['Require dust baths', 'Startle easily'];
       ++ MenuItem 'Cats';
       +++ MenuLongTopicItem 'Pure evil'
          menuContents = 'Cats are, quite simply, pure evil. I would provide
                          ample evidence were there room for it in this
                          simple example.';
       +++ MenuTopicItem 'Benefits'
         menuContents = ['They, uh, well...', 'Okay, I can\'t think of any.'];
     
:::

To display the menu in the first place, call its **display()** method.
For example, to display the menu in the above example you would use the
statement [FirstMenu.display()]{.code}.

Note that some interpreters (e.g. text-only interpreters) cannot cope
with a menu that shows more than nine items at a time, so you may want
to arrange your menus accordingly (for example, by dividing them up
between sub-menus if the player might need to choose between more than
nine items).

You might typically use a menu to give your players information about
your game at the beginning (in response to an ABOUT command, say), and
maybe to show some options at the end (in response to an AMUSING
command, say). To construct an ABOUT menu you would typically use a
MenuItem for the top-level aboutMenu, with a number of
MenuLongTopicItems to describe various aspects of your game; if you have
a lot to say you might need to use another level of MenuItems to divide
your information into sub-menus, e.g.:

::: code
       aboutMenu: MenuItem 'About';
       + MenuItem 'About Adventure';
       
       ++ MenuLongTopicItem 'About the Game'
           menuContents = 'This charming piece is something I cribbed off an obscure
             work by Crowther and Woods. '
       ;    
        
       ++ MenuLongTopicItem 'Special Commands'
           menucontents = 'Under no circumstances should you use the commands
             PLUGH and XYZZY without a special license. '   
       ;
        
       + MenuItem 'Playing TADS games';
       
       ++ MenuLongTopicItem 'Standard Commands'
           menuContents = 'Common IF commands include EXAMINE, TAKE...'
       ;
        
       ++ MenuLongTopicItem 'Conversational Commands'
           menuContents = 'TADS games use a modified version of the ASK/TELL system...'
       ;
     
:::

You could then call [aboutMenu.display();]{.code} in the
versionInfo.showAbout() method.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [Optional
Modules](optional.htm){.nav} \> Menus\
[[*Prev:* Gadgets](gadget.htm){.nav}     [*Next:* Hints](hint.htm){.nav}
    ]{.navnp}
:::
