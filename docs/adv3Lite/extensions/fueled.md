::: topbar
![](../../docs/manual/topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](../../docs/manual/toc.htm){.nav} \|
[Extensions](../../docs/manual/extensions.htm){.nav} \> Fueled Light
Source\
[[*Prev:* Footnotes](footnotes.htm){.nav}     [*Next:*
MobileCollectiveGroup](mobilecollectivegroup.htm){.nav}     ]{.navnp}
:::

::: main
# Fueled Light Source

## Overview

The purpose of the [fueled.t](../fueled.t) extension is to enable the
definition of light sources that have a finite life due to a limited
fuel supply. Once the fuel supply is exhausted a FueledLightSource goes
out and can\'t be relit (unless it\'s refueled).

\
[]{#classes}

## New Classes, Objects and Properties

In addition to a number of properties intended purely for internal use,
this extension defines the following new class and properties:

-   *New Mix-in Class*: **FueledLightSource**
-   *Properties/Methods*: [fuelSource]{.code}, [fuelLevel]{.code},
    [showWarning()]{.code}, [sayBurnedOut()]{.code},
    [burnedOutMsg]{.code}, [plungedIntoDarknessMsg]{.code},
    [wontLightMsg]{.code}, [removeFuelSource()]{.code}

\
[]{#usage}

## Usage

Include the fueled.t file after the library files but before your game
source files. FueledLightSource is a mix-in class, so that it must be
included first in the list of classes when you define an object that
uses it, such as a flashlight or something that\'s lit in some other
way.

The FueledLight source class gives a light source a finite life. One
unit of fuel is consumed every turn the light source is lit. When the
fuel is exhausted the light goes out and cannot be re-lit (unless fuel
is added again). The properties and methods of FueledLightSource that
contril this behaviour are:

-   **fuelSource**: The object providing the fuel. By default this is
    nil, but for an object that uses an external fuel source, this could
    be the external fuel source (such as a battery for a flashlight); if
    so then the external fuel source must supply the [fuelLevel]{.code}
    property.
-   **fuelLevel**: this is the amount of fuel remaining in the fuel
    source. One unit of fuel is consumed for every turn that the
    FueledLightSource is lit. The default starting value for a
    FueledLightSource is 20, but of course you can override this to any
    value you like (or define whatever numerical value you like on an
    external fuel source).
-   **showWarning()**: this method can be optionally overridden to
    display warning messages when the fuelLevel is getting low. Such a
    method would typically display a different message depending on the
    fuelLevel.
-   **sayBurnedOut()**: this is the message that\'s displayed when the
    light source runs out of fuel. You can override the message in full,
    but to make it easier to customize you can override either or both
    of the following:
    -   **burnedOutMsg**: this is the start of the message; it
        shouldn\'t be a complete sentence but something of the form,
        \'{The subj obj} {goes} out\' or \'The torch dies\'; if the
        mesage parameter substition form is used, [{the subj
        obj}]{.code} will be replaced with the name of the object
        that\'s just gone out.
    -   **plungedIntoDarknessMsg**: this should be a fragment of a
        sentence describing what happens if the player character is left
        in darkness as a result of the light source going out. It should
        be of the form \', leaving you in darkness\' (i.e. something
        that can follow on directly from the [burnedOutMsg]{.code}).
-   **wontLightMsg**: the message to display (as a single-quoted string)
    if the FueledLightSource won\'t light because it has no fuel.
-   **removeFuelSource()**: a message that can be called from game code
    when a fuel source is disconnected or removed from a
    FueledLightSource. It carries out useful housekeeping such as noting
    that the FueledLightSource no longer has a fuel source,
    extinguishing the light if it was on, and stopping the daemon that
    consumes the fuel.

As an example to illustrate all of this, here\'s how we might implement
a flashlight (or torch in British parlance) that requires a battery:

::: code
    + torch: FueledLightSource, OpenableContainer, Flashlight 'torch; heavy black; flashlight'
        "It's a heavy black torch. "
        
        fuelSource = battery
        
        showWarning()
        {
            switch(fuelSource.fuelLevel)
            {
            case 2:
                "The torch is starting to grow dim. ";
                break;
            case 1:
                "The torch is getting very dim. ";
                break;
            }
        }
        
        plungedIntoDarknessMsg = ', leaving you in total darkness'
        
        notifyRemove(obj)
        {
            if(obj == battery)
                removeFuelSource();
            inherited(obj);            
        }
        
        notifyInsert(obj)
        {
            inherited(obj);
            
            /* 
             *  If we reinsert a battery when the torch is on, and there's still life in the battery,
             *  we need to relight the torch and restart the fuel-consumption daemon. 
             */
            if(obj.ofKind(Battery))
            {
                fuelSource = obj;
                if(isOn && fuelSource.fuelLevel > 1)
                {
                   "The torch comes on again. ";
                
                   /* call makeLit to make sure we also restart the fuel daemon here. */
                   makeLit(true); 
               }
            }
        }
            
    ;

    ++ battery: Battery 
        fuelLevel = 10    
    ;

    class Battery: Thing 'battery'
       fuelLevel = 200
    ;
:::

This covers most of what you need to know to use this extension. For
additional information see the source code and comments in the
[fueled.t](../fueled.t) file.
:::

------------------------------------------------------------------------

::: navb
*Adv3Lite Manual*\
[Table of Contents](../../docs/manual/toc.htm){.nav} \|
[Extensions](../../docs/manual/extensions.htm){.nav} \> Fueled Light
Source\
[[*Prev:* Footnotes](footnotes.htm){.nav}     [*Next:*
MobileCollectiveGroup](mobilecollectivegroup.htm){.nav}     ]{.navnp}
:::
