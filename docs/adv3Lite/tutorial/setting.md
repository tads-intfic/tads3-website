::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Introduction](intro.htm){.nav} \>
Setting it all up\
[[*Prev:* Getting What You Need](getting.htm){.nav}     [*Next:* Using
the Tools](using.htm){.nav}     ]{.navnp}
:::

::: main
# Setting it all up

Once you\'ve got up-to-date versions of the TADS 3 authoring
system/compiler and the adv3Lite library you\'ll need to set things up
so they all work together and you can set about creating your game. In
what follows we\'ll assume your game is called \"Heidi\", since that\'s
the name of the game we\'ll be creating in the next chapter. Obviously,
when you come to create other games, you can substitute your own name
for \"Heidi\" in what follows.

## Set-up for Windows Workbench (with TADS 3.1.3 or higher)

If you haven\'t already got version 3.1.3 (or higher) of TADS 3, you
should consider downloading and installing it before you proceed. This
will make it much easier to create new games with adv3Lite.

Assuming you have got TADS 3.1.3 (or higher) and that you\'ve installed
your adv3Lite folder under ..\\My Documents\\TADS 3\\extensions as
suggested in the previous section, creating a new adv3Lite game is very
simple:

1.  The first time you use adv3Lite, select Tools -\> Options from the
    Workbench menu. Scroll down to the System -\> Library Paths section
    of the dialog box that should then appear. Add the full path to the
    directory where you installed adv3Lite (e.g.
    C:\\Users\\Eric\\Documents\\TADS 3\\extensions\\adv3Lite) to the
    list (click the Add Folder button and navigate to the folder you
    want and then select it). You may need to close Workbench and reopen
    it for the change to take effect, but once you\'ve followed this
    step once you shouldn\'t ever need to do it again (at least, not on
    the same machine, assuming you don\'t move things around).
2.  From the Windows Workbench menu select File -\> New Project
3.  In the dialog that should then appear, simply click **Next** to
    continue to the second page of the Wizard.
4.  In the second page of the Dialog, type \"Heidi\" (without the
    quotation marks) in the upper (**Project Name**) box, then click in
    the lower(**Folder location**) box. From there you can select an
    existing folder, but for a new project you should create a new one,
    so click the **Make New Folder** button and then enter a name for
    your new folder, such as heidi (making sure you create it under the
    ..\\My Documents\\TADS 3\\ folder). Then click **OK** followed by
    **Next**.
5.  In the third page of the Dialog, scroll down the list of Project
    Types until you get to **Adv3Lite**. Click on Adv3Lite to select it
    and then click **Next**.
6.  Fill in the information on the final (Bibliography) page of the
    wizard (e.g. with the name Heidi, your own name and email address,
    and a brief description like \"A small tutorial game\") and then
    click **Next** to complete the wizard. Your new adv3Lite game (or at
    least the beginnings of it) will then be created for you.

## Set-up for Windows Workbench (with earlier versions of TADS 3)

If for any reason you have an earlier version of Windows Workbench and
it isn\'t convenient to upgrade, you will need to go through the
following steps:

First, before attempting to set up an individual game, open Windows
Workbench, Select Tools from the Menu, then Options. Click on \"Library
Paths\" (about three-quarters of the way down on the left-hand pane)
then click on the \"Add folders\...\" button. Navigate to the folder
where you installed adv3Lite in the previous section (typically
something like C:\\Users\\YourName\\Documents\\TADS
3\\extensions\\adv3Lite) and select it to add it to the list. This will
tell Workbench where it can find the adv3Lite library; once you\'ve done
this once you shouldn\'t have to do it again (unless perhaps you
reinstall Workbench for any reason).

Now, to set everything up to create a new game (which we\'re calling
\"Heidi\" in preparation for the next section, although the same
principles apply whatever you\'re calling it) carry out the following
steps:

1.  Under your My Documents\\TADS 3 folder create a new folder called
    Heidi.
2.  Locate the extensions\\adv3Lite\\template folder and copy (don\'t
    move) its entire contents (but not the folder itself) into your
    newly-created Heidi folder.
3.  Navigate back to the Heidi folder.
4.  In the Heidi folder, rename the file **adv3Ltemplate.t3m** to
    **heidi.t3m**.
5.  In the Heidi folder, rename the file **adv3Ltemplate.tdbconfig** to
    **heidi.tdbconfig**.
6.  Open the file heidi.t3m in Workbench (either by double-clicking on
    it in Windows Explorer, or by using the File -\> Open Project option
    from the menu in Workbench).
7.  Click the Go button (the little blue triangle at the left-hand end
    of the toolbar) in Workbench to compile and run the file to make
    sure everything\'s okay. You should then be in a position to start
    working on your new adv3Lite project.

\

## Set-up for Mac OS X or Linux/Unix

To set everything up to create a new game (which we\'re calling
\"Heidi\" in preparation for the next section, although the same
principles apply whatever you\'re calling it) carry out the following
steps:

1.  This assumes you\'ve placed the adv3Lite directory under an
    extensions directory under your TADS directory, and that you\'ll
    create your Heidi directory in the next step under the same TADS
    directory.

2.  Under the directory you\'ve created to hold your TADS 3 source code
    (you might have called it TADS 3) create a new directory called
    Heidi.

3.  Locate adv3Lite/template directory and copy (don\'t move) its entire
    contents (but not the directory itself) into your newly-created
    Heidi directory.

4.  Navigate back to the Heidi directory.

5.  In the Heidi directory, rename the file **adv3Ltemplate.t3m** to
    **heidi.t3m**.

6.  In the Heidi directory, delete the file **adv3Ltemplate.tdbconfig**
    (if you\'re not using Workbench, you don\'t need it).

7.  Now open the heidi.t3m file in a text editor and edit it to read:\

             -D LANGUAGE=english     
             -Fy obj -Fo obj
             -o heidi.t3
             -lib system
             -lib ../extensions/adv3Lite/adv3Lite
             -source start

    You can delete any instances of comments like the "warning --- this
    file was mechanically generated" paragraph you find in the t3m file,
    together with any bits of executable code you find there. You can
    also delete the line -pre. You may need to change the penultimate
    line if the path to where you\'ve stored the adv3Lite directory is
    different from that assumed here.

8.  Open a Terminal window. The Terminal program is located in
    Applications \> Utilities. You may want to make an alias for it and
    drag it into your Dock.

9.  In the Terminal, use the cd (change directory) command to navigate
    to the folder where your game files are stored. For instance, you
    might type \'cd Documents/TADS/Heidi\' and then hit Return.

10. While the Terminal is logged into this directory, you can compile
    your game using this command:

             t3make -d -f heidi

    If all goes well, you should see a string of messages in the
    Terminal window, and a new file (heidi.t3) will appear in the Heidi
    directory. This is your compiled game file. If you\'ve installed an
    interpreter program that can run TADS games, you\'ll be able to
    double-click the .t3 file and launch the game to test your work.\
    Alternatively, you can run the game directly in the Terminal by
    typing \'frob heidi.t3\' and hitting Return.

11. Keep the Terminal window open and press the Up arrow on the keyboard
    each time you want to do a compile, as this will reload the last
    command line that you typed (t3make etc.).

\

## Linking to the System Manual

There are one or two places where both this Tutorial and other parts of
the adv3Lite documentation attempt to link to the [TADS 3 System
Manual](../sysman.htm). By default this links to the online version of
the System Manual at www.tads.org. If you have a fast and reliable
internet connection you may be perfectly happy with this, but if you\'d
rather link to the local copy of the System Manual on your own machine
you can do so by editing the file **sysman.htm** in your adv3Lite
directory. For instructions on how to go about it, see the section on
the [System Manual](../manual/mingame.htm#sysman) in the *Adv3Lite
Library Manual*.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Tutorial*\
[Table of Contents](toc.htm){.nav} \| [Tools of the
Trade](intro.htm){.nav} \> Setting it all up\
[[*Prev:* Getting What You Need](getting.htm){.nav}     [*Next:* Using
the Tools](using.htm){.nav}     ]{.navnp}
:::
