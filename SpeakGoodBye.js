(function (window) {
  var byeSpeaker = {};
  var speakWord = "Good Bye";
  byeSpeaker.speak = function (name) {
    byeSpeaker.name=speakWord +" "+name;
    console.log(byeSpeaker.name);
  }

  window.byeSpeaker = byeSpeaker;

})(window);