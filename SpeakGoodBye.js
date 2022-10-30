(function (window) {
  var goodByeSpeaker = {};
  var speakWord = "Good Bye :)";
  goodByeSpeaker.speak = function (name1) {
    console.log(speakWord + " " + name1);
  };
  window.goodByeSpeaker = goodByeSpeaker;
})(window);
