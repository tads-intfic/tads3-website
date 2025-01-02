<div class="topbar">

<img src="topbar.jpg" data-border="0" />

</div>

<div class="nav">

<a href="toc.htm" class="nav">Table of Contents</a> \| The Intrinsics  
<span class="navnp"><a href="errmsg.htm" class="nav"><em>Prev:</em> VM Run-Time Error
Codes</a>    
<a href="t3vm.htm" class="nav"><em>Next:</em> t3vm Function Set</a>    
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

[t3vm Function Set](t3vm.htm)  
[tads-gen Function Set](tadsgen.htm)  
[Regular Expressions](regex.htm)  
[tads-io Function Set](tadsio.htm)  
[tads-net Function Set](tadsnet.htm)  
[Network Safety](netsec.htm)  
[Input Scripts](scripts.htm)  
[Byte Packing](pack.htm)  
[BigNumber](bignum.htm)  
[ByteArray](bytearr.htm)  
[CharacterSet](charset.htm)  
[Collection](collect.htm)  
[Date](date.htm)  
[Dictionary](dict.htm)  
[DynamicFunc](dynfunc.htm)  
[File](file.htm)  
[FileName](filename.htm)  
[GrammarProd](gramprod.htm)  
[HTTPRequest](httpreq.htm)  
[HTTPServer](httpsrv.htm)  
[IntrinsicClass](icic.htm)  
[Iterator](iter.htm)  
[List](list.htm)  
[LookupTable](lookup.htm)  
[Object](objic.htm)  
[RexPattern](rexpat.htm)  
[StackFrameDesc](framedesc.htm)  
[String](string.htm)  
[StringBuffer](strbuf.htm)  
[StringComparator](strcomp.htm)  
[TadsObject](tadsobj.htm)  
[TemporaryFile](tempfile.htm)  
[TimeZone](timezone.htm)  
[Vector](vector.htm)  
[WeakRefLookupTable](wlookup.htm)  

</div>

</div>

------------------------------------------------------------------------

<div class="navb">

*TADS 3 System Manual*  
<a href="toc.htm" class="nav">Table of Contents</a> \| The Intrinsics  
<span class="navnp"><a href="errmsg.htm" class="nav"><em>Prev:</em> VM Run-Time Error
Codes</a>    
<a href="t3vm.htm" class="nav"><em>Next:</em> t3vm Function Set</a>    
</span>

</div>
