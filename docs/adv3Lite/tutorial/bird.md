::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Heidi: our first adv3Lite
game](heidi.htm){.nav} \> Adding the Bird and the Nest\
[[*Prev:* Defining the Game\'s Locations](locations.htm){.nav}    
[*Next:* Adding the Tree and the Branch](tree.htm){.nav}     ]{.navnp}
:::

::: main
# Adding the Bird and the Nest

We have already defined one object in the game that isn\'t a room: the
me object that defines the player character. This is a slightly unusual
object because it has to act as the player character, so it\'s necessary
to define several properties on it you wouldn\'t normally need to use
elsewhere. That\'s why it\'s predefined for you in the template file you
copied when first setting up your source files for the Heidi game, so
that you wouldn\'t have to worry about it. We might take a quick look at
it, however, before going on to define the objects that will represent
the bird and the nest:

::: code
    + me: Thing 'you;;heidi'   
        isFixed = true    
        proper = true
        ownsContents = true
        person = 2   
        contType = Carrier    
    ;
:::

Note that the definition starts with a + sign. This indicates that the
object that\'s about to be defined is initially located within the
immediately preceding object that has one fewer plus signs (in this
case, that means no plus signs at all, so the room where me starts out
is beforeCottage, the starting location). The programmatic name of the
object is [me]{.code}, which comes next. Following the colon is
[Thing]{.code}, the class to which the [me]{.code} object belongs. You
might think it\'s odd that the player character should be a mere Thing,
but adv3Lite makes this possible (it wouldn\'t be in adv3, for example)
provided we go on to define the properties that follow.

The first property that\'s defined is the **vocab** property, though
this is done implicitly via a template (i.e. we don\'t need to
explicitly write [vocab = \'you;;heidi\']{.code}). We\'ll explain this
property in a bit more detail below, but for now we\'ll just say that
defining it this way means that the me object is called \'you\' in text
that appears in the interpreter and can also be referred to as \'heidi\'
by the player. The next definition, [isFixed = true]{.code}, means that
me object isn\'t something that can be picked up and carried around
(although, obviously, this doesn\'t stop it moving around of its own
accord, as we\'ve already seen: moving the me object around is precisely
what happens when the player character moves from one room to another).
Defining [isFixed = true]{.code} also has the effect of preventing the
me object appearing as an item in room listings: you don\'t want your
players to see \"You can see you here\" and defining the isFixed
property as true prevents that from happpening. The next line, [proper =
true]{.code}, ensures that the me object is never referred to with an
article (we don\'t want the game producing text like \"You see a you
here\" or \"You can\'t do that to the you\"; such text probably
wouldn\'t occur anyway, but it\'s best to make sure). Then comes
[ownsContents = true]{.code}, which means that the me object can be
regarded as the owner of anything located within it (so that, for
example, the player can refer to \"my bag\" and the parser should be
able to tell which bag is meant). Then comes [person = 2]{.code} which
tells the parser that we\'re going to tell the game from a second-person
perspective, so that, for example, the game will generate messages like
\"You can\'t do that\" rather than \"I can\'t do that\" or \"Heidi
can\'t do that.\" If you wanted to write a game in the first person or
the third person you could change person to 1 or 3, but this isn\'t an
option we\'ll be exploring any further here. Finally we define [contType
= Carrier]{.code}, which means that the me object is to be regarded as
carrying any objects located within in it (for example if we had gone on
to define [++ bag: Thing \'bag\';]{.code} on the next line, Heidi would
be carrying the bag).

Don\'t worry if you\'re not entirely sure you\'ve grasped all of that
just yet. As we said above, the [me]{.code} object is something of a
special case. We\'ll now go on to define a couple of objects that are
rather more typical of the things you\'ll normally be defining in a
game, namely the bird and its nest. We\'ll start with the bird, which
should look like this:

::: code
    + bird: Thing 'baby bird;;nestling'
        "Too young to fly, the nestling tweets helplessly. "
    ;
:::

Type this code in immediately after the definition of the forest room,
so that the bird starts out in the middle of the forest.

Now let\'s look at this definition a little more closely. Once again
[bird]{.code} is the programmatic name of the object (the name by which
we can refer to it elsewhere in our code), and [Thing]{.code} is the
class to which it belongs (which defines a whole bunch of standard
behaviour that may be far from apparent at first sight, as we\'ll soon
see). The two properties we\'ve then gone on to define are the
[vocab]{.code} property and the [desc]{.code} property. It\'s exactly
the same as if we\'d written:

::: code
    + bird: Thing 
        vocab = 'baby bird;;nestling'
        desc = "Too young to fly, the nestling tweets helplessly. "
    ;
:::

But since we\'re likely to define these two properties on virtually
every Thing we create in our game, the library template allows us the
shortcut of omitting the explicit property names, as shown above, so
we\'ll use the short-form definition for every Thing we create from now
on (or at least, wherever we can). Note, however, that when we use a
template, we do have to define the properties in the right order.
Neither of the following definitions would work:

::: code
    + bird: Thing 
        "Too young to fly, the nestling tweets helplessly. "
    ;

    + bird: Thing  "Too young to fly, the nestling tweets helplessly. "    
        'baby bird;;nestling'
    ;
:::

The first won\'t work because we\'ve missed out the [vocab]{.code}
property altogether. The second won\'t work because we\'ve tried to
define the [desc]{.code} property before the [vocab]{.code} property,
and that won\'t match the template. As it so happens, though, you can
define [vocab]{.code} without [desc]{.code}, so the following would be
legal (though not normally advisable):

::: code
    + bird: Thing 'baby bird;;nestling'
    ;
:::

But what do the [vocab]{.code} and [desc]{.code} properties actually do?
The [desc]{.code} property is probably the simpler to explain; it simply
defines the description the game will show when the player types EXAMINE
BIRD or the equivalent:

::: cmdline
    >x bird
    Too young to fly, the nestling tweets helplessly. 
:::

The [vocab]{.code} property is a bit more complex, because it actually
provides a way of defining several properties at once. The format of the
[vocab]{.code} property in full is:

::: code
       vocab = 'article name; additional adjectives; additional nouns; pronoun'
     
:::

But we don\'t need to define all these sections if we don\'t need them
all. In the case of the bird we\'ve defined the name (\'baby bird\') and
an additional noun (\'nestling\'). The [name]{.code} is the name by
which the parser will refer to this object in text displayed to the
player (e.g. \"You see a baby bird here.\"). At the same time the
library assumes that since this object is called \'baby bird\', the
player should be able to use \'baby\', \'bird\' and \'baby bird\' to
refer to it (in fact any combination of the words \'baby\' and \'bird\'
will work; if the player insists on typing X BIRD BABY BABY BIRD BIRD,
the parser will still know what is meant). However, by default the
parser will take \'baby\' to be an adjective and \'bird\' to be a noun,
and will prefer a noun match to a purely adjectival match. That means,
for example, that if you had the bird object in the same room as a baby
object (with a name of \'young baby\', say), the command X BABY would
select the (human) baby rather than the baby bird.

Since the description of the bird uses the word \'nestling\', the player
could use the word \'nestling\' to refer to the bird, and we need to
ensure that the parser will recognize it. We therefore add it as an
additional noun (i.e. a noun that can be used to refer to the bird but
doesn\'t form part of its name). We do so here by leaving the additional
adjectives section blank (by simply typing two semicolons together) and
then adding \'nestling\'. If we wanted to add a pronoun (such as \'it\')
we could then type a further semicolon and the word \'it\', but since
the adv3Lite library assumes every Thing is an \'it\' by default we
don\'t need to. If we wanted to define a feminine, masculine or plural
object we could define the pronoun as \'her\', \'him\' or \'them\'
respectively, and all the appropriate properties would be set for us.

If you want the full story on the [vocab]{.code} property, which looks
pretty complex at first, but which can save you a lot of time in the
long run, you can find it in the [adv3Lite library
manual](../manual/thing.htm#vocab).

Now let\'s define the nest. This starts out in the clearing, so you
should type the following immediately after the definition of the
[clearing]{.code} room:

::: code
    + nest: Thing 'bird\'s nest; carefully woven; moss twigs'
        "The nest is carefully woven of twigs and moss. "
        
        contType = In    
    ;
:::

Much of this should be starting to become familiar. The programmatic
name of the nest object is [nest]{.code}. Once again, it\'s of class
[Thing]{.code}. The name of the object when the parser displays a
message about it to the player is \"bird\'s nest\" and the player can
refer to it as \"bird\'s nest\", \"nest\" or \"bird\'s\". Since the
description of the nest refers to moss and twigs we add these as
additional nouns in the [vocab]{.code} property. The description also
talks about them being \"carefully woven\", so we define these two words
as additional adjectives (yes, I know \"carefully\" is actually an
adverb, but we can treat it as an adjective for the purpose of this
object definition, right?); this will allow the player to refer to a
\"carefully woven nest\" or whatever.

Note the backslash (\\) before the apostrophe in \'bird\\\'s nest\'. If
we had simply written \'bird\'s nest; carefully woven; moss twigs\',
then it would have appeared to the compiler that the [ vocab]{.code}
property ended immediately after \'bird\' and it wouldn\'t have known
what to do with [s nest; carefully woven; moss twigs\']{.code}, and a
whole spate of compiler errors would have resulted. When we want to use
an apostrophe or single-quote mark inside a single-quoted string, as
here, we thus have to *escape* it with the *escape character*, which in
TADS 3 is the backslash (\\). The backslash can also be used to escape a
double-quote mark (\") inside a double-quoted string, as well as a
number of other special characters.

Finally, note that we have given the [contType]{.code} property the
value of [In]{.code}. Think of contType as standing for \"containment
type\". Defining [ contType = In]{.code} means that anything located
within the nest (using the + syntax or its various equivalents) is to be
regarded as being *inside* the nest (as opposed to being on it, under
it, behind it, attached to it or whatever). The definition [contType =
In]{.code} thus makes the nest a *container*. We need the nest to be a
container since Heidi needs to be able to put the bird back *in* its
nest.

If you now compile and run the game you should find you can do quite a
bit more than you could before. You can now pick up the nest and the
bird and carry them around. You should also be able to put the bird in
the nest. You can also drop the bird and the nest once you\'re carrying
them. If you type the INVENTORY command (I for short) while holding the
bird or the nest you\'ll see them included in the list of things you\'re
carrying. This may not seem like much; the novelty will soon wear off;
but remember that you really haven\'t done much to define any of this
behaviour. You\'re getting it all for free, as it were, as it\'s all
predefined for you on the [Thing]{.code} class.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Tutorial*\
[Table of Contents](toc.htm){.nav} \| [Heidi: our first adv3Lite
game](heidi.htm){.nav} \> Adding the Bird and the Nest\
[[*Prev:* Defining the Game\'s Locations](locations.htm){.nav}    
[*Next:* Adding the Tree and the Branch](tree.htm){.nav}     ]{.navnp}
:::
