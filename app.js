$(function () {
  if (!Glsl.supported()) alert("WebGL is not supported.");
  var glsl = Glsl({
    canvas: document.getElementById("viewport"),
    fragment: document.getElementById("fragment").textContent,
    variables: {
      time: 0 // The time in ms
    },
    update: function (time) {
      this.set("time", time);
    }
  }).start();
});
