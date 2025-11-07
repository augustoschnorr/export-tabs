async function showTabs() {
    //const tabs = await chrome.tabs.query({ currentWindow: true });
    const tabs = await browser.tabs.query({ currentWindow: true });
    const urls = tabs.map(tab => tab.url).join("\n");
    document.getElementById("urls").value = urls;
}

showTabs();
