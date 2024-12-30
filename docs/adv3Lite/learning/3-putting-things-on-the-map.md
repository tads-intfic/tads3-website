---
layout: article
title: Learning TADS 3 with adv3Lite by Eric Eve
toroot: ../../../
styleType: article
---

# 3. Putting Things on the Map

## 3.1. The Root of All Things

So far the maps we've created have been pretty dull, since they've consisted purely of empty rooms. In a real work of Interactive Fiction there'd be all sorts of objects in the rooms. Some of them would be portable objects the player can pick up and take from place to place, some would be fixtures like doors, windows, trees, houses and heavy furniture, and some would be mere decorations, objects mentioned in the room description, which can be examined but respond to any other kind of command by telling the player that they're not important.

The basic kind of object that's the ancestor of all these kinds of thing is the `Thing`. We use the `Thing` class itself for ordinary objects that the player can pick up and move around. A typical definition of a `Thing` might look like:

 
    redBall: Thing
        vocab = 'red ball; small red hard round cricket'
        location = frontLawn
        desc = "It's quite small and hard; it looks much like a cricketball. "
    ;
    
Since these three properties are so commonly used when defining `Things` (virtually every `Thing` is likely to need them), it should come as no surprise that there's a template that can be used when defining `Things`. Using the template, the red ball could be defined like this:

 
    redBall: Thing 'red ball;  small red hard round cricket'  @frontLawn
        "It's quite small and hard;  it looks much like a cricket ball."
    ;

Study this example very carefully. It applies not only to Thing but to every class that inherits from Thing, which is likely to cover the vast majority of simulation objects defined in any adv3Lite game. Even if you never get round to learning any other adv3Lite template you should learn this one. You should become so familiar with it that you have no difficulty recognizing at sight which property is which when you see an object defined like this. (It also helps to be just about equally familiar with the `Room` template, especially if you plan on defining quite a number of rooms).

We should now consider each of these common properties in turn.

`vocab` defines two things: the short name of the object (in this case 'red ball') and the words the player can use to refer to the object in commands. In nearly every case the former (the short name) will be subset of the latter (the words the player can use to refer to the object), which is why we define both together in the same property. The short name of the defines the name of the object as it will appear in a room description or inventory listing, e.g. "You see a red ball here" or "You are carrying a red ball." We start the `vocab` property by giving the short name followed by a semicolon. Then we list all the other adjectives that might be used to refer to the object. If there were any other nouns, we'd then have another semicolon followed by the list of the other nouns. We could also have a third semicolon followed by the pronoun used to the refer to the object, for example:

 
    redBall: Thing 'red ball;  small red hard round cricket;  sphere; it' @frontLawn
 
        "It's quite small and hard;  it looks much like a cricket ball."`
    ;

If we don't specify a pronoun the game will assume it's 'it', so we only need to specify a pronoun if it's 'him', 'her' or 'them'.

The `desc` property defines the description of the object that is displayed when the object is examined. Note that unlike the `vocab `property, which use single quotes, the `desc` property always uses double quotes ("desc").

The `location` property defines where the object is at the start of play. For the time being we'll stick to locating objects in rooms, although later on we'll see other places they can go. Note that the `location` property can *only* be used to define the initial location of an object. *Never* try to move an object by changing its `location` property directly. Call its `moveInto(*newloc*) `method instead, e.g.:

    redBall.moveInto(backLawn);

But to talk of methods is to get ahead of ourselves. Instead we'll mention a second very common way of stipulating the initial location of an object. Instead of defining its location explicitly, either through setting `location =wherever` or by using `@wherever `in the template, we can put it after the object it's located in and precede it with a plus sign. For example:
 
    frontLawn: OutdoorRoom 'Front Lawn'
        "The front lawn is a relatively small expanse of grass. The somewhat larger back lawn lies to the south. "
 
        south = backLawn
    ;

 
    + redBall: Thing 'red ball;  small red hard round cricket' 'red ball'
        "It's quite small and hard;  it looks much like a cricket ball."
    ;

*Exercise 3:* Add some Things to one of the maps you created earlier. Try running the resulting game; you should be able to pick up these new objects and move them around.

We should next look at the `vocab` property in a bit more detail. While, in a sense, it's one property -- we can define it as a one single-quoted string -- in another sense it

provides a means of defining several properties, making it a compact and efficient tool for defining several of an object's most commonly-needed properties all together at once. The basic structure of the `vocab` property divides into four sections, each divided from the next by a semicolon, which may be schematically represented like so:
 
    'name; adj adj adj; noun noun noun; pronoun'

That is, the first section of the `vocab` property actually defines the `name` property of the Thing we're defining (this holds good for Rooms too, by the way). It also adds all the words it finds in the name part into the Thing's `vocabWords` property so they can be used to refer to the Thing we're defining. This means (a) that we (virtually) never have to worry about the `vocabWords` property in our own code, and (b) that we don't need to repeat any of the words in the Thing's name in order to define the words that can be used to refer to it.

The second and third sections can then be used to add any additional adjectives and nouns (respectively) that can be used to refer to this thing. For example, if your game includes what American players would call a 'flashlight' and British users a 'torch', it would be good to include both nouns somewhere, as well as any adjectives used it its description, for example:

    flashlight: Thing 'flashlight;  heavy black rubber;  torch'
        "It's a heavy black rubber flashlight. "
    ;

The fourth and final section can be used to define the pronoun (or pronouns) that could be used to refer to the object. By default, the library will assume this to be 'it', which is likely to be correct for many if not most of the objects you define. But some will be plural, and some may be masculine or feminine, for example:

    trousers: Thing 'blue trousers;  old dark;  pants; them'
        "They're your old dark blue trousers. "
    ; 
 
    oldWoman: Thing 'old woman;  handsome; ; she'
        "She may be quite old, but she's quite handsome with it. "
    ;

The second of these definitions incidentally illustrates that we can leave a section empty if we don't need it;  we just have a couple of semicolons together after the adjective.

Defining the pronoun at the end of the `vocab` property is actually doing rather more than just defining what pronoun can be used; it's in effect defining the gender and number of the object when it's other than the default neuter singular (of course you could do that too by defining an explicit 'it' here, but there's no need to do that in practice). We could define these properties explicitly by using the `isHim`, `isHer` and `plural` properties of Thing, but (once you get used to the idea) it's quicker and easier simply to add the appropriate pronoun at the end of the `vocab` property.

The trousers/pants example raises another possibility, however, since we might want to call this object a 'pair of trousers' (or 'pair of pants'). Is this then singular or plural? The initial answer is determined by what would be the correct form of the verb 'to be' following the name of this object in a sentence. In other words, would we say "The pair of trousers is blue" or "The pair of trousers are blue"? Most people would probably regard the former rather than the latter as correct, so the trousers need to be singular, 'it' rather than 'them'. On the other hand the player might well refer to the pants/trousers as 'them'. We might say, then, that such an object is *ambiguously plural*, and we can indeed declare it as such by setting its `ambiguouslyPlural` property to `true`. But once again we don't need to do this explicitly;  we can do it implicitly by including both pronouns in the `vocab` property of the trousers object:

    trousers: Thing 'pair of trousers;  old dark blue;  pants; it them'
        "They're your old dark blue trousers. "
    ;

In this case the order of the pronouns is significant: 'it' comes first because the pair of trousers has to be treated as grammatically singular when it forms the subject of a sentence. Putting 'them' second signals that we're regarding the pair of trousers as grammatically singular, but ambiguously plural insofar as the player can also refer to the trousers with the pronoun 'them', in such interchanges as:

>X TROUSERS
>They're your old dark blue trousers.
>TAKE THEM
>Taken.

Up until now we've mentioned that there are adjective and noun sections to the `vocab `property without really explaining the significance of the distinction. In adv3Lite the parser doesn't care about the order of words used to match an object (unless you explicitly want it to, but that's a topic we'll leave till much later), but it does care about parts of speech. In a nutshell, it ignores articles (words like 'a', 'an', 'some' and 'the') treats prepositions ('to', 'from', 'with', 'of' or 'for') as a special case (see below) and prefers nouns to adjectives. That means if we have one object called 'orange bowl' and another called 'orange' (i.e. a piece of fruit), a command like TAKE ORANGE will be directed to the fruit, not the bowl, since in the case of the fruit 'orange' is a noun, while in the case of the bowl it's only an adjective.

How that works in the adjectives and noun sections of the `vocab` property should be reasonably obvious. Less obvious is how the library determines the parts of speech of the words in the name section. What happens is that the library assumes that every word except the last is an adjective, and that the final word is a noun. If, however, the library encounters a preposition in the name (e.g. 'large piece of rich chocolate cake') it assumes that the words before the preposition constitute a noun phrase ending in a noun possibly preceded by one or more adjectives (in this instance, for example, 'large piece', so that 'piece' would be treated as a noun, while 'large', 'rich', 'chocolate' and 'cake' would be treated as adjectives;  'cake' could be made a noun by immediately following it with '[n]'). Any article immediately following a preposition is simply ignored (i.e. not entered into the object's vocabulary), so that, for example, with a name like 'west end of the hall[n]', 'end' and 'hall' will be entered as nouns,  'of' as a preposition and 'the' ignored. (The reason the library treats every word in the name following a preposition as an adjective, even if it looks like a noun, is that in phrases like 'bottle of wine' and 'key to the garage', 'wine' and 'garage' effectively act as adjectives qualifying 'bottle' and 'key', so they are considered as less important to the match;  in phrases like 'pair of shoes' or 'flight of stairs' the library's assumption is less obviously appropriate, so in such cases we'd probably want to follow 'shoes' or  'stairs' with '[n]' to force the library to treat it as a noun).

We said above that the library treats prepositions as a special case. What that means is that a preposition must be entered into an object's vocabulary for it to be matched by player's input, but that the preposition won't match by itself. Thus, for example, an object given a `vocab` property of 'piece of cake' will indeed match a command like EAT PIECE OF CAKE, but won't match EAT OF.

There may occasionally be other words we want treated like this, for example if 'his' or 'her' or 'your' or 'my' figured in the name of an object, we probably wouldn't want to match it on such a word alone. In such a case we can mark the word as a weak token, either by following it with [weak] or by enclosing it in parentheses;  the two are equivalent:
 
    tHerName: Topic 'her[weak] name'; tHerName: Topic '(her) name'; 

We haven't encountered Topics yet, so don't worry too much about what they are just now;  the examples nonetheless serve to illustrate the principle that either way of defining this Topic would allow it to match 'her name' but not just 'her'.

We can use an analogous technique to override the library's default assumptions about parts of speech by following a word with [n] to make it a noun, [adj] to make it an adjective, [prep] to make it a preposition, or [pl] to make it a plural. For example, if we had a character called John Smith we might define him thus:
 
    john: Thing 'John[n] Smith';  tall;  man; him' ;

Likewise, if we used the first definition of our trousers object, but wanted to allow the player to refer to it as a pair of trousers as well, we'd list 'of' as an adjective but follow it by [prep]:

    trousers: Thing 'blue trousers;  old dark of[prep];  pants pair; them it'
        "They're your old dark blue trousers. "
    ;

The John Smith example brings us to another point. Normally, when the parser needs to construct a sentence using the name you've given it, it will add the appropriate article, e.g. "You are carrying a book and an apple" or "You can't eat the book." In the case of something like John Smith that's clearly inappropriate: we don't refer to him as 'a John Smith' or 'the John Smith' (except perhaps when other people of the same name may be in view), but normally just as 'John Smith'. In other words, we don't generally use an article with something that has a proper name. We could deal with the John Smith example by explicitly defining `proper =true `on the `john` object, but it turns out that we don't actually need to. When all the words in a name start with a capital letter, adv3Lite will assume it's a proper name without our having to say so explicitly. In other cases we may occasionally need to tell the library what article to use. For example, a mass noun like 'snow' should be described as 'some snow' not 'a snow', so we need to include the article 'some' explicitly at the start of the name:

 
    snow: Thing 'some snow;  crisp white' ;

This, incidentally, has the effect of setting the snow's `massNoun` property to true, once again something we don't need to do explicitly.

Occasionally, we may come across a qualified noun, that is one which doesn't strictly speaking have a proper name but still shouldn't take an article. An example might be an object called "Jill's bag";  the library won't treat this as a proper name since not every word in the name starts with a capital letter, but we can make it treat it as a qualified name by starting the name with (), thus:

    jillBag: Thing '() Jill\'s bag'; 

Note, by the way, the use of the backslash (\) to 'escape' the apostrophe (') in 'Jill\'s bag';  we escape the apostrophe that way to tell the compiler that this ' isn't the closing quote-mark of the single-quoted string.

We've said nothing so far about plurals. In the main we don't need to worry about them, since the library can take care of them for us automatically. Suppose, for example, we define two books thus:

    redBook: Thing 'red book' ;

    blueBook: Thing 'blue book' ;

The library will be quite capable of working out that 'books' is the plural of 'book' (and it can do this with a lot of irregular plurals too (such as 'men' and 'feet'). So the game will understand perfectly well if the player types TAKE BOOKS:

>TAKE BOOKS
>You take the red book and the blue book.

It can also create plurals for itself in text it outputs. For example, suppose you were to define the following three objects in your game:

 
    coin1: Thing 'gold coin' @hall ; 
 
    coin2: Thing 'gold coin' @hall ;

    coin3: Thing 'gold coin' @hall ; 

Then, when the player looks around in the hall, the game will say "You see three gold coins here." In other words, without the game author having to do any more about it the game recognizes that the three coins have identical names, so it groups them together and describes them in the plural.

In sum, then, the `vocab` property provides a neat and efficient way of simultaneously defining (or potentially defining) a number of different properties of Thing, namely `name`, `vocabWords`, `proper`, `massNoun`, `qualified`, `plural`, `ambiguouslyPlural`, `isHim`, `isHer`, `isIt`. These in turn help to define several dependent properties such as `aName` and `theName`, which give the name of the object preceded by the appropriate form of the indefinite or definite article respectively (or no article at all if the Thing is `proper` or `qualified`). This may seem rather a lot to take in all at once, but it quickly starts to become familiar once you start using it, and it's worth becoming familiar with it, since mastering the proper use of the `vocab` property can save you a lot of time and effort in the long run.

## 3.2. Coding Excursus 3 -- Methods and Functions

In discussing how to change the location of a Thing, we introduced a *method*. A method is the other kind of thing you can define on an object besides a property. While a property simply holds a piece of data, a method contains code that's executed when the method is invoked (although, as we shall see, we can generally use a method to provide a value wherever TADS 3 expects a property). A method starts with an open brace `{` and ends with a closing brace `}
 
A simple method might look something like this:
 
    myObj: object
        name = 'nameless'
        changeName(newName)
        { 
            name = newName;
        }
    ;

The method has a single *parameter* called `newName`,  which we can use to pass a piece of data to the method. In general a method can take as many parameters as we like (separated by commas), or it can have none at all. The example above is about as simple as a method can get;
 it simple assigns the value of `newName` to the name property of `myObj`, so that if some other piece of code were to execute the command:

        myObj.changeName('magic banana'); 

Then the name property of `myObj` would become 'magic banana'.

There's a few further points to note about this example:

- Every line of code we write (something that's meant to be executed some time) must end with a semi-colon. Note however that this applies only to lines of code in methods and functions, *not *to property declarations and the like.

- To execute a method on a particular object we write the object name, then a dot, then the method name (hence `myObj.changeName('magic banana')`). We'd refer to an object property in the same way (e.g. `myObj.name`).

A method can also return a value to its caller, using the `return` keyword. For example, we might define the (admittedly trivial method):

 
    myObj: object
        double(x)
        {
            return 2 * x;
        }
    ;

Then if we executed the statement:

 
        y = myObj.double(2);

We'd end up with y being 4.

Sometimes we might want to define some code that we don't want associated with any particular object. In such cases we can use a *function* instead. To define double() as a function we could just do this:

 
    double(x)
    {
        return 2 * x;
    }

Then we could just execute statements like:

 
        y = double(x);

We'll take a closer look at the kind of statements we can put in methods and functions later. For now, if you want to know more about methods and functions, you can read about them in the Procedural Code chapter of the *TADS 3 System Manual*.

## 3.3. Some Other Kinds of Thing

We have been introduced to the `Thing` class, which we can use for basic portable objects, but as you'll find if you experiment, there's not much you can do with them. You can pick them up, carry them around, put them down again and throw them at other things, and that's about it.

 We can gain a little more variety in what Things can be do by overriding a few simple properties and/or using using special kinds of `Thing` -- subclasses of `Thing` -- which we can use for special purposes. Some of the main examples include:

- `Wearable` -- clothing the player character can put on and take off. Defining an object to be of class `Wearable` is the same as defining it as a `Thing` and then defining `isWearable = true` on it.

- `Food` -- something the player character can eat. Defining an object of class `Food `is equivalent to defining it as a `Thing` and defining `isEdible = true` on it.

- `Switch` -- something the player can turn on and off. Defining an object to be of class Switch is equivalent to defining a Thing with `isSwitchable = true`.

- `Flashlight` -- a portable light source than can be turned on and off (this is a special kind of `Switch` that becomes lit when on). We'll be looking at light and darkness in more detail later on, but it's helpful to know about this one to provide a means of looking around in dark rooms.

We can also extend the behaviour of a Thing by manipulating some other basic properties. For example:

- `readDesc` -- if this is defined (if used it should be defined as a double-quoted string) `readDesc` provides the response to READ SOMETHING.

- `isHidden` -- if this is `true` then the object is hidden from view (even if it would otherwise be in plain sight).

- `isLit` -  is this is true them the object will act as a light source.

These may become clearer with a couple of examples. Suppose, for example, we have an object representing a newspaper, and we want reading it to provide a different response from merely examining it. We could define it like this:

 
    newspaper: Thing 'newspaper;  daily of[prep];  copy paper diatribe' @hall
        "It's a copy of the <i>Daily Diatribe</i>. "
        
        readDesc = "You find it contains the usual collection of depressing articles detailing how the world is going even further to thedogs than even the most determined pessimist hitherto thoughtpossible. "
    ;
    

Note how we can use simple HTML mark-up like `<i>...</i>` to format the text (here putting *Daily Diatribe* in italics).

One use of `isLit` can be illustrated from a possible way of defining the `Flashlight` class:

 
    class Flashlight: Switch
        isLit = isOn
    ;

In fact, the library's definition of Flashlight is a bit more complicated than that, using a number of features we haven't encountered yet.

It's a bit difficult to illustrate the use of isHidden without using features of the language we haven't encountered yet, but since they're about to come up in the next coding excursus, perhaps we may anticipate them here. Suppose that when we examine a desk we find it has a secret knob underneath that we hadn't noticed before. At a first approximation we could do something like this:

    desk: Thing 'desk;  plain wooden' @study
        desc()
        {
            "It's just a plain wooden desk. ";
            if(knob.isHidden)
            { 
                "Closer examination, however, reveals that it has asecret knob half-concealed on its underside. ";
                knob.isHidden = nil;
            }
        }
    ;

 
    knob: Thing 'secret knob' @desk
        isHidden = true
    ;

Note how we can define `desc()` as a method rather than just a double-quoted string, but that if we do so we have to define it explicitly (with its name) and not through the template. Note also that instead of writing `knob.isHidden =nil;` we could have written `knob.discover();` this would have enabled the definition of the desk to be written as:

    desk: Thing 'desk;  plain wooden' @study
        "It's just a plain wooden desk. <<if knob.isHidden>> Closer examination, however, reveals that is has a secret knob half-concealed underneath. <<knob.discover()>> <<end>> "
    ;

Although whether that should be considered an improvement is perhaps a matter of taste, since many people might find the first form clearer. There are in any cases problems with either method, since there's nothing to stop the player from picking up the desk and carrying it around, or indeed the knob. We shall see how to prevent such things in the final section of the chapter. In later chapters we'll see other ways to hide things.

Exercise 4: Try adding some `Wearable`, `Food` and `Switchable` objects to your map. Also, add a `Flashlight` which can be used to light up a dark room, and an object with a `readDesc`.

Exercise 5:  To work effectively with TADS 3 you need to be able to look things up easily in the *Library Reference Manual*. If you haven't got it open already, open the *LRM* now in your web browser. Click the *Classes* link near the top left hand corner, then scroll down the list of classes in the bottom left-hand panel till you find `Thing`. Click on `Thing` and take a quick look at its subclass tree; this is the complete list of all the standard TADS 3 classes that derive from `Thing`. Don't worry about trying to understand all of them just yet! Instead just spend a bit of time looking further down the page at the properties and methods of `Thing`, and then do the same with the other classes we've introduced so far. Don't worry if you can't take it all in -- you almost certainly won't be able to;  the point is rather to get an initial feel for what's there and for how to use the *Library Reference Manual* to look up the information you need.

## 3.4. Coding Excursus 4 -- Assignments and Conditions

In the previous Coding Excursus we introduced methods and functions, which are the two places procedural code can occur in TADS 3. One of the most common kinds of procedural statement are assignment statements, that is statements that assign a new value to a property or variable.

We've already met properties. Assigning a new value to a property (i.e. changing its existing value to something else within a method or function) is simply a matter of writing the property name, followed by an equals sign (=), followed by the new value we want to assign to the property, for example:

 
        ring.bulk = 2;
 
        ring.name = 'gold ring'; 

If this code were executed in a method of the ring object, we wouldn't need to specify that it was the ring object's properties we were referring to. In this special case we could just write:

 
        bulk = 2;
 
        name = 'gold ring';     

Assignment statement can also perform calculations:

        ring.bulk = ring.bulk + 2;

        ring.name = 'gold ' + ring.name; 

In the second example, the `+` operator carries out string concatenation. If `ring.name` previously held the value 'ring' then executing the statement `ring.name = 'gold ' + ring.name` will change `ring.name` to 'gold ring'. In the first example the + operator does what you'd expect; it adds 2 to the value of `ring.bulk`. We can also use the other obvious arithmetic operators: - (subtract), * (multiply), and / (divide). For the complete list of operators available in TADS 3 assignment statements, see the section on 'Expressions and Operators' in the *TADS 3 System Manual*. These include some neat short-cuts; for example, `ring.bulk = ring.bulk + 2` can be written as `ring.bulk += 2`

As well as assigning values to properties, we can also assign them to *local variables*. A local variable is simply a temporary storage area for some piece of data. A variable can be local to a method or function, or to some smaller block of code, where a block of code is any sequence of statements between opening and closing braces: `{}`. A local variable must be declared with the keyword `local` the first time it's used, and the declaration can optionally be combined with an assignment statement, for example:
 
    myObj: object
        myMethod(x, y)
        {
            local foo;
            local bar = x + y;

            foo = bar * 2;
            return foo;
        }
    ;

In this method, the parameters `x` and `y` also act much like local variables within the method. They do not have to be declared with the `local` keyword, since they've already been declared as the method's parameters, but like the local variables `foo` and `bar` they are meaningful only within the context of the method.

Method calls, function calls, and assignment statements are probably the most common kinds of statement making up the procedural code found in TADS 3 method and functions. Often, both types of statement can occur at once, as in:

 
        foo = bar(x);

But there's another kind of statement that's almost just as important, namely *flow-control* statements. Of these probably the most significant is the `if` statement. In programming Interactive Fiction (as in most other kinds of programming), it's seldom enough just to be able to execute a set of statements in set sequence, we often need our code to do different things depending on whether some condition is true or false. The simplest form of an `if` statement in TADS 3 is:

 
        if(condition)
            statement;

For example, we might write:
        
    if(ring.weight > 4)
        "The ring feels strangely heavy. ";

Which means that if `ring.weight` is greater than 4, the text "The ring feels strangely heavy." will be displayed.

We can optionally add an else clause, which defines what happens when the condition in the `if` part is not true, for example:

 
    if(ring.weight > 4)
        "The ring feels strangely heavy. ";
    else
        "You pick up the ring with ease. ";

A further complication is that we might want to execute more than one statement in the `if`-part or the `else`-part. We can do that by enclosing a *block* of statements in braces, thus:

 
    if(ring.weight > 4)
    {
        "The ring feels strangely heavy, so heavy that it the attempt to lift it drains your strength. ";
        me.strength -= 3;
    }
    else
    {
        "You pick up the ring with ease. ";
        ring.moveInto(me);
    }

The conditions we can test for include

- `a == b` a is equal to b

- `a != b` a is not equal to b

- `a > b` a is greater than b

- `a < b` a is less than b

- `a >= b` a is greater than or equal to b

- `a <= b` a is less than or equal to b

- `a is in (x, y, z)` a is equal to x or y or z

- `a not in (x, y, z)` a is neither x nor y nor z

Note the distinction between `a =b`, which assigns the value of `b` to `a`, and `a == b`, which tests for equality between `a` and `b`.

All these conditional expressions evaluate to one of two values, `true` or `nil`. The `nil` value also has other uses, in contexts where it means roughly 'nothing at all'. A value of `nil` or `0` (the number zero) is treated as false, anything else is treated as true.

It can be useful to combine these logical conditions with *Boolean* operators. The three Boolean operators available in TADS 3 are:

- `a && b` a and b -- true if both a and b are true (i.e. neither nil nor 0)

- `a || b` a or b -- true if either a or b is true (i.e. neither nil nor 0)

- `!a` not a -- true if a is false (i.e. either nil or 0)

Finally, it's often useful to be able to assign one value to a variable or property if some condition is true, and another if it's false, as in:

 
    if(obj.name == 'banana')
        colour = yellow;
    else
        colour = green;

This is so common that there's a special conditional operator we can use to write this sort of thing much more succinctly:

 
    colour = obj.name == 'banana' ? yellow : black; 

More generally, this takes the form:

 
    someValue = condition ? valueIfConditionTrue : valueIfConditionFalse;

In the special case where we want to ensure that we assign a non-nil value to something, we can use the if-nil operator `??`. For example, suppose we have:

    someValue = a ?? b;

This will assign the value *b* to `someValue` if *a* is nil, but will otherwise assign *a* to `someValue`. Together assignment statements, method and function calls, and conditional statement make up the great bulk of procedural statement we're likely to use in TADS 3 programming. There are others, some of which we'll meet later. In the meantime, if you want to get the full picture, read the section on 'Procedural Code' in the *TADS 3 System Manual*.

## 3.5. Fixtures and Fittings

Objects of class `Thing` are portable: they can be picked up, carried around the game map, and dropped elsewhere. This is also true of the various subclasses of `Thing `we met above. But many objects in a work of Interactive Fiction aren't portable, they're part of the fixtures (doors, windows, trees, houses, mountains etc.) or they're too big and heavy to pick up (large tables, sofas, and other actors, for example).

To stop things being portable, we can define `isFixed = true` on them. Alternatively, we can define them using one of the classes we're about to meet below. Either way the effect on such objects will be:

- They can't be picked up.

- They are not listed in room descriptions (unless they have a `specialDesc` or `initSpecialDesc` property defined).

Note that we *can* define `specialDesc` and/or `initSpecialDesc` on ordinary portable objects too;
 the `initSpecialDesc` will be displayed until the object has moved, and the `specialDesc` used thereafter (actually the full story is slightly more complex than that, since we can change the `useInitSpecialDesc` condition). For example, we might define:

 
    + ring: Wearable 'diamond ring'
        initSpecialDesc = "A diamond ring lies discarded on the ground.";

This would result in the ring being given a separate paragraph in the room description, and listed as "A diamond ring lies discarded on the ground" until it's moved. The real point here, however, is that a non-portable object won't be mentioned in a room listing at all (because it's assumed that it will have been mentioned in the room description) unless it's given a `specialDesc` or `initSpecialDesc`. For example:
 
    + table: Heavy 'large wooden table'
        specialDesc = "A large wooden table occupies the middle of theroom. "
    ;

Since this table will (probably) never be moved, it doesn't make any difference whether we use `specialDesc` or `initSpecialDesc` in this latter instance.

The various classes we can use to define non-portable objects are as follows:

- `Fixture` -- An object that's obviously fixed in place, like a house or a shelf nailed to the wall.

- `Heavy` -- An object that gives being too heavy as the reason why it can't be moved;  this is useful for large pieces of furniture and the like.

- `Decoration` -- an object that's unimportant but mentioned in the description of

something else, so we want to provide a description of it. If the player attempts to do anything with a Decoration apart from examining it, it will display it's `notImportantMsg`, which is typically 'The whatever is not important. '

- `Distant` -- an object representing something that's beyond the player's reach, generally because it's a long way off, like the moon or a distant range of hills. An attempt to do anything but examine a Distant object will result in a refusal of the form 'The moon is too far away. ';  this message can be change by overriding the `notImportantMsg` property.

- `Immovable` -- an object that can't in fact be picked up even though this isn't immediately obvious to the player, for example an item that's heavier than it looks. The distinction between this and a `Fixture` is a subtle one: what it boils down to is that the parser will be readier to choose X in response to a TAKE X command if X is an `Immovable` than if it's a `Fixture`.

- `Unthing` -- an object used to represent the *absence* of something. This will respond to any command with its `notHereMsg`, typically something like 'The gold ring isn\'t here. '. This might be used, for example, to remind the player that the gold ring has just fallen through a grating. If an `Unthing` and something other than an `Unthing` both match the player's command, the parser will always ignore the `Unthing`.

If the player tries to take any of these kinds of object, or indeed to put them somewhere else or move them, the default response will tend to be a rather bland "The whatever is fixed in place" (or the equivalent appropriate to the class in question). We can customize these responses by overriding one or more of the following properties:

- `cannotTakeMsg -- `a message (typically given as a single-quoted string, e.g. 'You can't take that') shown in response to an attempt to take the object in question.

- `cannotMoveMsg` -- a message (again typically a single-quoted string) shown in response to attempts to move the object in question. By default we just use the `cannotTakeMsg` (so any changes to the `cannotTakeMsg` will be copied to the `cannotMoveMsg`).

- `cannotPutMsg` -- a message (again typically a singe-quoted string) shown in response to put the object in question in, on, under or behind something. Again, by default, we just use the `cannotTakeMsg`.

The way these might be used (on either an Immovable or a Fixture) is illustrated by the following example:

    cabinet: Immovable 'large wooden cabinet;  bulky polished of[prep]; furniture piece'
        "It's a large piece of furniture, made of polished wood. "
 
        cannotTakeMsg = 'The cabinet is far too bulky for you to carryaround. '
        cannotMoveMsg = 'It is too heavy to move. '
        cannotPutMsg = 'You cannot put the cabinet anywhere else;  it istoo bulky. '
    ;

Note that  because all these objects are ultimately subclasses of Thing, we can (and usually will) use the `Thing` template with them. So, for example, our previous desk with secret knob example could become:

 
    desk: Heavy 'desk;  plain wooden' @study
        "It's just a plain wooden desk. <<if knob.isHidden>> Closer examination, however, reveals that is has a secret knob half-concealedunderneath. <<knob.discover()>> <<end>> "
    ;

 
    knob: Fixture 'secret knob' @desk
        isHidden = true
        cannotTakeMsg = 'The knob is firmly attached to the desk. '
        ; 

 `Unthing`, however, has a special template of its own, since it's generally more useful to define its `notHereMsg` property:
 
    ring: Unthing 'gold ring'
        'The gold ring is no longer here;  you dropped it down thegrating. '
    ;

In this example 'gold ring' is the `vocab` property as before, but 'The gold ring is no longer here;  you dropped it down the grating. ' defines the `notHereMsg` property (which will be used in response to any command targeted at the ring).

Finally, you should have noticed that we've been defining some properties as single-quoted strings and others as double-quoted strings. The distinction is important and will explained more fully in the next chapter, but for now it is important to remember not to mix the two up, otherwise things won't work properly. As a rough rule of thumb properties with names ending in `desc` need to be defined as double-quoted strings, while those with names ending in `msg` need to be defined as single-quoted strings.

Exercise 6: Look up the `Fixture` class in the *Library Reference Manual* and take a quick look at what classes it inherits from and the list of classes that inherit from it. Don't worry about anything you don't understand yet, and don't imagine that you have to commit all this information to memory; the point of the exercise is just to get a feel for what's there and to start learning where to find it when you need it.

Exercise 7: Go back to the practice map you created before (or create a new one) and add some examples of each of the various kinds of non-portable object described above.
[&laquo; Go to previous chapter](2-map-making--rooms.html)&nbsp;&nbsp;&nbsp;&nbsp;[Return to table of contents](LearningT3Lite.html)&nbsp;&nbsp;&nbsp;&nbsp;[Go to next chapter &raquo;](4-doors-and-connectors.html)
