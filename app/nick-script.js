/* jshint browser:true, devel:true, jquery:true */
/* global AudioController */

//consider the first and last lines like the opening and closing <html> tags, but for javascript
(function () {
    //this is a thing you do to be a good person
    "use strict";
    //this line just makes the JavaScript console say Hello.
    console.log("Hello!");
    /*this sets up the player handler. We tell it a jQuery selector as the argument
    so it knows where the HTML audio is defined. In my HTML, it's in a audio tag with the class "player"
    and so it is selected through jQuery via the selector: $(".player")   (single quotes are fine too)*/
    var player = new AudioController($('.player'));
    /*this next bit setups up an event listener for when the player has finished loading the file
    and is ready to play (See HTML5 Audio/Video DOM Reference, http://www.w3schools.com/tags/ref_av_dom.asp).*/
    player.oncanplay = function () {
        alert("the song file is ready");
    };

    /*this sets up our click handler. To handle an event happening to a HTML object
    you select the object and then add the handler to it by:
    1. adding a period and then
    2. the event name
    3 .and then how you're going to handle it(this is almost always a function () { ... }
    In this example we handle the 'click' event, which is nice and generic.
    There are specific mouseup / mousedown events as well you can use.
    */
    $("#button").click(function () {
        /*We use an if statement to either play or pause the music depending on
        whether it's playing already or not. This information is tracked via the WebAudio API
        and can be queried.

        The entire list of things you can do to an audio tag are available here:
        http://www.w3schools.com/tags/ref_av_dom.asp


        If statements can be given a bit of shorthand. For true/false values, saying
        if(bla) means "if bla is true"
        and if(!bla) means "if bla is not true"

        If it makes more sense to explicitly check for true or false, then write
        if(player.playing() === true)
        or if(player.playing() === false), etc.

        Lastly, if a function "returns" something, you can use it in "mid code sentence"
        like, if a function existed that told the time, you could say

        console.log("The time is: " + getTheTime());
        and that would print the sentence

        The time is: <whatever the function returned>

        Simply put, () in JavaScript means "run this now and then keep running the rest of the program"
        */
        //In 'real' HTML5 paused is a property value (variable) not a function like I set it up earlier.
        //This way is probably better.
        if (!player.paused) {
            player.pause();
        } else {
            player.play();
        }
        /*after closing up the if statement, just make sure you close all your braces and parens.
        brackets will help you with this by highlighting what you're closing up when you type
        a closing symbol. JSHint will also help a ton.*/
    });
}());
