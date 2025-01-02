---
layout: docs
---
<div class="topbar">

<img src="topbar.jpg" data-border="0" />

</div>

<div class="nav">

<a href="toc.html" class="nav">Table of Contents</a> \| The Intrinsics  
<span class="navnp"><a href="errmsg.html" class="nav"><em>Prev:</em> VM Run-Time Error
Codes</a>    
<a href="t3vm.html" class="nav"><em>Next:</em> t3vm Function Set</a>    
</span>

</div>

<div class="main">

# Part IV: The Intrinsics

This part describes the "intrinsic" functions and classes, which are
features built into the VM itself.

Although the intrinsics are built into the VM, they look and behave much
the same as ordinary functions and objects that you would define in your
own program. You access their functionality the same way you would
access ordinary functions and objects, using the standard function call
syntax and the standard object and method syntax.

There are two main reasons that certain features are built into the VM,
rather than provided as library code. The first is that the VM doesn't
itself provide any access to the external operating system environment,
so the only way to gain access to that environment is through these
native-code extensions to the VM. Any features that require OS
interaction thus have to be implemented as intrinsics. The second reason
is that certain common operations are very computationally expensive, so
they run much faster when implemented as native machine code rather than
as interpreted VM byte-code. When an operation is both computationally
intensive and common enough that many programs will benefit
substantially from the speed improvement, an intrinsic implementation
might be justified.

<div class="sectoc">

[t3vm Function Set](t3vm.html)  
[tads-gen Function Set](tadsgen.html)  
[Regular Expressions](regex.html)  
[tads-io Function Set](tadsio.html)  
[tads-net Function Set](tadsnet.html)  
[Network Safety](netsec.html)  
[Input Scripts](scripts.html)  
[Byte Packing](pack.html)  
[BigNumber](bignum.html)  
[ByteArray](bytearr.html)  
[CharacterSet](charset.html)  
[Collection](collect.html)  
[Date](date.html)  
[Dictionary](dict.html)  
[DynamicFunc](dynfunc.html)  
[File](file.html)  
[FileName](filename.html)  
[GrammarProd](gramprod.html)  
[HTTPRequest](httpreq.html)  
[HTTPServer](httpsrv.html)  
[IntrinsicClass](icic.html)  
[Iterator](iter.html)  
[List](list.html)  
[LookupTable](lookup.html)  
[Object](objic.html)  
[RexPattern](rexpat.html)  
[StackFrameDesc](framedesc.html)  
[String](string.html)  
[StringBuffer](strbuf.html)  
[StringComparator](strcomp.html)  
[TadsObject](tadsobj.html)  
[TemporaryFile](tempfile.html)  
[TimeZone](timezone.html)  
[Vector](vector.html)  
[WeakRefLookupTable](wlookup.html)  

</div>

</div>

------------------------------------------------------------------------

<div class="navb">

*TADS 3 System Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \| The Intrinsics  
<span class="navnp"><a href="errmsg.html" class="nav"><em>Prev:</em> VM Run-Time Error
Codes</a>    
<a href="t3vm.html" class="nav"><em>Next:</em> t3vm Function Set</a>    
</span>

</div>
