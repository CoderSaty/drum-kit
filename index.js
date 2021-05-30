var a = document.querySelectorAll(".drum");
for (var i = 0; i < a.length; i++) {
  a[i].addEventListener("click", function () {
    var check = this.textContent;
    checkpressed(check);
  });
}
document.addEventListener("keydown", function (e) {
  checkpressed(e.key);
});
function checkpressed(check) {
  switch (check) {
    case "w":
    case "W":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
    case "A":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();

      break;
    case "s":
    case "S":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
    case "D":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
    case "J":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "k":
    case "K":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
    case "L":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    default:
      console.log(check);
  }
}
