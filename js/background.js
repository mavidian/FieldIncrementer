var contextMenus = {};

contextMenus.createCounterString =
 chrome.contextMenus.create(
     {
         "title": "Increment Field Contents",
         "contexts": ["editable"]  // appears when R-clicked on html input element
     },
     function () {
         if (chrome.runtime.lastError) {
             console.error(chrome.runtime.lastError.message);
         }
     }
 );

 chrome.contextMenus.onClicked.addListener(contextMenuHandler);

 function contextMenuHandler(info, tab){

    if(info.menuItemId===contextMenus.createCounterString){
        chrome.tabs.executeScript({
            file: 'js/incrementActiveElement.js'
          });
    }
}
