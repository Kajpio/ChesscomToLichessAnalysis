browser.runtime.onMessage.addListener(notify);


function onCreate(tab) {
    browser.tabs.sendMessage(tab.id, {"s":"salut"})
    console.log(`Created new tab: ${tab.id}`);
}
function onError(error){console.log(`Error: ${error}`);}

function notify(message) {
    console.log(message);
    var creating = browser.tabs.create({
        url:message.url,
        active:true
    });
    creating.then(onCreate, onError);
    
}

