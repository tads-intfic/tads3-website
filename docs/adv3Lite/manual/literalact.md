::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Actions](action.htm){.nav} \>
Literal and Numeric Actions\
[[*Prev:* Defining New Actions](define.htm){.nav}     [*Next:* Topic
Actions](topicact.htm){.nav}     ]{.navnp}
:::

::: main
# Literal Actions

Interactive Fiction occasionally involves commands that act on literal
text rather than game object. For example, the command WRITE TIME AND
TIDE WAIT FOR NO MAN, is a command to write the literal text \'TIME AND
TIDE WAIT FOR NO MAN\' somewhere, not a command involving any object
called TIME AND TIME WAIT FOR NO MAN. Similarly, the command TYPE A756y
ON KEYBOARD is a command to type a the literal string \'A756y\'
(probably a password) on some keyboard; the keyboard is a physical game
object, but the literal string is not. The first of these commands is a
**LiteralAction**, and the second is a **LiteralTAction**. In this
section we shall see how to work with and define both types of action.

[]{#working}

## Working with LiteralActions and LiteralTActions

LiteralActions (as opposed to LiteralTActions) are so rare that the
adv3Lite library doesn\'t define a single one (although it does define
the LiteralAction class). For either kind of action you can get at the
literal value the player actually typed with the pseudo-global variable
**gLiteral** (a macro that expands to gAction.literal). On the Command
object this literal value may be defined on either the dobj property or
the iobj property. For a LiteralAction the literal value is always
gCommand.dobj.name. For a LiteralAction it may be either
gCommand.dobj.name or gCommand.iobj.name, depending on the *grammatical*
roles the physical object and literal value play in the command. For
example, if the command were WRITE TIME AND TIDE ON NOTE, the literal
\'TIME AND TIDE\' would be the value of gCommand.doj.name and
gCommand.iobj would be the note. On the other hand, if the command were
TURN DIAL TO BOOSTER (where \'booster\' is a possible setting for the
dial), the literal \'BOOSTER\' would be held in gCommand.iobj.name and
gCommand.dobj would be the dial.

Do far as the *action* is concerned, however, things may be a little
different, since a LiteralTAction always considers the physical object
involved in the command to be its direct object. Thus
LiteralTAction.execAction(cmd) examines the dobj and iobj of the cmd
object passed to it and assigns whichever is the physical object of the
two to the curDobj property, and whichever is the literal of the two to
its literal property. A LiteralTAction is then processed exactly like a
TAction, except that is also has access to the gLiteral pseudo-variable
to determine the literal text involved in the command. It\'s thus
possible that the Command and the LiteralTAction may have differing
ideas about what the direct object of the command is; so long as you\'re
aware of this and the reason for it, this apparent discrepancy
shouldn\'t cause you any problems.

To handle an existing (i.e. library-defined) LiteralTAction you thus
simply define the appropriate action-handling methods on the direct
object of the *action*, much as you would for any other action, while
making use of gLiteral as appropriate. For example, to implement a note
on which the player character can write things you could define:

::: code
    note: Thing 'note; white of[prep]; sheet piece paper writing' 
      "It's a sheet of white paper with writing on it. "
      
      readDesc = "On the paper is written:\n <<showTextList()>> "

      textList = ['Things to do:']
      
      showTextList()
      {
         foreach(local cur in textList)
           "<<cur>>\n";
      }

      dobjFor(WriteOn)
      {
          /* We can't normally write on Things so we need to override verify() to make it possible */
          verify() { } 
          
          action()
          {
              textList += gLiteral;
              "You write <q>&lt;&lt;gLiteral&gt;&gt;</q> on the note. ";
          }
          
      }  
    ;
:::

\
[]{#defining}

## Defining New LiteralActions and LiteralTActions

It\'s probably quite unusual to define plain LiteralActions (with no
physical objects involved), but one example might be a Write action that
assumes a default object to write in or on (such a notebook the player
character always carries with him). Here the steps would be similar to
those involved in defining an IAction, except that we\'d probably use
the execAction() method of the Write action to install the default
writing surface as the other object of the current Command object and
then use the WriteOn command to actually carry out the action:

::: code
    VerbRule(Write)
        'write' literalDobj
        : VerbProduction
        action = Write
        verbPhrase = 'write/writing (what)'
        missingQ = 'what do you want to write'
    ;

    DefineLiteralAction(Write)
        execAction(cmd)
        {
            "(on the note)\n";
            cmd.iobj = note;
            WriteOn.exec(cmd);
        }
    ;
:::

The main thing to note here is the use of the token **literalDobj** to
represent where in the command the literal object comes.

Defining a LiteralTAction requires much the same steps as defining a
LiteralAction, except that the VerbRule needs two object slots, one of
them being either literalDobj or literalIobj (depending on its
grammatical role; remember that in either case the LiteralTAction will
treat the physical object involved as actual direct object). For
example, to define a CarveOn command to carve an inscription on
something we might define:

::: code
    VerbRule(CarveOn)
        ('carve' | 'inscribe') literalDobj 'on' singleIobj
        : VerbProduction
        action = CarveOn
        verbPhrase = 'carve/carving (what) (on what)'
        missingQ = 'what do you want to carve; what do you want to carve that on'
        dobjReply = singleNoun
    ;  
      
    DefineLiteralTAction(CarveOn)
    ;

    modifyThing
       dobjFor(CarveOn)
       {
          preCond = [touchObj]
          verify() { illogical(cannotCarveOnMsg); }
       }
       
       cannotCarveOnMsg = '{I} {can\'t} carve anything on {that dobj}. '
    ;

    statue: Thing 'statue; of[prep] fatuous; king ferdinand'
       "It's a statue of King Ferdinand the Fatuous. "
       stateDesc()
       {
           if(inscription != '')
             return 'At its base is carved the words <q><<inscription>></q>. ';
             
           return '';  
       }

       inscription = ''
       
       dobjFor(CarveOn)
       {
           verify() { }
           action()
           {
               "You carve the words <q><<gLiteral>></q> on the base of the statue. ";
               inscription += (gLiteral + ' ');
           }
       }
    ;
:::

\
[]{#numeric}

# Numeric Actions

NumericActions and NumericTActions work very similarly to LiteralActions
and LiteralTActions, except that they deal in numeric values rather than
string ones (and are probably even more rarely encountered). Whereas a
LiteralAction or LiteralTAction stores its associated string literal
value in its [literal]{.code} property, a **NumericAction** or
**NumericTAction** stores its associated number (as an integer value) in
its **num** property (also accessible as **gNumber**).

A [NumericAction]{.code} may be defined using the
**DefineNumericAction** macro, with **numericDobj** used to represent
the numeric value in the associated VerbRule. The following somewhat
trivial example should serve to illustrate the point:

::: code
    DefineNumericAction(GetNum)
        execAction(c)
        {
            say(num);
        } 
        
    ;

    VerbRule(GetNum)
        'number' numericDobj
        : VerbProduction
        action = GetNum
        verbPhrase = 'get/getting a number'
        missingQ = 'what number do you want'
    ;
     
:::

This action simply echoes back the number typed, although it is shown as
an integer even if typed spelled-out; e.g. the response to NUMBER
THIRTY-FOUR would be 34.

A NumericTAction is then defined in very much the same way as a
LiteralTAction, except that it concerns a numeric value instead of a
string one in addition to the game object. Again to give a trivial
example that nevertheless serves to illustrate the principle:

::: code
     VerbRule(CountAs)
        'count' singleDobj 'as' numericIobj
        : VerbProduction
        action = CountAs
        verbPhrase = 'count/counting (what) (as what)'
        missingQ = 'what do you want to count; what do you want to count it as'
    ;

    modify Thing
        dobjFor(CountAs)
        {
            action()
            {
                "{I} count{s/ed} {the dobj} as <<gNumber>>. ";
            }
        }
    ;
     
:::

As with a LiteralTAction, a NumericTAction will always treat the
physical object as the direct object, however the associated
[VerbRule]{.code} grammar defined it.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [Actions](action.htm){.nav} \>
Literal and Nuneric Actions\
[[*Prev:* Defining New Actions](define.htm){.nav}     [*Next:* Topic
Actions](topicact.htm){.nav}     ]{.navnp}
:::
