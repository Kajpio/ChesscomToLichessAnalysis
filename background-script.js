browser.runtime.onMessage.addListener(notify);

function onCreate(tab, message) {
    setTimeout(function () {
        browser.tabs.sendMessage(tab.id, message.png)
    }, 500);
}
function onError(error) { console.log(`Error: ${error}`); }

function notify(message) {
    var creating = browser.tabs.create({
        url: message.url,
        active: true
    });
    creating.then(function (tab) { onCreate(tab, message) }, onError);
}

