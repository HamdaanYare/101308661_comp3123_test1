const resolvedPromise = () => {
	setTimeout(() => {
		console.log({ message: "This is the resolved message" });
	}, 500);
};

const rejectedPromise = () => {
	setTimeout(() => {
		try {
			throw new Error("Error: This promise is rejected!!!");
		} catch (err) {
			console.error(err.message);
		}
	}, 500);
};

resolvedPromise();
rejectedPromise();
