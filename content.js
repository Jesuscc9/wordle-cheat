console.log("Loaded content script.")

chrome.runtime.onMessage.addListener(
	function (request, sender, sendResponse) {
		console.log({ request })
		if (request.greeting == "GET_DOM") {

			const wrapperDiv = document.getElementsByClassName("flex flex-col container w-full max-w-lg pb-2 px-[10px] mx-auto gap-2")[0]

			const rows = wrapperDiv.getElementsByTagName('div')

			const elements = []

			for (var i = 0; i < rows.length; i++) {
				const buttons = rows[i].getElementsByTagName('button')
				for (var j = 0; j < buttons.length; j++) {
					elements.push(buttons[j])
				}
			}

			elements[0].click()

			console.log({ dom: elements })
		}
	})