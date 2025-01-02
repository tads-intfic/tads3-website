---
---
<span class="title">objects.t</span><span class="type">file</span>

[source file](../source/objects.t.html)

**Classes**  
[Summary](#_ClassSummary_)  
 

**Objects**  
[Summary](#_ObjectSummary_)  
 

**Functions**  
[Summary](#_FunctionSummary_)  
[Details](#_Functions_)

<div class="fdesc">

  
Portions based on work by Kevin Forchione, used by permission.

TADS 3 Library - objects

This module defines the basic physical simulation objects (apart from
Thing, the base class for most game objects, which is so large that it's
defined in its own separate module for convenience). We define such
basic classes as containers, surfaces, fixed-in-place objects,
openables, and lockables.

</div>

<span id="_ClassSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Classes</span>  

</div>

` `[`BaseMultiLoc`](../object/BaseMultiLoc.html)`  `[`BasicContainer`](../object/BasicContainer.html)`  `[`BasicOpenable`](../object/BasicOpenable.html)`  `[`BulkLimiter`](../object/BulkLimiter.html)`  `[`Button`](../object/Button.html)`  `[`Collective`](../object/Collective.html)`  `[`CollectiveGroup`](../object/CollectiveGroup.html)`  `[`Component`](../object/Component.html)`  `[`Consultable`](../object/Consultable.html)`  `[`ConsultTopic`](../object/ConsultTopic.html)`  `[`Container`](../object/Container.html)`  `[`CustomFixture`](../object/CustomFixture.html)`  `[`CustomImmovable`](../object/CustomImmovable.html)`  `[`Decoration`](../object/Decoration.html)`  `[`DefaultConsultTopic`](../object/DefaultConsultTopic.html)`  `[`Dial`](../object/Dial.html)`  `[`Distant`](../object/Distant.html)`  `[`FillMedium`](../object/FillMedium.html)`  `[`Fixture`](../object/Fixture.html)`  `[`Flashlight`](../object/Flashlight.html)`  `[`Food`](../object/Food.html)`  `[`Heavy`](../object/Heavy.html)`  `[`Hidden`](../object/Hidden.html)`  `[`Immovable`](../object/Immovable.html)`  `[`IndirectLockable`](../object/IndirectLockable.html)`  `[`Intangible`](../object/Intangible.html)`  `[`ItemizingCollectiveGroup`](../object/ItemizingCollectiveGroup.html)`  `[`KeyedContainer`](../object/KeyedContainer.html)`  `[`LabeledDial`](../object/LabeledDial.html)`  `[`Lever`](../object/Lever.html)`  `[`LightSource`](../object/LightSource.html)`  `[`Linkable`](../object/Linkable.html)`  `[`LocateInParent`](../object/LocateInParent.html)`  `[`Lockable`](../object/Lockable.html)`  `[`LockableContainer`](../object/LockableContainer.html)`  `[`LockableWithKey`](../object/LockableWithKey.html)`  `[`MultiFaceted`](../object/MultiFaceted.html)`  `[`MultiFacetedFacet`](../object/MultiFacetedFacet.html)`  `[`MultiInstance`](../object/MultiInstance.html)`  `[`MultiInstanceInstance`](../object/MultiInstanceInstance.html)`  `[`MultiLoc`](../object/MultiLoc.html)`  `[`Noise`](../object/Noise.html)`  `[`NonPortable`](../object/NonPortable.html)`  `[`NumberedDial`](../object/NumberedDial.html)`  `[`Odor`](../object/Odor.html)`  `[`OnOffControl`](../object/OnOffControl.html)`  `[`Openable`](../object/Openable.html)`  `[`OpenableContainer`](../object/OpenableContainer.html)`  `[`OutOfReach`](../object/OutOfReach.html)`  `[`Readable`](../object/Readable.html)`  `[`RestrictedContainer`](../object/RestrictedContainer.html)`  `[`RestrictedHolder`](../object/RestrictedHolder.html)`  `[`RestrictedSurface`](../object/RestrictedSurface.html)`  `[`SecretFixture`](../object/SecretFixture.html)`  `[`SensoryEmanation`](../object/SensoryEmanation.html)`  `[`SensoryEvent`](../object/SensoryEvent.html)`  `[`Settable`](../object/Settable.html)`  `[`SightEvent`](../object/SightEvent.html)`  `[`SightObserver`](../object/SightObserver.html)`  `[`SimpleNoise`](../object/SimpleNoise.html)`  `[`SimpleOdor`](../object/SimpleOdor.html)`  `[`SingleContainer`](../object/SingleContainer.html)`  `[`SmellEvent`](../object/SmellEvent.html)`  `[`SmellObserver`](../object/SmellObserver.html)`  `[`SoundEvent`](../object/SoundEvent.html)`  `[`SoundObserver`](../object/SoundObserver.html)`  `[`SpringLever`](../object/SpringLever.html)`  `[`Surface`](../object/Surface.html)`  `[`Switch`](../object/Switch.html)`  `[`Unthing`](../object/Unthing.html)`  `[`Vaporous`](../object/Vaporous.html)`  `[`Wearable`](../object/Wearable.html)`  `
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Objects</span>  

</div>

*(none)* <span id="FunctionSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Functions</span>  

</div>

*(none)* <span id="_Functions_"></span>

<div class="mjhd">

<span class="hdln">Global Functions</span>  

</div>

*(none)*

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
