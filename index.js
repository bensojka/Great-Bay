var inquirer = require('inquirer');
var item = require('./item')

var uncaught = require('uncaught');
uncaught.start();
uncaught.addListener(function (error) {
   console.log('Uncaught error or rejection: ', error.message);
});

var items = [];

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "great-bayDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

function uno() {
	inquirer.prompt([
		{
			type: 'list',
			choices: ['POST AN ITEM', 'BID ON AN ITEM'],
			name: 'style',
			message: 'POST AN ITEM or BID ON AN ITEM?'
		}
	]).then(function(response) {
		if ( response.style == 'POST AN ITEM' )
			post();
		else bid();
	});
}

function post() {
	inquirer.prompt([
		{
			type: 'list',
			choices: ['yes', 'no'],
			name: 'continue',
			message: 'Post an item?'
		}
	]).then(function(answer) {
		if ( answer.continue == 'yes' )
			startPost();
        else uno();
	});
}

function startPost() {
	inquirer.prompt([
		{
			name: 'name',
			message: 'What is the item name?'
		},
        {
			name: 'price',
			message: 'What is the minimum bid price?'
		}
	]).then(function(item) {
		items.push(item);
		post();
	});
}

function bid() {

}

uno();
