Help Topics \> [Table of Contents](wbcont.htm)  
  

![](../htmltads.jpg)  

# TADS Workbench Docking Windows

  
  
  

The debugger's stack, local variables, watch, and call history windows
are "docking" windows. This means that you can attach these windows to
an edge of the main debugger window; once docked, a window will stay
attached to its edge as you move and resize the main debugger window. In
addition, a docked window will always stay in front of a source window.

A dockable window has three possible states:

- Docked. In the docked state, the window is attached to an edge of the
  main debugger window. A docked window has a special kind of control
  bar; you can use this like an ordinary title bar to drag the window to
  a new location. Here's an example of a window docked at the bottom of
  the debugger main window:
  ![](dock1.jpg)
- Undocked. In this state, the window looks like an ordinary window,
  except that it has a slightly smaller caption bar. An undocked window
  floats above all of the other windows.
- Normal non-docking view. In this state, a window behaves the same way
  as a regular source file window, and source windows can overlap in
  front of the window.

You can switch between a dockable window's states in a number of ways.
Right-click on the title bar (or the control bar, if the window is
docked), and the window will pop up a menu that lets you select the
state:

![](dock2.jpg)

If the window is undocked, select the "Dock" item on the pop-up menu to
return the window to its most recent docking position. If the window is
docked, select the "Undock" item on the menu (or simply double-click on
the control bar) to undock the window. Check or un-check the "Docking
View" item to switch between a dockable window and a normal window.

If the window is docked, you can move the window to a new docking
position or undock the window by dragging its control bar to a new
location. Move the mouse near the edge of the debugger frame window to
dock at a new position along the frame. If you hold down the "Ctrl" key
(marked "Control" on some keyboards), the window will not dock even if
you move it near the edge of the frame window; this can be useful if you
want to leave the window undocked near the edge of the frame.

### Hints on Changing Docking Positions

If you want to change the docking position of a docked or undocked
window, click on the window's title bar (or the special control bar, if
it's already docked somewhere) and drag the window, the same way you
would move any ordinary window. Move the mouse cursor near the center of
the edge of the main frame window where you want to dock the window;
when you get close enough, the gray drag outline will jump into the
docking position. Remember, the docking position is based on the *mouse
cursor* position -- you must move the mouse cursor within a few pixels
of the edge of the frame window, near the center of the edge where you
want to dock the window.

If you're trying to dock a window on the left or right edge of the
frame, and it stubbornly wants to dock at the top or bottom edge, you
should try moving the mouse cursor more toward the center of the
vertical edge you're trying to dock against. The docking mechanism gives
priority to docking at the top or bottom, so sometimes you have to move
a little further away from the top or bottom edge in order to dock on
the left or right edge.

If your Windows color settings display the main debugger frame window's
background area in gray, it can sometimes be hard to see the gray drag
outline as you're moving a docking window. You can usually see the drag
outline if you look really carefully; if you'd prefer not to strain your
eyes, an easy trick is to maximize one of your source windows, so that
the whole background area is covered up by the background color of a
source window (which is usually white), then try dragging your docking
window.

### Sharing a Docking Edge

You can share a single edge of the frame window with two or more docking
windows. There are two ways of doing this.

**Splitting the edge:** You can put two or more docking windows
side-by-side along a docking edge. To do this, dock the first window,
then drag the second window over the first docked window. This will
split the edge in half, giving each window half of the available space.
You can then use the splitter bar between the two windows to reapportion
the space, if you'd like. You can drop additional windows to further
subdivide the space.

**Stacking:** You can stack docking windows, so that each window has the
entire width or height of the edge. To do this, dock the first window
along the edge. Then, drag the second window so that it's along the same
edge, just inside the frame from the first window. For example, dock a
window on the bottom edge, then drag another window so it's just *above*
the first window; the second window will dock along the bottom edge as
well, above (inside the frame from) the first docked window.  
  
  
  
  

------------------------------------------------------------------------

  
Help Topics \> [Table of Contents](wbcont.htm)  
  
Copyright ©1999, 2007 by Michael J. Roberts.
