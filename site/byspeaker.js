//******byspeaker */
(function(window) {
    var speakWord = "GoodBye";
    var byeSpeaker = {};
  
    byeSpeaker.speak= function(names) {
        byeSpeaker.names=names;
        console.log( speakWord + " " + byeSpeaker.names);
  }
    window.byeSpeaker=byeSpeaker;
  }) (window); 