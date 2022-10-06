const lowerCaseWords = (inputArray) => {
	const promise = new Promise((resolve, reject) => {
		try {
			// Filter the array to get only strings
			const strings = inputArray.filter(
				(item) => typeof item === "string"
			);
			// Map strings to a new array where all strings are now lower cased.
			const lowerCasedWords = strings.map((string) =>
				string.toLowerCase()
			);
			resolve(lowerCasedWords);
		} catch (err) {
			console.log(err);
		}
	});

	promise.then((res) => console.log(res));
};



const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];
lowerCaseWords(mixedArray);
