Distributing Your Game

# Distributing Your Game

When you're ready to distribute your game to players, you have a few of
options for how to package your game. This document describes the most
common ways to distribute a game; of course, you or your players may
have specific needs that would best be met by another alternative.

### Distributing as a .GAM or .t3 File

The easiest way for you to distribute your game is as a .GAM or .t3
file. Simply compile your game, and distribute the resulting .GAM/.t3
file.

**Advantages:** Since the .GAM/.t3 file is portable, players can run the
game on any type of computer to which the TADS interpreter has been
ported. You also don't need to worry about which type of compression
software players may have, since they can just copy the compiled game
file and play it, without needing any other software besides the TADS
interpreter.

**Disadvantages:** If you're distributing over the Internet, file
transfers are slower with an uncompressed .GAM/.t3 file than they would
be if you used a compression tool (such as "zip") to compress the file.
Furthermore, you can't attach any other files to your distribution, such
as a README or a license file, since you're distributing the single
.GAM/.t3 file. Also, players must already have a copy of the TADS
interpreter or know where to find it, since the .GAM/.t3 file can't be
used without the interpreter.

### Distributing the .GAM or .t3 File in an Archive

If you want to include other files with your distribution, you can
create an archive using one of the common compression tools, such as
"zip." This not only makes the distribution smaller by compressing the
.GAM file and the other files you include, but also allows you to
include several files in a single distribution archive.

**Advantages:** The files are compressed to make file transfers faster,
and you can include multiple files in the distribution. Your
distribution is still reasonably portable, because the .GAM file is
portable once decompressed, although portability may be limited by the
compression format you use.

**Disadvantages:** Players must have a decompressor that recognizes the
format you use; while "zip" (among others) is widely supported, it comes
in several variations of differing portability. Players must have a copy
of the TADS interpreter, although you can include a README file that
explains how to obtain a copy of the TADS interpreter for players that
don't already have it.

### Distributing a Stand-alone Executable

For DOS users, the MAKETRX (or [MAKETRX32](#maketrx32) for 32-bit
Windows users) program allows you to link your .GAM or .t3 file into a
stand-alone exectuable (an .EXE file). Similar tools are avialable on
most TADS platforms; check your system-specific TADS documentation for
information.

A stand-alone executable version of your game does not require a
separate TADS interpreter, so players can run your game directly without
needing to obtain any additional software. Your game is complete
self-contained.

**Advantages:** Players do not need to obtain a copy of the TADS
interpreter. Many players may find this a lot more convenient,
especially if they haven't played other TADS games. Some authors prefer
the more finished look of a game built as a stand-alone application.

**Disadvantages:** Your distribution is much larger because it must
include the full interpreter executable in addition to your game. Your
distribution is also non-portable, because it can only run on the
operating system on which you created the executable.

### Distributing with an Installer

TADS for Windows 95 and NT has a [tool](#build_setup) that lets you
build a Setup utility for your game. The installation builder creates a
compressed archive file that contains a stand-alone executable version
of your game, any additional files you want to include, and a setup
program; the archive is then attached to a self-extractor executable.

You distribute the single resulting executable; players simply download
and run the executable, which automatically extracts the files and runs
the Setup procedure to copy your game onto the player's computer.

**Advantages:** This distribution option is by far the simplest way for
players to install your game. Players do not need a separate copy of the
TADS interpreter, since your game is a stand-alone application, and
players do not even need any third-party compression software, since the
decompressor is built into the distribution. The Setup program uses a
familiar user interface to lead the user through the installation
process, and creates a "Start" menu item for your game, so this option
makes it much simpler and more convenient for players to install and
play your game. The installer also automatically makes registry entries
for your game to improve the game's integration with the Windows
desktop, and provides an Uninstaller to make it easy for players to
remove your game from their computers.

**Disadvantages:** Your distribution is slightly larger than with other
options, because it must include the Setup program and the decompression
program (these add about 80k to your distribution file size). Your
distribution is non-portable, because it uses a stand-alone game
executable and the non-portable Setup program.  
  

------------------------------------------------------------------------

<span id="maketrx32"></span>

### Using `maketrx32` to build a Stand-alone Executable

HTML TADS includes a utility called `maketrx32` that lets you create a
stand-alone executable for your game. This utility simply combines the
TADS interpreter executable and your compiled game into a single file.
Because your game is bound into the executable, players can run your
game simply by running this single file from the operating system;
players don't need to specify any parameters or download any other files
to play your game. Many game authors like to distribute their games this
way, because it makes installing and playing the games much simpler and
more convenient for the player.

The `maketrx32` utility works like the traditional `maketrx` utility
that's part of the DOS TADS tools. The new utility has a few extra
options, though.

You must run `maketrx32` from the DOS command prompt. The `maketrx32`
command has three main parameters, only one of which is required:

        maketrx32 source game destination

The *source* parameter specifies the name of the TADS interpreter
executable, including the directory path. You don't normally need to
specify this parameters, because `maketrx32` uses the appropriate
interpreter executable from the TADS executable directory (which should
be the same directory that contains the `maketrx32.exe` itself).

The *game* parameter is required. This specifies the name of your .GAM
file, including the directory path if it's not in the current directory.

The *destination* parameter is the name of the stand-alone executable
version of your game that you want `maketrx32` to create. If you don't
specify this parameter, `maketrx32` simply replaces the .GAM extension
of your game file with the .EXE extension for executable files. So, if
your game is called `c:\games\MyGame.gam`, the utility will create
`c:\games\MyGame.exe` by default.

You can also specify some options. The options must precede all of the
filenames. The options are:

- `-t3`: specifies that your game is a TADS 3 game. This is the default
  if the game file name you specified ends in ".t3"; otherwise, TADS 2
  is assumed as the default.
- `-html`: this option specifies that you want to use the HTML TADS
  interpreter executable (HTMLTADS.EXE) for your game. By default, the
  standard TADS interpreter executable (TR.EXE) is used.
- `-prot`: specifies that you want to use the 16-bit DOS protected-mode
  TADS interpreter executable (TRX.EXE) for your game.
- `-win32`: specifies that you want to use the 32-bit Windows
  console-mode TADS interpreter executable (TR32.EXE) for your game.
- `-savext` *ext*: specifies the filename suffix that you want your game
  to use when saving game positions. By default, TADS will save game
  positions in files with the .SAV (TADS 2) or .t3v (TADS 3) suffix. For
  HTML TADS, it's important (see [below](#save_suffix)) that you specify
  a different suffix, so that Windows system can associate the saved
  games with your stand-alone executable; this allows players to restore
  a saved game directly from the Windows Explorer by double-clicking on
  the saved game file.
- -icon *icofile*: specifies an icon (.ICO) file that you want to use to
  replace the default icon that the Windows Explorer will display on the
  desktop for your stand-alone executable. This option only applies if
  you're using the HTML TADS interpreter. The icon file that you specify
  must contain a 32-by-32 pixel, 16-color large icon, and a 16-by-16
  pixel, 16-color small icon; any other icon formats in the file will be
  ignored. Note that the new icon is actually stored in the .EXE file
  itself, so you don't need to give a copy of the .ICO file to players.

<span id="save_suffix"></span>

### Setting the Saved Game Extension

On Windows, the desktop shell (Windows Explorer) uses the suffix of a
file's name to associate the file with an application. These file
associations are stored in the system "registry" (an internal system
database that Windows maintains). The Windows Explorer uses filename
suffix associations for a number of purposes, including determining the
icon that a file displays, and the program to launch when the user opens
the file.

When you install HTML TADS, the TADS "Setup" program creates several
filename associations. First, it associates the suffixes .GAM (for TADS
2 games) and .t3 (for TADS 3 games) with the HTML TADS interpreter
executable, so that the HTML TADS Interpreter automatically is
automatically launched any time you open a file whose name ends in .GAM
or .t3 (by double-clicking on the file in a desktop window, for
example). Second, the Setup program associates the suffixes .SAV (for
TADS 2) and .t3v (for TADS 3) with the HTML TADS Interpreter as well,
but adds a flag that specifies that this is a saved game file to be
restored. This allows players to start a game and restore a saved
position with the single action of double-clicking on the saved game
file.

When you create a stand-alone executable for your game, HTML TADS
provides a feature that lets you make a similar association for your
game's save files. Because the Windows filename association is based on
the filename suffix, however, you can't create an association for .SAV
or .t3v suffixes for your games. If you created your own .SAV or .t3v
association, the original HTML TADS associations would be lost, because
Windows can only handle one application association for each filename
suffix. This is obviously a problem, because if two games both did it,
they'd be battling it out for control over the suffix if they were both
installed on the same machine. Players could only install one such game
on their systems at a time.

Fortunately, HTML TADS has a feature that lets HTML TADS itself coexist
peacefully with your stand-alone game, and lets your game coexist
peacefully with other games. This new feature allows you to choose your
own saved game suffix. By choosing your own suffix, you can make your
own saved game files uniquely associated with your stand-alone
executable, so that they won't be confused with saved games created by
the HTML TADS interpreter or by stand-alone games.

#### Choose a suffix

To use this feature, the first step is to choose a suffix of your own.
Obviously, you shouldn't use .SAV or .t3v, because those are taken by
HTML TADS itself. You should make your suffix as descriptive as
possible. For *Deep Space Drifter*, for example, we might want to choose
"DeepSave" as the suffix. Note that on Windows 95 and NT, the suffix is
not restricted to the old DOS three-letter limit, so you can use enough
letters to make the suffix descriptive.

Using a descriptive suffix not only will make your saved game files
somewhat friendlier for your players, but will help reduce the chances
of colliding with another game's suffix. There's no procedure for
"registering" suffixes on Windows, but you can reduce the odds of
creating a conflict with another program by choosing a suffix that is as
desriptive of your files as possible.

#### Setting the suffix in your executable

Once you've chosen a suffix, you can use `maketrx32` to set the suffix
in your stand-alone executable. The utility has an option, `-savext`,
that lets you specify this. For example, to generate a stand-alone
executable for *Deep Space Drifter* that uses the suffix ".DeepSave",
you would use this command:

        maketrx32 -html -savext DeepSave deep.gam

Note that you do not include the leading period in the suffix
specification.

#### Setting the registry entry

The final step is to set the registry entry associating your suffix with
your stand-alone executable. Fortunately, HTML TADS will do this for you
automatically. HTML TADS will set the registry entry in one of two ways:
either the HTML TADS [Setup program](#build_setup) for your game will
make the entry when the player installs your game, or your stand-alone
executable will make the entry the first time it runs.

If you distribute your game with a Setup program as described
[below](#build_setup), the Setup program will automatically create the
appropriate registry entries. The advantage of using the Setup program
is that the corresponding Uninstall program will automatically remove
the registry entries if the player uninstalls your game.

If you don't use a Setup program, the HTML TADS executable will notice
that the registry entries are not present, and make the entries itself.
This process is transparent to the player, but has the disadvantage that
the entries will remain in the registry indefinitely, because there is
no Uninstall program to delete the entries. For this reason, if you
distribute your game as a stand-alone executable, you should consider
including the automatic Setup program in your distribution.  
  

------------------------------------------------------------------------

<span id="build_setup"></span>

### Creating a Custom Game Installer

If you're planning to distribute your HTML TADS game as a stand-alone
executable, you may want to build a custom installer for your game
rather than simply distribute the executable and associated files. Using
an installer has several advantages: players can install your game
without any third-party decompression software and without needing to
refer to any documentation; the installer automatically makes entries in
the Windows registry that improve your game's integration with the
Windows desktop; the installer creates an Uninstaller that players can
use to remove your game from their systems with a single action.
Overall, using an installer can give your game a much more professional
feel, and makes it accessible to a wider audience of players by making
it behave like a typical Windows application.

HTML TADS includes a utility, `mksetup`, that lets you build a custom
installer for your game without any programming. You need only specify a
few configuration parameters, and `mksetup` will build the installer.
The resulting installer is suitable for disk or Internet distribution,
because it is bundled as a single executable file (all of the files that
you need to install for your game are compressed and bound into the
executable). Players need only download and run the executable, or run
it directly off a disk or CD-ROM, to install your game.

You run `mksetup` using a command line like this:

        mksetup setup-info-file output-exe

The *setup-info-file* is a text file that contains all of the parameters
that define your installer. The *output-exe* is the name of the
installer executable file to create; this is the file that you can
distribute to players. For example, if you create a text file called
`DeepSetup.Info` that contains the installer parameters for *Deep Space
Drifter*, you can create the installation program as `DeepInstall.EXE`
using this command:

        mksetup DeepSetup.Info DeepInstall.EXE

Since it would have been cumbersome to specify the number of parameters
needed by the installer builder on the command line, `mksetup` reads the
parameters from a configuration file. The format of the file is simple:
each line of the file contains a parameter name, an equals sign, and the
parameter value. Blank lines are ignored, as are lines that start with a
pound sign ("#"), so you can use a pound sign to begin comment lines.

The following parameters are **required** in every setup configuration:

**GAM = *gam-file-name***  
This specifies the name of the .GAM file for your game. The installer
builder will automatically build a stand-alone executable from your
game, so you need only specify the .GAM file itself.

**SAVEXT = *save-file-suffix***  
This specifies the filename extension to use for saved game files that
are created by your game. Refer to the section on [saved game
extensions](#save_suffix) for details on why this setting is necessary
and how you can choose a suitable extension. The *save-file-suffix*
value must *not* contain a period.

**NAME = *display-name***  
This is the name of your game as it is to be displayed by the installer.
You should use the full human-readable version of your name; for
example, for *Deep Space Drifter*, you would simply use "Deep Space
Drifter".

The following parameters are **optional**:

**EXE = *exe-name***  
This is the filename to be used for your stand-alone executable. Do
*not* include a path name, because this is simply the root name of the
.EXE file that is to be installed on the player's computer (you don't
specify a path here, because the player will choose the path when
installing the game). The install builder always creates a stand-alone
executable for your game, so this parameter is provided so that you can
choose its root filename. If you do not specify this parameter, the
install builder uses the root name of your .GAM file, with the ".GAM"
suffix replaced by ".EXE".

**ICON = *ico-filename***  
Uses *ico-filename* as the Windows Explorer desktop icon for the
stand-alone executable version of your game. The icon file that you
specify must contain a 32-by-32 pixel, 16-color large icon, and a
16-by-16 pixel, 16-color small icon; any other icon formats in the file
will be ignored. This works the same way as the `-icon` option for
`maketrx32`. If you don't specify this parameter, your stand-alone
executable will use the default HTML TADS interpreter icon.

**LICENSE = *license-text-filename***  
Specifies the name of a text file that contains license and copyright
information for your game. The license file will be copied onto the
player's computer after installing the game, in the same directory as
the rest of the game's files; in addition, the installer will display
the license file for the user to read during the installation process.
If you don't have a license file, simply omit this parameter. If you do
have a license file, but you don't want to show it to the user during
the installation process, include the license as an ordinary file with a
**FILE** parameter.

**PROGDIR = *default-program-directory***  
Specifies the default program directory that the installer will use to
install the game onto the player's computer. This is only a default
setting; the player will be able to select a different directory during
the installation process. If you don't specify this parameter, the
default value is used by appending your game's display name (set with
the **NAME** parameter) to "`C:\Program Files\`"; for example, if your
display name is "Deep Space Drifter", the default program directory will
be "`C:\Program Files\Deep Space Drifter`".

**STARTFOLDER = *default-startmenu-folder***  
Specifies the default Start Menu folder for your game's icon. The
installer will automatically create a folder in the player's Start Menu,
and put an icon for your game in the folder; this lets players start the
game easily using the Start Menu. This parameter is only a default;
players will be able to choose a different folder during the
installation process. By default, the Start Menu folder is the same as
your game's display name (set with the **NAME** parameter).

**FILE = *filename***  
Adds the given file to the install set; the file will be compressed and
added to the install archive contained in the output executable, and
will be installed on the player's computer in the program directory. The
*filename* parameter can include the path to the file, if the file isn't
in the current directory; the path is used to find the file, but is
ignored at install time, since the file will always be installed in the
player's program directory.

### Sample Install Script

The sample install script below creates an installer for *Deep Space
Drifter*.

        # DeepSetup.info - install script for Deep Space Drifter.
        # Run with a command like this:
        #
        #    mksetup DeepSetup.info DeepInst.EXE
        #

        # the display name of our game during installation
        name = Deep Space Drifter

        # our game file is in DEEP.GAM, and we'll build DEEP.EXE from it
        gam = Deep.GAM
        exe = Deep.EXE

        # use a custom icon for DEEP.EXE on the desktop
        icon = deep.ico

        # use *.DeepSave for our saved game files
        savext = DeepSave

        # display a license file during setup
        license = license.dsd

        # default installation directory
        progdir = C:\Program Files\Deep Space Drifter

        # default "Start" menu folder
        startfolder = Deep Space Drifter

        # include the game overview file and our current readme file
        file = deep.doc
        file = readme.dsd

        # include the TeX documentation as well
        file = deepdoc.tex
        file = deephint.tex
     
