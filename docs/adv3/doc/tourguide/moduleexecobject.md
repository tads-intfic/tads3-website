---
layout: docs
---
<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>ModuleExecObject<br />
</strong></td>
<td style="text-align: right;"><a
href="onetimepromptdaemon.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="initobject.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
ModuleExecObjects are a little like Fuses and Daemons in that they allow
code to be executed at a particular point, although a ModuleExecObject
is not the really same thing as a Fuse or Daemon. Instead,
ModuleExecObject is an abstract base class for various classes that
provide modular execution hooks. This class and its subclasses are
mix-in classes - they can be multiply inherited by any object (as long
as it's not already some other kind of module execution object).  
  
The point of the Module Execution Object and its subclasses is to allow
libraries and user code to define execution hooks, without having to
worry about what other libraries and user code bits are defining the
same hook. When we need to execute a hook defined via this object, we
iterate over all of the instances of the appropriate subclass and invoke
its execute() method.  
  
By default, the order of execution is arbitrary. In some cases, though,
dependencies will exist, so that one object cannot be invoked until
another object has already been invoked. In these cases, you must set
the execBeforeMe property to contain a list of the objects whose
execute() methods must be invoked before this object's execute() method
is invoked. The library will check this list before calling execute() on
this object, and ensure that each object in the list has been invoked
before calling this object's execute(). Similarly, you can use the
execAfterMe property to contain a list of all the ModuleExecObjects that
mustn't execute until the current object has executed.  
  
