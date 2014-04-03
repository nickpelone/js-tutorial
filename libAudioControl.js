//libAudioControl html5 audio wrapper
// (c) nick pelone 2014 - npelone@unca.edu
// mit license

function AudioController(jQuerySelector){
    this.domObject = jQuerySelector[0];
    var status = 'paused';
    //import HTML5 audio 'play' functionality
    this.play = function () {
        this.domObject.play();
        this.status = "playing";
    };
    this.pause = function () {
        this.domObject.pause();
        this.status = "paused";
    };
    this.playing = function() {
        if(this.status === 'paused'){
            return false;
        }else if(this.status === 'playing')
            return true;
    };
    this.paused = function () {
        if(this.status === 'paused'){
            return true;
        }else if (this.status === 'playing'){
            return false;
        }
    };
}
