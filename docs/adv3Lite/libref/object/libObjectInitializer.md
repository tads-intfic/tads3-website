[libObjectInitializer]{.title}[object]{.type}

[misc.t](../file/misc.t.html)\[[2295](../source/misc.t.html#2295)\]

[Superclass\
Tree](#_SuperClassTree_)

[Property\
Summary](#_PropSummary_)

[Method\
Summary](#_MethodSummary_)

[Property\
Details](#_Properties_)

[Method\
Details](#_Methods_)

::: fdesc
Static object and class initializer.

During startup, we\'ll automatically call the classInit() method for
each class object, and we\'ll call the default constructor for each
static object instance. (\"Static\" objects are those defined directly
in the source code, as opposed to objects created dynamically with
\'new\'.) This makes it easier to write initialization code by making
the process more uniform across static and dynamic objects.

The first step is to call classInit() on each class. We call this method
only each class that \*directly\* defines the method (i.e., we don\'t
call it on classes that only inherit the method from another class). We
cycle through the objects in arbitrary order. However, you can control
the relative order when there\'s a dependency by setting the
\'classInitFirst\' property to a list of one or more classes to
initialize first. When we encounter a class with this property, we\'ll
call the listed classes\' classInit() methods before calling the given
class\'s classInit().

The second step is to call constructStatic() or construct() on each
regular (non-class) object. We only call this on \*static\* objects:
objects defined directly in the source code, as opposed to created
dynamically with \'new\'. As with classInit(), we visit the objects in
arbitrary order. You can control dependencies using the
\'constructFirst\' method: set this to a list of objects to be
initialized before self.

If an object defines or inherits a constructStatic() method, we\'ll call
it instead of construct(). Otherwise, if it defines or inherits a
construct() method with no arguments, we\'ll call it. Otherwise we\'ll
do nothing.

Note that it\'s possible for a base class to have a compatible
zero-argument constructor, but for a subclass to override this with a
constructor that takes arguments. In this case, we\'ll search the class
tree for an inherited zero-argument constructor. If we find one, we\'ll
call the inherited constructor.

We can only call zero-argument construct() methods because we have no
basis for providing other arguments.

**`libObjectInitializer`**` :   `[`PreinitObject`](../object/PreinitObject.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`libObjectInitializer`**\
`         `[`PreinitObject`](../object/PreinitObject.html)\
`                 `[`ModuleExecObject`](../object/ModuleExecObject.html)\
`                         object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`_initedTab`](#_initedTab)`  `[`execBeforeMe`](#execBeforeMe)`  `

Inherited from `PreinitObject` :\
` `[`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)`  `

Inherited from `ModuleExecObject` :\
` `[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)`  `[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)`  `[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)`  `[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`callConstructor`](#callConstructor)`  `[`execute`](#execute)`  `

` `

Inherited from `ModuleExecObject` :\
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#_initedTab}

`_initedTab`

[misc.t](../file/misc.t.html)\[[2422](../source/misc.t.html#2422)\]

::: desc
table of objects we\'ve already initialized
:::

[]{#execBeforeMe}

`execBeforeMe`[OVERRIDDEN]{.rem}

[misc.t](../file/misc.t.html)\[[2296](../source/misc.t.html#2296)\]

::: desc
*no description available*
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#callConstructor}

`callConstructor (obj, conProp, preProp)`

[misc.t](../file/misc.t.html)\[[2368](../source/misc.t.html#2368)\]

::: desc
call the given object\'s constructor
:::

[]{#execute}

`execute ( )`[OVERRIDDEN]{.rem}

[misc.t](../file/misc.t.html)\[[2297](../source/misc.t.html#2297)\]

::: desc
*no description available*
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
