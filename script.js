const fs = require("fs");
const path = require("path");

const removeLogFiles = () => {
	const directory = __dirname + "/logs";
    // Getting filenames in the directory
	fs.readdir(directory, (err, files) => {
		if (err) throw err;

		console.log("Removed files:", files);

        // Removing files from directory
		for (const file of files) {
			fs.unlink(path.join(directory, file), (err) => {
				if (err) throw err;
			});
		}
		fs.rmSync(directory, { recursive: true, force: true });
	});
};

const createLogFiles = () => {
	const directory = __dirname + "/logs";

	if (!fs.existsSync(directory)) {
		fs.mkdirSync(directory);
	}

	for (let i = 0; i < 10; i++) {
		fs.writeFile(
			`${directory}/log${i}.txt`,
			"Hello from log" + i,
			function (err) {
				if (err) throw err;
			}
		);
	}

	fs.readdir(directory, (err, files) => {
		if (err) throw err;
		console.log("Created files:", files);
	});
};

createLogFiles();
removeLogFiles();
