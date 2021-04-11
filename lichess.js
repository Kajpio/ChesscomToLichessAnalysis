function paste(png){
    var button = document.createElement("button");
    button.innerHTML = png.s;

    // 2. Append somewhere
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(button);
}

browser.runtime.onMessage.addListener(paste);

