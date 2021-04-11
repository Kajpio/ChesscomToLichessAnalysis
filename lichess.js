function paste(png) {

    var textArea = document.getElementById("form3-pgn");
    textArea.value = png

    var button = document.getElementsByClassName("form-control cmn-toggle")[0];
    button.click()

    var submitButton = document.getElementsByClassName("submit button text")[0];
    submitButton.click();
    console.log(button)

}

browser.runtime.onMessage.addListener(paste);