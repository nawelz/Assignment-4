(function (window) {
  var helloSpeaker = {};
  var speakWord = "Hello";
  helloSpeaker.speak = function (name) {
    helloSpeaker.name = speakWord +" "+name;
    console.log(helloSpeaker.name);
  }

  window.helloSpeaker = helloSpeaker;

})(window);
   