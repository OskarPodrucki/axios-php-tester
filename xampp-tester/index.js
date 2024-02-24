const axios = require("axios"); // node

// user input:
// const prompt = require("prompt-sync")();
// const dir = prompt("enter directory to folders")
// var folder = prompt("enter your folder name: ");
// var string = prompt("enter your string: ");

// auto input:
const fs = require("fs");
const dir = "C:/xampp/htdocs/phpTasks"; //directory to folders with php scripts
var folder = "php"; //only folder name without number
var string = "nosiema"; //string which in later being modified by php script

fs.readdir(dir, (err, files) => {
	for (var i = 1; i <= files.length; i++) {
		axios
			.get(`http://localhost/phpTasks/${folder}${i}/?string=${string}`)
			.then(function (response) {
				console.log(response.data);
			})
			.catch(function (error) {
				console.log(error);
			})
			.finally(function () {});
	}
});
