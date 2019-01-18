//step1*******hellospeaker
(function (window) {
    var speakWord = "Hello";
    var helloSpeaker = {};
    
    helloSpeaker.speak = function(names){
         helloSpeaker.names=names;
        console.log(speakWord + " " + helloSpeaker.names);
    };
    window.helloSpeaker=helloSpeaker;

})(window);
 