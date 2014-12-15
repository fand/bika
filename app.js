var FPS = 30;
var d = 1000 / 30.0;

$(function () {
  if (!Glsl.supported()) alert("WebGL is not supported.");
  var glsl = Glsl({
    canvas: document.getElementById("viewport"),
    fragment: document.getElementById("fragment").textContent,
    variables: {
      time: 0, // The time in ms
      mouse: [0, 0]
    },
    update: function (time) {
      this.set("time", time);
    }
  }).start();
});
