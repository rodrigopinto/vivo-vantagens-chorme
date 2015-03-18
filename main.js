var scriptRemoveFBFeed = function() {
  chrome.tabs.executeScript(null, {
    file: "vivo-vantagens.js"
  });
}

scriptRemoveFBFeed();
chrome.tabs.onCreated.addListener(scriptRemoveFBFeed)
chrome.tabs.onUpdated.addListener(scriptRemoveFBFeed)
chrome.tabs.onActivated.addListener(scriptRemoveFBFeed)
