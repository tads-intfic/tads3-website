---
layout: docs
---


<img src="topbar.jpg" data-border="0" />





<a href="toc.html" class="nav">Table of Contents</a> \| Playing on the
Web  
<span class="navnp"><a href="banners.html" class="nav"><em>Prev:</em> The Banner Window
Display Model</a>    
<a href="webui.html" class="nav"><em>Next:</em> The Web UI</a>    
</span>





# Part VII: Playing on the Web

Starting in TADS 3.1, you can set your game up for on-line play. This
lets users play without installing anything on their machines. A
Web-based TADS game runs directly in a standard Web browser, with
nothing extra to install, not even add-ons or plug-ins. Web-based TADS
games require only the standard technologies built in to every modern
browser - HTML, CSS, and Javascript.

If you're authoring a game, and you want to make it playable on the Web,
the first step is to build the game using the Web UI rather than the
traditional TADS console system. If your game has a fairly standard
command-line user interface, you probably won't have to make any changes
to your programming style, since the new Adv3web library implements all
of the basic command-line features exactly as in the traditional Adv3.
If you use special UI effects beyond the the basic command-line
interface and basic HTML display styles, there are some differences that
you'll have to be aware of between the traditional console system and
the Web UI, as we'll see in the next chapter. The good news is that the
changes give you much more power and flexibility in creating your UI,
because the TADS Web UI design gives you full access to the browser's
HTML, CSS, Javascript, and DOM capabilities. This isn't an "HTML-like"
system like HTML TADS; your game's user interface truly runs in a
standard Web browser, and you have full and direct access to all browser
features.

Once you've created a Web UI-based game, deploying on the Web is simple:
just upload your game to the IF Archive and set up a link on
[IFDB](http://ifdb.tads.org). IFDB provides a "switchboard" that
automatically routes players to available servers. You don't have to
provide your own Web server; all you have to do is upload your completed
.t3 file. The details are in the chapter on Web Deployment.

If you have some Web server expertise and a Web server of your own, you
can use it to set up your own TADS server. You can set up a server for
the exclusive use of your own games, or you can join the IFDB
switchboard system mentioned above, to contribute more computing power
to the TADS "cloud". Web hosting is possible on a home machine, but it's
really most suitable for a hosted system where you have root access,
such as a co-located server or VPS (Virtual Private Server). The chapter
on Web Server Setup explains how to set this up.



[The Web UI](webui.html)  
[Deploying your Web UI game](webdeploy.html)  
[Setting up a custom TADS Web server](webhost.html)  





------------------------------------------------------------------------



*TADS 3 System Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \| Playing on the
Web  
<span class="navnp"><a href="banners.html" class="nav"><em>Prev:</em> The Banner Window
Display Model</a>    
<a href="webui.html" class="nav"><em>Next:</em> The Web UI</a>    
</span>


