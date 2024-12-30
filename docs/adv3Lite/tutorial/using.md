::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Introduction](intro.htm){.nav} \>
Using the Tools\
[[*Prev:* Setting it all up](setting.htm){.nav}     [*Next:* Heidi: our
first adv3Lite game](heidi.htm){.nav}     ]{.navnp}
:::

::: main
# Using the Tools

We\'re almost ready to dive in and start writing our first game
together, but before that, we\'ll just cover a few more preliminaries.
Some of these will be repeated later, because they\'re important, and
people generally need to be reminded more often than they need to be
told.

Let\'s start with a list of important things to bear in mind when using
the programming tools and files we\'ve just set up.

1.  When you write your source code, the compiler needs to be able to
    understand what you\'ve written.

2.  What a compiler does may look very impressive --- turning your text
    into a working game --- but in some respects compilers are very
    stupid pieces of software. In particular they are *very*
    literal-minded. If you don\'t type exactly what you mean in
    precisely the format the compiler expects, it won\'t understand you
    (or it may appear to understand you while in fact misunderstanding
    you).

3.  In particular, even if what you meant would be blindingly obvious to
    any human reader, the compiler will insist on misunderstanding or
    not understanding it if you haven\'t said it in precisely the right
    way. This can be very annoying and frustrating when the compiler
    tells you about some missing semicolon or comma without making any
    attempt to correct the obvious mistake for itself, but that\'s
    compilers for you.

4.  And yes, the TADS 3 compiler is very particular about things like
    commas and semicolons and other such punctuation marks. When you\'re
    typing in code from the samples given in subsequent chapters, be
    very sure to get such details *exactly* right, or the compiler
    won\'t understand you (and will probably reject your code with one
    or more complaints of syntax errors, which you\'ll have to fix
    before you can get your game to compile at all).

5.  The TADS 3 compiler also distinguishes between upper and lower case
    letters. To TADS 3, heidi, HEIDI and Heidi are three completely
    different and unrelated identifiers, and if you type one of them
    when you mean another, the compiler won\'t understand you. So be
    very careful to copy the case of letters *exactly* when working
    through the chapters that follow.

6.  The compiler isn\'t so fussy about text and punctuation that appears
    between quote marks (\' and \', or \" and \") since generally this
    is just text that\'s going to be displayed to the player, not
    commands that are meant to be meaningful to the compiler. But in
    some cases (e.g. when defining vocab properties and embedded
    expresssions) getting it exactly right can still be critical if you
    want things to work the way you expect, so you still get into the
    habit of being careful in your transcription.

7.  In general the compiler isn\'t at all fussy about what you do with
    white space (spaces, tabs, newlines and the like). So far as the
    compiler is concerned the following two code samples are exactly
    equivalent:

    ::: code
        + nest: Thing 'bird\'s nest; carefully woven; moss twigs'
            "The nest is carefully woven of twigs and moss. "
            
            contType = In   
            bulk = 1
        ;
    :::

    and:

    ::: code
        + nest: Thing 'bird\'s nest; carefully woven; moss twigs' "The nest is carefully woven of twigs and moss. "    
            contType = In bulk = 1;
    :::

    It\'s just that the first way of doing it is much more readable to
    the human eye (and hence much less error-prone) than the second, so
    you should get into the habit of laying out your code the first way.

The other thing to note is that in addition to Workbench, or to your
text editor and compiler, your other important tools are the various
forms of documentation. In additition to this tutorial the important
ones are:

1.  The [adv3Lite Library Manual](..\manual\index.htm)
2.  The [TADS 3 System Manual](..\sysman.htm)
3.  A few sections of the *TADS 3 Technical Manual* (though most of it
    is directed towards the adv3 library)
4.  The adv3Lite library source code and the comments it contains (in
    the fullness of time it would be nice to have an adv3Lite version of
    the *Library Reference Manual*, but that doesn\'t exist yet).

In the chapters that follow they\'ll be pointers to further information
you can find in all these sources. You certainly don\'t need to look
them up straight away, but you will need to do so eventually.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Tutorial*\
[Table of Contents](toc.htm){.nav} \| [Tools of the
Trade](intro.htm){.nav} \> Using the Tools\
[[*Prev:* Setting it all up](setting.htm){.nav}     [*Next:* Heidi: our
first adv3Lite game](heidi.htm){.nav}     ]{.navnp}
:::
