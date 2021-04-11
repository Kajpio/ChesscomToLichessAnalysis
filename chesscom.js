// document.body.style.border = "5px solid orange";
var button = document.createElement("button");
button.innerHTML = "Lichess Analysis";
button.className = "ui_v5-button-component ui_v5-button-basic"

function appendButton(count) {
  var buttons = document.getElementsByClassName("quick-analysis-buttons");
  if (buttons.length == 0) {
    console.log(count)
    setTimeout(function () { appendButton(count + 1) }, 100)
  } else {
    console.log(buttons);
    buttons[0].appendChild(button);
  }
}
appendButton(0)
// 3. Add event handler
button.addEventListener("click", function () {
  var movesWhite = document.getElementsByClassName("white node");
  var movesDark = document.getElementsByClassName("black node");
  var lengthWhite = movesWhite.length;
  var lengthBlack = movesDark.length;
  var length = Math.min(lengthBlack, lengthWhite);
  var pngString = "";
  for (var i = 0; i < length; i++) {
    const tempstring = `${i + 1}. ` + movesWhite.item(i).innerHTML + `    ${i + 1}... ` + movesDark.item(i).innerHTML + "    "
    pngString += tempstring;
    // console.log(movesWhite.item(i))
  }

  browser.runtime.sendMessage({ "url": "https://lichess.org/paste", "png": pngString });

});
