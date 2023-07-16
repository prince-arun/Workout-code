//When firing webpage two load events occurs.
//1.DomContentLoad
//It loads HTML and completed building DOM tree, yet it isn't loaded external resources like javascript, images, etc.
//2.load
//It fully loaded webpage including resources, and assets.
//When leaving webpage two unload events occurs.
//1.beforeunload
//It loads when user exiting from the current page,
//2.unloaded
//It loads when user exited from the page.

//1.DomContentLoad
//use this when we put code inside the head section, place all the javascript code inside the DomContentLoad.
addEventListener("DOMContentLoaded", (e) => {
  alert("The DOM is fully loaded");
});

addEventListener("load", (e) => {
  alert("page is fully loaded");
});

addEventListener("beforeunload", (e) => {
  e.preventDefault();
  e.returnValue = "";
});
