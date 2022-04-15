console.log("Loaded popup script.")

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
	chrome.tabs.sendMessage(tabs[0].id, { greeting: "GET_DOM" }, function (response) {
		console.log(response)
		console.log(JSON.parse(response))
		document.getElementById("body").innerHTML = JSON.parse(response)
	});

	chrome.tabs.sendMessage(tabs[0].id, { wordToWrite: "" })
});
