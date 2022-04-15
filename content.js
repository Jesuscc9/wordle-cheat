console.log("Loaded content script.s")

chrome.runtime.onMessage.addListener(
	function (request, sender, sendResponse) {
		if (request.greeting == "GET_DOM") {
			sendResponse(
				JSON.stringify(
					document.getElementsByClassName("board grid grid-rows-6 relative gap-[5px] p-[10px] box-border max-w-[352.5px] max-h-[420px]")[0].outerHTML
				)
			)
		}
	})

const writeWord = (word) => {
	for (i = 0; i < word.length; i++) {
		keyButton(word[i]).click();
	}
	submitWord()
}

const keyButton = (key) => {
	const buttons = document.getElementsByClassName("flex-1 rounded uppercase font-bold p-1 sm:p-2 h-14 text-sm")

	for (let i = 0; i < buttons.length; i++) {
		if (buttons[i].ariaLabel === key) {
			return buttons[i]
		}
	}
}

const submitWord = () => {
	const buttons = document.getElementsByClassName("flex-1 rounded uppercase font-bold p-1 sm:p-2 h-14 text-sm")

	console.log({ buttons })
	for (let i = 0; i < buttons.length; i++) {
		if (buttons[i].innerText === "ENVIAR") {
			buttons[i].click()
			return
		}
	}
}