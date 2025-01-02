Help Topics \> [Table of Contents](wbcont.htm)  
  

![](../htmltads.jpg)  

# Using Extension Libraries

Most TADS 3 projects depend upon the core libraries that come as part of
TADS: the system library, which contains the definitions for built-in
object types, functions, and the like; and the adv3 library, which
defines a comprehensive framework for interactive fiction games.

In addition to the standard libraries, you can use "extension"
libraries. These are add-on libraries written by third parties to
provide new features that aren't in the basic libraries.

Using extensions is pretty straightforward in princple, although in
practice there can be some slight logistical complications. The key is
to set everything up the way that Workbench expects it - if you do this,
you should have no problems. This chapter has our recommendations for
how to set things up.

## Folder set-up

An extension is meant to be shared among multiple projects. That means
that you probably don't want to keep it in the same folder with your own
game's source code - if you did that, you'd have to make separate copies
for each game in which you wanted to use the extension.

If you don't keep extensions with your game, where do you keep them? We
recommend keeping all of your extensions together in a separate folder
that you create just for this purpose. When you installed Workbench, it
created a folder in your My Documents folder, called TADS 3; and inside
that folder it created another folder called Extensions. This is where
we recommend you keep your extension files.

Workbench has an option setting that lets you specify the folder you're
using for extensions. The default is the folder the installer created
for you - "My Documents\TADS 3\Extensions" - but you can change it to
another location if you prefer. Open the Options dialog and go to the
System/Extensions page to select a different folder.

For a simple extension that consists of nothing more than a .t file, you
can just drop the .t file directly in the Extensions folder.

For a more elaborate, multi-file extension - one that comes with several
.t files, or that includes auxiliary files like documentation or
graphics resources - you'll probably want to give the extension its own
sub-folder. This will keep its files together (so that you won't be left
wondering some time down the line which extension a README belongs to,
for example). For each multi-file extension, create a subfolder within
the Extensions folder, and put the extension's files within the
subfolder.

## Finding extensions for builds

If you set things up as described above, Workbench and the compiler
should automatically find extension files whenever they need to.
Workbench automatically searches in the Extensions directory that's set
in the options when looking for files that aren't part of your project
folder, and it passes the information along to the compiler so that it
can search there as well.

If you store any extensions outside of the Extensions folder defined in
the options settings, you'll need to add one more setting so that
Workbench can find those outliers. Open the Options dialog, and go to
the System/Library Paths page. Add the folder containing each outside
extension to the list. This will tell Workbench and the compiler to
search there when looking for your files.

## Sharing your project with other people

Workbench has a command that builds a ZIP file that packages your
project's source code for distribution. You can use this feature to send
a copy of the project source to a collaborator, for example, or to
publish the source code.

The Source ZIP packager omits the system and adv3 libraries from the
package. The assumption is that anything that comes packaged with TADS
itself would be redundant, since anyone you send the package to would
have all of the system files as part of their own TADS installation.

However, the packager *doesn't* assume that recipients will necessarily
have copies of all of the extension libraries you're using. Extensions
by definition aren't part of the base system, so recipient might or
might not have them installed. Recipients might not even have access to
all of the extensions you're using. If you're using a private extension
you wrote to share among your own games, but you haven't published it,
obviously no one else will have a copy.

To ensure that recipients will be able to build your project, then, the
Source ZIP packager has to include the extensions you're using in the
project. It does this as follows:

- If a file in your project's source file list is located *directly* in
  the Extensions folder (as set in your options configuration), the
  packager includes that file in a ZIP file *within* the ZIP file,
  called extensions/Extensions.zip.
- If a file is located in a *subfolder* of the Extensions folder, or
  anywhere *outside* of the Extensions folder, the packager includes the
  *entire folder* containing the file. It puts the entire contents of
  the folder into a ZIP file called extensions/XXX.zip, where XXX is the
  name of the original parent folder. The packager includes the entire
  contents of the folder on the assumption that the whole reason there's
  a separate folder is that the extension contains additional bundled
  files, such as documentation, that the author of the extension wanted
  to keep together as a set. The recipient would want these files even
  though they might not be listed anywhere as part of your project's
  source code.

## Loading someone else's project

If someone sends you a copy of their project's source code that they
bundled up with the Source ZIP packager, you'll have to reverse the
process described above. Unfortunately, Workbench can't do this work
automatically, because some of it depends on decisions that only you can
make.

The first step is to use an UNZIP tool to extract the original files
from the ZIP file. There are many good, free UNZIP tools for Windows,
and Windows even has built-in support for the format. Create a folder
where you want to store the project, and unzip the ZIP file into that
folder.

You'll now have a copy of the author's original project source folder
layout - the unzip process will reproduce the internal folder structure
of the project.

However, if the project uses an extension libraries, you're not quite
ready to build it. You first have to "install" the extensions that came
bundled with the ZIP file. You can tell if there are any extensions by
looking at the project to see if there's an "extensions" folder in the
project's source folder - if so, there are extensions you need to
install.

As described above, each extension will be bundled up as another ZIP
file within the "extensions" folder. You need to install each of these.
That's easier than it sounds - all you really have to do is unzip it.
The only question is where to put the files. There are two main
approaches here:

- If you want to be able to share the extensions among your projects,
  unzip the files into your main Extensions folder - the one set in the
  Workbench options. This will set up the extensions globally, so that
  you can use them in any of your projects.
- If you want to keep the extensions private, so that only this one
  project can use them, unzip them directly into the project folder.
  This will let this project access them, but other projects won't be
  able to reach them because they're not in the global Extensions folder
  that Workbench always searches when looking for external files.

  
  
  
  
  

------------------------------------------------------------------------

  
Help Topics \> [Table of Contents](wbcont.htm)  
  
Copyright ©1999, 2007 by Michael J. Roberts.
