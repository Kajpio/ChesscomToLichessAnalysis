document.body.style.border = "5px solid yellow";
var button = document.createElement("button");
button.innerHTML = "Do Something";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);


// 3. Add event handler
button.addEventListener ("click", function() {
  var movesWhite = document.getElementsByClassName("white node");
  var movesDark = document.getElementsByClassName("black node");
  var lengthWhite = movesWhite.length;
  var lengthBlack = movesDark.length;
  var length = Math.min(lengthBlack, lengthWhite);
  var pngString = "";
  for(var i = 0; i < length; i++){
    const tempstring = `${i+1}. ` + movesWhite.item(i).innerHTML + `    ${i+1}... ` + movesDark.item(i).innerHTML + "    "
    pngString += tempstring;
    // console.log(movesWhite.item(i))
  }
  console.log(pngString)
  
  browser.runtime.sendMessage({"url": "https://lichess.org/paste", "png":pngString});

});
