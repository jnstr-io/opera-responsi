chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
		var tablink = tabs[0].url;
		chrome.tabs.create( { "url": "http://respon.si/#/" + encodeURIComponent(tablink) } );
	});
});