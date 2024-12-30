::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Heidi
Revisited](revisit.htm){.nav} \> Is the bird in the nest?\
[[*Prev:* Dropping objects from the tree](dropping.htm){.nav}    
[*Next:* Summing Up](summing.htm){.nav}     ]{.navnp}
:::

::: main
# Is the bird in the nest?

Despite all we have done so far in this chapter, the game still has one
rather obvious flaw: the intention is that the game should be won when
Heidi restores both bird and nest to the branch with the bird in the
nest, but if you try it as it is you\'ll see that all she has to do to
win the game is to put the nest on the branch; as things stands she can
ignore the poor little bird altogether!

Fortunately this is very easy to fix. All we need to do is to check that
the nest is on the branch *and* that the bird is in the nest:

::: code
    + branch: Thing 'wide firm bough; flat; branch'
        "It's flat enough to support a small object. "
        
        iFixed = true
        isListed = true
        contType = On
        
        afterAction()
        {
            if(nest.isIn(self) && bird.isIn(nest))
                finishGameMsg(ftVictory, [finishOptionUndo]);
        }
    ;
:::

We use the [isIn()]{.code} method here to test for containment:
[obj1.isIn(obj2)]{.code} is true if obj1 is either directly or
indirectly contained in obj2. If you want to test for direct containment
you could use [isDirectlyIn()]{.code}, and that would have worked here,
but it isn\'t actually needed.

Perhaps of more significance is the use of [&&]{.code} to join two
conditions. The [&&]{.code} operator is the TADS 3 way of joining two
expressions together with a logical *and*. The compound expression
[expression1 && expression2]{.code} is true if and only if *expression1*
and *expression2* are both true, otherwise it is nil (i.e. false). Note
that either or both of *expression1* and *expression2* can themselves be
compound expressions, but if they are, it is normally as well to
surround them with parentheses to make your meaning clear both to the
compiler and yourself.

Remember that TADS 3 considers a value of 0 or nil to be false and
anything else to be true. The value of the expression [2 && 4 ]{.code}is
therefore true, while the value of the expression [bird && nil]{.code}
is nil.

TADS 3 also defines a logical or operator, which looks like this:
[\|\|]{.code}. The compound expression [expression1 \|\|
expression2]{.code} is true if either *expression1* or *expression2* is
true (i.e. neither nil nor 0) and nil if both *expression1* and
*expression2* are false (i.e. either nil or 0).

TADS 3\'s third logical operator is the logical not, represented by an
exclamation mark, [!]{.code}. If [expression]{.code} is true then
[!expression]{.code} is nil; if [expression]{.code} is nil then
[!expression]{.code} is true.

For example:

::: code
    local a = 12, b = 6;
    (a == b * 2) || (b == 7) // true, because a is twice b
    (a == b * 2) && (b == 7) // nil, because b is not 7
    (bird || nest) // true because bird is not nil
    'Hampster' && 'forest' // true because neither string is nil
    (a > b) &&  !bird.ofKind(Thing) // nil because bird does inherit from Thing
:::

Finally note that both [&&]{.code} and [\|\|]{.code} are *short-circuit
operators*. This means that in the expression [a && b]{.code},
[b]{.code} is never even evaluated if [a]{.code} is nil (or 0) since
unless [a]{.code} is true, the compound expression [a && b]{.code} must
be false. Conversely in the expression [a \|\| b]{.code}, [b]{.code}
will never be evaluated if [a]{.code} turns out to be true, since if
[a]{.code} is true then the entire compound expression [a \|\| b]{.code}
must be true. That is why the [bird \|\| nest]{.code} example above was
true simply because [bird]{.code} was neither nil nor 0; given that
[bird]{.code} is not false, the entire expression must be true,
regardless of the value of [nest]{.code}.

Besides saving time, this short-circuit evaluation makes it safe to
write code like the following, even when [obj]{.code} might sometimes be
nil:

::: code
    if(obj && obj.bulk > 4)
       say "It's quite a bulky object. ";
:::

In this example, if [obj]{.code} is nil, the expression [(obj.bulk \>
4)]{.code} is never evaluated; we thus avoid the run-time error that
would otherwise result from trying to evaluate a property of nil.

Now try compiling and running the game one last time to check that
everything still behaves as you expect.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Tutorial*\
[Table of Contents](toc.htm){.nav} \| [Heidi
Revisited](revisit.htm){.nav} \> Is the bird in the nest?\
[[*Prev:* Dropping objects from the tree](dropping.htm){.nav}    
[*Next:* Summing Up](summing.htm){.nav}     ]{.navnp}
:::
